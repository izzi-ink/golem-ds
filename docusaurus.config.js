// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Code and Patterns',
  tagline: 'Weaving code to create beauty',
  url: 'https://pattern-master.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'izzi-ink', // Usually your GitHub org/user name.
  projectName: 'patterns-of-code', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/izzi-ink/patterns-of-code',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/izzi-ink/patterns-of-code',
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
      colorMode: {
        disableSwitch: false
      },
      navbar: {
        title: 'Code and Patterns',
        logo: {
          alt: 'Master Programming',
          src: 'img/logo.svg',
        },
        items: [


          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notebooks',
          },
          {
            to: '/blog',
            label: 'Code Musings',
            position: 'left'
          },
          {
            href: 'https://github.com/izzi-ink/patterns-of-code',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Notes from Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Experiments and Projects',
                to: '/blog/',
              },

            ],
          },
          {
            title: 'Other Links',
            items: [
              {
                label: 'Izzi Ink',
                href: 'https://izzi.ink/',
              },
              {
                label: 'Pattern & Ink',
                href: 'https://www.pattern.ink',
              },

            ],
          },
          {
            title: 'More',
            items: [

              {
                label: 'Space Blog',
                to: 'https://sugarstarcandy.space/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/izzi-ink/patterns-of-code',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Izzi Ink, Inc.A Division of the Houtvollop Group.Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
