import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { studentIdRegex } from "~/types/student";

export const ScheduleRouter = createTRPCRouter({
  getUserSchedule: protectedProcedure
    .query(async ({ ctx }) => {
      const user = await ctx.db.user.findFirst({
        where: { id: ctx.session.user.id },
        include: {
          userSchedules: true,
        }
      })
      if (!user) {
        return null;
      }

      return user.userSchedules
    }),
  getDefaultSchedule: protectedProcedure
    .input(z.object({ schoolDays: z.union([z.literal(1), z.literal(3), z.literal(5)]) }))
    .query(async ({ ctx, input }) => {
      const dayOfweeks = [1, 3, 5]
      const corses = []
      for (const dayOfWeek of dayOfweeks) {
        for (let i = 0; i < 6; i++) {
          const timeSlot = await ctx.db.timeSlot.findFirst({
            where: {
              label: `${i + 1}限`,
            }
          })
          if (!timeSlot) {
            throw new Error("timeSlot not found")
          }
          const corse = await ctx.db.weeklySchedule.findFirst({
            where: {
              dayOfWeek: dayOfWeek,
              timeSlotId: timeSlot.id,
            },
            include: {
              course: true,
              timeSlot: true,
              locations: true,
            }
          })
          corses.push(corse)
        }
      }
      return corses.filter((corse) => corse !== null)
    }),
  setUserSchedules: protectedProcedure
    .input(z.array(z.object({
      dayOfWeek: z.number().min(1).max(7),
      timeSlot: z.number().min(1).max(6),
      course: z.string()
    })))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { id: ctx.session.user.id }
      })
      if (!user) {
        throw new Error("user not found")
      }
      const userSchedules = []
      for (const data in input) {
        const course = await ctx.db.course.findFirst({
          where: { name: input[data]?.course }
        })
        if (!course) {
          throw new Error("course not found")
        }
        const timeSlot = await ctx.db.timeSlot.findFirst({
          where: { label: `${input[data]?.timeSlot}限` }
        })
        if (!timeSlot) {
          throw new Error("timeSlot not found")
        }
        const schedule = await ctx.db.weeklySchedule.findFirst({
          where: {
            dayOfWeek: input[data]?.dayOfWeek,
            timeSlotId: timeSlot.id,
            courseId: course.id
          }
        })
        if (!schedule) {
          throw new Error("schedule not found")
        }
        const userSchedule = await ctx.db.userSchedule.create({
          data: {
            userId: user.id,
            scheduleId: schedule.id
          }
        })
        userSchedules.push(userSchedule)
      }
      return userSchedules
    })
})