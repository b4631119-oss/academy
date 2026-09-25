import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PROlab Academy',
    short_name: 'PROlab',
    description: 'Учебные материалы по веб-разработке: HTML, CSS, JavaScript и DOM',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc', // slate-50
    theme_color: '#0ea5e9', // sky-500
    icons: [
      {
        src: '/icon.png',
        sizes: '256x256',
        type: 'image/png',
      },
    ],
  }
}
