require.config({
  paths: {
    text: 'js/text.min', //text is required
    json: 'js/json' //alias to plugin
  }
});

// adding the flag `!bust` to the end of dependency name will avoid caching
require(['json!data/package.json!bust'], function(data){
  var out = document.getElementById('wrapper');
  out.innerHTML += '<pre class="prettyprint">' + JSON.stringify({ foo: "sample", bar: "sample" }, null, 4) +'<\/pre>';
});
