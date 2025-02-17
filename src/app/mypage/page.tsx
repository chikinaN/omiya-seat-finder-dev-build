import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const session = await auth();

  if (!(session)) {
    redirect("/")
  }

  const user = await api.user.getUser();
  console.log(user);

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
      </main>
    </HydrateClient>
  );
}
