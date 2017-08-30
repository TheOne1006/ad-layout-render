function createCommonjsModule(t,e){return e={exports:{}},t(e,e.exports),e.exports}function configCreate(t,e){return Object.assign({},defaultConfig,{width:t-20},e)}function configCreate$1(t,e){return Object.assign({},defaultConfig$1,e)}function configWrapCreate(t,e){return Object.assign({},defaultWrapConfig,e)}function configItemCreate(t,e){return Object.assign({},defaultItemConfig,e)}var StyleCtrl=function(){function t(){var e=this;this.genStyle=function(e){var i="";if(e){var n=t.pxStyles;for(var o in e)if(e.hasOwnProperty(o)){var r=e[o],a=!!n[o]&&!isNaN(parseFloat(r))&&isFinite(r);i+=o+":"+e[o]+(a?"px;":";")}}return i},this.appendStyle=function(t,i){var n=e.genStyle(i),o=t.style.cssText;t.style.cssText=o+n}}return t.pxStyles={width:1,height:1,"line-height":1,"padding-left":1,"padding-right":1,"padding-top":1,"padding-bottom":1,"border-width":1,"font-size":1,"margin-left":1,"margin-right":1,"margin-top":1,"margin-bottom":1,"border-left-width":1,"border-right-width":1,"border-top-width":1,"border-bottom-width":1,top:1,left:1,bottom:1,right:1},t.getCurrentStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:window.getComputedStyle?window.getComputedStyle(t)[e]:void 0},t}(),DEFAULT_PAGE_NUM=1,DEFAULT_PAGE_SHOW_NUM=5,LoadCtrl=function(){function t(t){var e=t.initData,i=void 0===e?[]:e,n=t.nextPage,o=void 0===n?DEFAULT_PAGE_NUM:n,r=t.pageShowNum,a=void 0===r?DEFAULT_PAGE_SHOW_NUM:r,c=t.mockRemoteLoad,s=void 0!==c&&c,l=t.ajaxFetch;this.loading=!1,this.isEnd=!1,this.page=o,this.mockRemoteLoad=s,this.showNum=a,this.data=i,l&&(this.ajaxFetch=l)}return t.prototype.fetchData=function(t,e){var i=this;if(!this.loading&&!this.isEnd){this.loading=!0;(0,this.ajaxFetch)({page:t,success:function(t){i.loading=!1,i.showNum>t.length&&(i.isEnd=!0),e(t)},fail:function(t){throw i.loading=!1,i.isEnd=!0,t}})}},t.prototype.fetchNext=function(t){if(!this.loading&&!this.isEnd){var e=this.page;this.page=e+1,this.fetchData(e,t)}},t.prototype.mockFetch=function(t,e){var i=this.data,n=this.showNum,o=Math.min((t-1)*n,i.length),r=Math.min(t*n,i.length);r===i.length&&(this.isEnd=!0);var a=i.slice(o,r);a.length&&e(a)},t.prototype.mockFetchNext=function(t){if(!this.isEnd){var e=this.page;this.page=e+1,this.mockFetch(e,t)}},t.prototype.getInit=function(t){this.mockRemoteLoad?this.mockFetch(1,t):t(this.data)},t.prototype.getNext=function(t){this.mockRemoteLoad?this.mockFetchNext(t):this.fetchNext(t)},t}(),_global=createCommonjsModule(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),_core=createCommonjsModule(function(t){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)}),_isObject=function(t){return"object"==typeof t?null!==t:"function"==typeof t},_anObject=function(t){if(!_isObject(t))throw TypeError(t+" is not an object!");return t},_fails=function(t){try{return!!t()}catch(t){return!0}},_descriptors=!_fails(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),document$1=_global.document,is=_isObject(document$1)&&_isObject(document$1.createElement),_domCreate=function(t){return is?document$1.createElement(t):{}},_ie8DomDefine=!_descriptors&&!_fails(function(){return 7!=Object.defineProperty(_domCreate("div"),"a",{get:function(){return 7}}).a}),_toPrimitive=function(t,e){if(!_isObject(t))return t;var i,n;if(e&&"function"==typeof(i=t.toString)&&!_isObject(n=i.call(t)))return n;if("function"==typeof(i=t.valueOf)&&!_isObject(n=i.call(t)))return n;if(!e&&"function"==typeof(i=t.toString)&&!_isObject(n=i.call(t)))return n;throw TypeError("Can't convert object to primitive value")},dP=Object.defineProperty,f=_descriptors?Object.defineProperty:function(t,e,i){if(_anObject(t),e=_toPrimitive(e,!0),_anObject(i),_ie8DomDefine)try{return dP(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t},_objectDp={f:f},_propertyDesc=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},_hide=_descriptors?function(t,e,i){return _objectDp.f(t,e,_propertyDesc(1,i))}:function(t,e,i){return t[e]=i,t},hasOwnProperty={}.hasOwnProperty,_has=function(t,e){return hasOwnProperty.call(t,e)},id=0,px=Math.random(),_uid=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++id+px).toString(36))},_redefine=createCommonjsModule(function(t){var e=_uid("src"),i=Function.toString,n=(""+i).split("toString");_core.inspectSource=function(t){return i.call(t)},(t.exports=function(t,i,o,r){var a="function"==typeof o;a&&(_has(o,"name")||_hide(o,"name",i)),t[i]!==o&&(a&&(_has(o,e)||_hide(o,e,t[i]?""+t[i]:n.join(String(i)))),t===_global?t[i]=o:r?t[i]?t[i]=o:_hide(t,i,o):(delete t[i],_hide(t,i,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[e]||i.call(this)})}),_aFunction=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},_ctx=function(t,e,i){if(_aFunction(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,o){return t.call(e,i,n,o)}}return function(){return t.apply(e,arguments)}},PROTOTYPE="prototype",$export=function(t,e,i){var n,o,r,a,c=t&$export.F,s=t&$export.G,l=t&$export.S,d=t&$export.P,f=t&$export.B,p=s?_global:l?_global[e]||(_global[e]={}):(_global[e]||{})[PROTOTYPE],g=s?_core:_core[e]||(_core[e]={}),u=g[PROTOTYPE]||(g[PROTOTYPE]={});s&&(i=e);for(n in i)r=((o=!c&&p&&void 0!==p[n])?p:i)[n],a=f&&o?_ctx(r,_global):d&&"function"==typeof r?_ctx(Function.call,r):r,p&&_redefine(p,n,r,t&$export.U),g[n]!=r&&_hide(g,n,a),d&&u[n]!=r&&(u[n]=r)};_global.core=_core,$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;var _export=$export,toString={}.toString,_cof=function(t){return toString.call(t).slice(8,-1)},_iobject=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==_cof(t)?t.split(""):Object(t)},_defined=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},_toIobject=function(t){return _iobject(_defined(t))},ceil=Math.ceil,floor=Math.floor,_toInteger=function(t){return isNaN(t=+t)?0:(t>0?floor:ceil)(t)},min=Math.min,_toLength=function(t){return t>0?min(_toInteger(t),9007199254740991):0},max=Math.max,min$1=Math.min,_toIndex=function(t,e){return(t=_toInteger(t))<0?max(t+e,0):min$1(t,e)},_arrayIncludes=function(t){return function(e,i,n){var o,r=_toIobject(e),a=_toLength(r.length),c=_toIndex(n,a);if(t&&i!=i){for(;a>c;)if((o=r[c++])!=o)return!0}else for(;a>c;c++)if((t||c in r)&&r[c]===i)return t||c||0;return!t&&-1}},SHARED="__core-js_shared__",store=_global[SHARED]||(_global[SHARED]={}),_shared=function(t){return store[t]||(store[t]={})},shared=_shared("keys"),_sharedKey=function(t){return shared[t]||(shared[t]=_uid(t))},arrayIndexOf=_arrayIncludes(!1),IE_PROTO=_sharedKey("IE_PROTO"),_objectKeysInternal=function(t,e){var i,n=_toIobject(t),o=0,r=[];for(i in n)i!=IE_PROTO&&_has(n,i)&&r.push(i);for(;e.length>o;)_has(n,i=e[o++])&&(~arrayIndexOf(r,i)||r.push(i));return r},_enumBugKeys="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),_objectKeys=Object.keys||function(t){return _objectKeysInternal(t,_enumBugKeys)},f$1=Object.getOwnPropertySymbols,_objectGops={f:f$1},f$2={}.propertyIsEnumerable,_objectPie={f:f$2},_toObject=function(t){return Object(_defined(t))},$assign=Object.assign,_objectAssign=!$assign||_fails(function(){var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach(function(t){e[t]=t}),7!=$assign({},t)[i]||Object.keys($assign({},e)).join("")!=n})?function(t,e){for(var i=_toObject(t),n=arguments.length,o=1,r=_objectGops.f,a=_objectPie.f;n>o;)for(var c,s=_iobject(arguments[o++]),l=r?_objectKeys(s).concat(r(s)):_objectKeys(s),d=l.length,f=0;d>f;)a.call(s,c=l[f++])&&(i[c]=s[c]);return i}:$assign;_export(_export.S+_export.F,"Object",{assign:_objectAssign});var defaultConfig={"line-height":0,"background-color":"#eee",padding:"",margin:"8px 0px 0px 10px",border:"",left:10,height:1,top:0,position:"",display:"block"},smFontSize=12,defaultConfig$1={width:"",height:12,display:"inline-block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none","font-size":smFontSize,color:"#999","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":12,"text-overflow":"ellipsis","o-text-overflow":"ellipsis",padding:"",border:""},itemFontSize=12,itemFontColor="#999",defaultWrapConfig={display:"block",position:"","line-height":"100%","text-align":"left"},defaultItemConfig={top:0,left:0,width:"",height:"",display:"inline-block",position:"","font-size":itemFontSize,color:itemFontColor,"font-family":"Arial, Helvetica, sans-serif","text-align":"left","white-space":"nowrap","text-overflow":"ellipsis","o-text-overflow":"ellipsis","margin-right":"8px"},srcTimeStyles={configWrapCreate:configWrapCreate,configItemCreate:configItemCreate},spacingMd=10,baseFontSize=18,defaultWrapConfig$1={top:0,left:0,height:"auto",display:"block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none"},configWrapCreate$1=function(t,e){return Object.assign({},defaultWrapConfig$1,{width:t},e)},defaultTitleContainerConfig={top:0,left:spacingMd,height:"auto",display:"block",position:"","font-size":baseFontSize,color:"#000","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":"auto",overflow:"hidden","text-overflow":"ellipsis","o-text-overflow":"ellipsis","text-decoration":"none",padding:"",margin:spacingMd+"px 0px 0px "+spacingMd+"px",border:""},configTitleContainerCreate=function(t,e){return Object.assign({},defaultTitleContainerConfig,{width:t-2*spacingMd},e)},defaultImgContainerConfig={top:0,left:spacingMd,display:"block",position:"","background-size":"cover",overflow:"hidden",border:"",margin:spacingMd/2+"px 0px 0px "+spacingMd+"px",padding:""},configImgContainerCreate=function(t,e){var i=t-2*spacingMd;return Object.assign({},defaultImgContainerConfig,{width:i,height:1*i/2.3},e)},bigImgStyle={configWrapCreate:configWrapCreate$1,configTitleContainerCreate:configTitleContainerCreate,configImgContainerCreate:configImgContainerCreate},spacingMd$1=10,spacingSm=5,baseFontSize$1=18,baseLineHeight=20,defaultWrapConfig$2={top:0,left:0,display:"block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none"},configWrapCreate$2=function(t,e){return Object.assign({},defaultWrapConfig$2,{width:t},e)},defulatImgConfig={top:3*spacingSm,left:spacingMd$1,display:"inline-block",position:"",border:"",margin:3*spacingSm+"px 0px 0px "+spacingMd$1+"px",padding:"","vertical-align":"top"},configImgCreate=function(t,e){var i=100*t/320;return Object.assign({},defulatImgConfig,{width:i,height:33*i/50},e)},defaultRightContentConfig={top:3*spacingSm,display:"inline-block",position:"",border:"",margin:3*spacingSm+"px 0px 0px "+spacingMd$1+"px",padding:"","line-height":"100%","vertical-align":"top"},configRightCreate=function(t,e){var i=100*t/320;return Object.assign({},defaultRightContentConfig,{left:i+2*spacingMd$1,width:t-3*spacingMd$1-i},e)},defaultTitleWrapConfig={top:3*spacingSm+3,display:"inline-block",position:"","font-size":baseFontSize$1,color:"#000","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":baseLineHeight},configTitleWrapCreate=function(t,e){var i=100*t/320;return Object.assign({},defaultTitleWrapConfig,{left:i+2*spacingMd$1,width:t-3*spacingMd$1-i},e)},configTitleCreate=function(t,e){var i=100*t/320;return Object.assign({},defaultTitleWrapConfig,{width:t-3*spacingMd$1-i},e)},imgTextStyle={configWrapCreate:configWrapCreate$2,configImgCreate:configImgCreate,configRightCreate:configRightCreate,configTitleWrapCreate:configTitleWrapCreate,configTitleCreate:configTitleCreate},spacingMd$2=10,spacingSm$1=5,baseFontSize$2=18,baseLineHeight$1=20,defaultWrapConfig$3={top:0,left:0,height:"auto",display:"block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none"},configWrapCreate$3=function(t,e){return Object.assign({},defaultWrapConfig$3,{width:t},e)},defaultTitleConfig$1={top:0,left:spacingMd$2,height:"auto",display:"block",position:"","font-size":baseFontSize$2,color:"#000","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":baseLineHeight$1,overflow:"hidden","-webkit-line-clamp":"2","text-overflow":"ellipsis","o-text-overflow":"ellipsis","text-decoration":"none",padding:"",margin:3*spacingSm$1+"px "+spacingMd$2+"px 0px",border:""},configTitleCreate$1=function(t,e){return Object.assign({},defaultTitleConfig$1,{width:t-2*spacingMd$2},e)},defaultImgItemConfig={top:spacingSm$1,left:spacingMd$2,display:"inline-block",position:"",padding:"",margin:spacingSm$1+"px 0px "+spacingMd$2+"px "+spacingMd$2+"px",border:""},configImgItemCreate=function(t,e,i){void 0===i&&(i=3);var n=(t-2*spacingMd$2-2*i)/i;return Object.assign({},defaultImgItemConfig,{width:n,height:66*n/98},e)},imgsStyle={configWrapCreate:configWrapCreate$3,configTitleCreate:configTitleCreate$1,configImgItemCreate:configImgItemCreate},smFontSize$1=12,spacingLg=15,defaultWrapConfig$4={top:0,left:0,height:spacingLg,"line-height":spacingLg,"font-size":smFontSize$1,display:"block",position:"","background-color":"#eee",color:"#888",overflow:"hidden","text-align":"center"},configWrapCreate$4=function(t,e){return Object.assign({},defaultWrapConfig$4,e)},footerStyle={configWrapCreate:configWrapCreate$4},mdFontSize=16,spacingLg$1=30,defaultWrapConfig$5={top:0,left:0,height:spacingLg$1,"line-height":spacingLg$1,display:"block",position:"relative","background-color":"#fff",margin:"15px 0px 0px 10px",overflow:"visible","z-index":"-1","border-bottom":"2px solid #dddddd"},configWrapCreate$5=function(t,e){return Object.assign({},defaultWrapConfig$5,{width:t-15},e)},defaultTitleConfig$2={top:0,left:0,height:spacingLg$1,width:70,"line-height":spacingLg$1,"font-size":mdFontSize,position:"relative",color:"#888",overflow:"hidden","text-align":"left","border-bottom":"2px solid #4280db"},configTitleCreate$2=function(t,e){return Object.assign({},defaultTitleConfig$2,e)},headerStyle={configWrapCreate:configWrapCreate$5,configTitleCreate:configTitleCreate$2},styleController=new StyleCtrl,InformationFlowLayoutRender=function(){function t(t){document.body&&document.body.clientWidth?this.winWidth=document.body&&document.body.clientWidth:this.winWidth=window.innerWidth,this.loadObj=new LoadCtrl(t)}return t.prototype.init=function(t,e,i,n){var o=this;void 0===e&&(e={}),void 0===n&&(n=!0);var r,a=document.body;if(t&&"string"==typeof t?r=document.getElementById(t)||a:"object"==typeof t&&t instanceof HTMLElement&&(r=t),r){var c=this.loadObj;this.statisticOption=i;var s=function(){var t=o.createHeader(),i=o.createContainer();i.appendChild(t),r.appendChild(i),c.getInit(function(t){return o.render(t,c.isEnd)}),e.scroll&&o.watchScroll(e.dom,e.onEndReachedThreshold,function(t){return o.render(t,c.isEnd)})};if(!n||e.dom&&e.dom!==a)s();else{var l=document.documentElement;if(l.offsetHeight>l.clientHeight+50){var d=function(){var t=document.body;t.scrollHeight-t.scrollTop-window.screen.height<=0&&(s(),window.removeEventListener("scroll",d))};window.addEventListener("scroll",d)}else s()}}},t.prototype.render=function(e,i){var n=this,o=(document.body,document.createDocumentFragment()),r=this.createContainer(),a=t.layoutType.BIG_IMG,c=t.layoutType.IMG_TEXT,s=t.layoutType.IMGS;e.forEach(function(t){switch(t.stype){case a:n.renderBigImgItem(o,t);break;case c:n.renderImgTextItem(o,t);break;case s:n.renderImgsItem(o,t);break;default:return}});var l=this.createFooter(i);o.appendChild(l),r.appendChild(o)},t.prototype.watchScroll=function(t,e,i){void 0===e&&(e=50);var n=this.loadObj,o=document.body;t&&"string"==typeof t?o=document.getElementById(t)||document.body:"object"==typeof t&&t instanceof HTMLElement&&(o=t);o.clientHeight;var r=function(){o.scrollHeight-o.scrollTop-window.screen.height<=e&&n.getNext(i)},a=o===document.body?window:o;a.addEventListener?a.addEventListener("scroll",r):a.onscroll=r},t.prototype.buildDom=function(t,e,i){void 0===e&&(e={});var n=document.createElement(t);if(e)for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);if(i){var r=i();styleController.appendStyle(n,r)}return n},t.prototype.renderBigImgItem=function(e,i){var n=this,o=i.title,r=i.curl,a=i.imageUrl,c=i.target,s=i.type,l=i.src,d=i.desc,f=i.time,p=i.sxinitemid;if(a){var g=r;this.statisticOption&&"function"==typeof this.statisticOption.createRedirectUrl&&(g=this.statisticOption.createRedirectUrl(i)||r);var u=this.winWidth,h=this.buildDom("a",{href:g,target:c||"_self",title:o,onclick:function(t){if(n.statisticOption)return n.addStatisticsScript(n.statisticOption.sxinid,p),setTimeout(function(){window.open(g,c||"_self")},n.statisticOption.delay||100),!1}},function(){return bigImgStyle.configWrapCreate(u)}),m=this.buildDom("span",{innerHTML:o},function(){return bigImgStyle.configTitleContainerCreate(u)});h.appendChild(m);var y=this.buildDom("div",{},function(){return bigImgStyle.configImgContainerCreate(u)});if(y.style.background="url("+a+") center center no-repeat",y.style.backgroundSize="cover",h.appendChild(y),s===t.remarkType.SHOW_DESC&&d){var b=this.createDescDom(d,10,10);h.appendChild(b)}else if(s===t.remarkType.SHOW_SRC_TIME&&l&&f){var C=this.createSrcAndTimeDom(l,f,10,10,20);h.appendChild(C)}var v=this.createLineDom(0,"");return h.appendChild(v),e.appendChild(h),e}},t.prototype.renderImgTextItem=function(e,i){var n=this,o=i.title,r=i.curl,a=i.imageUrl,c=i.target,s=i.type,l=i.src,d=i.time,f=i.desc,p=i.sxinitemid;if(a){var g=r;this.statisticOption&&"function"==typeof this.statisticOption.createRedirectUrl&&(g=this.statisticOption.createRedirectUrl(i)||r);var u=this.winWidth,h=this.buildDom("a",{href:g,target:c||"_self",title:o,onclick:function(t){if(n.statisticOption)return n.addStatisticsScript(n.statisticOption.sxinid,p),setTimeout(function(){window.open(g,c||"_self")},n.statisticOption.delay||100),!1}},function(){return imgTextStyle.configWrapCreate(u)}),m=this.buildDom("div",{},function(){return imgTextStyle.configImgCreate(u)});m.style.background="url("+a+") center center no-repeat",m.style.backgroundSize="cover",h.appendChild(m);var y=this.buildDom("div",{},function(){return imgTextStyle.configRightCreate(u)}),b=this.buildDom("div",{},function(){return imgTextStyle.configTitleWrapCreate(u)}),C=this.buildDom("span",{innerText:o},function(){return imgTextStyle.configTitleCreate(u)});if(b.appendChild(C),y.appendChild(b),s===t.remarkType.SHOW_DESC&&f){var v=this.createDescDom(f,10,0);y.appendChild(v)}else if(s===t.remarkType.SHOW_SRC_TIME&&l&&d){var _=this.createSrcAndTimeDom(l,d,5,0,20);y.appendChild(_)}h.appendChild(y);var x=this.createLineDom(13,"");return h.appendChild(x),e.appendChild(h),e}},t.prototype.renderImgsItem=function(e,i){var n=this,o=i.title,r=i.curl,a=i.images,c=i.target,s=i.desc,l=i.src,d=i.time,f=i.type,p=i.sxinitemid;if(a&&0!==a.length){var g=r;this.statisticOption&&"function"==typeof this.statisticOption.createRedirectUrl&&(g=this.statisticOption.createRedirectUrl(i)||r);var u=this.winWidth,h=this.buildDom("a",{href:g,target:c||"_self",title:o,onclick:function(t){if(n.statisticOption)return n.addStatisticsScript(n.statisticOption.sxinid,p),setTimeout(function(){window.open(g,c||"_self")},n.statisticOption.delay||100),!1}},function(){return imgsStyle.configWrapCreate(u)}),m=this.buildDom("span",{innerText:o},function(){return imgsStyle.configTitleCreate(u)});h.appendChild(m);for(var y=a.length,b=this,C=0;C<y;C++)!function(t){var e=a[t],i={};0!==t&&(i["margin-left"]="3px");var n=b.buildDom("div",{},function(){return imgsStyle.configImgItemCreate(u,i,y)});n.style.background="url("+e+") center center no-repeat",n.style.backgroundSize="cover",h.appendChild(n)}(C);if(f===t.remarkType.SHOW_DESC&&s){var v=this.createDescDom(s,0,10);h.appendChild(v)}else if(f===t.remarkType.SHOW_SRC_TIME&&l&&d){var _=this.createSrcAndTimeDom(l,d,0,10,20);h.appendChild(_)}var x=this.createLineDom(0,"");return h.appendChild(x),e.appendChild(h),e}},t.prototype.createLineDom=function(t,e){var i=this;return this.buildDom("div",{},function(){return configCreate(i.winWidth,{top:t,position:e})})},t.prototype.createDescDom=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0);var n=document.createElement("div");if(!t)return n;n.innerText=t;var o=configCreate$1(this.winWidth,{top:e,left:i,"margin-top":e,"margin-left":i});return styleController.appendStyle(n,o),n},t.prototype.createSrcAndTimeDom=function(t,e,i,n,o){var r=document.createElement("div");if(!t||!e)return r;var a={top:i,left:n,height:o,"margin-left":n,"margin-top":i},c=srcTimeStyles.configWrapCreate(this.winWidth,a);styleController.appendStyle(r,c);var s=document.createElement("div"),l=srcTimeStyles.configItemCreate(this.winWidth,{"line-height":o});s.innerText=t,styleController.appendStyle(s,l);var d=document.createElement("div");return d.innerText=e,styleController.appendStyle(d,l),r.appendChild(s),r.appendChild(d),r},t.prototype.createContainer=function(){return this.containerDom||(this.containerDom=this.buildDom("div",{})),this.containerDom},t.prototype.createHeader=function(){var t=this;this.headerDom=this.buildDom("div",{},function(){return headerStyle.configWrapCreate(t.winWidth)});var e=this.buildDom("div",{},function(){return headerStyle.configTitleCreate(t.winWidth)});return e.innerText="猜你喜欢",this.headerDom.appendChild(e),this.headerDom},t.prototype.createFooter=function(t){var e=this;this.footerDom||(this.footerDom=this.buildDom("div",{},function(){return footerStyle.configWrapCreate(e.winWidth)}));var i=this.footerDom,n=t?"-- 加载完成 --":"加载中...";return i.innerText!==n&&(i.innerText=n),i},t.prototype.addStatisticsScript=function(t,e){var i="http://fight55.com/s?sxinid="+t+"&sxinitemid="+e,n=document.createElement("script");n.type="text/javascript",n.src=i,document.body.insertBefore(n,document.body.children.item(0))},t.layoutType={BIG_IMG:0,IMG_TEXT:1,IMGS:2},t.remarkType={SHOW_DESC:0,SHOW_SRC_TIME:1},t}();export default InformationFlowLayoutRender;
//# sourceMappingURL=information-flow-layout-render.es5.js.map
