import { VercelDeploy } from "@/components/ui/vercelDeploy";

const SetupPage = async () => {
  return (
    <main className="flex flex-col gap-4 mt-16">
      <h1 className="text-2xl md:text-4xl">Deploying with vercel</h1>
      <h2 className="text-xl md:text-2xl">Start deploying in 1-click</h2>
      <VercelDeploy />
      <h2 className="text-xl md:text-2xl">Post deploy setup</h2>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sequi animi itaque maiores omnis facilis nesciunt deserunt adipisci dolorem! Quasi soluta illo animi maiores id delectus tenetur sed ipsa natus.</p>
      </div>
    </main>
  )
}

export default SetupPage;