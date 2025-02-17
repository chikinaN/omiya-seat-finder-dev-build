import Link from "next/link"
import Image from "next/image";
import { User } from "lucide-react"
import { auth } from "~/server/auth";
import { Popover } from "./popiver";
import { Session } from "next-auth";

export async function ProfilePopover() {
	const session = await auth();

	function getImageUrl(session: Session | null) {
		return session?.user?.image ?? null;
	}

	const imageUrl = getImageUrl(session);

	return (
		<div className="relative inline-block text-left">
			<Popover title={imageUrl ? <Image src={imageUrl} alt={"user"} width={20} height={20} /> : <User className="h-5 w-5" />}>
				<nav>
					{session && (
						<>
							<Link href="/mypage" className="block hover:bg-gray-100 px-2 py-1 rounded">
								ダッシュボード
							</Link>
							<Link href="/mypage/entry" className="block hover:bg-gray-100 px-2 py-1 rounded">
								座席登録
							</Link>
							<Link href="/mypage/share" className="block hover:bg-gray-100 px-2 py-1 rounded">
								座席共有
							</Link>
							<Link href="/notice" className="block hover:bg-gray-100 px-2 py-1 rounded">
								お知らせ
							</Link>
							<Link href="/seats" className="block hover:bg-gray-100 px-2 py-1 rounded">
								座席管理
							</Link>
							<hr className="my-2" />
						</>
					)}
					<Link
						href={session ? "/api/auth/signout" : "/api/auth/signin"}
						className="block hover:bg-gray-100 px-2 py-1 rounded"
					>
						{session ? "サインアウト" : "サインイン"}
					</Link>
				</nav>
			</Popover>
		</div>
	)
}