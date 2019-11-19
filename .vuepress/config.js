module.exports = {
  title: 'How to Use Boun Sites',
  locales: {
    '/': {lang: 'EN'},
    '/tr/': {lang: 'TR'}
  },
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'PLE', link: '/PLE.html' },
      { text: 'Moodle', link: '/Moodle.html' }
    ],
    sidebar: [
    '/PLE',
    '/Moodle'
    ]
  }
}