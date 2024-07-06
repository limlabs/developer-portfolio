// import { VercelDeploy } from "@/components/ui/vercelDeploy";

import dynamic from 'next/dynamic';

const Code = dynamic(() => import('src/components/ui/code'), { ssr: false })

const SetupPage = async () => {
  const localCheck = () => {
    // TO-DO: implement localhost check
    return false;
  }

  return (
    <main className="flex flex-col gap-4 mt-16">
      <h1 className="text-2xl md:text-4xl">It looks like there's a few more steps to getting your portfolio ready.</h1>
      <ul className="list-disc ml-4">
        <li>Install <a className='text-blue-600 dark:text-blue-400' href="https://pnpm.io/installation">PNPM</a></li>
        <li>Clone the <a className='text-blue-600 dark:text-blue-400' href={process.env.VERCEL_BUTTON_REPO ?? ""}>source code</a></li>
        <li>Follow the instructions below in the terminal to finish setting up your portfolio</li>
      </ul>
      <Code language='markdown' text={
        `# install the dependencies
pnpm i
${!localCheck() ? (
`
# Login to vercel account
# use --scope for team
pnpx vercel login
# Get the env vars to connect to the database and blob storage locally
pnpx vercel env pull`
) : null}

# Run the script to seed the data
pnpm seed`
      } />
    </main>
  )
}

export default SetupPage;