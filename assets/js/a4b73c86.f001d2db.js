(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),o=(a(0),a(151)),r={id:"vcf",title:"Variant Call Format",sidebar_label:"Variant Call Format"},l={unversionedId:"io/vcf",id:"io/vcf",isDocsHomePage:!1,title:"Variant Call Format",description:"Import a BCF/VCF file as PopData",source:"@site/docs/io/variantcall.md",slug:"/io/vcf",permalink:"/PopGen.jl/docs/io/vcf",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/io/variantcall.md",version:"current",lastUpdatedAt:1612836189,formattedLastUpdatedAt:"2/9/2021",sidebar_label:"Variant Call Format",sidebar:"docs",previous:{title:"Structure format",permalink:"/PopGen.jl/docs/io/structure"},next:{title:"Start here",permalink:"/PopGen.jl/docs/basics/manipulate"}},c=[{value:"Import a BCF/VCF file as <code>PopData</code>",id:"import-a-bcfvcf-file-as-popdata",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Keyword Arguments",id:"keyword-arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Mixed-Ploidy data",id:"mixed-ploidy-data",children:[]},{value:"Format",id:"format",children:[]},{value:"Allele encodings",id:"allele-encodings",children:[]},{value:"What BCF/VCF files contain and lack",id:"what-bcfvcf-files-contain-and-lack",children:[]}]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],p={toc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"import-a-bcfvcf-file-as-popdata"},"Import a BCF/VCF file as ",Object(o.b)("inlineCode",{parentName:"h2"},"PopData")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-julia"},"vcf(infile::String; rename_snp::Bool, silent::Bool, allow_monomorphic::Bool)\nbcf(infile::String; rename_snp::Bool, silent::Bool, allow_monomorphic::Bool)\n")),Object(o.b)("p",null,"PopGen.jl provides the commands ",Object(o.b)("inlineCode",{parentName:"p"},"vcf")," and ",Object(o.b)("inlineCode",{parentName:"p"},"bcf")," to import a variant call format files into ",Object(o.b)("inlineCode",{parentName:"p"},"PopData"),". The reader also accepts files that are gzipped. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Lazy Loading")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The packages required to import BCF/VCF files (",Object(o.b)("inlineCode",{parentName:"p"},"GeneticVariation.jl")," and ",Object(o.b)("inlineCode",{parentName:"p"},"GZip.jl"),") are lazy-loaded and not included as dependencies within PopGen.jl, so you will need to install them manually with (",Object(o.b)("inlineCode",{parentName:"p"},"]add GeneticVariation GZip"),"). If you have not-gzipped variant call files, then\nyou'll need to call ",Object(o.b)("inlineCode",{parentName:"p"},"using GeneticVariation")," before ",Object(o.b)("inlineCode",{parentName:"p"},"bcf")," and ",Object(o.b)("inlineCode",{parentName:"p"},"vcf")," become available to use. If your files are compressed, then you'll need to call\n",Object(o.b)("inlineCode",{parentName:"p"},"using GZip")," too."))),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"infile::String")," : path to file, in quotes. ",Object(o.b)("strong",{parentName:"li"},"must end in ",Object(o.b)("inlineCode",{parentName:"strong"},".gz")," if gzipped"))),Object(o.b)("h3",{id:"keyword-arguments"},"Keyword Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rename_loci::Bool"),": whether to simplify loci names to ",Object(o.b)("inlineCode",{parentName:"li"},"snp_#")," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"allow_monomorphic::Bool")," : whether to keep monomorphic loci (default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"silent::Bool")," : whether to print file information during import (default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-julia"},'using GeneticVariation\ncabbage = bcf("/home/data/nappa_cabbage.bcf", rename_loci = true, silent = true)\n\nusing GZip\npotato = vcf("/home/data/russet_potatoes.vcf.gz", allow_monomorphic = true)\n')),Object(o.b)("h3",{id:"mixed-ploidy-data"},"Mixed-Ploidy data"),Object(o.b)("p",null,"In the event your variant call file is for mixed-ploidy data (where ploidy is not the same across all samples, e.g. PoolSeq), you will need to perform an additional step after reading in your data as ",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," to convert the ",Object(o.b)("inlineCode",{parentName:"p"},".loci.genotype")," column into a ",Object(o.b)("inlineCode",{parentName:"p"},"GenoArray"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-julia"},'julia> mydata = bcf("path/to/file.bcf", silent = true, rename_loci = true) ;\n\njulia> mydata.loci.genotype =  mydata.loci.genotype |> Array{Union{Missing, NTuple}}\n')),Object(o.b)("h3",{id:"format"},"Format"),Object(o.b)("p",null,"Variant Call Format files follow a format standard, and while there is some wiggle-room for optional values, PopGen.jl only requires the core/mandatory components of a BCF/VCF, meaning problems should hopefully not arise regardless of which variant caller you are using (although we use ",Object(o.b)("inlineCode",{parentName:"p"},"Freebayes")," ourselves). Please open an issue if they do, or reach out to us on the community Slack."),Object(o.b)("h3",{id:"allele-encodings"},"Allele encodings"),Object(o.b)("p",null,"When converting to ",Object(o.b)("inlineCode",{parentName:"p"},"PopData"),", the nucleotides will be recoded according to this table:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Base"),Object(o.b)("th",{parentName:"tr",align:"center"},"A"),Object(o.b)("th",{parentName:"tr",align:"center"},"T"),Object(o.b)("th",{parentName:"tr",align:"center"},"C"),Object(o.b)("th",{parentName:"tr",align:"center"},"G"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Allele")),Object(o.b)("td",{parentName:"tr",align:"center"},"1"),Object(o.b)("td",{parentName:"tr",align:"center"},"2"),Object(o.b)("td",{parentName:"tr",align:"center"},"3"),Object(o.b)("td",{parentName:"tr",align:"center"},"4")))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Filter files beforehand")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Keep in mind, BCF/VCF files need to be filtered ",Object(o.b)("strong",{parentName:"p"},"before")," importing them into PopGen.jl. There is no and will be no VCF-filtering functionality to this package, as it is outside of the purpose of PopGen.jl. Refer to ",Object(o.b)("inlineCode",{parentName:"p"},"vcftools"),", ",Object(o.b)("inlineCode",{parentName:"p"},"bcftools"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"vcflib")," to filter your sequence data. "))),Object(o.b)("h3",{id:"what-bcfvcf-files-contain-and-lack"},"What BCF/VCF files contain and lack"),Object(o.b)("p",null,"Due to the nature of the file format, importing variant call files ",Object(o.b)("strong",{parentName:"p"},"will")," provide:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"sample names"),Object(o.b)("li",{parentName:"ul"},"ploidy of each sample"),Object(o.b)("li",{parentName:"ul"},"locus names"),Object(o.b)("li",{parentName:"ul"},"genotypes")),Object(o.b)("p",null,"but they ",Object(o.b)("strong",{parentName:"p"},"will not")," provide:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"population information"),Object(o.b)("li",{parentName:"ul"},"geographical coordinate information")),Object(o.b)("p",null,"This means you will need to add that information separately afterwards. Location data (which is ",Object(o.b)("em",{parentName:"p"},"optional"),") can be added to the ",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"locations!")," command. Population names (",Object(o.b)("em",{parentName:"p"},"mandatory"),") can be added using ",Object(o.b)("inlineCode",{parentName:"p"},"populations!()")),Object(o.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(o.b)("p",null,"The majority of the BCF/VCF reader is thanks to the tremendous efforts of Ben J. Ward and the BioJulia contributors involved in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/BioJulia/GeneticVariation.jl"},"GeneticVariation.jl"),", which we use to parse your files into ",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," format. If you love the file importer, then give those folks your thanks. If something is wrong and/or you hate the importer, blame us first (and please ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pdimens/PopGen.jl/issues"},"open up an issue")," \ud83d\ude05)."))}b.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(a),s=n,u=d["".concat(r,".").concat(s)]||d[s]||m[s]||o;return a?i.a.createElement(u,l(l({ref:t},p),{},{components:a})):i.a.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);