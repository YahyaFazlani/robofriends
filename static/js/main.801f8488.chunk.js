(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(12),s=n.n(a),i=(n(22),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))}),o=n(13),h=n(14),l=n(17),d=n(16),b=n(0),j=function(e){var t=e.name,n=e.email,c=e.id;return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(c,"?200x200"),alt:t,lazy:!0}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots,n=t.map((function(e,n){return Object(b.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(b.jsx)("main",{className:"pa3",children:n})};var f=function(e){e.searchfield;var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2 ",children:Object(b.jsx)("input",{type:"search",className:"pa3 ba b--green bg-lightest-blue",placeholder:"Search Robots",onChange:t})})},g=function(e){var t=e.children;return Object(b.jsx)("div",{style:{overflowY:"scroll",height:"560px"},children:t})},m=(n(24),n(15)),O=n.n(m),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){e.setState({robots:t.data})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",style:{overflowY:"hidden"},children:[Object(b.jsx)("h1",{className:"f2",children:"Robofriends"}),Object(b.jsx)(f,{searchChange:this.onSearchChange}),Object(b.jsx)(g,{children:Object(b.jsx)(u,{robots:c})})]}):Object(b.jsx)("h1",{className:"tc center",children:"Loading..."})}}]),n}(c.Component);n(43);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),i()}},[[44,1,2]]]);
//# sourceMappingURL=main.801f8488.chunk.js.map