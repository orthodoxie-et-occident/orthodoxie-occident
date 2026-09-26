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
      { text: "A propos", link: "/a-propos" },
    ],

    outline: {
      label: "Sur cette page",
    },
    docFooter: {
      prev: "Page précédente",
      next: "Page suivante",
    },
    darkModeSwitchLabel: "Apparence",
    sidebarMenuLabel: "Menu",

    notFound: {
      title: "PAGE INTROUVABLE",
      quote: "Cette page s'est perdue dans le cyberespace...",
      linkLabel: "retour à l'accueil",
      linkText: "Ramenez-moi à la maison",
      code: "404",
    },

    socialLinks: [
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>`,
        },
        link: "/sources",
        ariaLabel: "Sources",
      },
    ],
  },
  appearance: false,
})
