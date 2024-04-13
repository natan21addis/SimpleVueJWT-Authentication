(function(){"use strict";var o={4591:function(o,e,n){var t=n(5130),r=n(6768);const a={id:"app"},s={class:"auth-wrapper"},l={class:"auth-inner"};function i(o,e,n,t,i,u){const c=(0,r.g2)("Nav"),d=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(c),(0,r.Lk)("div",s,[(0,r.Lk)("div",l,[(0,r.bF)(d)])])])}const u={class:"navbar navbar-expand navbar-light fixed-top"},c={class:"container"},d={class:"collapse navbar-collapse"},p={class:"navbar-nav ml-auto"},m={class:"nav-item"},f={class:"nav-item"};function h(o,e,n,t,a,s){const l=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("nav",u,[(0,r.Lk)("div",c,[(0,r.bF)(l,{to:"/",class:"navbar-brand"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.Lk)("div",d,[(0,r.Lk)("ul",p,[(0,r.Lk)("li",m,[(0,r.bF)(l,{to:"/login",class:"nav-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1})]),(0,r.Lk)("li",f,[(0,r.bF)(l,{to:"/register",class:"nav-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Sign up")])),_:1})])])])])])}var v={name:"TaskNav"},b=n(1241);const g=(0,b.A)(v,[["render",h]]);var k=g,L={name:"App",components:{Nav:k}};const w=(0,b.A)(L,[["render",i]]);var y=w,_=n(1387),S=n(4232);const E={key:0},A={key:1};function O(o,e,n,t,a,s){return(0,r.uX)(),(0,r.CE)("div",null,[a.user?((0,r.uX)(),(0,r.CE)("h3",E,"Hi, "+(0,S.v_)(a.user.first_name)+" "+(0,S.v_)(a.user.last_name),1)):((0,r.uX)(),(0,r.CE)("h3",A,"You are not logged in"))])}var C=n(8355),U={name:"TaskHome",data(){return{user:null}},async created(){try{const o=localStorage.getItem("token");if(o){const e=await C.A.get("http://localhost:3000/user",{headers:{Authorization:`Bearer ${o}`}});this.user=e.data.user}}catch(o){console.error("Error fetching user data:",o)}}};const x=(0,b.A)(U,[["render",O]]);var P=x;const j=(0,r.Lk)("h3",null,"Login",-1),F={class:"form-group"},T=(0,r.Lk)("label",null,"Email",-1),J={class:"form-group"},N=(0,r.Lk)("label",null,"Password",-1),V=(0,r.Lk)("button",{class:"btn btn-primary btn-block"},"Login",-1);function X(o,e,n,a,s,l){return(0,r.uX)(),(0,r.CE)("form",{onSubmit:e[2]||(e[2]=(0,t.D$)(((...o)=>l.handleSubmit&&l.handleSubmit(...o)),["prevent"]))},[j,(0,r.Lk)("div",F,[T,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),class:"form-control",placeholder:"Email"},null,512),[[t.Jo,s.email]])]),(0,r.Lk)("div",J,[N,(0,r.bo)((0,r.Lk)("input",{type:"password",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),placeholder:"password"},null,512),[[t.Jo,s.password]])]),V],32)}n(4114);var $={name:"TaskLogin",data(){return{email:"",password:""}},methods:{async handleSubmit(){try{const o=await C.A.post("http://localhost:3000/login",{email:this.email,password:this.password});localStorage.setItem("token",o.data.token),this.$router.push("/")}catch(o){console.error("Error logging in:",o)}}}};const H=(0,b.A)($,[["render",X]]);var I=H;const M=(0,r.Lk)("h3",null,"Sign Up",-1),R={class:"form-group"},W=(0,r.Lk)("label",null,"First Name",-1),z={class:"form-group"},B=(0,r.Lk)("label",null,"Last Name",-1),D={class:"form-group"},Y=(0,r.Lk)("label",null,"Email",-1),q={class:"form-group"},G=(0,r.Lk)("label",null,"Password",-1),K={class:"form-group"},Q=(0,r.Lk)("label",null,"Confirm Password",-1),Z=(0,r.Lk)("button",{class:"btn btn-primary btn-block"},"Sign Up",-1);function oo(o,e,n,a,s,l){return(0,r.uX)(),(0,r.CE)("form",{onSubmit:e[5]||(e[5]=(0,t.D$)(((...o)=>l.handleSubmit&&l.handleSubmit(...o)),["prevent"]))},[M,(0,r.Lk)("div",R,[W,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=o=>s.first_name=o),placeholder:"First Name"},null,512),[[t.Jo,s.first_name]])]),(0,r.Lk)("div",z,[B,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=o=>s.last_name=o),placeholder:"Last Name"},null,512),[[t.Jo,s.last_name]])]),(0,r.Lk)("div",D,[Y,(0,r.bo)((0,r.Lk)("input",{type:"email",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=o=>s.email=o),placeholder:"Email"},null,512),[[t.Jo,s.email]])]),(0,r.Lk)("div",q,[G,(0,r.bo)((0,r.Lk)("input",{type:"password",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=o=>s.password=o),placeholder:"Password"},null,512),[[t.Jo,s.password]])]),(0,r.Lk)("div",K,[Q,(0,r.bo)((0,r.Lk)("input",{type:"password",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=o=>s.password_confirm=o),placeholder:"Confirm Password"},null,512),[[t.Jo,s.password_confirm]])]),Z],32)}var eo={name:"TaskRegister",data(){return{first_name:"",last_name:"",email:"",password:"",password_confirm:""}},methods:{async handleSubmit(){try{const o=await C.A.post("http://localhost:3000/register",{first_name:this.first_name,last_name:this.last_name,email:this.email,password:this.password,password_confirm:this.password_confirm});console.log(o),this.$router.push("/login")}catch(o){console.error("Error registering user:",o)}}}};const no=(0,b.A)(eo,[["render",oo]]);var to=no;const ro=[{path:"/",name:"Home",component:P},{path:"/login",name:"Login",component:I},{path:"/register",name:"Register",component:to}],ao=(0,_.aE)({history:(0,_.LA)(),routes:ro});var so=ao;C.A.defaults.baseURL="http://localhost:3000/",C.A.defaults.headers.common["Authorization"]="Bearer"+localStorage.getItem("token"),(0,t.Ef)(y).use(so).mount("#app")}},e={};function n(t){var r=e[t];if(void 0!==r)return r.exports;var a=e[t]={exports:{}};return o[t].call(a.exports,a,a.exports,n),a.exports}n.m=o,function(){var o=[];n.O=function(e,t,r,a){if(!t){var s=1/0;for(c=0;c<o.length;c++){t=o[c][0],r=o[c][1],a=o[c][2];for(var l=!0,i=0;i<t.length;i++)(!1&a||s>=a)&&Object.keys(n.O).every((function(o){return n.O[o](t[i])}))?t.splice(i--,1):(l=!1,a<s&&(s=a));if(l){o.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=o.length;c>0&&o[c-1][2]>a;c--)o[c]=o[c-1];o[c]=[t,r,a]}}(),function(){n.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return n.d(e,{a:e}),e}}(),function(){n.d=function(o,e){for(var t in e)n.o(e,t)&&!n.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:e[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){n.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){n.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){var o={524:0};n.O.j=function(e){return 0===o[e]};var e=function(e,t){var r,a,s=t[0],l=t[1],i=t[2],u=0;if(s.some((function(e){return 0!==o[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(i)var c=i(n)}for(e&&e(t);u<s.length;u++)a=s[u],n.o(o,a)&&o[a]&&o[a][0](),o[a]=0;return n.O(c)},t=self["webpackChunkvue_auth"]=self["webpackChunkvue_auth"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=n.O(void 0,[504],(function(){return n(4591)}));t=n.O(t)})();
//# sourceMappingURL=app.b95d39f0.js.map