(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,n){e.exports={navbar:"Header_navbar__3CUHR",item:"Header_item__1dgwQ"}},21:function(e,t,n){e.exports={person:"People_person__2vcGy",searchingBlock:"People_searchingBlock__P-U2i",inputBlock:"People_inputBlock__29dVP",unActiveInput:"People_unActiveInput__1IYpX",activeInput:"People_activeInput__4kJEW"}},42:function(e,t,n){},47:function(e,t,n){},76:function(e,t,n){e.exports={person:"AllPeople_person__2WlaR",searchingBlock:"AllPeople_searchingBlock__2JCNv",inputBlock:"AllPeople_inputBlock__1hZyD",unActiveInput:"AllPeople_unActiveInput__kUpX2",activeInput:"AllPeople_activeInput__1ZaVC"}},77:function(e,t,n){"use strict";n.r(t);n(42);var r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))},o=n(0),c=n.n(o),i=n(23),l=n.n(i),a=(n(47),n(16)),s=n(12),p=n(4),u=n(10),h=n(2),j=n(13),d=function(){return j.get("https://swapi.dev/api/people")},f=function(e){return j.get("https://swapi.dev/api/people/?search=".concat(e))},b=function(){return j.get("https://swapi.dev/api/planets")},O=function(e){return j.get(e)},v=function(e){return j.get("https://swapi.dev/api/people/".concat(e))},m=function(e){return j.get(e)},g=function(e){return j.get(e)},P=function(e){return j.get(e)},x="SET_PEOPLE",_="SEARCH_PEOPLE",y="SET_NEW_TEXT",w="SET_PLANETS",E={people:null,newText:"",planets:null},k=function(){return function(e){b().then((function(t){var n;e((n=t.data.results,{type:w,planets:n}))}))}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:case _:return Object(h.a)(Object(h.a)({},e),{},{people:t.people});case y:return Object(h.a)(Object(h.a)({},e),{},{newText:t.newText});case w:return Object(h.a)(Object(h.a)({},e),{},{planets:t.planets});default:return e}},D=n(40),L="SET_PROFILE",C="SET_FILM",T="SET_VEHICLE",A="CLEAR_FILMS",H="CLEAR_VEHICLES",S="SET_HOMEWORLD",F="CLEAR_HOMEWORLD",I={profileData:null,films:[],vehicles:[],homeworld:null},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(h.a)(Object(h.a)({},e),{},{profileData:t.profile});case A:return Object(h.a)(Object(h.a)({},e),{},{films:[]});case C:return Object(h.a)(Object(h.a)({},e),{},{films:e.films.concat(t.film)});case T:return Object(h.a)(Object(h.a)({},e),{},{vehicles:e.vehicles.concat(t.vehicle)});case H:return Object(h.a)(Object(h.a)({},e),{},{vehicles:[]});case S:return Object(h.a)(Object(h.a)({},e),{},{homeworld:t.homeworld});case F:return Object(h.a)(Object(h.a)({},e),{},{homeworld:null});default:return e}},B="CLEAR_PEOPLE",M="SET_ALL_PEOPLE",R={allPeople:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(h.a)(Object(h.a)({},e),{},{allPeople:e.allPeople.concat(t.allPeople)});case B:return Object(h.a)(Object(h.a)({},e),{},{allPeople:[]});default:return e}},U=Object(u.c)({peoplePage:N,allPeoplePage:W,profilePage:V}),J=Object(u.e)(U,Object(u.a)(D.a));window.store=J;var X=J,G=n(14),Z=n(15),K=n(18),Q=n(17),Y=n(41),q=n(21),z=n.n(q),$=n.p+"static/media/magnifier.e59e229d.png",ee=n(1),te=function(e){if(!e.planets)return Object(ee.jsx)("div",{children:"Loading"});if(!e.people)return Object(ee.jsx)("div",{children:"Loading"});var t=e.people.map((function(t){var n=t.url.slice(28,-1),r=+t.homeworld.slice(29,-1)-1;return Object(ee.jsxs)("div",{className:z.a.person,children:[Object(ee.jsxs)(s.b,{to:"/profile/"+n,children:[" ",Object(ee.jsx)("div",{children:t.name})]}),Object(ee.jsx)("div",{children:t.gender}),Object(ee.jsx)("div",{children:e.planets[r]?e.planets[r].name:"Loading..."})]},t.name)}));return Object(ee.jsx)("div",{children:t})},ne=function(e){var t=Object(o.useState)(!1),n=Object(Y.a)(t,2),r=n[0],i=n[1],l=c.a.createRef(),a=function(){var t=l.current.value;e.getSearchingPeople(t)};return e.people?Object(ee.jsxs)("div",{children:[Object(ee.jsx)("h1",{children:"People-page"}),Object(ee.jsxs)("div",{className:z.a.searchingBlock,children:[Object(ee.jsx)("div",{children:Object(ee.jsxs)("div",{className:z.a.inputBlock,children:[Object(ee.jsx)("input",{className:z.a.unActiveInput+" "+(r&&z.a.activeInput),type:"text",placeholder:"Enter searching name",value:e.newText,onChange:function(t){e.updateValue(t.target.value)},ref:l,onKeyDown:function(e){13===e.keyCode&&a()},onFocus:function(){i(!0)},onBlur:function(){i(!1)}}),!r&&Object(ee.jsx)("img",{src:$,alt:"mf"})]})}),Object(ee.jsx)("button",{onClick:a,children:"search"})]}),Object(ee.jsx)(te,{people:e.people,planets:e.planets})]}):Object(ee.jsx)("div",{children:"Loading"})},re=function(e){Object(K.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.props.getPeople(),this.props.getPlanets()}},{key:"render",value:function(){return Object(ee.jsx)("div",{children:Object(ee.jsx)(ne,{people:this.props.people,newText:this.props.newText,updateValue:this.props.updateValue,getSearchingPeople:this.props.getSearchingPeople,planets:this.props.planets})})}}]),n}(c.a.Component),oe=Object(u.d)(Object(a.b)((function(e){return{people:e.peoplePage.people,newText:e.peoplePage.newText,planets:e.peoplePage.planets}}),{getPeople:function(){return function(e){d().then((function(t){var n;e((n=t.data.results,{type:x,people:n}))}))}},updateValue:function(e){return{type:y,newText:e}},getSearchingPeople:function(e){return function(t){f(e).then((function(e){var n;t((n=e.data.results,{type:_,people:n}))}))}},getPlanets:k}))(re),ce=n(9),ie=n.n(ce),le=function(e){Object(K.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(this.props.profileData&&this.props.profileData.films.length===this.props.films.length&&this.props.profileData.vehicles.length===this.props.vehicles.length){this.props.profileData.films.forEach((function(t){e.props.getFilm(t)})),this.props.profileData.vehicles.forEach((function(t){e.props.getVehicle(t)}));var t=this.props.profileData.homeworld;this.props.getHomeworld(t)}}},{key:"componentDidUpdate",value:function(e){var t=this;if(e.profileData!==this.props.profileData&&this.props.profileData){var n=this.props.profileData.films,r=this.props.profileData.vehicles,o=this.props.profileData.homeworld;n.forEach((function(e){t.props.getFilm(e)})),r.forEach((function(e){t.props.getVehicle(e)})),this.props.getHomeworld(o)}}},{key:"componentWillUnmount",value:function(){this.props.clearFilms(),this.props.clearVehicles(),this.props.clearHomeworld()}},{key:"render",value:function(){console.log(this.props);var e=this.props.profileData,t=this.props.planets,n=this.props.films,r=this.props.vehicles,o=this.props.homeworld;if(console.log(o),!e)return Object(ee.jsx)("div",{children:"Loading..."});if(!t)return Object(ee.jsx)("div",{children:"Loading..."});e.homeworld.slice(29,-1);var c=n.map((function(e){return Object(ee.jsx)("li",{children:e.title},e.title)})),i=r.map((function(e){return Object(ee.jsxs)("li",{children:["Name: ",e.name,", Model: ",e.model]},e.name)}));return Object(ee.jsxs)("div",{className:ie.a.person,children:[Object(ee.jsxs)("div",{className:ie.a.personProperty,children:[Object(ee.jsx)("b",{children:"Name"}),": ",e.name]}),Object(ee.jsxs)("div",{className:ie.a.personProperty,children:[Object(ee.jsx)("b",{children:"Height"}),": ",e.height]}),Object(ee.jsxs)("div",{className:ie.a.personProperty,children:[Object(ee.jsx)("b",{children:"Mass"}),": ",e.mass]}),Object(ee.jsxs)("div",{className:ie.a.personProperty,children:[Object(ee.jsx)("b",{children:"Hair color"}),": ",e.hair_color]}),Object(ee.jsxs)("div",{className:ie.a.personProperty,children:[Object(ee.jsx)("b",{children:"Skin color"}),": ",e.skin_color]}),Object(ee.jsxs)("div",{className:ie.a.personProperty,children:[Object(ee.jsx)("b",{children:"Eye color"}),": ",e.eye_color]}),Object(ee.jsxs)("div",{className:ie.a.personProperty,children:[Object(ee.jsx)("b",{children:"Birth year"}),": ",e.birth_year]}),Object(ee.jsxs)("div",{className:ie.a.personProperty,children:[Object(ee.jsx)("b",{children:"Gender"}),": ",e.gender]}),Object(ee.jsxs)("div",{className:ie.a.personProperty,children:[Object(ee.jsx)("b",{children:"HomeWorld"}),": ",o?o.name:"Loading..."]}),Object(ee.jsxs)("div",{className:ie.a.personProperty,children:[Object(ee.jsx)("b",{children:"Vehicles"}),":"," ",r.length>0?Object(ee.jsx)("ul",{children:i}):"No vehicles"]}),Object(ee.jsxs)("div",{className:ie.a.personProperty,children:[Object(ee.jsx)("b",{children:"Films"}),":"," ",n.length>0?Object(ee.jsx)("ul",{children:c}):"Loading..."]})]})}}]),n}(c.a.Component),ae=function(e){Object(K.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(){e.props.getProfile(e.props.match.params.id)})).then(this.props.getPlanets())}},{key:"render",value:function(){return Object(ee.jsxs)("div",{children:[Object(ee.jsx)("h1",{children:"Person-page"}),Object(ee.jsx)(le,{profileData:this.props.profileData,planets:this.props.planets,films:this.props.films,vehicles:this.props.vehicles,getFilm:this.props.getFilm,clearFilms:this.props.clearFilms,getVehicle:this.props.getVehicle,clearVehicles:this.props.clearVehicles,getHomeworld:this.props.getHomeworld,homeworld:this.props.homeworld,clearHomeworld:this.props.clearHomeworld})]})}}]),n}(c.a.Component),se=Object(u.d)(Object(a.b)((function(e){return{profileData:e.profilePage.profileData,planets:e.peoplePage.planets,films:e.profilePage.films,vehicles:e.profilePage.vehicles,homeworld:e.profilePage.homeworld}}),{getProfile:function(e){return function(t){v(e).then((function(e){var n;t((n=e.data,{type:L,profile:n}))}))}},getPlanets:k,getFilm:function(e){return function(t){m(e).then((function(e){var n;t((n=e.data,{type:C,film:n}))}))}},clearFilms:function(){return{type:A}},getVehicle:function(e){return function(t){g(e).then((function(e){var n;t((n=e.data,{type:T,vehicle:n}))}))}},clearVehicles:function(){return{type:H}},getHomeworld:function(e){return function(t){P(e).then((function(e){var n;t((n=e.data,{type:S,homeworld:n}))}))}},clearHomeworld:function(){return{type:F}}}),p.e)(ae),pe=n(19),ue=n.n(pe),he=function(e){return Object(ee.jsxs)("nav",{className:ue.a.navbar,children:[Object(ee.jsx)("div",{className:ue.a.item,children:Object(ee.jsx)(s.b,{to:"/profile/1/",activeClassName:ue.a.active,children:"Profile"})}),Object(ee.jsx)("div",{className:ue.a.item,children:Object(ee.jsx)(s.b,{to:"/people",activeClassName:ue.a.active,children:"People"})}),Object(ee.jsx)("div",{className:ue.a.item,children:Object(ee.jsx)(s.b,{to:"/all-people",activeClassName:ue.a.active,children:"All people"})})]})},je=(n(76),function(e){var t=e.allPeople.map((function(e){var t=e.url.slice(28,-1);return Object(ee.jsx)("div",{children:Object(ee.jsx)(s.b,{to:"/profile/"+t,children:Object(ee.jsx)("li",{children:e.name},e.name)})})}));return Object(ee.jsx)("div",{children:Object(ee.jsx)("ol",{children:t})})}),de=function(e){Object(K.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){var e="https://swapi.dev/api/people/";this.props.getPeople(e),this.props.getPeople("".concat(e,"?page=2")),this.props.getPeople("".concat(e,"?page=3")),this.props.getPeople("".concat(e,"?page=4")),this.props.getPeople("".concat(e,"?page=5")),this.props.getPeople("".concat(e,"?page=6")),this.props.getPeople("".concat(e,"?page=7")),this.props.getPeople("".concat(e,"?page=8")),this.props.getPeople("".concat(e,"?page=9"))}},{key:"componentWillUnmount",value:function(){this.props.clearPeople()}},{key:"render",value:function(){return console.log(this.props.allPeople),Object(ee.jsx)("div",{children:Object(ee.jsx)(je,{allPeople:this.props.allPeople})})}}]),n}(c.a.Component),fe=Object(u.d)(Object(a.b)((function(e){return{allPeople:e.allPeoplePage.allPeople}}),{getPeople:function(e){return function(t){O(e).then((function(e){var n;t((n=e.data.results,{type:M,allPeople:n}))}))}},clearPeople:function(){return{type:B}}}))(de),be=function(e){return Object(ee.jsx)("div",{className:"App",children:Object(ee.jsx)(s.a,{children:Object(ee.jsxs)(a.a,{store:X,children:[Object(ee.jsx)(he,{}),Object(ee.jsx)(p.a,{path:"/profile/:id",render:function(){return Object(ee.jsx)(se,{})}}),Object(ee.jsx)(p.a,{path:"/people",render:function(){return Object(ee.jsx)(oe,{})}}),Object(ee.jsx)(p.a,{path:"/all-people",render:function(){return Object(ee.jsx)(fe,{})}})]})})})};l.a.render(Object(ee.jsx)(be,{}),document.getElementById("root")),r()},9:function(e,t,n){e.exports={personProperty:"Profile_personProperty__3nS1E",person:"Profile_person__AoW1l"}}},[[77,1,2]]]);
//# sourceMappingURL=main.0dda1664.chunk.js.map