import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_f9430122857843739e50090c01e35ac4/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vuepress+plugin-catalog@2._587682070bf2c7ebc98afead4980594d/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_f9430122857843739e50090c01e35ac4/node_modules/vuepress-theme-hope/lib/bundle/exports/blog.js";
import "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_f9430122857843739e50090c01e35ac4/node_modules/vuepress-theme-hope/lib/bundle/styles/blog/bundle.scss";
import { GlobalEncrypt, LocalEncrypt } from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_f9430122857843739e50090c01e35ac4/node_modules/vuepress-theme-hope/lib/bundle/exports/encrypt.js";
import "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_f9430122857843739e50090c01e35ac4/node_modules/vuepress-theme-hope/lib/bundle/styles/encrypt/bundle.scss"

import "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_34b8033bbab4de98e28ad6deca49dcfd/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_34b8033bbab4de98e28ad6deca49dcfd/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_34b8033bbab4de98e28ad6deca49dcfd/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_f9430122857843739e50090c01e35ac4/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
