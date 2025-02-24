"use server";
import { redirect } from "next/navigation";
import { api } from "~/trpc/server";

type Course = {
  dayOfWeek: number,
  timeSlot: number,
  course: string
}

export async function postSchedule(formData: FormData) {
  console.log("postSchedule");
  const attendances = [1, 3, 5]
  const dayOfWeek = Number(formData.get("dayOfWeek"))
  if (!attendances.includes(dayOfWeek)) {
    redirect("/")
  }
  const courses: Course[]  = []
  attendances.forEach((attendance) => {
    for (let i = 0; i < 6; i++) {
      const course = formData.get(`${attendance}_${i + 1}`) as string
      if (course) {
        courses.push({
          dayOfWeek: attendance,
          timeSlot: i + 1,
          course
        })
      }
    }
  })
  await api.schedule.setUserSchedules(courses)
  redirect("/");
}