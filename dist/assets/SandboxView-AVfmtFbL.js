import{d as Qs,r as mt,l as Js,m as el,o as Rt,c as Ot,a as X,n as Yt,t as pe,p as tl,q as hn,F as cn,s as fn,i as rl,w as il,x as nl,y as kr,_ as al}from"./index-kPF_2pRQ.js";import{c as ol,n as sl,e as ll,g as ul,a as hl,b as cl,M as Er,m as fl,A as dl,u as ke,d as vl,f as pl,h as ml,j as wt,k as ba,l as gl,L as _l,p as Uo,R as Ho,o as yl,r as Hn,q as bt,s as xl,t as Tl,v as wl,w as bl,Z as Sl,C as Ir,x as ce,y as kt,z as El,B as ko,D as Vi,E as zi,F as vi,G as Wo,H as Xo,I as jo,J as Qi,K as Ji,N as Al,O as Ll,P as Ml,Q as kn,S as pi,T as St,U as ia,V as Cl,W as Sa,X as Dl,Y as Pl,_ as Nl,$ as Rl,a0 as Tr,a1 as Ea,a2 as Ol,a3 as Il,a4 as Bl,a5 as Zo,a6 as dt,a7 as vt,a8 as Fl,a9 as Vl,aa as Ti,ab as zl,ac as Gl,ad as qo,ae as Ul,af as Hl,ag as Aa,ah as La,ai as Ma,i as kl,aj as dn}from"./index-C8fl__Ak.js";function Wl(e){return cl(null,e)}var na={isDimensionStacked:hl,enableDataStack:ll,getStackedDimension:ul};function aa(e,t){var r=t;t instanceof Er||(r=new Er(t));var i=ol(r);return i.setExtent(e[0],e[1]),sl(i,r),i}function Xl(e){fl(e,dl)}ke([vl,pl]);ke(ml);function Ca(e,t,r){typeof t=="object"&&(r=t,t=null);var i=this,n;if(!(e instanceof Function)){n=[];for(var a in e)e.hasOwnProperty(a)&&n.push(a)}var o=function(l){if(i.apply(this,arguments),e instanceof Function?Da(this,e.call(this,l)):jl(this,e,n),this.constructor===o)for(var u=o.__initializers__,h=0;h<u.length;h++)u[h].apply(this,arguments)};o.__super__=i,i.__initializers__?o.__initializers__=i.__initializers__.slice():o.__initializers__=[],t&&o.__initializers__.push(t);var s=function(){};return s.prototype=i.prototype,o.prototype=new s,o.prototype.constructor=o,Da(o.prototype,r),o.extend=i.extend,o.derive=i.extend,o}function Da(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function jl(e,t,r){for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}}const Zl={extend:Ca,derive:Ca};function ql(e,t){this.action=e,this.context=t}var oa={trigger:function(e){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,i=-1,n=arguments;switch(n.length){case 1:for(;++i<r;)t[i].action.call(t[i].context);return;case 2:for(;++i<r;)t[i].action.call(t[i].context,n[1]);return;case 3:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2]);return;case 4:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3]);return;case 5:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3],n[4]);return;default:for(;++i<r;)t[i].action.apply(t[i].context,Array.prototype.slice.call(n,1));return}}},on:function(e,t,r){if(!(!e||!t)){var i=this.__handlers__||(this.__handlers__={});if(!i[e])i[e]=[];else if(this.has(e,t))return;var n=new ql(t,r||this);return i[e].push(n),this}},once:function(e,t,r){if(!e||!t)return;var i=this;function n(){i.off(e,n),t.apply(this,arguments)}return this.on(e,n,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var i=r[e],n=[],a=0;a<i.length;a++)t&&i[a].action!==t&&n.push(i[a]);r[e]=n}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var i=r[e],n=0;n<i.length;n++)if(i[n].action===t)return!0}},Yl=0,Kl=Array.prototype,$l=Kl.forEach,Se={genGUID:function(){return++Yl},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),i=t.split("/"),n=r[0];n==="."||n==="..";)n===".."&&i.pop(),r.shift(),n=r[0];return i.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]==null&&(e[n]=t[n])}return e},each:function(e,t,r){if(e&&t)if(e.forEach&&e.forEach===$l)e.forEach(t,r);else if(e.length===+e.length)for(var i=0,n=e.length;i<n;i++)t.call(r,e[i],i,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(Se.isObject(e)){if(Se.isArray(e))return e.slice();if(Se.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return Se.extend({},e)}else return e}},We=function(){this.__uid__=Se.genGUID()};We.__initializers__=[function(e){Se.extend(this,e)}];Se.extend(We,Zl);Se.extend(We.prototype,oa);var Pa=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],Na=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function Ql(e){for(var t={},r={},i=0;i<Pa.length;i++){var n=Pa[i];o(n)}for(var i=0;i<Na.length;i++){var a=Na[i];r[a]=e.getParameter(e[a])}this.getExtension=function(s){return s in t||o(s),t[s]},this.getParameter=function(s){return r[s]};function o(s){if(e.getExtension){var l=e.getExtension(s);l||(l=e.getExtension("MOZ_"+s)),l||(l=e.getExtension("WEBKIT_"+s)),t[s]=l}}}const P={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CW:2304,CCW:2305,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_2D:3553,TEXTURE_CUBE_MAP:34067,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FRAMEBUFFER:36160,RENDERBUFFER:36161,DEPTH_STENCIL:34041,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306};function Jl(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var i=r.loaded/r.total;e.onprogress(i,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}const eu={get:Jl};var vn,le={};le.supportWebGL=function(){if(vn==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{vn=!1}return vn};le.Int8Array=typeof Int8Array>"u"?Array:Int8Array;le.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;le.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;le.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;le.Int16Array=typeof Int16Array>"u"?Array:Int16Array;le.Float32Array=typeof Float32Array>"u"?Array:Float32Array;le.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var ir={};typeof window<"u"?ir=window:typeof global<"u"&&(ir=global);le.requestAnimationFrame=ir.requestAnimationFrame||ir.msRequestAnimationFrame||ir.mozRequestAnimationFrame||ir.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};le.createCanvas=function(){return document.createElement("canvas")};le.createImage=function(){return new ir.Image};le.request={get:eu.get};le.addEventListener=function(e,t,r,i){e.addEventListener(t,r,i)};le.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};var ze=function(){this.head=null,this.tail=null,this._length=0};ze.prototype.insert=function(e){var t=new ze.Entry(e);return this.insertEntry(t),t};ze.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,i=0;r&&i!=e;)r=r.next,i++;if(r){var n=new ze.Entry(t),a=r.prev;a?(a.next=n,n.prev=a):this.head=n,n.next=r,r.prev=n}else this.insert(t)}};ze.prototype.insertBeforeEntry=function(e,t){var r=new ze.Entry(e),i=t.prev;i?(i.next=r,r.prev=i):this.head=r,r.next=t,t.prev=r,this._length++};ze.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};ze.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};ze.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};ze.prototype.getHead=function(){if(this.head)return this.head.value};ze.prototype.getTail=function(){if(this.tail)return this.tail.value};ze.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};ze.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};ze.prototype.length=function(){return this._length};ze.prototype.isEmpty=function(){return this._length===0};ze.prototype.forEach=function(e,t){for(var r=this.head,i=0,n=typeof t<"u";r;)n?e.call(t,r.value,i):e(r.value,i),r=r.next,i++};ze.prototype.clear=function(){this.tail=this.head=null,this._length=0};ze.Entry=function(e){this.value=e,this.next=null,this.prev=null};var cr=function(e){this._list=new ze,this._map={},this._maxSize=e||10};cr.prototype.setMaxSize=function(e){this._maxSize=e};cr.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var i=this._list.head;this._list.remove(i),delete this._map[i.key]}var n=this._list.insert(t);n.key=e,this._map[e]=n}};cr.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};cr.prototype.remove=function(e){var t=this._map[e];typeof t<"u"&&(delete this._map[e],this._list.remove(t))};cr.prototype.clear=function(){this._list.clear(),this._map={}};var _e={},Ra={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function ct(e){return e=Math.round(e),e<0?0:e>255?255:e}function tu(e){return e=Math.round(e),e<0?0:e>360?360:e}function ni(e){return e<0?0:e>1?1:e}function pn(e){return e.length&&e.charAt(e.length-1)==="%"?ct(parseFloat(e)/100*255):ct(parseInt(e,10))}function Ar(e){return e.length&&e.charAt(e.length-1)==="%"?ni(parseFloat(e)/100):ni(parseFloat(e))}function mn(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function Gt(e,t,r){return e+(t-e)*r}function ht(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e}function Wn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var Yo=new cr(20),wi=null;function fr(e,t){wi&&Wn(wi,t),wi=Yo.put(e,wi||t.slice())}_e.parse=function(e,t){if(e){t=t||[];var r=Yo.get(e);if(r)return Wn(t,r);e=e+"";var i=e.replace(/ /g,"").toLowerCase();if(i in Ra)return Wn(t,Ra[i]),fr(e,t),t;if(i.charAt(0)==="#"){if(i.length===4){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=4095)){ht(t,0,0,0,1);return}return ht(t,(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1),fr(e,t),t}else if(i.length===7){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=16777215)){ht(t,0,0,0,1);return}return ht(t,(n&16711680)>>16,(n&65280)>>8,n&255,1),fr(e,t),t}return}var a=i.indexOf("("),o=i.indexOf(")");if(a!==-1&&o+1===i.length){var s=i.substr(0,a),l=i.substr(a+1,o-(a+1)).split(","),u=1;switch(s){case"rgba":if(l.length!==4){ht(t,0,0,0,1);return}u=Ar(l.pop());case"rgb":if(l.length!==3){ht(t,0,0,0,1);return}return ht(t,pn(l[0]),pn(l[1]),pn(l[2]),u),fr(e,t),t;case"hsla":if(l.length!==4){ht(t,0,0,0,1);return}return l[3]=Ar(l[3]),Xn(l,t),fr(e,t),t;case"hsl":if(l.length!==3){ht(t,0,0,0,1);return}return Xn(l,t),fr(e,t),t;default:return}}ht(t,0,0,0,1)}};_e.parseToFloat=function(e,t){if(t=_e.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function Xn(e,t){var r=(parseFloat(e[0])%360+360)%360/360,i=Ar(e[1]),n=Ar(e[2]),a=n<=.5?n*(i+1):n+i-n*i,o=n*2-a;return t=t||[],ht(t,ct(mn(o,a,r+1/3)*255),ct(mn(o,a,r)*255),ct(mn(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function ru(e){if(e){var t=e[0]/255,r=e[1]/255,i=e[2]/255,n=Math.min(t,r,i),a=Math.max(t,r,i),o=a-n,s=(a+n)/2,l,u;if(o===0)l=0,u=0;else{s<.5?u=o/(a+n):u=o/(2-a-n);var h=((a-t)/6+o/2)/o,c=((a-r)/6+o/2)/o,d=((a-i)/6+o/2)/o;t===a?l=d-c:r===a?l=1/3+h-d:i===a&&(l=2/3+c-h),l<0&&(l+=1),l>1&&(l-=1)}var f=[l*360,u,s];return e[3]!=null&&f.push(e[3]),f}}_e.lift=function(e,t){var r=_e.parse(e);if(r){for(var i=0;i<3;i++)t<0?r[i]=r[i]*(1-t)|0:r[i]=(255-r[i])*t+r[i]|0;return _e.stringify(r,r.length===4?"rgba":"rgb")}};_e.toHex=function(e){var t=_e.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};_e.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=t[n],s=t[a],l=i-n;return r[0]=ct(Gt(o[0],s[0],l)),r[1]=ct(Gt(o[1],s[1],l)),r[2]=ct(Gt(o[2],s[2],l)),r[3]=ni(Gt(o[3],s[3],l)),r}};_e.fastMapToColor=_e.fastLerp;_e.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=_e.parse(t[n]),s=_e.parse(t[a]),l=i-n,u=_e.stringify([ct(Gt(o[0],s[0],l)),ct(Gt(o[1],s[1],l)),ct(Gt(o[2],s[2],l)),ni(Gt(o[3],s[3],l))],"rgba");return r?{color:u,leftIndex:n,rightIndex:a,value:i}:u}};_e.mapToColor=_e.lerp;_e.modifyHSL=function(e,t,r,i){if(e=_e.parse(e),e)return e=ru(e),t!=null&&(e[0]=tu(t)),r!=null&&(e[1]=Ar(r)),i!=null&&(e[2]=Ar(i)),_e.stringify(Xn(e),"rgba")};_e.modifyAlpha=function(e,t){if(e=_e.parse(e),e&&t!=null)return e[3]=ni(t),_e.stringify(e,"rgba")};_e.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};var iu=_e.parseToFloat,gn={};function Oa(e){var t=Object.keys(e);t.sort();for(var r=[],i=0;i<t.length;i++){var n=t[i],a=e[n];a===null?r.push(n):r.push(n+" "+a.toString())}return r.join(`
`)}function nu(e,t,r){r.sort();for(var i=[],n=0;n<r.length;n++){var a=r[n];i.push(a)}var o=Oa(e)+`
`+Oa(t)+`
`+i.join(`
`);if(gn[o])return gn[o];var s=Se.genGUID();return gn[o]=s,s}var ot=We.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=iu(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var i=e[r];this.setUniform(r,i)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var i=this.uniforms;this._enabledUniforms=Object.keys(i),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var h=this.uniforms[u].type;return h==="t"||h==="tv"},this);var n=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=Se.clone(e.vertexDefines),this.fragmentDefines=Se.clone(e.fragmentDefines),t){for(var o in r)i[o]&&(i[o].value=r[o].value);Se.defaults(this.vertexDefines,n),Se.defaults(this.fragmentDefines,a)}var s={};for(var l in e.textures)s[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=Se.clone(this.vertexDefines),e.fragmentDefines=Se.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var i=this.vertexDefines,n=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r??null,(e==="vertex"||e==="both")&&i[t]!==r&&(i[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&n[t]!==r&&(n[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=r.enabled;i||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=!r.enabled;i||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=nu(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),Bi=1e-6,Xe=Array,wr=Math.random,F={};F.create=function(){var e=new Xe(2);return e[0]=0,e[1]=0,e};F.clone=function(e){var t=new Xe(2);return t[0]=e[0],t[1]=e[1],t};F.fromValues=function(e,t){var r=new Xe(2);return r[0]=e,r[1]=t,r};F.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};F.set=function(e,t,r){return e[0]=t,e[1]=r,e};F.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};F.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};F.sub=F.subtract;F.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};F.mul=F.multiply;F.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};F.div=F.divide;F.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};F.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};F.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};F.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e};F.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)};F.dist=F.distance;F.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i};F.sqrDist=F.squaredDistance;F.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};F.len=F.length;F.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};F.sqrLen=F.squaredLength;F.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};F.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};F.normalize=function(e,t){var r=t[0],i=t[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e};F.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};F.cross=function(e,t,r){var i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e};F.lerp=function(e,t,r,i){var n=t[0],a=t[1];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e};F.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};F.transformMat2=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n,e[1]=r[1]*i+r[3]*n,e};F.transformMat2d=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n+r[4],e[1]=r[1]*i+r[3]*n+r[5],e};F.transformMat3=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[3]*n+r[6],e[1]=r[1]*i+r[4]*n+r[7],e};F.transformMat4=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[4]*n+r[12],e[1]=r[1]*i+r[5]*n+r[13],e};F.forEach=function(){var e=F.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=2),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}}();var $=function(e,t){e=e||0,t=t||0,this.array=F.fromValues(e,t),this._dirty=!0};$.prototype={constructor:$,add:function(e){return F.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new $(this.x,this.y)},copy:function(e){return F.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return F.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return F.dist(this.array,e.array)},distance:function(e){return F.distance(this.array,e.array)},div:function(e){return F.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return F.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return F.dot(this.array,e.array)},len:function(){return F.len(this.array)},length:function(){return F.length(this.array)},lerp:function(e,t,r){return F.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return F.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return F.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return F.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return F.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return F.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return F.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return F.random(this.array,e),this._dirty=!0,this},scale:function(e){return F.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return F.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return F.sqrDist(this.array,e.array)},squaredDistance:function(e){return F.squaredDistance(this.array,e.array)},sqrLen:function(){return F.sqrLen(this.array)},squaredLength:function(){return F.squaredLength(this.array)},sub:function(e){return F.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return F.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return F.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return F.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return F.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return F.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var Ia=$.prototype;Object.defineProperty(Ia,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(Ia,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}$.add=function(e,t,r){return F.add(e.array,t.array,r.array),e._dirty=!0,e};$.set=function(e,t,r){return F.set(e.array,t,r),e._dirty=!0,e};$.copy=function(e,t){return F.copy(e.array,t.array),e._dirty=!0,e};$.cross=function(e,t,r){return F.cross(e.array,t.array,r.array),e._dirty=!0,e};$.dist=function(e,t){return F.distance(e.array,t.array)};$.distance=$.dist;$.div=function(e,t,r){return F.divide(e.array,t.array,r.array),e._dirty=!0,e};$.divide=$.div;$.dot=function(e,t){return F.dot(e.array,t.array)};$.len=function(e){return F.length(e.array)};$.lerp=function(e,t,r,i){return F.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};$.min=function(e,t,r){return F.min(e.array,t.array,r.array),e._dirty=!0,e};$.max=function(e,t,r){return F.max(e.array,t.array,r.array),e._dirty=!0,e};$.mul=function(e,t,r){return F.multiply(e.array,t.array,r.array),e._dirty=!0,e};$.multiply=$.mul;$.negate=function(e,t){return F.negate(e.array,t.array),e._dirty=!0,e};$.normalize=function(e,t){return F.normalize(e.array,t.array),e._dirty=!0,e};$.random=function(e,t){return F.random(e.array,t),e._dirty=!0,e};$.scale=function(e,t,r){return F.scale(e.array,t.array,r),e._dirty=!0,e};$.scaleAndAdd=function(e,t,r,i){return F.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};$.sqrDist=function(e,t){return F.sqrDist(e.array,t.array)};$.squaredDistance=$.sqrDist;$.sqrLen=function(e){return F.sqrLen(e.array)};$.squaredLength=$.sqrLen;$.sub=function(e,t,r){return F.subtract(e.array,t.array,r.array),e._dirty=!0,e};$.subtract=$.sub;$.transformMat2=function(e,t,r){return F.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat2d=function(e,t,r){return F.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat3=function(e,t,r){return F.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat4=function(e,t,r){return F.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};var Ba=1,Fa=2,_n=3,Va={};function au(e){for(var t=e.split(`
`),r=0,i=t.length;r<i;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function za(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),au(r)].join(`
`)}var Ga=new le.Float32Array(16),ou=We.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,i){var n=this._locations,a=n[r];if(a==null)return!1;switch(t){case"m4":if(!(i instanceof Float32Array)){for(var o=0;o<i.length;o++)Ga[o]=i[o];i=Ga}e.uniformMatrix4fv(a,!1,i);break;case"2i":e.uniform2i(a,i[0],i[1]);break;case"2f":e.uniform2f(a,i[0],i[1]);break;case"3i":e.uniform3i(a,i[0],i[1],i[2]);break;case"3f":e.uniform3f(a,i[0],i[1],i[2]);break;case"4i":e.uniform4i(a,i[0],i[1],i[2],i[3]);break;case"4f":e.uniform4f(a,i[0],i[1],i[2],i[3]);break;case"1i":e.uniform1i(a,i);break;case"1f":e.uniform1f(a,i);break;case"1fv":e.uniform1fv(a,i);break;case"1iv":e.uniform1iv(a,i);break;case"2iv":e.uniform2iv(a,i);break;case"2fv":e.uniform2fv(a,i);break;case"3iv":e.uniform3iv(a,i);break;case"3fv":e.uniform3fv(a,i);break;case"4iv":e.uniform4iv(a,i);break;case"4fv":e.uniform4fv(a,i);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,i);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,i);break;case"m4v":if(Array.isArray(i)&&Array.isArray(i[0])){for(var s=new le.Float32Array(i.length*16),l=0,o=0;o<i.length;o++)for(var u=i[o],h=0;h<16;h++)s[l++]=u[h];e.uniformMatrix4fv(a,!1,s)}else e.uniformMatrix4fv(a,!1,i);break}return!0},setUniformOfSemantic:function(e,t,r){var i=this.uniformSemantics[t];return i?this.setUniform(e,i.type,i.symbol,r):!1},enableAttributes:function(e,t,r){var i=e.gl,n=this._program,a=this._locations,o;r?o=r.__enabledAttributeList:o=Va[e.__uid__],o||(r?o=r.__enabledAttributeList=[]:o=Va[e.__uid__]=[]);for(var s=[],l=0;l<t.length;l++){var u=t[l];if(!this.attributes[u]){s[l]=-1;continue}var h=a[u];if(h==null){if(h=i.getAttribLocation(n,u),h===-1){s[l]=-1;continue}a[u]=h}s[l]=h,o[h]?o[h]=Fa:o[h]=Ba}for(var l=0;l<o.length;l++)switch(o[l]){case Ba:i.enableVertexAttribArray(l),o[l]=_n;break;case Fa:o[l]=_n;break;case _n:i.disableVertexAttribArray(l),o[l]=0;break}return s},getAttribLocation:function(e,t){var r=this._locations,i=r[t];return i==null&&(i=e.getAttribLocation(this._program,t),r[t]=i),i},buildProgram:function(e,t,r,i){var n=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(n,r),e.compileShader(n);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,i),e.compileShader(o);var s=za(e,n,r);if(s||(s=za(e,o,i),s))return s;if(e.attachShader(a,n),e.attachShader(a,o),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(n),e.deleteShader(o),this._program=a,this.vertexCode=r,this.fragmentCode=i,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var u=0;u<t.uniforms.length;u++){var h=t.uniforms[u];this._locations[h]=e.getUniformLocation(a,h)}}}),su=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Ua(e,t,r){function i(o,s,l,u){var h="";isNaN(s)&&(s in t?s=t[s]:s=n[s]),isNaN(l)&&(l in t?l=t[l]:l=n[l]);for(var c=parseInt(s);c<parseInt(l);c++)h+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,c.toFixed(1)).replace(/_idx_/g,c)+"}";return h}var n={};for(var a in r)n[a+"_COUNT"]=r[a];return e.replace(su,i)}function yn(e,t,r){var i=[];if(t)for(var n in t){var a=t[n];a>0&&i.push("#define "+n.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];i.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var l=e[s];l===null?i.push("#define "+s):i.push("#define "+s+" "+l.toString())}return i.join(`
`)}function lu(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function uu(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function Ko(e){this._renderer=e,this._cache={}}Ko.prototype.getProgram=function(e,t,r){var i=this._cache,n=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),o="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(o+="se"+r.getProgramKey(e.lightGroup)),n&&(o+=",sk"+e.joints.length),a&&(o+=",is");var _=i[o];if(_)return _;var s=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,u=l.gl,h=t.getEnabledTextures(),c="";if(n){var d={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),c+=`
`+yn(d)+`
`}a&&(c+=`
#define INSTANCING
`);var f=c+yn(t.vertexDefines,s,h),v=c+yn(t.fragmentDefines,s,h),p=f+`
`+t.shader.vertex,m=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(w){return l.getGLExtension(w)!=null});m.indexOf("EXT_shader_texture_lod")>=0&&(v+=`
#define SUPPORT_TEXTURE_LOD`),m.indexOf("OES_standard_derivatives")>=0&&(v+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var g=lu(m)+`
`+uu(t.precision)+`
`+v+`
`+t.shader.fragment,T=Ua(p,t.vertexDefines,s),x=Ua(g,t.fragmentDefines,s),_=new ou;_.uniformSemantics=t.shader.uniformSemantics,_.attributes=t.shader.attributes;var b=_.buildProgram(u,t.shader,T,x);return _.__error=b,i[o]=_,_};var Ha=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,hu=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,ka=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,cu={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function Et(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var Wa={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return Et(2)},vec3:function(){return Et(3)},vec4:function(){return Et(4)},ivec2:function(){return Et(2)},ivec3:function(){return Et(3)},ivec4:function(){return Et(4)},mat2:function(){return Et(4)},mat3:function(){return Et(9)},mat4:function(){return Et(16)},array:function(){return[]}},jn=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],$o=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],Qo=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],fu={vec4:4,vec3:3,vec2:2,float:1},xn={},Jo={};function du(e,t){var r="vertex:"+e+"fragment:"+t;if(xn[r])return xn[r];var i=Se.genGUID();return xn[r]=i,Jo[i]={vertex:e,fragment:t},i}function Xa(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function dr(){console.error("Wrong uniform/attributes syntax")}function ja(e,t){for(var r=/[,=\(\):]/,i=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),n=[],a=0;a<i.length;a++)i[a].match(r)?n.push(i[a].charAt(0),i[a].slice(1)):n.push(i[a]);i=n;var o=0,s=1,l=2,u=3,h=4,c=5,d=o,f={},v=null,p;m(i[0]);function m(x){x||dr();var _=x.match(/\[(.*?)\]/);p=x.replace(/\[(.*?)\]/,""),f[p]={},_&&(f[p].isArray=!0,f[p].arraySize=_[1])}for(var a=1;a<i.length;a++){var g=i[a];if(g){if(g==="="){if(d!==o&&d!==u){dr();break}d=s;continue}else if(g===":"){d=h;continue}else if(g===","){if(d===l){if(!(v instanceof Array)){dr();break}v.push(+i[++a])}else d=c;continue}else if(g===")"){f[p].value=new le.Float32Array(v),v=null,d=c;continue}else if(g==="("){if(d!==l){dr();break}if(!(v instanceof Array)){dr();break}v.push(+i[++a]);continue}else if(g.indexOf("vec")>=0){if(d!==s&&d!==h){dr();break}d=l,v=[];continue}else if(d===s){e==="bool"?f[p].value=g==="true":f[p].value=parseFloat(g),v=null;continue}else if(d===h){var T=g;jn.indexOf(T)>=0||$o.indexOf(T)>=0||Qo.indexOf(T)>=0?f[p].semantic=T:T==="ignore"||T==="unconfigurable"?f[p].ignore=!0:e==="bool"?f[p].value=T==="true":f[p].value=parseFloat(T);continue}m(g),d=o}}return f}function G(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=Xa(e),t=Xa(t),this._shaderID=du(e,t),this._vertexCode=G.parseImport(e),this._fragmentCode=G.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}G.prototype={constructor:G,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=G.parseImport(this.vertex),this._fragmentCode=G.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(jn.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(Qo.indexOf(r)>=0){var i=!1,n=r;r.match(/TRANSPOSE$/)&&(i=!0,n=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:i,semanticNoTranspose:n}}else $o.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,i,n,a){a[e]={type:r,value:n?Wa.array:i||Wa[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(Ha,n),r="fragment",this._fragmentCode=this._fragmentCode.replace(Ha,n),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function i(a){return a!=null?function(){return a}:null}function n(a,o,s){var l=ja(o,s),u=[];for(var h in l){var c=l[h],d=c.semantic,f=h,v=cu[o],p=i(l[h].value);l[h].isArray&&(f+="["+l[h].arraySize+"]",v+="v"),u.push(f),t._uniformList.push(h),c.ignore||((o==="sampler2D"||o==="samplerCube")&&(t.textures[h]={shaderType:r,type:o}),d?t._addSemanticUniform(h,v,d):t._addMaterialUniform(h,o,v,p,l[h].isArray,e))}return u.length>0?"uniform "+o+" "+u.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(hu,r);function r(i,n,a){var o=ja(n,a),s=fu[n]||1,l=[];for(var u in o){var h=o[u].semantic;if(e[u]={type:"float",size:s,semantic:h||null},h){if(jn.indexOf(h)<0)throw new Error('Unkown semantic "'+h+'"');t.attributeSemantics[h]={symbol:u,type:n}}l.push(u)}return"attribute "+n+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(ka,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(ka,r);function r(i,n,a){var o=t==="vertex"?e.vertexDefines:e.fragmentDefines;return o[n]||(a==="false"?o[n]=!1:a==="true"?o[n]=!0:o[n]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=Jo[this._shaderID],t=new G(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(G.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(G.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(G.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(G.prototype,"uniforms",{get:function(){return this._uniformList}}));var vu=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;G.parseImport=function(e){return e=e.replace(vu,function(n,r,i){var n=G.source(i);return n?G.parseImport(n):(console.error('Shader chunk "'+i+'" not existed in library'),"")}),e};var pu=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;G.import=function(e){e.replace(pu,function(t,r,i,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var o=i.split("."),s=G.codes,l=0,u;l<o.length-1;)u=o[l++],s[u]||(s[u]={}),s=s[u];u=o[l],s[u]=a}return a})};G.codes={};G.source=function(e){for(var t=e.split("."),r=G.codes,i=0;r&&i<t.length;){var n=t[i++];r=r[n]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};const es=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`;var R={};R.create=function(){var e=new Xe(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};R.clone=function(e){var t=new Xe(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};R.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};R.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};R.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=i,e[9]=a,e[11]=t[14],e[12]=n,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};R.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],p=t[13],m=t[14],g=t[15],T=r*s-i*o,x=r*l-n*o,_=r*u-a*o,b=i*l-n*s,w=i*u-a*s,A=n*u-a*l,E=h*p-c*v,M=h*m-d*v,I=h*g-f*v,C=c*m-d*p,B=c*g-f*p,z=d*g-f*m,O=T*z-x*B+_*C+b*I-w*M+A*E;return O?(O=1/O,e[0]=(s*z-l*B+u*C)*O,e[1]=(n*B-i*z-a*C)*O,e[2]=(p*A-m*w+g*b)*O,e[3]=(d*w-c*A-f*b)*O,e[4]=(l*I-o*z-u*M)*O,e[5]=(r*z-n*I+a*M)*O,e[6]=(m*_-v*A-g*x)*O,e[7]=(h*A-d*_+f*x)*O,e[8]=(o*B-s*I+u*E)*O,e[9]=(i*I-r*B-a*E)*O,e[10]=(v*w-p*_+g*T)*O,e[11]=(c*_-h*w-f*T)*O,e[12]=(s*M-o*C-l*E)*O,e[13]=(r*C-i*M+n*E)*O,e[14]=(p*x-v*b-m*T)*O,e[15]=(h*b-c*x+d*T)*O,e):null};R.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],p=t[13],m=t[14],g=t[15];return e[0]=s*(d*g-f*m)-c*(l*g-u*m)+p*(l*f-u*d),e[1]=-(i*(d*g-f*m)-c*(n*g-a*m)+p*(n*f-a*d)),e[2]=i*(l*g-u*m)-s*(n*g-a*m)+p*(n*u-a*l),e[3]=-(i*(l*f-u*d)-s*(n*f-a*d)+c*(n*u-a*l)),e[4]=-(o*(d*g-f*m)-h*(l*g-u*m)+v*(l*f-u*d)),e[5]=r*(d*g-f*m)-h*(n*g-a*m)+v*(n*f-a*d),e[6]=-(r*(l*g-u*m)-o*(n*g-a*m)+v*(n*u-a*l)),e[7]=r*(l*f-u*d)-o*(n*f-a*d)+h*(n*u-a*l),e[8]=o*(c*g-f*p)-h*(s*g-u*p)+v*(s*f-u*c),e[9]=-(r*(c*g-f*p)-h*(i*g-a*p)+v*(i*f-a*c)),e[10]=r*(s*g-u*p)-o*(i*g-a*p)+v*(i*u-a*s),e[11]=-(r*(s*f-u*c)-o*(i*f-a*c)+h*(i*u-a*s)),e[12]=-(o*(c*m-d*p)-h*(s*m-l*p)+v*(s*d-l*c)),e[13]=r*(c*m-d*p)-h*(i*m-n*p)+v*(i*d-n*c),e[14]=-(r*(s*m-l*p)-o*(i*m-n*p)+v*(i*l-n*s)),e[15]=r*(s*d-l*c)-o*(i*d-n*c)+h*(i*l-n*s),e};R.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8],h=e[9],c=e[10],d=e[11],f=e[12],v=e[13],p=e[14],m=e[15],g=t*o-r*a,T=t*s-i*a,x=t*l-n*a,_=r*s-i*o,b=r*l-n*o,w=i*l-n*s,A=u*v-h*f,E=u*p-c*f,M=u*m-d*f,I=h*p-c*v,C=h*m-d*v,B=c*m-d*p;return g*B-T*C+x*I+_*M-b*E+w*A};R.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=t[9],f=t[10],v=t[11],p=t[12],m=t[13],g=t[14],T=t[15],x=r[0],_=r[1],b=r[2],w=r[3];return e[0]=x*i+_*s+b*c+w*p,e[1]=x*n+_*l+b*d+w*m,e[2]=x*a+_*u+b*f+w*g,e[3]=x*o+_*h+b*v+w*T,x=r[4],_=r[5],b=r[6],w=r[7],e[4]=x*i+_*s+b*c+w*p,e[5]=x*n+_*l+b*d+w*m,e[6]=x*a+_*u+b*f+w*g,e[7]=x*o+_*h+b*v+w*T,x=r[8],_=r[9],b=r[10],w=r[11],e[8]=x*i+_*s+b*c+w*p,e[9]=x*n+_*l+b*d+w*m,e[10]=x*a+_*u+b*f+w*g,e[11]=x*o+_*h+b*v+w*T,x=r[12],_=r[13],b=r[14],w=r[15],e[12]=x*i+_*s+b*c+w*p,e[13]=x*n+_*l+b*d+w*m,e[14]=x*a+_*u+b*f+w*g,e[15]=x*o+_*h+b*v+w*T,e};R.multiplyAffine=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[4],s=t[5],l=t[6],u=t[8],h=t[9],c=t[10],d=t[12],f=t[13],v=t[14],p=r[0],m=r[1],g=r[2];return e[0]=p*i+m*o+g*u,e[1]=p*n+m*s+g*h,e[2]=p*a+m*l+g*c,p=r[4],m=r[5],g=r[6],e[4]=p*i+m*o+g*u,e[5]=p*n+m*s+g*h,e[6]=p*a+m*l+g*c,p=r[8],m=r[9],g=r[10],e[8]=p*i+m*o+g*u,e[9]=p*n+m*s+g*h,e[10]=p*a+m*l+g*c,p=r[12],m=r[13],g=r[14],e[12]=p*i+m*o+g*u+d,e[13]=p*n+m*s+g*h+f,e[14]=p*a+m*l+g*c+v,e};R.mul=R.multiply;R.mulAffine=R.multiplyAffine;R.translate=function(e,t,r){var i=r[0],n=r[1],a=r[2],o,s,l,u,h,c,d,f,v,p,m,g;return t===e?(e[12]=t[0]*i+t[4]*n+t[8]*a+t[12],e[13]=t[1]*i+t[5]*n+t[9]*a+t[13],e[14]=t[2]*i+t[6]*n+t[10]*a+t[14],e[15]=t[3]*i+t[7]*n+t[11]*a+t[15]):(o=t[0],s=t[1],l=t[2],u=t[3],h=t[4],c=t[5],d=t[6],f=t[7],v=t[8],p=t[9],m=t[10],g=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=u,e[4]=h,e[5]=c,e[6]=d,e[7]=f,e[8]=v,e[9]=p,e[10]=m,e[11]=g,e[12]=o*i+h*n+v*a+t[12],e[13]=s*i+c*n+p*a+t[13],e[14]=l*i+d*n+m*a+t[14],e[15]=u*i+f*n+g*a+t[15]),e};R.scale=function(e,t,r){var i=r[0],n=r[1],a=r[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};R.rotate=function(e,t,r,i){var n=i[0],a=i[1],o=i[2],s=Math.sqrt(n*n+a*a+o*o),l,u,h,c,d,f,v,p,m,g,T,x,_,b,w,A,E,M,I,C,B,z,O,U;return Math.abs(s)<Bi?null:(s=1/s,n*=s,a*=s,o*=s,l=Math.sin(r),u=Math.cos(r),h=1-u,c=t[0],d=t[1],f=t[2],v=t[3],p=t[4],m=t[5],g=t[6],T=t[7],x=t[8],_=t[9],b=t[10],w=t[11],A=n*n*h+u,E=a*n*h+o*l,M=o*n*h-a*l,I=n*a*h-o*l,C=a*a*h+u,B=o*a*h+n*l,z=n*o*h+a*l,O=a*o*h-n*l,U=o*o*h+u,e[0]=c*A+p*E+x*M,e[1]=d*A+m*E+_*M,e[2]=f*A+g*E+b*M,e[3]=v*A+T*E+w*M,e[4]=c*I+p*C+x*B,e[5]=d*I+m*C+_*B,e[6]=f*I+g*C+b*B,e[7]=v*I+T*C+w*B,e[8]=c*z+p*O+x*U,e[9]=d*z+m*O+_*U,e[10]=f*z+g*O+b*U,e[11]=v*z+T*O+w*U,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};R.rotateX=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[4],o=t[5],s=t[6],l=t[7],u=t[8],h=t[9],c=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*n+u*i,e[5]=o*n+h*i,e[6]=s*n+c*i,e[7]=l*n+d*i,e[8]=u*n-a*i,e[9]=h*n-o*i,e[10]=c*n-s*i,e[11]=d*n-l*i,e};R.rotateY=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[8],h=t[9],c=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n-u*i,e[1]=o*n-h*i,e[2]=s*n-c*i,e[3]=l*n-d*i,e[8]=a*i+u*n,e[9]=o*i+h*n,e[10]=s*i+c*n,e[11]=l*i+d*n,e};R.rotateZ=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[4],h=t[5],c=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n+u*i,e[1]=o*n+h*i,e[2]=s*n+c*i,e[3]=l*n+d*i,e[4]=u*n-a*i,e[5]=h*n-o*i,e[6]=c*n-s*i,e[7]=d*n-l*i,e};R.fromRotationTranslation=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=i+i,l=n+n,u=a+a,h=i*s,c=i*l,d=i*u,f=n*l,v=n*u,p=a*u,m=o*s,g=o*l,T=o*u;return e[0]=1-(f+p),e[1]=c+T,e[2]=d-g,e[3]=0,e[4]=c-T,e[5]=1-(h+p),e[6]=v+m,e[7]=0,e[8]=d+g,e[9]=v-m,e[10]=1-(h+f),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};R.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,u=r*o,h=i*o,c=i*s,d=n*o,f=n*s,v=n*l,p=a*o,m=a*s,g=a*l;return e[0]=1-c-v,e[1]=h+g,e[2]=d-m,e[3]=0,e[4]=h-g,e[5]=1-u-v,e[6]=f+p,e[7]=0,e[8]=d+m,e[9]=f-p,e[10]=1-u-c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};R.frustum=function(e,t,r,i,n,a,o){var s=1/(r-t),l=1/(n-i),u=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(n+i)*l,e[10]=(o+a)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*u,e[15]=0,e};R.perspective=function(e,t,r,i,n){var a=1/Math.tan(t/2),o=1/(i-n);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(n+i)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*n*i*o,e[15]=0,e};R.ortho=function(e,t,r,i,n,a,o){var s=1/(t-r),l=1/(i-n),u=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+r)*s,e[13]=(n+i)*l,e[14]=(o+a)*u,e[15]=1,e};R.lookAt=function(e,t,r,i){var n,a,o,s,l,u,h,c,d,f,v=t[0],p=t[1],m=t[2],g=i[0],T=i[1],x=i[2],_=r[0],b=r[1],w=r[2];return Math.abs(v-_)<Bi&&Math.abs(p-b)<Bi&&Math.abs(m-w)<Bi?R.identity(e):(h=v-_,c=p-b,d=m-w,f=1/Math.sqrt(h*h+c*c+d*d),h*=f,c*=f,d*=f,n=T*d-x*c,a=x*h-g*d,o=g*c-T*h,f=Math.sqrt(n*n+a*a+o*o),f?(f=1/f,n*=f,a*=f,o*=f):(n=0,a=0,o=0),s=c*o-d*a,l=d*n-h*o,u=h*a-c*n,f=Math.sqrt(s*s+l*l+u*u),f?(f=1/f,s*=f,l*=f,u*=f):(s=0,l=0,u=0),e[0]=n,e[1]=s,e[2]=h,e[3]=0,e[4]=a,e[5]=l,e[6]=c,e[7]=0,e[8]=o,e[9]=u,e[10]=d,e[11]=0,e[12]=-(n*v+a*p+o*m),e[13]=-(s*v+l*p+u*m),e[14]=-(h*v+c*p+d*m),e[15]=1,e)};R.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};var S={};S.create=function(){var e=new Xe(3);return e[0]=0,e[1]=0,e[2]=0,e};S.clone=function(e){var t=new Xe(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};S.fromValues=function(e,t,r){var i=new Xe(3);return i[0]=e,i[1]=t,i[2]=r,i};S.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};S.set=function(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e};S.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};S.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};S.sub=S.subtract;S.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};S.mul=S.multiply;S.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};S.div=S.divide;S.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};S.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};S.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};S.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e};S.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(r*r+i*i+n*n)};S.dist=S.distance;S.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return r*r+i*i+n*n};S.sqrDist=S.squaredDistance;S.length=function(e){var t=e[0],r=e[1],i=e[2];return Math.sqrt(t*t+r*r+i*i)};S.len=S.length;S.squaredLength=function(e){var t=e[0],r=e[1],i=e[2];return t*t+r*r+i*i};S.sqrLen=S.squaredLength;S.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};S.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};S.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=r*r+i*i+n*n;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};S.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};S.cross=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2];return e[0]=n*l-a*s,e[1]=a*o-i*l,e[2]=i*s-n*o,e};S.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e};S.random=function(e,t){t=t||1;var r=wr()*2*Math.PI,i=wr()*2-1,n=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(r)*n,e[1]=Math.sin(r)*n,e[2]=i*t,e};S.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[3]*i+r[7]*n+r[11]*a+r[15];return o=o||1,e[0]=(r[0]*i+r[4]*n+r[8]*a+r[12])/o,e[1]=(r[1]*i+r[5]*n+r[9]*a+r[13])/o,e[2]=(r[2]*i+r[6]*n+r[10]*a+r[14])/o,e};S.transformMat3=function(e,t,r){var i=t[0],n=t[1],a=t[2];return e[0]=i*r[0]+n*r[3]+a*r[6],e[1]=i*r[1]+n*r[4]+a*r[7],e[2]=i*r[2]+n*r[5]+a*r[8],e};S.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*i+s*a-l*n,c=u*n+l*i-o*a,d=u*a+o*n-s*i,f=-o*i-s*n-l*a;return e[0]=h*u+f*-o+c*-l-d*-s,e[1]=c*u+f*-s+d*-o-h*-l,e[2]=d*u+f*-l+h*-s-c*-o,e};S.rotateX=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0],a[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),a[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};S.rotateY=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),a[1]=n[1],a[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};S.rotateZ=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),a[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),a[2]=n[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};S.forEach=function(){var e=S.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=3),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();S.angle=function(e,t){var r=S.fromValues(e[0],e[1],e[2]),i=S.fromValues(t[0],t[1],t[2]);S.normalize(r,r),S.normalize(i,i);var n=S.dot(r,i);return n>1?0:Math.acos(n)};G.import(es);var ge=R.create,Za={};function qa(e){return e.material}function mu(e,t,r){return t.uniforms[r].value}function gu(e,t,r,i){return r!==i}function _u(e){return!0}function Ya(){}var Ka={float:P.FLOAT,byte:P.BYTE,ubyte:P.UNSIGNED_BYTE,short:P.SHORT,ushort:P.UNSIGNED_SHORT};function yu(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function xu(e){var t,r;this.bind=function(i){t||(t=le.createCanvas(),t.width=t.height=1,t.getContext("2d"));var n=i.gl,a=!r;a&&(r=n.createTexture()),n.bindTexture(n.TEXTURE_2D,r),a&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)},this.unbind=function(i){i.gl.bindTexture(i.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var st=We.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=le.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new Ql(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new Ko(this),this._placeholderTexture=new xu},{resize:function(e,t){var r=this.canvas,i=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*i,r.height=t*i,this._width=e,this._height=t):(this._width=r.width/i,this._height=r.height/i),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,i,n){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,i=a.height,n=a.devicePixelRatio}n=n||this.devicePixelRatio,this.gl.viewport(e*n,t*n,r*n,i*n),this.viewport={x:e,y:t,width:r,height:i,devicePixelRatio:n}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,i){var n=this.gl,a=this.clearColor;if(this.clearBit){n.colorMask(!0,!0,!0,!0),n.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,n.enable(n.SCISSOR_TEST),n.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),n.clearColor(a[0],a[1],a[2],a[3]),n.clear(this.clearBit),s&&n.disable(n.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var u=e.updateRenderList(t,!0);this._sceneRendering=e;var h=u.opaque,c=u.transparent,d=e.material;e.trigger("beforerender",this,e,t,u),i?(this.renderPreZ(h,e,t),n.depthFunc(n.LEQUAL)):n.depthFunc(n.LESS);for(var f=ge(),v=S.create(),p=0;p<c.length;p++){var m=c[p];R.multiplyAffine(f,t.viewMatrix.array,m.worldTransform.array),S.transformMat4(v,m.position.array,f),m.__depth=v[2]}this.renderPass(h,t,{getMaterial:function(g){return d||g.material},sortCompare:this.opaqueSortCompare}),this.renderPass(c,t,{getMaterial:function(g){return d||g.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,u),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(Za[e.__uid__])return;if(Za[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var i=r&&r.getMaterial||qa;t=t||null;for(var n=0;n<e.length;n++){var a=e[n],o=i.call(this,a);if(n>0){var s=e[n-1],l=s.joints?s.joints.length:0,u=a.joints?a.joints.length:0;if(u===l&&a.material===s.material&&a.lightGroup===s.lightGroup){a.__program=s.__program;continue}}var h=this._programMgr.getProgram(a,o,t);this.validateProgram(h),a.__program=h}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||qa,r.getUniform=r.getUniform||mu,r.isMaterialChanged=r.isMaterialChanged||gu,r.beforeRender=r.beforeRender||Ya,r.afterRender=r.afterRender||Ya;var i=r.ifRender||_u;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var n=this.viewport,a=n.devicePixelRatio,o=[n.x*a,n.y*a,n.width*a,n.height*a],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],u=[o[2],o[3]],h=Date.now();t?(R.copy(me.VIEW,t.viewMatrix.array),R.copy(me.PROJECTION,t.projectionMatrix.array),R.copy(me.VIEWINVERSE,t.worldTransform.array)):(R.identity(me.VIEW),R.identity(me.PROJECTION),R.identity(me.VIEWINVERSE)),R.multiply(me.VIEWPROJECTION,me.PROJECTION,me.VIEW),R.invert(me.PROJECTIONINVERSE,me.PROJECTION),R.invert(me.VIEWPROJECTIONINVERSE,me.VIEWPROJECTION);for(var c=this.gl,d=this._sceneRendering,f,v,p,m,g,T,x,_,b,w,A,E,M=null,I=0;I<e.length;I++){var C=e[I],B=C.worldTransform!=null,z;if(i(C)){B&&(z=C.isSkinnedMesh&&C.isSkinnedMesh()?C.offsetMatrix?C.offsetMatrix.array:me.IDENTITY:C.worldTransform.array);var O=C.geometry,U=r.getMaterial.call(this,C),j=C.__program,Y=U.shader,k=O.__uid__+"-"+j.__uid__,Z=k!==w;w=k,B&&(R.copy(me.WORLD,z),R.multiply(me.WORLDVIEWPROJECTION,me.VIEWPROJECTION,z),R.multiplyAffine(me.WORLDVIEW,me.VIEW,z),(Y.matrixSemantics.WORLDINVERSE||Y.matrixSemantics.WORLDINVERSETRANSPOSE)&&R.invert(me.WORLDINVERSE,z),(Y.matrixSemantics.WORLDVIEWINVERSE||Y.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&R.invert(me.WORLDVIEWINVERSE,me.WORLDVIEW),(Y.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||Y.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&R.invert(me.WORLDVIEWPROJECTIONINVERSE,me.WORLDVIEWPROJECTION)),C.beforeRender&&C.beforeRender(this),r.beforeRender.call(this,C,U,f);var D=j!==v;D?(j.bind(this),j.setUniformOfSemantic(c,"VIEWPORT",o),j.setUniformOfSemantic(c,"WINDOW_SIZE",l),t&&(j.setUniformOfSemantic(c,"NEAR",t.near),j.setUniformOfSemantic(c,"FAR",t.far)),j.setUniformOfSemantic(c,"DEVICEPIXELRATIO",a),j.setUniformOfSemantic(c,"TIME",h),j.setUniformOfSemantic(c,"VIEWPORT_SIZE",u),d&&d.setLightUniforms(j,C.lightGroup,this)):j=v,(D||r.isMaterialChanged(C,p,U,f))&&(U.depthTest!==m&&(U.depthTest?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST),m=U.depthTest),U.depthMask!==g&&(c.depthMask(U.depthMask),g=U.depthMask),U.transparent!==b&&(U.transparent?c.enable(c.BLEND):c.disable(c.BLEND),b=U.transparent),U.transparent&&(U.blend?U.blend(c):(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA))),E=this._bindMaterial(C,U,j,p||null,f||null,v||null,r.getUniform),f=U);var q=Y.matrixSemanticKeys;if(B)for(var Q=0;Q<q.length;Q++){var J=q[Q],oe=Y.matrixSemantics[J],ie=me[J];if(oe.isTranspose){var Me=me[oe.semanticNoTranspose];R.transpose(ie,Me)}j.setUniform(c,oe.type,oe.symbol,ie)}C.cullFace!==x&&(x=C.cullFace,c.cullFace(x)),C.frontFace!==_&&(_=C.frontFace,c.frontFace(_)),C.culling!==T&&(T=C.culling,T?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE)),this._updateSkeleton(C,j,E),Z&&(A=this._bindVAO(M,Y,O,j)),this._renderObject(C,A,j),r.afterRender(this,C),C.afterRender&&C.afterRender(this),v=j,p=C}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var i=this.gl,n=e.skeleton;if(n)if(n.update(),e.joints.length>this.getMaxJointNumber()){var a=n.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(i,"1i","skinMatricesTexture",r),t.setUniform(i,"1f","skinMatricesTextureSize",a.width)}else{var o=n.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(i,"SKIN_MATRIX",o)}},_renderObject:function(e,t,r){var i=this.gl,n=e.geometry,a=e.mode;a==null&&(a=4);var o=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(o=this.getGLExtension("ANGLE_instanced_arrays"),!o)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(s&&(l=this._bindInstancedAttributes(e,r,o)),t.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint"),h=u&&n.indices instanceof Uint32Array,c=h?i.UNSIGNED_INT:i.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(a,t.indicesBuffer.count,c,0,e.getInstanceCount()):i.drawElements(a,t.indicesBuffer.count,c,0)}else s?o.drawArraysInstancedANGLE(a,0,n.vertexCount,e.getInstanceCount()):i.drawArrays(a,0,n.vertexCount);if(s)for(var d=0;d<l.length;d++)i.disableVertexAttribArray(l[d])},_bindInstancedAttributes:function(e,t,r){for(var i=this.gl,n=e.getInstancedAttributesBuffers(this),a=[],o=0;o<n.length;o++){var s=n[o],l=t.getAttribLocation(i,s.symbol);if(!(l<0)){var u=Ka[s.type]||i.FLOAT;i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,s.buffer),i.vertexAttribPointer(l,s.size,u,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,i,n,a,o){for(var s=this.gl,l=a===r,u=r.currentTextureSlot(),h=t.getEnabledUniforms(),c=t.getTextureUniforms(),d=this._placeholderTexture,f=0;f<c.length;f++){var v=c[f],p=o(e,t,v),m=t.uniforms[v].type;if(m==="t"&&p)p.__slot=-1;else if(m==="tv")for(var g=0;g<p.length;g++)p[g]&&(p[g].__slot=-1)}d.__slot=-1;for(var f=0;f<h.length;f++){var v=h[f],T=t.uniforms[v],p=o(e,t,v),m=T.type,x=m==="t";if(x&&(!p||!p.isRenderable())&&(p=d),n&&l){var _=o(i,n,v);if(x&&(!_||!_.isRenderable())&&(_=d),_===p){if(x)r.takeCurrentTextureSlot(this,null);else if(m==="tv"&&p)for(var g=0;g<p.length;g++)r.takeCurrentTextureSlot(this,null);continue}}if(p!=null)if(x)if(p.__slot<0){var b=r.currentTextureSlot(),w=r.setUniform(s,"1i",v,b);w&&(r.takeCurrentTextureSlot(this,p),p.__slot=b)}else r.setUniform(s,"1i",v,p.__slot);else if(Array.isArray(p)){if(p.length===0)continue;if(m==="tv"){if(!r.hasUniform(v))continue;for(var A=[],g=0;g<p.length;g++){var E=p[g];if(E.__slot<0){var b=r.currentTextureSlot();A.push(b),r.takeCurrentTextureSlot(this,E),E.__slot=b}else A.push(E.__slot)}r.setUniform(s,"1iv",v,A)}else r.setUniform(s,T.type,v,p)}else r.setUniform(s,T.type,v,p)}var M=r.currentTextureSlot();return r.resetTextureSlot(u),M},_bindVAO:function(e,t,r,i){var n=!r.dynamic,a=this.gl,o=this.__uid__+"-"+i.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var u=l[0],h=u.attributeBuffers,_=u.indicesBuffer,x=[],c=[],d=0;d<h.length;d++){var f=h[d],v=f.name,p=f.semantic,m;if(p){var g=t.attributeSemantics[p];m=g&&g.symbol}else m=v;m&&i.attributes[m]&&(x.push(f),c.push(m))}s=new yu(x,c,_),n&&(r.__vaoCache[o]=s)}var T=!0;e&&n&&(s.vao==null?s.vao=e.createVertexArrayOES():T=!1,e.bindVertexArrayOES(s.vao));var x=s.availableAttributes,_=s.indicesBuffer;if(T){for(var b=i.enableAttributes(this,s.availableAttributeSymbols,e&&n&&s),d=0;d<x.length;d++){var w=b[d];if(w!==-1){var f=x[d],A=f.buffer,E=f.size,M=Ka[f.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,A),a.vertexAttribPointer(w,E,M,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,_.buffer)}return s},renderPreZ:function(e,t,r){var i=this.gl,n=this._prezMaterial||new ot({shader:new G(G.source("clay.prez.vertex"),G.source("clay.prez.fragment"))});this._prezMaterial=n,i.colorMask(!1,!1,!1,!1),i.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,o){var s=a.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,o,s){if(s==="alphaMap")return a.material.get("diffuseMap");if(s==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return s==="uvRepeat"?a.material.get("uvRepeat"):s==="uvOffset"?a.material.get("uvOffset"):o.get(s)},getMaterial:function(){return n},sort:this.opaqueSortCompare}),i.colorMask(!0,!0,!0,!0),i.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var i={};e.traverse(function(n){var a=n.material;if(n.geometry&&t&&n.geometry.dispose(this),r&&a&&!i[a.__uid__]){for(var o=a.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],u=a.uniforms[l].value,h=a.uniforms[l].type;if(u){if(h==="t")u.dispose&&u.dispose(this);else if(h==="tv")for(var c=0;c<u.length;c++)u[c]&&u[c].dispose&&u[c].dispose(this)}}i[a.__uid__]=!0}n.dispose&&n.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new $),t=this._height-t;var i=this.viewport,n=r.array;return n[0]=(e-i.x)/i.width,n[0]=n[0]*2-1,n[1]=(t-i.y)/i.height,n[1]=n[1]*2-1,r}});st.opaqueSortCompare=st.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};st.transparentSortCompare=st.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var me={IDENTITY:ge(),WORLD:ge(),VIEW:ge(),PROJECTION:ge(),WORLDVIEW:ge(),VIEWPROJECTION:ge(),WORLDVIEWPROJECTION:ge(),WORLDINVERSE:ge(),VIEWINVERSE:ge(),PROJECTIONINVERSE:ge(),WORLDVIEWINVERSE:ge(),VIEWPROJECTIONINVERSE:ge(),WORLDVIEWPROJECTIONINVERSE:ge(),WORLDTRANSPOSE:ge(),VIEWTRANSPOSE:ge(),PROJECTIONTRANSPOSE:ge(),WORLDVIEWTRANSPOSE:ge(),VIEWPROJECTIONTRANSPOSE:ge(),WORLDVIEWPROJECTIONTRANSPOSE:ge(),WORLDINVERSETRANSPOSE:ge(),VIEWINVERSETRANSPOSE:ge(),PROJECTIONINVERSETRANSPOSE:ge(),WORLDVIEWINVERSETRANSPOSE:ge(),VIEWPROJECTIONINVERSETRANSPOSE:ge(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:ge()};st.COLOR_BUFFER_BIT=P.COLOR_BUFFER_BIT;st.DEPTH_BUFFER_BIT=P.DEPTH_BUFFER_BIT;st.STENCIL_BUFFER_BIT=P.STENCIL_BUFFER_BIT;var L=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=S.fromValues(e,t,r),this._dirty=!0};L.prototype={constructor:L,add:function(e){return S.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new L(this.x,this.y,this.z)},copy:function(e){return S.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return S.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return S.dist(this.array,e.array)},distance:function(e){return S.distance(this.array,e.array)},div:function(e){return S.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return S.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return S.dot(this.array,e.array)},len:function(){return S.len(this.array)},length:function(){return S.length(this.array)},lerp:function(e,t,r){return S.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return S.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return S.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return S.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return S.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return S.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return S.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return S.random(this.array,e),this._dirty=!0,this},scale:function(e){return S.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return S.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return S.sqrDist(this.array,e.array)},squaredDistance:function(e){return S.squaredDistance(this.array,e.array)},sqrLen:function(){return S.sqrLen(this.array)},squaredLength:function(){return S.squaredLength(this.array)},sub:function(e){return S.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return S.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return S.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return S.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return S.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){L.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){L.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var bi=Object.defineProperty;if(bi){var Tn=L.prototype;bi(Tn,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),bi(Tn,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),bi(Tn,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}L.add=function(e,t,r){return S.add(e.array,t.array,r.array),e._dirty=!0,e};L.set=function(e,t,r,i){S.set(e.array,t,r,i),e._dirty=!0};L.copy=function(e,t){return S.copy(e.array,t.array),e._dirty=!0,e};L.cross=function(e,t,r){return S.cross(e.array,t.array,r.array),e._dirty=!0,e};L.dist=function(e,t){return S.distance(e.array,t.array)};L.distance=L.dist;L.div=function(e,t,r){return S.divide(e.array,t.array,r.array),e._dirty=!0,e};L.divide=L.div;L.dot=function(e,t){return S.dot(e.array,t.array)};L.len=function(e){return S.length(e.array)};L.lerp=function(e,t,r,i){return S.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};L.min=function(e,t,r){return S.min(e.array,t.array,r.array),e._dirty=!0,e};L.max=function(e,t,r){return S.max(e.array,t.array,r.array),e._dirty=!0,e};L.mul=function(e,t,r){return S.multiply(e.array,t.array,r.array),e._dirty=!0,e};L.multiply=L.mul;L.negate=function(e,t){return S.negate(e.array,t.array),e._dirty=!0,e};L.normalize=function(e,t){return S.normalize(e.array,t.array),e._dirty=!0,e};L.random=function(e,t){return S.random(e.array,t),e._dirty=!0,e};L.scale=function(e,t,r){return S.scale(e.array,t.array,r),e._dirty=!0,e};L.scaleAndAdd=function(e,t,r,i){return S.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};L.sqrDist=function(e,t){return S.sqrDist(e.array,t.array)};L.squaredDistance=L.sqrDist;L.sqrLen=function(e){return S.sqrLen(e.array)};L.squaredLength=L.sqrLen;L.sub=function(e,t,r){return S.subtract(e.array,t.array,r.array),e._dirty=!0,e};L.subtract=L.sub;L.transformMat3=function(e,t,r){return S.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};L.transformMat4=function(e,t,r){return S.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};L.transformQuat=function(e,t,r){return S.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function nt(e,t,r){return e<t?t:e>r?r:e}var de=Math.atan2,at=Math.asin,vr=Math.abs;L.eulerFromQuat=function(e,t,d){e._dirty=!0,t=t.array;var i=e.array,n=t[0],a=t[1],o=t[2],s=t[3],l=n*n,u=a*a,h=o*o,c=s*s,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":i[0]=de(2*(n*s-a*o),c-l-u+h),i[1]=at(nt(2*(n*o+a*s),-1,1)),i[2]=de(2*(o*s-n*a),c+l-u-h);break;case"YXZ":i[0]=at(nt(2*(n*s-a*o),-1,1)),i[1]=de(2*(n*o+a*s),c-l-u+h),i[2]=de(2*(n*a+o*s),c-l+u-h);break;case"ZXY":i[0]=at(nt(2*(n*s+a*o),-1,1)),i[1]=de(2*(a*s-o*n),c-l-u+h),i[2]=de(2*(o*s-n*a),c-l+u-h);break;case"ZYX":i[0]=de(2*(n*s+o*a),c-l-u+h),i[1]=at(nt(2*(a*s-n*o),-1,1)),i[2]=de(2*(n*a+o*s),c+l-u-h);break;case"YZX":i[0]=de(2*(n*s-o*a),c-l+u-h),i[1]=de(2*(a*s-n*o),c+l-u-h),i[2]=at(nt(2*(n*a+o*s),-1,1));break;case"XZY":i[0]=de(2*(n*s+a*o),c-l+u-h),i[1]=de(2*(n*o+a*s),c+l-u-h),i[2]=at(nt(2*(o*s-n*a),-1,1));break;default:console.warn("Unkown order: "+d)}return e};L.eulerFromMat3=function(e,t,v){var i=t.array,n=i[0],a=i[3],o=i[6],s=i[1],l=i[4],u=i[7],h=i[2],c=i[5],d=i[8],f=e.array,v=(v||"XYZ").toUpperCase();switch(v){case"XYZ":f[1]=at(nt(o,-1,1)),vr(o)<.99999?(f[0]=de(-u,d),f[2]=de(-a,n)):(f[0]=de(c,l),f[2]=0);break;case"YXZ":f[0]=at(-nt(u,-1,1)),vr(u)<.99999?(f[1]=de(o,d),f[2]=de(s,l)):(f[1]=de(-h,n),f[2]=0);break;case"ZXY":f[0]=at(nt(c,-1,1)),vr(c)<.99999?(f[1]=de(-h,d),f[2]=de(-a,l)):(f[1]=0,f[2]=de(s,n));break;case"ZYX":f[1]=at(-nt(h,-1,1)),vr(h)<.99999?(f[0]=de(c,d),f[2]=de(s,n)):(f[0]=0,f[2]=de(-a,l));break;case"YZX":f[2]=at(nt(s,-1,1)),vr(s)<.99999?(f[0]=de(-u,l),f[1]=de(-h,n)):(f[0]=0,f[1]=de(o,d));break;case"XZY":f[2]=at(-nt(a,-1,1)),vr(a)<.99999?(f[0]=de(c,l),f[1]=de(o,n)):(f[0]=de(-u,d),f[1]=0);break;default:console.warn("Unkown order: "+v)}return e._dirty=!0,e};Object.defineProperties(L,{POSITIVE_X:{get:function(){return new L(1,0,0)}},NEGATIVE_X:{get:function(){return new L(-1,0,0)}},POSITIVE_Y:{get:function(){return new L(0,1,0)}},NEGATIVE_Y:{get:function(){return new L(0,-1,0)}},POSITIVE_Z:{get:function(){return new L(0,0,1)}},NEGATIVE_Z:{get:function(){return new L(0,0,-1)}},UP:{get:function(){return new L(0,1,0)}},ZERO:{get:function(){return new L}}});var wn=1e-5,or=function(e,t){this.origin=e||new L,this.direction=t||new L};or.prototype={constructor:or,intersectPlane:function(e,t){var r=e.normal.array,i=e.distance,n=this.origin.array,a=this.direction.array,o=S.dot(r,a);if(o===0)return null;t||(t=new L);var s=(S.dot(r,n)-i)/o;return S.scaleAndAdd(t.array,n,a,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=S.dot(e.normal.array,this.direction.array);S.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=S.create();return function(t){S.sub(e,t,this.origin.array);var r=S.dot(e,this.direction.array);if(r<0)return S.distance(this.origin.array,t);var i=S.lenSquared(e);return Math.sqrt(i-r*r)}}(),intersectSphere:function(){var e=S.create();return function(t,r,i){var n=this.origin.array,a=this.direction.array;t=t.array,S.sub(e,t,n);var o=S.dot(e,a),s=S.squaredLength(e),l=s-o*o,u=r*r;if(!(l>u)){var h=Math.sqrt(u-l),c=o-h,d=o+h;return i||(i=new L),c<0?d<0?null:(S.scaleAndAdd(i.array,n,a,d),i):(S.scaleAndAdd(i.array,n,a,c),i)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,i=this.origin.array,n=e.min.array,a=e.max.array,o=1/r[0],s=1/r[1],l=1/r[2],u,h,c,d,f,v;if(o>=0?(u=(n[0]-i[0])*o,h=(a[0]-i[0])*o):(h=(n[0]-i[0])*o,u=(a[0]-i[0])*o),s>=0?(c=(n[1]-i[1])*s,d=(a[1]-i[1])*s):(d=(n[1]-i[1])*s,c=(a[1]-i[1])*s),u>d||c>h||((c>u||u!==u)&&(u=c),(d<h||h!==h)&&(h=d),l>=0?(f=(n[2]-i[2])*l,v=(a[2]-i[2])*l):(v=(n[2]-i[2])*l,f=(a[2]-i[2])*l),u>v||f>h)||((f>u||u!==u)&&(u=f),(v<h||h!==h)&&(h=v),h<0))return null;var p=u>=0?u:h;return t||(t=new L),S.scaleAndAdd(t.array,i,r,p),t},intersectTriangle:function(){var e=S.create(),t=S.create(),r=S.create(),i=S.create();return function(n,a,o,s,l,u){var h=this.direction.array,c=this.origin.array;n=n.array,a=a.array,o=o.array,S.sub(e,a,n),S.sub(t,o,n),S.cross(i,t,h);var d=S.dot(e,i);if(s){if(d>-wn)return null}else if(d>-wn&&d<wn)return null;S.sub(r,c,n);var f=S.dot(i,r)/d;if(f<0||f>1)return null;S.cross(i,e,r);var v=S.dot(h,i)/d;if(v<0||v>1||f+v>1)return null;S.cross(i,e,t);var p=-S.dot(r,i)/d;return p<0?null:(l||(l=new L),u&&L.set(u,1-f-v,f,v),S.scaleAndAdd(l.array,c,h,p),l)}}(),applyTransform:function(e){L.add(this.direction,this.direction,this.origin),L.transformMat4(this.origin,this.origin,e),L.transformMat4(this.direction,this.direction,e),L.sub(this.direction,this.direction,this.origin),L.normalize(this.direction,this.direction)},copy:function(e){L.copy(this.origin,e.origin),L.copy(this.direction,e.direction)},clone:function(){var e=new or;return e.copy(this),e}};var N={};N.create=function(){var e=new Xe(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};N.clone=function(e){var t=new Xe(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};N.fromValues=function(e,t,r,i){var n=new Xe(4);return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n};N.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};N.set=function(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e};N.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};N.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};N.sub=N.subtract;N.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};N.mul=N.multiply;N.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};N.div=N.divide;N.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};N.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};N.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};N.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e};N.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+i*i+n*n+a*a)};N.dist=N.distance;N.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return r*r+i*i+n*n+a*a};N.sqrDist=N.squaredDistance;N.length=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return Math.sqrt(t*t+r*r+i*i+n*n)};N.len=N.length;N.squaredLength=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return t*t+r*r+i*i+n*n};N.sqrLen=N.squaredLength;N.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};N.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};N.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e};N.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};N.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e[3]=s+i*(r[3]-s),e};N.random=function(e,t){return t=t||1,e[0]=wr(),e[1]=wr(),e[2]=wr(),e[3]=wr(),N.normalize(e,e),N.scale(e,e,t),e};N.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3];return e[0]=r[0]*i+r[4]*n+r[8]*a+r[12]*o,e[1]=r[1]*i+r[5]*n+r[9]*a+r[13]*o,e[2]=r[2]*i+r[6]*n+r[10]*a+r[14]*o,e[3]=r[3]*i+r[7]*n+r[11]*a+r[15]*o,e};N.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*i+s*a-l*n,c=u*n+l*i-o*a,d=u*a+o*n-s*i,f=-o*i-s*n-l*a;return e[0]=h*u+f*-o+c*-l-d*-s,e[1]=c*u+f*-s+d*-o-h*-l,e[2]=d*u+f*-l+h*-s-c*-o,e};N.forEach=function(){var e=N.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=4),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();var K={};K.create=function(){var e=new Xe(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};K.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};K.clone=function(e){var t=new Xe(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};K.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};K.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};K.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=n}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};K.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=h*o-s*u,d=-h*a+s*l,f=u*a-o*l,v=r*c+i*d+n*f;return v?(v=1/v,e[0]=c*v,e[1]=(-h*i+n*u)*v,e[2]=(s*i-n*o)*v,e[3]=d*v,e[4]=(h*r-n*l)*v,e[5]=(-s*r+n*a)*v,e[6]=f*v,e[7]=(-u*r+i*l)*v,e[8]=(o*r-i*a)*v,e):null};K.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8];return e[0]=o*h-s*u,e[1]=n*u-i*h,e[2]=i*s-n*o,e[3]=s*l-a*h,e[4]=r*h-n*l,e[5]=n*a-r*s,e[6]=a*u-o*l,e[7]=i*l-r*u,e[8]=r*o-i*a,e};K.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8];return t*(u*a-o*l)+r*(-u*n+o*s)+i*(l*n-a*s)};K.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=r[0],f=r[1],v=r[2],p=r[3],m=r[4],g=r[5],T=r[6],x=r[7],_=r[8];return e[0]=d*i+f*o+v*u,e[1]=d*n+f*s+v*h,e[2]=d*a+f*l+v*c,e[3]=p*i+m*o+g*u,e[4]=p*n+m*s+g*h,e[5]=p*a+m*l+g*c,e[6]=T*i+x*o+_*u,e[7]=T*n+x*s+_*h,e[8]=T*a+x*l+_*c,e};K.mul=K.multiply;K.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=r[0],f=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=s,e[5]=l,e[6]=d*i+f*o+u,e[7]=d*n+f*s+h,e[8]=d*a+f*l+c,e};K.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=Math.sin(r),f=Math.cos(r);return e[0]=f*i+d*o,e[1]=f*n+d*s,e[2]=f*a+d*l,e[3]=f*o-d*i,e[4]=f*s-d*n,e[5]=f*l-d*a,e[6]=u,e[7]=h,e[8]=c,e};K.scale=function(e,t,r){var i=r[0],n=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};K.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};K.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,u=r*o,h=i*o,c=i*s,d=n*o,f=n*s,v=n*l,p=a*o,m=a*s,g=a*l;return e[0]=1-c-v,e[3]=h-g,e[6]=d+m,e[1]=h+g,e[4]=1-u-v,e[7]=f-p,e[2]=d-m,e[5]=f+p,e[8]=1-u-c,e};K.normalFromMat4=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],p=t[13],m=t[14],g=t[15],T=r*s-i*o,x=r*l-n*o,_=r*u-a*o,b=i*l-n*s,w=i*u-a*s,A=n*u-a*l,E=h*p-c*v,M=h*m-d*v,I=h*g-f*v,C=c*m-d*p,B=c*g-f*p,z=d*g-f*m,O=T*z-x*B+_*C+b*I-w*M+A*E;return O?(O=1/O,e[0]=(s*z-l*B+u*C)*O,e[1]=(l*I-o*z-u*M)*O,e[2]=(o*B-s*I+u*E)*O,e[3]=(n*B-i*z-a*C)*O,e[4]=(r*z-n*I+a*M)*O,e[5]=(i*I-r*B-a*E)*O,e[6]=(p*A-m*w+g*b)*O,e[7]=(m*_-v*A-g*x)*O,e[8]=(v*w-p*_+g*T)*O,e):null};K.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};var W={};W.create=function(){var e=new Xe(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};W.rotationTo=function(){var e=S.create(),t=S.fromValues(1,0,0),r=S.fromValues(0,1,0);return function(i,n,a){var o=S.dot(n,a);return o<-.999999?(S.cross(e,t,n),S.length(e)<1e-6&&S.cross(e,r,n),S.normalize(e,e),W.setAxisAngle(i,e,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(S.cross(e,n,a),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=1+o,W.normalize(i,i))}}();W.setAxes=function(){var e=K.create();return function(t,r,i,n){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],W.normalize(t,W.fromMat3(t,e))}}();W.clone=N.clone;W.fromValues=N.fromValues;W.copy=N.copy;W.set=N.set;W.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};W.setAxisAngle=function(e,t,r){r=r*.5;var i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e};W.add=N.add;W.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],h=r[3];return e[0]=i*h+o*s+n*u-a*l,e[1]=n*h+o*l+a*s-i*u,e[2]=a*h+o*u+i*l-n*s,e[3]=o*h-i*s-n*l-a*u,e};W.mul=W.multiply;W.scale=N.scale;W.rotateX=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+o*s,e[1]=n*l+a*s,e[2]=a*l-n*s,e[3]=o*l-i*s,e};W.rotateY=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-a*s,e[1]=n*l+o*s,e[2]=a*l+i*s,e[3]=o*l-n*s,e};W.rotateZ=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*s,e[1]=n*l-i*s,e[2]=a*l+o*s,e[3]=o*l-a*s,e};W.calculateW=function(e,t){var r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e};W.dot=N.dot;W.lerp=N.lerp;W.slerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3],l=r[0],u=r[1],h=r[2],c=r[3],d,f,v,p,m;return f=n*l+a*u+o*h+s*c,f<0&&(f=-f,l=-l,u=-u,h=-h,c=-c),1-f>1e-6?(d=Math.acos(f),v=Math.sin(d),p=Math.sin((1-i)*d)/v,m=Math.sin(i*d)/v):(p=1-i,m=i),e[0]=p*n+m*l,e[1]=p*a+m*u,e[2]=p*o+m*h,e[3]=p*s+m*c,e};W.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a,s=o?1/o:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=a*s,e};W.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};W.length=N.length;W.len=W.length;W.squaredLength=N.squaredLength;W.sqrLen=W.squaredLength;W.normalize=N.normalize;W.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{var n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);var a=(n+1)%3,o=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[a*3+a]-t[o*3+o]+1),e[n]=.5*i,i=.5/i,e[3]=(t[a*3+o]-t[o*3+a])*i,e[a]=(t[a*3+n]+t[n*3+a])*i,e[o]=(t[o*3+n]+t[n*3+o])*i}return e};var H=function(){this._axisX=new L,this._axisY=new L,this._axisZ=new L,this.array=R.create(),this._dirty=!0};H.prototype={constructor:H,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return R.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new H().copy(this)},copy:function(e){return R.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return R.determinant(this.array)},fromQuat:function(e){return R.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return R.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return H.fromMat2d(this,e),this},frustum:function(e,t,r,i,n,a){return R.frustum(this.array,e,t,r,i,n,a),this._dirty=!0,this},identity:function(){return R.identity(this.array),this._dirty=!0,this},invert:function(){return R.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return R.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return R.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return R.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return R.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return R.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,i,n,a){return R.ortho(this.array,e,t,r,i,n,a),this._dirty=!0,this},perspective:function(e,t,r,i){return R.perspective(this.array,e,t,r,i),this._dirty=!0,this},rotate:function(e,t){return R.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return R.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return R.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return R.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return R.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return R.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return R.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=S.create(),t=S.create(),r=S.create(),i=K.create();return function(n,a,o){var s=this.array;S.set(e,s[0],s[1],s[2]),S.set(t,s[4],s[5],s[6]),S.set(r,s[8],s[9],s[10]);var l=S.length(e),u=S.length(t),h=S.length(r),c=this.determinant();c<0&&(l=-l),n&&n.set(l,u,h),o.set(s[12],s[13],s[14]),K.fromMat4(i,s),i[0]/=l,i[1]/=l,i[2]/=l,i[3]/=u,i[4]/=u,i[5]/=u,i[6]/=h,i[7]/=h,i[8]/=h,W.fromMat3(a.array,i),W.normalize(a.array,a.array),a._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Si=Object.defineProperty;if(Si){var bn=H.prototype;Si(bn,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),Si(bn,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),Si(bn,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}H.adjoint=function(e,t){return R.adjoint(e.array,t.array),e._dirty=!0,e};H.copy=function(e,t){return R.copy(e.array,t.array),e._dirty=!0,e};H.determinant=function(e){return R.determinant(e.array)};H.identity=function(e){return R.identity(e.array),e._dirty=!0,e};H.ortho=function(e,t,r,i,n,a,o){return R.ortho(e.array,t,r,i,n,a,o),e._dirty=!0,e};H.perspective=function(e,t,r,i,n){return R.perspective(e.array,t,r,i,n),e._dirty=!0,e};H.lookAt=function(e,t,r,i){return R.lookAt(e.array,t.array,r.array,i.array),e._dirty=!0,e};H.invert=function(e,t){return R.invert(e.array,t.array),e._dirty=!0,e};H.mul=function(e,t,r){return R.mul(e.array,t.array,r.array),e._dirty=!0,e};H.multiply=H.mul;H.fromQuat=function(e,t){return R.fromQuat(e.array,t.array),e._dirty=!0,e};H.fromRotationTranslation=function(e,t,r){return R.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};H.fromMat2d=function(i,r){i._dirty=!0;var r=r.array,i=i.array;return i[0]=r[0],i[4]=r[2],i[12]=r[4],i[1]=r[1],i[5]=r[3],i[13]=r[5],i};H.rotate=function(e,t,r,i){return R.rotate(e.array,t.array,r,i.array),e._dirty=!0,e};H.rotateX=function(e,t,r){return R.rotateX(e.array,t.array,r),e._dirty=!0,e};H.rotateY=function(e,t,r){return R.rotateY(e.array,t.array,r),e._dirty=!0,e};H.rotateZ=function(e,t,r){return R.rotateZ(e.array,t.array,r),e._dirty=!0,e};H.scale=function(e,t,r){return R.scale(e.array,t.array,r.array),e._dirty=!0,e};H.transpose=function(e,t){return R.transpose(e.array,t.array),e._dirty=!0,e};H.translate=function(e,t,r){return R.translate(e.array,t.array,r.array),e._dirty=!0,e};var he=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i===void 0?1:i,this.array=W.fromValues(e,t,r,i),this._dirty=!0};he.prototype={constructor:he,add:function(e){return W.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return W.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new he(this.x,this.y,this.z,this.w)},conjugate:function(){return W.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return W.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return W.dot(this.array,e.array)},fromMat3:function(e){return W.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=K.create();return function(t){return K.fromMat4(e,t.array),K.transpose(e,e),W.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return W.identity(this.array),this._dirty=!0,this},invert:function(){return W.invert(this.array,this.array),this._dirty=!0,this},len:function(){return W.len(this.array)},length:function(){return W.length(this.array)},lerp:function(e,t,r){return W.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return W.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return W.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return W.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return W.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return W.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return W.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return W.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return W.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return W.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return W.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return W.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return W.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return W.sqrLen(this.array)},squaredLength:function(){return W.squaredLength(this.array)},fromEuler:function(e,t){return he.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Wr=Object.defineProperty;if(Wr){var Ei=he.prototype;Wr(Ei,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Wr(Ei,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Wr(Ei,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Wr(Ei,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}he.add=function(e,t,r){return W.add(e.array,t.array,r.array),e._dirty=!0,e};he.set=function(e,t,r,i,n){W.set(e.array,t,r,i,n),e._dirty=!0};he.copy=function(e,t){return W.copy(e.array,t.array),e._dirty=!0,e};he.calculateW=function(e,t){return W.calculateW(e.array,t.array),e._dirty=!0,e};he.conjugate=function(e,t){return W.conjugate(e.array,t.array),e._dirty=!0,e};he.identity=function(e){return W.identity(e.array),e._dirty=!0,e};he.invert=function(e,t){return W.invert(e.array,t.array),e._dirty=!0,e};he.dot=function(e,t){return W.dot(e.array,t.array)};he.len=function(e){return W.length(e.array)};he.lerp=function(e,t,r,i){return W.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};he.slerp=function(e,t,r,i){return W.slerp(e.array,t.array,r.array,i),e._dirty=!0,e};he.mul=function(e,t,r){return W.multiply(e.array,t.array,r.array),e._dirty=!0,e};he.multiply=he.mul;he.rotateX=function(e,t,r){return W.rotateX(e.array,t.array,r),e._dirty=!0,e};he.rotateY=function(e,t,r){return W.rotateY(e.array,t.array,r),e._dirty=!0,e};he.rotateZ=function(e,t,r){return W.rotateZ(e.array,t.array,r),e._dirty=!0,e};he.setAxisAngle=function(e,t,r){return W.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};he.normalize=function(e,t){return W.normalize(e.array,t.array),e._dirty=!0,e};he.sqrLen=function(e){return W.sqrLen(e.array)};he.squaredLength=he.sqrLen;he.fromMat3=function(e,t){return W.fromMat3(e.array,t.array),e._dirty=!0,e};he.setAxes=function(e,t,r,i){return W.setAxes(e.array,t.array,r.array,i.array),e._dirty=!0,e};he.rotationTo=function(e,t,r){return W.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};he.fromEuler=function(e,t,h){e._dirty=!0,t=t.array;var i=e.array,n=Math.cos(t[0]/2),a=Math.cos(t[1]/2),o=Math.cos(t[2]/2),s=Math.sin(t[0]/2),l=Math.sin(t[1]/2),u=Math.sin(t[2]/2),h=(h||"XYZ").toUpperCase();switch(h){case"XYZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"YXZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"ZXY":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"ZYX":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"YZX":i[0]=s*a*o+n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o-s*l*u;break;case"XZY":i[0]=s*a*o-n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o+s*l*u;break}};var It=S.set,Ai=S.copy,He=function(e,t){this.min=e||new L(1/0,1/0,1/0),this.max=t||new L(-1/0,-1/0,-1/0),this.vertices=null};He.prototype={constructor:He,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,i=t.array,n=r.array;Ai(i,e[0]),Ai(n,e[0]);for(var a=1;a<e.length;a++){var o=e[a];o[0]<i[0]&&(i[0]=o[0]),o[1]<i[1]&&(i[1]=o[1]),o[2]<i[2]&&(i[2]=o[2]),o[0]>n[0]&&(n[0]=o[0]),o[1]>n[1]&&(n[1]=o[1]),o[2]>n[2]&&(n[2]=o[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return S.min(t.array,t.array,e.min.array),S.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return S.max(t.array,t.array,e.min.array),S.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return!(t[0]>n[0]||t[1]>n[1]||t[2]>n[2]||r[0]<i[0]||r[1]<i[1]||r[2]<i[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,i=e.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=S.create(),t=S.create(),r=S.create(),i=S.create(),n=S.create(),a=S.create();return function(o,s){var l=o.min.array,u=o.max.array,h=s.array;return e[0]=h[0]*l[0],e[1]=h[1]*l[0],e[2]=h[2]*l[0],t[0]=h[0]*u[0],t[1]=h[1]*u[0],t[2]=h[2]*u[0],r[0]=h[4]*l[1],r[1]=h[5]*l[1],r[2]=h[6]*l[1],i[0]=h[4]*u[1],i[1]=h[5]*u[1],i[2]=h[6]*u[1],n[0]=h[8]*l[2],n[1]=h[9]*l[2],n[2]=h[10]*l[2],a[0]=h[8]*u[2],a[1]=h[9]*u[2],a[2]=h[10]*u[2],l=this.min.array,u=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],i[0])+Math.min(n[0],a[0])+h[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],i[1])+Math.min(n[1],a[1])+h[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],i[2])+Math.min(n[2],a[2])+h[14],u[0]=Math.max(e[0],t[0])+Math.max(r[0],i[0])+Math.max(n[0],a[0])+h[12],u[1]=Math.max(e[1],t[1])+Math.max(r[1],i[1])+Math.max(n[1],a[1])+h[13],u[2]=Math.max(e[2],t[2])+Math.max(r[2],i[2])+Math.max(n[2],a[2])+h[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,i=e.array,n=t[0],a=t[1],o=t[2],s=r[0],l=r[1],u=t[2],h=r[0],c=r[1],d=r[2];if(i[15]===1)t[0]=i[0]*n+i[12],t[1]=i[5]*a+i[13],r[2]=i[10]*o+i[14],r[0]=i[0]*h+i[12],r[1]=i[5]*c+i[13],t[2]=i[10]*d+i[14];else{var f=-1/o;t[0]=i[0]*n*f,t[1]=i[5]*a*f,r[2]=(i[10]*o+i[14])*f,f=-1/u,r[0]=i[0]*s*f,r[1]=i[5]*l*f,f=-1/d,t[2]=(i[10]*d+i[14])*f}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=S.fromValues(0,0,0);this.vertices=e}var r=this.min.array,i=this.max.array;return It(e[0],r[0],r[1],r[2]),It(e[1],r[0],i[1],r[2]),It(e[2],i[0],r[1],r[2]),It(e[3],i[0],i[1],r[2]),It(e[4],r[0],r[1],i[2]),It(e[5],r[0],i[1],i[2]),It(e[6],i[0],r[1],i[2]),It(e[7],i[0],i[1],i[2]),this},copy:function(e){var t=this.min,r=this.max;return Ai(t.array,e.min.array),Ai(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new He;return e.copy(this),e}};var Tu=0,yt=We.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+Tu++),this.position||(this.position=new L),this.rotation||(this.rotation=new he),this.scale||(this.scale=new L(1,1,1)),this.worldTransform=new H,this.localTransform=new H,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var i=t[r];if(i.name===e)return i;var n=i.getDescendantByName(e);if(n)return n}},queryNode:function(e){if(e){for(var t=e.split("/"),r=this,i=0;i<t.length;i++){var n=t[i];if(n){for(var a=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===n){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,i=0,n=r.length;i<n;i++)r[i].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,i=0,n=r.length;i<n;i++){var a=r[i];e.call(t,a,i)}},setLocalTransform:function(e){R.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){R.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=R.create();return function(t){var r=this.localTransform,i=this.worldTransform;this._parent?(R.invert(e,this._parent.worldTransform.array),R.multiply(r.array,e,i.array)):R.copy(r.array,i.array);var n=t?null:this.scale;r.decomposeMatrix(n,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var i=this.localTransform.array;R.fromRotationTranslation(i,t.array,e.array),R.scale(i,i,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?R.multiplyAffine(t,this._parent.worldTransform.array,e):R.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,i=t.length;r<i;r++)t[r].update(e)},getBoundingBox:function(){function e(n){return!n.invisible&&n.geometry}var t=new He,r=new H,i=new H;return function(n,a){return a=a||new He,this._parent?H.invert(i,this._parent.worldTransform):H.identity(i),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(t.copy(o.geometry.boundingBox),H.multiply(r,i,o.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new L(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new L,t=new H;return function(r,i,n){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(n,i),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new H;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()}),$e=yt.extend({material:null,geometry:null,mode:P.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:P.BACK,frontFace:P.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=yt.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=yt.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var i=e[r];t[i]!==this[i]&&(t[i]=this[i])}return t}}()});$e.POINTS=P.POINTS;$e.LINES=P.LINES;$e.LINE_LOOP=P.LINE_LOOP;$e.LINE_STRIP=P.LINE_STRIP;$e.TRIANGLES=P.TRIANGLES;$e.TRIANGLE_STRIP=P.TRIANGLE_STRIP;$e.TRIANGLE_FAN=P.TRIANGLE_FAN;$e.BACK=P.BACK;$e.FRONT=P.FRONT;$e.FRONT_AND_BACK=P.FRONT_AND_BACK;$e.CW=P.CW;$e.CCW=P.CCW;var sa=We.extend({scene:null,camera:null,renderer:null},function(){this._ray=new or,this._ndc=new $},{pick:function(e,t,r){var i=this.pickAll(e,t,[],r);return i[0]||null},pickAll:function(e,t,r,i){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,i||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof $e&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===P.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var i=0;i<e._children.length;i++)this._intersectNode(e._children[i],t,r)},_intersectRenderable:function(){var e=new L,t=new L,r=new L,i=new or,n=new H;return function(a,o){var s=a.isSkinnedMesh();i.copy(this._ray),H.invert(n,a.worldTransform),s||i.applyTransform(n);var l=a.geometry,u=s?a.skeleton.boundingBox:l.boundingBox;if(!(u&&!i.intersectBoundingBox(u))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(l.pickByRay){l.pickByRay(i,a,o);return}var h=a.cullFace===P.BACK&&a.frontFace===P.CCW||a.cullFace===P.FRONT&&a.frontFace===P.CW,c,d=l.indices,f=l.attributes.position,v=l.attributes.weight,p=l.attributes.joint,m,g=[];if(!(!f||!f.value||!d)){if(s){m=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var T=0;T<a.joints.length;T++){g[T]=g[T]||[];for(var x=0;x<16;x++)g[T][x]=m[T*16+x]}var _=[],b=[],w=[],A=[],E=[],M=l.attributes.skinnedPosition;(!M||!M.value)&&(l.createAttribute("skinnedPosition","f",3),M=l.attributes.skinnedPosition,M.init(l.vertexCount));for(var T=0;T<l.vertexCount;T++){f.get(T,_),v.get(T,b),p.get(T,w),b[3]=1-b[0]-b[1]-b[2],S.set(A,0,0,0);for(var x=0;x<4;x++)w[x]>=0&&b[x]>1e-4&&(S.transformMat4(E,_,g[w[x]]),S.scaleAndAdd(A,A,E,b[x]));M.set(T,A)}}for(var T=0;T<d.length;T+=3){var I=d[T],C=d[T+1],B=d[T+2],z=s?l.attributes.skinnedPosition:f;if(z.get(I,e.array),z.get(C,t.array),z.get(B,r.array),h?c=i.intersectTriangle(e,t,r,a.culling):c=i.intersectTriangle(e,r,t,a.culling),c){var O=new L;s?L.copy(O,c):L.transformMat4(O,c,a.worldTransform),o.push(new sa.Intersection(c,O,a,[I,C,B],T/3,L.dist(O,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});sa.Intersection=function(e,t,r,i,n,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=i,this.triangleIndex=n,this.distance=a};var Xr="__dt__",Lr=function(){this._contextId=0,this._caches=[],this._context={}};Lr.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=Xr+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=Xr+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!0)},fresh:function(e){e=e||"";var t=Xr+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=Xr+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!1)},isDirty:function(e){e=e||"";var t=Xr+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(i){e&&e.call(t,i)})},miss:function(e){return!this._context.hasOwnProperty(e)}};Lr.prototype.constructor=Lr;var V=We.extend({width:512,height:512,type:P.UNSIGNED_BYTE,format:P.RGBA,wrapS:P.REPEAT,wrapT:P.REPEAT,minFilter:P.LINEAR_MIPMAP_LINEAR,magFilter:P.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Lr},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===P.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===V.SRGB&&!r&&(this.format=V.RGB),this.format===V.SRGB_ALPHA&&!r&&(this.format=V.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?P.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?P.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===P.NEAREST_MIPMAP_NEAREST||e===P.NEAREST_MIPMAP_LINEAR?P.NEAREST:e===P.LINEAR_MIPMAP_LINEAR||e===P.LINEAR_MIPMAP_NEAREST?P.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(V.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(V.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});V.BYTE=P.BYTE;V.UNSIGNED_BYTE=P.UNSIGNED_BYTE;V.SHORT=P.SHORT;V.UNSIGNED_SHORT=P.UNSIGNED_SHORT;V.INT=P.INT;V.UNSIGNED_INT=P.UNSIGNED_INT;V.FLOAT=P.FLOAT;V.HALF_FLOAT=36193;V.UNSIGNED_INT_24_8_WEBGL=34042;V.DEPTH_COMPONENT=P.DEPTH_COMPONENT;V.DEPTH_STENCIL=P.DEPTH_STENCIL;V.ALPHA=P.ALPHA;V.RGB=P.RGB;V.RGBA=P.RGBA;V.LUMINANCE=P.LUMINANCE;V.LUMINANCE_ALPHA=P.LUMINANCE_ALPHA;V.SRGB=35904;V.SRGB_ALPHA=35906;V.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;V.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;V.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;V.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;V.NEAREST=P.NEAREST;V.LINEAR=P.LINEAR;V.NEAREST_MIPMAP_NEAREST=P.NEAREST_MIPMAP_NEAREST;V.LINEAR_MIPMAP_NEAREST=P.LINEAR_MIPMAP_NEAREST;V.NEAREST_MIPMAP_LINEAR=P.NEAREST_MIPMAP_LINEAR;V.LINEAR_MIPMAP_LINEAR=P.LINEAR_MIPMAP_LINEAR;V.REPEAT=P.REPEAT;V.CLAMP_TO_EDGE=P.CLAMP_TO_EDGE;V.MIRRORED_REPEAT=P.MIRRORED_REPEAT;var Be=$e.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=$e.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});Be.POINTS=P.POINTS;Be.LINES=P.LINES;Be.LINE_LOOP=P.LINE_LOOP;Be.LINE_STRIP=P.LINE_STRIP;Be.TRIANGLES=P.TRIANGLES;Be.TRIANGLE_STRIP=P.TRIANGLE_STRIP;Be.TRIANGLE_FAN=P.TRIANGLE_FAN;Be.BACK=P.BACK;Be.FRONT=P.FRONT;Be.FRONT_AND_BACK=P.FRONT_AND_BACK;Be.CW=P.CW;Be.CCW=P.CCW;var mi={};mi.isPowerOfTwo=function(e){return(e&e-1)===0};mi.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};mi.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};var $a=mi.isPowerOfTwo;function Qa(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function wu(e,t){var r=Qa(e.width),i=Qa(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=i;var n=t.getContext("2d");return n.drawImage(e.image,0,0,r,i),t}var ee=V.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type,n=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===V.REPEAT||this.wrapT===V.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,n?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,n?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var o=e.getGLExtension("OES_texture_half_float");o||(i=P.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,u=0;u<this.mipmaps.length;u++){var h=this.mipmaps[u];this._updateTextureData(t,h,u,s,l,r,i,!1),s/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i,n),this.useMipmap&&(!this.NPOT||n)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,i,n,a,o,s){if(t.image){var l=t.image;s&&(this._potCanvas=wu(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,o,l)}else a<=V.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=V.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,i,n,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,i,n,0,a,o,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return $a(this.width)&&$a(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=le.createImage();t&&(r.crossOrigin=t);var i=this;return r.onload=function(){i.dirty(),i.trigger("success",i)},r.onerror=function(){i.trigger("error",i)},r.src=e,this.image=r,this}});Object.defineProperty(ee.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(ee.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function ts(e){return{byte:le.Int8Array,ubyte:le.Uint8Array,short:le.Int16Array,ushort:le.Uint16Array}[e]||le.Float32Array}function Sn(e){return"attr_"+e}function Mr(e,t,r,i){switch(this.name=e,this.type=t,this.size=r,this.semantic=i||"",this.value=null,r){case 1:this.get=function(n){return this.value[n]},this.set=function(n,a){this.value[n]=a},this.copy=function(n,a){this.value[n]=this.value[n]};break;case 2:this.get=function(n,a){var o=this.value;return a[0]=o[n*2],a[1]=o[n*2+1],a},this.set=function(n,a){var o=this.value;o[n*2]=a[0],o[n*2+1]=a[1]},this.copy=function(n,a){var o=this.value;a*=2,n*=2,o[n]=o[a],o[n+1]=o[a+1]};break;case 3:this.get=function(n,a){var o=n*3,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(n,a){var o=n*3,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(n,a){var o=this.value;a*=3,n*=3,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2]};break;case 4:this.get=function(n,a){var o=this.value,s=n*4;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(n,a){var o=this.value,s=n*4;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(n,a){var o=this.value;a*=4,n*=4,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2],o[n+3]=o[a+3]}}}Mr.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=ts(this.type);this.value=new t(e*this.size)}};Mr.prototype.fromArray=function(e){var t=ts(this.type),r;if(e[0]&&e[0].length){var i=0,n=this.size;r=new t(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)r[i++]=e[a][o]}else r=new t(e);this.value=r};Mr.prototype.clone=function(e){var t=new Mr(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function rs(e,t,r,i,n){this.name=e,this.type=t,this.buffer=r,this.size=i,this.semantic=n,this.symbol="",this.needsRemove=!1}function is(e){this.buffer=e,this.count=0}var Qe=We.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Lr,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(Sn(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?le.Uint32Array:le.Uint16Array;if(e[0]&&e[0].length){var i=0,n=3;t=new r(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)t[i++]=e[a][o]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,i){var n=new Mr(e,t,r,i);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=n,this._attributeList.push(e),n},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],i=this.vertexCount,n=0;n<t.length;n++){var a=t[n],o=this.attributes[a];o.value&&o.value.length===i*o.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),i=t.isDirty("indices");if(r||i){this._updateBuffer(e.gl,r,i);for(var n=this.getEnabledAttributes(),a=0;a<n.length;a++)t.fresh(Sn(n[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var i=this._cache,n=i.get("chunks"),a=!1;n||(n=[],n[0]={attributeBuffers:[],indicesBuffer:null},i.put("chunks",n),a=!0);var o=n[0],s=o.attributeBuffers,l=o.indicesBuffer;if(t||a){var u=this.getEnabledAttributes(),h={};if(!a)for(var c=0;c<s.length;c++)h[s[c].name]=s[c];for(var d=0;d<u.length;d++){var f=u[d],v=this.attributes[f],p;a||(p=h[f]);var m;p?m=p.buffer:m=e.createBuffer(),i.isDirty(Sn(f))&&(e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,v.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[d]=new rs(f,v.type,m,v.size,v.semantic)}for(var c=d;c<s.length;c++)e.deleteBuffer(s[c].buffer);s.length=d}this.isUseIndices()&&(r||a)&&(l||(l=new is(e.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(Qe.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(Qe.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));Qe.STATIC_DRAW=P.STATIC_DRAW;Qe.DYNAMIC_DRAW=P.DYNAMIC_DRAW;Qe.STREAM_DRAW=P.STREAM_DRAW;Qe.AttributeBuffer=rs;Qe.IndicesBuffer=is;Qe.Attribute=Mr;var qe=S.create,pr=S.add,Kt=S.set,gt=Qe.Attribute,re=Qe.extend(function(){return{attributes:{position:new gt("position","float",3,"POSITION"),texcoord0:new gt("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new gt("texcoord1","float",2,"TEXCOORD_1"),normal:new gt("normal","float",3,"NORMAL"),tangent:new gt("tangent","float",4,"TANGENT"),color:new gt("color","float",4,"COLOR"),weight:new gt("weight","float",3,"WEIGHT"),joint:new gt("joint","float",4,"JOINT"),barycentric:new gt("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new He);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,i=e.max,n=r.array,a=i.array;S.set(n,t[0],t[1],t[2]),S.set(a,t[0],t[1],t[2]);for(var o=3;o<t.length;){var s=t[o++],l=t[o++],u=t[o++];s<n[0]&&(n[0]=s),l<n[1]&&(n[1]=l),u<n[2]&&(n[2]=u),s>a[0]&&(a[0]=s),l>a[1]&&(a[1]=l),u>a[2]&&(a[2]=u)}r._dirty=!0,i._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value;if(!i||i.length!==r.length)i=t.normal.value=new le.Float32Array(r.length);else for(var n=0;n<i.length;n++)i[n]=0;for(var a=qe(),o=qe(),s=qe(),l=qe(),u=qe(),h=qe(),c=e?e.length:this.vertexCount,d,f,v,p=0;p<c;){e?(d=e[p++],f=e[p++],v=e[p++]):(d=p++,f=p++,v=p++),Kt(a,r[d*3],r[d*3+1],r[d*3+2]),Kt(o,r[f*3],r[f*3+1],r[f*3+2]),Kt(s,r[v*3],r[v*3+1],r[v*3+2]),S.sub(l,a,o),S.sub(u,o,s),S.cross(h,l,u);for(var n=0;n<3;n++)i[d*3+n]=i[d*3+n]+h[n],i[f*3+n]=i[f*3+n]+h[n],i[v*3+n]=i[v*3+n]+h[n]}for(var n=0;n<i.length;)Kt(h,i[n],i[n+1],i[n+2]),S.normalize(h,h),i[n++]=h[0],i[n++]=h[1],i[n++]=h[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value,n=qe(),a=qe(),o=qe(),s=qe(),l=qe(),u=qe();i||(i=t.normal.value=new Float32Array(r.length));for(var h=e?e.length:this.vertexCount,c,d,f,v=0;v<h;){e?(c=e[v++],d=e[v++],f=e[v++]):(c=v++,d=v++,f=v++),Kt(n,r[c*3],r[c*3+1],r[c*3+2]),Kt(a,r[d*3],r[d*3+1],r[d*3+2]),Kt(o,r[f*3],r[f*3+1],r[f*3+2]),S.sub(s,n,a),S.sub(l,a,o),S.cross(u,s,l),S.normalize(u,u);for(var p=0;p<3;p++)i[c*3+p]=u[p],i[d*3+p]=u[p],i[f*3+p]=u[p]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,i=t.position.value,n=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var o=[],s=[],l=0;l<e;l++)o[l]=[0,0,0],s[l]=[0,0,0];for(var u=[0,0,0],h=[0,0,0],c=this.indices,d=c?c.length:this.vertexCount,f,v,p,l=0;l<d;){c?(f=c[l++],v=c[l++],p=c[l++]):(f=l++,v=l++,p=l++);var m=r[f*2],g=r[v*2],T=r[p*2],x=r[f*2+1],_=r[v*2+1],b=r[p*2+1],w=i[f*3],A=i[v*3],E=i[p*3],M=i[f*3+1],I=i[v*3+1],C=i[p*3+1],B=i[f*3+2],z=i[v*3+2],O=i[p*3+2],U=A-w,j=E-w,Y=I-M,k=C-M,Z=z-B,D=O-B,q=g-m,Q=T-m,J=_-x,oe=b-x,ie=1/(q*oe-J*Q);u[0]=(oe*U-J*j)*ie,u[1]=(oe*Y-J*k)*ie,u[2]=(oe*Z-J*D)*ie,h[0]=(q*j-Q*U)*ie,h[1]=(q*k-Q*Y)*ie,h[2]=(q*D-Q*Z)*ie,pr(o[f],o[f],u),pr(o[v],o[v],u),pr(o[p],o[p],u),pr(s[f],s[f],h),pr(s[v],s[v],h),pr(s[p],s[p],h)}for(var Me=qe(),ye=qe(),we=qe(),l=0;l<e;l++){we[0]=a[l*3],we[1]=a[l*3+1],we[2]=a[l*3+2];var je=o[l];S.scale(Me,we,S.dot(we,je)),S.sub(Me,je,Me),S.normalize(Me,Me),S.cross(ye,we,je),n[l*4]=Me[0],n[l*4+1]=Me[1],n[l*4+2]=Me[2],n[l*4+3]=S.dot(ye,s[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new le.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),i={},n=0;n<r.length;n++){var a=r[n];i[a]=e[a].value,e[a].init(this.indices.length)}for(var o=0,s=0;s<t.length;s++){for(var l=t[s],n=0;n<r.length;n++)for(var a=r[n],u=e[a].value,h=e[a].size,c=0;c<h;c++)u[o*h+c]=i[a][l*h+c];t[s]=o,o++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var i=0;i<(r?r.length:this.vertexCount/3);)for(var n=0;n<3;n++){var a=r?r[i++]:i*3+n;t[a*3+n]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,i=t.normal.value,n=t.tangent.value;e=e.array;var a=R.create();R.invert(a,e),R.transpose(a,a);var o=S.transformMat4,s=S.forEach;s(r,3,0,null,o,e),i&&s(i,3,0,null,o,a),n&&s(n,4,0,null,o,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});re.STATIC_DRAW=Qe.STATIC_DRAW;re.DYNAMIC_DRAW=Qe.DYNAMIC_DRAW;re.STREAM_DRAW=Qe.STREAM_DRAW;re.AttributeBuffer=Qe.AttributeBuffer;re.IndicesBuffer=Qe.IndicesBuffer;re.Attribute=gt;const bu=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`;var ut="uniform vec3 ",jr="uniform float ",mr="@export clay.header.",gr="@end",Ue=":unconfigurable;";const Su=[mr+"directional_light",ut+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+Ue,ut+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+Ue,gr,mr+"ambient_light",ut+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+Ue,gr,mr+"ambient_sh_light",ut+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+Ue,ut+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+Ue,bu,gr,mr+"ambient_cubemap_light",ut+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ue,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ue,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ue,gr,mr+"point_light",ut+"pointLightPosition[POINT_LIGHT_COUNT]"+Ue,jr+"pointLightRange[POINT_LIGHT_COUNT]"+Ue,ut+"pointLightColor[POINT_LIGHT_COUNT]"+Ue,gr,mr+"spot_light",ut+"spotLightPosition[SPOT_LIGHT_COUNT]"+Ue,ut+"spotLightDirection[SPOT_LIGHT_COUNT]"+Ue,jr+"spotLightRange[SPOT_LIGHT_COUNT]"+Ue,jr+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+Ue,jr+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+Ue,jr+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+Ue,ut+"spotLightColor[SPOT_LIGHT_COUNT]"+Ue,gr].join(`
`);G.import(Su);var ft=yt.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=yt.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),ri=function(e,t){this.normal=e||new L(0,1,0),this.distance=t||0};ri.prototype={constructor:ri,distanceToPoint:function(e){return S.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new L);var r=this.distanceToPoint(e);return S.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/S.len(this.normal.array);S.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,i=S.dot(t[0].array,r)>this.distance,n=1;n<8;n++)if(S.dot(t[n].array,r)>this.distance!=i)return!0},intersectLine:function(){var e=S.create();return function(t,r,i){var n=this.distanceToPoint(t),a=this.distanceToPoint(r);if(n>0&&a>0||n<0&&a<0)return null;var o=this.normal.array,s=this.distance,l=t.array;S.sub(e,r.array,t.array),S.normalize(e,e);var u=S.dot(o,e);if(u===0)return null;i||(i=new L);var h=(S.dot(o,l)-s)/u;return S.scaleAndAdd(i.array,l,e,-h),i._dirty=!0,i}}(),applyTransform:function(){var e=R.create(),t=N.create(),r=N.create();return r[3]=1,function(i){i=i.array,S.scale(r,this.normal.array,this.distance),N.transformMat4(r,r,i),this.distance=S.dot(r,this.normal.array),R.invert(e,i),R.transpose(e,e),t[3]=0,S.copy(t,this.normal.array),N.transformMat4(t,t,e),S.copy(this.normal.array,t)}}(),copy:function(e){S.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new ri;return e.copy(this),e}};var be=S.set,Ja=S.copy,eo=S.transformMat4,En=Math.min,An=Math.max,en=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new ri);this.boundingBox=new He,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=S.fromValues(0,0,0)};en.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,i=r[0],n=r[1],a=r[2],o=r[3],s=r[4],l=r[5],u=r[6],h=r[7],c=r[8],d=r[9],f=r[10],v=r[11],p=r[12],m=r[13],g=r[14],T=r[15];be(t[0].normal.array,o-i,h-s,v-c),t[0].distance=-(T-p),t[0].normalize(),be(t[1].normal.array,o+i,h+s,v+c),t[1].distance=-(T+p),t[1].normalize(),be(t[2].normal.array,o+n,h+l,v+d),t[2].distance=-(T+m),t[2].normalize(),be(t[3].normal.array,o-n,h-l,v-d),t[3].distance=-(T-m),t[3].normalize(),be(t[4].normal.array,o-a,h-u,v-f),t[4].distance=-(T-g),t[4].normalize(),be(t[5].normal.array,o+a,h+u,v+f),t[5].distance=-(T+g),t[5].normalize();var x=this.boundingBox,_=this.vertices;if(T===0){var b=l/i,w=-g/(f-1),A=-g/(f+1),E=-A/l,M=-w/l;x.min.set(-E*b,-E,A),x.max.set(E*b,E,w),be(_[0],-E*b,-E,A),be(_[1],-E*b,E,A),be(_[2],E*b,-E,A),be(_[3],E*b,E,A),be(_[4],-M*b,-M,w),be(_[5],-M*b,M,w),be(_[6],M*b,-M,w),be(_[7],M*b,M,w)}else{var I=(-1-p)/i,C=(1-p)/i,B=(1-m)/l,z=(-1-m)/l,O=(-1-g)/f,U=(1-g)/f;x.min.set(Math.min(I,C),Math.min(z,B),Math.min(U,O)),x.max.set(Math.max(C,I),Math.max(B,z),Math.max(O,U));var j=x.min.array,Y=x.max.array;be(_[0],j[0],j[1],j[2]),be(_[1],j[0],Y[1],j[2]),be(_[2],Y[0],j[1],j[2]),be(_[3],Y[0],Y[1],j[2]),be(_[4],j[0],j[1],Y[2]),be(_[5],j[0],Y[1],Y[2]),be(_[6],Y[0],j[1],Y[2]),be(_[7],Y[0],Y[1],Y[2])}},getTransformedBoundingBox:function(){var e=S.create();return function(t,r){var i=this.vertices,n=r.array,a=t.min,o=t.max,s=a.array,l=o.array,u=i[0];eo(e,u,n),Ja(s,e),Ja(l,e);for(var h=1;h<8;h++)u=i[h],eo(e,u,n),s[0]=En(e[0],s[0]),s[1]=En(e[1],s[1]),s[2]=En(e[2],s[2]),l[0]=An(e[0],l[0]),l[1]=An(e[1],l[1]),l[2]=An(e[2],l[2]);return a._dirty=!0,o._dirty=!0,t}}()};var Cr=yt.extend(function(){return{projectionMatrix:new H,invProjectionMatrix:new H,viewMatrix:new H,frustum:new en}},function(){this.update(!0)},{update:function(e){yt.prototype.update.call(this,e),H.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),H.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){H.copy(this.viewMatrix,e),H.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){H.copy(this.projectionMatrix,e),H.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=N.create();return function(t,r){var i=r!==void 0?r:new or,n=t.array[0],a=t.array[1];return N.set(e,n,a,-1,1),N.transformMat4(e,e,this.invProjectionMatrix.array),N.transformMat4(e,e,this.worldTransform.array),S.scale(i.origin.array,e,1/e[3]),N.set(e,n,a,1,1),N.transformMat4(e,e,this.invProjectionMatrix.array),N.transformMat4(e,e,this.worldTransform.array),S.scale(e,e,1/e[3]),S.sub(i.direction.array,e,i.origin.array),S.normalize(i.direction.array,i.direction.array),i.direction._dirty=!0,i.origin._dirty=!0,i}}()}),Eu=R.create(),to=R.create(),Ln={};function Au(e){var t=[],r=Object.keys(e);r.sort();for(var i=0;i<r.length;i++){var n=r[i];t.push(n+" "+e[n])}var a=t.join(`
`);if(Ln[a])return Ln[a];var o=Se.genGUID();return Ln[a]=o,o}function tn(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}tn.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};tn.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};tn.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var Wt=yt.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new He,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new cr(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof Cr?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof ft&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof Cr?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof ft&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var i=e[r];if(!i.invisible){var n=i.group;t[n]||(t[n]={}),t[n][i.type]=t[n][i.type]||0,t[n][i.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=Au(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function i(n,a){r[n.__uid__]=a;for(var o=0;o<n._children.length;o++){var s=n._children[o],l=a._children[o];i(s,l)}}return i(e,t),t.traverse(function(n){n.skeleton&&(n.skeleton=n.skeleton.clone(r)),n.material&&(n.material=n.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,i=this._renderLists.get(r);i||(i=new tn,this._renderLists.put(r,i)),i.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var n=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,n,i,t),i.endCount(),i},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,i,n){if(!e.invisible)for(var a=0;a<e._children.length;a++){var o=e._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?Eu:o.worldTransform.array,l=o.geometry;R.multiplyAffine(to,t.viewMatrix.array,s),(n&&!l.boundingBox||!this.isFrustumCulled(o,t,to))&&i.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,t,r,i,n)}},isFrustumCulled:function(){var e=new He,t=new H;return function(r,i,n){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=n,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(i.frustum.boundingBox))return!0;t.array=i.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(Lu);var t=this._lightUniforms;for(var r in t)for(var i in t[r])t[r][i].value.length=0;for(var n=0;n<e.length;n++){var a=e[n];if(!a.invisible){var r=a.group;for(var i in a.uniformTemplates){var o=a.uniformTemplates[i],s=o.value(a);if(s!=null){t[r]||(t[r]={}),t[r][i]||(t[r][i]={type:"",value:[]});var l=t[r][i];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var u=0;u<s.length;u++)l.value.push(s[u]);break;default:console.error("Unkown light uniform type "+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var i in r[e])if(!t[e]||r[e][i]!==t[e][i])return!0;for(var i in t[e])if(!r[e]||r[e][i]!==t[e][i])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,i){for(var n in t){var a=t[n];if(a.type==="tv"){if(!r.hasUniform(n))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],u=r.takeCurrentTextureSlot(i,l);o.push(u)}r.setUniform(i.gl,"1iv",n,o)}else r.setUniform(i.gl,a.type,n,a.value)}}return function(t,r,i){e(this._lightUniforms[r],t,i),e(this.shadowUniforms,t,i)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function Lu(e,t){if(t.castShadow&&!e.castShadow)return!0}var Li=mi.isPowerOfTwo,Mu=["px","nx","py","ny","pz","nz"],sr=V.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var n=e.getGLExtension("EXT_texture_filter_anisotropic");if(n&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var a=e.getGLExtension("OES_texture_half_float");a||(i=P.FLOAT)}if(this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(t,u,l,o,s,r,i),o/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,i,n,a,o){for(var s=0;s<6;s++){var l=Mu[s],u=t.image&&t.image[l];u?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,a,o,u):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,i,n,0,a,o,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?Li(this.image.px.width)&&Li(this.image.px.height):Li(this.width)&&Li(this.height)},isRenderable:function(){return this.image.px?_r(this.image.px)&&_r(this.image.nx)&&_r(this.image.py)&&_r(this.image.ny)&&_r(this.image.pz)&&_r(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,i=this;return Se.each(e,function(n,a){var o=le.createImage();t&&(o.crossOrigin=t),o.onload=function(){r--,r===0&&(i.dirty(),i.trigger("success",i))},o.onerror=function(){r--},r++,o.src=n,i.image[a]=o}),this}});Object.defineProperty(sr.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(sr.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function _r(e){return e.width>0&&e.height>0}var Ie=Cr.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=Cr.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}}),Mi="framebuffer",Lt="renderbuffer",ro=Lt+"_width",io=Lt+"_height",Mn=Lt+"_attached",Cn="depthtexture_attached",$t=P.FRAMEBUFFER,Zr=P.RENDERBUFFER,Qr=P.DEPTH_ATTACHMENT,ns=P.COLOR_ATTACHMENT0,Ee=We.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Lr,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer($t,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var i=!1,n,a;for(var o in this._textures){i=!0;var s=this._textures[o];s&&(n=s.texture.width,a=s.texture.height,this._doAttach(e,s.texture,o,s.target))}this._width=n,this._height=a,!i&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,n,a,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var u=l[o];this._doDetach(t,o,u)}}if(!r.get(Cn)&&this.depthBuffer){r.miss(Lt)&&r.put(Lt,t.createRenderbuffer());var h=r.get(Lt);(n!==r.get(ro)||a!==r.get(io))&&(t.bindRenderbuffer(Zr,h),t.renderbufferStorage(Zr,t.DEPTH_COMPONENT16,n,a),r.put(ro,n),r.put(io,a),t.bindRenderbuffer(Zr,null)),r.get(Mn)||(t.framebufferRenderbuffer($t,Qr,Zr,h),r.put(Mn,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer($t,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var i=this._textures[r];if(i){var n=i.texture;if(!n.NPOT&&n.useMipmap&&n.minFilter===V.LINEAR_MIPMAP_LINEAR){var a=n.textureType==="textureCube"?P.TEXTURE_CUBE_MAP:P.TEXTURE_2D;t.bindTexture(a,n.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus($t)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(Mi)&&t.put(Mi,e.gl.createFramebuffer()),t.get(Mi)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||ns,r=r||P.TEXTURE_2D;var i=this._boundRenderer,n=i&&i.gl,a;if(n){var o=this._cache;o.use(i.__uid__),a=o.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===r&&s.texture===e&&a&&a[t]!=null)){var l=!0;i&&(l=this._doAttach(i,e,t,r),this.viewport||i.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,i){var n=e.gl,a=t.getWebGLTexture(e),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===t&&s.target===i)return}r=+r;var l=!0;if(r===Qr||r===P.DEPTH_STENCIL_ATTACHMENT){var u=e.getGLExtension("WEBGL_depth_texture");if(u||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==P.DEPTH_COMPONENT&&t.format!==P.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var h=this._cache.get(Lt);h&&(n.framebufferRenderbuffer($t,Qr,Zr,null),n.deleteRenderbuffer(h),this._cache.put(Lt,!1)),this._cache.put(Mn,!1),this._cache.put(Cn,!0)}}return n.framebufferTexture2D($t,r,i,a,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=t,o[r].target=i,l},_doDetach:function(e,t,r){e.framebufferTexture2D($t,t,r,null,0);var i=this._cache.get("attached_textures");i&&i[t]&&(i[t]=null),(t===Qr||t===P.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(Cn,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var i=r.get(Lt);i&&t.deleteRenderbuffer(i);var n=r.get(Mi);n&&t.deleteFramebuffer(n),r.deleteContext(e.__uid__),this._textures={}}});Ee.DEPTH_ATTACHMENT=Qr;Ee.COLOR_ATTACHMENT0=ns;Ee.STENCIL_ATTACHMENT=P.STENCIL_ATTACHMENT;Ee.DEPTH_STENCIL_ATTACHMENT=P.DEPTH_STENCIL_ATTACHMENT;var Cu=["px","nx","py","ny","pz","nz"],la=We.extend(function(){var e={position:new L,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Ie({fov:90}),nx:new Ie({fov:90}),py:new Ie({fov:90}),ny:new Ie({fov:90}),pz:new Ie({fov:90}),nz:new Ie({fov:90})};return t.px.lookAt(L.POSITIVE_X,L.NEGATIVE_Y),t.nx.lookAt(L.NEGATIVE_X,L.NEGATIVE_Y),t.py.lookAt(L.POSITIVE_Y,L.POSITIVE_Z),t.ny.lookAt(L.NEGATIVE_Y,L.NEGATIVE_Z),t.pz.lookAt(L.POSITIVE_Z,L.NEGATIVE_Y),t.nz.lookAt(L.NEGATIVE_Z,L.NEGATIVE_Y),e._frameBuffer=new Ee,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var i=e.gl;r||t.update();for(var n=this.texture.width,a=2*Math.atan(n/(n-.5))/Math.PI*180,o=0;o<6;o++){var s=Cu[o],l=this._cameras[s];if(L.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var u=t.getBoundingBox();u.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),rn=re.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,i=[],n=[],a=[],o=[],s=0;s<=e;s++)for(var l=s/e,u=0;u<=t;u++){var h=u/t;if(i.push([2*h-1,2*l-1,0]),n&&n.push([h,l]),a&&a.push([0,0,1]),u<t&&s<e){var c=u+s*(t+1);o.push([c,c+1,c+t+1]),o.push([c+t+1,c+1,c+t+2])}}r.position.fromArray(i),r.texcoord0.fromArray(n),r.normal.fromArray(a),this.initIndicesFromArray(o),this.boundingBox=new He,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),xe=new H,as=re.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:yr("px",this.depthSegments,this.heightSegments),nx:yr("nx",this.depthSegments,this.heightSegments),py:yr("py",this.widthSegments,this.depthSegments),ny:yr("ny",this.widthSegments,this.depthSegments),pz:yr("pz",this.widthSegments,this.heightSegments),nz:yr("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,i=0;for(var n in e)r+=e[n].vertexCount,i+=e[n].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new le.Uint16Array(i);var o=0,s=0;for(var n in e){for(var l=e[n],a=0;a<t.length;a++)for(var u=t[a],h=l.attributes[u].value,c=l.attributes[u].size,d=u==="normal",f=0;f<h.length;f++){var v=h[f];this.inside&&d&&(v=-v),this.attributes[u].value[f+c*s]=v}for(var p=l.indices.length,f=0;f<l.indices.length;f++)this.indices[f+o]=s+l.indices[this.inside?p-f-1:f];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new He,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function yr(e,t,r){xe.identity();var i=new rn({widthSegments:t,heightSegments:r});switch(e){case"px":H.translate(xe,xe,L.POSITIVE_X),H.rotateY(xe,xe,Math.PI/2);break;case"nx":H.translate(xe,xe,L.NEGATIVE_X),H.rotateY(xe,xe,-Math.PI/2);break;case"py":H.translate(xe,xe,L.POSITIVE_Y),H.rotateX(xe,xe,-Math.PI/2);break;case"ny":H.translate(xe,xe,L.NEGATIVE_Y),H.rotateX(xe,xe,Math.PI/2);break;case"pz":H.translate(xe,xe,L.POSITIVE_Z);break;case"nz":H.translate(xe,xe,L.NEGATIVE_Z),H.rotateY(xe,xe,Math.PI);break}return i.applyTransform(xe),i}const Du=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;G.import(Du);var ai=Be.extend(function(){var e=new G({vertex:G.source("clay.skybox.vertex"),fragment:G.source("clay.skybox.fragment")}),t=new ot({shader:e,depthMask:!1});return{scene:null,geometry:new as,material:t,environmentMap:null,culling:!1,_dummyCamera:new Ie}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=V.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),H.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}}),Pu=542327876,Nu=131072,Ru=512,Ou=4;function ua(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var Iu=31,Bu=ua("DXT1"),Fu=ua("DXT3"),Vu=ua("DXT5"),zu=0,Gu=1,Uu=2,Hu=3,ku=4,Wu=7,Xu=20,ju=21,Zu=28,qu={parse:function(e,t){var r=new Int32Array(e,0,Iu);if(r[zu]!==Pu||!r(Xu)&Ou)return null;var i=r(ju),n=r[ku],a=r[Hu],o=r[Zu]&Ru,s=r[Uu]&Nu,l,u;switch(i){case Bu:l=8,u=V.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Fu:l=16,u=V.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Vu:l=16,u=V.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var h=r[Gu]+4,c=o?6:1,d=1;s&&(d=Math.max(1,r[Wu]));for(var f=[],v=0;v<c;v++){var p=n,m=a;f[v]=new ee({width:p,height:m,format:u});for(var g=[],T=0;T<d;T++){var x=Math.max(4,p)/4*Math.max(4,m)/4*l,_=new Uint8Array(e,h,x);h+=x,p*=.5,m*=.5,g[T]=_}f[v].pixels=g[0],s&&(f[v].mipmaps=g)}if(t)t.width=f[0].width,t.height=f[0].height,t.format=f[0].format,t.pixels=f[0].pixels,t.mipmaps=f[0].mipmaps;else return f[0]}},Fi=String.fromCharCode,Yu=8,Ku=32767;function $u(e,t,r,i){if(e[3]>0){var n=Math.pow(2,e[3]-128-8+i);t[r+0]=e[0]*n,t[r+1]=e[1]*n,t[r+2]=e[2]*n}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function Qu(e,t,r){for(var i="",n=t;n<r;n++)i+=Fi(e[n]);return i}function Ju(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function no(e,t,r,i){for(var n=0,a=0,o=i;o>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var s=e[a][3]<<n>>>0;s>0;s--)Ju(e[a-1],e[a]),a++,o--;n+=8}else a++,o--,n=0;return r}function eh(e,t,r,i){if(i<Yu|i>Ku)return no(e,t,r,i);var n=t[r++];if(n!=2)return no(e,t,r-1,i);if(e[0][1]=t[r++],e[0][2]=t[r++],n=t[r++],(e[0][2]<<8>>>0|n)>>>0!==i)return null;for(var n=0;n<4;n++)for(var a=0;a<i;){var o=t[r++];if(o>128){o=(o&127)>>>0;for(var s=t[r++];o--;)e[a++][n]=s}else for(;o--;)e[a++][n]=t[r++]}return r}var th={parseRGBE:function(e,t,r){r==null&&(r=0);var i=new Uint8Array(e),n=i.length;if(Qu(i,0,2)==="#?"){for(var a=2;a<n&&!(Fi(i[a])===`
`&&Fi(i[a+1])===`
`);a++);if(!(a>=n)){a+=2;for(var o="";a<n;a++){var s=Fi(i[a]);if(s===`
`)break;o+=s}var l=o.split(" "),u=parseInt(l[1]),h=parseInt(l[3]);if(!(!h||!u)){for(var c=a+1,d=[],f=0;f<h;f++){d[f]=[];for(var v=0;v<4;v++)d[f][v]=0}for(var p=new Float32Array(h*u*4),m=0,g=0;g<u;g++){var c=eh(d,i,c,h);if(!c)return null;for(var f=0;f<h;f++)$u(d[f],p,m,r),m+=4}return t||(t=new ee),t.width=h,t.height=u,t.pixels=p,t.type=V.FLOAT,t}}}},parseRGBEFromPNG:function(e){}},xt={loadTexture:function(e,t,r,i){var n;if(typeof t=="function"?(r=t,i=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return n=new ee({width:0,height:0,sRGB:!1}),xt._fetchTexture(e,function(a){th.parseRGBE(a,n,t.exposure),n.dirty(),r&&r(n)},i),n;e.match(/.dds$/)||t.fileType==="dds"?(n=new ee({width:0,height:0}),xt._fetchTexture(e,function(a){qu.parse(a,n),n.dirty(),r&&r(n)},i)):(n=new ee,n.load(e),n.success(r),n.error(i))}else typeof e=="object"&&typeof e.px<"u"&&(n=new sr,n.load(e),n.success(r),n.error(i));return n},loadPanorama:function(e,t,r,i,n,a){var o=this;typeof i=="function"?(n=i,a=n,i={}):i=i||{},xt.loadTexture(t,i,function(s){s.flipY=i.flipY||!1,o.panoramaToCubeMap(e,s,r,i),s.dispose(e),n&&n(r)},a)},panoramaToCubeMap:function(e,t,r,i){var n=new la,a=new ai({scene:new Wt});return a.setEnvironmentMap(t),i=i||{},i.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,n.texture=r,n.render(e,a.scene),n.texture=null,n.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),i=r.width=e.width,n=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,i,n),t=t||!1;for(var o=a.getImageData(0,0,i,n),s=a.createImageData(i,n),l=0;l<o.data.length;l+=4){if(t){var u=o.data[l],h=o.data[l+1],c=o.data[l+2],d=Math.abs(u-h)+Math.abs(h-c);if(d>20)return console.warn("Given image is not a height map"),e}var f,v,p,m;l%(i*4)===0?(f=o.data[l],p=o.data[l+4]):l%(i*4)===(i-1)*4?(f=o.data[l-4],p=o.data[l]):(f=o.data[l-4],p=o.data[l+4]),l<i*4?(v=o.data[l],m=o.data[l+i*4]):l>i*(n-1)*4?(v=o.data[l-i*4],m=o.data[l]):(v=o.data[l-i*4],m=o.data[l+i*4]),s.data[l]=f-p+127,s.data[l+1]=v-m+127,s.data[l+2]=255,s.data[l+3]=255}return a.putImageData(s,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var i=document.createElement("canvas"),n=i.getContext("2d"),a=t||32;r=r||20,i.width=i.height=a,n.drawImage(e,0,0,a,a);for(var o=n.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var l=o.data[s],u=o.data[s+1],h=o.data[s+2],c=Math.abs(l-u)+Math.abs(u-h);if(c>r)return!1}return!0},_fetchTexture:function(e,t,r){le.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,i){e=e||512,t=t||64,r=r||"black",i=i||"white";var n=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var o=a.getContext("2d");o.fillStyle=i,o.fillRect(0,0,e,e),o.fillStyle=r;for(var s=0;s<n;s++)for(var l=0;l<n;l++){var u=l%2?s%2:s%2-1;u&&o.fillRect(s*t,l*t,t,t)}var h=new ee({image:a,anisotropic:8});return h},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var i=new ee({image:t});return i}},Zn=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function qn(e){return"_on"+e}var Yn=function(e){var t=this;this._texture=new ee({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),ee.prototype.dispose.call(this,r)}}),Zn.forEach(function(r){this[qn(r)]=function(i){i.triangle&&this._meshes.forEach(function(n){this.dispatchEvent(r,n,i.triangle,i.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};Yn.prototype={constructor:Yn,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,i=e.getZr(),n=i.__oldRefreshImmediately||i.refreshImmediately;i.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},i.__oldRefreshImmediately=n}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new L,t=new L,r=new L,i=new $,n=new $,a=new $,o=new $,s=new L;return function(l,u,h,c){var d=u.geometry,f=d.attributes.position,v=d.attributes.texcoord0,p=L.dot,m=L.cross;f.get(h[0],e.array),f.get(h[1],t.array),f.get(h[2],r.array),v.get(h[0],i.array),v.get(h[1],n.array),v.get(h[2],a.array),m(s,t,r);var g=p(e,s),T=p(c,s)/g;m(s,r,e);var x=p(c,s)/g;m(s,e,t);var _=p(c,s)/g;$.scale(o,i,T),$.scaleAndAdd(o,o,n,x),$.scaleAndAdd(o,o,a,_);var b=o.x*this._chart.getWidth(),w=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:b,zrY:w})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(Zn.forEach(function(t){e.on(t,this[qn(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),Zn.forEach(function(r){e.off(r,this[qn(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var Dr=Cr.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=Cr.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}});const rh=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;G.import(rh);var ih=new rn,ao=new Be({geometry:ih,frustumCulling:!1}),nh=new Dr,Le=We.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new G(G.source("clay.compositor.vertex"),this.fragment),t=new ot({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||P.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var i=this.outputs[r];i&&t.attach(i,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var i=e.getGLExtension("EXT_draw_buffers");if(i&&this.outputs){var n=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&n.push(a);i.drawBuffersEXT(n)}}this.trigger("beforerender",this,e);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o=o|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){ao.material=this.material,e.renderPass([ao],nh)},dispose:function(e){}});const ah=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,oh=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`;var Tt={},Dn=["px","nx","py","ny","pz","nz"];Tt.prefilterEnvironmentMap=function(e,t,r,i,n){(!n||!i)&&(i=Tt.generateNormalDistribution(),n=Tt.integrateBRDF(e,i)),r=r||{};var a=r.width||64,o=r.height||64,s=r.type||t.type,l=new sr({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,o),h=Math.log(u)/Math.log(2)+1,c=new ot({shader:new G({vertex:G.source("clay.skybox.vertex"),fragment:oh})});c.set("normalDistribution",i),r.encodeRGBM&&c.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&c.define("fragment","RGBM_DECODE");var d=new Wt,f;if(t.textureType==="texture2D"){var v=new sr({width:a,height:o,type:s===V.FLOAT?V.HALF_FLOAT:s});xt.panoramaToCubeMap(e,t,v,{encodeRGBM:r.decodeRGBM}),t=v}f=new ai({scene:d,material:c}),f.material.set("environmentMap",t);var p=new la({texture:l});r.encodeRGBM&&(s=l.type=V.UNSIGNED_BYTE);for(var m=new ee({width:a,height:o,type:s}),g=new Ee({depthBuffer:!1}),T=le[s===V.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],x=0;x<h;x++){l.mipmaps[x]={pixels:{}},f.material.set("roughness",x/(h-1));for(var _=m.width,b=2*Math.atan(_/(_-.5))/Math.PI*180,w=0;w<Dn.length;w++){var A=new T(m.width*m.height*4);g.attach(m),g.bind(e);var E=p.getCamera(Dn[w]);E.fov=b,e.render(d,E),e.gl.readPixels(0,0,m.width,m.height,V.RGBA,s,A),g.unbind(e),l.mipmaps[x].pixels[Dn[w]]=A}m.width/=2,m.height/=2,m.dirty()}return g.dispose(e),m.dispose(e),f.dispose(e),i.dispose(e),{environmentMap:l,brdfLookup:n,normalDistribution:i,maxMipmapLevel:h}};Tt.integrateBRDF=function(e,t){t=t||Tt.generateNormalDistribution();var r=new Ee({depthBuffer:!1}),i=new Le({fragment:ah}),n=new ee({width:512,height:256,type:V.HALF_FLOAT,wrapS:V.CLAMP_TO_EDGE,wrapT:V.CLAMP_TO_EDGE,minFilter:V.NEAREST,magFilter:V.NEAREST,useMipmap:!1});return i.setUniform("normalDistribution",t),i.setUniform("viewportSize",[512,256]),i.attachOutput(n),i.render(e,r),r.dispose(e),n};Tt.generateNormalDistribution=function(r,i){for(var r=r||256,i=i||1024,n=new ee({width:r,height:i,type:V.FLOAT,minFilter:V.NEAREST,magFilter:V.NEAREST,wrapS:V.CLAMP_TO_EDGE,wrapT:V.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(i*r*4),o=[],s=0;s<r;s++){for(var l=s/r,u=l*l,h=0;h<i;h++){var c=(h<<16|h>>>16)>>>0;c=((c&1431655765)<<1|(c&2863311530)>>>1)>>>0,c=((c&858993459)<<2|(c&3435973836)>>>2)>>>0,c=((c&252645135)<<4|(c&4042322160)>>>4)>>>0,c=(((c&16711935)<<8|(c&4278255360)>>>8)>>>0)/4294967296;var d=Math.sqrt((1-c)/(1+(u*u-1)*c));o[h]=d}for(var h=0;h<i;h++){var f=(h*r+s)*4,d=o[h],v=Math.sqrt(1-d*d),p=h/i,m=2*Math.PI*p;a[f]=v*Math.cos(m),a[f+1]=d,a[f+2]=v*Math.sin(m),a[f+3]=1}}return n.pixels=a,n};var sh=ft.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=Tt.generateNormalDistribution(),this._brdfLookup=Tt.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var i=Tt.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=i.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}}),lh=ft.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new le.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}}),os={},nr=["px","nx","py","ny","pz","nz"];function uh(e,t){var r=e[0],i=e[1],n=e[2];return t===0?1:t===1?r:t===2?i:t===3?n:t===4?r*n:t===5?i*n:t===6?r*i:t===7?3*n*n-1:r*r-i*i}var hh={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function ch(e,t,r,i){for(var n=new le.Float32Array(27),a=S.create(),o=S.create(),s=S.create(),l=0;l<9;l++){for(var u=S.create(),h=0;h<nr.length;h++){for(var c=t[nr[h]],d=S.create(),f=0,v=0,p=hh[nr[h]],m=0;m<i;m++)for(var g=0;g<r;g++){a[0]=g/(r-1)*2-1,a[1]=m/(i-1)*2-1,a[2]=-1,S.normalize(a,a),s[0]=a[p[0]]*p[3],s[1]=a[p[1]]*p[4],s[2]=a[p[2]]*p[5],o[0]=c[v++]/255,o[1]=c[v++]/255,o[2]=c[v++]/255;var T=c[v++]/255*8.12;o[0]*=T,o[1]*=T,o[2]*=T,S.scaleAndAdd(d,d,o,uh(s,l)*-a[2]),f+=-a[2]}S.scaleAndAdd(u,u,d,1/f)}n[l*3]=u[0]/6,n[l*3+1]=u[1]/6,n[l*3+2]=u[2]/6}return n}os.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var i,n=new Wt,a=64;t.textureType==="texture2D"?i=new ai({scene:n,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,i=new ai({scene:n,environmentMap:t}));var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new ee({width:o,height:s}),u=new Ee;i.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&i.material.define("fragment","RGBM_DECODE"),i.material.set("lod",r.lod);for(var h=new la({texture:l}),c={},d=0;d<nr.length;d++){c[nr[d]]=new Uint8Array(o*s*4);var f=h.getCamera(nr[d]);f.fov=90,u.attach(l),u.bind(e),e.render(n,f),e.gl.readPixels(0,0,o,s,V.RGBA,V.UNSIGNED_BYTE,c[nr[d]]),u.unbind(e)}return i.dispose(e),u.dispose(e),l.dispose(e),ch(e,c,o,s)};var te={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return wt(t.dataIndex)?ba(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return wt(t.name)?ba(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}},fh=re.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,i=this.attributes.texcoord0,n=this.attributes.normal,a=(t+1)*(e+1);r.init(a),i.init(a),n.init(a);var o=a>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),l,u,h,c,d,f,v,x=this.radius,p=this.phiStart,m=this.phiLength,g=this.thetaStart,T=this.thetaLength,x=this.radius,_=[],b=[],w=0,A=1/x;for(v=0;v<=e;v++)for(f=0;f<=t;f++)c=f/t,d=v/e,l=-x*Math.cos(p+c*m)*Math.sin(g+d*T),u=x*Math.cos(g+d*T),h=x*Math.sin(p+c*m)*Math.sin(g+d*T),_[0]=l,_[1]=u,_[2]=h,b[0]=c,b[1]=d,r.set(w,_),i.set(w,b),_[0]*=A,_[1]*=A,_[2]*=A,n.set(w,_),w++;var E,M,I,C,B=t+1,z=0;for(v=0;v<e;v++)for(f=0;f<t;f++)M=v*B+f,E=v*B+f+1,C=(v+1)*B+f+1,I=(v+1)*B+f,s[z++]=E,s[z++]=M,s[z++]=C,s[z++]=M,s[z++]=I,s[z++]=C;this.boundingBox=new He,this.boundingBox.max.set(x,x,x),this.boundingBox.min.set(-x,-x,-x)}}),dh=ft.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}}),vh=ft.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new L,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=ft.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),ph=ft.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=ft.prototype.clone.call(this);return e.range=this.range,e}}),mh=ft.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new L,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=ft.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),ae=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i||0,this.array=N.fromValues(e,t,r,i),this._dirty=!0};ae.prototype={constructor:ae,add:function(e){return N.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ae(this.x,this.y,this.z,this.w)},copy:function(e){return N.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return N.dist(this.array,e.array)},distance:function(e){return N.distance(this.array,e.array)},div:function(e){return N.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return N.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return N.dot(this.array,e.array)},len:function(){return N.len(this.array)},length:function(){return N.length(this.array)},lerp:function(e,t,r){return N.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return N.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return N.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return N.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return N.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return N.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return N.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return N.random(this.array,e),this._dirty=!0,this},scale:function(e){return N.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return N.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return N.sqrDist(this.array,e.array)},squaredDistance:function(e){return N.squaredDistance(this.array,e.array)},sqrLen:function(){return N.sqrLen(this.array)},squaredLength:function(){return N.squaredLength(this.array)},sub:function(e){return N.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return N.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return N.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return N.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var qr=Object.defineProperty;if(qr){var Ci=ae.prototype;qr(Ci,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),qr(Ci,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),qr(Ci,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),qr(Ci,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ae.add=function(e,t,r){return N.add(e.array,t.array,r.array),e._dirty=!0,e};ae.set=function(e,t,r,i,n){N.set(e.array,t,r,i,n),e._dirty=!0};ae.copy=function(e,t){return N.copy(e.array,t.array),e._dirty=!0,e};ae.dist=function(e,t){return N.distance(e.array,t.array)};ae.distance=ae.dist;ae.div=function(e,t,r){return N.divide(e.array,t.array,r.array),e._dirty=!0,e};ae.divide=ae.div;ae.dot=function(e,t){return N.dot(e.array,t.array)};ae.len=function(e){return N.length(e.array)};ae.lerp=function(e,t,r,i){return N.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};ae.min=function(e,t,r){return N.min(e.array,t.array,r.array),e._dirty=!0,e};ae.max=function(e,t,r){return N.max(e.array,t.array,r.array),e._dirty=!0,e};ae.mul=function(e,t,r){return N.multiply(e.array,t.array,r.array),e._dirty=!0,e};ae.multiply=ae.mul;ae.negate=function(e,t){return N.negate(e.array,t.array),e._dirty=!0,e};ae.normalize=function(e,t){return N.normalize(e.array,t.array),e._dirty=!0,e};ae.random=function(e,t){return N.random(e.array,t),e._dirty=!0,e};ae.scale=function(e,t,r){return N.scale(e.array,t.array,r),e._dirty=!0,e};ae.scaleAndAdd=function(e,t,r,i){return N.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};ae.sqrDist=function(e,t){return N.sqrDist(e.array,t.array)};ae.squaredDistance=ae.sqrDist;ae.sqrLen=function(e){return N.sqrLen(e.array)};ae.squaredLength=ae.sqrLen;ae.sub=function(e,t,r){return N.subtract(e.array,t.array,r.array),e._dirty=!0,e};ae.subtract=ae.sub;ae.transformMat4=function(e,t,r){return N.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};ae.transformQuat=function(e,t,r){return N.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};var se={};se.create=function(){var e=new Xe(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};se.clone=function(e){var t=new Xe(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};se.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};se.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};se.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};se.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*a-n*i;return o?(o=1/o,e[0]=a*o,e[1]=-i*o,e[2]=-n*o,e[3]=r*o,e):null};se.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};se.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};se.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],h=r[3];return e[0]=i*s+a*l,e[1]=n*s+o*l,e[2]=i*u+a*h,e[3]=n*u+o*h,e};se.mul=se.multiply;se.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=n*l+o*s,e[2]=i*-s+a*l,e[3]=n*-s+o*l,e};se.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1];return e[0]=i*s,e[1]=n*s,e[2]=a*l,e[3]=o*l,e};se.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};se.LDU=function(e,t,r,i){return e[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-e[2]*r[1],[e,t,r]};var Ke=function(){this.array=se.create(),this._dirty=!0};Ke.prototype={constructor:Ke,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Ke().copy(this)},copy:function(e){return se.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return se.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return se.determinant(this.array)},identity:function(){return se.identity(this.array),this._dirty=!0,this},invert:function(){return se.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return se.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return se.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return se.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return se.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return se.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return se.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return se.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ke.adjoint=function(e,t){return se.adjoint(e.array,t.array),e._dirty=!0,e};Ke.copy=function(e,t){return se.copy(e.array,t.array),e._dirty=!0,e};Ke.determinant=function(e){return se.determinant(e.array)};Ke.identity=function(e){return se.identity(e.array),e._dirty=!0,e};Ke.invert=function(e,t){return se.invert(e.array,t.array),e._dirty=!0,e};Ke.mul=function(e,t,r){return se.mul(e.array,t.array,r.array),e._dirty=!0,e};Ke.multiply=Ke.mul;Ke.rotate=function(e,t,r){return se.rotate(e.array,t.array,r),e._dirty=!0,e};Ke.scale=function(e,t,r){return se.scale(e.array,t.array,r.array),e._dirty=!0,e};Ke.transpose=function(e,t){return se.transpose(e.array,t.array),e._dirty=!0,e};var ue={};ue.create=function(){var e=new Xe(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};ue.clone=function(e){var t=new Xe(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};ue.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};ue.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};ue.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=r*a-i*n;return l?(l=1/l,e[0]=a*l,e[1]=-i*l,e[2]=-n*l,e[3]=r*l,e[4]=(n*s-a*o)*l,e[5]=(i*o-r*s)*l,e):null};ue.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};ue.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1],c=r[2],d=r[3],f=r[4],v=r[5];return e[0]=i*u+a*h,e[1]=n*u+o*h,e[2]=i*c+a*d,e[3]=n*c+o*d,e[4]=i*f+a*v+s,e[5]=n*f+o*v+l,e};ue.mul=ue.multiply;ue.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=Math.sin(r),h=Math.cos(r);return e[0]=i*h+a*u,e[1]=n*h+o*u,e[2]=i*-u+a*h,e[3]=n*-u+o*h,e[4]=s,e[5]=l,e};ue.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1];return e[0]=i*u,e[1]=n*u,e[2]=a*h,e[3]=o*h,e[4]=s,e[5]=l,e};ue.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=i*u+a*h+s,e[5]=n*u+o*h+l,e};ue.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};var tt=function(){this.array=ue.create(),this._dirty=!0};tt.prototype={constructor:tt,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new tt().copy(this)},copy:function(e){return ue.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return ue.determinant(this.array)},identity:function(){return ue.identity(this.array),this._dirty=!0,this},invert:function(){return ue.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return ue.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return ue.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return ue.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return ue.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return ue.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return ue.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return ue.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};tt.copy=function(e,t){return ue.copy(e.array,t.array),e._dirty=!0,e};tt.determinant=function(e){return ue.determinant(e.array)};tt.identity=function(e){return ue.identity(e.array),e._dirty=!0,e};tt.invert=function(e,t){return ue.invert(e.array,t.array),e._dirty=!0,e};tt.mul=function(e,t,r){return ue.mul(e.array,t.array,r.array),e._dirty=!0,e};tt.multiply=tt.mul;tt.rotate=function(e,t,r){return ue.rotate(e.array,t.array,r),e._dirty=!0,e};tt.scale=function(e,t,r){return ue.scale(e.array,t.array,r.array),e._dirty=!0,e};tt.translate=function(e,t,r){return ue.translate(e.array,t.array,r.array),e._dirty=!0,e};var Ne=function(){this.array=K.create(),this._dirty=!0};Ne.prototype={constructor:Ne,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return K.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Ne().copy(this)},copy:function(e){return K.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return K.determinant(this.array)},fromMat2d:function(e){return K.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return K.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return K.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return K.identity(this.array),this._dirty=!0,this},invert:function(){return K.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return K.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return K.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return K.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return K.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return K.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return K.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return K.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return K.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return K.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ne.adjoint=function(e,t){return K.adjoint(e.array,t.array),e._dirty=!0,e};Ne.copy=function(e,t){return K.copy(e.array,t.array),e._dirty=!0,e};Ne.determinant=function(e){return K.determinant(e.array)};Ne.identity=function(e){return K.identity(e.array),e._dirty=!0,e};Ne.invert=function(e,t){return K.invert(e.array,t.array),e};Ne.mul=function(e,t,r){return K.mul(e.array,t.array,r.array),e._dirty=!0,e};Ne.multiply=Ne.mul;Ne.fromMat2d=function(e,t){return K.fromMat2d(e.array,t.array),e._dirty=!0,e};Ne.fromMat4=function(e,t){return K.fromMat4(e.array,t.array),e._dirty=!0,e};Ne.fromQuat=function(e,t){return K.fromQuat(e.array,t.array),e._dirty=!0,e};Ne.normalFromMat4=function(e,t){return K.normalFromMat4(e.array,t.array),e._dirty=!0,e};Ne.rotate=function(e,t,r){return K.rotate(e.array,t.array,r),e._dirty=!0,e};Ne.scale=function(e,t,r){return K.scale(e.array,t.array,r.array),e._dirty=!0,e};Ne.transpose=function(e,t){return K.transpose(e.array,t.array),e._dirty=!0,e};Ne.translate=function(e,t,r){return K.translate(e.array,t.array,r.array),e._dirty=!0,e};var gh={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,i;if(e){for(var n=e.split("."),a=r,o=0,s=n.length;o<s;o++)a&&(a=a[n[o]]);a&&(i=a)}else i=r;if(i==null)throw new Error("Target "+e+" not exists");var l=this._animators,u=new gl(i,t),h=this;return u.during(function(){h.__zr&&h.__zr.refresh()}).done(function(){var c=l.indexOf(u);c>=0&&l.splice(c,1)}),l.push(u),this.__zr&&this.__zr.animation.addAnimator(u),u},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,i=0;i<r;i++)t[i].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}};const ss=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,_h=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,yh=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,xh=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Th=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,wh=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,bh=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(yt.prototype,gh);G.import(ss);G.import(es);G.import(_h);G.import(yh);G.import(xh);G.import(Th);G.import(wh);G.import(bh);function Sh(e){return!e||e==="none"}function ls(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function Eh(e){return e.getZr&&e.setOption}var Ah=Wt.prototype.addToScene,Lh=Wt.prototype.removeFromScene;Wt.prototype.addToScene=function(e){if(Ah.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};Wt.prototype.removeFromScene=function(e){Lh.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};ot.prototype.setTextureImage=function(e,t,r,i){if(this.shader){var n=r.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),Sh(t)||(o=y.loadTexture(t,r,i,function(s){a.enableTexture(e),n&&n.refresh()}),a.set(e,o)),o}};var y={};y.Renderer=st;y.Node=yt;y.Mesh=Be;y.Shader=G;y.Material=ot;y.Texture=V;y.Texture2D=ee;y.Geometry=re;y.SphereGeometry=fh;y.PlaneGeometry=rn;y.CubeGeometry=as;y.AmbientLight=dh;y.DirectionalLight=vh;y.PointLight=ph;y.SpotLight=mh;y.PerspectiveCamera=Ie;y.OrthographicCamera=Dr;y.Vector2=$;y.Vector3=L;y.Vector4=ae;y.Quaternion=he;y.Matrix2=Ke;y.Matrix2d=tt;y.Matrix3=Ne;y.Matrix4=H;y.Plane=ri;y.Ray=or;y.BoundingBox=He;y.Frustum=en;var Di=null;function Mh(){return Di!==null||(Di=xt.createBlank("rgba(255,255,255,0)").image),Di}function oo(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function so(e){if((e.wrapS===V.REPEAT||e.wrapT===V.REPEAT)&&e.image){var t=oo(e.width),r=oo(e.height);if(t!==e.width||r!==e.height){var i=document.createElement("canvas");i.width=t,i.height=r;var n=i.getContext("2d");n.drawImage(e.image,0,0,t,r),e.image=i}}}y.loadTexture=function(e,t,r,i){typeof r=="function"&&(i=r,r={}),r=r||{};for(var n=Object.keys(r).sort(),a="",o=0;o<n.length;o++)a+=n[o]+"_"+r[n[o]]+"_";var s=t.__textureCache=t.__textureCache||new _l(20);if(Eh(e)){var l=e.__textureid__,u=s.get(a+l);if(u)u.texture.surface.setECharts(e),i&&i(u.texture);else{var h=new Yn(e);h.onupdate=function(){t.getZr().refresh()},u={texture:h.getTexture()};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_ec__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),i&&i(u.texture)}return u.texture}else if(ls(e)){var l=e.__textureid__,u=s.get(a+l);if(!u){u={texture:new y.Texture2D({image:e})};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_image__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),so(u.texture),i&&i(u.texture)}return u.texture}else{var u=s.get(a+e);if(u)u.callbacks?u.callbacks.push(i):i&&i(u.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[i]};var c=xt.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){c.dirty(),u.callbacks.forEach(function(v){v&&v(c)}),u.callbacks=null});u.texture=c,s.put(a+e,u)}else{for(var c=new y.Texture2D({image:new Image}),o=0;o<n.length;o++)c[n[o]]=r[n[o]];u={texture:c,callbacks:[i]};var d=c.image;d.onload=function(){c.image=d,so(c),c.dirty(),u.callbacks.forEach(function(p){p&&p(c)}),u.callbacks=null},d.crossOrigin="Anonymous",d.src=e,c.image=Mh(),s.put(a+e,u)}return u.texture}};y.createAmbientCubemap=function(e,t,r,i){e=e||{};var n=e.texture,a=te.firstNotNull(e.exposure,1),o=new sh({intensity:te.firstNotNull(e.specularIntensity,1)}),s=new lh({intensity:te.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=y.loadTexture(n,r,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=os.projectEnvironmentMap(t,o.cubemap,{lod:1}),i&&i()}),{specular:o,diffuse:s}};y.createBlankTexture=xt.createBlank;y.isImage=ls;y.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};y.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=Uo(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};y.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,i=-t/180*Math.PI+Math.PI/2,n=[],a=Math.sin(r);return n[0]=a*Math.cos(i),n[1]=-Math.cos(r),n[2]=a*Math.sin(i),n};y.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};y.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];y.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=G.source(e+".vertex"),r=G.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var i=new G(t,r);return i.name=e,i};y.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=y.createShader(e),i=new ot({shader:r});return t.forEach(function(n){typeof n=="string"&&i.define(n)}),i};y.setMaterialFromModel=function(e,t,r,i){t.autoUpdateTextureStatus=!1;var n=r.getModel(e+"Material"),a=n.get("detailTexture"),o=te.firstNotNull(n.get("textureTiling"),1),s=te.firstNotNull(n.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?y.Texture.REPEAT:y.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var h=n.get("roughness"),c=n.get("metalness");c!=null?isNaN(c)&&(t.setTextureImage("metalnessMap",c,i,u),c=te.firstNotNull(n.get("metalnessAdjust"),.5)):c=0,h!=null?isNaN(h)&&(t.setTextureImage("roughnessMap",h,i,u),h=te.firstNotNull(n.get("roughnessAdjust"),.5)):h=.5;var d=n.get("normalTexture");t.setTextureImage("detailMap",a,i,u),t.setTextureImage("normalMap",d,i,u),t.set({roughness:h,metalness:c,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var f=n.get("hatchingTextures")||[];f.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),f[v],i,{anisotropic:8,wrapS:y.Texture.REPEAT,wrapT:y.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};y.updateVertexAnimation=function(e,t,r,i){var n=i.get("animation"),a=i.get("animationDurationUpdate"),o=i.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(n&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var ve=function(e,t){this.id=e,this.zr=t;try{this.renderer=new st({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(i){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(i);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new sa({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new Ho({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};ve.prototype.setUnpainted=function(){};ve.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(i){i.__zr=r,i.addAnimatorsToZr&&i.addAnimatorsToZr(r)})}};function us(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}ve.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(us,this),e.layer=null,this._viewsToDispose.push(e))}};ve.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(us,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};ve.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};ve.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};ve.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};ve.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};ve.prototype.needsRefresh=function(){this.zr.refresh()};ve.prototype.refresh=function(e){this._backgroundColor=e?y.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};ve.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};ve.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};ve.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var Ch=1;ve.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,i=0;i<this.views.length;i++)r=this.views[i].needsAccumulate()||r;if(!r)return;function n(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&r;o||(t._doRender(!0),e?n(a):Hn(function(){n(a)}))}}this._accumulatingId=Ch++,e?n(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(t._accumulatingId)},50)};ve.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Gi(this._textureList),Gi(this._geometriesList));for(var r=0;r<this.views.length;r++)Dh(this.views[r].scene,e,t);this._textureList&&(Ui(this.renderer,this._textureList),Ui(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Gi(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function Ui(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function Pi(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function Dh(e,t,r){var i,n;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==i)for(var u=l.getTextureUniforms(),h=0;h<u.length;h++){var c=u[h],d=l.uniforms[c].value;if(d){if(d instanceof V)Pi(d,t);else if(d instanceof Array)for(var f=0;f<d.length;f++)d[f]instanceof V&&Pi(d[f],t)}}s!==n&&Pi(s,r),i=l,n=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&Pi(e.lights[a].cubemap,t)}ve.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Gi(this._textureList),Gi(this._geometriesList),Ui(this.renderer,this._textureList),Ui(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};ve.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};ve.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,i=this._hovered;this._hovered=t,i&&r!==i.target&&(i.relatedTarget=r,this._dispatchEvent("mouseout",e,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!i||r!==i.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};ve.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};ve.prototype.onclick=ve.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var i=this.pickObject(e.offsetX,e.offsetY);i&&(this._dispatchEvent(e.type,e,i),this._dispatchDataEvent(e.type,e,i));var n=this._clickToSetFocusPoint(e);if(n){var a=n.view.setDOFFocusOnPoint(n.distance);a&&this.zr.refresh()}}}};ve.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,i=this.views.length-1;i>=0;i--){var n=this.views[i];if(n.hasDOF()&&n.containPoint(e.offsetX,e.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,t.viewport=n.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=n,a}}t.viewport=r};ve.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};ve.prototype.pickObject=function(e,t){for(var r=[],i=this.renderer,n=i.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,i.viewport=o.viewport,this._picking.pickAll(e,t,r))}return i.viewport=n,r.sort(function(s,l){return s.distance-l.distance}),r[0]};ve.prototype._dispatchEvent=function(e,t,r){r||(r={});var i=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;i&&(i.trigger(e,r),i=i.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};ve.prototype._dispatchDataEvent=function(e,t,r){var i=r&&r.target,n=i&&i.dataIndex,a=i&&i.seriesIndex,o=i&&i.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var u={target:l};const h=yl(l);e==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(h.dataIndex=this._lastDataIndex,h.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(h.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=n,this._lastSeriesIndex=a),h.eventData=o,h.dataIndex=n,h.seriesIndex=a,(o!=null||parseInt(n,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,e,t),s&&this.zr.handler.dispatchToElement(u,"mouseover",t))};ve.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(ve.prototype,oa);var Ph=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function Jr(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,i=e[t].emphasis;r&&(e[t]=r),i&&(e.emphasis=e.emphasis||{},e.emphasis[t]=i)}}function Nh(e){Jr(e,"itemStyle"),Jr(e,"lineStyle"),Jr(e,"areaStyle"),Jr(e,"label")}function Ni(e){e&&(e instanceof Array||(e=[e]),bt(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function Rh(e){bt(e.series,function(t){xl(Ph,t.type)>=0&&(Nh(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),Ni(e.xAxis3D),Ni(e.yAxis3D),Ni(e.zAxis3D),Ni(e.grid3D),Jr(e.geo3D)}function hs(e){this._layers={},this._zr=e}hs.prototype.update=function(e,t){var r=this,i=t.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function n(s){i.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var u=r._layers,h=u[l];if(!h){if(h=u[l]=new ve("gl-"+l,i),i.painter.isSingleCanvas()){h.virtual=!0;var c=new Sl({z:1e4,style:{image:h.renderer.canvas},silent:!0});h.__hostImage=c,i.add(c)}i.painter.insertLayer(l,h)}return h.__hostImage&&h.__hostImage.setStyle({width:h.renderer.getWidth(),height:h.renderer.getHeight()}),h}function a(s,l){s&&s.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var u=t.getViewOfComponentModel(l),h=l.coordinateSystem;if(u.__ecgl__){var c;if(h){if(!h.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}c=h.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}c=h.viewGL}var c=h.viewGL,d=n(l);d.addView(c),u.afterRender&&u.afterRender(l,e,t,d),a(u.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),u=s.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var h=u&&u.viewGL||l.viewGL,c=n(s);c.addView(h),l.afterRender&&l.afterRender(s,e,t,c),a(l.groupGL,s.get("silent"))}})};Tl(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof ve&&i.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),a=i.pixelRatio||this.dpr;n.width=this.getWidth()*a,n.height=this.getHeight()*a;var o=n.getContext("2d");o.dpr=a,o.clearRect(0,0,n.width,n.height),i.backgroundColor&&(o.fillStyle=i.backgroundColor,o.fillRect(0,0,n.width,n.height));var s=this.storage.getDisplayList(!0),l={},u,h=this;function c(p,m){var g=h._zlevelList;p==null&&(p=-1/0);for(var T,x=0;x<g.length;x++){var _=g[x],b=h._layers[_];if(!b.__builtin__&&_>p&&_<m){T=b;break}}T&&T.renderToCanvas&&(o.save(),T.renderToCanvas(o),o.restore())}for(var d={ctx:o},f=0;f<s.length;f++){var v=s[f];v.zlevel!==u&&(c(u,v.zlevel),u=v.zlevel),this._doPaintEl(v,d,!0,null,l)}return c(u,1/0),n}});wl(function(e,t){var r=t.getZr(),i=r.__egl=r.__egl||new hs(r);i.update(e,t)});bl(Rh);const nn={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Br={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Fr={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var an=Ir.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});ce(an.prototype,nn);ce(an.prototype,Br);ce(an.prototype,Fr);var Yr=te.firstNotNull,lo={left:0,middle:1,right:2};function uo(e){return e instanceof Array||(e=[e,e]),e}var gi=We.extend(function(){return{zr:null,viewGL:null,_center:new L,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new $,_panVelocity:new $,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,i=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var a=e.get("distance")+r,o=e.get("orthographicSize")+i;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=Yr(e.get(d[0]),d[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=i,this.maxOrthographicSize+=i;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){l[d]=Yr(e.get(d),s&&s.get(d))});var u=Yr(t.alpha,e.get("alpha"))||0,h=Yr(t.beta,e.get("beta"))||0,c=Yr(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:u,beta:h,center:c,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(u),this.setBeta(h),this.setCenter(c),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,i={},n={};return e.distance!=null&&(i.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(i.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(i.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(i.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(i.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(i).when(e.duration||1e3,n).during(function(){i.alpha!=null&&r.setAlpha(i.alpha),i.beta!=null&&r.setBeta(i.beta),i.distance!=null&&r.setDistance(i.distance),i.center!=null&&r.setCenter(i.center),i.orthographicSize!=null&&r.setOrthographicSize(i.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,i=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-i/2,t.right=i/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,i=this.getCamera(),n=i.worldTransform.y,a=i.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(n,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new L,r=this._theta+Math.PI/2,i=this._phi+Math.PI/2,n=Math.sin(r);t.x=n*Math.cos(i),t.y=-Math.cos(r),t.z=n*Math.sin(i),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===lo[this.rotateMouseButton]?this._mode="rotate":e.event.button===lo[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=uo(this.panSensitivity),r=uo(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(gi.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});const _i={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},Ae={vec2:F,vec3:S,vec4:N,mat3:K,mat4:R};var Pn=Ae.vec3,ho=[[0,0],[1,1]],Xt=re.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new re.Attribute("position","float",3,"POSITION"),positionPrev:new re.Attribute("positionPrev","float",3),positionNext:new re.Attribute("positionNext","float",3),prevPositionPrev:new re.Attribute("prevPositionPrev","float",3),prevPosition:new re.Attribute("prevPosition","float",3),prevPositionNext:new re.Attribute("prevPositionNext","float",3),offset:new re.Attribute("offset","float",1),color:new re.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=Pn.dist(e,t)+Pn.dist(r,t)+Pn.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(ho)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(ho)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=e[2],u=t[0],h=t[1],c=t[2],d=r[0],f=r[1],v=r[2],p=i[0],m=i[1],g=i[2],T=this._getCubicCurveApproxStep(e,t,r,i),x=T*T,_=x*T,b=3*T,w=3*x,A=6*x,E=6*_,M=o-u*2+d,I=s-h*2+f,C=l-c*2+v,B=(u-d)*3-o+p,z=(h-f)*3-s+m,O=(c-v)*3-l+g,U=o,j=s,Y=l,k=(u-o)*b+M*w+B*_,Z=(h-s)*b+I*w+z*_,D=(c-l)*b+C*w+O*_,q=M*A+B*E,Q=I*A+z*E,J=C*A+O*E,oe=B*E,ie=z*E,Me=O*E,ye=0,we=0,je=Math.ceil(1/T),Ge=new Float32Array((je+1)*3),Ge=[],Oe=0,we=0;we<je+1;we++)Ge[Oe++]=U,Ge[Oe++]=j,Ge[Oe++]=Y,U+=k,j+=Z,Y+=D,k+=q,Z+=Q,D+=J,q+=oe,Q+=ie,J+=Me,ye+=T,ye>1&&(U=k>0?Math.min(U,p):Math.max(U,p),j=Z>0?Math.min(j,m):Math.max(j,m),Y=D>0?Math.min(Y,g):Math.max(Y,g));return this.addPolyline(Ge,n,a)},addLine:function(e,t,r,i){return this.addPolyline([e,t],r,i)},addPolyline:function(e,t,r,i,n){if(e.length){var a=typeof e[0]!="number";if(n==null&&(n=a?e.length:e.length/3),!(n<2)){i==null&&(i=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===n,s=this.attributes.position,l=this.attributes.positionPrev,u=this.attributes.positionNext,h=this.attributes.color,c=this.attributes.offset,d=this.indices,f=this._vertexOffset,v,p;r=Math.max(r,.01);for(var m=i;m<n;m++){if(a)v=e[m],o?p=t[m]:p=t;else{var g=m*3;if(v=v||[],v[0]=e[g],v[1]=e[g+1],v[2]=e[g+2],o){var T=m*4;p=p||[],p[0]=t[T],p[1]=t[T+1],p[2]=t[T+2],p[3]=t[T+3]}else p=t}if(this.useNativeLine?m>1&&(s.copy(f,f-1),h.copy(f,f-1),f++):(m<n-1&&(l.set(f+2,v),l.set(f+3,v)),m>0&&(u.set(f-2,v),u.set(f-1,v)),s.set(f,v),s.set(f+1,v),h.set(f,p),h.set(f+1,p),c.set(f,r/2),c.set(f+1,-r/2),f+=2),this.useNativeLine)h.set(f,p),s.set(f,v),f++;else if(m>0){var x=this._triangleOffset*3,d=this.indices;d[x]=f-4,d[x+1]=f-3,d[x+2]=f-2,d[x+3]=f-3,d[x+4]=f-1,d[x+5]=f-2,this._triangleOffset+=2}}if(!this.useNativeLine){var _=this._vertexOffset,b=this._vertexOffset+n*2;l.copy(_,_+2),l.copy(_+1,_+3),u.copy(b-1,b-3),u.copy(b-2,b-4)}return this._vertexOffset=f,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});kt(Xt.prototype,_i);function Hi(e,t,r,i,n,a,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=i,this.height=n,this.offsetX=t,this.offsetY=r,this.dpr=o,this.gap=a}Hi.prototype={constructor:Hi,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var i=e.getBoundingRect();t==null&&(t=i.width),r==null&&(r=i.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var n=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(n+t+l>o&&(n=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>s)return null;e.x+=this.offsetX*this.dpr+n,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var u=[this.offsetX/this.width,this.offsetY/this.height],h=[[n/o+u[0],a/s+u[1]],[(n+t)/o+u[0],(a+r)/s+u[1]]];return h},_fitElement:function(e,t,r){var i=e.getBoundingRect(),n=t/i.width,a=r/i.height;e.x=-i.x*n,e.y=-i.y*a,e.scaleX=n,e.scaleY=a,e.update()}};function ki(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new ee({image:t,flipY:!1});var r=this;this._zr=El(t);var i=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new Hi(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}ki.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,i=r*this._nodeWidth%e,n=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(n>=e)){var a=(i+this._nodeWidth)*this._dpr,o=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:o})}catch{this._canvas.width=a,this._canvas.height=o}var s=new Hi(this._zr,i,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var i=this._getCurrentNode().add(e,t,r);if(!i){var n=this._expand();if(!n)return;i=n.add(e,t,r)}return this._coords[e.id]=i,i},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};function Ht(){}Ht.prototype={constructor:Ht,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new y.DirectionalLight({shadowBias:.005}),this.ambientLight=new y.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,i=e.getModel("light"),n=i.getModel("main"),a=i.getModel("ambient");t.intensity=n.get("intensity"),r.intensity=a.get("intensity"),t.color=y.parseColor(n.get("color")).slice(0,3),r.color=y.parseColor(a.get("color")).slice(0,3);var o=n.get("alpha")||0,s=n.get("beta")||0;t.position.setArray(y.directionFromAlphaBeta(o,s)),t.lookAt(y.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=y.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var i=t.getModel("light.ambientCubemap"),n=i.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[n];if(!a){var o=this;a=this._cubemapLightsCache[n]=y.createAmbientCubemap(i.option,e,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var i=t.get("environment"),n=this;function a(){return n._skybox=n._skybox||new ai,n._skybox}var o=a();if(i&&i!=="none")if(i==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof i=="object"&&i.colorStops||typeof i=="string"&&Uo(i)){this._isSkyboxFromAmbientCubemap=!1;var l=new y.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var u=l.image=document.createElement("canvas");u.width=u.height=16;var h=u.getContext("2d"),c=new Ho({shape:{x:0,y:0,width:16,height:16},style:{fill:i}});ko(h,c),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=y.loadTexture(i,r,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=t.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&i!=="auto"&&!(i.match&&i.match(/.hdr$/))){var f=d.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[f]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var Qt=Ae.vec3,cs=re.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new re.Attribute("position","float",3,"POSITION"),normal:new re.Attribute("normal","float",3,"NORMAL"),color:new re.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,i=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=Qt.create(),t=Qt.create(),r=Qt.create(),i=[0,3,1,3,2,1];return function(n,a){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;Qt.sub(e,n[1],n[0]),Qt.sub(t,n[2],n[1]),Qt.cross(r,e,t),Qt.normalize(r,r);for(var u=0;u<4;u++)o.set(this._vertexOffset+u,n[u]),l.set(this._vertexOffset+u,a),s.set(this._vertexOffset+u,r);for(var h=this._faceOffset*3,u=0;u<6;u++)this.indices[h+u]=i[u]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});kt(cs.prototype,_i);var Kn=te.firstNotNull,Oh={x:0,y:2,z:1};function Ih(e,t,r,i){var n=[0,0,0],a=i<0?r.getExtentMin():r.getExtentMax();n[Oh[r.dim]]=a,e.position.setArray(n),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(i*Math.PI/2),t.normal.x=-i):r.dim==="z"?(e.rotation.rotateX(-i*Math.PI/2),t.normal.y=-i):(i>0&&e.rotation.rotateY(Math.PI),t.normal.z=-i)}function on(e,t,r){this.rootNode=new y.Node;var i=new y.Mesh({geometry:new Xt({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new y.Mesh({geometry:new cs,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(i),this.faceInfo=e,this.plane=new y.Plane,this.linesMesh=i,this.quadsMesh=n}on.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=[i.getAxis(this.faceInfo[0]),i.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,n,e,r),this._udpateSplitAreas(o,n,e,r),a.convertToTypedArray(),o.convertToTypedArray();var s=i.getAxis(this.faceInfo[2]);Ih(this.rootNode,this.plane,s,this.faceInfo[3])};on.prototype._updateSplitLines=function(e,t,r,i){var n=i.getDevicePixelRatio();t.forEach(function(a,o){var s=a.model,l=t[1-o].getExtent();if(!a.scale.isBlank()){var u=s.getModel("splitLine",r.getModel("splitLine"));if(u.get("show")){var h=u.getModel("lineStyle"),c=h.get("color"),d=Kn(h.get("opacity"),1),f=Kn(h.get("width"),1);c=wt(c)?c:[c];for(var v=a.getTicksCoords({tickModel:u}),p=0,m=0;m<v.length;m++){var g=v[m].coord,T=y.parseColor(c[p%c.length]);T[3]*=d;var x=[0,0,0],_=[0,0,0];x[o]=_[o]=g,x[1-o]=l[0],_[1-o]=l[1],e.addLine(x,_,T,f*n),p++}}}})};on.prototype._udpateSplitAreas=function(e,t,r,i){t.forEach(function(n,a){var o=n.model,s=t[1-a].getExtent();if(!n.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var u=l.getModel("areaStyle"),h=u.get("color"),c=Kn(u.get("opacity"),1);h=wt(h)?h:[h];for(var d=n.getTicksCoords({tickModel:l,clamp:!0}),f=0,v=[0,0,0],p=[0,0,0],m=0;m<d.length;m++){var g=d[m].coord,T=[0,0,0],x=[0,0,0];if(T[a]=x[a]=g,T[1-a]=s[0],x[1-a]=s[1],m===0){v=T,p=x;continue}var _=y.parseColor(h[f%h.length]);_[3]*=c,e.addQuad([v,T,x,p],_),v=T,p=x,f++}}}})};var co=[0,1,2,0,2,3],fs=re.extend(function(){return{attributes:{position:new re.Attribute("position","float",3,"POSITION"),texcoord:new re.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new re.Attribute("offset","float",2),color:new re.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,i,n){r==null&&(r="left"),i==null&&(i="top");var a,o,s,l;switch(n=n||0,r){case"left":a=n,s=t[0]+n;break;case"center":case"middle":a=-t[0]/2,s=t[0]/2;break;case"right":a=-t[0]-n,s=-n;break}switch(i){case"bottom":o=n,l=t[1]+n;break;case"middle":o=-t[1]/2,l=t[1]/2;break;case"top":o=-t[1]-n,l=-n;break}var u=e*4,h=this.attributes.offset;h.set(u,[a,l]),h.set(u+1,[s,l]),h.set(u+2,[s,o]),h.set(u+3,[a,o])},addSprite:function(e,t,r,i,n,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,i,n,a);for(var s=0;s<co.length;s++)this.indices[this._faceOffset*3+s]=co[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,r,i,n,a,o){for(var s=e*4,l=this.attributes,u=0;u<4;u++)l.position.set(s+u,t);var h=l.texcoord;h.set(s,[i[0][0],i[0][1]]),h.set(s+1,[i[1][0],i[0][1]]),h.set(s+2,[i[1][0],i[1][1]]),h.set(s+3,[i[0][0],i[1][1]]),this.setSpriteAlign(e,r,n,a,o)}});kt(fs.prototype,_i);const Bh=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;y.Shader.import(Bh);const ha=y.Mesh.extend(function(){var e=new fs({dynamic:!0}),t=new y.Material({shader:y.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}});var Jt=te.firstNotNull,er={x:0,y:2,z:1};function ca(e,t){var r=new y.Mesh({geometry:new Xt({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),i=new ha;i.material.depthMask=!1;var n=new y.Node;n.add(r),n.add(i),this.rootNode=n,this.dim=e,this.linesMesh=r,this.labelsMesh=i,this.axisLineCoords=null,this.labelElements=[]}var Nn={x:"y",y:"x",z:"y"};ca.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=i.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=n.model,l=n.getExtent(),C=r.getDevicePixelRatio(),u=s.getModel("axisLine",e.getModel("axisLine")),h=s.getModel("axisTick",e.getModel("axisTick")),c=s.getModel("axisLabel",e.getModel("axisLabel")),d=u.get("lineStyle.color");if(u.get("show")){var f=u.getModel("lineStyle"),v=[0,0,0],p=[0,0,0],m=er[n.dim];v[m]=l[0],p[m]=l[1],this.axisLineCoords=[v,p];var g=y.parseColor(d),T=Jt(f.get("width"),1),x=Jt(f.get("opacity"),1);g[3]*=x,a.addLine(v,p,g,T*C)}if(h.get("show")){var _=h.getModel("lineStyle"),b=y.parseColor(Jt(_.get("color"),d)),T=Jt(_.get("width"),1);b[3]*=Jt(_.get("opacity"),1);for(var w=n.getTicksCoords(),A=h.get("length"),E=0;E<w.length;E++){var M=w[E].coord,v=[0,0,0],p=[0,0,0],m=er[n.dim],I=er[Nn[n.dim]];v[m]=p[m]=M,p[I]=A,a.addLine(v,p,b,T*C)}}this.labelElements=[];var C=r.getDevicePixelRatio();if(c.get("show"))for(var w=n.getTicksCoords(),B=s.get("data"),z=c.get("margin"),O=n.getViewLabels(),E=0;E<O.length;E++){var U=O[E].tickValue,j=O[E].formattedLabel,Y=O[E].rawLabel,M=n.dataToCoord(U),k=[0,0,0],m=er[n.dim],I=er[Nn[n.dim]];k[m]=k[m]=M,k[I]=z;var Z=c;B&&B[U]&&B[U].textStyle&&(Z=new Er(B[U].textStyle,c,s.ecModel));var D=Jt(Z.get("color"),d),q=new Vi({style:zi(Z,{text:j,fill:typeof D=="function"?D(n.type==="category"?Y:n.type==="value"?U+"":U,E):D,verticalAlign:"top",align:"left"})}),Q=t.add(q),J=q.getBoundingRect();o.addSprite(k,[J.width*C,J.height*C],Q),this.labelElements.push(q)}if(s.get("name")){var oe=s.getModel("nameTextStyle"),k=[0,0,0],m=er[n.dim],I=er[Nn[n.dim]],ie=Jt(oe.get("color"),d),Me=oe.get("borderColor"),T=oe.get("borderWidth");k[m]=k[m]=(l[0]+l[1])/2,k[I]=s.get("nameGap");var q=new Vi({style:zi(oe,{text:s.get("name"),fill:ie,stroke:Me,lineWidth:T})}),Q=t.add(q),J=q.getBoundingRect();o.addSprite(k,[J.width*C,J.height*C],Q),q.__idx=this.labelElements.length,this.nameLabelElement=q}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()};ca.prototype.setSpriteAlign=function(e,t,r){for(var i=r.getDevicePixelRatio(),n=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a],s=o.getBoundingRect();n.setSpriteAlign(a,[s.width*i,s.height*i],e,t)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();n.setSpriteAlign(l.__idx,[s.width*i,s.height*i],e,t),n.dirty()}this.textAlign=e,this.textVerticalAlign=t};const sn=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`;var fo=te.firstNotNull;y.Shader.import(sn);var tr={x:0,y:2,z:1};const Fh=vi.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],i=["x","y","z"],n=new y.Material({shader:y.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new y.Material({shader:y.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});n.define("fragment","DOUBLE_SIDED"),n.define("both","VERTEX_COLOR"),this.groupGL=new y.Node,this._control=new gi({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(s){var l=new on(s,a,n);return this.groupGL.add(l.rootNode),l},this),this._axes=i.map(function(s){var l=new ca(s,a);return this.groupGL.add(l.rootNode),l},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new ki({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new y.Mesh({geometry:new Xt({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new ki({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new ha({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new y.Node,this._sceneHelper=new Ht,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var i=e.coordinateSystem;i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),n.off("update"),e.get("show")&&(this._faces.forEach(function(o){o.update(e,t,r)},this),this._axes.forEach(function(o){o.update(e,this._axisLabelSurface,r)},this)),n.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},showAxisPointer:function(e,t,r,i){this._doShowAxisPointer(),this._updateAxisPointer(i.value)},hideAxisPointer:function(e,t,r,i){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,i=r.viewGL,n=i.castRay(e.offsetX,e.offsetY,new y.Ray),a,o=0;o<this._faces.length;o++){var s=this._faces[o];if(!s.rootNode.invisible){s.plane.normal.dot(i.camera.worldTransform.z)<0&&s.plane.normal.negate();var l=n.intersectPlane(s.plane);if(l){var u=r.getAxis(s.faceInfo[0]),h=r.getAxis(s.faceInfo[1]),c=tr[s.faceInfo[0]],d=tr[s.faceInfo[1]];u.contain(l.array[c])&&h.contain(l.array[d])&&(a=l)}}}if(a){var f=r.pointToData(a.array,[],!0);this._updateAxisPointer(f),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new y.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var i=[],n=0;n<2;n++){var a=this._faces[r*2+n];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),i[n]=t.z}var o=i[0]>i[1]?0:1,s=this._faces[r*2+o],l=this._faces[r*2+1-o];s.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),i=e.getAxis("z"),n=i.getExtentMax(),a=i.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),l=r.getExtentMax(),u=r.getExtentMin(),h=this._axes[0].rootNode,c=this._axes[1].rootNode,d=this._axes[2].rootNode,f=this._faces,v=f[4].rootNode.invisible?u:l,p=f[2].rootNode.invisible?n:a,m=f[0].rootNode.invisible?o:s,g=f[2].rootNode.invisible?n:a,T=f[0].rootNode.invisible?s:o,x=f[4].rootNode.invisible?u:l;h.rotation.identity(),c.rotation.identity(),d.rotation.identity(),f[4].rootNode.invisible&&(this._axes[0].flipped=!0,h.rotation.rotateX(Math.PI)),f[0].rootNode.invisible&&(this._axes[1].flipped=!0,c.rotation.rotateZ(Math.PI)),f[4].rootNode.invisible&&(this._axes[2].flipped=!0,d.rotation.rotateY(Math.PI)),h.position.set(0,p,v),c.position.set(m,g,0),d.position.set(T,0,x),h.update(),c.update(),d.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new y.Vector4,new y.Vector4],r=new y.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(i){var n=i.axisLineCoords;i.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(n[a]),t[a].w=1,t[a].transformMat4(i.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var o=t[1].x-t[0].x,s=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,u=(t[1].y+t[0].y)/2,h,c;Math.abs(s/o)<.5?(h="center",c=u>r.y?"bottom":"top"):(c="middle",h=l>r.x?"left":"right"),i.setSpriteAlign(h,c,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),i=this._axisPointerLineMesh,n=i.geometry,a=this._model.getModel("axisPointer"),o=this._api.getDevicePixelRatio();n.convertToDynamicArray(!0);function s(E){return te.firstNotNull(E.model.get("axisPointer.show"),a.get("show"))}function l(E){var M=E.model.getModel("axisPointer",a),I=M.getModel("lineStyle"),C=y.parseColor(I.get("color")),B=fo(I.get("width"),1),z=fo(I.get("opacity"),1);return C[3]*=z,{color:C,lineWidth:B}}for(var u=0;u<this._faces.length;u++){var h=this._faces[u];if(!h.rootNode.invisible){for(var c=h.faceInfo,d=c[3]<0?t.getAxis(c[2]).getExtentMin():t.getAxis(c[2]).getExtentMax(),f=tr[c[2]],v=0;v<2;v++){var p=c[v],m=c[1-v],g=t.getAxis(p),T=t.getAxis(m);if(s(g)){var x=[0,0,0],_=[0,0,0],b=tr[p],w=tr[m];x[b]=_[b]=r[b],x[f]=_[f]=d,x[w]=T.getExtentMin(),_[w]=T.getExtentMax();var A=l(g);n.addLine(x,_,A.color,A.lineWidth*o)}}if(s(t.getAxis(c[2]))){var x=r.slice(),_=r.slice();_[f]=d;var A=l(t.getAxis(c[2]));n.addLine(x,_,A.color,A.lineWidth*o)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,i=this._axisPointerLabelsSurface,n=t.coordinateSystem,a=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),i.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var u=n.getAxis(s.dim),h=u.model,c=h.getModel("axisPointer",a),d=c.getModel("label"),f=c.get("lineStyle.color");if(!(!d.get("show")||!c.get("show"))){var v=e[l],p=d.get("formatter"),m=u.scale.getLabel({value:v});if(p!=null)m=p(m,e);else if(u.scale.type==="interval"||u.scale.type==="log"){var g=Wo(u.scale.getTicks()[0]);m=v.toFixed(g+2)}var T=d.get("color"),x=new Vi({style:zi(d,{text:m,fill:T||f,align:"left",verticalAlign:"top"})}),_=i.add(x),b=x.getBoundingRect(),w=this._api.getDevicePixelRatio(),A=s.rootNode.position.toArray(),E=tr[o[s.dim]];A[E]+=(s.flipped?-1:1)*d.get("margin"),A[tr[s.dim]]=u.dataToCoord(e[l]),r.geometry.addSprite(A,[b.width*w,b.height*w],_,s.textAlign,s.textVerticalAlign)}},this),i.getZr().refreshImmediately(),r.material.set("uvScale",i.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function oi(e){Xo.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}oi.prototype={constructor:oi,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};jo(oi,Xo);function Wi(e,t,r){Qi.call(this,e,t,r)}Wi.prototype={constructor:Wi,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};jo(Wi,Qi);var Xi=function(){this._pool={},this._allocatedTextures=[]};Xi.prototype={constructor:Xi,get:function(e){var t=vo(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var i=new ee(e);return this._allocatedTextures.push(i),i}return r.pop()},put:function(e){var t=vo(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var ds={width:512,height:512,type:P.UNSIGNED_BYTE,format:P.RGBA,wrapS:P.CLAMP_TO_EDGE,wrapT:P.CLAMP_TO_EDGE,minFilter:P.LINEAR_MIPMAP_LINEAR,magFilter:P.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},Rn=Object.keys(ds);function vo(e){Se.defaultsWithPropList(e,ds,Rn),Vh(e);for(var t="",r=0;r<Rn.length;r++){var i=Rn[r],n=e[i].toString();t+=n}return t}function Vh(e){var t=zh(e.width,e.height);e.format===P.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==P.NEAREST_MIPMAP_NEAREST||e.minFilter==P.NEAREST_MIPMAP_LINEAR?e.minFilter=P.NEAREST:(e.minFilter==P.LINEAR_MIPMAP_LINEAR||e.minFilter==P.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=P.LINEAR)),t||(e.wrapS=P.CLAMP_TO_EDGE,e.wrapT=P.CLAMP_TO_EDGE)}function zh(e,t){return(e&e-1)===0&&(t&t-1)===0}const Gh=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`;var Bt=["px","nx","py","ny","pz","nz"];G.import(Gh);function On(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var i=e.material.get("alphaCutoff");return i||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function po(e,t){var r=e.material,i=t.material;return r.get("diffuseMap")!==i.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(i.get("alphaCutoff")||0)}var _t=We.extend(function(){return{softShadow:_t.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new Ee,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new Xi}},function(){this._gaussianPassH=new Le({fragment:G.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Le({fragment:G.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Le({fragment:G.source("clay.sm.debug_depth")})},{render:function(e,t,r,i){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,i),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,i=0,n=0,a=t||r.width/4,o=a;this.softShadow===_t.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var l=this._textures[s];e.setViewport(i,n,a*l.width/l.height,o),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),i+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===_t.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var i=0;i<t.lights.length;i++){var n=t.lights[i];n.castShadow&&!n.invisible&&this._lightsCastShadow.push(n)}},_renderShadowPass:function(e,t,r,i){for(var n in this._shadowMapNumber)this._shadowMapNumber[n]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(i||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o=[],s=[],l=[],u=[],h=[],c=[],d,f=0;f<this._lightsCastShadow.length;f++){var v=this._lightsCastShadow[f];if(v.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(v.shadowCascade>4){console.warn("Support at most 4 cascade");continue}v.shadowCascade>1&&(d=v),this.renderDirectionalLightShadow(e,t,r,v,h,u,l)}else v.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,v,s,o):v.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,v,c);this._shadowMapNumber[v.type]++}for(var p in this._shadowMapNumber)for(var m=this._shadowMapNumber[p],g=p+"_SHADOWMAP_COUNT",f=0;f<this._receivers.length;f++){var T=this._receivers[f],x=T.material;x.fragmentDefines[g]!==m&&(m>0?x.define("fragment",g,m):x.isDefined("fragment",g)&&x.undefine("fragment",g))}for(var f=0;f<this._receivers.length;f++){var T=this._receivers[f],x=T.material;d?x.define("fragment","SHADOW_CASCADE",d.shadowCascade):x.undefine("fragment","SHADOW_CASCADE")}var _=t.shadowUniforms;function b(I){return I.height}if(l.length>0){var w=l.map(b);if(_.directionalLightShadowMaps={value:l,type:"tv"},_.directionalLightMatrices={value:u,type:"m4v"},_.directionalLightShadowMapSizes={value:w,type:"1fv"},d){var A=h.slice(),E=h.slice();A.pop(),E.shift(),A.reverse(),E.reverse(),u.reverse(),_.shadowCascadeClipsNear={value:A,type:"1fv"},_.shadowCascadeClipsFar={value:E,type:"1fv"}}}if(o.length>0){var M=o.map(b),_=t.shadowUniforms;_.spotLightShadowMaps={value:o,type:"tv"},_.spotLightMatrices={value:s,type:"m4v"},_.spotLightShadowMapSizes={value:M,type:"1fv"}}c.length>0&&(_.pointLightShadowMaps={value:c,type:"tv"})},renderDirectionalLightShadow:function(){var e=new en,t=new H,r=new He,i=new H,n=new H,a=new H,o=new H;return function(s,l,u,h,c,d,f){var v=this._getDepthMaterial(h),p={getMaterial:function(J){return J.shadowDepthMaterial||v},isMaterialChanged:po,getUniform:On,ifRender:function(J){return J.castShadow},sortCompare:st.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var m=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(m).applyTransform(u.viewMatrix)}var g=Math.min(-l.viewBoundingBoxLastFrame.min.z,u.far),T=Math.max(-l.viewBoundingBoxLastFrame.max.z,u.near),x=this._getDirectionalLightCamera(h,l,u),_=a.array;o.copy(x.projectionMatrix),R.invert(n.array,x.worldTransform.array),R.multiply(n.array,n.array,u.worldTransform.array),R.multiply(_,o.array,n.array);for(var b=[],w=u instanceof Ie,A=(u.near+u.far)/(u.near-u.far),E=2*u.near*u.far/(u.near-u.far),M=0;M<=h.shadowCascade;M++){var I=T*Math.pow(g/T,M/h.shadowCascade),C=T+(g-T)*M/h.shadowCascade,B=I*h.cascadeSplitLogFactor+C*(1-h.cascadeSplitLogFactor);b.push(B),c.push(-(-B*A+E)/-B)}var z=this._getTexture(h,h.shadowCascade);f.push(z);var O=s.viewport,U=s.gl;this._frameBuffer.attach(z),this._frameBuffer.bind(s),U.clear(U.COLOR_BUFFER_BIT|U.DEPTH_BUFFER_BIT);for(var M=0;M<h.shadowCascade;M++){var j=b[M],Y=b[M+1];w?R.perspective(t.array,u.fov/180*Math.PI,u.aspect,j,Y):R.ortho(t.array,u.left,u.right,u.bottom,u.top,j,Y),e.setFromProjection(t),e.getTransformedBoundingBox(r,n),r.applyProjection(o);var k=r.min.array,Z=r.max.array;k[0]=Math.max(k[0],-1),k[1]=Math.max(k[1],-1),Z[0]=Math.min(Z[0],1),Z[1]=Math.min(Z[1],1),i.ortho(k[0],Z[0],k[1],Z[1],1,-1),x.projectionMatrix.multiplyLeft(i);var D=h.shadowResolution||512;s.setViewport((h.shadowCascade-M-1)*D,0,D,D,1);var q=l.updateRenderList(x);s.renderPass(q.opaque,x,p),this.softShadow===_t.VSM&&this._gaussianFilter(s,z,z.width);var Q=new H;Q.copy(x.viewMatrix).multiplyLeft(x.projectionMatrix),d.push(Q.array),x.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(O)}}(),renderSpotLightShadow:function(e,t,r,i,n){var a=this._getTexture(r),o=this._getSpotLightCamera(r),s=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),u={getMaterial:function(d){return d.shadowDepthMaterial||l},isMaterialChanged:po,getUniform:On,ifRender:function(d){return d.castShadow},sortCompare:st.opaqueSortCompare},h=t.updateRenderList(o);e.renderPass(h.opaque,o,u),this._frameBuffer.unbind(e),this.softShadow===_t.VSM&&this._gaussianFilter(e,a,a.width);var c=new H;c.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),n.push(a),i.push(c.array)},renderPointLightShadow:function(e,t,r,i){var n=this._getTexture(r),a=e.gl;i.push(n);var o=this._getDepthMaterial(r),s={getMaterial:function(T){return T.shadowDepthMaterial||o},getUniform:On,sortCompare:st.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},u=new He,h=r.getWorldPosition().array,c=new He,d=r.range;c.min.setArray(h),c.max.setArray(h);var f=new L(d,d,d);c.max.add(f),c.min.sub(f);var v={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(T){if(T.isRenderable()&&T.castShadow){var x=T.geometry;if(!x.boundingBox){for(var _=0;_<Bt.length;_++)l[Bt[_]].push(T);return}if(u.transformFrom(x.boundingBox,T.worldTransform),!u.intersectBoundingBox(c))return;u.updateVertices();for(var _=0;_<Bt.length;_++)v[Bt[_]]=!1;for(var _=0;_<8;_++){var b=u.vertices[_],w=b[0]-h[0],A=b[1]-h[1],E=b[2]-h[2],M=Math.abs(w),I=Math.abs(A),C=Math.abs(E);M>I?M>C?v[w>0?"px":"nx"]=!0:v[E>0?"pz":"nz"]=!0:I>C?v[A>0?"py":"ny"]=!0:v[E>0?"pz":"nz"]=!0}for(var _=0;_<Bt.length;_++)v[Bt[_]]&&l[Bt[_]].push(T)}});for(var p=0;p<6;p++){var m=Bt[p],g=this._getPointLightCamera(r,m);this._frameBuffer.attach(n,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+p),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[m],g,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var i=r?"clay.sm.distance.":"clay.sm.depth.";t=new ot({precision:this.precision,shader:new G(G.source(i+"vertex"),G.source(i+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===_t.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var i={width:r,height:r,type:V.FLOAT},n=this._texturePool.get(i);this._frameBuffer.attach(n),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",n),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(n)},_getTexture:function(e,t){var r=e.__uid__,i=this._textures[r],n=e.shadowResolution||512;return t=t||1,i||(e.type==="POINT_LIGHT"?i=new sr:i=new ee,i.width=n*t,i.height=n,this.softShadow===_t.VSM?(i.type=V.FLOAT,i.anisotropic=4):(i.minFilter=P.NEAREST,i.magFilter=P.NEAREST,i.useMipmap=!1),this._textures[r]=i),i},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Ie,nx:new Ie,py:new Ie,ny:new Ie,pz:new Ie,nz:new Ie});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(L.POSITIVE_X,L.NEGATIVE_Y);break;case"nx":r.lookAt(L.NEGATIVE_X,L.NEGATIVE_Y);break;case"py":r.lookAt(L.POSITIVE_Y,L.POSITIVE_Z);break;case"ny":r.lookAt(L.NEGATIVE_Y,L.NEGATIVE_Z);break;case"pz":r.lookAt(L.POSITIVE_Z,L.NEGATIVE_Y);break;case"nz":r.lookAt(L.NEGATIVE_Z,L.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new H,t=new He,r=new He;return function(i,n,a){this._lightCameras.directional||(this._lightCameras.directional=new Dr);var o=this._lightCameras.directional;t.copy(n.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(i.rotation),o.scale.copy(i.scale),o.updateWorldTransform(),H.invert(e,o.worldTransform),H.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Ie);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),R.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var i=0;i<this._receivers.length;i++){var n=this._receivers[i];if(n.material){var a=n.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});_t.VSM=1;_t.PCF=2;var si=We.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return i.width instanceof Function?o=i.width.call(this,t):o=i.width,i.height instanceof Function?s=i.height.call(this,t):s=i.height,(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),n.width=o,n.height=s,n},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),mo=We.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(t.inputs){for(var r in t.inputs)if(t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var i=t.inputs[r],n=this.findPin(i);n?t.link(r,n.node,n.pin):console.warn(typeof i=="string"?"Node "+i+" not exist":"Pin of "+i.node+"."+i.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof si)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var i=this.nodes[r];i.name===e.node&&(t=i)}else t=e.node;if(t){var n=e.pin;if(n||t.outputs&&(n=Object.keys(t.outputs)[0]),t.outputs[n])return{node:t,pin:n}}}}),Uh=mo.extend(function(){return{_outputs:[],_texturePool:new Xi,_frameBuffer:new Ee({depthBuffer:!1})}},{addNode:function(e){mo.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),Hh=si.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new Ee},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var i=this.frameBuffer;for(var n in this.outputs){var a=this.updateParameter(n,e),o=this.outputs[n],s=this._compositor.allocateTexture(a);this._outputTextures[n]=s;var l=o.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),i.attach(s,l)}i.bind(e);var u=e.getGLExtension("EXT_draw_buffers");if(u){var h=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&h.push(l);u.drawBuffersEXT(h)}e.saveClear(),e.clearBit=P.DEPTH_BUFFER_BIT|P.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),i.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}}),kh=si.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),Wh=si.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new Le({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var i in this.inputLinks){var n=this.inputLinks[i],a=n.node.getOutput(e,n.pin);this.pass.setUniform(i,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var l=this.updateParameter(s,e);isNaN(l.width)&&this.updateParameter(s,e);var u=this.outputs[s],h=this._compositor.allocateTexture(l);this._outputTextures[s]=h;var c=u.attachment||r.COLOR_ATTACHMENT0;typeof c=="string"&&(c=r[c]),o[c]=h}this._compositor.getFrameBuffer().bind(e);for(var c in o)this._compositor.getFrameBuffer().attach(o[c],c);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var i in this.inputLinks){var n=this.inputLinks[i];n.node.removeReference(n.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return typeof i.width=="function"?o=i.width.call(this,t):o=i.width,typeof i.height=="function"?s=i.height.call(this,t):s=i.height,o=Math.ceil(o),s=Math.ceil(s),(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),n.width=o,n.height=s,n},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){si.prototype.clear.call(this),this.pass.material.disableTexturesAll()}});const Xh=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,vs=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,jh=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,ps=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,Zh=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,ms=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,gs=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,_s=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,ys=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,xs=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,qh=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,Ts=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,ws=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function Yh(e){e.import(Xh),e.import(vs),e.import(jh),e.import(ps),e.import(Zh),e.import(ms),e.import(gs),e.import(_s),e.import(ys),e.import(xs),e.import(qh),e.import(Ts),e.import(ws)}Yh(G);var Kh=/^#source\((.*?)\)/;function $h(e,t){var r=new Uh;t=t||{};var i={textures:{},parameters:{}},n=function(s,l){for(var u=0;u<e.nodes.length;u++){var h=e.nodes[u],c=Qh(h,i,t);c&&r.addNode(c)}};for(var a in e.parameters){var o=e.parameters[a];i.parameters[a]=fa(o)}return tc(e,i,t,function(s){i.textures=s,n()}),r}function Qh(e,t,r){var i=e.type||"filter",n,a,o;if(i==="filter"){var s=e.shader.trim(),l=Kh.exec(s);if(l?n=G.source(l[1].trim()):s.charAt(0)==="#"&&(n=t.shaders[s.substr(1)]),n||(n=s),!n)return}if(e.inputs){a={};for(var u in e.inputs)typeof e.inputs[u]=="string"?a[u]=e.inputs[u]:a[u]={node:e.inputs[u].node,pin:e.inputs[u].pin}}if(e.outputs){o={};for(var u in e.outputs){var h=e.outputs[u];o[u]={},h.attachment!=null&&(o[u].attachment=h.attachment),h.keepLastFrame!=null&&(o[u].keepLastFrame=h.keepLastFrame),h.outputLastFrame!=null&&(o[u].outputLastFrame=h.outputLastFrame),h.parameters&&(o[u].parameters=fa(h.parameters))}}var c;if(i==="scene"?c=new Hh({name:e.name,scene:r.scene,camera:r.camera,outputs:o}):i==="texture"?c=new kh({name:e.name,outputs:o}):c=new Wh({name:e.name,shader:n,inputs:a,outputs:o}),c){if(e.parameters)for(var u in e.parameters){var d=e.parameters[u];typeof d=="string"?(d=d.trim(),d.charAt(0)==="#"?d=t.textures[d.substr(1)]:c.on("beforerender",rc(u,bs(d)))):typeof d=="function"&&c.on("beforerender",d),c.setParameter(u,d)}if(e.defines&&c.pass)for(var u in e.defines){var d=e.defines[u];c.pass.material.define("fragment",u,d)}}return c}function Jh(e,t){return e}function ec(e,t){return t}function fa(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(i){var n=e[i];n!=null&&(typeof n=="string"&&(n=V[n]),t[i]=n)});var r=e.scale||1;return["width","height"].forEach(function(i){if(e[i]!=null){var n=e[i];typeof n=="string"?(n=n.trim(),t[i]=ic(i,bs(n),r)):t[i]=n}}),t.width||(t.width=Jh),t.height||(t.height=ec),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function tc(e,t,r,i){if(!e.textures){i({});return}var n={},a=0,o=!1,s=r.textureRootPath;Se.each(e.textures,function(l,u){var h,c=l.path,d=fa(l.parameters);if(Array.isArray(c)&&c.length===6)s&&(c=c.map(function(f){return Se.relative2absolute(f,s)})),h=new sr(d);else if(typeof c=="string")s&&(c=Se.relative2absolute(c,s)),h=new ee(d);else return;h.load(c),a++,h.once("success",function(){n[u]=h,a--,a===0&&(i(n),o=!0)})}),a===0&&!o&&i(n)}function rc(e,t){return function(r){var i=r.getDevicePixelRatio(),n=r.getWidth(),a=r.getHeight(),o=t(n,a,i);this.setParameter(e,o)}}function ic(e,t,r){return r=r||1,function(i){var n=i.getDevicePixelRatio(),a=i.getWidth()*r,o=i.getHeight()*r;return t(a,o,n)}}function bs(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function Pr(e,t){for(var r=0,i=1/t,n=e;n>0;)r=r+i*(n%t),n=Math.floor(n/t),i=i/t;return r}const nc=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;G.import(nc);function Ss(e){for(var t=new Uint8Array(e*e*4),r=0,i=new L,n=0;n<e;n++)for(var a=0;a<e;a++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(i.x*.5+.5)*255,t[r++]=(i.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function go(e){return new ee({pixels:Ss(e),wrapS:V.REPEAT,wrapT:V.REPEAT,width:e,height:e})}function ac(e,t,r){var i=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var a=Pr(n+t,2)*(r?1:2)*Math.PI,o=Pr(n+t,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,u=Math.cos(o)*s,h=Math.sin(a)*Math.sin(o)*s;i[n*3]=l,i[n*3+1]=u,i[n*3+2]=h}return i}function Ct(e){e=e||{},this._ssaoPass=new Le({fragment:G.source("ecgl.ssao.estimate")}),this._blurPass=new Le({fragment:G.source("ecgl.ssao.blur")}),this._framebuffer=new Ee({depthBuffer:!1}),this._ssaoTexture=new ee,this._blurTexture=new ee,this._blurTexture2=new ee,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}Ct.prototype.setDepthTexture=function(e){this._depthTex=e};Ct.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};Ct.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new H;H.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,u=this._blurTexture,h=this._blurTexture2;l.width=i/2,l.height=n/2,u.width=i,u.height=n,h.width=i,h.height=n,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[i/2,n/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(u),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(h),o.setUniform("textureSize",[i,n]),o.setUniform("direction",1),o.setUniform("ssaoTexture",u),o.render(e),this._framebuffer.unbind(e);var c=e.clearColor;e.gl.clearColor(c[0],c[1],c[2],c[3])};Ct.prototype.getTargetTexture=function(){return this._blurTexture2};Ct.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};Ct.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=ac(e,t*e,!!this._normalTex)};Ct.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=Ss(e),t.width=t.height=e,t.dirty()):(t=go(e),this._ssaoPass.setUniform("noiseTex",go(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};Ct.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};const oc=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;G.import(oc);function Dt(e){e=e||{},this._ssrPass=new Le({fragment:G.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Le({fragment:G.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Le({fragment:G.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Le({fragment:G.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new ee({type:V.HALF_FLOAT}),this._texture2=new ee({type:V.HALF_FLOAT}),this._texture3=new ee({type:V.HALF_FLOAT}),this._prevTexture=new ee({type:V.HALF_FLOAT}),this._currentTexture=new ee({type:V.HALF_FLOAT}),this._frameBuffer=new Ee({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Dt.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};Dt.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=n,s.height=l.height=a;var u=this._frameBuffer,h=this._ssrPass,c=this._blurPass1,d=this._blurPass2,f=this._blendPass,v=new H,p=new H;H.transpose(v,t.worldTransform),H.transpose(p,t.viewMatrix),h.setUniform("sourceTexture",r),h.setUniform("projection",t.projectionMatrix.array),h.setUniform("projectionInv",t.invProjectionMatrix.array),h.setUniform("toViewSpace",v.array),h.setUniform("toWorldSpace",p.array),h.setUniform("nearZ",t.near);var m=i/this._totalSamples*this._samplePerFrame;if(h.setUniform("jitterOffset",m),h.setUniform("sampleOffset",i*this._samplePerFrame),c.setUniform("textureSize",[o.width,o.height]),d.setUniform("textureSize",[n,a]),d.setUniform("sourceTexture",r),c.setUniform("projection",t.projectionMatrix.array),d.setUniform("projection",t.projectionMatrix.array),u.attach(o),u.bind(e),h.render(e),this._physicallyCorrect&&(u.attach(this._currentTexture),f.setUniform("texture1",this._prevTexture),f.setUniform("texture2",o),f.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),f.render(e)),u.attach(s),c.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),c.render(e),u.attach(l),d.setUniform("texture",s),d.render(e),u.unbind(e),this._physicallyCorrect){var g=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=g}};Dt.prototype.getTargetTexture=function(){return this._texture3};Dt.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};Dt.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=Tt.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};Dt.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};Dt.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};Dt.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};const _o=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],sc=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;G.import(sc);function In(e,t,r,i,n){var a=e.gl;t.setUniform(a,"1i",r,n),a.activeTexture(a.TEXTURE0+n),i.isRenderable()?i.bind(e):i.unbind(e)}function lc(e,t,r,i,n){var a,o,s,l,u=e.gl;return function(h,c,d){if(!(l&&l.material===h.material)){var f=h.material,v=h.__program,p=f.get("roughness");p==null&&(p=1);var m=f.get("normalMap")||t,g=f.get("roughnessMap"),T=f.get("bumpMap"),x=f.get("uvRepeat"),_=f.get("uvOffset"),b=f.get("detailUvRepeat"),w=f.get("detailUvOffset"),A=!!T&&f.isTextureEnabled("bumpMap"),E=!!g&&f.isTextureEnabled("roughnessMap"),M=f.isDefined("fragment","DOUBLE_SIDED");T=T||r,g=g||i,d!==c?(c.set("normalMap",m),c.set("bumpMap",T),c.set("roughnessMap",g),c.set("useBumpMap",A),c.set("useRoughnessMap",E),c.set("doubleSide",M),x!=null&&c.set("uvRepeat",x),_!=null&&c.set("uvOffset",_),b!=null&&c.set("detailUvRepeat",b),w!=null&&c.set("detailUvOffset",w),c.set("roughness",p)):(v.setUniform(u,"1f","roughness",p),a!==m&&In(e,v,"normalMap",m,0),o!==T&&T&&In(e,v,"bumpMap",T,1),s!==g&&g&&In(e,v,"roughnessMap",g,2),x!=null&&v.setUniform(u,"2f","uvRepeat",x),_!=null&&v.setUniform(u,"2f","uvOffset",_),b!=null&&v.setUniform(u,"2f","detailUvRepeat",b),w!=null&&v.setUniform(u,"2f","detailUvOffset",w),v.setUniform(u,"1i","useBumpMap",+A),v.setUniform(u,"1i","useRoughnessMap",+E),v.setUniform(u,"1i","doubleSide",+M)),a=m,o=T,s=g,l=h}}}function Vr(e){this._depthTex=new ee({format:V.DEPTH_COMPONENT,type:V.UNSIGNED_INT}),this._normalTex=new ee({type:V.HALF_FLOAT}),this._framebuffer=new Ee,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Ee.DEPTH_ATTACHMENT),this._normalMaterial=new ot({shader:new G(G.source("ecgl.normal.vertex"),G.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=xt.createBlank("#000"),this._defaultBumpMap=xt.createBlank("#000"),this._defaultRoughessMap=xt.createBlank("#000"),this._debugPass=new Le({fragment:G.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Vr.prototype.getDepthTexture=function(){return this._depthTex};Vr.prototype.getNormalTexture=function(){return this._normalTex};Vr.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=i,a.height=n,o.width=i,o.height=n;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(u){return u.renderNormal},beforeRender:lc(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};Vr.prototype.renderDebug=function(e){this._debugPass.render(e)};Vr.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function yi(e){e=e||{},this._edgePass=new Le({fragment:G.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new ee({type:V.HALF_FLOAT}),this._frameBuffer=new Ee,this._frameBuffer.attach(this._targetTexture)}yi.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=n,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),s.unbind(e)};yi.prototype.getTargetTexture=function(){return this._targetTexture};yi.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};yi.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};const uc={nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},hc=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,cc=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;G.import(vs);G.import(ps);G.import(ms);G.import(gs);G.import(_s);G.import(ys);G.import(xs);G.import(Ts);G.import(ws);G.import(hc);G.import(cc);function Es(e,t){return{color:{parameters:{width:e,height:t}}}}var da=["composite","FXAA"];function ne(){this._width,this._height,this._dpr,this._sourceTexture=new ee({type:V.HALF_FLOAT}),this._depthTexture=new ee({format:V.DEPTH_COMPONENT,type:V.UNSIGNED_INT}),this._framebuffer=new Ee,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Ee.DEPTH_ATTACHMENT),this._normalPass=new Vr,this._compositor=$h(uc);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=da.map(function(i){return this._compositor.getNodeByName(i)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new Ct(r),this._ssrPass=new Dt(r),this._edgePass=new yi(r)}ne.prototype.resize=function(i,n,r){r=r||1;var i=i*r,n=n*r,a=this._sourceTexture,o=this._depthTexture;a.width=i,a.height=n,o.width=i,o.height=n;var s={getWidth:function(){return i},getHeight:function(){return n},getDevicePixelRatio:function(){return r}};function l(u,h){if(typeof u[h]=="function"){var c=u[h].__original||u[h];u[h]=function(d){return c.call(this,s)},u[h].__original=c}}this._compositor.nodes.forEach(function(u){for(var h in u.outputs){var c=u.outputs[h].parameters;c&&(l(c,"width"),l(c,"height"))}for(var d in u.parameters)l(u.parameters,d)}),this._width=i,this._height=n,this._dpr=r};ne.prototype.getWidth=function(){return this._width};ne.prototype.getHeight=function(){return this._height};ne.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};ne.prototype._getPrevNode=function(e){for(var t=da.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};ne.prototype._getNextNode=function(e){for(var t=da.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};ne.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(e.inputs.texture=t.name,r?(e.outputs=Es(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};ne.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(r?(t.outputs=Es(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};ne.prototype.updateNormal=function(e,t,r,i){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};ne.prototype.updateSSAO=function(e,t,r,i){this._ssaoPass.update(e,r,i)};ne.prototype.enableSSAO=function(){this._enableSSAO=!0};ne.prototype.disableSSAO=function(){this._enableSSAO=!1};ne.prototype.enableSSR=function(){this._enableSSR=!0};ne.prototype.disableSSR=function(){this._enableSSR=!1};ne.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};ne.prototype.getSourceFrameBuffer=function(){return this._framebuffer};ne.prototype.getSourceTexture=function(){return this._sourceTexture};ne.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};ne.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};ne.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};ne.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};ne.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};ne.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};ne.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};ne.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};ne.prototype.enableEdge=function(){this._enableEdge=!0};ne.prototype.disableEdge=function(){this._enableEdge=!1};ne.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};ne.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};ne.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=i;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break}};ne.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,i={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};ne.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};ne.prototype.setEdgeColor=function(e){var t=y.parseColor(e);this._edgePass.setParameter("edgeColor",t)};ne.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};ne.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:y.Texture.NEAREST,magFilter:y.Texture.NEAREST,flipY:!1})};ne.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};ne.prototype.isSSREnabled=function(){return this._enableSSR};ne.prototype.composite=function(e,t,r,i,n){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,r,a,n),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,n),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,u=Math.floor(_o.length/2/l),h=n%u,c=0;c<l*2;c++)s[c]=_o[c+h*l*2];for(var c=0;c<this._dofBlurNodes.length;c++)this._dofBlurNodes[c].setParameter("percent",n/30),this._dofBlurNodes[c].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,i)};ne.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function $n(e){for(var t=[],r=0;r<30;r++)t.push([Pr(r,2),Pr(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new ee,this._sourceFb=new Ee,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new ee,this._outputTex=new ee;var i=this._blendPass=new Le({fragment:G.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new Ee({depthBuffer:!1}),this._outputPass=new Le({fragment:G.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}$n.prototype={constructor:$n,jitterProjection:function(e,t){var r=e.viewport,i=r.devicePixelRatio||e.getDevicePixelRatio(),n=r.width*i,a=r.height*i,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new H;s.array[12]=(o[0]*2-1)/n,s.array[13]=(o[1]*2-1)/a,H.mul(t.projectionMatrix,s,t.projectionMatrix),H.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var i=this._blendPass;this._frame===0?(i.setUniform("weight1",0),i.setUniform("weight2",1)):(i.setUniform("weight1",.9),i.setUniform("weight2",.1)),i.setUniform("texture1",this._prevFrameTex),i.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),i.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function fe(e){e=e||"perspective",this.layer=null,this.scene=new Wt,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new ne,this._temporalSS=new $n,this._shadowMapPass=new _t;for(var t=[],r=0,i=0;i<30;i++){for(var n=[],a=0;a<6;a++)n.push(Pr(r,2)*4-2),n.push(Pr(r,3)*4-2),r++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}fe.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Ie||(this.camera=new Ie,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Dr||(this.camera=new Dr,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};fe.prototype.setViewport=function(e,t,r,i,n){this.camera instanceof Ie&&(this.camera.aspect=r/i),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=i,this.viewport.devicePixelRatio=n,this._compositor.resize(r*n,i*n),this._temporalSS.resize(r*n,i*n)};fe.prototype.containPoint=function(e,t){var r=this.viewport,i=this.layer.renderer.getHeight();return t=i-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var yo=new $;fe.prototype.castRay=function(e,t,r){var i=this.layer.renderer,n=i.viewport;return i.viewport=this.viewport,i.screenToNDC(e,t,yo),this.camera.castRay(yo,r),i.viewport=n,r};fe.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],i=r.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};fe.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};fe.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};fe.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};fe.prototype.hasDOF=function(){return this._enableDOF};fe.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};fe.prototype._doRender=function(e,t,r){var i=this.scene,n=this.camera;r=r||0,this._updateTransparent(e,i,n,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,i,n,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,i,n,this._temporalSS.getFrame())),this._updateSSAO(e,i,n,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(i,n,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,i,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,i,n,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(i,n,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(i,n,!0,!0)};fe.prototype._updateTransparent=function(e,t,r,i){for(var n=new L,a=new H,o=r.getWorldPosition(),s=t.getRenderList(r).transparent,l=0;l<s.length;l++){var u=s[l],h=u.geometry;H.invert(a,u.worldTransform),L.transformMat4(n,o,a),h.needsSortTriangles&&h.needsSortTriangles()&&h.doSortTriangles(n,i),h.needsSortVertices&&h.needsSortVertices()&&h.doSortVertices(n,i)}};fe.prototype._updateSSAO=function(e,t,r){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var n=t.getRenderList(r),a=0;a<n.opaque.length;a++){var o=n.opaque[a];o.renderNormal&&o.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};fe.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),i=r.opaque,n=0;n<i.length;n++)i[n].receiveShadow&&(i[n].material.set("pcfKernel",t),i[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};fe.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};fe.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var i=e.getModel("bloom"),n=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),u=e.getModel("colorCorrection");i.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),n.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(i.get("intensity")),r.setEdgeColor(n.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),t),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(h){r.setSSAOParameter(h,o.get(h))}),["quality","maxRoughness","physical"].forEach(function(h){r.setSSRParameter(h,s.get(h))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(h){r.setDOFParameter(h,a.get(h))}),["brightness","contrast","saturation"].forEach(function(h){r.setColorCorrection(h,u.get(h))})};fe.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};fe.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};fe.prototype.isLinearSpace=function(){return this._enablePostEffect};fe.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};fe.prototype.add=function(e){this.rootNode.add(e)};fe.prototype.remove=function(e){this.rootNode.remove(e)};fe.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(fe.prototype,oa);function fc(e,t){var r=e.getBoxLayoutParams(),i=Ji(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=e.get("boxWidth"),a=e.get("boxHeight"),o=e.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[n,a,o]}function dc(e,t){var r={};function i(n,a){r[n]=r[n]||[1/0,-1/0],r[n][0]=Math.min(a[0],r[n][0]),r[n][1]=Math.max(a[1],r[n][1])}e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData();["x","y","z"].forEach(function(o){a.mapDimensionsAll(o,!0).forEach(function(s){i(o,a.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){e.eachComponent(n,function(a){var o=n.charAt(0),s=a.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var u=l.getAxis(o);if(!u){var h=aa(r[o]||[1/0,-1/0],a);u=new Wi(o,h),u.type=a.get("type");var c=u.type==="category";u.onBand=c&&a.get("boundaryGap"),u.inverse=a.get("inverse"),a.axis=u,u.model=a,u.getLabelModel=function(){return a.getModel("axisLabel",s.getModel("axisLabel"))},u.getTickModel=function(){return a.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(u)}}},this)},this),this.resize(this.model,t)}var vc={dimensions:oi.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new fe;var o=new oi;o.model=a,o.viewGL=a.__viewGL,a.coordinateSystem=o,r.push(o),o.resize=fc,o.update=dc});var i=["xAxis3D","yAxis3D","zAxis3D"];function n(a,o){return i.map(function(s){var l=a.getReferringComponents(s).models[0];return l==null&&(l=o.getComponent(s)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var o=a.getReferringComponents("grid3D").models[0];if(o==null){var s=n(a,e),o=s[0].getCoordSysModel();s.forEach(function(h){h.getCoordSysModel()})}var l=o.coordinateSystem;a.coordinateSystem=l}}),r}},As=Ir.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});Xl(As);var Ls={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},pc=ce({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},Ls),va=ce({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},Ls),mc=kt({scale:!0,min:"dataMin",max:"dataMax"},va),Ms=kt({logBase:10},va);Ms.scale=!0;const gc={categoryAxis3D:pc,valueAxis3D:va,timeAxis3D:mc,logAxis3D:Ms};var _c=["value","category","time","log"];function yc(e,t,r,i,n){_c.forEach(function(a){var o=r.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(s,l){var u=l.getTheme();ce(s,u.get(a+"Axis3D")),ce(s,this.getDefaultOption()),s.type=i(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=Ll.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:ce(Al(gc[a+"Axis3D"]),n||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+"Axis3D",Ml(i,t))}function xc(e,t){return t.type||(t.data?"category":"value")}function Tc(e){e.registerComponentModel(an),e.registerComponentView(Fh),e.registerCoordinateSystem("grid3D",vc),["x","y","z"].forEach(function(t){yc(e,t,As,xc,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(i){i.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}ke(Tc);const zr={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}},Cs={getFilledRegions:function(e,t){var r=(e||[]).slice(),i;if(typeof t=="string"?(t=kn(t),i=t&&t.geoJson):t&&t.features&&(i=t),!i)return[];for(var n={},a=i.features,o=0;o<r.length;o++)n[r[o].name]=r[o];for(var o=0;o<a.length;o++){var s=a[o].properties.name;n[s]||r.push({name:s})}return r},defaultOption:{show:!0,zlevel:-10,map:"",left:0,top:0,width:"100%",height:"100%",boxWidth:100,boxHeight:10,boxDepth:"auto",regionHeight:3,environment:"auto",groundPlane:{show:!1,color:"#aaa"},shading:"lambert",light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}};var Gr=Ir.extend({type:"geo3D",layoutMode:"box",coordinateSystem:null,optionUpdated:function(){var e=this.option;e.regions=this.getFilledRegions(e.regions,e.map);var t=pi(e.data||[],{coordDimensions:["value"],encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),r=new St(t,this);r.initData(e.regions);var i={};r.each(function(n){var a=r.getName(n),o=r.getItemModel(n);i[a]=o}),this._regionModelMap=i,this._data=r},getData:function(){return this._data},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Er(null,this)},getRegionPolygonCoords:function(e){var t=this.getData().getName(e),r=this.coordinateSystem.getRegion(t);return r?r.geometries:[]},getFormattedLabel:function(e,t){var r=this._data.getName(e),i=this.getRegionModel(e),n=i.get(t==="normal"?["label","formatter"]:["emphasis","label","formatter"]);n==null&&(n=i.get(["label","formatter"]));var a={name:r};if(typeof n=="function")return a.status=t,n(a);if(typeof n=="string"){var o=a.seriesName;return n.replace("{a}",o??"")}else return r},defaultOption:{regions:[]}});ce(Gr.prototype,Cs);ce(Gr.prototype,nn);ce(Gr.prototype,Br);ce(Gr.prototype,Fr);ce(Gr.prototype,zr);function Ds(e,t,r){r=r||2;var i=t&&t.length,n=i?t[0]*r:e.length,a=Ps(e,0,n,r,!0),o=[];if(!a)return o;var s,l,u,h,c,d,f;if(i&&(a=Ac(e,t,a,r)),e.length>80*r){s=u=e[0],l=h=e[1];for(var v=r;v<n;v+=r)c=e[v],d=e[v+1],c<s&&(s=c),d<l&&(l=d),c>u&&(u=c),d>h&&(h=d);f=Math.max(u-s,h-l)}return ui(a,o,r,s,l,f),o}function Ps(e,t,r,i,n){var a,o;if(n===ea(e,t,r,i)>0)for(a=t;a<r;a+=i)o=xo(a,e[a],e[a+1],o);else for(a=r-i;a>=t;a-=i)o=xo(a,e[a],e[a+1],o);return o&&ar(o,o.next)&&(ci(o),o=o.next),o}function li(e,t){if(!e)return e;t||(t=e);var r=e,i;do if(i=!1,!r.steiner&&(ar(r,r.next)||Ye(r.prev,r,r.next)===0)){if(ci(r),r=t=r.prev,r===r.next)return null;i=!0}else r=r.next;while(i||r!==t);return t}function ui(e,t,r,i,n,a,o){if(e){!o&&a&&Dc(e,i,n,a);for(var s=e,l,u;e.prev!==e.next;){if(l=e.prev,u=e.next,a?bc(e,i,n,a):wc(e)){t.push(l.i/r),t.push(e.i/r),t.push(u.i/r),ci(e),e=u.next,s=u.next;continue}if(e=u,e===s){o?o===1?(e=Sc(e,t,r),ui(e,t,r,i,n,a,2)):o===2&&Ec(e,t,r,i,n,a):ui(li(e),t,r,i,n,a,1);break}}}}function wc(e){var t=e.prev,r=e,i=e.next;if(Ye(t,r,i)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(ji(t.x,t.y,r.x,r.y,i.x,i.y,n.x,n.y)&&Ye(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function bc(e,t,r,i){var n=e.prev,a=e,o=e.next;if(Ye(n,a,o)>=0)return!1;for(var s=n.x<a.x?n.x<o.x?n.x:o.x:a.x<o.x?a.x:o.x,l=n.y<a.y?n.y<o.y?n.y:o.y:a.y<o.y?a.y:o.y,u=n.x>a.x?n.x>o.x?n.x:o.x:a.x>o.x?a.x:o.x,h=n.y>a.y?n.y>o.y?n.y:o.y:a.y>o.y?a.y:o.y,c=Qn(s,l,t,r,i),d=Qn(u,h,t,r,i),f=e.nextZ;f&&f.z<=d;){if(f!==e.prev&&f!==e.next&&ji(n.x,n.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Ye(f.prev,f,f.next)>=0)return!1;f=f.nextZ}for(f=e.prevZ;f&&f.z>=c;){if(f!==e.prev&&f!==e.next&&ji(n.x,n.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Ye(f.prev,f,f.next)>=0)return!1;f=f.prevZ}return!0}function Sc(e,t,r){var i=e;do{var n=i.prev,a=i.next.next;!ar(n,a)&&Ns(n,i,i.next,a)&&hi(n,a)&&hi(a,n)&&(t.push(n.i/r),t.push(i.i/r),t.push(a.i/r),ci(i),ci(i.next),i=e=a),i=i.next}while(i!==e);return i}function Ec(e,t,r,i,n,a){var o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&Rc(o,s)){var l=Rs(o,s);o=li(o,o.next),l=li(l,l.next),ui(o,t,r,i,n,a),ui(l,t,r,i,n,a);return}s=s.next}o=o.next}while(o!==e)}function Ac(e,t,r,i){var n=[],a,o,s,l,u;for(a=0,o=t.length;a<o;a++)s=t[a]*i,l=a<o-1?t[a+1]*i:e.length,u=Ps(e,s,l,i,!1),u===u.next&&(u.steiner=!0),n.push(Nc(u));for(n.sort(Lc),a=0;a<n.length;a++)Mc(n[a],r),r=li(r,r.next);return r}function Lc(e,t){return e.x-t.x}function Mc(e,t){if(t=Cc(e,t),t){var r=Rs(t,e);li(r,r.next)}}function Cc(e,t){var r=t,i=e.x,n=e.y,a=-1/0,o;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var s=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=i&&s>a){if(a=s,s===i){if(n===r.y)return r;if(n===r.next.y)return r.next}o=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!o)return null;if(i===a)return o.prev;var l=o,u=o.x,h=o.y,c=1/0,d;for(r=o.next;r!==l;)i>=r.x&&r.x>=u&&i!==r.x&&ji(n<h?i:a,n,u,h,n<h?a:i,n,r.x,r.y)&&(d=Math.abs(n-r.y)/(i-r.x),(d<c||d===c&&r.x>o.x)&&hi(r,e)&&(o=r,c=d)),r=r.next;return o}function Dc(e,t,r,i){var n=e;do n.z===null&&(n.z=Qn(n.x,n.y,t,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,Pc(n)}function Pc(e){var t,r,i,n,a,o,s,l,u=1;do{for(r=e,e=null,a=null,o=0;r;){for(o++,i=r,s=0,t=0;t<u&&(s++,i=i.nextZ,!!i);t++);for(l=u;s>0||l>0&&i;)s!==0&&(l===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,s--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=i}a.nextZ=null,u*=2}while(o>1);return e}function Qn(e,t,r,i,n){return e=32767*(e-r)/n,t=32767*(t-i)/n,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Nc(e){var t=e,r=e;do t.x<r.x&&(r=t),t=t.next;while(t!==e);return r}function ji(e,t,r,i,n,a,o,s){return(n-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(i-s)-(r-o)*(t-s)>=0&&(r-o)*(a-s)-(n-o)*(i-s)>=0}function Rc(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Oc(e,t)&&hi(e,t)&&hi(t,e)&&Ic(e,t)}function Ye(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function ar(e,t){return e.x===t.x&&e.y===t.y}function Ns(e,t,r,i){return ar(e,t)&&ar(r,i)||ar(e,i)&&ar(r,t)?!0:Ye(e,t,r)>0!=Ye(e,t,i)>0&&Ye(r,i,e)>0!=Ye(r,i,t)>0}function Oc(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&Ns(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function hi(e,t){return Ye(e.prev,e,e.next)<0?Ye(e,t,e.next)>=0&&Ye(e,e.prev,t)>=0:Ye(e,t,e.prev)<0||Ye(e,e.next,t)<0}function Ic(e,t){var r=e,i=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function Rs(e,t){var r=new Jn(e.i,e.x,e.y),i=new Jn(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function xo(e,t,r,i){var n=new Jn(e,t,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ci(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Jn(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ds.deviation=function(e,t,r,i){var n=t&&t.length,a=n?t[0]*r:e.length,o=Math.abs(ea(e,0,a,r));if(n)for(var s=0,l=t.length;s<l;s++){var u=t[s]*r,h=s<l-1?t[s+1]*r:e.length;o-=Math.abs(ea(e,u,h,r))}var c=0;for(s=0;s<i.length;s+=3){var d=i[s]*r,f=i[s+1]*r,v=i[s+2]*r;c+=Math.abs((e[d]-e[v])*(e[f+1]-e[d+1])-(e[d]-e[f])*(e[v+1]-e[d+1]))}return o===0&&c===0?0:Math.abs((c-o)/o)};function ea(e,t,r,i){for(var n=0,a=t,o=r-i;a<r;a+=i)n+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return n}function Bn(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function Os(e,t,r,i,n){var a=r,o=e[t];Bn(e,t,i);for(var s=r;s<i;s++)n(e[s],o)<0&&(Bn(e,s,a),a++);return Bn(e,i,a),a}function Zi(e,t,r,i){if(r<i){var n=Math.floor((r+i)/2),a=Os(e,n,r,i,t);Zi(e,t,r,a-1),Zi(e,t,a+1,i)}}function Nr(){this._parts=[]}Nr.prototype.step=function(e,t,r){var i=e.length;if(r===0){this._parts=[],this._sorted=!1;var n=Math.floor(i/2);this._parts.push({pivot:n,left:0,right:i-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=Os(e,a[o].pivot,a[o].left,a[o].right,t);for(var s=[],o=0;o<a.length;o++){var l=a[o].left,u=a[o].pivot-1;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u});var l=a[o].pivot+1,u=a[o].right;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var h=a.length-1-this._currentSortPartIdx;if(Zi(e,t,a[h].left,a[h].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}};Nr.sort=Zi;var Sr=Ae.vec3,To=Sr.create(),wo=Sr.create(),bo=Sr.create();const pa={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var i=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var n=0,a,o=0;o<r.length;){i.get(r[o++],To),i.get(r[o++],wo),i.get(r[o++],bo);var s=Sr.sqrDist(To,e),l=Sr.sqrDist(wo,e),u=Sr.sqrDist(bo,e),h=Math.min(s,l);h=Math.min(h,u),o===3?(a=h,h=0):h=h-a,this._triangleZList[n++]=h}}for(var c=this._sortedTriangleIndices,o=0;o<c.length;o++)c[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var d=this._indicesTmp,f=this._triangleZListTmp,v=this._triangleZList,o=0;o<this.triangleCount;o++){var p=c[o]*3,m=o*3;d[m++]=r[p++],d[m++]=r[p++],d[m]=r[p],f[o]=v[c[o]]}var g=this._indicesTmp;this._indicesTmp=this.indices,this.indices=g;var g=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=g,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Nr.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Nr,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}};function Bc(e){const t=e.getVisual("style");if(t){const r=e.getVisual("drawType");return t[r]}}function Fc(e){return e.getVisual("style").opacity}function Ve(e,t){const r=e.getItemVisual(t,"style");if(r){const i=e.getVisual("drawType");return r[i]}}function Fe(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}var Is=1,Bs=2;function Pt(e,t,r){this._labelsMesh=new ha,this._labelTextureSurface=new ki({width:512,height:512,devicePixelRatio:r.getDevicePixelRatio(),onupdate:function(){r.getZr().refresh()}}),this._api=r,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}Pt.prototype.getLabelPosition=function(e,t,r){return[0,0,0]};Pt.prototype.getLabelDistance=function(e,t,r){return 0};Pt.prototype.getMesh=function(){return this._labelsMesh};Pt.prototype.updateData=function(e,t,r){t==null&&(t=0),r==null&&(r=e.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==r-t)&&(this._labelsVisibilitiesBits=new Uint8Array(r-t));for(var i=["label","show"],n=["emphasis","label","show"],a=t;a<r;a++){var o=e.getItemModel(a),s=o.get(i),l=o.get(n);l==null&&(l=s);var u=(s?Is:0)|(l?Bs:0);this._labelsVisibilitiesBits[a-t]=u}this._start=t,this._end=r,this._data=e};Pt.prototype.updateLabels=function(e){if(this._data){e=e||[];for(var t=e.length>0,r={},i=0;i<e.length;i++)r[e[i]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var n=["label"],a=["emphasis","label"],o=this._data.hostModel,s=this._data,l=o.getModel(n),u=o.getModel(a,l),h={left:"right",right:"left",top:"center",bottom:"center"},c={left:"middle",right:"middle",top:"bottom",bottom:"top"},d=this._start;d<this._end;d++){var f=!1;t&&r[d]&&(f=!0);var v=this._labelsVisibilitiesBits[d-this._start]&(f?Bs:Is);if(v){var p=s.getItemModel(d),m=p.getModel(f?a:n,f?u:l),g=m.get("distance")||0,T=m.get("position"),x=this._api.getDevicePixelRatio(),_=o.getFormattedLabel(d,f?"emphasis":"normal");if(_==null||_==="")return;var b=new Vi({style:zi(m,{text:_,fill:m.get("color")||Ve(s,d)||"#000",align:"left",verticalAlign:"top",opacity:te.firstNotNull(m.get("opacity"),Fe(s,d),1)})}),w=b.getBoundingRect(),A=1.2;w.height*=A;var E=this._labelTextureSurface.add(b),M=h[T]||"center",I=c[T]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(d,T,g),[w.width*x,w.height*x],E,M,I,this.getLabelDistance(d,T,g)*x)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}};Pt.prototype.dispose=function(){this._labelTextureSurface.dispose()};var Je=Ae.vec3;y.Shader.import(sn);function Rr(e){this.rootNode=new y.Node,this._triangulationResults={},this._shadersMap=y.COMMON_SHADERS.filter(function(r){return r!=="shadow"}).reduce(function(r,i){return r[i]=y.createShader("ecgl."+i),r},{}),this._linesShader=y.createShader("ecgl.meshLines3D");var t={};y.COMMON_SHADERS.forEach(function(r){t[r]=new y.Material({shader:y.createShader("ecgl."+r)})}),this._groundMaterials=t,this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new Pt(512,512,e),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=e}Rr.prototype={constructor:Rr,extrudeY:!0,update:function(e,t,r,i,n){var a=e.getData();i==null&&(i=0),n==null&&(n=a.count()),this._startIndex=i,this._endIndex=n-1,this._triangulation(e,i,n);var o=this._getShader(e.get("shading"));this._prepareMesh(e,o,r,i,n),this.rootNode.updateWorldTransform(),this._updateRegionMesh(e,r,i,n);var s=e.coordinateSystem;s.type==="geo3D"&&this._updateGroundPlane(e,s,r);var l=this;this._labelsBuilder.updateData(a,i,n),this._labelsBuilder.getLabelPosition=function(u,h,c){var d=a.getName(u),f,v=c;if(s.type==="geo3D"){var p=s.getRegion(d);if(!p)return[NaN,NaN,NaN];f=p.getCenter();var m=s.dataToPoint([f[0],f[1],v]);return m}else var g=l._triangulationResults[u-l._startIndex],f=l.extrudeY?[(g.max[0]+g.min[0])/2,g.max[1]+v,(g.max[2]+g.min[2])/2]:[(g.max[0]+g.min[0])/2,(g.max[1]+g.min[1])/2,g.max[2]+v]},this._data=a,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(e),this._lastHoverDataIndex=0},_initMeshes:function(){var e=this;function t(){var n=new y.Mesh({name:"Polygon",material:new y.Material({shader:e._shadersMap.lambert}),geometry:new y.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0});return Object.assign(n.geometry,pa),n}var r=t(),i=new y.Mesh({material:new y.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new Xt({useNativeLine:!1})});this.rootNode.add(r),this.rootNode.add(i),r.material.define("both","VERTEX_COLOR"),r.material.define("fragment","DOUBLE_SIDED"),this._polygonMesh=r,this._linesMesh=i,this.rootNode.add(this._groundMesh)},_getShader:function(e){var t=this._shadersMap[e];return t||(t=this._shadersMap.lambert),t.__shading=e,t},_prepareMesh:function(e,t,r,i,n){for(var a=0,o=0,s=0,l=0,u=i;u<n;u++){var h=this._getRegionPolygonInfo(u),c=this._getRegionLinesInfo(u,e,this._linesMesh.geometry);a+=h.vertexCount,o+=h.triangleCount,s+=c.vertexCount,l+=c.triangleCount}var d=this._polygonMesh,f=d.geometry;["position","normal","texcoord0","color"].forEach(function(v){f.attributes[v].init(a)}),f.indices=a>65535?new Uint32Array(o*3):new Uint16Array(o*3),d.material.shader!==t&&d.material.attachShader(t,!0),y.setMaterialFromModel(t.__shading,d.material,e,r),s>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(s),this._linesMesh.geometry.setTriangleCount(l)),this._dataIndexOfVertex=new Uint32Array(a),this._vertexRangeOfDataIndex=new Uint32Array((n-i)*2)},_updateRegionMesh:function(e,t,r,i){for(var n=e.getData(),a=0,o=0,s=!1,w=this._polygonMesh,l=this._linesMesh,u=r;u<i;u++){var h=e.getRegionModel(u),c=h.getModel("itemStyle"),d=te.firstNotNull(Ve(n,u),c.get("color"),"#fff"),f=te.firstNotNull(Fe(n,u),c.get("opacity"),1),v=y.parseColor(d),p=y.parseColor(c.get("borderColor"));v[3]*=f,p[3]*=f;var m=v[3]<.99;w.material.set("color",[1,1,1,1]),s=s||m;for(var g=te.firstNotNull(h.get("height",!0),e.get("regionHeight")),T=this._updatePolygonGeometry(e,w.geometry,u,g,a,o,v),x=a;x<T.vertexOffset;x++)this._dataIndexOfVertex[x]=u;this._vertexRangeOfDataIndex[(u-r)*2]=a,this._vertexRangeOfDataIndex[(u-r)*2+1]=T.vertexOffset,a=T.vertexOffset,o=T.triangleOffset;var _=c.get("borderWidth"),b=_>0;b&&(_*=t.getDevicePixelRatio(),this._updateLinesGeometry(l.geometry,e,u,g,_,e.coordinateSystem.transform)),l.invisible=!b,l.material.set({color:p})}var w=this._polygonMesh;w.material.transparent=s,w.material.depthMask=!s,w.geometry.updateBoundingBox(),w.frontFace=this.extrudeY?y.Mesh.CCW:y.Mesh.CW,w.material.get("normalMap")&&w.geometry.generateTangents(),w.seriesIndex=e.seriesIndex,w.on("mousemove",this._onmousemove,this),w.on("mouseout",this._onmouseout,this)},_updateDebugWireframe:function(e){var t=e.getModel("debug.wireframe");if(t.get("show")){var r=y.parseColor(t.get("lineStyle.color")||"rgba(0,0,0,0.5)"),i=te.firstNotNull(t.get("lineStyle.width"),1),n=this._polygonMesh;n.geometry.generateBarycentric(),n.material.define("both","WIREFRAME_TRIANGLE"),n.material.set("wireframeLineColor",r),n.material.set("wireframeLineWidth",i)}},_onmousemove:function(e){var t=this._dataIndexOfVertex[e.triangle[0]];t==null&&(t=-1),t!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(t),this._labelsBuilder.updateLabels([t])),this._lastHoverDataIndex=t,this._polygonMesh.dataIndex=t},_onmouseout:function(e){e.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(e,t,r){var i=e.getModel("groundPlane",e);if(this._groundMesh.invisible=!i.get("show",!0),!this._groundMesh.invisible){var n=e.get("shading"),a=this._groundMaterials[n];a||(a=this._groundMaterials.lambert),y.setMaterialFromModel(n,a,i,r),a.get("normalMap")&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=a,this._groundMesh.material.set("color",y.parseColor(i.get("color"))),this._groundMesh.scale.set(t.size[0],t.size[2],1)}},_triangulation:function(e,t,r){this._triangulationResults=[];for(var i=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0],a=e.coordinateSystem,o=t;o<r;o++){for(var s=[],l=e.getRegionPolygonCoords(o),u=0;u<l.length;u++){var h=l[u].exterior,c=l[u].interiors,d=[],f=[];if(!(h.length<3)){for(var v=0,p=0;p<h.length;p++){var m=h[p];d[v++]=m[0],d[v++]=m[1]}for(var p=0;p<c.length;p++)if(!(c[p].length<3)){for(var g=d.length/2,T=0;T<c[p].length;T++){var m=c[p][T];d.push(m[0]),d.push(m[1])}f.push(g)}for(var x=Ds(d,f),_=new Float64Array(d.length/2*3),b=[],w=[1/0,1/0,1/0],A=[-1/0,-1/0,-1/0],E=0,p=0;p<d.length;)Je.set(b,d[p++],0,d[p++]),a&&a.transform&&Je.transformMat4(b,b,a.transform),Je.min(w,w,b),Je.max(A,A,b),_[E++]=b[0],_[E++]=b[1],_[E++]=b[2];Je.min(i,i,w),Je.max(n,n,A),s.push({points:_,indices:x,min:w,max:A})}}this._triangulationResults.push(s)}this._geoBoundingBox=[i,n]},_getRegionPolygonInfo:function(e){for(var t=this._triangulationResults[e-this._startIndex],r=0,i=0,n=0;n<t.length;n++)r+=t[n].points.length/3,i+=t[n].indices.length/3;var a=r*2+r*4,o=i*2+r*2;return{vertexCount:a,triangleCount:o}},_updatePolygonGeometry:function(e,t,r,i,n,a,o){var s=e.get("projectUVOnGround"),l=t.attributes.position,u=t.attributes.normal,h=t.attributes.texcoord0,c=t.attributes.color,d=this._triangulationResults[r-this._startIndex],f=c.value&&o,v=t.indices,p=this.extrudeY?1:2,m=this.extrudeY?2:1,g=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],T=Je.mul([],this._geoBoundingBox[0],g),x=Je.mul([],this._geoBoundingBox[1],g),_=Math.max(x[0]-T[0],x[2]-T[2]);function b(we,je,Ge){for(var Oe=we.points,Hr=Oe.length,Ce=[],pt=[],Ze=0;Ze<Hr;Ze+=3)Ce[0]=Oe[Ze],Ce[p]=je,Ce[m]=Oe[Ze+2],pt[0]=(Oe[Ze]*g[0]-T[0])/_,pt[1]=(Oe[Ze+2]*g[m]-T[2])/_,l.set(n,Ce),f&&c.set(n,o),h.set(n++,pt)}function w(we,je,Ge){var Oe=n;b(we,je);for(var Hr=we.indices.length,Ce=0;Ce<Hr;Ce++)v[a*3+Ce]=we.indices[Ce]+Oe;a+=we.indices.length/3}for(var A=this.extrudeY?[0,1,0]:[0,0,1],E=Je.negate([],A),M=0;M<d.length;M++){var I=n,C=d[M];w(C,0),w(C,i);for(var B=C.points.length/3,z=0;z<B;z++)u.set(I+z,E),u.set(I+z+B,A);for(var O=[0,3,1,1,3,2],U=[[],[],[],[]],j=[],Y=[],k=[],Z=[],D=0,z=0;z<B;z++){for(var q=(z+1)%B,Q=(C.points[q*3]-C.points[z*3])*g[0],J=(C.points[q*3+2]-C.points[z*3+2])*g[m],oe=Math.sqrt(Q*Q+J*J),ie=0;ie<4;ie++){var Me=ie===0||ie===3,ye=(Me?z:q)*3;U[ie][0]=C.points[ye],U[ie][p]=ie>1?i:0,U[ie][m]=C.points[ye+2],l.set(n+ie,U[ie]),s?(Z[0]=(C.points[ye]*g[0]-T[0])/_,Z[1]=(C.points[ye+2]*g[m]-T[m])/_):(Z[0]=(Me?D:D+oe)/_,Z[1]=(U[ie][p]*g[p]-T[p])/_),h.set(n+ie,Z)}Je.sub(j,U[1],U[0]),Je.sub(Y,U[3],U[0]),Je.cross(k,j,Y),Je.normalize(k,k);for(var ie=0;ie<4;ie++)u.set(n+ie,k),f&&c.set(n+ie,o);for(var ie=0;ie<6;ie++)v[a*3+ie]=O[ie]+n;n+=4,a+=2,D+=oe}}return t.dirty(),{vertexOffset:n,triangleOffset:a}},_getRegionLinesInfo:function(e,t,r){var i=0,n=0,a=t.getRegionModel(e),o=a.getModel("itemStyle"),s=o.get("borderWidth");if(s>0){var l=t.getRegionPolygonCoords(e);l.forEach(function(u){var h=u.exterior,c=u.interiors;i+=r.getPolylineVertexCount(h),n+=r.getPolylineTriangleCount(h);for(var d=0;d<c.length;d++)i+=r.getPolylineVertexCount(c[d]),n+=r.getPolylineTriangleCount(c[d])},this)}return{vertexCount:i,triangleCount:n}},_updateLinesGeometry:function(e,t,r,i,n,a){function o(u){for(var h=new Float64Array(u.length*3),c=0,d=[],f=0;f<u.length;f++)d[0]=u[f][0],d[1]=i+.1,d[2]=u[f][1],a&&Je.transformMat4(d,d,a),h[c++]=d[0],h[c++]=d[1],h[c++]=d[2];return h}var s=[1,1,1,1],l=t.getRegionPolygonCoords(r);l.forEach(function(u){var h=u.exterior,c=u.interiors;e.addPolyline(o(h),s,n);for(var d=0;d<c.length;d++)e.addPolyline(o(c[d]),s,n)})},highlight:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=r.getModel(["emphasis","itemStyle"]),n=i.get("color"),a=te.firstNotNull(i.get("opacity"),Fe(t,e),1);if(n==null){var o=Ve(t,e);n=ia(o,-.4)}a==null&&(a=Fe(t,e));var s=y.parseColor(n);s[3]*=a,this._setColorOfDataIndex(t,e,s)}},downplay:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=te.firstNotNull(Ve(t,e),r.get(["itemStyle","color"]),"#fff"),n=te.firstNotNull(Fe(t,e),r.get(["itemStyle","opacity"]),1),a=y.parseColor(i);a[3]*=n,this._setColorOfDataIndex(t,e,a)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(e,t,r){if(!(t<this._startIndex&&t>this._endIndex)){t-=this._startIndex;for(var i=this._vertexRangeOfDataIndex[t*2];i<this._vertexRangeOfDataIndex[t*2+1];i++)this._polygonMesh.geometry.attributes.color.set(i,r);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};const Vc=vi.extend({type:"geo3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Rr(t),this.groupGL=new y.Node,this._lightRoot=new y.Node,this._sceneHelper=new Ht(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new gi({zr:t.getZr()}),this._control.init()},render:function(e,t,r){this.groupGL.add(this._geo3DBuilder.rootNode);var i=e.coordinateSystem;if(!(!i||!i.viewGL)){i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")}),n.off("update"),n.on("update",function(){r.dispatchAction({type:"geo3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),center:n.getCenter(),from:this.uid,geo3DId:e.id})}),n.update()}},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}});var zc={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]};function Gc(e,t){if(e==="world"){var r=zc[t.name];if(r){var i=[r[0],r[1]];t.setCenter(i)}}}var Uc=Ae.vec3,br=Ae.mat4,Hc=[Dl,Gc];function qi(e,t,r,i,n){this.name=e,this.map=t,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(r,i,n),this.transform=br.identity(new Float64Array(16)),this.invTransform=br.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}qi.prototype={constructor:qi,type:"geo3D",dimensions:["lng","lat","alt"],containPoint:function(){},loadGeoJson:function(e,t,r){var i=Sa||Sa;try{this.regions=e?i(e):[]}catch(u){throw`Invalid geoJson format
`+u}t=t||{},r=r||{};for(var n=this.regions,a={},o=0;o<n.length;o++){var s=n[o].name;s=r[s]||s,n[o].name=s,a[s]=n[o],this.addGeoCoord(s,n[o].getCenter());var l=t[s];l&&n[o].transformTo(l.left,l.top,l.width,l.height)}this._regionsMap=a,this._geoRect=null,Hc.forEach(function(u){u(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var e,t=this.regions,r=0;r<t.length;r++){var i=t[r].getBoundingRect();e=e||i.clone(),e.union(i)}return this._geoRect=e||new Cl(0,0,0,0)},addGeoCoord:function(e,t){this._nameCoordMap[e]=t},getRegion:function(e){return this._regionsMap[e]},getRegionByCoord:function(e){for(var t=this.regions,r=0;r<t.length;r++)if(t[r].contain(e))return t[r]},setSize:function(e,t,r){this.size=[e,t,r];var i=this.getGeoBoundingRect(),n=e/i.width,a=-r/i.height,o=-e/2-i.x*n,s=r/2-i.y*a,l=this.extrudeY?[o,0,s]:[o,s,0],u=this.extrudeY?[n,1,a]:[n,a,1],h=this.transform;br.identity(h),br.translate(h,h,l),br.scale(h,h,u),br.invert(this.invTransform,h)},dataToPoint:function(e,t){t=t||[];var r=this.extrudeY?1:2,i=this.extrudeY?2:1,n=e[2];return isNaN(n)&&(n=0),t[0]=e[0],t[i]=e[1],this.altitudeAxis?t[r]=this.altitudeAxis.dataToCoord(n):t[r]=0,t[r]+=this.regionHeight,Uc.transformMat4(t,t,this.transform),t},pointToData:function(e,t){}};function kc(e,t){var r=e.getBoxLayoutParams(),i=Ji(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=this.getGeoBoundingRect(),a=n.width/n.height*(e.get("aspectScale")||.75),o=e.get("boxWidth"),s=e.get("boxDepth"),l=e.get("boxHeight");l==null&&(l=5),isNaN(o)&&isNaN(s)&&(o=100),isNaN(s)?s=o/a:isNaN(o)&&(o=s/a),this.setSize(o,l,s),this.regionHeight=e.get("regionHeight"),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(l-this.regionHeight,0))}function Wc(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this&&n.type!=="series.map3D"){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=aa(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new Qi("altitude",i),this.resize(this.model,t)}}var So=0,ma={dimensions:qi.prototype.dimensions,create:function(e,t){var r=[];if(!kn)throw new Error("geo3D component depends on geo component");function i(n,a){var o=ma.createGeo3D(n);n.__viewGL=n.__viewGL||new fe,o.viewGL=n.__viewGL,n.coordinateSystem=o,o.model=n,r.push(o),o.resize=kc,o.resize(n,t),o.update=Wc}return e.eachComponent("geo3D",function(n,a){i(n)}),e.eachSeriesByType("map3D",function(n,a){var o=n.get("coordinateSystem");o==null&&(o="geo3D"),o==="geo3D"&&i(n)}),e.eachSeries(function(n){if(n.get("coordinateSystem")==="geo3D"){if(n.type==="series.map3D")return;var a=n.getReferringComponents("geo3D").models[0];if(a||(a=e.getComponent("geo3D")),!a)throw new Error('geo "'+te.firstNotNull(n.get("geo3DIndex"),n.get("geo3DId"),0)+'" not found');n.coordinateSystem=a.coordinateSystem}}),r},createGeo3D:function(e){var t=e.get("map"),r;return typeof t=="string"?(r=t,t=kn(t)):t&&t.features&&(t={geoJson:t}),r==null&&(r="GEO_ANONYMOUS_"+So++),new qi(r+So++,r,t&&t.geoJson,t&&t.specialAreas,e.get("nameMap"))}};function Fs(e){e.registerComponentModel(Gr),e.registerComponentView(Vc),e.registerAction({type:"geo3DChangeCamera",event:"geo3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"geo3D",query:t},function(i){i.setView(t)})}),e.registerCoordinateSystem("geo3D",ma)}ke(Fs);function Eo(e,t){e.id=e.id||e.name||t+""}var lr=Ir.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){lr.superApply(this,"init",arguments),bt(this.option.layers,function(e,t){ce(e,this.defaultLayerOption),Eo(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,lr.superApply(this,"mergeOption",arguments);function r(o){return Pl(o,function(s,l,u){return Eo(l,u),s[l.id]=l,s},{})}if(t&&t.length){var i=r(e.layers),n=r(t);for(var a in i)n[a]?ce(n[a],i[a],!0):t.push(e.layers[a]);this.option.layers=t}bt(this.option.layers,function(o){ce(o,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});ce(lr.prototype,nn);ce(lr.prototype,Br);ce(lr.prototype,Fr);ce(lr.prototype,zr);var Vs=Math.PI,lt=Math.sin,Mt=Math.cos,zs=Math.tan,Gs=Math.asin,Us=Math.atan2,ur=Vs/180,Xc=1e3*60*60*24,jc=2440588,Zc=2451545;function qc(e){return e.valueOf()/Xc-.5+jc}function Yc(e){return qc(e)-Zc}var Yi=ur*23.4397;function Kc(e,t){return Us(lt(e)*Mt(Yi)-zs(t)*lt(Yi),Mt(e))}function $c(e,t){return Gs(lt(t)*Mt(Yi)+Mt(t)*lt(Yi)*lt(e))}function Qc(e,t,r){return Us(lt(e),Mt(e)*lt(t)-zs(r)*Mt(t))}function Jc(e,t,r){return Gs(lt(t)*lt(r)+Mt(t)*Mt(r)*Mt(e))}function ef(e,t){return ur*(280.16+360.9856235*e)-t}function tf(e){return ur*(357.5291+.98560028*e)}function rf(e){var t=ur*(1.9148*lt(e)+.02*lt(2*e)+3e-4*lt(3*e)),r=ur*102.9372;return e+t+r+Vs}function nf(e){var t=tf(e),r=rf(t);return{dec:$c(r,0),ra:Kc(r,0)}}var Hs={};Hs.getPosition=function(e,t,r){var i=ur*-r,n=ur*t,a=Yc(e),o=nf(a),s=ef(a,i)-o.ra;return{azimuth:Qc(s,n,o.dec),altitude:Jc(s,n,o.dec)}};const af=`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`;y.Shader.import(ss);y.Shader.import(af);const of=vi.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new y.Node,this._sphereGeometry=new y.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new y.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new y.PlaneGeometry,this._earthMesh=new y.Mesh({renderNormal:!0}),this._atmosphereMesh=new y.Mesh,this._atmosphereGeometry=new y.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new y.Material({shader:new y.Shader(y.Shader.source("ecgl.atmosphere.vertex"),y.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=y.Mesh.CW,this._lightRoot=new y.Node,this._sceneHelper=new Ht,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new gi({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,r){var i=e.coordinateSystem,n=e.get("shading");i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL),this._sceneHelper.setScene(i.viewGL.scene),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._earthMesh;a.geometry=this._sphereGeometry;var o="ecgl."+n;(!a.material||a.material.shader.name!==o)&&(a.material=y.createMaterial(o)),y.setMaterialFromModel(n,a.material,e,r),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(c){var d=a.material.get(c);d&&(d.flipY=!1)}),a.material.set("color",y.parseColor(e.get("baseColor")));var s=i.radius*.99;if(a.scale.set(s,s,s),e.get("atmosphere.show")){a.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),a.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var l=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(s+l,s+l,s+l)}else a.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var u=a.material.setTextureImage("diffuseMap",e.get("baseTexture"),r,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(a);var h=a.material.setTextureImage("bumpMap",e.get("heightTexture"),r,{flipY:!1,anisotropic:8});h&&h.surface&&h.surface.attachToMesh(a),a.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,r),this._displaceVertices(e,r),this._updateViewControl(e,r),this._updateLayers(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},_updateLayers:function(e,t){var r=e.coordinateSystem,i=e.get("layers"),n=r.radius,a=[],o=[],s=[],l=[];bt(i,function(f){var v=new Er(f),p=v.get("type"),m=y.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8});if(m.surface&&m.surface.attachToMesh(this._earthMesh),p==="blend"){var g=v.get("blendTo"),T=te.firstNotNull(v.get("intensity"),1);g==="emission"?(s.push(m),l.push(T)):(a.push(m),o.push(T))}else{var x=v.get("id"),_=this._layerMeshes[x];_||(_=this._layerMeshes[x]=new y.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var b=v.get("shading");b==="lambert"?(_.material=_.__lambertMaterial||new y.Material({autoUpdateTextureStatus:!1,shader:y.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),_.__lambertMaterial=_.material):(_.material=_.__colorMaterial||new y.Material({autoUpdateTextureStatus:!1,shader:y.createShader("ecgl.color"),transparent:!0,depthMask:!1}),_.__colorMaterial=_.material),_.material.enableTexture("diffuseMap");var w=v.get("distance"),A=n+(w??r.radius/100);_.scale.set(A,A,A),n=A;var E=this._blankTexture||(this._blankTexture=y.createBlankTexture("rgba(255, 255, 255, 0)"));_.material.set("diffuseMap",E),y.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8},function(M){M.surface&&M.surface.attachToMesh(_),_.material.set("diffuseMap",M),t.getZr().refresh()}),v.get("show")?this.groupGL.add(_):this.groupGL.remove(_)}},this);var u=this._earthMesh.material;u.define("fragment","LAYER_DIFFUSEMAP_COUNT",a.length),u.define("fragment","LAYER_EMISSIVEMAP_COUNT",s.length),u.set("layerDiffuseMap",a),u.set("layerDiffuseIntensity",o),u.set("layerEmissiveMap",s),u.set("layerEmissionIntensity",l);var h=e.getModel("debug.wireframe");if(h.get("show")){u.define("both","WIREFRAME_TRIANGLE");var c=y.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)"),d=te.firstNotNull(h.get("lineStyle.width"),1);u.set("wireframeLineWidth",d),u.set("wireframeLineColor",c)}else u.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var r=e.coordinateSystem,i=e.getModel("viewControl");r.viewGL.camera;var n=this;function a(){return{type:"globeChangeCamera",alpha:o.getAlpha(),beta:o.getBeta(),distance:o.getDistance()-r.radius,center:o.getCenter(),from:n.uid,globeId:e.id}}var o=this._control;o.setViewGL(r.viewGL);var s=i.get("targetCoord"),l,u;s!=null&&(u=s[0]+90,l=s[1]),o.setFromViewControlModel(i,{baseDistance:r.radius,alpha:l,beta:u}),o.off("update"),o.on("update",function(){t.dispatchAction(a())})},_displaceVertices:function(e,t){var r=e.get("displacementQuality"),i=e.get("debug.wireframe.show"),n=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&r===this._displacementQuality&&i===this._showDebugWireframe)){this._displacementQuality=r,this._showDebugWireframe=i;var a=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[r]||200,s=o/2;(a.widthSegments!==o||i)&&(a.widthSegments=o,a.heightSegments=s,a.build()),this._doDisplaceVertices(a,n),i&&a.generateBarycentric()}},_doDisplaceVertices:function(e,t){var r=e.attributes.position.value,i=e.attributes.texcoord0.value,n=e.__originalPosition;(!n||n.length!==r.length)&&(n=new Float32Array(r.length),n.set(r),e.__originalPosition=n);for(var a=t.displacementWidth,o=t.displacementHeight,s=t.displacementData,l=0;l<e.vertexCount;l++){var u=l*3,h=l*2,c=n[u+1],d=n[u+2],f=n[u+3],v=i[h++],p=i[h++],m=Math.round(v*(a-1)),g=Math.round(p*(o-1)),T=g*a+m,x=s?s[T]:0;r[u+1]=c+c*x,r[u+2]=d+d*x,r[u+3]=f+f*x}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var r=this._earthMesh;this._sceneHelper.updateLight(e);var i=this._sceneHelper.mainLight,n=e.get("light.main.time")||new Date,a=Hs.getPosition(Nl(n),0,0),o=Math.cos(a.altitude);i.position.y=-o*Math.cos(a.azimuth),i.position.x=Math.sin(a.altitude),i.position.z=o*Math.sin(a.azimuth),i.lookAt(r.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}});var sf=Ae.vec3;function Ki(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}Ki.prototype={constructor:Ki,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},_getDisplacementScale:function(e,t){var r=(e+180)/360*(this.displacementWidth-1),i=(90-t)/180*(this.displacementHeight-1),n=Math.round(r)+Math.round(i)*this.displacementWidth;return this.displacementData[n]},dataToPoint:function(e,t){var r=e[0],i=e[1],n=e[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(r,i)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(n)),r=r*Math.PI/180,i=i*Math.PI/180;var o=Math.cos(i)*a;return t=t||[],t[0]=-o*Math.cos(r+Math.PI),t[1]=Math.sin(i)*a,t[2]=o*Math.sin(r+Math.PI),t},pointToData:function(e,t){var r=e[0],i=e[1],n=e[2],a=sf.len(e);r/=a,i/=a,n/=a;var o=Math.asin(i),s=Math.atan2(n,-r);s<0&&(s=Math.PI*2+s);var l=o*180/Math.PI,u=s*180/Math.PI-180;return t=t||[],t[0]=u,t[1]=l,t[2]=a-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function lf(e,t){var r=document.createElement("canvas"),i=r.getContext("2d"),n=e.width,a=e.height;r.width=n,r.height=a,i.drawImage(e,0,0,n,a);for(var o=i.getImageData(0,0,n,a).data,s=new Float32Array(o.length/4),l=0;l<o.length/4;l++){var u=o[l*4];s[l]=u/255*t}return{data:s,width:n,height:a}}function uf(e,t){var r=e.getBoxLayoutParams(),i=Ji(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var n=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,n-this.radius)}function hf(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=aa(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new Qi("altitude",i),this.resize(this.model,t)}}var cf={dimensions:Ki.prototype.dimensions,create:function(e,t){var r=[];return e.eachComponent("globe",function(i){i.__viewGL=i.__viewGL||new fe;var n=new Ki;n.viewGL=i.__viewGL,i.coordinateSystem=n,n.model=i,r.push(n),n.resize=uf,n.resize(i,t),n.update=hf}),e.eachSeries(function(i){if(i.get("coordinateSystem")==="globe"){var n=i.getReferringComponents("globe").models[0];if(n||(n=e.getComponent("globe")),!n)throw new Error('globe "'+te.firstNotNull(i.get("globe3DIndex"),i.get("globe3DId"),0)+'" not found');var a=n.coordinateSystem;i.coordinateSystem=a}}),e.eachComponent("globe",function(i,n){var a=i.coordinateSystem,o=i.getDisplacementTexture(),s=i.getDisplacemenScale();if(i.isDisplacementChanged()){if(i.hasDisplacement()){var l=!0;y.loadTexture(o,t,function(u){var h=u.image,c=lf(h,s);i.setDisplacementData(c.data,c.width,c.height),l||t.dispatchAction({type:"globeUpdateDisplacment"})}),l=!1}else a.setDisplacementData(null,0,0);a.setDisplacementData(i.displacementData,i.displacementWidth,i.displacementHeight)}}),r}};function ff(e){e.registerComponentModel(lr),e.registerComponentView(of),e.registerCoordinateSystem("globe",cf),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"globe",query:t},function(i){i.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,r){})}ke(ff);var Ao=["zoom","center","pitch","bearing"],ga=Ir.extend({type:"mapbox3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,style:"mapbox://styles/mapbox/light-v9",center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMapboxCameraOption:function(){var e=this;return Ao.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMapboxCameraOption:function(e){e!=null&&Ao.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(e){this._mapbox=e}});ce(ga.prototype,Br);ce(ga.prototype,Fr);function jt(e,t){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!mapboxgl)throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}jt.prototype.setUnpainted=function(){};jt.prototype.resize=function(){this._mapbox.resize()};jt.prototype.getMapbox=function(){return this._mapbox};jt.prototype.clear=function(){};jt.prototype.refresh=function(){this._mapbox.resize()};var ks=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","wheel","touchstart","touchend","touchmove","touchcancel"];jt.prototype._initEvents=function(){var e=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},ks.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);e.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};jt.prototype.dispose=function(){ks.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this)};const Ws=`
@export ecgl.displayShadow.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_WorldPosition;

varying vec3 v_Normal;

void main()
{
 @import ecgl.common.uv.main
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);

 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}

@end


@export ecgl.displayShadow.fragment

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform float roughness: 0.2;

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.ssaoMap.header

@import clay.plugin.compute_shadow_map

void main()
{
 float shadow = 1.0;

 @import ecgl.common.ssaoMap.main

#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
 for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {
 shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);
 }
#endif

 shadow *= 0.5 + ao * 0.5;
 shadow = clamp(shadow, 0.0, 1.0);

 gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);
}

@end`;y.Shader.import(Ws);const df=vi.extend({type:"mapbox3D",__ecgl__:!0,init:function(e,t){var r=t.getZr();this._zrLayer=new jt("mapbox3D",r),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new y.Node,this._sceneHelper=new Ht(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMapbox(),n=this._dispatchInteractAction.bind(this,t,i);["zoom","rotate","drag","pitch","rotate","move"].forEach(function(a){i.on(a,n)}),this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.displayShadow.vertex"),fragment:y.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(e,t,r){var i=this._zrLayer.getMapbox(),n=e.get("style"),a=JSON.stringify(n);a!==this._oldStyleStr&&n&&i.setStyle(n),this._oldStyleStr=a,i.setCenter(e.get("center")),i.setZoom(e.get("zoom")),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMapbox(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._mapbox3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"mapbox3DChangeCamera",pitch:t.getPitch(),zoom:t.getZoom(),center:t.getCenter().toArray(),bearing:t.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var e=this._mapbox3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new y.Plane(new y.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new y.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new y.Vector2(1,1)),a=i.intersectPlane(r),o=n.intersectPlane(r),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}});var Ft=Ae.mat4,Kr=512,Fn=.6435011087932844,et=Math.PI,xr=1/10;function Or(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight="auto",this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}Or.prototype={constructor:Or,dimensions:["lng","lat","alt"],containPoint:function(){},setCameraOption:function(e){this.bearing=e.bearing,this.pitch=e.pitch,this.center=e.center,this.zoom=e.zoom,this._origin||(this._origin=this.projectOnTileWithScale(this.center,Kr)),this._initialZoom==null&&(this._initialZoom=this.zoom),this.updateTransform()},updateTransform:function(){if(this.height){var e=.5/Math.tan(Fn/2)*this.height*xr,t=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,r=Fn/2,i=Math.PI/2+t,n=Math.sin(r)*e/Math.sin(Math.PI-i-r),a=Math.cos(Math.PI/2-t)*n+e,o=a*1.1;this.pitch>50&&(o=1e3);var s=[];Ft.perspective(s,Fn,this.width/this.height,1,o),this.viewGL.camera.projectionMatrix.setArray(s),this.viewGL.camera.decomposeProjectionMatrix();var s=Ft.identity([]),l=this.dataToPoint(this.center);Ft.scale(s,s,[1,-1,1]),Ft.translate(s,s,[0,0,-e]),Ft.rotateX(s,s,t),Ft.rotateZ(s,s,-this.bearing/180*Math.PI),Ft.translate(s,s,[-l[0]*this.getScale()*xr,-l[1]*this.getScale()*xr,0]),this.viewGL.camera.viewMatrix.array=s;var u=[];Ft.invert(u,s),this.viewGL.camera.worldTransform.array=u,this.viewGL.camera.decomposeWorldTransform();var h=Kr*this.getScale(),c;if(this.altitudeExtent&&!isNaN(this.boxHeight)){var d=this.altitudeExtent[1]-this.altitudeExtent[0];c=this.boxHeight/d*this.getScale()/Math.pow(2,this._initialZoom-this.zoomOffset)}else c=h/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*xr;this.viewGL.rootNode.scale.set(this.getScale()*xr,this.getScale()*xr,c)}},getScale:function(){return Math.pow(2,this.zoom-this.zoomOffset)},projectOnTile:function(e,t){return this.projectOnTileWithScale(e,this.getScale()*Kr,t)},projectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i*et/180,o=n*et/180,s=t*(a+et)/(2*et),l=t*(et-Math.log(Math.tan(et/4+o*.5)))/(2*et);return r=r||[],r[0]=s,r[1]=l,r},unprojectFromTile:function(e,t){return this.unprojectOnTileWithScale(e,this.getScale()*Kr,t)},unprojectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i/t*(2*et)-et,o=2*(Math.atan(Math.exp(et-n/t*(2*et)))-et/4);return r=r||[],r[0]=a*180/et,r[1]=o*180/et,r},dataToPoint:function(e,t){return t=this.projectOnTileWithScale(e,Kr,t),t[0]-=this._origin[0],t[1]-=this._origin[1],t[2]=isNaN(e[2])?0:e[2],isNaN(e[2])||(t[2]=e[2],this.altitudeExtent&&(t[2]-=this.altitudeExtent[0])),t}};function fi(){Or.apply(this,arguments)}fi.prototype=new Or;fi.prototype.constructor=fi;fi.prototype.type="mapbox3D";function Xs(e,t,r){function i(a,o){var s=o.getWidth(),l=o.getHeight(),u=o.getDevicePixelRatio();this.viewGL.setViewport(0,0,s,l,u),this.width=s,this.height=l,this.altitudeScale=a.get("altitudeScale"),this.boxHeight=a.get("boxHeight")}function n(a,o){if(this.model.get("boxHeight")!=="auto"){var s=[1/0,-1/0];a.eachSeries(function(l){if(l.coordinateSystem===this){var u=l.getData(),h=l.coordDimToDataDim("alt")[0];if(h){var c=u.getDataExtent(h,!0);s[0]=Math.min(s[0],c[0]),s[1]=Math.max(s[1],c[1])}}},this),s&&isFinite(s[1]-s[0])&&(this.altitudeExtent=s)}}return{dimensions:t.prototype.dimensions,create:function(a,o){var s=[];return a.eachComponent(e,function(l){var u=l.__viewGL;u||(u=l.__viewGL=new fe,u.setRootNode(new y.Node));var h=new t;h.viewGL=l.__viewGL,h.resize=i,h.resize(l,o),s.push(h),l.coordinateSystem=h,h.model=l,h.update=n}),a.eachSeries(function(l){if(l.get("coordinateSystem")===e){var u=l.getReferringComponents(e).models[0];if(u||(u=a.getComponent(e)),!u)throw new Error(e+' "'+te.firstNotNull(l.get(e+"Index"),l.get(e+"Id"),0)+'" not found');l.coordinateSystem=u.coordinateSystem}}),r&&r(s,a,o),s}}}var vf=Xs("mapbox3D",fi,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMapboxCameraOption())})});function pf(e){e.registerComponentModel(ga),e.registerComponentView(df),e.registerCoordinateSystem("mapbox3D",vf),e.registerAction({type:"mapbox3DChangeCamera",event:"mapbox3dcamerachanged",update:"mapbox3D:updateCamera"},function(t,r){r.eachComponent({mainType:"mapbox3D",query:t},function(i){i.setMapboxCameraOption(t)})})}ke(pf);var Lo=["zoom","center","pitch","bearing"],_a=Ir.extend({type:"maptalks3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMaptalksCameraOption:function(){var e=this;return Lo.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMaptalksCameraOption:function(e){e!=null&&Lo.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(e){this._maptalks=e}});ce(_a.prototype,Br);ce(_a.prototype,Fr);function Zt(e,t,r,i){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!maptalks)throw new Error("Maptalks library must be included. See https://maptalks.org");this._maptalks=new maptalks.Map(this.dom,{center:r,zoom:i,doubleClickZoom:!1,fog:!1}),this._initEvents()}Zt.prototype.setUnpainted=function(){};Zt.prototype.resize=function(){this._maptalks.checkSize()};Zt.prototype.getMaptalks=function(){return this._maptalks};Zt.prototype.clear=function(){};Zt.prototype.refresh=function(){this._maptalks.checkSize()};var js=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","touchcancel"];Zt.prototype._initEvents=function(){var e=this.dom;this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},js.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);t==="mousewheel"||t==="DOMMouseScroll"?e.dispatchEvent(a):e.firstElementChild.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};Zt.prototype.dispose=function(){js.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this),this._maptalks.remove()};y.Shader.import(Ws);const mf=vi.extend({type:"maptalks3D",__ecgl__:!0,init:function(e,t){this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.displayShadow.vertex"),fragment:y.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(e,t){var r=t.getZr();this._zrLayer=new Zt("maptalks3D",r,e.get("center"),e.get("zoom")),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new y.Node,this._sceneHelper=new Ht(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMaptalks(),n=this._dispatchInteractAction.bind(this,t,i);["zoomend","zooming","zoomstart","dragrotating","pitch","pitchend","movestart","moving","moveend","resize","touchstart","touchmove","touchend","animating"].forEach(function(a){i.on(a,n)})},render:function(e,t,r){this._zrLayer||this._initMaptalksLayer(e,r);var i=this._zrLayer.getMaptalks(),n=e.get("urlTemplate"),a=i.getBaseLayer();n!==this._oldUrlTemplate&&(a?a.setOptions({urlTemplate:n,attribution:e.get("attribution")}):(a=new maptalks.TileLayer("maptalks-echarts-gl-baselayer",{urlTemplate:n,subdomains:["a","b","c"],attribution:e.get("attribution")}),i.setBaseLayer(a))),this._oldUrlTemplate=n,i.setCenter(e.get("center")),i.setZoom(e.get("zoom"),{animation:!1}),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMaptalks(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._maptalks3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"maptalks3DChangeCamera",pitch:t.getPitch(),zoom:_f(t.getResolution())+1,center:t.getCenter().toArray(),bearing:t.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var e=this._maptalks3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new y.Plane(new y.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new y.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new y.Vector2(1,1)),a=i.intersectPlane(r),o=n.intersectPlane(r),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}}),gf=2*6378137*Math.PI/(256*Math.pow(2,20));function _f(e){return 19-Math.log(e/gf)/Math.LN2}function di(){Or.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}di.prototype=new Or;di.prototype.constructor=di;di.prototype.type="maptalks3D";var yf=Xs("maptalks3D",di,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMaptalksCameraOption())})});function xf(e){e.registerComponentModel(_a),e.registerComponentView(mf),e.registerCoordinateSystem("maptalks3D",yf),e.registerAction({type:"maptalks3DChangeCamera",event:"maptalks3dcamerachanged",update:"maptalks3D:updateCamera"},function(t,r){r.eachComponent({mainType:"maptalks3D",query:t},function(i){i.setMaptalksCameraOption(t)})})}ke(xf);var Tf=Ae.vec3,wf=na.isDimensionStacked;function bf(e){var t=e[0],r=e[1];return!(t>0&&r>0||t<0&&r<0)}function Sf(e,t){var r=e.getData(),i=e.get("barSize");if(i==null){var n=t.size,a,o,s=t.getAxis("x"),l=t.getAxis("y");s.type==="category"?a=s.getBandWidth()*.7:a=Math.round(n[0]/Math.sqrt(r.count()))*.6,l.type==="category"?o=l.getBandWidth()*.7:o=Math.round(n[1]/Math.sqrt(r.count()))*.6,i=[a,o]}else wt(i)||(i=[i,i]);var u=t.getAxis("z").scale.getExtent(),h=bf(u),c=["x","y","z"].map(function(v){return e.coordDimToDataDim(v)[0]}),d=wf(r,c[2]),f=d?r.getCalculationInfo("stackResultDimension"):c[2];r.each(c,function(v,p,m,g){var T=r.get(f,g),x=d?T-m:h?0:u[0],_=t.dataToPoint([v,p,x]),b=t.dataToPoint([v,p,T]),w=Tf.dist(_,b),A=[0,b[1]<_[1]?-1:1,0];Math.abs(w)===0&&(w=.1);var E=[i[0],w,i[1]];r.setItemLayout(g,[_,A,E])}),r.setLayout("orient",[1,0,0])}function ya(e,t,r){for(var i=e.getDataExtent(t),n=e.getDataExtent(r),a=i[1]-i[0]||i[0],o=n[1]-n[0]||n[0],s=50,l=new Uint8Array(s*s),u=0;u<e.count();u++){var h=e.get(t,u),c=e.get(r,u),d=Math.floor((h-i[0])/a*(s-1)),f=Math.floor((c-n[0])/o*(s-1)),v=f*s+d;l[v]=l[v]||1}for(var p=0,u=0;u<l.length;u++)l[u]&&p++;return p/l.length}var Mo=Ae.vec3,Ef=na.isDimensionStacked;function Af(e,t){var r=e.getData(),i=e.get("minHeight")||0,n=e.get("barSize"),a=["lng","lat","alt"].map(function(u){return e.coordDimToDataDim(u)[0]});if(n==null){var o=t.radius*Math.PI,s=ya(r,a[0],a[1]);n=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else wt(n)||(n=[n,n]);var l=xa(r,a);r.each(a,function(u,h,c,d){var f=r.get(l.dimension,d),v=l.isStacked?f-c:t.altitudeAxis.scale.getExtent()[0],p=Math.max(t.altitudeAxis.dataToCoord(c),i),m=t.dataToPoint([u,h,v]),g=t.dataToPoint([u,h,f]),T=Mo.sub([],g,m);Mo.normalize(T,T);var x=[n[0],p,n[1]];r.setItemLayout(d,[m,T,x])}),r.setLayout("orient",L.UP.array)}function Lf(e,t){var r=e.getData(),i=e.get("barSize"),n=e.get("minHeight")||0,a=["lng","lat","alt"].map(function(h){return e.coordDimToDataDim(h)[0]});if(i==null){var o=Math.min(t.size[0],t.size[2]),s=ya(r,a[0],a[1]);i=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else wt(i)||(i=[i,i]);var l=[0,1,0],u=xa(r,a);r.each(a,function(h,c,d,f){var v=r.get(u.dimension,f),p=u.isStacked?v-d:t.altitudeAxis.scale.getExtent()[0],m=Math.max(t.altitudeAxis.dataToCoord(d),n),g=t.dataToPoint([h,c,p]),T=[i[0],m,i[1]];r.setItemLayout(f,[g,l,T])}),r.setLayout("orient",[1,0,0])}function Mf(e,t){var r=e.getData(),i=e.coordDimToDataDim("lng")[0],n=e.coordDimToDataDim("lat")[0],a=e.coordDimToDataDim("alt")[0],o=e.get("barSize"),s=e.get("minHeight")||0;if(o==null){var l=r.getDataExtent(i),u=r.getDataExtent(n),h=t.dataToPoint([l[0],u[0]]),c=t.dataToPoint([l[1],u[1]]),d=Math.min(Math.abs(h[0]-c[0]),Math.abs(h[1]-c[1]))||1,f=ya(r,i,n);o=[d/Math.sqrt(r.count()/f),d/Math.sqrt(r.count()/f)]}else wt(o)||(o=[o,o]),o[0]/=t.getScale()/16,o[1]/=t.getScale()/16;var v=[0,0,1],p=[i,n,a],m=xa(r,p);r.each(p,function(g,T,x,_){var b=r.get(m.dimension,_),w=m.isStacked?b-x:0,A=t.dataToPoint([g,T,w]),E=t.dataToPoint([g,T,b]),M=Math.max(E[2]-A[2],s),I=[o[0],M,o[1]];r.setItemLayout(_,[A,v,I])}),r.setLayout("orient",[1,0,0])}function xa(e,t){var r=Ef(e,t[2]);return{dimension:r?e.getCalculationInfo("stackResultDimension"):t[2],isStacked:r}}function Cf(e){e.registerLayout(function(t,r){t.eachSeriesByType("bar3D",function(i){var n=i.coordinateSystem,a=n&&n.type;a==="globe"?Af(i,n):a==="cartesian3D"?Sf(i,n):a==="geo3D"?Lf(i,n):(a==="mapbox3D"||a==="maptalks3D")&&Mf(i,n)})})}var qt={};qt.getFormattedLabel=function(e,t,r,i,n){r=r||"normal";var a=e.getData(i),o=a.getItemModel(t),s=e.getDataParams(t,i);n!=null&&s.value instanceof Array&&(s.value=s.value[n]);var l=o.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);l==null&&(l=o.get(["label","formatter"]));var u;return typeof l=="function"?(s.status=r,u=l(s)):typeof l=="string"&&(u=Rl(l,s)),u};qt.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};function Df(e,t){var r=[];return bt(e.dimensions,function(i){var n=e.getDimensionInfo(i),a=n.otherDims,o=a[t];o!=null&&o!==!1&&(r[o]=n.name)}),r}function xi(e,t,r){function i(c){var d=[],f=Df(n,"tooltip");f.length?bt(f,function(p){v(n.get(p,t),p)}):bt(c,v);function v(p,m){var g=n.getDimensionInfo(m);if(!(!g||g.otherDims.tooltip===!1)){var T=g.type,x="- "+(g.tooltipName||g.name)+": "+(T==="ordinal"?p+"":T==="time"?Bl("yyyy/MM/dd hh:mm:ss",p):Ea(p));x&&d.push(Tr(x))}}return"<br/>"+d.join("<br/>")}var n=e.getData(),a=e.getRawValue(t),o=wt(a)?i(a):Tr(Ea(a)),s=n.getName(t),l=Ve(n,t);Ol(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=Il(l),h=e.name;return h==="\0-"&&(h=""),h=h?Tr(h)+"<br/>":"",h+u+(s?Tr(s)+": "+o:o)}function ln(e,t,r){r=r||e.getSource();var i=t||Zo(e.get("coordinateSystem"))||["x","y","z"],n=pi(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:i.map(function(s){var l=e.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(s){if(i.indexOf(s.coordDim)>=0){var l=e.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=na.enableDataStack(e,n,{byIndex:!0,stackedCoordDimension:"z"}),o=new St(n,e);return o.setCalculationInfo(a),o.initData(r),o}var Zs=dt.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,t){return ln(this)},getFormattedLabel:function(e,t,r,i){var n=qt.getFormattedLabel(this,e,t,r,i);return n==null&&(n=this.getData().get("z",e)),n},formatTooltip:function(e){return xi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});ce(Zs.prototype,zr);var Te=Ae.vec3,Pf=Ae.mat3,Ta=re.extend(function(){return{attributes:{position:new re.Attribute("position","float",3,"POSITION"),normal:new re.Attribute("normal","float",3,"NORMAL"),color:new re.Attribute("color","float",4,"COLOR"),prevPosition:new re.Attribute("prevPosition","float",3),prevNormal:new re.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,r=this.getBarVertexCount()*e,i=this.getBarTriangleCount()*e;this.vertexCount!==r&&(this.attributes.position.init(r),t?this.attributes.normal.init(r):this.attributes.normal.value=null,this.attributes.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3),this._dataIndices=new Uint32Array(r))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,r=e*2+1;return(t+1)*r*2+4},setColor:function(e,t){for(var r=this.getBarVertexCount(),i=r*e,n=r*(e+1),a=i;a<n;a++)this.attributes.color.set(a,t);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=Te.create,t=Te.scaleAndAdd,r=e(),i=e(),n=e(),a=e(),o=e(),s=e(),l=e(),u=[],h=[],c=0;c<8;c++)u[c]=e();for(var d=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],f=[0,1,2,0,2,3],v=[],c=0;c<d.length;c++)for(var p=d[c],m=0;m<2;m++){for(var g=[],T=0;T<3;T++)g.push(p[f[m*3+T]]);v.push(g)}return function(x,_,b,w,A,E){var M=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(x,_,b,w,this.bevelSize,this.bevelSegments,A);else{Te.copy(n,_),Te.normalize(n,n),Te.cross(a,b,n),Te.normalize(a,a),Te.cross(i,n,a),Te.normalize(a,a),Te.negate(o,i),Te.negate(s,n),Te.negate(l,a),t(u[0],x,i,w[0]/2),t(u[0],u[0],a,w[2]/2),t(u[1],x,i,w[0]/2),t(u[1],u[1],l,w[2]/2),t(u[2],x,o,w[0]/2),t(u[2],u[2],l,w[2]/2),t(u[3],x,o,w[0]/2),t(u[3],u[3],a,w[2]/2),t(r,x,n,w[1]),t(u[4],r,i,w[0]/2),t(u[4],u[4],a,w[2]/2),t(u[5],r,i,w[0]/2),t(u[5],u[5],l,w[2]/2),t(u[6],r,o,w[0]/2),t(u[6],u[6],l,w[2]/2),t(u[7],r,o,w[0]/2),t(u[7],u[7],a,w[2]/2);var I=this.attributes;if(this.enableNormal){h[0]=i,h[1]=o,h[2]=n,h[3]=s,h[4]=a,h[5]=l;for(var C=this._vertexOffset,B=0;B<d.length;B++){for(var z=this._triangleOffset*3,O=0;O<6;O++)this.indices[z++]=C+f[O];C+=4,this._triangleOffset+=2}for(var B=0;B<d.length;B++)for(var U=h[B],O=0;O<4;O++){var j=d[B][O];I.position.set(this._vertexOffset,u[j]),I.normal.set(this._vertexOffset,U),I.color.set(this._vertexOffset++,A)}}else{for(var B=0;B<v.length;B++){for(var z=this._triangleOffset*3,O=0;O<3;O++)this.indices[z+O]=v[B][O]+this._vertexOffset;this._triangleOffset++}for(var B=0;B<u.length;B++)I.position.set(this._vertexOffset,u[B]),I.color.set(this._vertexOffset++,A)}}for(var Y=this._vertexOffset,B=M;B<Y;B++)this._dataIndices[B]=E}}(),_addBevelBar:function(){var e=Te.create(),t=Te.create(),r=Te.create(),i=Pf.create(),n=[],a=[1,-1,-1,1],o=[1,1,-1,-1],s=[2,0];return function(l,u,h,c,d,f,v){Te.copy(t,u),Te.normalize(t,t),Te.cross(r,h,t),Te.normalize(r,r),Te.cross(e,t,r),Te.normalize(r,r),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=t[0],i[4]=t[1],i[5]=t[2],i[6]=r[0],i[7]=r[1],i[8]=r[2],d=Math.min(c[0],c[2])/2*d;for(var p=0;p<3;p++)n[p]=Math.max(c[p]-d*2,0);for(var m=(c[0]-n[0])/2,g=(c[1]-n[1])/2,T=(c[2]-n[2])/2,x=[],_=[],b=this._vertexOffset,w=[],p=0;p<2;p++){w[p]=w[p]=[];for(var A=0;A<=f;A++)for(var E=0;E<4;E++){(A===0&&p===0||p===1&&A===f)&&w[p].push(b);for(var M=0;M<=f;M++){var I=M/f*Math.PI/2+Math.PI/2*E,C=A/f*Math.PI/2+Math.PI/2*p;_[0]=m*Math.cos(I)*Math.sin(C),_[1]=g*Math.cos(C),_[2]=T*Math.sin(I)*Math.sin(C),x[0]=_[0]+a[E]*n[0]/2,x[1]=_[1]+g+s[p]*n[1]/2,x[2]=_[2]+o[E]*n[2]/2,Math.abs(m-g)<1e-6&&Math.abs(g-T)<1e-6||(_[0]/=m*m,_[1]/=g*g,_[2]/=T*T),Te.normalize(_,_),Te.transformMat3(x,x,i),Te.transformMat3(_,_,i),Te.add(x,x,l),this.attributes.position.set(b,x),this.enableNormal&&this.attributes.normal.set(b,_),this.attributes.color.set(b,v),b++}}}for(var B=f*4+3,z=f*2+1,O=B+1,E=0;E<z;E++)for(var p=0;p<=B;p++){var U=E*O+p+this._vertexOffset,j=E*O+(p+1)%O+this._vertexOffset,Y=(E+1)*O+(p+1)%O+this._vertexOffset,k=(E+1)*O+p+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[Y,U,j]),this.setTriangleIndices(this._triangleOffset++,[Y,k,U])}this.setTriangleIndices(this._triangleOffset++,[w[0][0],w[0][2],w[0][1]]),this.setTriangleIndices(this._triangleOffset++,[w[0][0],w[0][3],w[0][2]]),this.setTriangleIndices(this._triangleOffset++,[w[1][0],w[1][1],w[1][2]]),this.setTriangleIndices(this._triangleOffset++,[w[1][0],w[1][2],w[1][3]]),this._vertexOffset=b}}()});kt(Ta.prototype,_i);kt(Ta.prototype,pa);var Nf=Ae.vec3;const Rf=vt.extend({type:"bar3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._api=t,this._labelsBuilder=new Pt(256,256,t);var r=this;this._labelsBuilder.getLabelPosition=function(i,n,a){if(r._data){var o=r._data.getItemLayout(i),s=o[0],l=o[1],u=o[2][1];return Nf.scaleAndAdd([],s,l,a+u)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,r){var i=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=i,this._barMesh||(this._barMesh=new y.Mesh({geometry:new Ta,shadowDepthMaterial:new y.Material({shader:new y.Shader(y.Shader.source("ecgl.sm.depth.vertex"),y.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var n=e.coordinateSystem;if(this._doRender(e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[a]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var r=e.getData(),i=e.get("shading"),n=i!=="color",a=this,o=this._barMesh,s="ecgl."+i;(!o.material||o.material.shader.name!==s)&&(o.material=y.createMaterial(s,["VERTEX_COLOR"])),y.setMaterialFromModel(i,o.material,e,t),o.geometry.enableNormal=n,o.geometry.resetOffset();var l=e.get("bevelSize"),u=e.get("bevelSmoothness");o.geometry.bevelSegments=u,o.geometry.bevelSize=l;var h=[],c=new Float32Array(r.count()*4),d=0,m=0,f=!1;r.each(function(T){if(r.hasValue(T)){var x=Ve(r,T),_=Fe(r,T);_==null&&(_=1),y.parseColor(x,h),h[3]*=_,c[d++]=h[0],c[d++]=h[1],c[d++]=h[2],c[d++]=h[3],h[3]>0&&(m++,h[3]<.99&&(f=!0))}}),o.geometry.setBarCount(m);var v=r.getLayout("orient"),p=this._barIndexOfData=new Int32Array(r.count()),m=0;r.each(function(T){if(!r.hasValue(T)){p[T]=-1;return}var x=r.getItemLayout(T),_=x[0],b=x[1],w=x[2],A=T*4;h[0]=c[A++],h[1]=c[A++],h[2]=c[A++],h[3]=c[A++],h[3]>0&&(a._barMesh.geometry.addBar(_,b,v,w,h,T),p[T]=m++)}),o.geometry.dirty(),o.geometry.updateBoundingBox();var g=o.material;g.transparent=f,g.depthMask=!f,o.geometry.sortTriangles=f,this._initHandler(e,t)},_initHandler:function(e,t){var r=e.getData(),i=this._barMesh,n=e.coordinateSystem.type==="cartesian3D";i.seriesIndex=e.seriesIndex;var a=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(o){var s=i.geometry.getDataIndexOfVertex(o.triangle[0]);s!==a&&(this._downplay(a),this._highlight(s),this._labelsBuilder.updateLabels([s]),n&&t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",s),r.get("y",s),r.get("z",s,!0)]})),a=s,i.dataIndex=s},this),i.on("mouseout",function(o){this._downplay(a),this._labelsBuilder.updateLabels(),a=-1,i.dataIndex=-1,n&&t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=t.getItemModel(e),n=i.getModel("emphasis.itemStyle"),a=n.get("color"),o=n.get("opacity");if(a==null){var s=Ve(t,e);a=ia(s,-.4)}o==null&&(o=Fe(t,e));var l=y.parseColor(a);l[3]*=o,this._barMesh.geometry.setColor(r,l),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=Ve(t,e),n=Fe(t,e),a=y.parseColor(i);a[3]*=n,this._barMesh.geometry.setColor(r,a),this._api.getZr().refresh()}}},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),o=te.queryDataIndex(a,n),s=this;o!=null?bt(qt.normalizeToArray(o),function(l){e==="highlight"?this._highlight(l):this._downplay(l)},this):a.each(function(l){e==="highlight"?s._highlight(l):s._downplay(l)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function Of(e){e.registerChartView(Rf),e.registerSeriesModel(Zs),Cf(e),e.registerProcessor(function(t,r){t.eachSeriesByType("bar3d",function(i){var n=i.getData();n.filterSelf(function(a){return n.hasValue(a)})})})}ke(Of);var If=dt.extend({type:"series.line3D",dependencies:["grid3D"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){return ln(this)},formatTooltip:function(e){return xi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}}),Bf=Ae.vec3;y.Shader.import(sn);const Ff=vt.extend({type:"line3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._api=t},render:function(e,t,r){var i=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=i,this._line3DMesh||(this._line3DMesh=new y.Mesh({geometry:new Xt({useNativeLine:!1,sortTriangles:!0}),material:new y.Material({shader:y.createShader("ecgl.meshLines3D")}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var n=e.coordinateSystem;if(n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._line3DMesh.material[a]("fragment","SRGB_DECODE")}this._doRender(e,r),this._data=e.getData(),this._camera=n.viewGL.camera,this.updateCamera(),this._updateAnimation(e)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(e,t){var r=e.getData(),i=this._line3DMesh;i.geometry.resetOffset();var n=r.getLayout("points"),a=[],o=new Float32Array(n.length/3*4),s=0,l=!1;r.each(function(c){var d=Ve(r,c),f=Fe(r,c);f==null&&(f=1),y.parseColor(d,a),a[3]*=f,o[s++]=a[0],o[s++]=a[1],o[s++]=a[2],o[s++]=a[3],a[3]<.99&&(l=!0)}),i.geometry.setVertexCount(i.geometry.getPolylineVertexCount(n)),i.geometry.setTriangleCount(i.geometry.getPolylineTriangleCount(n)),i.geometry.addPolyline(n,o,te.firstNotNull(e.get("lineStyle.width"),1)),i.geometry.dirty(),i.geometry.updateBoundingBox();var u=i.material;u.transparent=l,u.depthMask=!l;var h=e.getModel("debug.wireframe");h.get("show")?(i.geometry.createAttribute("barycentric","float",3),i.geometry.generateBarycentric(),i.material.set("both","WIREFRAME_TRIANGLE"),i.material.set("wireframeLineColor",y.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)")),i.material.set("wireframeLineWidth",te.firstNotNull(h.get("lineStyle.width"),1))):i.material.set("both","WIREFRAME_TRIANGLE"),this._points=n,this._initHandler(e,t)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevPositionPrev","positionPrev"],["prevPositionNext","positionNext"]],this._prevLine3DMesh,this._line3DMesh,e)},_initHandler:function(e,t){var r=e.getData(),i=e.coordinateSystem,n=this._line3DMesh,a=-1;n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(o){var s=i.pointToData(o.point.array),l=r.indicesOfNearest("x",s[0])[0];l!==a&&(t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",l),r.get("y",l),r.get("z",l)]}),n.dataIndex=l),a=l},this),n.on("mouseout",function(o){a=-1,n.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateNDCPosition:function(){var e=new H,t=this._camera;H.multiply(e,t.projectionMatrix,t.viewMatrix);var r=this._positionNDC,i=this._points,n=i.length/3;(!r||r.length/2!==n)&&(r=this._positionNDC=new Float32Array(n*2));for(var a=[],o=0;o<n;o++){var s=o*3,l=o*2;a[0]=i[s],a[1]=i[s+1],a[2]=i[s+2],a[3]=1,Bf.transformMat4(a,a,e.array),r[l]=a[0]/a[3],r[l+1]=a[1]/a[3]}},_pick:function(e,t,r,i,n,a){var o=this._positionNDC,s=this._data.hostModel,l=s.get("lineStyle.width"),u=-1,h=r.viewport.width,c=r.viewport.height,d=h*.5,f=c*.5;e=(e+1)*d,t=(t+1)*f;for(var v=1;v<o.length/2;v++){var p=(o[(v-1)*2]+1)*d,m=(o[(v-1)*2+1]+1)*f,g=(o[v*2]+1)*d,T=(o[v*2+1]+1)*f;if(Fl(p,m,g,T,l,e,t)){var x=(p-e)*(p-e)+(m-t)*(m-t),_=(g-e)*(g-e)+(T-t)*(T-t);u=x<_?v-1:v}}if(u>=0){var b=u*3,w=new L(this._points[b],this._points[b+1],this._points[b+2]);a.push({dataIndex:u,point:w,pointWorld:w.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(w)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Vf(e){e.registerChartView(Ff),e.registerSeriesModel(If),e.registerLayout(function(t,r){t.eachSeriesByType("line3D",function(i){var n=i.getData(),a=i.coordinateSystem;if(a){if(a.type!=="cartesian3D")return;var o=new Float32Array(n.count()*3),s=[],l=[],u=a.dimensions,h=u.map(function(c){return i.coordDimToDataDim(c)[0]});a&&n.each(h,function(c,d,f,v){s[0]=c,s[1]=d,s[2]=f,a.dataToPoint(s,l),o[v*3]=l[0],o[v*3+1]=l[1],o[v*3+2]=l[2]}),n.setLayout("points",o)}})})}ke(Vf);const zf=dt.extend({type:"series.scatter3D",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(e,t){return ln(this)},getFormattedLabel:function(e,t,r,i){var n=qt.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},formatTooltip:function(e){return xi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:"circle",symbolSize:10,blendMode:"source-over",label:{show:!1,position:"right",distance:5,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function Vn(e,i,r){var i=i||document.createElement("canvas");i.width=e,i.height=e;var n=i.getContext("2d");return r&&r(n),i}function Gf(e,t,r,i){wt(t)||(t=[t,t]);var n=$i.getMarginByStyle(r,i),a=t[0]+n.left+n.right,o=t[1]+n.top+n.bottom,s=Vl(e,0,0,t[0],t[1]),l=Math.max(a,o);s.x=n.left,s.y=n.top,a>o?s.y+=(l-o)/2:s.x+=(l-a)/2;var u=s.getBoundingRect();return s.x-=u.x,s.y-=u.y,s.setStyle(r),s.update(),s.__size=l,s}function Uf(e,t,r){var i=t.width,n=t.height,a=e.canvas.width,o=e.canvas.height,s=i/a,l=n/o;function u(g){return g<128?1:-1}function h(g,T){var x=1/0;g=Math.floor(g*s),T=Math.floor(T*l);for(var _=T*i+g,b=t.data[_*4],w=u(b),A=Math.max(T-r,0);A<Math.min(T+r,n);A++)for(var E=Math.max(g-r,0);E<Math.min(g+r,i);E++){var _=A*i+E,M=t.data[_*4],I=u(M),C=E-g,B=A-T;if(w!==I){var z=C*C+B*B;z<x&&(x=z)}}return w*Math.sqrt(x)}for(var c=e.createImageData(a,o),d=0;d<o;d++)for(var f=0;f<a;f++){var v=h(f,d),p=v/r*.5+.5,m=(d*a+f)*4;c.data[m++]=(1-p)*255,c.data[m++]=(1-p)*255,c.data[m++]=(1-p)*255,c.data[m++]=255}return c}var $i={getMarginByStyle:function(e){var t=e.minMargin||0,r=0;e.stroke&&e.stroke!=="none"&&(r=e.lineWidth==null?1:e.lineWidth);var i=e.shadowBlur||0,n=e.shadowOffsetX||0,a=e.shadowOffsetY||0,o={};return o.left=Math.max(r/2,-n+i,t),o.right=Math.max(r/2,n+i,t),o.top=Math.max(r/2,-a+i,t),o.bottom=Math.max(r/2,a+i,t),o},createSymbolSprite:function(e,t,r,i){var n=Gf(e,t,r),a=$i.getMarginByStyle(r);return{image:Vn(n.__size,i,function(o){ko(o,n)}),margin:a}},createSDFFromCanvas:function(e,t,r,i){return Vn(t,i,function(n){var a=e.getContext("2d"),o=a.getImageData(0,0,e.width,e.height);n.putImageData(Uf(n,o,r),0,0)})},createSimpleSprite:function(e,t){return Vn(e,t,function(r){var i=e/2;r.beginPath(),r.arc(i,i,60,0,Math.PI*2,!1),r.closePath();var n=r.createRadialGradient(i,i,0,i,i,i);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=n,r.fill()})}},Co=Ae.vec3;const Hf={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(e,t){var r=this.indices,i=Co.create();if(!r){r=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var n=0;n<r.length;n++)r[n]=n}if(t===0){var a=this.attributes.position,e=e.array,o=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var s,n=0;n<this.vertexCount;n++){a.get(n,i);var l=Co.sqrDist(i,e);isNaN(l)&&(l=1e7,o++),n===0?(s=l,l=0):l=l-s,this._zList[n]=l}this._noneCount=o}if(this.vertexCount<2e4)t===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var n=0;n<3;n++)this._progressiveQuickSort(t*3+n);this.dirtyIndices()},_simpleSort:function(e){var t=this._zList,r=this.indices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Nr.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._zList,r=this.indices;this._quickSort=this._quickSort||new Nr,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}},kf=`@export ecgl.sdfSprite.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform float elapsedTime : 0;

attribute vec3 position : POSITION;

#ifdef VERTEX_SIZE
attribute float size;
#else
uniform float u_Size;
#endif

#ifdef VERTEX_COLOR
attribute vec4 a_FillColor: COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute float prevSize;
uniform float percent : 1.0;
#endif


#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

varying float v_Size;

void main()
{

#ifdef POSITIONTEXTURE_ENABLED
 gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);
#else

 #ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 #else
 vec3 pos = position;
 #endif
 gl_Position = worldViewProjection * vec4(pos, 1.0);
#endif

#ifdef VERTEX_SIZE
#ifdef VERTEX_ANIMATION
 v_Size = mix(prevSize, size, percent);
#else
 v_Size = size;
#endif
#else
 v_Size = u_Size;
#endif

#ifdef VERTEX_COLOR
 v_Color = a_FillColor;
 #endif

 gl_PointSize = v_Size;
}

@end

@export ecgl.sdfSprite.fragment

uniform vec4 color: [1, 1, 1, 1];
uniform vec4 strokeColor: [1, 1, 1, 1];
uniform float smoothing: 0.07;

uniform float lineWidth: 0.0;

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

varying float v_Size;

uniform sampler2D sprite;

@import clay.util.srgb

void main()
{
 gl_FragColor = color;

 vec4 _strokeColor = strokeColor;

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
 #endif

#ifdef SPRITE_ENABLED
 float d = texture2D(sprite, gl_PointCoord).r;
 gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);

 if (lineWidth > 0.0) {
 float sLineWidth = lineWidth / 2.0;

 float outlineMaxValue0 = 0.5 + sLineWidth;
 float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;
 float outlineMinValue0 = 0.5 - sLineWidth - smoothing;
 float outlineMinValue1 = 0.5 - sLineWidth;

 if (d <= outlineMaxValue1 && d >= outlineMinValue0) {
 float a = _strokeColor.a;
 if (d <= outlineMinValue1) {
 a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);
 }
 else {
 a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);
 }
 gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);
 gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;
 }
 }
#endif

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(gl_FragColor);
#endif
}
@end`;var zn=Ae.vec4;y.Shader.import(kf);var Wf=y.Mesh.extend(function(){var e=new y.Geometry({dynamic:!0,attributes:{color:new y.Geometry.Attribute("color","float",4,"COLOR"),position:new y.Geometry.Attribute("position","float",3,"POSITION"),size:new y.Geometry.Attribute("size","float",1),prevPosition:new y.Geometry.Attribute("prevPosition","float",3),prevSize:new y.Geometry.Attribute("prevSize","float",1)}});Object.assign(e,Hf);var t=new y.Material({shader:y.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});t.enableTexture("sprite"),t.define("both","VERTEX_COLOR"),t.define("both","VERTEX_SIZE");var r=new y.Texture2D({image:document.createElement("canvas"),flipY:!1});return t.set("sprite",r),e.pick=this._pick.bind(this),{geometry:e,material:t,mode:y.Mesh.POINTS,sizeScale:1}},{_pick:function(e,t,r,i,n,a){var o=this._positionNDC;if(o)for(var s=r.viewport,l=2/s.width,u=2/s.height,h=this.geometry.vertexCount-1;h>=0;h--){var c;this.geometry.indices?c=this.geometry.indices[h]:c=h;var d=o[c*2],f=o[c*2+1],v=this.geometry.attributes.size.get(c)/this.sizeScale,p=v/2;if(e>d-p*l&&e<d+p*l&&t>f-p*u&&t<f+p*u){var m=new y.Vector3,g=new y.Vector3;this.geometry.attributes.position.get(c,m.array),y.Vector3.transformMat4(g,m,this.worldTransform),a.push({vertexIndex:c,point:m,pointWorld:g,target:this,distance:g.distance(i.getWorldPosition())})}}},updateNDCPosition:function(e,t,r){var i=this._positionNDC,n=this.geometry;(!i||i.length/2!==n.vertexCount)&&(i=this._positionNDC=new Float32Array(n.vertexCount*2));for(var a=zn.create(),o=0;o<n.vertexCount;o++)n.attributes.position.get(o,a),a[3]=1,zn.transformMat4(a,a,e.array),zn.scale(a,a,1/a[3]),i[o*2]=a[0],i[o*2+1]=a[1]}}),Do=20,Po=-10;function Xf(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]}function hr(e,t){this.rootNode=new y.Node,this.is2D=e,this._labelsBuilder=new Pt(256,256,t),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=t,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}hr.prototype={constructor:hr,highlightOnMouseover:!0,update:function(e,t,r,i,n){var a=this._prevMesh;this._prevMesh=this._mesh,this._mesh=a;var o=e.getData();if(i==null&&(i=0),n==null&&(n=o.count()),this._startDataIndex=i,this._endDataIndex=n-1,!this._mesh){var s=this._prevMesh&&this._prevMesh.material;this._mesh=new Wf({renderOrder:10,frustumCulling:!1}),s&&(this._mesh.material=s)}var s=this._mesh.material,l=this._mesh.geometry,u=l.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var h=this._getSymbolInfo(e,i,n),c=r.getDevicePixelRatio(),d=e.getModel("itemStyle").getItemStyle(),f=e.get("large"),v=1;h.maxSize>2?(v=this._updateSymbolSprite(e,d,h,c),s.enableTexture("sprite")):s.disableTexture("sprite"),u.position.init(n-i);var p=[];if(f){s.undefine("VERTEX_SIZE"),s.undefine("VERTEX_COLOR");var m=Bc(o),g=Fc(o);y.parseColor(m,p),p[3]*=g,s.set({color:p,u_Size:h.maxSize*this._sizeScale})}else s.set({color:[1,1,1,1]}),s.define("VERTEX_SIZE"),s.define("VERTEX_COLOR"),u.size.init(n-i),u.color.init(n-i),this._originalOpacity=new Float32Array(n-i);for(var T=o.getLayout("points"),x=u.position.value,_=0;_<n-i;_++){var b=_*3,w=_*2;if(this.is2D?(x[b]=T[w],x[b+1]=T[w+1],x[b+2]=Po):(x[b]=T[b],x[b+1]=T[b+1],x[b+2]=T[b+2]),!f){var m=Ve(o,_),g=Fe(o,_);y.parseColor(m,p),p[3]*=g,u.color.set(_,p),p[3]<.99;var A=o.getItemVisual(_,"symbolSize");A=A instanceof Array?Math.max(A[0],A[1]):A,isNaN(A)&&(A=0),u.size.value[_]=A*v*this._sizeScale,this._originalOpacity[_]=p[3]}}this._mesh.sizeScale=v,l.updateBoundingBox(),l.dirty(),this._updateMaterial(e,d);var E=e.coordinateSystem;if(E&&E.viewGL){var M=E.viewGL.isLinearSpace()?"define":"undefine";s[M]("fragment","SRGB_DECODE")}f||this._updateLabelBuilder(e,i,n),this._updateHandler(e,t,r),this._updateAnimation(e),this._api=r},getPointsMesh:function(){return this._mesh},updateLabels:function(e){this._labelsBuilder.updateLabels(e)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(e,t,r,i){r.maxSize=Math.min(r.maxSize*2,200);var n=[];return r.aspect>1?(n[0]=r.maxSize,n[1]=r.maxSize/r.aspect):(n[1]=r.maxSize,n[0]=r.maxSize*r.aspect),n[0]=n[0]||1,n[1]=n[1]||1,(this._symbolType!==r.type||!Xf(this._symbolSize,n)||this._lineWidth!==t.lineWidth)&&($i.createSymbolSprite(r.type,n,{fill:"#fff",lineWidth:t.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(n[0]/2,10)},this._spriteImageCanvas),$i.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),Do,this._mesh.material.get("sprite").image),this._symbolType=r.type,this._symbolSize=n,this._lineWidth=t.lineWidth),this._spriteImageCanvas.width/r.maxSize*i},_updateMaterial:function(e,t){var r=e.get("blendMode")==="lighter"?y.additiveBlend:null,i=this._mesh.material;i.blend=r,i.set("lineWidth",t.lineWidth/Do);var n=y.parseColor(t.stroke);i.set("strokeColor",n),i.transparent=!0,i.depthMask=!1,i.depthTest=!this.is2D,i.sortVertices=!this.is2D},_updateLabelBuilder:function(e,o,r){var i=e.getData(),n=this._mesh.geometry,a=n.attributes.position.value,o=this._startDataIndex,s=this._mesh.sizeScale;this._labelsBuilder.updateData(i,o,r),this._labelsBuilder.getLabelPosition=function(l,u,h){var c=(l-o)*3;return[a[c],a[c+1],a[c+2]]},this._labelsBuilder.getLabelDistance=function(l,u,h){var c=n.attributes.size.get(l-o)/s;return c/2+h},this._labelsBuilder.updateLabels()},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,e)},_updateHandler:function(e,t,r){var i=e.getData(),n=this._mesh,a=this,o=-1,s=e.coordinateSystem&&e.coordinateSystem.type==="cartesian3D",l;s&&(l=e.coordinateSystem.model),n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(u){var h=u.vertexIndex+a._startDataIndex;h!==o&&(this.highlightOnMouseover&&(this.downplay(i,o),this.highlight(i,h),this._labelsBuilder.updateLabels([h])),s&&r.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get(e.coordDimToDataDim("x")[0],h),i.get(e.coordDimToDataDim("y")[0],h),i.get(e.coordDimToDataDim("z")[0],h)],grid3DIndex:l.componentIndex})),n.dataIndex=h,o=h},this),n.on("mouseout",function(u){var h=u.vertexIndex+a._startDataIndex;this.highlightOnMouseover&&(this.downplay(i,h),this._labelsBuilder.updateLabels()),o=-1,n.dataIndex=-1,s&&r.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:l.componentIndex})},this)},updateLayout:function(e,t,r){var i=e.getData();if(this._mesh){var n=this._mesh.geometry.attributes.position.value,a=i.getLayout("points");if(this.is2D)for(var o=0;o<a.length/2;o++){var s=o*3,l=o*2;n[s]=a[l],n[s+1]=a[l+1],n[s+2]=Po}else for(var o=0;o<a.length;o++)n[o]=a[o];this._mesh.geometry.dirty(),r.getZr().refresh()}},updateView:function(e){if(this._mesh){var t=new H;H.mul(t,e.viewMatrix,this._mesh.worldTransform),H.mul(t,e.projectionMatrix,t),this._mesh.updateNDCPosition(t,this.is2D,this._api)}},highlight:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=e.getItemModel(t),i=r.getModel("emphasis.itemStyle"),n=i.get("color"),a=i.get("opacity");if(n==null){var o=Ve(e,t);n=ia(o,-.4)}a==null&&(a=Fe(e,t));var s=y.parseColor(n);s[3]*=a,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,s),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=Ve(e,t),i=Fe(e,t),n=y.parseColor(r);n[3]*=i,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,n),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(e){if(this._originalOpacity){for(var t=this._mesh.geometry,r=0;r<t.vertexCount;r++){var i=this._originalOpacity[r]*e;t.attributes.color.value[r*4+3]=i}t.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(e){this._mesh&&this._setPositionTextureToMesh(this._mesh,e),this._positionTexture=e},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(e){if(e!==this._sizeScale){if(this._mesh){var t=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",t/this._sizeScale*e);var r=this._mesh.geometry.attributes;if(r.size.value)for(var i=0;i<r.size.value.length;i++)r.size.value[i]=r.size.value[i]/this._sizeScale*e}this._sizeScale=e}},_setPositionTextureToMesh:function(e,t){t&&e.material.set("positionTexture",t),e.material[t?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(e,t,r){if(e.get("large")){var i=te.firstNotNull(e.get("symbolSize"),1),s,a;return i instanceof Array?(s=Math.max(i[0],i[1]),a=i[0]/i[1]):(s=i,a=1),{maxSize:i,type:e.get("symbol"),aspect:a}}for(var n=e.getData(),a,o=n.getItemVisual(0,"symbol")||"circle",s=0,l=t;l<r;l++){var i=n.getItemVisual(l,"symbolSize"),u=n.getItemVisual(l,"symbol"),h;if(i instanceof Array)h=i[0]/i[1],s=Math.max(Math.max(i[0],i[1]),s);else{if(isNaN(i))continue;h=1,s=Math.max(i,s)}o=u,a=h}return{maxSize:s,type:o,aspect:a}}};const jf=vt.extend({type:"scatter3D",hasSymbolVisual:!0,__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(e,t,r){if(this.groupGL.removeAll(),!!e.getData().count()){var i=e.coordinateSystem;if(i&&i.viewGL){i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera;var n=this._pointsBuilderList[0];n||(n=this._pointsBuilderList[0]=new hr(!1,r)),this._pointsBuilderList.length=1,this.groupGL.add(n.rootNode),n.update(e,t,r),n.updateView(i.viewGL.camera)}}},incrementalPrepareRender:function(e,t,r){var i=e.coordinateSystem;i&&i.viewGL&&(i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new hr(!1,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),n.update(t,r,i,e.start,e.end),n.updateView(t.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(e){e.updateView(this._camera)},this)},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),o=te.queryDataIndex(a,n),s=e==="highlight";o!=null?bt(qt.normalizeToArray(o),function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var h=this._pointsBuilderList[u];s?h.highlight(a,l):h.downplay(a,l)}},this):a.each(function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var h=this._pointsBuilderList[u];s?h.highlight(a,l):h.downplay(a,l)}})},dispose:function(){this._pointsBuilderList.forEach(function(e){e.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Zf(e){e.registerChartView(jf),e.registerSeriesModel(zf),e.registerLayout({seriesType:"scatter3D",reset:function(t){var r=t.coordinateSystem;if(r){var i=r.dimensions;if(i.length<3)return;var n=i.map(function(s){return t.coordDimToDataDim(s)[0]}),a=[],o=[];return{progress:function(s,l){for(var u=new Float32Array((s.end-s.start)*3),h=s.start;h<s.end;h++){var c=(h-s.start)*3;a[0]=l.get(n[0],h),a[1]=l.get(n[1],h),a[2]=l.get(n[2],h),r.dataToPoint(a,o),u[c]=o[0],u[c+1]=o[1],u[c+2]=o[2]}l.setLayout("points",u)}}}}})}ke(Zf);var Pe=Ae.vec3,No=Ae.vec2,At=Pe.normalize,Ri=Pe.cross,Ro=Pe.sub,Gn=Pe.add,Ut=Pe.create,Vt=Ut(),it=Ut(),zt=Ut(),$r=Ut(),Oo=[],Io=[];function qf(e,t){No.copy(Oo,e[0]),No.copy(Io,e[1]);var r=[],i=r[0]=Ut(),n=r[1]=Ut(),a=r[2]=Ut(),o=r[3]=Ut();t.dataToPoint(Oo,i),t.dataToPoint(Io,o),At(Vt,i),Ro(it,o,i),At(it,it),Ri(zt,it,Vt),At(zt,zt),Ri(it,Vt,zt),Gn(n,Vt,it),At(n,n),At(Vt,o),Ro(it,i,o),At(it,it),Ri(zt,it,Vt),At(zt,zt),Ri(it,Vt,zt),Gn(a,Vt,it),At(a,a),Gn($r,i,o),At($r,$r);var s=Pe.dot(i,$r),l=Pe.dot($r,n),u=(Math.max(Pe.len(i),Pe.len(o))-s)/l*2;return Pe.scaleAndAdd(n,i,n,u),Pe.scaleAndAdd(a,o,a,u),r}function Yf(e,t,r){var i=[],n=i[0]=Pe.create(),a=i[1]=Pe.create(),o=i[2]=Pe.create(),s=i[3]=Pe.create();t.dataToPoint(e[0],n),t.dataToPoint(e[1],s);var l=Pe.dist(n,s);return Pe.lerp(a,n,s,.3),Pe.lerp(o,n,s,.3),Pe.scaleAndAdd(a,a,r,Math.min(l*.1,10)),Pe.scaleAndAdd(o,o,r,Math.min(l*.1,10)),i}function qs(e,t){for(var r=new Float32Array(e.length*3),i=0,n=[],a=0;a<e.length;a++)t.dataToPoint(e[a],n),r[i++]=n[0],r[i++]=n[1],r[i++]=n[2];return r}function Ys(e){var t=[];return e.each(function(r){var i=e.getItemModel(r),n=i.option instanceof Array?i.option:i.getShallow("coords",!0);t.push(n)}),{coordsList:t}}function Kf(e,t){var r=e.getData(),i=e.get("polyline");r.setLayout("lineType",i?"polyline":"cubicBezier");var n=Ys(r);r.each(function(a){var o=n.coordsList[a],s=i?qs:qf;r.setItemLayout(a,s(o,t))})}function Bo(e,t,r){var i=e.getData(),n=e.get("polyline"),a=Ys(i);i.setLayout("lineType",n?"polyline":"cubicBezier"),i.each(function(o){var s=a.coordsList[o],l=n?qs(s,t):Yf(s,t,r);i.setItemLayout(o,l)})}function $f(e,t){e.eachSeriesByType("lines3D",function(r){var i=r.coordinateSystem;i.type==="globe"?Kf(r,i):i.type==="geo3D"?Bo(r,i,[0,1,0]):(i.type==="mapbox3D"||i.type==="maptalks3D")&&Bo(r,i,[0,0,1])})}const Qf=dt.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var r=new St(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),Jf=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`;var Fo=Ae.vec3;function ed(e){return e>0?1:-1}y.Shader.import(Jf);const td=y.Mesh.extend(function(){var e=new y.Material({shader:new y.Shader(y.Shader.source("ecgl.trail2.vertex"),y.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new Xt({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,r){var i=e.hostModel,n=this.geometry,a=i.getModel("effect"),o=a.get("trailWidth")*t.getDevicePixelRatio(),s=a.get("trailLength"),l=i.get("effect.constantSpeed"),u=i.get("effect.period")*1e3,h=l!=null;h?this.material.set("speed",l/1e3):this.material.set("period",u),this.material[h?"define":"undefine"]("vertex","CONSTANT_SPEED");var c=i.get("polyline");n.trailLength=s,this.material.set("trailLength",s),n.resetOffset(),["position","positionPrev","positionNext"].forEach(function(A){n.attributes[A].value=r.attributes[A].value});var d=["dist","distAll","start","offset","color"];d.forEach(function(A){n.attributes[A].init(n.vertexCount)}),n.indices=r.indices;var f=[],v=a.get("trailColor"),p=a.get("trailOpacity"),m=v!=null,g=p!=null;this.updateWorldTransform();var T=this.worldTransform.x.len(),x=this.worldTransform.y.len(),_=this.worldTransform.z.len(),b=0,w=0;e.each(function(A){var E=e.getItemLayout(A),M=g?p:Fe(e,A),I=Ve(e,A);M==null&&(M=1),f=y.parseColor(m?v:I,f),f[3]*=M;for(var C=c?r.getPolylineVertexCount(E):r.getCubicCurveVertexCount(E[0],E[1],E[2],E[3]),B=0,z=[],O=[],U=b;U<b+C;U++)n.attributes.position.get(U,z),z[0]*=T,z[1]*=x,z[2]*=_,U>b&&(B+=Fo.dist(z,O)),n.attributes.dist.set(U,B),Fo.copy(O,z);w=Math.max(w,B);for(var j=Math.random()*(h?B:u),U=b;U<b+C;U++)n.attributes.distAll.set(U,B),n.attributes.start.set(U,j),n.attributes.offset.set(U,ed(r.attributes.offset.get(U))*o/2),n.attributes.color.set(U,f);b+=C}),this.material.set("spotSize",w*.1*s),this.material.set("spotIntensity",a.get("spotIntensity")),n.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});y.Shader.import(sn);function rd(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}const id=vt.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._meshLinesMaterial=new y.Material({shader:y.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new y.Mesh({geometry:new Xt,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new td},render:function(e,t,r){this.groupGL.add(this._linesMesh);var i=e.coordinateSystem,n=e.getData();if(i&&i.viewGL){var a=i.viewGL;a.add(this.groupGL),this._updateLines(e,t,r);var o=i.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[o]("fragment","SRGB_DECODE"),this._trailMesh.material[o]("fragment","SRGB_DECODE")}var s=this._trailMesh;if(s.stopAnimation(),e.get("effect.show")){this.groupGL.add(s),s.updateData(n,r,this._linesMesh.geometry),s.__time=s.__time||0;var l=3600*1e3;this._curveEffectsAnimator=s.animate("",{loop:!0}).when(l,{__time:l}).during(function(){s.setAnimationTime(s.__time)}).start()}else this.groupGL.remove(s),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?y.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,r){var i=e.getData(),n=e.coordinateSystem,a=this._linesMesh.geometry,o=e.get("polyline");a.expandLine=!0;var s=rd(n);a.segmentScale=s/20;var l="lineStyle.width".split("."),u=r.getDevicePixelRatio();i.each(function(f){var v=i.getItemModel(f),p=v.get(l);p==null&&(p=1),i.setItemVisual(f,"lineWidth",p)}),a.useNativeLine=!1;var h=0,c=0;i.each(function(f){var v=i.getItemLayout(f);o?(h+=a.getPolylineVertexCount(v),c+=a.getPolylineTriangleCount(v)):(h+=a.getCubicCurveVertexCount(v[0],v[1],v[2],v[3]),c+=a.getCubicCurveTriangleCount(v[0],v[1],v[2],v[3]))}),a.setVertexCount(h),a.setTriangleCount(c),a.resetOffset();var d=[];i.each(function(f){var v=i.getItemLayout(f),p=Ve(i,f),m=Fe(i,f),g=i.getItemVisual(f,"lineWidth")*u;m==null&&(m=1),d=y.parseColor(p,d),d[3]*=m,o?a.addPolyline(v,d,g):a.addCubicCurve(v[0],v[1],v[2],v[3],d,g)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function nd(e){e.registerChartView(id),e.registerSeriesModel(Qf),e.registerLayout($f),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}ke(nd);function Vo(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var Ks=dt.extend({type:"series.polygons3D",getRegionModel:function(e){return this.getData().getItemModel(e)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getItemModel(e),i=r.option instanceof Array?r.option:r.getShallow("coords");r.get("multiPolygon")||(i=[i]);for(var n=[],a=0;a<i.length;a++){for(var o=[],s=1;s<i[a].length;s++)o.push(Vo(t,i[a][s]));n.push({exterior:Vo(t,i[a][0]),interiors:o})}return n},getInitialData:function(e){var t=new St(["value"],this);return t.hasItemOption=!1,t.initData(e.data,[],function(r,i,n,a){if(r instanceof Array)return NaN;t.hasItemOption=!0;var o=r.value;if(o!=null)return o instanceof Array?o[a]:o}),t},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}});ce(Ks.prototype,zr);const ad=vt.extend({type:"polygons3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL);var n=this._geo3DBuilderList[0];n||(n=new Rr(r),n.extrudeY=i.type!=="mapbox3D"&&i.type!=="maptalks3D",this._geo3DBuilderList[0]=n),this._updateShaderDefines(i,n),n.update(e,t,r),this._geo3DBuilderList.length=1,this.groupGL.add(n.rootNode)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(e,t,r,i){var n=this._geo3DBuilderList[this._currentStep],a=t.coordinateSystem;n||(n=new Rr(i),n.extrudeY=a.type!=="mapbox3D"&&a.type!=="maptalks3D",this._geo3DBuilderList[this._currentStep]=n),n.update(t,r,i,e.start,e.end),this.groupGL.add(n.rootNode),this._updateShaderDefines(a,n),this._currentStep++},_updateShaderDefines:function(e,t){var r=e.viewGL.isLinearSpace()?"define":"undefine";t.rootNode.traverse(function(i){i.material&&(i.material[r]("fragment","SRGB_DECODE"),(e.type==="mapbox3D"||e.type==="maptalks3D")&&(i.material.define("fragment","NORMAL_UP_AXIS",2),i.material.define("fragment","NORMAL_FRONT_AXIS",1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(e){e.dispose()})}});function od(e){e.registerChartView(ad),e.registerSeriesModel(Ks)}ke(od);var $s=dt.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return xi(this,e)},getInitialData:function(e,t){var r=e.data;function i(Y){return!(isNaN(Y.min)||isNaN(Y.max)||isNaN(Y.step))}function n(Y){var k=Wo;return Math.max(k(Y.min),k(Y.max),k(Y.step))+1}if(!r)if(e.parametric){var _=e.parametricEquation||{},b=_.u||{},w=_.v||{};["u","v"].forEach(function(k){i(_[k])}),["x","y","z"].forEach(function(k){_[k]});var A=Math.floor((b.max+b.step-b.min)/b.step),E=Math.floor((w.max+w.step-w.min)/w.step);r=new Float32Array(A*E*5);for(var M=n(b),I=n(w),d=0,f=0;f<E;f++)for(var v=0;v<A;v++){var C=v*b.step+b.min,B=f*w.step+w.min,z=Ti(Math.min(C,b.max),M),O=Ti(Math.min(B,w.max),I),p=_.x(z,O),m=_.y(z,O),x=_.z(z,O);r[d++]=p,r[d++]=m,r[d++]=x,r[d++]=z,r[d++]=O}}else{var a=e.equation||{},o=a.x||{},s=a.y||{};if(["x","y"].forEach(function(Y){i(a[Y])}),typeof a.z!="function")return;var l=Math.floor((o.max+o.step-o.min)/o.step),u=Math.floor((s.max+s.step-s.min)/s.step);r=new Float32Array(l*u*3);for(var h=n(o),c=n(s),d=0,f=0;f<u;f++)for(var v=0;v<l;v++){var p=v*o.step+o.min,m=f*s.step+s.min,g=Ti(Math.min(p,o.max),h),T=Ti(Math.min(m,s.max),c),x=a.z(g,T);r[d++]=g,r[d++]=T,r[d++]=x}}var U=["x","y","z"];e.parametric&&U.push("u","v");var j=ln(this,U,r);return j},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});ce($s.prototype,zr);var rr=Ae.vec3;function sd(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}const ld=vt.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node},render:function(e,t,r){var i=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=i,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var n=e.coordinateSystem,a=e.get("shading"),o=e.getData(),s="ecgl."+a;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==s)&&(this._surfaceMesh.material=y.createMaterial(s,["VERTEX_COLOR","DOUBLE_SIDED"])),y.setMaterialFromModel(a,this._surfaceMesh.material,e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var l=n.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var u=e.get("parametric"),h=e.get("dataShape");h||(h=this._getDataShape(o,u));var c=e.getModel("wireframe"),d=c.get("lineStyle.width"),f=c.get("show")&&d>0;this._updateSurfaceMesh(this._surfaceMesh,e,h,f);var v=this._surfaceMesh.material;f?(v.define("WIREFRAME_QUAD"),v.set("wireframeLineWidth",d),v.set("wireframeLineColor",y.parseColor(c.get("lineStyle.color")))):v.undefine("WIREFRAME_QUAD"),this._initHandler(e,r),this._updateAnimation(e)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new y.Mesh({geometry:new y.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new y.Material({shader:new y.Shader(y.Shader.source("ecgl.sm.depth.vertex"),y.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,pa),e},_initHandler:function(e,t){var r=e.getData(),i=this._surfaceMesh,n=e.coordinateSystem;function a(s,l){for(var u=1/0,h=-1,c=[],d=0;d<s.length;d++){i.geometry.attributes.position.get(s[d],c);var f=rr.dist(l.array,c);f<u&&(u=f,h=s[d])}return h}i.seriesIndex=e.seriesIndex;var o=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(s){var l=a(s.triangle,s.point);if(l>=0){var u=[];i.geometry.attributes.position.get(l,u);for(var h=n.pointToData(u),c=1/0,d=-1,f=[],v=0;v<r.count();v++){f[0]=r.get("x",v),f[1]=r.get("y",v),f[2]=r.get("z",v);var p=rr.squaredDistance(f,h);p<c&&(d=v,c=p)}d!==o&&t.dispatchAction({type:"grid3DShowAxisPointer",value:h}),o=d,i.dataIndex=d}else i.dataIndex=-1},this),i.on("mouseout",function(s){o=-1,i.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,r,i){var n=e.geometry,a=t.getData(),o=a.getLayout("points"),s=0;a.each(function(Ce){a.hasValue(Ce)||s++});var l=s||i,u=n.attributes.position,h=n.attributes.normal,c=n.attributes.texcoord0,d=n.attributes.barycentric,f=n.attributes.color,v=r[0],p=r[1],m=t.get("shading"),g=m!=="color";if(l){var T=(v-1)*(p-1)*4;u.init(T),i&&d.init(T)}else u.value=new Float32Array(o);f.init(n.vertexCount),c.init(n.vertexCount);var x=[0,3,1,1,3,2],_=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],b=n.indices=new(n.vertexCount>65535?Uint32Array:Uint16Array)((v-1)*(p-1)*6),w=function(Ce,pt,Ze){Ze[1]=Ce*p+pt,Ze[0]=Ce*p+pt+1,Ze[3]=(Ce+1)*p+pt+1,Ze[2]=(Ce+1)*p+pt},A=!1;if(l){var E=[],M=[],I=0;g?h.init(n.vertexCount):h.value=null;for(var C=[[],[],[]],B=[],z=[],O=rr.create(),U=function(Ce,pt,Ze){var un=pt*3;return Ze[0]=Ce[un],Ze[1]=Ce[un+1],Ze[2]=Ce[un+2],Ze},j=new Float32Array(o.length),Y=new Float32Array(o.length/3*4),k=0;k<a.count();k++)if(a.hasValue(k)){var Ge=y.parseColor(Ve(a,k)),Z=Fe(a,k);Z!=null&&(Ge[3]*=Z),Ge[3]<.99&&(A=!0);for(var D=0;D<4;D++)Y[k*4+D]=Ge[D]}for(var q=[1e7,1e7,1e7],k=0;k<v-1;k++)for(var Q=0;Q<p-1;Q++){var J=k*(p-1)+Q,oe=J*4;w(k,Q,E);for(var ie=!1,D=0;D<4;D++)U(o,E[D],M),sd(M)&&(ie=!0);for(var D=0;D<4;D++)ie?u.set(oe+D,q):(U(o,E[D],M),u.set(oe+D,M)),i&&d.set(oe+D,_[D]);for(var D=0;D<6;D++)b[I++]=x[D]+oe;if(g&&!ie)for(var D=0;D<2;D++){for(var Me=D*3,ye=0;ye<3;ye++){var we=E[x[Me]+ye];U(o,we,C[ye])}rr.sub(B,C[0],C[1]),rr.sub(z,C[1],C[2]),rr.cross(O,B,z);for(var ye=0;ye<3;ye++){var je=E[x[Me]+ye]*3;j[je]=j[je]+O[0],j[je+1]=j[je+1]+O[1],j[je+2]=j[je+2]+O[2]}}}if(g)for(var k=0;k<j.length/3;k++)U(j,k,O),rr.normalize(O,O),j[k*3]=O[0],j[k*3+1]=O[1],j[k*3+2]=O[2];for(var Ge=[],Oe=[],k=0;k<v-1;k++)for(var Q=0;Q<p-1;Q++){var J=k*(p-1)+Q,oe=J*4;w(k,Q,E);for(var D=0;D<4;D++){for(var ye=0;ye<4;ye++)Ge[ye]=Y[E[D]*4+ye];f.set(oe+D,Ge),g&&(U(j,E[D],O),h.set(oe+D,O));var we=E[D];Oe[0]=we%p/(p-1),Oe[1]=Math.floor(we/p)/(v-1),c.set(oe+D,Oe)}J++}}else{for(var Oe=[],k=0;k<a.count();k++){Oe[0]=k%p/(p-1),Oe[1]=Math.floor(k/p)/(v-1);var Ge=y.parseColor(Ve(a,k)),Z=Fe(a,k);Z!=null&&(Ge[3]*=Z),Ge[3]<.99&&(A=!0),f.set(k,Ge),c.set(k,Oe)}for(var E=[],Hr=0,k=0;k<v-1;k++)for(var Q=0;Q<p-1;Q++){w(k,Q,E);for(var D=0;D<6;D++)b[Hr++]=E[x[D]]}g?n.generateVertexNormals():h.value=null}e.material.get("normalMap")&&n.generateTangents(),n.updateBoundingBox(),n.dirty(),e.material.transparent=A,e.material.depthMask=!A},_getDataShape:function(e,t){for(var r=-1/0,i=0,n=0,a=!1,o=t?"u":"x",s=e.count(),l=0;l<s;l++){var u=e.get(o,l);u<r&&(n=0,i++),r=u,n++}if((!i||n===1)&&(a=!0),!a)return[i+1,n];for(var h=Math.floor(Math.sqrt(s));h>0;){if(Math.floor(s/h)===s/h)return[h,s/h];h--}return h=Math.floor(Math.sqrt(s)),[h,h]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function ud(e){e.registerChartView(ld),e.registerSeriesModel($s),e.registerLayout(function(t,r){t.eachSeriesByType("surface",function(i){var n=i.coordinateSystem;!n||n.type;var a=i.getData(),o=new Float32Array(3*a.count()),s=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var l=n.dimensions,u=l.map(function(h){return i.coordDimToDataDim(h)[0]});a.each(u,function(h,c,d,f){var v;a.hasValue(f)?v=n.dataToPoint([h,c,d]):v=s,o[f*3]=v[0],o[f*3+1]=v[1],o[f*3+2]=v[2]})}a.setLayout("points",o)})})}ke(ud);function zo(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var Ur=dt.extend({type:"series.map3D",layoutMode:"box",coordinateSystem:null,visualStyleAccessPath:"itemStyle",optionUpdated:function(e){var t=this.get("coordinateSystem");t==null||t==="geo3D"||(this.get("groundPlane.show")&&(this.option.groundPlane.show=!1),this._geo=null)},getInitialData:function(e){e.data=this.getFilledRegions(e.data,e.map);var t=pi(e.data,{coordDimensions:["value"]}),r=new St(t,this);r.initData(e.data);var i={};return r.each(function(n){var a=r.getName(n),o=r.getItemModel(n);i[a]=o}),this._regionModelMap=i,r},formatTooltip:function(e){return xi(this,e)},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Er(null,this)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getName(e);if(t.transform){var i=t.getRegion(r);return i?i.geometries:[]}else{this._geo||(this._geo=ma.createGeo3D(this));for(var i=this._geo.getRegion(r),n=[],a=0;a<i.geometries.length;a++){var o=i.geometries[a],s=[],l=zo(t,o.exterior);if(s&&s.length)for(var u=0;u<o.interiors.length;u++)s.push(zo(t,s[u]));n.push({interiors:s,exterior:l})}return n}},getFormattedLabel:function(e,t){var r=qt.getFormattedLabel(this,e,t);return r==null&&(r=this.getData().getName(e)),r},defaultOption:{coordinateSystem:"geo3D",data:null}});ce(Ur.prototype,Cs);ce(Ur.prototype,nn);ce(Ur.prototype,Br);ce(Ur.prototype,Fr);ce(Ur.prototype,zr);const hd=vt.extend({type:"map3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Rr(t),this.groupGL=new y.Node},render:function(e,t,r){var i=e.coordinateSystem;if(!(!i||!i.viewGL)){if(this.groupGL.add(this._geo3DBuilder.rootNode),i.viewGL.add(this.groupGL),i.type==="geo3D"){this._sceneHelper||(this._sceneHelper=new Ht,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var n=this._control;n||(n=this._control=new gi({zr:r.getZr()}),this._control.init());var a=e.getModel("viewControl");n.setViewGL(i.viewGL),n.setFromViewControlModel(a,0),n.off("update"),n.on("update",function(){r.dispatchAction({type:"map3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),from:this.uid,map3DId:e.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&(this._control.dispose(),this._control=null),this._sceneHelper&&(this._sceneHelper.dispose(),this._sceneHelper=null),e.getData().getLayout("geo3D"),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")})}},afterRender:function(e,t,r,i){var n=i.renderer,a=e.coordinateSystem;a&&a.type==="geo3D"&&(this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});function cd(e){Fs(e),e.registerChartView(hd),e.registerSeriesModel(Ur),e.registerAction({type:"map3DChangeCamera",event:"map3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"series",subType:"map3D",query:t},function(i){i.setView(t)})})}ke(cd);const fd=dt.extend({type:"series.scatterGL",dependencies:["grid","polar","geo","singleAxis"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(){return Wl(this)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:"circle",symbolSize:10,zoomScale:0,blendMode:"source-over",itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});function Nt(e){this.viewGL=e}Nt.prototype.reset=function(e,t){this._updateCamera(t.getWidth(),t.getHeight(),t.getDevicePixelRatio()),this._viewTransform=zl(),this.updateTransform(e,t)};Nt.prototype.updateTransform=function(e,t){var r=e.coordinateSystem;r.getRoamTransform&&(Gl(this._viewTransform,r.getRoamTransform()),this._setCameraTransform(this._viewTransform),t.getZr().refresh())};Nt.prototype.dataToPoint=function(e,t,r){r=e.dataToPoint(t,null,r);var i=this._viewTransform;i&&qo(r,r,i)};Nt.prototype.removeTransformInPoint=function(e){return this._viewTransform&&qo(e,e,this._viewTransform),e};Nt.prototype.getZoom=function(){if(this._viewTransform){var e=this._viewTransform;return 1/Math.max(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]))}return 1};Nt.prototype._setCameraTransform=function(e){var t=this.viewGL.camera;t.position.set(e[4],e[5],0),t.scale.set(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]),1)};Nt.prototype._updateCamera=function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.top=0,i.bottom=t,i.right=e,i.near=0,i.far=100};const dd=vt.extend({type:"scatterGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new fe("orthographic"),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new Nt(this.viewGL)},render:function(e,t,r){if(this.groupGL.removeAll(),this._glViewHelper.reset(e,r),!!e.getData().count()){var i=this._pointsBuilderList[0];i||(i=this._pointsBuilderList[0]=new hr(!0,r)),this._pointsBuilderList.length=1,this.groupGL.add(i.rootNode),this._removeTransformInPoints(e.getData().getLayout("points")),i.update(e,t,r),this.viewGL.setPostEffect(e.getModel("postEffect"),r)}},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new hr(!0,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),this._removeTransformInPoints(t.getData().getLayout("points")),n.setSizeScale(this._sizeScale),n.update(t,r,i,e.start,e.end),i.getZr().refresh(),this._currentStep++}},updateTransform:function(e,t,r){if(e.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(e,r);var i=this._glViewHelper.getZoom(),n=Math.max((e.get("zoomScale")||0)*(i-1)+1,0);this._sizeScale=n,this._pointsBuilderList.forEach(function(a){a.setSizeScale(n)})}},_removeTransformInPoints:function(e){if(e)for(var t=[],r=0;r<e.length;r+=2)t[0]=e[r],t[1]=e[r+1],this._glViewHelper.removeTransformInPoint(t),e[r]=t[0],e[r+1]=t[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(e){e.dispose()})},remove:function(){this.groupGL.removeAll()}});function vd(e){e.registerChartView(dd),e.registerSeriesModel(fd),e.registerLayout({seriesType:"scatterGL",reset:function(t){var r=t.coordinateSystem,i=t.getData(),n;if(r){var a=r.dimensions.map(function(s){return i.mapDimension(s)}).slice(0,2),o=[];a.length===1?n=function(s){for(var l=new Float32Array((s.end-s.start)*2),u=s.start;u<s.end;u++){var h=(u-s.start)*2,c=i.get(a[0],u),d=r.dataToPoint(c);l[h]=d[0],l[h+1]=d[1]}i.setLayout("points",l)}:a.length===2&&(n=function(s){for(var l=new Float32Array((s.end-s.start)*2),u=s.start;u<s.end;u++){var h=(u-s.start)*2,c=i.get(a[0],u),d=i.get(a[1],u);o[0]=c,o[1]=d,o=r.dataToPoint(o),l[h]=o[0],l[h+1]=o[1]}i.setLayout("points",l)})}return{progress:n}}})}ke(vd);function pd(e,t,r,i,n){for(var a=new Ul(i),o=0;o<e.length;o++)a.addNode(te.firstNotNull(e[o].id,e[o].name,o),o);for(var s=[],l=[],u=0,o=0;o<t.length;o++){var h=t[o],c=h.source,d=h.target;a.addEdge(c,d,u)&&(l.push(h),s.push(te.firstNotNull(h.id,c+" > "+d)),u++)}var f,v=pi(e,{coordDimensions:["value"]});f=new St(v,r),f.initData(e);var p=new St(["value"],r);return p.initData(l,s),n&&n(f,p),Hl({mainData:f,struct:a,structAttr:"graph",datas:{node:f,edge:p},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a}var ei=dt.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(e){ei.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){ei.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(e,t,r,i){var n=qt.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},getInitialData:function(e,t){var r=e.edges||e.links||[],i=e.data||e.nodes||[],n=this;if(i&&r)return pd(i,r,this,!0,a).data;function a(o,s){o.wrapMethod("getItemModel",function(c){const d=n._categoriesModels,f=c.getShallow("category"),v=d[f];return v&&(v.parentModel=c.parentModel,c.parentModel=v),c});const l=t.getModel([]).getModel;function u(c,d){const f=l.call(this,c,d);return f.resolveParentPath=h,f}s.wrapMethod("getItemModel",function(c){return c.resolveParentPath=h,c.getModel=u,c});function h(c){if(c&&(c[0]==="label"||c[1]==="label")){const d=c.slice();return c[0]==="label"?d[0]="edgeLabel":c[1]==="label"&&(d[1]="edgeLabel"),d}return c}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,t,r){if(r==="edge"){var i=this.getData(),n=this.getDataParams(e,r),a=i.graph.getEdgeByIndex(e),o=i.getName(a.node1.dataIndex),s=i.getName(a.node2.dataIndex),l=[];return o!=null&&l.push(o),s!=null&&l.push(s),l=Tr(l.join(" > ")),n.value&&(l+=" : "+Tr(n.value)),l}else return ei.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(r){return r.value!=null?r:Object.assign({value:0},r)}),t=new St(["value"],this);t.initData(e),this._categoriesData=t,this._categoriesModels=t.mapArray(function(r){return t.getItemModel(r,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var t=0;t<e.length/2;t++){var r=e[t*2],i=e[t*2+1],n=this.getData().getRawDataItem(t);n.x=r,n.y=i}},isAnimationEnabled:function(){return ei.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}}),De=Ae.vec2,Go=[[0,0],[1,1]],wa=re.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new re.Attribute("position","float",2,"POSITION"),normal:new re.Attribute("normal","float",2),offset:new re.Attribute("offset","float",1),color:new re.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.offset.init(e),t.normal.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=De.dist(e,t)+De.dist(r,t)+De.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Go)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Go)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?0:(t-1)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=t[0],u=t[1],h=r[0],c=r[1],d=i[0],f=i[1],v=this._getCubicCurveApproxStep(e,t,r,i),p=v*v,m=p*v,g=3*v,T=3*p,x=6*p,_=6*m,b=o-l*2+h,w=s-u*2+c,A=(l-h)*3-o+d,E=(u-c)*3-s+f,M=o,I=s,C=(l-o)*g+b*T+A*m,B=(u-s)*g+w*T+E*m,z=b*x+A*_,O=w*x+E*_,U=A*_,j=E*_,Y=0,k=0,Z=Math.ceil(1/v),D=new Float32Array((Z+1)*3),D=[],q=0,k=0;k<Z+1;k++)D[q++]=M,D[q++]=I,M+=C,I+=B,C+=z,B+=O,z+=U,O+=j,Y+=v,Y>1&&(M=C>0?Math.min(M,d):Math.max(M,d),I=B>0?Math.min(I,f):Math.max(I,f));this.addPolyline(D,n,a)},addLine:function(e,t,r,i){this.addPolyline([e,t],r,i)},addPolyline:function(){var e=De.create(),t=De.create(),r=De.create(),i=De.create(),n=[],a=[],o=[];return function(s,l,u,h,c){if(s.length){var d=typeof s[0]!="number";if(c==null&&(c=d?s.length:s.length/2),!(c<2)){h==null&&(h=0),u==null&&(u=1),this._itemVertexOffsets.push(this._vertexOffset);for(var f=d?typeof l[0]!="number":l.length/4===c,v=this.attributes.position,p=this.attributes.color,m=this.attributes.offset,g=this.attributes.normal,T=this.indices,x=this._vertexOffset,_,b=0;b<c;b++){if(d)n=s[b+h],f?_=l[b+h]:_=l;else{var w=b*2+h;if(n=n||[],n[0]=s[w],n[1]=s[w+1],f){var A=b*4+h;_=_||[],_[0]=l[A],_[1]=l[A+1],_[2]=l[A+2],_[3]=l[A+3]}else _=l}if(this.useNativeLine)b>1&&(v.copy(x,x-1),p.copy(x,x-1),x++);else{var E;if(b<c-1){if(d)De.copy(a,s[b+1]);else{var w=(b+1)*2+h;a=a||[],a[0]=s[w],a[1]=s[w+1]}if(b>0){De.sub(e,n,o),De.sub(t,a,n),De.normalize(e,e),De.normalize(t,t),De.add(i,e,t),De.normalize(i,i);var M=u/2*Math.min(1/De.dot(e,i),2);r[0]=-i[1],r[1]=i[0],E=M}else De.sub(e,a,n),De.normalize(e,e),r[0]=-e[1],r[1]=e[0],E=u/2}else De.sub(e,n,o),De.normalize(e,e),r[0]=-e[1],r[1]=e[0],E=u/2;g.set(x,r),g.set(x+1,r),m.set(x,E),m.set(x+1,-E),De.copy(o,n),v.set(x,n),v.set(x+1,n),p.set(x,_),p.set(x+1,_),x+=2}if(this.useNativeLine)p.set(x,_),v.set(x,n),x++;else if(b>0){var I=this._faceOffset*3,T=this.indices;T[I]=x-4,T[I+1]=x-3,T[I+2]=x-2,T[I+3]=x-3,T[I+4]=x-1,T[I+5]=x-2,this._faceOffset+=2}}this._vertexOffset=x}}}}(),setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")}});kt(wa.prototype,_i);const md=`@export ecgl.forceAtlas2.updateNodeRepulsion

#define NODE_COUNT 0

uniform sampler2D positionTex;

uniform vec2 textureSize;
uniform float gravity;
uniform float scaling;
uniform vec2 gravityCenter;

uniform bool strongGravityMode;
uniform bool preventOverlap;

varying vec2 v_Texcoord;

void main() {

 vec4 n0 = texture2D(positionTex, v_Texcoord);

 vec2 force = vec2(0.0);
 for (int i = 0; i < NODE_COUNT; i++) {
 vec2 uv = vec2(
 mod(float(i), textureSize.x) / (textureSize.x - 1.0),
 floor(float(i) / textureSize.x) / (textureSize.y - 1.0)
 );
 vec4 n1 = texture2D(positionTex, uv);

 vec2 dir = n0.xy - n1.xy;
 float d2 = dot(dir, dir);

 if (d2 > 0.0) {
 float factor = 0.0;
 if (preventOverlap) {
 float d = sqrt(d2);
 d = d - n0.w - n1.w;
 if (d > 0.0) {
 factor = scaling * n0.z * n1.z / (d * d);
 }
 else if (d < 0.0) {
 factor = scaling * 100.0 * n0.z * n1.z;
 }
 }
 else {
 factor = scaling * n0.z * n1.z / d2;
 }
 force += dir * factor;
 }
 }

 vec2 dir = gravityCenter - n0.xy;
 float d = 1.0;
 if (!strongGravityMode) {
 d = length(dir);
 }

 force += dir * n0.z * gravity / (d + 1.0);

 gl_FragColor = vec4(force, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.vertex

attribute vec2 node1;
attribute vec2 node2;
attribute float weight;

uniform sampler2D positionTex;
uniform float edgeWeightInfluence;
uniform bool preventOverlap;
uniform bool linLogMode;

uniform vec2 windowSize: WINDOW_SIZE;

varying vec2 v_Force;

void main() {

 vec4 n0 = texture2D(positionTex, node1);
 vec4 n1 = texture2D(positionTex, node2);

 vec2 dir = n1.xy - n0.xy;
 float d = length(dir);
 float w;
 if (edgeWeightInfluence == 0.0) {
 w = 1.0;
 }
 else if (edgeWeightInfluence == 1.0) {
 w = weight;
 }
 else {
 w = pow(weight, edgeWeightInfluence);
 }
 vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);
 vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);
 vec2 pos = node1 * scale * 2.0 - 1.0;
 gl_Position = vec4(pos + offset, 0.0, 1.0);
 gl_PointSize = 1.0;

 float factor;
 if (preventOverlap) {
 d = d - n1.w - n0.w;
 }
 if (d <= 0.0) {
 v_Force = vec2(0.0);
 return;
 }

 if (linLogMode) {
 factor = w * log(d) / d;
 }
 else {
 factor = w;
 }
 v_Force = dir * factor;
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.fragment

varying vec2 v_Force;

void main() {
 gl_FragColor = vec4(v_Force, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.vertex

attribute vec2 node;

varying vec2 v_NodeUv;

void main() {

 v_NodeUv = node;
 gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
 gl_PointSize = 1.0;
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.fragment

varying vec2 v_NodeUv;

uniform sampler2D positionTex;
uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;

void main() {
 vec2 force = texture2D(forceTex, v_NodeUv).rg;
 vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;

 float mass = texture2D(positionTex, v_NodeUv).z;
 float swing = length(force - forcePrev) * mass;
 float traction = length(force + forcePrev) * 0.5 * mass;

 gl_FragColor = vec4(swing, traction, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcGlobalSpeed

uniform sampler2D globalSpeedPrevTex;
uniform sampler2D weightedSumTex;
uniform float jitterTolerence;

void main() {
 vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;
 float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;
 float globalSpeed = jitterTolerence * jitterTolerence
 * weightedSum.y / weightedSum.x;
 if (prevGlobalSpeed > 0.0) {
 globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;
 }
 gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updatePosition

uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;
uniform sampler2D positionTex;
uniform sampler2D globalSpeedTex;

varying vec2 v_Texcoord;

void main() {
 vec2 force = texture2D(forceTex, v_Texcoord).xy;
 vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;
 vec4 node = texture2D(positionTex, v_Texcoord);

 float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;
 float swing = length(force - forcePrev);
 float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));

 float df = length(force);
 if (df > 0.0) {
 speed = min(df * speed, 10.0) / df;

 gl_FragColor = vec4(node.xy + speed * force, node.zw);
 }
 else {
 gl_FragColor = node;
 }
}
@end

@export ecgl.forceAtlas2.edges.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 node;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

uniform sampler2D positionTex;

void main()
{
 gl_Position = worldViewProjection * vec4(
 texture2D(positionTex, node).xy, -10.0, 1.0
 );
 v_Color = a_Color;
}
@end

@export ecgl.forceAtlas2.edges.fragment
uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
varying vec4 v_Color;
void main() {
 gl_FragColor = color * v_Color;
}
@end`;y.Shader.import(md);var Un={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function Re(e){var t={type:y.Texture.FLOAT,minFilter:y.Texture.NEAREST,magFilter:y.Texture.NEAREST};this._positionSourceTex=new y.Texture2D(t),this._positionSourceTex.flipY=!1,this._positionTex=new y.Texture2D(t),this._positionPrevTex=new y.Texture2D(t),this._forceTex=new y.Texture2D(t),this._forcePrevTex=new y.Texture2D(t),this._weightedSumTex=new y.Texture2D(t),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new y.Texture2D(t),this._globalSpeedPrevTex=new y.Texture2D(t),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new Le({fragment:y.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new Le({fragment:y.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new Le({fragment:y.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new Le({fragment:y.Shader.source("clay.compositor.output")});var r=function(i){i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ONE)};this._edgeForceMesh=new y.Mesh({geometry:new y.Geometry({attributes:{node1:new y.Geometry.Attribute("node1","float",2),node2:new y.Geometry.Attribute("node2","float",2),weight:new y.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new y.Material({transparent:!0,shader:y.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:r,depthMask:!1,depthText:!1}),mode:y.Mesh.POINTS}),this._weightedSumMesh=new y.Mesh({geometry:new y.Geometry({attributes:{node:new y.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new y.Material({transparent:!0,shader:y.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:r,depthMask:!1,depthText:!1}),mode:y.Mesh.POINTS}),this._framebuffer=new Ee({depthBuffer:!1}),this._dummyCamera=new y.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}Re.prototype.updateOption=function(e){for(var t in Un)this[t]=Un[t];var r=this._nodes.length;if(r>5e4?this.jitterTolerence=10:r>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,r>100?this.scaling=2:this.scaling=10,e)for(var t in Un)e[t]!=null&&(this[t]=e[t]);if(this.repulsionByDegree)for(var i=this._positionSourceTex.pixels,n=0;n<this._nodes.length;n++)i[n*4+2]=(this._nodes[n].degree||0)+1};Re.prototype._updateGravityCenter=function(e){var t=this._nodes,r=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var i=[1/0,1/0],n=[-1/0,-1/0],a=0;a<t.length;a++)i[0]=Math.min(t[a].x,i[0]),i[1]=Math.min(t[a].y,i[1]),n[0]=Math.max(t[a].x,n[0]),n[1]=Math.max(t[a].y,n[1]);this._gravityCenter=[(i[0]+n[0])*.5,(i[1]+n[1])*.5]}for(var a=0;a<r.length;a++){var o=r[a].node1,s=r[a].node2;t[o].degree=(t[o].degree||0)+1,t[s].degree=(t[s].degree||0)+1}};Re.prototype.initData=function(e,t){this._nodes=e,this._edges=t,this._updateGravityCenter();var r=Math.ceil(Math.sqrt(e.length)),i=r,n=new Float32Array(r*i*4);this._resize(r,i);for(var a=0,o=0;o<e.length;o++){var s=e[o];n[a++]=s.x||0,n[a++]=s.y||0,n[a++]=s.mass||1,n[a++]=s.size||1}this._positionSourceTex.pixels=n;var l=this._edgeForceMesh.geometry,u=t.length;l.attributes.node1.init(u*2),l.attributes.node2.init(u*2),l.attributes.weight.init(u*2);for(var h=[],o=0;o<t.length;o++){var c=l.attributes,d=t[o].weight;d==null&&(d=1),c.node1.set(o,this.getNodeUV(t[o].node1,h)),c.node2.set(o,this.getNodeUV(t[o].node2,h)),c.weight.set(o,d),c.node1.set(o+u,this.getNodeUV(t[o].node2,h)),c.node2.set(o+u,this.getNodeUV(t[o].node1,h)),c.weight.set(o+u,d)}var f=this._weightedSumMesh.geometry;f.attributes.node.init(e.length);for(var o=0;o<e.length;o++)f.attributes.node.set(o,this.getNodeUV(o,h));l.dirty(),f.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",e.length),this._nodeRepulsionPass.material.setUniform("textureSize",[r,i]),this._inited=!1,this._frame=0};Re.prototype.getNodes=function(){return this._nodes};Re.prototype.getEdges=function(){return this._edges};Re.prototype.step=function(e){this._inited||(this._initFromSource(e),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(e);var t=this._nodeRepulsionPass;t.setUniform("strongGravityMode",this.strongGravityMode),t.setUniform("gravity",this.gravity),t.setUniform("gravityCenter",this._gravityCenter),t.setUniform("scaling",this.scaling),t.setUniform("preventOverlap",this.preventOverlap),t.setUniform("positionTex",this._positionPrevTex),t.render(e);var r=this._edgeForceMesh;r.material.set("linLogMode",this.linLogMode),r.material.set("edgeWeightInfluence",this.edgeWeightInfluence),r.material.set("preventOverlap",this.preventOverlap),r.material.set("positionTex",this._positionPrevTex),e.gl.enable(e.gl.BLEND),e.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT),e.gl.enable(e.gl.BLEND);var i=this._weightedSumMesh;i.material.set("positionTex",this._positionPrevTex),i.material.set("forceTex",this._forceTex),i.material.set("forcePrevTex",this._forcePrevTex),e.renderPass([i],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var n=this._globalSpeedPass;n.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),n.setUniform("weightedSumTex",this._weightedSumTex),n.setUniform("jitterTolerence",this.jitterTolerence),e.gl.disable(e.gl.BLEND),n.render(e);var a=this._positionPass;this._framebuffer.attach(this._positionTex),a.setUniform("globalSpeedTex",this._globalSpeedTex),a.setUniform("positionTex",this._positionPrevTex),a.setUniform("forceTex",this._forceTex),a.setUniform("forcePrevTex",this._forcePrevTex),a.render(e),this._framebuffer.unbind(e),this._swapTexture()};Re.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1);for(var i=0;i<t;i++)this.step(e);r&&r()};Re.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex};Re.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1)||0,t};Re.prototype.getNodePosition=function(e,t){var r=this._positionArr,i=this._positionTex.width,n=this._positionTex.height,a=i*n;(!r||r.length!==a*4)&&(r=this._positionArr=new Float32Array(a*4)),this._framebuffer.bind(e),this._framebuffer.attach(this._positionPrevTex),e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,r),this._framebuffer.unbind(e),t||(t=new Float32Array(this._nodes.length*2));for(var o=0;o<this._nodes.length;o++)t[o*2]=r[o*4],t[o*2+1]=r[o*4+1];return t};Re.prototype.getTextureData=function(e,t){var r=this["_"+t+"Tex"],i=r.width,n=r.height;this._framebuffer.bind(e),this._framebuffer.attach(r);var a=new Float32Array(i*n*4);return e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,a),this._framebuffer.unbind(e),a};Re.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}};Re.prototype.isFinished=function(e){return this._frame>e};Re.prototype._swapTexture=function(){var e=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=e;var e=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=e;var e=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=e};Re.prototype._initFromSource=function(e){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(e),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(e),e.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(e)};Re.prototype._resize=function(e,t){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(r){this[r].width=e,this[r].height=t,this[r].dirty()},this)};Re.prototype.dispose=function(e){this._framebuffer.dispose(e),this._copyPass.dispose(e),this._nodeRepulsionPass.dispose(e),this._positionPass.dispose(e),this._globalSpeedPass.dispose(e),this._edgeForceMesh.geometry.dispose(e),this._weightedSumMesh.geometry.dispose(e),this._positionSourceTex.dispose(e),this._positionTex.dispose(e),this._positionPrevTex.dispose(e),this._forceTex.dispose(e),this._forcePrevTex.dispose(e),this._weightedSumTex.dispose(e),this._globalSpeedTex.dispose(e),this._globalSpeedPrevTex.dispose(e)};function gd(){var e={create:function(){return new Float32Array(2)},dist:function(l,u){var h=u[0]-l[0],c=u[1]-l[1];return Math.sqrt(h*h+c*c)},len:function(l){var u=l[0],h=l[1];return Math.sqrt(u*u+h*h)},scaleAndAdd:function(l,u,h,c){return l[0]=u[0]+h[0]*c,l[1]=u[1]+h[1]*c,l},scale:function(l,u,h){return l[0]=u[0]*h,l[1]=u[1]*h,l},add:function(l,u,h){return l[0]=u[0]+h[0],l[1]=u[1]+h[1],l},sub:function(l,u,h){return l[0]=u[0]-h[0],l[1]=u[1]-h[1],l},normalize:function(l,u){var h=u[0],c=u[1],d=h*h+c*c;return d>0&&(d=1/Math.sqrt(d),l[0]=u[0]*d,l[1]=u[1]*d),l},negate:function(l,u){return l[0]=-u[0],l[1]=-u[1],l},copy:function(l,u){return l[0]=u[0],l[1]=u[1],l},set:function(l,u,h){return l[0]=u,l[1]=h,l}};function t(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var r=t.prototype;r.beforeUpdate=function(){for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},r.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].afterUpdate()},r.addNode=function(l){if(this.nSubRegions===0)if(this.node==null){this.node=l;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(l),this._updateCenterOfMass(l)},r.findSubRegion=function(l,u){for(var h=0;h<this.nSubRegions;h++){var c=this.subRegions[h];if(c.contain(l,u))return c}},r.contain=function(l,u){return this.bbox[0]<=l&&this.bbox[2]>=l&&this.bbox[1]<=u&&this.bbox[3]>=u},r.setBBox=function(l,u,h,c){this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=h,this.bbox[3]=c,this.size=(h-l+c-u)/2},r._newSubRegion=function(){var l=this.subRegions[this.nSubRegions];return l||(l=new t,this.subRegions[this.nSubRegions]=l),this.nSubRegions++,l},r._addNodeToSubRegion=function(l){var u=this.findSubRegion(l.position[0],l.position[1]),h=this.bbox;if(!u){var c=(h[0]+h[2])/2,d=(h[1]+h[3])/2,f=(h[2]-h[0])/2,v=(h[3]-h[1])/2,p=l.position[0]>=c?1:0,m=l.position[1]>=d?1:0,u=this._newSubRegion();u.setBBox(p*f+h[0],m*v+h[1],(p+1)*f+h[0],(m+1)*v+h[1])}u.addNode(l)},r._updateCenterOfMass=function(l){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var u=this.centerOfMass[0]*this.mass,h=this.centerOfMass[1]*this.mass;u+=l.position[0]*l.mass,h+=l.position[1]*l.mass,this.mass+=l.mass,this.centerOfMass[0]=u/this.mass,this.centerOfMass[1]=h/this.mass};function i(){this.position=new Float32Array(2),this.force=e.create(),this.forcePrev=e.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function n(l,u){this.source=l,this.target=u,this.weight=1}function a(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new t,this.rootRegion.centerOfMass=e.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var o=a.prototype;o.initNodes=function(l,u,h){var c=u.length;this.nodes.length=0;for(var d=typeof h<"u",f=0;f<c;f++){var v=new i;v.position[0]=l[f*2],v.position[1]=l[f*2+1],v.mass=u[f],d&&(v.size=h[f]),this.nodes.push(v)}this._massArr=u,this._swingingArr=new Float32Array(c),d&&(this._sizeArr=h)},o.initEdges=function(l,u){var h=l.length/2;this.edges.length=0;for(var c=0;c<h;c++){var d=l[c*2],f=l[c*2+1],v=this.nodes[d],p=this.nodes[f];if(!v||!p){console.error("Node not exists, try initNodes before initEdges");return}v.outDegree++,p.inDegree++;var m=new n(v,p);u&&(m.weight=u[c]),this.edges.push(m)}},o.updateSettings=function(){if(this.repulsionByDegree)for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=u.inDegree+u.outDegree+1}else for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=this._massArr[l]}},o.update=function(){var l=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var u=0;u<l;u++)this.rootRegion.addNode(this.nodes[u]);this.rootRegion.afterUpdate()}for(var u=0;u<l;u++){var h=this.nodes[u];e.copy(h.forcePrev,h.force),e.set(h.force,0,0)}for(var u=0;u<l;u++){var c=this.nodes[u];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,c);else for(var d=u+1;d<l;d++){var f=this.nodes[d];this.applyNodeToNodeRepulsion(c,f,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(c):this.applyNodeGravity(c))}for(var u=0;u<this.edges.length;u++)this.applyEdgeAttraction(this.edges[u]);for(var v=0,p=0,m=e.create(),u=0;u<l;u++){var h=this.nodes[u],g=e.dist(h.force,h.forcePrev);v+=g*h.mass,e.add(m,h.force,h.forcePrev);var T=e.len(m)*.5;p+=T*h.mass,this._swingingArr[u]=g}var x=this.jitterTolerence*this.jitterTolerence*p/v;this._globalSpeed>0&&(x=Math.min(x/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=x;for(var u=0;u<l;u++){var h=this.nodes[u],g=this._swingingArr[u],_=.1*x/(1+x*Math.sqrt(g)),b=e.len(h.force);b>0&&(_=Math.min(b*_,10)/b,e.scaleAndAdd(h.position,h.position,h.force,_))}},o.applyRegionToNodeRepulsion=function(){var l=e.create();return function(h,c){if(h.node)this.applyNodeToNodeRepulsion(h.node,c,!0);else{e.sub(l,c.position,h.centerOfMass);var d=l[0]*l[0]+l[1]*l[1];if(d>this.barnesHutTheta*h.size*h.size){var f=this.scaling*c.mass*h.mass/d;e.scaleAndAdd(c.force,c.force,l,f)}else for(var v=0;v<h.nSubRegions;v++)this.applyRegionToNodeRepulsion(h.subRegions[v],c)}}}(),o.applyNodeToNodeRepulsion=function(){var l=e.create();return function(h,c,d){if(h!=c){e.sub(l,h.position,c.position);var f=l[0]*l[0]+l[1]*l[1];if(f!==0){var v;if(this.preventOverlap){var p=Math.sqrt(f);if(p=p-h.size-c.size,p>0)v=this.scaling*h.mass*c.mass/(p*p);else if(p<0)v=this.scaling*100*h.mass*c.mass;else return}else v=this.scaling*h.mass*c.mass/f;e.scaleAndAdd(h.force,h.force,l,v),e.scaleAndAdd(c.force,c.force,l,-v)}}}}(),o.applyEdgeAttraction=function(){var l=e.create();return function(h){var c=h.source,d=h.target;e.sub(l,c.position,d.position);var f=e.len(l),v;this.edgeWeightInfluence===0?v=1:this.edgeWeightInfluence===1?v=h.weight:v=Math.pow(h.weight,this.edgeWeightInfluence);var p;this.preventOverlap&&(f=f-c.size-d.size,f<=0)||(this.linLogMode?p=-v*Math.log(f+1)/(f+1):p=-v,e.scaleAndAdd(c.force,c.force,l,p),e.scaleAndAdd(d.force,d.force,l,-p))}}(),o.applyNodeGravity=function(){var l=e.create();return function(u){e.sub(l,this.gravityCenter,u.position);var h=e.len(l);e.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass/(h+1))}}(),o.applyNodeStrongGravity=function(){var l=e.create();return function(u){e.sub(l,this.gravityCenter,u.position),e.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass)}}(),o.updateBBox=function(){for(var l=1/0,u=1/0,h=-1/0,c=-1/0,d=0;d<this.nodes.length;d++){var f=this.nodes[d].position;l=Math.min(l,f[0]),u=Math.min(u,f[1]),h=Math.max(h,f[0]),c=Math.max(c,f[1])}this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=h,this.bbox[3]=c},o.getGlobalSpeed=function(){return this._globalSpeed};var s=null;self.onmessage=function(l){switch(l.data.cmd){case"init":s=new a,s.initNodes(l.data.nodesPosition,l.data.nodesMass,l.data.nodesSize),s.initEdges(l.data.edges,l.data.edgesWeight);break;case"updateConfig":if(s)for(var u in l.data.config)s[u]=l.data.config[u];break;case"update":var h=l.data.steps;if(s){for(var c=0;c<h;c++)s.update();for(var d=s.nodes.length,f=new Float32Array(d*2),c=0;c<d;c++){var v=s.nodes[c];f[c*2]=v.position[0],f[c*2+1]=v.position[1]}self.postMessage({buffer:f.buffer,globalSpeed:s.getGlobalSpeed()},[f.buffer])}else{var p=new Float32Array;self.postMessage({buffer:p.buffer,globalSpeed:s.getGlobalSpeed()},[p.buffer])}break}}}var ti=gd.toString();ti=ti.slice(ti.indexOf("{")+1,ti.lastIndexOf("}"));var ii={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},rt=function(e){for(var t in ii)this[t]=ii[t];if(e)for(var t in e)this[t]=e[t];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new ee({type:V.FLOAT,flipY:!1,minFilter:V.NEAREST,magFilter:V.NEAREST})};rt.prototype.initData=function(e,t){var r=new Blob([ti]),i=window.URL.createObjectURL(r);this._worker=new Worker(i),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=e,this._edges=t,this._frame=0;for(var n=e.length,a=t.length,o=new Float32Array(n*2),s=new Float32Array(n),l=new Float32Array(n),u=new Float32Array(a*2),h=new Float32Array(a),c=0;c<e.length;c++){var d=e[c];o[c*2]=d.x,o[c*2+1]=d.y,s[c]=d.mass==null?1:d.mass,l[c]=d.size==null?1:d.size}for(var c=0;c<t.length;c++){var f=t[c],v=f.node1,p=f.node2;u[c*2]=v,u[c*2+1]=p,h[c]=f.weight==null?1:f.weight}var m=Math.ceil(Math.sqrt(e.length)),g=m,T=new Float32Array(m*g*4),x=this._positionTex;x.width=m,x.height=g,x.pixels=T,this._worker.postMessage({cmd:"init",nodesPosition:o,nodesMass:s,nodesSize:l,edges:u,edgesWeight:h}),this._globalSpeed=1/0};rt.prototype.updateOption=function(e){var t={};for(var r in ii)t[r]=ii[r];var i=this._nodes,n=this._edges,a=i.length;if(a>5e4?t.jitterTolerence=10:a>5e3?t.jitterTolerence=1:t.jitterTolerence=.1,a>100?t.scaling=2:t.scaling=10,a>1e3?t.barnesHutOptimize=!0:t.barnesHutOptimize=!1,e)for(var r in ii)e[r]!=null&&(t[r]=e[r]);if(!t.gravityCenter){for(var o=[1/0,1/0],s=[-1/0,-1/0],l=0;l<i.length;l++)o[0]=Math.min(i[l].x,o[0]),o[1]=Math.min(i[l].y,o[1]),s[0]=Math.max(i[l].x,s[0]),s[1]=Math.max(i[l].y,s[1]);t.gravityCenter=[(o[0]+s[0])*.5,(o[1]+s[1])*.5]}for(var l=0;l<n.length;l++){var u=n[l].node1,h=n[l].node2;i[u].degree=(i[u].degree||0)+1,i[h].degree=(i[h].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:t})};rt.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1),this._frame+=t,this._onupdate=r,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(t)})};rt.prototype._$onupdate=function(e){if(!this._disposed){var t=new Float32Array(e.data.buffer);this._globalSpeed=e.data.globalSpeed,this._positionArr=t,this._updateTexture(t),this._onupdate&&this._onupdate()}};rt.prototype.getNodePositionTexture=function(){return this._positionTex};rt.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1),t};rt.prototype.getNodes=function(){return this._nodes};rt.prototype.getEdges=function(){return this._edges};rt.prototype.isFinished=function(e){return this._frame>e};rt.prototype.getNodePosition=function(e,t){if(t||(t=new Float32Array(this._nodes.length*2)),this._positionArr)for(var r=0;r<this._positionArr.length;r++)t[r]=this._positionArr[r];return t};rt.prototype._updateTexture=function(e){for(var t=this._positionTex.pixels,r=0,i=0;i<e.length;)t[r++]=e[i++],t[r++]=e[i++],t[r++]=1,t[r++]=1;this._positionTex.dirty()};rt.prototype.dispose=function(e){this._disposed=!0,this._worker=null};var _d=We.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var e=this.zr;e.on("mousedown",this._mouseDownHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("globalout",this._mouseUpHandler),e.animation.on("frame",this._update)},setTarget:function(e){this._target=e},setZoom:function(e){this._zoom=Math.max(Math.min(e,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(e){this._dx=e[0],this._dy=e[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(this._target&&this._needsUpdate){var e=this._target,t=this._zoom;e.position.x=this._dx,e.position.y=this._dy,e.scale.set(t,t,t),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(e){if(!e.target){var t=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(t,r))){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var i=this._convertPos(t,r);this._x=i.x,this._y=i.y}}},_convertPos:function(e,t){var r=this.viewGL.camera,i=this.viewGL.viewport;return{x:(e-i.x)/i.width*(r.right-r.left)+r.left,y:(t-i.y)/i.height*(r.bottom-r.top)+r.top}},_mouseMoveHandler:function(e){var t=this._convertPos(e.offsetX,e.offsetY);this._dx+=t.x-this._x,this._dy+=t.y-this._y,this._x=t.x,this._y=t.y,this._needsUpdate=!0},_mouseUpHandler:function(e){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(e){e=e.event;var t=e.wheelDelta||-e.detail;if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n=t>0?1.1:.9,a=Math.max(Math.min(this._zoom*n,this.maxZoom),this.minZoom);n=a/this._zoom;var o=this._convertPos(r,i),s=(o.x-this._dx)*(n-1),l=(o.y-this._dy)*(n-1);this._dx-=s,this._dy-=l,this._zoom=a,this._needsUpdate=!0}}},dispose:function(){var e=this.zr;e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("globalout",this._mouseUpHandler),e.animation.off("frame",this._update)}});const yd=`@export ecgl.lines2D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

void main()
{
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 v_Color = a_Color;
}

@end

@export ecgl.lines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

void main()
{
 gl_FragColor = color * v_Color;
}
@end


@export ecgl.meshLines2D.vertex

attribute vec2 position: POSITION;
attribute vec2 normal;
attribute float offset;
attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 p2.xy /= p2.w;
 gl_Position.xy /= gl_Position.w;

 vec2 N = normalize(p2.xy - gl_Position.xy);
 gl_Position.xy += N * offset / viewport.zw * 2.0;

 gl_Position.xy *= gl_Position.w;

 v_Color = a_Color;
}
@end


@export ecgl.meshLines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 gl_FragColor = color * v_Color;
}

@end`;var Oi=Ae.vec2;y.Shader.import(yd);var xd=1;const Td=vt.extend({type:"graphGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new fe("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new hr(!0,t),this._forceEdgesMesh=new y.Mesh({material:new y.Material({shader:y.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new y.Geometry({attributes:{node:new y.Geometry.Attribute("node","float",2),color:new y.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:y.Mesh.LINES}),this._edgesMesh=new y.Mesh({material:new y.Material({shader:y.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new wa({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new _d({zr:t.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,t,r){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=r,this._initLayout(e,t,r),this._pointsBuilder.update(e,t,r),this._forceLayoutInstance instanceof Re||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,r),this._control.off("update"),this._control.on("update",function(){r.dispatchAction({type:"graphGLRoam",seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(te.firstNotNull(e.get("zoom"),1)),this._control.setOffset(e.get("offset")||[0,0]);var i=this._pointsBuilder.getPointsMesh();if(i.off("mousemove",this._mousemoveHandler),i.off("mouseout",this._mouseOutHandler,this),r.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get("focusNodeAdjacency")){var n=e.get("focusNodeAdjacencyOn");n==="click"?r.getZr().on("click",this._clickHandler):n==="mouseover"&&(i.on("mousemove",this._mousemoveHandler,this),i.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?t!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=t}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,t){var r=this._forceEdgesMesh.geometry,i=t.getEdgeData(),n=0,a=this._forceLayoutInstance,o=i.count()*2;r.attributes.node.init(o),r.attributes.color.init(o),i.each(function(s){var l=e[s];r.attributes.node.set(n,a.getNodeUV(l.node1)),r.attributes.node.set(n+1,a.getNodeUV(l.node2));var u=Ve(i,l.dataIndex),h=y.parseColor(u);h[3]*=te.firstNotNull(Fe(i,l.dataIndex),1),r.attributes.color.set(n,h),r.attributes.color.set(n+1,h),n+=2}),r.dirty()},_updateMeshLinesGeometry:function(){var t=this._model.getEdgeData(),e=this._edgesMesh.geometry,t=this._model.getEdgeData(),r=this._model.getData().getLayout("points");e.resetOffset(),e.setVertexCount(t.count()*e.getLineVertexCount()),e.setTriangleCount(t.count()*e.getLineTriangleCount());var i=[],n=[],a=["lineStyle","width"];this._originalEdgeColors=new Float32Array(t.count()*4),this._edgeIndicesMap=new Float32Array(t.count()),t.each(function(o){var s=t.graph.getEdgeByIndex(o),l=s.node1.dataIndex*2,u=s.node2.dataIndex*2;i[0]=r[l],i[1]=r[l+1],n[0]=r[u],n[1]=r[u+1];var h=Ve(t,s.dataIndex),c=y.parseColor(h);c[3]*=te.firstNotNull(Fe(t,s.dataIndex),1);var d=t.getItemModel(s.dataIndex),f=te.firstNotNull(d.get(a),1)*this._api.getDevicePixelRatio();e.addLine(i,n,c,f);for(var v=0;v<4;v++)this._originalEdgeColors[s.dataIndex*4+v]=c[v];this._edgeIndicesMap[s.dataIndex]=o},this),e.dirty()},_updateForceNodesGeometry:function(e){for(var t=this._pointsBuilder.getPointsMesh(),r=[],i=0;i<e.count();i++)this._forceLayoutInstance.getNodeUV(i,r),t.geometry.attributes.position.set(i,r);t.geometry.dirty("position")},_initLayout:function(e,t,r){var i=e.get("layout"),n=e.getGraph(),a=e.getBoxLayoutParams(),o=Ji(a,{width:r.getWidth(),height:r.getHeight()});i==="force"&&(i="forceAtlas2"),this.stopLayout(e,t,r,{beforeLayout:!0});var s=e.getData(),l=e.getData();if(i==="forceAtlas2"){var u=e.getModel("forceAtlas2"),h=this._forceLayoutInstance,c=[],d=[],f=s.getDataExtent("value"),v=l.getDataExtent("value"),p=te.firstNotNull(u.get("edgeWeight"),1),m=te.firstNotNull(u.get("nodeWeight"),1);typeof p=="number"&&(p=[p,p]),typeof m=="number"&&(m=[m,m]);var g=0,T={},x=new Float32Array(s.count()*2);if(n.eachNode(function(b){var w=b.dataIndex,A=s.get("value",w),E,M;if(s.hasItemOption){var I=s.getItemModel(w);E=I.get("x"),M=I.get("y")}E==null&&(E=o.x+Math.random()*o.width,M=o.y+Math.random()*o.height),x[g*2]=E,x[g*2+1]=M,T[b.id]=g++;var C=Aa(A,f,m);isNaN(C)&&(isNaN(m[0])?C=1:C=m[0]),c.push({x:E,y:M,mass:C,size:s.getItemVisual(w,"symbolSize")})}),s.setLayout("points",x),n.eachEdge(function(b){var w=b.dataIndex,A=s.get("value",w),E=Aa(A,v,p);isNaN(E)&&(isNaN(p[0])?E=1:E=p[0]),d.push({node1:T[b.node1.id],node2:T[b.node2.id],weight:E,dataIndex:w})}),!h){var _=u.get("GPU");this._forceLayoutInstance&&(_&&!(this._forceLayoutInstance instanceof Re)||!_&&!(this._forceLayoutInstance instanceof rt))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),h=this._forceLayoutInstance=_?new Re:new rt}h.initData(c,d),h.updateOption(u.option),this._updateForceEdgesGeometry(h.getEdges(),e),this._updatePositionTexture(),r.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else{var x=new Float32Array(s.count()*2),g=0;n.eachNode(function(A){var E=A.dataIndex,M,I;if(s.hasItemOption){var C=s.getItemModel(E);M=C.get("x"),I=C.get("y")}x[g++]=M,x[g++]=I}),s.setLayout("points",x),this._updateAfterLayout(e,t,r)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set("positionTex",e)},startLayout:function(e,t,a,i){if(!(i&&i.from!=null&&i.from!==this.uid)){var n=this.viewGL,a=this._api,o=this._forceLayoutInstance,s=this._model.getData(),l=this._model.getModel("forceAtlas2");if(o&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),!!this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var u=this,h=this._layoutId=xd++,c=l.getShallow("maxSteps"),d=l.getShallow("steps"),f=0,v=Math.max(d*2,20),p=function(m){if(m===u._layoutId){if(o.isFinished(c)){a.dispatchAction({type:"graphGLStopLayout",from:u.uid}),a.dispatchAction({type:"graphGLFinishLayout",points:s.getLayout("points"),from:u.uid});return}o.update(n.layer.renderer,d,function(){u._updatePositionTexture(),f+=d,f>=v&&(u._syncNodePosition(e),f=0),a.getZr().refresh(),Hn(function(){p(m)})})}};Hn(function(){u._forceLayoutInstanceToDispose&&(u._forceLayoutInstanceToDispose.dispose(n.layer.renderer),u._forceLayoutInstanceToDispose=null),p(h)}),this._layouting=!0}}},stopLayout:function(e,t,r,i){i&&i.from!=null&&i.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),this._forceLayoutInstance&&this.viewGL.layer&&(i&&i.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,t,r)),this._api.getZr().refresh(),this._layouting=!1))},_syncNodePosition:function(e){var t=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout("points",t),e.setNodePosition(t)},_updateAfterLayout:function(e,t,r){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,t,r),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,t,r,i){var n=this._model.getData();this._downplayAll();var a=i.dataIndex,o=n.graph,s=[],l=o.getNodeByIndex(a);s.push(l),l.edges.forEach(function(h){h.dataIndex<0||(h.node1!==l&&s.push(h.node1),h.node2!==l&&s.push(h.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),s.forEach(function(h){this._pointsBuilder.highlight(n,h.dataIndex)},this),this._pointsBuilder.updateLabels(s.map(function(h){return h.dataIndex}));var u=[];l.edges.forEach(function(h){h.dataIndex>=0&&(this._highlightEdge(h.dataIndex),u.push(h))},this),this._focusNodes=s,this._focusEdges=u},unfocusNodeAdjacency:function(e,t,r,i){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var t=this._model.getEdgeData().getItemModel(e),r=y.parseColor(t.get("emphasis.lineStyle.color")||t.get("lineStyle.color")),i=te.firstNotNull(t.get("emphasis.lineStyle.opacity"),t.get("lineStyle.opacity"),1);r[3]*=i,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],r)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var t=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)},_setEdgeFade:function(){var e=[];return function(t,r){this._getColor(t,e),e[3]*=r,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],e)}}(),_getColor:function(e,t){for(var r=0;r<4;r++)t[r]=this._originalEdgeColors[e*4+r];return t},_fadeOutEdgesAll:function(e){var t=this._model.getData().graph;t.eachEdge(function(r){this._setEdgeFade(r.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,t){this.viewGL.setViewport(0,0,t.getWidth(),t.getHeight(),t.getDevicePixelRatio());for(var r=this.viewGL.camera,i=e.getData(),n=i.getLayout("points"),a=Oi.create(1/0,1/0),o=Oi.create(-1/0,-1/0),s=[],l=0;l<n.length;)s[0]=n[l++],s[1]=n[l++],Oi.min(a,a,s),Oi.max(o,o,s);var u=(o[1]+a[1])/2,h=(o[0]+a[0])/2;if(!(h>r.left&&h<r.right&&u<r.bottom&&u>r.top)){var c=Math.max(o[0]-a[0],10),d=c/t.getWidth()*t.getHeight();c*=1.4,d*=1.4,a[0]-=c*.2,r.left=a[0],r.top=u-d/2,r.bottom=u+d/2,r.right=c+a[0],r.near=0,r.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function Ii(e){return e instanceof Array||(e=[e,e]),e}function wd(e){e.registerChartView(Td),e.registerSeriesModel(ei),e.registerVisual(function(r){const i={};r.eachSeriesByType("graphGL",function(n){var a=n.getCategoriesData(),o=n.getData(),s={};a.each(function(l){var u=a.getName(l);s["ec-"+u]=l;var h=a.getItemModel(l),c=h.getModel("itemStyle").getItemStyle();c.fill||(c.fill=n.getColorFromPalette(u,i)),a.setItemVisual(l,"style",c);var d=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<d.length;v++){var f=h.getShallow(d[v],!0);f!=null&&a.setItemVisual(l,d[v],f)}}),a.count()&&o.each(function(l){var u=o.getItemModel(l);let h=u.getShallow("category");if(h!=null){typeof h=="string"&&(h=s["ec-"+h]);var c=a.getItemVisual(h,"style"),d=o.ensureUniqueItemVisual(l,"style");La(d,c);var f=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<f.length;v++)o.setItemVisual(l,f[v],a.getItemVisual(h,f[v]))}})})}),e.registerVisual(function(r){r.eachSeriesByType("graphGL",function(i){var n=i.getGraph(),a=i.getEdgeData(),o=Ii(i.get("edgeSymbol")),s=Ii(i.get("edgeSymbolSize"));a.setVisual("drawType","stroke"),a.setVisual("fromSymbol",o&&o[0]),a.setVisual("toSymbol",o&&o[1]),a.setVisual("fromSymbolSize",s&&s[0]),a.setVisual("toSymbolSize",s&&s[1]),a.setVisual("style",i.getModel("lineStyle").getLineStyle()),a.each(function(l){var u=a.getItemModel(l),h=n.getEdgeByIndex(l),c=Ii(u.getShallow("symbol",!0)),d=Ii(u.getShallow("symbolSize",!0)),f=u.getModel("lineStyle").getLineStyle(),v=a.ensureUniqueItemVisual(l,"style");switch(La(v,f),v.stroke){case"source":{var p=h.node1.getVisual("style");v.stroke=p&&p.fill;break}case"target":{var p=h.node2.getVisual("style");v.stroke=p&&p.fill;break}}c[0]&&h.setVisual("fromSymbol",c[0]),c[1]&&h.setVisual("toSymbol",c[1]),d[0]&&h.setVisual("fromSymbolSize",d[0]),d[1]&&h.setVisual("toSymbolSize",d[1])})})}),e.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(r,i){i.eachComponent({mainType:"series",query:r},function(n){n.setView(r)})});function t(){}e.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},t),e.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},t),e.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},t),e.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},t)}ke(wd);const bd=dt.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(e,t){var r=this.get("coordinateSystem"),i=r==="geo"?["lng","lat"]:Zo(r)||["x","y"];i.push("vx","vy");var n=pi(this.getSource(),{coordDimensions:i,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),a=new St(n,this);return a.initData(this.getSource()),a},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}});var Sd=re.extend(function(){return{dynamic:!0,attributes:{position:new re.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(e){var t=this.attributes,r=4*e,i=2*e;this.vertexCount!==r&&t.position.init(r),this.triangleCount!==i&&(i===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(i*3):new Uint16Array(i*3))},addLine:function(e){var t=this._vertexOffset;this.attributes.position.set(t,[e[0],e[1],1]),this.attributes.position.set(t+1,[e[0],e[1],-1]),this.attributes.position.set(t+2,[e[0],e[1],2]),this.attributes.position.set(t+3,[e[0],e[1],-2]),this.setTriangleIndices(this._faceOffset++,[t,t+1,t+2]),this.setTriangleIndices(this._faceOffset++,[t+1,t+2,t+3]),this._vertexOffset+=4}});const Ed=`@export ecgl.vfParticle.particle.fragment

uniform sampler2D particleTexture;
uniform sampler2D spawnTexture;
uniform sampler2D velocityTexture;

uniform float deltaTime;
uniform float elapsedTime;

uniform float speedScaling : 1.0;

uniform vec2 textureSize;
uniform vec4 region : [0, 0, 1, 1];
uniform float firstFrameTime;

varying vec2 v_Texcoord;


void main()
{
 vec4 p = texture2D(particleTexture, v_Texcoord);
 bool spawn = false;
 if (p.w <= 0.0) {
 p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));
 p.w -= firstFrameTime;
 spawn = true;
 }
 vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;
 v = (v - 0.5) * 2.0;
 p.z = length(v);
 p.xy += v * deltaTime / 10.0 * speedScaling;
 p.w -= deltaTime;

 if (spawn || p.xy != fract(p.xy)) {
 p.z = 0.0;
 }
 p.xy = fract(p.xy);

 gl_FragColor = p;
}
@end

@export ecgl.vfParticle.renderPoints.vertex

#define PI 3.1415926

attribute vec2 texcoord : TEXCOORD_0;

uniform sampler2D particleTexture;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

uniform float size : 1.0;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 vec4 p = texture2D(particleTexture, texcoord);

 if (p.w > 0.0 && p.z > 1e-5) {
 gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }

 v_Mag = p.z;
 v_Uv = p.xy;

 gl_PointSize = size;
}

@end

@export ecgl.vfParticle.renderPoints.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;
uniform sampler2D spriteTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
#ifdef SPRITETEXTURE_ENABLED
 gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);
 if (color.a == 0.0) {
 discard;
 }
#endif
#ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end

@export ecgl.vfParticle.renderLines.vertex

#define PI 3.1415926

attribute vec3 position : POSITION;

uniform sampler2D particleTexture;
uniform sampler2D prevParticleTexture;

uniform float size : 1.0;
uniform vec4 vp: VIEWPORT;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

varying float v_Mag;
varying vec2 v_Uv;

@import clay.util.rand

void main()
{
 vec4 p = texture2D(particleTexture, position.xy);
 vec4 p2 = texture2D(prevParticleTexture, position.xy);

 p.xy = p.xy * 2.0 - 1.0;
 p2.xy = p2.xy * 2.0 - 1.0;

 if (p.w > 0.0 && p.z > 1e-5) {
 vec2 dir = normalize(p.xy - p2.xy);
 vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;
 if (abs(position.z) == 2.0) {
 gl_Position = vec4(p.xy + norm, 0.0, 1.0);
 v_Uv = p.xy;
 v_Mag = p.z;
 }
 else {
 gl_Position = vec4(p2.xy + norm, 0.0, 1.0);
 v_Mag = p2.z;
 v_Uv = p2.xy;
 }
 gl_Position = worldViewProjection * gl_Position;
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }
}

@end

@export ecgl.vfParticle.renderLines.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
 #ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end
`;G.import(Ed);function Ad(e){var t=document.createElement("canvas");t.width=t.height=e;var r=t.getContext("2d");return r.fillStyle="#fff",r.arc(e/2,e/2,e/2,0,Math.PI*2),r.fill(),t}var ta=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new ee({type:V.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};ta.prototype={constructor:ta,init:function(){var e={type:V.FLOAT,minFilter:V.NEAREST,magFilter:V.NEAREST,useMipmap:!1};this._spawnTexture=new ee(e),this._particleTexture0=new ee(e),this._particleTexture1=new ee(e),this._frameBuffer=new Ee({depthBuffer:!1}),this._particlePass=new Le({fragment:G.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new Le({fragment:G.source("clay.compositor.downsample")});var t=new Be({renderOrder:10,material:new ot({shader:new G(G.source("ecgl.vfParticle.renderPoints.vertex"),G.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:Be.POINTS,geometry:new re({dynamic:!0,mainAttribute:"texcoord0"})}),r=new Be({renderOrder:10,material:new ot({shader:new G(G.source("ecgl.vfParticle.renderLines.vertex"),G.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new Sd,culling:!1}),i=new Be({material:new ot({shader:new G(G.source("ecgl.color.vertex"),G.source("ecgl.color.fragment"))}),geometry:new rn});i.material.enableTexture("diffuseMap"),this._particlePointsMesh=t,this._particleLinesMesh=r,this._lastFrameFullQuadMesh=i,this._camera=new Dr,this._thisFrameTexture=new ee,this._lastFrameTexture=new ee},setParticleDensity:function(e,t){for(var r=e*t,i=new Float32Array(r*4),n=0,a=this.particleLife,o=0;o<e;o++)for(var s=0;s<t;s++,n++){i[n*4]=Math.random(),i[n*4+1]=Math.random(),i[n*4+2]=Math.random();var l=(a[1]-a[0])*Math.random()+a[0];i[n*4+3]=l}this._particleType==="line"?this._setLineGeometry(e,t):this._setPointsGeometry(e,t),this._spawnTexture.width=e,this._spawnTexture.height=t,this._spawnTexture.pixels=i,this._particleTexture0.width=this._particleTexture1.width=e,this._particleTexture0.height=this._particleTexture1.height=t,this._particlePass.setUniform("textureSize",[e,t])},_setPointsGeometry:function(e,t){var r=e*t,i=this._particlePointsMesh.geometry,n=i.attributes;n.texcoord0.init(r);for(var a=0,o=0;o<e;o++)for(var s=0;s<t;s++,a++)n.texcoord0.value[a*2]=o/e,n.texcoord0.value[a*2+1]=s/t;i.dirty()},_setLineGeometry:function(e,t){var r=e*t,i=this._getParticleMesh().geometry;i.setLineCount(r),i.resetOffset();for(var n=0;n<e;n++)for(var a=0;a<t;a++)i.addLine([n/e,a/t]);i.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(e,t,r,i){var n=this._getParticleMesh(),a=this._frameBuffer,o=this._particlePass;i&&this._updateDownsampleTextures(e,t),n.material.set("size",this._particleSize*this._supersampling),n.material.set("color",this.particleColor),o.setUniform("speedScaling",this.particleSpeedScaling),a.attach(this._particleTexture1),o.setUniform("firstFrameTime",i?(this.particleLife[1]+this.particleLife[0])/2:0),o.setUniform("particleTexture",this._particleTexture0),o.setUniform("deltaTime",r),o.setUniform("elapsedTime",this._elapsedTime),o.render(e,a),n.material.set("particleTexture",this._particleTexture1),n.material.set("prevParticleTexture",this._particleTexture0),a.attach(this._thisFrameTexture),a.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT);var s=this._lastFrameFullQuadMesh;s.material.set("diffuseMap",this._lastFrameTexture),s.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),e.renderPass([s,n],this._camera),a.unbind(e),this._downsample(e),this._swapTexture(),this._elapsedTime+=r},_downsample:function(e){var t=this._downsampleTextures;if(t.length!==0)for(var r=0,i=this._thisFrameTexture,n=t[r];n;)this._frameBuffer.attach(n),this._downsamplePass.setUniform("texture",i),this._downsamplePass.setUniform("textureSize",[i.width,i.height]),this._downsamplePass.render(e,this._frameBuffer),i=n,n=t[++r]},getSurfaceTexture:function(){var e=this._downsampleTextures;return e.length>0?e[e.length-1]:this._lastFrameTexture},setRegion:function(e){this._particlePass.setUniform("region",e)},resize:function(e,t){this._lastFrameTexture.width=e*this._supersampling,this._lastFrameTexture.height=t*this._supersampling,this._thisFrameTexture.width=e*this._supersampling,this._thisFrameTexture.height=t*this._supersampling,this._width=e,this._height=t},setParticleSize:function(e){var t=this._getParticleMesh();if(e<=2){t.material.disableTexture("spriteTexture"),t.material.transparent=!1;return}this._spriteTexture||(this._spriteTexture=new ee),(!this._spriteTexture.image||this._spriteTexture.image.width!==e)&&(this._spriteTexture.image=Ad(e),this._spriteTexture.dirty()),t.material.transparent=!0,t.material.enableTexture("spriteTexture"),t.material.set("spriteTexture",this._spriteTexture),this._particleSize=e},setGradientTexture:function(e){var t=this._getParticleMesh().material;t[e?"enableTexture":"disableTexture"]("gradientTexture"),t.setUniform("gradientTexture",e)},setColorTextureImage:function(e,t){var r=this._getParticleMesh().material;r.setTextureImage("colorTexture",e,t,{flipY:!0})},setParticleType:function(e){this._particleType=e},clearFrame:function(e){var t=this._frameBuffer;t.attach(this._lastFrameTexture),t.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),t.unbind(e)},setSupersampling:function(e){this._supersampling=e,this.resize(this._width,this._height)},_updateDownsampleTextures:function(e,t){for(var r=this._downsampleTextures,i=Math.max(Math.floor(Math.log(this._supersampling/t.getDevicePixelRatio())/Math.log(2)),0),n=2,a=this._width*this._supersampling,o=this._height*this._supersampling,s=0;s<i;s++)r[s]=r[s]||new ee,r[s].width=a/n,r[s].height=o/n,n*=2;for(;s<r.length;s++)r[s].dispose(e);r.length=i},_swapTexture:function(){var e=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=e;var e=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=e},dispose:function(e){e.disposeFrameBuffer(this._frameBuffer),e.disposeTexture(this.vectorFieldTexture),e.disposeTexture(this._spawnTexture),e.disposeTexture(this._particleTexture0),e.disposeTexture(this._particleTexture1),e.disposeTexture(this._thisFrameTexture),e.disposeTexture(this._lastFrameTexture),e.disposeGeometry(this._particleLinesMesh.geometry),e.disposeGeometry(this._particlePointsMesh.geometry),e.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&e.disposeTexture(this._spriteTexture),this._particlePass.dispose(e),this._downsamplePass.dispose(e),this._downsampleTextures.forEach(function(t){t.dispose(e)})}};const Ld=vt.extend({type:"flowGL",__ecgl__:!0,init:function(e,t){this.viewGL=new fe("orthographic"),this.groupGL=new y.Node,this.viewGL.add(this.groupGL),this._particleSurface=new ta;var r=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.color.vertex"),fragment:y.Shader.source("ecgl.color.fragment")}),transparent:!0})});r.material.enableTexture("diffuseMap"),this.groupGL.add(r),this._planeMesh=r},render:function(e,t,r){var i=this._particleSurface;i.setParticleType(e.get("particleType")),i.setSupersampling(e.get("supersampling")),this._updateData(e,r),this._updateCamera(r.getWidth(),r.getHeight(),r.getDevicePixelRatio());var n=te.firstNotNull(e.get("particleDensity"),128);i.setParticleDensity(n,n);var a=this._planeMesh,o=+new Date,s=this,l=!0;a.__percent=0,a.stopAnimation(),a.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var c=+new Date,d=Math.min(c-o,20);o=o+d,s._renderer&&(i.update(s._renderer,r,d/1e3,l),a.material.set("diffuseMap",i.getSurfaceTexture())),l=!1}).start();var u=e.getModel("itemStyle"),h=y.parseColor(u.get("color"));h[3]*=te.firstNotNull(u.get("opacity"),1),a.material.set("color",h),i.setColorTextureImage(e.get("colorTexture"),r),i.setParticleSize(e.get("particleSize")),i.particleSpeedScaling=e.get("particleSpeed"),i.motionBlurFactor=1-Math.pow(.1,e.get("particleTrail"))},updateTransform:function(e,t,r){this._updateData(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._renderer=n},_updateData:function(e,t){var r=e.coordinateSystem,i=r.dimensions.map(function(T){return e.coordDimToDataDim(T)[0]}),n=e.getData(),a=n.getDataExtent(i[0]),o=n.getDataExtent(i[1]),s=e.get("gridWidth"),l=e.get("gridHeight");if(s==null||s==="auto"){var u=(a[1]-a[0])/(o[1]-o[0]);s=Math.round(Math.sqrt(u*n.count()))}(l==null||l==="auto")&&(l=Math.ceil(n.count()/s));var h=this._particleSurface.vectorFieldTexture,c=h.pixels;if(!c||c.length!==l*s*4)c=h.pixels=new Float32Array(s*l*4);else for(var d=0;d<c.length;d++)c[d]=0;var f=0,v=1/0,p=new Float32Array(n.count()*2),m=0,g=[[1/0,1/0],[-1/0,-1/0]];n.each([i[0],i[1],"vx","vy"],function(T,x,_,b){var w=r.dataToPoint([T,x]);p[m++]=w[0],p[m++]=w[1],g[0][0]=Math.min(w[0],g[0][0]),g[0][1]=Math.min(w[1],g[0][1]),g[1][0]=Math.max(w[0],g[1][0]),g[1][1]=Math.max(w[1],g[1][1]);var A=Math.sqrt(_*_+b*b);f=Math.max(f,A),v=Math.min(v,A)}),n.each(["vx","vy"],function(T,x,_){var b=Math.round((p[_*2]-g[0][0])/(g[1][0]-g[0][0])*(s-1)),w=l-1-Math.round((p[_*2+1]-g[0][1])/(g[1][1]-g[0][1])*(l-1)),A=(w*s+b)*4;c[A]=T/f*.5+.5,c[A+1]=x/f*.5+.5,c[A+3]=1}),h.width=s,h.height=l,e.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(h),h.dirty(),this._updatePlanePosition(g[0],g[1],e,t),this._updateGradientTexture(n.getVisual("visualMeta"),[v,f])},_fillEmptyPixels:function(e){var t=e.pixels,r=e.width,i=e.height;function n(p,m,g){p=Math.max(Math.min(p,r-1),0),m=Math.max(Math.min(m,i-1),0);var T=(m*(r-1)+p)*4;return t[T+3]===0?!1:(g[0]=t[T],g[1]=t[T+1],!0)}function a(p,m,g){g[0]=p[0]+m[0],g[1]=p[1]+m[1]}for(var o=[],s=[],l=[],u=[],h=[],c=0,d=0;d<i;d++)for(var f=0;f<r;f++){var v=(d*(r-1)+f)*4;t[v+3]===0&&(c=o[0]=o[1]=0,n(f-1,d,s)&&(c++,a(s,o,o)),n(f+1,d,l)&&(c++,a(l,o,o)),n(f,d-1,u)&&(c++,a(u,o,o)),n(f,d+1,h)&&(c++,a(h,o,o)),o[0]/=c,o[1]/=c,t[v]=o[0],t[v+1]=o[1]),t[v+3]=1}},_updateGradientTexture:function(e,t){if(!e||!e.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new y.Texture2D({image:document.createElement("canvas")});var r=this._gradientTexture,i=r.image;i.width=200,i.height=1;var n=i.getContext("2d"),a=n.createLinearGradient(0,.5,i.width,.5);e[0].stops.forEach(function(o){var s;t[1]===t[0]?s=0:(s=o.value/t[1],s=Math.min(Math.max(s,0),1)),a.addColorStop(s,o.color)}),n.fillStyle=a,n.fillRect(0,0,i.width,i.height),r.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(e,t,r,i){var n=this._limitInViewportAndFullFill(e,t,r,i);e=n.leftTop,t=n.rightBottom,this._particleSurface.setRegion(n.region),this._planeMesh.position.set((e[0]+t[0])/2,i.getHeight()-(e[1]+t[1])/2,0);var a=t[0]-e[0],o=t[1]-e[1];this._planeMesh.scale.set(a/2,o/2,1),this._particleSurface.resize(Math.max(Math.min(a,2048),1),Math.max(Math.min(o,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(e,t,r,i){var n=[Math.max(e[0],0),Math.max(e[1],0)],a=[Math.min(t[0],i.getWidth()),Math.min(t[1],i.getHeight())];if(r.get("coordinateSystem")==="bmap"){var o=r.getData().getDataExtent(r.coordDimToDataDim("lng")[0]),s=Math.floor(o[1]-o[0])>=359;s&&(n[0]>0&&(n[0]=0),a[0]<i.getWidth()&&(a[0]=i.getWidth()))}var l=t[0]-e[0],u=t[1]-e[1],h=a[0]-n[0],c=a[1]-n[1],d=[(n[0]-e[0])/l,1-c/u-(n[1]-e[1])/u,h/l,c/u];return{leftTop:n,rightBottom:a,region:d}},_updateCamera:function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.bottom=0,i.top=t,i.right=e,i.near=0,i.far=100,i.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function Md(e){e.registerChartView(Ld),e.registerSeriesModel(bd)}ke(Md);var ra=dt.extend({type:"series.linesGL",dependencies:["grid","geo"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",streamEnabled:!0,init:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),ra.superApply(this,"init",arguments)},mergeOption:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),ra.superApply(this,"mergeOption",arguments)},appendData:function(e){var t=this._processFlatCoordsArray(e.data);t.flatCoords&&(this._flatCoords?(this._flatCoords=Ma(this._flatCoords,t.flatCoords),this._flatCoordsOffset=Ma(this._flatCoordsOffset,t.flatCoordsOffset)):(this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset),e.data=new Float32Array(t.count)),this.getRawData().appendData(e.data)},_getCoordsFromItemModel:function(e){var t=this.getData().getItemModel(e),r=t.option instanceof Array?t.option:t.getShallow("coords");return r},getLineCoordsCount:function(e){return this._flatCoordsOffset?this._flatCoordsOffset[e*2+1]:this._getCoordsFromItemModel(e).length},getLineCoords:function(e,t){if(this._flatCoordsOffset){for(var r=this._flatCoordsOffset[e*2],i=this._flatCoordsOffset[e*2+1],n=0;n<i;n++)t[n]=t[n]||[],t[n][0]=this._flatCoords[r+n*2],t[n][1]=this._flatCoords[r+n*2+1];return i}else{for(var a=this._getCoordsFromItemModel(e),n=0;n<a.length;n++)t[n]=t[n]||[],t[n][0]=a[n][0],t[n][1]=a[n][1];return a.length}},_processFlatCoordsArray:function(e){var t=0;if(this._flatCoords&&(t=this._flatCoords.length),typeof e[0]=="number"){for(var r=e.length,i=new Uint32Array(r),n=new Float64Array(r),a=0,o=0,s=0,l=0;l<r;){s++;var u=e[l++];i[o++]=a+t,i[o++]=u;for(var h=0;h<u;h++){var c=e[l++],d=e[l++];n[a++]=c,n[a++]=d}}return{flatCoordsOffset:new Uint32Array(i.buffer,0,o),flatCoords:n,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:e.length}},getInitialData:function(e,t){var r=new St(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"geo",zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:"source-over",lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});const Cd=vt.extend({type:"linesGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new fe("orthographic"),this.viewGL.add(this.groupGL),this._glViewHelper=new Nt(this.viewGL),this._nativeLinesShader=y.createShader("ecgl.lines3D"),this._meshLinesShader=y.createShader("ecgl.meshLines3D"),this._linesMeshes=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r);var i=this._linesMeshes[0];i||(i=this._linesMeshes[0]=this._createLinesMesh(e)),this._linesMeshes.length=1,this.groupGL.add(i),this._updateLinesMesh(e,i,0,e.getData().count()),this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){var n=this._linesMeshes[this._currentStep];n||(n=this._createLinesMesh(t),this._linesMeshes[this._currentStep]=n),this._updateLinesMesh(t,n,e.start,e.end),this.groupGL.add(n),i.getZr().refresh(),this._currentStep++},updateTransform:function(e,t,r){e.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(e,r)},_createLinesMesh:function(e){var t=new y.Mesh({$ignorePicking:!0,material:new y.Material({shader:y.createShader("ecgl.lines3D"),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new wa({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:y.Mesh.LINES,culling:!1});return t},_updateLinesMesh:function(e,t,r,i){var n=e.getData();t.material.blend=e.get("blendMode")==="lighter"?y.additiveBlend:null;var a=e.get("lineStyle.curveness")||0,o=e.get("polyline"),s=t.geometry,l=e.coordinateSystem,u=te.firstNotNull(e.get("lineStyle.width"),1);u>1?(t.material.shader!==this._meshLinesShader&&t.material.attachShader(this._meshLinesShader),t.mode=y.Mesh.TRIANGLES):(t.material.shader!==this._nativeLinesShader&&t.material.attachShader(this._nativeLinesShader),t.mode=y.Mesh.LINES),r=r||0,i=i||n.count(),s.resetOffset();var h=0,c=0,d=[],f=[],v=[],p=[],m=[],g=.3,T=.7;function x(){f[0]=d[0]*T+p[0]*g-(d[1]-p[1])*a,f[1]=d[1]*T+p[1]*g-(p[0]-d[0])*a,v[0]=d[0]*g+p[0]*T-(d[1]-p[1])*a,v[1]=d[1]*g+p[1]*T-(p[0]-d[0])*a}if(o||a!==0)for(var _=r;_<i;_++)if(o){var b=e.getLineCoordsCount(_);h+=s.getPolylineVertexCount(b),c+=s.getPolylineTriangleCount(b)}else e.getLineCoords(_,m),this._glViewHelper.dataToPoint(l,m[0],d),this._glViewHelper.dataToPoint(l,m[1],p),x(),h+=s.getCubicCurveVertexCount(d,f,v,p),c+=s.getCubicCurveTriangleCount(d,f,v,p);else{var w=i-r;h+=w*s.getLineVertexCount(),c+=w*s.getLineVertexCount()}s.setVertexCount(h),s.setTriangleCount(c);for(var A=r,E=[],_=r;_<i;_++){y.parseColor(Ve(n,A),E);var M=te.firstNotNull(Fe(n,A),1);E[3]*=M;for(var b=e.getLineCoords(_,m),I=0;I<b;I++)this._glViewHelper.dataToPoint(l,m[I],m[I]);o?s.addPolyline(m,E,u,0,b):a!==0?(d=m[0],p=m[1],x(),s.addCubicCurve(d,f,v,p,E,u)):s.addPolyline(m,E,u,0,2),A++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Dd(e){e.registerChartView(Cd),e.registerSeriesModel(ra)}ke(Dd);const Pd={class:"sandbox-container"},Nd={class:"control-bar"},Rd={class:"control-actions"},Od={class:"update-info"},Id={class:"news-ticker"},Bd={class:"ticker-content"},Fd=["onClick"],Vd={class:"news-title"},zd={class:"news-views"},Gd={class:"sandbox-content"},Ud={class:"sandbox-main"},Hd={class:"hot-search-panel"},kd={class:"hot-search-header"},Wd={class:"update-time"},Xd={class:"hot-search-list"},jd={class:"hot-rank"},Zd={class:"hot-title"},qd={class:"hot-heat"},Yd={class:"sandbox-panel"},Kd={class:"panel-section"},$d={class:"city-list"},Qd={class:"city-rank"},Jd={class:"city-info"},ev={class:"city-name"},tv={class:"city-bar"},rv={class:"panel-section"},iv={class:"stats-grid"},nv={class:"stat-item"},av={class:"stat-value"},ov={class:"stat-item"},sv={class:"stat-value"},lv={class:"stat-item highlight"},uv={class:"stat-value",style:{color:"#ff4757"}},hv={class:"stat-city"},cv={class:"stat-item"},fv={class:"stat-value",style:{color:"#2ed573"}},dv={class:"stat-city"},vv={class:"panel-section"},pv={class:"view-controls"},mv={class:"modal-header"},gv={class:"modal-body"},_v={class:"modal-stats"},yv={class:"modal-region"},xv={class:"modal-desc"},Tv=Qs({__name:"SandboxView",setup(e){const t=mt(null);let r=null,i=null;const n=mt(!0),a=mt(!1),o=mt(!1),s=mt("--:--:--"),l=mt("--:--:--"),u=mt(null),h=mt([{title:"北京朝阳区突发交通管制，多条道路临时封闭",category:"traffic",categoryText:"交通",views:156,comments:234,shares:89,region:"北京",description:"因道路施工需要，朝阳区多条主干道实施临时交通管制，预计持续3小时。"},{title:"上海浦东新区商圈人流达到峰值，建议错峰出行",category:"crowd",categoryText:"人流",views:98,comments:156,shares:45,region:"上海",description:"浦东新区主要商圈人流密集，建议市民错峰出行，避开高峰时段。"},{title:"广州天河区发现疑似环境污染问题，已启动调查",category:"environment",categoryText:"环境",views:234,comments:567,shares:123,region:"广州",description:"天河区某工业园区附近发现异常气味，环保部门已介入调查。"},{title:"深圳南山区科技园举办大型招聘会，吸引万人参与",category:"event",categoryText:"活动",views:67,comments:89,shares:34,region:"深圳",description:"南山区科技园举办年度大型招聘会，超过200家企业参与。"},{title:"成都春熙路商圈开展促销活动，客流激增",category:"crowd",categoryText:"人流",views:45,comments:78,shares:23,region:"成都",description:"春熙路商圈开展大型促销活动，吸引大量市民前往购物。"},{title:"杭州西湖景区游客量突破历史同期记录",category:"crowd",categoryText:"人流",views:189,comments:345,shares:167,region:"杭州",description:"西湖景区游客量持续攀升，建议游客错峰游览。"},{title:"武汉江汉路步行街实施人流管控措施",category:"traffic",categoryText:"交通",views:78,comments:123,shares:56,region:"武汉",description:"因人流过大，江汉路步行街实施临时管控措施。"},{title:"南京新街口商圈开展夜间经济活动",category:"event",categoryText:"活动",views:56,comments:89,shares:34,region:"南京",description:"新街口商圈推出夜间经济系列活动，丰富市民夜生活。"}]),c=["全国多地迎来降温天气","城市交通拥堵指数创新高","热门景区游客量预警","新能源车充电桩建设加速","城市绿化覆盖率提升","智慧城市建设新进展","社区便民服务升级","城市空气质量改善","地铁新线路即将开通","商圈促销活动火爆","高校毕业季就业指导","医疗保障政策更新","城市垃圾分类新规","公共交通票价调整","历史文化街区改造","科技创新成果展示","体育赛事精彩纷呈","美食节活动开幕","文化艺术展览举办","城市夜景灯光秀"],d=mt([{title:"全国多地迎来降温天气",heat:9876543,trend:15},{title:"城市交通拥堵指数创新高",heat:8765432,trend:23},{title:"热门景区游客量预警",heat:7654321,trend:-5},{title:"新能源车充电桩建设加速",heat:6543210,trend:8},{title:"城市绿化覆盖率提升",heat:5432109,trend:3},{title:"智慧城市建设新进展",heat:4321098,trend:12},{title:"社区便民服务升级",heat:3210987,trend:-2},{title:"城市空气质量改善",heat:2109876,trend:6}]),f=()=>{const Z=[...c].sort(()=>Math.random()-.5);d.value=Z.slice(0,8).map(D=>({title:D,heat:Math.floor(Math.random()*8e6)+1e6,trend:Math.floor(Math.random()*30)-10})).sort((D,q)=>q.heat-D.heat)},v=Z=>{u.value=Z},m=mt([{name:"北京",baseValue:180,coord:[116.4074,39.9042]},{name:"上海",baseValue:175,coord:[121.4737,31.2304]},{name:"广州",baseValue:165,coord:[113.2644,23.1291]},{name:"深圳",baseValue:160,coord:[114.0579,22.5431]},{name:"天津",baseValue:145,coord:[117.3616,39.3434]},{name:"重庆",baseValue:140,coord:[106.5516,29.563]},{name:"成都",baseValue:135,coord:[104.0668,30.5728]},{name:"杭州",baseValue:130,coord:[120.1551,30.2741]},{name:"武汉",baseValue:125,coord:[114.3055,30.5928]},{name:"西安",baseValue:120,coord:[108.9398,34.3416]},{name:"南京",baseValue:115,coord:[118.7969,32.0603]},{name:"苏州",baseValue:110,coord:[120.5853,31.2994]},{name:"郑州",baseValue:105,coord:[113.6254,34.7466]},{name:"长沙",baseValue:100,coord:[112.9388,28.2282]},{name:"青岛",baseValue:95,coord:[120.3826,36.0671]},{name:"大连",baseValue:90,coord:[121.6147,38.914]},{name:"宁波",baseValue:85,coord:[121.544,29.8683]},{name:"厦门",baseValue:80,coord:[118.0894,24.4798]},{name:"济南",baseValue:75,coord:[117.0009,36.6758]},{name:"哈尔滨",baseValue:70,coord:[126.5349,45.8038]},{name:"长春",baseValue:65,coord:[125.3245,43.8868]},{name:"福州",baseValue:60,coord:[119.3062,26.0753]},{name:"合肥",baseValue:55,coord:[117.2272,31.8206]},{name:"昆明",baseValue:50,coord:[102.8329,24.8801]},{name:"南昌",baseValue:45,coord:[115.8581,28.6829]},{name:"贵阳",baseValue:40,coord:[106.7135,26.5783]},{name:"太原",baseValue:35,coord:[112.5489,37.8706]},{name:"南宁",baseValue:30,coord:[108.32,22.824]},{name:"兰州",baseValue:25,coord:[103.8343,36.0611]},{name:"乌鲁木齐",baseValue:20,coord:[87.6177,43.7928]},{name:"呼和浩特",baseValue:15,coord:[111.6708,40.8183]},{name:"银川",baseValue:12,coord:[106.2586,38.468]},{name:"西宁",baseValue:10,coord:[101.7782,36.6171]},{name:"海口",baseValue:8,coord:[110.1999,20.0444]},{name:"拉萨",baseValue:5,coord:[91.1322,29.66]},{name:"沈阳",baseValue:68,coord:[123.4328,41.8051]},{name:"无锡",baseValue:82,coord:[120.3119,31.4912]},{name:"佛山",baseValue:78,coord:[113.1227,23.0288]},{name:"东莞",baseValue:72,coord:[113.7463,23.046]},{name:"泉州",baseValue:68,coord:[118.6754,24.8741]},{name:"温州",baseValue:65,coord:[120.6994,28.0014]},{name:"烟台",baseValue:62,coord:[121.4479,37.4638]},{name:"唐山",baseValue:58,coord:[118.1802,39.6309]},{name:"石家庄",baseValue:55,coord:[114.5149,38.0428]},{name:"南通",baseValue:52,coord:[120.8944,31.9802]},{name:"常州",baseValue:48,coord:[119.9742,31.8112]},{name:"潍坊",baseValue:45,coord:[119.1619,36.7068]},{name:"绍兴",baseValue:42,coord:[120.5821,30.012]},{name:"台州",baseValue:38,coord:[121.4286,28.6628]},{name:"嘉兴",baseValue:35,coord:[120.7509,30.7627]},{name:"金华",baseValue:32,coord:[119.6495,29.0895]},{name:"湖州",baseValue:28,coord:[120.0868,30.8673]},{name:"徐州",baseValue:25,coord:[117.1848,34.2618]},{name:"扬州",baseValue:22,coord:[119.4216,32.3932]},{name:"镇江",baseValue:18,coord:[119.4552,32.2044]},{name:"泰州",baseValue:15,coord:[119.9225,32.4556]},{name:"淮安",baseValue:12,coord:[119.1142,33.5994]},{name:"盐城",baseValue:10,coord:[120.1399,33.3777]},{name:"连云港",baseValue:8,coord:[119.2216,34.5967]},{name:"宿迁",baseValue:5,coord:[118.5535,33.7772]},{name:"淄博",baseValue:42,coord:[118.0479,36.8134]},{name:"临沂",baseValue:38,coord:[118.3515,35.1042]},{name:"济宁",baseValue:35,coord:[116.5871,35.4154]},{name:"菏泽",baseValue:30,coord:[115.4807,35.2339]},{name:"德州",baseValue:25,coord:[116.3575,36.4345]},{name:"聊城",baseValue:22,coord:[115.9845,36.4558]},{name:"滨州",baseValue:18,coord:[117.9683,37.4015]},{name:"东营",baseValue:15,coord:[118.6747,37.4345]},{name:"威海",baseValue:12,coord:[122.1204,37.5134]},{name:"日照",baseValue:10,coord:[119.5273,35.4165]},{name:"枣庄",baseValue:8,coord:[117.3235,34.8105]},{name:"保定",baseValue:48,coord:[115.4647,38.8739]},{name:"邯郸",baseValue:42,coord:[114.5388,36.6256]},{name:"秦皇岛",baseValue:38,coord:[119.6005,39.9425]},{name:"邢台",baseValue:32,coord:[114.5046,37.0458]},{name:"张家口",baseValue:28,coord:[114.8875,40.7675]},{name:"承德",baseValue:22,coord:[117.9239,40.4318]},{name:"沧州",baseValue:18,coord:[116.8386,38.3042]},{name:"廊坊",baseValue:15,coord:[116.6837,39.5381]},{name:"衡水",baseValue:12,coord:[115.6738,37.735]},{name:"大同",baseValue:10,coord:[113.3001,40.0894]},{name:"阳泉",baseValue:8,coord:[113.5807,37.852]},{name:"长治",baseValue:6,coord:[113.1163,36.1952]},{name:"晋城",baseValue:5,coord:[112.8513,35.4907]},{name:"鞍山",baseValue:38,coord:[122.9946,41.1088]},{name:"抚顺",baseValue:32,coord:[123.9572,41.8772]},{name:"本溪",baseValue:28,coord:[123.7675,41.2942]},{name:"丹东",baseValue:22,coord:[124.3542,40.0014]},{name:"锦州",baseValue:18,coord:[121.0707,41.0992]},{name:"营口",baseValue:15,coord:[122.2352,40.6676]},{name:"阜新",baseValue:12,coord:[121.6708,42.0118]},{name:"辽阳",baseValue:10,coord:[123.2369,41.2405]},{name:"盘锦",baseValue:8,coord:[122.0696,41.1242]},{name:"铁岭",baseValue:6,coord:[123.8445,42.2905]},{name:"朝阳",baseValue:5,coord:[120.4537,41.576]},{name:"葫芦岛",baseValue:4,coord:[120.8569,40.7557]},{name:"吉林",baseValue:12,coord:[126.5496,43.8378]},{name:"通化",baseValue:10,coord:[125.9396,41.7212]},{name:"白山",baseValue:8,coord:[126.427,41.9425]},{name:"松原",baseValue:6,coord:[124.826,45.1412]},{name:"白城",baseValue:4,coord:[122.8411,45.6396]},{name:"齐齐哈尔",baseValue:32,coord:[123.918,47.3528]},{name:"牡丹江",baseValue:28,coord:[129.6186,44.5828]},{name:"佳木斯",baseValue:22,coord:[130.3616,46.8096]},{name:"大庆",baseValue:18,coord:[125.104,46.5868]},{name:"鸡西",baseValue:15,coord:[130.9697,45.295]},{name:"鹤岗",baseValue:12,coord:[130.2977,47.352]},{name:"双鸭山",baseValue:10,coord:[131.1571,46.6435]},{name:"伊春",baseValue:8,coord:[128.8994,47.7247]},{name:"绥化",baseValue:6,coord:[126.9689,46.6376]},{name:"黑河",baseValue:4,coord:[127.4998,50.2496]},{name:"衢州",baseValue:28,coord:[118.859,28.97]},{name:"丽水",baseValue:22,coord:[119.9218,28.4519]},{name:"舟山",baseValue:18,coord:[122.2072,29.9855]},{name:"黄山",baseValue:15,coord:[118.3173,29.7092]},{name:"安庆",baseValue:12,coord:[117.0635,30.5228]},{name:"芜湖",baseValue:10,coord:[118.3762,31.3263]},{name:"马鞍山",baseValue:8,coord:[118.5069,31.6704]},{name:"铜陵",baseValue:6,coord:[117.8121,30.9455]},{name:"淮南",baseValue:5,coord:[116.9997,32.6255]},{name:"淮北",baseValue:4,coord:[116.7947,33.9717]},{name:"蚌埠",baseValue:3,coord:[117.3632,32.9397]},{name:"阜阳",baseValue:2,coord:[115.8205,32.9012]},{name:"漳州",baseValue:38,coord:[117.6472,24.5129]},{name:"莆田",baseValue:32,coord:[119.0078,25.4541]},{name:"宁德",baseValue:28,coord:[119.5472,26.6266]},{name:"南平",baseValue:22,coord:[118.1784,26.6356]},{name:"三明",baseValue:18,coord:[117.6389,26.2634]},{name:"龙岩",baseValue:15,coord:[117.0171,25.0783]},{name:"九江",baseValue:42,coord:[115.9928,29.712]},{name:"景德镇",baseValue:35,coord:[117.1784,29.2687]},{name:"萍乡",baseValue:28,coord:[113.8522,27.6229]},{name:"新余",baseValue:22,coord:[114.9167,27.8173]},{name:"鹰潭",baseValue:18,coord:[117.0692,28.2386]},{name:"赣州",baseValue:15,coord:[114.9353,25.8315]},{name:"吉安",baseValue:12,coord:[114.9861,27.1137]},{name:"宜春",baseValue:10,coord:[114.4166,27.8155]},{name:"抚州",baseValue:8,coord:[116.3583,27.9492]},{name:"上饶",baseValue:5,coord:[117.9435,28.4544]},{name:"洛阳",baseValue:62,coord:[112.4539,34.6197]},{name:"开封",baseValue:55,coord:[114.3076,34.7975]},{name:"安阳",baseValue:48,coord:[114.3881,36.0996]},{name:"新乡",baseValue:42,coord:[113.9268,35.3026]},{name:"焦作",baseValue:38,coord:[113.2383,35.2159]},{name:"许昌",baseValue:32,coord:[113.8522,34.0357]},{name:"平顶山",baseValue:28,coord:[113.1927,33.7662]},{name:"信阳",baseValue:22,coord:[114.0919,32.147]},{name:"南阳",baseValue:18,coord:[112.5285,32.9908]},{name:"商丘",baseValue:15,coord:[115.6505,34.437]},{name:"周口",baseValue:12,coord:[114.6968,33.6258]},{name:"驻马店",baseValue:10,coord:[114.0223,32.9802]},{name:"漯河",baseValue:8,coord:[114.0461,33.576]},{name:"宜昌",baseValue:58,coord:[111.2909,30.6918]},{name:"襄阳",baseValue:52,coord:[112.1226,32.0089]},{name:"荆州",baseValue:48,coord:[112.2397,30.3352]},{name:"荆门",baseValue:42,coord:[112.2044,31.0354]},{name:"鄂州",baseValue:38,coord:[114.8949,30.3844]},{name:"孝感",baseValue:32,coord:[113.9167,30.9262]},{name:"黄冈",baseValue:28,coord:[114.8722,30.4477]},{name:"黄石",baseValue:22,coord:[115.0386,30.1997]},{name:"咸宁",baseValue:18,coord:[114.3227,29.8414]},{name:"随州",baseValue:15,coord:[113.3826,31.6902]},{name:"十堰",baseValue:12,coord:[110.7879,32.629]},{name:"株洲",baseValue:58,coord:[113.1339,27.8274]},{name:"湘潭",baseValue:52,coord:[112.944,27.8297]},{name:"衡阳",baseValue:48,coord:[112.572,26.8932]},{name:"岳阳",baseValue:42,coord:[113.1329,29.3703]},{name:"常德",baseValue:38,coord:[111.6986,29.0317]},{name:"张家界",baseValue:32,coord:[110.4792,29.117]},{name:"益阳",baseValue:28,coord:[112.3552,28.5539]},{name:"郴州",baseValue:22,coord:[113.0317,25.7832]},{name:"永州",baseValue:18,coord:[111.6132,26.4204]},{name:"怀化",baseValue:15,coord:[109.9985,27.5494]},{name:"娄底",baseValue:12,coord:[111.9937,27.6998]},{name:"邵阳",baseValue:10,coord:[111.4677,27.239]},{name:"珠海",baseValue:58,coord:[113.5539,22.2247]},{name:"汕头",baseValue:52,coord:[116.6824,23.3535]},{name:"韶关",baseValue:42,coord:[113.5915,24.8013]},{name:"湛江",baseValue:38,coord:[110.3645,21.2749]},{name:"肇庆",baseValue:32,coord:[112.4716,23.0515]},{name:"江门",baseValue:28,coord:[113.0949,22.5751]},{name:"茂名",baseValue:22,coord:[110.9252,21.6628]},{name:"惠州",baseValue:18,coord:[114.4161,23.1115]},{name:"梅州",baseValue:15,coord:[116.1176,24.2888]},{name:"汕尾",baseValue:12,coord:[115.3647,22.7834]},{name:"河源",baseValue:10,coord:[114.6978,23.7463]},{name:"阳江",baseValue:8,coord:[111.9822,21.8579]},{name:"清远",baseValue:6,coord:[113.0515,23.7022]},{name:"中山",baseValue:5,coord:[113.3839,22.5211]},{name:"潮州",baseValue:4,coord:[116.6227,23.6566]},{name:"揭阳",baseValue:3,coord:[116.3728,23.5498]},{name:"云浮",baseValue:2,coord:[112.0439,22.9152]},{name:"柳州",baseValue:48,coord:[109.4286,24.3263]},{name:"桂林",baseValue:42,coord:[110.1799,25.2345]},{name:"梧州",baseValue:35,coord:[111.2791,23.4769]},{name:"北海",baseValue:28,coord:[109.1199,21.4733]},{name:"防城港",baseValue:22,coord:[108.3538,21.6147]},{name:"钦州",baseValue:18,coord:[108.6542,21.9742]},{name:"贵港",baseValue:15,coord:[109.5989,23.1113]},{name:"玉林",baseValue:12,coord:[110.1812,22.654]},{name:"百色",baseValue:8,coord:[106.6182,23.9023]},{name:"三亚",baseValue:42,coord:[109.5083,18.2479]},{name:"三沙",baseValue:35,coord:[112.3387,16.8313]},{name:"儋州",baseValue:28,coord:[109.5768,19.5175]},{name:"琼海",baseValue:22,coord:[110.4745,19.2584]},{name:"文昌",baseValue:18,coord:[110.7979,19.5432]},{name:"万宁",baseValue:15,coord:[110.3888,18.7958]},{name:"绵阳",baseValue:58,coord:[104.6794,31.467]},{name:"德阳",baseValue:52,coord:[104.3979,31.127]},{name:"攀枝花",baseValue:48,coord:[101.7186,26.5807]},{name:"广元",baseValue:42,coord:[105.8438,32.4354]},{name:"遂宁",baseValue:38,coord:[105.5928,30.5328]},{name:"内江",baseValue:32,coord:[105.0586,29.5803]},{name:"乐山",baseValue:28,coord:[103.7656,29.552]},{name:"南充",baseValue:22,coord:[106.1107,30.8378]},{name:"眉山",baseValue:18,coord:[103.8485,30.0758]},{name:"宜宾",baseValue:15,coord:[104.643,28.7517]},{name:"达州",baseValue:12,coord:[107.5021,31.2096]},{name:"六盘水",baseValue:48,coord:[104.846,26.5948]},{name:"遵义",baseValue:42,coord:[106.9373,27.7083]},{name:"安顺",baseValue:38,coord:[105.9476,25.9316]},{name:"毕节",baseValue:32,coord:[105.2848,27.3019]},{name:"铜仁",baseValue:28,coord:[109.1916,27.7311]},{name:"曲靖",baseValue:52,coord:[103.7967,25.49]},{name:"玉溪",baseValue:48,coord:[102.546,24.3527]},{name:"保山",baseValue:42,coord:[99.1617,25.112]},{name:"昭通",baseValue:38,coord:[103.7173,27.338]},{name:"丽江",baseValue:32,coord:[100.2259,26.8552]},{name:"大理",baseValue:18,coord:[100.2658,25.6894]},{name:"日喀则",baseValue:22,coord:[88.8851,29.267]},{name:"昌都",baseValue:18,coord:[97.1785,31.1369]},{name:"宝鸡",baseValue:52,coord:[107.2381,34.3616]},{name:"咸阳",baseValue:48,coord:[108.7093,34.3296]},{name:"渭南",baseValue:42,coord:[109.5097,34.5024]},{name:"铜川",baseValue:38,coord:[108.945,34.896]},{name:"延安",baseValue:32,coord:[109.4908,36.5965]},{name:"榆林",baseValue:28,coord:[109.7341,38.2853]},{name:"汉中",baseValue:22,coord:[107.0238,33.0677]},{name:"安康",baseValue:18,coord:[109.0293,32.6852]},{name:"嘉峪关",baseValue:42,coord:[98.2773,39.7723]},{name:"金昌",baseValue:38,coord:[102.1879,38.5142]},{name:"白银",baseValue:32,coord:[104.1386,36.5448]},{name:"天水",baseValue:28,coord:[105.7249,34.5809]},{name:"武威",baseValue:22,coord:[102.638,37.9331]},{name:"张掖",baseValue:18,coord:[100.4555,38.9258]},{name:"石嘴山",baseValue:38,coord:[106.3838,39.0133]},{name:"吴忠",baseValue:32,coord:[106.1994,37.9872]},{name:"固原",baseValue:28,coord:[106.2428,36.0102]},{name:"中卫",baseValue:22,coord:[105.1896,37.4994]},{name:"克拉玛依",baseValue:42,coord:[84.8695,45.5795]},{name:"吐鲁番",baseValue:38,coord:[89.184,42.9476]},{name:"哈密",baseValue:32,coord:[93.5135,42.8185]},{name:"包头",baseValue:42,coord:[109.8403,40.6572]},{name:"乌海",baseValue:35,coord:[106.8256,39.6542]},{name:"赤峰",baseValue:32,coord:[118.887,42.2578]},{name:"通辽",baseValue:28,coord:[122.2434,43.6174]},{name:"鄂尔多斯",baseValue:22,coord:[109.7813,39.6086]},{name:"呼伦贝尔",baseValue:18,coord:[119.7582,49.2122]}].map(Z=>({name:Z.name,value:Z.baseValue,coord:Z.coord,baseValue:Z.baseValue}))),g=kr(()=>[...m.value].sort((Z,D)=>D.value-Z.value).slice(0,10)),T=kr(()=>[...m.value].sort((Z,D)=>Z.value-D.value)[0]),x=kr(()=>Math.max(...m.value.map(Z=>Z.value))),_=kr(()=>Math.min(...m.value.map(Z=>Z.value))),b=kr(()=>{const Z=m.value.reduce((D,q)=>D+q.value,0);return Math.round(Z/m.value.length)}),w=Z=>Z>=150?"#c62828":Z>=100?"#ef6c00":Z>=60?"#f9a825":Z>=30?"#558b2f":"#00838f",A=Z=>{const D=Z*.15,q=(Math.random()-.5)*2*D;let Q=Z+q;return Q=Math.max(1,Math.min(200,Q)),Math.round(Q*10)/10},E=()=>{m.value=m.value.map(D=>({...D,value:A(D.baseValue)}));const Z=new Date;s.value=Z.toLocaleTimeString("zh-CN"),l.value=Z.toLocaleTimeString("zh-CN"),f(),U()},M=async()=>{a.value=!0,await new Promise(Z=>setTimeout(Z,500)),E(),a.value=!1},I=()=>{n.value=!n.value,n.value?C():B()},C=()=>{i&&clearInterval(i),i=window.setInterval(()=>{n.value&&E()},3e5)},B=()=>{i&&(clearInterval(i),i=null)},z=()=>{r&&r.setOption({geo3D:{viewControl:{distance:100,alpha:45,beta:0}}})},O=()=>{o.value=!o.value,r&&r.setOption({geo3D:{viewControl:{autoRotate:o.value,autoRotateSpeed:3}}})},U=()=>{if(!r)return;const Z=m.value.map(D=>({name:D.name,value:[...D.coord,D.value]}));r.setOption({series:[{data:Z}]})},j=()=>{if(!t.value)return;r=kl(t.value);const Z=m.value.map(q=>({name:q.name,value:[...q.coord,q.value]})),D={backgroundColor:"transparent",tooltip:{trigger:"item",backgroundColor:"rgba(0,0,0,0.85)",borderColor:"#667eea",borderWidth:1,padding:[12,16],textStyle:{color:"#fff",fontSize:14},formatter:q=>{if(q.value&&q.value.length>=3){const Q=w(q.value[2]);return`
            <div style="font-size:16px;font-weight:bold;margin-bottom:8px;color:${Q}">${q.name}</div>
            <div style="display:flex;justify-content:space-between;gap:20px;">
              <span>热点值:</span>
              <span style="font-weight:bold;color:${Q}">${q.value[2]}</span>
            </div>
            <div style="display:flex;justify-content:space-between;gap:20px;">
              <span>高度:</span>
              <span style="font-weight:bold;">${Math.round(q.value[2]*500)}m</span>
            </div>
          `}return q.name}},visualMap:{show:!0,min:0,max:200,inRange:{color:["#1a237e","#0d47a1","#00838f","#00695c","#558b2f","#f9a825","#ef6c00","#c62828"]},calculable:!0,textStyle:{color:"rgba(255,255,255,0.85)",fontSize:12},right:20,top:20,orient:"vertical",itemWidth:12,itemHeight:140,text:["高","低"],textGap:10},geo3D:{map:"china",roam:!0,regionHeight:4,itemStyle:{color:"#1e2a4a",opacity:1,borderWidth:.8,borderColor:"rgba(100, 180, 255, 0.4)"},emphasis:{itemStyle:{color:"#2a4a7a",opacity:1},label:{show:!0,formatter:q=>q.name||"",position:"top",textStyle:{color:"#fff",fontSize:14,fontWeight:"bold",textBorderColor:"rgba(0,0,0,0.8)",textBorderWidth:2}}},light:{main:{intensity:1.2,shadow:!0,shadowQuality:"high",alpha:35,beta:60},ambient:{intensity:.6}},viewControl:{distance:100,alpha:45,beta:0,minAlpha:5,maxAlpha:90,autoRotate:!1,rotateSensitivity:2,zoomSensitivity:1.5,panSensitivity:2},shading:"color",temporalSuperSampling:{enable:!0},postEffect:{enable:!0,bloom:{enable:!0,intensity:.08},SSAO:{enable:!0,radius:3,intensity:.8}},label:{show:!1}},series:[{type:"bar3D",coordinateSystem:"geo3D",data:Z,shading:"lambert",barSize:1.8,bevel:!0,bevelSize:.3,minHeight:.5,silent:!1,itemStyle:{opacity:.95},label:{show:!0,formatter:q=>q.value[2]>=60?q.name:"",position:"top",textStyle:{color:"#fff",fontSize:9,fontWeight:"bold",textBorderColor:"rgba(0,0,0,0.9)",textBorderWidth:2}},emphasis:{itemStyle:{color:"#ff5722"},label:{show:!0,formatter:q=>`${q.name}
${q.value[2]}`,textStyle:{fontSize:14}}}}]};fetch("https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json").then(q=>{if(!q.ok)throw new Error("Network response was not ok");return q.json()}).then(q=>{dn("china",q),r==null||r.setOption(D),E()}).catch(q=>{console.warn("Failed to load map from remote, using fallback:",q),fetch("/china.json").then(Q=>Q.json()).then(Q=>{dn("china",Q),r==null||r.setOption(D),E()}).catch(()=>{dn("china",Y),r==null||r.setOption(D),E()})})},Y={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"中国"},geometry:{type:"Polygon",coordinates:[[[73.44696,18.1977],[73.44696,53.5579],[134.7685,53.5579],[134.7685,18.1977],[73.44696,18.1977]]]}}]},k=()=>{r==null||r.resize()};return Js(()=>{j(),C(),window.addEventListener("resize",k)}),el(()=>{B(),window.removeEventListener("resize",k),r==null||r.dispose()}),(Z,D)=>{var q,Q;return Rt(),Ot("div",Pd,[X("div",Nd,[D[5]||(D[5]=X("h2",null,"数字沙盘 - 3D中国城市热点立体视图",-1)),X("div",Rd,[X("div",{class:Yt(["live-indicator",{active:n.value}])},[D[3]||(D[3]=X("span",{class:"live-dot"},null,-1)),X("span",null,pe(n.value?"实时更新中":"已暂停"),1)],2),X("div",Od,[X("span",null,"上次更新: "+pe(s.value),1)]),X("button",{class:"toggle-btn",onClick:I},pe(n.value?"暂停":"开始"),1),X("button",{class:"refresh-btn",onClick:M},[X("span",{class:Yt(["refresh-icon",{spinning:a.value}])},"↻",2),D[4]||(D[4]=tl(" 刷新 ",-1))])])]),X("div",Id,[D[6]||(D[6]=X("div",{class:"ticker-label"},"📰 实时热点",-1)),X("div",Bd,[X("div",{class:"ticker-scroll",style:hn({animationPlayState:n.value?"running":"paused"})},[(Rt(!0),Ot(cn,null,fn(h.value,(J,oe)=>(Rt(),Ot("span",{key:oe,class:"news-item",onClick:ie=>v(J)},[X("span",{class:Yt(["news-category",J.category])},pe(J.categoryText),3),X("span",Vd,pe(J.title),1),X("span",zd,"👁️ "+pe(J.views)+"万",1)],8,Fd))),128))],4)])]),X("div",Gd,[X("div",Ud,[X("div",{ref_key:"chartRef",ref:t,class:"chart-container"},null,512),D[9]||(D[9]=X("div",{class:"chart-overlay"},[X("div",{class:"overlay-title"},"CityPulse 城市热点监测"),X("div",{class:"overlay-subtitle"},"实时数据 · 全国覆盖 · 3D可视化")],-1)),X("div",Hd,[X("div",kd,[D[7]||(D[7]=X("span",{class:"hot-icon"},"🔥",-1)),D[8]||(D[8]=X("span",null,"热搜榜",-1)),X("span",Wd,pe(l.value),1)]),X("div",Xd,[(Rt(!0),Ot(cn,null,fn(d.value,(J,oe)=>(Rt(),Ot("div",{key:oe,class:Yt(["hot-search-item","rank-"+(oe+1)])},[X("span",jd,pe(oe+1),1),X("span",Zd,pe(J.title),1),X("span",qd,pe(J.heat),1),X("span",{class:Yt(["hot-trend",J.trend>0?"up":"down"])},pe(J.trend>0?"↑":"↓")+pe(Math.abs(J.trend)),3)],2))),128))])])]),X("div",Yd,[X("div",Kd,[D[10]||(D[10]=X("h3",null,"🔥 热点排名 TOP 10",-1)),X("div",$d,[(Rt(!0),Ot(cn,null,fn(g.value,(J,oe)=>(Rt(),Ot("div",{key:J.name,class:Yt(["city-item","rank-"+(oe+1)])},[X("div",Qd,pe(oe+1),1),X("div",Jd,[X("span",ev,pe(J.name),1),X("span",{class:"city-value",style:hn({color:w(J.value)})},pe(J.value),5)]),X("div",tv,[X("div",{class:"city-bar-fill",style:hn({width:J.value/x.value*100+"%",backgroundColor:w(J.value)})},null,4)])],2))),128))])]),X("div",rv,[D[15]||(D[15]=X("h3",null,"📊 实时统计",-1)),X("div",iv,[X("div",nv,[D[11]||(D[11]=X("span",{class:"stat-label"},"监测城市",-1)),X("span",av,pe(m.value.length),1)]),X("div",ov,[D[12]||(D[12]=X("span",{class:"stat-label"},"平均热度",-1)),X("span",sv,pe(b.value),1)]),X("div",lv,[D[13]||(D[13]=X("span",{class:"stat-label"},"最高热度",-1)),X("span",uv,pe(x.value),1),X("span",hv,pe((q=g.value[0])==null?void 0:q.name),1)]),X("div",cv,[D[14]||(D[14]=X("span",{class:"stat-label"},"最低热度",-1)),X("span",fv,pe(_.value),1),X("span",dv,pe((Q=T.value)==null?void 0:Q.name),1)])])]),D[18]||(D[18]=rl('<div class="panel-section" data-v-8fc5d4fc><h3 data-v-8fc5d4fc>🎨 图例说明</h3><div class="legend" data-v-8fc5d4fc><div class="legend-item" data-v-8fc5d4fc><div class="legend-color hot" data-v-8fc5d4fc></div><span data-v-8fc5d4fc>高热点区域 (150+)</span></div><div class="legend-item" data-v-8fc5d4fc><div class="legend-color medium-high" data-v-8fc5d4fc></div><span data-v-8fc5d4fc>中高热点 (100-150)</span></div><div class="legend-item" data-v-8fc5d4fc><div class="legend-color medium" data-v-8fc5d4fc></div><span data-v-8fc5d4fc>中热点区域 (60-100)</span></div><div class="legend-item" data-v-8fc5d4fc><div class="legend-color low" data-v-8fc5d4fc></div><span data-v-8fc5d4fc>低热点区域 (0-60)</span></div></div></div>',1)),X("div",vv,[D[16]||(D[16]=X("h3",null,"⚙️ 视角控制",-1)),X("div",pv,[X("button",{onClick:z,class:"view-btn"},"重置视角"),X("button",{onClick:O,class:"view-btn"},pe(o.value?"停止旋转":"自动旋转"),1)]),D[17]||(D[17]=X("div",{class:"height-explain"},[X("p",null,"💡 热点值越高，城市地块上升越高"),X("p",null,"🖱️ 左键旋转 · 滚轮缩放 · 右键平移")],-1))])])]),u.value?(Rt(),Ot("div",{key:0,class:"news-modal",onClick:D[2]||(D[2]=J=>u.value=null)},[X("div",{class:"modal-content",onClick:D[1]||(D[1]=il(()=>{},["stop"]))},[X("div",mv,[X("span",{class:Yt(["modal-category",u.value.category])},pe(u.value.categoryText),3),X("h3",null,pe(u.value.title),1),X("button",{class:"modal-close",onClick:D[0]||(D[0]=J=>u.value=null)},"×")]),X("div",gv,[X("div",_v,[X("span",null,"👁️ 浏览量: "+pe(u.value.views)+"万",1),X("span",null,"💬 评论: "+pe(u.value.comments),1),X("span",null,"🔄 转发: "+pe(u.value.shares),1)]),X("div",yv,[X("span",null,"📍 热点区域: "+pe(u.value.region),1)]),X("p",xv,pe(u.value.description),1)])])])):nl("",!0)])}}}),Sv=al(Tv,[["__scopeId","data-v-8fc5d4fc"]]);export{Sv as default};
