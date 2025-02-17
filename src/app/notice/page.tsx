import Link from "next/link";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const session = await auth();
  const notices = session ? await api.notice.getNotice() : null;

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        {notices ? (
          <div className="w-full max-w-2xl">
            {notices.map((notice, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
                <Link href={`/notice/${notice.id}`} className="text-2xl font-bold mb-2 text-blue-500 hover:underline">
                  {notice.title}
                </Link>
                <p className="text-gray-700">{notice.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">本日の通知がありませんでした</p>
        )}
      </main>
    </HydrateClient>
  );
}