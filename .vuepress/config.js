module.exports = {
  title: 'How to Use Boun Sites',
  locales: {
    '/': {lang: 'TR'},
    '/en/': {lang: 'EN'}
  },
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'PLE', link: '/PLE.html' },
      { text: 'LMS', link: '/LMS.html' }
    ],
    sidebar: [
    '/PLE',
    '/LMS'
    ]
  }
}