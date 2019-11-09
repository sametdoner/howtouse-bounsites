module.exports = {
  title: 'How to Use Boun Sites',
  locales: {
    '/': {lang: 'EN'},
    '/tr/': {lang: 'TR'}
  },
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Registration', link: '/Registration.html' },
      { text: 'Moodle', link: '/Moodle.html' },
      { text: 'PLE', link: '/PLE.html' }
    ],
    sidebar: [
    '/Registration',
    '/Moodle',
    '/PLE'
    ]
  }
}