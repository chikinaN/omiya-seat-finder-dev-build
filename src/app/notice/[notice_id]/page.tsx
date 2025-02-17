import Link from "next/link";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home({ params }: { params: Promise<{ notice_id: string }>}) {
  const session = await auth();
  const notice = session? await api.notice.getNoticeById({ id: (await params).notice_id }): null;

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {notice? (
          <div>
            <h1>{notice.title}</h1>
            <p>{notice.body}</p>
          </div>
        ): (
          <div>
            <div>対象の通知が見つかりませんでした。</div>
            <Link href={"/"}>戻る</Link>
          </div>
        )}
      </main>
    </HydrateClient>
  );
}
