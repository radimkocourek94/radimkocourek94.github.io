import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Radim Kocourek',
  tagline: 'Technical writing, content design, and the infrastructure behind both.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://radimkocourek94.github.io',
  // User site: served from the domain root.
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'radimkocourek94',
  projectName: 'radimkocourek94.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/radimkocourek94/radimkocourek94.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Radim Kocourek',
      items: [
        {to: '/about', label: 'About', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'caseStudiesSidebar',
          position: 'left',
          label: 'Case studies',
        },
        {
          type: 'docSidebar',
          sidebarId: 'samplesSidebar',
          position: 'left',
          label: 'Samples',
        },
        {
          type: 'docSidebar',
          sidebarId: 'metaSidebar',
          position: 'left',
          label: 'Meta',
        },
        {
          href: 'mailto:rkocourek@protonmail.com',
          label: 'Email',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/radim-kocourek-5b3354248',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Site',
          items: [
            {label: 'About', to: '/about'},
            {label: 'Case studies', to: '/docs/case-studies'},
            {label: 'Samples', to: '/docs/samples'},
            {label: 'Meta', to: '/docs/meta'},
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:rkocourek@protonmail.com',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/radim-kocourek-5b3354248',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Source on GitHub',
              href: 'https://github.com/radimkocourek94/radimkocourek94.github.io',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus. Docs-as-code: the whole site is a deployable documentation project.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
