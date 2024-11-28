import nav from './configs/navbar.js';
import sidebar from './configs/sidebar.js';

export default {
    lang: 'zh-CN',
    title: '与光同行',
    description: '个人学习笔记 ✍',
    srcDir: 'src',
    cleanUrls: 'without-subfolders',
    scrollOffset: 'header',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav,
        sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wwlight/wwlight.github.io' },
        ],
        editLink: {
            pattern: 'https://github.com/wwlight/wwlight.github.io/edit/main/src/:path',
            text: '在 github 上编辑此页'
        },
        lastUpdated: false,
        lastUpdatedText: '最后更新',
        docFooter: {
            prev: '前一篇',
            next: '下一篇'
        },
        outlineTitle: '本页目录',
        returnToTop: '返回顶部',
        appearance: '外观',
        pageNotFound: '页面未找到',
        deadLink: {
            before: '你打开了一个不存在的链接：',
            after: '。'
        },
    },
}
