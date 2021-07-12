(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var s,n,r=c(3),i=c.n(r),a=c(39),l=c.n(a),j=(c(47),c(48),["title","titleId"]);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var c,s,n=function(e,t){if(null==e)return{};var c,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)c=r[s],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)c=r[s],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function m(e,t){var c=e.title,i=e.titleId,a=h(e,j);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",height:800,width:1200,viewBox:"-59.625 -12.15 516.75 72.9",ref:t,"aria-labelledby":i},a),c?r.createElement("title",{id:i},c):null,s||(s=r.createElement("path",{d:"M36 29.8H9.4v-6.6h34.3c-.9-2.8-3.8-5.4-8.9-5.4H9.9c-5.7 0-9 2.1-9 6.7v4.9c0 4 3.4 6.3 8.4 6.3h26.9v7H0c.9 3.8 3.8 5.8 9 5.8h27.1c5.7 0 8.5-2.2 8.5-6.9v-4.9c0-4.3-3.3-6.6-8.6-6.9zm54.3-11.9H57.5v30.7h9.3V36.8H91c6.7 0 10.4-2.3 10.4-7.7v-3.4c-.1-5-4.3-7.8-11.1-7.8zm3 9.8c0 2.2-.4 3.4-4 3.4H66.8l.1-8h22c4 0 4.5 1.2 4.5 3.3v1.3zm39 8.9h-19.8l-4.9 5.2h28.6l4.9 6.8h11l-23.7-32-5.6 6.9zm37.6-13.4h34.8c-.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5 0-8.8 1.8-8.8 6.7v17.2c0 4.9 4.3 6.7 8.8 6.7h26.3c6 0 8.1-1.7 9.1-5.8h-34.8zm75.6 10.2v-5.2h-28.1v20.4h41.5v-5.8h-32.1v-9.4zm-27.1-15.5h41.9v5.4h-41.9zm67.7 0h-14.6l17.2 12.6c2.5-1.7 5.4-3.5 8-5zm21.2 15.7c-2.5 1.7-5 3.6-7.4 5.4l13 9.5h14.7z"})),n||(n=r.createElement("path",{d:"M397.5 0c-80 4.6-117 38.8-125.3 46.9l-1.7 1.6h14.8C325.3 8.4 382.8 1.3 397.5 0z"})))}var d,b,u,O=r.forwardRef(m),g=(c.p,c(70)),x=c(72),p=c(69),f=c(19),v=c(71),N=c(73),y=c(25),k=c(20),w=c(1),M=function(e){var t=e.launch,c=t.name,s=t.date_local,n=t.success,r=t.id,i=y(s).format("YYYY-MM-DD HH:MM");return Object(w.jsx)("div",{className:"card card-body mb-3",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-md-9",children:[Object(w.jsxs)("h4",{children:["Mission:"," ",Object(w.jsx)("span",{className:n?"text-success":"text-danger",children:c})]}),Object(w.jsxs)("p",{children:["Date: ",i]})]}),Object(w.jsx)("div",{className:"col-md-3",children:Object(w.jsx)(k.b,{className:"btn btn-primary",to:"/launch/".concat(r),children:"More Info"})})]})})},Y=function(){return Object(w.jsxs)("div",{className:"my-3",children:[Object(w.jsxs)("p",{children:[Object(w.jsx)("span",{className:"px-3 mr-2 bg-success"})," = Success"]}),Object(w.jsxs)("p",{children:[Object(w.jsx)("span",{className:"px-3 mr-2 bg-danger"})," = Failure"]})]})},H=Object(v.a)(d||(d=Object(f.a)(["\n    query LaunchesQuery {\n        launches {\n            id\n            flight_number\n            name\n            date_local\n            success\n            rocket\n        }\n    }\n"]))),z=function(){var e=Object(N.a)(H),t=e.loading,c=e.data,s=e.error;return t?Object(w.jsx)("h4",{children:"Loading..."}):s?(console.log(s),Object(w.jsx)("h4",{children:"Error"})):Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{className:"display-4 my-3",children:"Launches"}),Object(w.jsx)(Y,{}),c.launches.map((function(e){return Object(w.jsx)(M,{launch:e},e.id)}))]})},E=c(7),_=Object(v.a)(b||(b=Object(f.a)(["\n    query rocketQuery($id: String!) {\n        rocket(id: $id) {\n            name\n            type\n            country\n            height {\n                meters\n            }\n            mass {\n                kg\n            }\n            flickr_images\n        }\n    }\n"]))),S=function(e){var t=e.id,c=Object(N.a)(_,{variables:{id:t}}),s=c.error,n=c.data;if(c.loading)return Object(w.jsx)("h5",{children:"Loading..."});if(s)return console.log(s),Object(w.jsx)("h5",{children:"Error"});var r=n.rocket,i=r.name,a=r.type,l=r.country,j=r.height.meters,o=r.mass.kg,h=r.flickr_images[0];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h4",{className:"my-3",children:"Rocket Details"}),Object(w.jsxs)("ul",{className:"list-group my-3",children:[Object(w.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Name: ",i]}),Object(w.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Type: ",a]}),Object(w.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Country: ",l]}),Object(w.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Height: ",j,"m"]}),Object(w.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Mass: ",o,"kg"]}),Object(w.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Image:",Object(w.jsx)("br",{}),Object(w.jsx)("img",{src:h,alt:"Rocket",className:"rocket-img"})]})]})]})},D=Object(v.a)(u||(u=Object(f.a)(["\n    query launchQuery($id: String!) {\n        launch(id: $id) {\n            flight_number\n            name\n            date_local\n            success\n            rocket\n        }\n    }\n"]))),I=function(){var e=Object(E.f)().id,t=Object(N.a)(D,{variables:{id:e}}),c=t.error,s=t.loading,n=t.data;if(s)return Object(w.jsx)("h1",{children:"Loading..."});if(c)return console.log(c),Object(w.jsx)("h1",{children:"Error"});var r=n.launch,i=r.name,a=r.flight_number,l=r.date_local,j=r.success,o=r.rocket,h=y(l).format("YYYY");y(l).format("YYYY-MM-DD HH:MM");return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"display-4 my-3",children:["Mission: ",Object(w.jsx)("span",{className:"fw-bold",children:i})]}),Object(w.jsx)("h4",{className:"mb-3"}),Object(w.jsxs)("ul",{className:"list-group",children:[Object(w.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Flight Number: ",a]}),Object(w.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Launch Year: ",h]}),Object(w.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Success:"," ",Object(w.jsx)("span",{className:j?"text-success":"text-danger",children:j?"Yes":"No"})]}),Object(w.jsxs)("li",{className:"list-group-item list-group-item-action",children:["Flight Number: ",a]})]}),Object(w.jsx)(S,{id:o}),Object(w.jsx)(k.b,{to:"/",className:"btn btn-primary mb-5",children:"Back"})]})},L=new g.a({uri:"/graphql",cache:new x.a});var F=function(){return Object(w.jsx)(p.a,{client:L,children:Object(w.jsx)(k.a,{children:Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)(O,{className:"logo"}),Object(w.jsxs)(E.c,{children:[Object(w.jsx)(E.a,{exact:!0,path:"/",children:Object(w.jsx)(z,{})}),Object(w.jsx)(E.a,{exact:!0,path:"/launch/:id",children:Object(w.jsx)(I,{})})]})]})})})};l.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(F,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.bcd33a67.chunk.js.map