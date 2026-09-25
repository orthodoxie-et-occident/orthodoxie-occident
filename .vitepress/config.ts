import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "Orthodoxie & Occident",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Accueil", link: "/" },
      { text: "A propos", link: "/about" },
    ],

    notFound: {
      title: "PAGE INTROUVABLE",
      quote: "Cette page s'est perdue dans le cyberespace...",
      linkLabel: "retour à l'accueil",
      linkText: "Ramenez-moi à la maison",
      code: "404",
    },

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
  },
  appearance: false,
})
