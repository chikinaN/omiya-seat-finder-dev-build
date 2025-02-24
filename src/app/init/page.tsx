import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  await api.init.setInitSchedule()
  return (
    <HydrateClient>
      test
    </HydrateClient>
  )
}