(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{J5OX:function(e,t,r){"use strict";r("Tze0"),r("V+eJ"),r("hHhE"),r("/SS/"),r("rE2o"),r("ioFf"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.identifierTypes=void 0;var n,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("q1tI")),o=(n=r("17x9"))&&n.__esModule?n:{default:n};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=["pathname","url","title","og:title","issue-number","issue-term"],f=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=u(this,c(t).call(this,e))).myRef=i.default.createRef(),r.state={pending:!0},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.repo,n=t.type,i=t.specificTerm,o=t.issueNumber,a=function(e){if(!(p.indexOf(e)<0))return"issue-number"===e?"issue-number":"issue-term";console.warn("Wrong type: "+e)}(n),s=function(e,t,r){if(!(p.indexOf(e)<0))return"pathname"===e?"pathname":"url"===e?"url":"title"===e?"title":"og:title"===e?"og:title":"issue-term"===e?t:"issue-number"===e?r:void 0;console.warn("Wrong type: "+e)}(n,i,o);if("issue-term"!==n||s)if("issue-number"===n&&(isNaN(s)||s<1))console.warn("When type is '".concat(n,"', valid 'issueNumber' prop must be provided"));else{var u=document.createElement("script");u.src="https://utteranc.es/client.js",u.async=!0,u.setAttribute("repo",r),u.setAttribute("crossorigin","anonymous"),u.setAttribute(a,s),u.onload=function(){return e.setState({pending:!1})},this.myRef.current.appendChild(u)}else console.warn("When type is '".concat(n,"', 'specificTerm' prop must be provided"))}},{key:"render",value:function(){return i.default.createElement("div",{className:"react-utterences",ref:this.myRef},this.props.debug&&i.default.createElement("pre",{style:{background:"#cccccc",padding:10}},"\nthis.props: ".concat(JSON.stringify(this.props,null,2),'\nlocation.pathname: "').concat(window.location.pathname,'"\nlocation.href: "').concat(window.location.href,'"\n          ').trim()),this.props.debug&&i.default.createElement("div",null,"👇👇If the settings are valid, the comment widget appear below👇👇"),this.state.pending&&i.default.createElement("div",null,"Loading script..."))}}])&&s(r.prototype,n),o&&s(r,o),t}(i.Component);t.identifierTypes={pathname:{attrValue:"",summary:"Issue title contains page pathname"},url:{attrValue:"url",summary:"Issue title contains page URL"},title:{attrValue:"title",summary:"Issue title contains page title"},"og:title":{attrValue:"og:title",summary:"Issue title contains page og:title"},"issue-number":{attrValue:-1,summary:"Specific issue number"},"issue-term":{attrValue:"",summary:"Issue title contains specific term"}},f.propTypes={type:o.default.string.isRequired,repo:o.default.string.isRequired,specificTerm:o.default.string,issueNumber:o.default.number,hashKey:o.default.string,debug:o.default.bool};var m=f;t.default=m},k3KE:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),i=r.n(n),o=r("tcVi"),a=r.n(o),s=r("vrFN");t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"Comments"}),i.a.createElement("div",{class:"bg-white"},i.a.createElement("div",{class:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20"},i.a.createElement("h2",{class:"text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},"Got a question?",i.a.createElement("br",null),i.a.createElement("span",{class:"text-indigo-600"},"Ask away.")))),i.a.createElement(a.a,{repo:"louis-threedots/website",type:"issue-number",issueNumber:1}))}},tcVi:function(e,t,r){"use strict";r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"identifierTypes",{enumerable:!0,get:function(){return n.identifierTypes}});var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("J5OX"))}}]);
//# sourceMappingURL=component---src-pages-comments-js-4d986d04186aff82c892.js.map