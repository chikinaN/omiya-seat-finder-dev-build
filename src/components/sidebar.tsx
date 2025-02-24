import { redirect } from "next/navigation";
import { BookMarked, AlarmClock, Cog, UserRoundCog } from 'lucide-react';
import { api } from "~/trpc/server";


export async function Sidebar() {
  const user = await api.user.getUser();
  if (!user) {
    redirect("/")
  }
  const bookmarks = await api.user.getBookmarks();

  return (
    <aside className="h-full bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">ダッシュボード</h1>
      </div>
      <ul className="mt-4">
        <li className="p-2 hover:bg-gray-700 flex items-center">
          <AlarmClock className="mr-2" /> 今日の座席表
        </li>
        <li className="p-2 hover:bg-gray-700 flex items-center">
          <Cog className="mr-2" /> 座席設定
        </li>
        <li className="p-2 hover:bg-gray-700 flex items-center">
          <BookMarked className="mr-2" /> ブックマーク
        </li>
        <li>
          <ul>
            {bookmarks.map((bookmark) => (
              <li key={bookmark.id} className="pl-8 p-2 hover:bg-gray-600 text-sm list-disc list-inside text-gray-300">
                {bookmark.name}
              </li>
            ))}
            <li className="pl-8 p-2 hover:bg-gray-600 text-sm list-disc list-inside text-gray-300 flex items-center">
              <UserRoundCog className="mr-2 text-sm" /> ブックマーク設定
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}