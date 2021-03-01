/* eslint-disable import/prefer-default-export */
const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://server-2d8il082w-petrusmint.vercel.app'
