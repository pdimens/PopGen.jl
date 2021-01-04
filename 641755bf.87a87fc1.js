(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a(3),o=a(7),i=(a(0),a(148)),r=a(152),c=a(153),l={id:"add_info",title:"Adding Information",sidebar_label:"Adding Information"},d={unversionedId:"basics/add_info",id:"basics/add_info",isDocsHomePage:!1,title:"Adding Information",description:"PopData's standard/default format includes information on:",source:"@site/docs/basics/adding_information.md",slug:"/basics/add_info",permalink:"/PopGen.jl/docs/basics/add_info",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/basics/adding_information.md",version:"current",lastUpdatedAt:1607794309,sidebar_label:"Adding Information",sidebar:"docs",previous:{title:"Accessing elements",permalink:"/PopGen.jl/docs/basics/accessing"},next:{title:"Data exclusion",permalink:"/PopGen.jl/docs/basics/exclusion"}},b=[{value:"<code>add_meta!</code>",id:"add_meta",children:[]}],s={toc:b};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"PopData's standard/default format includes information on:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"sample name"),Object(i.b)("li",{parentName:"ul"},"sample population name"),Object(i.b)("li",{parentName:"ul"},"sample ploidy"),Object(i.b)("li",{parentName:"ul"},"sample geographical coordinates"),Object(i.b)("li",{parentName:"ul"},"sample genotypes")),Object(i.b)("p",null,"But, sometimes you might want to add more information to the data structure. That's where the convenience function ",Object(i.b)("inlineCode",{parentName:"p"},"add_meta!")," comes in."),Object(i.b)("h2",{id:"add_meta"},Object(i.b)("inlineCode",{parentName:"h2"},"add_meta!")),Object(i.b)("p",null,"This function has two methods, one for when the additional information you're adding is in the order with which your samples appear in ",Object(i.b)("inlineCode",{parentName:"p"},"PopData.meta"),", and another for when they don't. "),Object(i.b)(r.a,{block:!0,defaultValue:"s",values:[{label:"same order",value:"s"},{label:"different order",value:"d"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"s",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"add_meta!(popdata::PopData, metadata::T; name::String, loci::Bool = true, categorical::Bool = true) where T <: AbstractVector\n")),Object(i.b)("p",null,"Add an additional metadata information to a ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," object. Mutates ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," in place. Metadata\nmust be in the same order as the samples in ",Object(i.b)("inlineCode",{parentName:"p"},"PopData.meta"),"."),Object(i.b)("h4",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"popdata")," : The ",Object(i.b)("inlineCode",{parentName:"li"},"PopData")," object to add information to"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"metadata")," : A ",Object(i.b)("inlineCode",{parentName:"li"},"Vector")," with the metadata you wish to add to the ",Object(i.b)("inlineCode",{parentName:"li"},"PopData"),", in the same order as the names appear in ",Object(i.b)("inlineCode",{parentName:"li"},"PopData.meta"))),Object(i.b)("h4",{id:"keyword-arguments"},"Keyword Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," : String of the name of this new column"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"loci")," : Boolean of whether to also add this information to ",Object(i.b)("inlineCode",{parentName:"li"},"PopData.loci")," (default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"categorical"),' : Boolean of whether the metadata being added is categorical aka "factors" (default: ',Object(i.b)("inlineCode",{parentName:"li"},"true"),")"))),Object(i.b)(c.a,{value:"d",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"add_meta!(popdata::PopData, samples::Vector{String}, metadata::T; name::String, loci::Bool = true, categorical::Bool = true) where T <: AbstractVector\n")),Object(i.b)("p",null,"Add an additional metadata information to a ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," object. Mutates ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," in place.\nTakes a vector of sample names if the metadata is not in the same order as samples appear\nin ",Object(i.b)("inlineCode",{parentName:"p"},"PopData.meta"),"."),Object(i.b)("h4",{id:"arguments-1"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"popdata")," : The ",Object(i.b)("inlineCode",{parentName:"li"},"PopData")," object to add information to"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sample")," : A ",Object(i.b)("inlineCode",{parentName:"li"},"Vector{String}")," of sample names corresponding to the order of the provided ",Object(i.b)("inlineCode",{parentName:"li"},"metadata")," "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"metadata")," : A ",Object(i.b)("inlineCode",{parentName:"li"},"Vector")," with the metadata you wish to add to the ",Object(i.b)("inlineCode",{parentName:"li"},"PopData"),", in the same order as the names appear in ",Object(i.b)("inlineCode",{parentName:"li"},"PopData.meta"))),Object(i.b)("h4",{id:"keyword-arguments-1"},"Keyword Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," : String of the name of this new column"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"loci")," : Boolean of whether to also add this information to ",Object(i.b)("inlineCode",{parentName:"li"},"PopData.loci")," (default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"categorical"),' : Boolean of whether the metadata being added is categorical aka "factors" (default: ',Object(i.b)("inlineCode",{parentName:"li"},"true"),")")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"futureproofing")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"As of yet, there are no features within PopGen.jl that require the use of ",Object(i.b)("inlineCode",{parentName:"p"},"add_meta!"),", but it is a great convenience function to have in our toolset for increasingly complicated things."))))}m.isMDXComponent=!0},148:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=o.a.createContext({}),b=function(e){var t=o.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=b(a),p=n,u=s["".concat(r,".").concat(p)]||s[p]||m[p]||i;return a?o.a.createElement(u,c(c({ref:t},d),{},{components:a})):o.a.createElement(u,c({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var d=2;d<i;d++)r[d]=a[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},149:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},150:function(e,t,a){"use strict";var n=a(0),o=a(151);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},152:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(150),r=a(149),c=a(54),l=a.n(c),d=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,s=e.values,m=e.groupId,p=e.className,u=Object(i.a)(),f=u.tabGroupChoices,O=u.setTabGroupChoices,j=Object(n.useState)(c),h=j[0],g=j[1],v=n.Children.toArray(e.children);if(null!=m){var N=f[m];null!=N&&N!==h&&s.some((function(e){return e.value===N}))&&g(N)}var y=function(e){g(e),null!=m&&O(m,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},p)},s.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},153:function(e,t,a){"use strict";var n=a(3),o=a(0),i=a.n(o);t.a=function(e){var t=e.children,a=e.hidden,o=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:o}),t)}}}]);