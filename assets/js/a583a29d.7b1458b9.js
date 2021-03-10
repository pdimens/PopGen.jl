(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),l=(n(0),n(151)),o={id:"summaryinfo",title:"SummaryInfo.jl",sidebar_label:"SummaryInfo.jl"},i={unversionedId:"api/summaryinfo",id:"api/summaryinfo",isDocsHomePage:!1,title:"SummaryInfo.jl",description:"alele_table",source:"@site/docs/api/SummaryInfo.md",slug:"/api/summaryinfo",permalink:"/PopGen.jl/docs/api/summaryinfo",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/SummaryInfo.md",version:"current",lastUpdatedAt:1605726478,formattedLastUpdatedAt:"11/18/2020",sidebar_label:"SummaryInfo.jl",sidebar:"docs",previous:{title:"Structure.jl",permalink:"/PopGen.jl/docs/api/structure"},next:{title:"Types.jl",permalink:"/PopGen.jl/docs/api/types"}},c=[{value:"<code>alele_table</code>",id:"alele_table",children:[]},{value:"<code>allele_avg</code>",id:"allele_avg",children:[]},{value:"<code>richness</code>",id:"richness",children:[]},{value:"<code>summary</code>",id:"summary",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"alele_table"},Object(l.b)("inlineCode",{parentName:"h3"},"alele_table")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-julia"},"allele_table(data::PopData)\n")),Object(l.b)("p",null,'Return a "tidy" DataFrame of the loci, their alleles, and their alleles\' frequencies.'),Object(l.b)("hr",null),Object(l.b)("h3",{id:"allele_avg"},Object(l.b)("inlineCode",{parentName:"h3"},"allele_avg")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-julia"},"allele_avg(data::PopData, rounding::Bool = true)\n")),Object(l.b)("p",null,"Returns a NamedTuple of the average number of alleles ('mean') and standard deviation (",Object(l.b)("inlineCode",{parentName:"p"},"stdev"),") of a ",Object(l.b)("inlineCode",{parentName:"p"},"PopData"),". Use ",Object(l.b)("inlineCode",{parentName:"p"},"rounding = false")," to not round results. Default (",Object(l.b)("inlineCode",{parentName:"p"},"true"),") roundsto 4 digits."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-julia"},"allele_avg(@nancycats, rounding = false)\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"richness"},Object(l.b)("inlineCode",{parentName:"h3"},"richness")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-julia"},"richness(data::PopData)\n")),Object(l.b)("p",null,"Calculates various allelic richness and returns a table of per-locus allelic richness. Use ",Object(l.b)("inlineCode",{parentName:"p"},"populations = true")," to calculate richness by locus by population."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"summary"},Object(l.b)("inlineCode",{parentName:"h3"},"summary")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-julia"},'summary(data::PopData; by::String = "global")\n')),Object(l.b)("p",null,"Provides summary statistics for a ",Object(l.b)("inlineCode",{parentName:"p"},"PopData")," object. Use ",Object(l.b)("inlineCode",{parentName:"p"},'by = "locus"')," for\nsummary information by locus. Global values are given as unweighted means of\nthe per-locus parameters."),Object(l.b)("h4",{id:"het_obs"},"Het_obs"),Object(l.b)("p",null,"observed heterozygosity given as:"),Object(l.b)("p",null,"1 - \u2211\u2096 \u2211\u1d62 P\u2096\u1d62\u1d62/np"),Object(l.b)("p",null,"where Pkii represents the proportion of homozygote ",Object(l.b)("inlineCode",{parentName:"p"},"i")," in sample ",Object(l.b)("inlineCode",{parentName:"p"},"k")," and ",Object(l.b)("inlineCode",{parentName:"p"},"np"),"\nis the number of samples in that population"),Object(l.b)("h4",{id:"ht"},"HT"),Object(l.b)("p",null,"overall gene diversity given as:"),Object(l.b)("p",null,"1 - \u2211\u1d62(p\u0304\u1d62\xb2 + (HS / (n\u0303 \xd7 np)) - Het_obs / (2 \xd7 n\u0303 \xd7 np))\nwhere p\u0304\u1d62 = \u2211\u2096p\u2096\u1d62 / np"),Object(l.b)("h4",{id:"hs"},"HS"),Object(l.b)("p",null,"within population gene diversity given as:"),Object(l.b)("p",null,"1 - \u2211\u1d62(p\u1d62\xb2 + HS / (n\u0303 \xd7 np) - Het_obs / (2 \xd7 n\u0303 \xd7 np))\nwhere n\u0303 = np / \u2211\u2096(1/n\u2096)\nwhere p\u0304\u1d62\xb2 = \u2211\u2096(p\u1d62\u2096\xb2 / np)"),Object(l.b)("h4",{id:"dst"},"DST"),Object(l.b)("p",null,"amount of gene diversity among samples given as:"),Object(l.b)("p",null,"HT - HS"),Object(l.b)("h4",{id:"dst-1"},"DST\u2032"),Object(l.b)("p",null,"amount of gene diversity among samples adjusted for sample size given as:"),Object(l.b)("p",null,"(np / (np-1)) \xd7 Dst"),Object(l.b)("h4",{id:"ht-1"},"HT\u2032"),Object(l.b)("p",null,"overall gene diversity adjusted for sample size given as:"),Object(l.b)("p",null,"HS + DST\u2032"),Object(l.b)("h4",{id:"fst"},"FST"),Object(l.b)("p",null,"proportion of the total genetic variance in subpopulations relative to the total genetic variance  given as:"),Object(l.b)("p",null,"DST / HT"),Object(l.b)("h4",{id:"fst-1"},"FST\u2032"),Object(l.b)("p",null,"proportion of the total genetic variance in subpopulations relative to the total genetic variance, adjusted for\nheterozygosity given as:"),Object(l.b)("p",null,"DST\u2032 / HT\u2032"),Object(l.b)("h4",{id:"fis"},"FIS"),Object(l.b)("p",null,"proportion of the genetic variance in a locus relative to the genetic variance within subpopulations given as:"),Object(l.b)("p",null,"1 - (Het_obs / HS)"),Object(l.b)("h4",{id:"dest"},"DEST"),Object(l.b)("p",null,"population differentiation (Jost 2008) given as:"),Object(l.b)("p",null,"(np/(np-1)) \xd7 (Ht'-Hs) / (1-Hs)"))}b.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||l;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);