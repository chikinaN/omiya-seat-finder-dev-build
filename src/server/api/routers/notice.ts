import { z } from "zod";
import dayjs from 'dayjs';

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

/**
 * 初期設定のデータを格納するようのエンドポイント
 */

export const NoticeRouter = createTRPCRouter({
  getShortNotice: protectedProcedure
    .mutation(async ({ ctx }) => {
      const now = dayjs();
      const notices = await ctx.db.gloabalNotification.findMany({
        where: {
          createdAt: {
            gte: now.startOf('day').toISOString(),
            lt: now.endOf('day').toISOString()
          }
        },
        select: {
          id: true,
          title: true,
          createdAt: true,
        }
      })

      return notices;
    }),
  getNotice: protectedProcedure
    .mutation(async ({ ctx }) => {
      const now = dayjs();
      const notices = await ctx.db.gloabalNotification.findMany({
        where: {
          createdAt: {
            gte: now.startOf('day').toISOString(),
            lt: now.endOf('day').toISOString()
          }
        },
      })

      return notices;
    }),
  getNoticeById: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ input, ctx }) => {
      const notice = await ctx.db.gloabalNotification.findUnique({
        where: { id: input.id }
      })

      return notice;
    }),

  createNotice: protectedProcedure
    .input(z.object({
      title: z.string().min(1),
      body: z.string().min(1),
    }))
    .mutation(async ({ input, ctx }) => {
      const notice = await ctx.db.gloabalNotification.create({
        data: {
          title: input.title,
          body: input.body,
        }
      })

      return notice;
    }),
})