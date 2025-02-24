import Link from "next/link"
import { Bell } from "lucide-react"
import { Popover } from "./popiver"
import { api } from "~/trpc/server";
import { auth } from "~/server/auth";

export async function NotificationPopover() {
  const session = await auth();
  const notifications = session? await api.notice.getShortNotice(): [];
  console.log(notifications);

  return (
    <Popover
      title={
        <>
          <Bell className="h-5 w-5" />
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs">
              {notifications.length}
            </span>
          )}
        </>
      }
    >
      <h3 className="px-4 py-2 text-sm font-semibold border-b">
        本日のお知らせ
      </h3>
      <ul className="max-h-48 overflow-y-auto">
        {notifications.map((notification) => (
          <li key={notification.id} className="px-4 py-2 hover:bg-gray-50">
            <Link href={`/notice/${notification.id}`}>
              {notification.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-t px-4 py-2 text-center">
        <Link href="/notice" className="text-blue-600 hover:underline">
          すべてのお知らせを見る
        </Link>
      </div>
    </Popover>
  )
}