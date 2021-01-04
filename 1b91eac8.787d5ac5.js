(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(m,p(p({ref:t},c),{},{components:n})):i.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),r=(n(0),n(148)),o={id:"popgensims_utils",title:"Utils.jl",sidebar_label:"Utils.jl"},p={unversionedId:"api/PopGenSims/popgensims_utils",id:"api/PopGenSims/popgensims_utils",isDocsHomePage:!1,title:"Utils.jl",description:"append!",source:"@site/docs/api/PopGenSims/Utils.md",slug:"/api/PopGenSims/popgensims_utils",permalink:"/PopGen.jl/docs/api/PopGenSims/popgensims_utils",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/PopGenSims/Utils.md",version:"current",lastUpdatedAt:1605726478,sidebar_label:"Utils.jl",sidebar:"docs",previous:{title:"Sibship.jl",permalink:"/PopGen.jl/docs/api/PopGenSims/popgensims_sibship"},next:{title:"Structure.jl",permalink:"/PopGen.jl/docs/api/structure"}},l=[{value:"<code>append!</code>",id:"append",children:[]},{value:"<code>append</code>",id:"append-1",children:[]},{value:"<code>simulate_sample</code>",id:"simulate_sample",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"append"},Object(r.b)("inlineCode",{parentName:"h3"},"append!")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"append!(data::PopData, data2::PopData)\n")),Object(r.b)("p",null,"Add the rows of ",Object(r.b)("inlineCode",{parentName:"p"},"data2")," to the end of ",Object(r.b)("inlineCode",{parentName:"p"},"data"),". This will add the samples present\nin the second ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object to the first ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object (mutating it).\n",Object(r.b)("strong",{parentName:"p"},"Note")," that this is a simple appending, and you risk corrupting your ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," if\nthe two ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," objects do not have identical loci."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'julia> cats = @nancycats\nPopData Object\n  Markers: Microsatellite\n  Ploidy: 2\n  Samples: 237\n  Loci: 9\n  Populations: 17\n  Longitude: absent\n  Latitude: absent\n\njulia> purrfect_pairs = cross(cats, "N200", "N7", generation = "F1")\nPopData Object\n  Markers: Microsatellite\n  Ploidy: 2\n  Samples: 100\n  Loci: 9\n  Populations: 1\n  Longitude: absent\n  Latitude: absent\n\njulia> append!(cats, purrfect_pairs)\nPopData Object\n  Markers: Microsatellite\n  Ploidy: 2\n  Samples: 337\n  Loci: 9\n  Populations: 18\n  Longitude: absent\n  Latitude: absent\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"append-1"},Object(r.b)("inlineCode",{parentName:"h3"},"append")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"append(data::PopData, data2::PopData)\n")),Object(r.b)("p",null,"Add the rows of ",Object(r.b)("inlineCode",{parentName:"p"},"data2")," to the end of ",Object(r.b)("inlineCode",{parentName:"p"},"data"),". This will combine the samples present\nin both ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," objects and return a new ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object. ",Object(r.b)("strong",{parentName:"p"},"Note")," that this is\na simple appending, and you risk corrupting your ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," if the two ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),"\nobjects do not have identical loci."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'julia> cats = @nancycats\nPopData Object\n  Markers: Microsatellite\n  Ploidy: 2\n  Samples: 237\n  Loci: 9\n  Populations: 17\n  Longitude: absent\n  Latitude: absent\n\njulia> purrfect_pairs = cross(cats, "N200", "N7", generation = "F1")\nPopData Object\n  Markers: Microsatellite\n  Ploidy: 2\n  Samples: 100\n  Loci: 9\n  Populations: 1\n  Longitude: absent\n  Latitude: absent\n\njulia> merged_cats = append(cats, purrfect_pairs)\nPopData Object\n  Markers: Microsatellite\n  Ploidy: 2\n  Samples: 337\n  Loci: 9\n  Populations: 18\n  Longitude: absent\n  Latitude: absent\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"simulate_sample"},Object(r.b)("inlineCode",{parentName:"h3"},"simulate_sample")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"simulate_sample(alleles::Dict{String,NTuple}, loc::Vector{String}; ploidy::Int)\n")),Object(r.b)("p",null,"Using a global allele pool given by a Dict{loci,alleles} and a list of loci (",Object(r.b)("inlineCode",{parentName:"p"},"loc"),"), simulate\nan individual with a given ",Object(r.b)("inlineCode",{parentName:"p"},"ploidy"),". Returns a Vector of genotypes."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"julia> cats = @nancycats ;\njulia> loc, alleles = allele_pool(cats) ;\njulia> simulate_parent(alleles, loc, ploidy = 2)\n9-element Array{Array{Int16,1},1}:\n [139, 129]\n [146, 146]\n [145, 141]\n [126, 126]\n [150, 148]\n [148, 140]\n [185, 199]\n [91, 113]\n [208, 208]\n")))}s.isMDXComponent=!0}}]);