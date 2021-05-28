(this.webpackJsonpcrudflix=this.webpackJsonpcrudflix||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(23),s=n.n(r),c=(n(30),n(14)),o=n(4),l=n(5),u=n(7),d=n(6),h=n(9),j=n(2),v=n(13),b=n.n(v),m=n(15),p=n(8),O=(n(32),n(0)),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.movie;return Object(O.jsxs)("div",{"data-testid":"movie-card",className:"movie-card",children:[Object(O.jsx)("div",{className:"movie-card-image",children:Object(O.jsx)("img",{src:e.imagePath,alt:"Movie poster"})}),Object(O.jsx)("p",{className:"movie-card-title",children:e.title}),Object(O.jsx)("p",{className:"movie-card-storyline",children:e.storyline}),Object(O.jsx)("div",{className:"movie-card-details-button",children:Object(O.jsx)(h.b,{to:"/movies/".concat(e.id),children:"MAIS INFORMA\xc7\xd5ES"})})]})}}]),n}(a.a.Component),g=(n(42),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"loading",children:"Carregando..."})}}]),n}(i.Component)),x=n(25),y=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(y));var k=function(){return JSON.parse(localStorage.getItem("movies"))},S=function(e){return localStorage.setItem("movies",JSON.stringify(e))},I="OK",w=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},M=function(e){var t=k().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){w(t)(e)}))},N=function(e){var t=k();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),S(t),new Promise((function(e){w({status:I})(e)}))},C=(n(43),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).fetchMovies=e.fetchMovies.bind(Object(p.a)(e)),e.state={movies:[],loading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"fetchMovies",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=k();w(t)(e)}));case 2:t=e.sent,this.setState({movies:t,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movies;return e.loading?Object(O.jsx)(g,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{"data-testid":"movie-list",className:"movie-list",children:t.map((function(e){return Object(O.jsx)(f,{movie:e},e.title)}))}),Object(O.jsx)(h.b,{to:"/movies/new",className:"add-card-button",children:"ADICIONAR FILME"})]})}}]),n}(i.Component)),_=n(18),A=(n(44),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state=Object(c.a)({},e.movie),i.handleSubmit=i.handleSubmit.bind(Object(p.a)(i)),i}return Object(l.a)(n,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(_.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:"movie_title",children:["T\xedtulo",Object(O.jsx)("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}})]})})}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:"movie_subtitle",children:["Subt\xedtulo",Object(O.jsx)("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}})]})})}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("label",{htmlFor:"movie_image",children:["Imagem",Object(O.jsx)("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}})]})})}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:"movie_storyline",children:["Sinopse",Object(O.jsx)("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}})]})})}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:"movie_genre",children:["G\xeanero",Object(O.jsxs)("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)},children:[Object(O.jsx)("option",{value:"action",children:"A\xe7\xe3o"}),Object(O.jsx)("option",{value:"comedy",children:"Com\xe9dia"}),Object(O.jsx)("option",{value:"thriller",children:"Suspense"}),Object(O.jsx)("option",{value:"fantasy",children:"Fantasia"})]})]})})}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:"movie_rating",children:["Avalia\xe7\xe3o",Object(O.jsx)("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}})]})})}},{key:"renderSubmitButton",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"button",onClick:this.handleSubmit,children:"EDITAR"})})}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{children:[this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()]})})}}]),n}(a.a.Component)),D=(n(45),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).fetchMovie=i.fetchMovie.bind(Object(p.a)(i)),i.deleteMovie=i.deleteMovie.bind(Object(p.a)(i)),i.state={movie:[],loading:!0},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match;this.fetchMovie(e.params.id)}},{key:"fetchMovie",value:function(){var e=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:n=e.sent,this.setState({movie:n,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteMovie",value:function(){var e=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:return e.abrupt("return",Object(O.jsx)(j.a,{to:"/"}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"movieDetailsAbout",value:function(e){var t=e.title,n=e.storyline,i=e.subtitle;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:["Title:",Object(O.jsx)("div",{className:"movie-details-title",children:"".concat(t)})]}),Object(O.jsxs)("p",{children:["Subtitle:",Object(O.jsx)("div",{className:"movie-details-subtitle",children:"".concat(i)})]}),Object(O.jsxs)("p",{children:["Storyline:",Object(O.jsx)("div",{className:"movie-details-storyline",children:"".concat(n)})]})]})}},{key:"movieDetailsButtons",value:function(e){var t=this;return Object(O.jsxs)("div",{className:"movie-details-buttons",children:[Object(O.jsx)(h.b,{to:"/movies/".concat(e.id,"/edit"),children:"EDITAR"}),Object(O.jsx)(h.b,{to:"/",children:"VOLTAR"}),Object(O.jsx)(h.b,{to:"/",onClick:function(){return t.deleteMovie(e.id)},children:"DELETAR"})]})}},{key:"movieDetails",value:function(e){var t=e.genre,n=e.rating;return Object(O.jsxs)("div",{className:"movie-details",children:[this.movieDetailsAbout(e),Object(O.jsxs)("p",{children:["Genre:",Object(O.jsx)("div",{className:"movie-details-genre",children:"".concat(t)})]}),Object(O.jsxs)("p",{children:["Rating:",Object(O.jsx)("div",{className:"movie-details-rating",children:"".concat(n)})]}),this.movieDetailsButtons(e)]})}},{key:"createMovieCard",value:function(e){var t=e.imagePath;return Object(O.jsxs)("div",{className:"movie-details-container",children:[Object(O.jsx)("div",{className:"movie-details-image",children:Object(O.jsx)("img",{alt:"Movie Cover",src:"../".concat(t)})}),this.movieDetails(e)]})}},{key:"render",value:function(){var e=this.state,t=e.movie;return e.loading?Object(O.jsx)(g,{}):Object(O.jsx)("div",{"data-testid":"movie-details",children:this.createMovieCard(t)})}}]),n}(i.Component)),R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).handleSubmit=i.handleSubmit.bind(Object(p.a)(i)),i.state={shouldRedirect:!1},i}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){var t;t=e,new Promise((function(e){var n=k(),i=n[n.length-1].id+1,a=Object(c.a)(Object(c.a)({},t),{},{id:i});n=[].concat(Object(x.a)(n),[a]),S(n),w(I)(e)})),this.setState({shouldRedirect:!0})}},{key:"render",value:function(){return this.state.shouldRedirect?Object(O.jsx)(j.a,{to:"/"}):Object(O.jsx)("div",{"data-testid":"new-movie",children:Object(O.jsx)(A,{onSubmit:this.handleSubmit})})}}]),n}(i.Component),F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).handleSubmit=i.handleSubmit.bind(Object(p.a)(i)),i.fetchDetails=i.fetchDetails.bind(Object(p.a)(i)),i.state={movie:[],loading:!0,shouldRedirect:!1},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match;this.fetchDetails(e.params.id)}},{key:"handleSubmit",value:function(e){!function(e){new Promise((function(t){var n=k().map((function(t){return t.id===parseInt(e.id,10)?Object(c.a)(Object(c.a)({},t),e):t}));S(n),w(I)(t)}))}(e),this.setState({shouldRedirect:!0})}},{key:"fetchDetails",value:function(){var e=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:n=e.sent,this.setState({movie:n,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.shouldRedirect,i=e.movie;return t?Object(O.jsx)(g,{}):n?Object(O.jsx)(j.a,{to:"/"}):Object(O.jsx)("div",{"data-testid":"edit-movie",children:Object(O.jsx)(A,{movie:i,onSubmit:this.handleSubmit})})}}]),n}(i.Component),P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{"data-testid":"404-error",children:"P\xe1gina n\xe3o encontrada"})}}]),n}(i.Component),T=(n(46),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"mainHeader",value:function(){return Object(O.jsx)("header",{className:"main-header",children:Object(O.jsx)(h.b,{to:"/",style:{textDecoration:"none"},children:Object(O.jsx)("h1",{className:"main-title",children:"CRUDflix"})})})}},{key:"routes",value:function(){return Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{exact:!0,path:"/",component:C}),Object(O.jsx)(j.b,{path:"/movies/new",component:R}),Object(O.jsx)(j.b,{path:"/movies/:id/edit",render:function(e){return Object(O.jsx)(F,Object(c.a)({},e))}}),Object(O.jsx)(j.b,{path:"/movies/:id",render:function(e){return Object(O.jsx)(D,Object(c.a)({},e))}}),Object(O.jsx)(j.b,{component:P})]})}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(h.a,{children:[this.mainHeader(),this.routes()]})})}}]),n}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(T,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.bcffcfa7.chunk.js.map