import comp from "C:/Users/admin/Desktop/DOCS/src/.vuepress/.temp/pages/posts/面试/vue3.html.vue"
const data = JSON.parse("{\"path\":\"/posts/%E9%9D%A2%E8%AF%95/vue3.html\",\"title\":\"VUE3\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"VUE3 vue3新特性有哪些以及区别？ Composition API：Vue 3引入了Composition API，这是一种新的组织组件逻辑的方式，可以让代码更加清晰和可维护。它允许开发者根据功能逻辑而非选项来组织代码，提高了代码的复用性和可读性。 Teleport：Vue 3引入了Teleport特性，可以让开发者在组件内部将内容渲染到DOM结...\"},\"readingTime\":{\"minutes\":8.98,\"words\":2694},\"filePathRelative\":\"posts/面试/vue3.md\",\"excerpt\":\"\\n<h3>vue3新特性有哪些以及区别？</h3>\\n<ol>\\n<li>Composition API：Vue 3引入了Composition API，这是一种新的组织组件逻辑的方式，可以让代码更加清晰和可维护。它允许开发者根据功能逻辑而非选项来组织代码，提高了代码的复用性和可读性。</li>\\n<li>Teleport：Vue 3引入了Teleport特性，可以让开发者在组件内部将内容渲染到DOM结构中的任何位置，这在处理模态框、弹出框等场景时非常有用。</li>\\n<li>Fragments：Vue 3支持Fragments，允许组件返回多个根节点，而不需要包裹额外的元素。</li>\\n<li>性能优化：Vue 3在性能方面做了许多优化，比如使用Proxy对象替代Object.defineProperty来实现响应式系统，提高了性能和灵活性。另外，Vue 3还引入了静态树提升（Static Tree Hoisting）等优化手段，减少了虚拟DOM的生成和比对，提升了渲染性能</li>\\n<li><strong>Tree-shaking</strong>：Vue 3对Tree-shaking的支持更好，可以更好地移除未使用的代码，减小打包体积。</li>\\n<li>TypeScript支持：Vue 3对TypeScript的支持更加友好，提供了更好的类型推断和提示。</li>\\n</ol>\",\"autoDesc\":true}")
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
