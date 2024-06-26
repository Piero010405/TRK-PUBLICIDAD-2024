import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // adapter: node({
  //   mode: 'standalone',
  // }),
  adapter: vercel(),
  integrations: [react()],
})
