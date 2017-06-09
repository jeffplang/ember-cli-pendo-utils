/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-pendo-utils',
  isDevelopingAddon: function () {
    return false;
  },
  contentFor: function (type, config) {
    if (type === 'head' && config.environment !== 'test') {
      return "<script>" +
        "(function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];" +
        "  v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){" +
        "  o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);" +
        "  y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/" + config['pendo'].apiKey + "/pendo.js';" +
        "  z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');" +
        "  var opts=JSON.parse('" + JSON.stringify(config['pendo']) + "');" +
        "  window.pendo.initialize(opts);" +
        "</script>"
    }
  }
};
