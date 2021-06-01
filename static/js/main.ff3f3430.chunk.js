(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(6),n=a.n(l),m=(a(15),a(9)),o=a(1),s=a(2),c=a(4),d=a(3),u=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:i,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:l},"IMDB"))))});u.defaultProps={description:""};var b=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(u,Object.assign({key:e.imdbId},e))})))};b.defaultProps={movies:[]};var g=a(7),p=(a(19),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",imgUrl:"",imgUrlError:!1,imdbUrl:"",imdbUrlError:!1,imdbId:""},e.isValid=function(e,t){return t.test(e)},e.clear=function(){e.setState({})},e.onAdd=function(t){t.preventDefault();var a=!1,i=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,r=e.state,l=r.imgUrl,n=r.imdbUrl;if(e.isValid(l,i)||(e.setState({imgUrlError:!0}),a=!0),e.isValid(n,i)||(e.setState({imdbUrlError:!0}),a=!0),!a){var m={title:t.target.elements.title.value,description:t.target.elements.description.value,imgUrl:l,imdbUrl:n,imdbId:t.target.elements.imdbId.value};e.props.addMovie(m)}},e.onChangeHandler=function(t,a){"imgUrl"===a&&e.setState({imgUrlError:!1}),"imdbUrl"===a&&e.setState({imdbUrlError:!1}),e.setState(Object(g.a)({},a,t.target.value))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,i=t.description,l=t.imgUrl,n=t.imdbUrl,m=t.imdbId,o=t.imgUrlError,s=t.imdbUrlError;return r.a.createElement("form",{className:"movie-form",onSubmit:this.onAdd},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"New movie"),r.a.createElement("label",{htmlFor:"movie-form__title-label",className:"movie-form__label"},"Title:\xa0",r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"movie-form__title-label",name:"title",className:"movie-form__input-field",value:a,onChange:function(t){e.onChangeHandler(t,"title")},required:!0})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"movie-form__description-label",className:"movie-form__description-label"},"Description:\xa0",r.a.createElement("br",null),r.a.createElement("textarea",{type:"text",id:"movie-form__description-label",name:"description",className:"movie-form__description-field",value:i,onChange:function(t){e.onChangeHandler(t,"description")}})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"movie-form__imgurl-label",className:"movie-form__label"},"Image url:\xa0",r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"movie-form__imgurl-label",name:"imgUrl",className:"".concat(o&&" error","\n              movie-form__input-field"),value:l,onChange:function(t){e.onChangeHandler(t,"imgUrl")},required:!0})),o&&r.a.createElement("span",{className:"error-message"},"Please, enter a valid URL"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"movie-form__imgdburl-label",className:"movie-form__label"},"Image db url:\xa0",r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"movie-form__imgdburl-label",name:"imdbUrl",className:"".concat(s&&" error","\n              movie-form__input-field"),value:n,onChange:function(t){e.onChangeHandler(t,"imdbUrl")},required:!0})),s&&r.a.createElement("span",{className:"error-message"},"Please, enter a valid URL"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"movie-form__imgdbid-label",className:"movie-form__label"},"Image db id:\xa0",r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"movie-form__imgdbid-label",name:"imdbId",className:"movie-form__input-field",value:m,onChange:function(t){e.onChangeHandler(t,"imdbId")},required:!0})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",disabled:o||s},"Add")))}}]),a}(i.Component)),v=a(8),f=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(b,{movies:e})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(p,{addMovie:this.addMovie})))}}]),a}(i.Component);n.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.ff3f3430.chunk.js.map