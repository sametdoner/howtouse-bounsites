module.exports = {
  title: 'How to Use CET Systems',
  locales: {
    '/': {lang: 'TR'},
    '/en/': {lang: 'EN'}
  },
  serviceWorker: true,
  themeConfig: {
    locales: {
      '/': {
        sidebar: [
          '/PLE',
          '/LMS'
        ],
        nav: [
          { text: 'PLE', link: '/PLE.html' },
          { text: 'LMS', link: '/LMS.html' }
        ],
      },
      '/en/': {
        sidebar: [
          'en/PLE',
          'en/LMS'
        ],
        nav: [
          { text: 'PLE', link: '/PLE.html' },
          { text: 'LMS', link: '/LMS.html' }
        ],
      }
    }
  }
}