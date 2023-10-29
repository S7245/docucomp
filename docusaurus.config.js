// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sam',
  tagline: 'Keep Learning',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://S7245.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docucomp/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'S7245', // Usually your GitHub org/user name.
  projectName: 'S7245.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/S7245/docucomp/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/S7245/docucomp/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.png',
      navbar: {
        title: 'Software Learning',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.png',
        },
        hideOnScroll: true,
        items: [
          {
              label: 'Web',
              type: 'dropdown',
              items: [
                  {
                      type: 'docSidebar',
                      label: 'React Native',
                      sidebarId: 'reactnativeSidebar',
                  },
                  {
                      type: 'docSidebar',
                      label: 'React Next',
                      sidebarId: 'reactNextSidebar',
                  },
                  {
                      type: 'docSidebar',
                      label: 'Javascript',
                      sidebarId: 'jsSidebar',
                  },
                  {
                      type: 'docSidebar',
                      label: 'HTML',
                      sidebarId: 'htmlSidebar',
                  },
                  {
                      type: 'docSidebar',
                      label: 'CSS',
                      sidebarId: 'cssSidebar',
                  },
              ],
          },
          {
            type: 'docSidebar',
            label: 'Tutorial',
            sidebarId: 'tutorialSidebar',
          },
          /*{
              label: 'Front',
              type: 'dropdown',
              items: [
                  {
                      type: 'docSidebar',
                      label: 'Tutorial',
                      sidebarId: 'tutorialSidebar',
                  },
                  {
                      type: 'docSidebar',
                      label: 'ReactNative',
                      sidebarId: 'reactnativeSidebar',
                  },
              ],
          },*/
        ],
      },
      docs: {
        sidebar: {
          // 侧边栏可隐藏，这个设置提升小屏幕的体验
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        /*links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
