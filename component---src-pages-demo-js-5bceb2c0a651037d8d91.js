(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{CnBM:function(e,t,n){"use strict";n("91GP"),n("VRzm"),n("XfO3"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("LK8F"),n("/SS/"),n("hHhE"),n("rE2o"),n("ioFf");var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n("q1tI"),u=n("17x9"),s=[],c=[];function d(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function p(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=d(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function f(e,t){return l.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function m(e,t){var d,p;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var m=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:f,webpack:null,modules:null},t),h=null;function y(){return h||(h=e(m.loader)),h.promise}return s.push(y),"function"==typeof m.webpack&&c.push((function(){if(e=m.webpack,"object"===r(n.m)&&e().every((function(e){return void 0!==e&&void 0!==n.m[e]})))return y();var e})),p=d=function(t){function n(r){o(this,n);var i=a(this,t.call(this,r));return i.retry=function(){i.setState({error:null,loading:!0,timedOut:!1}),h=e(m.loader),i._loadModule()},y(),i.state={error:h.error,pastDelay:!1,timedOut:!1,loading:h.loading,loaded:h.loaded},i}return i(n,t),n.preload=function(){return y()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(m.modules)&&m.modules.forEach((function(t){e.context.loadable.report(t)})),h.loading){"number"==typeof m.delay&&(0===m.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),m.delay)),"number"==typeof m.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),m.timeout));var t=function(){e._mounted&&(e.setState({error:h.error,loaded:h.loaded,loading:h.loading}),e._clearTimeouts())};h.promise.then((function(){t()})).catch((function(e){t()}))}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(m.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?m.render(this.state.loaded,this.props):null},n}(l.Component),d.contextTypes={loadable:u.shape({report:u.func.isRequired})},p}function h(e){return m(d,e)}h.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return m(p,e)};var y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return l.Children.only(this.props.children)},t}(l.Component);function b(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then((function(){if(e.length)return b(e)}))}y.propTypes={report:u.func.isRequired},y.childContextTypes={loadable:u.shape({report:u.func.isRequired}).isRequired},h.Capture=y,h.preloadAll=function(){return new Promise((function(e,t){b(s).then(e,t)}))},h.preloadReady=function(){return new Promise((function(e,t){b(c).then(e,e)}))},e.exports=h},vX0t:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("vrFN"),i=n("CnBM"),l=n.n(i)()({loader:function(){return n.e(14).then(n.bind(null,"lUWQ"))},loading:function(){return o.a.createElement("span",null,"Loading...")}}),u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",{className:"bg-blue-50 px-4 py-3 flex items-start lg:justify-center lg:px-8 lg:py-4"},o.a.createElement("div",{className:"flex-shrink-0"},o.a.createElement("svg",{class:"h-6 w-6 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))),o.a.createElement("div",{className:"ml-3 flex-1 lg:flex lg:justify-between"},o.a.createElement("p",{className:"text-sm leading-6 font-medium text-blue-700"},"This interactive demo requires a modern browser."),o.a.createElement("p",{className:"mt-2 text-sm leading-6 lg:mt-0 lg:ml-4"},o.a.createElement("a",{href:"https://browsehappy.com/",target:"_blank",rel:"noopener noreferrer",className:"font-medium text-blue-700 hover:underline hover:text-blue-500 transition ease-in-out duration-150"},"Find out more and upgrade →"))))),o.a.createElement(l,null))};t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{title:"Interactive Demo"}),o.a.createElement(u,null))}}}]);
//# sourceMappingURL=component---src-pages-demo-js-5bceb2c0a651037d8d91.js.map