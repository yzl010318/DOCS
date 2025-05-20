import comp from "C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/posts/VUE/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/VUE/\",\"title\":\"VUE\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"VUE\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"VUE\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/DOCS/posts/VUE/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"YZL-DOCS\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"VUE\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
