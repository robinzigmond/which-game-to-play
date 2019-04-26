(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(25)},18:function(e,t,a){},22:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),i=a.n(s),l=(a(18),a(7)),o=a.n(l),c=a(11),u=a(8),h=a(2),m=a(3),p=a(5),d=a(4),f=a(6),b=a(1),g=(a(22),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).toggle=a.toggle.bind(Object(b.a)(Object(b.a)(a))),a.state={open:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{open:!e.open}})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{id:"info",onClick:this.toggle},"What is this?"),this.state.open?r.a.createElement("div",{className:"site-info"},r.a.createElement("p",null,"You know how it is - it's game night, and you're sick of the traditional first game of the evening: the \"what game are we going to play?\" game."),r.a.createElement("p",null,"This site aims to speed up the process. Provided all games you have available to you are stored in one or more of your players' collections on ",r.a.createElement("a",{href:"https://boardgamegeek.com/",target:"_blank",rel:"noopener noreferrer"},"BoardGameGeek"),", you can import those collections just by entering the BGG username(s). Then all you need to do is specify how many players you have, and how long you want the game to take, and the site will show you exactly which games you have available that meet those needs."),r.a.createElement("p",null,"You'll probably still argue about what to play - but at least you'll be able to see all the options at a glance. There are also easy-to-use ways to reorder the list of games, and to filter them by various categories supplied by BGG - I hope these features may prove useful."),r.a.createElement("p",null,"Note that all data is simply that provided by BoardGameGeek - you can't expect me to manually provide data for tens of thousands of games and know how long a playtime they might all have! So please don't complain to me that 7-player ",r.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/102794/caverna-cave-farmers",target:"_blank",rel:"noopener noreferrer"},"Caverna")," can't possibly be played in an hour or less, or that it only suggests ",r.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/98778/hanabi",target:"_blank",rel:"noopener noreferrer"},"Hanabi")," if you put exactly 25 minutes in. Complain to BGG, and see if it does you any good (unlikely) - it's nothing I can do anything about. (Although I certainly sympathise!)"),r.a.createElement("p",null,"Made by Robin Zigmond, developer and boardgamer, please feel free to check out my profiles on ",r.a.createElement("a",{href:"https://boardgamegeek.com/user/robinz",target:"_blank",rel:"noopener noreferrer"},"BGG")," and ",r.a.createElement("a",{href:"https://github.com/robinzigmond",target:"_blank",rel:"noopener noreferrer"},"Github"),". If you find this useful, please spread the word, and don't be afraid to make suggestions (eg by private message on BGG) as to how to improve the site."),r.a.createElement("button",{id:"info-close",onClick:this.toggle},"Close")):null)}}]),t}(n.Component)),v=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e;return e=this.props.duplicate?"You've already got that user's collection imported!":"Failed to load - please check the username and try again!",r.a.createElement("div",{className:"failure"},r.a.createElement("p",null,e),r.a.createElement("div",{className:"close-box",onClick:this.props.close},"X"))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={loading:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e;return this.state.data&&!this.state.loading&&(e=this.state.data.length?"Collection successfully loaded!":"Invalid username entered"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-section"},r.a.createElement("label",{htmlFor:"bgg-username"},"Enter a BGG username to import their collection:"),r.a.createElement("input",{type:"text",name:"bgg-username",onChange:this.props.handleChange,value:this.state.username}),r.a.createElement("button",{type:"submit",onClick:this.props.handleSubmit},"Go!")),e?r.a.createElement("p",null,e):null)}}]),t}(n.Component),k=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"checkbox",value:this.props.value,onChange:this.props.handleChange,id:this.props.id,checked:this.props.checked}),r.a.createElement("div",{className:"custom-checkbox"},this.props.checked?"\u2713":""))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleWantImport=a.handleWantImport.bind(Object(b.a)(Object(b.a)(a))),a.toggleRemoval=a.toggleRemoval.bind(Object(b.a)(Object(b.a)(a))),a.state={toDelete:[],showForm:e.showForm},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"handleWantImport",value:function(){this.setState({showForm:!0})}},{key:"toggleRemoval",value:function(e){var t=this.state.toDelete.findIndex(function(t){return t===e});this.setState(function(a){var n=a.toDelete;return-1===t?n.push(e):n.splice(t,1),{toDelete:n}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"collection-info"},this.props.data.length?r.a.createElement("div",{className:"form-section"},r.a.createElement("p",null,"Collections loaded for:"),r.a.createElement("ul",null,this.props.data.map(function(t,a){return r.a.createElement("li",{key:a},r.a.createElement(k,{handleChange:function(){return e.toggleRemoval(t)},checked:e.state.toDelete.includes(t)}),r.a.createElement("span",null,t))})),this.state.toDelete.length?r.a.createElement("button",{onClick:function(){return e.props.removeUsers(e.state.toDelete)}},"Remove selected collections"):null):r.a.createElement("p",null,"No collection data loaded yet"),this.state.showForm?r.a.createElement(y,{handleChange:this.props.handleUserNameChange,handleSubmit:this.props.handleImportSubmit}):r.a.createElement("div",{className:"form-section"},r.a.createElement("button",{onClick:this.handleWantImport},"Click to add a new collection")))}}]),t}(n.Component),E=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=["red","yellow","green","blue"],t=e[Math.floor(Math.random()*e.length)],a="loader meeple-".concat(t);return r.a.createElement("div",{className:"loader-box"},r.a.createElement("div",{className:a}),r.a.createElement("p",null,"Loading collection..."))}}]),t}(n.Component),j=a(12),C=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).selectOption=a.selectOption.bind(Object(b.a)(Object(b.a)(a))),a.state={value:a.props.value,open:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"selectOption",value:function(e){var t=this,a=e.target.dataset.value;this.setState({value:a,open:!1},function(){return t.props.updateParent(a)})}},{key:"render",value:function(){var e=this,t="custom-select";return this.state.open&&(t+=" open"),r.a.createElement("div",{className:t},r.a.createElement("div",{className:"select-main",onClick:function(){return e.setState(function(e){return{open:!e.open}})}},r.a.createElement("p",{className:"select-text"},this.props.options.find(function(t){return t.value===e.state.value}).text),r.a.createElement("div",{className:"select-arrow"},"\u25bc")),r.a.createElement("div",{className:"select-body"},this.props.options.map(function(t){var a=t.value,n=t.text,s="select-option";return a===e.state.value&&(s+=" selected"),r.a.createElement("div",{key:a,className:s,"data-value":a,onClick:e.selectOption},n)})))}}]),t}(n.Component),w=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pagination-buttons"},r.a.createElement("button",{onClick:this.props.first,disabled:this.props.onFirst},"|<"),r.a.createElement("button",{onClick:this.props.prev,disabled:this.props.onFirst},"<"),r.a.createElement("button",{onClick:this.props.next,disabled:this.props.onLast},">"),r.a.createElement("button",{onClick:this.props.last,disabled:this.props.onLast},">|"))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).updateFilters=a.updateFilters.bind(Object(b.a)(Object(b.a)(a))),a.getGames=a.getGames.bind(Object(b.a)(Object(b.a)(a))),a.state={itemNames:[]},a.singularForms={categories:"category",families:"family",mechanics:"mechanic"},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getGames(this.props)}},{key:"componentDidUpdate",value:function(e){e.filterType!==this.props.filterType&&this.getGames(this.props)}},{key:"getGames",value:function(e){this.setState(function(t,a){var n=new Set;for(var r in e.games.forEach(function(e){e[a.filterType].forEach(function(e){n.add(e)})}),e.currentFlags)e.currentFlags[r]&&n.add(r);return{itemNames:n}})}},{key:"updateFilters",value:function(e,t,a){e.target.checked?this.props.updateFilters(t,this.props.filterType,a):this.props.updateFilters(t,this.props.filterType)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"filter-list"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"close-box",onClick:this.props.close},"X"),r.a.createElement("h3",null,"Filter games by ",this.singularForms[this.props.filterType]),Array.from(this.state.itemNames).sort().map(function(t,a){return r.a.createElement("div",{key:a,className:"single-filter"},r.a.createElement("span",{className:"filter-name"},t),r.a.createElement("div",{className:"filter-checks"},r.a.createElement("label",{htmlFor:"".concat(t,"Required")},"Require"),r.a.createElement("input",{type:"checkbox",name:"".concat(t,"Required"),onChange:function(a){return e.updateFilters(a,t,1)},checked:1===e.props.currentFlags[t]}),r.a.createElement("label",{htmlFor:"".concat(t,"Banned")},"Remove"),r.a.createElement("input",{type:"checkbox",name:"".concat(t,"Banned"),onChange:function(a){return e.updateFilters(a,t,-1)},checked:-1===e.props.currentFlags[t]})))})))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).toolTip=r.a.createRef(),a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.toolTip.current.style.right=this.props.xPos+"px",this.toolTip.current.style.bottom=this.props.yPos+"px"}},{key:"render",value:function(){var e=this.props.info,t=e.required,a=e.banned;return r.a.createElement("div",{id:"tooltip",ref:this.toolTip},r.a.createElement("div",{id:"tooltip-body"},r.a.createElement("p",null,t.length?r.a.createElement("span",null,r.a.createElement("strong",null,"Required: "),t.join(", ")):null,t.length&&a.length?" ":null,a.length?r.a.createElement("span",null,r.a.createElement("strong",null,"Removed: "),a.join(", ")):null)),r.a.createElement("div",{id:"tooltip-arrow"}))}}]),t}(n.Component),S=function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).gamesPerPage=20;var n=Math.ceil(a.props.games.length/a.gamesPerPage);return a.first=a.first.bind(Object(b.a)(Object(b.a)(a))),a.next=a.next.bind(Object(b.a)(Object(b.a)(a))),a.last=a.last.bind(Object(b.a)(Object(b.a)(a))),a.prev=a.prev.bind(Object(b.a)(Object(b.a)(a))),a.handleMouseEnter=a.handleMouseEnter.bind(Object(b.a)(Object(b.a)(a))),a.handleMouseLeave=a.handleMouseLeave.bind(Object(b.a)(Object(b.a)(a))),a.container=r.a.createRef(),a.state={page:1,lastPage:n,tooltip:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"first",value:function(){this.setState({page:1})}},{key:"next",value:function(){this.setState(function(e){return{page:Math.min(e.page+1,e.lastPage)}})}},{key:"last",value:function(){this.setState(function(e){return{page:e.lastPage}})}},{key:"prev",value:function(){this.setState(function(e){return{page:Math.max(1,e.page-1)}})}},{key:"convertRating",value:function(e,t,a){return null==e?a||"not rated":(+e).toFixed(t)}},{key:"handleMouseEnter",value:function(e,t){var a=this.container.current.getBoundingClientRect(),n=this.props.flags[t],r=Object.keys(n),s=r.filter(function(e){return 1===n[e]}),i=r.filter(function(e){return-1===n[e]});this.setState({tooltip:!0,tooltipInfo:{required:s,banned:i},mouseX:a.width-e.pageX+a.left+window.scrollX-20,mouseY:a.height-e.pageY+a.top+window.scrollY+10})}},{key:"handleMouseLeave",value:function(){this.setState({tooltip:!1,tooltipInfo:{},mouseX:null,mouseY:null})}},{key:"render",value:function(){var e=this;if(this.props.games.length){var t;switch(this.props.sorting){case"alphabetical":break;case"yearpublished":t=function(t){return e.convertRating(t.yearpublished,0,"unknown")};break;case"bggRank":t=function(t){return e.convertRating(t.stats.ranks[0].value,0,"not ranked")};break;default:var a=this.props.sorting.slice(6);t=function(t){return e.convertRating(t.ratings[a],1,"not rated")}}return r.a.createElement("div",{className:"game-list",ref:this.container},this.props.games.length?r.a.createElement("div",null,r.a.createElement("h3",null,"Suitable Games",this.state.lastPage>1?" - page ".concat(this.state.page," of ").concat(this.state.lastPage):null),this.state.lastPage>1?r.a.createElement(w,{first:this.first,next:this.next,prev:this.prev,last:this.last,onFirst:1===this.state.page,onLast:this.state.page===this.state.lastPage}):null,r.a.createElement("div",{className:"gamelist"},this.props.games.slice((this.state.page-1)*this.gamesPerPage,this.state.page*this.gamesPerPage).map(function(e){return r.a.createElement("div",{className:"game-info",key:e.id},r.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/".concat(e.id),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"".concat(e.name),src:e.thumbnail}),r.a.createElement("h4",null,e.name,t?" (".concat(t(e),")"):null)))})),this.state.lastPage>1?r.a.createElement(w,{first:this.first,next:this.next,prev:this.prev,last:this.last,onFirst:1===this.state.page,onLast:this.state.page===this.state.lastPage}):null):r.a.createElement("p",null,"Unfortunately, none of your games fit the filters you've selected!"),r.a.createElement("div",{className:"filters"},r.a.createElement("p",null,"Filter results by:"),r.a.createElement("ul",null,this.props.filters.map(function(t,a){var n=e.props.flags[t],s=n&&Object.keys(n).some(function(e){return 0!==n[e]});return r.a.createElement("li",{key:a,className:"filter-option"+(s?" filter-used":""),onClick:function(){return e.props.filterDisplay(t)}},r.a.createElement("span",{onMouseEnter:s?function(a){return e.handleMouseEnter(a,t)}:null,onMouseLeave:s?e.handleMouseLeave:null},t))}))),this.props.showFilters?r.a.createElement(x,{games:this.props.games,updateFilters:this.props.updateFilters,currentFlags:this.props.flags[this.props.showFilters],close:function(){return e.props.filterDisplay()},key:this.props.games.map(function(e){return e.id}).join(","),filterType:this.props.showFilters}):null,this.state.tooltip?r.a.createElement(F,{info:this.state.tooltipInfo,xPos:this.state.mouseX,yPos:this.state.mouseY}):null)}return r.a.createElement("p",null,"Unfortunately, none of your games fit your criteria!")}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).timePresets=[{mins:30,label:"Half an Hour"},{mins:60,label:"1 Hour"},{mins:120,label:"2 Hours"},{mins:180,label:"3 Hours"}],a.filters=["categories","families","mechanics"],a.initialiseFlags=a.initialiseFlags.bind(Object(b.a)(Object(b.a)(a))),a.updateFilters=a.updateFilters.bind(Object(b.a)(Object(b.a)(a))),a.doFilters=a.doFilters.bind(Object(b.a)(Object(b.a)(a))),a.filterDisplay=a.filterDisplay.bind(Object(b.a)(Object(b.a)(a))),a.handlePlayerCountChange=a.handlePlayerCountChange.bind(Object(b.a)(Object(b.a)(a))),a.handleAvailableTimeChange=a.handleAvailableTimeChange.bind(Object(b.a)(Object(b.a)(a))),a.handleTimePresetChange=a.handleTimePresetChange.bind(Object(b.a)(Object(b.a)(a))),a.handleOrderChange=a.handleOrderChange.bind(Object(b.a)(Object(b.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a.state={playerCount:4,availableTime:30,gameOrder:"alphabetical",allGames:[],given:!1,filteredGames:[],flags:{},showFilters:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.initialiseFlags()}},{key:"componentDidUpdate",value:function(e,t){t.gameOrder!==this.state.gameOrder&&this.handleSubmit(!1)}},{key:"initialiseFlags",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t={};this.filters.forEach(function(e){t[e]={}}),this.setState({flags:t},e)}},{key:"updateFilters",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.setState(function(n){var r=n.flags;return r[t][e]=a,{flags:r,page:1}},this.doFilters)}},{key:"doFilters",value:function(){var e=this;this.setState(function(t){var a=t.flags,n=Object(j.a)(t.allGames);return e.filters.forEach(function(e){var t=function(t){switch(a[e][t]){case 1:n=n.filter(function(a){return a[e].includes(t)});break;case-1:n=n.filter(function(a){return!a[e].includes(t)})}};for(var r in a[e])t(r)}),{filteredGames:n}})}},{key:"filterDisplay",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setState({showFilters:e})}},{key:"handlePlayerCountChange",value:function(e){var t=e.target.value;""===t?this.setState({playerCount:t}):+t>0&&this.setState({playerCount:+t})}},{key:"handleAvailableTimeChange",value:function(e){var t=e.target.value;""===t?this.setState({availableTime:t}):+t>=0&&this.setState({availableTime:+t})}},{key:"handleTimePresetChange",value:function(e){e.target.checked?this.setState({availableTime:e.target.value}):this.setState({availableTime:""})}},{key:"handleOrderChange",value:function(e){this.setState({gameOrder:e})}},{key:"handleSubmit",value:function(){var e=this;arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?this.state.playerCount&&this.state.availableTime&&this.setState(function(t,a){var n,r=a.data.filter(function(e){return e.minplayers<=t.playerCount&&e.maxplayers>=t.playerCount&&e.minplaytime<=t.availableTime&&e.maxplaytime>=t.availableTime});switch(t.gameOrder){case"alphabetical":n=function(e,t){return t.name-e.name};break;case"yearpublished":n=function(e,t){return(e.yearpublished||1/0)-(t.yearpublished||1/0)};break;case"bggRank":n=function(e,t){return(e.stats.ranks[0].value||1/0)-(t.stats.ranks[0].value||1/0)};break;default:var s=e.state.gameOrder.slice(6);n=function(e,t){return(t.ratings[s]||0)-(e.ratings[s]||0)}}return r.sort(n),{given:!0,allGames:r}},this.doFilters):this.initialiseFlags(function(){return e.handleSubmit(!1)})}},{key:"render",value:function(){var e,t=this,a=this.props.users;return(e=a.length>1?a.map(function(e){return{value:"rating".concat(e),text:"".concat(e,"'s rating")}}):[{value:"rating".concat(a[0]),text:"My Rating"}]).unshift({value:"alphabetical",text:"Name (alphabetical)"},{value:"yearpublished",text:"Year published"}),e.push({value:"bggRank",text:"BGG ranking list position"}),r.a.createElement("div",null,r.a.createElement("div",{className:"form-section"},r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"playerCount"},"Number of Players"),r.a.createElement("input",{type:"number",name:"playerCount",id:"playerCount",value:this.state.playerCount,onChange:this.handlePlayerCountChange})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"availableTime"},"Desired Playing Time (minutes)"),r.a.createElement("input",{type:"text",id:"availableTime",name:"availableTime",value:this.state.availableTime,onChange:this.handleAvailableTimeChange}),r.a.createElement("div",null,"Or select:",this.timePresets.map(function(e){return r.a.createElement("div",{className:"time-checkbox",key:e.mins},r.a.createElement("label",{htmlFor:"timePreset".concat(e.mins)},e.label,":"),r.a.createElement(k,{value:e.mins,handleChange:t.handleTimePresetChange,id:"timePreset".concat(e.mins),checked:+t.state.availableTime===e.mins}))}))),r.a.createElement("div",{className:"input-block"},r.a.createElement("p",{className:"select-label"},"Order results by:"),r.a.createElement(C,{options:e,value:e[0].value,updateParent:this.handleOrderChange})),r.a.createElement("div",{className:"input-block"},r.a.createElement("button",{type:"button",onClick:function(){return t.handleSubmit()}},this.state.given?"Update":"Get"," recommendations!"))),this.state.given?r.a.createElement(S,{games:this.state.filteredGames,key:this.state.filteredGames.map(function(e){return e.id}).join(","),sorting:this.state.gameOrder,numUsers:this.props.users.length,filters:this.filters,flags:this.state.flags,updateFilters:this.updateFilters,showFilters:this.state.showFilters,filterDisplay:this.filterDisplay}):null)}}]),t}(n.Component),P="https://wgtp-backend.herokuapp.com/",G=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleUserNameChange=a.handleUserNameChange.bind(Object(b.a)(Object(b.a)(a))),a.handleImportSubmit=a.handleImportSubmit.bind(Object(b.a)(Object(b.a)(a))),a.closeBox=a.closeBox.bind(Object(b.a)(Object(b.a)(a))),a.removeUsers=a.removeUsers.bind(Object(b.a)(Object(b.a)(a))),a.state={username:"",data:{games:[],users:[]},failure:!1,showDuplicate:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"handleUserNameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handleImportSubmit",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var a,n,r,s,i,l,h,m,p,d,f,b,g=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!this.state.data.users.includes(this.state.username)){e.next=4;break}return this.setState({showDuplicate:!0}),e.abrupt("return");case 4:return this.setState({loading:!0,failure:!1}),e.prev=5,e.next=8,fetch("".concat(P,"/collection/").concat(this.state.username));case 8:a=e.sent,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(5),this.setState({failure:!0,loading:!1}),e.abrupt("return");case 15:if(a.ok){e.next=18;break}return this.setState({failure:!0,loading:!1}),e.abrupt("return");case 18:return e.next=20,a.json();case 20:if(!(n=e.sent)||!n.length){e.next=41;break}if(r=function(e,t){for(var a=[];e.length>0;){for(var n=[];n.length<t&&e.length>0;)n.push(e.shift());a.push(n)}return a},(s=this.state.data).users.push(this.state.username),i=n.map(function(e){return e.id}),200,l=s.games,h=l.map(function(e){return e.id}),m=n.filter(function(e){return!h.includes(e.id)}),p=r(i,200),d=r(h,200),Object(u.a)(o.a.mark(function e(){var t,a,n,r,i,h,b,v;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(v=function(){return(v=Object(u.a)(o.a.mark(function e(t,a,n){var r,s,i,l,u,h,m,p,d,b,g;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,s=!1,i=void 0,e.prev=3,l=a[Symbol.iterator]();case 5:if(r=(u=l.next()).done){e.next=23;break}return h=u.value,m=h.map(String).join("-"),e.next=10,fetch("".concat(P,"/check_ratings/").concat(t,"/").concat(m));case 10:if((p=e.sent).ok){e.next=15;break}return this.setState({failure:!0,loading:!1}),f=!0,e.abrupt("return");case 15:return e.next=17,p.json();case 17:for(g in d=e.sent,b=function(e){if(null!==d[e]){var a=n.find(function(t){return t.id===+e});a&&(a.ratings?a.ratings[t]=d[e]:a.ratings[t]=Object(c.a)({},t,d[e]))}},d)b(g);case 20:r=!0,e.next=5;break;case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(3),s=!0,i=e.t0;case 29:e.prev=29,e.prev=30,r||null==l.return||l.return();case 32:if(e.prev=32,!s){e.next=35;break}throw i;case 35:return e.finish(32);case 36:return e.finish(29);case 37:case"end":return e.stop()}},e,this,[[3,25,29,37],[30,,32,36]])}))).apply(this,arguments)},b=function(e,t,a){return v.apply(this,arguments)},t=!0,a=!1,n=void 0,e.prev=5,r=s.users[Symbol.iterator]();!(t=(i=r.next()).done);t=!0)h=i.value,b(h,p,m);e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),a=!0,n=e.t0;case 13:e.prev=13,e.prev=14,t||null==r.return||r.return();case 16:if(e.prev=16,!a){e.next=19;break}throw n;case 19:return e.finish(16);case 20:return e.finish(13);case 21:b(g.state.username,d,l);case 22:case"end":return e.stop()}},e,this,[[5,9,13,21],[14,,16,20]])}))(),!f){e.next=36;break}return this.setState({failure:!0,loading:!1}),e.abrupt("return");case 36:(b=l.concat(m)).forEach(function(e){e.users||(e.users=[]),n.map(function(e){return e.id}).includes(e.id)&&e.users.push(g.state.username),e.ratings||(e.ratings={})}),this.setState({data:{users:s.users,games:b},loading:!1}),e.next=42;break;case 41:this.setState({failure:!0,loading:!1});case 42:case"end":return e.stop()}},e,this,[[5,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"closeBox",value:function(){this.state.showDuplicate?this.setState({failure:!1,showDuplicate:!1,username:""}):this.setState({failure:!1,showDuplicate:!1})}},{key:"removeUsers",value:function(e){this.setState(function(t){var a=t.data,n=a.users,r=a.games;e.forEach(function(e){if(n.includes(e)){var t=n.findIndex(function(t){return t===e});n.splice(t,1)}});var s=[];return r.forEach(function(t){t.users=t.users.filter(function(t){return!e.includes(t)});var a=!0,n=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var o=i.value;Object.keys(t.users).includes(o)&&delete t.users[o]}}catch(c){n=!0,r=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}t.users.length||s.push(t.id)}),r=r.filter(function(e){return!s.includes(e.id)}),{data:{users:n,games:r}}})}},{key:"render",value:function(){var e=this.state.data.games.filter(function(e){return e.users.length});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Find a boardgame to play!"),r.a.createElement("h4",null,"Import your BGG collection, give your preferences and get instant recommendations"),r.a.createElement(g,null),this.state.failure?r.a.createElement(v,{close:this.closeBox}):null,this.state.showDuplicate?r.a.createElement(v,{close:this.closeBox,duplicate:!0}):null,r.a.createElement(O,{data:this.state.data.users,showForm:!this.state.data.users.length,handleUserNameChange:this.handleUserNameChange,handleImportSubmit:this.handleImportSubmit,removeUsers:this.removeUsers,key:this.state.data.users}),this.state.loading?r.a.createElement(E,null):null,!this.state.loading&&this.state.data.games.length?r.a.createElement(N,{key:e.length,data:e,users:this.state.data.users}):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.e68b6af8.chunk.js.map