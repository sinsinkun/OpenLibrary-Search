(this["webpackJsonpopenlibrary-search"]=this["webpackJsonpopenlibrary-search"]||[]).push([[0],{17:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),c=r(19),i=r.n(c),a=r(9),l=r(2),o=r(4),j=r(8),u=r(0),d={winX:window.innerWidth,winY:window.innerHeight,sortedResults:{},resultsPerPage:20},h=function(e,t){switch(t.do){case"resize":return Object(j.a)(Object(j.a)({},e),{},{winX:window.innerWidth,winY:window.innerHeight});case"saveResults":return Object(j.a)(Object(j.a)({},e),{},{sortedResults:t.data});case"newRPP":return Object(j.a)(Object(j.a)({},e),{},{resultsPerPage:t.data});default:throw new Error("Invalid action type: ".concat(t.do))}},b=Object(n.createContext)(),O=function(e){var t=Object(n.useReducer)(h,d),r=Object(o.a)(t,2),s=r[0],c=r[1];return Object(n.useEffect)((function(){function e(){c({do:"resize"})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(u.jsx)(b.Provider,{value:[s,c],children:e.children})},x=function(){return Object(n.useContext)(b)};r(17);var p=function(){return Object(u.jsxs)("div",{style:{textAlign:"center",marginTop:"6rem"},children:[Object(u.jsx)("h2",{children:"PAGE NOT FOUND"}),Object(u.jsx)("p",{children:"The page you are looking for could not be found..."})]})};var f=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),r=t[0],s=t[1],c=x(),i=Object(o.a)(c,1)[0];function l(){s(!r)}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)("div",{className:"title",role:"heading","aria-level":"1",children:"Open Library Search Tool"}),Object(u.jsx)("div",{className:"spacer"}),i.winX>780?Object(u.jsxs)("ul",{role:"navigation",children:[Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{exact:!0,to:"/",className:"nav-link",activeClassName:"active",children:"Main"})}),Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{exact:!0,to:"/instructions",className:"nav-link",activeClassName:"active",children:"Instructions"})})]}):Object(u.jsx)("button",{onClick:l,"aria-expanded":!!r,children:"Menu"})]}),i.winX<780?Object(u.jsx)("div",{className:r?"sidenav":"sidenav hidden",children:Object(u.jsxs)("ul",{role:"navigation",children:[Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{exact:!0,to:"/",className:"nav-link",activeClassName:"active",onClick:l,children:"Main"})}),Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{exact:!0,to:"/instructions",className:"nav-link",activeClassName:"active",onClick:l,children:"Instructions"})})]})}):""]})};var v=function(){return Object(u.jsxs)("footer",{children:[Object(u.jsx)("span",{children:"Open Library Search Tool"}),"\xa0\xa0",Object(u.jsx)("span",{className:"muted",children:"JingChang Xiao 2021"})]})},m=r(16),g=r.n(m),y=r(21);var P=function(){var e=x(),t=Object(o.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),a=i[0],l=i[1],d=Object(n.useState)(!1),h=Object(o.a)(d,2),b=h[0],O=h[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),v=f[0],m=f[1],P=Object(n.useRef)();function k(e,t){return e.title>t.title?1:e.title<t.title?-1:0}function w(e,t){return e.first_publish_year<t.first_publish_year?1:e.first_publish_year>t.first_publish_year?-1:0}function N(e){return C.apply(this,arguments)}function C(){return(C=Object(y.a)(g.a.mark((function e(t){var r,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),P.current.classList.remove("hidden"),P.current.innerText="Searching...",""!==(r=a.replace(" ","+"))&&"+"!==r){e.next=7;break}return P.current.innerText="Please enter a search term.",e.abrupt("return");case 7:return e.next=9,fetch("https://openlibrary.org/search.json?q=".concat(r)).then((function(e){return e.json()})).catch((function(e){console.log(e),P.current.innerText="Error: Something went wrong with your search"}));case 9:n=e.sent,b&&(P.current.innerText="Sorting the results...",n.docs.sort(k)),v&&(P.current.innerText="Sorting the results...",n.docs.sort(w)),s({do:"saveResults",data:n}),P.current.innerText="",P.current.classList.add("hidden");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){s({do:"newRPP",data:e})}return Object(u.jsxs)("div",{className:"search-area",onSubmit:function(e){return N(e)},children:[Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"search-bar",children:[Object(u.jsx)("input",{type:"text",name:"search",placeholder:"Search for a book","aria-required":"true",value:a,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("button",{onClick:N,children:"Search"})]}),Object(u.jsx)("span",{className:"error-msg hidden",ref:P}),Object(u.jsxs)("div",{className:"sort-options",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",id:"sortByAlphabet",checked:b,onChange:function(e){return function(e){if(!b){var t=r.sortedResults;Object.keys(t).length>0&&(t.docs.sort(k),s({do:"saveResults",data:Object(j.a)({},t)}))}O(e.target.checked)}(e)}}),Object(u.jsx)("label",{htmlFor:"sortByAlphabet",children:"Sort by alphabetical order"})]}),"\xa0",Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",id:"sortByPublish",checked:v,onChange:function(e){return function(e){if(!v){var t=r.sortedResults;Object.keys(t).length>0&&(t.docs.sort(w),s({do:"saveResults",data:Object(j.a)({},t)}))}m(e.target.checked)}(e)}}),Object(u.jsx)("label",{htmlFor:"sortByPublish",children:"Sort by date of publishing"})]})]})]}),Object(u.jsxs)("div",{className:"page-options",children:[Object(u.jsx)("span",{children:"Number of results per page: "}),Object(u.jsx)("input",{type:"radio",name:"resultsPerPage",id:"display10",onChange:function(){return S(10)},defaultChecked:10===r.resultsPerPage}),Object(u.jsx)("label",{htmlFor:"display10",children:"10"}),"\xa0",Object(u.jsx)("input",{type:"radio",name:"resultsPerPage",id:"display20",onChange:function(){return S(20)},defaultChecked:20===r.resultsPerPage}),Object(u.jsx)("label",{htmlFor:"display20",children:"20"}),"\xa0",Object(u.jsx)("input",{type:"radio",name:"resultsPerPage",id:"display50",onChange:function(){return S(50)},defaultChecked:50===r.resultsPerPage}),Object(u.jsx)("label",{htmlFor:"display50",children:"50"})]})]})};var k=function(){var e=x(),t=Object(o.a)(e,1)[0],r=Object(n.useState)(-1),s=Object(o.a)(r,2),c=s[0],i=s[1],a=Object(n.useState)([]),l=Object(o.a)(a,2),j=l[0],d=l[1],h=Object(n.useState)(-1),b=Object(o.a)(h,2),O=b[0],p=b[1],f=Object(n.useState)(1),v=Object(o.a)(f,2),m=v[0],g=v[1];function y(e){var r=(e-1)*t.resultsPerPage,n=r+t.resultsPerPage;window.scrollTo({top:0,behavior:"smooth"}),g(e),d(t.sortedResults.docs.slice(r,n))}return Object(n.useEffect)((function(){if(Object.keys(t.sortedResults).length>0){i(t.sortedResults.numFound);var e=1;e=t.sortedResults.numFound<100?Math.ceil(t.sortedResults.numFound/t.resultsPerPage):Math.ceil(100/t.resultsPerPage),p(e),g(1),d(t.sortedResults.docs.slice(0,t.resultsPerPage))}}),[t.sortedResults,t.resultsPerPage]),Object(u.jsxs)("div",{className:"results-container",children:[-1===c?"":Object(u.jsxs)("div",{className:"count",children:["Number of results: ",c>100?"100+":c]}),Object(u.jsx)("div",{className:"results",role:"region",children:j.map((function(e,t){return Object(u.jsxs)("div",{className:"entry",children:[Object(u.jsx)("div",{className:"cover",children:e.cover_i?Object(u.jsx)("img",{src:"http://covers.openlibrary.org/b/id/".concat(e.cover_i,"-M.jpg"),alt:"".concat(e.title," cover"),height:"100%"}):"(No cover available)"}),Object(u.jsxs)("p",{className:"title",children:[e.title.length<53?e.title:e.title.slice(0,50)+"...",e.title.length<53?"":Object(u.jsx)("span",{className:"fullname",children:e.title})]}),Object(u.jsxs)("p",{children:["by ",Array.isArray(e.author_name)?e.author_name[0]:e.author_name||"(Unknown)"]}),Object(u.jsxs)("p",{children:["Published in ",e.first_publish_year||"(Unknown)"]}),Object(u.jsx)("a",{href:"https://openlibrary.org"+e.seed[0],target:"_blank",rel:"noreferrer",children:"Link to entry"})]},"display-"+t)}))}),-1===O?"":Object(u.jsx)("div",{className:"pages",children:function(){for(var e=[],t=function(t){t===m-1?e.push(Object(u.jsx)("button",{className:"active",onClick:function(){return y(t+1)},children:t+1},"page-select-"+t)):e.push(Object(u.jsx)("button",{onClick:function(){return y(t+1)},children:t+1},"page-select-"+t))},r=0;r<O;r++)t(r);return e}()})]})};r(33);var w=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(P,{}),Object(u.jsx)(k,{})]})};var N=function(){return Object(u.jsxs)("div",{role:"article",children:[Object(u.jsx)("p",{children:"The task is to create an application that accepts a title as a parameter. The application should then return book results, and for each book should display the following information:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Title"}),Object(u.jsx)("li",{children:"Book Cover"}),Object(u.jsx)("li",{children:"Author"}),Object(u.jsx)("li",{children:"Published Date"})]}),Object(u.jsx)("p",{children:"The application should also have the ability to:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Sort results alphabetically by title"}),Object(u.jsx)("li",{children:"Sort results by more recently published"}),Object(u.jsx)("li",{children:"Any other functionality you feel will make this app a better experience"})]}),Object(u.jsx)("p",{children:"Requirements:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Code should compile and run in 1 step"}),Object(u.jsx)("li",{children:"No UI Library"}),Object(u.jsx)("li",{children:"Follows WCAG 2.0 AA"}),Object(u.jsx)("li",{children:"Perform well in lighthouse audit"}),Object(u.jsx)("li",{children:"Host on heroku/firebase/github"}),Object(u.jsx)("li",{children:"Technical questions .md"})]})]})};var C=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(O,{children:Object(u.jsxs)(a.a,{children:[Object(u.jsx)(f,{}),Object(u.jsx)("main",{className:"main-body",role:"main",children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(w,{})}),Object(u.jsx)(l.a,{path:"/instructions",children:Object(u.jsx)(N,{})}),Object(u.jsx)(l.a,{children:Object(u.jsx)(p,{})})]})}),Object(u.jsx)(v,{})]})})})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.249e6718.chunk.js.map