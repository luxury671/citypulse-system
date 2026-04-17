import{C as Qs,$ as Js,O as gt,w as kr,a as el,U as tl,v as Rt,M as X,G as Yt,k as me,b as rl,c as la,K as ua,T as ha,N as il,F as al,d as nl,R as Ot}from"./index-BJoSMrzo.js";import{k as ol,R as ca,d as He,H as sl,i as ll,a as ul,s as hl,Y as Uo,M as cl,I as dl,b as fl,m as Ir,u as he,j as kt,S as Ho,F as ko,c as pi,e as Wo,f as Fi,B as Vi,g as Xo,U as jo,C as $i,h as Mr,l as mi,n as Tt,o as rn,p as pl,O as wn,q as ml,D as wt,w as gl,V as ft,r as pt,L as _l,t as bi,A as br,J as Ua,v as Qi,x as Sn,y as qo,E as Mn,z as vl,G as St,K as En,N as yl,P as xl,Q as bl,T as Tl,W as Ha,X as wl,Z as An,_ as Sl,$ as Ml,a0 as El,a1 as Al,a2 as Ll,a3 as Cl,a4 as Dl,a5 as Pl,a6 as Ln,a7 as Nl,a8 as Rl,a9 as Ol,aa as Il,ab as Bl,ac as Fl,ad as Vl,ae as zl,af as Gl,ag as Ul,ah as Hl,ai as Zo,aj as kl}from"./index-C8fl__Ak-e6nhRDZk.js";function Wl(e){return Cl(null,e)}var an={isDimensionStacked:Ll,enableDataStack:El,getStackedDimension:Al};function nn(e,t){var r=t;t instanceof Mr||(r=new Mr(t));var i=Fl(r);return i.setExtent(e[0],e[1]),Vl(i,r),i}function Xl(e){bl(e,Tl)}He([sl,ll]);He(ul);function Cn(e,t,r){typeof t=="object"&&(r=t,t=null);var i=this,a;if(!(e instanceof Function)){a=[];for(var n in e)e.hasOwnProperty(n)&&a.push(n)}var o=function(l){if(i.apply(this,arguments),e instanceof Function?Dn(this,e.call(this,l)):jl(this,e,a),this.constructor===o)for(var u=o.__initializers__,h=0;h<u.length;h++)u[h].apply(this,arguments)};o.__super__=i,i.__initializers__?o.__initializers__=i.__initializers__.slice():o.__initializers__=[],t&&o.__initializers__.push(t);var s=function(){};return s.prototype=i.prototype,o.prototype=new s,o.prototype.constructor=o,Dn(o.prototype,r),o.extend=i.extend,o.derive=i.extend,o}function Dn(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function jl(e,t,r){for(var i=0;i<r.length;i++){var a=r[i];e[a]=t[a]}}const ql={extend:Cn,derive:Cn};function Zl(e,t){this.action=e,this.context=t}var on={trigger:function(e){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,i=-1,a=arguments;switch(a.length){case 1:for(;++i<r;)t[i].action.call(t[i].context);return;case 2:for(;++i<r;)t[i].action.call(t[i].context,a[1]);return;case 3:for(;++i<r;)t[i].action.call(t[i].context,a[1],a[2]);return;case 4:for(;++i<r;)t[i].action.call(t[i].context,a[1],a[2],a[3]);return;case 5:for(;++i<r;)t[i].action.call(t[i].context,a[1],a[2],a[3],a[4]);return;default:for(;++i<r;)t[i].action.apply(t[i].context,Array.prototype.slice.call(a,1));return}}},on:function(e,t,r){if(!(!e||!t)){var i=this.__handlers__||(this.__handlers__={});if(!i[e])i[e]=[];else if(this.has(e,t))return;var a=new Zl(t,r||this);return i[e].push(a),this}},once:function(e,t,r){if(!e||!t)return;var i=this;function a(){i.off(e,a),t.apply(this,arguments)}return this.on(e,a,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var i=r[e],a=[],n=0;n<i.length;n++)t&&i[n].action!==t&&a.push(i[n]);r[e]=a}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var i=r[e],a=0;a<i.length;a++)if(i[a].action===t)return!0}},Yl=0,Kl=Array.prototype,$l=Kl.forEach,we={genGUID:function(){return++Yl},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),i=t.split("/"),a=r[0];a==="."||a==="..";)a===".."&&i.pop(),r.shift(),a=r[0];return i.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var a=r[i];e[a]=t[a]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var a=r[i];e[a]==null&&(e[a]=t[a])}return e},each:function(e,t,r){if(e&&t)if(e.forEach&&e.forEach===$l)e.forEach(t,r);else if(e.length===+e.length)for(var i=0,a=e.length;i<a;i++)t.call(r,e[i],i,e);else for(var n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(we.isObject(e)){if(we.isArray(e))return e.slice();if(we.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return we.extend({},e)}else return e}},ke=function(){this.__uid__=we.genGUID()};ke.__initializers__=[function(e){we.extend(this,e)}];we.extend(ke,ql);we.extend(ke.prototype,on);var Pn=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],Nn=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function Ql(e){for(var t={},r={},i=0;i<Pn.length;i++){var a=Pn[i];o(a)}for(var i=0;i<Nn.length;i++){var n=Nn[i];r[n]=e.getParameter(e[n])}this.getExtension=function(s){return s in t||o(s),t[s]},this.getParameter=function(s){return r[s]};function o(s){if(e.getExtension){var l=e.getExtension(s);l||(l=e.getExtension("MOZ_"+s)),l||(l=e.getExtension("WEBKIT_"+s)),t[s]=l}}}const D={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CW:2304,CCW:2305,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_2D:3553,TEXTURE_CUBE_MAP:34067,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FRAMEBUFFER:36160,RENDERBUFFER:36161,DEPTH_STENCIL:34041,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306};function Jl(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var i=r.loaded/r.total;e.onprogress(i,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}const eu={get:Jl};var da,se={};se.supportWebGL=function(){if(da==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{da=!1}return da};se.Int8Array=typeof Int8Array>"u"?Array:Int8Array;se.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;se.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;se.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;se.Int16Array=typeof Int16Array>"u"?Array:Int16Array;se.Float32Array=typeof Float32Array>"u"?Array:Float32Array;se.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var ir={};typeof window<"u"?ir=window:typeof global<"u"&&(ir=global);se.requestAnimationFrame=ir.requestAnimationFrame||ir.msRequestAnimationFrame||ir.mozRequestAnimationFrame||ir.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};se.createCanvas=function(){return document.createElement("canvas")};se.createImage=function(){return new ir.Image};se.request={get:eu.get};se.addEventListener=function(e,t,r,i){e.addEventListener(t,r,i)};se.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};var Ve=function(){this.head=null,this.tail=null,this._length=0};Ve.prototype.insert=function(e){var t=new Ve.Entry(e);return this.insertEntry(t),t};Ve.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,i=0;r&&i!=e;)r=r.next,i++;if(r){var a=new Ve.Entry(t),n=r.prev;n?(n.next=a,a.prev=n):this.head=a,a.next=r,r.prev=a}else this.insert(t)}};Ve.prototype.insertBeforeEntry=function(e,t){var r=new Ve.Entry(e),i=t.prev;i?(i.next=r,r.prev=i):this.head=r,r.next=t,t.prev=r,this._length++};Ve.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};Ve.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};Ve.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};Ve.prototype.getHead=function(){if(this.head)return this.head.value};Ve.prototype.getTail=function(){if(this.tail)return this.tail.value};Ve.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};Ve.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};Ve.prototype.length=function(){return this._length};Ve.prototype.isEmpty=function(){return this._length===0};Ve.prototype.forEach=function(e,t){for(var r=this.head,i=0,a=typeof t<"u";r;)a?e.call(t,r.value,i):e(r.value,i),r=r.next,i++};Ve.prototype.clear=function(){this.tail=this.head=null,this._length=0};Ve.Entry=function(e){this.value=e,this.next=null,this.prev=null};var cr=function(e){this._list=new Ve,this._map={},this._maxSize=e||10};cr.prototype.setMaxSize=function(e){this._maxSize=e};cr.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var i=this._list.head;this._list.remove(i),delete this._map[i.key]}var a=this._list.insert(t);a.key=e,this._map[e]=a}};cr.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};cr.prototype.remove=function(e){var t=this._map[e];typeof t<"u"&&(delete this._map[e],this._list.remove(t))};cr.prototype.clear=function(){this._list.clear(),this._map={}};var ye={},Rn={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function ct(e){return e=Math.round(e),e<0?0:e>255?255:e}function tu(e){return e=Math.round(e),e<0?0:e>360?360:e}function ai(e){return e<0?0:e>1?1:e}function fa(e){return e.length&&e.charAt(e.length-1)==="%"?ct(parseFloat(e)/100*255):ct(parseInt(e,10))}function Er(e){return e.length&&e.charAt(e.length-1)==="%"?ai(parseFloat(e)/100):ai(parseFloat(e))}function pa(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function Gt(e,t,r){return e+(t-e)*r}function ht(e,t,r,i,a){return e[0]=t,e[1]=r,e[2]=i,e[3]=a,e}function ka(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var Yo=new cr(20),Ti=null;function dr(e,t){Ti&&ka(Ti,t),Ti=Yo.put(e,Ti||t.slice())}ye.parse=function(e,t){if(e){t=t||[];var r=Yo.get(e);if(r)return ka(t,r);e=e+"";var i=e.replace(/ /g,"").toLowerCase();if(i in Rn)return ka(t,Rn[i]),dr(e,t),t;if(i.charAt(0)==="#"){if(i.length===4){var a=parseInt(i.substr(1),16);if(!(a>=0&&a<=4095)){ht(t,0,0,0,1);return}return ht(t,(a&3840)>>4|(a&3840)>>8,a&240|(a&240)>>4,a&15|(a&15)<<4,1),dr(e,t),t}else if(i.length===7){var a=parseInt(i.substr(1),16);if(!(a>=0&&a<=16777215)){ht(t,0,0,0,1);return}return ht(t,(a&16711680)>>16,(a&65280)>>8,a&255,1),dr(e,t),t}return}var n=i.indexOf("("),o=i.indexOf(")");if(n!==-1&&o+1===i.length){var s=i.substr(0,n),l=i.substr(n+1,o-(n+1)).split(","),u=1;switch(s){case"rgba":if(l.length!==4){ht(t,0,0,0,1);return}u=Er(l.pop());case"rgb":if(l.length!==3){ht(t,0,0,0,1);return}return ht(t,fa(l[0]),fa(l[1]),fa(l[2]),u),dr(e,t),t;case"hsla":if(l.length!==4){ht(t,0,0,0,1);return}return l[3]=Er(l[3]),Wa(l,t),dr(e,t),t;case"hsl":if(l.length!==3){ht(t,0,0,0,1);return}return Wa(l,t),dr(e,t),t;default:return}}ht(t,0,0,0,1)}};ye.parseToFloat=function(e,t){if(t=ye.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function Wa(e,t){var r=(parseFloat(e[0])%360+360)%360/360,i=Er(e[1]),a=Er(e[2]),n=a<=.5?a*(i+1):a+i-a*i,o=a*2-n;return t=t||[],ht(t,ct(pa(o,n,r+1/3)*255),ct(pa(o,n,r)*255),ct(pa(o,n,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function ru(e){if(e){var t=e[0]/255,r=e[1]/255,i=e[2]/255,a=Math.min(t,r,i),n=Math.max(t,r,i),o=n-a,s=(n+a)/2,l,u;if(o===0)l=0,u=0;else{s<.5?u=o/(n+a):u=o/(2-n-a);var h=((n-t)/6+o/2)/o,c=((n-r)/6+o/2)/o,f=((n-i)/6+o/2)/o;t===n?l=f-c:r===n?l=1/3+h-f:i===n&&(l=2/3+c-h),l<0&&(l+=1),l>1&&(l-=1)}var d=[l*360,u,s];return e[3]!=null&&d.push(e[3]),d}}ye.lift=function(e,t){var r=ye.parse(e);if(r){for(var i=0;i<3;i++)t<0?r[i]=r[i]*(1-t)|0:r[i]=(255-r[i])*t+r[i]|0;return ye.stringify(r,r.length===4?"rgba":"rgb")}};ye.toHex=function(e){var t=ye.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};ye.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var i=e*(t.length-1),a=Math.floor(i),n=Math.ceil(i),o=t[a],s=t[n],l=i-a;return r[0]=ct(Gt(o[0],s[0],l)),r[1]=ct(Gt(o[1],s[1],l)),r[2]=ct(Gt(o[2],s[2],l)),r[3]=ai(Gt(o[3],s[3],l)),r}};ye.fastMapToColor=ye.fastLerp;ye.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var i=e*(t.length-1),a=Math.floor(i),n=Math.ceil(i),o=ye.parse(t[a]),s=ye.parse(t[n]),l=i-a,u=ye.stringify([ct(Gt(o[0],s[0],l)),ct(Gt(o[1],s[1],l)),ct(Gt(o[2],s[2],l)),ai(Gt(o[3],s[3],l))],"rgba");return r?{color:u,leftIndex:a,rightIndex:n,value:i}:u}};ye.mapToColor=ye.lerp;ye.modifyHSL=function(e,t,r,i){if(e=ye.parse(e),e)return e=ru(e),t!=null&&(e[0]=tu(t)),r!=null&&(e[1]=Er(r)),i!=null&&(e[2]=Er(i)),ye.stringify(Wa(e),"rgba")};ye.modifyAlpha=function(e,t){if(e=ye.parse(e),e&&t!=null)return e[3]=ai(t),ye.stringify(e,"rgba")};ye.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};var iu=ye.parseToFloat,ma={};function On(e){var t=Object.keys(e);t.sort();for(var r=[],i=0;i<t.length;i++){var a=t[i],n=e[a];n===null?r.push(a):r.push(a+" "+n.toString())}return r.join(`
`)}function au(e,t,r){r.sort();for(var i=[],a=0;a<r.length;a++){var n=r[a];i.push(n)}var o=On(e)+`
`+On(t)+`
`+i.join(`
`);if(ma[o])return ma[o];var s=we.genGUID();return ma[o]=s,s}var ot=ke.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=iu(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var i=e[r];this.setUniform(r,i)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var i=this.uniforms;this._enabledUniforms=Object.keys(i),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var h=this.uniforms[u].type;return h==="t"||h==="tv"},this);var a=this.vertexDefines,n=this.fragmentDefines;if(this.vertexDefines=we.clone(e.vertexDefines),this.fragmentDefines=we.clone(e.fragmentDefines),t){for(var o in r)i[o]&&(i[o].value=r[o].value);we.defaults(this.vertexDefines,a),we.defaults(this.fragmentDefines,n)}var s={};for(var l in e.textures)s[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=we.clone(this.vertexDefines),e.fragmentDefines=we.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var i=this.vertexDefines,a=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r??null,(e==="vertex"||e==="both")&&i[t]!==r&&(i[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&a[t]!==r&&(a[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=r.enabled;i||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=!r.enabled;i||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=au(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),Ii=1e-6,We=Array,Tr=Math.random,V={};V.create=function(){var e=new We(2);return e[0]=0,e[1]=0,e};V.clone=function(e){var t=new We(2);return t[0]=e[0],t[1]=e[1],t};V.fromValues=function(e,t){var r=new We(2);return r[0]=e,r[1]=t,r};V.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};V.set=function(e,t,r){return e[0]=t,e[1]=r,e};V.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};V.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};V.sub=V.subtract;V.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};V.mul=V.multiply;V.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};V.div=V.divide;V.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};V.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};V.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};V.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e};V.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)};V.dist=V.distance;V.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i};V.sqrDist=V.squaredDistance;V.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};V.len=V.length;V.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};V.sqrLen=V.squaredLength;V.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};V.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};V.normalize=function(e,t){var r=t[0],i=t[1],a=r*r+i*i;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a),e};V.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};V.cross=function(e,t,r){var i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e};V.lerp=function(e,t,r,i){var a=t[0],n=t[1];return e[0]=a+i*(r[0]-a),e[1]=n+i*(r[1]-n),e};V.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};V.transformMat2=function(e,t,r){var i=t[0],a=t[1];return e[0]=r[0]*i+r[2]*a,e[1]=r[1]*i+r[3]*a,e};V.transformMat2d=function(e,t,r){var i=t[0],a=t[1];return e[0]=r[0]*i+r[2]*a+r[4],e[1]=r[1]*i+r[3]*a+r[5],e};V.transformMat3=function(e,t,r){var i=t[0],a=t[1];return e[0]=r[0]*i+r[3]*a+r[6],e[1]=r[1]*i+r[4]*a+r[7],e};V.transformMat4=function(e,t,r){var i=t[0],a=t[1];return e[0]=r[0]*i+r[4]*a+r[12],e[1]=r[1]*i+r[5]*a+r[13],e};V.forEach=function(){var e=V.create();return function(t,r,i,a,n,o){var s,l;for(r||(r=2),i||(i=0),a?l=Math.min(a*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],n(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}}();var $=function(e,t){e=e||0,t=t||0,this.array=V.fromValues(e,t),this._dirty=!0};$.prototype={constructor:$,add:function(e){return V.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new $(this.x,this.y)},copy:function(e){return V.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return V.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return V.dist(this.array,e.array)},distance:function(e){return V.distance(this.array,e.array)},div:function(e){return V.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return V.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return V.dot(this.array,e.array)},len:function(){return V.len(this.array)},length:function(){return V.length(this.array)},lerp:function(e,t,r){return V.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return V.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return V.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return V.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return V.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return V.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return V.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return V.random(this.array,e),this._dirty=!0,this},scale:function(e){return V.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return V.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return V.sqrDist(this.array,e.array)},squaredDistance:function(e){return V.squaredDistance(this.array,e.array)},sqrLen:function(){return V.sqrLen(this.array)},squaredLength:function(){return V.squaredLength(this.array)},sub:function(e){return V.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return V.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return V.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return V.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return V.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return V.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var In=$.prototype;Object.defineProperty(In,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(In,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}$.add=function(e,t,r){return V.add(e.array,t.array,r.array),e._dirty=!0,e};$.set=function(e,t,r){return V.set(e.array,t,r),e._dirty=!0,e};$.copy=function(e,t){return V.copy(e.array,t.array),e._dirty=!0,e};$.cross=function(e,t,r){return V.cross(e.array,t.array,r.array),e._dirty=!0,e};$.dist=function(e,t){return V.distance(e.array,t.array)};$.distance=$.dist;$.div=function(e,t,r){return V.divide(e.array,t.array,r.array),e._dirty=!0,e};$.divide=$.div;$.dot=function(e,t){return V.dot(e.array,t.array)};$.len=function(e){return V.length(e.array)};$.lerp=function(e,t,r,i){return V.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};$.min=function(e,t,r){return V.min(e.array,t.array,r.array),e._dirty=!0,e};$.max=function(e,t,r){return V.max(e.array,t.array,r.array),e._dirty=!0,e};$.mul=function(e,t,r){return V.multiply(e.array,t.array,r.array),e._dirty=!0,e};$.multiply=$.mul;$.negate=function(e,t){return V.negate(e.array,t.array),e._dirty=!0,e};$.normalize=function(e,t){return V.normalize(e.array,t.array),e._dirty=!0,e};$.random=function(e,t){return V.random(e.array,t),e._dirty=!0,e};$.scale=function(e,t,r){return V.scale(e.array,t.array,r),e._dirty=!0,e};$.scaleAndAdd=function(e,t,r,i){return V.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};$.sqrDist=function(e,t){return V.sqrDist(e.array,t.array)};$.squaredDistance=$.sqrDist;$.sqrLen=function(e){return V.sqrLen(e.array)};$.squaredLength=$.sqrLen;$.sub=function(e,t,r){return V.subtract(e.array,t.array,r.array),e._dirty=!0,e};$.subtract=$.sub;$.transformMat2=function(e,t,r){return V.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat2d=function(e,t,r){return V.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat3=function(e,t,r){return V.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat4=function(e,t,r){return V.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};var Bn=1,Fn=2,ga=3,Vn={};function nu(e){for(var t=e.split(`
`),r=0,i=t.length;r<i;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function zn(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),nu(r)].join(`
`)}var Gn=new se.Float32Array(16),ou=ke.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,i){var a=this._locations,n=a[r];if(n==null)return!1;switch(t){case"m4":if(!(i instanceof Float32Array)){for(var o=0;o<i.length;o++)Gn[o]=i[o];i=Gn}e.uniformMatrix4fv(n,!1,i);break;case"2i":e.uniform2i(n,i[0],i[1]);break;case"2f":e.uniform2f(n,i[0],i[1]);break;case"3i":e.uniform3i(n,i[0],i[1],i[2]);break;case"3f":e.uniform3f(n,i[0],i[1],i[2]);break;case"4i":e.uniform4i(n,i[0],i[1],i[2],i[3]);break;case"4f":e.uniform4f(n,i[0],i[1],i[2],i[3]);break;case"1i":e.uniform1i(n,i);break;case"1f":e.uniform1f(n,i);break;case"1fv":e.uniform1fv(n,i);break;case"1iv":e.uniform1iv(n,i);break;case"2iv":e.uniform2iv(n,i);break;case"2fv":e.uniform2fv(n,i);break;case"3iv":e.uniform3iv(n,i);break;case"3fv":e.uniform3fv(n,i);break;case"4iv":e.uniform4iv(n,i);break;case"4fv":e.uniform4fv(n,i);break;case"m2":case"m2v":e.uniformMatrix2fv(n,!1,i);break;case"m3":case"m3v":e.uniformMatrix3fv(n,!1,i);break;case"m4v":if(Array.isArray(i)&&Array.isArray(i[0])){for(var s=new se.Float32Array(i.length*16),l=0,o=0;o<i.length;o++)for(var u=i[o],h=0;h<16;h++)s[l++]=u[h];e.uniformMatrix4fv(n,!1,s)}else e.uniformMatrix4fv(n,!1,i);break}return!0},setUniformOfSemantic:function(e,t,r){var i=this.uniformSemantics[t];return i?this.setUniform(e,i.type,i.symbol,r):!1},enableAttributes:function(e,t,r){var i=e.gl,a=this._program,n=this._locations,o;r?o=r.__enabledAttributeList:o=Vn[e.__uid__],o||(r?o=r.__enabledAttributeList=[]:o=Vn[e.__uid__]=[]);for(var s=[],l=0;l<t.length;l++){var u=t[l];if(!this.attributes[u]){s[l]=-1;continue}var h=n[u];if(h==null){if(h=i.getAttribLocation(a,u),h===-1){s[l]=-1;continue}n[u]=h}s[l]=h,o[h]?o[h]=Fn:o[h]=Bn}for(var l=0;l<o.length;l++)switch(o[l]){case Bn:i.enableVertexAttribArray(l),o[l]=ga;break;case Fn:o[l]=ga;break;case ga:i.disableVertexAttribArray(l),o[l]=0;break}return s},getAttribLocation:function(e,t){var r=this._locations,i=r[t];return i==null&&(i=e.getAttribLocation(this._program,t),r[t]=i),i},buildProgram:function(e,t,r,i){var a=e.createShader(e.VERTEX_SHADER),n=e.createProgram();e.shaderSource(a,r),e.compileShader(a);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,i),e.compileShader(o);var s=zn(e,a,r);if(s||(s=zn(e,o,i),s))return s;if(e.attachShader(n,a),e.attachShader(n,o),t.attributeSemantics.POSITION)e.bindAttribLocation(n,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(n,0,l[0])}if(e.linkProgram(n),e.deleteShader(a),e.deleteShader(o),this._program=n,this.vertexCode=r,this.fragmentCode=i,!e.getProgramParameter(n,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(n);for(var u=0;u<t.uniforms.length;u++){var h=t.uniforms[u];this._locations[h]=e.getUniformLocation(n,h)}}}),su=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Un(e,t,r){function i(o,s,l,u){var h="";isNaN(s)&&(s in t?s=t[s]:s=a[s]),isNaN(l)&&(l in t?l=t[l]:l=a[l]);for(var c=parseInt(s);c<parseInt(l);c++)h+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,c.toFixed(1)).replace(/_idx_/g,c)+"}";return h}var a={};for(var n in r)a[n+"_COUNT"]=r[n];return e.replace(su,i)}function _a(e,t,r){var i=[];if(t)for(var a in t){var n=t[a];n>0&&i.push("#define "+a.toUpperCase()+"_COUNT "+n)}if(r)for(var o=0;o<r.length;o++){var s=r[o];i.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var l=e[s];l===null?i.push("#define "+s):i.push("#define "+s+" "+l.toString())}return i.join(`
`)}function lu(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function uu(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function Ko(e){this._renderer=e,this._cache={}}Ko.prototype.getProgram=function(e,t,r){var i=this._cache,a=e.isSkinnedMesh&&e.isSkinnedMesh(),n=e.isInstancedMesh&&e.isInstancedMesh(),o="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(o+="se"+r.getProgramKey(e.lightGroup)),a&&(o+=",sk"+e.joints.length),n&&(o+=",is");var v=i[o];if(v)return v;var s=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,u=l.gl,h=t.getEnabledTextures(),c="";if(a){var f={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(f.USE_SKIN_MATRICES_TEXTURE=null),c+=`
`+_a(f)+`
`}n&&(c+=`
#define INSTANCING
`);var d=c+_a(t.vertexDefines,s,h),p=c+_a(t.fragmentDefines,s,h),m=d+`
`+t.shader.vertex,g=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(S){return l.getGLExtension(S)!=null});g.indexOf("EXT_shader_texture_lod")>=0&&(p+=`
#define SUPPORT_TEXTURE_LOD`),g.indexOf("OES_standard_derivatives")>=0&&(p+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var _=lu(g)+`
`+uu(t.precision)+`
`+p+`
`+t.shader.fragment,b=Un(m,t.vertexDefines,s),x=Un(_,t.fragmentDefines,s),v=new ou;v.uniformSemantics=t.shader.uniformSemantics,v.attributes=t.shader.attributes;var w=v.buildProgram(u,t.shader,b,x);return v.__error=w,i[o]=v,v};var Hn=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,hu=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,kn=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,cu={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function Mt(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var Wn={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return Mt(2)},vec3:function(){return Mt(3)},vec4:function(){return Mt(4)},ivec2:function(){return Mt(2)},ivec3:function(){return Mt(3)},ivec4:function(){return Mt(4)},mat2:function(){return Mt(4)},mat3:function(){return Mt(9)},mat4:function(){return Mt(16)},array:function(){return[]}},Xa=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],$o=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],Qo=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],du={vec4:4,vec3:3,vec2:2,float:1},va={},Jo={};function fu(e,t){var r="vertex:"+e+"fragment:"+t;if(va[r])return va[r];var i=we.genGUID();return va[r]=i,Jo[i]={vertex:e,fragment:t},i}function Xn(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function fr(){console.error("Wrong uniform/attributes syntax")}function jn(e,t){for(var r=/[,=\(\):]/,i=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),a=[],n=0;n<i.length;n++)i[n].match(r)?a.push(i[n].charAt(0),i[n].slice(1)):a.push(i[n]);i=a;var o=0,s=1,l=2,u=3,h=4,c=5,f=o,d={},p=null,m;g(i[0]);function g(x){x||fr();var v=x.match(/\[(.*?)\]/);m=x.replace(/\[(.*?)\]/,""),d[m]={},v&&(d[m].isArray=!0,d[m].arraySize=v[1])}for(var n=1;n<i.length;n++){var _=i[n];if(_){if(_==="="){if(f!==o&&f!==u){fr();break}f=s;continue}else if(_===":"){f=h;continue}else if(_===","){if(f===l){if(!(p instanceof Array)){fr();break}p.push(+i[++n])}else f=c;continue}else if(_===")"){d[m].value=new se.Float32Array(p),p=null,f=c;continue}else if(_==="("){if(f!==l){fr();break}if(!(p instanceof Array)){fr();break}p.push(+i[++n]);continue}else if(_.indexOf("vec")>=0){if(f!==s&&f!==h){fr();break}f=l,p=[];continue}else if(f===s){e==="bool"?d[m].value=_==="true":d[m].value=parseFloat(_),p=null;continue}else if(f===h){var b=_;Xa.indexOf(b)>=0||$o.indexOf(b)>=0||Qo.indexOf(b)>=0?d[m].semantic=b:b==="ignore"||b==="unconfigurable"?d[m].ignore=!0:e==="bool"?d[m].value=b==="true":d[m].value=parseFloat(b);continue}g(_),f=o}}return d}function G(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=Xn(e),t=Xn(t),this._shaderID=fu(e,t),this._vertexCode=G.parseImport(e),this._fragmentCode=G.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}G.prototype={constructor:G,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=G.parseImport(this.vertex),this._fragmentCode=G.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(Xa.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(Qo.indexOf(r)>=0){var i=!1,a=r;r.match(/TRANSPOSE$/)&&(i=!0,a=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:i,semanticNoTranspose:a}}else $o.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,i,a,n){n[e]={type:r,value:a?Wn.array:i||Wn[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(Hn,a),r="fragment",this._fragmentCode=this._fragmentCode.replace(Hn,a),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function i(n){return n!=null?function(){return n}:null}function a(n,o,s){var l=jn(o,s),u=[];for(var h in l){var c=l[h],f=c.semantic,d=h,p=cu[o],m=i(l[h].value);l[h].isArray&&(d+="["+l[h].arraySize+"]",p+="v"),u.push(d),t._uniformList.push(h),c.ignore||((o==="sampler2D"||o==="samplerCube")&&(t.textures[h]={shaderType:r,type:o}),f?t._addSemanticUniform(h,p,f):t._addMaterialUniform(h,o,p,m,l[h].isArray,e))}return u.length>0?"uniform "+o+" "+u.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(hu,r);function r(i,a,n){var o=jn(a,n),s=du[a]||1,l=[];for(var u in o){var h=o[u].semantic;if(e[u]={type:"float",size:s,semantic:h||null},h){if(Xa.indexOf(h)<0)throw new Error('Unkown semantic "'+h+'"');t.attributeSemantics[h]={symbol:u,type:a}}l.push(u)}return"attribute "+a+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(kn,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(kn,r);function r(i,a,n){var o=t==="vertex"?e.vertexDefines:e.fragmentDefines;return o[a]||(n==="false"?o[a]=!1:n==="true"?o[a]=!0:o[a]=n?isNaN(parseFloat(n))?n.trim():parseFloat(n):null),""}},clone:function(){var e=Jo[this._shaderID],t=new G(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(G.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(G.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(G.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(G.prototype,"uniforms",{get:function(){return this._uniformList}}));var pu=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;G.parseImport=function(e){return e=e.replace(pu,function(a,r,i){var a=G.source(i);return a?G.parseImport(a):(console.error('Shader chunk "'+i+'" not existed in library'),"")}),e};var mu=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;G.import=function(e){e.replace(mu,function(t,r,i,n){var n=n.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(n){for(var o=i.split("."),s=G.codes,l=0,u;l<o.length-1;)u=o[l++],s[u]||(s[u]={}),s=s[u];u=o[l],s[u]=n}return n})};G.codes={};G.source=function(e){for(var t=e.split("."),r=G.codes,i=0;r&&i<t.length;){var a=t[i++];r=r[a]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};const es=`@export clay.prez.vertex
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
@end`;var R={};R.create=function(){var e=new We(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};R.clone=function(e){var t=new We(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};R.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};R.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};R.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],a=t[3],n=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=i,e[9]=n,e[11]=t[14],e[12]=a,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};R.invert=function(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=t[9],f=t[10],d=t[11],p=t[12],m=t[13],g=t[14],_=t[15],b=r*s-i*o,x=r*l-a*o,v=r*u-n*o,w=i*l-a*s,S=i*u-n*s,E=a*u-n*l,M=h*m-c*p,L=h*g-f*p,I=h*_-d*p,C=c*g-f*m,F=c*_-d*m,U=f*_-d*g,O=b*U-x*F+v*C+w*I-S*L+E*M;return O?(O=1/O,e[0]=(s*U-l*F+u*C)*O,e[1]=(a*F-i*U-n*C)*O,e[2]=(m*E-g*S+_*w)*O,e[3]=(f*S-c*E-d*w)*O,e[4]=(l*I-o*U-u*L)*O,e[5]=(r*U-a*I+n*L)*O,e[6]=(g*v-p*E-_*x)*O,e[7]=(h*E-f*v+d*x)*O,e[8]=(o*F-s*I+u*M)*O,e[9]=(i*I-r*F-n*M)*O,e[10]=(p*S-m*v+_*b)*O,e[11]=(c*v-h*S-d*b)*O,e[12]=(s*L-o*C-l*M)*O,e[13]=(r*C-i*L+a*M)*O,e[14]=(m*x-p*w-g*b)*O,e[15]=(h*w-c*x+f*b)*O,e):null};R.adjoint=function(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=t[9],f=t[10],d=t[11],p=t[12],m=t[13],g=t[14],_=t[15];return e[0]=s*(f*_-d*g)-c*(l*_-u*g)+m*(l*d-u*f),e[1]=-(i*(f*_-d*g)-c*(a*_-n*g)+m*(a*d-n*f)),e[2]=i*(l*_-u*g)-s*(a*_-n*g)+m*(a*u-n*l),e[3]=-(i*(l*d-u*f)-s*(a*d-n*f)+c*(a*u-n*l)),e[4]=-(o*(f*_-d*g)-h*(l*_-u*g)+p*(l*d-u*f)),e[5]=r*(f*_-d*g)-h*(a*_-n*g)+p*(a*d-n*f),e[6]=-(r*(l*_-u*g)-o*(a*_-n*g)+p*(a*u-n*l)),e[7]=r*(l*d-u*f)-o*(a*d-n*f)+h*(a*u-n*l),e[8]=o*(c*_-d*m)-h*(s*_-u*m)+p*(s*d-u*c),e[9]=-(r*(c*_-d*m)-h*(i*_-n*m)+p*(i*d-n*c)),e[10]=r*(s*_-u*m)-o*(i*_-n*m)+p*(i*u-n*s),e[11]=-(r*(s*d-u*c)-o*(i*d-n*c)+h*(i*u-n*s)),e[12]=-(o*(c*g-f*m)-h*(s*g-l*m)+p*(s*f-l*c)),e[13]=r*(c*g-f*m)-h*(i*g-a*m)+p*(i*f-a*c),e[14]=-(r*(s*g-l*m)-o*(i*g-a*m)+p*(i*l-a*s)),e[15]=r*(s*f-l*c)-o*(i*f-a*c)+h*(i*l-a*s),e};R.determinant=function(e){var t=e[0],r=e[1],i=e[2],a=e[3],n=e[4],o=e[5],s=e[6],l=e[7],u=e[8],h=e[9],c=e[10],f=e[11],d=e[12],p=e[13],m=e[14],g=e[15],_=t*o-r*n,b=t*s-i*n,x=t*l-a*n,v=r*s-i*o,w=r*l-a*o,S=i*l-a*s,E=u*p-h*d,M=u*m-c*d,L=u*g-f*d,I=h*m-c*p,C=h*g-f*p,F=c*g-f*m;return _*F-b*C+x*I+v*L-w*M+S*E};R.multiply=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],f=t[9],d=t[10],p=t[11],m=t[12],g=t[13],_=t[14],b=t[15],x=r[0],v=r[1],w=r[2],S=r[3];return e[0]=x*i+v*s+w*c+S*m,e[1]=x*a+v*l+w*f+S*g,e[2]=x*n+v*u+w*d+S*_,e[3]=x*o+v*h+w*p+S*b,x=r[4],v=r[5],w=r[6],S=r[7],e[4]=x*i+v*s+w*c+S*m,e[5]=x*a+v*l+w*f+S*g,e[6]=x*n+v*u+w*d+S*_,e[7]=x*o+v*h+w*p+S*b,x=r[8],v=r[9],w=r[10],S=r[11],e[8]=x*i+v*s+w*c+S*m,e[9]=x*a+v*l+w*f+S*g,e[10]=x*n+v*u+w*d+S*_,e[11]=x*o+v*h+w*p+S*b,x=r[12],v=r[13],w=r[14],S=r[15],e[12]=x*i+v*s+w*c+S*m,e[13]=x*a+v*l+w*f+S*g,e[14]=x*n+v*u+w*d+S*_,e[15]=x*o+v*h+w*p+S*b,e};R.multiplyAffine=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[4],s=t[5],l=t[6],u=t[8],h=t[9],c=t[10],f=t[12],d=t[13],p=t[14],m=r[0],g=r[1],_=r[2];return e[0]=m*i+g*o+_*u,e[1]=m*a+g*s+_*h,e[2]=m*n+g*l+_*c,m=r[4],g=r[5],_=r[6],e[4]=m*i+g*o+_*u,e[5]=m*a+g*s+_*h,e[6]=m*n+g*l+_*c,m=r[8],g=r[9],_=r[10],e[8]=m*i+g*o+_*u,e[9]=m*a+g*s+_*h,e[10]=m*n+g*l+_*c,m=r[12],g=r[13],_=r[14],e[12]=m*i+g*o+_*u+f,e[13]=m*a+g*s+_*h+d,e[14]=m*n+g*l+_*c+p,e};R.mul=R.multiply;R.mulAffine=R.multiplyAffine;R.translate=function(e,t,r){var i=r[0],a=r[1],n=r[2],o,s,l,u,h,c,f,d,p,m,g,_;return t===e?(e[12]=t[0]*i+t[4]*a+t[8]*n+t[12],e[13]=t[1]*i+t[5]*a+t[9]*n+t[13],e[14]=t[2]*i+t[6]*a+t[10]*n+t[14],e[15]=t[3]*i+t[7]*a+t[11]*n+t[15]):(o=t[0],s=t[1],l=t[2],u=t[3],h=t[4],c=t[5],f=t[6],d=t[7],p=t[8],m=t[9],g=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=u,e[4]=h,e[5]=c,e[6]=f,e[7]=d,e[8]=p,e[9]=m,e[10]=g,e[11]=_,e[12]=o*i+h*a+p*n+t[12],e[13]=s*i+c*a+m*n+t[13],e[14]=l*i+f*a+g*n+t[14],e[15]=u*i+d*a+_*n+t[15]),e};R.scale=function(e,t,r){var i=r[0],a=r[1],n=r[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*a,e[5]=t[5]*a,e[6]=t[6]*a,e[7]=t[7]*a,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};R.rotate=function(e,t,r,i){var a=i[0],n=i[1],o=i[2],s=Math.sqrt(a*a+n*n+o*o),l,u,h,c,f,d,p,m,g,_,b,x,v,w,S,E,M,L,I,C,F,U,O,H;return Math.abs(s)<Ii?null:(s=1/s,a*=s,n*=s,o*=s,l=Math.sin(r),u=Math.cos(r),h=1-u,c=t[0],f=t[1],d=t[2],p=t[3],m=t[4],g=t[5],_=t[6],b=t[7],x=t[8],v=t[9],w=t[10],S=t[11],E=a*a*h+u,M=n*a*h+o*l,L=o*a*h-n*l,I=a*n*h-o*l,C=n*n*h+u,F=o*n*h+a*l,U=a*o*h+n*l,O=n*o*h-a*l,H=o*o*h+u,e[0]=c*E+m*M+x*L,e[1]=f*E+g*M+v*L,e[2]=d*E+_*M+w*L,e[3]=p*E+b*M+S*L,e[4]=c*I+m*C+x*F,e[5]=f*I+g*C+v*F,e[6]=d*I+_*C+w*F,e[7]=p*I+b*C+S*F,e[8]=c*U+m*O+x*H,e[9]=f*U+g*O+v*H,e[10]=d*U+_*O+w*H,e[11]=p*U+b*O+S*H,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};R.rotateX=function(e,t,r){var i=Math.sin(r),a=Math.cos(r),n=t[4],o=t[5],s=t[6],l=t[7],u=t[8],h=t[9],c=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=n*a+u*i,e[5]=o*a+h*i,e[6]=s*a+c*i,e[7]=l*a+f*i,e[8]=u*a-n*i,e[9]=h*a-o*i,e[10]=c*a-s*i,e[11]=f*a-l*i,e};R.rotateY=function(e,t,r){var i=Math.sin(r),a=Math.cos(r),n=t[0],o=t[1],s=t[2],l=t[3],u=t[8],h=t[9],c=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=n*a-u*i,e[1]=o*a-h*i,e[2]=s*a-c*i,e[3]=l*a-f*i,e[8]=n*i+u*a,e[9]=o*i+h*a,e[10]=s*i+c*a,e[11]=l*i+f*a,e};R.rotateZ=function(e,t,r){var i=Math.sin(r),a=Math.cos(r),n=t[0],o=t[1],s=t[2],l=t[3],u=t[4],h=t[5],c=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=n*a+u*i,e[1]=o*a+h*i,e[2]=s*a+c*i,e[3]=l*a+f*i,e[4]=u*a-n*i,e[5]=h*a-o*i,e[6]=c*a-s*i,e[7]=f*a-l*i,e};R.fromRotationTranslation=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=i+i,l=a+a,u=n+n,h=i*s,c=i*l,f=i*u,d=a*l,p=a*u,m=n*u,g=o*s,_=o*l,b=o*u;return e[0]=1-(d+m),e[1]=c+b,e[2]=f-_,e[3]=0,e[4]=c-b,e[5]=1-(h+m),e[6]=p+g,e[7]=0,e[8]=f+_,e[9]=p-g,e[10]=1-(h+d),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};R.fromQuat=function(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=r+r,s=i+i,l=a+a,u=r*o,h=i*o,c=i*s,f=a*o,d=a*s,p=a*l,m=n*o,g=n*s,_=n*l;return e[0]=1-c-p,e[1]=h+_,e[2]=f-g,e[3]=0,e[4]=h-_,e[5]=1-u-p,e[6]=d+m,e[7]=0,e[8]=f+g,e[9]=d-m,e[10]=1-u-c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};R.frustum=function(e,t,r,i,a,n,o){var s=1/(r-t),l=1/(a-i),u=1/(n-o);return e[0]=n*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(a+i)*l,e[10]=(o+n)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*n*2*u,e[15]=0,e};R.perspective=function(e,t,r,i,a){var n=1/Math.tan(t/2),o=1/(i-a);return e[0]=n/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(a+i)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*a*i*o,e[15]=0,e};R.ortho=function(e,t,r,i,a,n,o){var s=1/(t-r),l=1/(i-a),u=1/(n-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+r)*s,e[13]=(a+i)*l,e[14]=(o+n)*u,e[15]=1,e};R.lookAt=function(e,t,r,i){var a,n,o,s,l,u,h,c,f,d,p=t[0],m=t[1],g=t[2],_=i[0],b=i[1],x=i[2],v=r[0],w=r[1],S=r[2];return Math.abs(p-v)<Ii&&Math.abs(m-w)<Ii&&Math.abs(g-S)<Ii?R.identity(e):(h=p-v,c=m-w,f=g-S,d=1/Math.sqrt(h*h+c*c+f*f),h*=d,c*=d,f*=d,a=b*f-x*c,n=x*h-_*f,o=_*c-b*h,d=Math.sqrt(a*a+n*n+o*o),d?(d=1/d,a*=d,n*=d,o*=d):(a=0,n=0,o=0),s=c*o-f*n,l=f*a-h*o,u=h*n-c*a,d=Math.sqrt(s*s+l*l+u*u),d?(d=1/d,s*=d,l*=d,u*=d):(s=0,l=0,u=0),e[0]=a,e[1]=s,e[2]=h,e[3]=0,e[4]=n,e[5]=l,e[6]=c,e[7]=0,e[8]=o,e[9]=u,e[10]=f,e[11]=0,e[12]=-(a*p+n*m+o*g),e[13]=-(s*p+l*m+u*g),e[14]=-(h*p+c*m+f*g),e[15]=1,e)};R.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};var T={};T.create=function(){var e=new We(3);return e[0]=0,e[1]=0,e[2]=0,e};T.clone=function(e){var t=new We(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};T.fromValues=function(e,t,r){var i=new We(3);return i[0]=e,i[1]=t,i[2]=r,i};T.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};T.set=function(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e};T.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};T.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};T.sub=T.subtract;T.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};T.mul=T.multiply;T.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};T.div=T.divide;T.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};T.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};T.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};T.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e};T.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],a=t[2]-e[2];return Math.sqrt(r*r+i*i+a*a)};T.dist=T.distance;T.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],a=t[2]-e[2];return r*r+i*i+a*a};T.sqrDist=T.squaredDistance;T.length=function(e){var t=e[0],r=e[1],i=e[2];return Math.sqrt(t*t+r*r+i*i)};T.len=T.length;T.squaredLength=function(e){var t=e[0],r=e[1],i=e[2];return t*t+r*r+i*i};T.sqrLen=T.squaredLength;T.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};T.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};T.normalize=function(e,t){var r=t[0],i=t[1],a=t[2],n=r*r+i*i+a*a;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n),e};T.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};T.cross=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=r[0],s=r[1],l=r[2];return e[0]=a*l-n*s,e[1]=n*o-i*l,e[2]=i*s-a*o,e};T.lerp=function(e,t,r,i){var a=t[0],n=t[1],o=t[2];return e[0]=a+i*(r[0]-a),e[1]=n+i*(r[1]-n),e[2]=o+i*(r[2]-o),e};T.random=function(e,t){t=t||1;var r=Tr()*2*Math.PI,i=Tr()*2-1,a=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(r)*a,e[1]=Math.sin(r)*a,e[2]=i*t,e};T.transformMat4=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=r[3]*i+r[7]*a+r[11]*n+r[15];return o=o||1,e[0]=(r[0]*i+r[4]*a+r[8]*n+r[12])/o,e[1]=(r[1]*i+r[5]*a+r[9]*n+r[13])/o,e[2]=(r[2]*i+r[6]*a+r[10]*n+r[14])/o,e};T.transformMat3=function(e,t,r){var i=t[0],a=t[1],n=t[2];return e[0]=i*r[0]+a*r[3]+n*r[6],e[1]=i*r[1]+a*r[4]+n*r[7],e[2]=i*r[2]+a*r[5]+n*r[8],e};T.transformQuat=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*i+s*n-l*a,c=u*a+l*i-o*n,f=u*n+o*a-s*i,d=-o*i-s*a-l*n;return e[0]=h*u+d*-o+c*-l-f*-s,e[1]=c*u+d*-s+f*-o-h*-l,e[2]=f*u+d*-l+h*-s-c*-o,e};T.rotateX=function(e,t,r,i){var a=[],n=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],n[0]=a[0],n[1]=a[1]*Math.cos(i)-a[2]*Math.sin(i),n[2]=a[1]*Math.sin(i)+a[2]*Math.cos(i),e[0]=n[0]+r[0],e[1]=n[1]+r[1],e[2]=n[2]+r[2],e};T.rotateY=function(e,t,r,i){var a=[],n=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],n[0]=a[2]*Math.sin(i)+a[0]*Math.cos(i),n[1]=a[1],n[2]=a[2]*Math.cos(i)-a[0]*Math.sin(i),e[0]=n[0]+r[0],e[1]=n[1]+r[1],e[2]=n[2]+r[2],e};T.rotateZ=function(e,t,r,i){var a=[],n=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],n[0]=a[0]*Math.cos(i)-a[1]*Math.sin(i),n[1]=a[0]*Math.sin(i)+a[1]*Math.cos(i),n[2]=a[2],e[0]=n[0]+r[0],e[1]=n[1]+r[1],e[2]=n[2]+r[2],e};T.forEach=function(){var e=T.create();return function(t,r,i,a,n,o){var s,l;for(r||(r=3),i||(i=0),a?l=Math.min(a*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],n(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();T.angle=function(e,t){var r=T.fromValues(e[0],e[1],e[2]),i=T.fromValues(t[0],t[1],t[2]);T.normalize(r,r),T.normalize(i,i);var a=T.dot(r,i);return a>1?0:Math.acos(a)};G.import(es);var _e=R.create,qn={};function Zn(e){return e.material}function gu(e,t,r){return t.uniforms[r].value}function _u(e,t,r,i){return r!==i}function vu(e){return!0}function Yn(){}var Kn={float:D.FLOAT,byte:D.BYTE,ubyte:D.UNSIGNED_BYTE,short:D.SHORT,ushort:D.UNSIGNED_SHORT};function yu(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function xu(e){var t,r;this.bind=function(i){t||(t=se.createCanvas(),t.width=t.height=1,t.getContext("2d"));var a=i.gl,n=!r;n&&(r=a.createTexture()),a.bindTexture(a.TEXTURE_2D,r),n&&a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,t)},this.unbind=function(i){i.gl.bindTexture(i.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var st=ke.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=se.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new Ql(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new Ko(this),this._placeholderTexture=new xu},{resize:function(e,t){var r=this.canvas,i=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*i,r.height=t*i,this._width=e,this._height=t):(this._width=r.width/i,this._height=r.height/i),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,i,a){if(typeof e=="object"){var n=e;e=n.x,t=n.y,r=n.width,i=n.height,a=n.devicePixelRatio}a=a||this.devicePixelRatio,this.gl.viewport(e*a,t*a,r*a,i*a),this.viewport={x:e,y:t,width:r,height:i,devicePixelRatio:a}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,i){var a=this.gl,n=this.clearColor;if(this.clearBit){a.colorMask(!0,!0,!0,!0),a.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,a.enable(a.SCISSOR_TEST),a.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),a.clearColor(n[0],n[1],n[2],n[3]),a.clear(this.clearBit),s&&a.disable(a.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var u=e.updateRenderList(t,!0);this._sceneRendering=e;var h=u.opaque,c=u.transparent,f=e.material;e.trigger("beforerender",this,e,t,u),i?(this.renderPreZ(h,e,t),a.depthFunc(a.LEQUAL)):a.depthFunc(a.LESS);for(var d=_e(),p=T.create(),m=0;m<c.length;m++){var g=c[m];R.multiplyAffine(d,t.viewMatrix.array,g.worldTransform.array),T.transformMat4(p,g.position.array,d),g.__depth=p[2]}this.renderPass(h,t,{getMaterial:function(_){return f||_.material},sortCompare:this.opaqueSortCompare}),this.renderPass(c,t,{getMaterial:function(_){return f||_.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,u),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(qn[e.__uid__])return;if(qn[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var i=r&&r.getMaterial||Zn;t=t||null;for(var a=0;a<e.length;a++){var n=e[a],o=i.call(this,n);if(a>0){var s=e[a-1],l=s.joints?s.joints.length:0,u=n.joints?n.joints.length:0;if(u===l&&n.material===s.material&&n.lightGroup===s.lightGroup){n.__program=s.__program;continue}}var h=this._programMgr.getProgram(n,o,t);this.validateProgram(h),n.__program=h}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||Zn,r.getUniform=r.getUniform||gu,r.isMaterialChanged=r.isMaterialChanged||_u,r.beforeRender=r.beforeRender||Yn,r.afterRender=r.afterRender||Yn;var i=r.ifRender||vu;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var a=this.viewport,n=a.devicePixelRatio,o=[a.x*n,a.y*n,a.width*n,a.height*n],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],u=[o[2],o[3]],h=Date.now();t?(R.copy(ge.VIEW,t.viewMatrix.array),R.copy(ge.PROJECTION,t.projectionMatrix.array),R.copy(ge.VIEWINVERSE,t.worldTransform.array)):(R.identity(ge.VIEW),R.identity(ge.PROJECTION),R.identity(ge.VIEWINVERSE)),R.multiply(ge.VIEWPROJECTION,ge.PROJECTION,ge.VIEW),R.invert(ge.PROJECTIONINVERSE,ge.PROJECTION),R.invert(ge.VIEWPROJECTIONINVERSE,ge.VIEWPROJECTION);for(var c=this.gl,f=this._sceneRendering,d,p,m,g,_,b,x,v,w,S,E,M,L=null,I=0;I<e.length;I++){var C=e[I],F=C.worldTransform!=null,U;if(i(C)){F&&(U=C.isSkinnedMesh&&C.isSkinnedMesh()?C.offsetMatrix?C.offsetMatrix.array:ge.IDENTITY:C.worldTransform.array);var O=C.geometry,H=r.getMaterial.call(this,C),q=C.__program,Z=H.shader,N=O.__uid__+"-"+q.__uid__,B=N!==S;S=N,F&&(R.copy(ge.WORLD,U),R.multiply(ge.WORLDVIEWPROJECTION,ge.VIEWPROJECTION,U),R.multiplyAffine(ge.WORLDVIEW,ge.VIEW,U),(Z.matrixSemantics.WORLDINVERSE||Z.matrixSemantics.WORLDINVERSETRANSPOSE)&&R.invert(ge.WORLDINVERSE,U),(Z.matrixSemantics.WORLDVIEWINVERSE||Z.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&R.invert(ge.WORLDVIEWINVERSE,ge.WORLDVIEW),(Z.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||Z.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&R.invert(ge.WORLDVIEWPROJECTIONINVERSE,ge.WORLDVIEWPROJECTION)),C.beforeRender&&C.beforeRender(this),r.beforeRender.call(this,C,H,d);var Y=q!==p;Y?(q.bind(this),q.setUniformOfSemantic(c,"VIEWPORT",o),q.setUniformOfSemantic(c,"WINDOW_SIZE",l),t&&(q.setUniformOfSemantic(c,"NEAR",t.near),q.setUniformOfSemantic(c,"FAR",t.far)),q.setUniformOfSemantic(c,"DEVICEPIXELRATIO",n),q.setUniformOfSemantic(c,"TIME",h),q.setUniformOfSemantic(c,"VIEWPORT_SIZE",u),f&&f.setLightUniforms(q,C.lightGroup,this)):q=p,(Y||r.isMaterialChanged(C,m,H,d))&&(H.depthTest!==g&&(H.depthTest?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST),g=H.depthTest),H.depthMask!==_&&(c.depthMask(H.depthMask),_=H.depthMask),H.transparent!==w&&(H.transparent?c.enable(c.BLEND):c.disable(c.BLEND),w=H.transparent),H.transparent&&(H.blend?H.blend(c):(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA))),M=this._bindMaterial(C,H,q,m||null,d||null,p||null,r.getUniform),d=H);var j=Z.matrixSemanticKeys;if(F)for(var te=0;te<j.length;te++){var Q=j[te],ve=Z.matrixSemantics[Q],ee=ge[Q];if(ve.isTranspose){var Ee=ge[ve.semanticNoTranspose];R.transpose(ee,Ee)}q.setUniform(c,ve.type,ve.symbol,ee)}C.cullFace!==x&&(x=C.cullFace,c.cullFace(x)),C.frontFace!==v&&(v=C.frontFace,c.frontFace(v)),C.culling!==b&&(b=C.culling,b?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE)),this._updateSkeleton(C,q,M),B&&(E=this._bindVAO(L,Z,O,q)),this._renderObject(C,E,q),r.afterRender(this,C),C.afterRender&&C.afterRender(this),p=q,m=C}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var i=this.gl,a=e.skeleton;if(a)if(a.update(),e.joints.length>this.getMaxJointNumber()){var n=a.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,n,r),t.setUniform(i,"1i","skinMatricesTexture",r),t.setUniform(i,"1f","skinMatricesTextureSize",n.width)}else{var o=a.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(i,"SKIN_MATRIX",o)}},_renderObject:function(e,t,r){var i=this.gl,a=e.geometry,n=e.mode;n==null&&(n=4);var o=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(o=this.getGLExtension("ANGLE_instanced_arrays"),!o)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(s&&(l=this._bindInstancedAttributes(e,r,o)),t.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint"),h=u&&a.indices instanceof Uint32Array,c=h?i.UNSIGNED_INT:i.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(n,t.indicesBuffer.count,c,0,e.getInstanceCount()):i.drawElements(n,t.indicesBuffer.count,c,0)}else s?o.drawArraysInstancedANGLE(n,0,a.vertexCount,e.getInstanceCount()):i.drawArrays(n,0,a.vertexCount);if(s)for(var f=0;f<l.length;f++)i.disableVertexAttribArray(l[f])},_bindInstancedAttributes:function(e,t,r){for(var i=this.gl,a=e.getInstancedAttributesBuffers(this),n=[],o=0;o<a.length;o++){var s=a[o],l=t.getAttribLocation(i,s.symbol);if(!(l<0)){var u=Kn[s.type]||i.FLOAT;i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,s.buffer),i.vertexAttribPointer(l,s.size,u,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),n.push(l)}}return n},_bindMaterial:function(e,t,r,i,a,n,o){for(var s=this.gl,l=n===r,u=r.currentTextureSlot(),h=t.getEnabledUniforms(),c=t.getTextureUniforms(),f=this._placeholderTexture,d=0;d<c.length;d++){var p=c[d],m=o(e,t,p),g=t.uniforms[p].type;if(g==="t"&&m)m.__slot=-1;else if(g==="tv")for(var _=0;_<m.length;_++)m[_]&&(m[_].__slot=-1)}f.__slot=-1;for(var d=0;d<h.length;d++){var p=h[d],b=t.uniforms[p],m=o(e,t,p),g=b.type,x=g==="t";if(x&&(!m||!m.isRenderable())&&(m=f),a&&l){var v=o(i,a,p);if(x&&(!v||!v.isRenderable())&&(v=f),v===m){if(x)r.takeCurrentTextureSlot(this,null);else if(g==="tv"&&m)for(var _=0;_<m.length;_++)r.takeCurrentTextureSlot(this,null);continue}}if(m!=null)if(x)if(m.__slot<0){var w=r.currentTextureSlot(),S=r.setUniform(s,"1i",p,w);S&&(r.takeCurrentTextureSlot(this,m),m.__slot=w)}else r.setUniform(s,"1i",p,m.__slot);else if(Array.isArray(m)){if(m.length===0)continue;if(g==="tv"){if(!r.hasUniform(p))continue;for(var E=[],_=0;_<m.length;_++){var M=m[_];if(M.__slot<0){var w=r.currentTextureSlot();E.push(w),r.takeCurrentTextureSlot(this,M),M.__slot=w}else E.push(M.__slot)}r.setUniform(s,"1iv",p,E)}else r.setUniform(s,b.type,p,m)}else r.setUniform(s,b.type,p,m)}var L=r.currentTextureSlot();return r.resetTextureSlot(u),L},_bindVAO:function(e,t,r,i){var a=!r.dynamic,n=this.gl,o=this.__uid__+"-"+i.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var u=l[0],h=u.attributeBuffers,v=u.indicesBuffer,x=[],c=[],f=0;f<h.length;f++){var d=h[f],p=d.name,m=d.semantic,g;if(m){var _=t.attributeSemantics[m];g=_&&_.symbol}else g=p;g&&i.attributes[g]&&(x.push(d),c.push(g))}s=new yu(x,c,v),a&&(r.__vaoCache[o]=s)}var b=!0;e&&a&&(s.vao==null?s.vao=e.createVertexArrayOES():b=!1,e.bindVertexArrayOES(s.vao));var x=s.availableAttributes,v=s.indicesBuffer;if(b){for(var w=i.enableAttributes(this,s.availableAttributeSymbols,e&&a&&s),f=0;f<x.length;f++){var S=w[f];if(S!==-1){var d=x[f],E=d.buffer,M=d.size,L=Kn[d.type]||n.FLOAT;n.bindBuffer(n.ARRAY_BUFFER,E),n.vertexAttribPointer(S,M,L,!1,0,0)}}r.isUseIndices()&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,v.buffer)}return s},renderPreZ:function(e,t,r){var i=this.gl,a=this._prezMaterial||new ot({shader:new G(G.source("clay.prez.vertex"),G.source("clay.prez.fragment"))});this._prezMaterial=a,i.colorMask(!1,!1,!1,!1),i.depthMask(!0),this.renderPass(e,r,{ifRender:function(n){return!n.ignorePreZ},isMaterialChanged:function(n,o){var s=n.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(n,o,s){if(s==="alphaMap")return n.material.get("diffuseMap");if(s==="alphaCutoff"){if(n.material.isDefined("fragment","ALPHA_TEST")&&n.material.get("diffuseMap")){var l=n.material.get("alphaCutoff");return l||0}return 0}else return s==="uvRepeat"?n.material.get("uvRepeat"):s==="uvOffset"?n.material.get("uvOffset"):o.get(s)},getMaterial:function(){return a},sort:this.opaqueSortCompare}),i.colorMask(!0,!0,!0,!0),i.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var i={};e.traverse(function(a){var n=a.material;if(a.geometry&&t&&a.geometry.dispose(this),r&&n&&!i[n.__uid__]){for(var o=n.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],u=n.uniforms[l].value,h=n.uniforms[l].type;if(u){if(h==="t")u.dispose&&u.dispose(this);else if(h==="tv")for(var c=0;c<u.length;c++)u[c]&&u[c].dispose&&u[c].dispose(this)}}i[n.__uid__]=!0}a.dispose&&a.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new $),t=this._height-t;var i=this.viewport,a=r.array;return a[0]=(e-i.x)/i.width,a[0]=a[0]*2-1,a[1]=(t-i.y)/i.height,a[1]=a[1]*2-1,r}});st.opaqueSortCompare=st.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};st.transparentSortCompare=st.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var ge={IDENTITY:_e(),WORLD:_e(),VIEW:_e(),PROJECTION:_e(),WORLDVIEW:_e(),VIEWPROJECTION:_e(),WORLDVIEWPROJECTION:_e(),WORLDINVERSE:_e(),VIEWINVERSE:_e(),PROJECTIONINVERSE:_e(),WORLDVIEWINVERSE:_e(),VIEWPROJECTIONINVERSE:_e(),WORLDVIEWPROJECTIONINVERSE:_e(),WORLDTRANSPOSE:_e(),VIEWTRANSPOSE:_e(),PROJECTIONTRANSPOSE:_e(),WORLDVIEWTRANSPOSE:_e(),VIEWPROJECTIONTRANSPOSE:_e(),WORLDVIEWPROJECTIONTRANSPOSE:_e(),WORLDINVERSETRANSPOSE:_e(),VIEWINVERSETRANSPOSE:_e(),PROJECTIONINVERSETRANSPOSE:_e(),WORLDVIEWINVERSETRANSPOSE:_e(),VIEWPROJECTIONINVERSETRANSPOSE:_e(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:_e()};st.COLOR_BUFFER_BIT=D.COLOR_BUFFER_BIT;st.DEPTH_BUFFER_BIT=D.DEPTH_BUFFER_BIT;st.STENCIL_BUFFER_BIT=D.STENCIL_BUFFER_BIT;var A=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=T.fromValues(e,t,r),this._dirty=!0};A.prototype={constructor:A,add:function(e){return T.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new A(this.x,this.y,this.z)},copy:function(e){return T.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return T.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return T.dist(this.array,e.array)},distance:function(e){return T.distance(this.array,e.array)},div:function(e){return T.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return T.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return T.dot(this.array,e.array)},len:function(){return T.len(this.array)},length:function(){return T.length(this.array)},lerp:function(e,t,r){return T.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return T.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return T.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return T.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return T.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return T.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return T.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return T.random(this.array,e),this._dirty=!0,this},scale:function(e){return T.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return T.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return T.sqrDist(this.array,e.array)},squaredDistance:function(e){return T.squaredDistance(this.array,e.array)},sqrLen:function(){return T.sqrLen(this.array)},squaredLength:function(){return T.squaredLength(this.array)},sub:function(e){return T.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return T.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return T.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return T.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return T.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){A.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){A.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var wi=Object.defineProperty;if(wi){var ya=A.prototype;wi(ya,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),wi(ya,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),wi(ya,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}A.add=function(e,t,r){return T.add(e.array,t.array,r.array),e._dirty=!0,e};A.set=function(e,t,r,i){T.set(e.array,t,r,i),e._dirty=!0};A.copy=function(e,t){return T.copy(e.array,t.array),e._dirty=!0,e};A.cross=function(e,t,r){return T.cross(e.array,t.array,r.array),e._dirty=!0,e};A.dist=function(e,t){return T.distance(e.array,t.array)};A.distance=A.dist;A.div=function(e,t,r){return T.divide(e.array,t.array,r.array),e._dirty=!0,e};A.divide=A.div;A.dot=function(e,t){return T.dot(e.array,t.array)};A.len=function(e){return T.length(e.array)};A.lerp=function(e,t,r,i){return T.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};A.min=function(e,t,r){return T.min(e.array,t.array,r.array),e._dirty=!0,e};A.max=function(e,t,r){return T.max(e.array,t.array,r.array),e._dirty=!0,e};A.mul=function(e,t,r){return T.multiply(e.array,t.array,r.array),e._dirty=!0,e};A.multiply=A.mul;A.negate=function(e,t){return T.negate(e.array,t.array),e._dirty=!0,e};A.normalize=function(e,t){return T.normalize(e.array,t.array),e._dirty=!0,e};A.random=function(e,t){return T.random(e.array,t),e._dirty=!0,e};A.scale=function(e,t,r){return T.scale(e.array,t.array,r),e._dirty=!0,e};A.scaleAndAdd=function(e,t,r,i){return T.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};A.sqrDist=function(e,t){return T.sqrDist(e.array,t.array)};A.squaredDistance=A.sqrDist;A.sqrLen=function(e){return T.sqrLen(e.array)};A.squaredLength=A.sqrLen;A.sub=function(e,t,r){return T.subtract(e.array,t.array,r.array),e._dirty=!0,e};A.subtract=A.sub;A.transformMat3=function(e,t,r){return T.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};A.transformMat4=function(e,t,r){return T.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};A.transformQuat=function(e,t,r){return T.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function at(e,t,r){return e<t?t:e>r?r:e}var fe=Math.atan2,nt=Math.asin,pr=Math.abs;A.eulerFromQuat=function(e,t,f){e._dirty=!0,t=t.array;var i=e.array,a=t[0],n=t[1],o=t[2],s=t[3],l=a*a,u=n*n,h=o*o,c=s*s,f=(f||"XYZ").toUpperCase();switch(f){case"XYZ":i[0]=fe(2*(a*s-n*o),c-l-u+h),i[1]=nt(at(2*(a*o+n*s),-1,1)),i[2]=fe(2*(o*s-a*n),c+l-u-h);break;case"YXZ":i[0]=nt(at(2*(a*s-n*o),-1,1)),i[1]=fe(2*(a*o+n*s),c-l-u+h),i[2]=fe(2*(a*n+o*s),c-l+u-h);break;case"ZXY":i[0]=nt(at(2*(a*s+n*o),-1,1)),i[1]=fe(2*(n*s-o*a),c-l-u+h),i[2]=fe(2*(o*s-a*n),c-l+u-h);break;case"ZYX":i[0]=fe(2*(a*s+o*n),c-l-u+h),i[1]=nt(at(2*(n*s-a*o),-1,1)),i[2]=fe(2*(a*n+o*s),c+l-u-h);break;case"YZX":i[0]=fe(2*(a*s-o*n),c-l+u-h),i[1]=fe(2*(n*s-a*o),c+l-u-h),i[2]=nt(at(2*(a*n+o*s),-1,1));break;case"XZY":i[0]=fe(2*(a*s+n*o),c-l+u-h),i[1]=fe(2*(a*o+n*s),c+l-u-h),i[2]=nt(at(2*(o*s-a*n),-1,1));break;default:console.warn("Unkown order: "+f)}return e};A.eulerFromMat3=function(e,t,p){var i=t.array,a=i[0],n=i[3],o=i[6],s=i[1],l=i[4],u=i[7],h=i[2],c=i[5],f=i[8],d=e.array,p=(p||"XYZ").toUpperCase();switch(p){case"XYZ":d[1]=nt(at(o,-1,1)),pr(o)<.99999?(d[0]=fe(-u,f),d[2]=fe(-n,a)):(d[0]=fe(c,l),d[2]=0);break;case"YXZ":d[0]=nt(-at(u,-1,1)),pr(u)<.99999?(d[1]=fe(o,f),d[2]=fe(s,l)):(d[1]=fe(-h,a),d[2]=0);break;case"ZXY":d[0]=nt(at(c,-1,1)),pr(c)<.99999?(d[1]=fe(-h,f),d[2]=fe(-n,l)):(d[1]=0,d[2]=fe(s,a));break;case"ZYX":d[1]=nt(-at(h,-1,1)),pr(h)<.99999?(d[0]=fe(c,f),d[2]=fe(s,a)):(d[0]=0,d[2]=fe(-n,l));break;case"YZX":d[2]=nt(at(s,-1,1)),pr(s)<.99999?(d[0]=fe(-u,l),d[1]=fe(-h,a)):(d[0]=0,d[1]=fe(o,f));break;case"XZY":d[2]=nt(-at(n,-1,1)),pr(n)<.99999?(d[0]=fe(c,l),d[1]=fe(o,a)):(d[0]=fe(-u,f),d[1]=0);break;default:console.warn("Unkown order: "+p)}return e._dirty=!0,e};Object.defineProperties(A,{POSITIVE_X:{get:function(){return new A(1,0,0)}},NEGATIVE_X:{get:function(){return new A(-1,0,0)}},POSITIVE_Y:{get:function(){return new A(0,1,0)}},NEGATIVE_Y:{get:function(){return new A(0,-1,0)}},POSITIVE_Z:{get:function(){return new A(0,0,1)}},NEGATIVE_Z:{get:function(){return new A(0,0,-1)}},UP:{get:function(){return new A(0,1,0)}},ZERO:{get:function(){return new A}}});var xa=1e-5,or=function(e,t){this.origin=e||new A,this.direction=t||new A};or.prototype={constructor:or,intersectPlane:function(e,t){var r=e.normal.array,i=e.distance,a=this.origin.array,n=this.direction.array,o=T.dot(r,n);if(o===0)return null;t||(t=new A);var s=(T.dot(r,a)-i)/o;return T.scaleAndAdd(t.array,a,n,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=T.dot(e.normal.array,this.direction.array);T.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=T.create();return function(t){T.sub(e,t,this.origin.array);var r=T.dot(e,this.direction.array);if(r<0)return T.distance(this.origin.array,t);var i=T.lenSquared(e);return Math.sqrt(i-r*r)}}(),intersectSphere:function(){var e=T.create();return function(t,r,i){var a=this.origin.array,n=this.direction.array;t=t.array,T.sub(e,t,a);var o=T.dot(e,n),s=T.squaredLength(e),l=s-o*o,u=r*r;if(!(l>u)){var h=Math.sqrt(u-l),c=o-h,f=o+h;return i||(i=new A),c<0?f<0?null:(T.scaleAndAdd(i.array,a,n,f),i):(T.scaleAndAdd(i.array,a,n,c),i)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,i=this.origin.array,a=e.min.array,n=e.max.array,o=1/r[0],s=1/r[1],l=1/r[2],u,h,c,f,d,p;if(o>=0?(u=(a[0]-i[0])*o,h=(n[0]-i[0])*o):(h=(a[0]-i[0])*o,u=(n[0]-i[0])*o),s>=0?(c=(a[1]-i[1])*s,f=(n[1]-i[1])*s):(f=(a[1]-i[1])*s,c=(n[1]-i[1])*s),u>f||c>h||((c>u||u!==u)&&(u=c),(f<h||h!==h)&&(h=f),l>=0?(d=(a[2]-i[2])*l,p=(n[2]-i[2])*l):(p=(a[2]-i[2])*l,d=(n[2]-i[2])*l),u>p||d>h)||((d>u||u!==u)&&(u=d),(p<h||h!==h)&&(h=p),h<0))return null;var m=u>=0?u:h;return t||(t=new A),T.scaleAndAdd(t.array,i,r,m),t},intersectTriangle:function(){var e=T.create(),t=T.create(),r=T.create(),i=T.create();return function(a,n,o,s,l,u){var h=this.direction.array,c=this.origin.array;a=a.array,n=n.array,o=o.array,T.sub(e,n,a),T.sub(t,o,a),T.cross(i,t,h);var f=T.dot(e,i);if(s){if(f>-xa)return null}else if(f>-xa&&f<xa)return null;T.sub(r,c,a);var d=T.dot(i,r)/f;if(d<0||d>1)return null;T.cross(i,e,r);var p=T.dot(h,i)/f;if(p<0||p>1||d+p>1)return null;T.cross(i,e,t);var m=-T.dot(r,i)/f;return m<0?null:(l||(l=new A),u&&A.set(u,1-d-p,d,p),T.scaleAndAdd(l.array,c,h,m),l)}}(),applyTransform:function(e){A.add(this.direction,this.direction,this.origin),A.transformMat4(this.origin,this.origin,e),A.transformMat4(this.direction,this.direction,e),A.sub(this.direction,this.direction,this.origin),A.normalize(this.direction,this.direction)},copy:function(e){A.copy(this.origin,e.origin),A.copy(this.direction,e.direction)},clone:function(){var e=new or;return e.copy(this),e}};var P={};P.create=function(){var e=new We(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};P.clone=function(e){var t=new We(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};P.fromValues=function(e,t,r,i){var a=new We(4);return a[0]=e,a[1]=t,a[2]=r,a[3]=i,a};P.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};P.set=function(e,t,r,i,a){return e[0]=t,e[1]=r,e[2]=i,e[3]=a,e};P.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};P.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};P.sub=P.subtract;P.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};P.mul=P.multiply;P.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};P.div=P.divide;P.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};P.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};P.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};P.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e};P.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],a=t[2]-e[2],n=t[3]-e[3];return Math.sqrt(r*r+i*i+a*a+n*n)};P.dist=P.distance;P.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],a=t[2]-e[2],n=t[3]-e[3];return r*r+i*i+a*a+n*n};P.sqrDist=P.squaredDistance;P.length=function(e){var t=e[0],r=e[1],i=e[2],a=e[3];return Math.sqrt(t*t+r*r+i*i+a*a)};P.len=P.length;P.squaredLength=function(e){var t=e[0],r=e[1],i=e[2],a=e[3];return t*t+r*r+i*i+a*a};P.sqrLen=P.squaredLength;P.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};P.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};P.normalize=function(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=r*r+i*i+a*a+n*n;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e};P.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};P.lerp=function(e,t,r,i){var a=t[0],n=t[1],o=t[2],s=t[3];return e[0]=a+i*(r[0]-a),e[1]=n+i*(r[1]-n),e[2]=o+i*(r[2]-o),e[3]=s+i*(r[3]-s),e};P.random=function(e,t){return t=t||1,e[0]=Tr(),e[1]=Tr(),e[2]=Tr(),e[3]=Tr(),P.normalize(e,e),P.scale(e,e,t),e};P.transformMat4=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3];return e[0]=r[0]*i+r[4]*a+r[8]*n+r[12]*o,e[1]=r[1]*i+r[5]*a+r[9]*n+r[13]*o,e[2]=r[2]*i+r[6]*a+r[10]*n+r[14]*o,e[3]=r[3]*i+r[7]*a+r[11]*n+r[15]*o,e};P.transformQuat=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*i+s*n-l*a,c=u*a+l*i-o*n,f=u*n+o*a-s*i,d=-o*i-s*a-l*n;return e[0]=h*u+d*-o+c*-l-f*-s,e[1]=c*u+d*-s+f*-o-h*-l,e[2]=f*u+d*-l+h*-s-c*-o,e};P.forEach=function(){var e=P.create();return function(t,r,i,a,n,o){var s,l;for(r||(r=4),i||(i=0),a?l=Math.min(a*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],n(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();var K={};K.create=function(){var e=new We(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};K.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};K.clone=function(e){var t=new We(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};K.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};K.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};K.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],a=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=a}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};K.invert=function(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=h*o-s*u,f=-h*n+s*l,d=u*n-o*l,p=r*c+i*f+a*d;return p?(p=1/p,e[0]=c*p,e[1]=(-h*i+a*u)*p,e[2]=(s*i-a*o)*p,e[3]=f*p,e[4]=(h*r-a*l)*p,e[5]=(-s*r+a*n)*p,e[6]=d*p,e[7]=(-u*r+i*l)*p,e[8]=(o*r-i*n)*p,e):null};K.adjoint=function(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8];return e[0]=o*h-s*u,e[1]=a*u-i*h,e[2]=i*s-a*o,e[3]=s*l-n*h,e[4]=r*h-a*l,e[5]=a*n-r*s,e[6]=n*u-o*l,e[7]=i*l-r*u,e[8]=r*o-i*n,e};K.determinant=function(e){var t=e[0],r=e[1],i=e[2],a=e[3],n=e[4],o=e[5],s=e[6],l=e[7],u=e[8];return t*(u*n-o*l)+r*(-u*a+o*s)+i*(l*a-n*s)};K.multiply=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],f=r[0],d=r[1],p=r[2],m=r[3],g=r[4],_=r[5],b=r[6],x=r[7],v=r[8];return e[0]=f*i+d*o+p*u,e[1]=f*a+d*s+p*h,e[2]=f*n+d*l+p*c,e[3]=m*i+g*o+_*u,e[4]=m*a+g*s+_*h,e[5]=m*n+g*l+_*c,e[6]=b*i+x*o+v*u,e[7]=b*a+x*s+v*h,e[8]=b*n+x*l+v*c,e};K.mul=K.multiply;K.translate=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],f=r[0],d=r[1];return e[0]=i,e[1]=a,e[2]=n,e[3]=o,e[4]=s,e[5]=l,e[6]=f*i+d*o+u,e[7]=f*a+d*s+h,e[8]=f*n+d*l+c,e};K.rotate=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],f=Math.sin(r),d=Math.cos(r);return e[0]=d*i+f*o,e[1]=d*a+f*s,e[2]=d*n+f*l,e[3]=d*o-f*i,e[4]=d*s-f*a,e[5]=d*l-f*n,e[6]=u,e[7]=h,e[8]=c,e};K.scale=function(e,t,r){var i=r[0],a=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=a*t[3],e[4]=a*t[4],e[5]=a*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};K.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};K.fromQuat=function(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=r+r,s=i+i,l=a+a,u=r*o,h=i*o,c=i*s,f=a*o,d=a*s,p=a*l,m=n*o,g=n*s,_=n*l;return e[0]=1-c-p,e[3]=h-_,e[6]=f+g,e[1]=h+_,e[4]=1-u-p,e[7]=d-m,e[2]=f-g,e[5]=d+m,e[8]=1-u-c,e};K.normalFromMat4=function(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=t[9],f=t[10],d=t[11],p=t[12],m=t[13],g=t[14],_=t[15],b=r*s-i*o,x=r*l-a*o,v=r*u-n*o,w=i*l-a*s,S=i*u-n*s,E=a*u-n*l,M=h*m-c*p,L=h*g-f*p,I=h*_-d*p,C=c*g-f*m,F=c*_-d*m,U=f*_-d*g,O=b*U-x*F+v*C+w*I-S*L+E*M;return O?(O=1/O,e[0]=(s*U-l*F+u*C)*O,e[1]=(l*I-o*U-u*L)*O,e[2]=(o*F-s*I+u*M)*O,e[3]=(a*F-i*U-n*C)*O,e[4]=(r*U-a*I+n*L)*O,e[5]=(i*I-r*F-n*M)*O,e[6]=(m*E-g*S+_*w)*O,e[7]=(g*v-p*E-_*x)*O,e[8]=(p*S-m*v+_*b)*O,e):null};K.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};var W={};W.create=function(){var e=new We(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};W.rotationTo=function(){var e=T.create(),t=T.fromValues(1,0,0),r=T.fromValues(0,1,0);return function(i,a,n){var o=T.dot(a,n);return o<-.999999?(T.cross(e,t,a),T.length(e)<1e-6&&T.cross(e,r,a),T.normalize(e,e),W.setAxisAngle(i,e,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(T.cross(e,a,n),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=1+o,W.normalize(i,i))}}();W.setAxes=function(){var e=K.create();return function(t,r,i,a){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=a[0],e[4]=a[1],e[7]=a[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],W.normalize(t,W.fromMat3(t,e))}}();W.clone=P.clone;W.fromValues=P.fromValues;W.copy=P.copy;W.set=P.set;W.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};W.setAxisAngle=function(e,t,r){r=r*.5;var i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e};W.add=P.add;W.multiply=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=r[0],l=r[1],u=r[2],h=r[3];return e[0]=i*h+o*s+a*u-n*l,e[1]=a*h+o*l+n*s-i*u,e[2]=n*h+o*u+i*l-a*s,e[3]=o*h-i*s-a*l-n*u,e};W.mul=W.multiply;W.scale=P.scale;W.rotateX=function(e,t,r){r*=.5;var i=t[0],a=t[1],n=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+o*s,e[1]=a*l+n*s,e[2]=n*l-a*s,e[3]=o*l-i*s,e};W.rotateY=function(e,t,r){r*=.5;var i=t[0],a=t[1],n=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-n*s,e[1]=a*l+o*s,e[2]=n*l+i*s,e[3]=o*l-a*s,e};W.rotateZ=function(e,t,r){r*=.5;var i=t[0],a=t[1],n=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=a*l-i*s,e[2]=n*l+o*s,e[3]=o*l-n*s,e};W.calculateW=function(e,t){var r=t[0],i=t[1],a=t[2];return e[0]=r,e[1]=i,e[2]=a,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-a*a)),e};W.dot=P.dot;W.lerp=P.lerp;W.slerp=function(e,t,r,i){var a=t[0],n=t[1],o=t[2],s=t[3],l=r[0],u=r[1],h=r[2],c=r[3],f,d,p,m,g;return d=a*l+n*u+o*h+s*c,d<0&&(d=-d,l=-l,u=-u,h=-h,c=-c),1-d>1e-6?(f=Math.acos(d),p=Math.sin(f),m=Math.sin((1-i)*f)/p,g=Math.sin(i*f)/p):(m=1-i,g=i),e[0]=m*a+g*l,e[1]=m*n+g*u,e[2]=m*o+g*h,e[3]=m*s+g*c,e};W.invert=function(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=r*r+i*i+a*a+n*n,s=o?1/o:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-a*s,e[3]=n*s,e};W.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};W.length=P.length;W.len=W.length;W.squaredLength=P.squaredLength;W.sqrLen=W.squaredLength;W.normalize=P.normalize;W.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{var a=0;t[4]>t[0]&&(a=1),t[8]>t[a*3+a]&&(a=2);var n=(a+1)%3,o=(a+2)%3;i=Math.sqrt(t[a*3+a]-t[n*3+n]-t[o*3+o]+1),e[a]=.5*i,i=.5/i,e[3]=(t[n*3+o]-t[o*3+n])*i,e[n]=(t[n*3+a]+t[a*3+n])*i,e[o]=(t[o*3+a]+t[a*3+o])*i}return e};var k=function(){this._axisX=new A,this._axisY=new A,this._axisZ=new A,this.array=R.create(),this._dirty=!0};k.prototype={constructor:k,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return R.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new k().copy(this)},copy:function(e){return R.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return R.determinant(this.array)},fromQuat:function(e){return R.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return R.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return k.fromMat2d(this,e),this},frustum:function(e,t,r,i,a,n){return R.frustum(this.array,e,t,r,i,a,n),this._dirty=!0,this},identity:function(){return R.identity(this.array),this._dirty=!0,this},invert:function(){return R.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return R.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return R.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return R.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return R.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return R.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,i,a,n){return R.ortho(this.array,e,t,r,i,a,n),this._dirty=!0,this},perspective:function(e,t,r,i){return R.perspective(this.array,e,t,r,i),this._dirty=!0,this},rotate:function(e,t){return R.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return R.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return R.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return R.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return R.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return R.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return R.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=T.create(),t=T.create(),r=T.create(),i=K.create();return function(a,n,o){var s=this.array;T.set(e,s[0],s[1],s[2]),T.set(t,s[4],s[5],s[6]),T.set(r,s[8],s[9],s[10]);var l=T.length(e),u=T.length(t),h=T.length(r),c=this.determinant();c<0&&(l=-l),a&&a.set(l,u,h),o.set(s[12],s[13],s[14]),K.fromMat4(i,s),i[0]/=l,i[1]/=l,i[2]/=l,i[3]/=u,i[4]/=u,i[5]/=u,i[6]/=h,i[7]/=h,i[8]/=h,W.fromMat3(n.array,i),W.normalize(n.array,n.array),n._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Si=Object.defineProperty;if(Si){var ba=k.prototype;Si(ba,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),Si(ba,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),Si(ba,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}k.adjoint=function(e,t){return R.adjoint(e.array,t.array),e._dirty=!0,e};k.copy=function(e,t){return R.copy(e.array,t.array),e._dirty=!0,e};k.determinant=function(e){return R.determinant(e.array)};k.identity=function(e){return R.identity(e.array),e._dirty=!0,e};k.ortho=function(e,t,r,i,a,n,o){return R.ortho(e.array,t,r,i,a,n,o),e._dirty=!0,e};k.perspective=function(e,t,r,i,a){return R.perspective(e.array,t,r,i,a),e._dirty=!0,e};k.lookAt=function(e,t,r,i){return R.lookAt(e.array,t.array,r.array,i.array),e._dirty=!0,e};k.invert=function(e,t){return R.invert(e.array,t.array),e._dirty=!0,e};k.mul=function(e,t,r){return R.mul(e.array,t.array,r.array),e._dirty=!0,e};k.multiply=k.mul;k.fromQuat=function(e,t){return R.fromQuat(e.array,t.array),e._dirty=!0,e};k.fromRotationTranslation=function(e,t,r){return R.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};k.fromMat2d=function(i,r){i._dirty=!0;var r=r.array,i=i.array;return i[0]=r[0],i[4]=r[2],i[12]=r[4],i[1]=r[1],i[5]=r[3],i[13]=r[5],i};k.rotate=function(e,t,r,i){return R.rotate(e.array,t.array,r,i.array),e._dirty=!0,e};k.rotateX=function(e,t,r){return R.rotateX(e.array,t.array,r),e._dirty=!0,e};k.rotateY=function(e,t,r){return R.rotateY(e.array,t.array,r),e._dirty=!0,e};k.rotateZ=function(e,t,r){return R.rotateZ(e.array,t.array,r),e._dirty=!0,e};k.scale=function(e,t,r){return R.scale(e.array,t.array,r.array),e._dirty=!0,e};k.transpose=function(e,t){return R.transpose(e.array,t.array),e._dirty=!0,e};k.translate=function(e,t,r){return R.translate(e.array,t.array,r.array),e._dirty=!0,e};var ue=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i===void 0?1:i,this.array=W.fromValues(e,t,r,i),this._dirty=!0};ue.prototype={constructor:ue,add:function(e){return W.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return W.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ue(this.x,this.y,this.z,this.w)},conjugate:function(){return W.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return W.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return W.dot(this.array,e.array)},fromMat3:function(e){return W.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=K.create();return function(t){return K.fromMat4(e,t.array),K.transpose(e,e),W.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return W.identity(this.array),this._dirty=!0,this},invert:function(){return W.invert(this.array,this.array),this._dirty=!0,this},len:function(){return W.len(this.array)},length:function(){return W.length(this.array)},lerp:function(e,t,r){return W.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return W.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return W.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return W.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return W.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return W.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return W.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return W.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return W.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return W.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return W.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return W.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return W.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return W.sqrLen(this.array)},squaredLength:function(){return W.squaredLength(this.array)},fromEuler:function(e,t){return ue.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Wr=Object.defineProperty;if(Wr){var Mi=ue.prototype;Wr(Mi,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Wr(Mi,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Wr(Mi,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Wr(Mi,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ue.add=function(e,t,r){return W.add(e.array,t.array,r.array),e._dirty=!0,e};ue.set=function(e,t,r,i,a){W.set(e.array,t,r,i,a),e._dirty=!0};ue.copy=function(e,t){return W.copy(e.array,t.array),e._dirty=!0,e};ue.calculateW=function(e,t){return W.calculateW(e.array,t.array),e._dirty=!0,e};ue.conjugate=function(e,t){return W.conjugate(e.array,t.array),e._dirty=!0,e};ue.identity=function(e){return W.identity(e.array),e._dirty=!0,e};ue.invert=function(e,t){return W.invert(e.array,t.array),e._dirty=!0,e};ue.dot=function(e,t){return W.dot(e.array,t.array)};ue.len=function(e){return W.length(e.array)};ue.lerp=function(e,t,r,i){return W.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};ue.slerp=function(e,t,r,i){return W.slerp(e.array,t.array,r.array,i),e._dirty=!0,e};ue.mul=function(e,t,r){return W.multiply(e.array,t.array,r.array),e._dirty=!0,e};ue.multiply=ue.mul;ue.rotateX=function(e,t,r){return W.rotateX(e.array,t.array,r),e._dirty=!0,e};ue.rotateY=function(e,t,r){return W.rotateY(e.array,t.array,r),e._dirty=!0,e};ue.rotateZ=function(e,t,r){return W.rotateZ(e.array,t.array,r),e._dirty=!0,e};ue.setAxisAngle=function(e,t,r){return W.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};ue.normalize=function(e,t){return W.normalize(e.array,t.array),e._dirty=!0,e};ue.sqrLen=function(e){return W.sqrLen(e.array)};ue.squaredLength=ue.sqrLen;ue.fromMat3=function(e,t){return W.fromMat3(e.array,t.array),e._dirty=!0,e};ue.setAxes=function(e,t,r,i){return W.setAxes(e.array,t.array,r.array,i.array),e._dirty=!0,e};ue.rotationTo=function(e,t,r){return W.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};ue.fromEuler=function(e,t,h){e._dirty=!0,t=t.array;var i=e.array,a=Math.cos(t[0]/2),n=Math.cos(t[1]/2),o=Math.cos(t[2]/2),s=Math.sin(t[0]/2),l=Math.sin(t[1]/2),u=Math.sin(t[2]/2),h=(h||"XYZ").toUpperCase();switch(h){case"XYZ":i[0]=s*n*o+a*l*u,i[1]=a*l*o-s*n*u,i[2]=a*n*u+s*l*o,i[3]=a*n*o-s*l*u;break;case"YXZ":i[0]=s*n*o+a*l*u,i[1]=a*l*o-s*n*u,i[2]=a*n*u-s*l*o,i[3]=a*n*o+s*l*u;break;case"ZXY":i[0]=s*n*o-a*l*u,i[1]=a*l*o+s*n*u,i[2]=a*n*u+s*l*o,i[3]=a*n*o-s*l*u;break;case"ZYX":i[0]=s*n*o-a*l*u,i[1]=a*l*o+s*n*u,i[2]=a*n*u-s*l*o,i[3]=a*n*o+s*l*u;break;case"YZX":i[0]=s*n*o+a*l*u,i[1]=a*l*o+s*n*u,i[2]=a*n*u-s*l*o,i[3]=a*n*o-s*l*u;break;case"XZY":i[0]=s*n*o-a*l*u,i[1]=a*l*o-s*n*u,i[2]=a*n*u+s*l*o,i[3]=a*n*o+s*l*u;break}};var It=T.set,Ei=T.copy,Ue=function(e,t){this.min=e||new A(1/0,1/0,1/0),this.max=t||new A(-1/0,-1/0,-1/0),this.vertices=null};Ue.prototype={constructor:Ue,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,i=t.array,a=r.array;Ei(i,e[0]),Ei(a,e[0]);for(var n=1;n<e.length;n++){var o=e[n];o[0]<i[0]&&(i[0]=o[0]),o[1]<i[1]&&(i[1]=o[1]),o[2]<i[2]&&(i[2]=o[2]),o[0]>a[0]&&(a[0]=o[0]),o[1]>a[1]&&(a[1]=o[1]),o[2]>a[2]&&(a[2]=o[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return T.min(t.array,t.array,e.min.array),T.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return T.max(t.array,t.array,e.min.array),T.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,a=e.max.array;return!(t[0]>a[0]||t[1]>a[1]||t[2]>a[2]||r[0]<i[0]||r[1]<i[1]||r[2]<i[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,a=e.max.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=a[0]&&r[1]>=a[1]&&r[2]>=a[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,i=e.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=T.create(),t=T.create(),r=T.create(),i=T.create(),a=T.create(),n=T.create();return function(o,s){var l=o.min.array,u=o.max.array,h=s.array;return e[0]=h[0]*l[0],e[1]=h[1]*l[0],e[2]=h[2]*l[0],t[0]=h[0]*u[0],t[1]=h[1]*u[0],t[2]=h[2]*u[0],r[0]=h[4]*l[1],r[1]=h[5]*l[1],r[2]=h[6]*l[1],i[0]=h[4]*u[1],i[1]=h[5]*u[1],i[2]=h[6]*u[1],a[0]=h[8]*l[2],a[1]=h[9]*l[2],a[2]=h[10]*l[2],n[0]=h[8]*u[2],n[1]=h[9]*u[2],n[2]=h[10]*u[2],l=this.min.array,u=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],i[0])+Math.min(a[0],n[0])+h[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],i[1])+Math.min(a[1],n[1])+h[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],i[2])+Math.min(a[2],n[2])+h[14],u[0]=Math.max(e[0],t[0])+Math.max(r[0],i[0])+Math.max(a[0],n[0])+h[12],u[1]=Math.max(e[1],t[1])+Math.max(r[1],i[1])+Math.max(a[1],n[1])+h[13],u[2]=Math.max(e[2],t[2])+Math.max(r[2],i[2])+Math.max(a[2],n[2])+h[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,i=e.array,a=t[0],n=t[1],o=t[2],s=r[0],l=r[1],u=t[2],h=r[0],c=r[1],f=r[2];if(i[15]===1)t[0]=i[0]*a+i[12],t[1]=i[5]*n+i[13],r[2]=i[10]*o+i[14],r[0]=i[0]*h+i[12],r[1]=i[5]*c+i[13],t[2]=i[10]*f+i[14];else{var d=-1/o;t[0]=i[0]*a*d,t[1]=i[5]*n*d,r[2]=(i[10]*o+i[14])*d,d=-1/u,r[0]=i[0]*s*d,r[1]=i[5]*l*d,d=-1/f,t[2]=(i[10]*f+i[14])*d}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=T.fromValues(0,0,0);this.vertices=e}var r=this.min.array,i=this.max.array;return It(e[0],r[0],r[1],r[2]),It(e[1],r[0],i[1],r[2]),It(e[2],i[0],r[1],r[2]),It(e[3],i[0],i[1],r[2]),It(e[4],r[0],r[1],i[2]),It(e[5],r[0],i[1],i[2]),It(e[6],i[0],r[1],i[2]),It(e[7],i[0],i[1],i[2]),this},copy:function(e){var t=this.min,r=this.max;return Ei(t.array,e.min.array),Ei(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new Ue;return e.copy(this),e}};var bu=0,yt=ke.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+bu++),this.position||(this.position=new A),this.rotation||(this.rotation=new ue),this.scale||(this.scale=new A(1,1,1)),this.worldTransform=new k,this.localTransform=new k,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var i=t[r];if(i.name===e)return i;var a=i.getDescendantByName(e);if(a)return a}},queryNode:function(e){if(e){for(var t=e.split("/"),r=this,i=0;i<t.length;i++){var a=t[i];if(a){for(var n=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===a){r=l,n=!0;break}}if(!n)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,i=0,a=r.length;i<a;i++)r[i].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,i=0,a=r.length;i<a;i++){var n=r[i];e.call(t,n,i)}},setLocalTransform:function(e){R.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){R.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=R.create();return function(t){var r=this.localTransform,i=this.worldTransform;this._parent?(R.invert(e,this._parent.worldTransform.array),R.multiply(r.array,e,i.array)):R.copy(r.array,i.array);var a=t?null:this.scale;r.decomposeMatrix(a,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var i=this.localTransform.array;R.fromRotationTranslation(i,t.array,e.array),R.scale(i,i,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?R.multiplyAffine(t,this._parent.worldTransform.array,e):R.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,i=t.length;r<i;r++)t[r].update(e)},getBoundingBox:function(){function e(a){return!a.invisible&&a.geometry}var t=new Ue,r=new k,i=new k;return function(a,n){return n=n||new Ue,this._parent?k.invert(i,this._parent.worldTransform):k.identity(i),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(t.copy(o.geometry.boundingBox),k.multiply(r,i,o.worldTransform),t.applyTransform(r),n.union(t))},this,e),n}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new A(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new A,t=new k;return function(r,i,a){e.copy(this.position).subtract(r);var n=this.localTransform;n.identity(),n.translate(r),n.rotate(a,i),t.fromRotationTranslation(this.rotation,e),n.multiply(t),n.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new k;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()}),Ye=yt.extend({material:null,geometry:null,mode:D.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:D.BACK,frontFace:D.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=yt.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=yt.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var i=e[r];t[i]!==this[i]&&(t[i]=this[i])}return t}}()});Ye.POINTS=D.POINTS;Ye.LINES=D.LINES;Ye.LINE_LOOP=D.LINE_LOOP;Ye.LINE_STRIP=D.LINE_STRIP;Ye.TRIANGLES=D.TRIANGLES;Ye.TRIANGLE_STRIP=D.TRIANGLE_STRIP;Ye.TRIANGLE_FAN=D.TRIANGLE_FAN;Ye.BACK=D.BACK;Ye.FRONT=D.FRONT;Ye.FRONT_AND_BACK=D.FRONT_AND_BACK;Ye.CW=D.CW;Ye.CCW=D.CCW;var sn=ke.extend({scene:null,camera:null,renderer:null},function(){this._ray=new or,this._ndc=new $},{pick:function(e,t,r){var i=this.pickAll(e,t,[],r);return i[0]||null},pickAll:function(e,t,r,i){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,i||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof Ye&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===D.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var i=0;i<e._children.length;i++)this._intersectNode(e._children[i],t,r)},_intersectRenderable:function(){var e=new A,t=new A,r=new A,i=new or,a=new k;return function(n,o){var s=n.isSkinnedMesh();i.copy(this._ray),k.invert(a,n.worldTransform),s||i.applyTransform(a);var l=n.geometry,u=s?n.skeleton.boundingBox:l.boundingBox;if(!(u&&!i.intersectBoundingBox(u))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,n,o);return}else if(l.pickByRay){l.pickByRay(i,n,o);return}var h=n.cullFace===D.BACK&&n.frontFace===D.CCW||n.cullFace===D.FRONT&&n.frontFace===D.CW,c,f=l.indices,d=l.attributes.position,p=l.attributes.weight,m=l.attributes.joint,g,_=[];if(!(!d||!d.value||!f)){if(s){g=n.skeleton.getSubSkinMatrices(n.__uid__,n.joints);for(var b=0;b<n.joints.length;b++){_[b]=_[b]||[];for(var x=0;x<16;x++)_[b][x]=g[b*16+x]}var v=[],w=[],S=[],E=[],M=[],L=l.attributes.skinnedPosition;(!L||!L.value)&&(l.createAttribute("skinnedPosition","f",3),L=l.attributes.skinnedPosition,L.init(l.vertexCount));for(var b=0;b<l.vertexCount;b++){d.get(b,v),p.get(b,w),m.get(b,S),w[3]=1-w[0]-w[1]-w[2],T.set(E,0,0,0);for(var x=0;x<4;x++)S[x]>=0&&w[x]>1e-4&&(T.transformMat4(M,v,_[S[x]]),T.scaleAndAdd(E,E,M,w[x]));L.set(b,E)}}for(var b=0;b<f.length;b+=3){var I=f[b],C=f[b+1],F=f[b+2],U=s?l.attributes.skinnedPosition:d;if(U.get(I,e.array),U.get(C,t.array),U.get(F,r.array),h?c=i.intersectTriangle(e,t,r,n.culling):c=i.intersectTriangle(e,r,t,n.culling),c){var O=new A;s?A.copy(O,c):A.transformMat4(O,c,n.worldTransform),o.push(new sn.Intersection(c,O,n,[I,C,F],b/3,A.dist(O,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});sn.Intersection=function(e,t,r,i,a,n){this.point=e,this.pointWorld=t,this.target=r,this.triangle=i,this.triangleIndex=a,this.distance=n};var Xr="__dt__",Ar=function(){this._contextId=0,this._caches=[],this._context={}};Ar.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=Xr+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=Xr+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!0)},fresh:function(e){e=e||"";var t=Xr+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=Xr+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!1)},isDirty:function(e){e=e||"";var t=Xr+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(i){e&&e.call(t,i)})},miss:function(e){return!this._context.hasOwnProperty(e)}};Ar.prototype.constructor=Ar;var z=ke.extend({width:512,height:512,type:D.UNSIGNED_BYTE,format:D.RGBA,wrapS:D.REPEAT,wrapT:D.REPEAT,minFilter:D.LINEAR_MIPMAP_LINEAR,magFilter:D.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Ar},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===D.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===z.SRGB&&!r&&(this.format=z.RGB),this.format===z.SRGB_ALPHA&&!r&&(this.format=z.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?D.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?D.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===D.NEAREST_MIPMAP_NEAREST||e===D.NEAREST_MIPMAP_LINEAR?D.NEAREST:e===D.LINEAR_MIPMAP_LINEAR||e===D.LINEAR_MIPMAP_NEAREST?D.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(z.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(z.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});z.BYTE=D.BYTE;z.UNSIGNED_BYTE=D.UNSIGNED_BYTE;z.SHORT=D.SHORT;z.UNSIGNED_SHORT=D.UNSIGNED_SHORT;z.INT=D.INT;z.UNSIGNED_INT=D.UNSIGNED_INT;z.FLOAT=D.FLOAT;z.HALF_FLOAT=36193;z.UNSIGNED_INT_24_8_WEBGL=34042;z.DEPTH_COMPONENT=D.DEPTH_COMPONENT;z.DEPTH_STENCIL=D.DEPTH_STENCIL;z.ALPHA=D.ALPHA;z.RGB=D.RGB;z.RGBA=D.RGBA;z.LUMINANCE=D.LUMINANCE;z.LUMINANCE_ALPHA=D.LUMINANCE_ALPHA;z.SRGB=35904;z.SRGB_ALPHA=35906;z.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;z.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;z.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;z.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;z.NEAREST=D.NEAREST;z.LINEAR=D.LINEAR;z.NEAREST_MIPMAP_NEAREST=D.NEAREST_MIPMAP_NEAREST;z.LINEAR_MIPMAP_NEAREST=D.LINEAR_MIPMAP_NEAREST;z.NEAREST_MIPMAP_LINEAR=D.NEAREST_MIPMAP_LINEAR;z.LINEAR_MIPMAP_LINEAR=D.LINEAR_MIPMAP_LINEAR;z.REPEAT=D.REPEAT;z.CLAMP_TO_EDGE=D.CLAMP_TO_EDGE;z.MIRRORED_REPEAT=D.MIRRORED_REPEAT;var Ie=Ye.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=Ye.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});Ie.POINTS=D.POINTS;Ie.LINES=D.LINES;Ie.LINE_LOOP=D.LINE_LOOP;Ie.LINE_STRIP=D.LINE_STRIP;Ie.TRIANGLES=D.TRIANGLES;Ie.TRIANGLE_STRIP=D.TRIANGLE_STRIP;Ie.TRIANGLE_FAN=D.TRIANGLE_FAN;Ie.BACK=D.BACK;Ie.FRONT=D.FRONT;Ie.FRONT_AND_BACK=D.FRONT_AND_BACK;Ie.CW=D.CW;Ie.CCW=D.CCW;var gi={};gi.isPowerOfTwo=function(e){return(e&e-1)===0};gi.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};gi.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};var $n=gi.isPowerOfTwo;function Qn(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function Tu(e,t){var r=Qn(e.width),i=Qn(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=i;var a=t.getContext("2d");return a.drawImage(e.image,0,0,r,i),t}var J=z.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type,a=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===z.REPEAT||this.wrapT===z.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,a?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,a?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,a?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a?this.minFilter:this.getAvailableMinFilter());var n=e.getGLExtension("EXT_texture_filter_anisotropic");if(n&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,n.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var o=e.getGLExtension("OES_texture_half_float");o||(i=D.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,u=0;u<this.mipmaps.length;u++){var h=this.mipmaps[u];this._updateTextureData(t,h,u,s,l,r,i,!1),s/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i,a),this.useMipmap&&(!this.NPOT||a)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,i,a,n,o,s){if(t.image){var l=t.image;s&&(this._potCanvas=Tu(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,n,n,o,l)}else n<=z.COMPRESSED_RGBA_S3TC_DXT5_EXT&&n>=z.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,n,i,a,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,n,i,a,0,n,o,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return $n(this.width)&&$n(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=se.createImage();t&&(r.crossOrigin=t);var i=this;return r.onload=function(){i.dirty(),i.trigger("success",i)},r.onerror=function(){i.trigger("error",i)},r.src=e,this.image=r,this}});Object.defineProperty(J.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(J.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function ts(e){return{byte:se.Int8Array,ubyte:se.Uint8Array,short:se.Int16Array,ushort:se.Uint16Array}[e]||se.Float32Array}function Ta(e){return"attr_"+e}function Lr(e,t,r,i){switch(this.name=e,this.type=t,this.size=r,this.semantic=i||"",this.value=null,r){case 1:this.get=function(a){return this.value[a]},this.set=function(a,n){this.value[a]=n},this.copy=function(a,n){this.value[a]=this.value[a]};break;case 2:this.get=function(a,n){var o=this.value;return n[0]=o[a*2],n[1]=o[a*2+1],n},this.set=function(a,n){var o=this.value;o[a*2]=n[0],o[a*2+1]=n[1]},this.copy=function(a,n){var o=this.value;n*=2,a*=2,o[a]=o[n],o[a+1]=o[n+1]};break;case 3:this.get=function(a,n){var o=a*3,s=this.value;return n[0]=s[o],n[1]=s[o+1],n[2]=s[o+2],n},this.set=function(a,n){var o=a*3,s=this.value;s[o]=n[0],s[o+1]=n[1],s[o+2]=n[2]},this.copy=function(a,n){var o=this.value;n*=3,a*=3,o[a]=o[n],o[a+1]=o[n+1],o[a+2]=o[n+2]};break;case 4:this.get=function(a,n){var o=this.value,s=a*4;return n[0]=o[s],n[1]=o[s+1],n[2]=o[s+2],n[3]=o[s+3],n},this.set=function(a,n){var o=this.value,s=a*4;o[s]=n[0],o[s+1]=n[1],o[s+2]=n[2],o[s+3]=n[3]},this.copy=function(a,n){var o=this.value;n*=4,a*=4,o[a]=o[n],o[a+1]=o[n+1],o[a+2]=o[n+2],o[a+3]=o[n+3]}}}Lr.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=ts(this.type);this.value=new t(e*this.size)}};Lr.prototype.fromArray=function(e){var t=ts(this.type),r;if(e[0]&&e[0].length){var i=0,a=this.size;r=new t(e.length*a);for(var n=0;n<e.length;n++)for(var o=0;o<a;o++)r[i++]=e[n][o]}else r=new t(e);this.value=r};Lr.prototype.clone=function(e){var t=new Lr(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function rs(e,t,r,i,a){this.name=e,this.type=t,this.buffer=r,this.size=i,this.semantic=a,this.symbol="",this.needsRemove=!1}function is(e){this.buffer=e,this.count=0}var Ke=ke.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Ar,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(Ta(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?se.Uint32Array:se.Uint16Array;if(e[0]&&e[0].length){var i=0,a=3;t=new r(e.length*a);for(var n=0;n<e.length;n++)for(var o=0;o<a;o++)t[i++]=e[n][o]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,i){var a=new Lr(e,t,r,i);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=a,this._attributeList.push(e),a},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],i=this.vertexCount,a=0;a<t.length;a++){var n=t[a],o=this.attributes[n];o.value&&o.value.length===i*o.size&&r.push(n)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),i=t.isDirty("indices");if(r||i){this._updateBuffer(e.gl,r,i);for(var a=this.getEnabledAttributes(),n=0;n<a.length;n++)t.fresh(Ta(a[n]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var i=this._cache,a=i.get("chunks"),n=!1;a||(a=[],a[0]={attributeBuffers:[],indicesBuffer:null},i.put("chunks",a),n=!0);var o=a[0],s=o.attributeBuffers,l=o.indicesBuffer;if(t||n){var u=this.getEnabledAttributes(),h={};if(!n)for(var c=0;c<s.length;c++)h[s[c].name]=s[c];for(var f=0;f<u.length;f++){var d=u[f],p=this.attributes[d],m;n||(m=h[d]);var g;m?g=m.buffer:g=e.createBuffer(),i.isDirty(Ta(d))&&(e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,p.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[f]=new rs(d,p.type,g,p.size,p.semantic)}for(var c=f;c<s.length;c++)e.deleteBuffer(s[c].buffer);s.length=f}this.isUseIndices()&&(r||n)&&(l||(l=new is(e.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var a=r[i],n=0;n<a.attributeBuffers.length;n++){var o=a.attributeBuffers[n];e.gl.deleteBuffer(o.buffer)}a.indicesBuffer&&e.gl.deleteBuffer(a.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(Ke.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(Ke.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));Ke.STATIC_DRAW=D.STATIC_DRAW;Ke.DYNAMIC_DRAW=D.DYNAMIC_DRAW;Ke.STREAM_DRAW=D.STREAM_DRAW;Ke.AttributeBuffer=rs;Ke.IndicesBuffer=is;Ke.Attribute=Lr;var je=T.create,mr=T.add,Kt=T.set,_t=Ke.Attribute,ie=Ke.extend(function(){return{attributes:{position:new _t("position","float",3,"POSITION"),texcoord0:new _t("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new _t("texcoord1","float",2,"TEXCOORD_1"),normal:new _t("normal","float",3,"NORMAL"),tangent:new _t("tangent","float",4,"TANGENT"),color:new _t("color","float",4,"COLOR"),weight:new _t("weight","float",3,"WEIGHT"),joint:new _t("joint","float",4,"JOINT"),barycentric:new _t("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new Ue);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,i=e.max,a=r.array,n=i.array;T.set(a,t[0],t[1],t[2]),T.set(n,t[0],t[1],t[2]);for(var o=3;o<t.length;){var s=t[o++],l=t[o++],u=t[o++];s<a[0]&&(a[0]=s),l<a[1]&&(a[1]=l),u<a[2]&&(a[2]=u),s>n[0]&&(n[0]=s),l>n[1]&&(n[1]=l),u>n[2]&&(n[2]=u)}r._dirty=!0,i._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value;if(!i||i.length!==r.length)i=t.normal.value=new se.Float32Array(r.length);else for(var a=0;a<i.length;a++)i[a]=0;for(var n=je(),o=je(),s=je(),l=je(),u=je(),h=je(),c=e?e.length:this.vertexCount,f,d,p,m=0;m<c;){e?(f=e[m++],d=e[m++],p=e[m++]):(f=m++,d=m++,p=m++),Kt(n,r[f*3],r[f*3+1],r[f*3+2]),Kt(o,r[d*3],r[d*3+1],r[d*3+2]),Kt(s,r[p*3],r[p*3+1],r[p*3+2]),T.sub(l,n,o),T.sub(u,o,s),T.cross(h,l,u);for(var a=0;a<3;a++)i[f*3+a]=i[f*3+a]+h[a],i[d*3+a]=i[d*3+a]+h[a],i[p*3+a]=i[p*3+a]+h[a]}for(var a=0;a<i.length;)Kt(h,i[a],i[a+1],i[a+2]),T.normalize(h,h),i[a++]=h[0],i[a++]=h[1],i[a++]=h[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value,a=je(),n=je(),o=je(),s=je(),l=je(),u=je();i||(i=t.normal.value=new Float32Array(r.length));for(var h=e?e.length:this.vertexCount,c,f,d,p=0;p<h;){e?(c=e[p++],f=e[p++],d=e[p++]):(c=p++,f=p++,d=p++),Kt(a,r[c*3],r[c*3+1],r[c*3+2]),Kt(n,r[f*3],r[f*3+1],r[f*3+2]),Kt(o,r[d*3],r[d*3+1],r[d*3+2]),T.sub(s,a,n),T.sub(l,n,o),T.cross(u,s,l),T.normalize(u,u);for(var m=0;m<3;m++)i[c*3+m]=u[m],i[f*3+m]=u[m],i[d*3+m]=u[m]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,i=t.position.value,a=t.tangent.value,n=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var o=[],s=[],l=0;l<e;l++)o[l]=[0,0,0],s[l]=[0,0,0];for(var u=[0,0,0],h=[0,0,0],c=this.indices,f=c?c.length:this.vertexCount,d,p,m,l=0;l<f;){c?(d=c[l++],p=c[l++],m=c[l++]):(d=l++,p=l++,m=l++);var g=r[d*2],_=r[p*2],b=r[m*2],x=r[d*2+1],v=r[p*2+1],w=r[m*2+1],S=i[d*3],E=i[p*3],M=i[m*3],L=i[d*3+1],I=i[p*3+1],C=i[m*3+1],F=i[d*3+2],U=i[p*3+2],O=i[m*3+2],H=E-S,q=M-S,Z=I-L,N=C-L,B=U-F,Y=O-F,j=_-g,te=b-g,Q=v-x,ve=w-x,ee=1/(j*ve-Q*te);u[0]=(ve*H-Q*q)*ee,u[1]=(ve*Z-Q*N)*ee,u[2]=(ve*B-Q*Y)*ee,h[0]=(j*q-te*H)*ee,h[1]=(j*N-te*Z)*ee,h[2]=(j*Y-te*B)*ee,mr(o[d],o[d],u),mr(o[p],o[p],u),mr(o[m],o[m],u),mr(s[d],s[d],h),mr(s[p],s[p],h),mr(s[m],s[m],h)}for(var Ee=je(),tt=je(),de=je(),l=0;l<e;l++){de[0]=n[l*3],de[1]=n[l*3+1],de[2]=n[l*3+2];var ze=o[l];T.scale(Ee,de,T.dot(de,ze)),T.sub(Ee,ze,Ee),T.normalize(Ee,Ee),T.cross(tt,de,ze),a[l*4]=Ee[0],a[l*4+1]=Ee[1],a[l*4+2]=Ee[2],a[l*4+3]=T.dot(tt,s[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new se.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),i={},a=0;a<r.length;a++){var n=r[a];i[n]=e[n].value,e[n].init(this.indices.length)}for(var o=0,s=0;s<t.length;s++){for(var l=t[s],a=0;a<r.length;a++)for(var n=r[a],u=e[n].value,h=e[n].size,c=0;c<h;c++)u[o*h+c]=i[n][l*h+c];t[s]=o,o++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var i=0;i<(r?r.length:this.vertexCount/3);)for(var a=0;a<3;a++){var n=r?r[i++]:i*3+a;t[n*3+a]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,i=t.normal.value,a=t.tangent.value;e=e.array;var n=R.create();R.invert(n,e),R.transpose(n,n);var o=T.transformMat4,s=T.forEach;s(r,3,0,null,o,e),i&&s(i,3,0,null,o,n),a&&s(a,4,0,null,o,n),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var a=r[i],n=0;n<a.attributeBuffers.length;n++){var o=a.attributeBuffers[n];e.gl.deleteBuffer(o.buffer)}a.indicesBuffer&&e.gl.deleteBuffer(a.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});ie.STATIC_DRAW=Ke.STATIC_DRAW;ie.DYNAMIC_DRAW=Ke.DYNAMIC_DRAW;ie.STREAM_DRAW=Ke.STREAM_DRAW;ie.AttributeBuffer=Ke.AttributeBuffer;ie.IndicesBuffer=Ke.IndicesBuffer;ie.Attribute=_t;const wu=`vec3 calcAmbientSHLight(int idx, vec3 N) {
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
}`;var ut="uniform vec3 ",jr="uniform float ",gr="@export clay.header.",_r="@end",Ge=":unconfigurable;";const Su=[gr+"directional_light",ut+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+Ge,ut+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+Ge,_r,gr+"ambient_light",ut+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+Ge,_r,gr+"ambient_sh_light",ut+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+Ge,ut+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+Ge,wu,_r,gr+"ambient_cubemap_light",ut+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ge,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ge,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ge,_r,gr+"point_light",ut+"pointLightPosition[POINT_LIGHT_COUNT]"+Ge,jr+"pointLightRange[POINT_LIGHT_COUNT]"+Ge,ut+"pointLightColor[POINT_LIGHT_COUNT]"+Ge,_r,gr+"spot_light",ut+"spotLightPosition[SPOT_LIGHT_COUNT]"+Ge,ut+"spotLightDirection[SPOT_LIGHT_COUNT]"+Ge,jr+"spotLightRange[SPOT_LIGHT_COUNT]"+Ge,jr+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+Ge,jr+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+Ge,jr+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+Ge,ut+"spotLightColor[SPOT_LIGHT_COUNT]"+Ge,_r].join(`
`);G.import(Su);var dt=yt.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=yt.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),ri=function(e,t){this.normal=e||new A(0,1,0),this.distance=t||0};ri.prototype={constructor:ri,distanceToPoint:function(e){return T.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new A);var r=this.distanceToPoint(e);return T.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/T.len(this.normal.array);T.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,i=T.dot(t[0].array,r)>this.distance,a=1;a<8;a++)if(T.dot(t[a].array,r)>this.distance!=i)return!0},intersectLine:function(){var e=T.create();return function(t,r,i){var a=this.distanceToPoint(t),n=this.distanceToPoint(r);if(a>0&&n>0||a<0&&n<0)return null;var o=this.normal.array,s=this.distance,l=t.array;T.sub(e,r.array,t.array),T.normalize(e,e);var u=T.dot(o,e);if(u===0)return null;i||(i=new A);var h=(T.dot(o,l)-s)/u;return T.scaleAndAdd(i.array,l,e,-h),i._dirty=!0,i}}(),applyTransform:function(){var e=R.create(),t=P.create(),r=P.create();return r[3]=1,function(i){i=i.array,T.scale(r,this.normal.array,this.distance),P.transformMat4(r,r,i),this.distance=T.dot(r,this.normal.array),R.invert(e,i),R.transpose(e,e),t[3]=0,T.copy(t,this.normal.array),P.transformMat4(t,t,e),T.copy(this.normal.array,t)}}(),copy:function(e){T.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new ri;return e.copy(this),e}};var Te=T.set,Jn=T.copy,eo=T.transformMat4,wa=Math.min,Sa=Math.max,Ji=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new ri);this.boundingBox=new Ue,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=T.fromValues(0,0,0)};Ji.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,i=r[0],a=r[1],n=r[2],o=r[3],s=r[4],l=r[5],u=r[6],h=r[7],c=r[8],f=r[9],d=r[10],p=r[11],m=r[12],g=r[13],_=r[14],b=r[15];Te(t[0].normal.array,o-i,h-s,p-c),t[0].distance=-(b-m),t[0].normalize(),Te(t[1].normal.array,o+i,h+s,p+c),t[1].distance=-(b+m),t[1].normalize(),Te(t[2].normal.array,o+a,h+l,p+f),t[2].distance=-(b+g),t[2].normalize(),Te(t[3].normal.array,o-a,h-l,p-f),t[3].distance=-(b-g),t[3].normalize(),Te(t[4].normal.array,o-n,h-u,p-d),t[4].distance=-(b-_),t[4].normalize(),Te(t[5].normal.array,o+n,h+u,p+d),t[5].distance=-(b+_),t[5].normalize();var x=this.boundingBox,v=this.vertices;if(b===0){var w=l/i,S=-_/(d-1),E=-_/(d+1),M=-E/l,L=-S/l;x.min.set(-M*w,-M,E),x.max.set(M*w,M,S),Te(v[0],-M*w,-M,E),Te(v[1],-M*w,M,E),Te(v[2],M*w,-M,E),Te(v[3],M*w,M,E),Te(v[4],-L*w,-L,S),Te(v[5],-L*w,L,S),Te(v[6],L*w,-L,S),Te(v[7],L*w,L,S)}else{var I=(-1-m)/i,C=(1-m)/i,F=(1-g)/l,U=(-1-g)/l,O=(-1-_)/d,H=(1-_)/d;x.min.set(Math.min(I,C),Math.min(U,F),Math.min(H,O)),x.max.set(Math.max(C,I),Math.max(F,U),Math.max(O,H));var q=x.min.array,Z=x.max.array;Te(v[0],q[0],q[1],q[2]),Te(v[1],q[0],Z[1],q[2]),Te(v[2],Z[0],q[1],q[2]),Te(v[3],Z[0],Z[1],q[2]),Te(v[4],q[0],q[1],Z[2]),Te(v[5],q[0],Z[1],Z[2]),Te(v[6],Z[0],q[1],Z[2]),Te(v[7],Z[0],Z[1],Z[2])}},getTransformedBoundingBox:function(){var e=T.create();return function(t,r){var i=this.vertices,a=r.array,n=t.min,o=t.max,s=n.array,l=o.array,u=i[0];eo(e,u,a),Jn(s,e),Jn(l,e);for(var h=1;h<8;h++)u=i[h],eo(e,u,a),s[0]=wa(e[0],s[0]),s[1]=wa(e[1],s[1]),s[2]=wa(e[2],s[2]),l[0]=Sa(e[0],l[0]),l[1]=Sa(e[1],l[1]),l[2]=Sa(e[2],l[2]);return n._dirty=!0,o._dirty=!0,t}}()};var Cr=yt.extend(function(){return{projectionMatrix:new k,invProjectionMatrix:new k,viewMatrix:new k,frustum:new Ji}},function(){this.update(!0)},{update:function(e){yt.prototype.update.call(this,e),k.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),k.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){k.copy(this.viewMatrix,e),k.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){k.copy(this.projectionMatrix,e),k.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=P.create();return function(t,r){var i=r!==void 0?r:new or,a=t.array[0],n=t.array[1];return P.set(e,a,n,-1,1),P.transformMat4(e,e,this.invProjectionMatrix.array),P.transformMat4(e,e,this.worldTransform.array),T.scale(i.origin.array,e,1/e[3]),P.set(e,a,n,1,1),P.transformMat4(e,e,this.invProjectionMatrix.array),P.transformMat4(e,e,this.worldTransform.array),T.scale(e,e,1/e[3]),T.sub(i.direction.array,e,i.origin.array),T.normalize(i.direction.array,i.direction.array),i.direction._dirty=!0,i.origin._dirty=!0,i}}()}),Mu=R.create(),to=R.create(),Ma={};function Eu(e){var t=[],r=Object.keys(e);r.sort();for(var i=0;i<r.length;i++){var a=r[i];t.push(a+" "+e[a])}var n=t.join(`
`);if(Ma[n])return Ma[n];var o=we.genGUID();return Ma[n]=o,o}function ea(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}ea.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};ea.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};ea.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var Wt=yt.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new Ue,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new cr(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof Cr?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof dt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof Cr?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof dt&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var i=e[r];if(!i.invisible){var a=i.group;t[a]||(t[a]={}),t[a][i.type]=t[a][i.type]||0,t[a][i.type]++}}this._lightNumber=t;for(var n in t)this._lightProgramKeys[n]=Eu(t[n]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function i(a,n){r[a.__uid__]=n;for(var o=0;o<a._children.length;o++){var s=a._children[o],l=n._children[o];i(s,l)}}return i(e,t),t.traverse(function(a){a.skeleton&&(a.skeleton=a.skeleton.clone(r)),a.material&&(a.material=a.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,i=this._renderLists.get(r);i||(i=new ea,this._renderLists.put(r,i)),i.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var a=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,a,i,t),i.endCount(),i},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,i,a){if(!e.invisible)for(var n=0;n<e._children.length;n++){var o=e._children[n];if(o.isRenderable()){var s=o.isSkinnedMesh()?Mu:o.worldTransform.array,l=o.geometry;R.multiplyAffine(to,t.viewMatrix.array,s),(a&&!l.boundingBox||!this.isFrustumCulled(o,t,to))&&i.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,t,r,i,a)}},isFrustumCulled:function(){var e=new Ue,t=new k;return function(r,i,a){var n=r.boundingBox;if(n||(r.skeleton&&r.skeleton.boundingBox?n=r.skeleton.boundingBox:n=r.geometry.boundingBox),!n)return!1;if(t.array=a,e.transformFrom(n,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(i.frustum.boundingBox))return!0;t.array=i.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(Au);var t=this._lightUniforms;for(var r in t)for(var i in t[r])t[r][i].value.length=0;for(var a=0;a<e.length;a++){var n=e[a];if(!n.invisible){var r=n.group;for(var i in n.uniformTemplates){var o=n.uniformTemplates[i],s=o.value(n);if(s!=null){t[r]||(t[r]={}),t[r][i]||(t[r][i]={type:"",value:[]});var l=t[r][i];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var u=0;u<s.length;u++)l.value.push(s[u]);break;default:console.error("Unkown light uniform type "+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var i in r[e])if(!t[e]||r[e][i]!==t[e][i])return!0;for(var i in t[e])if(!r[e]||r[e][i]!==t[e][i])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,i){for(var a in t){var n=t[a];if(n.type==="tv"){if(!r.hasUniform(a))continue;for(var o=[],s=0;s<n.value.length;s++){var l=n.value[s],u=r.takeCurrentTextureSlot(i,l);o.push(u)}r.setUniform(i.gl,"1iv",a,o)}else r.setUniform(i.gl,n.type,a,n.value)}}return function(t,r,i){e(this._lightUniforms[r],t,i),e(this.shadowUniforms,t,i)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function Au(e,t){if(t.castShadow&&!e.castShadow)return!0}var Ai=gi.isPowerOfTwo,Lu=["px","nx","py","ny","pz","nz"],sr=z.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var n=e.getGLExtension("OES_texture_half_float");n||(i=D.FLOAT)}if(this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(t,u,l,o,s,r,i),o/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,i,a,n,o){for(var s=0;s<6;s++){var l=Lu[s],u=t.image&&t.image[l];u?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,n,n,o,u):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,n,i,a,0,n,o,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?Ai(this.image.px.width)&&Ai(this.image.px.height):Ai(this.width)&&Ai(this.height)},isRenderable:function(){return this.image.px?vr(this.image.px)&&vr(this.image.nx)&&vr(this.image.py)&&vr(this.image.ny)&&vr(this.image.pz)&&vr(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,i=this;return we.each(e,function(a,n){var o=se.createImage();t&&(o.crossOrigin=t),o.onload=function(){r--,r===0&&(i.dirty(),i.trigger("success",i))},o.onerror=function(){r--},r++,o.src=a,i.image[n]=o}),this}});Object.defineProperty(sr.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(sr.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function vr(e){return e.width>0&&e.height>0}var Oe=Cr.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=Cr.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}}),Li="framebuffer",At="renderbuffer",ro=At+"_width",io=At+"_height",Ea=At+"_attached",Aa="depthtexture_attached",$t=D.FRAMEBUFFER,qr=D.RENDERBUFFER,Qr=D.DEPTH_ATTACHMENT,as=D.COLOR_ATTACHMENT0,Se=ke.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Ar,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer($t,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var i=!1,a,n;for(var o in this._textures){i=!0;var s=this._textures[o];s&&(a=s.texture.width,n=s.texture.height,this._doAttach(e,s.texture,o,s.target))}this._width=a,this._height=n,!i&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,a,n,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var u=l[o];this._doDetach(t,o,u)}}if(!r.get(Aa)&&this.depthBuffer){r.miss(At)&&r.put(At,t.createRenderbuffer());var h=r.get(At);(a!==r.get(ro)||n!==r.get(io))&&(t.bindRenderbuffer(qr,h),t.renderbufferStorage(qr,t.DEPTH_COMPONENT16,a,n),r.put(ro,a),r.put(io,n),t.bindRenderbuffer(qr,null)),r.get(Ea)||(t.framebufferRenderbuffer($t,Qr,qr,h),r.put(Ea,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer($t,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var i=this._textures[r];if(i){var a=i.texture;if(!a.NPOT&&a.useMipmap&&a.minFilter===z.LINEAR_MIPMAP_LINEAR){var n=a.textureType==="textureCube"?D.TEXTURE_CUBE_MAP:D.TEXTURE_2D;t.bindTexture(n,a.getWebGLTexture(e)),t.generateMipmap(n),t.bindTexture(n,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus($t)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(Li)&&t.put(Li,e.gl.createFramebuffer()),t.get(Li)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||as,r=r||D.TEXTURE_2D;var i=this._boundRenderer,a=i&&i.gl,n;if(a){var o=this._cache;o.use(i.__uid__),n=o.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===r&&s.texture===e&&n&&n[t]!=null)){var l=!0;i&&(l=this._doAttach(i,e,t,r),this.viewport||i.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,i){var a=e.gl,n=t.getWebGLTexture(e),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===t&&s.target===i)return}r=+r;var l=!0;if(r===Qr||r===D.DEPTH_STENCIL_ATTACHMENT){var u=e.getGLExtension("WEBGL_depth_texture");if(u||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==D.DEPTH_COMPONENT&&t.format!==D.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var h=this._cache.get(At);h&&(a.framebufferRenderbuffer($t,Qr,qr,null),a.deleteRenderbuffer(h),this._cache.put(At,!1)),this._cache.put(Ea,!1),this._cache.put(Aa,!0)}}return a.framebufferTexture2D($t,r,i,n,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=t,o[r].target=i,l},_doDetach:function(e,t,r){e.framebufferTexture2D($t,t,r,null,0);var i=this._cache.get("attached_textures");i&&i[t]&&(i[t]=null),(t===Qr||t===D.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(Aa,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var i=r.get(At);i&&t.deleteRenderbuffer(i);var a=r.get(Li);a&&t.deleteFramebuffer(a),r.deleteContext(e.__uid__),this._textures={}}});Se.DEPTH_ATTACHMENT=Qr;Se.COLOR_ATTACHMENT0=as;Se.STENCIL_ATTACHMENT=D.STENCIL_ATTACHMENT;Se.DEPTH_STENCIL_ATTACHMENT=D.DEPTH_STENCIL_ATTACHMENT;var Cu=["px","nx","py","ny","pz","nz"],ln=ke.extend(function(){var e={position:new A,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Oe({fov:90}),nx:new Oe({fov:90}),py:new Oe({fov:90}),ny:new Oe({fov:90}),pz:new Oe({fov:90}),nz:new Oe({fov:90})};return t.px.lookAt(A.POSITIVE_X,A.NEGATIVE_Y),t.nx.lookAt(A.NEGATIVE_X,A.NEGATIVE_Y),t.py.lookAt(A.POSITIVE_Y,A.POSITIVE_Z),t.ny.lookAt(A.NEGATIVE_Y,A.NEGATIVE_Z),t.pz.lookAt(A.POSITIVE_Z,A.NEGATIVE_Y),t.nz.lookAt(A.NEGATIVE_Z,A.NEGATIVE_Y),e._frameBuffer=new Se,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var i=e.gl;r||t.update();for(var a=this.texture.width,n=2*Math.atan(a/(a-.5))/Math.PI*180,o=0;o<6;o++){var s=Cu[o],l=this._cameras[s];if(A.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=n,this.shadowMapPass){l.update();var u=t.getBoundingBox();u.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),ta=ie.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,i=[],a=[],n=[],o=[],s=0;s<=e;s++)for(var l=s/e,u=0;u<=t;u++){var h=u/t;if(i.push([2*h-1,2*l-1,0]),a&&a.push([h,l]),n&&n.push([0,0,1]),u<t&&s<e){var c=u+s*(t+1);o.push([c,c+1,c+t+1]),o.push([c+t+1,c+1,c+t+2])}}r.position.fromArray(i),r.texcoord0.fromArray(a),r.normal.fromArray(n),this.initIndicesFromArray(o),this.boundingBox=new Ue,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),xe=new k,ns=ie.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:yr("px",this.depthSegments,this.heightSegments),nx:yr("nx",this.depthSegments,this.heightSegments),py:yr("py",this.widthSegments,this.depthSegments),ny:yr("ny",this.widthSegments,this.depthSegments),pz:yr("pz",this.widthSegments,this.heightSegments),nz:yr("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,i=0;for(var a in e)r+=e[a].vertexCount,i+=e[a].indices.length;for(var n=0;n<t.length;n++)this.attributes[t[n]].init(r);this.indices=new se.Uint16Array(i);var o=0,s=0;for(var a in e){for(var l=e[a],n=0;n<t.length;n++)for(var u=t[n],h=l.attributes[u].value,c=l.attributes[u].size,f=u==="normal",d=0;d<h.length;d++){var p=h[d];this.inside&&f&&(p=-p),this.attributes[u].value[d+c*s]=p}for(var m=l.indices.length,d=0;d<l.indices.length;d++)this.indices[d+o]=s+l.indices[this.inside?m-d-1:d];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new Ue,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function yr(e,t,r){xe.identity();var i=new ta({widthSegments:t,heightSegments:r});switch(e){case"px":k.translate(xe,xe,A.POSITIVE_X),k.rotateY(xe,xe,Math.PI/2);break;case"nx":k.translate(xe,xe,A.NEGATIVE_X),k.rotateY(xe,xe,-Math.PI/2);break;case"py":k.translate(xe,xe,A.POSITIVE_Y),k.rotateX(xe,xe,-Math.PI/2);break;case"ny":k.translate(xe,xe,A.NEGATIVE_Y),k.rotateX(xe,xe,Math.PI/2);break;case"pz":k.translate(xe,xe,A.POSITIVE_Z);break;case"nz":k.translate(xe,xe,A.NEGATIVE_Z),k.rotateY(xe,xe,Math.PI);break}return i.applyTransform(xe),i}const Du=`@export clay.skybox.vertex
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
@end`;G.import(Du);var ni=Ie.extend(function(){var e=new G({vertex:G.source("clay.skybox.vertex"),fragment:G.source("clay.skybox.fragment")}),t=new ot({shader:e,depthMask:!1});return{scene:null,geometry:new ns,material:t,environmentMap:null,culling:!1,_dummyCamera:new Oe}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=z.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),k.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}}),Pu=542327876,Nu=131072,Ru=512,Ou=4;function un(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var Iu=31,Bu=un("DXT1"),Fu=un("DXT3"),Vu=un("DXT5"),zu=0,Gu=1,Uu=2,Hu=3,ku=4,Wu=7,Xu=20,ju=21,qu=28,Zu={parse:function(e,t){var r=new Int32Array(e,0,Iu);if(r[zu]!==Pu||!r(Xu)&Ou)return null;var i=r(ju),a=r[ku],n=r[Hu],o=r[qu]&Ru,s=r[Uu]&Nu,l,u;switch(i){case Bu:l=8,u=z.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Fu:l=16,u=z.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Vu:l=16,u=z.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var h=r[Gu]+4,c=o?6:1,f=1;s&&(f=Math.max(1,r[Wu]));for(var d=[],p=0;p<c;p++){var m=a,g=n;d[p]=new J({width:m,height:g,format:u});for(var _=[],b=0;b<f;b++){var x=Math.max(4,m)/4*Math.max(4,g)/4*l,v=new Uint8Array(e,h,x);h+=x,m*=.5,g*=.5,_[b]=v}d[p].pixels=_[0],s&&(d[p].mipmaps=_)}if(t)t.width=d[0].width,t.height=d[0].height,t.format=d[0].format,t.pixels=d[0].pixels,t.mipmaps=d[0].mipmaps;else return d[0]}},Bi=String.fromCharCode,Yu=8,Ku=32767;function $u(e,t,r,i){if(e[3]>0){var a=Math.pow(2,e[3]-128-8+i);t[r+0]=e[0]*a,t[r+1]=e[1]*a,t[r+2]=e[2]*a}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function Qu(e,t,r){for(var i="",a=t;a<r;a++)i+=Bi(e[a]);return i}function Ju(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function ao(e,t,r,i){for(var a=0,n=0,o=i;o>0;)if(e[n][0]=t[r++],e[n][1]=t[r++],e[n][2]=t[r++],e[n][3]=t[r++],e[n][0]===1&&e[n][1]===1&&e[n][2]===1){for(var s=e[n][3]<<a>>>0;s>0;s--)Ju(e[n-1],e[n]),n++,o--;a+=8}else n++,o--,a=0;return r}function eh(e,t,r,i){if(i<Yu|i>Ku)return ao(e,t,r,i);var a=t[r++];if(a!=2)return ao(e,t,r-1,i);if(e[0][1]=t[r++],e[0][2]=t[r++],a=t[r++],(e[0][2]<<8>>>0|a)>>>0!==i)return null;for(var a=0;a<4;a++)for(var n=0;n<i;){var o=t[r++];if(o>128){o=(o&127)>>>0;for(var s=t[r++];o--;)e[n++][a]=s}else for(;o--;)e[n++][a]=t[r++]}return r}var th={parseRGBE:function(e,t,r){r==null&&(r=0);var i=new Uint8Array(e),a=i.length;if(Qu(i,0,2)==="#?"){for(var n=2;n<a&&!(Bi(i[n])===`
`&&Bi(i[n+1])===`
`);n++);if(!(n>=a)){n+=2;for(var o="";n<a;n++){var s=Bi(i[n]);if(s===`
`)break;o+=s}var l=o.split(" "),u=parseInt(l[1]),h=parseInt(l[3]);if(!(!h||!u)){for(var c=n+1,f=[],d=0;d<h;d++){f[d]=[];for(var p=0;p<4;p++)f[d][p]=0}for(var m=new Float32Array(h*u*4),g=0,_=0;_<u;_++){var c=eh(f,i,c,h);if(!c)return null;for(var d=0;d<h;d++)$u(f[d],m,g,r),g+=4}return t||(t=new J),t.width=h,t.height=u,t.pixels=m,t.type=z.FLOAT,t}}}},parseRGBEFromPNG:function(e){}},xt={loadTexture:function(e,t,r,i){var a;if(typeof t=="function"?(r=t,i=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return a=new J({width:0,height:0,sRGB:!1}),xt._fetchTexture(e,function(n){th.parseRGBE(n,a,t.exposure),a.dirty(),r&&r(a)},i),a;e.match(/.dds$/)||t.fileType==="dds"?(a=new J({width:0,height:0}),xt._fetchTexture(e,function(n){Zu.parse(n,a),a.dirty(),r&&r(a)},i)):(a=new J,a.load(e),a.success(r),a.error(i))}else typeof e=="object"&&typeof e.px<"u"&&(a=new sr,a.load(e),a.success(r),a.error(i));return a},loadPanorama:function(e,t,r,i,a,n){var o=this;typeof i=="function"?(a=i,n=a,i={}):i=i||{},xt.loadTexture(t,i,function(s){s.flipY=i.flipY||!1,o.panoramaToCubeMap(e,s,r,i),s.dispose(e),a&&a(r)},n)},panoramaToCubeMap:function(e,t,r,i){var a=new ln,n=new ni({scene:new Wt});return n.setEnvironmentMap(t),i=i||{},i.encodeRGBM&&n.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,a.texture=r,a.render(e,n.scene),a.texture=null,a.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),i=r.width=e.width,a=r.height=e.height,n=r.getContext("2d");n.drawImage(e,0,0,i,a),t=t||!1;for(var o=n.getImageData(0,0,i,a),s=n.createImageData(i,a),l=0;l<o.data.length;l+=4){if(t){var u=o.data[l],h=o.data[l+1],c=o.data[l+2],f=Math.abs(u-h)+Math.abs(h-c);if(f>20)return console.warn("Given image is not a height map"),e}var d,p,m,g;l%(i*4)===0?(d=o.data[l],m=o.data[l+4]):l%(i*4)===(i-1)*4?(d=o.data[l-4],m=o.data[l]):(d=o.data[l-4],m=o.data[l+4]),l<i*4?(p=o.data[l],g=o.data[l+i*4]):l>i*(a-1)*4?(p=o.data[l-i*4],g=o.data[l]):(p=o.data[l-i*4],g=o.data[l+i*4]),s.data[l]=d-m+127,s.data[l+1]=p-g+127,s.data[l+2]=255,s.data[l+3]=255}return n.putImageData(s,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var i=document.createElement("canvas"),a=i.getContext("2d"),n=t||32;r=r||20,i.width=i.height=n,a.drawImage(e,0,0,n,n);for(var o=a.getImageData(0,0,n,n),s=0;s<o.data.length;s+=4){var l=o.data[s],u=o.data[s+1],h=o.data[s+2],c=Math.abs(l-u)+Math.abs(u-h);if(c>r)return!1}return!0},_fetchTexture:function(e,t,r){se.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,i){e=e||512,t=t||64,r=r||"black",i=i||"white";var a=Math.ceil(e/t),n=document.createElement("canvas");n.width=e,n.height=e;var o=n.getContext("2d");o.fillStyle=i,o.fillRect(0,0,e,e),o.fillStyle=r;for(var s=0;s<a;s++)for(var l=0;l<a;l++){var u=l%2?s%2:s%2-1;u&&o.fillRect(s*t,l*t,t,t)}var h=new J({image:n,anisotropic:8});return h},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var i=new J({image:t});return i}},ja=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function qa(e){return"_on"+e}var Za=function(e){var t=this;this._texture=new J({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),J.prototype.dispose.call(this,r)}}),ja.forEach(function(r){this[qa(r)]=function(i){i.triangle&&this._meshes.forEach(function(a){this.dispatchEvent(r,a,i.triangle,i.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};Za.prototype={constructor:Za,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,i=e.getZr(),a=i.__oldRefreshImmediately||i.refreshImmediately;i.refreshImmediately=function(){a.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},i.__oldRefreshImmediately=a}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new A,t=new A,r=new A,i=new $,a=new $,n=new $,o=new $,s=new A;return function(l,u,h,c){var f=u.geometry,d=f.attributes.position,p=f.attributes.texcoord0,m=A.dot,g=A.cross;d.get(h[0],e.array),d.get(h[1],t.array),d.get(h[2],r.array),p.get(h[0],i.array),p.get(h[1],a.array),p.get(h[2],n.array),g(s,t,r);var _=m(e,s),b=m(c,s)/_;g(s,r,e);var x=m(c,s)/_;g(s,e,t);var v=m(c,s)/_;$.scale(o,i,b),$.scaleAndAdd(o,o,a,x),$.scaleAndAdd(o,o,n,v);var w=o.x*this._chart.getWidth(),S=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:w,zrY:S})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(ja.forEach(function(t){e.on(t,this[qa(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),ja.forEach(function(r){e.off(r,this[qa(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var Dr=Cr.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=Cr.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}});const rh=`
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
@end`;G.import(rh);var ih=new ta,no=new Ie({geometry:ih,frustumCulling:!1}),ah=new Dr,Ae=ke.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new G(G.source("clay.compositor.vertex"),this.fragment),t=new ot({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||D.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var i=this.outputs[r];i&&t.attach(i,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var i=e.getGLExtension("EXT_draw_buffers");if(i&&this.outputs){var a=[];for(var n in this.outputs)n=+n,n>=r.COLOR_ATTACHMENT0&&n<=r.COLOR_ATTACHMENT0+8&&a.push(n);i.drawBuffersEXT(a)}}this.trigger("beforerender",this,e);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o=o|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){no.material=this.material,e.renderPass([no],ah)},dispose:function(e){}});const nh=`#define SAMPLE_NUMBER 1024
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
`;var bt={},La=["px","nx","py","ny","pz","nz"];bt.prefilterEnvironmentMap=function(e,t,r,i,a){(!a||!i)&&(i=bt.generateNormalDistribution(),a=bt.integrateBRDF(e,i)),r=r||{};var n=r.width||64,o=r.height||64,s=r.type||t.type,l=new sr({width:n,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(n,o),h=Math.log(u)/Math.log(2)+1,c=new ot({shader:new G({vertex:G.source("clay.skybox.vertex"),fragment:oh})});c.set("normalDistribution",i),r.encodeRGBM&&c.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&c.define("fragment","RGBM_DECODE");var f=new Wt,d;if(t.textureType==="texture2D"){var p=new sr({width:n,height:o,type:s===z.FLOAT?z.HALF_FLOAT:s});xt.panoramaToCubeMap(e,t,p,{encodeRGBM:r.decodeRGBM}),t=p}d=new ni({scene:f,material:c}),d.material.set("environmentMap",t);var m=new ln({texture:l});r.encodeRGBM&&(s=l.type=z.UNSIGNED_BYTE);for(var g=new J({width:n,height:o,type:s}),_=new Se({depthBuffer:!1}),b=se[s===z.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],x=0;x<h;x++){l.mipmaps[x]={pixels:{}},d.material.set("roughness",x/(h-1));for(var v=g.width,w=2*Math.atan(v/(v-.5))/Math.PI*180,S=0;S<La.length;S++){var E=new b(g.width*g.height*4);_.attach(g),_.bind(e);var M=m.getCamera(La[S]);M.fov=w,e.render(f,M),e.gl.readPixels(0,0,g.width,g.height,z.RGBA,s,E),_.unbind(e),l.mipmaps[x].pixels[La[S]]=E}g.width/=2,g.height/=2,g.dirty()}return _.dispose(e),g.dispose(e),d.dispose(e),i.dispose(e),{environmentMap:l,brdfLookup:a,normalDistribution:i,maxMipmapLevel:h}};bt.integrateBRDF=function(e,t){t=t||bt.generateNormalDistribution();var r=new Se({depthBuffer:!1}),i=new Ae({fragment:nh}),a=new J({width:512,height:256,type:z.HALF_FLOAT,wrapS:z.CLAMP_TO_EDGE,wrapT:z.CLAMP_TO_EDGE,minFilter:z.NEAREST,magFilter:z.NEAREST,useMipmap:!1});return i.setUniform("normalDistribution",t),i.setUniform("viewportSize",[512,256]),i.attachOutput(a),i.render(e,r),r.dispose(e),a};bt.generateNormalDistribution=function(e,t){for(var e=e||256,t=t||1024,r=new J({width:e,height:t,type:z.FLOAT,minFilter:z.NEAREST,magFilter:z.NEAREST,wrapS:z.CLAMP_TO_EDGE,wrapT:z.CLAMP_TO_EDGE,useMipmap:!1}),i=new Float32Array(t*e*4),a=[],n=0;n<e;n++){for(var o=n/e,s=o*o,l=0;l<t;l++){var u=(l<<16|l>>>16)>>>0;u=((u&1431655765)<<1|(u&2863311530)>>>1)>>>0,u=((u&858993459)<<2|(u&3435973836)>>>2)>>>0,u=((u&252645135)<<4|(u&4042322160)>>>4)>>>0,u=(((u&16711935)<<8|(u&4278255360)>>>8)>>>0)/4294967296;var h=Math.sqrt((1-u)/(1+(s*s-1)*u));a[l]=h}for(var l=0;l<t;l++){var c=(l*e+n)*4,h=a[l],f=Math.sqrt(1-h*h),d=l/t,p=2*Math.PI*d;i[c]=f*Math.cos(p),i[c+1]=h,i[c+2]=f*Math.sin(p),i[c+3]=1}}return r.pixels=i,r};var sh=dt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=bt.generateNormalDistribution(),this._brdfLookup=bt.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var i=bt.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=i.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}}),lh=dt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new se.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}}),os={},ar=["px","nx","py","ny","pz","nz"];function uh(e,t){var r=e[0],i=e[1],a=e[2];return t===0?1:t===1?r:t===2?i:t===3?a:t===4?r*a:t===5?i*a:t===6?r*i:t===7?3*a*a-1:r*r-i*i}var hh={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function ch(e,t,r,i){for(var a=new se.Float32Array(27),n=T.create(),o=T.create(),s=T.create(),l=0;l<9;l++){for(var u=T.create(),h=0;h<ar.length;h++){for(var c=t[ar[h]],f=T.create(),d=0,p=0,m=hh[ar[h]],g=0;g<i;g++)for(var _=0;_<r;_++){n[0]=_/(r-1)*2-1,n[1]=g/(i-1)*2-1,n[2]=-1,T.normalize(n,n),s[0]=n[m[0]]*m[3],s[1]=n[m[1]]*m[4],s[2]=n[m[2]]*m[5],o[0]=c[p++]/255,o[1]=c[p++]/255,o[2]=c[p++]/255;var b=c[p++]/255*8.12;o[0]*=b,o[1]*=b,o[2]*=b,T.scaleAndAdd(f,f,o,uh(s,l)*-n[2]),d+=-n[2]}T.scaleAndAdd(u,u,f,1/d)}a[l*3]=u[0]/6,a[l*3+1]=u[1]/6,a[l*3+2]=u[2]/6}return a}os.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var i,a=new Wt,n=64;t.textureType==="texture2D"?i=new ni({scene:a,environmentMap:t}):(n=t.image&&t.image.px?t.image.px.width:t.width,i=new ni({scene:a,environmentMap:t}));var o=Math.ceil(n/Math.pow(2,r.lod)),s=Math.ceil(n/Math.pow(2,r.lod)),l=new J({width:o,height:s}),u=new Se;i.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&i.material.define("fragment","RGBM_DECODE"),i.material.set("lod",r.lod);for(var h=new ln({texture:l}),c={},f=0;f<ar.length;f++){c[ar[f]]=new Uint8Array(o*s*4);var d=h.getCamera(ar[f]);d.fov=90,u.attach(l),u.bind(e),e.render(a,d),e.gl.readPixels(0,0,o,s,z.RGBA,z.UNSIGNED_BYTE,c[ar[f]]),u.unbind(e)}return i.dispose(e),u.dispose(e),l.dispose(e),ch(e,c,o,s)};var re={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return St(t.dataIndex)?En(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return St(t.name)?En(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}},dh=ie.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,i=this.attributes.texcoord0,a=this.attributes.normal,n=(t+1)*(e+1);r.init(n),i.init(n),a.init(n);var o=n>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),l,u,h,c,f,d,p,x=this.radius,m=this.phiStart,g=this.phiLength,_=this.thetaStart,b=this.thetaLength,x=this.radius,v=[],w=[],S=0,E=1/x;for(p=0;p<=e;p++)for(d=0;d<=t;d++)c=d/t,f=p/e,l=-x*Math.cos(m+c*g)*Math.sin(_+f*b),u=x*Math.cos(_+f*b),h=x*Math.sin(m+c*g)*Math.sin(_+f*b),v[0]=l,v[1]=u,v[2]=h,w[0]=c,w[1]=f,r.set(S,v),i.set(S,w),v[0]*=E,v[1]*=E,v[2]*=E,a.set(S,v),S++;var M,L,I,C,F=t+1,U=0;for(p=0;p<e;p++)for(d=0;d<t;d++)L=p*F+d,M=p*F+d+1,C=(p+1)*F+d+1,I=(p+1)*F+d,s[U++]=M,s[U++]=L,s[U++]=C,s[U++]=L,s[U++]=I,s[U++]=C;this.boundingBox=new Ue,this.boundingBox.max.set(x,x,x),this.boundingBox.min.set(-x,-x,-x)}}),fh=dt.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}}),ph=dt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new A,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=dt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),mh=dt.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=dt.prototype.clone.call(this);return e.range=this.range,e}}),gh=dt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new A,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=dt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),ne=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i||0,this.array=P.fromValues(e,t,r,i),this._dirty=!0};ne.prototype={constructor:ne,add:function(e){return P.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ne(this.x,this.y,this.z,this.w)},copy:function(e){return P.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return P.dist(this.array,e.array)},distance:function(e){return P.distance(this.array,e.array)},div:function(e){return P.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return P.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return P.dot(this.array,e.array)},len:function(){return P.len(this.array)},length:function(){return P.length(this.array)},lerp:function(e,t,r){return P.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return P.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return P.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return P.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return P.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return P.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return P.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return P.random(this.array,e),this._dirty=!0,this},scale:function(e){return P.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return P.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return P.sqrDist(this.array,e.array)},squaredDistance:function(e){return P.squaredDistance(this.array,e.array)},sqrLen:function(){return P.sqrLen(this.array)},squaredLength:function(){return P.squaredLength(this.array)},sub:function(e){return P.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return P.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return P.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return P.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Zr=Object.defineProperty;if(Zr){var Ci=ne.prototype;Zr(Ci,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Zr(Ci,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Zr(Ci,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Zr(Ci,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ne.add=function(e,t,r){return P.add(e.array,t.array,r.array),e._dirty=!0,e};ne.set=function(e,t,r,i,a){P.set(e.array,t,r,i,a),e._dirty=!0};ne.copy=function(e,t){return P.copy(e.array,t.array),e._dirty=!0,e};ne.dist=function(e,t){return P.distance(e.array,t.array)};ne.distance=ne.dist;ne.div=function(e,t,r){return P.divide(e.array,t.array,r.array),e._dirty=!0,e};ne.divide=ne.div;ne.dot=function(e,t){return P.dot(e.array,t.array)};ne.len=function(e){return P.length(e.array)};ne.lerp=function(e,t,r,i){return P.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};ne.min=function(e,t,r){return P.min(e.array,t.array,r.array),e._dirty=!0,e};ne.max=function(e,t,r){return P.max(e.array,t.array,r.array),e._dirty=!0,e};ne.mul=function(e,t,r){return P.multiply(e.array,t.array,r.array),e._dirty=!0,e};ne.multiply=ne.mul;ne.negate=function(e,t){return P.negate(e.array,t.array),e._dirty=!0,e};ne.normalize=function(e,t){return P.normalize(e.array,t.array),e._dirty=!0,e};ne.random=function(e,t){return P.random(e.array,t),e._dirty=!0,e};ne.scale=function(e,t,r){return P.scale(e.array,t.array,r),e._dirty=!0,e};ne.scaleAndAdd=function(e,t,r,i){return P.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};ne.sqrDist=function(e,t){return P.sqrDist(e.array,t.array)};ne.squaredDistance=ne.sqrDist;ne.sqrLen=function(e){return P.sqrLen(e.array)};ne.squaredLength=ne.sqrLen;ne.sub=function(e,t,r){return P.subtract(e.array,t.array,r.array),e._dirty=!0,e};ne.subtract=ne.sub;ne.transformMat4=function(e,t,r){return P.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};ne.transformQuat=function(e,t,r){return P.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};var oe={};oe.create=function(){var e=new We(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};oe.clone=function(e){var t=new We(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};oe.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};oe.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};oe.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};oe.invert=function(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=r*n-a*i;return o?(o=1/o,e[0]=n*o,e[1]=-i*o,e[2]=-a*o,e[3]=r*o,e):null};oe.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};oe.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};oe.multiply=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=r[0],l=r[1],u=r[2],h=r[3];return e[0]=i*s+n*l,e[1]=a*s+o*l,e[2]=i*u+n*h,e[3]=a*u+o*h,e};oe.mul=oe.multiply;oe.rotate=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*s,e[1]=a*l+o*s,e[2]=i*-s+n*l,e[3]=a*-s+o*l,e};oe.scale=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=r[0],l=r[1];return e[0]=i*s,e[1]=a*s,e[2]=n*l,e[3]=o*l,e};oe.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};oe.LDU=function(e,t,r,i){return e[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-e[2]*r[1],[e,t,r]};var Ze=function(){this.array=oe.create(),this._dirty=!0};Ze.prototype={constructor:Ze,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Ze().copy(this)},copy:function(e){return oe.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return oe.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return oe.determinant(this.array)},identity:function(){return oe.identity(this.array),this._dirty=!0,this},invert:function(){return oe.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return oe.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return oe.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return oe.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return oe.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return oe.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return oe.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return oe.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ze.adjoint=function(e,t){return oe.adjoint(e.array,t.array),e._dirty=!0,e};Ze.copy=function(e,t){return oe.copy(e.array,t.array),e._dirty=!0,e};Ze.determinant=function(e){return oe.determinant(e.array)};Ze.identity=function(e){return oe.identity(e.array),e._dirty=!0,e};Ze.invert=function(e,t){return oe.invert(e.array,t.array),e._dirty=!0,e};Ze.mul=function(e,t,r){return oe.mul(e.array,t.array,r.array),e._dirty=!0,e};Ze.multiply=Ze.mul;Ze.rotate=function(e,t,r){return oe.rotate(e.array,t.array,r),e._dirty=!0,e};Ze.scale=function(e,t,r){return oe.scale(e.array,t.array,r.array),e._dirty=!0,e};Ze.transpose=function(e,t){return oe.transpose(e.array,t.array),e._dirty=!0,e};var le={};le.create=function(){var e=new We(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};le.clone=function(e){var t=new We(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};le.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};le.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};le.invert=function(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=t[4],s=t[5],l=r*n-i*a;return l?(l=1/l,e[0]=n*l,e[1]=-i*l,e[2]=-a*l,e[3]=r*l,e[4]=(a*s-n*o)*l,e[5]=(i*o-r*s)*l,e):null};le.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};le.multiply=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1],c=r[2],f=r[3],d=r[4],p=r[5];return e[0]=i*u+n*h,e[1]=a*u+o*h,e[2]=i*c+n*f,e[3]=a*c+o*f,e[4]=i*d+n*p+s,e[5]=a*d+o*p+l,e};le.mul=le.multiply;le.rotate=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=t[4],l=t[5],u=Math.sin(r),h=Math.cos(r);return e[0]=i*h+n*u,e[1]=a*h+o*u,e[2]=i*-u+n*h,e[3]=a*-u+o*h,e[4]=s,e[5]=l,e};le.scale=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1];return e[0]=i*u,e[1]=a*u,e[2]=n*h,e[3]=o*h,e[4]=s,e[5]=l,e};le.translate=function(e,t,r){var i=t[0],a=t[1],n=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1];return e[0]=i,e[1]=a,e[2]=n,e[3]=o,e[4]=i*u+n*h+s,e[5]=a*u+o*h+l,e};le.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};var Je=function(){this.array=le.create(),this._dirty=!0};Je.prototype={constructor:Je,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Je().copy(this)},copy:function(e){return le.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return le.determinant(this.array)},identity:function(){return le.identity(this.array),this._dirty=!0,this},invert:function(){return le.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return le.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return le.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return le.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return le.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return le.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return le.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return le.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Je.copy=function(e,t){return le.copy(e.array,t.array),e._dirty=!0,e};Je.determinant=function(e){return le.determinant(e.array)};Je.identity=function(e){return le.identity(e.array),e._dirty=!0,e};Je.invert=function(e,t){return le.invert(e.array,t.array),e._dirty=!0,e};Je.mul=function(e,t,r){return le.mul(e.array,t.array,r.array),e._dirty=!0,e};Je.multiply=Je.mul;Je.rotate=function(e,t,r){return le.rotate(e.array,t.array,r),e._dirty=!0,e};Je.scale=function(e,t,r){return le.scale(e.array,t.array,r.array),e._dirty=!0,e};Je.translate=function(e,t,r){return le.translate(e.array,t.array,r.array),e._dirty=!0,e};var Pe=function(){this.array=K.create(),this._dirty=!0};Pe.prototype={constructor:Pe,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return K.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Pe().copy(this)},copy:function(e){return K.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return K.determinant(this.array)},fromMat2d:function(e){return K.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return K.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return K.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return K.identity(this.array),this._dirty=!0,this},invert:function(){return K.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return K.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return K.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return K.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return K.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return K.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return K.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return K.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return K.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return K.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Pe.adjoint=function(e,t){return K.adjoint(e.array,t.array),e._dirty=!0,e};Pe.copy=function(e,t){return K.copy(e.array,t.array),e._dirty=!0,e};Pe.determinant=function(e){return K.determinant(e.array)};Pe.identity=function(e){return K.identity(e.array),e._dirty=!0,e};Pe.invert=function(e,t){return K.invert(e.array,t.array),e};Pe.mul=function(e,t,r){return K.mul(e.array,t.array,r.array),e._dirty=!0,e};Pe.multiply=Pe.mul;Pe.fromMat2d=function(e,t){return K.fromMat2d(e.array,t.array),e._dirty=!0,e};Pe.fromMat4=function(e,t){return K.fromMat4(e.array,t.array),e._dirty=!0,e};Pe.fromQuat=function(e,t){return K.fromQuat(e.array,t.array),e._dirty=!0,e};Pe.normalFromMat4=function(e,t){return K.normalFromMat4(e.array,t.array),e._dirty=!0,e};Pe.rotate=function(e,t,r){return K.rotate(e.array,t.array,r),e._dirty=!0,e};Pe.scale=function(e,t,r){return K.scale(e.array,t.array,r.array),e._dirty=!0,e};Pe.transpose=function(e,t){return K.transpose(e.array,t.array),e._dirty=!0,e};Pe.translate=function(e,t,r){return K.translate(e.array,t.array,r.array),e._dirty=!0,e};var _h={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,i;if(e){for(var a=e.split("."),n=r,o=0,s=a.length;o<s;o++)n&&(n=n[a[o]]);n&&(i=n)}else i=r;if(i==null)throw new Error("Target "+e+" not exists");var l=this._animators,u=new vl(i,t),h=this;return u.during(function(){h.__zr&&h.__zr.refresh()}).done(function(){var c=l.indexOf(u);c>=0&&l.splice(c,1)}),l.push(u),this.__zr&&this.__zr.animation.addAnimator(u),u},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,i=0;i<r;i++)t[i].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}};const ss=`
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
@end`,vh=`
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

@end`,bh=`@export ecgl.realistic.vertex

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

@end`,Th=`@export ecgl.hatching.vertex

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
`,wh=`@export ecgl.sm.depth.vertex

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

@end`;Object.assign(yt.prototype,_h);G.import(ss);G.import(es);G.import(vh);G.import(yh);G.import(xh);G.import(bh);G.import(Th);G.import(wh);function Sh(e){return!e||e==="none"}function ls(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function Mh(e){return e.getZr&&e.setOption}var Eh=Wt.prototype.addToScene,Ah=Wt.prototype.removeFromScene;Wt.prototype.addToScene=function(e){if(Eh.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};Wt.prototype.removeFromScene=function(e){Ah.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};ot.prototype.setTextureImage=function(e,t,r,i){if(this.shader){var a=r.getZr(),n=this,o;return n.autoUpdateTextureStatus=!1,n.disableTexture(e),Sh(t)||(o=y.loadTexture(t,r,i,function(s){n.enableTexture(e),a&&a.refresh()}),n.set(e,o)),o}};var y={};y.Renderer=st;y.Node=yt;y.Mesh=Ie;y.Shader=G;y.Material=ot;y.Texture=z;y.Texture2D=J;y.Geometry=ie;y.SphereGeometry=dh;y.PlaneGeometry=ta;y.CubeGeometry=ns;y.AmbientLight=fh;y.DirectionalLight=ph;y.PointLight=mh;y.SpotLight=gh;y.PerspectiveCamera=Oe;y.OrthographicCamera=Dr;y.Vector2=$;y.Vector3=A;y.Vector4=ne;y.Quaternion=ue;y.Matrix2=Ze;y.Matrix2d=Je;y.Matrix3=Pe;y.Matrix4=k;y.Plane=ri;y.Ray=or;y.BoundingBox=Ue;y.Frustum=Ji;var Ca=null;function Lh(){return Ca!==null||(Ca=xt.createBlank("rgba(255,255,255,0)").image),Ca}function oo(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function so(e){if((e.wrapS===z.REPEAT||e.wrapT===z.REPEAT)&&e.image){var t=oo(e.width),r=oo(e.height);if(t!==e.width||r!==e.height){var i=document.createElement("canvas");i.width=t,i.height=r;var a=i.getContext("2d");a.drawImage(e.image,0,0,t,r),e.image=i}}}y.loadTexture=function(e,t,r,i){typeof r=="function"&&(i=r,r={}),r=r||{};for(var a=Object.keys(r).sort(),n="",o=0;o<a.length;o++)n+=a[o]+"_"+r[a[o]]+"_";var s=t.__textureCache=t.__textureCache||new hl(20);if(Mh(e)){var l=e.__textureid__,u=s.get(n+l);if(u)u.texture.surface.setECharts(e),i&&i(u.texture);else{var h=new Za(e);h.onupdate=function(){t.getZr().refresh()},u={texture:h.getTexture()};for(var o=0;o<a.length;o++)u.texture[a[o]]=r[a[o]];l=e.__textureid__||"__ecgl_ec__"+u.texture.__uid__,e.__textureid__=l,s.put(n+l,u),i&&i(u.texture)}return u.texture}else if(ls(e)){var l=e.__textureid__,u=s.get(n+l);if(!u){u={texture:new y.Texture2D({image:e})};for(var o=0;o<a.length;o++)u.texture[a[o]]=r[a[o]];l=e.__textureid__||"__ecgl_image__"+u.texture.__uid__,e.__textureid__=l,s.put(n+l,u),so(u.texture),i&&i(u.texture)}return u.texture}else{var u=s.get(n+e);if(u)u.callbacks?u.callbacks.push(i):i&&i(u.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[i]};var c=xt.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){c.dirty(),u.callbacks.forEach(function(p){p&&p(c)}),u.callbacks=null});u.texture=c,s.put(n+e,u)}else{for(var c=new y.Texture2D({image:new Image}),o=0;o<a.length;o++)c[a[o]]=r[a[o]];u={texture:c,callbacks:[i]};var f=c.image;f.onload=function(){c.image=f,so(c),c.dirty(),u.callbacks.forEach(function(p){p&&p(c)}),u.callbacks=null},f.crossOrigin="Anonymous",f.src=e,c.image=Lh(),s.put(n+e,u)}return u.texture}};y.createAmbientCubemap=function(e,t,r,i){e=e||{};var a=e.texture,n=re.firstNotNull(e.exposure,1),o=new sh({intensity:re.firstNotNull(e.specularIntensity,1)}),s=new lh({intensity:re.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=y.loadTexture(a,r,{exposure:n},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=os.projectEnvironmentMap(t,o.cubemap,{lod:1}),i&&i()}),{specular:o,diffuse:s}};y.createBlankTexture=xt.createBlank;y.isImage=ls;y.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};y.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=Uo(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};y.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,i=-t/180*Math.PI+Math.PI/2,a=[],n=Math.sin(r);return a[0]=n*Math.cos(i),a[1]=-Math.cos(r),a[2]=n*Math.sin(i),a};y.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};y.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];y.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=G.source(e+".vertex"),r=G.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var i=new G(t,r);return i.name=e,i};y.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=y.createShader(e),i=new ot({shader:r});return t.forEach(function(a){typeof a=="string"&&i.define(a)}),i};y.setMaterialFromModel=function(e,t,r,i){t.autoUpdateTextureStatus=!1;var a=r.getModel(e+"Material"),n=a.get("detailTexture"),o=re.firstNotNull(a.get("textureTiling"),1),s=re.firstNotNull(a.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?y.Texture.REPEAT:y.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var h=a.get("roughness"),c=a.get("metalness");c!=null?isNaN(c)&&(t.setTextureImage("metalnessMap",c,i,u),c=re.firstNotNull(a.get("metalnessAdjust"),.5)):c=0,h!=null?isNaN(h)&&(t.setTextureImage("roughnessMap",h,i,u),h=re.firstNotNull(a.get("roughnessAdjust"),.5)):h=.5;var f=a.get("normalTexture");t.setTextureImage("detailMap",n,i,u),t.setTextureImage("normalMap",f,i,u),t.set({roughness:h,metalness:c,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",n,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",n,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var d=a.get("hatchingTextures")||[];d.length<6;for(var p=0;p<6;p++)t.setTextureImage("hatch"+(p+1),d[p],i,{anisotropic:8,wrapS:y.Texture.REPEAT,wrapT:y.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};y.updateVertexAnimation=function(e,t,r,i){var a=i.get("animation"),n=i.get("animationDurationUpdate"),o=i.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(a&&t&&n>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(n,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var pe=function(e,t){this.id=e,this.zr=t;try{this.renderer=new st({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(i){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(i);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new sn({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new Ho({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};pe.prototype.setUnpainted=function(){};pe.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(i){i.__zr=r,i.addAnimatorsToZr&&i.addAnimatorsToZr(r)})}};function us(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}pe.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(us,this),e.layer=null,this._viewsToDispose.push(e))}};pe.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(us,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};pe.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};pe.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};pe.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};pe.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};pe.prototype.needsRefresh=function(){this.zr.refresh()};pe.prototype.refresh=function(e){this._backgroundColor=e?y.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};pe.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};pe.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};pe.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var Ch=1;pe.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,i=0;i<this.views.length;i++)r=this.views[i].needsAccumulate()||r;if(!r)return;function a(n){if(!(!t._accumulatingId||n!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&r;o||(t._doRender(!0),e?a(n):Ua(function(){a(n)}))}}this._accumulatingId=Ch++,e?a(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){a(t._accumulatingId)},50)};pe.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(zi(this._textureList),zi(this._geometriesList));for(var r=0;r<this.views.length;r++)Dh(this.views[r].scene,e,t);this._textureList&&(Gi(this.renderer,this._textureList),Gi(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function zi(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function Gi(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function Di(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function Dh(e,t,r){var i,a;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==i)for(var u=l.getTextureUniforms(),h=0;h<u.length;h++){var c=u[h],f=l.uniforms[c].value;if(f){if(f instanceof z)Di(f,t);else if(f instanceof Array)for(var d=0;d<f.length;d++)f[d]instanceof z&&Di(f[d],t)}}s!==a&&Di(s,r),i=l,a=s}});for(var n=0;n<e.lights.length;n++)e.lights[n].cubemap&&Di(e.lights[n].cubemap,t)}pe.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(zi(this._textureList),zi(this._geometriesList),Gi(this.renderer,this._textureList),Gi(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};pe.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};pe.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,i=this._hovered;this._hovered=t,i&&r!==i.target&&(i.relatedTarget=r,this._dispatchEvent("mouseout",e,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!i||r!==i.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};pe.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};pe.prototype.onclick=pe.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var i=this.pickObject(e.offsetX,e.offsetY);i&&(this._dispatchEvent(e.type,e,i),this._dispatchDataEvent(e.type,e,i));var a=this._clickToSetFocusPoint(e);if(a){var n=a.view.setDOFFocusOnPoint(a.distance);n&&this.zr.refresh()}}}};pe.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,i=this.views.length-1;i>=0;i--){var a=this.views[i];if(a.hasDOF()&&a.containPoint(e.offsetX,e.offsetY)){this._picking.scene=a.scene,this._picking.camera=a.camera,t.viewport=a.viewport;var n=this._picking.pick(e.offsetX,e.offsetY,!0);if(n)return n.view=a,n}}t.viewport=r};pe.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};pe.prototype.pickObject=function(e,t){for(var r=[],i=this.renderer,a=i.viewport,n=0;n<this.views.length;n++){var o=this.views[n];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,i.viewport=o.viewport,this._picking.pickAll(e,t,r))}return i.viewport=a,r.sort(function(s,l){return s.distance-l.distance}),r[0]};pe.prototype._dispatchEvent=function(e,t,r){r||(r={});var i=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;i&&(i.trigger(e,r),i=i.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};pe.prototype._dispatchDataEvent=function(e,t,r){var i=r&&r.target,a=i&&i.dataIndex,n=i&&i.seriesIndex,o=i&&i.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var u={target:l};const h=zl(l);e==="mousemove"&&(a!=null?a!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(h.dataIndex=this._lastDataIndex,h.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(h.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=a,this._lastSeriesIndex=n),h.eventData=o,h.dataIndex=a,h.seriesIndex=n,(o!=null||parseInt(a,10)>=0&&parseInt(n,10)>=0)&&(this.zr.handler.dispatchToElement(u,e,t),s&&this.zr.handler.dispatchToElement(u,"mouseover",t))};pe.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(pe.prototype,on);var Ph=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function Jr(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,i=e[t].emphasis;r&&(e[t]=r),i&&(e.emphasis=e.emphasis||{},e.emphasis[t]=i)}}function Nh(e){Jr(e,"itemStyle"),Jr(e,"lineStyle"),Jr(e,"areaStyle"),Jr(e,"label")}function Pi(e){e&&(e instanceof Array||(e=[e]),wt(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function Rh(e){wt(e.series,function(t){yl(Ph,t.type)>=0&&(Nh(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),Pi(e.xAxis3D),Pi(e.yAxis3D),Pi(e.zAxis3D),Pi(e.grid3D),Jr(e.geo3D)}function hs(e){this._layers={},this._zr=e}hs.prototype.update=function(e,t){var r=this,i=t.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function a(s){i.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var u=r._layers,h=u[l];if(!h){if(h=u[l]=new pe("gl-"+l,i),i.painter.isSingleCanvas()){h.virtual=!0;var c=new kl({z:1e4,style:{image:h.renderer.canvas},silent:!0});h.__hostImage=c,i.add(c)}i.painter.insertLayer(l,h)}return h.__hostImage&&h.__hostImage.setStyle({width:h.renderer.getWidth(),height:h.renderer.getHeight()}),h}function n(s,l){s&&s.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var u=t.getViewOfComponentModel(l),h=l.coordinateSystem;if(u.__ecgl__){var c;if(h){if(!h.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}c=h.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}c=h.viewGL}var c=h.viewGL,f=a(l);f.addView(c),u.afterRender&&u.afterRender(l,e,t,f),n(u.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),u=s.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var h=u&&u.viewGL||l.viewGL,c=a(s);c.addView(h),l.afterRender&&l.afterRender(s,e,t,c),n(l.groupGL,s.get("silent"))}})};cl(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof pe&&i.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var a=document.createElement("canvas"),n=i.pixelRatio||this.dpr;a.width=this.getWidth()*n,a.height=this.getHeight()*n;var o=a.getContext("2d");o.dpr=n,o.clearRect(0,0,a.width,a.height),i.backgroundColor&&(o.fillStyle=i.backgroundColor,o.fillRect(0,0,a.width,a.height));var s=this.storage.getDisplayList(!0),l={},u,h=this;function c(m,g){var _=h._zlevelList;m==null&&(m=-1/0);for(var b,x=0;x<_.length;x++){var v=_[x],w=h._layers[v];if(!w.__builtin__&&v>m&&v<g){b=w;break}}b&&b.renderToCanvas&&(o.save(),b.renderToCanvas(o),o.restore())}for(var f={ctx:o},d=0;d<s.length;d++){var p=s[d];p.zlevel!==u&&(c(u,p.zlevel),u=p.zlevel),this._doPaintEl(p,f,!0,null,l)}return c(u,1/0),a}});dl(function(e,t){var r=t.getZr(),i=r.__egl=r.__egl||new hs(r);i.update(e,t)});fl(Rh);const ra={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Br={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Fr={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var ia=Ir.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});he(ia.prototype,ra);he(ia.prototype,Br);he(ia.prototype,Fr);var Yr=re.firstNotNull,lo={left:0,middle:1,right:2};function uo(e){return e instanceof Array||(e=[e,e]),e}var _i=ke.extend(function(){return{zr:null,viewGL:null,_center:new A,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new $,_panVelocity:new $,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,i=t.baseOrthoSize||1,a=e.get("projection");a!=="perspective"&&a!=="orthographic"&&a!=="isometric"&&(a="perspective"),this._projection=a,this.viewGL.setProjection(a);var n=e.get("distance")+r,o=e.get("orthographicSize")+i;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(f){this[f[0]]=Yr(e.get(f[0]),f[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=i,this.maxOrthographicSize+=i;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(f){l[f]=Yr(e.get(f),s&&s.get(f))});var u=Yr(t.alpha,e.get("alpha"))||0,h=Yr(t.beta,e.get("beta"))||0,c=Yr(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:u,beta:h,center:c,distance:n,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(n),this.setAlpha(u),this.setBeta(h),this.setCenter(c),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,i={},a={};return e.distance!=null&&(i.distance=this.getDistance(),a.distance=e.distance),e.orthographicSize!=null&&(i.orthographicSize=this.getOrthographicSize(),a.orthographicSize=e.orthographicSize),e.alpha!=null&&(i.alpha=this.getAlpha(),a.alpha=e.alpha),e.beta!=null&&(i.beta=this.getBeta(),a.beta=e.beta),e.center!=null&&(i.center=this.getCenter(),a.center=e.center),this._addAnimator(t.animation.animate(i).when(e.duration||1e3,a).during(function(){i.alpha!=null&&r.setAlpha(i.alpha),i.beta!=null&&r.setBeta(i.beta),i.distance!=null&&r.setDistance(i.distance),i.center!=null&&r.setCenter(i.center),i.orthographicSize!=null&&r.setOrthographicSize(i.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,i=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-i/2,t.right=i/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,i=this.getCamera(),a=i.worldTransform.y,n=i.worldTransform.x;this._center.scaleAndAdd(n,-t.x*r/200).scaleAndAdd(a,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new A,r=this._theta+Math.PI/2,i=this._phi+Math.PI/2,a=Math.sin(r);t.x=a*Math.cos(i),t.y=-Math.cos(r),t.z=a*Math.sin(i),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===lo[this.rotateMouseButton]?this._mode="rotate":e.event.button===lo[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=uo(this.panSensitivity),r=uo(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var a;this._projection==="perspective"?a=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):a=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*a*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(_i.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});const vi={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},Me={vec2:V,vec3:T,vec4:P,mat3:K,mat4:R};var Da=Me.vec3,ho=[[0,0],[1,1]],Xt=ie.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new ie.Attribute("position","float",3,"POSITION"),positionPrev:new ie.Attribute("positionPrev","float",3),positionNext:new ie.Attribute("positionNext","float",3),prevPositionPrev:new ie.Attribute("prevPositionPrev","float",3),prevPosition:new ie.Attribute("prevPosition","float",3),prevPositionNext:new ie.Attribute("prevPositionNext","float",3),offset:new ie.Attribute("offset","float",1),color:new ie.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var a=Da.dist(e,t)+Da.dist(r,t)+Da.dist(i,r),n=1/(a+1)*this.segmentScale;return n},getCubicCurveVertexCount:function(e,t,r,i){var a=this._getCubicCurveApproxStep(e,t,r,i),n=Math.ceil(1/a);return this.useNativeLine?n*2:n*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var a=this._getCubicCurveApproxStep(e,t,r,i),n=Math.ceil(1/a);return this.useNativeLine?0:n*2},getLineVertexCount:function(){return this.getPolylineVertexCount(ho)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(ho)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,i,a,n){n==null&&(n=1);for(var o=e[0],s=e[1],l=e[2],u=t[0],h=t[1],c=t[2],f=r[0],d=r[1],p=r[2],m=i[0],g=i[1],_=i[2],b=this._getCubicCurveApproxStep(e,t,r,i),x=b*b,v=x*b,w=3*b,S=3*x,E=6*x,M=6*v,L=o-u*2+f,I=s-h*2+d,C=l-c*2+p,F=(u-f)*3-o+m,U=(h-d)*3-s+g,O=(c-p)*3-l+_,H=o,q=s,Z=l,N=(u-o)*w+L*S+F*v,B=(h-s)*w+I*S+U*v,Y=(c-l)*w+C*S+O*v,j=L*E+F*M,te=I*E+U*M,Q=C*E+O*M,ve=F*M,ee=U*M,Ee=O*M,tt=0,Re=0,de=Math.ceil(1/b),ze=new Float32Array((de+1)*3),ze=[],rt=0,Re=0;Re<de+1;Re++)ze[rt++]=H,ze[rt++]=q,ze[rt++]=Z,H+=N,q+=B,Z+=Y,N+=j,B+=te,Y+=Q,j+=ve,te+=ee,Q+=Ee,tt+=b,tt>1&&(H=N>0?Math.min(H,m):Math.max(H,m),q=B>0?Math.min(q,g):Math.max(q,g),Z=Y>0?Math.min(Z,_):Math.max(Z,_));return this.addPolyline(ze,a,n)},addLine:function(e,t,r,i){return this.addPolyline([e,t],r,i)},addPolyline:function(e,t,r,i,a){if(e.length){var n=typeof e[0]!="number";if(a==null&&(a=n?e.length:e.length/3),!(a<2)){i==null&&(i=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var n=typeof e[0]!="number",o=n?typeof t[0]!="number":t.length/4===a,s=this.attributes.position,l=this.attributes.positionPrev,u=this.attributes.positionNext,h=this.attributes.color,c=this.attributes.offset,f=this.indices,d=this._vertexOffset,p,m;r=Math.max(r,.01);for(var g=i;g<a;g++){if(n)p=e[g],o?m=t[g]:m=t;else{var _=g*3;if(p=p||[],p[0]=e[_],p[1]=e[_+1],p[2]=e[_+2],o){var b=g*4;m=m||[],m[0]=t[b],m[1]=t[b+1],m[2]=t[b+2],m[3]=t[b+3]}else m=t}if(this.useNativeLine?g>1&&(s.copy(d,d-1),h.copy(d,d-1),d++):(g<a-1&&(l.set(d+2,p),l.set(d+3,p)),g>0&&(u.set(d-2,p),u.set(d-1,p)),s.set(d,p),s.set(d+1,p),h.set(d,m),h.set(d+1,m),c.set(d,r/2),c.set(d+1,-r/2),d+=2),this.useNativeLine)h.set(d,m),s.set(d,p),d++;else if(g>0){var x=this._triangleOffset*3,f=this.indices;f[x]=d-4,f[x+1]=d-3,f[x+2]=d-2,f[x+3]=d-3,f[x+4]=d-1,f[x+5]=d-2,this._triangleOffset+=2}}if(!this.useNativeLine){var v=this._vertexOffset,w=this._vertexOffset+a*2;l.copy(v,v+2),l.copy(v+1,v+3),u.copy(w-1,w-3),u.copy(w-2,w-4)}return this._vertexOffset=d,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,a=r;a<i;a++)this.attributes.color.set(a,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});kt(Xt.prototype,vi);function Ui(e,t,r,i,a,n,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=i,this.height=a,this.offsetX=t,this.offsetY=r,this.dpr=o,this.gap=n}Ui.prototype={constructor:Ui,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var i=e.getBoundingRect();t==null&&(t=i.width),r==null&&(r=i.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var a=this._x,n=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(a+t+l>o&&(a=this._x=0,n+=this._rowHeight+l,this._y=n,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),n+r+l>s)return null;e.x+=this.offsetX*this.dpr+a,e.y+=this.offsetY*this.dpr+n,this._zr.add(e);var u=[this.offsetX/this.width,this.offsetY/this.height],h=[[a/o+u[0],n/s+u[1]],[(a+t)/o+u[0],(n+r)/s+u[1]]];return h},_fitElement:function(e,t,r){var i=e.getBoundingRect(),a=t/i.width,n=r/i.height;e.x=-i.x*a,e.y=-i.y*n,e.scaleX=a,e.scaleY=n,e.update()}};function Hi(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new J({image:t,flipY:!1});var r=this;this._zr=xl(t);var i=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new Ui(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}Hi.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,i=r*this._nodeWidth%e,a=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(a>=e)){var n=(i+this._nodeWidth)*this._dpr,o=(a+this._nodeHeight)*this._dpr;try{this._zr.resize({width:n,height:o})}catch{this._canvas.width=n,this._canvas.height=o}var s=new Ui(this._zr,i,a,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var i=this._getCurrentNode().add(e,t,r);if(!i){var a=this._expand();if(!a)return;i=a.add(e,t,r)}return this._coords[e.id]=i,i},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};function Ht(){}Ht.prototype={constructor:Ht,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new y.DirectionalLight({shadowBias:.005}),this.ambientLight=new y.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,i=e.getModel("light"),a=i.getModel("main"),n=i.getModel("ambient");t.intensity=a.get("intensity"),r.intensity=n.get("intensity"),t.color=y.parseColor(a.get("color")).slice(0,3),r.color=y.parseColor(n.get("color")).slice(0,3);var o=a.get("alpha")||0,s=a.get("beta")||0;t.position.setArray(y.directionFromAlphaBeta(o,s)),t.lookAt(y.Vector3.ZERO),t.castShadow=a.get("shadow"),t.shadowResolution=y.getShadowResolution(a.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var i=t.getModel("light.ambientCubemap"),a=i.get("texture");if(a){this._cubemapLightsCache=this._cubemapLightsCache||{};var n=this._cubemapLightsCache[a];if(!n){var o=this;n=this._cubemapLightsCache[a]=y.createAmbientCubemap(i.option,e,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(n.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(n.diffuse),this._lightRoot.add(n.specular),this._currentCubemapLights=n}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var i=t.get("environment"),a=this;function n(){return a._skybox=a._skybox||new ni,a._skybox}var o=n();if(i&&i!=="none")if(i==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof i=="object"&&i.colorStops||typeof i=="string"&&Uo(i)){this._isSkyboxFromAmbientCubemap=!1;var l=new y.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var u=l.image=document.createElement("canvas");u.width=u.height=16;var h=u.getContext("2d"),c=new Ho({shape:{x:0,y:0,width:16,height:16},style:{fill:i}});ko(h,c),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=y.loadTexture(i,r,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var f=t.coordinateSystem;if(this._skybox)if(f&&f.viewGL&&i!=="auto"&&!(i.match&&i.match(/.hdr$/))){var d=f.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[d]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var Qt=Me.vec3,cs=ie.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new ie.Attribute("position","float",3,"POSITION"),normal:new ie.Attribute("normal","float",3,"NORMAL"),color:new ie.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,i=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=Qt.create(),t=Qt.create(),r=Qt.create(),i=[0,3,1,3,2,1];return function(a,n){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;Qt.sub(e,a[1],a[0]),Qt.sub(t,a[2],a[1]),Qt.cross(r,e,t),Qt.normalize(r,r);for(var u=0;u<4;u++)o.set(this._vertexOffset+u,a[u]),l.set(this._vertexOffset+u,n),s.set(this._vertexOffset+u,r);for(var h=this._faceOffset*3,u=0;u<6;u++)this.indices[h+u]=i[u]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});kt(cs.prototype,vi);var Ya=re.firstNotNull,Oh={x:0,y:2,z:1};function Ih(e,t,r,i){var a=[0,0,0],n=i<0?r.getExtentMin():r.getExtentMax();a[Oh[r.dim]]=n,e.position.setArray(a),e.rotation.identity(),t.distance=-Math.abs(n),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(i*Math.PI/2),t.normal.x=-i):r.dim==="z"?(e.rotation.rotateX(-i*Math.PI/2),t.normal.y=-i):(i>0&&e.rotation.rotateY(Math.PI),t.normal.z=-i)}function aa(e,t,r){this.rootNode=new y.Node;var i=new y.Mesh({geometry:new Xt({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),a=new y.Mesh({geometry:new cs,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(a),this.rootNode.add(i),this.faceInfo=e,this.plane=new y.Plane,this.linesMesh=i,this.quadsMesh=a}aa.prototype.update=function(e,t,r){var i=e.coordinateSystem,a=[i.getAxis(this.faceInfo[0]),i.getAxis(this.faceInfo[1])],n=this.linesMesh.geometry,o=this.quadsMesh.geometry;n.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(n,a,e,r),this._udpateSplitAreas(o,a,e,r),n.convertToTypedArray(),o.convertToTypedArray();var s=i.getAxis(this.faceInfo[2]);Ih(this.rootNode,this.plane,s,this.faceInfo[3])};aa.prototype._updateSplitLines=function(e,t,r,i){var a=i.getDevicePixelRatio();t.forEach(function(n,o){var s=n.model,l=t[1-o].getExtent();if(!n.scale.isBlank()){var u=s.getModel("splitLine",r.getModel("splitLine"));if(u.get("show")){var h=u.getModel("lineStyle"),c=h.get("color"),f=Ya(h.get("opacity"),1),d=Ya(h.get("width"),1);c=St(c)?c:[c];for(var p=n.getTicksCoords({tickModel:u}),m=0,g=0;g<p.length;g++){var _=p[g].coord,b=y.parseColor(c[m%c.length]);b[3]*=f;var x=[0,0,0],v=[0,0,0];x[o]=v[o]=_,x[1-o]=l[0],v[1-o]=l[1],e.addLine(x,v,b,d*a),m++}}}})};aa.prototype._udpateSplitAreas=function(e,t,r,i){t.forEach(function(a,n){var o=a.model,s=t[1-n].getExtent();if(!a.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var u=l.getModel("areaStyle"),h=u.get("color"),c=Ya(u.get("opacity"),1);h=St(h)?h:[h];for(var f=a.getTicksCoords({tickModel:l,clamp:!0}),d=0,p=[0,0,0],m=[0,0,0],g=0;g<f.length;g++){var _=f[g].coord,b=[0,0,0],x=[0,0,0];if(b[n]=x[n]=_,b[1-n]=s[0],x[1-n]=s[1],g===0){p=b,m=x;continue}var v=y.parseColor(h[d%h.length]);v[3]*=c,e.addQuad([p,b,x,m],v),p=b,m=x,d++}}}})};var co=[0,1,2,0,2,3],ds=ie.extend(function(){return{attributes:{position:new ie.Attribute("position","float",3,"POSITION"),texcoord:new ie.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new ie.Attribute("offset","float",2),color:new ie.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,i,a){r==null&&(r="left"),i==null&&(i="top");var n,o,s,l;switch(a=a||0,r){case"left":n=a,s=t[0]+a;break;case"center":case"middle":n=-t[0]/2,s=t[0]/2;break;case"right":n=-t[0]-a,s=-a;break}switch(i){case"bottom":o=a,l=t[1]+a;break;case"middle":o=-t[1]/2,l=t[1]/2;break;case"top":o=-t[1]-a,l=-a;break}var u=e*4,h=this.attributes.offset;h.set(u,[n,l]),h.set(u+1,[s,l]),h.set(u+2,[s,o]),h.set(u+3,[n,o])},addSprite:function(e,t,r,i,a,n){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,i,a,n);for(var s=0;s<co.length;s++)this.indices[this._faceOffset*3+s]=co[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,r,i,a,n,o){for(var s=e*4,l=this.attributes,u=0;u<4;u++)l.position.set(s+u,t);var h=l.texcoord;h.set(s,[i[0][0],i[0][1]]),h.set(s+1,[i[1][0],i[0][1]]),h.set(s+2,[i[1][0],i[1][1]]),h.set(s+3,[i[0][0],i[1][1]]),this.setSpriteAlign(e,r,a,n,o)}});kt(ds.prototype,vi);const Bh=`@export ecgl.labels.vertex

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

@end`;y.Shader.import(Bh);const hn=y.Mesh.extend(function(){var e=new ds({dynamic:!0}),t=new y.Material({shader:y.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}});var Jt=re.firstNotNull,er={x:0,y:2,z:1};function cn(e,t){var r=new y.Mesh({geometry:new Xt({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),i=new hn;i.material.depthMask=!1;var a=new y.Node;a.add(r),a.add(i),this.rootNode=a,this.dim=e,this.linesMesh=r,this.labelsMesh=i,this.axisLineCoords=null,this.labelElements=[]}var Pa={x:"y",y:"x",z:"y"};cn.prototype.update=function(e,t,r){var i=e.coordinateSystem,a=i.getAxis(this.dim),n=this.linesMesh.geometry,o=this.labelsMesh.geometry;n.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=a.model,l=a.getExtent(),C=r.getDevicePixelRatio(),u=s.getModel("axisLine",e.getModel("axisLine")),h=s.getModel("axisTick",e.getModel("axisTick")),c=s.getModel("axisLabel",e.getModel("axisLabel")),f=u.get("lineStyle.color");if(u.get("show")){var d=u.getModel("lineStyle"),p=[0,0,0],m=[0,0,0],g=er[a.dim];p[g]=l[0],m[g]=l[1],this.axisLineCoords=[p,m];var _=y.parseColor(f),b=Jt(d.get("width"),1),x=Jt(d.get("opacity"),1);_[3]*=x,n.addLine(p,m,_,b*C)}if(h.get("show")){var v=h.getModel("lineStyle"),w=y.parseColor(Jt(v.get("color"),f)),b=Jt(v.get("width"),1);w[3]*=Jt(v.get("opacity"),1);for(var S=a.getTicksCoords(),E=h.get("length"),M=0;M<S.length;M++){var L=S[M].coord,p=[0,0,0],m=[0,0,0],g=er[a.dim],I=er[Pa[a.dim]];p[g]=m[g]=L,m[I]=E,n.addLine(p,m,w,b*C)}}this.labelElements=[];var C=r.getDevicePixelRatio();if(c.get("show"))for(var S=a.getTicksCoords(),F=s.get("data"),U=c.get("margin"),O=a.getViewLabels(),M=0;M<O.length;M++){var H=O[M].tickValue,q=O[M].formattedLabel,Z=O[M].rawLabel,L=a.dataToCoord(H),N=[0,0,0],g=er[a.dim],I=er[Pa[a.dim]];N[g]=N[g]=L,N[I]=U;var B=c;F&&F[H]&&F[H].textStyle&&(B=new Mr(F[H].textStyle,c,s.ecModel));var Y=Jt(B.get("color"),f),j=new Fi({style:Vi(B,{text:q,fill:typeof Y=="function"?Y(a.type==="category"?Z:a.type==="value"?H+"":H,M):Y,verticalAlign:"top",align:"left"})}),te=t.add(j),Q=j.getBoundingRect();o.addSprite(N,[Q.width*C,Q.height*C],te),this.labelElements.push(j)}if(s.get("name")){var ve=s.getModel("nameTextStyle"),N=[0,0,0],g=er[a.dim],I=er[Pa[a.dim]],ee=Jt(ve.get("color"),f),Ee=ve.get("borderColor"),b=ve.get("borderWidth");N[g]=N[g]=(l[0]+l[1])/2,N[I]=s.get("nameGap");var j=new Fi({style:Vi(ve,{text:s.get("name"),fill:ee,stroke:Ee,lineWidth:b})}),te=t.add(j),Q=j.getBoundingRect();o.addSprite(N,[Q.width*C,Q.height*C],te),j.__idx=this.labelElements.length,this.nameLabelElement=j}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),n.convertToTypedArray(),o.convertToTypedArray()};cn.prototype.setSpriteAlign=function(e,t,r){for(var i=r.getDevicePixelRatio(),a=this.labelsMesh.geometry,n=0;n<this.labelElements.length;n++){var o=this.labelElements[n],s=o.getBoundingRect();a.setSpriteAlign(n,[s.width*i,s.height*i],e,t)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();a.setSpriteAlign(l.__idx,[s.width*i,s.height*i],e,t),a.dirty()}this.textAlign=e,this.textVerticalAlign=t};const na=`@export ecgl.lines3D.vertex

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

@end`;var fo=re.firstNotNull;y.Shader.import(na);var tr={x:0,y:2,z:1};const Fh=pi.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],i=["x","y","z"],a=new y.Material({shader:y.createShader("ecgl.color"),depthMask:!1,transparent:!0}),n=new y.Material({shader:y.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});a.define("fragment","DOUBLE_SIDED"),a.define("both","VERTEX_COLOR"),this.groupGL=new y.Node,this._control=new _i({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(s){var l=new aa(s,n,a);return this.groupGL.add(l.rootNode),l},this),this._axes=i.map(function(s){var l=new cn(s,n);return this.groupGL.add(l.rootNode),l},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new Hi({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new y.Mesh({geometry:new Xt({useNativeLine:!1}),material:n,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new Hi({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new hn({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new y.Node,this._sceneHelper=new Ht,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var i=e.coordinateSystem;i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var a=this._control;a.setViewGL(i.viewGL);var n=e.getModel("viewControl");a.setFromViewControlModel(n,0),this._axisLabelSurface.clear(),a.off("update"),e.get("show")&&(this._faces.forEach(function(o){o.update(e,t,r)},this),this._axes.forEach(function(o){o.update(e,this._axisLabelSurface,r)},this)),a.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,i){var a=i.renderer;this._sceneHelper.updateAmbientCubemap(a,e,r),this._sceneHelper.updateSkybox(a,e,r)},showAxisPointer:function(e,t,r,i){this._doShowAxisPointer(),this._updateAxisPointer(i.value)},hideAxisPointer:function(e,t,r,i){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,i=r.viewGL,a=i.castRay(e.offsetX,e.offsetY,new y.Ray),n,o=0;o<this._faces.length;o++){var s=this._faces[o];if(!s.rootNode.invisible){s.plane.normal.dot(i.camera.worldTransform.z)<0&&s.plane.normal.negate();var l=a.intersectPlane(s.plane);if(l){var u=r.getAxis(s.faceInfo[0]),h=r.getAxis(s.faceInfo[1]),c=tr[s.faceInfo[0]],f=tr[s.faceInfo[1]];u.contain(l.array[c])&&h.contain(l.array[f])&&(n=l)}}}if(n){var d=r.pointToData(n.array,[],!0);this._updateAxisPointer(d),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new y.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var i=[],a=0;a<2;a++){var n=this._faces[r*2+a];n.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),i[a]=t.z}var o=i[0]>i[1]?0:1,s=this._faces[r*2+o],l=this._faces[r*2+1-o];s.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),i=e.getAxis("z"),a=i.getExtentMax(),n=i.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),l=r.getExtentMax(),u=r.getExtentMin(),h=this._axes[0].rootNode,c=this._axes[1].rootNode,f=this._axes[2].rootNode,d=this._faces,p=d[4].rootNode.invisible?u:l,m=d[2].rootNode.invisible?a:n,g=d[0].rootNode.invisible?o:s,_=d[2].rootNode.invisible?a:n,b=d[0].rootNode.invisible?s:o,x=d[4].rootNode.invisible?u:l;h.rotation.identity(),c.rotation.identity(),f.rotation.identity(),d[4].rootNode.invisible&&(this._axes[0].flipped=!0,h.rotation.rotateX(Math.PI)),d[0].rootNode.invisible&&(this._axes[1].flipped=!0,c.rotation.rotateZ(Math.PI)),d[4].rootNode.invisible&&(this._axes[2].flipped=!0,f.rotation.rotateY(Math.PI)),h.position.set(0,m,p),c.position.set(g,_,0),f.position.set(b,0,x),h.update(),c.update(),f.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new y.Vector4,new y.Vector4],r=new y.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(i){var a=i.axisLineCoords;i.labelsMesh.geometry;for(var n=0;n<t.length;n++)t[n].setArray(a[n]),t[n].w=1,t[n].transformMat4(i.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[n].x/=t[n].w,t[n].y/=t[n].w;var o=t[1].x-t[0].x,s=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,u=(t[1].y+t[0].y)/2,h,c;Math.abs(s/o)<.5?(h="center",c=u>r.y?"bottom":"top"):(c="middle",h=l>r.x?"left":"right"),i.setSpriteAlign(h,c,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),i=this._axisPointerLineMesh,a=i.geometry,n=this._model.getModel("axisPointer"),o=this._api.getDevicePixelRatio();a.convertToDynamicArray(!0);function s(M){return re.firstNotNull(M.model.get("axisPointer.show"),n.get("show"))}function l(M){var L=M.model.getModel("axisPointer",n),I=L.getModel("lineStyle"),C=y.parseColor(I.get("color")),F=fo(I.get("width"),1),U=fo(I.get("opacity"),1);return C[3]*=U,{color:C,lineWidth:F}}for(var u=0;u<this._faces.length;u++){var h=this._faces[u];if(!h.rootNode.invisible){for(var c=h.faceInfo,f=c[3]<0?t.getAxis(c[2]).getExtentMin():t.getAxis(c[2]).getExtentMax(),d=tr[c[2]],p=0;p<2;p++){var m=c[p],g=c[1-p],_=t.getAxis(m),b=t.getAxis(g);if(s(_)){var x=[0,0,0],v=[0,0,0],w=tr[m],S=tr[g];x[w]=v[w]=r[w],x[d]=v[d]=f,x[S]=b.getExtentMin(),v[S]=b.getExtentMax();var E=l(_);a.addLine(x,v,E.color,E.lineWidth*o)}}if(s(t.getAxis(c[2]))){var x=r.slice(),v=r.slice();v[d]=f;var E=l(t.getAxis(c[2]));a.addLine(x,v,E.color,E.lineWidth*o)}}}a.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,i=this._axisPointerLabelsSurface,a=t.coordinateSystem,n=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),i.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var u=a.getAxis(s.dim),h=u.model,c=h.getModel("axisPointer",n),f=c.getModel("label"),d=c.get("lineStyle.color");if(!(!f.get("show")||!c.get("show"))){var p=e[l],m=f.get("formatter"),g=u.scale.getLabel({value:p});if(m!=null)g=m(g,e);else if(u.scale.type==="interval"||u.scale.type==="log"){var _=Wo(u.scale.getTicks()[0]);g=p.toFixed(_+2)}var b=f.get("color"),x=new Fi({style:Vi(f,{text:g,fill:b||d,align:"left",verticalAlign:"top"})}),v=i.add(x),w=x.getBoundingRect(),S=this._api.getDevicePixelRatio(),E=s.rootNode.position.toArray(),M=tr[o[s.dim]];E[M]+=(s.flipped?-1:1)*f.get("margin"),E[tr[s.dim]]=u.dataToCoord(e[l]),r.geometry.addSprite(E,[w.width*S,w.height*S],v,s.textAlign,s.textVerticalAlign)}},this),i.getZr().refreshImmediately(),r.material.set("uvScale",i.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function oi(e){jo.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}oi.prototype={constructor:oi,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};Xo(oi,jo);function ki(e,t,r){$i.call(this,e,t,r)}ki.prototype={constructor:ki,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};Xo(ki,$i);var Wi=function(){this._pool={},this._allocatedTextures=[]};Wi.prototype={constructor:Wi,get:function(e){var t=po(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var i=new J(e);return this._allocatedTextures.push(i),i}return r.pop()},put:function(e){var t=po(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var fs={width:512,height:512,type:D.UNSIGNED_BYTE,format:D.RGBA,wrapS:D.CLAMP_TO_EDGE,wrapT:D.CLAMP_TO_EDGE,minFilter:D.LINEAR_MIPMAP_LINEAR,magFilter:D.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},Na=Object.keys(fs);function po(e){we.defaultsWithPropList(e,fs,Na),Vh(e);for(var t="",r=0;r<Na.length;r++){var i=Na[r],a=e[i].toString();t+=a}return t}function Vh(e){var t=zh(e.width,e.height);e.format===D.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==D.NEAREST_MIPMAP_NEAREST||e.minFilter==D.NEAREST_MIPMAP_LINEAR?e.minFilter=D.NEAREST:(e.minFilter==D.LINEAR_MIPMAP_LINEAR||e.minFilter==D.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=D.LINEAR)),t||(e.wrapS=D.CLAMP_TO_EDGE,e.wrapT=D.CLAMP_TO_EDGE)}function zh(e,t){return(e&e-1)===0&&(t&t-1)===0}const Gh=`@export clay.sm.depth.vertex
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
@end`;var Bt=["px","nx","py","ny","pz","nz"];G.import(Gh);function Ra(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var i=e.material.get("alphaCutoff");return i||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function mo(e,t){var r=e.material,i=t.material;return r.get("diffuseMap")!==i.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(i.get("alphaCutoff")||0)}var vt=ke.extend(function(){return{softShadow:vt.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new Se,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new Wi}},function(){this._gaussianPassH=new Ae({fragment:G.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Ae({fragment:G.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Ae({fragment:G.source("clay.sm.debug_depth")})},{render:function(e,t,r,i){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,i),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,i=0,a=0,n=t||r.width/4,o=n;this.softShadow===vt.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var l=this._textures[s];e.setViewport(i,a,n*l.width/l.height,o),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),i+=n*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===vt.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(n){n.isRenderable()&&r._updateReceivers(e,n)});for(var i=0;i<t.lights.length;i++){var a=t.lights[i];a.castShadow&&!a.invisible&&this._lightsCastShadow.push(a)}},_renderShadowPass:function(e,t,r,i){for(var a in this._shadowMapNumber)this._shadowMapNumber[a]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var n=e.gl;if(i||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,n.enable(n.DEPTH_TEST),n.depthMask(!0),n.disable(n.BLEND),n.clearColor(1,1,1,1);for(var o=[],s=[],l=[],u=[],h=[],c=[],f,d=0;d<this._lightsCastShadow.length;d++){var p=this._lightsCastShadow[d];if(p.type==="DIRECTIONAL_LIGHT"){if(f){console.warn("Only one direectional light supported with shadow cascade");continue}if(p.shadowCascade>4){console.warn("Support at most 4 cascade");continue}p.shadowCascade>1&&(f=p),this.renderDirectionalLightShadow(e,t,r,p,h,u,l)}else p.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,p,s,o):p.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,p,c);this._shadowMapNumber[p.type]++}for(var m in this._shadowMapNumber)for(var g=this._shadowMapNumber[m],_=m+"_SHADOWMAP_COUNT",d=0;d<this._receivers.length;d++){var b=this._receivers[d],x=b.material;x.fragmentDefines[_]!==g&&(g>0?x.define("fragment",_,g):x.isDefined("fragment",_)&&x.undefine("fragment",_))}for(var d=0;d<this._receivers.length;d++){var b=this._receivers[d],x=b.material;f?x.define("fragment","SHADOW_CASCADE",f.shadowCascade):x.undefine("fragment","SHADOW_CASCADE")}var v=t.shadowUniforms;function w(I){return I.height}if(l.length>0){var S=l.map(w);if(v.directionalLightShadowMaps={value:l,type:"tv"},v.directionalLightMatrices={value:u,type:"m4v"},v.directionalLightShadowMapSizes={value:S,type:"1fv"},f){var E=h.slice(),M=h.slice();E.pop(),M.shift(),E.reverse(),M.reverse(),u.reverse(),v.shadowCascadeClipsNear={value:E,type:"1fv"},v.shadowCascadeClipsFar={value:M,type:"1fv"}}}if(o.length>0){var L=o.map(w),v=t.shadowUniforms;v.spotLightShadowMaps={value:o,type:"tv"},v.spotLightMatrices={value:s,type:"m4v"},v.spotLightShadowMapSizes={value:L,type:"1fv"}}c.length>0&&(v.pointLightShadowMaps={value:c,type:"tv"})},renderDirectionalLightShadow:function(){var e=new Ji,t=new k,r=new Ue,i=new k,a=new k,n=new k,o=new k;return function(s,l,u,h,c,f,d){var p=this._getDepthMaterial(h),m={getMaterial:function(Q){return Q.shadowDepthMaterial||p},isMaterialChanged:mo,getUniform:Ra,ifRender:function(Q){return Q.castShadow},sortCompare:st.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var g=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(g).applyTransform(u.viewMatrix)}var _=Math.min(-l.viewBoundingBoxLastFrame.min.z,u.far),b=Math.max(-l.viewBoundingBoxLastFrame.max.z,u.near),x=this._getDirectionalLightCamera(h,l,u),v=n.array;o.copy(x.projectionMatrix),R.invert(a.array,x.worldTransform.array),R.multiply(a.array,a.array,u.worldTransform.array),R.multiply(v,o.array,a.array);for(var w=[],S=u instanceof Oe,E=(u.near+u.far)/(u.near-u.far),M=2*u.near*u.far/(u.near-u.far),L=0;L<=h.shadowCascade;L++){var I=b*Math.pow(_/b,L/h.shadowCascade),C=b+(_-b)*L/h.shadowCascade,F=I*h.cascadeSplitLogFactor+C*(1-h.cascadeSplitLogFactor);w.push(F),c.push(-(-F*E+M)/-F)}var U=this._getTexture(h,h.shadowCascade);d.push(U);var O=s.viewport,H=s.gl;this._frameBuffer.attach(U),this._frameBuffer.bind(s),H.clear(H.COLOR_BUFFER_BIT|H.DEPTH_BUFFER_BIT);for(var L=0;L<h.shadowCascade;L++){var q=w[L],Z=w[L+1];S?R.perspective(t.array,u.fov/180*Math.PI,u.aspect,q,Z):R.ortho(t.array,u.left,u.right,u.bottom,u.top,q,Z),e.setFromProjection(t),e.getTransformedBoundingBox(r,a),r.applyProjection(o);var N=r.min.array,B=r.max.array;N[0]=Math.max(N[0],-1),N[1]=Math.max(N[1],-1),B[0]=Math.min(B[0],1),B[1]=Math.min(B[1],1),i.ortho(N[0],B[0],N[1],B[1],1,-1),x.projectionMatrix.multiplyLeft(i);var Y=h.shadowResolution||512;s.setViewport((h.shadowCascade-L-1)*Y,0,Y,Y,1);var j=l.updateRenderList(x);s.renderPass(j.opaque,x,m),this.softShadow===vt.VSM&&this._gaussianFilter(s,U,U.width);var te=new k;te.copy(x.viewMatrix).multiplyLeft(x.projectionMatrix),f.push(te.array),x.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(O)}}(),renderSpotLightShadow:function(e,t,r,i,a){var n=this._getTexture(r),o=this._getSpotLightCamera(r),s=e.gl;this._frameBuffer.attach(n),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),u={getMaterial:function(f){return f.shadowDepthMaterial||l},isMaterialChanged:mo,getUniform:Ra,ifRender:function(f){return f.castShadow},sortCompare:st.opaqueSortCompare},h=t.updateRenderList(o);e.renderPass(h.opaque,o,u),this._frameBuffer.unbind(e),this.softShadow===vt.VSM&&this._gaussianFilter(e,n,n.width);var c=new k;c.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),a.push(n),i.push(c.array)},renderPointLightShadow:function(e,t,r,i){var a=this._getTexture(r),n=e.gl;i.push(a);var o=this._getDepthMaterial(r),s={getMaterial:function(b){return b.shadowDepthMaterial||o},getUniform:Ra,sortCompare:st.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},u=new Ue,h=r.getWorldPosition().array,c=new Ue,f=r.range;c.min.setArray(h),c.max.setArray(h);var d=new A(f,f,f);c.max.add(d),c.min.sub(d);var p={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(b){if(b.isRenderable()&&b.castShadow){var x=b.geometry;if(!x.boundingBox){for(var v=0;v<Bt.length;v++)l[Bt[v]].push(b);return}if(u.transformFrom(x.boundingBox,b.worldTransform),!u.intersectBoundingBox(c))return;u.updateVertices();for(var v=0;v<Bt.length;v++)p[Bt[v]]=!1;for(var v=0;v<8;v++){var w=u.vertices[v],S=w[0]-h[0],E=w[1]-h[1],M=w[2]-h[2],L=Math.abs(S),I=Math.abs(E),C=Math.abs(M);L>I?L>C?p[S>0?"px":"nx"]=!0:p[M>0?"pz":"nz"]=!0:I>C?p[E>0?"py":"ny"]=!0:p[M>0?"pz":"nz"]=!0}for(var v=0;v<Bt.length;v++)p[Bt[v]]&&l[Bt[v]].push(b)}});for(var m=0;m<6;m++){var g=Bt[m],_=this._getPointLightCamera(r,g);this._frameBuffer.attach(a,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+m),this._frameBuffer.bind(e),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),e.renderPass(l[g],_,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var i=r?"clay.sm.distance.":"clay.sm.depth.";t=new ot({precision:this.precision,shader:new G(G.source(i+"vertex"),G.source(i+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===vt.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var i={width:r,height:r,type:z.FLOAT},a=this._texturePool.get(i);this._frameBuffer.attach(a),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",a),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(a)},_getTexture:function(e,t){var r=e.__uid__,i=this._textures[r],a=e.shadowResolution||512;return t=t||1,i||(e.type==="POINT_LIGHT"?i=new sr:i=new J,i.width=a*t,i.height=a,this.softShadow===vt.VSM?(i.type=z.FLOAT,i.anisotropic=4):(i.minFilter=D.NEAREST,i.magFilter=D.NEAREST,i.useMipmap=!1),this._textures[r]=i),i},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Oe,nx:new Oe,py:new Oe,ny:new Oe,pz:new Oe,nz:new Oe});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(A.POSITIVE_X,A.NEGATIVE_Y);break;case"nx":r.lookAt(A.NEGATIVE_X,A.NEGATIVE_Y);break;case"py":r.lookAt(A.POSITIVE_Y,A.POSITIVE_Z);break;case"ny":r.lookAt(A.NEGATIVE_Y,A.NEGATIVE_Z);break;case"pz":r.lookAt(A.POSITIVE_Z,A.NEGATIVE_Y);break;case"nz":r.lookAt(A.NEGATIVE_Z,A.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new k,t=new Ue,r=new Ue;return function(i,a,n){this._lightCameras.directional||(this._lightCameras.directional=new Dr);var o=this._lightCameras.directional;t.copy(a.viewBoundingBoxLastFrame),t.intersection(n.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(n.worldTransform),o.rotation.copy(i.rotation),o.scale.copy(i.scale),o.updateWorldTransform(),k.invert(e,o.worldTransform),k.multiply(e,e,n.worldTransform),r.copy(t).applyTransform(e);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Oe);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),R.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var i=0;i<this._receivers.length;i++){var a=this._receivers[i];if(a.material){var n=a.material;n.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),n.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),n.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),n.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});vt.VSM=1;vt.PCF=2;var si=ke.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,a=r._parametersCopy;if(a||(a=r._parametersCopy={}),i)for(var n in i)n!=="width"&&n!=="height"&&(a[n]=i[n]);var o,s;return i.width instanceof Function?o=i.width.call(this,t):o=i.width,i.height instanceof Function?s=i.height.call(this,t):s=i.height,(a.width!==o||a.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),a.width=o,a.height=s,a},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),go=ke.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(t.inputs){for(var r in t.inputs)if(t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var i=t.inputs[r],a=this.findPin(i);a?t.link(r,a.node,a.pin):console.warn(typeof i=="string"?"Node "+i+" not exist":"Pin of "+i.node+"."+i.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof si)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var i=this.nodes[r];i.name===e.node&&(t=i)}else t=e.node;if(t){var a=e.pin;if(a||t.outputs&&(a=Object.keys(t.outputs)[0]),t.outputs[a])return{node:t,pin:a}}}}),Uh=go.extend(function(){return{_outputs:[],_texturePool:new Wi,_frameBuffer:new Se({depthBuffer:!1})}},{addNode:function(e){go.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),Hh=si.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new Se},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var i=this.frameBuffer;for(var a in this.outputs){var n=this.updateParameter(a,e),o=this.outputs[a],s=this._compositor.allocateTexture(n);this._outputTextures[a]=s;var l=o.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),i.attach(s,l)}i.bind(e);var u=e.getGLExtension("EXT_draw_buffers");if(u){var h=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&h.push(l);u.drawBuffersEXT(h)}e.saveClear(),e.clearBit=D.DEPTH_BUFFER_BIT|D.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),i.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}}),kh=si.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),Wh=si.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new Ae({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var i in this.inputLinks){var a=this.inputLinks[i],n=a.node.getOutput(e,a.pin);this.pass.setUniform(i,n)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var l=this.updateParameter(s,e);isNaN(l.width)&&this.updateParameter(s,e);var u=this.outputs[s],h=this._compositor.allocateTexture(l);this._outputTextures[s]=h;var c=u.attachment||r.COLOR_ATTACHMENT0;typeof c=="string"&&(c=r[c]),o[c]=h}this._compositor.getFrameBuffer().bind(e);for(var c in o)this._compositor.getFrameBuffer().attach(o[c],c);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var i in this.inputLinks){var a=this.inputLinks[i];a.node.removeReference(a.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,a=r._parametersCopy;if(a||(a=r._parametersCopy={}),i)for(var n in i)n!=="width"&&n!=="height"&&(a[n]=i[n]);var o,s;return typeof i.width=="function"?o=i.width.call(this,t):o=i.width,typeof i.height=="function"?s=i.height.call(this,t):s=i.height,o=Math.ceil(o),s=Math.ceil(s),(a.width!==o||a.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),a.width=o,a.height=s,a},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){si.prototype.clear.call(this),this.pass.material.disableTexturesAll()}});const Xh=`@export clay.compositor.coloradjust
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
@end`,ps=`@export clay.compositor.kernel.gaussian_9
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
@end`,ms=`
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
@end`,qh=`@export clay.compositor.vignette
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
@end`,gs=`@export clay.compositor.output
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
@end`,_s=`@export clay.compositor.bright
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
`,vs=`@export clay.compositor.downsample
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
@end`,Zh=`@export clay.compositor.lensflare
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
@end`,bs=`@export clay.compositor.blend
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
@end`,Ts=`@export clay.compositor.fxaa
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
@end`;function Yh(e){e.import(Xh),e.import(ps),e.import(jh),e.import(ms),e.import(qh),e.import(gs),e.import(_s),e.import(vs),e.import(ys),e.import(xs),e.import(Zh),e.import(bs),e.import(Ts)}Yh(G);var Kh=/^#source\((.*?)\)/;function $h(e,t){var r=new Uh;t=t||{};var i={textures:{},parameters:{}},a=function(s,l){for(var u=0;u<e.nodes.length;u++){var h=e.nodes[u],c=Qh(h,i,t);c&&r.addNode(c)}};for(var n in e.parameters){var o=e.parameters[n];i.parameters[n]=dn(o)}return tc(e,i,t,function(s){i.textures=s,a()}),r}function Qh(e,t,r){var i=e.type||"filter",a,n,o;if(i==="filter"){var s=e.shader.trim(),l=Kh.exec(s);if(l?a=G.source(l[1].trim()):s.charAt(0)==="#"&&(a=t.shaders[s.substr(1)]),a||(a=s),!a)return}if(e.inputs){n={};for(var u in e.inputs)typeof e.inputs[u]=="string"?n[u]=e.inputs[u]:n[u]={node:e.inputs[u].node,pin:e.inputs[u].pin}}if(e.outputs){o={};for(var u in e.outputs){var h=e.outputs[u];o[u]={},h.attachment!=null&&(o[u].attachment=h.attachment),h.keepLastFrame!=null&&(o[u].keepLastFrame=h.keepLastFrame),h.outputLastFrame!=null&&(o[u].outputLastFrame=h.outputLastFrame),h.parameters&&(o[u].parameters=dn(h.parameters))}}var c;if(i==="scene"?c=new Hh({name:e.name,scene:r.scene,camera:r.camera,outputs:o}):i==="texture"?c=new kh({name:e.name,outputs:o}):c=new Wh({name:e.name,shader:a,inputs:n,outputs:o}),c){if(e.parameters)for(var u in e.parameters){var f=e.parameters[u];typeof f=="string"?(f=f.trim(),f.charAt(0)==="#"?f=t.textures[f.substr(1)]:c.on("beforerender",rc(u,ws(f)))):typeof f=="function"&&c.on("beforerender",f),c.setParameter(u,f)}if(e.defines&&c.pass)for(var u in e.defines){var f=e.defines[u];c.pass.material.define("fragment",u,f)}}return c}function Jh(e,t){return e}function ec(e,t){return t}function dn(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(i){var a=e[i];a!=null&&(typeof a=="string"&&(a=z[a]),t[i]=a)});var r=e.scale||1;return["width","height"].forEach(function(i){if(e[i]!=null){var a=e[i];typeof a=="string"?(a=a.trim(),t[i]=ic(i,ws(a),r)):t[i]=a}}),t.width||(t.width=Jh),t.height||(t.height=ec),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function tc(e,t,r,i){if(!e.textures){i({});return}var a={},n=0,o=!1,s=r.textureRootPath;we.each(e.textures,function(l,u){var h,c=l.path,f=dn(l.parameters);if(Array.isArray(c)&&c.length===6)s&&(c=c.map(function(d){return we.relative2absolute(d,s)})),h=new sr(f);else if(typeof c=="string")s&&(c=we.relative2absolute(c,s)),h=new J(f);else return;h.load(c),n++,h.once("success",function(){a[u]=h,n--,n===0&&(i(a),o=!0)})}),n===0&&!o&&i(a)}function rc(e,t){return function(r){var i=r.getDevicePixelRatio(),a=r.getWidth(),n=r.getHeight(),o=t(a,n,i);this.setParameter(e,o)}}function ic(e,t,r){return r=r||1,function(i){var a=i.getDevicePixelRatio(),n=i.getWidth()*r,o=i.getHeight()*r;return t(n,o,a)}}function ws(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function Pr(e,t){for(var r=0,i=1/t,a=e;a>0;)r=r+i*(a%t),a=Math.floor(a/t),i=i/t;return r}const ac=`@export ecgl.ssao.estimate

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
`;G.import(ac);function Ss(e){for(var t=new Uint8Array(e*e*4),r=0,i=new A,a=0;a<e;a++)for(var n=0;n<e;n++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(i.x*.5+.5)*255,t[r++]=(i.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function _o(e){return new J({pixels:Ss(e),wrapS:z.REPEAT,wrapT:z.REPEAT,width:e,height:e})}function nc(e,t,r){var i=new Float32Array(e*3);t=t||0;for(var a=0;a<e;a++){var n=Pr(a+t,2)*(r?1:2)*Math.PI,o=Pr(a+t,3)*Math.PI,s=Math.random(),l=Math.cos(n)*Math.sin(o)*s,u=Math.cos(o)*s,h=Math.sin(n)*Math.sin(o)*s;i[a*3]=l,i[a*3+1]=u,i[a*3+2]=h}return i}function Ct(e){e=e||{},this._ssaoPass=new Ae({fragment:G.source("ecgl.ssao.estimate")}),this._blurPass=new Ae({fragment:G.source("ecgl.ssao.blur")}),this._framebuffer=new Se({depthBuffer:!1}),this._ssaoTexture=new J,this._blurTexture=new J,this._blurTexture2=new J,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}Ct.prototype.setDepthTexture=function(e){this._depthTex=e};Ct.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};Ct.prototype.update=function(e,t,r){var i=e.getWidth(),a=e.getHeight(),n=this._ssaoPass,o=this._blurPass;n.setUniform("kernel",this._kernels[r%this._kernels.length]),n.setUniform("depthTex",this._depthTex),this._normalTex!=null&&n.setUniform("normalTex",this._normalTex),n.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new k;k.transpose(s,t.worldTransform),n.setUniform("projection",t.projectionMatrix.array),n.setUniform("projectionInv",t.invProjectionMatrix.array),n.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,u=this._blurTexture,h=this._blurTexture2;l.width=i/2,l.height=a/2,u.width=i,u.height=a,h.width=i,h.height=a,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),n.render(e),o.setUniform("textureSize",[i/2,a/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(u),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(h),o.setUniform("textureSize",[i,a]),o.setUniform("direction",1),o.setUniform("ssaoTexture",u),o.render(e),this._framebuffer.unbind(e);var c=e.clearColor;e.gl.clearColor(c[0],c[1],c[2],c[3])};Ct.prototype.getTargetTexture=function(){return this._blurTexture2};Ct.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};Ct.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=nc(e,t*e,!!this._normalTex)};Ct.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=Ss(e),t.width=t.height=e,t.dirty()):(t=_o(e),this._ssaoPass.setUniform("noiseTex",_o(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};Ct.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};const oc=`@export ecgl.ssr.main

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

@end`;G.import(oc);function Dt(e){e=e||{},this._ssrPass=new Ae({fragment:G.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Ae({fragment:G.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Ae({fragment:G.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Ae({fragment:G.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new J({type:z.HALF_FLOAT}),this._texture2=new J({type:z.HALF_FLOAT}),this._texture3=new J({type:z.HALF_FLOAT}),this._prevTexture=new J({type:z.HALF_FLOAT}),this._currentTexture=new J({type:z.HALF_FLOAT}),this._frameBuffer=new Se({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Dt.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};Dt.prototype.update=function(e,t,r,i){var a=e.getWidth(),n=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=a/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=n/this._downScale,s.width=l.width=a,s.height=l.height=n;var u=this._frameBuffer,h=this._ssrPass,c=this._blurPass1,f=this._blurPass2,d=this._blendPass,p=new k,m=new k;k.transpose(p,t.worldTransform),k.transpose(m,t.viewMatrix),h.setUniform("sourceTexture",r),h.setUniform("projection",t.projectionMatrix.array),h.setUniform("projectionInv",t.invProjectionMatrix.array),h.setUniform("toViewSpace",p.array),h.setUniform("toWorldSpace",m.array),h.setUniform("nearZ",t.near);var g=i/this._totalSamples*this._samplePerFrame;if(h.setUniform("jitterOffset",g),h.setUniform("sampleOffset",i*this._samplePerFrame),c.setUniform("textureSize",[o.width,o.height]),f.setUniform("textureSize",[a,n]),f.setUniform("sourceTexture",r),c.setUniform("projection",t.projectionMatrix.array),f.setUniform("projection",t.projectionMatrix.array),u.attach(o),u.bind(e),h.render(e),this._physicallyCorrect&&(u.attach(this._currentTexture),d.setUniform("texture1",this._prevTexture),d.setUniform("texture2",o),d.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),d.render(e)),u.attach(s),c.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),c.render(e),u.attach(l),f.setUniform("texture",s),f.render(e),u.unbind(e),this._physicallyCorrect){var _=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=_}};Dt.prototype.getTargetTexture=function(){return this._texture3};Dt.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};Dt.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=bt.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};Dt.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};Dt.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};Dt.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};const vo=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],sc=`@export ecgl.normal.vertex

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
@end`;G.import(sc);function Oa(e,t,r,i,a){var n=e.gl;t.setUniform(n,"1i",r,a),n.activeTexture(n.TEXTURE0+a),i.isRenderable()?i.bind(e):i.unbind(e)}function lc(e,t,r,i,a){var n,o,s,l,u=e.gl;return function(h,c,f){if(!(l&&l.material===h.material)){var d=h.material,p=h.__program,m=d.get("roughness");m==null&&(m=1);var g=d.get("normalMap")||t,_=d.get("roughnessMap"),b=d.get("bumpMap"),x=d.get("uvRepeat"),v=d.get("uvOffset"),w=d.get("detailUvRepeat"),S=d.get("detailUvOffset"),E=!!b&&d.isTextureEnabled("bumpMap"),M=!!_&&d.isTextureEnabled("roughnessMap"),L=d.isDefined("fragment","DOUBLE_SIDED");b=b||r,_=_||i,f!==c?(c.set("normalMap",g),c.set("bumpMap",b),c.set("roughnessMap",_),c.set("useBumpMap",E),c.set("useRoughnessMap",M),c.set("doubleSide",L),x!=null&&c.set("uvRepeat",x),v!=null&&c.set("uvOffset",v),w!=null&&c.set("detailUvRepeat",w),S!=null&&c.set("detailUvOffset",S),c.set("roughness",m)):(p.setUniform(u,"1f","roughness",m),n!==g&&Oa(e,p,"normalMap",g,0),o!==b&&b&&Oa(e,p,"bumpMap",b,1),s!==_&&_&&Oa(e,p,"roughnessMap",_,2),x!=null&&p.setUniform(u,"2f","uvRepeat",x),v!=null&&p.setUniform(u,"2f","uvOffset",v),w!=null&&p.setUniform(u,"2f","detailUvRepeat",w),S!=null&&p.setUniform(u,"2f","detailUvOffset",S),p.setUniform(u,"1i","useBumpMap",+E),p.setUniform(u,"1i","useRoughnessMap",+M),p.setUniform(u,"1i","doubleSide",+L)),n=g,o=b,s=_,l=h}}}function Vr(e){this._depthTex=new J({format:z.DEPTH_COMPONENT,type:z.UNSIGNED_INT}),this._normalTex=new J({type:z.HALF_FLOAT}),this._framebuffer=new Se,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Se.DEPTH_ATTACHMENT),this._normalMaterial=new ot({shader:new G(G.source("ecgl.normal.vertex"),G.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=xt.createBlank("#000"),this._defaultBumpMap=xt.createBlank("#000"),this._defaultRoughessMap=xt.createBlank("#000"),this._debugPass=new Ae({fragment:G.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Vr.prototype.getDepthTexture=function(){return this._depthTex};Vr.prototype.getNormalTexture=function(){return this._normalTex};Vr.prototype.update=function(e,t,r){var i=e.getWidth(),a=e.getHeight(),n=this._depthTex,o=this._normalTex,s=this._normalMaterial;n.width=i,n.height=a,o.width=i,o.height=a;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(u){return u.renderNormal},beforeRender:lc(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};Vr.prototype.renderDebug=function(e){this._debugPass.render(e)};Vr.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function yi(e){e=e||{},this._edgePass=new Ae({fragment:G.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new J({type:z.HALF_FLOAT}),this._frameBuffer=new Se,this._frameBuffer.attach(this._targetTexture)}yi.prototype.update=function(e,t,r,i){var a=e.getWidth(),n=e.getHeight(),o=this._targetTexture;o.width=a,o.height=n;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[a,n]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),s.unbind(e)};yi.prototype.getTargetTexture=function(){return this._targetTexture};yi.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};yi.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};const uc={nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},hc=`@export ecgl.dof.coc

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
@end`;G.import(ps);G.import(ms);G.import(gs);G.import(_s);G.import(vs);G.import(ys);G.import(xs);G.import(bs);G.import(Ts);G.import(hc);G.import(cc);function Ms(e,t){return{color:{parameters:{width:e,height:t}}}}var fn=["composite","FXAA"];function ae(){this._width,this._height,this._dpr,this._sourceTexture=new J({type:z.HALF_FLOAT}),this._depthTexture=new J({format:z.DEPTH_COMPONENT,type:z.UNSIGNED_INT}),this._framebuffer=new Se,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Se.DEPTH_ATTACHMENT),this._normalPass=new Vr,this._compositor=$h(uc);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=fn.map(function(i){return this._compositor.getNodeByName(i)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new Ct(r),this._ssrPass=new Dt(r),this._edgePass=new yi(r)}ae.prototype.resize=function(i,a,r){r=r||1;var i=i*r,a=a*r,n=this._sourceTexture,o=this._depthTexture;n.width=i,n.height=a,o.width=i,o.height=a;var s={getWidth:function(){return i},getHeight:function(){return a},getDevicePixelRatio:function(){return r}};function l(u,h){if(typeof u[h]=="function"){var c=u[h].__original||u[h];u[h]=function(f){return c.call(this,s)},u[h].__original=c}}this._compositor.nodes.forEach(function(u){for(var h in u.outputs){var c=u.outputs[h].parameters;c&&(l(c,"width"),l(c,"height"))}for(var f in u.parameters)l(u.parameters,f)}),this._width=i,this._height=a,this._dpr=r};ae.prototype.getWidth=function(){return this._width};ae.prototype.getHeight=function(){return this._height};ae.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};ae.prototype._getPrevNode=function(e){for(var t=fn.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};ae.prototype._getNextNode=function(e){for(var t=fn.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};ae.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(e.inputs.texture=t.name,r?(e.outputs=Ms(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};ae.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(r?(t.outputs=Ms(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};ae.prototype.updateNormal=function(e,t,r,i){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};ae.prototype.updateSSAO=function(e,t,r,i){this._ssaoPass.update(e,r,i)};ae.prototype.enableSSAO=function(){this._enableSSAO=!0};ae.prototype.disableSSAO=function(){this._enableSSAO=!1};ae.prototype.enableSSR=function(){this._enableSSR=!0};ae.prototype.disableSSR=function(){this._enableSSR=!1};ae.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};ae.prototype.getSourceFrameBuffer=function(){return this._framebuffer};ae.prototype.getSourceTexture=function(){return this._sourceTexture};ae.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};ae.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};ae.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};ae.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};ae.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};ae.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};ae.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};ae.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};ae.prototype.enableEdge=function(){this._enableEdge=!0};ae.prototype.disableEdge=function(){this._enableEdge=!1};ae.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};ae.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};ae.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=i;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break}};ae.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,i={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};ae.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};ae.prototype.setEdgeColor=function(e){var t=y.parseColor(e);this._edgePass.setParameter("edgeColor",t)};ae.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};ae.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:y.Texture.NEAREST,magFilter:y.Texture.NEAREST,flipY:!1})};ae.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};ae.prototype.isSSREnabled=function(){return this._enableSSR};ae.prototype.composite=function(e,t,r,i,a){var n=this._sourceTexture,o=n;this._enableEdge&&(this._edgePass.update(e,r,n,a),n=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,n,a),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,u=Math.floor(vo.length/2/l),h=a%u,c=0;c<l*2;c++)s[c]=vo[c+h*l*2];for(var c=0;c<this._dofBlurNodes.length;c++)this._dofBlurNodes[c].setParameter("percent",a/30),this._dofBlurNodes[c].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,i)};ae.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function Ka(e){for(var t=[],r=0;r<30;r++)t.push([Pr(r,2),Pr(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new J,this._sourceFb=new Se,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new J,this._outputTex=new J;var i=this._blendPass=new Ae({fragment:G.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new Se({depthBuffer:!1}),this._outputPass=new Ae({fragment:G.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(a){a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)}}Ka.prototype={constructor:Ka,jitterProjection:function(e,t){var r=e.viewport,i=r.devicePixelRatio||e.getDevicePixelRatio(),a=r.width*i,n=r.height*i,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new k;s.array[12]=(o[0]*2-1)/a,s.array[13]=(o[1]*2-1)/n,k.mul(t.projectionMatrix,s,t.projectionMatrix),k.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var i=this._blendPass;this._frame===0?(i.setUniform("weight1",0),i.setUniform("weight2",1)):(i.setUniform("weight1",.9),i.setUniform("weight2",.1)),i.setUniform("texture1",this._prevFrameTex),i.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),i.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var a=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=a,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function ce(e){e=e||"perspective",this.layer=null,this.scene=new Wt,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new ae,this._temporalSS=new Ka,this._shadowMapPass=new vt;for(var t=[],r=0,i=0;i<30;i++){for(var a=[],n=0;n<6;n++)a.push(Pr(r,2)*4-2),a.push(Pr(r,3)*4-2),r++;t.push(a)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}ce.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Oe||(this.camera=new Oe,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Dr||(this.camera=new Dr,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};ce.prototype.setViewport=function(e,t,r,i,a){this.camera instanceof Oe&&(this.camera.aspect=r/i),a=a||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=i,this.viewport.devicePixelRatio=a,this._compositor.resize(r*a,i*a),this._temporalSS.resize(r*a,i*a)};ce.prototype.containPoint=function(e,t){var r=this.viewport,i=this.layer.renderer.getHeight();return t=i-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var yo=new $;ce.prototype.castRay=function(e,t,r){var i=this.layer.renderer,a=i.viewport;return i.viewport=this.viewport,i.screenToNDC(e,t,yo),this.camera.castRay(yo,r),i.viewport=a,r};ce.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],i=r.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};ce.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};ce.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};ce.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};ce.prototype.hasDOF=function(){return this._enableDOF};ce.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};ce.prototype._doRender=function(e,t,r){var i=this.scene,a=this.camera;r=r||0,this._updateTransparent(e,i,a,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,i,a,!0)),this._updateShadowPCFKernel(r);var n=e.clearColor;if(e.gl.clearColor(n[0],n[1],n[2],n[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,a),this._compositor.updateNormal(e,i,a,this._temporalSS.getFrame())),this._updateSSAO(e,i,a,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(i,a,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,i,a,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,i,a,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(i,a,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(i,a,!0,!0)};ce.prototype._updateTransparent=function(e,t,r,i){for(var a=new A,n=new k,o=r.getWorldPosition(),s=t.getRenderList(r).transparent,l=0;l<s.length;l++){var u=s[l],h=u.geometry;k.invert(n,u.worldTransform),A.transformMat4(a,o,n),h.needsSortTriangles&&h.needsSortTriangles()&&h.doSortTriangles(a,i),h.needsSortVertices&&h.needsSortVertices()&&h.doSortVertices(a,i)}};ce.prototype._updateSSAO=function(e,t,r){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var a=t.getRenderList(r),n=0;n<a.opaque.length;n++){var o=a.opaque[n];o.renderNormal&&o.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};ce.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),i=r.opaque,a=0;a<i.length;a++)i[a].receiveShadow&&(i[a].material.set("pcfKernel",t),i[a].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};ce.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};ce.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var i=e.getModel("bloom"),a=e.getModel("edge"),n=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),u=e.getModel("colorCorrection");i.get("enable")?r.enableBloom():r.disableBloom(),n.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),a.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=n.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(i.get("intensity")),r.setEdgeColor(a.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),t),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(h){r.setSSAOParameter(h,o.get(h))}),["quality","maxRoughness","physical"].forEach(function(h){r.setSSRParameter(h,s.get(h))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(h){r.setDOFParameter(h,n.get(h))}),["brightness","contrast","saturation"].forEach(function(h){r.setColorCorrection(h,u.get(h))})};ce.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};ce.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};ce.prototype.isLinearSpace=function(){return this._enablePostEffect};ce.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};ce.prototype.add=function(e){this.rootNode.add(e)};ce.prototype.remove=function(e){this.rootNode.remove(e)};ce.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(ce.prototype,on);function dc(e,t){var r=e.getBoxLayoutParams(),i=Qi(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var a=e.get("boxWidth"),n=e.get("boxHeight"),o=e.get("boxDepth");this.getAxis("x").setExtent(-a/2,a/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-n/2,n/2),this.size=[a,n,o]}function fc(e,t){var r={};function i(a,n){r[a]=r[a]||[1/0,-1/0],r[a][0]=Math.min(n[0],r[a][0]),r[a][1]=Math.max(n[1],r[a][1])}e.eachSeries(function(a){if(a.coordinateSystem===this){var n=a.getData();["x","y","z"].forEach(function(o){n.mapDimensionsAll(o,!0).forEach(function(s){i(o,n.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(a){e.eachComponent(a,function(n){var o=a.charAt(0),s=n.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var u=l.getAxis(o);if(!u){var h=nn(r[o]||[1/0,-1/0],n);u=new ki(o,h),u.type=n.get("type");var c=u.type==="category";u.onBand=c&&n.get("boundaryGap"),u.inverse=n.get("inverse"),n.axis=u,u.model=n,u.getLabelModel=function(){return n.getModel("axisLabel",s.getModel("axisLabel"))},u.getTickModel=function(){return n.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(u)}}},this)},this),this.resize(this.model,t)}var pc={dimensions:oi.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(n){n.__viewGL=n.__viewGL||new ce;var o=new oi;o.model=n,o.viewGL=n.__viewGL,n.coordinateSystem=o,r.push(o),o.resize=dc,o.update=fc});var i=["xAxis3D","yAxis3D","zAxis3D"];function a(n,o){return i.map(function(s){var l=n.getReferringComponents(s).models[0];return l==null&&(l=o.getComponent(s)),l})}return e.eachSeries(function(n){if(n.get("coordinateSystem")==="cartesian3D"){var o=n.getReferringComponents("grid3D").models[0];if(o==null){var s=a(n,e),o=s[0].getCoordSysModel();s.forEach(function(h){h.getCoordSysModel()})}var l=o.coordinateSystem;n.coordinateSystem=l}}),r}},Es=Ir.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});Xl(Es);var As={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},mc=he({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},As),pn=he({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},As),gc=kt({scale:!0,min:"dataMin",max:"dataMax"},pn),Ls=kt({logBase:10},pn);Ls.scale=!0;const _c={categoryAxis3D:mc,valueAxis3D:pn,timeAxis3D:gc,logAxis3D:Ls};var vc=["value","category","time","log"];function yc(e,t,r,i,a){vc.forEach(function(n){var o=r.extend({type:t+"Axis3D."+n,__ordinalMeta:null,mergeDefaultAndTheme:function(s,l){var u=l.getTheme();he(s,u.get(n+"Axis3D")),he(s,this.getDefaultOption()),s.type=i(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=Rl.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:he(Nl(_c[n+"Axis3D"]),a||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+"Axis3D",Ol(i,t))}function xc(e,t){return t.type||(t.data?"category":"value")}function bc(e){e.registerComponentModel(ia),e.registerComponentView(Fh),e.registerCoordinateSystem("grid3D",pc),["x","y","z"].forEach(function(t){yc(e,t,Es,xc,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(i){i.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}He(bc);const zr={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}},Cs={getFilledRegions:function(e,t){var r=(e||[]).slice(),i;if(typeof t=="string"?(t=Ha(t),i=t&&t.geoJson):t&&t.features&&(i=t),!i)return[];for(var a={},n=i.features,o=0;o<r.length;o++)a[r[o].name]=r[o];for(var o=0;o<n.length;o++){var s=n[o].properties.name;a[s]||r.push({name:s})}return r},defaultOption:{show:!0,zlevel:-10,map:"",left:0,top:0,width:"100%",height:"100%",boxWidth:100,boxHeight:10,boxDepth:"auto",regionHeight:3,environment:"auto",groundPlane:{show:!1,color:"#aaa"},shading:"lambert",light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}};var Gr=Ir.extend({type:"geo3D",layoutMode:"box",coordinateSystem:null,optionUpdated:function(){var e=this.option;e.regions=this.getFilledRegions(e.regions,e.map);var t=mi(e.data||[],{coordDimensions:["value"],encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),r=new Tt(t,this);r.initData(e.regions);var i={};r.each(function(a){var n=r.getName(a),o=r.getItemModel(a);i[n]=o}),this._regionModelMap=i,this._data=r},getData:function(){return this._data},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Mr(null,this)},getRegionPolygonCoords:function(e){var t=this.getData().getName(e),r=this.coordinateSystem.getRegion(t);return r?r.geometries:[]},getFormattedLabel:function(e,t){var r=this._data.getName(e),i=this.getRegionModel(e),a=i.get(t==="normal"?["label","formatter"]:["emphasis","label","formatter"]);a==null&&(a=i.get(["label","formatter"]));var n={name:r};if(typeof a=="function")return n.status=t,a(n);if(typeof a=="string"){var o=n.seriesName;return a.replace("{a}",o??"")}else return r},defaultOption:{regions:[]}});he(Gr.prototype,Cs);he(Gr.prototype,ra);he(Gr.prototype,Br);he(Gr.prototype,Fr);he(Gr.prototype,zr);function Ds(e,t,r){r=r||2;var i=t&&t.length,a=i?t[0]*r:e.length,n=Ps(e,0,a,r,!0),o=[];if(!n)return o;var s,l,u,h,c,f,d;if(i&&(n=Ec(e,t,n,r)),e.length>80*r){s=u=e[0],l=h=e[1];for(var p=r;p<a;p+=r)c=e[p],f=e[p+1],c<s&&(s=c),f<l&&(l=f),c>u&&(u=c),f>h&&(h=f);d=Math.max(u-s,h-l)}return ui(n,o,r,s,l,d),o}function Ps(e,t,r,i,a){var n,o;if(a===Ja(e,t,r,i)>0)for(n=t;n<r;n+=i)o=xo(n,e[n],e[n+1],o);else for(n=r-i;n>=t;n-=i)o=xo(n,e[n],e[n+1],o);return o&&nr(o,o.next)&&(ci(o),o=o.next),o}function li(e,t){if(!e)return e;t||(t=e);var r=e,i;do if(i=!1,!r.steiner&&(nr(r,r.next)||qe(r.prev,r,r.next)===0)){if(ci(r),r=t=r.prev,r===r.next)return null;i=!0}else r=r.next;while(i||r!==t);return t}function ui(e,t,r,i,a,n,o){if(e){!o&&n&&Dc(e,i,a,n);for(var s=e,l,u;e.prev!==e.next;){if(l=e.prev,u=e.next,n?wc(e,i,a,n):Tc(e)){t.push(l.i/r),t.push(e.i/r),t.push(u.i/r),ci(e),e=u.next,s=u.next;continue}if(e=u,e===s){o?o===1?(e=Sc(e,t,r),ui(e,t,r,i,a,n,2)):o===2&&Mc(e,t,r,i,a,n):ui(li(e),t,r,i,a,n,1);break}}}}function Tc(e){var t=e.prev,r=e,i=e.next;if(qe(t,r,i)>=0)return!1;for(var a=e.next.next;a!==e.prev;){if(Xi(t.x,t.y,r.x,r.y,i.x,i.y,a.x,a.y)&&qe(a.prev,a,a.next)>=0)return!1;a=a.next}return!0}function wc(e,t,r,i){var a=e.prev,n=e,o=e.next;if(qe(a,n,o)>=0)return!1;for(var s=a.x<n.x?a.x<o.x?a.x:o.x:n.x<o.x?n.x:o.x,l=a.y<n.y?a.y<o.y?a.y:o.y:n.y<o.y?n.y:o.y,u=a.x>n.x?a.x>o.x?a.x:o.x:n.x>o.x?n.x:o.x,h=a.y>n.y?a.y>o.y?a.y:o.y:n.y>o.y?n.y:o.y,c=$a(s,l,t,r,i),f=$a(u,h,t,r,i),d=e.nextZ;d&&d.z<=f;){if(d!==e.prev&&d!==e.next&&Xi(a.x,a.y,n.x,n.y,o.x,o.y,d.x,d.y)&&qe(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(d=e.prevZ;d&&d.z>=c;){if(d!==e.prev&&d!==e.next&&Xi(a.x,a.y,n.x,n.y,o.x,o.y,d.x,d.y)&&qe(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0}function Sc(e,t,r){var i=e;do{var a=i.prev,n=i.next.next;!nr(a,n)&&Ns(a,i,i.next,n)&&hi(a,n)&&hi(n,a)&&(t.push(a.i/r),t.push(i.i/r),t.push(n.i/r),ci(i),ci(i.next),i=e=n),i=i.next}while(i!==e);return i}function Mc(e,t,r,i,a,n){var o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&Rc(o,s)){var l=Rs(o,s);o=li(o,o.next),l=li(l,l.next),ui(o,t,r,i,a,n),ui(l,t,r,i,a,n);return}s=s.next}o=o.next}while(o!==e)}function Ec(e,t,r,i){var a=[],n,o,s,l,u;for(n=0,o=t.length;n<o;n++)s=t[n]*i,l=n<o-1?t[n+1]*i:e.length,u=Ps(e,s,l,i,!1),u===u.next&&(u.steiner=!0),a.push(Nc(u));for(a.sort(Ac),n=0;n<a.length;n++)Lc(a[n],r),r=li(r,r.next);return r}function Ac(e,t){return e.x-t.x}function Lc(e,t){if(t=Cc(e,t),t){var r=Rs(t,e);li(r,r.next)}}function Cc(e,t){var r=t,i=e.x,a=e.y,n=-1/0,o;do{if(a<=r.y&&a>=r.next.y&&r.next.y!==r.y){var s=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=i&&s>n){if(n=s,s===i){if(a===r.y)return r;if(a===r.next.y)return r.next}o=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!o)return null;if(i===n)return o.prev;var l=o,u=o.x,h=o.y,c=1/0,f;for(r=o.next;r!==l;)i>=r.x&&r.x>=u&&i!==r.x&&Xi(a<h?i:n,a,u,h,a<h?n:i,a,r.x,r.y)&&(f=Math.abs(a-r.y)/(i-r.x),(f<c||f===c&&r.x>o.x)&&hi(r,e)&&(o=r,c=f)),r=r.next;return o}function Dc(e,t,r,i){var a=e;do a.z===null&&(a.z=$a(a.x,a.y,t,r,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,Pc(a)}function Pc(e){var t,r,i,a,n,o,s,l,u=1;do{for(r=e,e=null,n=null,o=0;r;){for(o++,i=r,s=0,t=0;t<u&&(s++,i=i.nextZ,!!i);t++);for(l=u;s>0||l>0&&i;)s!==0&&(l===0||!i||r.z<=i.z)?(a=r,r=r.nextZ,s--):(a=i,i=i.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=i}n.nextZ=null,u*=2}while(o>1);return e}function $a(e,t,r,i,a){return e=32767*(e-r)/a,t=32767*(t-i)/a,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Nc(e){var t=e,r=e;do t.x<r.x&&(r=t),t=t.next;while(t!==e);return r}function Xi(e,t,r,i,a,n,o,s){return(a-o)*(t-s)-(e-o)*(n-s)>=0&&(e-o)*(i-s)-(r-o)*(t-s)>=0&&(r-o)*(n-s)-(a-o)*(i-s)>=0}function Rc(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Oc(e,t)&&hi(e,t)&&hi(t,e)&&Ic(e,t)}function qe(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function nr(e,t){return e.x===t.x&&e.y===t.y}function Ns(e,t,r,i){return nr(e,t)&&nr(r,i)||nr(e,i)&&nr(r,t)?!0:qe(e,t,r)>0!=qe(e,t,i)>0&&qe(r,i,e)>0!=qe(r,i,t)>0}function Oc(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&Ns(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function hi(e,t){return qe(e.prev,e,e.next)<0?qe(e,t,e.next)>=0&&qe(e,e.prev,t)>=0:qe(e,t,e.prev)<0||qe(e,e.next,t)<0}function Ic(e,t){var r=e,i=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do r.y>n!=r.next.y>n&&r.next.y!==r.y&&a<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function Rs(e,t){var r=new Qa(e.i,e.x,e.y),i=new Qa(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,r.next=a,a.prev=r,i.next=r,r.prev=i,n.next=i,i.prev=n,i}function xo(e,t,r,i){var a=new Qa(e,t,r);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function ci(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Qa(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ds.deviation=function(e,t,r,i){var a=t&&t.length,n=a?t[0]*r:e.length,o=Math.abs(Ja(e,0,n,r));if(a)for(var s=0,l=t.length;s<l;s++){var u=t[s]*r,h=s<l-1?t[s+1]*r:e.length;o-=Math.abs(Ja(e,u,h,r))}var c=0;for(s=0;s<i.length;s+=3){var f=i[s]*r,d=i[s+1]*r,p=i[s+2]*r;c+=Math.abs((e[f]-e[p])*(e[d+1]-e[f+1])-(e[f]-e[d])*(e[p+1]-e[f+1]))}return o===0&&c===0?0:Math.abs((c-o)/o)};function Ja(e,t,r,i){for(var a=0,n=t,o=r-i;n<r;n+=i)a+=(e[o]-e[n])*(e[n+1]+e[o+1]),o=n;return a}function Ia(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function Os(e,t,r,i,a){var n=r,o=e[t];Ia(e,t,i);for(var s=r;s<i;s++)a(e[s],o)<0&&(Ia(e,s,n),n++);return Ia(e,i,n),n}function ji(e,t,r,i){if(r<i){var a=Math.floor((r+i)/2),n=Os(e,a,r,i,t);ji(e,t,r,n-1),ji(e,t,n+1,i)}}function Nr(){this._parts=[]}Nr.prototype.step=function(e,t,r){var i=e.length;if(r===0){this._parts=[],this._sorted=!1;var a=Math.floor(i/2);this._parts.push({pivot:a,left:0,right:i-1}),this._currentSortPartIdx=0}if(!this._sorted){var n=this._parts;if(n.length===0)return this._sorted=!0,!0;if(n.length<512){for(var o=0;o<n.length;o++)n[o].pivot=Os(e,n[o].pivot,n[o].left,n[o].right,t);for(var s=[],o=0;o<n.length;o++){var l=n[o].left,u=n[o].pivot-1;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u});var l=n[o].pivot+1,u=n[o].right;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u})}n=this._parts=s}else for(var o=0;o<Math.floor(n.length/10);o++){var h=n.length-1-this._currentSortPartIdx;if(ji(e,t,n[h].left,n[h].right),this._currentSortPartIdx++,this._currentSortPartIdx===n.length)return this._sorted=!0,!0}return!1}};Nr.sort=ji;var Sr=Me.vec3,bo=Sr.create(),To=Sr.create(),wo=Sr.create();const mn={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var i=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var a=0,n,o=0;o<r.length;){i.get(r[o++],bo),i.get(r[o++],To),i.get(r[o++],wo);var s=Sr.sqrDist(bo,e),l=Sr.sqrDist(To,e),u=Sr.sqrDist(wo,e),h=Math.min(s,l);h=Math.min(h,u),o===3?(n=h,h=0):h=h-n,this._triangleZList[a++]=h}}for(var c=this._sortedTriangleIndices,o=0;o<c.length;o++)c[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var f=this._indicesTmp,d=this._triangleZListTmp,p=this._triangleZList,o=0;o<this.triangleCount;o++){var m=c[o]*3,g=o*3;f[g++]=r[m++],f[g++]=r[m++],f[g]=r[m],d[o]=p[c[o]]}var _=this._indicesTmp;this._indicesTmp=this.indices,this.indices=_;var _=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=_,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function i(a,n){return t[n]-t[a]}e?Array.prototype.sort.call(r,i):Nr.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Nr,this._quickSort.step(r,function(i,a){return t[a]-t[i]},e)}};function Bc(e){const t=e.getVisual("style");if(t){const r=e.getVisual("drawType");return t[r]}}function Fc(e){return e.getVisual("style").opacity}function Fe(e,t){const r=e.getItemVisual(t,"style");if(r){const i=e.getVisual("drawType");return r[i]}}function Be(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}var Is=1,Bs=2;function Pt(e,t,r){this._labelsMesh=new hn,this._labelTextureSurface=new Hi({width:512,height:512,devicePixelRatio:r.getDevicePixelRatio(),onupdate:function(){r.getZr().refresh()}}),this._api=r,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}Pt.prototype.getLabelPosition=function(e,t,r){return[0,0,0]};Pt.prototype.getLabelDistance=function(e,t,r){return 0};Pt.prototype.getMesh=function(){return this._labelsMesh};Pt.prototype.updateData=function(e,t,r){t==null&&(t=0),r==null&&(r=e.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==r-t)&&(this._labelsVisibilitiesBits=new Uint8Array(r-t));for(var i=["label","show"],a=["emphasis","label","show"],n=t;n<r;n++){var o=e.getItemModel(n),s=o.get(i),l=o.get(a);l==null&&(l=s);var u=(s?Is:0)|(l?Bs:0);this._labelsVisibilitiesBits[n-t]=u}this._start=t,this._end=r,this._data=e};Pt.prototype.updateLabels=function(e){if(this._data){e=e||[];for(var t=e.length>0,r={},i=0;i<e.length;i++)r[e[i]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var a=["label"],n=["emphasis","label"],o=this._data.hostModel,s=this._data,l=o.getModel(a),u=o.getModel(n,l),h={left:"right",right:"left",top:"center",bottom:"center"},c={left:"middle",right:"middle",top:"bottom",bottom:"top"},f=this._start;f<this._end;f++){var d=!1;t&&r[f]&&(d=!0);var p=this._labelsVisibilitiesBits[f-this._start]&(d?Bs:Is);if(p){var m=s.getItemModel(f),g=m.getModel(d?n:a,d?u:l),_=g.get("distance")||0,b=g.get("position"),x=this._api.getDevicePixelRatio(),v=o.getFormattedLabel(f,d?"emphasis":"normal");if(v==null||v==="")return;var w=new Fi({style:Vi(g,{text:v,fill:g.get("color")||Fe(s,f)||"#000",align:"left",verticalAlign:"top",opacity:re.firstNotNull(g.get("opacity"),Be(s,f),1)})}),S=w.getBoundingRect(),E=1.2;S.height*=E;var M=this._labelTextureSurface.add(w),L=h[b]||"center",I=c[b]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(f,b,_),[S.width*x,S.height*x],M,L,I,this.getLabelDistance(f,b,_)*x)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}};Pt.prototype.dispose=function(){this._labelTextureSurface.dispose()};var $e=Me.vec3;y.Shader.import(na);function Rr(e){this.rootNode=new y.Node,this._triangulationResults={},this._shadersMap=y.COMMON_SHADERS.filter(function(r){return r!=="shadow"}).reduce(function(r,i){return r[i]=y.createShader("ecgl."+i),r},{}),this._linesShader=y.createShader("ecgl.meshLines3D");var t={};y.COMMON_SHADERS.forEach(function(r){t[r]=new y.Material({shader:y.createShader("ecgl."+r)})}),this._groundMaterials=t,this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new Pt(512,512,e),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=e}Rr.prototype={constructor:Rr,extrudeY:!0,update:function(e,t,r,i,a){var n=e.getData();i==null&&(i=0),a==null&&(a=n.count()),this._startIndex=i,this._endIndex=a-1,this._triangulation(e,i,a);var o=this._getShader(e.get("shading"));this._prepareMesh(e,o,r,i,a),this.rootNode.updateWorldTransform(),this._updateRegionMesh(e,r,i,a);var s=e.coordinateSystem;s.type==="geo3D"&&this._updateGroundPlane(e,s,r);var l=this;this._labelsBuilder.updateData(n,i,a),this._labelsBuilder.getLabelPosition=function(u,h,c){var f=n.getName(u),_,d=c;if(s.type==="geo3D"){var p=s.getRegion(f);if(!p)return[NaN,NaN,NaN];_=p.getCenter();var m=s.dataToPoint([_[0],_[1],d]);return m}else var g=l._triangulationResults[u-l._startIndex],_=l.extrudeY?[(g.max[0]+g.min[0])/2,g.max[1]+d,(g.max[2]+g.min[2])/2]:[(g.max[0]+g.min[0])/2,(g.max[1]+g.min[1])/2,g.max[2]+d]},this._data=n,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(e),this._lastHoverDataIndex=0},_initMeshes:function(){var e=this;function t(){var a=new y.Mesh({name:"Polygon",material:new y.Material({shader:e._shadersMap.lambert}),geometry:new y.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0});return Object.assign(a.geometry,mn),a}var r=t(),i=new y.Mesh({material:new y.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new Xt({useNativeLine:!1})});this.rootNode.add(r),this.rootNode.add(i),r.material.define("both","VERTEX_COLOR"),r.material.define("fragment","DOUBLE_SIDED"),this._polygonMesh=r,this._linesMesh=i,this.rootNode.add(this._groundMesh)},_getShader:function(e){var t=this._shadersMap[e];return t||(t=this._shadersMap.lambert),t.__shading=e,t},_prepareMesh:function(e,t,r,i,a){for(var n=0,o=0,s=0,l=0,u=i;u<a;u++){var h=this._getRegionPolygonInfo(u),c=this._getRegionLinesInfo(u,e,this._linesMesh.geometry);n+=h.vertexCount,o+=h.triangleCount,s+=c.vertexCount,l+=c.triangleCount}var f=this._polygonMesh,d=f.geometry;["position","normal","texcoord0","color"].forEach(function(p){d.attributes[p].init(n)}),d.indices=n>65535?new Uint32Array(o*3):new Uint16Array(o*3),f.material.shader!==t&&f.material.attachShader(t,!0),y.setMaterialFromModel(t.__shading,f.material,e,r),s>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(s),this._linesMesh.geometry.setTriangleCount(l)),this._dataIndexOfVertex=new Uint32Array(n),this._vertexRangeOfDataIndex=new Uint32Array((a-i)*2)},_updateRegionMesh:function(e,t,r,i){for(var a=e.getData(),n=0,o=0,s=!1,S=this._polygonMesh,l=this._linesMesh,u=r;u<i;u++){var h=e.getRegionModel(u),c=h.getModel("itemStyle"),f=re.firstNotNull(Fe(a,u),c.get("color"),"#fff"),d=re.firstNotNull(Be(a,u),c.get("opacity"),1),p=y.parseColor(f),m=y.parseColor(c.get("borderColor"));p[3]*=d,m[3]*=d;var g=p[3]<.99;S.material.set("color",[1,1,1,1]),s=s||g;for(var _=re.firstNotNull(h.get("height",!0),e.get("regionHeight")),b=this._updatePolygonGeometry(e,S.geometry,u,_,n,o,p),x=n;x<b.vertexOffset;x++)this._dataIndexOfVertex[x]=u;this._vertexRangeOfDataIndex[(u-r)*2]=n,this._vertexRangeOfDataIndex[(u-r)*2+1]=b.vertexOffset,n=b.vertexOffset,o=b.triangleOffset;var v=c.get("borderWidth"),w=v>0;w&&(v*=t.getDevicePixelRatio(),this._updateLinesGeometry(l.geometry,e,u,_,v,e.coordinateSystem.transform)),l.invisible=!w,l.material.set({color:m})}var S=this._polygonMesh;S.material.transparent=s,S.material.depthMask=!s,S.geometry.updateBoundingBox(),S.frontFace=this.extrudeY?y.Mesh.CCW:y.Mesh.CW,S.material.get("normalMap")&&S.geometry.generateTangents(),S.seriesIndex=e.seriesIndex,S.on("mousemove",this._onmousemove,this),S.on("mouseout",this._onmouseout,this)},_updateDebugWireframe:function(e){var t=e.getModel("debug.wireframe");if(t.get("show")){var r=y.parseColor(t.get("lineStyle.color")||"rgba(0,0,0,0.5)"),i=re.firstNotNull(t.get("lineStyle.width"),1),a=this._polygonMesh;a.geometry.generateBarycentric(),a.material.define("both","WIREFRAME_TRIANGLE"),a.material.set("wireframeLineColor",r),a.material.set("wireframeLineWidth",i)}},_onmousemove:function(e){var t=this._dataIndexOfVertex[e.triangle[0]];t==null&&(t=-1),t!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(t),this._labelsBuilder.updateLabels([t])),this._lastHoverDataIndex=t,this._polygonMesh.dataIndex=t},_onmouseout:function(e){e.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(e,t,r){var i=e.getModel("groundPlane",e);if(this._groundMesh.invisible=!i.get("show",!0),!this._groundMesh.invisible){var a=e.get("shading"),n=this._groundMaterials[a];n||(n=this._groundMaterials.lambert),y.setMaterialFromModel(a,n,i,r),n.get("normalMap")&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=n,this._groundMesh.material.set("color",y.parseColor(i.get("color"))),this._groundMesh.scale.set(t.size[0],t.size[2],1)}},_triangulation:function(e,t,r){this._triangulationResults=[];for(var i=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0],n=e.coordinateSystem,o=t;o<r;o++){for(var s=[],l=e.getRegionPolygonCoords(o),u=0;u<l.length;u++){var h=l[u].exterior,c=l[u].interiors,f=[],d=[];if(!(h.length<3)){for(var p=0,m=0;m<h.length;m++){var g=h[m];f[p++]=g[0],f[p++]=g[1]}for(var m=0;m<c.length;m++)if(!(c[m].length<3)){for(var _=f.length/2,b=0;b<c[m].length;b++){var g=c[m][b];f.push(g[0]),f.push(g[1])}d.push(_)}for(var x=Ds(f,d),v=new Float64Array(f.length/2*3),w=[],S=[1/0,1/0,1/0],E=[-1/0,-1/0,-1/0],M=0,m=0;m<f.length;)$e.set(w,f[m++],0,f[m++]),n&&n.transform&&$e.transformMat4(w,w,n.transform),$e.min(S,S,w),$e.max(E,E,w),v[M++]=w[0],v[M++]=w[1],v[M++]=w[2];$e.min(i,i,S),$e.max(a,a,E),s.push({points:v,indices:x,min:S,max:E})}}this._triangulationResults.push(s)}this._geoBoundingBox=[i,a]},_getRegionPolygonInfo:function(e){for(var t=this._triangulationResults[e-this._startIndex],r=0,i=0,a=0;a<t.length;a++)r+=t[a].points.length/3,i+=t[a].indices.length/3;var n=r*2+r*4,o=i*2+r*2;return{vertexCount:n,triangleCount:o}},_updatePolygonGeometry:function(e,t,r,i,a,n,o){var s=e.get("projectUVOnGround"),l=t.attributes.position,u=t.attributes.normal,h=t.attributes.texcoord0,c=t.attributes.color,f=this._triangulationResults[r-this._startIndex],d=c.value&&o,p=t.indices,m=this.extrudeY?1:2,g=this.extrudeY?2:1,_=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],b=$e.mul([],this._geoBoundingBox[0],_),x=$e.mul([],this._geoBoundingBox[1],_),v=Math.max(x[0]-b[0],x[2]-b[2]);function w(de,ze,rt){for(var Re=de.points,Hr=Re.length,Le=[],mt=[],Xe=0;Xe<Hr;Xe+=3)Le[0]=Re[Xe],Le[m]=ze,Le[g]=Re[Xe+2],mt[0]=(Re[Xe]*_[0]-b[0])/v,mt[1]=(Re[Xe+2]*_[g]-b[2])/v,l.set(a,Le),d&&c.set(a,o),h.set(a++,mt)}function S(de,ze,rt){var Re=a;w(de,ze);for(var Hr=de.indices.length,Le=0;Le<Hr;Le++)p[n*3+Le]=de.indices[Le]+Re;n+=de.indices.length/3}for(var E=this.extrudeY?[0,1,0]:[0,0,1],M=$e.negate([],E),L=0;L<f.length;L++){var I=a,C=f[L];S(C,0),S(C,i);for(var F=C.points.length/3,U=0;U<F;U++)u.set(I+U,M),u.set(I+U+F,E);for(var O=[0,3,1,1,3,2],H=[[],[],[],[]],q=[],Z=[],N=[],B=[],Y=0,U=0;U<F;U++){for(var j=(U+1)%F,te=(C.points[j*3]-C.points[U*3])*_[0],Q=(C.points[j*3+2]-C.points[U*3+2])*_[g],ve=Math.sqrt(te*te+Q*Q),ee=0;ee<4;ee++){var Ee=ee===0||ee===3,tt=(Ee?U:j)*3;H[ee][0]=C.points[tt],H[ee][m]=ee>1?i:0,H[ee][g]=C.points[tt+2],l.set(a+ee,H[ee]),s?(B[0]=(C.points[tt]*_[0]-b[0])/v,B[1]=(C.points[tt+2]*_[g]-b[g])/v):(B[0]=(Ee?Y:Y+ve)/v,B[1]=(H[ee][m]*_[m]-b[m])/v),h.set(a+ee,B)}$e.sub(q,H[1],H[0]),$e.sub(Z,H[3],H[0]),$e.cross(N,q,Z),$e.normalize(N,N);for(var ee=0;ee<4;ee++)u.set(a+ee,N),d&&c.set(a+ee,o);for(var ee=0;ee<6;ee++)p[n*3+ee]=O[ee]+a;a+=4,n+=2,Y+=ve}}return t.dirty(),{vertexOffset:a,triangleOffset:n}},_getRegionLinesInfo:function(e,t,r){var i=0,a=0,n=t.getRegionModel(e),o=n.getModel("itemStyle"),s=o.get("borderWidth");if(s>0){var l=t.getRegionPolygonCoords(e);l.forEach(function(u){var h=u.exterior,c=u.interiors;i+=r.getPolylineVertexCount(h),a+=r.getPolylineTriangleCount(h);for(var f=0;f<c.length;f++)i+=r.getPolylineVertexCount(c[f]),a+=r.getPolylineTriangleCount(c[f])},this)}return{vertexCount:i,triangleCount:a}},_updateLinesGeometry:function(e,t,r,i,a,n){function o(u){for(var h=new Float64Array(u.length*3),c=0,f=[],d=0;d<u.length;d++)f[0]=u[d][0],f[1]=i+.1,f[2]=u[d][1],n&&$e.transformMat4(f,f,n),h[c++]=f[0],h[c++]=f[1],h[c++]=f[2];return h}var s=[1,1,1,1],l=t.getRegionPolygonCoords(r);l.forEach(function(u){var h=u.exterior,c=u.interiors;e.addPolyline(o(h),s,a);for(var f=0;f<c.length;f++)e.addPolyline(o(c[f]),s,a)})},highlight:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=r.getModel(["emphasis","itemStyle"]),a=i.get("color"),n=re.firstNotNull(i.get("opacity"),Be(t,e),1);if(a==null){var o=Fe(t,e);a=rn(o,-.4)}n==null&&(n=Be(t,e));var s=y.parseColor(a);s[3]*=n,this._setColorOfDataIndex(t,e,s)}},downplay:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=re.firstNotNull(Fe(t,e),r.get(["itemStyle","color"]),"#fff"),a=re.firstNotNull(Be(t,e),r.get(["itemStyle","opacity"]),1),n=y.parseColor(i);n[3]*=a,this._setColorOfDataIndex(t,e,n)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(e,t,r){if(!(t<this._startIndex&&t>this._endIndex)){t-=this._startIndex;for(var i=this._vertexRangeOfDataIndex[t*2];i<this._vertexRangeOfDataIndex[t*2+1];i++)this._polygonMesh.geometry.attributes.color.set(i,r);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};const Vc=pi.extend({type:"geo3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Rr(t),this.groupGL=new y.Node,this._lightRoot=new y.Node,this._sceneHelper=new Ht(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new _i({zr:t.getZr()}),this._control.init()},render:function(e,t,r){this.groupGL.add(this._geo3DBuilder.rootNode);var i=e.coordinateSystem;if(!(!i||!i.viewGL)){i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var a=this._control;a.setViewGL(i.viewGL);var n=e.getModel("viewControl");a.setFromViewControlModel(n,0),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")}),a.off("update"),a.on("update",function(){r.dispatchAction({type:"geo3DChangeCamera",alpha:a.getAlpha(),beta:a.getBeta(),distance:a.getDistance(),center:a.getCenter(),from:this.uid,geo3DId:e.id})}),a.update()}},afterRender:function(e,t,r,i){var a=i.renderer;this._sceneHelper.updateAmbientCubemap(a,e,r),this._sceneHelper.updateSkybox(a,e,r)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}});var zc={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]};function Gc(e,t){if(e==="world"){var r=zc[t.name];if(r){var i=[r[0],r[1]];t.setCenter(i)}}}var Uc=Me.vec3,wr=Me.mat4,Hc=[ml,Gc];function qi(e,t,r,i,a){this.name=e,this.map=t,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(r,i,a),this.transform=wr.identity(new Float64Array(16)),this.invTransform=wr.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}qi.prototype={constructor:qi,type:"geo3D",dimensions:["lng","lat","alt"],containPoint:function(){},loadGeoJson:function(e,t,r){var i=wn||wn;try{this.regions=e?i(e):[]}catch(u){throw`Invalid geoJson format
`+u}t=t||{},r=r||{};for(var a=this.regions,n={},o=0;o<a.length;o++){var s=a[o].name;s=r[s]||s,a[o].name=s,n[s]=a[o],this.addGeoCoord(s,a[o].getCenter());var l=t[s];l&&a[o].transformTo(l.left,l.top,l.width,l.height)}this._regionsMap=n,this._geoRect=null,Hc.forEach(function(u){u(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var e,t=this.regions,r=0;r<t.length;r++){var i=t[r].getBoundingRect();e=e||i.clone(),e.union(i)}return this._geoRect=e||new pl(0,0,0,0)},addGeoCoord:function(e,t){this._nameCoordMap[e]=t},getRegion:function(e){return this._regionsMap[e]},getRegionByCoord:function(e){for(var t=this.regions,r=0;r<t.length;r++)if(t[r].contain(e))return t[r]},setSize:function(e,t,r){this.size=[e,t,r];var i=this.getGeoBoundingRect(),a=e/i.width,n=-r/i.height,o=-e/2-i.x*a,s=r/2-i.y*n,l=this.extrudeY?[o,0,s]:[o,s,0],u=this.extrudeY?[a,1,n]:[a,n,1],h=this.transform;wr.identity(h),wr.translate(h,h,l),wr.scale(h,h,u),wr.invert(this.invTransform,h)},dataToPoint:function(e,t){t=t||[];var r=this.extrudeY?1:2,i=this.extrudeY?2:1,a=e[2];return isNaN(a)&&(a=0),t[0]=e[0],t[i]=e[1],this.altitudeAxis?t[r]=this.altitudeAxis.dataToCoord(a):t[r]=0,t[r]+=this.regionHeight,Uc.transformMat4(t,t,this.transform),t},pointToData:function(e,t){}};function kc(e,t){var r=e.getBoxLayoutParams(),i=Qi(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var a=this.getGeoBoundingRect(),n=a.width/a.height*(e.get("aspectScale")||.75),o=e.get("boxWidth"),s=e.get("boxDepth"),l=e.get("boxHeight");l==null&&(l=5),isNaN(o)&&isNaN(s)&&(o=100),isNaN(s)?s=o/n:isNaN(o)&&(o=s/n),this.setSize(o,l,s),this.regionHeight=e.get("regionHeight"),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(l-this.regionHeight,0))}function Wc(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(a){if(a.coordinateSystem===this&&a.type!=="series.map3D"){var n=a.getData(),o=a.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=n.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=nn(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new $i("altitude",i),this.resize(this.model,t)}}var So=0,gn={dimensions:qi.prototype.dimensions,create:function(e,t){var r=[];if(!Ha)throw new Error("geo3D component depends on geo component");function i(a,n){var o=gn.createGeo3D(a);a.__viewGL=a.__viewGL||new ce,o.viewGL=a.__viewGL,a.coordinateSystem=o,o.model=a,r.push(o),o.resize=kc,o.resize(a,t),o.update=Wc}return e.eachComponent("geo3D",function(a,n){i(a)}),e.eachSeriesByType("map3D",function(a,n){var o=a.get("coordinateSystem");o==null&&(o="geo3D"),o==="geo3D"&&i(a)}),e.eachSeries(function(a){if(a.get("coordinateSystem")==="geo3D"){if(a.type==="series.map3D")return;var n=a.getReferringComponents("geo3D").models[0];if(n||(n=e.getComponent("geo3D")),!n)throw new Error('geo "'+re.firstNotNull(a.get("geo3DIndex"),a.get("geo3DId"),0)+'" not found');a.coordinateSystem=n.coordinateSystem}}),r},createGeo3D:function(e){var t=e.get("map"),r;return typeof t=="string"?(r=t,t=Ha(t)):t&&t.features&&(t={geoJson:t}),r==null&&(r="GEO_ANONYMOUS_"+So++),new qi(r+So++,r,t&&t.geoJson,t&&t.specialAreas,e.get("nameMap"))}};function Fs(e){e.registerComponentModel(Gr),e.registerComponentView(Vc),e.registerAction({type:"geo3DChangeCamera",event:"geo3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"geo3D",query:t},function(i){i.setView(t)})}),e.registerCoordinateSystem("geo3D",gn)}He(Fs);function Mo(e,t){e.id=e.id||e.name||t+""}var lr=Ir.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){lr.superApply(this,"init",arguments),wt(this.option.layers,function(e,t){he(e,this.defaultLayerOption),Mo(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,lr.superApply(this,"mergeOption",arguments);function r(o){return wl(o,function(s,l,u){return Mo(l,u),s[l.id]=l,s},{})}if(t&&t.length){var i=r(e.layers),a=r(t);for(var n in i)a[n]?he(a[n],i[n],!0):t.push(e.layers[n]);this.option.layers=t}wt(this.option.layers,function(o){he(o,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});he(lr.prototype,ra);he(lr.prototype,Br);he(lr.prototype,Fr);he(lr.prototype,zr);var Vs=Math.PI,lt=Math.sin,Lt=Math.cos,zs=Math.tan,Gs=Math.asin,Us=Math.atan2,ur=Vs/180,Xc=1e3*60*60*24,jc=2440588,qc=2451545;function Zc(e){return e.valueOf()/Xc-.5+jc}function Yc(e){return Zc(e)-qc}var Zi=ur*23.4397;function Kc(e,t){return Us(lt(e)*Lt(Zi)-zs(t)*lt(Zi),Lt(e))}function $c(e,t){return Gs(lt(t)*Lt(Zi)+Lt(t)*lt(Zi)*lt(e))}function Qc(e,t,r){return Us(lt(e),Lt(e)*lt(t)-zs(r)*Lt(t))}function Jc(e,t,r){return Gs(lt(t)*lt(r)+Lt(t)*Lt(r)*Lt(e))}function ed(e,t){return ur*(280.16+360.9856235*e)-t}function td(e){return ur*(357.5291+.98560028*e)}function rd(e){var t=ur*(1.9148*lt(e)+.02*lt(2*e)+3e-4*lt(3*e)),r=ur*102.9372;return e+t+r+Vs}function id(e){var t=td(e),r=rd(t);return{dec:$c(r,0),ra:Kc(r,0)}}var Hs={};Hs.getPosition=function(e,t,r){var i=ur*-r,a=ur*t,n=Yc(e),o=id(n),s=ed(n,i)-o.ra;return{azimuth:Qc(s,a,o.dec),altitude:Jc(s,a,o.dec)}};const ad=`@export ecgl.atmosphere.vertex
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
@end`;y.Shader.import(ss);y.Shader.import(ad);const nd=pi.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new y.Node,this._sphereGeometry=new y.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new y.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new y.PlaneGeometry,this._earthMesh=new y.Mesh({renderNormal:!0}),this._atmosphereMesh=new y.Mesh,this._atmosphereGeometry=new y.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new y.Material({shader:new y.Shader(y.Shader.source("ecgl.atmosphere.vertex"),y.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=y.Mesh.CW,this._lightRoot=new y.Node,this._sceneHelper=new Ht,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new _i({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,r){var i=e.coordinateSystem,a=e.get("shading");i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL),this._sceneHelper.setScene(i.viewGL.scene),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var n=this._earthMesh;n.geometry=this._sphereGeometry;var o="ecgl."+a;(!n.material||n.material.shader.name!==o)&&(n.material=y.createMaterial(o)),y.setMaterialFromModel(a,n.material,e,r),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(c){var f=n.material.get(c);f&&(f.flipY=!1)}),n.material.set("color",y.parseColor(e.get("baseColor")));var s=i.radius*.99;if(n.scale.set(s,s,s),e.get("atmosphere.show")){n.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),n.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var l=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(s+l,s+l,s+l)}else n.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var u=n.material.setTextureImage("diffuseMap",e.get("baseTexture"),r,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(n);var h=n.material.setTextureImage("bumpMap",e.get("heightTexture"),r,{flipY:!1,anisotropic:8});h&&h.surface&&h.surface.attachToMesh(n),n.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,r),this._displaceVertices(e,r),this._updateViewControl(e,r),this._updateLayers(e,r)},afterRender:function(e,t,r,i){var a=i.renderer;this._sceneHelper.updateAmbientCubemap(a,e,r),this._sceneHelper.updateSkybox(a,e,r)},_updateLayers:function(e,t){var r=e.coordinateSystem,i=e.get("layers"),a=r.radius,n=[],o=[],s=[],l=[];wt(i,function(d){var p=new Mr(d),m=p.get("type"),g=y.loadTexture(p.get("texture"),t,{flipY:!1,anisotropic:8});if(g.surface&&g.surface.attachToMesh(this._earthMesh),m==="blend"){var _=p.get("blendTo"),b=re.firstNotNull(p.get("intensity"),1);_==="emission"?(s.push(g),l.push(b)):(n.push(g),o.push(b))}else{var x=p.get("id"),v=this._layerMeshes[x];v||(v=this._layerMeshes[x]=new y.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var w=p.get("shading");w==="lambert"?(v.material=v.__lambertMaterial||new y.Material({autoUpdateTextureStatus:!1,shader:y.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),v.__lambertMaterial=v.material):(v.material=v.__colorMaterial||new y.Material({autoUpdateTextureStatus:!1,shader:y.createShader("ecgl.color"),transparent:!0,depthMask:!1}),v.__colorMaterial=v.material),v.material.enableTexture("diffuseMap");var S=p.get("distance"),E=a+(S??r.radius/100);v.scale.set(E,E,E),a=E;var M=this._blankTexture||(this._blankTexture=y.createBlankTexture("rgba(255, 255, 255, 0)"));v.material.set("diffuseMap",M),y.loadTexture(p.get("texture"),t,{flipY:!1,anisotropic:8},function(L){L.surface&&L.surface.attachToMesh(v),v.material.set("diffuseMap",L),t.getZr().refresh()}),p.get("show")?this.groupGL.add(v):this.groupGL.remove(v)}},this);var u=this._earthMesh.material;u.define("fragment","LAYER_DIFFUSEMAP_COUNT",n.length),u.define("fragment","LAYER_EMISSIVEMAP_COUNT",s.length),u.set("layerDiffuseMap",n),u.set("layerDiffuseIntensity",o),u.set("layerEmissiveMap",s),u.set("layerEmissionIntensity",l);var h=e.getModel("debug.wireframe");if(h.get("show")){u.define("both","WIREFRAME_TRIANGLE");var c=y.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)"),f=re.firstNotNull(h.get("lineStyle.width"),1);u.set("wireframeLineWidth",f),u.set("wireframeLineColor",c)}else u.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var r=e.coordinateSystem,i=e.getModel("viewControl");r.viewGL.camera;var a=this;function n(){return{type:"globeChangeCamera",alpha:o.getAlpha(),beta:o.getBeta(),distance:o.getDistance()-r.radius,center:o.getCenter(),from:a.uid,globeId:e.id}}var o=this._control;o.setViewGL(r.viewGL);var s=i.get("targetCoord"),l,u;s!=null&&(u=s[0]+90,l=s[1]),o.setFromViewControlModel(i,{baseDistance:r.radius,alpha:l,beta:u}),o.off("update"),o.on("update",function(){t.dispatchAction(n())})},_displaceVertices:function(e,t){var r=e.get("displacementQuality"),i=e.get("debug.wireframe.show"),a=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&r===this._displacementQuality&&i===this._showDebugWireframe)){this._displacementQuality=r,this._showDebugWireframe=i;var n=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[r]||200,s=o/2;(n.widthSegments!==o||i)&&(n.widthSegments=o,n.heightSegments=s,n.build()),this._doDisplaceVertices(n,a),i&&n.generateBarycentric()}},_doDisplaceVertices:function(e,t){var r=e.attributes.position.value,i=e.attributes.texcoord0.value,a=e.__originalPosition;(!a||a.length!==r.length)&&(a=new Float32Array(r.length),a.set(r),e.__originalPosition=a);for(var n=t.displacementWidth,o=t.displacementHeight,s=t.displacementData,l=0;l<e.vertexCount;l++){var u=l*3,h=l*2,c=a[u+1],f=a[u+2],d=a[u+3],p=i[h++],m=i[h++],g=Math.round(p*(n-1)),_=Math.round(m*(o-1)),b=_*n+g,x=s?s[b]:0;r[u+1]=c+c*x,r[u+2]=f+f*x,r[u+3]=d+d*x}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var r=this._earthMesh;this._sceneHelper.updateLight(e);var i=this._sceneHelper.mainLight,a=e.get("light.main.time")||new Date,n=Hs.getPosition(gl(a),0,0),o=Math.cos(n.altitude);i.position.y=-o*Math.cos(n.azimuth),i.position.x=Math.sin(n.altitude),i.position.z=o*Math.sin(n.azimuth),i.lookAt(r.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}});var od=Me.vec3;function Yi(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}Yi.prototype={constructor:Yi,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},_getDisplacementScale:function(e,t){var r=(e+180)/360*(this.displacementWidth-1),i=(90-t)/180*(this.displacementHeight-1),a=Math.round(r)+Math.round(i)*this.displacementWidth;return this.displacementData[a]},dataToPoint:function(e,t){var r=e[0],i=e[1],a=e[2]||0,n=this.radius;this.displacementData&&(n*=1+this._getDisplacementScale(r,i)),this.altitudeAxis&&(n+=this.altitudeAxis.dataToCoord(a)),r=r*Math.PI/180,i=i*Math.PI/180;var o=Math.cos(i)*n;return t=t||[],t[0]=-o*Math.cos(r+Math.PI),t[1]=Math.sin(i)*n,t[2]=o*Math.sin(r+Math.PI),t},pointToData:function(e,t){var r=e[0],i=e[1],a=e[2],n=od.len(e);r/=n,i/=n,a/=n;var o=Math.asin(i),s=Math.atan2(a,-r);s<0&&(s=Math.PI*2+s);var l=o*180/Math.PI,u=s*180/Math.PI-180;return t=t||[],t[0]=u,t[1]=l,t[2]=n-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function sd(e,t){var r=document.createElement("canvas"),i=r.getContext("2d"),a=e.width,n=e.height;r.width=a,r.height=n,i.drawImage(e,0,0,a,n);for(var o=i.getImageData(0,0,a,n).data,s=new Float32Array(o.length/4),l=0;l<o.length/4;l++){var u=o[l*4];s[l]=u/255*t}return{data:s,width:a,height:n}}function ld(e,t){var r=e.getBoxLayoutParams(),i=Qi(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var a=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,a-this.radius)}function ud(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(a){if(a.coordinateSystem===this){var n=a.getData(),o=a.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=n.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=nn(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new $i("altitude",i),this.resize(this.model,t)}}var hd={dimensions:Yi.prototype.dimensions,create:function(e,t){var r=[];return e.eachComponent("globe",function(i){i.__viewGL=i.__viewGL||new ce;var a=new Yi;a.viewGL=i.__viewGL,i.coordinateSystem=a,a.model=i,r.push(a),a.resize=ld,a.resize(i,t),a.update=ud}),e.eachSeries(function(i){if(i.get("coordinateSystem")==="globe"){var a=i.getReferringComponents("globe").models[0];if(a||(a=e.getComponent("globe")),!a)throw new Error('globe "'+re.firstNotNull(i.get("globe3DIndex"),i.get("globe3DId"),0)+'" not found');var n=a.coordinateSystem;i.coordinateSystem=n}}),e.eachComponent("globe",function(i,a){var n=i.coordinateSystem,o=i.getDisplacementTexture(),s=i.getDisplacemenScale();if(i.isDisplacementChanged()){if(i.hasDisplacement()){var l=!0;y.loadTexture(o,t,function(u){var h=u.image,c=sd(h,s);i.setDisplacementData(c.data,c.width,c.height),l||t.dispatchAction({type:"globeUpdateDisplacment"})}),l=!1}else n.setDisplacementData(null,0,0);n.setDisplacementData(i.displacementData,i.displacementWidth,i.displacementHeight)}}),r}};function cd(e){e.registerComponentModel(lr),e.registerComponentView(nd),e.registerCoordinateSystem("globe",hd),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"globe",query:t},function(i){i.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,r){})}He(cd);var Eo=["zoom","center","pitch","bearing"],_n=Ir.extend({type:"mapbox3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,style:"mapbox://styles/mapbox/light-v9",center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMapboxCameraOption:function(){var e=this;return Eo.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMapboxCameraOption:function(e){e!=null&&Eo.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(e){this._mapbox=e}});he(_n.prototype,Br);he(_n.prototype,Fr);function jt(e,t){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!mapboxgl)throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}jt.prototype.setUnpainted=function(){};jt.prototype.resize=function(){this._mapbox.resize()};jt.prototype.getMapbox=function(){return this._mapbox};jt.prototype.clear=function(){};jt.prototype.refresh=function(){this._mapbox.resize()};var ks=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","wheel","touchstart","touchend","touchmove","touchcancel"];jt.prototype._initEvents=function(){var e=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},ks.forEach(function(t){this._handlers[t]=function(r){var i={};for(var a in r)i[a]=r[a];i.bubbles=!1;var n=new r.constructor(r.type,i);e.dispatchEvent(n)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};jt.prototype.dispose=function(){ks.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this)};const Ws=`
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

@end`;y.Shader.import(Ws);const dd=pi.extend({type:"mapbox3D",__ecgl__:!0,init:function(e,t){var r=t.getZr();this._zrLayer=new jt("mapbox3D",r),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new y.Node,this._sceneHelper=new Ht(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMapbox(),a=this._dispatchInteractAction.bind(this,t,i);["zoom","rotate","drag","pitch","rotate","move"].forEach(function(n){i.on(n,a)}),this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.displayShadow.vertex"),fragment:y.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(e,t,r){var i=this._zrLayer.getMapbox(),a=e.get("style"),n=JSON.stringify(a);n!==this._oldStyleStr&&a&&i.setStyle(a),this._oldStyleStr=n,i.setCenter(e.get("center")),i.setZoom(e.get("zoom")),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMapbox(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._mapbox3DModel=e},afterRender:function(e,t,r,i){var a=i.renderer;this._sceneHelper.updateAmbientCubemap(a,e,r),this._sceneHelper.updateSkybox(a,e,r),e.coordinateSystem.viewGL.scene.traverse(function(n){n.material&&(n.material.define("fragment","NORMAL_UP_AXIS",2),n.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"mapbox3DChangeCamera",pitch:t.getPitch(),zoom:t.getZoom(),center:t.getCenter().toArray(),bearing:t.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var e=this._mapbox3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new y.Plane(new y.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new y.Vector2(-1,-1)),a=e.viewGL.camera.castRay(new y.Vector2(1,1)),n=i.intersectPlane(r),o=a.intersectPlane(r),s=n.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}});var Ft=Me.mat4,Kr=512,Ba=.6435011087932844,Qe=Math.PI,xr=1/10;function Or(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight="auto",this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}Or.prototype={constructor:Or,dimensions:["lng","lat","alt"],containPoint:function(){},setCameraOption:function(e){this.bearing=e.bearing,this.pitch=e.pitch,this.center=e.center,this.zoom=e.zoom,this._origin||(this._origin=this.projectOnTileWithScale(this.center,Kr)),this._initialZoom==null&&(this._initialZoom=this.zoom),this.updateTransform()},updateTransform:function(){if(this.height){var e=.5/Math.tan(Ba/2)*this.height*xr,t=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,r=Ba/2,i=Math.PI/2+t,a=Math.sin(r)*e/Math.sin(Math.PI-i-r),n=Math.cos(Math.PI/2-t)*a+e,o=n*1.1;this.pitch>50&&(o=1e3);var s=[];Ft.perspective(s,Ba,this.width/this.height,1,o),this.viewGL.camera.projectionMatrix.setArray(s),this.viewGL.camera.decomposeProjectionMatrix();var s=Ft.identity([]),l=this.dataToPoint(this.center);Ft.scale(s,s,[1,-1,1]),Ft.translate(s,s,[0,0,-e]),Ft.rotateX(s,s,t),Ft.rotateZ(s,s,-this.bearing/180*Math.PI),Ft.translate(s,s,[-l[0]*this.getScale()*xr,-l[1]*this.getScale()*xr,0]),this.viewGL.camera.viewMatrix.array=s;var u=[];Ft.invert(u,s),this.viewGL.camera.worldTransform.array=u,this.viewGL.camera.decomposeWorldTransform();var h=Kr*this.getScale(),c;if(this.altitudeExtent&&!isNaN(this.boxHeight)){var f=this.altitudeExtent[1]-this.altitudeExtent[0];c=this.boxHeight/f*this.getScale()/Math.pow(2,this._initialZoom-this.zoomOffset)}else c=h/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*xr;this.viewGL.rootNode.scale.set(this.getScale()*xr,this.getScale()*xr,c)}},getScale:function(){return Math.pow(2,this.zoom-this.zoomOffset)},projectOnTile:function(e,t){return this.projectOnTileWithScale(e,this.getScale()*Kr,t)},projectOnTileWithScale:function(e,t,r){var i=e[0],a=e[1],n=i*Qe/180,o=a*Qe/180,s=t*(n+Qe)/(2*Qe),l=t*(Qe-Math.log(Math.tan(Qe/4+o*.5)))/(2*Qe);return r=r||[],r[0]=s,r[1]=l,r},unprojectFromTile:function(e,t){return this.unprojectOnTileWithScale(e,this.getScale()*Kr,t)},unprojectOnTileWithScale:function(e,t,r){var i=e[0],a=e[1],n=i/t*(2*Qe)-Qe,o=2*(Math.atan(Math.exp(Qe-a/t*(2*Qe)))-Qe/4);return r=r||[],r[0]=n*180/Qe,r[1]=o*180/Qe,r},dataToPoint:function(e,t){return t=this.projectOnTileWithScale(e,Kr,t),t[0]-=this._origin[0],t[1]-=this._origin[1],t[2]=isNaN(e[2])?0:e[2],isNaN(e[2])||(t[2]=e[2],this.altitudeExtent&&(t[2]-=this.altitudeExtent[0])),t}};function di(){Or.apply(this,arguments)}di.prototype=new Or;di.prototype.constructor=di;di.prototype.type="mapbox3D";function Xs(e,t,r){function i(n,o){var s=o.getWidth(),l=o.getHeight(),u=o.getDevicePixelRatio();this.viewGL.setViewport(0,0,s,l,u),this.width=s,this.height=l,this.altitudeScale=n.get("altitudeScale"),this.boxHeight=n.get("boxHeight")}function a(n,o){if(this.model.get("boxHeight")!=="auto"){var s=[1/0,-1/0];n.eachSeries(function(l){if(l.coordinateSystem===this){var u=l.getData(),h=l.coordDimToDataDim("alt")[0];if(h){var c=u.getDataExtent(h,!0);s[0]=Math.min(s[0],c[0]),s[1]=Math.max(s[1],c[1])}}},this),s&&isFinite(s[1]-s[0])&&(this.altitudeExtent=s)}}return{dimensions:t.prototype.dimensions,create:function(n,o){var s=[];return n.eachComponent(e,function(l){var u=l.__viewGL;u||(u=l.__viewGL=new ce,u.setRootNode(new y.Node));var h=new t;h.viewGL=l.__viewGL,h.resize=i,h.resize(l,o),s.push(h),l.coordinateSystem=h,h.model=l,h.update=a}),n.eachSeries(function(l){if(l.get("coordinateSystem")===e){var u=l.getReferringComponents(e).models[0];if(u||(u=n.getComponent(e)),!u)throw new Error(e+' "'+re.firstNotNull(l.get(e+"Index"),l.get(e+"Id"),0)+'" not found');l.coordinateSystem=u.coordinateSystem}}),r&&r(s,n,o),s}}}var fd=Xs("mapbox3D",di,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMapboxCameraOption())})});function pd(e){e.registerComponentModel(_n),e.registerComponentView(dd),e.registerCoordinateSystem("mapbox3D",fd),e.registerAction({type:"mapbox3DChangeCamera",event:"mapbox3dcamerachanged",update:"mapbox3D:updateCamera"},function(t,r){r.eachComponent({mainType:"mapbox3D",query:t},function(i){i.setMapboxCameraOption(t)})})}He(pd);var Ao=["zoom","center","pitch","bearing"],vn=Ir.extend({type:"maptalks3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMaptalksCameraOption:function(){var e=this;return Ao.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMaptalksCameraOption:function(e){e!=null&&Ao.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(e){this._maptalks=e}});he(vn.prototype,Br);he(vn.prototype,Fr);function qt(e,t,r,i){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!maptalks)throw new Error("Maptalks library must be included. See https://maptalks.org");this._maptalks=new maptalks.Map(this.dom,{center:r,zoom:i,doubleClickZoom:!1,fog:!1}),this._initEvents()}qt.prototype.setUnpainted=function(){};qt.prototype.resize=function(){this._maptalks.checkSize()};qt.prototype.getMaptalks=function(){return this._maptalks};qt.prototype.clear=function(){};qt.prototype.refresh=function(){this._maptalks.checkSize()};var js=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","touchcancel"];qt.prototype._initEvents=function(){var e=this.dom;this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},js.forEach(function(t){this._handlers[t]=function(r){var i={};for(var a in r)i[a]=r[a];i.bubbles=!1;var n=new r.constructor(r.type,i);t==="mousewheel"||t==="DOMMouseScroll"?e.dispatchEvent(n):e.firstElementChild.dispatchEvent(n)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};qt.prototype.dispose=function(){js.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this),this._maptalks.remove()};y.Shader.import(Ws);const md=pi.extend({type:"maptalks3D",__ecgl__:!0,init:function(e,t){this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.displayShadow.vertex"),fragment:y.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(e,t){var r=t.getZr();this._zrLayer=new qt("maptalks3D",r,e.get("center"),e.get("zoom")),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new y.Node,this._sceneHelper=new Ht(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMaptalks(),a=this._dispatchInteractAction.bind(this,t,i);["zoomend","zooming","zoomstart","dragrotating","pitch","pitchend","movestart","moving","moveend","resize","touchstart","touchmove","touchend","animating"].forEach(function(n){i.on(n,a)})},render:function(e,t,r){this._zrLayer||this._initMaptalksLayer(e,r);var i=this._zrLayer.getMaptalks(),a=e.get("urlTemplate"),n=i.getBaseLayer();a!==this._oldUrlTemplate&&(n?n.setOptions({urlTemplate:a,attribution:e.get("attribution")}):(n=new maptalks.TileLayer("maptalks-echarts-gl-baselayer",{urlTemplate:a,subdomains:["a","b","c"],attribution:e.get("attribution")}),i.setBaseLayer(n))),this._oldUrlTemplate=a,i.setCenter(e.get("center")),i.setZoom(e.get("zoom"),{animation:!1}),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMaptalks(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._maptalks3DModel=e},afterRender:function(e,t,r,i){var a=i.renderer;this._sceneHelper.updateAmbientCubemap(a,e,r),this._sceneHelper.updateSkybox(a,e,r),e.coordinateSystem.viewGL.scene.traverse(function(n){n.material&&(n.material.define("fragment","NORMAL_UP_AXIS",2),n.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"maptalks3DChangeCamera",pitch:t.getPitch(),zoom:_d(t.getResolution())+1,center:t.getCenter().toArray(),bearing:t.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var e=this._maptalks3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new y.Plane(new y.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new y.Vector2(-1,-1)),a=e.viewGL.camera.castRay(new y.Vector2(1,1)),n=i.intersectPlane(r),o=a.intersectPlane(r),s=n.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}}),gd=2*6378137*Math.PI/(256*Math.pow(2,20));function _d(e){return 19-Math.log(e/gd)/Math.LN2}function fi(){Or.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}fi.prototype=new Or;fi.prototype.constructor=fi;fi.prototype.type="maptalks3D";var vd=Xs("maptalks3D",fi,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMaptalksCameraOption())})});function yd(e){e.registerComponentModel(vn),e.registerComponentView(md),e.registerCoordinateSystem("maptalks3D",vd),e.registerAction({type:"maptalks3DChangeCamera",event:"maptalks3dcamerachanged",update:"maptalks3D:updateCamera"},function(t,r){r.eachComponent({mainType:"maptalks3D",query:t},function(i){i.setMaptalksCameraOption(t)})})}He(yd);var xd=Me.vec3,bd=an.isDimensionStacked;function Td(e){var t=e[0],r=e[1];return!(t>0&&r>0||t<0&&r<0)}function wd(e,t){var r=e.getData(),i=e.get("barSize");if(i==null){var a=t.size,n,o,s=t.getAxis("x"),l=t.getAxis("y");s.type==="category"?n=s.getBandWidth()*.7:n=Math.round(a[0]/Math.sqrt(r.count()))*.6,l.type==="category"?o=l.getBandWidth()*.7:o=Math.round(a[1]/Math.sqrt(r.count()))*.6,i=[n,o]}else St(i)||(i=[i,i]);var u=t.getAxis("z").scale.getExtent(),h=Td(u),c=["x","y","z"].map(function(p){return e.coordDimToDataDim(p)[0]}),f=bd(r,c[2]),d=f?r.getCalculationInfo("stackResultDimension"):c[2];r.each(c,function(p,m,g,_){var b=r.get(d,_),x=f?b-g:h?0:u[0],v=t.dataToPoint([p,m,x]),w=t.dataToPoint([p,m,b]),S=xd.dist(v,w),E=[0,w[1]<v[1]?-1:1,0];Math.abs(S)===0&&(S=.1);var M=[i[0],S,i[1]];r.setItemLayout(_,[v,E,M])}),r.setLayout("orient",[1,0,0])}function yn(e,t,r){for(var i=e.getDataExtent(t),a=e.getDataExtent(r),n=i[1]-i[0]||i[0],o=a[1]-a[0]||a[0],s=50,l=new Uint8Array(s*s),u=0;u<e.count();u++){var h=e.get(t,u),c=e.get(r,u),f=Math.floor((h-i[0])/n*(s-1)),d=Math.floor((c-a[0])/o*(s-1)),p=d*s+f;l[p]=l[p]||1}for(var m=0,u=0;u<l.length;u++)l[u]&&m++;return m/l.length}var Lo=Me.vec3,Sd=an.isDimensionStacked;function Md(e,t){var r=e.getData(),i=e.get("minHeight")||0,a=e.get("barSize"),n=["lng","lat","alt"].map(function(u){return e.coordDimToDataDim(u)[0]});if(a==null){var o=t.radius*Math.PI,s=yn(r,n[0],n[1]);a=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else St(a)||(a=[a,a]);var l=xn(r,n);r.each(n,function(u,h,c,f){var d=r.get(l.dimension,f),p=l.isStacked?d-c:t.altitudeAxis.scale.getExtent()[0],m=Math.max(t.altitudeAxis.dataToCoord(c),i),g=t.dataToPoint([u,h,p]),_=t.dataToPoint([u,h,d]),b=Lo.sub([],_,g);Lo.normalize(b,b);var x=[a[0],m,a[1]];r.setItemLayout(f,[g,b,x])}),r.setLayout("orient",A.UP.array)}function Ed(e,t){var r=e.getData(),i=e.get("barSize"),a=e.get("minHeight")||0,n=["lng","lat","alt"].map(function(h){return e.coordDimToDataDim(h)[0]});if(i==null){var o=Math.min(t.size[0],t.size[2]),s=yn(r,n[0],n[1]);i=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else St(i)||(i=[i,i]);var l=[0,1,0],u=xn(r,n);r.each(n,function(h,c,f,d){var p=r.get(u.dimension,d),m=u.isStacked?p-f:t.altitudeAxis.scale.getExtent()[0],g=Math.max(t.altitudeAxis.dataToCoord(f),a),_=t.dataToPoint([h,c,m]),b=[i[0],g,i[1]];r.setItemLayout(d,[_,l,b])}),r.setLayout("orient",[1,0,0])}function Ad(e,t){var r=e.getData(),i=e.coordDimToDataDim("lng")[0],a=e.coordDimToDataDim("lat")[0],n=e.coordDimToDataDim("alt")[0],o=e.get("barSize"),s=e.get("minHeight")||0;if(o==null){var l=r.getDataExtent(i),u=r.getDataExtent(a),h=t.dataToPoint([l[0],u[0]]),c=t.dataToPoint([l[1],u[1]]),f=Math.min(Math.abs(h[0]-c[0]),Math.abs(h[1]-c[1]))||1,d=yn(r,i,a);o=[f/Math.sqrt(r.count()/d),f/Math.sqrt(r.count()/d)]}else St(o)||(o=[o,o]),o[0]/=t.getScale()/16,o[1]/=t.getScale()/16;var p=[0,0,1],m=[i,a,n],g=xn(r,m);r.each(m,function(_,b,x,v){var w=r.get(g.dimension,v),S=g.isStacked?w-x:0,E=t.dataToPoint([_,b,S]),M=t.dataToPoint([_,b,w]),L=Math.max(M[2]-E[2],s),I=[o[0],L,o[1]];r.setItemLayout(v,[E,p,I])}),r.setLayout("orient",[1,0,0])}function xn(e,t){var r=Sd(e,t[2]);return{dimension:r?e.getCalculationInfo("stackResultDimension"):t[2],isStacked:r}}function Ld(e){e.registerLayout(function(t,r){t.eachSeriesByType("bar3D",function(i){var a=i.coordinateSystem,n=a&&a.type;n==="globe"?Md(i,a):n==="cartesian3D"?wd(i,a):n==="geo3D"?Ed(i,a):(n==="mapbox3D"||n==="maptalks3D")&&Ad(i,a)})})}var Zt={};Zt.getFormattedLabel=function(e,t,r,i,a){r=r||"normal";var n=e.getData(i),o=n.getItemModel(t),s=e.getDataParams(t,i);a!=null&&s.value instanceof Array&&(s.value=s.value[a]);var l=o.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);l==null&&(l=o.get(["label","formatter"]));var u;return typeof l=="function"?(s.status=r,u=l(s)):typeof l=="string"&&(u=Gl(l,s)),u};Zt.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};function Cd(e,t){var r=[];return wt(e.dimensions,function(i){var a=e.getDimensionInfo(i),n=a.otherDims,o=n[t];o!=null&&o!==!1&&(r[o]=a.name)}),r}function xi(e,t,r){function i(c){var f=[],d=Cd(a,"tooltip");d.length?wt(d,function(m){p(a.get(m,t),m)}):wt(c,p);function p(m,g){var _=a.getDimensionInfo(g);if(!(!_||_.otherDims.tooltip===!1)){var b=_.type,x="- "+(_.tooltipName||_.name)+": "+(b==="ordinal"?m+"":b==="time"?Il("yyyy/MM/dd hh:mm:ss",m):An(m));x&&f.push(br(x))}}return"<br/>"+f.join("<br/>")}var a=e.getData(),n=e.getRawValue(t),o=St(n)?i(n):br(An(n)),s=a.getName(t),l=Fe(a,t);Sl(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=Ml(l),h=e.name;return h==="\0-"&&(h=""),h=h?br(h)+"<br/>":"",h+u+(s?br(s)+": "+o:o)}function oa(e,t,r){r=r||e.getSource();var i=t||qo(e.get("coordinateSystem"))||["x","y","z"],a=mi(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:i.map(function(s){var l=e.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&a.forEach(function(s){if(i.indexOf(s.coordDim)>=0){var l=e.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var n=an.enableDataStack(e,a,{byIndex:!0,stackedCoordDimension:"z"}),o=new Tt(a,e);return o.setCalculationInfo(n),o.initData(r),o}var qs=ft.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,t){return oa(this)},getFormattedLabel:function(e,t,r,i){var a=Zt.getFormattedLabel(this,e,t,r,i);return a==null&&(a=this.getData().get("z",e)),a},formatTooltip:function(e){return xi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});he(qs.prototype,zr);var be=Me.vec3,Dd=Me.mat3,bn=ie.extend(function(){return{attributes:{position:new ie.Attribute("position","float",3,"POSITION"),normal:new ie.Attribute("normal","float",3,"NORMAL"),color:new ie.Attribute("color","float",4,"COLOR"),prevPosition:new ie.Attribute("prevPosition","float",3),prevNormal:new ie.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,r=this.getBarVertexCount()*e,i=this.getBarTriangleCount()*e;this.vertexCount!==r&&(this.attributes.position.init(r),t?this.attributes.normal.init(r):this.attributes.normal.value=null,this.attributes.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3),this._dataIndices=new Uint32Array(r))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,r=e*2+1;return(t+1)*r*2+4},setColor:function(e,t){for(var r=this.getBarVertexCount(),i=r*e,a=r*(e+1),n=i;n<a;n++)this.attributes.color.set(n,t);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=be.create,t=be.scaleAndAdd,r=e(),i=e(),a=e(),n=e(),o=e(),s=e(),l=e(),u=[],h=[],c=0;c<8;c++)u[c]=e();for(var f=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],d=[0,1,2,0,2,3],p=[],c=0;c<f.length;c++)for(var m=f[c],g=0;g<2;g++){for(var _=[],b=0;b<3;b++)_.push(m[d[g*3+b]]);p.push(_)}return function(x,v,w,S,E,M){var L=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(x,v,w,S,this.bevelSize,this.bevelSegments,E);else{be.copy(a,v),be.normalize(a,a),be.cross(n,w,a),be.normalize(n,n),be.cross(i,a,n),be.normalize(n,n),be.negate(o,i),be.negate(s,a),be.negate(l,n),t(u[0],x,i,S[0]/2),t(u[0],u[0],n,S[2]/2),t(u[1],x,i,S[0]/2),t(u[1],u[1],l,S[2]/2),t(u[2],x,o,S[0]/2),t(u[2],u[2],l,S[2]/2),t(u[3],x,o,S[0]/2),t(u[3],u[3],n,S[2]/2),t(r,x,a,S[1]),t(u[4],r,i,S[0]/2),t(u[4],u[4],n,S[2]/2),t(u[5],r,i,S[0]/2),t(u[5],u[5],l,S[2]/2),t(u[6],r,o,S[0]/2),t(u[6],u[6],l,S[2]/2),t(u[7],r,o,S[0]/2),t(u[7],u[7],n,S[2]/2);var I=this.attributes;if(this.enableNormal){h[0]=i,h[1]=o,h[2]=a,h[3]=s,h[4]=n,h[5]=l;for(var C=this._vertexOffset,F=0;F<f.length;F++){for(var U=this._triangleOffset*3,O=0;O<6;O++)this.indices[U++]=C+d[O];C+=4,this._triangleOffset+=2}for(var F=0;F<f.length;F++)for(var H=h[F],O=0;O<4;O++){var q=f[F][O];I.position.set(this._vertexOffset,u[q]),I.normal.set(this._vertexOffset,H),I.color.set(this._vertexOffset++,E)}}else{for(var F=0;F<p.length;F++){for(var U=this._triangleOffset*3,O=0;O<3;O++)this.indices[U+O]=p[F][O]+this._vertexOffset;this._triangleOffset++}for(var F=0;F<u.length;F++)I.position.set(this._vertexOffset,u[F]),I.color.set(this._vertexOffset++,E)}}for(var Z=this._vertexOffset,F=L;F<Z;F++)this._dataIndices[F]=M}}(),_addBevelBar:function(){var e=be.create(),t=be.create(),r=be.create(),i=Dd.create(),a=[],n=[1,-1,-1,1],o=[1,1,-1,-1],s=[2,0];return function(l,u,h,c,f,d,p){be.copy(t,u),be.normalize(t,t),be.cross(r,h,t),be.normalize(r,r),be.cross(e,t,r),be.normalize(r,r),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=t[0],i[4]=t[1],i[5]=t[2],i[6]=r[0],i[7]=r[1],i[8]=r[2],f=Math.min(c[0],c[2])/2*f;for(var m=0;m<3;m++)a[m]=Math.max(c[m]-f*2,0);for(var g=(c[0]-a[0])/2,_=(c[1]-a[1])/2,b=(c[2]-a[2])/2,x=[],v=[],w=this._vertexOffset,S=[],m=0;m<2;m++){S[m]=S[m]=[];for(var E=0;E<=d;E++)for(var M=0;M<4;M++){(E===0&&m===0||m===1&&E===d)&&S[m].push(w);for(var L=0;L<=d;L++){var I=L/d*Math.PI/2+Math.PI/2*M,C=E/d*Math.PI/2+Math.PI/2*m;v[0]=g*Math.cos(I)*Math.sin(C),v[1]=_*Math.cos(C),v[2]=b*Math.sin(I)*Math.sin(C),x[0]=v[0]+n[M]*a[0]/2,x[1]=v[1]+_+s[m]*a[1]/2,x[2]=v[2]+o[M]*a[2]/2,Math.abs(g-_)<1e-6&&Math.abs(_-b)<1e-6||(v[0]/=g*g,v[1]/=_*_,v[2]/=b*b),be.normalize(v,v),be.transformMat3(x,x,i),be.transformMat3(v,v,i),be.add(x,x,l),this.attributes.position.set(w,x),this.enableNormal&&this.attributes.normal.set(w,v),this.attributes.color.set(w,p),w++}}}for(var F=d*4+3,U=d*2+1,O=F+1,M=0;M<U;M++)for(var m=0;m<=F;m++){var H=M*O+m+this._vertexOffset,q=M*O+(m+1)%O+this._vertexOffset,Z=(M+1)*O+(m+1)%O+this._vertexOffset,N=(M+1)*O+m+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[Z,H,q]),this.setTriangleIndices(this._triangleOffset++,[Z,N,H])}this.setTriangleIndices(this._triangleOffset++,[S[0][0],S[0][2],S[0][1]]),this.setTriangleIndices(this._triangleOffset++,[S[0][0],S[0][3],S[0][2]]),this.setTriangleIndices(this._triangleOffset++,[S[1][0],S[1][1],S[1][2]]),this.setTriangleIndices(this._triangleOffset++,[S[1][0],S[1][2],S[1][3]]),this._vertexOffset=w}}()});kt(bn.prototype,vi);kt(bn.prototype,mn);var Pd=Me.vec3;const Nd=pt.extend({type:"bar3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._api=t,this._labelsBuilder=new Pt(256,256,t);var r=this;this._labelsBuilder.getLabelPosition=function(i,a,n){if(r._data){var o=r._data.getItemLayout(i),s=o[0],l=o[1],u=o[2][1];return Pd.scaleAndAdd([],s,l,n+u)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,r){var i=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=i,this._barMesh||(this._barMesh=new y.Mesh({geometry:new bn,shadowDepthMaterial:new y.Material({shader:new y.Shader(y.Shader.source("ecgl.sm.depth.vertex"),y.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var a=e.coordinateSystem;if(this._doRender(e,r),a&&a.viewGL){a.viewGL.add(this.groupGL);var n=a.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[n]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var r=e.getData(),i=e.get("shading"),a=i!=="color",n=this,o=this._barMesh,s="ecgl."+i;(!o.material||o.material.shader.name!==s)&&(o.material=y.createMaterial(s,["VERTEX_COLOR"])),y.setMaterialFromModel(i,o.material,e,t),o.geometry.enableNormal=a,o.geometry.resetOffset();var l=e.get("bevelSize"),u=e.get("bevelSmoothness");o.geometry.bevelSegments=u,o.geometry.bevelSize=l;var h=[],c=new Float32Array(r.count()*4),f=0,g=0,d=!1;r.each(function(b){if(r.hasValue(b)){var x=Fe(r,b),v=Be(r,b);v==null&&(v=1),y.parseColor(x,h),h[3]*=v,c[f++]=h[0],c[f++]=h[1],c[f++]=h[2],c[f++]=h[3],h[3]>0&&(g++,h[3]<.99&&(d=!0))}}),o.geometry.setBarCount(g);var p=r.getLayout("orient"),m=this._barIndexOfData=new Int32Array(r.count()),g=0;r.each(function(b){if(!r.hasValue(b)){m[b]=-1;return}var x=r.getItemLayout(b),v=x[0],w=x[1],S=x[2],E=b*4;h[0]=c[E++],h[1]=c[E++],h[2]=c[E++],h[3]=c[E++],h[3]>0&&(n._barMesh.geometry.addBar(v,w,p,S,h,b),m[b]=g++)}),o.geometry.dirty(),o.geometry.updateBoundingBox();var _=o.material;_.transparent=d,_.depthMask=!d,o.geometry.sortTriangles=d,this._initHandler(e,t)},_initHandler:function(e,t){var r=e.getData(),i=this._barMesh,a=e.coordinateSystem.type==="cartesian3D";i.seriesIndex=e.seriesIndex;var n=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(o){var s=i.geometry.getDataIndexOfVertex(o.triangle[0]);s!==n&&(this._downplay(n),this._highlight(s),this._labelsBuilder.updateLabels([s]),a&&t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",s),r.get("y",s),r.get("z",s,!0)]})),n=s,i.dataIndex=s},this),i.on("mouseout",function(o){this._downplay(n),this._labelsBuilder.updateLabels(),n=-1,i.dataIndex=-1,a&&t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=t.getItemModel(e),a=i.getModel("emphasis.itemStyle"),n=a.get("color"),o=a.get("opacity");if(n==null){var s=Fe(t,e);n=rn(s,-.4)}o==null&&(o=Be(t,e));var l=y.parseColor(n);l[3]*=o,this._barMesh.geometry.setColor(r,l),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=Fe(t,e),a=Be(t,e),n=y.parseColor(i);n[3]*=a,this._barMesh.geometry.setColor(r,n),this._api.getZr().refresh()}}},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,a){var n=t.getData(),o=re.queryDataIndex(n,a),s=this;o!=null?wt(Zt.normalizeToArray(o),function(l){e==="highlight"?this._highlight(l):this._downplay(l)},this):n.each(function(l){e==="highlight"?s._highlight(l):s._downplay(l)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function Rd(e){e.registerChartView(Nd),e.registerSeriesModel(qs),Ld(e),e.registerProcessor(function(t,r){t.eachSeriesByType("bar3d",function(i){var a=i.getData();a.filterSelf(function(n){return a.hasValue(n)})})})}He(Rd);var Od=ft.extend({type:"series.line3D",dependencies:["grid3D"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){return oa(this)},formatTooltip:function(e){return xi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}}),Id=Me.vec3;y.Shader.import(na);const Bd=pt.extend({type:"line3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._api=t},render:function(e,t,r){var i=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=i,this._line3DMesh||(this._line3DMesh=new y.Mesh({geometry:new Xt({useNativeLine:!1,sortTriangles:!0}),material:new y.Material({shader:y.createShader("ecgl.meshLines3D")}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var a=e.coordinateSystem;if(a&&a.viewGL){a.viewGL.add(this.groupGL);var n=a.viewGL.isLinearSpace()?"define":"undefine";this._line3DMesh.material[n]("fragment","SRGB_DECODE")}this._doRender(e,r),this._data=e.getData(),this._camera=a.viewGL.camera,this.updateCamera(),this._updateAnimation(e)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(e,t){var r=e.getData(),i=this._line3DMesh;i.geometry.resetOffset();var a=r.getLayout("points"),n=[],o=new Float32Array(a.length/3*4),s=0,l=!1;r.each(function(c){var f=Fe(r,c),d=Be(r,c);d==null&&(d=1),y.parseColor(f,n),n[3]*=d,o[s++]=n[0],o[s++]=n[1],o[s++]=n[2],o[s++]=n[3],n[3]<.99&&(l=!0)}),i.geometry.setVertexCount(i.geometry.getPolylineVertexCount(a)),i.geometry.setTriangleCount(i.geometry.getPolylineTriangleCount(a)),i.geometry.addPolyline(a,o,re.firstNotNull(e.get("lineStyle.width"),1)),i.geometry.dirty(),i.geometry.updateBoundingBox();var u=i.material;u.transparent=l,u.depthMask=!l;var h=e.getModel("debug.wireframe");h.get("show")?(i.geometry.createAttribute("barycentric","float",3),i.geometry.generateBarycentric(),i.material.set("both","WIREFRAME_TRIANGLE"),i.material.set("wireframeLineColor",y.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)")),i.material.set("wireframeLineWidth",re.firstNotNull(h.get("lineStyle.width"),1))):i.material.set("both","WIREFRAME_TRIANGLE"),this._points=a,this._initHandler(e,t)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevPositionPrev","positionPrev"],["prevPositionNext","positionNext"]],this._prevLine3DMesh,this._line3DMesh,e)},_initHandler:function(e,t){var r=e.getData(),i=e.coordinateSystem,a=this._line3DMesh,n=-1;a.seriesIndex=e.seriesIndex,a.off("mousemove"),a.off("mouseout"),a.on("mousemove",function(o){var s=i.pointToData(o.point.array),l=r.indicesOfNearest("x",s[0])[0];l!==n&&(t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",l),r.get("y",l),r.get("z",l)]}),a.dataIndex=l),n=l},this),a.on("mouseout",function(o){n=-1,a.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateNDCPosition:function(){var e=new k,t=this._camera;k.multiply(e,t.projectionMatrix,t.viewMatrix);var r=this._positionNDC,i=this._points,a=i.length/3;(!r||r.length/2!==a)&&(r=this._positionNDC=new Float32Array(a*2));for(var n=[],o=0;o<a;o++){var s=o*3,l=o*2;n[0]=i[s],n[1]=i[s+1],n[2]=i[s+2],n[3]=1,Id.transformMat4(n,n,e.array),r[l]=n[0]/n[3],r[l+1]=n[1]/n[3]}},_pick:function(e,t,r,i,a,n){var o=this._positionNDC,s=this._data.hostModel,l=s.get("lineStyle.width"),u=-1,h=r.viewport.width,c=r.viewport.height,f=h*.5,d=c*.5;e=(e+1)*f,t=(t+1)*d;for(var p=1;p<o.length/2;p++){var m=(o[(p-1)*2]+1)*f,g=(o[(p-1)*2+1]+1)*d,_=(o[p*2]+1)*f,b=(o[p*2+1]+1)*d;if(_l(m,g,_,b,l,e,t)){var x=(m-e)*(m-e)+(g-t)*(g-t),v=(_-e)*(_-e)+(b-t)*(b-t);u=x<v?p-1:p}}if(u>=0){var w=u*3,S=new A(this._points[w],this._points[w+1],this._points[w+2]);n.push({dataIndex:u,point:S,pointWorld:S.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(S)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Fd(e){e.registerChartView(Bd),e.registerSeriesModel(Od),e.registerLayout(function(t,r){t.eachSeriesByType("line3D",function(i){var a=i.getData(),n=i.coordinateSystem;if(n){if(n.type!=="cartesian3D")return;var o=new Float32Array(a.count()*3),s=[],l=[],u=n.dimensions,h=u.map(function(c){return i.coordDimToDataDim(c)[0]});n&&a.each(h,function(c,f,d,p){s[0]=c,s[1]=f,s[2]=d,n.dataToPoint(s,l),o[p*3]=l[0],o[p*3+1]=l[1],o[p*3+2]=l[2]}),a.setLayout("points",o)}})})}He(Fd);const Vd=ft.extend({type:"series.scatter3D",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(e,t){return oa(this)},getFormattedLabel:function(e,t,r,i){var a=Zt.getFormattedLabel(this,e,t,r,i);if(a==null){var n=this.getData(),o=n.dimensions[n.dimensions.length-1];a=n.get(o,e)}return a},formatTooltip:function(e){return xi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:"circle",symbolSize:10,blendMode:"source-over",label:{show:!1,position:"right",distance:5,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function Fa(e,i,r){var i=i||document.createElement("canvas");i.width=e,i.height=e;var a=i.getContext("2d");return r&&r(a),i}function zd(e,t,r,i){St(t)||(t=[t,t]);var a=Ki.getMarginByStyle(r,i),n=t[0]+a.left+a.right,o=t[1]+a.top+a.bottom,s=Bl(e,0,0,t[0],t[1]),l=Math.max(n,o);s.x=a.left,s.y=a.top,n>o?s.y+=(l-o)/2:s.x+=(l-n)/2;var u=s.getBoundingRect();return s.x-=u.x,s.y-=u.y,s.setStyle(r),s.update(),s.__size=l,s}function Gd(e,t,r){var i=t.width,a=t.height,n=e.canvas.width,o=e.canvas.height,s=i/n,l=a/o;function u(_){return _<128?1:-1}function h(_,b){var x=1/0;_=Math.floor(_*s),b=Math.floor(b*l);for(var v=b*i+_,w=t.data[v*4],S=u(w),E=Math.max(b-r,0);E<Math.min(b+r,a);E++)for(var M=Math.max(_-r,0);M<Math.min(_+r,i);M++){var v=E*i+M,L=t.data[v*4],I=u(L),C=M-_,F=E-b;if(S!==I){var U=C*C+F*F;U<x&&(x=U)}}return S*Math.sqrt(x)}for(var c=e.createImageData(n,o),f=0;f<o;f++)for(var d=0;d<n;d++){var p=h(d,f),m=p/r*.5+.5,g=(f*n+d)*4;c.data[g++]=(1-m)*255,c.data[g++]=(1-m)*255,c.data[g++]=(1-m)*255,c.data[g++]=255}return c}var Ki={getMarginByStyle:function(e){var t=e.minMargin||0,r=0;e.stroke&&e.stroke!=="none"&&(r=e.lineWidth==null?1:e.lineWidth);var i=e.shadowBlur||0,a=e.shadowOffsetX||0,n=e.shadowOffsetY||0,o={};return o.left=Math.max(r/2,-a+i,t),o.right=Math.max(r/2,a+i,t),o.top=Math.max(r/2,-n+i,t),o.bottom=Math.max(r/2,n+i,t),o},createSymbolSprite:function(e,t,r,i){var a=zd(e,t,r),n=Ki.getMarginByStyle(r);return{image:Fa(a.__size,i,function(o){ko(o,a)}),margin:n}},createSDFFromCanvas:function(e,t,r,i){return Fa(t,i,function(a){var n=e.getContext("2d"),o=n.getImageData(0,0,e.width,e.height);a.putImageData(Gd(a,o,r),0,0)})},createSimpleSprite:function(e,t){return Fa(e,t,function(r){var i=e/2;r.beginPath(),r.arc(i,i,60,0,Math.PI*2,!1),r.closePath();var a=r.createRadialGradient(i,i,0,i,i,i);a.addColorStop(0,"rgba(255, 255, 255, 1)"),a.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),a.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=a,r.fill()})}},Co=Me.vec3;const Ud={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(e,t){var r=this.indices,i=Co.create();if(!r){r=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var a=0;a<r.length;a++)r[a]=a}if(t===0){var n=this.attributes.position,e=e.array,o=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var s,a=0;a<this.vertexCount;a++){n.get(a,i);var l=Co.sqrDist(i,e);isNaN(l)&&(l=1e7,o++),a===0?(s=l,l=0):l=l-s,this._zList[a]=l}this._noneCount=o}if(this.vertexCount<2e4)t===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var a=0;a<3;a++)this._progressiveQuickSort(t*3+a);this.dirtyIndices()},_simpleSort:function(e){var t=this._zList,r=this.indices;function i(a,n){return t[n]-t[a]}e?Array.prototype.sort.call(r,i):Nr.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._zList,r=this.indices;this._quickSort=this._quickSort||new Nr,this._quickSort.step(r,function(i,a){return t[a]-t[i]},e)}},Hd=`@export ecgl.sdfSprite.vertex

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
@end`;var Va=Me.vec4;y.Shader.import(Hd);var kd=y.Mesh.extend(function(){var e=new y.Geometry({dynamic:!0,attributes:{color:new y.Geometry.Attribute("color","float",4,"COLOR"),position:new y.Geometry.Attribute("position","float",3,"POSITION"),size:new y.Geometry.Attribute("size","float",1),prevPosition:new y.Geometry.Attribute("prevPosition","float",3),prevSize:new y.Geometry.Attribute("prevSize","float",1)}});Object.assign(e,Ud);var t=new y.Material({shader:y.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});t.enableTexture("sprite"),t.define("both","VERTEX_COLOR"),t.define("both","VERTEX_SIZE");var r=new y.Texture2D({image:document.createElement("canvas"),flipY:!1});return t.set("sprite",r),e.pick=this._pick.bind(this),{geometry:e,material:t,mode:y.Mesh.POINTS,sizeScale:1}},{_pick:function(e,t,r,i,a,n){var o=this._positionNDC;if(o)for(var s=r.viewport,l=2/s.width,u=2/s.height,h=this.geometry.vertexCount-1;h>=0;h--){var c;this.geometry.indices?c=this.geometry.indices[h]:c=h;var f=o[c*2],d=o[c*2+1],p=this.geometry.attributes.size.get(c)/this.sizeScale,m=p/2;if(e>f-m*l&&e<f+m*l&&t>d-m*u&&t<d+m*u){var g=new y.Vector3,_=new y.Vector3;this.geometry.attributes.position.get(c,g.array),y.Vector3.transformMat4(_,g,this.worldTransform),n.push({vertexIndex:c,point:g,pointWorld:_,target:this,distance:_.distance(i.getWorldPosition())})}}},updateNDCPosition:function(e,t,r){var i=this._positionNDC,a=this.geometry;(!i||i.length/2!==a.vertexCount)&&(i=this._positionNDC=new Float32Array(a.vertexCount*2));for(var n=Va.create(),o=0;o<a.vertexCount;o++)a.attributes.position.get(o,n),n[3]=1,Va.transformMat4(n,n,e.array),Va.scale(n,n,1/n[3]),i[o*2]=n[0],i[o*2+1]=n[1]}}),Do=20,Po=-10;function Wd(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]}function hr(e,t){this.rootNode=new y.Node,this.is2D=e,this._labelsBuilder=new Pt(256,256,t),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=t,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}hr.prototype={constructor:hr,highlightOnMouseover:!0,update:function(e,t,r,i,a){var n=this._prevMesh;this._prevMesh=this._mesh,this._mesh=n;var o=e.getData();if(i==null&&(i=0),a==null&&(a=o.count()),this._startDataIndex=i,this._endDataIndex=a-1,!this._mesh){var s=this._prevMesh&&this._prevMesh.material;this._mesh=new kd({renderOrder:10,frustumCulling:!1}),s&&(this._mesh.material=s)}var s=this._mesh.material,l=this._mesh.geometry,u=l.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var h=this._getSymbolInfo(e,i,a),c=r.getDevicePixelRatio(),f=e.getModel("itemStyle").getItemStyle(),d=e.get("large"),p=1;h.maxSize>2?(p=this._updateSymbolSprite(e,f,h,c),s.enableTexture("sprite")):s.disableTexture("sprite"),u.position.init(a-i);var m=[];if(d){s.undefine("VERTEX_SIZE"),s.undefine("VERTEX_COLOR");var g=Bc(o),_=Fc(o);y.parseColor(g,m),m[3]*=_,s.set({color:m,u_Size:h.maxSize*this._sizeScale})}else s.set({color:[1,1,1,1]}),s.define("VERTEX_SIZE"),s.define("VERTEX_COLOR"),u.size.init(a-i),u.color.init(a-i),this._originalOpacity=new Float32Array(a-i);for(var b=o.getLayout("points"),x=u.position.value,v=0;v<a-i;v++){var w=v*3,S=v*2;if(this.is2D?(x[w]=b[S],x[w+1]=b[S+1],x[w+2]=Po):(x[w]=b[w],x[w+1]=b[w+1],x[w+2]=b[w+2]),!d){var g=Fe(o,v),_=Be(o,v);y.parseColor(g,m),m[3]*=_,u.color.set(v,m),m[3]<.99;var E=o.getItemVisual(v,"symbolSize");E=E instanceof Array?Math.max(E[0],E[1]):E,isNaN(E)&&(E=0),u.size.value[v]=E*p*this._sizeScale,this._originalOpacity[v]=m[3]}}this._mesh.sizeScale=p,l.updateBoundingBox(),l.dirty(),this._updateMaterial(e,f);var M=e.coordinateSystem;if(M&&M.viewGL){var L=M.viewGL.isLinearSpace()?"define":"undefine";s[L]("fragment","SRGB_DECODE")}d||this._updateLabelBuilder(e,i,a),this._updateHandler(e,t,r),this._updateAnimation(e),this._api=r},getPointsMesh:function(){return this._mesh},updateLabels:function(e){this._labelsBuilder.updateLabels(e)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(e,t,r,i){r.maxSize=Math.min(r.maxSize*2,200);var a=[];return r.aspect>1?(a[0]=r.maxSize,a[1]=r.maxSize/r.aspect):(a[1]=r.maxSize,a[0]=r.maxSize*r.aspect),a[0]=a[0]||1,a[1]=a[1]||1,(this._symbolType!==r.type||!Wd(this._symbolSize,a)||this._lineWidth!==t.lineWidth)&&(Ki.createSymbolSprite(r.type,a,{fill:"#fff",lineWidth:t.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(a[0]/2,10)},this._spriteImageCanvas),Ki.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),Do,this._mesh.material.get("sprite").image),this._symbolType=r.type,this._symbolSize=a,this._lineWidth=t.lineWidth),this._spriteImageCanvas.width/r.maxSize*i},_updateMaterial:function(e,t){var r=e.get("blendMode")==="lighter"?y.additiveBlend:null,i=this._mesh.material;i.blend=r,i.set("lineWidth",t.lineWidth/Do);var a=y.parseColor(t.stroke);i.set("strokeColor",a),i.transparent=!0,i.depthMask=!1,i.depthTest=!this.is2D,i.sortVertices=!this.is2D},_updateLabelBuilder:function(e,o,r){var i=e.getData(),a=this._mesh.geometry,n=a.attributes.position.value,o=this._startDataIndex,s=this._mesh.sizeScale;this._labelsBuilder.updateData(i,o,r),this._labelsBuilder.getLabelPosition=function(l,u,h){var c=(l-o)*3;return[n[c],n[c+1],n[c+2]]},this._labelsBuilder.getLabelDistance=function(l,u,h){var c=a.attributes.size.get(l-o)/s;return c/2+h},this._labelsBuilder.updateLabels()},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,e)},_updateHandler:function(e,t,r){var i=e.getData(),a=this._mesh,n=this,o=-1,s=e.coordinateSystem&&e.coordinateSystem.type==="cartesian3D",l;s&&(l=e.coordinateSystem.model),a.seriesIndex=e.seriesIndex,a.off("mousemove"),a.off("mouseout"),a.on("mousemove",function(u){var h=u.vertexIndex+n._startDataIndex;h!==o&&(this.highlightOnMouseover&&(this.downplay(i,o),this.highlight(i,h),this._labelsBuilder.updateLabels([h])),s&&r.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get(e.coordDimToDataDim("x")[0],h),i.get(e.coordDimToDataDim("y")[0],h),i.get(e.coordDimToDataDim("z")[0],h)],grid3DIndex:l.componentIndex})),a.dataIndex=h,o=h},this),a.on("mouseout",function(u){var h=u.vertexIndex+n._startDataIndex;this.highlightOnMouseover&&(this.downplay(i,h),this._labelsBuilder.updateLabels()),o=-1,a.dataIndex=-1,s&&r.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:l.componentIndex})},this)},updateLayout:function(e,t,r){var i=e.getData();if(this._mesh){var a=this._mesh.geometry.attributes.position.value,n=i.getLayout("points");if(this.is2D)for(var o=0;o<n.length/2;o++){var s=o*3,l=o*2;a[s]=n[l],a[s+1]=n[l+1],a[s+2]=Po}else for(var o=0;o<n.length;o++)a[o]=n[o];this._mesh.geometry.dirty(),r.getZr().refresh()}},updateView:function(e){if(this._mesh){var t=new k;k.mul(t,e.viewMatrix,this._mesh.worldTransform),k.mul(t,e.projectionMatrix,t),this._mesh.updateNDCPosition(t,this.is2D,this._api)}},highlight:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=e.getItemModel(t),i=r.getModel("emphasis.itemStyle"),a=i.get("color"),n=i.get("opacity");if(a==null){var o=Fe(e,t);a=rn(o,-.4)}n==null&&(n=Be(e,t));var s=y.parseColor(a);s[3]*=n,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,s),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=Fe(e,t),i=Be(e,t),a=y.parseColor(r);a[3]*=i,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,a),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(e){if(this._originalOpacity){for(var t=this._mesh.geometry,r=0;r<t.vertexCount;r++){var i=this._originalOpacity[r]*e;t.attributes.color.value[r*4+3]=i}t.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(e){this._mesh&&this._setPositionTextureToMesh(this._mesh,e),this._positionTexture=e},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(e){if(e!==this._sizeScale){if(this._mesh){var t=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",t/this._sizeScale*e);var r=this._mesh.geometry.attributes;if(r.size.value)for(var i=0;i<r.size.value.length;i++)r.size.value[i]=r.size.value[i]/this._sizeScale*e}this._sizeScale=e}},_setPositionTextureToMesh:function(e,t){t&&e.material.set("positionTexture",t),e.material[t?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(e,t,r){if(e.get("large")){var i=re.firstNotNull(e.get("symbolSize"),1),a,n;return i instanceof Array?(a=Math.max(i[0],i[1]),n=i[0]/i[1]):(a=i,n=1),{maxSize:i,type:e.get("symbol"),aspect:n}}for(var o=e.getData(),n,s=o.getItemVisual(0,"symbol")||"circle",a=0,l=t;l<r;l++){var i=o.getItemVisual(l,"symbolSize"),u=o.getItemVisual(l,"symbol"),h;if(i instanceof Array)h=i[0]/i[1],a=Math.max(Math.max(i[0],i[1]),a);else{if(isNaN(i))continue;h=1,a=Math.max(i,a)}s=u,n=h}return{maxSize:a,type:s,aspect:n}}};const Xd=pt.extend({type:"scatter3D",hasSymbolVisual:!0,__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(e,t,r){if(this.groupGL.removeAll(),!!e.getData().count()){var i=e.coordinateSystem;if(i&&i.viewGL){i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera;var a=this._pointsBuilderList[0];a||(a=this._pointsBuilderList[0]=new hr(!1,r)),this._pointsBuilderList.length=1,this.groupGL.add(a.rootNode),a.update(e,t,r),a.updateView(i.viewGL.camera)}}},incrementalPrepareRender:function(e,t,r){var i=e.coordinateSystem;i&&i.viewGL&&(i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var a=this._pointsBuilderList[this._currentStep];a||(a=new hr(!1,i),this._pointsBuilderList[this._currentStep]=a),this.groupGL.add(a.rootNode),a.update(t,r,i,e.start,e.end),a.updateView(t.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(e){e.updateView(this._camera)},this)},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,a){var n=t.getData(),o=re.queryDataIndex(n,a),s=e==="highlight";o!=null?wt(Zt.normalizeToArray(o),function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var h=this._pointsBuilderList[u];s?h.highlight(n,l):h.downplay(n,l)}},this):n.each(function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var h=this._pointsBuilderList[u];s?h.highlight(n,l):h.downplay(n,l)}})},dispose:function(){this._pointsBuilderList.forEach(function(e){e.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function jd(e){e.registerChartView(Xd),e.registerSeriesModel(Vd),e.registerLayout({seriesType:"scatter3D",reset:function(t){var r=t.coordinateSystem;if(r){var i=r.dimensions;if(i.length<3)return;var a=i.map(function(s){return t.coordDimToDataDim(s)[0]}),n=[],o=[];return{progress:function(s,l){for(var u=new Float32Array((s.end-s.start)*3),h=s.start;h<s.end;h++){var c=(h-s.start)*3;n[0]=l.get(a[0],h),n[1]=l.get(a[1],h),n[2]=l.get(a[2],h),r.dataToPoint(n,o),u[c]=o[0],u[c+1]=o[1],u[c+2]=o[2]}l.setLayout("points",u)}}}}})}He(jd);var De=Me.vec3,No=Me.vec2,Et=De.normalize,Ni=De.cross,Ro=De.sub,za=De.add,Ut=De.create,Vt=Ut(),it=Ut(),zt=Ut(),$r=Ut(),Oo=[],Io=[];function qd(e,t){No.copy(Oo,e[0]),No.copy(Io,e[1]);var r=[],i=r[0]=Ut(),a=r[1]=Ut(),n=r[2]=Ut(),o=r[3]=Ut();t.dataToPoint(Oo,i),t.dataToPoint(Io,o),Et(Vt,i),Ro(it,o,i),Et(it,it),Ni(zt,it,Vt),Et(zt,zt),Ni(it,Vt,zt),za(a,Vt,it),Et(a,a),Et(Vt,o),Ro(it,i,o),Et(it,it),Ni(zt,it,Vt),Et(zt,zt),Ni(it,Vt,zt),za(n,Vt,it),Et(n,n),za($r,i,o),Et($r,$r);var s=De.dot(i,$r),l=De.dot($r,a),u=(Math.max(De.len(i),De.len(o))-s)/l*2;return De.scaleAndAdd(a,i,a,u),De.scaleAndAdd(n,o,n,u),r}function Zd(e,t,r){var i=[],a=i[0]=De.create(),n=i[1]=De.create(),o=i[2]=De.create(),s=i[3]=De.create();t.dataToPoint(e[0],a),t.dataToPoint(e[1],s);var l=De.dist(a,s);return De.lerp(n,a,s,.3),De.lerp(o,a,s,.3),De.scaleAndAdd(n,n,r,Math.min(l*.1,10)),De.scaleAndAdd(o,o,r,Math.min(l*.1,10)),i}function Zs(e,t){for(var r=new Float32Array(e.length*3),i=0,a=[],n=0;n<e.length;n++)t.dataToPoint(e[n],a),r[i++]=a[0],r[i++]=a[1],r[i++]=a[2];return r}function Ys(e){var t=[];return e.each(function(r){var i=e.getItemModel(r),a=i.option instanceof Array?i.option:i.getShallow("coords",!0);t.push(a)}),{coordsList:t}}function Yd(e,t){var r=e.getData(),i=e.get("polyline");r.setLayout("lineType",i?"polyline":"cubicBezier");var a=Ys(r);r.each(function(n){var o=a.coordsList[n],s=i?Zs:qd;r.setItemLayout(n,s(o,t))})}function Bo(e,t,r){var i=e.getData(),a=e.get("polyline"),n=Ys(i);i.setLayout("lineType",a?"polyline":"cubicBezier"),i.each(function(o){var s=n.coordsList[o],l=a?Zs(s,t):Zd(s,t,r);i.setItemLayout(o,l)})}function Kd(e,t){e.eachSeriesByType("lines3D",function(r){var i=r.coordinateSystem;i.type==="globe"?Yd(r,i):i.type==="geo3D"?Bo(r,i,[0,1,0]):(i.type==="mapbox3D"||i.type==="maptalks3D")&&Bo(r,i,[0,0,1])})}const $d=ft.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var r=new Tt(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,a,n,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),Qd=`@export ecgl.trail2.vertex
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

@end`;var Fo=Me.vec3;function Jd(e){return e>0?1:-1}y.Shader.import(Qd);const ef=y.Mesh.extend(function(){var e=new y.Material({shader:new y.Shader(y.Shader.source("ecgl.trail2.vertex"),y.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new Xt({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,r){var i=e.hostModel,a=this.geometry,n=i.getModel("effect"),o=n.get("trailWidth")*t.getDevicePixelRatio(),s=n.get("trailLength"),l=i.get("effect.constantSpeed"),u=i.get("effect.period")*1e3,h=l!=null;h?this.material.set("speed",l/1e3):this.material.set("period",u),this.material[h?"define":"undefine"]("vertex","CONSTANT_SPEED");var c=i.get("polyline");a.trailLength=s,this.material.set("trailLength",s),a.resetOffset(),["position","positionPrev","positionNext"].forEach(function(E){a.attributes[E].value=r.attributes[E].value});var f=["dist","distAll","start","offset","color"];f.forEach(function(E){a.attributes[E].init(a.vertexCount)}),a.indices=r.indices;var d=[],p=n.get("trailColor"),m=n.get("trailOpacity"),g=p!=null,_=m!=null;this.updateWorldTransform();var b=this.worldTransform.x.len(),x=this.worldTransform.y.len(),v=this.worldTransform.z.len(),w=0,S=0;e.each(function(E){var M=e.getItemLayout(E),L=_?m:Be(e,E),I=Fe(e,E);L==null&&(L=1),d=y.parseColor(g?p:I,d),d[3]*=L;for(var C=c?r.getPolylineVertexCount(M):r.getCubicCurveVertexCount(M[0],M[1],M[2],M[3]),F=0,U=[],O=[],H=w;H<w+C;H++)a.attributes.position.get(H,U),U[0]*=b,U[1]*=x,U[2]*=v,H>w&&(F+=Fo.dist(U,O)),a.attributes.dist.set(H,F),Fo.copy(O,U);S=Math.max(S,F);for(var q=Math.random()*(h?F:u),H=w;H<w+C;H++)a.attributes.distAll.set(H,F),a.attributes.start.set(H,q),a.attributes.offset.set(H,Jd(r.attributes.offset.get(H))*o/2),a.attributes.color.set(H,d);w+=C}),this.material.set("spotSize",S*.1*s),this.material.set("spotIntensity",n.get("spotIntensity")),a.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});y.Shader.import(na);function tf(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}const rf=pt.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._meshLinesMaterial=new y.Material({shader:y.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new y.Mesh({geometry:new Xt,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new ef},render:function(e,t,r){this.groupGL.add(this._linesMesh);var i=e.coordinateSystem,a=e.getData();if(i&&i.viewGL){var n=i.viewGL;n.add(this.groupGL),this._updateLines(e,t,r);var o=i.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[o]("fragment","SRGB_DECODE"),this._trailMesh.material[o]("fragment","SRGB_DECODE")}var s=this._trailMesh;if(s.stopAnimation(),e.get("effect.show")){this.groupGL.add(s),s.updateData(a,r,this._linesMesh.geometry),s.__time=s.__time||0;var l=3600*1e3;this._curveEffectsAnimator=s.animate("",{loop:!0}).when(l,{__time:l}).during(function(){s.setAnimationTime(s.__time)}).start()}else this.groupGL.remove(s),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?y.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,r){var i=e.getData(),a=e.coordinateSystem,n=this._linesMesh.geometry,o=e.get("polyline");n.expandLine=!0;var s=tf(a);n.segmentScale=s/20;var l="lineStyle.width".split("."),u=r.getDevicePixelRatio();i.each(function(d){var p=i.getItemModel(d),m=p.get(l);m==null&&(m=1),i.setItemVisual(d,"lineWidth",m)}),n.useNativeLine=!1;var h=0,c=0;i.each(function(d){var p=i.getItemLayout(d);o?(h+=n.getPolylineVertexCount(p),c+=n.getPolylineTriangleCount(p)):(h+=n.getCubicCurveVertexCount(p[0],p[1],p[2],p[3]),c+=n.getCubicCurveTriangleCount(p[0],p[1],p[2],p[3]))}),n.setVertexCount(h),n.setTriangleCount(c),n.resetOffset();var f=[];i.each(function(d){var p=i.getItemLayout(d),m=Fe(i,d),g=Be(i,d),_=i.getItemVisual(d,"lineWidth")*u;g==null&&(g=1),f=y.parseColor(m,f),f[3]*=g,o?n.addPolyline(p,f,_):n.addCubicCurve(p[0],p[1],p[2],p[3],f,_)}),n.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function af(e){e.registerChartView(rf),e.registerSeriesModel($d),e.registerLayout(Kd),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}He(af);function Vo(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var Ks=ft.extend({type:"series.polygons3D",getRegionModel:function(e){return this.getData().getItemModel(e)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getItemModel(e),i=r.option instanceof Array?r.option:r.getShallow("coords");r.get("multiPolygon")||(i=[i]);for(var a=[],n=0;n<i.length;n++){for(var o=[],s=1;s<i[n].length;s++)o.push(Vo(t,i[n][s]));a.push({exterior:Vo(t,i[n][0]),interiors:o})}return a},getInitialData:function(e){var t=new Tt(["value"],this);return t.hasItemOption=!1,t.initData(e.data,[],function(r,i,a,n){if(r instanceof Array)return NaN;t.hasItemOption=!0;var o=r.value;if(o!=null)return o instanceof Array?o[n]:o}),t},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}});he(Ks.prototype,zr);const nf=pt.extend({type:"polygons3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL);var a=this._geo3DBuilderList[0];a||(a=new Rr(r),a.extrudeY=i.type!=="mapbox3D"&&i.type!=="maptalks3D",this._geo3DBuilderList[0]=a),this._updateShaderDefines(i,a),a.update(e,t,r),this._geo3DBuilderList.length=1,this.groupGL.add(a.rootNode)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(e,t,r,i){var a=this._geo3DBuilderList[this._currentStep],n=t.coordinateSystem;a||(a=new Rr(i),a.extrudeY=n.type!=="mapbox3D"&&n.type!=="maptalks3D",this._geo3DBuilderList[this._currentStep]=a),a.update(t,r,i,e.start,e.end),this.groupGL.add(a.rootNode),this._updateShaderDefines(n,a),this._currentStep++},_updateShaderDefines:function(e,t){var r=e.viewGL.isLinearSpace()?"define":"undefine";t.rootNode.traverse(function(i){i.material&&(i.material[r]("fragment","SRGB_DECODE"),(e.type==="mapbox3D"||e.type==="maptalks3D")&&(i.material.define("fragment","NORMAL_UP_AXIS",2),i.material.define("fragment","NORMAL_FRONT_AXIS",1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(e){e.dispose()})}});function of(e){e.registerChartView(nf),e.registerSeriesModel(Ks)}He(of);var $s=ft.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return xi(this,e)},getInitialData:function(e,t){var r=e.data;function i(Z){return!(isNaN(Z.min)||isNaN(Z.max)||isNaN(Z.step))}function a(Z){var N=Wo;return Math.max(N(Z.min),N(Z.max),N(Z.step))+1}if(!r)if(e.parametric){var n=e.parametricEquation||{},o=n.u||{},s=n.v||{};["u","v"].forEach(function(Z){i(n[Z])}),["x","y","z"].forEach(function(Z){n[Z]});var l=Math.floor((o.max+o.step-o.min)/o.step),u=Math.floor((s.max+s.step-s.min)/s.step);r=new Float32Array(l*u*5);for(var h=a(o),c=a(s),f=0,d=0;d<u;d++)for(var p=0;p<l;p++){var m=p*o.step+o.min,g=d*s.step+s.min,_=bi(Math.min(m,o.max),h),b=bi(Math.min(g,s.max),c),x=n.x(_,b),v=n.y(_,b),w=n.z(_,b);r[f++]=x,r[f++]=v,r[f++]=w,r[f++]=_,r[f++]=b}}else{var S=e.equation||{},E=S.x||{},M=S.y||{};if(["x","y"].forEach(function(Z){i(S[Z])}),typeof S.z!="function")return;var L=Math.floor((E.max+E.step-E.min)/E.step),I=Math.floor((M.max+M.step-M.min)/M.step);r=new Float32Array(L*I*3);for(var C=a(E),F=a(M),f=0,d=0;d<I;d++)for(var p=0;p<L;p++){var x=p*E.step+E.min,v=d*M.step+M.min,U=bi(Math.min(x,E.max),C),O=bi(Math.min(v,M.max),F),w=S.z(U,O);r[f++]=U,r[f++]=O,r[f++]=w}}var H=["x","y","z"];e.parametric&&H.push("u","v");var q=oa(this,H,r);return q},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});he($s.prototype,zr);var rr=Me.vec3;function sf(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}const lf=pt.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node},render:function(e,t,r){var i=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=i,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var a=e.coordinateSystem,n=e.get("shading"),o=e.getData(),s="ecgl."+n;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==s)&&(this._surfaceMesh.material=y.createMaterial(s,["VERTEX_COLOR","DOUBLE_SIDED"])),y.setMaterialFromModel(n,this._surfaceMesh.material,e,r),a&&a.viewGL){a.viewGL.add(this.groupGL);var l=a.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var u=e.get("parametric"),h=e.get("dataShape");h||(h=this._getDataShape(o,u));var c=e.getModel("wireframe"),f=c.get("lineStyle.width"),d=c.get("show")&&f>0;this._updateSurfaceMesh(this._surfaceMesh,e,h,d);var p=this._surfaceMesh.material;d?(p.define("WIREFRAME_QUAD"),p.set("wireframeLineWidth",f),p.set("wireframeLineColor",y.parseColor(c.get("lineStyle.color")))):p.undefine("WIREFRAME_QUAD"),this._initHandler(e,r),this._updateAnimation(e)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new y.Mesh({geometry:new y.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new y.Material({shader:new y.Shader(y.Shader.source("ecgl.sm.depth.vertex"),y.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,mn),e},_initHandler:function(e,t){var r=e.getData(),i=this._surfaceMesh,a=e.coordinateSystem;function n(s,l){for(var u=1/0,h=-1,c=[],f=0;f<s.length;f++){i.geometry.attributes.position.get(s[f],c);var d=rr.dist(l.array,c);d<u&&(u=d,h=s[f])}return h}i.seriesIndex=e.seriesIndex;var o=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(s){var l=n(s.triangle,s.point);if(l>=0){var u=[];i.geometry.attributes.position.get(l,u);for(var h=a.pointToData(u),c=1/0,f=-1,d=[],p=0;p<r.count();p++){d[0]=r.get("x",p),d[1]=r.get("y",p),d[2]=r.get("z",p);var m=rr.squaredDistance(d,h);m<c&&(f=p,c=m)}f!==o&&t.dispatchAction({type:"grid3DShowAxisPointer",value:h}),o=f,i.dataIndex=f}else i.dataIndex=-1},this),i.on("mouseout",function(s){o=-1,i.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,r,i){var a=e.geometry,n=t.getData(),o=n.getLayout("points"),s=0;n.each(function(Le){n.hasValue(Le)||s++});var l=s||i,u=a.attributes.position,h=a.attributes.normal,c=a.attributes.texcoord0,f=a.attributes.barycentric,d=a.attributes.color,p=r[0],m=r[1],g=t.get("shading"),_=g!=="color";if(l){var b=(p-1)*(m-1)*4;u.init(b),i&&f.init(b)}else u.value=new Float32Array(o);d.init(a.vertexCount),c.init(a.vertexCount);var x=[0,3,1,1,3,2],v=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],w=a.indices=new(a.vertexCount>65535?Uint32Array:Uint16Array)((p-1)*(m-1)*6),S=function(Le,mt,Xe){Xe[1]=Le*m+mt,Xe[0]=Le*m+mt+1,Xe[3]=(Le+1)*m+mt+1,Xe[2]=(Le+1)*m+mt},E=!1;if(l){var M=[],L=[],I=0;_?h.init(a.vertexCount):h.value=null;for(var C=[[],[],[]],F=[],U=[],O=rr.create(),H=function(Le,mt,Xe){var sa=mt*3;return Xe[0]=Le[sa],Xe[1]=Le[sa+1],Xe[2]=Le[sa+2],Xe},q=new Float32Array(o.length),Z=new Float32Array(o.length/3*4),N=0;N<n.count();N++)if(n.hasValue(N)){var B=y.parseColor(Fe(n,N)),Y=Be(n,N);Y!=null&&(B[3]*=Y),B[3]<.99&&(E=!0);for(var j=0;j<4;j++)Z[N*4+j]=B[j]}for(var te=[1e7,1e7,1e7],N=0;N<p-1;N++)for(var Q=0;Q<m-1;Q++){var ve=N*(m-1)+Q,ee=ve*4;S(N,Q,M);for(var Ee=!1,j=0;j<4;j++)H(o,M[j],L),sf(L)&&(Ee=!0);for(var j=0;j<4;j++)Ee?u.set(ee+j,te):(H(o,M[j],L),u.set(ee+j,L)),i&&f.set(ee+j,v[j]);for(var j=0;j<6;j++)w[I++]=x[j]+ee;if(_&&!Ee)for(var j=0;j<2;j++){for(var tt=j*3,de=0;de<3;de++){var ze=M[x[tt]+de];H(o,ze,C[de])}rr.sub(F,C[0],C[1]),rr.sub(U,C[1],C[2]),rr.cross(O,F,U);for(var de=0;de<3;de++){var rt=M[x[tt]+de]*3;q[rt]=q[rt]+O[0],q[rt+1]=q[rt+1]+O[1],q[rt+2]=q[rt+2]+O[2]}}}if(_)for(var N=0;N<q.length/3;N++)H(q,N,O),rr.normalize(O,O),q[N*3]=O[0],q[N*3+1]=O[1],q[N*3+2]=O[2];for(var B=[],Re=[],N=0;N<p-1;N++)for(var Q=0;Q<m-1;Q++){var ve=N*(m-1)+Q,ee=ve*4;S(N,Q,M);for(var j=0;j<4;j++){for(var de=0;de<4;de++)B[de]=Z[M[j]*4+de];d.set(ee+j,B),_&&(H(q,M[j],O),h.set(ee+j,O));var ze=M[j];Re[0]=ze%m/(m-1),Re[1]=Math.floor(ze/m)/(p-1),c.set(ee+j,Re)}ve++}}else{for(var Re=[],N=0;N<n.count();N++){Re[0]=N%m/(m-1),Re[1]=Math.floor(N/m)/(p-1);var B=y.parseColor(Fe(n,N)),Y=Be(n,N);Y!=null&&(B[3]*=Y),B[3]<.99&&(E=!0),d.set(N,B),c.set(N,Re)}for(var M=[],Hr=0,N=0;N<p-1;N++)for(var Q=0;Q<m-1;Q++){S(N,Q,M);for(var j=0;j<6;j++)w[Hr++]=M[x[j]]}_?a.generateVertexNormals():h.value=null}e.material.get("normalMap")&&a.generateTangents(),a.updateBoundingBox(),a.dirty(),e.material.transparent=E,e.material.depthMask=!E},_getDataShape:function(e,t){for(var r=-1/0,i=0,a=0,n=!1,o=t?"u":"x",s=e.count(),l=0;l<s;l++){var u=e.get(o,l);u<r&&(a=0,i++),r=u,a++}if((!i||a===1)&&(n=!0),!n)return[i+1,a];for(var h=Math.floor(Math.sqrt(s));h>0;){if(Math.floor(s/h)===s/h)return[h,s/h];h--}return h=Math.floor(Math.sqrt(s)),[h,h]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function uf(e){e.registerChartView(lf),e.registerSeriesModel($s),e.registerLayout(function(t,r){t.eachSeriesByType("surface",function(i){var a=i.coordinateSystem;!a||a.type;var n=i.getData(),o=new Float32Array(3*n.count()),s=[NaN,NaN,NaN];if(a&&a.type==="cartesian3D"){var l=a.dimensions,u=l.map(function(h){return i.coordDimToDataDim(h)[0]});n.each(u,function(h,c,f,d){var p;n.hasValue(d)?p=a.dataToPoint([h,c,f]):p=s,o[d*3]=p[0],o[d*3+1]=p[1],o[d*3+2]=p[2]})}n.setLayout("points",o)})})}He(uf);function zo(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var Ur=ft.extend({type:"series.map3D",layoutMode:"box",coordinateSystem:null,visualStyleAccessPath:"itemStyle",optionUpdated:function(e){var t=this.get("coordinateSystem");t==null||t==="geo3D"||(this.get("groundPlane.show")&&(this.option.groundPlane.show=!1),this._geo=null)},getInitialData:function(e){e.data=this.getFilledRegions(e.data,e.map);var t=mi(e.data,{coordDimensions:["value"]}),r=new Tt(t,this);r.initData(e.data);var i={};return r.each(function(a){var n=r.getName(a),o=r.getItemModel(a);i[n]=o}),this._regionModelMap=i,r},formatTooltip:function(e){return xi(this,e)},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Mr(null,this)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getName(e);if(t.transform){var i=t.getRegion(r);return i?i.geometries:[]}else{this._geo||(this._geo=gn.createGeo3D(this));for(var i=this._geo.getRegion(r),a=[],n=0;n<i.geometries.length;n++){var o=i.geometries[n],s=[],l=zo(t,o.exterior);if(s&&s.length)for(var u=0;u<o.interiors.length;u++)s.push(zo(t,s[u]));a.push({interiors:s,exterior:l})}return a}},getFormattedLabel:function(e,t){var r=Zt.getFormattedLabel(this,e,t);return r==null&&(r=this.getData().getName(e)),r},defaultOption:{coordinateSystem:"geo3D",data:null}});he(Ur.prototype,Cs);he(Ur.prototype,ra);he(Ur.prototype,Br);he(Ur.prototype,Fr);he(Ur.prototype,zr);const hf=pt.extend({type:"map3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Rr(t),this.groupGL=new y.Node},render:function(e,t,r){var i=e.coordinateSystem;if(!(!i||!i.viewGL)){if(this.groupGL.add(this._geo3DBuilder.rootNode),i.viewGL.add(this.groupGL),i.type==="geo3D"){this._sceneHelper||(this._sceneHelper=new Ht,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._control;a||(a=this._control=new _i({zr:r.getZr()}),this._control.init());var n=e.getModel("viewControl");a.setViewGL(i.viewGL),a.setFromViewControlModel(n,0),a.off("update"),a.on("update",function(){r.dispatchAction({type:"map3DChangeCamera",alpha:a.getAlpha(),beta:a.getBeta(),distance:a.getDistance(),from:this.uid,map3DId:e.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&(this._control.dispose(),this._control=null),this._sceneHelper&&(this._sceneHelper.dispose(),this._sceneHelper=null),e.getData().getLayout("geo3D"),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")})}},afterRender:function(e,t,r,i){var a=i.renderer,n=e.coordinateSystem;n&&n.type==="geo3D"&&(this._sceneHelper.updateAmbientCubemap(a,e,r),this._sceneHelper.updateSkybox(a,e,r))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});function cf(e){Fs(e),e.registerChartView(hf),e.registerSeriesModel(Ur),e.registerAction({type:"map3DChangeCamera",event:"map3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"series",subType:"map3D",query:t},function(i){i.setView(t)})})}He(cf);const df=ft.extend({type:"series.scatterGL",dependencies:["grid","polar","geo","singleAxis"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(){return Wl(this)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:"circle",symbolSize:10,zoomScale:0,blendMode:"source-over",itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});function Nt(e){this.viewGL=e}Nt.prototype.reset=function(e,t){this._updateCamera(t.getWidth(),t.getHeight(),t.getDevicePixelRatio()),this._viewTransform=Ul(),this.updateTransform(e,t)};Nt.prototype.updateTransform=function(e,t){var r=e.coordinateSystem;r.getRoamTransform&&(Hl(this._viewTransform,r.getRoamTransform()),this._setCameraTransform(this._viewTransform),t.getZr().refresh())};Nt.prototype.dataToPoint=function(e,t,r){r=e.dataToPoint(t,null,r);var i=this._viewTransform;i&&Zo(r,r,i)};Nt.prototype.removeTransformInPoint=function(e){return this._viewTransform&&Zo(e,e,this._viewTransform),e};Nt.prototype.getZoom=function(){if(this._viewTransform){var e=this._viewTransform;return 1/Math.max(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]))}return 1};Nt.prototype._setCameraTransform=function(e){var t=this.viewGL.camera;t.position.set(e[4],e[5],0),t.scale.set(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]),1)};Nt.prototype._updateCamera=function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.top=0,i.bottom=t,i.right=e,i.near=0,i.far=100};const ff=pt.extend({type:"scatterGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new ce("orthographic"),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new Nt(this.viewGL)},render:function(e,t,r){if(this.groupGL.removeAll(),this._glViewHelper.reset(e,r),!!e.getData().count()){var i=this._pointsBuilderList[0];i||(i=this._pointsBuilderList[0]=new hr(!0,r)),this._pointsBuilderList.length=1,this.groupGL.add(i.rootNode),this._removeTransformInPoints(e.getData().getLayout("points")),i.update(e,t,r),this.viewGL.setPostEffect(e.getModel("postEffect"),r)}},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var a=this._pointsBuilderList[this._currentStep];a||(a=new hr(!0,i),this._pointsBuilderList[this._currentStep]=a),this.groupGL.add(a.rootNode),this._removeTransformInPoints(t.getData().getLayout("points")),a.setSizeScale(this._sizeScale),a.update(t,r,i,e.start,e.end),i.getZr().refresh(),this._currentStep++}},updateTransform:function(e,t,r){if(e.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(e,r);var i=this._glViewHelper.getZoom(),a=Math.max((e.get("zoomScale")||0)*(i-1)+1,0);this._sizeScale=a,this._pointsBuilderList.forEach(function(n){n.setSizeScale(a)})}},_removeTransformInPoints:function(e){if(e)for(var t=[],r=0;r<e.length;r+=2)t[0]=e[r],t[1]=e[r+1],this._glViewHelper.removeTransformInPoint(t),e[r]=t[0],e[r+1]=t[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(e){e.dispose()})},remove:function(){this.groupGL.removeAll()}});function pf(e){e.registerChartView(ff),e.registerSeriesModel(df),e.registerLayout({seriesType:"scatterGL",reset:function(t){var r=t.coordinateSystem,i=t.getData(),a;if(r){var n=r.dimensions.map(function(s){return i.mapDimension(s)}).slice(0,2),o=[];n.length===1?a=function(s){for(var l=new Float32Array((s.end-s.start)*2),u=s.start;u<s.end;u++){var h=(u-s.start)*2,c=i.get(n[0],u),f=r.dataToPoint(c);l[h]=f[0],l[h+1]=f[1]}i.setLayout("points",l)}:n.length===2&&(a=function(s){for(var l=new Float32Array((s.end-s.start)*2),u=s.start;u<s.end;u++){var h=(u-s.start)*2,c=i.get(n[0],u),f=i.get(n[1],u);o[0]=c,o[1]=f,o=r.dataToPoint(o),l[h]=o[0],l[h+1]=o[1]}i.setLayout("points",l)})}return{progress:a}}})}He(pf);function mf(e,t,r,i,a){for(var n=new Dl(i),o=0;o<e.length;o++)n.addNode(re.firstNotNull(e[o].id,e[o].name,o),o);for(var s=[],l=[],u=0,o=0;o<t.length;o++){var h=t[o],c=h.source,f=h.target;n.addEdge(c,f,u)&&(l.push(h),s.push(re.firstNotNull(h.id,c+" > "+f)),u++)}var d,p=mi(e,{coordDimensions:["value"]});d=new Tt(p,r),d.initData(e);var m=new Tt(["value"],r);return m.initData(l,s),a&&a(d,m),Pl({mainData:d,struct:n,structAttr:"graph",datas:{node:d,edge:m},datasAttr:{node:"data",edge:"edgeData"}}),n.update(),n}var ei=ft.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(e){ei.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){ei.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(e,t,r,i){var a=Zt.getFormattedLabel(this,e,t,r,i);if(a==null){var n=this.getData(),o=n.dimensions[n.dimensions.length-1];a=n.get(o,e)}return a},getInitialData:function(e,t){var r=e.edges||e.links||[],i=e.data||e.nodes||[],a=this;if(i&&r)return mf(i,r,this,!0,n).data;function n(o,s){o.wrapMethod("getItemModel",function(c){const f=a._categoriesModels,d=c.getShallow("category"),p=f[d];return p&&(p.parentModel=c.parentModel,c.parentModel=p),c});const l=t.getModel([]).getModel;function u(c,f){const d=l.call(this,c,f);return d.resolveParentPath=h,d}s.wrapMethod("getItemModel",function(c){return c.resolveParentPath=h,c.getModel=u,c});function h(c){if(c&&(c[0]==="label"||c[1]==="label")){const f=c.slice();return c[0]==="label"?f[0]="edgeLabel":c[1]==="label"&&(f[1]="edgeLabel"),f}return c}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,t,r){if(r==="edge"){var i=this.getData(),a=this.getDataParams(e,r),n=i.graph.getEdgeByIndex(e),o=i.getName(n.node1.dataIndex),s=i.getName(n.node2.dataIndex),l=[];return o!=null&&l.push(o),s!=null&&l.push(s),l=br(l.join(" > ")),a.value&&(l+=" : "+br(a.value)),l}else return ei.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(r){return r.value!=null?r:Object.assign({value:0},r)}),t=new Tt(["value"],this);t.initData(e),this._categoriesData=t,this._categoriesModels=t.mapArray(function(r){return t.getItemModel(r,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var t=0;t<e.length/2;t++){var r=e[t*2],i=e[t*2+1],a=this.getData().getRawDataItem(t);a.x=r,a.y=i}},isAnimationEnabled:function(){return ei.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}}),Ce=Me.vec2,Go=[[0,0],[1,1]],Tn=ie.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new ie.Attribute("position","float",2,"POSITION"),normal:new ie.Attribute("normal","float",2),offset:new ie.Attribute("offset","float",1),color:new ie.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.offset.init(e),t.normal.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var a=Ce.dist(e,t)+Ce.dist(r,t)+Ce.dist(i,r),n=1/(a+1)*this.segmentScale;return n},getCubicCurveVertexCount:function(e,t,r,i){var a=this._getCubicCurveApproxStep(e,t,r,i),n=Math.ceil(1/a);return this.useNativeLine?n*2:n*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var a=this._getCubicCurveApproxStep(e,t,r,i),n=Math.ceil(1/a);return this.useNativeLine?0:n*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Go)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Go)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?0:(t-1)*2},addCubicCurve:function(e,t,r,i,a,n){n==null&&(n=1);for(var o=e[0],s=e[1],l=t[0],u=t[1],h=r[0],c=r[1],f=i[0],d=i[1],p=this._getCubicCurveApproxStep(e,t,r,i),m=p*p,g=m*p,_=3*p,b=3*m,x=6*m,v=6*g,w=o-l*2+h,S=s-u*2+c,E=(l-h)*3-o+f,M=(u-c)*3-s+d,L=o,I=s,C=(l-o)*_+w*b+E*g,F=(u-s)*_+S*b+M*g,U=w*x+E*v,O=S*x+M*v,H=E*v,q=M*v,Z=0,j=0,N=Math.ceil(1/p),B=new Float32Array((N+1)*3),B=[],Y=0,j=0;j<N+1;j++)B[Y++]=L,B[Y++]=I,L+=C,I+=F,C+=U,F+=O,U+=H,O+=q,Z+=p,Z>1&&(L=C>0?Math.min(L,f):Math.max(L,f),I=F>0?Math.min(I,d):Math.max(I,d));this.addPolyline(B,a,n)},addLine:function(e,t,r,i){this.addPolyline([e,t],r,i)},addPolyline:function(){var e=Ce.create(),t=Ce.create(),r=Ce.create(),i=Ce.create(),a=[],n=[],o=[];return function(s,l,u,h,c){if(s.length){var f=typeof s[0]!="number";if(c==null&&(c=f?s.length:s.length/2),!(c<2)){h==null&&(h=0),u==null&&(u=1),this._itemVertexOffsets.push(this._vertexOffset);for(var d=f?typeof l[0]!="number":l.length/4===c,p=this.attributes.position,m=this.attributes.color,g=this.attributes.offset,_=this.attributes.normal,b=this.indices,x=this._vertexOffset,v,w=0;w<c;w++){if(f)a=s[w+h],d?v=l[w+h]:v=l;else{var S=w*2+h;if(a=a||[],a[0]=s[S],a[1]=s[S+1],d){var E=w*4+h;v=v||[],v[0]=l[E],v[1]=l[E+1],v[2]=l[E+2],v[3]=l[E+3]}else v=l}if(this.useNativeLine)w>1&&(p.copy(x,x-1),m.copy(x,x-1),x++);else{var M;if(w<c-1){if(f)Ce.copy(n,s[w+1]);else{var S=(w+1)*2+h;n=n||[],n[0]=s[S],n[1]=s[S+1]}if(w>0){Ce.sub(e,a,o),Ce.sub(t,n,a),Ce.normalize(e,e),Ce.normalize(t,t),Ce.add(i,e,t),Ce.normalize(i,i);var L=u/2*Math.min(1/Ce.dot(e,i),2);r[0]=-i[1],r[1]=i[0],M=L}else Ce.sub(e,n,a),Ce.normalize(e,e),r[0]=-e[1],r[1]=e[0],M=u/2}else Ce.sub(e,a,o),Ce.normalize(e,e),r[0]=-e[1],r[1]=e[0],M=u/2;_.set(x,r),_.set(x+1,r),g.set(x,M),g.set(x+1,-M),Ce.copy(o,a),p.set(x,a),p.set(x+1,a),m.set(x,v),m.set(x+1,v),x+=2}if(this.useNativeLine)m.set(x,v),p.set(x,a),x++;else if(w>0){var I=this._faceOffset*3,b=this.indices;b[I]=x-4,b[I+1]=x-3,b[I+2]=x-2,b[I+3]=x-3,b[I+4]=x-1,b[I+5]=x-2,this._faceOffset+=2}}this._vertexOffset=x}}}}(),setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,a=r;a<i;a++)this.attributes.color.set(a,t);this.dirty("color")}});kt(Tn.prototype,vi);const gf=`@export ecgl.forceAtlas2.updateNodeRepulsion

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
@end`;y.Shader.import(gf);var Ga={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function Ne(e){var t={type:y.Texture.FLOAT,minFilter:y.Texture.NEAREST,magFilter:y.Texture.NEAREST};this._positionSourceTex=new y.Texture2D(t),this._positionSourceTex.flipY=!1,this._positionTex=new y.Texture2D(t),this._positionPrevTex=new y.Texture2D(t),this._forceTex=new y.Texture2D(t),this._forcePrevTex=new y.Texture2D(t),this._weightedSumTex=new y.Texture2D(t),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new y.Texture2D(t),this._globalSpeedPrevTex=new y.Texture2D(t),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new Ae({fragment:y.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new Ae({fragment:y.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new Ae({fragment:y.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new Ae({fragment:y.Shader.source("clay.compositor.output")});var r=function(i){i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ONE)};this._edgeForceMesh=new y.Mesh({geometry:new y.Geometry({attributes:{node1:new y.Geometry.Attribute("node1","float",2),node2:new y.Geometry.Attribute("node2","float",2),weight:new y.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new y.Material({transparent:!0,shader:y.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:r,depthMask:!1,depthText:!1}),mode:y.Mesh.POINTS}),this._weightedSumMesh=new y.Mesh({geometry:new y.Geometry({attributes:{node:new y.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new y.Material({transparent:!0,shader:y.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:r,depthMask:!1,depthText:!1}),mode:y.Mesh.POINTS}),this._framebuffer=new Se({depthBuffer:!1}),this._dummyCamera=new y.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}Ne.prototype.updateOption=function(e){for(var t in Ga)this[t]=Ga[t];var r=this._nodes.length;if(r>5e4?this.jitterTolerence=10:r>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,r>100?this.scaling=2:this.scaling=10,e)for(var t in Ga)e[t]!=null&&(this[t]=e[t]);if(this.repulsionByDegree)for(var i=this._positionSourceTex.pixels,a=0;a<this._nodes.length;a++)i[a*4+2]=(this._nodes[a].degree||0)+1};Ne.prototype._updateGravityCenter=function(e){var t=this._nodes,r=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var i=[1/0,1/0],a=[-1/0,-1/0],n=0;n<t.length;n++)i[0]=Math.min(t[n].x,i[0]),i[1]=Math.min(t[n].y,i[1]),a[0]=Math.max(t[n].x,a[0]),a[1]=Math.max(t[n].y,a[1]);this._gravityCenter=[(i[0]+a[0])*.5,(i[1]+a[1])*.5]}for(var n=0;n<r.length;n++){var o=r[n].node1,s=r[n].node2;t[o].degree=(t[o].degree||0)+1,t[s].degree=(t[s].degree||0)+1}};Ne.prototype.initData=function(e,t){this._nodes=e,this._edges=t,this._updateGravityCenter();var r=Math.ceil(Math.sqrt(e.length)),i=r,a=new Float32Array(r*i*4);this._resize(r,i);for(var n=0,o=0;o<e.length;o++){var s=e[o];a[n++]=s.x||0,a[n++]=s.y||0,a[n++]=s.mass||1,a[n++]=s.size||1}this._positionSourceTex.pixels=a;var l=this._edgeForceMesh.geometry,u=t.length;l.attributes.node1.init(u*2),l.attributes.node2.init(u*2),l.attributes.weight.init(u*2);for(var h=[],o=0;o<t.length;o++){var c=l.attributes,f=t[o].weight;f==null&&(f=1),c.node1.set(o,this.getNodeUV(t[o].node1,h)),c.node2.set(o,this.getNodeUV(t[o].node2,h)),c.weight.set(o,f),c.node1.set(o+u,this.getNodeUV(t[o].node2,h)),c.node2.set(o+u,this.getNodeUV(t[o].node1,h)),c.weight.set(o+u,f)}var d=this._weightedSumMesh.geometry;d.attributes.node.init(e.length);for(var o=0;o<e.length;o++)d.attributes.node.set(o,this.getNodeUV(o,h));l.dirty(),d.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",e.length),this._nodeRepulsionPass.material.setUniform("textureSize",[r,i]),this._inited=!1,this._frame=0};Ne.prototype.getNodes=function(){return this._nodes};Ne.prototype.getEdges=function(){return this._edges};Ne.prototype.step=function(e){this._inited||(this._initFromSource(e),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(e);var t=this._nodeRepulsionPass;t.setUniform("strongGravityMode",this.strongGravityMode),t.setUniform("gravity",this.gravity),t.setUniform("gravityCenter",this._gravityCenter),t.setUniform("scaling",this.scaling),t.setUniform("preventOverlap",this.preventOverlap),t.setUniform("positionTex",this._positionPrevTex),t.render(e);var r=this._edgeForceMesh;r.material.set("linLogMode",this.linLogMode),r.material.set("edgeWeightInfluence",this.edgeWeightInfluence),r.material.set("preventOverlap",this.preventOverlap),r.material.set("positionTex",this._positionPrevTex),e.gl.enable(e.gl.BLEND),e.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT),e.gl.enable(e.gl.BLEND);var i=this._weightedSumMesh;i.material.set("positionTex",this._positionPrevTex),i.material.set("forceTex",this._forceTex),i.material.set("forcePrevTex",this._forcePrevTex),e.renderPass([i],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var a=this._globalSpeedPass;a.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),a.setUniform("weightedSumTex",this._weightedSumTex),a.setUniform("jitterTolerence",this.jitterTolerence),e.gl.disable(e.gl.BLEND),a.render(e);var n=this._positionPass;this._framebuffer.attach(this._positionTex),n.setUniform("globalSpeedTex",this._globalSpeedTex),n.setUniform("positionTex",this._positionPrevTex),n.setUniform("forceTex",this._forceTex),n.setUniform("forcePrevTex",this._forcePrevTex),n.render(e),this._framebuffer.unbind(e),this._swapTexture()};Ne.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1);for(var i=0;i<t;i++)this.step(e);r&&r()};Ne.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex};Ne.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1)||0,t};Ne.prototype.getNodePosition=function(e,t){var r=this._positionArr,i=this._positionTex.width,a=this._positionTex.height,n=i*a;(!r||r.length!==n*4)&&(r=this._positionArr=new Float32Array(n*4)),this._framebuffer.bind(e),this._framebuffer.attach(this._positionPrevTex),e.gl.readPixels(0,0,i,a,e.gl.RGBA,e.gl.FLOAT,r),this._framebuffer.unbind(e),t||(t=new Float32Array(this._nodes.length*2));for(var o=0;o<this._nodes.length;o++)t[o*2]=r[o*4],t[o*2+1]=r[o*4+1];return t};Ne.prototype.getTextureData=function(e,t){var r=this["_"+t+"Tex"],i=r.width,a=r.height;this._framebuffer.bind(e),this._framebuffer.attach(r);var n=new Float32Array(i*a*4);return e.gl.readPixels(0,0,i,a,e.gl.RGBA,e.gl.FLOAT,n),this._framebuffer.unbind(e),n};Ne.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}};Ne.prototype.isFinished=function(e){return this._frame>e};Ne.prototype._swapTexture=function(){var e=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=e;var e=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=e;var e=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=e};Ne.prototype._initFromSource=function(e){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(e),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(e),e.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(e)};Ne.prototype._resize=function(e,t){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(r){this[r].width=e,this[r].height=t,this[r].dirty()},this)};Ne.prototype.dispose=function(e){this._framebuffer.dispose(e),this._copyPass.dispose(e),this._nodeRepulsionPass.dispose(e),this._positionPass.dispose(e),this._globalSpeedPass.dispose(e),this._edgeForceMesh.geometry.dispose(e),this._weightedSumMesh.geometry.dispose(e),this._positionSourceTex.dispose(e),this._positionTex.dispose(e),this._positionPrevTex.dispose(e),this._forceTex.dispose(e),this._forcePrevTex.dispose(e),this._weightedSumTex.dispose(e),this._globalSpeedTex.dispose(e),this._globalSpeedPrevTex.dispose(e)};function _f(){var e={create:function(){return new Float32Array(2)},dist:function(l,u){var h=u[0]-l[0],c=u[1]-l[1];return Math.sqrt(h*h+c*c)},len:function(l){var u=l[0],h=l[1];return Math.sqrt(u*u+h*h)},scaleAndAdd:function(l,u,h,c){return l[0]=u[0]+h[0]*c,l[1]=u[1]+h[1]*c,l},scale:function(l,u,h){return l[0]=u[0]*h,l[1]=u[1]*h,l},add:function(l,u,h){return l[0]=u[0]+h[0],l[1]=u[1]+h[1],l},sub:function(l,u,h){return l[0]=u[0]-h[0],l[1]=u[1]-h[1],l},normalize:function(l,u){var h=u[0],c=u[1],f=h*h+c*c;return f>0&&(f=1/Math.sqrt(f),l[0]=u[0]*f,l[1]=u[1]*f),l},negate:function(l,u){return l[0]=-u[0],l[1]=-u[1],l},copy:function(l,u){return l[0]=u[0],l[1]=u[1],l},set:function(l,u,h){return l[0]=u,l[1]=h,l}};function t(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var r=t.prototype;r.beforeUpdate=function(){for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},r.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].afterUpdate()},r.addNode=function(l){if(this.nSubRegions===0)if(this.node==null){this.node=l;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(l),this._updateCenterOfMass(l)},r.findSubRegion=function(l,u){for(var h=0;h<this.nSubRegions;h++){var c=this.subRegions[h];if(c.contain(l,u))return c}},r.contain=function(l,u){return this.bbox[0]<=l&&this.bbox[2]>=l&&this.bbox[1]<=u&&this.bbox[3]>=u},r.setBBox=function(l,u,h,c){this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=h,this.bbox[3]=c,this.size=(h-l+c-u)/2},r._newSubRegion=function(){var l=this.subRegions[this.nSubRegions];return l||(l=new t,this.subRegions[this.nSubRegions]=l),this.nSubRegions++,l},r._addNodeToSubRegion=function(l){var u=this.findSubRegion(l.position[0],l.position[1]),h=this.bbox;if(!u){var c=(h[0]+h[2])/2,f=(h[1]+h[3])/2,d=(h[2]-h[0])/2,p=(h[3]-h[1])/2,m=l.position[0]>=c?1:0,g=l.position[1]>=f?1:0,u=this._newSubRegion();u.setBBox(m*d+h[0],g*p+h[1],(m+1)*d+h[0],(g+1)*p+h[1])}u.addNode(l)},r._updateCenterOfMass=function(l){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var u=this.centerOfMass[0]*this.mass,h=this.centerOfMass[1]*this.mass;u+=l.position[0]*l.mass,h+=l.position[1]*l.mass,this.mass+=l.mass,this.centerOfMass[0]=u/this.mass,this.centerOfMass[1]=h/this.mass};function i(){this.position=new Float32Array(2),this.force=e.create(),this.forcePrev=e.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function a(l,u){this.source=l,this.target=u,this.weight=1}function n(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new t,this.rootRegion.centerOfMass=e.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var o=n.prototype;o.initNodes=function(l,u,h){var c=u.length;this.nodes.length=0;for(var f=typeof h<"u",d=0;d<c;d++){var p=new i;p.position[0]=l[d*2],p.position[1]=l[d*2+1],p.mass=u[d],f&&(p.size=h[d]),this.nodes.push(p)}this._massArr=u,this._swingingArr=new Float32Array(c),f&&(this._sizeArr=h)},o.initEdges=function(l,u){var h=l.length/2;this.edges.length=0;for(var c=0;c<h;c++){var f=l[c*2],d=l[c*2+1],p=this.nodes[f],m=this.nodes[d];if(!p||!m){console.error("Node not exists, try initNodes before initEdges");return}p.outDegree++,m.inDegree++;var g=new a(p,m);u&&(g.weight=u[c]),this.edges.push(g)}},o.updateSettings=function(){if(this.repulsionByDegree)for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=u.inDegree+u.outDegree+1}else for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=this._massArr[l]}},o.update=function(){var l=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var u=0;u<l;u++)this.rootRegion.addNode(this.nodes[u]);this.rootRegion.afterUpdate()}for(var u=0;u<l;u++){var h=this.nodes[u];e.copy(h.forcePrev,h.force),e.set(h.force,0,0)}for(var u=0;u<l;u++){var c=this.nodes[u];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,c);else for(var f=u+1;f<l;f++){var d=this.nodes[f];this.applyNodeToNodeRepulsion(c,d,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(c):this.applyNodeGravity(c))}for(var u=0;u<this.edges.length;u++)this.applyEdgeAttraction(this.edges[u]);for(var p=0,m=0,g=e.create(),u=0;u<l;u++){var h=this.nodes[u],_=e.dist(h.force,h.forcePrev);p+=_*h.mass,e.add(g,h.force,h.forcePrev);var b=e.len(g)*.5;m+=b*h.mass,this._swingingArr[u]=_}var x=this.jitterTolerence*this.jitterTolerence*m/p;this._globalSpeed>0&&(x=Math.min(x/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=x;for(var u=0;u<l;u++){var h=this.nodes[u],_=this._swingingArr[u],v=.1*x/(1+x*Math.sqrt(_)),w=e.len(h.force);w>0&&(v=Math.min(w*v,10)/w,e.scaleAndAdd(h.position,h.position,h.force,v))}},o.applyRegionToNodeRepulsion=function(){var l=e.create();return function(u,h){if(u.node)this.applyNodeToNodeRepulsion(u.node,h,!0);else{e.sub(l,h.position,u.centerOfMass);var c=l[0]*l[0]+l[1]*l[1];if(c>this.barnesHutTheta*u.size*u.size){var f=this.scaling*h.mass*u.mass/c;e.scaleAndAdd(h.force,h.force,l,f)}else for(var d=0;d<u.nSubRegions;d++)this.applyRegionToNodeRepulsion(u.subRegions[d],h)}}}(),o.applyNodeToNodeRepulsion=function(){var l=e.create();return function(u,h,c){if(u!=h){e.sub(l,u.position,h.position);var f=l[0]*l[0]+l[1]*l[1];if(f!==0){var d;if(this.preventOverlap){var p=Math.sqrt(f);if(p=p-u.size-h.size,p>0)d=this.scaling*u.mass*h.mass/(p*p);else if(p<0)d=this.scaling*100*u.mass*h.mass;else return}else d=this.scaling*u.mass*h.mass/f;e.scaleAndAdd(u.force,u.force,l,d),e.scaleAndAdd(h.force,h.force,l,-d)}}}}(),o.applyEdgeAttraction=function(){var l=e.create();return function(u){var h=u.source,c=u.target;e.sub(l,h.position,c.position);var f=e.len(l),d;this.edgeWeightInfluence===0?d=1:this.edgeWeightInfluence===1?d=u.weight:d=Math.pow(u.weight,this.edgeWeightInfluence);var p;this.preventOverlap&&(f=f-h.size-c.size,f<=0)||(this.linLogMode?p=-d*Math.log(f+1)/(f+1):p=-d,e.scaleAndAdd(h.force,h.force,l,p),e.scaleAndAdd(c.force,c.force,l,-p))}}(),o.applyNodeGravity=function(){var l=e.create();return function(u){e.sub(l,this.gravityCenter,u.position);var h=e.len(l);e.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass/(h+1))}}(),o.applyNodeStrongGravity=function(){var l=e.create();return function(u){e.sub(l,this.gravityCenter,u.position),e.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass)}}(),o.updateBBox=function(){for(var l=1/0,u=1/0,h=-1/0,c=-1/0,f=0;f<this.nodes.length;f++){var d=this.nodes[f].position;l=Math.min(l,d[0]),u=Math.min(u,d[1]),h=Math.max(h,d[0]),c=Math.max(c,d[1])}this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=h,this.bbox[3]=c},o.getGlobalSpeed=function(){return this._globalSpeed};var s=null;self.onmessage=function(l){switch(l.data.cmd){case"init":s=new n,s.initNodes(l.data.nodesPosition,l.data.nodesMass,l.data.nodesSize),s.initEdges(l.data.edges,l.data.edgesWeight);break;case"updateConfig":if(s)for(var u in l.data.config)s[u]=l.data.config[u];break;case"update":var h=l.data.steps;if(s){for(var c=0;c<h;c++)s.update();for(var f=s.nodes.length,d=new Float32Array(f*2),c=0;c<f;c++){var p=s.nodes[c];d[c*2]=p.position[0],d[c*2+1]=p.position[1]}self.postMessage({buffer:d.buffer,globalSpeed:s.getGlobalSpeed()},[d.buffer])}else{var m=new Float32Array;self.postMessage({buffer:m.buffer,globalSpeed:s.getGlobalSpeed()},[m.buffer])}break}}}var ti=_f.toString();ti=ti.slice(ti.indexOf("{")+1,ti.lastIndexOf("}"));var ii={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},et=function(e){for(var t in ii)this[t]=ii[t];if(e)for(var t in e)this[t]=e[t];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new J({type:z.FLOAT,flipY:!1,minFilter:z.NEAREST,magFilter:z.NEAREST})};et.prototype.initData=function(e,t){var r=new Blob([ti]),i=window.URL.createObjectURL(r);this._worker=new Worker(i),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=e,this._edges=t,this._frame=0;for(var a=e.length,n=t.length,o=new Float32Array(a*2),s=new Float32Array(a),l=new Float32Array(a),u=new Float32Array(n*2),h=new Float32Array(n),c=0;c<e.length;c++){var f=e[c];o[c*2]=f.x,o[c*2+1]=f.y,s[c]=f.mass==null?1:f.mass,l[c]=f.size==null?1:f.size}for(var c=0;c<t.length;c++){var d=t[c],p=d.node1,m=d.node2;u[c*2]=p,u[c*2+1]=m,h[c]=d.weight==null?1:d.weight}var g=Math.ceil(Math.sqrt(e.length)),_=g,b=new Float32Array(g*_*4),x=this._positionTex;x.width=g,x.height=_,x.pixels=b,this._worker.postMessage({cmd:"init",nodesPosition:o,nodesMass:s,nodesSize:l,edges:u,edgesWeight:h}),this._globalSpeed=1/0};et.prototype.updateOption=function(e){var t={};for(var r in ii)t[r]=ii[r];var i=this._nodes,a=this._edges,n=i.length;if(n>5e4?t.jitterTolerence=10:n>5e3?t.jitterTolerence=1:t.jitterTolerence=.1,n>100?t.scaling=2:t.scaling=10,n>1e3?t.barnesHutOptimize=!0:t.barnesHutOptimize=!1,e)for(var r in ii)e[r]!=null&&(t[r]=e[r]);if(!t.gravityCenter){for(var o=[1/0,1/0],s=[-1/0,-1/0],l=0;l<i.length;l++)o[0]=Math.min(i[l].x,o[0]),o[1]=Math.min(i[l].y,o[1]),s[0]=Math.max(i[l].x,s[0]),s[1]=Math.max(i[l].y,s[1]);t.gravityCenter=[(o[0]+s[0])*.5,(o[1]+s[1])*.5]}for(var l=0;l<a.length;l++){var u=a[l].node1,h=a[l].node2;i[u].degree=(i[u].degree||0)+1,i[h].degree=(i[h].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:t})};et.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1),this._frame+=t,this._onupdate=r,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(t)})};et.prototype._$onupdate=function(e){if(!this._disposed){var t=new Float32Array(e.data.buffer);this._globalSpeed=e.data.globalSpeed,this._positionArr=t,this._updateTexture(t),this._onupdate&&this._onupdate()}};et.prototype.getNodePositionTexture=function(){return this._positionTex};et.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1),t};et.prototype.getNodes=function(){return this._nodes};et.prototype.getEdges=function(){return this._edges};et.prototype.isFinished=function(e){return this._frame>e};et.prototype.getNodePosition=function(e,t){if(t||(t=new Float32Array(this._nodes.length*2)),this._positionArr)for(var r=0;r<this._positionArr.length;r++)t[r]=this._positionArr[r];return t};et.prototype._updateTexture=function(e){for(var t=this._positionTex.pixels,r=0,i=0;i<e.length;)t[r++]=e[i++],t[r++]=e[i++],t[r++]=1,t[r++]=1;this._positionTex.dirty()};et.prototype.dispose=function(e){this._disposed=!0,this._worker=null};var vf=ke.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var e=this.zr;e.on("mousedown",this._mouseDownHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("globalout",this._mouseUpHandler),e.animation.on("frame",this._update)},setTarget:function(e){this._target=e},setZoom:function(e){this._zoom=Math.max(Math.min(e,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(e){this._dx=e[0],this._dy=e[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(this._target&&this._needsUpdate){var e=this._target,t=this._zoom;e.position.x=this._dx,e.position.y=this._dy,e.scale.set(t,t,t),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(e){if(!e.target){var t=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(t,r))){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var i=this._convertPos(t,r);this._x=i.x,this._y=i.y}}},_convertPos:function(e,t){var r=this.viewGL.camera,i=this.viewGL.viewport;return{x:(e-i.x)/i.width*(r.right-r.left)+r.left,y:(t-i.y)/i.height*(r.bottom-r.top)+r.top}},_mouseMoveHandler:function(e){var t=this._convertPos(e.offsetX,e.offsetY);this._dx+=t.x-this._x,this._dy+=t.y-this._y,this._x=t.x,this._y=t.y,this._needsUpdate=!0},_mouseUpHandler:function(e){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(e){e=e.event;var t=e.wheelDelta||-e.detail;if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var a=t>0?1.1:.9,n=Math.max(Math.min(this._zoom*a,this.maxZoom),this.minZoom);a=n/this._zoom;var o=this._convertPos(r,i),s=(o.x-this._dx)*(a-1),l=(o.y-this._dy)*(a-1);this._dx-=s,this._dy-=l,this._zoom=n,this._needsUpdate=!0}}},dispose:function(){var e=this.zr;e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("globalout",this._mouseUpHandler),e.animation.off("frame",this._update)}});const yf=`@export ecgl.lines2D.vertex

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

@end`;var Ri=Me.vec2;y.Shader.import(yf);var xf=1;const bf=pt.extend({type:"graphGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new ce("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new hr(!0,t),this._forceEdgesMesh=new y.Mesh({material:new y.Material({shader:y.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new y.Geometry({attributes:{node:new y.Geometry.Attribute("node","float",2),color:new y.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:y.Mesh.LINES}),this._edgesMesh=new y.Mesh({material:new y.Material({shader:y.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new Tn({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new vf({zr:t.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,t,r){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=r,this._initLayout(e,t,r),this._pointsBuilder.update(e,t,r),this._forceLayoutInstance instanceof Ne||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,r),this._control.off("update"),this._control.on("update",function(){r.dispatchAction({type:"graphGLRoam",seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(re.firstNotNull(e.get("zoom"),1)),this._control.setOffset(e.get("offset")||[0,0]);var i=this._pointsBuilder.getPointsMesh();if(i.off("mousemove",this._mousemoveHandler),i.off("mouseout",this._mouseOutHandler,this),r.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get("focusNodeAdjacency")){var a=e.get("focusNodeAdjacencyOn");a==="click"?r.getZr().on("click",this._clickHandler):a==="mouseover"&&(i.on("mousemove",this._mousemoveHandler,this),i.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?t!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=t}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,t){var r=this._forceEdgesMesh.geometry,i=t.getEdgeData(),a=0,n=this._forceLayoutInstance,o=i.count()*2;r.attributes.node.init(o),r.attributes.color.init(o),i.each(function(s){var l=e[s];r.attributes.node.set(a,n.getNodeUV(l.node1)),r.attributes.node.set(a+1,n.getNodeUV(l.node2));var u=Fe(i,l.dataIndex),h=y.parseColor(u);h[3]*=re.firstNotNull(Be(i,l.dataIndex),1),r.attributes.color.set(a,h),r.attributes.color.set(a+1,h),a+=2}),r.dirty()},_updateMeshLinesGeometry:function(){var t=this._model.getEdgeData(),e=this._edgesMesh.geometry,t=this._model.getEdgeData(),r=this._model.getData().getLayout("points");e.resetOffset(),e.setVertexCount(t.count()*e.getLineVertexCount()),e.setTriangleCount(t.count()*e.getLineTriangleCount());var i=[],a=[],n=["lineStyle","width"];this._originalEdgeColors=new Float32Array(t.count()*4),this._edgeIndicesMap=new Float32Array(t.count()),t.each(function(o){var s=t.graph.getEdgeByIndex(o),l=s.node1.dataIndex*2,u=s.node2.dataIndex*2;i[0]=r[l],i[1]=r[l+1],a[0]=r[u],a[1]=r[u+1];var h=Fe(t,s.dataIndex),c=y.parseColor(h);c[3]*=re.firstNotNull(Be(t,s.dataIndex),1);var f=t.getItemModel(s.dataIndex),d=re.firstNotNull(f.get(n),1)*this._api.getDevicePixelRatio();e.addLine(i,a,c,d);for(var p=0;p<4;p++)this._originalEdgeColors[s.dataIndex*4+p]=c[p];this._edgeIndicesMap[s.dataIndex]=o},this),e.dirty()},_updateForceNodesGeometry:function(e){for(var t=this._pointsBuilder.getPointsMesh(),r=[],i=0;i<e.count();i++)this._forceLayoutInstance.getNodeUV(i,r),t.geometry.attributes.position.set(i,r);t.geometry.dirty("position")},_initLayout:function(e,t,r){var i=e.get("layout"),a=e.getGraph(),n=e.getBoxLayoutParams(),o=Qi(n,{width:r.getWidth(),height:r.getHeight()});i==="force"&&(i="forceAtlas2"),this.stopLayout(e,t,r,{beforeLayout:!0});var s=e.getData(),l=e.getData();if(i==="forceAtlas2"){var u=e.getModel("forceAtlas2"),h=this._forceLayoutInstance,c=[],f=[],d=s.getDataExtent("value"),p=l.getDataExtent("value"),m=re.firstNotNull(u.get("edgeWeight"),1),g=re.firstNotNull(u.get("nodeWeight"),1);typeof m=="number"&&(m=[m,m]),typeof g=="number"&&(g=[g,g]);var _=0,b={},x=new Float32Array(s.count()*2);if(a.eachNode(function(w){var S=w.dataIndex,E=s.get("value",S),M,L;if(s.hasItemOption){var I=s.getItemModel(S);M=I.get("x"),L=I.get("y")}M==null&&(M=o.x+Math.random()*o.width,L=o.y+Math.random()*o.height),x[_*2]=M,x[_*2+1]=L,b[w.id]=_++;var C=Sn(E,d,g);isNaN(C)&&(isNaN(g[0])?C=1:C=g[0]),c.push({x:M,y:L,mass:C,size:s.getItemVisual(S,"symbolSize")})}),s.setLayout("points",x),a.eachEdge(function(w){var S=w.dataIndex,E=s.get("value",S),M=Sn(E,p,m);isNaN(M)&&(isNaN(m[0])?M=1:M=m[0]),f.push({node1:b[w.node1.id],node2:b[w.node2.id],weight:M,dataIndex:S})}),!h){var v=u.get("GPU");this._forceLayoutInstance&&(v&&!(this._forceLayoutInstance instanceof Ne)||!v&&!(this._forceLayoutInstance instanceof et))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),h=this._forceLayoutInstance=v?new Ne:new et}h.initData(c,f),h.updateOption(u.option),this._updateForceEdgesGeometry(h.getEdges(),e),this._updatePositionTexture(),r.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else{var x=new Float32Array(s.count()*2),_=0;a.eachNode(function(E){var M=E.dataIndex,L,I;if(s.hasItemOption){var C=s.getItemModel(M);L=C.get("x"),I=C.get("y")}x[_++]=L,x[_++]=I}),s.setLayout("points",x),this._updateAfterLayout(e,t,r)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set("positionTex",e)},startLayout:function(e,t,r,i){if(!(i&&i.from!=null&&i.from!==this.uid)){var a=this.viewGL,r=this._api,n=this._forceLayoutInstance,o=this._model.getData(),s=this._model.getModel("forceAtlas2");if(n&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),!!this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var l=this,u=this._layoutId=xf++,h=s.getShallow("maxSteps"),c=s.getShallow("steps"),f=0,d=Math.max(c*2,20),p=function(g){if(g===l._layoutId){if(n.isFinished(h)){r.dispatchAction({type:"graphGLStopLayout",from:l.uid}),r.dispatchAction({type:"graphGLFinishLayout",points:o.getLayout("points"),from:l.uid});return}n.update(a.layer.renderer,c,function(){l._updatePositionTexture(),f+=c,f>=d&&(l._syncNodePosition(e),f=0),r.getZr().refresh(),Ua(function(){p(g)})})}};Ua(function(){l._forceLayoutInstanceToDispose&&(l._forceLayoutInstanceToDispose.dispose(a.layer.renderer),l._forceLayoutInstanceToDispose=null),p(u)}),this._layouting=!0}}},stopLayout:function(e,t,r,i){i&&i.from!=null&&i.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),this._forceLayoutInstance&&this.viewGL.layer&&(i&&i.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,t,r)),this._api.getZr().refresh(),this._layouting=!1))},_syncNodePosition:function(e){var t=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout("points",t),e.setNodePosition(t)},_updateAfterLayout:function(e,t,r){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,t,r),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,t,r,i){var a=this._model.getData();this._downplayAll();var n=i.dataIndex,o=a.graph,s=[],l=o.getNodeByIndex(n);s.push(l),l.edges.forEach(function(h){h.dataIndex<0||(h.node1!==l&&s.push(h.node1),h.node2!==l&&s.push(h.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),s.forEach(function(h){this._pointsBuilder.highlight(a,h.dataIndex)},this),this._pointsBuilder.updateLabels(s.map(function(h){return h.dataIndex}));var u=[];l.edges.forEach(function(h){h.dataIndex>=0&&(this._highlightEdge(h.dataIndex),u.push(h))},this),this._focusNodes=s,this._focusEdges=u},unfocusNodeAdjacency:function(e,t,r,i){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var t=this._model.getEdgeData().getItemModel(e),r=y.parseColor(t.get("emphasis.lineStyle.color")||t.get("lineStyle.color")),i=re.firstNotNull(t.get("emphasis.lineStyle.opacity"),t.get("lineStyle.opacity"),1);r[3]*=i,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],r)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var t=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)},_setEdgeFade:function(){var e=[];return function(t,r){this._getColor(t,e),e[3]*=r,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],e)}}(),_getColor:function(e,t){for(var r=0;r<4;r++)t[r]=this._originalEdgeColors[e*4+r];return t},_fadeOutEdgesAll:function(e){var t=this._model.getData().graph;t.eachEdge(function(r){this._setEdgeFade(r.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,t){this.viewGL.setViewport(0,0,t.getWidth(),t.getHeight(),t.getDevicePixelRatio());for(var r=this.viewGL.camera,i=e.getData(),a=i.getLayout("points"),n=Ri.create(1/0,1/0),o=Ri.create(-1/0,-1/0),s=[],l=0;l<a.length;)s[0]=a[l++],s[1]=a[l++],Ri.min(n,n,s),Ri.max(o,o,s);var u=(o[1]+n[1])/2,h=(o[0]+n[0])/2;if(!(h>r.left&&h<r.right&&u<r.bottom&&u>r.top)){var c=Math.max(o[0]-n[0],10),f=c/t.getWidth()*t.getHeight();c*=1.4,f*=1.4,n[0]-=c*.2,r.left=n[0],r.top=u-f/2,r.bottom=u+f/2,r.right=c+n[0],r.near=0,r.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function Oi(e){return e instanceof Array||(e=[e,e]),e}function Tf(e){e.registerChartView(bf),e.registerSeriesModel(ei),e.registerVisual(function(r){const i={};r.eachSeriesByType("graphGL",function(a){var n=a.getCategoriesData(),o=a.getData(),s={};n.each(function(l){var u=n.getName(l);s["ec-"+u]=l;var h=n.getItemModel(l),c=h.getModel("itemStyle").getItemStyle();c.fill||(c.fill=a.getColorFromPalette(u,i)),n.setItemVisual(l,"style",c);var f=["symbol","symbolSize","symbolKeepAspect"];for(let p=0;p<f.length;p++){var d=h.getShallow(f[p],!0);d!=null&&n.setItemVisual(l,f[p],d)}}),n.count()&&o.each(function(l){var u=o.getItemModel(l);let h=u.getShallow("category");if(h!=null){typeof h=="string"&&(h=s["ec-"+h]);var c=n.getItemVisual(h,"style"),f=o.ensureUniqueItemVisual(l,"style");Ln(f,c);var d=["symbol","symbolSize","symbolKeepAspect"];for(let p=0;p<d.length;p++)o.setItemVisual(l,d[p],n.getItemVisual(h,d[p]))}})})}),e.registerVisual(function(r){r.eachSeriesByType("graphGL",function(i){var a=i.getGraph(),n=i.getEdgeData(),o=Oi(i.get("edgeSymbol")),s=Oi(i.get("edgeSymbolSize"));n.setVisual("drawType","stroke"),n.setVisual("fromSymbol",o&&o[0]),n.setVisual("toSymbol",o&&o[1]),n.setVisual("fromSymbolSize",s&&s[0]),n.setVisual("toSymbolSize",s&&s[1]),n.setVisual("style",i.getModel("lineStyle").getLineStyle()),n.each(function(l){var u=n.getItemModel(l),h=a.getEdgeByIndex(l),c=Oi(u.getShallow("symbol",!0)),f=Oi(u.getShallow("symbolSize",!0)),d=u.getModel("lineStyle").getLineStyle(),p=n.ensureUniqueItemVisual(l,"style");switch(Ln(p,d),p.stroke){case"source":{var m=h.node1.getVisual("style");p.stroke=m&&m.fill;break}case"target":{var m=h.node2.getVisual("style");p.stroke=m&&m.fill;break}}c[0]&&h.setVisual("fromSymbol",c[0]),c[1]&&h.setVisual("toSymbol",c[1]),f[0]&&h.setVisual("fromSymbolSize",f[0]),f[1]&&h.setVisual("toSymbolSize",f[1])})})}),e.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(r,i){i.eachComponent({mainType:"series",query:r},function(a){a.setView(r)})});function t(){}e.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},t),e.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},t),e.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},t),e.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},t)}He(Tf);const wf=ft.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(e,t){var r=this.get("coordinateSystem"),i=r==="geo"?["lng","lat"]:qo(r)||["x","y"];i.push("vx","vy");var a=mi(this.getSource(),{coordDimensions:i,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),n=new Tt(a,this);return n.initData(this.getSource()),n},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}});var Sf=ie.extend(function(){return{dynamic:!0,attributes:{position:new ie.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(e){var t=this.attributes,r=4*e,i=2*e;this.vertexCount!==r&&t.position.init(r),this.triangleCount!==i&&(i===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(i*3):new Uint16Array(i*3))},addLine:function(e){var t=this._vertexOffset;this.attributes.position.set(t,[e[0],e[1],1]),this.attributes.position.set(t+1,[e[0],e[1],-1]),this.attributes.position.set(t+2,[e[0],e[1],2]),this.attributes.position.set(t+3,[e[0],e[1],-2]),this.setTriangleIndices(this._faceOffset++,[t,t+1,t+2]),this.setTriangleIndices(this._faceOffset++,[t+1,t+2,t+3]),this._vertexOffset+=4}});const Mf=`@export ecgl.vfParticle.particle.fragment

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
`;G.import(Mf);function Ef(e){var t=document.createElement("canvas");t.width=t.height=e;var r=t.getContext("2d");return r.fillStyle="#fff",r.arc(e/2,e/2,e/2,0,Math.PI*2),r.fill(),t}var en=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new J({type:z.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};en.prototype={constructor:en,init:function(){var e={type:z.FLOAT,minFilter:z.NEAREST,magFilter:z.NEAREST,useMipmap:!1};this._spawnTexture=new J(e),this._particleTexture0=new J(e),this._particleTexture1=new J(e),this._frameBuffer=new Se({depthBuffer:!1}),this._particlePass=new Ae({fragment:G.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new Ae({fragment:G.source("clay.compositor.downsample")});var t=new Ie({renderOrder:10,material:new ot({shader:new G(G.source("ecgl.vfParticle.renderPoints.vertex"),G.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:Ie.POINTS,geometry:new ie({dynamic:!0,mainAttribute:"texcoord0"})}),r=new Ie({renderOrder:10,material:new ot({shader:new G(G.source("ecgl.vfParticle.renderLines.vertex"),G.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new Sf,culling:!1}),i=new Ie({material:new ot({shader:new G(G.source("ecgl.color.vertex"),G.source("ecgl.color.fragment"))}),geometry:new ta});i.material.enableTexture("diffuseMap"),this._particlePointsMesh=t,this._particleLinesMesh=r,this._lastFrameFullQuadMesh=i,this._camera=new Dr,this._thisFrameTexture=new J,this._lastFrameTexture=new J},setParticleDensity:function(e,t){for(var r=e*t,i=new Float32Array(r*4),a=0,n=this.particleLife,o=0;o<e;o++)for(var s=0;s<t;s++,a++){i[a*4]=Math.random(),i[a*4+1]=Math.random(),i[a*4+2]=Math.random();var l=(n[1]-n[0])*Math.random()+n[0];i[a*4+3]=l}this._particleType==="line"?this._setLineGeometry(e,t):this._setPointsGeometry(e,t),this._spawnTexture.width=e,this._spawnTexture.height=t,this._spawnTexture.pixels=i,this._particleTexture0.width=this._particleTexture1.width=e,this._particleTexture0.height=this._particleTexture1.height=t,this._particlePass.setUniform("textureSize",[e,t])},_setPointsGeometry:function(e,t){var r=e*t,i=this._particlePointsMesh.geometry,a=i.attributes;a.texcoord0.init(r);for(var n=0,o=0;o<e;o++)for(var s=0;s<t;s++,n++)a.texcoord0.value[n*2]=o/e,a.texcoord0.value[n*2+1]=s/t;i.dirty()},_setLineGeometry:function(e,t){var r=e*t,i=this._getParticleMesh().geometry;i.setLineCount(r),i.resetOffset();for(var a=0;a<e;a++)for(var n=0;n<t;n++)i.addLine([a/e,n/t]);i.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(e,t,r,i){var a=this._getParticleMesh(),n=this._frameBuffer,o=this._particlePass;i&&this._updateDownsampleTextures(e,t),a.material.set("size",this._particleSize*this._supersampling),a.material.set("color",this.particleColor),o.setUniform("speedScaling",this.particleSpeedScaling),n.attach(this._particleTexture1),o.setUniform("firstFrameTime",i?(this.particleLife[1]+this.particleLife[0])/2:0),o.setUniform("particleTexture",this._particleTexture0),o.setUniform("deltaTime",r),o.setUniform("elapsedTime",this._elapsedTime),o.render(e,n),a.material.set("particleTexture",this._particleTexture1),a.material.set("prevParticleTexture",this._particleTexture0),n.attach(this._thisFrameTexture),n.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT);var s=this._lastFrameFullQuadMesh;s.material.set("diffuseMap",this._lastFrameTexture),s.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),e.renderPass([s,a],this._camera),n.unbind(e),this._downsample(e),this._swapTexture(),this._elapsedTime+=r},_downsample:function(e){var t=this._downsampleTextures;if(t.length!==0)for(var r=0,i=this._thisFrameTexture,a=t[r];a;)this._frameBuffer.attach(a),this._downsamplePass.setUniform("texture",i),this._downsamplePass.setUniform("textureSize",[i.width,i.height]),this._downsamplePass.render(e,this._frameBuffer),i=a,a=t[++r]},getSurfaceTexture:function(){var e=this._downsampleTextures;return e.length>0?e[e.length-1]:this._lastFrameTexture},setRegion:function(e){this._particlePass.setUniform("region",e)},resize:function(e,t){this._lastFrameTexture.width=e*this._supersampling,this._lastFrameTexture.height=t*this._supersampling,this._thisFrameTexture.width=e*this._supersampling,this._thisFrameTexture.height=t*this._supersampling,this._width=e,this._height=t},setParticleSize:function(e){var t=this._getParticleMesh();if(e<=2){t.material.disableTexture("spriteTexture"),t.material.transparent=!1;return}this._spriteTexture||(this._spriteTexture=new J),(!this._spriteTexture.image||this._spriteTexture.image.width!==e)&&(this._spriteTexture.image=Ef(e),this._spriteTexture.dirty()),t.material.transparent=!0,t.material.enableTexture("spriteTexture"),t.material.set("spriteTexture",this._spriteTexture),this._particleSize=e},setGradientTexture:function(e){var t=this._getParticleMesh().material;t[e?"enableTexture":"disableTexture"]("gradientTexture"),t.setUniform("gradientTexture",e)},setColorTextureImage:function(e,t){var r=this._getParticleMesh().material;r.setTextureImage("colorTexture",e,t,{flipY:!0})},setParticleType:function(e){this._particleType=e},clearFrame:function(e){var t=this._frameBuffer;t.attach(this._lastFrameTexture),t.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),t.unbind(e)},setSupersampling:function(e){this._supersampling=e,this.resize(this._width,this._height)},_updateDownsampleTextures:function(e,t){for(var r=this._downsampleTextures,i=Math.max(Math.floor(Math.log(this._supersampling/t.getDevicePixelRatio())/Math.log(2)),0),a=2,n=this._width*this._supersampling,o=this._height*this._supersampling,s=0;s<i;s++)r[s]=r[s]||new J,r[s].width=n/a,r[s].height=o/a,a*=2;for(;s<r.length;s++)r[s].dispose(e);r.length=i},_swapTexture:function(){var e=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=e;var e=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=e},dispose:function(e){e.disposeFrameBuffer(this._frameBuffer),e.disposeTexture(this.vectorFieldTexture),e.disposeTexture(this._spawnTexture),e.disposeTexture(this._particleTexture0),e.disposeTexture(this._particleTexture1),e.disposeTexture(this._thisFrameTexture),e.disposeTexture(this._lastFrameTexture),e.disposeGeometry(this._particleLinesMesh.geometry),e.disposeGeometry(this._particlePointsMesh.geometry),e.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&e.disposeTexture(this._spriteTexture),this._particlePass.dispose(e),this._downsamplePass.dispose(e),this._downsampleTextures.forEach(function(t){t.dispose(e)})}};const Af=pt.extend({type:"flowGL",__ecgl__:!0,init:function(e,t){this.viewGL=new ce("orthographic"),this.groupGL=new y.Node,this.viewGL.add(this.groupGL),this._particleSurface=new en;var r=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.color.vertex"),fragment:y.Shader.source("ecgl.color.fragment")}),transparent:!0})});r.material.enableTexture("diffuseMap"),this.groupGL.add(r),this._planeMesh=r},render:function(e,t,r){var i=this._particleSurface;i.setParticleType(e.get("particleType")),i.setSupersampling(e.get("supersampling")),this._updateData(e,r),this._updateCamera(r.getWidth(),r.getHeight(),r.getDevicePixelRatio());var a=re.firstNotNull(e.get("particleDensity"),128);i.setParticleDensity(a,a);var n=this._planeMesh,o=+new Date,s=this,l=!0;n.__percent=0,n.stopAnimation(),n.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var c=+new Date,f=Math.min(c-o,20);o=o+f,s._renderer&&(i.update(s._renderer,r,f/1e3,l),n.material.set("diffuseMap",i.getSurfaceTexture())),l=!1}).start();var u=e.getModel("itemStyle"),h=y.parseColor(u.get("color"));h[3]*=re.firstNotNull(u.get("opacity"),1),n.material.set("color",h),i.setColorTextureImage(e.get("colorTexture"),r),i.setParticleSize(e.get("particleSize")),i.particleSpeedScaling=e.get("particleSpeed"),i.motionBlurFactor=1-Math.pow(.1,e.get("particleTrail"))},updateTransform:function(e,t,r){this._updateData(e,r)},afterRender:function(e,t,r,i){var a=i.renderer;this._renderer=a},_updateData:function(e,t){var r=e.coordinateSystem,i=r.dimensions.map(function(b){return e.coordDimToDataDim(b)[0]}),a=e.getData(),n=a.getDataExtent(i[0]),o=a.getDataExtent(i[1]),s=e.get("gridWidth"),l=e.get("gridHeight");if(s==null||s==="auto"){var u=(n[1]-n[0])/(o[1]-o[0]);s=Math.round(Math.sqrt(u*a.count()))}(l==null||l==="auto")&&(l=Math.ceil(a.count()/s));var h=this._particleSurface.vectorFieldTexture,c=h.pixels;if(!c||c.length!==l*s*4)c=h.pixels=new Float32Array(s*l*4);else for(var f=0;f<c.length;f++)c[f]=0;var d=0,p=1/0,m=new Float32Array(a.count()*2),g=0,_=[[1/0,1/0],[-1/0,-1/0]];a.each([i[0],i[1],"vx","vy"],function(b,x,v,w){var S=r.dataToPoint([b,x]);m[g++]=S[0],m[g++]=S[1],_[0][0]=Math.min(S[0],_[0][0]),_[0][1]=Math.min(S[1],_[0][1]),_[1][0]=Math.max(S[0],_[1][0]),_[1][1]=Math.max(S[1],_[1][1]);var E=Math.sqrt(v*v+w*w);d=Math.max(d,E),p=Math.min(p,E)}),a.each(["vx","vy"],function(b,x,v){var w=Math.round((m[v*2]-_[0][0])/(_[1][0]-_[0][0])*(s-1)),S=l-1-Math.round((m[v*2+1]-_[0][1])/(_[1][1]-_[0][1])*(l-1)),E=(S*s+w)*4;c[E]=b/d*.5+.5,c[E+1]=x/d*.5+.5,c[E+3]=1}),h.width=s,h.height=l,e.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(h),h.dirty(),this._updatePlanePosition(_[0],_[1],e,t),this._updateGradientTexture(a.getVisual("visualMeta"),[p,d])},_fillEmptyPixels:function(e){var t=e.pixels,r=e.width,i=e.height;function a(m,g,_){m=Math.max(Math.min(m,r-1),0),g=Math.max(Math.min(g,i-1),0);var b=(g*(r-1)+m)*4;return t[b+3]===0?!1:(_[0]=t[b],_[1]=t[b+1],!0)}function n(m,g,_){_[0]=m[0]+g[0],_[1]=m[1]+g[1]}for(var o=[],s=[],l=[],u=[],h=[],c=0,f=0;f<i;f++)for(var d=0;d<r;d++){var p=(f*(r-1)+d)*4;t[p+3]===0&&(c=o[0]=o[1]=0,a(d-1,f,s)&&(c++,n(s,o,o)),a(d+1,f,l)&&(c++,n(l,o,o)),a(d,f-1,u)&&(c++,n(u,o,o)),a(d,f+1,h)&&(c++,n(h,o,o)),o[0]/=c,o[1]/=c,t[p]=o[0],t[p+1]=o[1]),t[p+3]=1}},_updateGradientTexture:function(e,t){if(!e||!e.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new y.Texture2D({image:document.createElement("canvas")});var r=this._gradientTexture,i=r.image;i.width=200,i.height=1;var a=i.getContext("2d"),n=a.createLinearGradient(0,.5,i.width,.5);e[0].stops.forEach(function(o){var s;t[1]===t[0]?s=0:(s=o.value/t[1],s=Math.min(Math.max(s,0),1)),n.addColorStop(s,o.color)}),a.fillStyle=n,a.fillRect(0,0,i.width,i.height),r.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(e,t,r,i){var a=this._limitInViewportAndFullFill(e,t,r,i);e=a.leftTop,t=a.rightBottom,this._particleSurface.setRegion(a.region),this._planeMesh.position.set((e[0]+t[0])/2,i.getHeight()-(e[1]+t[1])/2,0);var n=t[0]-e[0],o=t[1]-e[1];this._planeMesh.scale.set(n/2,o/2,1),this._particleSurface.resize(Math.max(Math.min(n,2048),1),Math.max(Math.min(o,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(e,t,r,i){var a=[Math.max(e[0],0),Math.max(e[1],0)],n=[Math.min(t[0],i.getWidth()),Math.min(t[1],i.getHeight())];if(r.get("coordinateSystem")==="bmap"){var o=r.getData().getDataExtent(r.coordDimToDataDim("lng")[0]),s=Math.floor(o[1]-o[0])>=359;s&&(a[0]>0&&(a[0]=0),n[0]<i.getWidth()&&(n[0]=i.getWidth()))}var l=t[0]-e[0],u=t[1]-e[1],h=n[0]-a[0],c=n[1]-a[1],f=[(a[0]-e[0])/l,1-c/u-(a[1]-e[1])/u,h/l,c/u];return{leftTop:a,rightBottom:n,region:f}},_updateCamera:function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.bottom=0,i.top=t,i.right=e,i.near=0,i.far=100,i.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function Lf(e){e.registerChartView(Af),e.registerSeriesModel(wf)}He(Lf);var tn=ft.extend({type:"series.linesGL",dependencies:["grid","geo"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",streamEnabled:!0,init:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),tn.superApply(this,"init",arguments)},mergeOption:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),tn.superApply(this,"mergeOption",arguments)},appendData:function(e){var t=this._processFlatCoordsArray(e.data);t.flatCoords&&(this._flatCoords?(this._flatCoords=Mn(this._flatCoords,t.flatCoords),this._flatCoordsOffset=Mn(this._flatCoordsOffset,t.flatCoordsOffset)):(this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset),e.data=new Float32Array(t.count)),this.getRawData().appendData(e.data)},_getCoordsFromItemModel:function(e){var t=this.getData().getItemModel(e),r=t.option instanceof Array?t.option:t.getShallow("coords");return r},getLineCoordsCount:function(e){return this._flatCoordsOffset?this._flatCoordsOffset[e*2+1]:this._getCoordsFromItemModel(e).length},getLineCoords:function(e,t){if(this._flatCoordsOffset){for(var r=this._flatCoordsOffset[e*2],i=this._flatCoordsOffset[e*2+1],a=0;a<i;a++)t[a]=t[a]||[],t[a][0]=this._flatCoords[r+a*2],t[a][1]=this._flatCoords[r+a*2+1];return i}else{for(var n=this._getCoordsFromItemModel(e),a=0;a<n.length;a++)t[a]=t[a]||[],t[a][0]=n[a][0],t[a][1]=n[a][1];return n.length}},_processFlatCoordsArray:function(e){var t=0;if(this._flatCoords&&(t=this._flatCoords.length),typeof e[0]=="number"){for(var r=e.length,i=new Uint32Array(r),a=new Float64Array(r),n=0,o=0,s=0,l=0;l<r;){s++;var u=e[l++];i[o++]=n+t,i[o++]=u;for(var h=0;h<u;h++){var c=e[l++],f=e[l++];a[n++]=c,a[n++]=f}}return{flatCoordsOffset:new Uint32Array(i.buffer,0,o),flatCoords:a,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:e.length}},getInitialData:function(e,t){var r=new Tt(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,a,n,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"geo",zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:"source-over",lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});const Cf=pt.extend({type:"linesGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new ce("orthographic"),this.viewGL.add(this.groupGL),this._glViewHelper=new Nt(this.viewGL),this._nativeLinesShader=y.createShader("ecgl.lines3D"),this._meshLinesShader=y.createShader("ecgl.meshLines3D"),this._linesMeshes=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r);var i=this._linesMeshes[0];i||(i=this._linesMeshes[0]=this._createLinesMesh(e)),this._linesMeshes.length=1,this.groupGL.add(i),this._updateLinesMesh(e,i,0,e.getData().count()),this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){var a=this._linesMeshes[this._currentStep];a||(a=this._createLinesMesh(t),this._linesMeshes[this._currentStep]=a),this._updateLinesMesh(t,a,e.start,e.end),this.groupGL.add(a),i.getZr().refresh(),this._currentStep++},updateTransform:function(e,t,r){e.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(e,r)},_createLinesMesh:function(e){var t=new y.Mesh({$ignorePicking:!0,material:new y.Material({shader:y.createShader("ecgl.lines3D"),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new Tn({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:y.Mesh.LINES,culling:!1});return t},_updateLinesMesh:function(e,t,r,i){var a=e.getData();t.material.blend=e.get("blendMode")==="lighter"?y.additiveBlend:null;var n=e.get("lineStyle.curveness")||0,o=e.get("polyline"),s=t.geometry,l=e.coordinateSystem,u=re.firstNotNull(e.get("lineStyle.width"),1);u>1?(t.material.shader!==this._meshLinesShader&&t.material.attachShader(this._meshLinesShader),t.mode=y.Mesh.TRIANGLES):(t.material.shader!==this._nativeLinesShader&&t.material.attachShader(this._nativeLinesShader),t.mode=y.Mesh.LINES),r=r||0,i=i||a.count(),s.resetOffset();var h=0,c=0,f=[],d=[],p=[],m=[],g=[],_=.3,b=.7;function x(){d[0]=f[0]*b+m[0]*_-(f[1]-m[1])*n,d[1]=f[1]*b+m[1]*_-(m[0]-f[0])*n,p[0]=f[0]*_+m[0]*b-(f[1]-m[1])*n,p[1]=f[1]*_+m[1]*b-(m[0]-f[0])*n}if(o||n!==0)for(var v=r;v<i;v++)if(o){var w=e.getLineCoordsCount(v);h+=s.getPolylineVertexCount(w),c+=s.getPolylineTriangleCount(w)}else e.getLineCoords(v,g),this._glViewHelper.dataToPoint(l,g[0],f),this._glViewHelper.dataToPoint(l,g[1],m),x(),h+=s.getCubicCurveVertexCount(f,d,p,m),c+=s.getCubicCurveTriangleCount(f,d,p,m);else{var S=i-r;h+=S*s.getLineVertexCount(),c+=S*s.getLineVertexCount()}s.setVertexCount(h),s.setTriangleCount(c);for(var E=r,M=[],v=r;v<i;v++){y.parseColor(Fe(a,E),M);var L=re.firstNotNull(Be(a,E),1);M[3]*=L;for(var w=e.getLineCoords(v,g),I=0;I<w;I++)this._glViewHelper.dataToPoint(l,g[I],g[I]);o?s.addPolyline(g,M,u,0,w):n!==0?(f=g[0],m=g[1],x(),s.addCubicCurve(f,d,p,m,M,u)):s.addPolyline(g,M,u,0,2),E++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Df(e){e.registerChartView(Cf),e.registerSeriesModel(tn)}He(Df);const Pf={class:"sandbox-container"},Nf={class:"control-bar"},Rf={class:"control-actions"},Of={class:"update-info"},If={class:"news-ticker"},Bf={class:"ticker-content"},Ff=["onClick"],Vf={class:"news-title"},zf={class:"news-views"},Gf={class:"sandbox-content"},Uf={class:"sandbox-main"},Hf={class:"hot-search-panel"},kf={class:"hot-search-header"},Wf={class:"update-time"},Xf={class:"hot-search-list"},jf={class:"hot-rank"},qf={class:"hot-title"},Zf={class:"hot-heat"},Yf={class:"sandbox-panel"},Kf={class:"panel-section"},$f={class:"city-list"},Qf={class:"city-rank"},Jf={class:"city-info"},ep={class:"city-name"},tp={class:"city-bar"},rp={class:"panel-section"},ip={class:"stats-grid"},ap={class:"stat-item"},np={class:"stat-value"},op={class:"stat-item"},sp={class:"stat-value"},lp={class:"stat-item highlight"},up={class:"stat-value",style:{color:"#ff4757"}},hp={class:"stat-city"},cp={class:"stat-item"},dp={class:"stat-value",style:{color:"#2ed573"}},fp={class:"stat-city"},pp={class:"panel-section"},mp={class:"view-controls"},gp={class:"modal-header"},_p={class:"modal-body"},vp={class:"modal-stats"},yp={class:"modal-region"},xp={class:"modal-desc"},bp=Js({__name:"SandboxView",setup(e){const t=gt(null);let r=null,i=null;const a=gt(!0),n=gt(!1),o=gt(!1),s=gt("--:--:--"),l=gt("--:--:--"),u=gt(null),h=gt([{title:"北京朝阳区突发交通管制，多条道路临时封闭",category:"traffic",categoryText:"交通",views:156,comments:234,shares:89,region:"北京",description:"因道路施工需要，朝阳区多条主干道实施临时交通管制，预计持续3小时。"},{title:"上海浦东新区商圈人流达到峰值，建议错峰出行",category:"crowd",categoryText:"人流",views:98,comments:156,shares:45,region:"上海",description:"浦东新区主要商圈人流密集，建议市民错峰出行，避开高峰时段。"},{title:"广州天河区发现疑似环境污染问题，已启动调查",category:"environment",categoryText:"环境",views:234,comments:567,shares:123,region:"广州",description:"天河区某工业园区附近发现异常气味，环保部门已介入调查。"},{title:"深圳南山区科技园举办大型招聘会，吸引万人参与",category:"event",categoryText:"活动",views:67,comments:89,shares:34,region:"深圳",description:"南山区科技园举办年度大型招聘会，超过200家企业参与。"},{title:"成都春熙路商圈开展促销活动，客流激增",category:"crowd",categoryText:"人流",views:45,comments:78,shares:23,region:"成都",description:"春熙路商圈开展大型促销活动，吸引大量市民前往购物。"},{title:"杭州西湖景区游客量突破历史同期记录",category:"crowd",categoryText:"人流",views:189,comments:345,shares:167,region:"杭州",description:"西湖景区游客量持续攀升，建议游客错峰游览。"},{title:"武汉江汉路步行街实施人流管控措施",category:"traffic",categoryText:"交通",views:78,comments:123,shares:56,region:"武汉",description:"因人流过大，江汉路步行街实施临时管控措施。"},{title:"南京新街口商圈开展夜间经济活动",category:"event",categoryText:"活动",views:56,comments:89,shares:34,region:"南京",description:"新街口商圈推出夜间经济系列活动，丰富市民夜生活。"}]),c=["全国多地迎来降温天气","城市交通拥堵指数创新高","热门景区游客量预警","新能源车充电桩建设加速","城市绿化覆盖率提升","智慧城市建设新进展","社区便民服务升级","城市空气质量改善","地铁新线路即将开通","商圈促销活动火爆","高校毕业季就业指导","医疗保障政策更新","城市垃圾分类新规","公共交通票价调整","历史文化街区改造","科技创新成果展示","体育赛事精彩纷呈","美食节活动开幕","文化艺术展览举办","城市夜景灯光秀"],f=gt([{title:"全国多地迎来降温天气",heat:9876543,trend:15},{title:"城市交通拥堵指数创新高",heat:8765432,trend:23},{title:"热门景区游客量预警",heat:7654321,trend:-5},{title:"新能源车充电桩建设加速",heat:6543210,trend:8},{title:"城市绿化覆盖率提升",heat:5432109,trend:3},{title:"智慧城市建设新进展",heat:4321098,trend:12},{title:"社区便民服务升级",heat:3210987,trend:-2},{title:"城市空气质量改善",heat:2109876,trend:6}]),d=()=>{const N=[...c].sort(()=>Math.random()-.5);f.value=N.slice(0,8).map(B=>({title:B,heat:Math.floor(Math.random()*8e6)+1e6,trend:Math.floor(Math.random()*30)-10})).sort((B,Y)=>Y.heat-B.heat)},p=N=>{u.value=N},m=gt([{name:"北京",baseValue:180,coord:[116.4074,39.9042]},{name:"上海",baseValue:175,coord:[121.4737,31.2304]},{name:"广州",baseValue:165,coord:[113.2644,23.1291]},{name:"深圳",baseValue:160,coord:[114.0579,22.5431]},{name:"天津",baseValue:145,coord:[117.3616,39.3434]},{name:"重庆",baseValue:140,coord:[106.5516,29.563]},{name:"成都",baseValue:135,coord:[104.0668,30.5728]},{name:"杭州",baseValue:130,coord:[120.1551,30.2741]},{name:"武汉",baseValue:125,coord:[114.3055,30.5928]},{name:"西安",baseValue:120,coord:[108.9398,34.3416]},{name:"南京",baseValue:115,coord:[118.7969,32.0603]},{name:"苏州",baseValue:110,coord:[120.5853,31.2994]},{name:"郑州",baseValue:105,coord:[113.6254,34.7466]},{name:"长沙",baseValue:100,coord:[112.9388,28.2282]},{name:"青岛",baseValue:95,coord:[120.3826,36.0671]},{name:"大连",baseValue:90,coord:[121.6147,38.914]},{name:"宁波",baseValue:85,coord:[121.544,29.8683]},{name:"厦门",baseValue:80,coord:[118.0894,24.4798]},{name:"济南",baseValue:75,coord:[117.0009,36.6758]},{name:"哈尔滨",baseValue:70,coord:[126.5349,45.8038]},{name:"长春",baseValue:65,coord:[125.3245,43.8868]},{name:"福州",baseValue:60,coord:[119.3062,26.0753]},{name:"合肥",baseValue:55,coord:[117.2272,31.8206]},{name:"昆明",baseValue:50,coord:[102.8329,24.8801]},{name:"南昌",baseValue:45,coord:[115.8581,28.6829]},{name:"贵阳",baseValue:40,coord:[106.7135,26.5783]},{name:"太原",baseValue:35,coord:[112.5489,37.8706]},{name:"南宁",baseValue:30,coord:[108.32,22.824]},{name:"兰州",baseValue:25,coord:[103.8343,36.0611]},{name:"乌鲁木齐",baseValue:20,coord:[87.6177,43.7928]},{name:"呼和浩特",baseValue:15,coord:[111.6708,40.8183]},{name:"银川",baseValue:12,coord:[106.2586,38.468]},{name:"西宁",baseValue:10,coord:[101.7782,36.6171]},{name:"海口",baseValue:8,coord:[110.1999,20.0444]},{name:"拉萨",baseValue:5,coord:[91.1322,29.66]},{name:"沈阳",baseValue:68,coord:[123.4328,41.8051]},{name:"无锡",baseValue:82,coord:[120.3119,31.4912]},{name:"佛山",baseValue:78,coord:[113.1227,23.0288]},{name:"东莞",baseValue:72,coord:[113.7463,23.046]},{name:"泉州",baseValue:68,coord:[118.6754,24.8741]},{name:"温州",baseValue:65,coord:[120.6994,28.0014]},{name:"烟台",baseValue:62,coord:[121.4479,37.4638]},{name:"唐山",baseValue:58,coord:[118.1802,39.6309]},{name:"石家庄",baseValue:55,coord:[114.5149,38.0428]},{name:"南通",baseValue:52,coord:[120.8944,31.9802]},{name:"常州",baseValue:48,coord:[119.9742,31.8112]},{name:"潍坊",baseValue:45,coord:[119.1619,36.7068]},{name:"绍兴",baseValue:42,coord:[120.5821,30.012]},{name:"台州",baseValue:38,coord:[121.4286,28.6628]},{name:"嘉兴",baseValue:35,coord:[120.7509,30.7627]},{name:"金华",baseValue:32,coord:[119.6495,29.0895]},{name:"湖州",baseValue:28,coord:[120.0868,30.8673]},{name:"徐州",baseValue:25,coord:[117.1848,34.2618]},{name:"扬州",baseValue:22,coord:[119.4216,32.3932]},{name:"镇江",baseValue:18,coord:[119.4552,32.2044]},{name:"泰州",baseValue:15,coord:[119.9225,32.4556]},{name:"淮安",baseValue:12,coord:[119.1142,33.5994]},{name:"盐城",baseValue:10,coord:[120.1399,33.3777]},{name:"连云港",baseValue:8,coord:[119.2216,34.5967]},{name:"宿迁",baseValue:5,coord:[118.5535,33.7772]},{name:"淄博",baseValue:42,coord:[118.0479,36.8134]},{name:"临沂",baseValue:38,coord:[118.3515,35.1042]},{name:"济宁",baseValue:35,coord:[116.5871,35.4154]},{name:"菏泽",baseValue:30,coord:[115.4807,35.2339]},{name:"德州",baseValue:25,coord:[116.3575,36.4345]},{name:"聊城",baseValue:22,coord:[115.9845,36.4558]},{name:"滨州",baseValue:18,coord:[117.9683,37.4015]},{name:"东营",baseValue:15,coord:[118.6747,37.4345]},{name:"威海",baseValue:12,coord:[122.1204,37.5134]},{name:"日照",baseValue:10,coord:[119.5273,35.4165]},{name:"枣庄",baseValue:8,coord:[117.3235,34.8105]},{name:"保定",baseValue:48,coord:[115.4647,38.8739]},{name:"邯郸",baseValue:42,coord:[114.5388,36.6256]},{name:"秦皇岛",baseValue:38,coord:[119.6005,39.9425]},{name:"邢台",baseValue:32,coord:[114.5046,37.0458]},{name:"张家口",baseValue:28,coord:[114.8875,40.7675]},{name:"承德",baseValue:22,coord:[117.9239,40.4318]},{name:"沧州",baseValue:18,coord:[116.8386,38.3042]},{name:"廊坊",baseValue:15,coord:[116.6837,39.5381]},{name:"衡水",baseValue:12,coord:[115.6738,37.735]},{name:"大同",baseValue:10,coord:[113.3001,40.0894]},{name:"阳泉",baseValue:8,coord:[113.5807,37.852]},{name:"长治",baseValue:6,coord:[113.1163,36.1952]},{name:"晋城",baseValue:5,coord:[112.8513,35.4907]},{name:"鞍山",baseValue:38,coord:[122.9946,41.1088]},{name:"抚顺",baseValue:32,coord:[123.9572,41.8772]},{name:"本溪",baseValue:28,coord:[123.7675,41.2942]},{name:"丹东",baseValue:22,coord:[124.3542,40.0014]},{name:"锦州",baseValue:18,coord:[121.0707,41.0992]},{name:"营口",baseValue:15,coord:[122.2352,40.6676]},{name:"阜新",baseValue:12,coord:[121.6708,42.0118]},{name:"辽阳",baseValue:10,coord:[123.2369,41.2405]},{name:"盘锦",baseValue:8,coord:[122.0696,41.1242]},{name:"铁岭",baseValue:6,coord:[123.8445,42.2905]},{name:"朝阳",baseValue:5,coord:[120.4537,41.576]},{name:"葫芦岛",baseValue:4,coord:[120.8569,40.7557]},{name:"吉林",baseValue:12,coord:[126.5496,43.8378]},{name:"通化",baseValue:10,coord:[125.9396,41.7212]},{name:"白山",baseValue:8,coord:[126.427,41.9425]},{name:"松原",baseValue:6,coord:[124.826,45.1412]},{name:"白城",baseValue:4,coord:[122.8411,45.6396]},{name:"齐齐哈尔",baseValue:32,coord:[123.918,47.3528]},{name:"牡丹江",baseValue:28,coord:[129.6186,44.5828]},{name:"佳木斯",baseValue:22,coord:[130.3616,46.8096]},{name:"大庆",baseValue:18,coord:[125.104,46.5868]},{name:"鸡西",baseValue:15,coord:[130.9697,45.295]},{name:"鹤岗",baseValue:12,coord:[130.2977,47.352]},{name:"双鸭山",baseValue:10,coord:[131.1571,46.6435]},{name:"伊春",baseValue:8,coord:[128.8994,47.7247]},{name:"绥化",baseValue:6,coord:[126.9689,46.6376]},{name:"黑河",baseValue:4,coord:[127.4998,50.2496]},{name:"衢州",baseValue:28,coord:[118.859,28.97]},{name:"丽水",baseValue:22,coord:[119.9218,28.4519]},{name:"舟山",baseValue:18,coord:[122.2072,29.9855]},{name:"黄山",baseValue:15,coord:[118.3173,29.7092]},{name:"安庆",baseValue:12,coord:[117.0635,30.5228]},{name:"芜湖",baseValue:10,coord:[118.3762,31.3263]},{name:"马鞍山",baseValue:8,coord:[118.5069,31.6704]},{name:"铜陵",baseValue:6,coord:[117.8121,30.9455]},{name:"淮南",baseValue:5,coord:[116.9997,32.6255]},{name:"淮北",baseValue:4,coord:[116.7947,33.9717]},{name:"蚌埠",baseValue:3,coord:[117.3632,32.9397]},{name:"阜阳",baseValue:2,coord:[115.8205,32.9012]},{name:"漳州",baseValue:38,coord:[117.6472,24.5129]},{name:"莆田",baseValue:32,coord:[119.0078,25.4541]},{name:"宁德",baseValue:28,coord:[119.5472,26.6266]},{name:"南平",baseValue:22,coord:[118.1784,26.6356]},{name:"三明",baseValue:18,coord:[117.6389,26.2634]},{name:"龙岩",baseValue:15,coord:[117.0171,25.0783]},{name:"九江",baseValue:42,coord:[115.9928,29.712]},{name:"景德镇",baseValue:35,coord:[117.1784,29.2687]},{name:"萍乡",baseValue:28,coord:[113.8522,27.6229]},{name:"新余",baseValue:22,coord:[114.9167,27.8173]},{name:"鹰潭",baseValue:18,coord:[117.0692,28.2386]},{name:"赣州",baseValue:15,coord:[114.9353,25.8315]},{name:"吉安",baseValue:12,coord:[114.9861,27.1137]},{name:"宜春",baseValue:10,coord:[114.4166,27.8155]},{name:"抚州",baseValue:8,coord:[116.3583,27.9492]},{name:"上饶",baseValue:5,coord:[117.9435,28.4544]},{name:"洛阳",baseValue:62,coord:[112.4539,34.6197]},{name:"开封",baseValue:55,coord:[114.3076,34.7975]},{name:"安阳",baseValue:48,coord:[114.3881,36.0996]},{name:"新乡",baseValue:42,coord:[113.9268,35.3026]},{name:"焦作",baseValue:38,coord:[113.2383,35.2159]},{name:"许昌",baseValue:32,coord:[113.8522,34.0357]},{name:"平顶山",baseValue:28,coord:[113.1927,33.7662]},{name:"信阳",baseValue:22,coord:[114.0919,32.147]},{name:"南阳",baseValue:18,coord:[112.5285,32.9908]},{name:"商丘",baseValue:15,coord:[115.6505,34.437]},{name:"周口",baseValue:12,coord:[114.6968,33.6258]},{name:"驻马店",baseValue:10,coord:[114.0223,32.9802]},{name:"漯河",baseValue:8,coord:[114.0461,33.576]},{name:"宜昌",baseValue:58,coord:[111.2909,30.6918]},{name:"襄阳",baseValue:52,coord:[112.1226,32.0089]},{name:"荆州",baseValue:48,coord:[112.2397,30.3352]},{name:"荆门",baseValue:42,coord:[112.2044,31.0354]},{name:"鄂州",baseValue:38,coord:[114.8949,30.3844]},{name:"孝感",baseValue:32,coord:[113.9167,30.9262]},{name:"黄冈",baseValue:28,coord:[114.8722,30.4477]},{name:"黄石",baseValue:22,coord:[115.0386,30.1997]},{name:"咸宁",baseValue:18,coord:[114.3227,29.8414]},{name:"随州",baseValue:15,coord:[113.3826,31.6902]},{name:"十堰",baseValue:12,coord:[110.7879,32.629]},{name:"株洲",baseValue:58,coord:[113.1339,27.8274]},{name:"湘潭",baseValue:52,coord:[112.944,27.8297]},{name:"衡阳",baseValue:48,coord:[112.572,26.8932]},{name:"岳阳",baseValue:42,coord:[113.1329,29.3703]},{name:"常德",baseValue:38,coord:[111.6986,29.0317]},{name:"张家界",baseValue:32,coord:[110.4792,29.117]},{name:"益阳",baseValue:28,coord:[112.3552,28.5539]},{name:"郴州",baseValue:22,coord:[113.0317,25.7832]},{name:"永州",baseValue:18,coord:[111.6132,26.4204]},{name:"怀化",baseValue:15,coord:[109.9985,27.5494]},{name:"娄底",baseValue:12,coord:[111.9937,27.6998]},{name:"邵阳",baseValue:10,coord:[111.4677,27.239]},{name:"珠海",baseValue:58,coord:[113.5539,22.2247]},{name:"汕头",baseValue:52,coord:[116.6824,23.3535]},{name:"韶关",baseValue:42,coord:[113.5915,24.8013]},{name:"湛江",baseValue:38,coord:[110.3645,21.2749]},{name:"肇庆",baseValue:32,coord:[112.4716,23.0515]},{name:"江门",baseValue:28,coord:[113.0949,22.5751]},{name:"茂名",baseValue:22,coord:[110.9252,21.6628]},{name:"惠州",baseValue:18,coord:[114.4161,23.1115]},{name:"梅州",baseValue:15,coord:[116.1176,24.2888]},{name:"汕尾",baseValue:12,coord:[115.3647,22.7834]},{name:"河源",baseValue:10,coord:[114.6978,23.7463]},{name:"阳江",baseValue:8,coord:[111.9822,21.8579]},{name:"清远",baseValue:6,coord:[113.0515,23.7022]},{name:"中山",baseValue:5,coord:[113.3839,22.5211]},{name:"潮州",baseValue:4,coord:[116.6227,23.6566]},{name:"揭阳",baseValue:3,coord:[116.3728,23.5498]},{name:"云浮",baseValue:2,coord:[112.0439,22.9152]},{name:"柳州",baseValue:48,coord:[109.4286,24.3263]},{name:"桂林",baseValue:42,coord:[110.1799,25.2345]},{name:"梧州",baseValue:35,coord:[111.2791,23.4769]},{name:"北海",baseValue:28,coord:[109.1199,21.4733]},{name:"防城港",baseValue:22,coord:[108.3538,21.6147]},{name:"钦州",baseValue:18,coord:[108.6542,21.9742]},{name:"贵港",baseValue:15,coord:[109.5989,23.1113]},{name:"玉林",baseValue:12,coord:[110.1812,22.654]},{name:"百色",baseValue:8,coord:[106.6182,23.9023]},{name:"三亚",baseValue:42,coord:[109.5083,18.2479]},{name:"三沙",baseValue:35,coord:[112.3387,16.8313]},{name:"儋州",baseValue:28,coord:[109.5768,19.5175]},{name:"琼海",baseValue:22,coord:[110.4745,19.2584]},{name:"文昌",baseValue:18,coord:[110.7979,19.5432]},{name:"万宁",baseValue:15,coord:[110.3888,18.7958]},{name:"绵阳",baseValue:58,coord:[104.6794,31.467]},{name:"德阳",baseValue:52,coord:[104.3979,31.127]},{name:"攀枝花",baseValue:48,coord:[101.7186,26.5807]},{name:"广元",baseValue:42,coord:[105.8438,32.4354]},{name:"遂宁",baseValue:38,coord:[105.5928,30.5328]},{name:"内江",baseValue:32,coord:[105.0586,29.5803]},{name:"乐山",baseValue:28,coord:[103.7656,29.552]},{name:"南充",baseValue:22,coord:[106.1107,30.8378]},{name:"眉山",baseValue:18,coord:[103.8485,30.0758]},{name:"宜宾",baseValue:15,coord:[104.643,28.7517]},{name:"达州",baseValue:12,coord:[107.5021,31.2096]},{name:"六盘水",baseValue:48,coord:[104.846,26.5948]},{name:"遵义",baseValue:42,coord:[106.9373,27.7083]},{name:"安顺",baseValue:38,coord:[105.9476,25.9316]},{name:"毕节",baseValue:32,coord:[105.2848,27.3019]},{name:"铜仁",baseValue:28,coord:[109.1916,27.7311]},{name:"曲靖",baseValue:52,coord:[103.7967,25.49]},{name:"玉溪",baseValue:48,coord:[102.546,24.3527]},{name:"保山",baseValue:42,coord:[99.1617,25.112]},{name:"昭通",baseValue:38,coord:[103.7173,27.338]},{name:"丽江",baseValue:32,coord:[100.2259,26.8552]},{name:"大理",baseValue:18,coord:[100.2658,25.6894]},{name:"日喀则",baseValue:22,coord:[88.8851,29.267]},{name:"昌都",baseValue:18,coord:[97.1785,31.1369]},{name:"宝鸡",baseValue:52,coord:[107.2381,34.3616]},{name:"咸阳",baseValue:48,coord:[108.7093,34.3296]},{name:"渭南",baseValue:42,coord:[109.5097,34.5024]},{name:"铜川",baseValue:38,coord:[108.945,34.896]},{name:"延安",baseValue:32,coord:[109.4908,36.5965]},{name:"榆林",baseValue:28,coord:[109.7341,38.2853]},{name:"汉中",baseValue:22,coord:[107.0238,33.0677]},{name:"安康",baseValue:18,coord:[109.0293,32.6852]},{name:"嘉峪关",baseValue:42,coord:[98.2773,39.7723]},{name:"金昌",baseValue:38,coord:[102.1879,38.5142]},{name:"白银",baseValue:32,coord:[104.1386,36.5448]},{name:"天水",baseValue:28,coord:[105.7249,34.5809]},{name:"武威",baseValue:22,coord:[102.638,37.9331]},{name:"张掖",baseValue:18,coord:[100.4555,38.9258]},{name:"石嘴山",baseValue:38,coord:[106.3838,39.0133]},{name:"吴忠",baseValue:32,coord:[106.1994,37.9872]},{name:"固原",baseValue:28,coord:[106.2428,36.0102]},{name:"中卫",baseValue:22,coord:[105.1896,37.4994]},{name:"克拉玛依",baseValue:42,coord:[84.8695,45.5795]},{name:"吐鲁番",baseValue:38,coord:[89.184,42.9476]},{name:"哈密",baseValue:32,coord:[93.5135,42.8185]},{name:"包头",baseValue:42,coord:[109.8403,40.6572]},{name:"乌海",baseValue:35,coord:[106.8256,39.6542]},{name:"赤峰",baseValue:32,coord:[118.887,42.2578]},{name:"通辽",baseValue:28,coord:[122.2434,43.6174]},{name:"鄂尔多斯",baseValue:22,coord:[109.7813,39.6086]},{name:"呼伦贝尔",baseValue:18,coord:[119.7582,49.2122]}].map(N=>({name:N.name,value:N.baseValue,coord:N.coord,baseValue:N.baseValue}))),g=kr(()=>[...m.value].sort((N,B)=>B.value-N.value).slice(0,10)),_=kr(()=>[...m.value].sort((N,B)=>N.value-B.value)[0]),b=kr(()=>Math.max(...m.value.map(N=>N.value))),x=kr(()=>Math.min(...m.value.map(N=>N.value))),v=kr(()=>{const N=m.value.reduce((B,Y)=>B+Y.value,0);return Math.round(N/m.value.length)}),w=N=>N>=150?"#c62828":N>=100?"#ef6c00":N>=60?"#f9a825":N>=30?"#558b2f":"#00838f",S=N=>{const B=N*.15,Y=(Math.random()-.5)*2*B;let j=N+Y;return j=Math.max(1,Math.min(200,j)),Math.round(j*10)/10},E=()=>{m.value=m.value.map(B=>({...B,value:S(B.baseValue)}));const N=new Date;s.value=N.toLocaleTimeString("zh-CN"),l.value=N.toLocaleTimeString("zh-CN"),d(),O()},M=async()=>{n.value=!0,await new Promise(N=>setTimeout(N,500)),E(),n.value=!1},L=()=>{a.value=!a.value,a.value?I():C()},I=()=>{i&&clearInterval(i),i=window.setInterval(()=>{a.value&&E()},3e5)},C=()=>{i&&(clearInterval(i),i=null)},F=()=>{r&&r.setOption({geo3D:{viewControl:{distance:100,alpha:45,beta:0}}})},U=()=>{o.value=!o.value,r&&r.setOption({geo3D:{viewControl:{autoRotate:o.value,autoRotateSpeed:3}}})},O=()=>{if(!r)return;const N=m.value.map(B=>({name:B.name,value:[...B.coord,B.value]}));r.setOption({series:[{data:N}]})},H=()=>{if(!t.value)return;r=ol(t.value);const N=m.value.map(Y=>({name:Y.name,value:[...Y.coord,Y.value]})),B={backgroundColor:"transparent",tooltip:{trigger:"item",backgroundColor:"rgba(0,0,0,0.85)",borderColor:"#667eea",borderWidth:1,padding:[12,16],textStyle:{color:"#fff",fontSize:14},formatter:Y=>{if(Y.value&&Y.value.length>=3){const j=w(Y.value[2]);return`
            <div style="font-size:16px;font-weight:bold;margin-bottom:8px;color:${j}">${Y.name}</div>
            <div style="display:flex;justify-content:space-between;gap:20px;">
              <span>热点值:</span>
              <span style="font-weight:bold;color:${j}">${Y.value[2]}</span>
            </div>
            <div style="display:flex;justify-content:space-between;gap:20px;">
              <span>高度:</span>
              <span style="font-weight:bold;">${Math.round(Y.value[2]*500)}m</span>
            </div>
          `}return Y.name}},visualMap:{show:!0,min:0,max:200,inRange:{color:["#1a237e","#0d47a1","#00838f","#00695c","#558b2f","#f9a825","#ef6c00","#c62828"]},calculable:!0,textStyle:{color:"rgba(255,255,255,0.85)",fontSize:12},right:20,top:20,orient:"vertical",itemWidth:12,itemHeight:140,text:["高","低"],textGap:10},geo3D:{map:"china",roam:!0,regionHeight:4,itemStyle:{color:"#1e2a4a",opacity:1,borderWidth:.8,borderColor:"rgba(100, 180, 255, 0.4)"},emphasis:{itemStyle:{color:"#2a4a7a",opacity:1},label:{show:!0,formatter:Y=>Y.name||"",position:"top",textStyle:{color:"#fff",fontSize:14,fontWeight:"bold",textBorderColor:"rgba(0,0,0,0.8)",textBorderWidth:2}}},light:{main:{intensity:1.2,shadow:!0,shadowQuality:"high",alpha:35,beta:60},ambient:{intensity:.6}},viewControl:{distance:100,alpha:45,beta:0,minAlpha:5,maxAlpha:90,autoRotate:!1,rotateSensitivity:2,zoomSensitivity:1.5,panSensitivity:2},shading:"color",temporalSuperSampling:{enable:!0},postEffect:{enable:!0,bloom:{enable:!0,intensity:.08},SSAO:{enable:!0,radius:3,intensity:.8}},label:{show:!1}},series:[{type:"bar3D",coordinateSystem:"geo3D",data:N,shading:"lambert",barSize:1.8,bevel:!0,bevelSize:.3,minHeight:.5,silent:!1,itemStyle:{opacity:.95},label:{show:!0,formatter:Y=>Y.value[2]>=60?Y.name:"",position:"top",textStyle:{color:"#fff",fontSize:9,fontWeight:"bold",textBorderColor:"rgba(0,0,0,0.9)",textBorderWidth:2}},emphasis:{itemStyle:{color:"#ff5722"},label:{show:!0,formatter:Y=>`${Y.name}
${Y.value[2]}`,textStyle:{fontSize:14}}}}]};fetch("https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json").then(Y=>{if(!Y.ok)throw new Error("Network response was not ok");return Y.json()}).then(Y=>{ca("china",Y),r==null||r.setOption(B),E()}).catch(Y=>{console.warn("Failed to load map from remote, using fallback:",Y),fetch("/china.json").then(j=>j.json()).then(j=>{ca("china",j),r==null||r.setOption(B),E()}).catch(()=>{ca("china",q),r==null||r.setOption(B),E()})})},q={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"中国"},geometry:{type:"Polygon",coordinates:[[[73.44696,18.1977],[73.44696,53.5579],[134.7685,53.5579],[134.7685,18.1977],[73.44696,18.1977]]]}}]},Z=()=>{r==null||r.resize()};return el(()=>{H(),I(),window.addEventListener("resize",Z)}),tl(()=>{C(),window.removeEventListener("resize",Z),r==null||r.dispose()}),(N,B)=>{var Y,j;return Ot(),Rt("div",Pf,[X("div",Nf,[B[5]||(B[5]=X("h2",null,"数字沙盘 - 3D中国城市热点立体视图",-1)),X("div",Rf,[X("div",{class:Yt(["live-indicator",{active:a.value}])},[B[3]||(B[3]=X("span",{class:"live-dot"},null,-1)),X("span",null,me(a.value?"实时更新中":"已暂停"),1)],2),X("div",Of,[X("span",null,"上次更新: "+me(s.value),1)]),X("button",{class:"toggle-btn",onClick:L},me(a.value?"暂停":"开始"),1),X("button",{class:"refresh-btn",onClick:M},[X("span",{class:Yt(["refresh-icon",{spinning:n.value}])},"↻",2),B[4]||(B[4]=rl(" 刷新 ",-1))])])]),X("div",If,[B[6]||(B[6]=X("div",{class:"ticker-label"},"📰 实时热点",-1)),X("div",Bf,[X("div",{class:"ticker-scroll",style:la({animationPlayState:a.value?"running":"paused"})},[(Ot(!0),Rt(ua,null,ha(h.value,(te,Q)=>(Ot(),Rt("span",{key:Q,class:"news-item",onClick:ve=>p(te)},[X("span",{class:Yt(["news-category",te.category])},me(te.categoryText),3),X("span",Vf,me(te.title),1),X("span",zf,"👁️ "+me(te.views)+"万",1)],8,Ff))),128))],4)])]),X("div",Gf,[X("div",Uf,[X("div",{ref_key:"chartRef",ref:t,class:"chart-container"},null,512),B[9]||(B[9]=X("div",{class:"chart-overlay"},[X("div",{class:"overlay-title"},"CityPulse 城市热点监测"),X("div",{class:"overlay-subtitle"},"实时数据 · 全国覆盖 · 3D可视化")],-1)),X("div",Hf,[X("div",kf,[B[7]||(B[7]=X("span",{class:"hot-icon"},"🔥",-1)),B[8]||(B[8]=X("span",null,"热搜榜",-1)),X("span",Wf,me(l.value),1)]),X("div",Xf,[(Ot(!0),Rt(ua,null,ha(f.value,(te,Q)=>(Ot(),Rt("div",{key:Q,class:Yt(["hot-search-item","rank-"+(Q+1)])},[X("span",jf,me(Q+1),1),X("span",qf,me(te.title),1),X("span",Zf,me(te.heat),1),X("span",{class:Yt(["hot-trend",te.trend>0?"up":"down"])},me(te.trend>0?"↑":"↓")+me(Math.abs(te.trend)),3)],2))),128))])])]),X("div",Yf,[X("div",Kf,[B[10]||(B[10]=X("h3",null,"🔥 热点排名 TOP 10",-1)),X("div",$f,[(Ot(!0),Rt(ua,null,ha(g.value,(te,Q)=>(Ot(),Rt("div",{key:te.name,class:Yt(["city-item","rank-"+(Q+1)])},[X("div",Qf,me(Q+1),1),X("div",Jf,[X("span",ep,me(te.name),1),X("span",{class:"city-value",style:la({color:w(te.value)})},me(te.value),5)]),X("div",tp,[X("div",{class:"city-bar-fill",style:la({width:te.value/b.value*100+"%",backgroundColor:w(te.value)})},null,4)])],2))),128))])]),X("div",rp,[B[15]||(B[15]=X("h3",null,"📊 实时统计",-1)),X("div",ip,[X("div",ap,[B[11]||(B[11]=X("span",{class:"stat-label"},"监测城市",-1)),X("span",np,me(m.value.length),1)]),X("div",op,[B[12]||(B[12]=X("span",{class:"stat-label"},"平均热度",-1)),X("span",sp,me(v.value),1)]),X("div",lp,[B[13]||(B[13]=X("span",{class:"stat-label"},"最高热度",-1)),X("span",up,me(b.value),1),X("span",hp,me((Y=g.value[0])==null?void 0:Y.name),1)]),X("div",cp,[B[14]||(B[14]=X("span",{class:"stat-label"},"最低热度",-1)),X("span",dp,me(x.value),1),X("span",fp,me((j=_.value)==null?void 0:j.name),1)])])]),B[18]||(B[18]=il('<div class="panel-section" data-v-8fc5d4fc><h3 data-v-8fc5d4fc>🎨 图例说明</h3><div class="legend" data-v-8fc5d4fc><div class="legend-item" data-v-8fc5d4fc><div class="legend-color hot" data-v-8fc5d4fc></div><span data-v-8fc5d4fc>高热点区域 (150+)</span></div><div class="legend-item" data-v-8fc5d4fc><div class="legend-color medium-high" data-v-8fc5d4fc></div><span data-v-8fc5d4fc>中高热点 (100-150)</span></div><div class="legend-item" data-v-8fc5d4fc><div class="legend-color medium" data-v-8fc5d4fc></div><span data-v-8fc5d4fc>中热点区域 (60-100)</span></div><div class="legend-item" data-v-8fc5d4fc><div class="legend-color low" data-v-8fc5d4fc></div><span data-v-8fc5d4fc>低热点区域 (0-60)</span></div></div></div>',1)),X("div",pp,[B[16]||(B[16]=X("h3",null,"⚙️ 视角控制",-1)),X("div",mp,[X("button",{onClick:F,class:"view-btn"},"重置视角"),X("button",{onClick:U,class:"view-btn"},me(o.value?"停止旋转":"自动旋转"),1)]),B[17]||(B[17]=X("div",{class:"height-explain"},[X("p",null,"💡 热点值越高，城市地块上升越高"),X("p",null,"🖱️ 左键旋转 · 滚轮缩放 · 右键平移")],-1))])])]),u.value?(Ot(),Rt("div",{key:0,class:"news-modal",onClick:B[2]||(B[2]=te=>u.value=null)},[X("div",{class:"modal-content",onClick:B[1]||(B[1]=al(()=>{},["stop"]))},[X("div",gp,[X("span",{class:Yt(["modal-category",u.value.category])},me(u.value.categoryText),3),X("h3",null,me(u.value.title),1),X("button",{class:"modal-close",onClick:B[0]||(B[0]=te=>u.value=null)},"×")]),X("div",_p,[X("div",vp,[X("span",null,"👁️ 浏览量: "+me(u.value.views)+"万",1),X("span",null,"💬 评论: "+me(u.value.comments),1),X("span",null,"🔄 转发: "+me(u.value.shares),1)]),X("div",yp,[X("span",null,"📍 热点区域: "+me(u.value.region),1)]),X("p",xp,me(u.value.description),1)])])])):nl("",!0)])}}}),Sp=Qs(bp,[["__scopeId","data-v-8fc5d4fc"]]);export{Sp as default};
