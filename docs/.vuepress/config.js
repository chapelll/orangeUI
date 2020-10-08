module.exports = {
  base: '/orangeUI/',
  title: '橘子UI',
  description: '一个简单好用的UI组件库',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: 'GitHub', link: 'https://github.com/chapelll/orangeUI' },
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-started/',],
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/tabs',
          '/components/toast',
          '/components/collapse',
        ],
      }
    ]
  }
}