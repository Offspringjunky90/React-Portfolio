(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/cover-image.402a471b.jpg"},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){var n={"./calculator.jpg":14,"./led-wall.jpg":15,"./pastel-puzzels.jpg":16,"./run-buddy.jpg":17,"./surf-report.jpg":18};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=13},function(e,t,a){e.exports=a.p+"static/media/calculator.a19f2b67.jpg"},function(e,t,a){e.exports=a.p+"static/media/led-wall.653c2b3d.jpg"},function(e,t,a){e.exports=a.p+"static/media/pastel-puzzels.ed494730.jpg"},function(e,t,a){e.exports=a.p+"static/media/run-buddy.938f8fe0.jpg"},function(e,t,a){e.exports=a.p+"static/media/surf-report.12557c9b.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(12),a(1)),i=a(6),s=a.n(i);var u=function(e){return r.a.createElement("header",{className:"flex-row space-between px-1"},r.a.createElement("h1",null,"Robert Augusta"),r.a.createElement("img",{src:s.a,alt:"wooden background"}),e.children)};function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}function p(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var f=function(e){var t=e.pages,a=void 0===t?[]:t,l=e.setCurrentPage,c=e.currentPage;return Object(n.useEffect)((function(){document.title=m(c.name)}),[c]),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},a.map((function(e){return r.a.createElement("li",{className:"mx-5 ".concat(c.name===e.name&&"navActive"),key:e.name},r.a.createElement("span",{onClick:function(){return l(e)}},m(e.name)))}))))},d=function(e){return r.a.createElement("div",null,e.children)};var E=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("div",{className:"profile-img my-5"},r.a.createElement("i",{className:"fas fa-user-circle",style:{fontSize:"96px"}})),r.a.createElement("p",null,"Garage Door Technician with 7+ years experience in diagnosing/troubleshooting, installation, repair and maintenance. Poccess a certificate of Completion from UNH Professional Development & Training and a comprehensive portfolio of projects to demostrate mastery of various topics.")))};var h=function(e){var t=e.project,n=t.name,l=t.repo,c=t.link,o=t.description;return r.a.createElement("div",{className:"project",key:n},r.a.createElement("img",{src:a(13)("./".concat(n,".jpg")),alt:p(n),className:"project-bg"}),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,r.a.createElement("a",{href:c},p(n))," ",r.a.createElement("a",{href:l},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("p",null,o)))};var g=function(){var e=Object(n.useState)([{name:"Text-Editor",description:"Create notes or code snippets with or without an internet connection SO THAT I can reliably retrieve them for later use",link:"https://blooming-fjord-22836.herokuapp.com/",repo:"https://github.com/Offspringjunky90/Text-Editor"},{name:"Social-Network-API",description:"An API for my social network that uses a NoSQL database SO THAT my website can handle large amounts of unstructured data",link:"https://www.youtube.com/watch?v=cnfw_tClfTw",repo:"https://github.com/Offspringjunky90/Social-Network-API"},{name:"Day-Planner",description:"The Day-Planner calendar application allows a user to save events for each hour of the day.. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.",link:"https://offspringjunky90.github.io/Day-Planner/",repo:"https://github.com/Offspringjunky90/Day-Planner"},{name:"Team-Profile-Generator",description:"Generates a webpage that displays my teams basic info SO THAT I have quick access to their emails and GitHub profiles",link:"https://www.youtube.com/embed/-Ak7IrCL6ac",repo:"https://github.com/Offspringjunky90/Team-Profile-Generator"},{name:"Weather-Dashboard",description:"Upon entering the city of your choice and clicking submit, you are able to instantly view the current weather along with the five day forecast.",link:"https://offspringjunky90.github.io/Weather-Dashboard/",repo:"https://github.com/Offspringjunky90/Weather-Dashboard"}]),t=Object(o.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row"},t.map((function(e,t){return r.a.createElement(h,{project:e,key:"project"+t})}))))},b=a(2),v=a(3);var w=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),s=i[0],u=i[1],m=a.name,p=a.email,f=a.message,d=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);u(t?"":"Your email is invalid.")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."));s||(l(Object(v.a)(Object(v.a)({},a),{},Object(b.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return r.a.createElement("section",null,r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),s||console.log("Submit Form",a)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:m,onBlur:d})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:p,onBlur:d})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:f,onBlur:d})),s&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},s)),r.a.createElement("button",{type:"submit"},"Submit")))};var y=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("p",null,"Download my ",r.a.createElement("a",{href:"https://www.linkedin.com/in/robert-augusta-892799219/"},"resume")),r.a.createElement("h3",null,"Front-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"responsive design"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Bootstrap")),r.a.createElement("h3",null,"Back-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"APIs"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"MySQL, Sequelize"),r.a.createElement("li",null,"MongoDB, Mongoose"),r.a.createElement("li",null,"REST"),r.a.createElement("li",null,"GraphQL"))))};var k=function(e){var t=e.currentPage;return r.a.createElement("section",null,r.a.createElement("h2",null,m(t.name)),r.a.createElement(d,null,function(){switch(t.name){case"about me":return r.a.createElement(E,null);case"portfolio":return r.a.createElement(g,null);case"contact":return r.a.createElement(w,null);case"resume":return r.a.createElement(y,null);default:return r.a.createElement(E,null)}}()))};var j=function(){return r.a.createElement("footer",{className:"flex-row px-1"},[{name:"fab fa-github",link:"https://github.com/Offspringjunky90"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/robert-augusta-892799219/"},{name:"fab fa-stack-overflow",link:"https://stackoverflow.com/users/16789563/offspringjunky90"}].map((function(e){return r.a.createElement("a",{href:e.link,key:e.name,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.name}))})))};var N=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(o.a)(e,1)[0],a=Object(n.useState)(t[0]),l=Object(o.a)(a,2),c=l[0],i=l[1];return r.a.createElement("div",null,r.a.createElement(u,null,r.a.createElement(f,{pages:t,setCurrentPage:i,currentPage:c})),r.a.createElement("main",null,r.a.createElement(k,{currentPage:c})),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.924b2b7b.chunk.js.map