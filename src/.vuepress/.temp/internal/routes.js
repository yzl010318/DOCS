export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/intro.html.js"), meta: {"cover":"/assets/images/cover3.jpg","excerpt":"\n<p>将你的个人介绍和档案放置在此处。</p>\n","readingTime":{"minutes":0.08,"words":23},"title":"介绍页","icon":"circle-info","type":"article"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"博客主页","icon":"house"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"category":["使用指南"],"tag":["禁用"],"excerpt":"<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n","readingTime":{"minutes":0.43,"words":128},"title":"布局与功能禁用","icon":"gears","order":4,"type":"article"} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"category":["使用指南"],"tag":["加密"],"isEncrypted":true,"readingTime":{"minutes":0.51,"words":154},"title":"密码加密的文章","icon":"lock","type":"article"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"category":["指南"],"tag":["布局"],"excerpt":"<p>布局包括:</p>\n<ul>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html\" target=\"_blank\" rel=\"noopener noreferrer\">导航栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html\" target=\"_blank\" rel=\"noopener noreferrer\">侧边栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/footer.html\" target=\"_blank\" rel=\"noopener noreferrer\">页脚</a></li>\n</ul>","readingTime":{"minutes":0.53,"words":159},"title":"布局","icon":"object-group","order":2,"type":"article"} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"category":["使用指南"],"tag":["Markdown"],"excerpt":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n","readingTime":{"minutes":3.47,"words":1041},"title":"Markdown 展示","icon":"fa6-brands:markdown","order":2,"type":"article"} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"author":"Ms.Hope","date":1577836800000,"category":["使用指南"],"tag":["页面配置","使用指南"],"sticky":true,"cover":"/assets/images/cover1.jpg","excerpt":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","readingTime":{"minutes":1.76,"words":529},"title":"页面配置","icon":"file","order":3,"type":"article"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"category":["使用指南"],"readingTime":{"minutes":0.07,"words":22},"title":"主要功能与配置演示","icon":"laptop-code","type":"article"} }],
  ["/posts/%E9%9D%A2%E8%AF%95/vue3.html", { loader: () => import(/* webpackChunkName: "posts_面试_vue3.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/posts/面试/vue3.html.js"), meta: {"excerpt":"\n<h3>vue3新特性有哪些以及区别？</h3>\n<ol>\n<li>Composition API：Vue 3引入了Composition API，这是一种新的组织组件逻辑的方式，可以让代码更加清晰和可维护。它允许开发者根据功能逻辑而非选项来组织代码，提高了代码的复用性和可读性。</li>\n<li>Teleport：Vue 3引入了Teleport特性，可以让开发者在组件内部将内容渲染到DOM结构中的任何位置，这在处理模态框、弹出框等场景时非常有用。</li>\n<li>Fragments：Vue 3支持Fragments，允许组件返回多个根节点，而不需要包裹额外的元素。</li>\n<li>性能优化：Vue 3在性能方面做了许多优化，比如使用Proxy对象替代Object.defineProperty来实现响应式系统，提高了性能和灵活性。另外，Vue 3还引入了静态树提升（Static Tree Hoisting）等优化手段，减少了虚拟DOM的生成和比对，提升了渲染性能</li>\n<li><strong>Tree-shaking</strong>：Vue 3对Tree-shaking的支持更好，可以更好地移除未使用的代码，减小打包体积。</li>\n<li>TypeScript支持：Vue 3对TypeScript的支持更加友好，提供了更好的类型推断和提示。</li>\n</ol>","readingTime":{"minutes":8.98,"words":2694},"title":"VUE3","type":"article"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/posts/%E9%9D%A2%E8%AF%95/", { loader: () => import(/* webpackChunkName: "posts_面试_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/posts/面试/index.html.js"), meta: {"title":"面试"} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"title":"Posts"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"分类","index":false} }],
  ["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "category_使用指南_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/category/使用指南/index.html.js"), meta: {"title":"使用指南 分类","index":false} }],
  ["/category/%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "category_指南_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/category/指南/index.html.js"), meta: {"title":"指南 分类","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"标签","index":false} }],
  ["/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(/* webpackChunkName: "tag_禁用_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/tag/禁用/index.html.js"), meta: {"title":"标签: 禁用","index":false} }],
  ["/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(/* webpackChunkName: "tag_加密_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/tag/加密/index.html.js"), meta: {"title":"标签: 加密","index":false} }],
  ["/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(/* webpackChunkName: "tag_布局_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/tag/布局/index.html.js"), meta: {"title":"标签: 布局","index":false} }],
  ["/tag/markdown/", { loader: () => import(/* webpackChunkName: "tag_markdown_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/tag/markdown/index.html.js"), meta: {"title":"标签: Markdown","index":false} }],
  ["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(/* webpackChunkName: "tag_页面配置_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/tag/页面配置/index.html.js"), meta: {"title":"标签: 页面配置","index":false} }],
  ["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "tag_使用指南_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/tag/使用指南/index.html.js"), meta: {"title":"标签: 使用指南","index":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"文章","index":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"title":"星标","index":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"时间轴","index":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
