"use server";
import { redirect } from "next/navigation";
import { api } from "~/trpc/server";

export async function postSchoolId(formData: FormData) {
  console.log("postSchoolId");
  const studentId = formData.get("studentId") as string;
  if (!studentId) {
    throw new Error("学籍番号が入力されていません");
  }
  await api.user.setStudentId({ studentId });
  redirect("/register/schedule");
}
