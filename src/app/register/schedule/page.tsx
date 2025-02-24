import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { postSchedule } from "./postSchedule";
import { studentIdRegex } from "~/types/student";

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/")
  }
  const user = await api.user.getUser();
  console.log(session, user);
  if (!user) {
    redirect("/")
  }
  const defaultSchedule = await api.schedule.getDefaultSchedule({ schoolDays: 3 });

  return (
    <HydrateClient>
      <main className="p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 mt-6">学籍情報 / 授業登録</h1>
        <form action={postSchedule} className="w-2/3">
          <input type="hidden" name={"dayOfWeek"} defaultValue={3} />
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">時間</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">月曜日</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">水曜日</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金曜日</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.from({ length: 6 }, (_, i) =>{
                const timeSlot = i + 1
                const schedule = defaultSchedule.filter((s) => s.timeSlot.label === `${timeSlot}限`);
                const dayOfWeek = {
                  monday: schedule.find((s) => s.dayOfWeek === 1),
                  wednesday: schedule.find((s) => s.dayOfWeek === 3),
                  friday: schedule.find((s) => s.dayOfWeek === 5),
                }
                return (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap">{timeSlot}限</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="text" name={`1_${timeSlot}`} defaultValue={dayOfWeek.monday?.course.name?? ""} className="border border-gray-300 rounded p-2 w-full" readOnly />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="text" name={`3_${timeSlot}`} defaultValue={dayOfWeek.wednesday?.course.name?? ""} className="border border-gray-300 rounded p-2 w-full" readOnly />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="text" name={`5_${timeSlot}`} defaultValue={dayOfWeek.friday?.course.name?? ""}  className="border border-gray-300 rounded p-2 w-full" readOnly />
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
          <button
            type="submit"
            className="bg-black text-white rounded px-4 py-2 hover:bg-slate-800 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            次へ
          </button>
        </form>
      </main>
    </HydrateClient>
  );
}