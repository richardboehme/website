import{j as a,H as r,r as n,x as o,a as g}from"./docSearch.60d7ae5d.js";import"./initAnchor.7147cf7a.js";function s(){var t=a(".nav-item .active").attr("href"),e=t,i=e+"-features";a(".features").hide(),a(i).show(),history.replaceState({},"",t)}a(document).ready(function(){a('a.nav-link[data-toggle="tab"]').click(function(t){const e=a(t.target.dataset.tag);e.siblings().removeClass("active"),e.addClass("active")}),r.registerLanguage("ruby",n),r.registerLanguage("xml",o),r.registerLanguage("json",g),r.highlightAll(),a(window).scrollspy({target:".nav.menu",offset:110}),s(),a(window).on("activate.bs.scrollspy",s)});
//# sourceMappingURL=documentation.18fc64a0.js.map
