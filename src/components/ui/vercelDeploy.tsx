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