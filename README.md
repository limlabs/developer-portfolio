## Payload Portfolio Starter

- Create a great-looking, performant, SEO-friendly site without coding
- Start with a batteries-included CMS and template you can deploy in a few minutes
- Customize deeply using a modern, Typescript + NextJS development experience (or find a React developer &mdash; we [know a couple good ones](https://liminal.sh)!)

### Quick Start

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flimlabs%2Fdeveloper-portfolio&project-name=portfolio-starter&env=PAYLOAD_SECRET&build-command=pnpm%20run%20ci&stores=%5B%7B%22type%22%3A%22postgres%22%7D%2C%7B%22type%22%3A%22blob%22%7D%5D)

Follow the instructions after the first deployment to complete setup.

## What's Included

### For Content Authors

- CMS with admin interface via [Payload](https://github.com/payloadcms/payload) for authoring web pages without code
- Dynamic content model with multiple, flexible block types 
- Custom forms with simple, no-code validation

### For Developers

- NextJS App Router-based template using Tailwind and `@shadcn/ui` 
- PostgreSQL adapter configured for Neon
- Cloud Storage plugin configured for [Vercel Blob Storage](https://vercel.com/docs/storage/vercel-blob)

### For UI / UX Designers

- Light/dark mode
- [Figma template](https://www.figma.com/design/L3gEQtZWCAra7LrpWW3QCy/Payload_Portfolio-Design?node-id=0-1&t=VpsBbc4G1XGAvHKp-1)

## Things you need to bring

### Basic Deployment

- A Vercel account
- A GitHub Account
- Email integration - we can't do that for you (yet, we're working on it)
  - Use [this blog post](https://payloadcms.com/blog/payload-nodemailer-free-and-extensible-email-integration) to get email set up in your project
- Domain name (optional)
  - You can connect a custom domain by following the setup instructions in your Vercel account

### For Local Development + Customization
#### Dependencies
- pnpm
- Node 20 or greater
- A local postgres DB

#### Setup
**Step 1: Install dependencies**

Make sure you have Node.js, npm or yarn installed on your system. Navigate to the project directory and install all required packages using one of the following commands:

```bash
pnpm i
```

**Step 2: Set up environment variables**

Copy the .env.example file to .env.local under the root directory and add your PostgreSQL database connection details as environment variables. The .env.local file will be ignored by Git.

```ini
# db
POSTGRES_URL=postgresql://user:pass@localhost

# payload
PAYLOAD_SECRET=PAYLOAD_CUSTOM_SERVER_EXAMPLE_SECRET_KEY
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
PAYLOAD_PUBLIC_DRAFT_SECRET=EXAMPLE_DRAFT_SECRET
COOKIE_DOMAIN=localhost
REVALIDATION_KEY=EXAMPLE_REVALIDATION_KEY
PAYLOAD_SEED=false
PAYLOAD_DROP_DATABASE=false
ENABLE_PAYLOAD_CLOUD=false

# vercel
VERCEL_BUTTON_REPO="https://github.com/limlabs/developer-portfolio/tree/feat-vercel-deploy"
VERCEL_BUTTON_PROJECT="payload-developer-portfolio"
VERCEL_BUTTON_SHOW=false
```
**Step 3: Seed the database**

Seed the demo data by running:
```bash
pnpm seed
```

**Step 4: Run the project**

Start the development server by running:
```bash
pnpm dev
```

The Next.js development server will start, and you should be able to access your project at http://localhost:3000.
