import Link from "next/link"
import { NotificationPopover } from "./notificationPopover"
import { ProfilePopover } from "./profilePopover"
import { auth } from "~/server/auth";

export async function MainNav() {
  const session = await auth();
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-bold">
          座席表管理システム
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {session?.user && (
          <Link href="/mypage">
            <button className="bg-black text-white py-1.5 px-3 rounded">マイページへ</button>
          </Link>
        )}
        <NotificationPopover />
        <ProfilePopover />
      </div>
    </nav>
  )
}