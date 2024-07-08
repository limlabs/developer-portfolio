import { redirect } from "next/navigation"

import { ContentImport } from "@/components/setup/contentImport"

import { authorize } from "./actions"

export const dynamic = "force-dynamic"

export default async function ImportContentPage() {
  try {
    await authorize()
  } catch (error) {
    redirect("/setup/user")
  }

  return <ContentImport />
}
