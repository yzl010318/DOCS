import CodeDemo from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/vuepress-plugin-md-enhance@_55226f55dcdab1d016a53decb1daa03f/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/vuepress-plugin-md-enhance@_55226f55dcdab1d016a53decb1daa03f/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
