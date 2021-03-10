(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{148:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(16),i=t(163),m=t(168),s=t(159),c=t(158);var o=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},t&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t},l.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.a.createElement(c.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&l.a.createElement(s.a,{className:"pagination-nav__link",to:r},l.a.createElement("div",{className:"pagination-nav__label"},l.a.createElement(c.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},d=t(164);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,s=Object(n.default)().siteConfig.title,c=a.blogDescription,g=a.blogTitle,u="/"===a.permalink?s:g;return l.a.createElement(i.a,{title:u,description:c,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_posts_list"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(d.a,{sidebar:r})),l.a.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return l.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},l.a.createElement(a,null))})),l.a.createElement(o,{metadata:a})))))}},164:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(0),l=t.n(r),n=t(152),i=t(159),m=t(56),s=t.n(m);function c(e){var a=e.sidebar;return 0===a.items.length?null:l.a.createElement("div",{className:Object(n.a)(s.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:s.a.sidebarItemTitle},a.title),l.a.createElement("ul",{className:s.a.sidebarItemList},a.items.map((function(e){return l.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},l.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))}))))}},168:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(152),i=t(151),m=t(158),s=t(159),c=t(172),o=t(167),d=t(57),g=t.n(d),u=t(157);a.a=function(e){var a,t,r=(a=Object(u.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(m.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=e.children,p=e.frontMatter,v=e.metadata,E=e.truncated,b=e.isBlogPostPage,h=void 0!==b&&b,N=v.date,_=v.formattedDate,f=v.permalink,k=v.tags,w=v.readingTime,T=p.author,L=p.title,M=p.image,O=p.keywords,P=p.author_url||p.authorURL,x=p.author_title||p.authorTitle,y=p.author_image_url||p.authorImageURL;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{keywords:O,image:M}),l.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(t=h?"h1":"h2",l.a.createElement("header",null,l.a.createElement(t,{className:Object(n.a)("margin-bottom--sm",g.a.blogPostTitle)},h?L:l.a.createElement(s.a,{to:f},L)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:N,className:g.a.blogPostDate},_,w&&l.a.createElement(l.a.Fragment,null," \xb7 ",r(w)))),l.a.createElement("div",{className:"avatar margin-vert--md"},y&&l.a.createElement(s.a,{className:"avatar__photo-link avatar__photo",href:P},l.a.createElement("img",{src:y,alt:T})),l.a.createElement("div",{className:"avatar__intro"},T&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement(s.a,{href:P},T)),l.a.createElement("small",{className:"avatar__subtitle"},x)))))),l.a.createElement("div",{className:"markdown"},l.a.createElement(i.a,{components:c.a},d)),(k.length>0||E)&&l.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement(m.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var a=e.label,t=e.permalink;return l.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(s.a,{to:v.permalink,"aria-label":"Read more about "+L},l.a.createElement("strong",null,l.a.createElement(m.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);