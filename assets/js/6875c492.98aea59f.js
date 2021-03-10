(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{108:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(163),s=t(168),m=t(159),i=t(164),c=t(158),o=t(157);function u(e){var a,t=e.tagName,r=e.count,n=(a=Object(o.usePluralForm)().selectMessage,function(e){return a(e,Object(c.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return l.a.createElement(c.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:n(r),tagName:t}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,o=a.allTagsPath,g=a.name,d=a.count;return l.a.createElement(n.a,{title:'Posts tagged "'+g+'"',description:'Blog | Tagged "'+g+'"',wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_posts"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(i.a,{sidebar:r})),l.a.createElement("main",{className:"col col--7"},l.a.createElement("h1",null,l.a.createElement(u,{count:d,tagName:g})),l.a.createElement(m.a,{href:o},l.a.createElement(c.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),l.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return l.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},l.a.createElement(a,null))})))))))}},164:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(0),l=t.n(r),n=t(152),s=t(159),m=t(56),i=t.n(m);function c(e){var a=e.sidebar;return 0===a.items.length?null:l.a.createElement("div",{className:Object(n.a)(i.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),l.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return l.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},l.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},168:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(152),s=t(151),m=t(158),i=t(159),c=t(172),o=t(167),u=t(57),g=t.n(u),d=t(157);a.a=function(e){var a,t,r=(a=Object(d.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(m.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),u=e.children,p=e.frontMatter,h=e.metadata,E=e.truncated,b=e.isBlogPostPage,v=void 0!==b&&b,N=h.date,f=h.formattedDate,k=h.permalink,w=h.tags,_=h.readingTime,T=p.author,P=p.title,y=p.image,L=p.keywords,M=p.author_url||p.authorURL,O=p.author_title||p.authorTitle,j=p.author_image_url||p.authorImageURL;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{keywords:L,image:y}),l.a.createElement("article",{className:v?void 0:"margin-bottom--xl"},(t=v?"h1":"h2",l.a.createElement("header",null,l.a.createElement(t,{className:Object(n.a)("margin-bottom--sm",g.a.blogPostTitle)},v?P:l.a.createElement(i.a,{to:k},P)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:N,className:g.a.blogPostDate},f,_&&l.a.createElement(l.a.Fragment,null," \xb7 ",r(_)))),l.a.createElement("div",{className:"avatar margin-vert--md"},j&&l.a.createElement(i.a,{className:"avatar__photo-link avatar__photo",href:M},l.a.createElement("img",{src:j,alt:T})),l.a.createElement("div",{className:"avatar__intro"},T&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement(i.a,{href:M},T)),l.a.createElement("small",{className:"avatar__subtitle"},O)))))),l.a.createElement("div",{className:"markdown"},l.a.createElement(s.a,{components:c.a},u)),(w.length>0||E)&&l.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement(m.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),w.map((function(e){var a=e.label,t=e.permalink;return l.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(i.a,{to:h.permalink,"aria-label":"Read more about "+P},l.a.createElement("strong",null,l.a.createElement(m.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);