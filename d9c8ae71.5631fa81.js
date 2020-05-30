(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(165)),l={},o={id:"getting_started/io/file_import",title:"file_import",description:"Reading in data",source:"@site/docs/getting_started/io/file_import.md",permalink:"/docs/getting_started/io/file_import",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting_started/io/file_import.md"},c=[{value:"Supported File Types",id:"supported-file-types",children:[{value:"Delimited files",id:"delimited-files",children:[]},{value:"Genepop Files",id:"genepop-files",children:[]},{value:"Variant Call Format",id:"variant-call-format",children:[]}]}],p={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"reading-in-data"},"Reading in data"),Object(i.b)("p",null,"Currently, PopGen.jl provides four different file parsers with which to create ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),". Each of the file types have their own file importer denoted simply by the file type:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"File type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function to import it"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delimited"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"delimited()"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Genepop"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"genepop()"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Variant Call Format"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"vcf()"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Variant Call Format (bzipped)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"bcf()"))))),Object(i.b)("p",null,"You're encouraged to use functions, but PopGen.jl also provides you with an all-encompassing wrapper  called ",Object(i.b)("inlineCode",{parentName:"p"},"read_in()"),". "),Object(i.b)("p",null,'::: details file_import alias\nThe name "read_in" is short and sweet, but isn\'t the most descriptive, so we provide a more explicitly-named alias ',Object(i.b)("inlineCode",{parentName:"p"},"file_import()"),". Feel free to use whichever you like best.\n:::"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"read_in(infile::String; kwargs...)\nfile_import(infile::String; kwargs...)\n")),Object(i.b)("p",null,"where ",Object(i.b)("inlineCode",{parentName:"p"},"infile")," is a String of your filename (in quotes) and ",Object(i.b)("inlineCode",{parentName:"p"},"kwargs")," are the corresponding keyword arguments associated with your file type. The function ",Object(i.b)("inlineCode",{parentName:"p"},"read_in()")," uses all the same keyword arguments as do the commands specific to their file types, therefore you should have a look at those commands (usually the defaults suffice). "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"read_in()")," infers the file type from the file extension, so for it to work properly your file must end with the extensions permitted below (case insensitive). If you're feeling particularly rebellious and your file does not conform to these extensions (such as a genepop file with a ",Object(i.b)("inlineCode",{parentName:"p"},".gen.final.v2.seriously")," extension), then feel free to use the specific file importers, since they use the same exact syntax, there is zero difference in performance, and ignore file extensions. Ultimately, what crazy extensions you give your files is your business, and we love that about you. "),Object(i.b)("h2",{id:"supported-file-types"},"Supported File Types"),Object(i.b)("h3",{id:"delimited-files"},Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/getting_started/io/delimited"}),"Delimited files")),Object(i.b)("p",null,"Accepted extensions: ",Object(i.b)("inlineCode",{parentName:"p"},".csv"),", ",Object(i.b)("inlineCode",{parentName:"p"},".tsv"),", ",Object(i.b)("inlineCode",{parentName:"p"},".txt")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"files in which values are separated using a consistent delimiter, such as commas, spaces, or tabs"),Object(i.b)("li",{parentName:"ul"},"first rows are column names"),Object(i.b)("li",{parentName:"ul"},"each line represents a row")),Object(i.b)("h3",{id:"genepop-files"},Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/getting_started/io/genepop"}),"Genepop Files")),Object(i.b)("p",null,"Accepted extensions: ",Object(i.b)("inlineCode",{parentName:"p"},".gen"),", ",Object(i.b)("inlineCode",{parentName:"p"},".genepop")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"first row is a comment and skipped"),Object(i.b)("li",{parentName:"ul"},"then comes list of all loci, usually 1-per-line",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"sometimes horizontally arranged and separated by commas"))),Object(i.b)("li",{parentName:"ul"},"populations separated by a word like ",Object(i.b)("inlineCode",{parentName:"li"},'"POP"')),Object(i.b)("li",{parentName:"ul"},"sample names followed by a ",Object(i.b)("strong",{parentName:"li"},"comma, then a tab or space")),Object(i.b)("li",{parentName:"ul"},"genotypes separated by ",Object(i.b)("strong",{parentName:"li"},"tabs")," or ",Object(i.b)("strong",{parentName:"li"},"spaces")),Object(i.b)("li",{parentName:"ul"},"genotypes represented as a combination of ploidy x ",Object(i.b)("em",{parentName:"li"},"n"),"-digits ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"e.g. for genotype 001002 (3 digits per allele)"),Object(i.b)("li",{parentName:"ul"},"allele 1 = 001"),Object(i.b)("li",{parentName:"ul"},"allele 2 = 002")))),Object(i.b)("h3",{id:"variant-call-format"},Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/getting_started/io/variantcall"}),"Variant Call Format")),Object(i.b)("p",null,"Accepted extensions: ",Object(i.b)("inlineCode",{parentName:"p"},".vcf"),", ",Object(i.b)("inlineCode",{parentName:"p"},".bcf")),Object(i.b)("p",null,"This format is ",Object(i.b)("strong",{parentName:"p"},"much")," more complex and variable depending on which variant caller produced the file. If you're super duper interested in the specifications of BCF/VCF files, have a look at the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://samtools.github.io/hts-specs/VCFv4.3.pdf"}),"official specification documentation"),"."))}b.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);