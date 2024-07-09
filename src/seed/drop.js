import "dotenv/config"

import { getPayload } from "payload"
import { importConfig } from "payload/node"

;(async function () {
  const awaitedConfig = await importConfig("../../payload.config.ts")
  const payload = await getPayload({ config: awaitedConfig })
  process.exit(0)
})()
