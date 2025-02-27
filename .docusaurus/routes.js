import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/website-poc/__docusaurus/debug',
    component: ComponentCreator('/website-poc/__docusaurus/debug', 'f46'),
    exact: true
  },
  {
    path: '/website-poc/__docusaurus/debug/config',
    component: ComponentCreator('/website-poc/__docusaurus/debug/config', 'bc3'),
    exact: true
  },
  {
    path: '/website-poc/__docusaurus/debug/content',
    component: ComponentCreator('/website-poc/__docusaurus/debug/content', 'fe9'),
    exact: true
  },
  {
    path: '/website-poc/__docusaurus/debug/globalData',
    component: ComponentCreator('/website-poc/__docusaurus/debug/globalData', 'a84'),
    exact: true
  },
  {
    path: '/website-poc/__docusaurus/debug/metadata',
    component: ComponentCreator('/website-poc/__docusaurus/debug/metadata', '23f'),
    exact: true
  },
  {
    path: '/website-poc/__docusaurus/debug/registry',
    component: ComponentCreator('/website-poc/__docusaurus/debug/registry', 'ebe'),
    exact: true
  },
  {
    path: '/website-poc/__docusaurus/debug/routes',
    component: ComponentCreator('/website-poc/__docusaurus/debug/routes', '211'),
    exact: true
  },
  {
    path: '/website-poc/blog',
    component: ComponentCreator('/website-poc/blog', '5b8'),
    exact: true
  },
  {
    path: '/website-poc/blog/archive',
    component: ComponentCreator('/website-poc/blog/archive', 'd69'),
    exact: true
  },
  {
    path: '/website-poc/blog/authors',
    component: ComponentCreator('/website-poc/blog/authors', 'd12'),
    exact: true
  },
  {
    path: '/website-poc/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/website-poc/blog/authors/all-sebastien-lorber-articles', 'd32'),
    exact: true
  },
  {
    path: '/website-poc/blog/authors/yangshun',
    component: ComponentCreator('/website-poc/blog/authors/yangshun', '0f5'),
    exact: true
  },
  {
    path: '/website-poc/blog/first-blog-post',
    component: ComponentCreator('/website-poc/blog/first-blog-post', '933'),
    exact: true
  },
  {
    path: '/website-poc/blog/long-blog-post',
    component: ComponentCreator('/website-poc/blog/long-blog-post', '654'),
    exact: true
  },
  {
    path: '/website-poc/blog/mdx-blog-post',
    component: ComponentCreator('/website-poc/blog/mdx-blog-post', '807'),
    exact: true
  },
  {
    path: '/website-poc/blog/tags',
    component: ComponentCreator('/website-poc/blog/tags', 'ceb'),
    exact: true
  },
  {
    path: '/website-poc/blog/tags/docusaurus',
    component: ComponentCreator('/website-poc/blog/tags/docusaurus', '806'),
    exact: true
  },
  {
    path: '/website-poc/blog/tags/facebook',
    component: ComponentCreator('/website-poc/blog/tags/facebook', '335'),
    exact: true
  },
  {
    path: '/website-poc/blog/tags/hello',
    component: ComponentCreator('/website-poc/blog/tags/hello', 'b64'),
    exact: true
  },
  {
    path: '/website-poc/blog/tags/hola',
    component: ComponentCreator('/website-poc/blog/tags/hola', '59a'),
    exact: true
  },
  {
    path: '/website-poc/blog/welcome',
    component: ComponentCreator('/website-poc/blog/welcome', 'ae7'),
    exact: true
  },
  {
    path: '/website-poc/markdown-page',
    component: ComponentCreator('/website-poc/markdown-page', '7dc'),
    exact: true
  },
  {
    path: '/website-poc/docs',
    component: ComponentCreator('/website-poc/docs', '2e3'),
    routes: [
      {
        path: '/website-poc/docs',
        component: ComponentCreator('/website-poc/docs', 'bff'),
        routes: [
          {
            path: '/website-poc/docs',
            component: ComponentCreator('/website-poc/docs', 'dd4'),
            routes: [
              {
                path: '/website-poc/docs/category/tutorial---basics',
                component: ComponentCreator('/website-poc/docs/category/tutorial---basics', '77a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website-poc/docs/category/tutorial---extras',
                component: ComponentCreator('/website-poc/docs/category/tutorial---extras', '33a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website-poc/docs/intro',
                component: ComponentCreator('/website-poc/docs/intro', '7e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website-poc/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/website-poc/docs/tutorial-basics/congratulations', '1e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website-poc/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/website-poc/docs/tutorial-basics/create-a-blog-post', '78c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website-poc/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/website-poc/docs/tutorial-basics/create-a-document', '9b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website-poc/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/website-poc/docs/tutorial-basics/create-a-page', '2a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website-poc/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/website-poc/docs/tutorial-basics/deploy-your-site', '020'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website-poc/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/website-poc/docs/tutorial-basics/markdown-features', '808'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website-poc/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/website-poc/docs/tutorial-extras/manage-docs-versions', '6b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website-poc/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/website-poc/docs/tutorial-extras/translate-your-site', '9f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/website-poc/',
    component: ComponentCreator('/website-poc/', '52f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
