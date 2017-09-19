!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.InformationFlowLayoutRender=e()}(this,function(){"use strict";function t(t,e){return e={exports:{}},t(e,e.exports),e.exports}function e(t){return null!=t&&t===t.window}function n(t){return null!=t&&t.nodeType===t.DOCUMENT_NODE}function r(t){if(document.documentElement!==t&&!ut(document.documentElement,t))return{top:0,left:0};var e=t.getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}}function i(t){return e(t)?t:9===t.nodeType&&(t.defaultView||t.parentWindow)}function o(t,e){for(var n,r=[],i=0,o=0,a="",s=e&&e.delimiter||"/",p=e&&e.delimiters||"./",l=!1;null!==(n=ht.exec(t));){var f=n[0],d=n[1],h=n.index;if(a+=t.slice(o,h),o=h+f.length,d)a+=d[1],l=!0;else{var g="",m=t[o],y=n[2],v=n[3],b=n[4],w=n[5];if(!l&&a.length){var x=a.length-1;p.indexOf(a[x])>-1&&(g=a[x],a=a.slice(0,x))}a&&(r.push(a),a="",l=!1);var O=""!==g&&void 0!==m&&m!==g,j="+"===w||"*"===w,C="?"===w||"*"===w,_=g||s,k=v||b;r.push({name:y||i++,prefix:g,delimiter:_,optional:C,repeat:j,partial:O,pattern:k?u(k):"[^"+c(_)+"]+?"})}}return(a||o<t.length)&&r.push(a+t.substr(o)),r}function a(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var i="",o=r&&r.encode||encodeURIComponent,a=0;a<t.length;a++){var c=t[a];if("string"!=typeof c){var u,s=n?n[c.name]:void 0;if(Array.isArray(s)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but got array');if(0===s.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<s.length;p++){if(u=o(s[p]),!e[a].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'"');i+=(0===p?c.prefix:c.delimiter)+u}}else if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s){if(!c.optional)throw new TypeError('Expected "'+c.name+'" to be '+(c.repeat?"an array":"a string"));c.partial&&(i+=c.prefix)}else{if(u=o(String(s)),!e[a].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but got "'+u+'"');i+=c.prefix+u}}else i+=c}return i}}function c(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function u(t){return t.replace(/([=!:$/()])/g,"\\$1")}function s(t,e){return Object.assign({},bt,{width:t-20},e)}var p="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=t(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),f=t(function(t){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)}),d=function(t){return"object"==typeof t?null!==t:"function"==typeof t},h=function(t){if(!d(t))throw TypeError(t+" is not an object!");return t},g=function(t){try{return!!t()}catch(t){return!0}},m=!g(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),y=l.document,v=d(y)&&d(y.createElement),b=function(t){return v?y.createElement(t):{}},w=!m&&!g(function(){return 7!=Object.defineProperty(b("div"),"a",{get:function(){return 7}}).a}),x=function(t,e){if(!d(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!d(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!d(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!d(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},O=Object.defineProperty,j={f:m?Object.defineProperty:function(t,e,n){if(h(t),e=x(e,!0),h(n),w)try{return O(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},C=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},_=m?function(t,e,n){return j.f(t,e,C(1,n))}:function(t,e,n){return t[e]=n,t},k={}.hasOwnProperty,T=function(t,e){return k.call(t,e)},E=0,D=Math.random(),S=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++E+D).toString(36))},I=t(function(t){var e=S("src"),n=Function.toString,r=(""+n).split("toString");f.inspectSource=function(t){return n.call(t)},(t.exports=function(t,n,i,o){var a="function"==typeof i;a&&(T(i,"name")||_(i,"name",n)),t[n]!==i&&(a&&(T(i,e)||_(i,e,t[n]?""+t[n]:r.join(String(n)))),t===l?t[n]=i:o?t[n]?t[n]=i:_(t,n,i):(delete t[n],_(t,n,i)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[e]||n.call(this)})}),R=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},W=function(t,e,n){if(R(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},A=function(t,e,n){var r,i,o,a,c=t&A.F,u=t&A.G,s=t&A.S,p=t&A.P,d=t&A.B,h=u?l:s?l[e]||(l[e]={}):(l[e]||{}).prototype,g=u?f:f[e]||(f[e]={}),m=g.prototype||(g.prototype={});u&&(n=e);for(r in n)o=((i=!c&&h&&void 0!==h[r])?h:n)[r],a=d&&i?W(o,l):p&&"function"==typeof o?W(Function.call,o):o,h&&I(h,r,o,t&A.U),g[r]!=o&&_(g,r,a),p&&m[r]!=o&&(m[r]=o)};l.core=f,A.F=1,A.G=2,A.S=4,A.P=8,A.B=16,A.W=32,A.U=64,A.R=128;var M=A,P={}.toString,U=function(t){return P.call(t).slice(8,-1)},z=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==U(t)?t.split(""):Object(t)},L=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},H=function(t){return z(L(t))},F=Math.ceil,$=Math.floor,N=function(t){return isNaN(t=+t)?0:(t>0?$:F)(t)},B=Math.min,G=function(t){return t>0?B(N(t),9007199254740991):0},V=Math.max,Z=Math.min,X=function(t,e){return(t=N(t))<0?V(t+e,0):Z(t,e)},q=l["__core-js_shared__"]||(l["__core-js_shared__"]={}),Y=function(t){return q[t]||(q[t]={})}("keys"),J=function(t){return function(e,n,r){var i,o=H(e),a=G(o.length),c=X(r,a);if(t&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}}(!1),K=function(t){return Y[t]||(Y[t]=S(t))}("IE_PROTO"),Q=function(t,e){var n,r=H(t),i=0,o=[];for(n in r)n!=K&&T(r,n)&&o.push(n);for(;e.length>i;)T(r,n=e[i++])&&(~J(o,n)||o.push(n));return o},tt="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),et=Object.keys||function(t){return Q(t,tt)},nt={f:Object.getOwnPropertySymbols},rt={f:{}.propertyIsEnumerable},it=function(t){return Object(L(t))},ot=Object.assign,at=!ot||g(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=ot({},t)[n]||Object.keys(ot({},e)).join("")!=r})?function(t,e){for(var n=it(t),r=arguments.length,i=1,o=nt.f,a=rt.f;r>i;)for(var c,u=z(arguments[i++]),s=o?et(u).concat(o(u)):et(u),p=s.length,l=0;p>l;)a.call(u,c=s[l++])&&(n[c]=u[c]);return n}:ot;M(M.S+M.F,"Object",{assign:at});var ct=t(function(t,e){function n(t,e){return null==t?void 0:t[e]}function r(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function i(t){return!(!g(t)||a(t))&&(d(t)||r(t)?z:C).test(u(t))}function o(t,e){var r=n(t,e);return i(r)?r:void 0}function a(t){return!!A&&A in t}function c(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||R)}function u(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function s(t){return f(t)&&P.call(t,"callee")&&(!H.call(t,"callee")||U.call(t)==v)}function l(t){return null!=t&&h(t.length)&&!d(t)}function f(t){return m(t)&&l(t)}function d(t){var e=g(t)?U.call(t):"";return e==b||e==w}function h(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=y}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){return!!t&&"object"==typeof t}var y=9007199254740991,v="[object Arguments]",b="[object Function]",w="[object GeneratorFunction]",x="[object Map]",O="[object Set]",j=/[\\^$.*+?()[\]{}|]/g,C=/^\[object .+?Constructor\]$/,_="object"==typeof p&&p&&p.Object===Object&&p,k="object"==typeof self&&self&&self.Object===Object&&self,T=_||k||Function("return this")(),E=e&&!e.nodeType&&e,D=E&&!0&&t&&!t.nodeType&&t,S=D&&D.exports===E,I=Function.prototype,R=Object.prototype,W=T["__core-js_shared__"],A=function(){var t=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),M=I.toString,P=R.hasOwnProperty,U=R.toString,z=RegExp("^"+M.call(P).replace(j,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),L=S?T.Buffer:void 0,H=R.propertyIsEnumerable,F=L?L.isBuffer:void 0,$=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),N=o(T,"DataView"),B=o(T,"Map"),G=o(T,"Promise"),V=o(T,"Set"),Z=o(T,"WeakMap"),X=!H.call({valueOf:1},"valueOf"),q=u(N),Y=u(B),J=u(G),K=u(V),Q=u(Z),tt=function(t){return U.call(t)};(N&&"[object DataView]"!=tt(new N(new ArrayBuffer(1)))||B&&tt(new B)!=x||G&&"[object Promise]"!=tt(G.resolve())||V&&tt(new V)!=O||Z&&"[object WeakMap]"!=tt(new Z))&&(tt=function(t){var e=U.call(t),n="[object Object]"==e?t.constructor:void 0,r=n?u(n):void 0;if(r)switch(r){case q:return"[object DataView]";case Y:return x;case J:return"[object Promise]";case K:return O;case Q:return"[object WeakMap]"}return e});var et=Array.isArray,nt=F||function(){return!1};t.exports=function(t){if(l(t)&&(et(t)||"string"==typeof t||"function"==typeof t.splice||nt(t)||s(t)))return!t.length;var e=tt(t);if(e==x||e==O)return!t.size;if(X||c(t))return!$(t).length;for(var n in t)if(P.call(t,n))return!1;return!0}}),ut=document.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},st=function(t,i){var o=t,a=i.replace(/./,function(t){return t[0].toUpperCase()});return e(o)?o["inner"+a]:n(o)?o.documentElement["scroll"+a]:r(o)[a]},pt={isValidURL:function(t){void 0===t&&(t="");var e=/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;return!!t&&e.test(t)},completeURL:function(t,e){void 0===t&&(t=""),void 0===e&&(e="http");var n=/^\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;return t&&n.test(t)?e+":"+t:t},getEleHeight:function(t){return st(t,"height")},getEleWidth:function(t){return st(t,"width")},getScrollTop:function(t){var e=i(t);return e?"pageYOffset"in e?e.pageYOffset:e.document.documentElement.scrollTop:t.scrollTop}},lt={BIG_IMG:0,IMG_TEXT:1,IMGS:2,VIDEO:3,IMG_TEXT_AD:4},ft={SHOW_DESC:0,SHOW_SRC_TIME:1},dt=function(t,e){return a(o(t,e))},ht=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g"),gt=function(){function t(t){this.sxinid=t&&t.sxinid,this.delay=t&&t.delay||100,this.url=t&&t.url||"http://fight55.com/s?sxinid=:sxinid&sxinitemid=:sxinitemid(.*?)",this.firstRenderUrl=t&&t.firstRenderUrl||"http://fight55.com/s?sxinid=:sxinid&show=1",this.createRedirectUrl=t&&t.createRedirectUrl}return t.prototype.scriptWay=function(t){var e=document.createElement("script");e.type="text/javascript",e.src=t,document.body.appendChild(e)},t.prototype.materielClick=function(t){if(this.url){var e=dt(this.url)({sxinid:this.sxinid,sxinitemid:t});this.scriptWay(e)}},t.prototype.firstRender=function(){if(this.firstRenderUrl){var t=dt(this.firstRenderUrl)({sxinid:this.sxinid});this.scriptWay(t)}},t}(),mt=1,yt=5,vt=function(){function t(t){var e=t.initData,n=void 0===e?[]:e,r=t.nextPage,i=void 0===r?mt:r,o=t.pageShowNum,a=void 0===o?yt:o,c=t.mockRemoteLoad,u=void 0!==c&&c,s=t.ajaxFetch;this.events={},this.loading=!1,this.isEnd=!1,this.page=i,this.mockRemoteLoad=u,this.showNum=a,this.data=n,s&&(this.ajaxFetch=s)}return t.prototype.fetchData=function(t,e){var n=this;if(!this.loading&&!this.isEnd){this.loading=!0;var r=this.ajaxFetch;this.publish("fetch-begin");r({page:t,success:function(t){n.loading=!1,n.showNum>t.length&&(n.isEnd=!0),n.publish("fetch-success"),e(t)},fail:function(t){throw n.loading=!1,n.isEnd=!0,n.publish("fetch-fail"),t}})}},t.prototype.fetchNext=function(t){if(!this.loading&&!this.isEnd){var e=this.page;this.page=e+1,this.fetchData(e,t)}},t.prototype.mockFetch=function(t,e){var n=this.data,r=this.showNum,i=Math.min((t-1)*r,n.length),o=Math.min(t*r,n.length);o>=n.length&&(this.isEnd=!0);var a=n.slice(i,o);a.length&&(this.publish("fetch-success"),e(a))},t.prototype.mockFetchNext=function(t){if(!this.isEnd){var e=this.page;this.page=e+1,this.mockFetch(e,t)}},t.prototype.getInit=function(t){this.mockRemoteLoad?this.mockFetch(1,t):t(this.data)},t.prototype.getNext=function(t){this.mockRemoteLoad?this.mockFetchNext(t):this.fetchNext(t)},t.prototype.subscribe=function(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)},t.prototype.publish=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=this.events.hasOwnProperty(t)?this.events[t]:[];if(!r||0===r.length)return!1;for(var i=0;i<r.length;i++)r[i].apply(this,e)},t}(),bt={"line-height":0,"background-color":"#eee",padding:"",margin:"8px 0px 0px 10px",border:"",left:10,height:1,top:0,position:"",display:"block"},wt={width:"",height:20,display:"inline-block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none","font-size":12,color:"#999","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":20,"text-overflow":"ellipsis","o-text-overflow":"ellipsis",padding:"",border:""},xt={display:"block",position:"relative",left:0,top:0,height:"auto","line-height":"100%","text-align":"left"},Ot={configDescCreate:function(t,e){return Object.assign({},wt,{"max-width":t-80+"px"},e)},configDescWrapCreate:function(t,e){return Object.assign({},xt,e)}},jt={height:20,display:"block","line-height":20,"text-align":"left",position:"relative",left:0,top:0},Ct={top:0,left:0,width:"",height:"",display:"inline-block",position:"","font-size":12,color:"#999","font-family":"Arial, Helvetica, sans-serif","text-align":"left","white-space":"nowrap","text-overflow":"ellipsis","o-text-overflow":"ellipsis","margin-right":"8px"},_t={configWrapCreate:function(t,e){return Object.assign({},jt,e)},configItemCreate:function(t,e){return Object.assign({},Ct,e)}},kt=new(function(){function t(){var e=this;this.genStyle=function(e){var n="";if(e){var r=t.pxStyles;for(var i in e)if(e.hasOwnProperty(i)){var o=e[i],a=!!r[i]&&!isNaN(parseFloat(o))&&isFinite(o);n+=i+":"+e[i]+(a?"px;":";")}}return n},this.appendStyle=function(t,n){var r=e.genStyle(n),i=t.style.cssText;t.style.cssText=i+r}}return t.pxStyles={width:1,height:1,"line-height":1,"padding-left":1,"padding-right":1,"padding-top":1,"padding-bottom":1,"border-width":1,"font-size":1,"margin-left":1,"margin-right":1,"margin-top":1,"margin-bottom":1,"border-left-width":1,"border-right-width":1,"border-top-width":1,"border-bottom-width":1,top:1,left:1,bottom:1,right:1},t.getCurrentStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:window.getComputedStyle?window.getComputedStyle(t)[e]:void 0},t}()),Tt=function(){function t(){}return t.prototype.buildDom=function(t,e,n){void 0===e&&(e={});var r=document.createElement(t);if(e)for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i]);if(n){var o=n();kt.appendStyle(r,o)}return r},t.prototype.createDescDom=function(t,e,n,r){void 0===e&&(e=0),void 0===n&&(n=0);var i={innerText:r||""},o=Ot.configDescCreate(t,{top:e,left:n,"margin-top":e,"margin-left":n}),a=this.buildDom("div",i,function(){return o}),c=this.buildDom("div",{},function(){return Ot.configDescWrapCreate(t)});return c.appendChild(a),c},t.prototype.createSrcAndTimeDom=function(t,e,n,r,i,o){var a=document.createElement("div");if(!i||!o)return a;var c={top:e,height:r,"margin-left":n,"margin-top":e},u=_t.configWrapCreate(t,c);kt.appendStyle(a,u);var s=document.createElement("div"),p=_t.configItemCreate(t,{"line-height":r});s.innerText=i,kt.appendStyle(s,p);var l=document.createElement("div");return l.innerText=o,kt.appendStyle(l,p),a.appendChild(s),a.appendChild(l),a},t.prototype.createLineDom=function(t,e,n){return void 0===n&&(n=""),this.buildDom("div",{},function(){return s(t,{top:e,position:n})})},t}(),Et={top:0,left:0,height:"auto",display:"block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none"},Dt={top:0,left:10,height:"auto",display:"block",position:"","font-size":18,color:"#000","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":"auto",overflow:"hidden","text-overflow":"ellipsis","o-text-overflow":"ellipsis","text-decoration":"none",padding:"",margin:"10px 0px 0px 10px",border:""},St={top:0,left:10,display:"block",position:"","background-size":"cover",overflow:"hidden",border:"",margin:"5px 0px 0px 10px",padding:""},It={configWrapCreate:function(t,e){return Object.assign({},Et,{width:t},e)},configTitleContainerCreate:function(t,e){return Object.assign({},Dt,{width:t-20},e)},configImgContainerCreate:function(t,e){var n=t-20;return Object.assign({},St,{width:n,height:1*n/2.3},e)}},Rt=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Wt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Rt(e,t),e.prototype.createWrapper=function(t,e,n,r,i){void 0===e&&(e="javascript:;"),void 0===n&&(n="_target"),void 0===r&&(r="");return this.buildDom("a",{href:e,target:n,title:r,onclick:i},function(){return It.configWrapCreate(t)})},e.prototype.createTitle=function(t,e){return this.buildDom("span",{innerText:e},function(){return It.configTitleContainerCreate(t)})},e.prototype.createContent=function(t,e){var n=this.buildDom("div",{},function(){return It.configImgContainerCreate(t)});return n.style.background="url("+e+") center center no-repeat",n.style.backgroundSize="cover",n},e.prototype.createRemark=function(t,e,n,r,i){return e===ft.SHOW_SRC_TIME?this.createSrcAndTimeDom(t,10,10,20,r,i):this.createDescDom(t,10,10,n)},e.prototype.render=function(t,e,n,r,i){var o=n.title,a=n.imageUrl,c=n.type,u=n.src,s=n.desc,p=n.time,l=n.curl,f=n.target;if(a){var d=this.createWrapper(e,r||l,f,o,i),h=this.createTitle(e,o),g=this.createContent(e,a),m=this.createRemark(e,c,s,u,p),y=this.createLineDom(e,0);d.appendChild(h),d.appendChild(g),d.appendChild(m),d.appendChild(y),t.appendChild(d)}},e}(Tt),At={top:0,left:0,height:"auto",display:"block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none"},Mt={top:0,left:10,height:"auto",display:"block",position:"","font-size":18,color:"#000","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":20,overflow:"hidden","-webkit-line-clamp":"2","text-overflow":"ellipsis","o-text-overflow":"ellipsis","text-decoration":"none",padding:"",margin:"15px 10px 0px",border:""},Pt={position:"relative",top:0,left:0,width:"100%",height:"auto",display:"block",padding:"none",margin:"none",border:"none",overflow:"hidden"},Ut={top:5,left:10,display:"inline-block",position:"",padding:"",margin:"5px 0px 10px 10px",border:""},zt={configWrapCreate:function(t,e){return Object.assign({},At,{width:t},e)},configTitleCreate:function(t,e){return Object.assign({},Mt,{width:t-20},e)},configImgItemCreate:function(t,e,n){void 0===n&&(n=3);var r=(t-20-2*n)/n;return Object.assign({},Ut,{width:r,height:66*r/98},e)},configImgsWrapCreate:function(t,e){return Object.assign({},Pt,{},e)}},Lt=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ht=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Lt(e,t),e.prototype.createWrapper=function(t,e,n,r,i){void 0===e&&(e="javascript:;"),void 0===n&&(n="_target"),void 0===r&&(r="");return this.buildDom("a",{href:e,target:n,title:r,onclick:i},function(){return zt.configWrapCreate(t)})},e.prototype.createTitle=function(t,e){return this.buildDom("span",{innerText:e},function(){return zt.configTitleCreate(t)})},e.prototype.createContent=function(t,e){for(var n=this.buildDom("div",{},function(){return zt.configImgsWrapCreate(t)}),r=[],i=e.length,o=this,a=0;a<i;a++)!function(n){var a=e[n],c={};0!==n&&(c["margin-left"]="3px");var u=o.buildDom("div",{},function(){return zt.configImgItemCreate(t,c,i)});u.style.background="url("+a+") center center no-repeat",u.style.backgroundSize="cover",r.push(u)}(a);for(var c in r)n.appendChild(r[c]);return n},e.prototype.createRemark=function(t,e,n,r,i){return e===ft.SHOW_SRC_TIME?this.createSrcAndTimeDom(t,0,10,20,r,i):this.createDescDom(t,0,10,n)},e.prototype.render=function(t,e,n,r,i){var o=n.title,a=n.images,c=n.type,u=n.src,s=n.desc,p=n.time,l=n.curl,f=n.target;if(a&&0!==a.length){var d=this.createWrapper(e,r||l,f,o,i),h=this.createTitle(e,o),g=this.createContent(e,a),m=this.createRemark(e,c,s,u,p),y=this.createLineDom(e,0);d.appendChild(h),d.appendChild(g),d.appendChild(m),d.appendChild(y),t.appendChild(d)}},e}(Tt),Ft={top:0,left:0,display:"block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none"},$t={top:15,left:10,display:"inline-block",position:"",border:"",margin:"15px 0px 0px 10px",padding:"","vertical-align":"top"},Nt={top:15,display:"inline-block",position:"",border:"",margin:"15px 0px 0px 10px",padding:"","line-height":"100%","vertical-align":"top"},Bt={top:18,display:"inline-block",position:"","font-size":18,color:"#000","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":20},Gt={configWrapCreate:function(t,e){return Object.assign({},Ft,{width:t},e)},configImgCreate:function(t,e){var n=100*t/320;return Object.assign({},$t,{width:n,height:33*n/50},e)},configRightCreate:function(t,e){var n=100*t/320;return Object.assign({},Nt,{left:n+20,width:t-30-n},e)},configTitleWrapCreate:function(t,e){var n=100*t/320;return Object.assign({},Bt,{left:n+20,width:t-30-n},e)},configTitleCreate:function(t,e){var n=100*t/320;return Object.assign({},Bt,{width:t-30-n},e)}},Vt=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Zt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Vt(e,t),e.prototype.createWrapper=function(t,e,n,r,i){void 0===e&&(e="javascript:;"),void 0===n&&(n="_target"),void 0===r&&(r="");return this.buildDom("a",{href:e,target:n,title:r,onclick:i},function(){return Gt.configWrapCreate(t)})},e.prototype.createTitle=function(t,e){var n=this.buildDom("div",{},function(){return Gt.configTitleWrapCreate(t)}),r=this.buildDom("span",{innerText:e},function(){return Gt.configTitleCreate(t)});return n.appendChild(r),n},e.prototype.createImgContent=function(t,e){var n=this.buildDom("div",{},function(){return Gt.configImgCreate(t)});return n.style.background="url("+e+") center center no-repeat",n.style.backgroundSize="cover",n},e.prototype.createTextContent=function(t){return this.buildDom("div",{},function(){return Gt.configRightCreate(t)})},e.prototype.createRemark=function(t,e,n,r,i){return e===ft.SHOW_SRC_TIME?this.createSrcAndTimeDom(t,5,0,20,r,i):this.createDescDom(t,10,0,n)},e.prototype.render=function(t,e,n,r,i){var o=n.title,a=n.imageUrl,c=n.type,u=n.src,s=n.desc,p=n.time,l=n.curl,f=n.target;if(a){var d=this.createWrapper(e,r||l,f,o,i),h=this.createTitle(e,o),g=this.createImgContent(e,a),m=this.createTextContent(e),y=this.createRemark(e,c,s,u,p),v=this.createLineDom(e,13);m.appendChild(h),m.appendChild(y),d.appendChild(g),d.appendChild(m),d.appendChild(v),t.appendChild(d)}},e}(Tt),Xt=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),qt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Xt(e,t),e.prototype.createWrapper=function(t,e,n,r,i){void 0===e&&(e="javascript:;"),void 0===n&&(n="_target"),void 0===r&&(r="");return this.buildDom("a",{href:e,target:n,title:r,onclick:i},function(){return zt.configWrapCreate(t)})},e.prototype.createTitle=function(t,e){return this.buildDom("span",{innerText:e},function(){return zt.configTitleCreate(t)})},e.prototype.createContent=function(t,e){for(var n=this.buildDom("div",{},function(){return zt.configImgsWrapCreate(t)}),r=[],i=e.length,o=this,a=0;a<i;a++)!function(n){var a=e[n],c={};0!==n&&(c["margin-left"]="3px");var u=o.buildDom("div",{},function(){return zt.configImgItemCreate(t,c,i)});u.style.background="url("+a+") center center no-repeat",u.style.backgroundSize="cover",r.push(u)}(a);for(var c in r)n.appendChild(r[c]);return n},e.prototype.createRemark=function(t,e,n,r,i){return e===ft.SHOW_SRC_TIME?this.createSrcAndTimeDom(t,0,10,20,r,i):this.createDescDom(t,0,10,n)},e.prototype.render=function(t,e,n,r,i){var o=n.title,a=n.images,c=n.type,u=n.src,s=n.desc,p=n.time,l=n.curl,f=n.target;if(a&&0!==a.length){var d=this.createWrapper(e,r||l,f,o,i),h=this.createTitle(e,o),g=this.createContent(e,a),m=this.createRemark(e,c,s,u,p),y=this.createLineDom(e,0);d.appendChild(h),d.appendChild(g),d.appendChild(m),d.appendChild(y),t.appendChild(d)}},e}(Tt),Yt={right:15,top:0,display:"block",position:"absolute",color:"#999",overflow:"hidden","text-decoration":"none","font-size":12,"line-height":20,height:20},Jt={configAdMaskCreate:function(t,e){return Object.assign({},Yt,{},e)}},Kt=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Qt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Kt(e,t),e.prototype.createRemark=function(e,n,r,i,o){var a=t.prototype.createRemark.call(this,e,n,r,i,o),c=this.buildDom("div",{innerText:"广告"},function(){return Jt.configAdMaskCreate(e)});return a.appendChild(c),a},e.prototype.createExposureImgs=function(t,e){for(var n=this.buildDom("span",{},function(){return{display:"none"}}),r=e.length,i=0;i<r;i++){var o=e[i],a=this.buildDom("img",{src:o});n.appendChild(a)}return n},e.prototype.render=function(e,n,r,i,o){t.prototype.render.call(this,e,n,r,i,o);var a=r.monitorUrl,c=r.reqUrls,u=[];a&&a.length&&(u=u.concat(a)),c&&c.length&&(u=u.concat(c));var s=this.createExposureImgs(n,u);e.appendChild(s)},e}(qt),te={top:0,left:0,height:30,"line-height":30,"font-size":18,display:"block",position:"","background-color":"#eee",color:"#888",overflow:"hidden","text-align":"center"},ee={configWrapCreate:function(t,e){return Object.assign({},te,e)}},ne={top:0,left:0,height:30,"line-height":30,display:"block",position:"relative","background-color":"#fff",margin:"15px 0px 0px 10px",overflow:"visible","z-index":"-1","border-bottom":"2px solid #dddddd"},re={top:0,left:0,height:30,width:70,"line-height":30,"font-size":16,position:"relative",color:"#888",overflow:"hidden","text-align":"left","border-bottom":"2px solid #4280db"},ie={configWrapCreate:function(t,e){return Object.assign({},ne,{width:t-15},e)},configTitleCreate:function(t,e){return Object.assign({},re,e)}},oe=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ae=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return oe(e,t),e.prototype.createHeader=function(t,e){void 0===e&&(e="猜你喜欢");var n=this.buildDom("div",{},function(){return ie.configWrapCreate(t)}),r=this.buildDom("div",{},function(){return ie.configTitleCreate(t)});return r.innerText=e,n.appendChild(r),n},e.prototype.createFooter=function(t){return this.buildDom("div",{},function(){return ee.configWrapCreate(t)})},e.prototype.createrContainer=function(){return this.buildDom("div",{})},e}(Tt),ce={top:0,left:0,height:"auto",display:"block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none"},ue={top:0,left:10,height:"auto",display:"block",position:"","font-size":18,color:"#000","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":"auto",overflow:"hidden","text-overflow":"ellipsis","o-text-overflow":"ellipsis","text-decoration":"none",padding:"",margin:"10px 0px 0px 10px",border:""},se={top:0,display:"block",position:"relative","background-size":"cover",overflow:"hidden",border:"",margin:"5px 0px 0px 10px",padding:""},pe={top:0,left:0,width:"100%",display:"block",position:"",overflow:"hidden",border:"",margin:"",padding:""},le={top:"50%",left:"50%",width:"15%","z-index":99,"Webkit-transform":"translate(-50%, -50%)",transform:"translate(-50%, -50%)",display:"block",position:"absolute",background:"",overflow:"hidden",border:"",margin:"",padding:""},fe={configWrapCreate:function(t,e){return Object.assign({},ce,{width:t},e)},configTitleContainerCreate:function(t,e){return Object.assign({},ue,{width:t-20},e)},configContainerCreate:function(t,e){var n=t-20;return Object.assign({},se,{width:n},e)},configVideoScreenCreate:function(t,e){return Object.assign({},pe,{},e)},configPlayBtnCreate:function(t,e){return Object.assign({},le,e)}},de=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),he=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return de(e,t),e.prototype.createWrapper=function(t){var e={};return this.buildDom("div",e,function(){return fe.configWrapCreate(t)})},e.prototype.createTitle=function(t,e){return this.buildDom("span",{innerHTML:e},function(){return fe.configTitleContainerCreate(t)})},e.prototype.createContent=function(t,e,n){var r={poster:n,src:e,controls:"controls",preload:"none"},i=this.buildDom("video",r,function(){return fe.configVideoScreenCreate(t)});i.addEventListener("play",function(){var t=document.querySelectorAll("video");for(var e in t){var n=t[e];n!==i&&!1===n.paused&&n.pause()}});var o=this.buildDom("div",{onclick:function(t){i.paused||i.ended?i.play():i.pause()}},function(){return fe.configContainerCreate(t)});return o.appendChild(i),o},e.prototype.createRemark=function(t,e,n,r,i){return e===ft.SHOW_SRC_TIME?this.createSrcAndTimeDom(t,10,10,20,r,i):this.createDescDom(t,10,10,n)},e.prototype.render=function(t,e,n){var r=n.title,i=n.source,o=n.imageUrl,a=n.type,c=n.src,u=n.desc,s=n.time;if(o&&i){var p=this.createWrapper(e),l=this.createTitle(e,r),f=this.createContent(e,i,o),d=this.createRemark(e,a,u,c,s),h=this.createLineDom(e,0);p.appendChild(l),p.appendChild(f),p.appendChild(d),p.appendChild(h),t.appendChild(p)}},e}(Tt)),ge=new Zt,me=new Wt,ye=new Ht,ve=new Qt,be=new ae;return function(){function t(t){var e=this;document.body&&document.body.clientWidth?this.winWidth=document.body&&document.body.clientWidth:this.winWidth=window.innerWidth,this.loadObj=new vt(t),this.loadObj.subscribe("fetch-begin",function(){e.footer(e.loadObj.isEnd,e.loadObj.loading)}),this.loadObj.subscribe("fetch-success",function(){e.footer(e.loadObj.isEnd,e.loadObj.loading)}),this.loadObj.subscribe("fetch-fail",function(){e.footer(e.loadObj.isEnd,e.loadObj.loading)})}return t.prototype.init=function(t,e,n,r){void 0===e&&(e={}),void 0===r&&(r=!0);var i,o=document.body;if(t&&"string"==typeof t?i=document.getElementById(t)||o:"object"==typeof t&&t instanceof HTMLElement&&(i=t),i){var a=this.loadObj;if(ct(n)||(this.statisticObj=new gt(n)),this.headerDom=be.createHeader(this.winWidth),this.footerDom=be.createFooter(this.winWidth),this.footer(a.isEnd,a.loading),this.containerDom=be.createrContainer(),!r||e.dom&&e.dom!==o)this.initRender(i,e);else{document.body;var c=pt.getEleHeight(document),u=pt.getEleHeight(window);if(pt.getScrollTop(window)+u>=c-10)this.initRender(i,e);else{var s=this,p=function(){pt.getScrollTop(window)+u>=c-10&&(s.initRender(i,e),window.removeEventListener("scroll",p))};window.addEventListener("scroll",p)}}}},t.prototype.initRender=function(t,e){var n=this;void 0===e&&(e={});var r=this.headerDom,i=this.containerDom;i.appendChild(r),t.appendChild(i),this.loadObj.getInit(function(t){return n.render(t)}),this.statisticObj&&this.statisticObj.firstRender(),e.scroll&&this.watchScroll(e.dom,e.onEndReachedThreshold,function(t){return n.render(t)}),e&&e.click&&this.watchLoadMoreBtn(function(t){return n.render(t)})},t.prototype.render=function(t){var e=this,n=(document.body,document.createDocumentFragment()),r=this.containerDom,i=lt.BIG_IMG,o=lt.IMG_TEXT,a=lt.IMGS,c=lt.VIDEO,u=lt.IMG_TEXT_AD;t.forEach(function(t){switch(t.stype){case i:e.renderBigImgItem(n,t);break;case o:e.renderImgTextItem(n,t);break;case a:e.renderImgsItem(n,t);break;case c:he.render(n,e.winWidth,t);break;case u:e.renderImgsAdItem(n,t);break;default:return}});var s=this.footer();n.appendChild(s),r.appendChild(n)},t.prototype.watchScroll=function(t,e,n){void 0===e&&(e=50);var r=this.loadObj,i=document.body,o=0;t&&"string"==typeof t?i=document.getElementById(t)||document.body:"object"==typeof t&&t instanceof HTMLElement&&(i=t,o=pt.getEleHeight(i)),o=i===document.body?pt.getEleHeight(window):pt.getEleHeight(i);var a=function(){var t=0,a=0;i===document.body?(t=pt.getEleHeight(document),a=pt.getScrollTop(window)):(a=pt.getScrollTop(i),t=i.scrollHeight),t-a-o<=e&&r.getNext(n)},c=i===document.body?window:i;c.addEventListener?c.addEventListener("scroll",a):c.onscroll=a},t.prototype.watchLoadMoreBtn=function(t){var e=this.loadObj,n=this.footer(),r=function(){e.getNext(t)};n.addEventListener?n.addEventListener("click",function(){return r()}):n.onclick=function(){return r()}},t.prototype.renderBigImgItem=function(t,e){var n=this,r=e.imageUrl,i=e.curl,o=e.target,a=e.sxinitemid;if(r){var c=i;if(this.statisticObj&&"function"==typeof this.statisticObj.createRedirectUrl){var u=i;pt.isValidURL(i)||(u=pt.completeURL(i));var s=Object.assign({},e,{curl:u});c=this.statisticObj.createRedirectUrl(s)||i}me.render(t,this.winWidth,e,c,function(){if(n.statisticObj)return n.statisticObj.materielClick(a),setTimeout(function(){window.open(c,o||"_target")},n.statisticObj.delay),!1})}},t.prototype.renderImgTextItem=function(t,e){var n=this,r=(e.title,e.curl),i=e.imageUrl,o=e.target,a=(e.type,e.src,e.time,e.desc,e.sxinitemid);if(i){var c=r;if(this.statisticObj&&"function"==typeof this.statisticObj.createRedirectUrl){var u=r;pt.isValidURL(r)||(u=pt.completeURL(r));var s=Object.assign({},e,{curl:u});c=this.statisticObj.createRedirectUrl(s)||r}var p=this.winWidth;ge.render(t,p,e,c,function(){if(n.statisticObj)return n.statisticObj.materielClick(a),setTimeout(function(){window.open(c,o||"_target")},n.statisticObj.delay),!1})}},t.prototype.renderImgsItem=function(t,e){var n=this,r=(e.title,e.curl),i=e.images,o=e.target,a=(e.desc,e.src,e.time,e.type,e.sxinitemid);if(i&&0!==i.length){var c=r;if(this.statisticObj&&"function"==typeof this.statisticObj.createRedirectUrl){var u=r;pt.isValidURL(r)||(u=pt.completeURL(r));var s=Object.assign({},e,{curl:u});c=this.statisticObj.createRedirectUrl(s)||r}var p=this.winWidth;ye.render(t,p,e,c,function(){if(n.statisticObj)return n.statisticObj.materielClick(a),setTimeout(function(){window.open(c,o||"_target")},n.statisticObj.delay),!1})}},t.prototype.renderImgsAdItem=function(t,e){var n=this,r=(e.title,e.curl),i=e.images,o=e.target,a=(e.desc,e.src,e.time,e.type,e.sxinitemid);if(i&&0!==i.length){var c=r;if(this.statisticObj&&"function"==typeof this.statisticObj.createRedirectUrl){var u=r;pt.isValidURL(r)||(u=pt.completeURL(r));var s=Object.assign({},e,{curl:u});c=this.statisticObj.createRedirectUrl(s)||r}var p=this.winWidth;ve.render(t,p,e,c,function(){if(n.statisticObj)return n.statisticObj.materielClick(a),setTimeout(function(){window.open(c,o||"_target")},n.statisticObj.delay),!1})}},t.prototype.footer=function(t,e){var n=this.footerDom;if(void 0===t&&void 0===e)return n;var r=t?"-- 加载完成 --":e?"加载中...":"加载更多";return n.innerText!==r&&(n.innerText=r),n},t}()});
//# sourceMappingURL=information-flow-layout-render.umd.js.map
