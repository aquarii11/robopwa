(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(7),c=t.n(a),i=(t(13),t(1)),l=t(2),s=t(4),u=t(3),h=t(5),d=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).updateCount=function(){t.setState(function(e){return{count:t.state.count+1}},function(){return console.log(t.state.count)})},t.state={count:0},t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,n){return console.log("ComponentUpdatenextProps",e),console.log("ComponentUpdatenextState",n),n.count!==this.state.count||e.color!==this.props.color}},{key:"render",value:function(){var e=this;return console.log("CounterButton"),r.a.createElement("button",{style:{color:this.props.color},onClick:function(){e.updateCount()}},"Count:",this.state.count)}}]),n}(r.a.PureComponent),f=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,n){return!1}},{key:"render",value:function(){return console.log("header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(d,{color:"red"}))}}]),n}(r.a.Component),g=(t(14),function(e){e.searchfield;var n=e.searchChange;return console.log("SearchBox"),r.a.createElement("div",null,r.a.createElement("input",{"aria-label":"Search Robot",className:"tc pa2 br2 bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:n}))}),v=function(e){var n=e.id,t=e.name,o=e.email;return console.log("Card"),r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("h3",null,o)))},p=function(e){var n=e.robots;console.log("CardList");var t=Object.keys(n).map(function(e){return r.a.createElement(v,{key:e,id:n[e].id,name:n[e].name,email:n[e].email})});return r.a.createElement("div",null,t)},m=function(e){return console.log("Scroll"),console.log(e),r.a.createElement("div",{style:{overflowY:"scroll"}},e.children)},w=function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).onsearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e.setState({robots:n})})}},{key:"render",value:function(){var e=this;if(0===this.state.robots.length)return r.a.createElement("div",null,r.a.createElement("h1",null,"LOADING..."));var n=this.state.robots.filter(function(n){return n.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",{className:"bg-yellow tc"},r.a.createElement(f,null),r.a.createElement(g,{searchChange:this.onsearchChange}),r.a.createElement(m,null,r.a.createElement(p,{robots:n})))}}]),n}(o.Component),b=(t(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function E(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robopwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/robopwa","/service-worker.js");b?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):E(n,e)})}}(),function(){if("serviceWorker"in navigator){if(new URL("/robopwa",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robopwa","/service-worker.js");k?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):C(e)})}}()},8:function(e,n,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.05fc182b.chunk.js.map