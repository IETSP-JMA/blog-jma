// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blog JMA',
  tagline: 'Blog del instituto Superior Tecnologica JMA',
  url: 'https://iestpjmapuquio.edu.pe/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'Blog_JMA', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    localeConfigs: {
      es: {
        htmlLang:'es-PE',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Blog - JMA',
        logo: {
          alt: 'Logo del sitio',
          src: 'img/logoTecno.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/IETSP-JMA/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentos',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Articulos',
                to:'/blog/',
              }
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100087840212250',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/channels/973705975557161010/974147748112777287',
              },
              {
                label: 'Youtube',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'Mas',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/IETSP-JMA/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blog del Proyecto repositorio, Instituto de Educacion Superior Tecnologico Jose Maria Arguedas - Puquio.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
