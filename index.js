/* eslint-env node */
'use strict';

module.exports = {
    name: 'ember-cli-pendo-utils',
    isDevelopingAddon: function () {
        return false;
    },
    contentFor: function (type, config) {
        var pendo = config['pendo'] || {};
        var options = pendo.options || {};
        var location = pendo.location || 'head';

        if (type === location && config.environment !== 'test') {
            return "<script>" +
                "(function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];" +
                "  v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){" +
                "  o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);" +
                "  y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/" + options.apiKey + "/pendo.js';" +
                "  z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');" +
                "  var options=JSON.parse('" + JSON.stringify(options) + "');" +
                "  options.events={" +
                "   ready:function(){$(window).trigger('pendo.ready');}," +
                "   guidesLoaded:function(){$(window).trigger('pendo.guidesLoaded');}," +
                "   guidesFailed:function(){$(window).trigger('pendo.guidesFailed');}" +
                "  };" +
                "  window.pendo.initialize(options);" +
                "</script>";
        }
    }
};
