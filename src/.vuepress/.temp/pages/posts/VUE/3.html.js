import comp from "C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/posts/VUE/3.html.vue"
const data = JSON.parse("{\"path\":\"/posts/VUE/3.html\",\"title\":\"苹果 3\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-03T00:00:00.000Z\",\"category\":[\"苹果\",\"水果\"],\"tag\":[\"红\",\"大\",\"圆\"],\"description\":\"苹果 3 标题 2 这里是内容。 标题 3 这里是内容。\"},\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"posts/VUE/3.md\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
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
