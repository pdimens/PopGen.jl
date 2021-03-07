(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{108:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return p})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return b}));var n=t(3),o=t(7),i=(t(0),t(148)),l=t(152),r=t(153),c={id:"populations",title:"Location and population data",sidebar_label:"Location and population data"},p={unversionedId:"basics/populations",id:"basics/populations",isDocsHomePage:!1,title:"Location and population data",description:"Population genetics involves a focus on... populations (gasp!). The commands below show you how to view and modify both population information (names), and location information (geographic coordinates).",source:"@site/docs/basics/location_and_pop.md",slug:"/basics/populations",permalink:"/PopGen.jl/docs/basics/populations",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/basics/location_and_pop.md",version:"current",lastUpdatedAt:1615155163,sidebar_label:"Location and population data",sidebar:"docs",previous:{title:"Data exclusion",permalink:"/PopGen.jl/docs/basics/exclusion"},next:{title:"Viewing Data",permalink:"/PopGen.jl/docs/basics/viewdata"}},s=[{value:"Location Data",id:"location-data",children:[{value:"View location data",id:"view-location-data",children:[]},{value:"Add geographical coordinates",id:"add-geographical-coordinates",children:[]}]},{value:"Population Names",id:"population-names",children:[{value:"View population names",id:"view-population-names",children:[]},{value:"Rename populations",id:"rename-populations",children:[]}]}],u={toc:s};function b(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Population genetics involves a focus on... populations (gasp!). The commands below show you how to view and modify both population information (names), and location information (geographic coordinates). "),Object(i.b)("h2",{id:"location-data"},"Location Data"),Object(i.b)("h3",{id:"view-location-data"},"View location data"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"locations(data::PopData)\n")),Object(i.b)("p",null,"View location data (",Object(i.b)("inlineCode",{parentName:"p"},".longitude")," and ",Object(i.b)("inlineCode",{parentName:"p"},".latitude"),") in a ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),",  returning a table the longitude and latitude information in ",Object(i.b)("inlineCode",{parentName:"p"},"meta"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> locations(sharks)\n212\xd72 SubDataFrame\n\u2502 Row \u2502 longitude \u2502 latitude \u2502\n\u2502     \u2502 Float64   \u2502 Float64  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 -80.5993  \u2502 28.3062  \u2502\n\u2502 2   \u2502 -80.5995  \u2502 28.3079  \u2502\n\u2502 3   \u2502 -80.5996  \u2502 28.3023  \u2502\n\u2502 4   \u2502 -80.4225  \u2502 28.6123  \u2502\n\u2502 5   \u2502 -80.3578  \u2502 27.8666  \u2502\n\u2502 6   \u2502 -80.3579  \u2502 27.8666  \u2502\n\u22ee\n\u2502 206 \u2502 -86.5374  \u2502 30.064   \u2502\n\u2502 207 \u2502 -86.5376  \u2502 30.0696  \u2502\n\u2502 208 \u2502 -86.0905  \u2502 29.9065  \u2502\n\u2502 209 \u2502 -87.3661  \u2502 30.0532  \u2502\n\u2502 210 \u2502 -87.3662  \u2502 30.0522  \u2502\n\u2502 211 \u2502 -85.7143  \u2502 29.8234  \u2502\n\u2502 212 \u2502 -85.7143  \u2502 29.8234  \u2502\n")),Object(i.b)("h3",{id:"add-geographical-coordinates"},"Add geographical coordinates"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"locations!(data::PopData; long::Vector{T}, lat::Vector{T}) where T<:AbstractFloat\nlocations!(data::PopData; long::Vector{String}, lat::Vector{String})\n")),Object(i.b)("p",null,"Location data can be added using one of the methods of ",Object(i.b)("inlineCode",{parentName:"p"},"locations!"),". As indicated by the bang ",Object(i.b)("inlineCode",{parentName:"p"},"!"),", your ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," will be edited in place, and there will be no return output. If your data is in anything other than Decimal-Degrees format, this function will convert your long/lat into Decimal Degrees. To import those data into Julia, you'll likely want to use the wonderful ",Object(i.b)("inlineCode",{parentName:"p"},"CSV.jl")," package first. The functions accept keywords ",Object(i.b)("inlineCode",{parentName:"p"},"long")," and ",Object(i.b)("inlineCode",{parentName:"p"},"lat"),", or can be used without them so long as the vectors are input in that order. "),Object(i.b)(l.a,{block:!0,defaultValue:"dm",values:[{label:"decimal minutes",value:"dm"},{label:"other formats",value:"other"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"dm",mdxType:"TabItem"},Object(i.b)("p",null,"This method is pretty straightforward and tolerates vectors with ",Object(i.b)("inlineCode",{parentName:"p"},"missing")," data."),Object(i.b)("h4",{id:"formatting-requirements"},"Formatting requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Coordinates must be decimal-minutes as either ",Object(i.b)("inlineCode",{parentName:"li"},"Float32")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Float64")," (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"-21.321"),")")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"# generate some fake location data\njulia> long = rand(212) .* 10 ; lat = rand(212) .* -10\n\njulia> locations!(sharks, long, lat)\n"))),Object(i.b)(r.a,{value:"other",mdxType:"TabItem"},Object(i.b)("h4",{id:"formatting-requirements-1"},"Formatting requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Coordinates as ",Object(i.b)("inlineCode",{parentName:"li"},"String")," separated by spaces (",Object(i.b)("inlineCode",{parentName:"li"},'"11 43 41"'),") or colons (",Object(i.b)("inlineCode",{parentName:"li"},'"11:43:41"'),")"),Object(i.b)("li",{parentName:"ul"},"Must use negative sign (",Object(i.b)("inlineCode",{parentName:"li"},'"-11 43.52"'),") or single-letter cardinal direction (",Object(i.b)("inlineCode",{parentName:"li"},'"11 43.52W"'),")"),Object(i.b)("li",{parentName:"ul"},"Missing data should be coded as the string ",Object(i.b)("inlineCode",{parentName:"li"},'"missing"')," (can be accomplished with ",Object(i.b)("inlineCode",{parentName:"li"},"replace!()"),")"),Object(i.b)("li",{parentName:"ul"},"Can mix colons and spaces (although it's bad practice)")),Object(i.b)("p",null,"If not already in decimal-minutes format, it would likely be most convenient if you imported your coordinate data as vectors of strings, which would look something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'long = ["-43 54 11", "22 23 11N"]\nlat = ["11 44 31", "-25 41 13"]\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Missing values")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This method tolerates ",Object(i.b)("inlineCode",{parentName:"p"},"missing")," values, but you will need to ",Object(i.b)("inlineCode",{parentName:"p"},"replace!")," instances of ",Object(i.b)("inlineCode",{parentName:"p"},"missing")," with the string ",Object(i.b)("inlineCode",{parentName:"p"},'"missing"'),"."))))),Object(i.b)("h2",{id:"population-names"},"Population Names"),Object(i.b)("h3",{id:"view-population-names"},"View population names"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"populations(data::PopData; counts::Bool = false)\n")),Object(i.b)("p",null,"Just as you can view population names with ",Object(i.b)("inlineCode",{parentName:"p"},"PopData.meta.population"),", you can also view them with the ",Object(i.b)("inlineCode",{parentName:"p"},"populations")," command.  "),Object(i.b)(l.a,{block:!0,defaultValue:"pop",values:[{label:"populations",value:"unique"},{label:"counts = true",value:"counts"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"counts",mdxType:"TabItem"},Object(i.b)("p",null,"You can return a table of the populations and their counts"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> populations(sharks, counts = true)\n7\xd72 DataFrame\n Row \u2502 population      count \n     \u2502 String          Int64 \n\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   1 \u2502 Cape Canaveral     21\n   2 \u2502 Georgia            30\n   3 \u2502 South Carolina     28\n   4 \u2502 Florida Keys       65\n   5 \u2502 Mideast Gulf       28\n   6 \u2502 Northeast Gulf     20\n   7 \u2502 Southeast Gulf     20\n"))),Object(i.b)(r.a,{value:"unique",mdxType:"TabItem"},Object(i.b)("p",null,"You can display the unique populations. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'julia> populations(sharks)\n7-element Array{String,1}:\n "Cape Canaveral"\n "Georgia"\n "South Carolina"\n "Florida Keys"\n "Mideast Gulf"\n "Northeast Gulf"\n "Southeast Gulf"\n')))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"alias")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can use the command ",Object(i.b)("inlineCode",{parentName:"p"},"population")," for the same functionality. We made the commands ",Object(i.b)("inlineCode",{parentName:"p"},"population")," and ",Object(i.b)("inlineCode",{parentName:"p"},"populations")," synonymous so you wouldn't have to memorize if the name was singular or plural-- it just works! This also applies to ",Object(i.b)("inlineCode",{parentName:"p"},"populations!")," and ",Object(i.b)("inlineCode",{parentName:"p"},"population!")))),Object(i.b)("h3",{id:"rename-populations"},"Rename populations"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"populations!(data::PopData, rename::Dict)\npopulations!(data::PopData, rename::Vector{String})\npopulations!(data::PopData, samples::Vector{String}, populations::Vector{String})\n")),Object(i.b)("p",null,"There are a handful of methods to alter ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," population names depending on what you find most convenient. Each of these methods start with ",Object(i.b)("inlineCode",{parentName:"p"},"populations!()")," and vary in their inputs. It's for that reason this function has an uncharacteristically long docstring. However, all the methods for ",Object(i.b)("inlineCode",{parentName:"p"},"populations!")," are unified in that they edit ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," in place, and print (rather than return) a table of the new population names and counts courtesy of ",Object(i.b)("inlineCode",{parentName:"p"},"populations()"),"."),Object(i.b)(l.a,{block:!0,defaultValue:"dict",values:[{label:"using a Dictionary",value:"dict"},{label:"using a Vector of names",value:"vec"},{label:"reassign by sample",value:"samp"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"dict",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"populations!(data::PopData, rename::Dict)\n")),Object(i.b)("p",null,"Rename existing population ID's of ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," using a ",Object(i.b)("inlineCode",{parentName:"p"},"Dict")," of\n",Object(i.b)("inlineCode",{parentName:"p"},"population_name => replacement"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'# create a dictionary of name conversions\njulia> new_popnames = Dict(\n            "Cape Canaveral" => "Atlantic",\n            "Georgia" => "Atlantic",\n            "South Carolina" => "Atlantic",\n            "Florida Keys" => "Gulf",\n            "Mideast Gulf" => "Gulf",\n            "Northeast Gulf" => "Gulf",\n            "Southeast Gulf" => "Gulf"\n        );  \n\njulia> populations!(sharks, new_popnames)\n\n2\xd72 DataFrame\n\u2502 Row \u2502 population \u2502 count \u2502\n\u2502     \u2502 String     \u2502 Int64 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 Atlantic   \u2502 79    \u2502\n\u2502 2   \u2502 Gulf       \u2502 133   \u2502\n'))),Object(i.b)(r.a,{value:"vec",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"populations!(data::PopData, rename::Vector{String})\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Vector")," of new unique population names in the order that they appear in the ",Object(i.b)("inlineCode",{parentName:"p"},"PopData.meta"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'julia> new_popnames = ["Atlantic", "Atlantic", "Atlantic", "Gulf", "Gulf", "Gulf", "Gulf"] ;\n\njulia> populations!(sharks, new_popnames)\n\n2\xd72 DataFrame\n\u2502 Row \u2502 population \u2502 count \u2502\n\u2502     \u2502 String     \u2502 Int64 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 Atlantic   \u2502 79    \u2502\n\u2502 2   \u2502 Gulf       \u2502 133   \u2502\n'))),Object(i.b)(r.a,{value:"samp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"populations!(data::PopData, samples::Vector{String}, populations::Vector{String})\n")),Object(i.b)("p",null,"You may want outright overwrite all current population information. This is particularly useful when importing from VCF format when population information is not provided. This method will completely replace the population names of ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," regardless of what they currently are. "),Object(i.b)("p",null,"This method takes a vector of sample names and a vector of the new population names of the samples in the order that they appear in the name-vector."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'# creating a vector of sample names\njulia> ch_names = samples(sharks)[1:5]\n5-element Array{String,1}:\n "cc_001"\n "cc_002"\n "cc_003"\n "cc_005"\n "cc_007"\n')),Object(i.b)("p",null,"and we then also create the vector of these samples' new population names:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'julia> popnames = ["North Cape", "North Cape", "North Cape", "South Cape", "South Cape"] ;\n')),Object(i.b)("p",null,"Now we can combine them with ",Object(i.b)("inlineCode",{parentName:"p"},"populations!")," to rename the first 5 Cape Canaveral samples."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> populations!(x, ch_names, popnames)\n212\xd72 DataFrame\n\u2502 Row \u2502 name    \u2502 population \u2502\n\u2502     \u2502 String  \u2502 String     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 cc_001  \u2502 North Cape \u2502\n\u2502 2   \u2502 cc_002  \u2502 North Cape \u2502\n\u2502 3   \u2502 cc_003  \u2502 North Cape \u2502\n\u2502 4   \u2502 cc_005  \u2502 South Cape \u2502\n\u2502 5   \u2502 cc_007  \u2502 South Cape \u2502\n\u2502 6   \u2502 cc_008  \u2502 Atlantic   \u2502\n\u22ee\n\u2502 206 \u2502 seg_025 \u2502 Gulf       \u2502\n\u2502 207 \u2502 seg_026 \u2502 Gulf       \u2502\n\u2502 208 \u2502 seg_027 \u2502 Gulf       \u2502\n\u2502 209 \u2502 seg_028 \u2502 Gulf       \u2502\n\u2502 210 \u2502 seg_029 \u2502 Gulf       \u2502\n\u2502 211 \u2502 seg_030 \u2502 Gulf       \u2502\n\u2502 212 \u2502 seg_031 \u2502 Gulf       \u2502\n")))))}b.isMDXComponent=!0},148:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var a=o.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=s(e.components);return o.a.createElement(p.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},d=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return t?o.a.createElement(m,r(r({ref:a},p),{},{components:t})):o.a.createElement(m,r({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=d;var r={};for(var c in a)hasOwnProperty.call(a,c)&&(r[c]=a[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var p=2;p<i;p++)l[p]=t[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},149:function(e,a,t){"use strict";function n(e){var a,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(o&&(o+=" "),o+=t);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}a.a=function(){for(var e,a,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(o&&(o+=" "),o+=a);return o}},150:function(e,a,t){"use strict";var n=t(0),o=t(151);a.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,a,t){"use strict";var n=t(0),o=Object(n.createContext)(void 0);a.a=o},152:function(e,a,t){"use strict";var n=t(0),o=t.n(n),i=t(150),l=t(149),r=t(54),c=t.n(r),p=37,s=39;a.a=function(e){var a=e.lazy,t=e.block,r=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(i.a)(),j=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(n.useState)(r),f=O[0],g=O[1],v=n.Children.toArray(e.children);if(null!=b){var N=j[b];null!=N&&N!==f&&u.some((function(e){return e.value===N}))&&g(N)}var w=function(e){g(e),null!=b&&h(b,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},d)},u.map((function(e){var a=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===a,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===a}),key:a,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case s:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(y,e.target,e)},onFocus:function(){return w(a)},onClick:function(){w(a)}},t)}))),a?Object(n.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==f})}))))}},153:function(e,a,t){"use strict";var n=t(3),o=t(0),i=t.n(o);a.a=function(e){var a=e.children,t=e.hidden,o=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:o}),a)}}}]);