<template><div><h1 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3"><span>VUE3</span></a></h1>
<h3 id="vue3新特性有哪些以及区别" tabindex="-1"><a class="header-anchor" href="#vue3新特性有哪些以及区别"><span>vue3新特性有哪些以及区别？</span></a></h3>
<ol>
<li>Composition API：Vue 3引入了Composition API，这是一种新的组织组件逻辑的方式，可以让代码更加清晰和可维护。它允许开发者根据功能逻辑而非选项来组织代码，提高了代码的复用性和可读性。</li>
<li>Teleport：Vue 3引入了Teleport特性，可以让开发者在组件内部将内容渲染到DOM结构中的任何位置，这在处理模态框、弹出框等场景时非常有用。</li>
<li>Fragments：Vue 3支持Fragments，允许组件返回多个根节点，而不需要包裹额外的元素。</li>
<li>性能优化：Vue 3在性能方面做了许多优化，比如使用Proxy对象替代Object.defineProperty来实现响应式系统，提高了性能和灵活性。另外，Vue 3还引入了静态树提升（Static Tree Hoisting）等优化手段，减少了虚拟DOM的生成和比对，提升了渲染性能</li>
<li><strong>Tree-shaking</strong>：Vue 3对Tree-shaking的支持更好，可以更好地移除未使用的代码，减小打包体积。</li>
<li>TypeScript支持：Vue 3对TypeScript的支持更加友好，提供了更好的类型推断和提示。</li>
</ol>
<p>vue 3相对于Vue 2在性能、体积、开发体验和功能方面都有所提升，引入了许多新特性和优化，使得开发更加高效和便捷。</p>
<h3 id="vue3的响应式原理" tabindex="-1"><a class="header-anchor" href="#vue3的响应式原理"><span>Vue3的响应式原理？</span></a></h3>
<p>vue3采用数据代理+数据劫持+发布订阅模式的方法。</p>
<ul>
<li>在初始化vue实例时，通过Proxy进行数据代理，用Proxy对象来代理目标对象,并且对目标对象中的所有属性动态地进行数据劫持，动态地指定一个getter、setter，并通过Reflect操作对象内部数据。</li>
<li>当Proxy对象属性或Proxy数组元素发生变化时，会触发Proxy属性的setter方法，然后通过Reflect操作目标对象属性，同时触发它Dep实例的notify方法进行依赖分发，通知所有依赖的Watcher实例执行内部回调函数。</li>
<li>最后会触发renderWatcher回调，会重新执行render函数，重新对比新旧虚拟DOM，重新渲染页面。</li>
<li>当读取Proxy对象属性时，会触发Proxy属性的getter方法，然后触发它Dep实例的depend方法进行依赖收集。</li>
</ul>
<h3 id="options-api和composition-api的区别是什么" tabindex="-1"><a class="header-anchor" href="#options-api和composition-api的区别是什么"><span>Options API和Composition API的区别是什么？</span></a></h3>
<ul>
<li>Options API：在 Vue 2 中广泛使用，通过在  props、data、methods、computed、watch等选项中定义属性来组织代码。这种方式将组件的逻辑按照功能类型（如数据、方法）分类存放。</li>
<li>Composition API：引入于 Vue 3，提供了一种更灵活的方式来组织和重用逻辑代码。它允许开发者根据相关性而非类型来组织代码，使得处理复杂组件时更加直观和易于维护。Composition API 还支持更好的逻辑复用性和 TypeScript 支持。</li>
</ul>
<p>简而言之，主要区别在于代码组织方式：Options API 按照功能类别划分，而 Composition API 则是基于逻辑相关性进行组织。</p>
<h3 id="vue3中创建响应式变量方法有哪些、怎么判断是否为响应式" tabindex="-1"><a class="header-anchor" href="#vue3中创建响应式变量方法有哪些、怎么判断是否为响应式"><span>vue3中创建响应式变量方法有哪些、怎么判断是否为响应式？</span></a></h3>
<p>声明：ref、reactive、toRef、toRefs、computed、shallowReactive（浅层响应式）等等</p>
<p>判断：</p>
<ul>
<li><strong>isRef: 检查一个值是否为一个 ref 对象</strong></li>
<li><strong>isReactive: 检查一个对象是否是由 reactive 创建的响应式代理</strong></li>
<li><strong>isReadonly: 检查一个对象是否是由 readonly 创建的只读代理</strong></li>
<li><strong>isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理</strong></li>
</ul>
<h3 id="vue3组件通信方式" tabindex="-1"><a class="header-anchor" href="#vue3组件通信方式"><span>vue3组件通信方式</span></a></h3>
<ul>
<li><strong>父传子：props、defineProps、v-model</strong></li>
<li><strong>子传父：emit、defineEmits</strong></li>
<li><strong>夸组件：pinia、mitt（代替eventBus）</strong></li>
<li><strong>祖孙级别：provide/inject</strong></li>
<li>子组件暴露方法或属性：defineExpose</li>
</ul>
<h3 id="vue3如何获取组件实例" tabindex="-1"><a class="header-anchor" href="#vue3如何获取组件实例"><span>vue3如何获取组件实例</span></a></h3>
<p>可以通过getCurrentInstance函数来获取当前组件的实例。getCurrentInstance函数返回当前正在执行的组件实例，可以在组件的生命周期钩子函数、setup函数等地方使用。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>import { getCurrentInstance } from 'vue';</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    const instance = getCurrentInstance();</span></span>
<span class="line"><span>    console.log('当前组件实例：', instance);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nexttick实现原理" tabindex="-1"><a class="header-anchor" href="#nexttick实现原理"><span>nextTick实现原理</span></a></h3>
<ul>
<li>当调用<code v-pre>nextTick()</code>时，Vue会将传入的回调函数存储到一个队列中。</li>
<li>Vue会利用<code v-pre>Promise</code>来创建一个微任务，确保回调函数在DOM更新周期之后执行。</li>
<li>Vue也会使用<code v-pre>MutationObserver</code>来监听DOM变化，在DOM更新后触发微任务执行队列中的回调函数。</li>
</ul>
<p>nextTick()的实现原理是利用Promise和MutationObserver来实现在下次DOM更新周期之后异步执行回调函数，以确保在DOM更新完成后进行相应的操作</p>
<h3 id="watch、watcheffect、computed-之间的区别" tabindex="-1"><a class="header-anchor" href="#watch、watcheffect、computed-之间的区别"><span>watch、watchEffect、computed()之间的区别</span></a></h3>
<ul>
<li><code v-pre>watch()</code>是一个函数，用于监视指定的响应式数据，并在数据发生变化时执行回调函数。它接受两个参数，第一个参数是要监视的数据源，可以是一个响应式数据或一个返回响应式数据的函数；第二个参数是回调函数，用于处理数据变化时的逻辑。watch()可以监视多个数据源，也可以设置深度监视或立即执行回调函数等选项。</li>
<li><code v-pre>watchEffect()</code>是一个函数，用于自动追踪其内部依赖的响应式数据，并在数据变化时重新执行函数体。与watch()不同，watchEffect()不需要指定要监视的数据源，而是自动追踪函数内部依赖的响应式数据。这使得watchEffect()更适合处理副作用逻辑，比如更新DOM或发送请求等。</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>// watchEffect简化根据状态进行异步请求</span></span>
<span class="line"><span>watchEffect(async () => {</span></span>
<span class="line"><span>  const data = await fetch(`/api/${todoId.value}`); // 自动追踪todoId</span></span>
<span class="line"><span>  this.content = data;</span></span>
<span class="line"><span>});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>computed()</code>是一个函数，用于创建一个计算属性，根据响应式数据的变化动态计算并返回一个新的值。computed()接受一个计算函数作为参数，在计算函数中可以访问响应式数据，并返回一个计算结果。计算属性会缓存计算结果，只有依赖的响应式数据发生变化时才会重新计算。计算属性通常用于派生状态或对数据进行转换。不可执行异步操作</li>
</ul>
<h3 id="异步组件" tabindex="-1"><a class="header-anchor" href="#异步组件"><span>异步组件</span></a></h3>
<p>定义：指在需要时才会被加载的组件。这种延迟加载的方式可以提高应用程序的性能（懒加载）。<br>
涉及API: <code v-pre>defineAsyncComponent</code></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>&#x3C;!-- 示例 --></span></span>
<span class="line"><span>import { defineAsyncComponent } from 'vue';</span></span>
<span class="line"><span>const AsyncComponent = defineAsyncComponent(() => import('./AsyncComponent.vue'));</span></span>
<span class="line"><span>//按需加载</span></span>
<span class="line"><span>const AsyncComponent = () => import('./AsyncComponent.vue');</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3-的编译流程" tabindex="-1"><a class="header-anchor" href="#vue3-的编译流程"><span>vue3 的编译流程</span></a></h3>
<p>Vue3的编译过程指的是Vue.js框架中组件的模板代码被转换为渲染函数的过程。Vue3相较于Vue2在编译方面进行了一些改进和优化，下面是Vue3编译过程的大致步骤：</p>
<ol>
<li>解析模板: Vue3使用一个名为compiler-core的包，它使用一个类似于HTML的解析器将模板字符串转换为抽象语法树（AST）。在解析过程中，它会识别出模板中的各种结构，如元素、属性、指令、绑定、事件等。</li>
<li>AST 转换: 抽象语法树会经过转换的过程，其中可能会应用一些优化措施来简化AST或者添加一些静态标记，以便于后期进行diff操作时能更快地进行。</li>
<li>代码生成: AST最终会被转换成JavaScript渲染函数的代码。这个过程涉及到将AST节点转换为可执行的渲染函数代码，这些渲染函数负责生成Virtual DOM。</li>
<li>优化: Vue3引入了多种编译时优化，比如静态提升、patch标志、缓存事件处理函数等，以提高运行时的性能。</li>
</ol>
<p>在开发过程中，Vue提供了即时编译（JIT，Just-In-Time）和预编译（AOT，Ahead-Of-Time）两种模式：</p>
<ul>
<li>即时编译: 开发者在开发过程中写下的Vue模板会在客户端即时编译成渲染函数。这常在开发环境中使用，使得开发者能够即时看到更改效果。</li>
<li>预编译: 在构建过程（如使用Vue CLI、Vite或webpack等构建工具时）中，Vue模板会被预编译成渲染函数，然后打包到JS文件中。这会在生产环境中使用，以减少客户端的编译开销和提高应用性能。</li>
</ul>
<p>Vue3的编译过程更加强调编译时优化，这也是Vue3能够提供更好性能的原因之一。</p>
<h3 id="vue3与vue2-diff算法的核心区别" tabindex="-1"><a class="header-anchor" href="#vue3与vue2-diff算法的核心区别"><span>vue3与vue2 diff算法的核心区别</span></a></h3>
<p>Vue 2.x使用的是双向指针遍历的算法，也就是通过逐层比对新旧虚拟DOM树节点的方式来计算出更新需要做的最小操作集合。但这种算法的缺点是，由于遍历是从左到右、从上到下进行的，当发生节点删除或移动时，会导致其它节点位置的计算出现错误，因此会造成大量无效的重新渲染。<br>
Vue 3.x使用了经过优化的单向遍历算法，也就是只扫描新虚拟DOM树上的节点，判断是否需要更新，跳过不需要更新的节点，进一步减少了不必要的操作。此外，在虚拟DOM创建后，Vue 3会缓存虚拟DOM节点的描述信息，以便于复用，这也会带来性能上的优势。同时，Vue 3还引入了静态提升技术，在编译时将一些静态的节点及其子节点预先处理成HTML字符串，大大提升了渲染性能。<br>
因此，总体来说，Vue 3相对于Vue 2拥有更高效、更智能的diff算法，能够更好地避免不必要的操作，并提高了渲染性能。</p>
<h3 id="proxy-与-object-defindproperty-区别" tabindex="-1"><a class="header-anchor" href="#proxy-与-object-defindproperty-区别"><span>proxy 与 Object.defindProperty 区别</span></a></h3>
<p>1.实现方式不同：proxy是es6推出的一种新特性，使用一种代理机制来实现响应式，而Object.defineProperty则是通过getter和setter来实现响应式。<br>
2.作用对象不同：Proxy是代理了整个对象。而Object.defineProperty则是通过getter和setter代理声明对象的属性<br>
3.监听范围不同：Proxy可以监听代理对象的任何变化，而Object.defineProperty只能监听对象已经定义的属性变化<br>
4.性能：Proxy是es6的性特性，内部算法相较于es5的object.defineProperty更加高效。</p>
<h3 id="vue3中常见的钩子函数有哪些" tabindex="-1"><a class="header-anchor" href="#vue3中常见的钩子函数有哪些"><span>vue3中常见的钩子函数有哪些？</span></a></h3>
<p>1.生命周期钩子函数：<br>
<code v-pre>setup() 、onBeforeMount() 、onMounted() 、onBeforeUpdate() 、onUpdated() 、onBeforeUnmount() 、onUnmount()</code><br>
2.缓存组件中的钩子函数（<keep-alive>）<br>
<code v-pre>onActivated() 、onDeactivated()</code><br>
3.路由守卫钩子<br>
● 全局/独享路由守卫<br>
<code v-pre>beforeEnter()、afterEach()、beforeResolve()</code><br>
● 组建内部路由守卫<br>
<code v-pre>onBeforeRouteUpdate()、onBeforeRouteLeave()</code><br>
4.功能型钩子函数<br>
<code v-pre>watch()、watchEffcet()、computed()</code></p>
</div></template>


