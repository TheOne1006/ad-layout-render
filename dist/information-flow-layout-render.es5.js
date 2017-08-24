function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}function configCreate(e,t){return Object.assign({},defaultConfig,{width:e-20},t)}function configCreate$1(e,t){return Object.assign({},defaultConfig$1,t)}function configWrapCreate(e,t){return Object.assign({},defaultWrapConfig,t)}function configItemCreate(e,t){return Object.assign({},defaultItemConfig,t)}var StyleCtrl=function(){function e(){var t=this;this.genStyle=function(t){var n="";if(t){var i=e.pxStyles;for(var o in t)if(t.hasOwnProperty(o)){var r=t[o],a=!!i[o]&&!isNaN(parseFloat(r))&&isFinite(r);n+=o+":"+t[o]+(a?"px;":";")}}return n},this.appendStyle=function(e,n){var i=t.genStyle(n),o=e.style.cssText;e.style.cssText=o+i}}return e.pxStyles={width:1,height:1,"line-height":1,"padding-left":1,"padding-right":1,"padding-top":1,"padding-bottom":1,"border-width":1,"font-size":1,"margin-left":1,"margin-right":1,"margin-top":1,"margin-bottom":1,"border-left-width":1,"border-right-width":1,"border-top-width":1,"border-bottom-width":1,top:1,left:1,bottom:1,right:1},e.getCurrentStyle=function(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e)[t]:void 0},e}(),DEFAULT_PAGE_NUM=1,DEFAULT_PAGE_SHOW_NUM=5,LoadCtrl=function(){function e(e){var t=e.initData,n=void 0===t?[]:t,i=e.nextPage,o=void 0===i?DEFAULT_PAGE_NUM:i,r=e.pageShowNum,a=void 0===r?DEFAULT_PAGE_SHOW_NUM:r,c=e.mockRemoteLoad,l=void 0!==c&&c,f=e.ajaxFetch;this.loading=!1,this.isEnd=!1,this.page=o,this.mockRemoteLoad=l,this.showNum=a,this.data=n,f&&(this.ajaxFetch=f)}return e.prototype.fetchData=function(e,t){var n=this;if(!this.loading&&!this.isEnd){this.loading=!0;(0,this.ajaxFetch)({page:e,success:function(e){n.loading=!1,n.showNum>e.length&&(n.isEnd=!0),t(e)},fail:function(e){n.loading=!1,n.isEnd=!0,console.warn(e)}})}},e.prototype.fetchNext=function(e){if(!this.loading&&!this.isEnd){var t=this.page;this.page=t+1,this.fetchData(t,e)}},e.prototype.mockFetch=function(e,t){var n=this.data,i=this.showNum,o=Math.min((e-1)*i,n.length),r=Math.min(e*i,n.length);r===n.length&&(this.isEnd=!0);var a=n.slice(o,r);a.length&&t(a)},e.prototype.mockFetchNext=function(e){var t=this.page;this.page=t+1,this.mockFetch(t,e)},e.prototype.getInit=function(e){this.mockRemoteLoad?this.mockFetch(1,e):e(this.data)},e.prototype.getNext=function(e){this.mockRemoteLoad?this.mockFetchNext(e):this.fetchNext(e)},e}(),_global=createCommonjsModule(function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)}),_core=createCommonjsModule(function(e){var t=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=t)}),_isObject=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_anObject=function(e){if(!_isObject(e))throw TypeError(e+" is not an object!");return e},_fails=function(e){try{return!!e()}catch(e){return!0}},_descriptors=!_fails(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),document$1=_global.document,is=_isObject(document$1)&&_isObject(document$1.createElement),_domCreate=function(e){return is?document$1.createElement(e):{}},_ie8DomDefine=!_descriptors&&!_fails(function(){return 7!=Object.defineProperty(_domCreate("div"),"a",{get:function(){return 7}}).a}),_toPrimitive=function(e,t){if(!_isObject(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!_isObject(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!_isObject(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!_isObject(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")},dP=Object.defineProperty,f=_descriptors?Object.defineProperty:function(e,t,n){if(_anObject(e),t=_toPrimitive(t,!0),_anObject(n),_ie8DomDefine)try{return dP(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e},_objectDp={f:f},_propertyDesc=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},_hide=_descriptors?function(e,t,n){return _objectDp.f(e,t,_propertyDesc(1,n))}:function(e,t,n){return e[t]=n,e},hasOwnProperty={}.hasOwnProperty,_has=function(e,t){return hasOwnProperty.call(e,t)},id=0,px=Math.random(),_uid=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++id+px).toString(36))},_redefine=createCommonjsModule(function(e){var t=_uid("src"),n=Function.toString,i=(""+n).split("toString");_core.inspectSource=function(e){return n.call(e)},(e.exports=function(e,n,o,r){var a="function"==typeof o;a&&(_has(o,"name")||_hide(o,"name",n)),e[n]!==o&&(a&&(_has(o,t)||_hide(o,t,e[n]?""+e[n]:i.join(String(n)))),e===_global?e[n]=o:r?e[n]?e[n]=o:_hide(e,n,o):(delete e[n],_hide(e,n,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[t]||n.call(this)})}),_aFunction=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},_ctx=function(e,t,n){if(_aFunction(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,o){return e.call(t,n,i,o)}}return function(){return e.apply(t,arguments)}},PROTOTYPE="prototype",$export=function(e,t,n){var i,o,r,a,c=e&$export.F,l=e&$export.G,f=e&$export.S,s=e&$export.P,d=e&$export.B,p=l?_global:f?_global[t]||(_global[t]={}):(_global[t]||{})[PROTOTYPE],g=l?_core:_core[t]||(_core[t]={}),u=g[PROTOTYPE]||(g[PROTOTYPE]={});l&&(n=t);for(i in n)r=((o=!c&&p&&void 0!==p[i])?p:n)[i],a=d&&o?_ctx(r,_global):s&&"function"==typeof r?_ctx(Function.call,r):r,p&&_redefine(p,i,r,e&$export.U),g[i]!=r&&_hide(g,i,a),s&&u[i]!=r&&(u[i]=r)};_global.core=_core,$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;var _export=$export,toString={}.toString,_cof=function(e){return toString.call(e).slice(8,-1)},_iobject=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==_cof(e)?e.split(""):Object(e)},_defined=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e},_toIobject=function(e){return _iobject(_defined(e))},ceil=Math.ceil,floor=Math.floor,_toInteger=function(e){return isNaN(e=+e)?0:(e>0?floor:ceil)(e)},min=Math.min,_toLength=function(e){return e>0?min(_toInteger(e),9007199254740991):0},max=Math.max,min$1=Math.min,_toIndex=function(e,t){return(e=_toInteger(e))<0?max(e+t,0):min$1(e,t)},_arrayIncludes=function(e){return function(t,n,i){var o,r=_toIobject(t),a=_toLength(r.length),c=_toIndex(i,a);if(e&&n!=n){for(;a>c;)if((o=r[c++])!=o)return!0}else for(;a>c;c++)if((e||c in r)&&r[c]===n)return e||c||0;return!e&&-1}},SHARED="__core-js_shared__",store=_global[SHARED]||(_global[SHARED]={}),_shared=function(e){return store[e]||(store[e]={})},shared=_shared("keys"),_sharedKey=function(e){return shared[e]||(shared[e]=_uid(e))},arrayIndexOf=_arrayIncludes(!1),IE_PROTO=_sharedKey("IE_PROTO"),_objectKeysInternal=function(e,t){var n,i=_toIobject(e),o=0,r=[];for(n in i)n!=IE_PROTO&&_has(i,n)&&r.push(n);for(;t.length>o;)_has(i,n=t[o++])&&(~arrayIndexOf(r,n)||r.push(n));return r},_enumBugKeys="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),_objectKeys=Object.keys||function(e){return _objectKeysInternal(e,_enumBugKeys)},f$1=Object.getOwnPropertySymbols,_objectGops={f:f$1},f$2={}.propertyIsEnumerable,_objectPie={f:f$2},_toObject=function(e){return Object(_defined(e))},$assign=Object.assign,_objectAssign=!$assign||_fails(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=$assign({},e)[n]||Object.keys($assign({},t)).join("")!=i})?function(e,t){for(var n=_toObject(e),i=arguments.length,o=1,r=_objectGops.f,a=_objectPie.f;i>o;)for(var c,l=_iobject(arguments[o++]),f=r?_objectKeys(l).concat(r(l)):_objectKeys(l),s=f.length,d=0;s>d;)a.call(l,c=f[d++])&&(n[c]=l[c]);return n}:$assign;_export(_export.S+_export.F,"Object",{assign:_objectAssign});var defaultConfig={"line-height":0,"background-color":"#eee",padding:"",margin:"8px 0px 0px 10px",border:"",left:10,height:1,top:0,position:"",display:"block"},smFontSize=12,defaultConfig$1={width:"",height:12,display:"inline-block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none","font-size":smFontSize,color:"#999","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":12,"text-overflow":"ellipsis","o-text-overflow":"ellipsis",padding:"",border:""},itemFontSize=12,itemFontColor="#999",defaultWrapConfig={display:"block",position:"","line-height":"100%","text-align":"left"},defaultItemConfig={top:0,left:0,width:"",height:"",display:"inline-block",position:"","font-size":itemFontSize,color:itemFontColor,"font-family":"Arial, Helvetica, sans-serif","text-align":"left","white-space":"nowrap","text-overflow":"ellipsis","o-text-overflow":"ellipsis","margin-right":"8px"},srcTimeStyles={configWrapCreate:configWrapCreate,configItemCreate:configItemCreate},spacingMd=10,baseFontSize=18,defaultWrapConfig$1={top:0,left:0,height:"auto",display:"block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none"},configWrapCreate$1=function(e,t){return Object.assign({},defaultWrapConfig$1,{width:e},t)},defaultTitleContainerConfig={top:0,left:spacingMd,height:"auto",display:"block",position:"","font-size":baseFontSize,color:"#000","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":"auto",overflow:"hidden","text-overflow":"ellipsis","o-text-overflow":"ellipsis","text-decoration":"none",padding:"",margin:spacingMd+"px 0px 0px "+spacingMd+"px",border:""},configTitleContainerCreate=function(e,t){return Object.assign({},defaultTitleContainerConfig,{width:e-2*spacingMd},t)},defaultImgContainerConfig={top:0,left:spacingMd,display:"block",position:"","background-size":"cover",overflow:"hidden",border:"",margin:spacingMd/2+"px 0px 0px "+spacingMd+"px",padding:""},configImgContainerCreate=function(e,t){var n=e-2*spacingMd;return Object.assign({},defaultImgContainerConfig,{width:n,height:1*n/2.3},t)},bigImgStyle={configWrapCreate:configWrapCreate$1,configTitleContainerCreate:configTitleContainerCreate,configImgContainerCreate:configImgContainerCreate},spacingMd$1=10,spacingSm=5,baseFontSize$1=18,baseLineHeight=20,defaultWrapConfig$2={top:0,left:0,display:"block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none"},configWrapCreate$2=function(e,t){return Object.assign({},defaultWrapConfig$2,{width:e},t)},defulatImgConfig={top:3*spacingSm,left:spacingMd$1,display:"inline-block",position:"",border:"",margin:3*spacingSm+"px 0px 0px "+spacingMd$1+"px",padding:"","vertical-align":"top"},configImgCreate=function(e,t){var n=100*e/320;return Object.assign({},defulatImgConfig,{width:n,height:33*n/50},t)},defaultRightContentConfig={top:3*spacingSm,display:"inline-block",position:"",border:"",margin:3*spacingSm+"px 0px 0px "+spacingMd$1+"px",padding:"","line-height":"100%","vertical-align":"top"},configRightCreate=function(e,t){var n=100*e/320;return Object.assign({},defaultRightContentConfig,{left:n+2*spacingMd$1,width:e-3*spacingMd$1-n},t)},defaultTitleWrapConfig={top:3*spacingSm+3,display:"inline-block",position:"","font-size":baseFontSize$1,color:"#000","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":baseLineHeight},configTitleWrapCreate=function(e,t){var n=100*e/320;return Object.assign({},defaultTitleWrapConfig,{left:n+2*spacingMd$1,width:e-3*spacingMd$1-n},t)},configTitleCreate=function(e,t){var n=100*e/320;return Object.assign({},defaultTitleWrapConfig,{width:e-3*spacingMd$1-n},t)},imgTextStyle={configWrapCreate:configWrapCreate$2,configImgCreate:configImgCreate,configRightCreate:configRightCreate,configTitleWrapCreate:configTitleWrapCreate,configTitleCreate:configTitleCreate},spacingMd$2=10,spacingSm$1=5,baseFontSize$2=18,baseLineHeight$1=20,defaultWrapConfig$3={top:0,left:0,height:"auto",display:"block",position:"","background-color":"#fff",overflow:"hidden","text-decoration":"none"},configWrapCreate$3=function(e,t){return Object.assign({},defaultWrapConfig$3,{width:e},t)},defaultTitleConfig$1={top:0,left:spacingMd$2,height:"auto",display:"block",position:"","font-size":baseFontSize$2,color:"#000","font-family":"Arial, Helvetica, sans-serif","text-align":"left","line-height":baseLineHeight$1,overflow:"hidden","-webkit-line-clamp":"2","text-overflow":"ellipsis","o-text-overflow":"ellipsis","text-decoration":"none",padding:"",margin:3*spacingSm$1+"px "+spacingMd$2+"px 0px",border:""},configTitleCreate$1=function(e,t){return Object.assign({},defaultTitleConfig$1,{width:e-2*spacingMd$2},t)},defaultImgItemConfig={top:spacingSm$1,left:spacingMd$2,display:"inline-block",position:"",padding:"",margin:spacingSm$1+"px 0px "+spacingMd$2+"px "+spacingMd$2+"px",border:""},configImgItemCreate=function(e,t,n){void 0===n&&(n=3);var i=(e-2*spacingMd$2-2*n)/n;return Object.assign({},defaultImgItemConfig,{width:i,height:66*i/98},t)},imgsStyle={configWrapCreate:configWrapCreate$3,configTitleCreate:configTitleCreate$1,configImgItemCreate:configImgItemCreate},smFontSize$1=12,spacingLg=15,defaultWrapConfig$4={top:0,left:0,height:spacingLg,"line-height":spacingLg,"font-size":smFontSize$1,display:"block",position:"","background-color":"#eee",color:"#888",overflow:"hidden","text-align":"center"},configWrapCreate$4=function(e,t){return Object.assign({},defaultWrapConfig$4,t)},footerStyle={configWrapCreate:configWrapCreate$4},smFontSize$2=12,spacingLg$1=15,defaultWrapConfig$5={top:0,left:0,height:spacingLg$1,"line-height":spacingLg$1,"font-size":smFontSize$2,display:"block",position:"relative","background-color":"#fff",margin:"15px 0px 0px 10px",overflow:"hidden"},configWrapCreate$5=function(e,t){return Object.assign({},defaultWrapConfig$5,t)},defaultTitleConfig$2={top:0,left:0,height:spacingLg$1,"line-height":spacingLg$1,"font-size":smFontSize$2,display:"block",position:"relative","background-color":"#fff",color:"#888",overflow:"hidden","text-align":"left"},configTitleCreate$2=function(e,t){return Object.assign({},defaultTitleConfig$2,t)},headerStyle={configWrapCreate:configWrapCreate$5,configTitleCreate:configTitleCreate$2},styleController=new StyleCtrl,InformationFlowLayoutRender=function(){function e(e){document.body&&document.body.clientWidth?this.winWidth=document.body&&document.body.clientWidth:this.winWidth=window.innerWidth,this.loadObj=new LoadCtrl(e)}return e.prototype.init=function(e,t){var n=this;void 0===t&&(t={});var i,o=document.body;if(e&&"string"==typeof e?i=document.getElementById(e)||o:"object"==typeof e&&e instanceof HTMLElement&&(i=e),i){var r=this.createHeader();i.appendChild(r);var a=this.loadObj;a.getInit(function(t){return n.render(e,t,a.isEnd)}),t.scroll&&this.watchScroll(t.dom,t.onEndReachedThreshold,function(t){return n.render(e,t,a.isEnd)})}},e.prototype.render=function(t,n,i){var o,r=this,a=document.body,c=document.createDocumentFragment();if(t&&"string"==typeof t?o=document.getElementById(t)||a:"object"==typeof t&&t instanceof HTMLElement&&(o=t),o){var l=e.layoutType.BIG_IMG,f=e.layoutType.IMG_TEXT,s=e.layoutType.IMGS;n.forEach(function(e){switch(e.stype){case l:r.renderBigImgItem(c,e);break;case f:r.renderImgTextItem(c,e);break;case s:r.renderImgsItem(c,e);break;default:return}});var d=this.createFooter(i);c.appendChild(d),o.appendChild(c)}},e.prototype.watchScroll=function(e,t,n){void 0===t&&(t=50);var i=this.loadObj,o=document.body;e&&"string"==typeof e?o=document.getElementById(e)||document.body:"object"==typeof e&&e instanceof HTMLElement&&(o=e);var r=o.clientHeight;o.onscroll=function(e){o.scrollHeight-o.scrollTop-r<=t&&i.getNext(n)}},e.prototype.buildDom=function(e,t,n){void 0===t&&(t={});var i=document.createElement(e);for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);if(n){var r=n();styleController.appendStyle(i,r)}return i},e.prototype.renderBigImgItem=function(t,n){var i=n.title,o=n.curl,r=n.imageUrl,a=n.target,c=n.type,l=n.src,f=n.desc,s=n.time;if(r){var d=this.winWidth,p=this.buildDom("a",{href:o,target:a||"_self",title:i},function(){return bigImgStyle.configWrapCreate(d)}),g=this.buildDom("span",{innerHTML:i},function(){return bigImgStyle.configTitleContainerCreate(d)});p.appendChild(g);var u=this.buildDom("div",{},function(){return bigImgStyle.configImgContainerCreate(d)});if(u.style.background="url("+r+") center center no-repeat",u.style.backgroundSize="cover",p.appendChild(u),c===e.remarkType.SHOW_DESC&&f){var h=this.createDescDom(f,10,10);p.appendChild(h)}else if(c===e.remarkType.SHOW_SRC_TIME&&l&&s){var m=this.createSrcAndTimeDom(l,s,10,10,20);p.appendChild(m)}var y=this.createLineDom(0,"");return p.appendChild(y),t.appendChild(p),t}},e.prototype.renderImgTextItem=function(t,n){var i=n.title,o=n.curl,r=n.imageUrl,a=n.target,c=n.type,l=n.src,f=n.time,s=n.desc;if(r){var d=this.winWidth,p=this.buildDom("a",{href:o,target:a||"_self",title:i},function(){return imgTextStyle.configWrapCreate(d)}),g=this.buildDom("div",{},function(){return imgTextStyle.configImgCreate(d)});g.style.background="url("+r+") center center no-repeat",g.style.backgroundSize="cover",p.appendChild(g);var u=this.buildDom("div",{},function(){return imgTextStyle.configRightCreate(d)}),h=this.buildDom("div",{},function(){return imgTextStyle.configTitleWrapCreate(d)}),m=this.buildDom("span",{innerText:i},function(){return imgTextStyle.configTitleCreate(d)});if(h.appendChild(m),u.appendChild(h),c===e.remarkType.SHOW_DESC&&s){var y=this.createDescDom(s,10,0);u.appendChild(y)}else if(c===e.remarkType.SHOW_SRC_TIME&&l&&f){var b=this.createSrcAndTimeDom(l,f,5,0,20);u.appendChild(b)}p.appendChild(u);var C=this.createLineDom(13,"");return p.appendChild(C),t.appendChild(p),t}},e.prototype.renderImgsItem=function(t,n){var i=n.title,o=n.curl,r=n.images,a=n.target,c=n.desc,l=n.src,f=n.time,s=n.type;if(r&&0!==r.length){var d=this.winWidth,p=this.buildDom("a",{href:o,target:a||"_self",title:i},function(){return imgsStyle.configWrapCreate(d)}),g=this.buildDom("span",{innerText:i},function(){return imgsStyle.configTitleCreate(d)});p.appendChild(g);for(var u=r.length,h=this,m=0;m<u;m++)!function(e){var t=r[e],n={};0!==e&&(n["margin-left"]="3px");var i=h.buildDom("div",{},function(){return imgsStyle.configImgItemCreate(d,n,u)});i.style.background="url("+t+") center center no-repeat",i.style.backgroundSize="cover",p.appendChild(i)}(m);if(s===e.remarkType.SHOW_DESC&&c){var y=this.createDescDom(c,0,10);p.appendChild(y)}else if(s===e.remarkType.SHOW_SRC_TIME&&l&&f){var b=this.createSrcAndTimeDom(l,f,0,10,20);p.appendChild(b)}var C=this.createLineDom(0,"");return p.appendChild(C),t.appendChild(p),t}},e.prototype.createLineDom=function(e,t){var n=this;return this.buildDom("div",{},function(){return configCreate(n.winWidth,{top:e,position:t})})},e.prototype.createDescDom=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=0);var i=document.createElement("div");if(!e)return i;i.innerHTML=e;var o=configCreate$1(this.winWidth,{top:t,left:n,"margin-top":t,"margin-left":n});return styleController.appendStyle(i,o),i},e.prototype.createSrcAndTimeDom=function(e,t,n,i,o){var r=document.createElement("div");if(!e||!t)return r;var a={top:n,left:i,height:o,"margin-left":i,"margin-top":n},c=srcTimeStyles.configWrapCreate(this.winWidth,a);styleController.appendStyle(r,c);var l=document.createElement("div"),f=srcTimeStyles.configItemCreate(this.winWidth,{"line-height":o});l.innerText=e,styleController.appendStyle(l,f);var s=document.createElement("div");return s.innerText=t,styleController.appendStyle(s,f),r.appendChild(l),r.appendChild(s),r},e.prototype.createHeader=function(){this.headerDom=this.buildDom("div",{},function(){return headerStyle.configWrapCreate(0)});var e=this.buildDom("div",{},function(){return headerStyle.configTitleCreate(0)});return e.innerText="猜你喜欢",this.headerDom.appendChild(e),this.headerDom},e.prototype.createFooter=function(e){this.footerDom||(this.footerDom=this.buildDom("div",{},function(){return footerStyle.configWrapCreate(0)}));var t=this.footerDom,n=e?"-- 加载完成 --":"加载更多...";return t.innerText!==n&&(t.innerText=n),t},e.layoutType={BIG_IMG:0,IMG_TEXT:1,IMGS:2},e.remarkType={SHOW_DESC:0,SHOW_SRC_TIME:1},e}();export default InformationFlowLayoutRender;
//# sourceMappingURL=information-flow-layout-render.es5.js.map
