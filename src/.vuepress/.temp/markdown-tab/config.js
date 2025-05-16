import { CodeTabs } from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vuepress+plugin-markdown-t_b3dd72c0e837b0fb8fbcadaf29b8b87a/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vuepress+plugin-markdown-t_b3dd72c0e837b0fb8fbcadaf29b8b87a/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vuepress+plugin-markdown-t_b3dd72c0e837b0fb8fbcadaf29b8b87a/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
