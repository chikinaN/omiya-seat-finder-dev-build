import {
  createTRPCRouter,
  adminProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import dayjs from 'dayjs';
import { WeeklySchedule } from "@prisma/client";

/**
 * 初期設定のデータを格納するようのエンドポイント
 */

type ScheduleType = {
  locationId: string;
  timeSlotId: string;
  courseId: string;
  dayOfWeek: number;
}

export const InitRouter = createTRPCRouter({
  setInitSchedule: protectedProcedure
    .mutation(async ({ ctx }) => {
      const locationType1 = await ctx.db.locationType.create({
        data: {
          label: "4席+2椅子",
          capacity: 6,
        }
      })
      const locationType2 = await ctx.db.locationType.create({
        data: {
          label: "六角机",
          capacity: 3,
        }
      })
      const locationType3 = await ctx.db.locationType.create({
        data: {
          label: "6席",
          capacity: 6,
        }
      })
      const locationType4 = await ctx.db.locationType.create({
        data: {
          label: "4席",
          capacity: 4,
        }
      })
      // const location1_1 = await ctx.db.location.create({
      //   data: {
      //     label: "1-1",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location1_2 = await ctx.db.location.create({
      //   data: {
      //     label: "1-2",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location1_3 = await ctx.db.location.create({
      //   data: {
      //     label: "1-3",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location1_4 = await ctx.db.location.create({
      //   data: {
      //     label: "1-4",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location1_5 = await ctx.db.location.create({
      //   data: {
      //     label: "1-5",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location1_6 = await ctx.db.location.create({
      //   data: {
      //     label: "1-6",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location1_7 = await ctx.db.location.create({
      //   data: {
      //     label: "1-7",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location1_8 = await ctx.db.location.create({
      //   data: {
      //     label: "1-8",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location1_9 = await ctx.db.location.create({
      //   data: {
      //     label: "1-9",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location1_10 = await ctx.db.location.create({
      //   data: {
      //     label: "1-10",
      //     locationTypeId: locationType2.id,
      //   }
      // })
      // const lcoation2_1 = await ctx.db.location.create({
      //   data: {
      //     label: "2-1",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const lcoation2_2 = await ctx.db.location.create({
      //   data: {
      //     label: "2-2",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const lcoation2_3 = await ctx.db.location.create({
      //   data: {
      //     label: "2-3",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const lcoation2_4 = await ctx.db.location.create({
      //   data: {
      //     label: "2-4",
      //     locationTypeId: locationType2.id,
      //   }
      // })
      // const lcoation2_5 = await ctx.db.location.create({
      //   data: {
      //     label: "2-5",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const lcoation2_6 = await ctx.db.location.create({
      //   data: {
      //     label: "2-6",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const lcoation2_7 = await ctx.db.location.create({
      //   data: {
      //     label: "2-7",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const lcoation2_8 = await ctx.db.location.create({
      //   data: {
      //     label: "2-8",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const lcoation2_9 = await ctx.db.location.create({
      //   data: {
      //     label: "2-9",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const lcoation2_10 = await ctx.db.location.create({
      //   data: {
      //     label: "2-10",
      //     locationTypeId: locationType2.id,
      //   }
      // })
      // const location3_1 = await ctx.db.location.create({
      //   data: {
      //     label: "3-1",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location3_2 = await ctx.db.location.create({
      //   data: {
      //     label: "3-2",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location3_3 = await ctx.db.location.create({
      //   data: {
      //     label: "3-3",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location3_4 = await ctx.db.location.create({
      //   data: {
      //     label: "3-4",
      //     locationTypeId: locationType2.id,
      //   }
      // })
      // const location3_5 = await ctx.db.location.create({
      //   data: {
      //     label: "3-5",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location3_6 = await ctx.db.location.create({
      //   data: {
      //     label: "3-6",
      //     locationTypeId: locationType1.id,
      //   }
      // })
      // const location3_7 = await ctx.db.location.create({
      //   data: {
      //     label: "3-7",
      //     locationTypeId: locationType2.id,
      //   }
      // })
      // const location3_8 = await ctx.db.location.create({
      //   data: {
      //     label: "3-8",
      //     locationTypeId: locationType2.id,
      //   }
      // })
      // const location4_1 = await ctx.db.location.create({
      //   data: {
      //     label: "4-1",
      //     locationTypeId: locationType2.id,
      //   }
      // })
      // const location4_2 = await ctx.db.location.create({
      //   data: {
      //     label: "4-2",
      //     locationTypeId: locationType2.id,
      //   }
      // })
      // const location4_3 = await ctx.db.location.create({
      //   data: {
      //     label: "4-3",
      //     locationTypeId: locationType2.id,
      //   }
      // })
      // const location4_4 = await ctx.db.location.create({
      //   data: {
      //     label: "4-4",
      //     locationTypeId: locationType2.id,
      //   }
      // })
      // const location4_5 = await ctx.db.location.create({
      //   data: {
      //     label: "4-5",
      //     locationTypeId: locationType2.id,
      //   }
      // })
      // const location5_1 = await ctx.db.location.create({
      //   data: {
      //     label: "マーキュリー1",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location5_2 = await ctx.db.location.create({
      //   data: {
      //     label: "マーキュリー2",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location5_3 = await ctx.db.location.create({
      //   data: {
      //     label: "マーキュリー3",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location5_4 = await ctx.db.location.create({
      //   data: {
      //     label: "マーキュリー4",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location5_5 = await ctx.db.location.create({
      //   data: {
      //     label: "マーキュリー5",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location5_6 = await ctx.db.location.create({
      //   data: {
      //     label: "マーキュリー6",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location5_7 = await ctx.db.location.create({
      //   data: {
      //     label: "マーキュリー7",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location5_8 = await ctx.db.location.create({
      //   data: {
      //     label: "マーキュリー8",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location5_9 = await ctx.db.location.create({
      //   data: {
      //     label: "マーキュリー9",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location5_10 = await ctx.db.location.create({
      //   data: {
      //     label: "マーキュリー10",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location6_1 = await ctx.db.location.create({
      //   data: {
      //     label: "6階メイン",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location7_1 = await ctx.db.location.create({
      //   data: {
      //     label: "6階小部屋1",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      // const location8 = await ctx.db.location.create({
      //   data: {
      //     label: "面談室1",
      //     locationTypeId: locationType4.id,
      //   }
      // })
      // const location9 = await ctx.db.location.create({
      //   data: {
      //     label: "面談室2",
      //     locationTypeId: locationType4.id,
      //   }
      // })
      // const location10 = await ctx.db.location.create({
      //   data: {
      //     label: "面談室3",
      //     locationTypeId: locationType3.id,
      //   }
      // })
      const location1 = await ctx.db.location.create({
        data: {
          label: "8階左",
          locationTypeId: locationType3.id,
        }
      })
      const location2 = await ctx.db.location.create({
        data: {
          label: "8階中央",
          locationTypeId: locationType3.id,
        }
      })
      const location3 = await ctx.db.location.create({
        data: {
          label: "8階右",
          locationTypeId: locationType3.id,
        }
      })
      const location4 = await ctx.db.location.create({
        data: {
          label: "マーキュリー",
          locationTypeId: locationType3.id,
        }
      })
      const location5 = await ctx.db.location.create({
        data: {
          label: "6階メイン",
          locationTypeId: locationType3.id,
        }
      })
      const location6 = await ctx.db.location.create({
        data: {
          label: "6階小部屋",
          locationTypeId: locationType3.id,
        }
      })
      const location7 = await ctx.db.location.create({
        data: {
          label: "面談室1",
          locationTypeId: locationType3.id,
        }
      })
      const location8 = await ctx.db.location.create({
        data: {
          label: "面談室2",
          locationTypeId: locationType3.id,
        }
      })
      const location9 = await ctx.db.location.create({
        data: {
          label: "面談室3",
          locationTypeId: locationType3.id,
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
      
      // 月曜1限
      // const schedule1_1_1 = await ctx.db.weeklySchedule.create()
      async function postSchedule(schedules: ScheduleType[]) {
        const ScheduleColumns: WeeklySchedule[] = []
        for (const schedule of schedules) {
          if (!ScheduleColumns.some((column) => column.timeSlotId === schedule.timeSlotId && column.dayOfWeek === schedule.dayOfWeek)) {
            const weeklySchedule = await ctx.db.weeklySchedule.create({
              data: {
                courseId: schedule.courseId,
                timeSlotId: schedule.timeSlotId,
                dayOfWeek: schedule.dayOfWeek,
              }
            })
            ScheduleColumns.push(weeklySchedule)
            await ctx.db.locationOnSchedule.create({
              data: {
                locationId: schedule.locationId,
                scheduleId: weeklySchedule.id
              }
            })
          } else {
            const column = ScheduleColumns.find((column) => column.timeSlotId === schedule.timeSlotId && column.dayOfWeek === schedule.dayOfWeek)
            if (!column) {
              return;
            }
            await ctx.db.locationOnSchedule.create({
              data: {
                locationId: schedule.locationId,
                scheduleId: column.id
              }
            })
          }
        }
      }

      const scheduleData: ScheduleType[] = [
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
            courseId: corse10.id,
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
          {
            locationId: location4.id,
            timeSlotId: timeSlot5.id,
            courseId: corse22.id,
            dayOfWeek: 5
          },
          {
            locationId: location8.id,
            timeSlotId: timeSlot5.id,
            courseId: corse23.id,
            dayOfWeek: 5
          },
          
          // 金曜6限
          {
            locationId: location1.id,
            timeSlotId: timeSlot6.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
          {
            locationId: location2.id,
            timeSlotId: timeSlot6.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
          {
            locationId: location3.id,
            timeSlotId: timeSlot6.id,
            courseId: corse2.id,
            dayOfWeek: 5
          },
        ]
        postSchedule(scheduleData)
    })
})
