import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { studentIdRegex } from "~/types/student";

export const UserRouter = createTRPCRouter({
  getUser: protectedProcedure
    .query(async ({ ctx }) => {
      const user = await ctx.db.user.findFirst({
        where: { id: ctx.session.user.id },
        include: {
          bookmarks: true,
          userSchedules: true,
        }
      })
      const mail = ctx.session.user.email;
      if (!user || !mail) {
        return null;
      }

      return user
    }),
  setStudentId: protectedProcedure
    .input(z.object({ studentId: z
      .string()
      .length(10)
      .regex(studentIdRegex, { message: "学籍番号としては正しくありません"})
     }))
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.db.user.findFirst({
        where: { id: ctx.session.user.id },
      })
      if (!user) {
        return null;
      }
      return await ctx.db.user.update({
        where: { id: user.id },
        data: {
          studentId: input.studentId,
        }
      })
    }),
  getTargetUser: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.db.user.findFirst({
        where: {
          name: input.name,
        },
        include: {
          userSchedules: {
            include: {
              schedule: {
                include: {
                  locations: true,
                }
              },
            }
          },
        }
      })

      return user ?? null;
    }),
  getBookmarks: protectedProcedure.
    query(async ({ ctx }) => {
      const user = await ctx.db.user.findFirst({
        where: { id: ctx.session.user.id },
        include: {
          bookmarks: true,
        }
      })
      if (!user) {
        return [];
      }
      const bookmarks = []
      for (const bookmark of user.bookmarks) {
        const targetUser = await ctx.db.user.findFirst({
          where: { id: bookmark.targetId },
        })
        if (targetUser) {
          bookmarks.push(targetUser)
        }
      }

      return bookmarks;
    }),
  setBookmark: protectedProcedure
    .input(z.object({ target: z.string().min(1) }))
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.db.user.findFirst({
        where: { id: ctx.session.user.id },
        include: {
          bookmarks: true,
        }
      })
      const targetUser = await ctx.db.user.findFirst({
        where: { name: input.target },
      })
      if (
        !user ||
        !targetUser ||
        targetUser.id === user.id ||
        user.bookmarks.some(bookmark => bookmark.id === targetUser.id)
      ){
        return null;
      }

      return await ctx.db.bookmark.create({
        data: {
          userId: user.id,
          targetId: targetUser.id,
        }
      })
    }),
  removeBookmark: protectedProcedure
    .input(z.object({ target: z.string().min(1) }))
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.db.user.findFirst({
        where: { id: ctx.session.user.id },
        include: {
          bookmarks: true,
        }
      })
      const targetUser = await ctx.db.user.findFirst({
        where: { name: input.target },
      })
      if (
        !user ||
        !targetUser ||
        targetUser.id === user.id ||
        !(user.bookmarks.some(bookmark => bookmark.id === targetUser.id))
      ){
        return null;
      }

      return await ctx.db.bookmark.delete({
        where: {
          userId_targetId: {
            userId: user.id,
            targetId: targetUser.id,
          }
        }
      })
    }),
})
