export const VercelDeploy = async () => {
  const base = "https://vercel.com/new/clone";

  const repo = process.env.VERCEL_BUTTON_REPO ?? "";
  const customBuild = process.env.VERCEL_BUTTON_BUILD ?? "";
  const projectName = process.env.VERCEL_BUTTON_PROJECT ?? "";
  const env = ["PAYLOAD_SECRET"].join(",");
  const stores = JSON.stringify([{type: "postgres"}]);

  const deployUrl = encodeURI([
    `${base}?repository-url=${repo}`,
    `repository-name=${projectName}`,
    `project-name=${projectName}`,
    `build-command=${customBuild}`,
    `env=${env}&stores=${stores}`
  ].join("&"));

  return (
    <a href={deployUrl}>
      <img src="https://vercel.com/button" alt="Deploy with Vercel"/>
    </a>
  )
}

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