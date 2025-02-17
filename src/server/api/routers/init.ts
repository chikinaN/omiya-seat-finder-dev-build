import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import dayjs from 'dayjs';

/**
 * 初期設定のデータを格納するようのエンドポイント
 */

export const InitRouter = createTRPCRouter({
  setInitSchedule: publicProcedure
    .mutation(async ({ ctx }) => {
      const location1 = await ctx.db.location.create({
        data: {
          label: "8階メイン左",
          capacity: 54,
        }
      })
      const location2 = await ctx.db.location.create({
        data: {
          label: "8階メイン中央",
          capacity: 54,
        }
      })
      const location3 = await ctx.db.location.create({
        data: {
          label: "8階メイン右",
          capacity: 54,
        }
      })
      const location4 = await ctx.db.location.create({
        data: {
          label: "マーキュリー",
          capacity: 60,
        }
      })
      const location5 = await ctx.db.location.create({
        data: {
          label: "6階メイン",
          capacity: 54,
        }
      })
      const location6 = await ctx.db.location.create({
        data: {
          label: "6階小部屋",
          capacity: 30,
        }
      })
      const location7 = await ctx.db.location.create({
        data: {
          label: "面談室1",
          capacity: 4,
        }
      })
      const location8 = await ctx.db.location.create({
        data: {
          label: "面談室2",
          capacity: 4,
        }
      })
      const location9 = await ctx.db.location.create({
        data: {
          label: "面談室3",
          capacity: 8,
        }
      })
      const timeSlot1 = await ctx.db.timeSlot.create({
        data: {
          label: "1限",
          start: dayjs("2025-01-01T09:45:00.000Z").toISOString(),
          end: dayjs("2025-01-01T10:35:00.000Z").toISOString(),
        }
      })
      const timeSlot2 = await ctx.db.timeSlot.create({
        data: {
          label: "2限",
          start: dayjs("2025-01-01T10:45:00.000Z").toISOString(),
          end: dayjs("2025-01-01T11:35:00.000Z").toISOString(),
        }
      })
      const timeSlot3 = await ctx.db.timeSlot.create({
        data: {
          label: "3限",
          start: dayjs("2025-01-01T11:45:00.000Z").toISOString(),
          end: dayjs("2025-01-01T12:35:00.000Z").toISOString(),
        }
      })
      await ctx.db.timeSlot.create({
        data: {
          label: "昼休み",
          start: dayjs("2025-01-01T12:35:00.000Z").toISOString(),
          end: dayjs("2025-01-01T13:15:00.000Z").toISOString(),
        }
      })
      const timeSlot4 = await ctx.db.timeSlot.create({
        data: {
          label: "4限",
          start: dayjs("2025-01-01T13:15:00.000Z").toISOString(),
          end: dayjs("2025-01-01T14:05:00.000Z").toISOString(),
        }
      })
      const timeSlot5 = await ctx.db.timeSlot.create({
        data: {
          label: "5限",
          start: dayjs("2025-01-01T14:15:00.000Z").toISOString(),
          end: dayjs("2025-01-01T15:05:00.000Z").toISOString(),
        }
      })
      const timeSlot6 = await ctx.db.timeSlot.create({
        data: {
          label: "6限",
          start: dayjs("2025-01-01T15:15:00.000Z").toISOString(),
          end: dayjs("2025-01-01T16:05:00.000Z").toISOString(),
        }
      })
      const corse1 = await ctx.db.course.create({
        data: {
          name: "サークル活動",
          description: "サークル活動です",
          themeColor: "#FFFFFF"
        }
      })
      const corse2 = await ctx.db.course.create({
        data: {
          name: "自習",
          description: "自習です",
          themeColor: "#FFFFFF"
        }
      })
      const corse3 = await ctx.db.course.create({
        data: {
          name: "エキスパートプログラム",
          description: "プロジェクトNのαです",
          themeColor: "#FFFFFF"
        }
      })
      const corse4 = await ctx.db.course.create({
        data: {
          name: "特別自習室",
          description: "特別自習室です",
          themeColor: "#FFFFFF"
        }
      })
      const corse5 = await ctx.db.course.create({
        data: {
          name: "進路授業(2年生)",
          description: "進路授業です",
          themeColor: "#FFFFFF"
        }
      })
      const corse6 = await ctx.db.course.create({
        data: {
          name: "進路授業(1年生)",
          description: "進路授業です",
          themeColor: "#FFFFFF"
        }
      })
      const corse7 = await ctx.db.course.create({
        data: {
          name: "進路授業(3年生)",
          description: "進路授業です",
          themeColor: "#FFFFFF"
        }
      })
      const corse8 = await ctx.db.course.create({
        data: {
          name: "リベラルアーツ基礎(人文科学)",
          description: "リベラルアーツです",
          themeColor: "#FFFFFF"
        }
      })
      const corse9 = await ctx.db.course.create({
        data: {
          name: "リベラルアーツ基礎(社会科学)",
          description: "リベラルアーツです",
          themeColor: "#FFFFFF"
        }
      })
      const corse10 = await ctx.db.course.create({
        data: {
          name: "リベラルアーツ基礎(自然科学)",
          description: "リベラルアーツです",
          themeColor: "#FFFFFF"
        }
      })
      const corse11 = await ctx.db.course.create({
        data: {
          name: "クリエイティブ検定",
          description: "クリエイティブ検定です",
          themeColor: "#FFFFFF"
        }
      })
      const corse12 = await ctx.db.course.create({
        data: {
          name: "プログラミング自習",
          description: "プログラミング自習です",
          themeColor: "#FFFFFF"
        }
      })
      const corse13 = await ctx.db.course.create({
        data: {
          name: "実践英語",
          description: "実践英語です",
          themeColor: "#FFFFFF"
        }
      })
      const corse14 = await ctx.db.course.create({
        data: {
          name: "一般教養(数学)",
          description: "一般教養です",
          themeColor: "#FFFFFF"
        }
      })
      const corse15 = await ctx.db.course.create({
        data: {
          name: "プロNα",
          description: "プロジェクトNのαです",
          themeColor: "#FFFFFF"
        }
      })
      const corse16 = await ctx.db.course.create({
        data: {
          name: "プロNβ",
          description: "プロジェクトNのβです",
          themeColor: "#FFFFFF"
        }
      })
      const corse17 = await ctx.db.course.create({
        data: {
          name: "総合型選抜対策(標準)",
          description: "進路授業です",
          themeColor: "#FFFFFF"
        }
      })
      const corse18 = await ctx.db.course.create({
        data: {
          name: "統計検定対策",
          description: "統計検定対策です",
          themeColor: "#FFFFFF"
        }
      })
      const corse19 = await ctx.db.course.create({
        data: {
          name: "中国語中級",
          description: "中国語中級です",
          themeColor: "#FFFFFF"
        }
      })
      const corse20 = await ctx.db.course.create({
        data: {
          name: "ゼミナール",
          description: "ゼミナールです",
          themeColor: "#FFFFFF"
        }
      })
      const corse21 = await ctx.db.course.create({
        data: {
          name: "目標設定(1,2年生)",
          description: "目標設定です",
          themeColor: "#FFFFFF"
        }
      })
      const corse22 = await ctx.db.course.create({
        data: {
          name: "英検対策2級",
          description: "英検対策です",
          themeColor: "#FFFFFF"
        }
      })
      const corse23 = await ctx.db.course.create({
        data: {
          name: "英語討論",
          description: "英語討論です",
          themeColor: "#FFFFFF"
        }
      })

      await ctx.db.weeklySchedule.createMany({
        data: [
          // 月曜1限
          {
            locationId: location1.id,
            timeSlotId: timeSlot1.id,
            courseId: corse1.id,
            dayOfWeek: 1
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot1.id,
            courseId: corse1.id,
            dayOfWeek: 1
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot1.id,
            courseId: corse1.id,
            dayOfWeek: 1
          },
          {
            locationId: location5.id,
            timeSlotId: timeSlot1.id,
            courseId: corse2.id,
            dayOfWeek: 1
          },
          {
            locationId: location9.id,
            timeSlotId: timeSlot1.id,
            courseId: corse3.id,
            dayOfWeek: 1
          },
          {
            locationId: location6.id,
            timeSlotId: timeSlot1.id,
            courseId: corse4.id,
            dayOfWeek: 1
          },

          // 月曜2限
          {
            locationId: location1.id,
            timeSlotId: timeSlot2.id,
            courseId: corse1.id,
            dayOfWeek: 1
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot2.id,
            courseId: corse1.id,
            dayOfWeek: 1
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot2.id,
            courseId: corse1.id,
            dayOfWeek: 1
          },
          {
            locationId: location5.id,
            timeSlotId: timeSlot2.id,
            courseId: corse2.id,
            dayOfWeek: 1
          },
          {
            locationId: location9.id,
            timeSlotId: timeSlot2.id,
            courseId: corse3.id,
            dayOfWeek: 1
          },
          {
            locationId: location6.id,
            timeSlotId: timeSlot2.id,
            courseId: corse4.id,
            dayOfWeek: 1
          },

          // 月曜3限
          {
            locationId: location1.id,
            timeSlotId: timeSlot3.id,
            courseId: corse2.id,
            dayOfWeek: 1
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot3.id,
            courseId: corse2.id,
            dayOfWeek: 1
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot3.id,
            courseId: corse2.id,
            dayOfWeek: 1
          },
          {
            locationId: location4.id,
            timeSlotId: timeSlot3.id,
            courseId: corse5.id,
            dayOfWeek: 1
          },
          {
            locationId: location5.id,
            timeSlotId: timeSlot3.id,
            courseId: corse6.id,
            dayOfWeek: 1
          },
          {
            locationId: location6.id,
            timeSlotId: timeSlot3.id,
            courseId: corse4.id,
            dayOfWeek: 1
          },

          // 月曜4限
          {
            locationId: location1.id,
            timeSlotId: timeSlot4.id,
            courseId: corse2.id,
            dayOfWeek: 1
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot4.id,
            courseId: corse2.id,
            dayOfWeek: 1
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot4.id,
            courseId: corse2.id,
            dayOfWeek: 1
          },
          {
            locationId: location4.id,
            timeSlotId: timeSlot4.id,
            courseId: corse8.id,
            dayOfWeek: 1
          },
          {
            locationId: location5.id,
            timeSlotId: timeSlot4.id,
            courseId: corse4.id,
            dayOfWeek: 1
          },
          {
            locationId: location6.id,
            timeSlotId: timeSlot4.id,
            courseId: corse4.id,
            dayOfWeek: 1
          },

          // 月曜5限
          {
            locationId: location1.id,
            timeSlotId: timeSlot5.id,
            courseId: corse12.id,
            dayOfWeek: 1
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot5.id,
            courseId: corse12.id,
            dayOfWeek: 1
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot5.id,
            courseId: corse12.id,
            dayOfWeek: 1
          },
          {
            locationId: location4.id,
            timeSlotId: timeSlot5.id,
            courseId: corse11.id,
            dayOfWeek: 1
          },
          {
            locationId: location9.id,
            timeSlotId: timeSlot5.id,
            courseId: corse13.id,
            dayOfWeek: 1
          },
          {
            locationId: location5.id,
            timeSlotId: timeSlot5.id,
            courseId: corse4.id,
            dayOfWeek: 1
          },
          {
            locationId: location6.id,
            timeSlotId: timeSlot5.id,
            courseId: corse4.id,
            dayOfWeek: 1
          },

          // 月曜6限
          {
            locationId: location1.id,
            timeSlotId: timeSlot6.id,
            courseId: corse2.id,
            dayOfWeek: 1
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot6.id,
            courseId: corse2.id,
            dayOfWeek: 1
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot6.id,
            courseId: corse2.id,
            dayOfWeek: 1
          },
          {
            locationId: location4.id,
            timeSlotId: timeSlot6.id,
            courseId: corse14.id,
            dayOfWeek: 1
          },
          {
            locationId: location5.id,
            timeSlotId: timeSlot6.id,
            courseId: corse4.id,
            dayOfWeek: 1
          },
          {
            locationId: location6.id,
            timeSlotId: timeSlot6.id,
            courseId: corse4.id,
            dayOfWeek: 1
          },

          // 水曜1限
          {
            locationId: location1.id,
            timeSlotId: timeSlot1.id,
            courseId: corse15.id,
            dayOfWeek: 3
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot1.id,
            courseId: corse15.id,
            dayOfWeek: 3
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot1.id,
            courseId: corse15.id,
            dayOfWeek: 3
          },
          {
            locationId: location4.id,
            timeSlotId: timeSlot1.id,
            courseId: corse16.id,
            dayOfWeek: 3
          },
          {
            locationId: location5.id,
            timeSlotId: timeSlot1.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location6.id,
            timeSlotId: timeSlot1.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },

          // 水曜2限
          {
            locationId: location1.id,
            timeSlotId: timeSlot2.id,
            courseId: corse15.id,
            dayOfWeek: 3
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot2.id,
            courseId: corse15.id,
            dayOfWeek: 3
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot2.id,
            courseId: corse15.id,
            dayOfWeek: 3
          },
          {
            locationId: location4.id,
            timeSlotId: timeSlot2.id,
            courseId: corse16.id,
            dayOfWeek: 3
          },
          {
            locationId: location5.id,
            timeSlotId: timeSlot2.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location6.id,
            timeSlotId: timeSlot2.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          
          // 水曜3限
          {
            locationId: location4.id,
            timeSlotId: timeSlot3.id,
            courseId: corse17.id,
            dayOfWeek: 3
          },
          {
            locationId: location1.id,
            timeSlotId: timeSlot3.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot3.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot3.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },

          // 水曜4限
          {
            locationId: location4.id,
            timeSlotId: timeSlot4.id,
            courseId: corse9.id,
            dayOfWeek: 3
          },
          {
            locationId: location1.id,
            timeSlotId: timeSlot4.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot4.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot4.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },

          // 水曜5限
          {
            locationId: location4.id,
            timeSlotId: timeSlot5.id,
            courseId: corse18.id,
            dayOfWeek: 3
          },
          {
            locationId: location1.id,
            timeSlotId: timeSlot5.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot5.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot5.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location8.id,
            timeSlotId: timeSlot5.id,
            courseId: corse19.id,
            dayOfWeek: 3
          },

          // 水曜6限
          {
            locationId: location4.id,
            timeSlotId: timeSlot6.id,
            courseId: corse20.id,
            dayOfWeek: 3
          },
          {
            locationId: location1.id,
            timeSlotId: timeSlot6.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot6.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot6.id,
            courseId: corse2.id,
            dayOfWeek: 3
          },
          {
            locationId: location8.id,
            timeSlotId: timeSlot6.id,
            courseId: corse19.id,
            dayOfWeek: 3
          },
          
          // 金曜1限
          {
            locationId: location1.id,
            timeSlotId: timeSlot1.id,
            courseId: corse15.id,
            dayOfWeek: 5
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot1.id,
            courseId: corse15.id,
            dayOfWeek: 5
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot1.id,
            courseId: corse15.id,
            dayOfWeek: 5
          },
          {
            locationId: location4.id,
            timeSlotId: timeSlot1.id,
            courseId: corse16.id,
            dayOfWeek: 5
          },
          {
            locationId: location5.id,
            timeSlotId: timeSlot1.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
          {
            locationId: location6.id,
            timeSlotId: timeSlot1.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },

          // 金曜2限
          {
            locationId: location1.id,
            timeSlotId: timeSlot2.id,
            courseId: corse15.id,
            dayOfWeek: 5
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot2.id,
            courseId: corse15.id,
            dayOfWeek: 5
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot2.id,
            courseId: corse15.id,
            dayOfWeek: 5
          },
          {
            locationId: location4.id,
            timeSlotId: timeSlot2.id,
            courseId: corse16.id,
            dayOfWeek: 5
          },
          {
            locationId: location5.id,
            timeSlotId: timeSlot2.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
          {
            locationId: location6.id,
            timeSlotId: timeSlot2.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
          
          // 金曜3限
          {
            locationId: location1.id,
            timeSlotId: timeSlot3.id,
            courseId: corse21.id,
            dayOfWeek: 5
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot3.id,
            courseId: corse21.id,
            dayOfWeek: 5
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot3.id,
            courseId: corse21.id,
            dayOfWeek: 5
          },
          {
            locationId: location4.id,
            timeSlotId: timeSlot3.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },

          // 金曜4限
          {
            locationId: location1.id,
            timeSlotId: timeSlot4.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot4.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot4.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
          {
            locationId: location4.id,
            timeSlotId: timeSlot4.id,
            courseId: corse22.id,
            dayOfWeek: 5
          },
          {
            locationId: location8.id,
            timeSlotId: timeSlot4.id,
            courseId: corse23.id,
            dayOfWeek: 5
          },
          
          // 金曜5限
          {
            locationId: location1.id,
            timeSlotId: timeSlot5.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot5.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot5.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
        ]
      });
    })
})
