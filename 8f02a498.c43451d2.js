(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(6),r=(n(0),n(165)),i={},l={id:"getting_started/io/variantcall",title:"variantcall",description:"Variant Call Format",source:"@site/docs/getting_started/io/variantcall.md",permalink:"/docs/getting_started/io/variantcall",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting_started/io/variantcall.md"},c=[{value:"Import a BCF/VCF file as a <code>PopObj</code>",id:"import-a-bcfvcf-file-as-a-popobj",children:[]},{value:"What BCF/VCF files contain and lack",id:"what-bcfvcf-files-contain-and-lack",children:[]},{value:"Format",id:"format",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"variant-call-format"},"Variant Call Format"),Object(r.b)("h2",{id:"import-a-bcfvcf-file-as-a-popobj"},"Import a BCF/VCF file as a ",Object(r.b)("inlineCode",{parentName:"h2"},"PopObj")),Object(r.b)("p",null,"PopGen.jl provides a simple command ",Object(r.b)("inlineCode",{parentName:"p"},"vcf")," to import a VCF file as a ",Object(r.b)("inlineCode",{parentName:"p"},"PopObj"),", which requires only the name of the file and nothing else. While not strictly necessary, if you have polyploid or mixed-ploidy samples, this import method may be most efficient."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'potato = vcf("/home/data/russet_potatoes.vcf")\n')),Object(r.b)("p",null,"and similar for ",Object(r.b)("inlineCode",{parentName:"p"},"bcf")," formatted files:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'cabbage = bcf("/home/data/nappa_cabbage.bcf")\n')),Object(r.b)("p",null,"::: warning Windows users\nMake sure to change your backslashes ",Object(r.b)("inlineCode",{parentName:"p"},"\\")," to forward slashes ",Object(r.b)("inlineCode",{parentName:"p"},"/"),"\n:::"),Object(r.b)("h2",{id:"what-bcfvcf-files-contain-and-lack"},"What BCF/VCF files contain and lack"),Object(r.b)("p",null,"Due to the nature of the file format, importing variant call files ",Object(r.b)("strong",{parentName:"p"},"will")," provide:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"sample names"),Object(r.b)("li",{parentName:"ul"},"ploidy of each sample"),Object(r.b)("li",{parentName:"ul"},"locus names"),Object(r.b)("li",{parentName:"ul"},"genotypes")),Object(r.b)("p",null,"but they ",Object(r.b)("strong",{parentName:"p"},"will not")," provide:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"population information"),Object(r.b)("li",{parentName:"ul"},"latitude or longitude")),Object(r.b)("p",null,"This means you will need to add that information separately afterwards. Location data (which is optional!) can be added to the ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," with the ",Object(r.b)("inlineCode",{parentName:"p"},"locations!")," command. Population names (mandatory!) can be added using ",Object(r.b)("inlineCode",{parentName:"p"},"populations!()")),Object(r.b)("h2",{id:"format"},"Format"),Object(r.b)("p",null,"Variant Call Format (or ",Object(r.b)("em",{parentName:"p"},"VCF"),") files already follow a format standard, and while there is some wiggle-room for optional values, PopGen.jl only requires the core/mandatory components of a VCF, meaning problems should hopefully not arise regardless of which variant caller you are using (although we use ",Object(r.b)("inlineCode",{parentName:"p"},"Freebayes")," ourselves). Please open an issue if they do, or reach out to us on the community Slack."),Object(r.b)("p",null,"::: danger Filter files beforehand\nKeep in mind, BCF/VCF files need to be filtered ",Object(r.b)("strong",{parentName:"p"},"before")," importing them into PopGen.jl. There is no and will be no VCF-filtering functionality to this package, as it is outside of the purpose of PopGen.jl. Refer to ",Object(r.b)("inlineCode",{parentName:"p"},"vcftools"),", ",Object(r.b)("inlineCode",{parentName:"p"},"bcftools"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"vcflib")," to filter your sequence data.\n:::"),Object(r.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(r.b)("p",null,"The majority of the BCF/VCF reader is thanks to the tremendous efforts of Ben J. Ward and the BioJulia contributors involved in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/BioJulia/GeneticVariation.jl"}),"GeneticVariation.jl"),", which we use to parse files into `PopData format. If you love the file importer, then give those folks your thanks. If something is wrong and/or you hate the importer, blame us (and please ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pdimens/PopGen.jl/issues"}),"open up an issue")," \ud83d\ude05)."))}s.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);