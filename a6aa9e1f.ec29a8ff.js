(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{145:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),l=t(21),r=t(159),c=t(176),m=t(155);var s=function(a){var e=a.metadata,t=e.previousPage,n=e.nextPage;return i.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(m.a,{className:"pagination-nav__link",to:t},i.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(m.a,{className:"pagination-nav__link",to:n},i.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},o=t(163);e.default=function(a){var e=a.metadata,t=a.items,n=a.sidebar,m=Object(l.default)().siteConfig.title,d=e.blogDescription,p=e.blogTitle,v="/"===e.permalink?m:p;return i.a.createElement(r.a,{title:v,description:d,wrapperClassName:"blog-wrapper"},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--2"},i.a.createElement(o.a,{sidebar:n})),i.a.createElement("main",{className:"col col--8"},t.map((function(a){var e=a.content;return i.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},i.a.createElement(e,null))})),i.a.createElement(s,{metadata:e})))))}}}]);