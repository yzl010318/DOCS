import { hasGlobalComponent } from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_a2223663ec153565c1409552abe2059a/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vueuse+core@13.1.0_vue@3.5.13/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_0a8ac630e0ba94e282326323c14d852f/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
