import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [

  {
    title: 'Identity',
    path: "/",
    pages: [
      {
        path: '/identity',
        title: "THS visual identity",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/identity/logotypes',
        title: "Logotypes",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/identity/color',
        title: "Color",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/identity/image-treatment',
        title: "Image treatment",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/identity/typography',
        title: "Typography",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/identity/opening-and-closing-branding',
        title: "Opening och closing branding",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      // Other subpages of 'Basics'
    ]
  },
  {
    title: 'Web',
    path: "/",
    pages: [
      {
        path: '/web',
        title: "Introduction",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: 'web/browsing-feedback',
        title: "Browsing feedback",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: 'web/error-feedback',
        title: "Errors",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/web/focus',
        title: "Focus",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/web/buttons',
        title: "Buttons",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/web/templates',
        title: "Templates",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: 'web/icons',
        title: "Icons",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: 'web/image-ratios',
        title: "Image ratios",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: 'web/links',
        title: "Links",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: 'web/links',
        title: "Links",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: 'web/accessibility',
        title: "Text",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: 'web/accessibility-checklist',
        title: "Accessibility Checklist",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      // Other subpages of 'Basics'
    ]
  },
  {
    title: 'Apps',
    path: "/",
    pages: [
      {
        path: '/apps',
        title: "Introduction",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/apps/design-elements',
        title: "Design Elements",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/apps/platforms-apps',
        title: "Platforms",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/apps/accessibility-apps',
        title: "Accessibility",
        content: pageLoader(() => import('./WELCOME.md'))
      }
      // Other subpages of 'Basics'
    ]
  },
  {
    title: 'About',
    path: "/",
    pages: [
      {
        path: '/identity',
        title: "About the Styleguide",
        content: pageLoader(() => import('./WELCOME.md'))
      },
      {
        path: '/identity/logotypes',
        title: "Logotypes",
        content: pageLoader(() => import('./WELCOME.md'))
      }
      // Other subpages of 'Basics'
    ]
  },
];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
);
