import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "@fontsource-variable/source-serif-4"
import "./custom.css"
import { Library, Info } from "lucide-vue-next"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("IconLibrary", Library)
    app.component("IconInfo", Info)
  },
} satisfies Theme
