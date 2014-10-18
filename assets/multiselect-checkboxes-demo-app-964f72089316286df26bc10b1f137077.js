define("multiselect-checkboxes-demo-app/app",["ember","ember/resolver","ember/load-initializers","multiselect-checkboxes-demo-app/config/environment","exports"],function(e,t,s,n,a){"use strict";var o=e["default"],c=t["default"],l=s["default"],r=n["default"];o.MODEL_FACTORY_INJECTIONS=!0;var p=o.Application.extend({modulePrefix:r.modulePrefix,podModulePrefix:r.podModulePrefix,Resolver:c});l(p,r.modulePrefix),a["default"]=p}),define("multiselect-checkboxes-demo-app/components/multiselect-checkbox-option",["ember-multiselect-checkboxes/components/multiselect-checkbox-option","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("multiselect-checkboxes-demo-app/components/multiselect-checkboxes",["ember-multiselect-checkboxes/components/multiselect-checkboxes","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("multiselect-checkboxes-demo-app/controllers/application",["ember","exports"],function(e,t){"use strict";var s=e["default"],n=s.Object.extend({name:null,gender:null});t["default"]=s.Controller.extend({fruits:["apple","banana","orange"],selectedFruits:[],cars:[{make:"BMW",color:"black"},{make:"Ferari",color:"red"},{make:"Volvo",color:"blue"}],selectedCars:[],persons:[n.create({name:"Lisa",gender:"Female"}),n.create({name:"Bob",gender:"Male"}),n.create({name:"John",gender:"Male"})],selectedPersons:[]})}),define("multiselect-checkboxes-demo-app/router",["ember","multiselect-checkboxes-demo-app/config/environment","exports"],function(e,t,s){"use strict";var n=e["default"],a=t["default"],o=n.Router.extend({location:a.locationType});o.map(function(){}),s["default"]=o}),define("multiselect-checkboxes-demo-app/templates/application",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,o){function c(e,t){var s,a="";return t.buffer.push("\n          <li>"),s=n._triageMustache.call(e,"fruit",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("</li>\n        "),a}function l(e,t){var s,a="";return t.buffer.push("\n          <li>make: "),s=n._triageMustache.call(e,"car.make",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push(", color: "),s=n._triageMustache.call(e,"car.color",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("</li>\n        "),a}function r(e,t){var s,a="";return t.buffer.push("\n          <li>name: "),s=n._triageMustache.call(e,"person.name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push(", gender: "),s=n._triageMustache.call(e,"person.gender",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("</li>\n        "),a}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),o=o||{};var p,i,h,u="",f=n.helperMissing,m=this.escapeExpression,b=this;return o.buffer.push('<article class="container">\n  <h1 id=\'title\'>Ember multiselect-checkboxes demo</h1>\n\n  <p>Documentation for this component is available\n    <a href="https://github.com/rsschermer/ember-multiselect-checkboxes">here</a>.\n  </p>\n\n  <p>The source for this demo is available\n    <a href="https://github.com/rsschermer/ember-multiselect-checkboxes/tree/gh-pages/demo-app">here</a>.\n  </p>\n\n  <section>\n    <h2>Array of primitives</h2>\n\n    <p>This example uses a plain javascript array as the selection options, with no label property specified:</p>\n\n    <p>'),o.buffer.push(m((i=n["multiselect-checkboxes"]||t&&t["multiselect-checkboxes"],h={hash:{options:"fruits",selection:"selectedFruits"},hashTypes:{options:"ID",selection:"ID"},hashContexts:{options:t,selection:t},contexts:[],types:[],data:o},i?i.call(t,h):f.call(t,"multiselect-checkboxes",h)))),o.buffer.push("</p>\n\n    <p>Selected fruits:\n      <ul>\n        "),p=n.each.call(t,"fruit","in","selectedFruits",{hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(1,c,o),contexts:[t,t,t],types:["ID","ID","ID"],data:o}),(p||0===p)&&o.buffer.push(p),o.buffer.push("\n      </ul>\n    </p>\n  </section>\n\n  <section>\n    <h2>Array of plain js objects</h2>\n\n    <p>This example uses an array of plain javascript objects as the selection options, with 'make' specified as the\n      label property:\n    </p>\n\n    <p>"),o.buffer.push(m((i=n["multiselect-checkboxes"]||t&&t["multiselect-checkboxes"],h={hash:{options:"cars",selection:"selectedCars",labelProperty:"make"},hashTypes:{options:"ID",selection:"ID",labelProperty:"STRING"},hashContexts:{options:t,selection:t,labelProperty:t},contexts:[],types:[],data:o},i?i.call(t,h):f.call(t,"multiselect-checkboxes",h)))),o.buffer.push("</p>\n\n    <p>Selected cars:\n      <ul>\n        "),p=n.each.call(t,"car","in","selectedCars",{hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(3,l,o),contexts:[t,t,t],types:["ID","ID","ID"],data:o}),(p||0===p)&&o.buffer.push(p),o.buffer.push("\n      </ul>\n    </p>\n  </section>\n\n  <section>\n    <h2>Array of Ember objects</h2>\n    \n    <p>This example uses an array of ember objects as the selection options, with 'name' specified as the\n      label property:\n    </p>\n\n    <p>"),o.buffer.push(m((i=n["multiselect-checkboxes"]||t&&t["multiselect-checkboxes"],h={hash:{options:"persons",selection:"selectedPersons",labelProperty:"name"},hashTypes:{options:"ID",selection:"ID",labelProperty:"STRING"},hashContexts:{options:t,selection:t,labelProperty:t},contexts:[],types:[],data:o},i?i.call(t,h):f.call(t,"multiselect-checkboxes",h)))),o.buffer.push("</p>\n\n    <p>Selected persons:\n      <ul>\n        "),p=n.each.call(t,"person","in","selectedPersons",{hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(5,r,o),contexts:[t,t,t],types:["ID","ID","ID"],data:o}),(p||0===p)&&o.buffer.push(p),o.buffer.push("\n      </ul>\n    </p>\n  </section>\n</article>\n"),u})}),define("multiselect-checkboxes-demo-app/templates/components/multiselect-checkbox-option",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,o){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),o=o||{};var c,l,r,p="",i=n.helperMissing,h=this.escapeExpression;return o.buffer.push("<label>\n  "),o.buffer.push(h((l=n.input||t&&t.input,r={hash:{type:"checkbox",checked:"isSelected"},hashTypes:{type:"STRING",checked:"ID"},hashContexts:{type:t,checked:t},contexts:[],types:[],data:o},l?l.call(t,r):i.call(t,"input",r)))),o.buffer.push("\n  "),c=n._triageMustache.call(t,"label",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:o}),(c||0===c)&&o.buffer.push(c),o.buffer.push("\n</label>\n"),p})}),define("multiselect-checkboxes-demo-app/templates/components/multiselect-checkboxes",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,o){function c(e,t){var s,a,o="";return t.buffer.push("\n  "),t.buffer.push(i((s=n["multiselect-checkbox-option"]||e&&e["multiselect-checkbox-option"],a={hash:{value:"option",labelProperty:"labelProperty",selection:"selection"},hashTypes:{value:"ID",labelProperty:"ID",selection:"ID"},hashContexts:{value:e,labelProperty:e,selection:e},contexts:[],types:[],data:t},s?s.call(e,a):p.call(e,"multiselect-checkbox-option",a)))),t.buffer.push("\n"),o}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),o=o||{};var l,r="",p=n.helperMissing,i=this.escapeExpression,h=this;return l=n.each.call(t,"option","in","options",{hash:{},hashTypes:{},hashContexts:{},inverse:h.noop,fn:h.program(1,c,o),contexts:[t,t,t],types:["ID","ID","ID"],data:o}),(l||0===l)&&o.buffer.push(l),o.buffer.push("\n"),r})}),define("multiselect-checkboxes-demo-app/config/environment",["ember"],function(e){var t="multiselect-checkboxes-demo-app/config/environment",s=e["default"].$('meta[name="'+t+'"]').attr("content"),n=JSON.parse(unescape(s));return{"default":n}}),runningTests?require("multiselect-checkboxes-demo-app/tests/test-helper"):require("multiselect-checkboxes-demo-app/app")["default"].create({});