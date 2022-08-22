import{c as v,j as Q}from"./docSearch.60d7ae5d.js";var b={exports:{}};(function(p){(function(r,l){p.exports?p.exports=l():(r.AnchorJS=l(),r.anchors=new r.AnchorJS)})(v,function(){function r(l){this.options=l||{},this.elements=[];function f(A){A.icon=Object.prototype.hasOwnProperty.call(A,"icon")?A.icon:"\uE9CB",A.visible=Object.prototype.hasOwnProperty.call(A,"visible")?A.visible:"hover",A.placement=Object.prototype.hasOwnProperty.call(A,"placement")?A.placement:"right",A.ariaLabel=Object.prototype.hasOwnProperty.call(A,"ariaLabel")?A.ariaLabel:"Anchor",A.class=Object.prototype.hasOwnProperty.call(A,"class")?A.class:"",A.base=Object.prototype.hasOwnProperty.call(A,"base")?A.base:"",A.truncate=Object.prototype.hasOwnProperty.call(A,"truncate")?Math.floor(A.truncate):64,A.titleText=Object.prototype.hasOwnProperty.call(A,"titleText")?A.titleText:""}f(this.options),this.isTouchDevice=function(){return Boolean("ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(A){var e,i,a,o,t,h,w,m,s,n,d,u,g=[];if(f(this.options),d=this.options.visible,d==="touch"&&(d=this.isTouchDevice()?"always":"hover"),A||(A="h2, h3, h4, h5, h6"),e=y(A),e.length===0)return this;for(C(),i=document.querySelectorAll("[id]"),a=[].map.call(i,function(E){return E.id}),t=0;t<e.length;t++){if(this.hasAnchorJSLink(e[t])){g.push(t);continue}if(e[t].hasAttribute("id"))o=e[t].getAttribute("id");else if(e[t].hasAttribute("data-anchor-id"))o=e[t].getAttribute("data-anchor-id");else{m=this.urlify(e[t].textContent),s=m,w=0;do h!==void 0&&(s=m+"-"+w),h=a.indexOf(s),w+=1;while(h!==-1);h=void 0,a.push(s),e[t].setAttribute("id",s),o=s}n=document.createElement("a"),n.className="anchorjs-link "+this.options.class,n.setAttribute("aria-label",this.options.ariaLabel),n.setAttribute("data-anchorjs-icon",this.options.icon),this.options.titleText&&(n.title=this.options.titleText),u=document.querySelector("base")?window.location.pathname+window.location.search:"",u=this.options.base||u,n.href=u+"#"+o,d==="always"&&(n.style.opacity="1"),this.options.icon==="\uE9CB"&&(n.style.font="1em/1 anchorjs-icons",this.options.placement==="left"&&(n.style.lineHeight="inherit")),this.options.placement==="left"?(n.style.position="absolute",n.style.marginLeft="-1em",n.style.paddingRight=".5em",e[t].insertBefore(n,e[t].firstChild)):(n.style.paddingLeft=".375em",e[t].appendChild(n))}for(t=0;t<g.length;t++)e.splice(g[t]-t,1);return this.elements=this.elements.concat(e),this},this.remove=function(A){for(var e,i,a=y(A),o=0;o<a.length;o++)i=a[o].querySelector(".anchorjs-link"),i&&(e=this.elements.indexOf(a[o]),e!==-1&&this.elements.splice(e,1),a[o].removeChild(i));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(A){var e=document.createElement("textarea");e.innerHTML=A,A=e.value;var i=/[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g;return this.options.truncate||f(this.options),A.trim().replace(/'/gi,"").replace(i,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(A){var e=A.firstChild&&(" "+A.firstChild.className+" ").indexOf(" anchorjs-link ")>-1,i=A.lastChild&&(" "+A.lastChild.className+" ").indexOf(" anchorjs-link ")>-1;return e||i||!1};function y(A){var e;if(typeof A=="string"||A instanceof String)e=[].slice.call(document.querySelectorAll(A));else if(Array.isArray(A)||A instanceof NodeList)e=[].slice.call(A);else throw new TypeError("The selector provided to AnchorJS was invalid.");return e}function C(){if(document.head.querySelector("style.anchorjs")===null){var A=document.createElement("style"),e=".anchorjs-link{opacity:0;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}",i=":hover>.anchorjs-link,.anchorjs-link:focus{opacity:1}",a='@font-face{font-family:anchorjs-icons;src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype")}',o="[data-anchorjs-icon]::after{content:attr(data-anchorjs-icon)}",t;A.className="anchorjs",A.appendChild(document.createTextNode("")),t=document.head.querySelector('[rel="stylesheet"],style'),t===void 0?document.head.appendChild(A):document.head.insertBefore(A,t),A.sheet.insertRule(e,A.sheet.cssRules.length),A.sheet.insertRule(i,A.sheet.cssRules.length),A.sheet.insertRule(o,A.sheet.cssRules.length),A.sheet.insertRule(a,A.sheet.cssRules.length)}}}return r})})(b);var j=b.exports,c=new j;c.add(".doc-block h1");c.add(".doc-block h2");c.add(".doc-block h3");c.add(".doc-block h4");c.add(".doc-block ul.navigation li:last-child");Q(document).ready(function(){c.add(".anchored")});
//# sourceMappingURL=initAnchor.7147cf7a.js.map
