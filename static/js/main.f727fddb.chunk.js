(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(6),c=n.n(o),s=(n(18),n(2)),i=n(3),a=n(5),h=n(4),b=(n(19),n(1)),u=function(e){Object(a.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(this.props.id,"?200x200")}),Object(b.jsx)("h2",{children:this.props.name}),Object(b.jsx)("p",{children:this.props.email})]})})}}]),n}(r.Component),d=function(e){Object(a.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:this.props.robots.map((function(e,t){return Object(b.jsx)(u,{id:e.id,name:e.name,email:e.email},t)}))})}}]),n}(r.Component),p=function(e){Object(a.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"Search Robots",onChange:this.props.onSearchChange})}}]),n}(r.Component),j=function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"1px solid pink",height:"500px"},children:e.children})},l=n(7),O="CHANGE_SEARCH_FIELD",f="FETCH_ROBOTS_PENDING",g="FETCH_ROBOTS_SUCCESS",v="FETCH_ROBOTS_FAILED",y=function(e){Object(a.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchRobots()}},{key:"render",value:function(){var e=this,t=this.props.robots.filter((function(t){return t.name.toLowerCase().includes(e.props.searchField)}));return this.props.isPending?Object(b.jsx)("h1",{children:"Loading.."}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{children:"Robofriends"}),Object(b.jsx)(p,{onSearchChange:this.props.onSearchChange}),Object(b.jsx)(j,{children:Object(b.jsx)(d,{robots:t})})]})}}]),n}(r.Component),m=Object(l.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.fetchRobots.robots,isPending:e.fetchRobots.isPending,error:e.fetchRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:O,payload:n}));var n},onFetchRobots:function(){return e((function(e){e({type:f}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:g,payload:t})})).catch((function(t){return e({type:v,payload:t})}))}))}}}))(y),x=n(8),C={searchField:""},R={robots:[],error:""},F=n(12),S=n(13),E=Object(F.createLogger)(),w=Object(x.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return Object.assign({},e,{searchField:t.payload});default:return e}},fetchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object.assign({},e,{isPending:!0});case g:return Object.assign({},e,{robots:t.payload,isPending:!1});case v:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),k=Object(x.c)(w,Object(x.a)(S.a,E));c.a.render(Object(b.jsx)(l.a,{store:k,children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.f727fddb.chunk.js.map