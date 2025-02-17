import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    const user = await api.user.getUser();
    console.log(user);
  }

  return (
    <HydrateClient>
      <div className="space-y-6">
        <section className="text-center py-10">
          <h1 className="text-4xl font-bold">座席表管理システム</h1>
          <h4 className="text-s opacity-45 mb-4">omiya-seat-finder</h4>
          <p className="text-xl text-muted-foreground mb-6">効率的な座席管理で、快適な学習環境を提供します</p>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">システムの特徴</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>リアルタイムの座席状況確認</li>
            <li>簡単な座席予約・変更プロセス</li>
            <li>学籍番号との連携による自動化</li>
            <li>フロアマップによる視覚的な座席管理</li>
            <li>Slack連携による朝礼情報の共有</li>
          </ul>
        </section>
        {/* <StyledComponentsRegistry>
          <FloorMap />
        </StyledComponentsRegistry> */}
      </div>
    </HydrateClient>
  );
}
