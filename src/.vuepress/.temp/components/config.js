import { hasGlobalComponent } from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_34b8033bbab4de98e28ad6deca49dcfd/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/vuepress-plugin-components@_472b66b41313d1756e02049e5285acf7/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/vuepress-plugin-components@_472b66b41313d1756e02049e5285acf7/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "C:/Users/admin/Desktop/DOCS/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_34b8033bbab4de98e28ad6deca49dcfd/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
