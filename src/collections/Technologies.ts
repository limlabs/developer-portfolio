import type { CollectionConfig } from "payload"

import { loggedIn } from "@/access/loggedIn"

export const Technologies: CollectionConfig = {
  slug: "technologies",
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: loggedIn,
    read: () => true,
    update: loggedIn,
    delete: loggedIn,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: {
        width: "25%",
      },
    },
  ],
}
