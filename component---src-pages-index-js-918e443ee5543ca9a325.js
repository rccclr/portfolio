(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);a(309),a(310);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(166),s=(a(148),a(220),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.context,n=e.link;return i.a.createElement("div",{className:"pb4-ns pb3 animatable lh-copy"},i.a.createElement("div",{className:"fw5 f4 mv1"},i.a.createElement("a",{className:"pretty-link",href:n,target:"_blank",rel:"noopener noreferrer"},t)),i.a.createElement("div",{className:"gray f5"},a))},t}(i.a.Component)),l=function(){return i.a.createElement("div",null,i.a.createElement(s,{title:"Uma nova experiência para criar e gerenciar promoções na VTEX",context:"VTEX Day. 2019",link:"https://docs.google.com/presentation/d/1eXlEMlTrrYifJIOIWkdEAiz_Pxo0iHnuXr_NhLsjQto/edit?usp=sharing"}),i.a.createElement(s,{title:"A UX da Mobilidade Urbana - Cidades melhores para pedalar e viver",context:"ILA (Interaction Latin America), ILA Redux RJ, ILA Redux SP. 2018",link:"https://docs.google.com/presentation/d/1pI4ONbgxePD8DrPSmUlRHCa_mSGdzyGJB8Qb38ur4bs/edit?usp=sharing"}),i.a.createElement(s,{title:"É possível estacionar a bike de boa?",context:"Bicicultura, 2018",link:"https://docs.google.com/presentation/d/1JJvtK1kPmfCg-g06vtmPoQNBgT9BdHZQCGxbXaqZAm8/edit#slide=id.p"}),i.a.createElement(s,{title:"Podcasts",context:"Isobar Lightning Talks, 2017",link:"https://docs.google.com/presentation/d/1hzKk7USBEVX9m8HlrZD5rRb8sp-VXWFYuyebHe5kzJ8/edit?usp=sharing"}),i.a.createElement(s,{title:"Multimídias Livres",context:"Fórum Internacional Software Livre, 2016",link:"https://musica-libre.org/sprint_multimedia_2016_1"}),i.a.createElement(s,{title:"O primeiro web app PWA para ciclistas",context:"Google IO Extended, 2015",link:"https://docs.google.com/presentation/d/18DyziybC2Benf43OMAd5T7611QULd9oWA1L60rzvrsM/edit#slide=id.p"}),i.a.createElement(s,{title:"React no Mundo Real - Relatos do maior site de aluguel de carros do mundo",context:"React Meetup, 2014",link:"https://docs.google.com/presentation/d/1RnbQ5beTuvtUFzk6KX3kJXrF25i2WN-ZMcXbhlelktw/edit#slide=id.p"}),i.a.createElement(s,{title:"O que aprendi com as Artes Marciais",context:"Desconferência UFRGS - 2013",link:"https://docs.google.com/presentation/d/1djDV4rN1B3gyP-ODDjxwNMGlvgfExUyxe47l8n7tI_w/edit#slide=id.p"}))},m=(a(314),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.bookNodes;return e.finished=e.finished.reverse().slice(0,3),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-wrap"},e.reading.map(function(e){return i.a.createElement(d,{mode:"mini",book:e.node.book})})))},t}(i.a.Component)),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.book,a=e.mode,n="animatable flex flex-row pr3-ns mb5-ns w-50-m ph2-m mb4 dim link ",r=" lh-title ",o="";switch(a){case"half":n+="w-50-ns w-100",r+="f6-ns f5",o+="f7-ns f6";break;case"full":n+="w-100",r+="f4",o+="f6";break;case"mini":n+="w-third-ns w-50",r+="f5 fw6",o+="f6"}return i.a.createElement("a",{className:n,target:"_blank",rel:"noopener noreferrer",href:t.link},i.a.createElement("img",{className:"card-shadow",src:t.imageUrl}),"mini"!==a&&i.a.createElement("div",{className:"flex flex-column ml3 dark-gray"},i.a.createElement("div",{className:r},t.title),i.a.createElement("div",{className:o},"by ",t.authors[0].name)))},t}(i.a.Component),u=m,p=a(190),f=function(){return i.a.createElement(p.a,{items:[{label:"GitHub",url:"https://github.com/cmdalbem/"},{label:"Instagram",url:"https://www.instagram.com/cmdalbem/"},{label:"Twitter",url:"https://twitter.com/cmdalbem"},{label:"Goodreads",url:"https://www.goodreads.com/cmdalbem"},{label:"LinkedIn",url:"https://www.linkedin.com/in/cmdalbem/"},{label:"Email",url:"mailto:cristiano.dalbem@gmail.com"}]})},h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.description,n=e.children,r=e.fullScreen,o=t.toLowerCase(),c=a&&i.a.createElement("p",{className:"f4 dark-gray fw6 mb5-ns mb4 mt0-ns mt0 lh-copy"},a);return i.a.createElement("section",{id:o,className:"mv7-ns mv4 "},i.a.createElement("div",{className:"mb4 flex flex-row-ns flex-column items-top"},i.a.createElement("div",{className:"w-30-ns pt3 pr4-ns db-ns dn"},i.a.createElement("div",{className:"w-100 bt bw1 b--near-black"})),i.a.createElement("div",{className:"w-20-ns"},i.a.createElement("h2",{className:"f3-ns f2 fw8 mv0-ns mb2 near-black"},t)),(!r||a)&&i.a.createElement("div",{className:"w-50-ns f5 mt0"},c,!r&&n)),r&&i.a.createElement("div",{className:"flex flex-row-ns flex-column"},i.a.createElement("div",{className:"w-100-ns"},n)))},t}(i.a.Component),g=a(189),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.posts,t=this.props.mini,a=t?"w-25-ns w-25-m w-100 ":"w-50-ns w-50-m w-100 ";return a+="animatable mv4 pr4-ns pr3-m",i.a.createElement("div",{className:"flex flex-wrap"},e.map(function(e){var n=e.node;return i.a.createElement("div",{className:a},i.a.createElement(g.a,{mini:t,node:n}))}))},t}(i.a.Component),b=a(315),v=a.n(b),E=a(165);a.d(t,"pageQuery",function(){return k});var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=Object(E.b)(this.props.data.allMarkdownRemark.edges),t=e.filter(function(e){return"case study"===e.node.frontmatter.projectType}),a=e.filter(function(e){return"project"===e.node.frontmatter.projectType}),n={};return n.finished=this.props.data.allGoodreadsBook.edges.filter(function(e){return e.node.shelfNames.includes("read")}),n.reading=this.props.data.allGoodreadsBook.edges.filter(function(e){return e.node.shelfNames.includes("currently-reading")}),i.a.createElement(c.a,null,i.a.createElement("div",{className:"mw9 center"},i.a.createElement("section",{className:"flex flex-row-ns flex-column "},i.a.createElement("div",{className:"w-40-ns"},i.a.createElement("img",{src:v.a,alt:"Silhouette of a man standing at the top of a hill with silhouettes of mountains in the background. I like mountains because they offer great insights about life in general. Like: we're never quite sure of how tall are the mountains just over the ones that are nearest to us, all we have to do is keep climbing and taking care of our own pair of legs.",className:"parallax__layer--back absolute top-3-ns top-2 mt0-ns mt5 w-80 w-100-ns relative-ns"}),i.a.createElement("h1",{className:"f1-ns f2 fw9 dark-gray absolute lh-solid top-0 left-3-ns pt5 mt6-ns ml7-ns ml4 mt6 mr3 mw6-ns tl-ns tr"},"I'm a designer of products and systems.")),i.a.createElement("div",{className:"w-10-ns"}),i.a.createElement("div",{className:"w-50-ns mt7"},i.a.createElement("section",{id:"about",className:"mb4 mt6-ns mt7 f4 lh-copy dark-gray"},i.a.createElement("p",null,"Nice to meet you!"),i.a.createElement("p",null,"I'm a designer with a skill set ranging from researching to designing and programming products and systems. I'm interested in solving problems related to the human experience of technology and tools we use to work and express ourselves."),i.a.createElement("p",null,"My background in Computer Science has biased me towards solutions that are scalable, maintainable and that stand the test of time. This mindset also applies to businesses and their role in the society. I work with purpose, and I like creating stuff that contribute to a more sustainable and equitable world."),i.a.createElement("p",null,"I'm very curious and I'm always learning different stuff. I find it helps me stay creative, and give me knowledge to find the right problems to solve, as well as the right solutions for them.")))),i.a.createElement(h,{title:"Work"},i.a.createElement("div",{className:"f4 pb4-ns pb2 mt2 dark-gray lh-copy"},"I'm working as a Product Designer at"," ",i.a.createElement("a",{className:"pretty-link",target:"_blank",rel:"noopener noreferrer",href:"https://www.vtex.com/"},"VTEX"),", building the future of e-commerce in one of the biggest ecosystems in the world. I've been contributing in a variety of teams and projects, participating from all project phases, always in search of the right balance between the inherent complexity of the platform, technology constraints and the pains and needs of thousands of users that depend on our platform everyday to run their businesses.",i.a.createElement("p",null,"In my free time I'm a cicloactivist and I've built"," ",i.a.createElement("a",{className:"pretty-link",target:"_blank",rel:"noopener noreferrer",href:"https://www.bikedeboa.com.br/"},"bike de boa"),", a web app to help urban cyclists in Brazil."))),i.a.createElement(h,{title:"Case studies",fullScreen:!0,description:"Here's a selection of projects in which I've played a major role and I'm very proud of."},i.a.createElement(w,{posts:t})),i.a.createElement(h,{title:"Other projects",fullScreen:!0,description:""},i.a.createElement(w,{mini:!0,posts:a})),i.a.createElement(h,{title:"Speaking",description:"I try to be as engaged as possible with the community, always learning from others and  trying to share some ideas too."},i.a.createElement(l,null)),i.a.createElement(h,{title:"Reading",description:i.a.createElement("span",null,"Reading good books is like always having good companies and being mentored by the best. This is what I'm currently reading, according to",i.a.createElement("a",{className:"pretty-link ml1",href:"https://www.goodreads.com/cmdalbem",target:"_blank",rel:"noopener noreferrer"},"Goodreads"),".")},i.a.createElement(u,{bookNodes:n})),i.a.createElement(h,{title:"Elsewhere"},i.a.createElement(f,null))))},t}(i.a.Component),k=(t.default=y,"4124874781")},148:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o);t.a=function(e,t){return function(a){function n(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))||this).state={didMount:!1},e}r()(n,a);var o=n.prototype;return o.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({didMount:!0})},0)},o.render=function(){var a,n=this.state.didMount,r=t||{},o=r.duration,c=r.delay,s=r.animation;return o=o||".7s",c=c||"0s",s=s||"fadeIn",a=n?{animation:s+" "+o+" ease-out "+c+" 1"}:{opacity:0},i.a.createElement("div",{style:a},i.a.createElement(e,this.props))},n}(i.a.Component)}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Cristiano Dalbem"}}}}},164:function(e,t,a){},165:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return i});a(218);var n=a(219),r=a.n(n),o=function(e,t){return e?"now"===e.toLowerCase()?"Now":r()(e).format(t):null},i=function(e){var t=e.filter(function(e){return e.node.frontmatter.forceOrder});t=t.sort(function(e,t){return e.node.frontmatter.forceOrder-t.node.frontmatter.forceOrder});var a=e.filter(function(e){return!e.node.frontmatter.forceOrder});return t.concat(a)}},166:function(e,t,a){"use strict";var n=a(161),r=a(0),o=a.n(r),i=a(1),c=a.n(i),s=a(167),l=a.n(s),m=a(36),d=a(148),u=a(7),p=a.n(u),f=a(175),h=a.n(f),g=function(e){function t(){return e.apply(this,arguments)||this}p()(t,e);var a=t.prototype;return a.scrollToSection=function(e){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})},a.render=function(){var e=this,t=!0;"undefined"!=typeof window&&(t="/"===window.location.pathname,new URL(window.location.href));var a=["About","Work","Case studies","Speaking","Reading","Elsewhere"],n=a.map(function(e){return e.toLowerCase()});return o.a.createElement("div",{className:"flex pt4 pb3"},o.a.createElement("div",{className:"w-100 flex justify-between items-center"},o.a.createElement("h1",{className:"f5"},o.a.createElement(m.Link,{to:"/",className:"link dim near-black fw7 ttu"},"Cristiano Dalbem")),o.a.createElement("div",{className:""+(t&&"f7 dn db-ns")},t?o.a.createElement(h.a,{items:n,componentTag:"div",currentClassName:"tab--selected",offset:-200},a.map(function(t){return o.a.createElement("button",{className:"ml3 f6 pa0 fw6 pointer bg-transparent outline-0 bn tab tab--unselected",onClick:function(){return e.scrollToSection(t.toLowerCase())},key:t},t)})):o.a.createElement(m.Link,{to:"/",className:"link dim fw6 orange"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-corner-left-up"},o.a.createElement("polyline",{points:"14 9 9 4 4 9"}),o.a.createElement("path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}))," Back"))))},t}(o.a.Component),w=Object(d.a)(g,{animation:"slideDownWithDelay",duration:"1.5s"}),b=function(){return o.a.createElement("div",{className:"flex flex-row-ns flex-column pv6 f7 w-100 moon-gray justify-between"},o.a.createElement("div",{className:"mw6-ns lh-copy"},"Made with ❤️ and 🧠 in Figma + GatsbyJS + React + Tachyons."),o.a.createElement("div",{className:"mv4 mv0-ns"},o.a.createElement("a",{className:"pl3-ns pr0-ns pr3 pl0 dim moon-gray",href:"https://github.com/cmdalbem/"},o.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 438.549 438.549"},o.a.createElement("path",{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"}))),o.a.createElement("a",{className:"pl3-ns pr0-ns pr3 pl0 dim moon-gray",href:"https://www.instagram.com/cmdalbem/"},o.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512"},o.a.createElement("path",{d:"M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z"}),o.a.createElement("path",{d:"M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"}),o.a.createElement("circle",{cx:"393.6",cy:"118.4",r:"17.056"}))),o.a.createElement("a",{className:"pl3-ns pr0-ns pr3 pl0 dim moon-gray",href:"https://twitter.com/cmdalbem"},o.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 612 612"},o.a.createElement("path",{d:"M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"}))),o.a.createElement("a",{className:"pl3-ns pr0-ns pr3 pl0 dim moon-gray",href:"https://www.linkedin.com/in/cmdalbem/"},o.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 430.117 430.117"},o.a.createElement("path",{d:"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"}))),o.a.createElement("a",{className:"pl3-ns pr0-ns pr3 pl0 dim moon-gray",href:"mailto:cristiano.dalbem@gmail.com "},o.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.a.createElement("polyline",{points:"22,6 12,13 2,6"})))))},v=(a(164),function(e){var t=e.children;return o.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){var a=!0;"undefined"!=typeof window&&(a="/"===window.location.pathname);var n="ph6-ns ph4-m ph3 ";n+=a?" fixed-ns top-0 left-0 right-0 bg-background-color z-2 relative":"";var r=Object(d.a)(w);return o.a.createElement("div",{className:"parallax"},o.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Personal website of Cristiano Dalbem, a designer of products and systems."}]},o.a.createElement("html",{lang:"en"}),o.a.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"})),o.a.createElement("div",{className:n},o.a.createElement(r,null)),o.a.createElement("div",{className:"ph6-ns ph4-m ph3 mt2 mb0"},t),o.a.createElement("div",{className:"ph6-ns ph4-m ph3 bg-dark-gray"},o.a.createElement(b,null)))},data:n})});v.propTypes={children:c.a.node.isRequired};t.a=v},169:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t="br2 ba b--moon-gray gray dib ";return e.size&&"big"===e.size?t+="f5 mr2 mb2 pv1 ph2":t+="f7 mr2 mb2 pa1",r.a.createElement("span",{className:t},e.children)}},189:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(36),s=a(169),l=a(165),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.node,t=this.props.mini,a=Object(l.a)(e.frontmatter.date,"YYYY"),n=Object(l.a)(e.frontmatter.date2,"YYYY");return n&&n===a&&(n=null),i.a.createElement(c.Link,{className:"project-card link near-black db br1 lh-copy",to:e.fields.slug},i.a.createElement("div",{className:"w-100 db project-card--cover cover card-shadow br1 "+(t?"h4":"h5-ns h4"),style:e.frontmatter.cover&&{backgroundImage:"url("+e.frontmatter.cover.publicURL+")",backgroundPosition:"center"}}),i.a.createElement("div",{className:"pv3"},i.a.createElement("div",{className:"project-card--date f6 mt1 silver"},a," ",n&&"– "+n),e.frontmatter.title&&i.a.createElement("h3",{className:"project-card--title f4 fw7 near-black mt0 mb0"},e.frontmatter.title),e.frontmatter.minibio&&i.a.createElement("div",{className:"project-card--description f5 mt0 gray lh-copy"},e.frontmatter.minibio),e.frontmatter.tags&&!t&&i.a.createElement("div",{className:"flex flex-row flex-wrap mt2"},e.frontmatter.tags.map(function(e){return i.a.createElement(s.a,null,e)}))))},t}(i.a.Component);t.a=m},190:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.items;return t&&t.map?r.a.createElement("div",{className:"f3 fw2"},t.map(function(e,t){return r.a.createElement("a",{className:"animatable link dim db text-gradient-clip bg-gradient-"+(t+1)+" "+(0==t?"pb3-ns pb2":"pv3-ns pv2"),target:"_blank",rel:"noopener noreferrer",href:e.url},e.label)})):null}},220:function(e,t,a){"use strict";a(313)("link",function(e){return function(t){return e(this,"a","href",t)}})},309:function(e,t,a){"use strict";var n=a(17),r=a(74)(!0);n(n.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(56)("includes")},310:function(e,t,a){"use strict";var n=a(17),r=a(311);n(n.P+n.F*a(312)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},311:function(e,t,a){var n=a(76),r=a(26);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},312:function(e,t,a){var n=a(4)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(e){}}return!0}},313:function(e,t,a){var n=a(17),r=a(25),o=a(26),i=/"/g,c=function(e,t,a,n){var r=String(o(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},314:function(e,t,a){var n=a(28).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(19)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},315:function(e,t,a){e.exports=a.p+"static/selfie-1726a9db4d153a0dd80d4cc2dd9f0c1f.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-918e443ee5543ca9a325.js.map