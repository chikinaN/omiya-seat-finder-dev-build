import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

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

      return user ?? null;
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
                  location: true
                }
              },
            }
          },
        }
      })

      return user ?? null;
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
