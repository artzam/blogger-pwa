import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'Matkomik',
  shortName: 'Matkomik',
  description: 'Komuniti Komik Online Malaysia',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Genre Komik',
      shortName: 'Genre Komik',
      description: 'Baca semua genre komik..',
      url: 'https://www.matkomik.com/p/aksi.html?utm_source=homescreen',
    },
    {
      name: 'Hantar Komik',
      shortName: 'Hantar Komik',
      description: 'Hantar komik anda disini..',
      url: 'https://www.matkomik.com/p/hantar-komik.html?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://hello-example.blogspot.com',
} satisfies Config;
