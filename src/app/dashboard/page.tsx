import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { Sidebar } from "~/components/sidebar";

export default async function Home() {
  const session = await auth();

  if (!(session)) {
    redirect("/")
  }

  const user = await api.user.getUser();
  console.log(user);

  return (
    <HydrateClient>
      <div className="grid h-full grid-cols-[15rem,1fr]">
        <Sidebar />
        <main className="flex-grow container mx-auto px-4 py-8">
        </main>
      </div>
    </HydrateClient>
  );
}
