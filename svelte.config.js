import adapter from '@sveltejs/adapter-static'
import process from 'node:process'

const config = {
  kit: {
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      strict: true,
    }),
  },
}

export default config
