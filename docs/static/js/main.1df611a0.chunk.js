(this["webpackJsonpcapital-city-weather"]=this["webpackJsonpcapital-city-weather"]||[]).push([[0],[,,,,,function(e,t,a){},,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=(a(5),a(18),a(8)),s=a.n(i),l=a(11),u=a(6),m=a(12),d=a(1),h=a(2),p=a(4),y=a(3),b=(a(20),function(e){Object(p.a)(a,e);var t=Object(y.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,"The Weather in World Capitals"))}}]),a}(r.a.Component)),f=function(e){Object(p.a)(a,e);var t=Object(y.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"app-footer"},r.a.createElement("p",null,"Made by Andrew Braun"))}}]),a}(r.a.Component),w=function(e){Object(p.a)(a,e);var t=Object(y.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("td",{className:"".concat(this.props.classProp),key:"".concat(this.props.classProp,"-").concat(this.props.rowNumber),id:"".concat(this.props.classProp,"-").concat(this.props.rowNumber)},this.props.data)}}]),a}(r.a.Component),E=function(e){Object(p.a)(a,e);var t=Object(y.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.rowData;return r.a.createElement("tr",{key:this.props.rowNumber,id:"".concat(e.cityGeoNameId),className:"table-row"},r.a.createElement(w,{classProp:"city-entry",data:e.city,rowNumber:this.props.rowNumber}),r.a.createElement(w,{classProp:"country-entry",data:e.country,rowNumber:this.props.rowNumber}),r.a.createElement(w,{classProp:"continent-entry",data:e.continent,rowNumber:this.props.rowNumber}),r.a.createElement(w,{classProp:"date-entry",data:e.date,rowNumber:this.props.rowNumber}),r.a.createElement(w,{classProp:"time-entry",data:e.time,rowNumber:this.props.rowNumber}),r.a.createElement(w,{classProp:"temp-entry",data:"".concat(e.temp," \u2103"),rowNumber:this.props.rowNumber}),r.a.createElement(w,{classProp:"weather-entry",data:e.weather,rowNumber:this.props.rowNumber}),r.a.createElement(w,{classProp:"humidity-entry",data:"".concat(e.humidity,"%"),rowNumber:this.props.rowNumber}),r.a.createElement(w,{classProp:"windspeed-entry",data:"".concat(e.windspeed," km/h"),rowNumber:this.props.rowNumber}))}}]),a}(r.a.Component),v=function(e){var t=e.geoData,a=Object.entries(t).map((function(e,t){var a=Object(u.a)(e,2),n=(a[0],a[1]);return r.a.createElement(E,{rowData:n,rowNumber:t,key:"".concat(n.city,"-").concat(n.country)})}));return r.a.createElement("article",{className:"data-container"},r.a.createElement("table",{className:"data-table"},r.a.createElement("thead",{className:"table-header"},r.a.createElement("tr",null,r.a.createElement("th",{className:"city-header"},"City"),r.a.createElement("th",{className:"country-header"},"Country"),r.a.createElement("th",{className:"continent-header"},"Continent"),r.a.createElement("th",{className:"date-header"},"Date"),r.a.createElement("th",{className:"time-header"},"Time"),r.a.createElement("th",{className:"temp-header"},"Temp"),r.a.createElement("th",{className:"weather-header"},"Weather"),r.a.createElement("th",{className:"humidity-header"},"Humidity"),r.a.createElement("th",{className:"windspeed-header"},"Windspeed"))),r.a.createElement("tbody",null,a)))},N=(a(21),function(e){e.searchField;var t=e.searchChange;return r.a.createElement("section",{role:"search"},r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"searchbox"},r.a.createElement("input",{type:"search",name:"searchbox",id:"searchbox",className:"searchbox",placeholder:"Search for any variable",maxLength:150,onChange:t})))))}),g=(a(22),function(e){e.sortField;var t=e.sortChange;return r.a.createElement("section",null,r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"sortbox"},r.a.createElement("select",{name:"sortbox",id:"sortbox",className:"sortbox",type:"select",onChange:t},r.a.createElement("option",{value:"city"},"City name"),r.a.createElement("option",{value:"continent"},"Continent"),r.a.createElement("option",{value:"temp"},"Temperature"),r.a.createElement("option",{value:"windspeed"},"Windspeed"),r.a.createElement("option",{value:"humidity"},"Humidity"),r.a.createElement("option",{value:"weather"},"Weather"),r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"time"},"Time"))))))}),C=function(e){Object(p.a)(a,e);var t=Object(y.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onSortChange=function(t){e.setState({sortfield:t.target.value})},e.state={cities:[{city:"Kabul"}],searchfield:"",sortfield:"city"},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(m.a)(s.a.mark((function t(){var a,n,r,c,o,i,m,d,h,p,y,b;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=encodeURIComponent(JSON.stringify({isCapital:!0})),t.next=3,fetch("https://parseapi.back4app.com/classes/Continentscountriescities_City?limit=10&include=country,country.continent&keys=name,country,country.name,country.capital,country.continent,country.continent.name,population,location,cityId,adminCode&where=".concat(a),{headers:{"X-Parse-Application-Id":"KFsBDbVFGZ9WYkvFSkoyRJoFU4ORIL1sv563IDSU","X-Parse-REST-API-Key":"d6cXuIVw0c1O2nqLfsdFyaLrMnEJ4XFE3E2GK7x0"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,c=r.results,o=Object.entries(c).map((function(e){var t=Object(u.a)(e,2),a=(t[0],t[1]);return{city:a.name,cityGeoNameId:a.cityId,country:a.country.name,countryGeoNameId:a.country.objectId,continent:a.country.continent.name,latitude:a.location.latitude,longitude:a.location.longitude,timezone:"",time:"",date:"",temp:void 0,weather:"",humidity:void 0,windspeed:void 0}})),t.next=11,e.setState({cities:o});case 11:i=Object(l.a)(o),t.prev=12,i.s();case 14:if((m=i.n()).done){t.next=47;break}return d=m.value,t.next=18,fetch("http://api.openweathermap.org/data/2.5/weather?lat=".concat(d.latitude,"&lon=").concat(d.longitude,"&appid=13ee2a5d09316b306b5e506d3ff09c42&units=metric"));case 18:return h=t.sent,t.next=21,h.json();case 21:return p=t.sent,t.next=24,fetch("http://api.geonames.org/timezoneJSON?lat=".concat(d.latitude,"&lng=").concat(d.longitude,"&username=abdev"));case 24:return y=t.sent,t.next=27,y.json();case 27:return b=t.sent,d.timezone=b.timezoneId,d.time=b.time.slice(11),d.date=b.time.slice(5,10),t.next=33,e.setState({cities:o});case 33:return d.temp=p.main.temp,t.next=36,e.setState({cities:o});case 36:return d.weather=p.weather[0].main,t.next=39,e.setState({cities:o});case 39:return d.humidity=p.main.humidity,t.next=42,e.setState({cities:o});case 42:return d.windspeed=p.wind.speed,t.next=45,e.setState({cities:o});case 45:t.next=14;break;case 47:t.next=52;break;case 49:t.prev=49,t.t0=t.catch(12),i.e(t.t0);case 52:return t.prev=52,i.f(),t.finish(52);case 55:return t.next=57,e.setState({cities:o});case 57:case"end":return t.stop()}}),t,null,[[12,49,52,55]])})))()}},{key:"render",value:function(){var e=this,t=function(e,t){var a={city:"city",country:"country",continent:"continent",latitude:"latitude",longitude:"longitude",timezone:"timezone",time:"time",date:"date",temp:"temp",weather:"weather",humidity:"humidity",windspeed:"windspeed"}[t];return e.sort((function(e,t){return e[a]<t[a]?-1:e[a]>t[a]?1:0}))}(this.state.cities.filter((function(t){return void 0!==t.city?t.city.toLowerCase().includes(e.state.searchfield.toLowerCase())||t.country.toLowerCase().includes(e.state.searchfield.toLowerCase())||t.continent.toLowerCase().includes(e.state.searchfield.toLowerCase())||t.weather.toLowerCase().includes(e.state.searchfield.toLowerCase())||t.time.includes(e.state.searchfield)||t.date.includes(e.state.searchfield)||t.temp.toString().includes(e.state.searchfield)||t.humidity.toString().includes(e.state.searchfield)||t.windspeed.toString().includes(e.state.searchfield):t})),this.state.sortfield);return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("main",{className:"main-container"},r.a.createElement("section",{className:"filter-sort",id:"main-filter-sort"},r.a.createElement(g,{sortChange:this.onSortChange}),r.a.createElement(N,{searchChange:this.onSearchChange})),r.a.createElement(v,{geoData:t})),r.a.createElement(f,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.1df611a0.chunk.js.map