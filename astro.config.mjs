import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

const site =
  process.env.SITE_URL || process.env.PUBLIC_SITE_URL || "https://moon-no-sleep.github.io";

export default defineConfig({
  site,
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    // 支持语言
    locales: ["en", "zh-cn"],
    // 默认语言
    defaultLocale: "en",
    routing: {
      // 默认语言URL不加 /en/
      prefixDefaultLocale: false,
      // 自动根据浏览器语言跳转
      redirectToDefaultLocale: false,
    },
  },
});
