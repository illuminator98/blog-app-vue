(function(){"use strict";var t={9191:function(t,e,s){s.d(e,{S:function(){return q}});s(7658);var o=s(7195),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{staticClass:"mx-2",attrs:{to:"/home"}},[t.displayLoginSignupBtns?t._e():e("button",{staticClass:"btn btn-primary bg-dark",attrs:{to:"/home"}},[t._v(" Home ")])]),t.displayLoginSignupBtns?e("router-link",{staticClass:"mx-2",attrs:{to:"/Signup"}},[t._v("Signup")]):t._e(),t.displayLoginSignupBtns?e("router-link",{staticClass:"mx-2",attrs:{to:"/login"}},[t._v("Login")]):t._e(),t.displayLoginSignupBtns?t._e():e("button",{staticClass:"btn btn-primary bg-dark",on:{click:t.logout}},[t._v("Logout")])],1),e("router-view")],1)},i=[],a={computed:{displayLoginSignupBtns(){return["signup","login"].includes(this.$route.name)}},methods:{logout(){q("https://dimitarvuik.pythonanywhere.com/users/logout",{method:"GET"}),localStorage.removeItem("token"),this.$router.push("/login")}}},r=a,l=s(1001),c=(0,l.Z)(r,n,i,!1,null,null,null),m=c.exports,d=s(2241),u=function(){var t=this,e=t._self._c;return e("div",[e("b-card",{staticClass:"mb-2 mx-auto card-color",staticStyle:{"max-width":"20rem"},attrs:{title:"Signup"}},[e("b-card-text",[e("b-form-input",{staticClass:"mt-2 form-color",attrs:{placeholder:"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e("b-form-input",{staticClass:"mt-2 form-color",attrs:{type:"email",placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e("b-form-input",{staticClass:"mt-2 form-color",attrs:{type:"password",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("b-form-input",{staticClass:"mt-2 form-color",attrs:{type:"password",placeholder:"Confirm Password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1),e("b-button",{staticClass:"bg-dark post-btn",on:{click:t.signup}},[t._v("Signup")]),e("p",{staticClass:"mt-2 mb-0"},[t._v("Already have an account ?"),e("router-link",{attrs:{to:"/login"}},[t._v("Log in")])],1)],1)],1)},h=[],p={name:"SignupView",data(){return{username:"",email:"",password:"",confirmPassword:""}},methods:{async signup(){if(!this.email||!this.password||!this.username)return void alert("All fields are required!");if(this.password!==this.confirmPassword)return void alert("Passwords do not match!");const t={username:this.username,password:this.password},e=await fetch("https://dimitarvuik.pythonanywhere.com/users/signup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});console.log(e),this.$router.push({name:"login"})}}},b=p,f=(0,l.Z)(b,u,h,!1,null,null,null),v=f.exports,y=function(){var t=this,e=t._self._c;return e("div",[e("b-card",{staticClass:"mb-2 mx-auto card-color",staticStyle:{"max-width":"20rem"},attrs:{title:"Login"}},[e("b-card-text",[e("b-form-input",{staticClass:"mt-2 form-color",attrs:{placeholder:"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e("b-form-input",{staticClass:"mt-2 form-color",attrs:{type:"password",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e("b-button",{staticClass:"bg-dark post-btn",on:{click:t.login}},[t._v("Login")]),e("p",{staticClass:"mt-2"},[t._v("Dont have an account ? "),e("router-link",{attrs:{to:"/Signup"}},[t._v("Signup")])],1)],1)],1)},w=[],g={name:"LoginView",data(){return{username:"",password:""}},methods:{async login(){const t={username:this.username,password:this.password},e=await fetch("https://dimitarvuik.pythonanywhere.com/users/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),s=await e.json();localStorage.setItem("token",s.token),this.$router.push({name:"home"})}},created(){localStorage.getItem("token")&&this.$router.push({name:"home"})}},C=g,x=(0,l.Z)(C,y,w,!1,null,null,null),k=x.exports,_=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"home"}},[e("b-container",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"text-center w-100"},[e("div",{staticClass:"mt-2 w-100"},[e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("h1",{staticClass:"text-white"},[t._v("Welcome "),e("br")]),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"bg-dark mb-3 post"},[t._v("Create New Post")]),e("div",{staticClass:"d-flex"},[e("b-form-input",{attrs:{id:"input-default",placeholder:"Search for user"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$router.push({name:"user",params:{username:t.search}})}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("button",{staticClass:"bg-dark btn btn-primary search-btn",on:{click:function(e){return t.$router.push({name:"user",params:{username:t.search}})}}},[t._v(" search ")])],1)],1)])]),e("div",[e("div",[e("b-modal",{attrs:{id:"modal-center","ok-title":"Create Post","header-class":"d-none","footer-class":"custom-footer"},on:{ok:t.createPost}},[e("div",{staticClass:"container d-flex justify-content-center"},[e("div",{staticClass:"text-center w-100"},[e("form",{},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control px-3 py-2",attrs:{id:"modal-form",type:"text",placeholder:"Post Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),e("b-form-textarea",{staticClass:"mt-3",attrs:{id:"textarea",placeholder:"Write something...",rows:"4"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),e("br")],1)])])])],1)]),e("div",{staticClass:"mt-2 w-100"},[e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"col-md-6"},[t._l(t.posts.slice().reverse(),(function(s){return e("b-card",{key:s.id,staticClass:"card-style mt-4 w-100",on:{click:function(e){return t.selectPost(s)}}},[e("div",{staticClass:"d-flex card-style justify-content-between"},[e("div",[e("b-avatar",{attrs:{button:"",src:"https://placekitten.com/300/300"}}),t._v(" "+t._s(t.user.username)+" ")],1),e("div",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-edit",modifiers:{"modal-center-edit":!0}}],staticClass:"bg-dark mb-2 buttonstyle mx-1"},[t._v("✎")]),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal-1",modifiers:{"my-modal-1":!0}}],staticClass:"bg-dark buttonstyle mb-2 px-3"},[t._v("x")])],1)]),e("b-card-body",{staticClass:"card-style"},[e("b-card-title",{staticClass:"card-style"},[t._v(" "+t._s(s.title))])],1),e("b-list-group",{staticClass:"card-style",attrs:{flush:""}},[e("b-list-group-item",{staticClass:"card-style"},[t._v(" "+t._s(s.text))]),e("b-list-group-item",{staticClass:"card-style"},[e("button",{staticClass:"bg-dark buttonstyle p-2 btn",on:{click:function(e){t.commentsShown=!t.commentsShown}}},[t._v(" "+t._s(t.commentsShown&&t.selectedPost.id===s.id?"Hide":"Show")+" Comments ")])]),t.selectedPost.id===s.id&&t.commentsShown?e("div",[t._l(s.comment_set,(function(s){return e("b-list-group-item",{key:s.id,staticClass:"card-style-comment d-flex justify-content-between",on:{click:function(e){return t.selectComment(s)}}},[e("div",{staticClass:"d-flex d-lg-block flex-column"},[e("b-avatar",{attrs:{button:"",src:"https://placekitten.com/300/300"}}),t._v(" "+t._s(s.user.user.username)+" ")],1),e("div",{staticClass:"d-flex align-items-center"},[t.isBeeingEddited||t.selectedComment.id===s.id?t._e():e("p",{staticClass:"m-0"},[t._v(" "+t._s(s.text)+" ")]),t.selectedComment.id===s.id&&t.showInput?e("b-form-input",{staticClass:"bg-dark text-white",attrs:{id:"comment-input-edit",placeholder:"write a comment..."},model:{value:t.selectedComment.text,callback:function(e){t.$set(t.selectedComment,"text",e)},expression:"selectedComment.text"}}):t._e(),t.selectedComment.id===s.id&&t.showInput?e("button",{staticClass:"btn -btn-primary bg-dark text-white",on:{click:t.editComment}},[t._v(" enter ")]):t._e()],1),e("div",{staticClass:"d-flex align-items-center"},[s.user.user.id===t.user.id?e("button",{staticClass:"btn comment-button",on:{click:t.showInputFunction}},[t._v(" ✎ ")]):t._e(),e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal-deleteComment",modifiers:{"my-modal-deleteComment":!0}}],staticClass:"btn comment-button",on:{click:function(e){t.showInput=!0}}},[t._v(" x ")])])])})),e("b-list-group-item",{staticClass:"card-style"},[e("div",{staticClass:"d-flex"},[e("b-form-input",{attrs:{id:"comment-input",placeholder:"write a comment..."},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),e("button",{staticClass:"btn btn-dark buttonstyle p-2",on:{click:t.createComment}},[t._v(" enter ")])],1)])],2):t._e()],1),e("b-card-body")],1)})),e("b-modal",{staticClass:"text-white",attrs:{id:"my-modal-deleteComment","ok-title":"Delete","header-class":"d-none","footer-class":"custom-footer"},on:{ok:function(e){return t.deleteComment()},cancel:function(e){return t.showInputFunction()}}},[t._v(" Are you sure you want to delete this comment? ")])],2)])]),e("b-modal",{staticClass:"text-white",attrs:{id:"my-modal-1","ok-title":"Delete","header-class":"d-none","footer-class":"custom-footer"},on:{ok:function(e){return t.DeletePost()}}},[t._v(" Are you sure you want to delete this post? ")])],1)]),e("b-modal",{attrs:{id:"modal-center-edit","ok-title":"Edit Post","header-class":"d-none","footer-class":"custom-footer"},on:{ok:t.EditPost}},[e("div",{staticClass:"container d-flex justify-content-center"},[e("div",{staticClass:"text-center w-100"},[e("form",{},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPost.title,expression:"selectedPost.title"}],staticClass:"form-control px-3 py-2",attrs:{id:"modal-edit",type:"text",placeholder:"Post Title"},domProps:{value:t.selectedPost.title},on:{input:function(e){e.target.composing||t.$set(t.selectedPost,"title",e.target.value)}}})]),e("b-form-textarea",{staticClass:"mt-3",attrs:{id:"textarea",placeholder:"Write something...",rows:"4"},model:{value:t.selectedPost.text,callback:function(e){t.$set(t.selectedPost,"text",e)},expression:"selectedPost.text"}}),e("br")],1)])])])],1)},P=[],S={name:"HomeView",data(){return{posts:[],users:[],user:"",avatar:"",title:"",comment:"",text:"",selectedPost:{},commentsShown:!1,selectedComment:{},showInput:!1,isBeeingEddited:!1,search:""}},methods:{selectPost(t){this.selectedPost=t},selectComment(t){this.comment="",this.showInput&&(this.selectedComment=t)},showInputFunction(){this.showInput=!this.showInput,this.selectedComment=""},async createPost(){if(!this.title||!this.text)return void alert("Post title and post text are required");let t={title:this.title,text:this.text},e=await q("https://dimitarvuik.pythonanywhere.com/blogs/create/post",{method:"POST",body:JSON.stringify(t)}),s=await e.json();this.posts.push(s),this.title="",this.text="",alert("Post Created Successfully")},async EditPost(){let t={title:this.selectedPost.title,text:this.selectedPost.text},e=await q("https://dimitarvuik.pythonanywhere.com/blogs/posts/"+this.selectedPost.id,{method:"PATCH",body:JSON.stringify(t)}),s=await e.json();console.log(s),console.log(this.SelectedPost),this.selectedPost.title=s.title,this.selectedPost.text=s.text},async DeletePost(){try{await q("https://dimitarvuik.pythonanywhere.com/blogs/posts/"+this.selectedPost.id,{method:"DELETE"}),this.getPosts()}catch(t){console.log(t)}},async createComment(){let t={text:this.comment};await q("https://dimitarvuik.pythonanywhere.com/blogs/posts/"+this.selectedPost.id+"/comment",{method:"POST",body:JSON.stringify(t)}),this.comment="",await this.getPosts()},async editComment(){let t={text:this.selectedComment.text},e=await q("https://dimitarvuik.pythonanywhere.com/blogs/posts/"+this.selectedPost.id+"/comment/"+this.selectedComment.id,{method:"PATCH",body:JSON.stringify(t)}),s=await e.json();this.selectedComment.text=s.text,this.showInput=!1,this.isBeeingEddited=!1,this.selectedComment=""},deleteComment(){q("https://dimitarvuik.pythonanywhere.com/blogs/posts/"+this.selectedPost.id+"/comment/"+this.selectedComment.id,{method:"DELETE"}).then((t=>{console.log(t),this.showInput=!1,this.getPosts()})).catch((t=>{console.log(t)}))},async getPosts(){let t=await q("https://dimitarvuik.pythonanywhere.com/blogs/posts/all"),e=await t.json();this.posts=e}},async created(){await this.getPosts();let t=await q("https://dimitarvuik.pythonanywhere.com/blogs/username"),e=await t.json();console.log(t),console.log(e),this.user=e}},j=S,I=(0,l.Z)(j,_,P,!1,null,null,null),O=I.exports,E=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"m-2"},[e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"col-md-6"},[t._l(t.posts.slice().reverse(),(function(s){return e("b-card",{key:s.id,staticClass:"card-style mt-4",staticStyle:{width:"100%"},on:{click:function(e){return t.selectPost(s)}}},[e("div",{staticClass:"d-flex card-style justify-content-between"},[e("div",[e("b-avatar",{attrs:{button:"",src:"https://placekitten.com/300/300"}}),t._v(" "+t._s(t.user.username)+" ")],1)]),e("b-card-body",{staticClass:"card-style"},[e("b-card-title",{staticClass:"card-style"},[t._v(" "+t._s(s.title))])],1),e("b-list-group",{staticClass:"card-style",attrs:{flush:""}},[e("b-list-group-item",{staticClass:"card-style"},[t._v(" "+t._s(s.text))]),e("b-list-group-item",{staticClass:"card-style"},[e("button",{staticClass:"bg-dark buttonstyle p-2 btn",on:{click:function(e){t.commentsShown=!t.commentsShown}}},[t._v(" "+t._s(t.commentsShown&&t.selectedPost.id===s.id?"Hide":"Show")+" Comments ")])]),t.selectedPost.id===s.id&&t.commentsShown?e("div",[t._l(s.comment_set,(function(s){return e("b-list-group-item",{key:s.id,staticClass:"card-style-comment d-flex justify-content-between",on:{click:function(e){return t.selectComment(s)}}},[e("div",{staticClass:"d-flex d-lg-block flex-column"},[e("b-avatar",{attrs:{button:"",src:"https://placekitten.com/300/300"}}),t._v(" "+t._s(s.user.user.username)+" ")],1),e("div",{staticClass:"d-flex align-items-center"},[t.isBeeingEddited||t.selectedComment.id===s.id?t._e():e("p",{staticClass:"m-0"},[t._v(" "+t._s(s.text)+" ")]),t.selectedComment.id===s.id&&t.showInput?e("b-form-input",{staticClass:"bg-dark text-white",attrs:{id:"comment-input-edit",placeholder:"write a comment..."},model:{value:t.selectedComment.text,callback:function(e){t.$set(t.selectedComment,"text",e)},expression:"selectedComment.text"}}):t._e(),t.selectedComment.id===s.id&&t.showInput?e("button",{staticClass:"btn -btn-primary bg-dark text-white",on:{click:t.editComment}},[t._v(" enter ")]):t._e()],1),e("div",{staticClass:"d-flex align-items-center"},[s.user.user.id===t.currentUser.id?e("button",{staticClass:"btn comment-button",on:{click:t.showInputFunction}},[t._v(" ✎ ")]):t._e(),s.user.user.id===t.currentUser.id?e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal-deleteComment",modifiers:{"my-modal-deleteComment":!0}}],staticClass:"btn comment-button",on:{click:function(e){t.showInput=!0}}},[t._v(" x ")]):t._e()])])})),e("b-list-group-item",{staticClass:"card-style"},[e("div",{staticClass:"d-flex"},[e("b-form-input",{attrs:{id:"comment-input",placeholder:"write a comment..."},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),e("button",{staticClass:"btn btn-dark buttonstyle p-2",on:{click:t.createComment}},[t._v(" enter ")])],1)])],2):t._e()],1),e("b-card-body")],1)})),e("b-modal",{staticClass:"text-white",attrs:{id:"my-modal-deleteComment","ok-title":"Delete","header-class":"d-none","footer-class":"custom-footer"},on:{ok:function(e){return t.deleteComment()},cancel:function(e){return t.showInputFunction()}}},[t._v(" Are you sure you want to delete this comment? ")])],2)])])])},T=[],N={name:"UserView",data(){return{posts:[],user:{},currentUser:{},showInput:!1,selectedComment:{},selectedPost:{},comment:"",commentsShown:!1,isBeeingEddited:!1}},methods:{async getPosts(){let t=await q("https://dimitarvuik.pythonanywhere.com/blogs/posts/"+this.$route.params.username),e=await t.json();this.posts=e.posts,console.log(e)},selectPost(t){this.selectedPost=t},selectComment(t){this.showInput&&(this.selectedComment=t)},showInputFunction(){this.showInput=!this.showInput,this.selectedComment=""},async createComment(){let t={text:this.comment};await q("https://dimitarvuik.pythonanywhere.com/blogs/posts/"+this.selectedPost.id+"/comment",{method:"POST",body:JSON.stringify(t)}),this.comment="",await this.getPosts()},async editComment(){let t={text:this.selectedComment.text},e=await q("https://dimitarvuik.pythonanywhere.com/blogs/posts/"+this.selectedPost.id+"/comment/"+this.selectedComment.id,{method:"PATCH",body:JSON.stringify(t)}),s=await e.json();this.selectedComment.text=s.text,this.showInput=!1,this.isBeeingEddited=!1,this.selectedComment=""},deleteComment(){q("https://dimitarvuik.pythonanywhere.com/blogs/posts/"+this.selectedPost.id+"/comment/"+this.selectedComment.id,{method:"DELETE"}).then((t=>{console.log(t),this.selectedPost.comment_set=this.selectedPost.comment_set.filter((t=>t.id!==this.selectedComment.id),this.showInput=!1)})).catch((t=>{console.log(t)}))}},async created(){console.log("wjatever");let t=await q(`https://dimitarvuik.pythonanywhere.com/blogs/posts/${this.$route.params.username}`),e=await t.json();this.posts=e.posts,this.user=e.user;const s=await q("https://dimitarvuik.pythonanywhere.com/blogs/username");this.currentUser=await s.json()}},$=N,L=(0,l.Z)($,E,T,!1,null,null,null),A=L.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-5 text-center"},[e("h1",[t._v("Page not found")]),e("div",[t._v("Go back to "),e("router-link",{attrs:{to:{name:"home"}}},[t._v("home page")])],1)])},F=[],D={name:"NotFoundView"},J=D,Z=(0,l.Z)(J,B,F,!1,null,null,null),H=Z.exports;o["default"].use(d.ZP);const U=[{path:"/signup",name:"signup",component:v},{path:"/login",name:"login",component:k},{path:"/home",name:"home",component:O},{path:"/user/:username",name:"user",component:A},{path:"/:catchAll(.*)",name:"NotFound",component:H}],V=new d.ZP({base:"/",routes:U});var G=V,M=s(4359),W=s(7244);s(7024);async function q(t,e={}){e.headers={"Content-Type":"application/json",Authorization:`Token ${localStorage.getItem("token")}`};const s=await fetch(t,e);return 401===s.status&&G.push({name:"login"}),404===s.status&&G.push({name:"NotFound"}),s}o["default"].use(M.XG7),o["default"].use(W.A7),o["default"].config.productionTip=!1,new o["default"]({router:G,render:t=>t(m)}).$mount("#app")}},e={};function s(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,o,n,i){if(!o){var a=1/0;for(m=0;m<t.length;m++){o=t[m][0],n=t[m][1],i=t[m][2];for(var r=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(s.O).every((function(t){return s.O[t](o[l])}))?o.splice(l--,1):(r=!1,i<a&&(a=i));if(r){t.splice(m--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var m=t.length;m>0&&t[m-1][2]>i;m--)t[m]=t[m-1];t[m]=[o,n,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,a=o[0],r=o[1],l=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(l)var m=l(s)}for(e&&e(o);c<a.length;c++)i=a[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(m)},o=self["webpackChunkblog_app_frontend"]=self["webpackChunkblog_app_frontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(9191)}));o=s.O(o)})();
//# sourceMappingURL=app.a0459119.js.map