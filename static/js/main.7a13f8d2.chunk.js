(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(12),r=c.n(n),i=(c(18),c(5)),l=(c(19),c(4)),o=(c(20),c(0));var j=function(e){var t=e.Login,c=e.error,s=Object(a.useState)({name:"",email:"",password:""}),n=Object(i.a)(s,2),r=n[0],j=n[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(r)},children:Object(o.jsxs)("div",{className:"form-inner",children:[Object(o.jsx)("h2",{children:"\u041a\u0430\u0442\u0442\u0430\u043b\u0443\u0443"}),""!=c?Object(o.jsx)("div",{className:"error",children:c}):"",Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name",children:"\u0410\u0442\u044b \u0436\u04e9\u043d\u04af:"}),Object(o.jsx)("input",{placeholder:"\u041b\u043e\u0433\u0438\u043d",className:"input",type:"text",name:"name",id:"name",onChange:function(e){return j(Object(l.a)(Object(l.a)({},r),{},{name:e.target.value}))},value:r.name})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"email",children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0434\u0443\u043a \u0434\u0430\u0440\u0435\u043a:"}),Object(o.jsx)("input",{placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0434\u0443\u043a \u043f\u043e\u0447\u0442\u0430",className:"input",type:"email",name:"email",id:"email",onChange:function(e){return j(Object(l.a)(Object(l.a)({},r),{},{email:e.target.value}))},value:r.email})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(o.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"input",type:"password",name:"password",id:"password",onChange:function(e){return j(Object(l.a)(Object(l.a)({},r),{},{password:e.target.value}))},value:r.password})]}),Object(o.jsx)("input",{className:"button",type:"submit",value:"\u041a\u0438\u0440\u0443\u0443"})]})})},m=(c(22),function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:"https://itokuu.com/img/TWO%20FLAGS%20EMBASSY%20LOGO_BLUE_LETTERS.png"})}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:"https://itokuu.com/img/AC%20Logo_Color.png"})}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:"https://itokuu.com/img/OKUUIT.png"})})]})})}),b=(c(23),c(13)),d=c.n(b);var u=function(){var e="Okuuit@gmail.com",t="nomad2025",c=Object(a.useState)({name:"",email:""}),s=Object(i.a)(c,2),n=s[0],r=s[1],l=Object(a.useState)(""),b=Object(i.a)(l,2),u=b[0];return b[1],Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(m,{}),Object(o.jsx)("div",{className:"log",children:""!=n.email?Object(o.jsxs)("div",{className:"welcome",children:[Object(o.jsxs)("h1",{children:[" \u041a\u043e\u0448 \u043a\u0435\u043b\u0434\u0438\u04a3\u0438\u0437, ",Object(o.jsx)("span",{children:n.name})]}),Object(o.jsx)("button",{className:"btn",onClick:function(){r({name:"",email:""})},children:"\u0427\u044b\u0433\u0443\u0443"}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"player",children:[Object(o.jsxs)("h3",{children:["#1-\u0441\u0430\u0431\u0430\u043a. UX UI \u0434\u0435\u0433\u0435\u043d \u044d\u043c\u043d\u0435?",Object(o.jsx)("br",{})," \u041a\u0438\u0440\u0438\u0448\u04af\u04af \u0441\u0430\u0431\u0430\u043a"]}),Object(o.jsx)("br",{}),Object(o.jsx)("iframe",{className:"video",src:"https://www.youtube.com/embed/cm2OZ0OP-xg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})]}):Object(o.jsx)(j,{Login:function(c){console.log(c),c.email==e&&c.password==t?(console.log("Logged in"),r({name:c.name,email:c.email})):d()({title:"\u0422\u0443\u0443\u0440\u0430 \u044d\u043c\u0435\u0441",text:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0442\u0438 \u0442\u043e\u043b\u0443\u043a \u0442\u043e\u043b\u0442\u0443\u0440\u0443\u043d\u0443\u0437 \u0436\u0430\u043d\u0430 \u041f\u0430\u0440\u043e\u043b\u044c\u0434\u0443 \u0442\u0443\u0443\u0440\u0430 \u0436\u0430\u0437\u044b\u043d\u044b\u0437!",icon:"error",button:"\u041c\u0430\u043a\u0443\u043b"})},error:u})})]})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.7a13f8d2.chunk.js.map