(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Ase1:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=n("zIPQ");Object.defineProperty(t,"SpeechRecognition",{enumerable:!0,get:function(){return l(r).default}});var a=n("NU9T");Object.defineProperty(t,"SpeechSynthesis",{enumerable:!0,get:function(){return l(a).default}});var o=n("j6Y9");Object.defineProperty(t,"useSpeechRecognition",{enumerable:!0,get:function(){return l(o).default}});var i=n("WLDE");function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"useSpeechSynthesis",{enumerable:!0,get:function(){return l(i).default}})},NU9T:function(e,t,n){"use strict";n("LK8F"),n("rE2o"),n("ioFf"),n("rGqo"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=n("q1tI"),i=n("17x9"),l=(r=i)&&r.__esModule?r:{default:r};var c={children:l.default.func.isRequired,onEnd:l.default.func},s=function(e){var t=e.onEnd,n=e.children,r=(0,o.useState)([]),i=a(r,2),l=i[0],c=i[1],s=(0,o.useState)(!1),u=a(s,2),d=u[0],m=u[1],f=!!window.speechSynthesis,p=function(e){c(e)},v=function(){m(!1),t()};(0,o.useEffect)((function(){var e;f&&((e=window.speechSynthesis.getVoices()).length>0?p(e):window.speechSynthesis.onvoiceschanged=function(t){e=t.target.getVoices(),p(e)})}),[]);return n({supported:f,speak:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.voice,n=void 0===t?null:t,r=e.text,a=void 0===r?"":r,o=e.rate,i=void 0===o?1:o,l=e.pitch,c=void 0===l?1:l;m(!0);var s=new window.SpeechSynthesisUtterance;s.text=a,s.voice=n,s.onend=v,s.rate=i,s.pitch=c,window.speechSynthesis.speak(s)},speaking:d,cancel:function(){m(!1),window.speechSynthesis.cancel()},voices:l})};s.propTypes=c,s.defaultProps={onEnd:function(){}},t.default=(0,o.memo)(s)},WLDE:function(e,t,n){"use strict";n("LK8F"),n("rE2o"),n("ioFf"),n("rGqo"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n("q1tI");t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onEnd,n=void 0===t?function(){}:t,o=(0,a.useState)([]),i=r(o,2),l=i[0],c=i[1],s=(0,a.useState)(!1),u=r(s,2),d=u[0],m=u[1],f=!!window.speechSynthesis,p=function(e){c(e)},v=function(){var e=window.speechSynthesis.getVoices();e.length>0?p(e):window.speechSynthesis.onvoiceschanged=function(t){e=t.target.getVoices(),p(e)}},g=function(){m(!1),n()};(0,a.useEffect)((function(){f&&v()}),[]);var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.voice,n=void 0===t?null:t,r=e.text,a=void 0===r?"":r,o=e.rate,i=void 0===o?1:o,l=e.pitch,c=void 0===l?1:l;m(!0);var s=new window.SpeechSynthesisUtterance;s.text=a,s.voice=n,s.onend=g,s.rate=i,s.pitch=c,window.speechSynthesis.speak(s)},b=function(){m(!1),window.speechSynthesis.cancel()};return{supported:f,speak:h,speaking:d,cancel:b,voices:l}}},j6Y9:function(e,t,n){"use strict";n("XfO3"),n("HEwt"),n("bWfx"),n("LK8F"),n("rE2o"),n("ioFf"),n("rGqo"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n("q1tI");window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onEnd,n=void 0===t?function(){}:t,o=e.onResult,i=void 0===o?function(){}:o,l=e.onError,c=void 0===l?function(){}:l,s=(0,a.useRef)(null),u=(0,a.useState)(!1),d=r(u,2),m=d[0],f=d[1],p=!!window.SpeechRecognition,v=function(e){var t=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");i(t)},g=function(e){"not-allowed"===e.error&&(s.current.onend=function(){},f(!1)),c(e)},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!m){var t=e.lang,n=void 0===t?"":t,r=e.interimResults,a=void 0===r||r,o=e.continuous,i=void 0!==o&&o,l=e.maxAlternatives,c=void 0===l?1:l,u=e.grammars;f(!0),s.current.lang=n,s.current.interimResults=a,s.current.onresult=v,s.current.onerror=g,s.current.continuous=i,s.current.maxAlternatives=c,u&&(s.current.grammars=u),s.current.onend=function(){return s.current.start()},s.current.start()}},b=function(){m&&(s.current.onresult=function(){},s.current.onend=function(){},s.current.onerror=function(){},f(!1),s.current.stop(),n())};return(0,a.useEffect)((function(){p&&(s.current=new window.SpeechRecognition)}),[]),{listen:h,listening:m,stop:b,supported:p}}},lUWQ:function(e,t,n){"use strict";n.r(t);n("Z2Ku"),n("L9s1");var r=n("q1tI"),a=n.n(r),o=n("lpph"),i=n("MZca"),l=function(e){var t=e.loading,n=e.message,l=Object(r.useState)(!0),c=l[0],s=l[1];return Object(r.useEffect)((function(){t||setTimeout(s,1600,!1)}),[t]),a.a.createElement("div",{className:Object(o.a)("fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center",!c&&"pointer-events-none")},a.a.createElement(i.a,{show:c,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"},a.a.createElement("div",{className:"fixed inset-0 transition-opacity"},a.a.createElement("div",{className:"absolute inset-0 bg-gray-500 opacity-75"}))),a.a.createElement(i.a,{show:c,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},a.a.createElement("div",{className:"bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"},a.a.createElement("div",null,a.a.createElement("div",{className:Object(o.a)("mx-auto flex items-center justify-center h-12 w-12 rounded-full",t?"bg-orange-100":"bg-green-100")},t?a.a.createElement("svg",{fill:"currentColor",className:"h-6 w-6 text-orange-600",viewBox:"0 0 20 20"},a.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})):a.a.createElement("svg",{className:"h-6 w-6 text-green-600",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"}))),a.a.createElement("div",{className:"mt-3 text-center sm:mt-5"},a.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},t?"Loading...":"Complete!"),a.a.createElement("p",{className:"mt-4"},n),a.a.createElement("p",{className:"mt-4"},"Can take up to one minute..."))))))},c=n("Ase1"),s=function(e){var t=e.messages,n=e.send,i=Object(r.useState)(""),l=i[0],s=i[1],u=Object(c.useSpeechRecognition)({onResult:function(e){s(e)}}),d=u.listen,m=u.listening,f=u.stop,p=u.supported,v=function(){n(l),s("")};return a.a.createElement("div",{className:"w-full md:w-1/3 min-h-full relative bg-gray-50 md:rounded-lg md:mx-8 md:mt-8 md:shadow-lg"},a.a.createElement("div",{className:"absolute flex flex-col bottom-0 top-0 w-full px-4 overflow-y-auto"},a.a.createElement("div",{className:"flex-1"}),a.a.createElement("div",{className:"mb-6"},0===t.length?a.a.createElement("div",{className:"text-gray-500 text-center text-sm"},"Don't be shy! Say 'help' to get started ↓"):t.map((function(e,t){return a.a.createElement("div",{className:Object(o.a)("p-2 rounded-lg text-white my-4","user"===e.from?"bg-indigo-600 text-right":"bg-gray-600 text-left"),key:t},e.content)}))),a.a.createElement("div",{className:"pb-4"},a.a.createElement("label",{htmlFor:"text_input",className:"block text-sm font-medium leading-5 text-gray-700"},"Speak to ",a.a.createElement("span",{className:"font-louis"},"louis")),a.a.createElement("div",{className:"mt-1 flex rounded-md shadow-sm"},a.a.createElement("div",{className:"relative flex-grow focus-within:z-10"},a.a.createElement("input",{id:"text_input",className:"form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5",placeholder:"help",onChange:function(e){return s(e.target.value)},value:l,onKeyDown:function(e){return"Enter"===e.key&&v()}})),m||p&&""===l?a.a.createElement((function(){return m?a.a.createElement("button",{className:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150",onClick:function(){f(),v()}},a.a.createElement("svg",{className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},a.a.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})),a.a.createElement("span",{className:"ml-2"},"Stop")):a.a.createElement("button",{className:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150",onClick:function(){return d({lang:"en-GB",interimResults:!1})}},a.a.createElement("svg",{className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},a.a.createElement("path",{fillRule:"evenodd",d:"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",clipRule:"evenodd"})),a.a.createElement("span",{className:"ml-2"},"Listen"))}),null):a.a.createElement("button",{className:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150",onClick:v},a.a.createElement("svg",{className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},a.a.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})),a.a.createElement("span",{className:"ml-2"},"Send"))))))},u=(n("f3/d"),n("9VmF"),n("dRSK"),Object(r.forwardRef)((function(e,t){e.text;var n=Object(c.useSpeechSynthesis)(),o=n.speak,i=n.voices,l=Object(r.useState)(),s=l[0],u=l[1];return Object(r.useImperativeHandle)(t,(function(){return{speak:function(e){o({text:e,voice:s})}}})),Object(r.useEffect)((function(){if(i.length>0){var e=i.find((function(e){return e.default}))||i[0];u(e)}}),[i]),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"voice",className:"block text-sm font-medium leading-5 text-gray-700"},"Voice"),a.a.createElement("select",{id:"voice",className:"mt-1 block form-select w-full py-2 px-3 py-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5",onChange:function(e){return u(i.find((function(t){return t.voiceURI===e.target.value})))}},Array.isArray(i)&&i.filter((function(e){return e.lang.startsWith("en-")})).map((function(e){return a.a.createElement("option",{key:e.voiceURI,value:e.voiceURI},e.name," (",e.lang,")")}))))}))),d=function(e){var t=Object(r.useState)(),n=t[0],a=t[1],o=Object(r.useState)(!0),i=o[0],l=o[1];Object(r.useEffect)((function(){var t=document.createElement("script");return t.innerHTML="self.pyodideWorker = new Worker('/website/pyodideWorker.js')",document.body.appendChild(t),window.pyodideWorker.onmessage=function(t){var n=t.data;i&&l(!1),e(n)},window.pyodideWorker.postMessage({method:"runPython",data:"True"}),a(window.pyodideWorker),function(){document.body.removeChild(t)}}),[]);return{loading:i,pyodide:n,runPython:function(e){n&&n.postMessage({method:"runPython",data:e})},loadPackages:function(e){n&&n.postMessage({method:"loadPackages",data:e})},getPythonGlobal:function(e){n&&n.postMessage({method:"pyimport",data:e})},attachGlobal:function(e){n&&n.postMessage({method:"attachGlobal",data:e})}}};t.default=function(){var e=Object(r.useState)()[1],t=Object(r.useCallback)((function(){return e({})}),[]),n=Object(r.useRef)(),o=d((function(e){void 0!==(null==e?void 0:e.braille)&&v(e.braille),void 0!==(null==e?void 0:e.text)&&E(e.text)})),i=o.loading,c=o.attachGlobal,m=o.runPython,f=Object(r.useState)("Loading..."),p=f[0],v=f[1],g=Object(r.useState)(3),h=g[0],b=g[1],y=Object(r.useReducer)((function(e,t){return t&&e&&!e.includes(t)?(e.push(t),e):e}),[]),w=y[0],x=y[1],E=function(e){x({content:e,from:"louis"}),n.current.speak(e),t()};return Object(r.useEffect)((function(){i||(c({}),m("from js import demo"),m("exec(demo)"))}),[i]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"bg-gray-900 pb-32"},a.a.createElement("div",{className:"py-10"},a.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},a.a.createElement("h1",{className:"text-3xl leading-9 font-bold text-white"},a.a.createElement("span",{className:"font-louis"},"louis")," Demo")))),a.a.createElement("div",{className:"-mt-32"},a.a.createElement("div",{className:"max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8"},a.a.createElement("div",{className:"bg-white rounded-lg shadow"},a.a.createElement("div",{className:"py-5 border-b border-gray-200 px-4 sm:px-6"},a.a.createElement("div",{className:"-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap"},a.a.createElement("div",{className:"ml-4 mt-2"},a.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},"Cells (",h,")")),a.a.createElement("div",{className:"ml-4 mt-2 flex-shrink-0"},a.a.createElement("span",{className:"inline-flex rounded-md shadow-sm"},a.a.createElement("button",{type:"button",disabled:h<2,className:"relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:bg-indigo-600",onClick:function(){return b(h-1)}},"Remove cell")),a.a.createElement("span",{className:"ml-4 inline-flex rounded-md shadow-sm"},a.a.createElement("button",{type:"button",className:"relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700",onClick:function(){return b(h+1)}},"Add cell"))))),a.a.createElement("div",{className:"bg-blue-50 px-4 py-3 flex items-start lg:justify-center lg:px-8 lg:py-4"},a.a.createElement("div",{className:"flex-shrink-0"},a.a.createElement("svg",{className:"h-6 w-6 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))),a.a.createElement("div",{className:"ml-3 flex-1 lg:flex lg:justify-between"},a.a.createElement("p",{className:"text-sm leading-6 font-medium text-blue-700"},"Please note, this interactive demonstration implements only a subset of the features of the physical device."))),a.a.createElement("div",{className:"flex flex-col md:flex-row h-96 md:h-192 bg-gray-200 pb-6 md:pb-16"},a.a.createElement("div",{className:"flex-1"},p),a.a.createElement(s,{messages:w,send:function(e){x({content:e,from:"user"}),m('newMessage("'+e+'")')}})),a.a.createElement("div",{className:"px-4 py-3 bg-gray-50 sm:px-6 flex flex-row-reverse"},a.a.createElement(u,{ref:n}))))),a.a.createElement(l,{loading:i,message:"This interactive demo requires a modern browser."}))}},lpph:function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}n.d(t,"a",(function(){return r}))},zIPQ:function(e,t,n){"use strict";n("XfO3"),n("HEwt"),n("bWfx"),n("LK8F"),n("rE2o"),n("ioFf"),n("rGqo"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=n("q1tI"),i=n("17x9"),l=(r=i)&&r.__esModule?r:{default:r};var c={children:l.default.func.isRequired,onEnd:l.default.func,onResult:l.default.func,onError:l.default.func};window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;var s=function(e){var t=(0,o.useRef)(null),n=(0,o.useState)(!1),r=a(n,2),i=r[0],l=r[1],c=!!window.SpeechRecognition,s=e.children,u=e.onEnd,d=e.onResult,m=e.onError,f=function(e){var t=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");d(t)},p=function(e){"not-allowed"===e.error&&(t.current.onend=function(){},l(!1)),m(e)};return(0,o.useEffect)((function(){c&&(t.current=new window.SpeechRecognition)}),[]),s({listen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!i){var n=e.lang,r=void 0===n?"":n,a=e.interimResults,o=void 0===a||a;l(!0),t.current.lang=r,t.current.interimResults=o,t.current.onresult=f,t.current.onerror=p,t.current.onend=function(){return t.current.start()},t.current.start()}},listening:i,stop:function(){i&&(l(!1),t.current.onend=function(){},t.current.stop(),u())},supported:c})};s.propTypes=c,s.defaultProps={onEnd:function(){},onResult:function(){},onError:function(){}},t.default=(0,o.memo)(s)}}]);
//# sourceMappingURL=15-054bdca15e097bdcc1e3.js.map