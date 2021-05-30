(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(7),l=a.n(r),m=(a(15),a(9)),o=a(1),s=a(2),c=a(4),d=a(3),u=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});u.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var g=a(5),b=function(e){var t=e.title,a=e.labelFor,i=e.inputType,r=e.required,l=e.inputId,m=e.inputClass,o=e.inputName,s=e.inputValue,c=e.inputOnChange;return n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:a,className:"movie-form__label"},t,":\xa0",n.a.createElement("br",null),n.a.createElement("input",{type:i,id:l,name:o,className:m,value:s,onChange:c,required:r})))},v=(a(19),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imgUrlError:!1,imdbUrl:"",imdbUrlError:!1,imdbId:""},e.isValid=function(e,t){return t.test(e)},e.clear=function(){e.setState({})},e.onAdd=function(t){t.preventDefault();var a=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,i=t.target.elements.imgUrl.value,n=t.target.elements.imdbUrl.value;if(e.isValid(i,a))if(e.isValid(n,a)){var r={title:t.target.elements.title.value,description:t.target.elements.description.value,imgUrl:i,imdbUrl:n,imdbId:t.target.elements.imdbId.value};e.props.addMovie(r)}else e.setState({imdbUrlError:!0});else e.setState({imgUrlError:!0})},e.onChangeHandler=function(t,a){var i;e.setState((i={},Object(g.a)(i,a,t.target.value),Object(g.a)(i,"imgUrlError",!1),Object(g.a)(i,"imdbUrlError",!1),i))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,i=t.description,r=t.imgUrl,l=t.imdbUrl,m=t.imdbId,o=t.imgUrlError,s=t.imdbUrlError;return n.a.createElement("form",{className:"movie-form",onSubmit:this.onAdd},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"New movie"),n.a.createElement(b,{title:"Title",labelFor:"movie-form__title-label",inputType:"text",inputId:"movie-form__title-label",inputClass:"movie-form__input-field",inputName:"title",required:!0,inputValue:a,inputOnChange:function(t){e.onChangeHandler(t,"title")}}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"movie-form__description-label",className:"movie-form__description-label"},"Description:\xa0",n.a.createElement("br",null),n.a.createElement("textarea",{type:"text",id:"movie-form__description-label",name:"description",className:"movie-form__description-field",value:i,onChange:function(t){e.onChangeHandler(t,"description")}})),n.a.createElement("br",null),n.a.createElement(b,{title:"Image url",labelFor:"movie-form__imgurl-label",inputType:"text",inputId:"movie-form__imgurl-label",inputClass:"".concat(o&&" error","\n              movie-form__input-field"),required:!0,inputName:"imgUrl",inputValue:r,inputOnChange:function(t){e.onChangeHandler(t,"imgUrl")}}),o&&n.a.createElement("span",{className:"error-message"},"Please, enter a valid URL"),n.a.createElement("br",null),n.a.createElement(b,{title:"Image db url",labelFor:"movie-form__imgdburl-label",inputType:"text",inputId:"movie-form__imgdburl-label",inputClass:"".concat(s&&" error","\n                movie-form__input-field"),required:!0,inputName:"imdbUrl",inputValue:l,inputOnChange:function(t){e.onChangeHandler(t,"imdbUrl")}}),s&&n.a.createElement("span",{className:"error-message"},"Please, enter a valid URL"),n.a.createElement("br",null),n.a.createElement(b,{title:"Image db id",labelFor:"movie-form__imgdbid-label",inputType:"text",inputId:"movie-form__imgdbid-label",inputClass:"movie-form__input-field",required:!0,inputName:"imdbId",inputValue:m,inputOnChange:function(t){e.onChangeHandler(t,"imdbId")}}),n.a.createElement("br",null),n.a.createElement("button",{type:"submit",disabled:o||s},"Add")))}}]),a}(i.Component)),f=a(8),h=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:f},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(v,{addMovie:this.addMovie})))}}]),a}(i.Component);l.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.8ce4875c.chunk.js.map