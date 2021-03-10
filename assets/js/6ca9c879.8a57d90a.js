(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(151)),i={id:"variantcall",title:"VariantCall.jl",sidebar_label:"VariantCall.jl"},o={unversionedId:"api/variantcall",id:"api/variantcall",isDocsHomePage:!1,title:"VariantCall.jl",description:'The VariantCall__.jl files are lazy-loaded. To make the vcf and bcf function docstrings always available to the user, "placeholder" methods are provided in',source:"@site/docs/api/VariantCall.md",slug:"/api/variantcall",permalink:"/PopGen.jl/docs/api/variantcall",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/VariantCall.md",version:"current",lastUpdatedAt:1612845372,formattedLastUpdatedAt:"2/9/2021",sidebar_label:"VariantCall.jl",sidebar:"docs",previous:{title:"Utils.jl",permalink:"/PopGen.jl/docs/api/utils"}},c=[{value:"<code>openvcf</code>",id:"openvcf",children:[]},{value:"<code>bcf</code>",id:"bcf",children:[]},{value:"<code>vcf</code>",id:"vcf",children:[]}],b={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),'"Lazy Loading"')),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"The VariantCall__.jl files are lazy-loaded. To make the ",Object(l.b)("inlineCode",{parentName:"p"},"vcf")," and ",Object(l.b)("inlineCode",{parentName:"p"},"bcf"),' function docstrings always available to the user, "placeholder" methods are provided in\nVariantCall.jl and overwritten once ',Object(l.b)("inlineCode",{parentName:"p"},"VariantCallLazy.jl")," and ",Object(l.b)("inlineCode",{parentName:"p"},"VariantCallGzLazy.jl")," are lazy-loaded in. As such, the docstrings for all three source files are\nconsolidated on this page."))),Object(l.b)("h3",{id:"openvcf"},Object(l.b)("inlineCode",{parentName:"h3"},"openvcf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"openvcf(::String)\n")),Object(l.b)("p",null,"Open VCF file (",Object(l.b)("inlineCode",{parentName:"p"},".vcf(.gz)")," or ",Object(l.b)("inlineCode",{parentName:"p"},".bcf(.gz)"),") and return an ",Object(l.b)("inlineCode",{parentName:"p"},"IO")," stream in reading mode ",Object(l.b)("inlineCode",{parentName:"p"},'"r"'),"."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"bcf"},Object(l.b)("inlineCode",{parentName:"h3"},"bcf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"bcf(infile::String; ; rename_snp::Bool, silent::Bool, allow_monomorphic::Bool)\n")),Object(l.b)("p",null,"Load a BCF file into memory as a PopData object. Population information needs to be provided separately. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"infile")," : path to BCF file (can be gzipped)")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Keyword Arguments")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"rename_loci"),' : true/false of whether to simplify loci names to "snp_#" (default: ',Object(l.b)("inlineCode",{parentName:"li"},"false"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"allow_monomorphic")," : true/false of whether to keep monomorphic loci (default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"silent"),": true/false of whether to print extra file information (default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),").\nAlleles are recoded according to the following schema:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Base"),Object(l.b)("th",{parentName:"tr",align:"center"},"A"),Object(l.b)("th",{parentName:"tr",align:"center"},"T"),Object(l.b)("th",{parentName:"tr",align:"center"},"C"),Object(l.b)("th",{parentName:"tr",align:"center"},"G"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Allele")),Object(l.b)("td",{parentName:"tr",align:"center"},"1"),Object(l.b)("td",{parentName:"tr",align:"center"},"2"),Object(l.b)("td",{parentName:"tr",align:"center"},"3"),Object(l.b)("td",{parentName:"tr",align:"center"},"4")))),Object(l.b)("h4",{id:"mixed-ploidy-data"},"Mixed-ploidy data"),Object(l.b)("p",null,"If importing mixed-ploidy data (such as poolseq), you will need to perform an additional\nstep to convert the genotype column into the correct ",Object(l.b)("inlineCode",{parentName:"p"},"GenoArray")," type:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-julia"},'julia> mydata = bcf("path/to/file.bcf", silent = true, rename_loci = true) ;\njulia> mydata.loci.genotype =  mydata.loci.genotype |> Array{Union{Missing, NTuple}}\n')),Object(l.b)("hr",null),Object(l.b)("h3",{id:"vcf"},Object(l.b)("inlineCode",{parentName:"h3"},"vcf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"vcf(infile::String; ; rename_snp::Bool, silent::Bool, allow_monomorphic::Bool)\n")),Object(l.b)("p",null,"Load a VCF file into memory as a PopData object. Population information needs to be provided separately. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"infile")," : path to VCF file (can be gzipped)")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Keyword Arguments")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"rename_loci"),' : true/false of whether to simplify loci names to "snp_#" (default: ',Object(l.b)("inlineCode",{parentName:"li"},"false"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"allow_monomorphic")," : true/false of whether to keep monomorphic loci (default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"silent"),": true/false of whether to print extra file information (default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),").\nAlleles are recoded according to the following schema:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Base"),Object(l.b)("th",{parentName:"tr",align:"center"},"A"),Object(l.b)("th",{parentName:"tr",align:"center"},"T"),Object(l.b)("th",{parentName:"tr",align:"center"},"C"),Object(l.b)("th",{parentName:"tr",align:"center"},"G"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Allele")),Object(l.b)("td",{parentName:"tr",align:"center"},"1"),Object(l.b)("td",{parentName:"tr",align:"center"},"2"),Object(l.b)("td",{parentName:"tr",align:"center"},"3"),Object(l.b)("td",{parentName:"tr",align:"center"},"4")))),Object(l.b)("h4",{id:"mixed-ploidy-data-1"},"Mixed-ploidy data"),Object(l.b)("p",null,"If importing mixed-ploidy data (such as poolseq), you will need to perform an additional\nstep to convert the genotype column into the correct ",Object(l.b)("inlineCode",{parentName:"p"},"GenoArray")," type:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-julia"},'julia> mydata = vcf("path/to/file.vcf", silent = true, rename_loci = true) ;\njulia> mydata.loci.genotype =  mydata.loci.genotype |> Array{Union{Missing, NTuple}}\n')))}p.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,u=d["".concat(i,".").concat(s)]||d[s]||m[s]||l;return a?r.a.createElement(u,o(o({ref:t},b),{},{components:a})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<l;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);