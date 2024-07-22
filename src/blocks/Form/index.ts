import type { Block } from "payload"

export const Form: Block = {
  slug: "form",
  labels: {
    singular: "Form Block",
    plural: "Form Blocks",
  },
  graphQL: {
    singularName: "FormBlock",
  },
  fields: [
    {
      name: "richText",
      type: "richText",
    },
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      required: true,
    },
  ],
}
