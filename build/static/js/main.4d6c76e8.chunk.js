(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(29),s=a.n(c),r=(a(35),a(13)),o=a(4),i=a(3),l=a.n(i),d=a(6),j=a(2),u=a(12),b=a.n(u),p=b.a.create({baseURL:"https://chambeando.pe/api/v1"}),h=a(11),f=a.n(h),O=a(0),m=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(""),s=Object(j.a)(c,2),r=s[0],i=s[1],u=Object(n.useState)([]),b=Object(j.a)(u,2),h=b[0],m=b[1],x=Object(n.useState)([]),v=Object(j.a)(x,2),g=v[0],N=v[1],y=Object(n.useState)([]),k=Object(j.a)(y,2),w=k[0],C=k[1],S=Object(o.f)();Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/workers/destacados");case 3:t=e.sent,a(t.data.data.mejorValorados),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/workers/profesiones");case 3:t=e.sent,N(t.data.data.profesion),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/workers/profesionesdestacadas");case 3:t=e.sent,C(t.data.data.profesionesDestacadas),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()(),e(),t()}),[]);var E=function(e){S.push("/servicios/".concat(e))},I=function(){document.getElementById("input").select()};return Object(O.jsxs)("div",{className:"Home",onClick:function(){document.getElementById("displayOptions").style.display="none"},children:[Object(O.jsx)("div",{className:"presentacion",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h1",{children:"Tu hogar en las mejores manos"}),Object(O.jsx)("p",{children:"Obtenga la ayuda de Trabajadores confiables para todo trabajo que necesite."}),Object(O.jsx)("div",{className:"busqueda",children:Object(O.jsxs)("div",{className:"search-input",onClick:function(e){document.getElementById("displayOptions").style.display="block",I(),e.stopPropagation()},children:[Object(O.jsx)("i",{className:"fas fa-search",id:"search"}),Object(O.jsx)("input",{type:"text",placeholder:"Necesita ayuda de un...",id:"input",value:r,onChange:function(e){i(e.target.value);var t=g.filter((function(e){return e.profesion.toLowerCase().includes(r.toLowerCase())}));m(t)}})]})}),Object(O.jsx)("div",{className:"displayOptions",id:"displayOptions",children:0===h.length||0===r.length?w.map((function(e){return Object(O.jsx)("div",{onClick:function(){return E(e.profesion)},children:Object(O.jsx)("div",{className:"defaultOptions",children:Object(O.jsx)("h2",{children:e.profesion})})},f()(e.profesion))})):h.map((function(e){return Object(O.jsx)("div",{className:"option",onClick:function(){return E(e.profesion)},children:Object(O.jsx)("h2",{children:e.profesion})},f()(e.profesion))}))})]})})}),Object(O.jsxs)("div",{className:"Mision",children:[Object(O.jsx)("h1",{className:"quienes_somos",children:"\xbfQui\xe9nes Somos?"}),Object(O.jsxs)("p",{className:"parrafo",children:["Chambeando es una plataforma virtual que brinda especialistas calificados y confiables que est\xe9n dispuestos a cubrir tus necesidades en la brevedad de lo posible.",Object(O.jsx)("br",{})," Tenemos como objetivo combatir el desempleo actual causado por el Covid-19"]})]})]})},x=Object(n.createContext)(),v=function(e){var t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],s=a[1];return Object(O.jsx)(x.Provider,{value:{trabajadores:c,setTrabajadores:s},children:e.children})},g=(a(63),a.p+"static/media/logo.0f3d45b7.jpeg"),N=function(){var e=Object(o.f)(),t=function(){e.push("/")};return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("img",{src:g,oncClick:t,alt:"logo",className:"imagen"}),Object(O.jsx)("nav",{className:"menu",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{onClick:t,children:Object(O.jsx)("h3",{children:"Inicio"})}),Object(O.jsx)("li",{onClick:function(){e.push("/trabajadores")},children:Object(O.jsx)("h3",{children:"Trabajadores"})}),Object(O.jsxs)("li",{children:[Object(O.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://www.instagram.com/chambeando.peru/",children:Object(O.jsx)("i",{className:"fab fa-instagram",id:"insta"})})," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://www.facebook.com/profile.php?id=100070622113808",children:Object(O.jsx)("i",{className:"fab fa-facebook-square",id:"facebook"})})]})]})})]})},y=function(){var e=Object(o.f)(),t=Object(n.useContext)(x),a=t.trabajadores,c=t.setTrabajadores,s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],u=r[1],b=Object(n.useState)([]),h=Object(j.a)(b,2),m=h[0],v=h[1],g=Object(n.useState)(""),N=Object(j.a)(g,2),y=N[0],k=N[1],w=Object(n.useState)([]),C=Object(j.a)(w,2),S=C[0],E=C[1];Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/workers");case 2:t=e.sent,c(t.data.data.workers);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/workers/profesiones");case 3:t=e.sent,u(t.data.data.profesion),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/workers/profesionesdestacadas");case 3:t=e.sent,v(t.data.data.profesionesDestacadas),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()(),t(),e()}),[]);var I=function(t){e.push("/servicios/".concat(t))},T=function(){document.getElementById("input").select()};return Object(O.jsxs)("div",{className:"Workers",onClick:function(){document.getElementById("displayOptions").style.display="none"},children:[Object(O.jsx)("div",{className:"presentacion-slogan",children:Object(O.jsxs)("div",{className:"presentacion-content",children:[Object(O.jsx)("h2",{id:"ayuda",children:"\xbfEN QUE NECESITAS AYUDA?"}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"search",children:Object(O.jsxs)("div",{className:"input-search",onClick:function(e){document.getElementById("displayOptions").style.display="block",T(),e.stopPropagation()},children:[Object(O.jsx)("i",{className:"fas fa-search",id:"search"}),Object(O.jsx)("input",{type:"text",placeholder:"Necesita ayuda de un...",id:"input",value:y,onChange:function(e){k(e.target.value);var t=i.filter((function(e){return e.profesion.toLowerCase().includes(y.toLowerCase())}));E(t)}})]})}),Object(O.jsx)("div",{className:"displayOptions",id:"displayOptions",children:0===S.length||0===y.length?m.map((function(e){return Object(O.jsx)("div",{onClick:function(){return I(e.profesion)},children:Object(O.jsx)("div",{className:"defaultOptions",children:Object(O.jsx)("h2",{children:e.profesion})})},f()(e.profesion))})):S.map((function(e){return Object(O.jsx)("div",{className:"option",onClick:function(){return I(e.profesion)},children:Object(O.jsx)("h2",{children:e.profesion})},f()(e.profesion))}))})]})}),Object(O.jsxs)("div",{className:"seccion-destacados",children:[Object(O.jsx)("h2",{id:"NuestrosTrabajadores",children:"Nuestros trabajadores:"}),Object(O.jsx)("div",{className:"trabajadores-destacados",children:a.map((function(t){return Object(O.jsxs)("div",{className:"trabajador-destacado",children:[Object(O.jsxs)("div",{className:"profile",children:[Object(O.jsx)("div",{className:"profileImage",children:Object(O.jsx)("img",{src:t.image,alt:"profilePhoto"})}),Object(O.jsx)("div",{className:"presentacion-trabajador",children:Object(O.jsxs)("h2",{children:[t.nombre," ",t.apellidos]})})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"descripcion",children:[Object(O.jsxs)("p",{children:["Servicio: ","T\xe9cnico de electrodom\xe9sticos"==t.profesion?"T\xe9cnico":t.profesion]}),Object(O.jsxs)("p",{children:["Tel\xe9fono: ",t.telefono]})]}),Object(O.jsx)("div",{className:"ver-info",children:Object(O.jsx)("button",{type:"submit",onClick:function(){return a=t.trabajador_id,void e.push("/trabajadores/".concat(a));var a},children:"VER M\xc1S INFO"})})]},t.trabajador_id)}))})]})]})},k=function(e){var t=Object(o.f)(),a=Object(n.useState)([]),c=Object(j.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)([]),u=Object(j.a)(i,2),b=u[0],h=u[1],m=Object(n.useState)([]),x=Object(j.a)(m,2),v=x[0],g=x[1],N=Object(n.useState)(""),y=Object(j.a)(N,2),k=y[0],w=y[1],C=Object(n.useState)([]),S=Object(j.a)(C,2),E=S[0],I=S[1],T=Object(o.g)().id;Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/workers/profesiones");case 3:t=e.sent,h(t.data.data.profesion),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/workers/profesionesdestacadas");case 3:t=e.sent,g(t.data.data.profesionesDestacadas),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/workers/orderby/".concat(T.includes("\xf1")?T.replace("\xf1","\xa4"):T));case 3:t=e.sent,r(t.data.data.filterWorkers),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();t(),e(),a()}),[e]);var D=function(e){t.push("/servicios/".concat(e))},P=function(){document.getElementById("input").select()};return Object(O.jsxs)("div",{className:"Workers",onClick:function(){document.getElementById("displayOptions").style.display="none"},children:[Object(O.jsx)("div",{className:"presentacion-slogan",children:Object(O.jsxs)("div",{className:"presentacion-content",children:[Object(O.jsx)("h2",{id:"ayuda",children:"\xbfEN QUE NECESITAS AYUDA?"}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"search",children:Object(O.jsxs)("div",{className:"input-search",onClick:function(e){document.getElementById("displayOptions").style.display="block",P(),e.stopPropagation()},children:[Object(O.jsx)("i",{className:"fas fa-search",id:"search"}),Object(O.jsx)("input",{type:"text",placeholder:"Necesita ayuda de un...",id:"input",value:k,onChange:function(e){w(e.target.value);var t=b.filter((function(e){return e.profesion.toLowerCase().includes(k.toLowerCase())}));I(t)}})]})}),Object(O.jsx)("div",{className:"displayOptions",id:"displayOptions",children:0===E.length||0===k.length?v.map((function(e){return Object(O.jsx)("div",{onClick:function(){return D(e.profesion)},children:Object(O.jsx)("div",{className:"defaultOptions",children:Object(O.jsx)("h2",{children:e.profesion})})},f()(e.profesion))})):E.map((function(e){return Object(O.jsx)("div",{className:"option",onClick:function(){return D(e.profesion)},children:Object(O.jsx)("h2",{children:e.profesion})},f()(e.profesion))}))})]})}),Object(O.jsxs)("div",{className:"seccion-destacados",children:[Object(O.jsxs)("h2",{id:"Resultado",children:["Resultados para ",T,":"]}),Object(O.jsx)("div",{className:"trabajadores-destacados",children:s.map((function(e){return Object(O.jsxs)("div",{className:"trabajador-destacado",children:[Object(O.jsxs)("div",{className:"profile",children:[Object(O.jsx)("div",{className:"profileImage",children:Object(O.jsx)("img",{src:e.image,alt:"profilePhoto"})}),Object(O.jsx)("div",{className:"presentacion-trabajador",children:Object(O.jsxs)("h2",{children:[e.nombre," ",e.apellidos]})})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"descripcion",children:Object(O.jsxs)("p",{children:["Tel\xe9fono: ",e.telefono]})}),Object(O.jsx)("div",{className:"ver-info",children:Object(O.jsx)("button",{type:"submit",onClick:function(){return function(e){t.push("/trabajadores/".concat(e))}(e.trabajador_id)},children:"VER M\xc1S INFO"})})]},e.trabajador_id)}))})]})]})},w=(a(64),function(){var e=Object(o.g)().id,t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.get("/workers/worker/".concat(e));case 3:a=t.sent,s(a.data.data.worker),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(O.jsx)("div",{className:"Contenedor",children:Object(O.jsxs)("div",{className:"Trabajador",children:[c.map((function(e){return Object(O.jsxs)("div",{className:"trabajadorInfo",children:[Object(O.jsx)("img",{src:e.image,alt:"profilePhoto"}),Object(O.jsxs)("div",{className:"presentacionTrabajador",children:[Object(O.jsxs)("h2",{children:[e.nombre," ",e.apellidos]}),Object(O.jsxs)("h3",{children:["Tel\xe9fono: ",e.telefono]}),Object(O.jsx)("h3",{children:Object(O.jsx)("a",{href:"https://api.whatsapp.com/send?phone=51".concat(e.telefono,"&text=","Hola se\xf1or ".concat(e.nombre," encontr\xe9 su n\xfamero en la plataforma chambeando.pe y le escribo para cotizar un servicio. ")),children:"M\xe1ndale un whatsapp haciendo click aqu\xed"})}),Object(O.jsxs)("h3",{children:["Profesion: ",e.profesion]}),Object(O.jsxs)("h3",{children:["Conoce m\xe1s a ",e.nombre,":"]}),Object(O.jsx)("p",{children:e.descripcion}),Object(O.jsx)("h3",{id:"valora",children:Object(O.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=51941461510&text=(Coloque una valoraci\xf3n del 1-5. La valoraci\xf3n de ".concat(e.nombre," es: "),children:["Valora a ",e.nombre," dando click aqu\xed"]})})]})]},f()(e.trabajador_id))})),Object(O.jsx)("h2",{id:"contact-message",children:"\xa1Contacta con un solo click!"})]})})}),C=(a(65),function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),o=r[0],i=r[1],u=Object(n.useState)(""),p=Object(j.a)(u,2),h=p[0],f=p[1],m=Object(n.useState)(""),x=Object(j.a)(m,2),v=x[0],g=x[1],N=Object(n.useState)(""),y=Object(j.a)(N,2),k=y[0],w=y[1],C=Object(n.useState)(""),S=Object(j.a)(C,2),E=S[0],I=S[1],T=Object(n.useState)(""),D=Object(j.a)(T,2),P=D[0],F=D[1],B=Object(n.useState)("Choose File"),q=Object(j.a)(B,2),L=q[0],_=q[1],A=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new FormData).append("file",P),n="https://chambeando.pe";try{b.a.post("".concat(n,"/api/v1/admin/upload"),t,{headers:{"Content-Type":"multipart/form-data"}})}catch(c){console.log(c)}return e.next=6,b.a.post("".concat(n,"/api/v1/admin/create"),{nombre:a,apellidos:o,dni:h,telefono:v,descripcion:k,profesion:E,fileName:L});case 6:"created"===e.sent.data.status&&window.alert("El trabajador fue correctamente creado");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"addNewUser",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(O.jsx)("input",{type:"text",value:a,name:"nombre",placeholder:"nombre",onChange:function(e){c(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"apellidos",children:"Apellidos"}),Object(O.jsx)("input",{type:"text",value:o,name:"apellidos",placeholder:"apellidos",onChange:function(e){i(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"dni",children:"DNI"}),Object(O.jsx)("input",{type:"text",value:h,name:"dni",placeholder:"DNI",onChange:function(e){f(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"telefono",children:"Telefono"}),Object(O.jsx)("input",{type:"text",value:v,name:"telefono",placeholder:"Telefono",onChange:function(e){g(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"Descripcion",children:"Descripcion"}),Object(O.jsx)("input",{type:"text",value:k,name:"descripcion",placeholder:"Descripcion",onChange:function(e){w(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"Profesion",children:"Profesion"}),Object(O.jsx)("input",{type:"text",value:E,name:"profesion",placeholder:"Profesion",onChange:function(e){I(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"input",children:L}),Object(O.jsx)("input",{type:"file",name:"input",onChange:function(e){F(e.target.files[0]),_(e.target.files[0].name)}}),Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),A()},children:"Crear nuevo Trabajador"})]})})}),S=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),c=Object(j.a)(a,2),s=(c[0],c[1],Object(n.useState)("")),r=Object(j.a)(s,2),o=(r[0],r[1],Object(n.useState)(!1)),i=Object(j.a)(o,2);i[0],i[1];return Object(O.jsx)("div",{className:"adminPanel",children:Object(O.jsx)("div",{className:"form",id:"form",children:Object(O.jsx)(C,{})})})},E=function(){return Object(O.jsx)(v,{children:Object(O.jsx)("div",{children:Object(O.jsxs)(r.a,{children:[Object(O.jsx)(N,{}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(O.jsx)(o.a,{exact:!0,path:"/trabajadores",component:y}),Object(O.jsx)(o.a,{exact:!0,path:"/servicios/:id",component:k}),Object(O.jsx)(o.a,{exact:!0,path:"/trabajadores/:id",component:w}),Object(O.jsx)(o.a,{exact:!0,path:"/admin",component:S})]})]})})})};s.a.render(Object(O.jsx)(E,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.4d6c76e8.chunk.js.map