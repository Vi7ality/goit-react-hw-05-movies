"use strict";(self.webpackChunkgoit_react_hw_05_movies_git=self.webpackChunkgoit_react_hw_05_movies_git||[]).push([[882],{7402:function(e,t,r){r.d(t,{Z:function(){return Ie}});var n=r(2791),a=r.t(n,2);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var s=r(9791);var o=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),c=Math.abs,u=String.fromCharCode,l=Object.assign;function f(e){return e.trim()}function d(e,t,r){return e.replace(t,r)}function p(e,t){return e.indexOf(t)}function h(e,t){return 0|e.charCodeAt(t)}function m(e,t,r){return e.slice(t,r)}function v(e){return e.length}function b(e){return e.length}function g(e,t){return t.push(e),e}var y=1,w=1,k=0,_=0,x=0,C="";function $(e,t,r,n,a,i,s){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:y,column:w,length:s,return:""}}function A(e,t){return l($("",null,null,"",null,null,0),e,{length:-e.length},t)}function S(){return x=_>0?h(C,--_):0,w--,10===x&&(w=1,y--),x}function O(){return x=_<k?h(C,_++):0,w++,10===x&&(w=1,y++),x}function P(){return h(C,_)}function E(){return _}function j(e,t){return m(C,e,t)}function N(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z(e){return y=w=1,k=v(C=e),_=0,[]}function G(e){return C="",e}function R(e){return f(j(_-1,M(91===e?e+2:40===e?e+1:e)))}function I(e){for(;(x=P())&&x<33;)O();return N(e)>2||N(x)>3?"":" "}function T(e,t){for(;--t&&O()&&!(x<48||x>102||x>57&&x<65||x>70&&x<97););return j(e,E()+(t<6&&32==P()&&32==O()))}function M(e){for(;O();)switch(x){case e:return _;case 34:case 39:34!==e&&39!==e&&M(x);break;case 40:41===e&&M(e);break;case 92:O()}return _}function q(e,t){for(;O()&&e+x!==57&&(e+x!==84||47!==P()););return"/*"+j(t,_-1)+"*"+u(47===e?e:O())}function F(e){for(;!N(P());)O();return j(e,_)}var W="-ms-",Z="-moz-",L="-webkit-",D="comm",H="rule",B="decl",J="@keyframes";function K(e,t){for(var r="",n=b(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function Q(e,t,r,n){switch(e.type){case"@import":case B:return e.return=e.return||e.value;case D:return"";case J:return e.return=e.value+"{"+K(e.children,n)+"}";case H:e.value=e.props.join(",")}return v(r=K(e.children,n))?e.return=e.value+"{"+r+"}":""}function U(e){return G(V("",null,null,null,[""],e=z(e),0,[0],e))}function V(e,t,r,n,a,i,s,o,c){for(var l=0,f=0,m=s,b=0,y=0,w=0,k=1,_=1,x=1,C=0,$="",A=a,j=i,N=n,z=$;_;)switch(w=C,C=O()){case 40:if(108!=w&&58==h(z,m-1)){-1!=p(z+=d(R(C),"&","&\f"),"&\f")&&(x=-1);break}case 34:case 39:case 91:z+=R(C);break;case 9:case 10:case 13:case 32:z+=I(w);break;case 92:z+=T(E()-1,7);continue;case 47:switch(P()){case 42:case 47:g(Y(q(O(),E()),t,r),c);break;default:z+="/"}break;case 123*k:o[l++]=v(z)*x;case 125*k:case 59:case 0:switch(C){case 0:case 125:_=0;case 59+f:y>0&&v(z)-m&&g(y>32?ee(z+";",n,r,m-1):ee(d(z," ","")+";",n,r,m-2),c);break;case 59:z+=";";default:if(g(N=X(z,t,r,l,f,a,o,$,A=[],j=[],m),i),123===C)if(0===f)V(z,t,N,N,A,i,m,o,j);else switch(99===b&&110===h(z,3)?100:b){case 100:case 109:case 115:V(e,N,N,n&&g(X(e,N,N,0,0,a,o,$,a,A=[],m),j),a,j,m,o,n?A:j);break;default:V(z,N,N,N,[""],j,0,o,j)}}l=f=y=0,k=x=1,$=z="",m=s;break;case 58:m=1+v(z),y=w;default:if(k<1)if(123==C)--k;else if(125==C&&0==k++&&125==S())continue;switch(z+=u(C),C*k){case 38:x=f>0?1:(z+="\f",-1);break;case 44:o[l++]=(v(z)-1)*x,x=1;break;case 64:45===P()&&(z+=R(O())),b=P(),f=m=v($=z+=F(E())),C++;break;case 45:45===w&&2==v(z)&&(k=0)}}return i}function X(e,t,r,n,a,i,s,o,u,l,p){for(var h=a-1,v=0===a?i:[""],g=b(v),y=0,w=0,k=0;y<n;++y)for(var _=0,x=m(e,h+1,h=c(w=s[y])),C=e;_<g;++_)(C=f(w>0?v[_]+" "+x:d(x,/&\f/g,v[_])))&&(u[k++]=C);return $(e,t,r,0===a?H:o,u,l,p)}function Y(e,t,r){return $(e,t,r,D,u(x),m(e,2,-2),0)}function ee(e,t,r,n){return $(e,t,r,B,m(e,0,n),m(e,n+1,-1),n)}var te=function(e,t,r){for(var n=0,a=0;n=a,a=P(),38===n&&12===a&&(t[r]=1),!N(a);)O();return j(e,_)},re=function(e,t){return G(function(e,t){var r=-1,n=44;do{switch(N(n)){case 0:38===n&&12===P()&&(t[r]=1),e[r]+=te(_-1,t,r);break;case 2:e[r]+=R(n);break;case 4:if(44===n){e[++r]=58===P()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=u(n)}}while(n=O());return e}(z(e),t))},ne=new WeakMap,ae=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ne.get(r))&&!n){ne.set(e,!0);for(var a=[],i=re(t,a),s=r.props,o=0,c=0;o<i.length;o++)for(var u=0;u<s.length;u++,c++)e.props[c]=a[o]?i[o].replace(/&\f/g,s[u]):s[u]+" "+i[o]}}},ie=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function se(e,t){switch(function(e,t){return 45^h(e,0)?(((t<<2^h(e,0))<<2^h(e,1))<<2^h(e,2))<<2^h(e,3):0}(e,t)){case 5103:return"-webkit-print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return L+e+Z+e+W+e+e;case 6828:case 4268:return L+e+W+e+e;case 6165:return L+e+W+"flex-"+e+e;case 5187:return L+e+d(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return L+e+W+"flex-item-"+d(e,/flex-|-self/,"")+e;case 4675:return L+e+W+"flex-line-pack"+d(e,/align-content|flex-|-self/,"")+e;case 5548:return L+e+W+d(e,"shrink","negative")+e;case 5292:return L+e+W+d(e,"basis","preferred-size")+e;case 6060:return"-webkit-box-"+d(e,"-grow","")+L+e+W+d(e,"grow","positive")+e;case 4554:return L+d(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,"-webkit-$1"),/(image-set)/,"-webkit-$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,"-webkit-$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,"-webkit-$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(v(e)-1-t>6)switch(h(e,t+1)){case 109:if(45!==h(e,t+4))break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(108==h(e,t+3)?"$3":"$2-$3"))+e;case 115:return~p(e,"stretch")?se(d(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==h(e,t+1))break;case 6444:switch(h(e,v(e)-3-(~p(e,"!important")&&10))){case 107:return d(e,":",":-webkit-")+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,"$1-webkit-"+(45===h(e,14)?"inline-":"")+"box$3$1"+"-webkit-$2$3$1"+"-ms-$2box$3")+e}break;case 5936:switch(h(e,t+11)){case 114:return L+e+W+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return L+e+W+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return L+e+W+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return L+e+W+e+e}return e}var oe=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case B:e.return=se(e.value,e.length);break;case J:return K([A(e,{value:d(e.value,"@","@-webkit-")})],n);case H:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return K([A(e,{props:[d(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return K([A(e,{props:[d(t,/:(plac\w+)/,":-webkit-input-$1")]}),A(e,{props:[d(t,/:(plac\w+)/,":-moz-$1")]}),A(e,{props:[d(t,/:(plac\w+)/,"-ms-input-$1")]})],n)}return""}))}}],ce=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||oe;var a,i,s={},c=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)s[t[r]]=!0;c.push(e)}));var u,l,f=[Q,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],d=function(e){var t=b(e);return function(r,n,a,i){for(var s="",o=0;o<t;o++)s+=e[o](r,n,a,i)||"";return s}}([ae,ie].concat(n,f));i=function(e,t,r,n){u=r,K(U(e?e+"{"+t.styles+"}":t.styles),d),n&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new o({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:i};return p.sheet.hydrate(c),p};var ue=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},le={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fe=r(9797),de=/[A-Z]|^ms/g,pe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,he=function(e){return 45===e.charCodeAt(1)},me=function(e){return null!=e&&"boolean"!==typeof e},ve=(0,fe.Z)((function(e){return he(e)?e:e.replace(de,"-$&").toLowerCase()})),be=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(pe,(function(e,t,r){return ye={name:t,styles:r,next:ye},t}))}return 1===le[e]||he(e)||"number"!==typeof t||0===t?t:t+"px"};function ge(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return ye={name:r.name,styles:r.styles,next:ye},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)ye={name:n.name,styles:n.styles,next:ye},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=ge(e,t,r[a])+";";else for(var i in r){var s=r[i];if("object"!==typeof s)null!=t&&void 0!==t[s]?n+=i+"{"+t[s]+"}":me(s)&&(n+=ve(i)+":"+be(i,s)+";");else if(!Array.isArray(s)||"string"!==typeof s[0]||null!=t&&void 0!==t[s[0]]){var o=ge(e,t,s);switch(i){case"animation":case"animationName":n+=ve(i)+":"+o+";";break;default:n+=i+"{"+o+"}"}}else for(var c=0;c<s.length;c++)me(s[c])&&(n+=ve(i)+":"+be(i,s[c])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=ye,i=r(e);return ye=a,ge(e,t,i)}}if(null==t)return r;var s=t[r];return void 0!==s?s:r}var ye,we=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var ke=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";ye=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=ge(r,t,i)):a+=i[0];for(var s=1;s<e.length;s++)a+=ge(r,t,e[s]),n&&(a+=i[s]);we.lastIndex=0;for(var o,c="";null!==(o=we.exec(a));)c+="-"+o[1];return{name:ue(a)+c,styles:a,next:ye}},_e=!!a.useInsertionEffect&&a.useInsertionEffect,xe=_e||function(e){return e()},Ce=(_e||n.useLayoutEffect,(0,n.createContext)("undefined"!==typeof HTMLElement?ce({key:"css"}):null));Ce.Provider;var $e=function(e){return(0,n.forwardRef)((function(t,r){var a=(0,n.useContext)(Ce);return e(t,a,r)}))},Ae=(0,n.createContext)({});function Se(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var Oe=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},Pe=s.Z,Ee=function(e){return"theme"!==e},je=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?Pe:Ee},Ne=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!==typeof n&&r&&(n=e.__emotion_forwardProp),n},ze=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;Oe(t,r,n);xe((function(){return function(e,t,r){Oe(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,r,n)}));return null},Ge=function e(t,r){var a,s,o=t.__emotion_real===t,c=o&&t.__emotion_base||t;void 0!==r&&(a=r.label,s=r.target);var u=Ne(t,r,o),l=u||je(c),f=!l("as");return function(){var d=arguments,p=o&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&p.push("label:"+a+";"),null==d[0]||void 0===d[0].raw)p.push.apply(p,d);else{0,p.push(d[0][0]);for(var h=d.length,m=1;m<h;m++)p.push(d[m],d[0][m])}var v=$e((function(e,t,r){var a=f&&e.as||c,i="",o=[],d=e;if(null==e.theme){for(var h in d={},e)d[h]=e[h];d.theme=(0,n.useContext)(Ae)}"string"===typeof e.className?i=Se(t.registered,o,e.className):null!=e.className&&(i=e.className+" ");var m=ke(p.concat(o),t.registered,d);i+=t.key+"-"+m.name,void 0!==s&&(i+=" "+s);var v=f&&void 0===u?je(a):l,b={};for(var g in e)f&&"as"===g||v(g)&&(b[g]=e[g]);return b.className=i,b.ref=r,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(ze,{cache:t,serialized:m,isStringTag:"string"===typeof a}),(0,n.createElement)(a,b))}));return v.displayName=void 0!==a?a:"Styled("+("string"===typeof c?c:c.displayName||c.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=c,v.__emotion_styles=p,v.__emotion_forwardProp=u,Object.defineProperty(v,"toString",{value:function(){return"."+s}}),v.withComponent=function(t,n){return e(t,i({},r,n,{shouldForwardProp:Ne(v,n,!0)})).apply(void 0,p)},v}},Re=Ge.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Re[e]=Re(e)}));var Ie=Re},168:function(e,t,r){function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=882.655237a7.chunk.js.map