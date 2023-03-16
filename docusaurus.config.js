// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Isendu API",
  tagline: "Isendu are cool",
  url: "https://www.isendu.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "isendu", // Usually your GitHub org/user name.
  projectName: "api-store", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "it",
    locales: ["it"],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/isendu/api-site",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
          admonitions: {
            tag: ":::",
            keywords: ["note", "tip", "info", "caution", "danger"],
          }
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: "Isendu",
          src: "https://isendu-cdn-static-files.s3.eu-central-1.amazonaws.com/new_logo/isu_logo.svg",
          style: { background: "white", padding: "8px", borderRadius: "8px" },
        },
        items: [
          {
            to: "/docs/api/intro",
            position: "left",
            label: "API",
          }
        ],
      },
      footer: {
        style: "dark",
        links: [{ label: "isendu.com", href: "https://www.isendu.com" }],
        copyright: `Copyright © ${new Date().getFullYear()} isendu API, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          store: {
            // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "definitions/store.yaml", // Path to designated spec file

            outputDir: "docs/api/reference/store", // Output directory for generated .mdx docs
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: [
    "@docusaurus/theme-mermaid",
    "docusaurus-theme-openapi-docs"
  ],
};

module.exports = config;
