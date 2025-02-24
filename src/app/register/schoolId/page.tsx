import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { postSchoolId } from "./postSchoolId";
import { studentIdRegex } from "~/types/student";

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/")
  }
  const user = await api.user.getUser();
  console.log(session, user);
  if (!user || user.studentId) {
    redirect("/")
  }
  const studentId = user.email?.match(/_(.*?)@/)?.[1];
  if (user.email?.endsWith("@nnn.ac.jp") || !(user.email?.endsWith("@nnn.ed.jp")) || !studentId || !studentIdRegex.test(studentId)) {
    redirect("/")
  }
  const studentData = {
    studentId: studentId,
    batch: Number(studentId.slice(0, 2)) - 15,
    school: studentId.slice(2, 3).toUpperCase()
  }

  return (
    <HydrateClient>
      <main className="p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 mt-6">学籍情報 / 授業登録</h1>
        <form action={postSchoolId} className="w-2/3">
          <label className="block">
            <span className="block text-sm font-medium mb-1">学籍番号</span>
            <input
              className="border border-gray-300 rounded w-full p-2"
              type="text"
              name="studentId"
              defaultValue={studentData.studentId}
              required
              readOnly
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium mb-1">〇期生</span>
            <input
              className="border border-gray-300 rounded w-full p-2"
              type="number"
              name="batch"
              defaultValue={studentData.batch}
              required
              readOnly
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium mb-1">N/S高校</span>
            <input
              className="border border-gray-300 rounded w-full p-2"
              type="text"
              name="school"
              defaultValue={studentData.school}
              required
              readOnly
            />
          </label>
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