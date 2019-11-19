(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{27:function(e,t,a){},38:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(8),c=a.n(n),l=a(12),o=a(7),i=a(29),m=a(30),u=a(31),p=a(36),h=a(32),d=a(9),b=a(35),f=a(6),E=a.n(f),v=a(10),N=a(33),g=a.n(N).a.create({baseURL:"http://www.omdbapi.com/"}),x=(a(27),a(68)),T=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={searchTerm:"",searchMovieThumbTerm01:"",searchMovieThumbTerm02:"",searchMovieThumbTerm03:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.fetchPosts(this.state.searchTerm)}},{key:"componentDidMount",value:function(){var e=["The Dark Knight","The Exorcist","The Fellowship of the Ring","Forrest Gump","Pulp Fiction","Gladiator","Forrest Gump","Pulp Fiction","Gladiator","Doctor Zhivago","Rain Man","Star Wars: Episode IV - A New Hope","The Silence of the Lambs","Braveheart","An American in Paris","The Shawshank Redemption","Schindler's List","The Green Mile","Close Encounters of the Third Kind","Good Will Hunting","Network","The Pianist","Back to the Future","The Empire Strikes Back","Jurassic Park","Avatar","E.T.","Snow White and the Seven Dwarfs","Avengers","The Lion King ","Terminator 2","The Wizard of Oz","Goodfellas","Black Panther","Saving Private Ryan","Taxi Driver","Rocky"],t=e[Math.floor(Math.random()*e.length)],a=e[Math.floor(Math.random()*e.length)],s=e[Math.floor(Math.random()*e.length)];a!==t&&a!==s&&t!==s||(a=e[Math.floor(Math.random()*e.length-1)],t=e[Math.floor(Math.random()*e.length-2)],s=e[Math.floor(Math.random()*e.length-2)]),this.props.fetchPosts("8 Mile"),this.props.fetchMovieThumbs01(t),this.props.fetchMovieThumbs02(a),this.props.fetchMovieThumbs03(s)}},{key:"renderList",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mb-3 col-sm-12 col-md-12 col-lg-4"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"fade-in",src:this.props.posts.Poster,alt:this.props.posts.Title}))),r.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-8"},r.a.createElement("div",{className:"row mb-2"},r.a.createElement(x.a,{in:!0,timeout:500,classNames:"list-transition",unmountOnExit:!0,appear:!0},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col-12 d-flex justify-content-around"},r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,className:"form-control list-transition"}),r.a.createElement("button",{type:"submit",className:"ml-2 col-3 btn btn-info btn-block"},"SEARCH")))),r.a.createElement("ul",{className:"list-group myfont"},r.a.createElement("li",{className:"list-group-item active"},r.a.createElement("b",{className:"lead text-center"},this.props.posts.Title)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",{className:"text-info text-uppercase"}," Plot:")," ",this.props.posts.Plot," "),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",{className:"text-info text-uppercase"}," Starring:")," ",this.props.posts.Actors),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",{className:"text-info text-uppercase"}," Genre:")," ",this.props.posts.Genre),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",{className:"text-info text-uppercase"}," Awards:")," ",this.props.posts.Awards),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row d-flex justify-content-around"},r.a.createElement("div",{className:"col-6"},r.a.createElement("b",{className:"text-info text-uppercase"},"Year:")," ",this.props.posts.Year),r.a.createElement("div",{className:"col-6"},r.a.createElement("b",{className:"text-info text-uppercase"}," Released:")," ",this.props.posts.Released))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row d-flex justify-content-around"},r.a.createElement("div",{className:"col-6"},r.a.createElement("b",{className:"text-info text-uppercase"}," Produced by:")," ",this.props.posts.Production),r.a.createElement("div",{className:"col-6"},r.a.createElement("b",{className:"text-info text-uppercase"}," Directed by")," :"," ",this.props.posts.Director))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row d-flex justify-content-around"},r.a.createElement("div",{className:"col-6"},r.a.createElement("b",{className:"text-info text-uppercase"}," Duration:")," ",this.props.posts.Runtime),r.a.createElement("div",{className:"col-6"},r.a.createElement("b",{className:"text-info text-uppercase"}," Country:")," ",this.props.posts.Country))))))}},{key:"MovieThumbList",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card d-flex w-100 "},r.a.createElement("div",{className:"card-header lead text-uppercase bg-primary text-white"},"Some of the Greatest Movies of All Time"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-4 col-lg-4 col-xl-4"},r.a.createElement("div",{className:"card border border-success"},r.a.createElement("img",{className:"card-img-top fade-in",src:this.props.thumbs.Poster,alt:this.props.thumbs.Title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-info"},this.props.thumbs.Title),r.a.createElement("p",{className:"card-text text-muted"},this.props.thumbs.Plot)))),r.a.createElement("div",{className:"col-12 col-md-4 col-lg-4 col-xl-4"},r.a.createElement("div",{className:"card border border-success"},r.a.createElement("img",{className:"card-img-top fade-in",src:this.props.thumbs02.Poster,alt:this.props.thumbs02.Title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-info"},this.props.thumbs02.Title),r.a.createElement("p",{className:"card-text text-muted"},this.props.thumbs02.Plot)))),r.a.createElement("div",{className:"col-12 col-md-4 col-lg-4 col-xl-4"},r.a.createElement("div",{className:"card border border-success"},r.a.createElement("img",{className:"card-img-top fade-in",src:this.props.thumbs03.Poster,alt:this.props.thumbs03.Title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-info"},this.props.thumbs03.Title),r.a.createElement("p",{className:"card-text text-muted"},this.props.thumbs03.Plot))))))),r.a.createElement("div",{className:"row d-flex justify-content-center mt-1"},r.a.createElement("p",{className:"text-muted p-2 m-4"},"Copyright \xa9 2019 A Simple Movie DB Search Tool - Coded and built with \u2764 by Alvison Hunter")))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row pt-3 bg-light w-100 border border-secondary"},this.renderList()),r.a.createElement("div",{className:"row bg-light w-100"},this.MovieThumbList()))}}]),t}(r.a.Component),y=Object(l.b)((function(e){return{posts:e.posts,thumbs:e.thumbs,thumbs02:e.thumbs02,thumbs03:e.thumbs03}}),{fetchPosts:function(e){return function(){var t=Object(v.a)(E.a.mark((function t(a){var s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("?t="+e+"&apikey=b424dfd6");case 2:s=t.sent,a({type:"FETCH_POSTS",payload:s.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchMovieThumbs01:function(e){return function(){var t=Object(v.a)(E.a.mark((function t(a){var s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("?t="+e+"&apikey=b424dfd6");case 2:s=t.sent,a({type:"FETCH_MOVIE_THUMBS_01",payload:s.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchMovieThumbs02:function(e){return function(){var t=Object(v.a)(E.a.mark((function t(a){var s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("?t="+e+"&apikey=b424dfd6");case 2:s=t.sent,a({type:"FETCH_MOVIE_THUMBS_02",payload:s.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchMovieThumbs03:function(e){return function(){var t=Object(v.a)(E.a.mark((function t(a){var s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("?t="+e+"&apikey=b424dfd6");case 2:s=t.sent,a({type:"FETCH_MOVIE_THUMBS_03",payload:s.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(T),w=a(34),M=a(13);w.a.add(M.b,M.a,M.c);var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex justify-content-center mt-4"},r.a.createElement("h3",{className:"display-4 text-uppercase text-white text-center m-3 text-shadow-pop-bottom"},"A Simple Movie DB Search Tool")),r.a.createElement("div",{className:"row"},r.a.createElement(y,null))))},k=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload}return e},thumbs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIE_THUMBS_01":return t.payload}return e},thumbs02:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIE_THUMBS_02":return t.payload}return e},thumbs03:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIE_THUMBS_03":return t.payload}return e}}),O=Object(o.d)(k,Object(o.a)(i.a));c.a.render(r.a.createElement(l.a,{store:O},r.a.createElement(S,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.b2f1ed03.chunk.js.map