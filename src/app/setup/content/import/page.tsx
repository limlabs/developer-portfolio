import { redirect } from 'next/navigation'
import { authorize } from './actions'
import { ContentImport } from '@/components/setup/contentImport'

export const dynamic = 'force-dynamic'

export default async function ImportContentPage() {
  try {
    await authorize()
  } catch (error) {
    redirect('/setup/user')
  }

  return <ContentImport />
}
