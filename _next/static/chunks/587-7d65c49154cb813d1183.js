(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[587],{3896:function(e,t,r){"use strict";r.d(t,{Z:function(){return qt}});var n=r(2322),a=r(8303),i=r(5186),o=r(504),s=r(7679),c=r(2784),l=r(8100),u=r.n(l),d=r(7243),m=r(2779),p=r.n(m);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){var t=e.children,r=e.className,a=e.href,i=e.noblank,o=e.nofollow,s=e.tooltip;return(0,n.jsx)("a",g(g({className:p()("text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 hover:text-blue-500",r),href:a,rel:p()("noopener noreferrer",{nofollow:o}),tabIndex:0,title:s},i?{}:{target:"_blank"}),{},{children:t}))};h.displayName="Anchor";var y=h,x=function(e){var t=e.children;return(0,n.jsx)("header",{className:"text-gray-700 dark:text-gray-200",children:(0,n.jsxs)("h1",{className:"font-thin py-10 text-4xl text-center sm:text-6xl",role:"banner",children:[(0,n.jsx)("i",{"aria-label":"Lion",className:"not-italic",role:"img",children:"\ud83e\udd81"}),"Dantalion:",(0,n.jsx)("wbr",{}),"\xa0",t]})})};x.displayName="Header";var b=x,j=r(8488);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t=e.children,r=e.components,a=(0,j.Z)(e,["children","components"]);return(0,n.jsx)(u(),k(k({className:"markdown text-gray-700 dark:text-gray-200",components:k({p:function(e){var t=e.children;return(0,n.jsx)(n.Fragment,{children:t})}},r)},a),{},{children:t}))};w.displayName="InlineMarkdown";var O=w,N=function(e){var t=e.children,r=e.className,a=e.itemType,i=e.order?"ol":"ul",o=null!==a&&void 0!==a?a:"li";return(0,n.jsx)(i,{className:r,children:c.Children.toArray(t).map((function(e,t){return(0,n.jsx)(o,{children:e},t)}))})};N.displayName="List";var P=N;function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){var t=e.children,r=(0,j.Z)(e,["children"]);return(0,n.jsx)(P,S(S({},r),{},{children:null===t||void 0===t?void 0:t.map((function(e){return(0,n.jsx)(O,{children:e},e)}))}))};C.displayName="InlineMarkdownList";var Z=C,B=function(e){var t=e.caption,r=e.children,a=e.headingLevel,i=void 0===a?"h4":a,o=e.open,s=e.tooltip;return(0,n.jsxs)("details",{className:"my-5 nm-flat-gray-200-sm rounded-2xl dark:nm-flat-gray-700-sm md:mx-1 md:rounded-3xl",open:o,children:[(0,n.jsx)("summary",{className:"bg-gray-200 cursor-pointer duration-200 ease-in-out outline-none px-8 py-4 rounded-2xl select-none text-gray-700 text-xl transform transition dark:bg-gray-700 dark:text-gray-200 dark:focus:bg-gray-800 focus:bg-gray-100 dark:hover:bg-gray-800 hover:bg-gray-100 md:rounded-3xl sm:text-2xl",tabIndex:0,title:s,children:(0,n.jsx)(i,{className:"font-bold inline",children:t})}),(0,n.jsx)("div",{className:"border-gray-500 border-opacity-50 border-t-2 mx-4 overflow-y-scroll p-2",children:(0,n.jsx)(Z,{className:"list-disc p-4 md:px-8",children:r})})]})};B.displayName="Details";var L=B,E=r(5096),F=r(9530),M=function(e){var t=e.children,r=e.href,a=e.icon,i=e.iconClassName,o=e.nofollow,s=e.sup,c=e.tooltip,l=s?"sup":"span";return(0,n.jsxs)(y,{href:r,nofollow:o,tooltip:c,children:[t&&(0,n.jsx)("span",{className:"mr-1",children:t}),(0,n.jsx)(l,{children:(0,n.jsx)(F.G,{icon:a,className:i})})]})};M.displayName="IconAnchor";var A=M,R=function(e){var t=e.children,r=e.href,a=e.nofollow,i=e.tooltip;return(0,n.jsx)(A,{href:r,icon:E.Xjp,iconClassName:"opacity-70 text-xs",nofollow:a,sup:!0,tooltip:i,children:t})};R.displayName="ExternalAnchor";var H=R;function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var V=function(e){var t=e.children,r=e.featureBody,a=e.featureHeading,i=e.tooltipFeatureDetails;return(0,n.jsxs)("article",{children:[(0,n.jsx)(u(),{components:{a:function(e){var t=e.children,r=e.href;return(0,n.jsx)(H,{href:r,nofollow:!0,children:t})},p:function(e){e.node;var t=(0,j.Z)(e,["node"]);return(0,n.jsx)("p",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:"py-3"},t))}},className:"font-light leading-loose markdown p-3 text-gray-700 text-lg dark:text-gray-200 sm:px-2",linkTarget:"_blank",children:t}),(0,n.jsx)(L,{caption:a,headingLevel:"h2",tooltip:i,children:r})]})};V.displayName="Article";var _=V,K=function(){return(0,n.jsxs)("svg",{className:"h-full w-full",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 960 190",children:[(0,n.jsx)("desc",{children:"Dantalion"}),(0,n.jsx)("path",{d:"M316,526V336h829V526Zm100.5-93.9c-2.8-.5-5.3-1.4-7.9-1.4-19.8-.1-39.6-.7-59.4.2-16.2.8-24.9,10.5-26,26.7a86.8,86.8,0,0,0,.1,12.5c1.1,15.5,8.9,25.2,24.2,26.1a476,476,0,0,0,60.9,0c15.7-.9,24.1-11.3,24.3-27s.4-34.3-.1-51.5c-.5-15.6-10.1-25.7-25.6-27.8a65,65,0,0,0-9.9-.6h-63l-5.1.2V404h63.4a72.8,72.8,0,0,1,10.4.8c7.6,1.2,12.8,5.7,13.6,12.6C416.9,422.1,416.5,427,416.5,432.1Zm363,0c-2.5-.5-5-1.4-7.4-1.4-20-.1-40-.8-59.9.2-16.4.9-25.1,11-25.8,27.4a96.1,96.1,0,0,0,.1,12c.9,14.5,7.7,22.6,22,25.6a79.3,79.3,0,0,0,16.9,1.5c15-.1,30,.2,44.9-.9,16.4-1.2,25.3-11.2,25.6-27.6s.4-34-.2-51-11.2-27.7-28.2-28.2c-24.6-.6-49.3-.3-74-.3a5.6,5.6,0,0,0-1.5.4V404h64.2a55.1,55.1,0,0,1,9.9.8c6.8,1.2,12.1,4.7,13.2,11.8C780.1,421.5,779.5,426.8,779.5,432.1Zm192.6,65.5c19.5.8,37.8-15.4,39.7-35.1a202.2,202.2,0,0,0,0-38.9c-1.7-18-12.4-30.2-30.3-32.8-14.3-2.1-29.2-2-43.7-1-18.7,1.4-32.2,15-33.8,33.7a235.6,235.6,0,0,0,0,39.4c1.3,17.2,17.9,32.9,34.4,33.7M466,497v-5.7c0-21-.1-42,.1-63,0-13.2,6.3-21,19.2-22.6,9.9-1.2,20-.9,29.9-.8,16.8.2,25,8.7,25,25.6v61c0,1.7.2,3.5.3,5.8,4.8,0,9.1.2,13.4-.2.9,0,2.5-2,2.5-3.1.1-23.6.5-47.3-.4-71-.7-18.1-13.4-31.4-31.6-33a222.4,222.4,0,0,0-40.8-.2c-21,1.9-33.6,16.5-33.7,37.6s0,43.6,0,65.5a30.5,30.5,0,0,0,.3,4.1Zm669.4-1a1.8,1.8,0,0,0,.4-1.3c0-23.5.4-47-.2-70.5-.5-18.7-13.3-32.6-32-34.4a222.5,222.5,0,0,0-37.4-.6c-24.4,1.8-36.9,16.2-36.9,40.8,0,20.5,0,41-.3,61.5V497h17V428.2c.1-12.8,6.2-21,18.6-22.3a173.6,173.6,0,0,1,33.8-.5c14.6,1.4,20.6,9.4,20.6,24.2V496ZM617,405h53.1c0-4-.2-7.5.1-11s-1.4-4.8-5-4.8c-14.2.2-28.4.1-42.6.1L617,389V364H601v25.2c-9,0-17.4-.2-25.9.1-1.4.1-3.8,1.7-3.9,2.8-.5,4.1-.2,8.2-.2,12.9h30.3v6.4c.1,19.9-.2,39.8.3,59.7.3,12.8,7.5,23.8,19.5,25.6,14.1,2.2,28.6,1,42.9,1.8V482.7c-9.4,0-18.4.1-27.4,0-14.1-.1-19.5-5.5-19.6-19.5M834,497V354H819V497Zm31.1-2.1c.4,1,1.6,2.4,2.4,2.4,4.5.3,9,.1,13.5.1V392H865m16-37H865v22h16Z",className:"fill-current text-gray-700 dark:text-gray-200",transform:"translate(-185 -336)"}),(0,n.jsx)("path",{d:"M258,354.9c28.7,1,45.3,16.7,47,45.3a339.8,339.8,0,0,1-1.2,58.8c-2.4,21.9-18.6,36.1-40.8,37.5-19.3,1.2-38.6.7-57.9.9H185V354m17,17V482.2c20.7-.6,41.2-.2,61.5-1.9,13.7-1,22.7-9.8,26.1-23.4a52.3,52.3,0,0,0,1.5-11.8c.2-13,.3-26,0-39-.4-22-12.1-34.4-34.2-35.4",className:"fill-current text-gray-700 dark:text-gray-200",transform:"translate(-185 -336)"}),(0,n.jsx)("path",{d:"M403.4,443.5c9.5.5,13.1,4.6,13.2,13.9,0,3.8.1,7.6-.1,11.5-.5,7.3-3.8,11.5-11,12.7a127.4,127.4,0,0,1-16.3,1c-10.2.2-20.3.2-30.5,0a60.7,60.7,0,0,1-10.3-1.4,10.6,10.6,0,0,1-4.8-2.5c-7.2-7.6-5.1-16.9-3.7-25.5,1.2-6.9,7.4-9.2,13.7-9.5",className:"fill-current text-gray-700 dark:text-gray-200",transform:"translate(-185 -336)"}),(0,n.jsx)("path",{d:"M766.4,443.6c9.2.4,12.8,4.5,12.9,13.5.1,4.4.1,8.7-.2,13-.5,6.2-4,10.3-10.1,11.4a104.2,104.2,0,0,1-14.8,1.1q-16.2.3-32.4,0a41.3,41.3,0,0,1-9.9-1.2c-6.1-1.4-9.3-5.3-9.8-11.6a80.4,80.4,0,0,1-.3-11c.4-9.6,4.6-14.5,14.3-15",className:"fill-current text-gray-700 dark:text-gray-200",transform:"translate(-185 -336)"}),(0,n.jsx)("path",{d:"M919.5,443.3v-13c.1-13.3,7.3-23.4,20.4-24.8a166.8,166.8,0,0,1,36.7.3c12.2,1.5,19.4,11,19.8,23.4q.5,13.9,0,27.9c-.5,14.1-10.2,23.8-24.6,24.4-9.5.4-19,.4-28.4,0-14.8-.6-23.8-10.4-23.9-25.2Z",className:"fill-current text-gray-700 dark:text-gray-200",transform:"translate(-185 -336)"})]})};K.displayName="Logo";var $=K,I=r(2659);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var z=function(e){var t=e.author;return(0,n.jsxs)(P,{className:"divide-x-2 divide-gray-500 divide-opacity-50 flex flex-row justify-center p-4",itemType:function(e){var t=e.className,r=(0,j.Z)(e,["className"]);return(0,n.jsx)("li",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:p()("place-self-center px-3",t)},r))},children:[(0,n.jsxs)(n.Fragment,{children:["\xa9 ",t]}),(0,n.jsx)(A,{href:"https://twitter.com/kurone_kito",icon:I.mdU,tooltip:"Twitter"}),(0,n.jsx)(A,{href:"https://github.com/kurone-kito",icon:I.zhw,tooltip:"GitHub"}),(0,n.jsx)(A,{href:"https://www.youtube.com/channel/UCJs_ejHQM0rcemJaeO2s5vA",icon:I.opf,tooltip:"YouTube"}),(0,n.jsx)(A,{href:"https://kit.black/",icon:E.J9Y,tooltip:"Homepage"})]})};z.displayName="FooterNavigation";var q=z,G=function(e){var t=e.author,r=e.children;return(0,n.jsx)("footer",{className:"nm-flat-gray-300-xs mt-4 py-4 text-gray-700 text-sm dark:nm-flat-gray-600-xs dark:text-gray-200",role:"contentinfo",children:(0,n.jsxs)("nav",{className:"flex flex-col mx-auto sm:flex-row lg:container",children:[(0,n.jsx)("div",{className:"hidden flex-shrink xl:block",children:(0,n.jsx)($,{})}),(0,n.jsx)("div",{className:"flex flex-grow items-center justify-center",children:(0,n.jsx)(q,{author:t})}),(0,n.jsx)("div",{className:"flex flex-col flex-shrink p-4 lg:flex-row",children:c.Children.toArray(r).map((function(e,t){return(0,n.jsx)("div",{className:"flex-shrink p-4",children:e},t)}))})]})})};G.displayName="Footer";var W=G,Y=function(e){var t=e.children,r=e.className,a=e.onClick;return(0,n.jsx)("div",{className:p()("flex justify-center pt-8",r),children:(0,n.jsx)("button",{className:"duration-200 ease-in-out flex-grow font-bold leading-5 nm-flat-gray-300 px-8 py-4 rounded-full text-gray-800 tracking-widest transform transition uppercase dark:nm-flat-gray-600 dark:text-gray-300 dark:hover:nm-flat-gray-800-lg dark:hover:text-gray-100 hover:nm-flat-gray-50-lg hover:text-gray-900",onClick:a,tabIndex:0,type:"submit",children:t})})};Y.displayName="Button";var J=Y;function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=function(e){var t=e.id,r=e.label,a=(0,j.Z)(e,["id","label"]);return(0,n.jsxs)("label",{className:"flex flex-col my-4 sm:flex-row sm:items-center",htmlFor:t,children:[(0,n.jsx)("span",{className:"font-bold mb-1 text-sm tracking-widest text-gray-700 dark:text-gray-200 sm:mb-0 sm:mr-8 sm:w-1/3",children:r}),(0,n.jsx)("input",X({className:"appearance-none duration-200 flex-grow leading-5 mr-1 w-full nm-inset-gray-100 px-8 py-4 rounded-full text-gray-800 dark:nm-inset-gray-600 dark:text-gray-100 dark:focus:nm-inset-gray-800 dark:hover:nm-inset-gray-800 focus:nm-inset-gray-50 hover:nm-inset-gray-50 sm:w-2/3",id:t,tabIndex:0},a))]})};ee.displayName="Input";var te=ee,re=function(e){var t=e.birthday,r=e.birthdayLabel,a=e.buttonLabel,i=e.legendLabel,o=e.nickname,s=e.nicknameLabel,c=e.onChangeBirthday,l=e.onChangeNickname,u=e.onSubmit,d=e.notes;return(0,n.jsx)("form",{className:"nm-flat-gray-300-xs p-6 dark:nm-flat-gray-600-xs md:rounded-3xl",onSubmit:u,children:(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("legend",{className:"font-light text-gray-700 text-xl dark:text-gray-200",children:i}),(0,n.jsx)(te,{autoComplete:"bday",defaultValue:t,enterKeyHint:"go",id:"birthday",label:r,max:"2050-12-31",min:"1873-02-01",name:"birthday",onChange:c,required:!0,type:"date"}),(0,n.jsx)(te,{autoComplete:"nickname",defaultValue:o,enterKeyHint:"go",id:"nickname",label:s,maxLength:240,name:"nickname",onChange:l,placeholder:s,type:"text"}),(0,n.jsx)(P,{className:"text-red-900 text-sm dark:text-red-200",children:d}),(0,n.jsxs)(J,{children:[(0,n.jsx)(F.G,{className:"animate-pulse mx-2",icon:E.wn1}),a]})]})})};re.displayName="BirthForm";var ne=re,ae=r(2847),ie=r.n(ae),oe=r(6588),se=r(8080),ce=r(2113),le=r(1103),ue=r.n(le),de=function(e){return e.reduce((function(e,t){return e^t}),15)},me=function(e){var t=(0,ce.Z)(se.DS.toUint8Array(e)).flatMap((function(e){return[15&e,e>>4&15]}));if(t.length){var r,n=ue()(t,7),o=(0,a.Z)(n,2),s=o[0],c=(0,a.Z)(o[1],1)[0];return de(s)===c?{cycle:(r=s)[3]+1,inner:i.types.genius[r[0]],lifeBase:i.types.lifeBase[r[6]],outer:i.types.genius[r[1]],potentials:[i.types.potential[r[4]],i.types.potential[r[5]]],workStyle:i.types.genius[r[2]]}:void 0}},pe=function(e){var t=function(e){return[i.types.genius.indexOf(e.inner),i.types.genius.indexOf(e.outer),i.types.genius.indexOf(e.workStyle),e.cycle-1,i.types.potential.indexOf(e.potentials[0]),i.types.potential.indexOf(e.potentials[1]),i.types.lifeBase.indexOf(e.lifeBase)]}(e),r=ue()([].concat((0,ce.Z)(t),[de(t)]),2).map((function(e){return e.reduce((function(e,t,r){return e+(t<<4*r)}),0)}));return se.DS.fromUint8Array(new Uint8Array(r),!0)},fe=r(5632),ge=r(6478);function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var xe=Object.freeze(["genius","lang"]),be=function(){var e,t=(0,fe.useRouter)().query,r=null!==(e=t.genius)&&void 0!==e?e:t.lang;return"string"!==typeof r||Number.isNaN(Number.parseInt(r,10))?void 0:r},je=function(){var e=(0,fe.useRouter)().query,t=be(),r=e.lang;return"string"!==typeof r||t&&t===r?void 0:r},ve=function(){var e=(0,ge.Z)(),t=(0,fe.useRouter)().query;return e(!0)?Object.keys(t).find((function(e){return!xe.includes(e)})):void 0},ke=function(e){var t=e.genius,r=e.result,n=e.lang;return ye(ye(ye({},t&&n?{genius:t,lang:n}:void 0),!n&&!t||t&&n?void 0:{lang:n||t}),r?(0,d.Z)({},r,""):void 0)},we=function(e){var t=e.genius,r=e.lang;return"/".concat(r||t?"[lang]":"").concat(r&&t?"/[genius]":"")},Oe=function(){var e=be(),t=je(),r=ve(),n=(0,fe.useRouter)();return(0,c.useCallback)((function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=a.genius,o=void 0===i?e:i,s=a.lang,c=void 0===s?t:s,l=a.result,u=void 0===l?r:l;return n.push({query:ke({genius:o,lang:c,result:u}),pathname:we({genius:o,lang:c})},void 0,{scroll:!0,shallow:!0})}),[e,t,r,n])},Ne=function(e){var t=e.birthday,r=e.nickname,n=Oe();return(0,c.useCallback)(function(){var e=(0,oe.Z)(ie().mark((function e(a){var o,s;return ie().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),o=(0,i.getPersonality)(t),s=se.DS.encode(r,!0),e.abrupt("return",o&&n({genius:o.inner,result:"".concat(pe(o)).concat(s&&"".concat("~").concat(s))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,r,n])},Pe=r(1415);function De(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?De(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ce=Symbol("setBirthday"),Ze=Symbol("setNickname"),Be="2000-01-01",Le=function(e,t){var r=(0,a.Z)(t,2),n=r[0],i=r[1];switch(n){case Ce:return Se(Se({},e),{},{birthday:null!==i&&void 0!==i?i:Be});case Ze:return Se(Se({},e),{},{nickname:null!==i&&void 0!==i?i:""});default:return e}},Ee=(0,Pe.f)((function(){return(0,c.useReducer)(Le,{birthday:Be,nickname:""})})),Fe=function(){var e=(0,s.$)().t,t=Ee.useContainer(),r=(0,a.Z)(t,2),i=r[0],o=r[1];return(0,n.jsx)(ne,{birthday:i.birthday,birthdayLabel:e("web.form.birthday"),buttonLabel:e("web.form.submit"),legendLabel:e("web.form.legend"),nickname:i.nickname,nicknameLabel:e("web.form.nickname"),notes:e("web.form.notes",{returnObjects:!0}),onChangeBirthday:(0,c.useCallback)((function(e){return o([Ce,e.currentTarget.value])}),[o]),onChangeNickname:(0,c.useCallback)((function(e){return o([Ze,e.currentTarget.value])}),[o]),onSubmit:Ne(i)})};Fe.displayName="BirthForm";var Me=Fe,Ae=r(7729),Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.appName,r=e.pageName;return(r?[r,t]:[t]).join("::")},He=function(e){return(0,n.jsx)(Ae.default,{children:(0,n.jsx)("title",{children:Re(e)})})};He.displayName="Title";var Te=He,Ve=function(e){var t,r=e.appName,a=e.author,i=e.color,o=e.description,s=e.keywords;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:null!==(t="\nconst { classList } = window.document.getElementsByTagName('html')[0];\nlocalStorage.theme === 'dark' ||\n(!('theme' in localStorage) &&\n  window.matchMedia('(prefers-color-scheme: dark)').matches)\n  ? classList.add('dark')\n  : classList.remove('dark');\n")?t:""}}),(0,n.jsx)("meta",{httpEquiv:"cleartype",content:"on"}),(0,n.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=Edge"}),!!r&&(0,n.jsx)("meta",{name:"application-name",content:r}),!!a&&(0,n.jsx)("meta",{name:"author",content:a}),(0,n.jsx)("meta",{name:"color-scheme",content:"light dark"}),(0,n.jsx)("meta",{name:"coverage",content:"Worldwide"}),!!o&&(0,n.jsx)("meta",{name:"description",content:o}),(0,n.jsx)("meta",{name:"format-detection",content:"telephone=no"}),!(null===s||void 0===s||!s.length)&&(0,n.jsx)("meta",{name:"keywords",content:s.join()}),(0,n.jsx)("meta",{name:"rating",content:"General"}),(0,n.jsx)("meta",{name:"referer",content:"same-origin"}),(0,n.jsx)("meta",{name:"SKYPE_TOOLBAR",content:"SKYPE_TOOLBAR_PARSER_COMPATIBLE"}),!!i&&(0,n.jsx)("meta",{name:"theme-color",content:i})]})};Ve.displayName="CommonMeta";var _e=Ve,Ke=function(e){var t=e.baseUrl,r=void 0===t?"":t,a=r||"/";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("link",{rel:"author",href:"https://kit.black/"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(r,"/favicons/apple-touch-icon.png")}),(0,n.jsx)("link",{rel:"bookmark",href:a}),(0,n.jsx)("link",{rel:"canonical",href:a}),(0,n.jsx)("link",{rel:"first",href:a}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(r,"/favicons/favicon-32x32.png")}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"194x194",href:"".concat(r,"/favicons/favicon-194x194.png")}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"".concat(r,"/favicons/android-chrome-192x192.png")}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(r,"/favicons/favicon-16x16.png")}),(0,n.jsx)("link",{rel:"manifest",href:"".concat(r,"/favicons/site.webmanifest")}),(0,n.jsx)("link",{rel:"mask-icon",href:"".concat(r,"/favicons/safari-pinned-tab.svg"),color:"#374151"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"".concat(r,"/favicons/favicon.ico")})]})};Ke.displayName="Links";var $e=Ke,Ie=function(e){var t=e.appName,r=e.color,a=e.description,i=e.baseUrl,o=void 0===i?"":i;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),!!t&&(0,n.jsx)("meta",{name:"apple-mobile-web-app-title",content:t}),!!r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"msapplication-navbutton-color",content:r}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:r})]}),!!o&&(0,n.jsx)("meta",{name:"msapplication-starturl",content:o}),!!a&&(0,n.jsx)("meta",{name:"msapplication-tooltip",content:a}),(0,n.jsx)("meta",{name:"msapplication-config",content:"".concat(o,"/favicons/browserconfig.xml")})]})};Ie.displayName="MobileMeta";var Ue=Ie,ze=function(e){var t=e.appName,r=e.article,a=e.bannerHeight,i=e.bannerUrl,o=e.bannerWidth,s=e.description,c=e.pageName,l=void 0===c?t:c;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@kurone_kito"}),!!s&&(0,n.jsx)("meta",{name:"twitter:description",content:s}),!!i&&(0,n.jsx)("meta",{name:"twitter:image",content:i}),!!l&&(0,n.jsx)("meta",{name:"twitter:title",content:Re({appName:t,pageName:l})}),!!s&&(0,n.jsx)("meta",{property:"og:description",content:s}),!!i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{property:"og:image",content:i}),!!a&&(0,n.jsx)("meta",{property:"og:image:height",content:"".concat(a)}),!!o&&(0,n.jsx)("meta",{property:"og:image:width",content:"".concat(o)})]}),!!t&&(0,n.jsx)("meta",{property:"og:site_name",content:t}),!!l&&(0,n.jsx)("meta",{property:"og:title",content:l}),(0,n.jsx)("meta",{property:"og:type",content:r?"article":"website"}),(0,n.jsx)("meta",{property:"op:markup_version",content:"v1.0"})]})};ze.displayName="OpenGraphMeta";var qe=ze,Ge=function(e){var t=e.appName,r=e.article,a=e.author,i=e.bannerHeight,o=e.bannerPath,s=e.bannerWidth,c=e.baseUrl,l=void 0===c?"":c,u=e.color,d=e.description,m=e.keywords,p=e.pageName;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_e,{appName:t,author:a,color:u,description:d,keywords:m}),(0,n.jsx)(Ue,{appName:t,color:u,description:d,baseUrl:l}),(0,n.jsx)(qe,{appName:t,article:r,bannerHeight:i,bannerUrl:"".concat(l).concat(null!==o&&void 0!==o?o:""),bannerWidth:s,pageName:p}),(0,n.jsx)($e,{baseUrl:l})]})};Ge.displayName="HeadContents";var We=Ge,Ye="Dantalion",Je=function(e){var t=e.pageName,r=(0,s.$)().t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Te,{appName:Ye,pageName:t}),(0,n.jsx)(Ae.default,{children:(0,n.jsx)(We,{baseUrl:"https://kurone-kito.github.io/dantalion",author:"".concat(r("web.author"),", @kurone_kito"),appName:Ye,article:!!t,bannerHeight:630,bannerPath:"/favicons/ogp.png",bannerWidth:1200,color:"#E5E7EB",description:r("web.description"),keywords:["ba-zi","bazi","birthday","cancode","chinese-astrology","divination","four-pillars","library","self-assessment","ziweidoushu","zodiac","\u5360\u3044","\u81ea\u5df1\u5206\u6790","\u8a95\u751f\u65e5"],pageName:t})})]})};Je.displayName="Head";var Qe=Je,Xe=function(e){var t=e.defaultValue,r=e.id,i=e.label,o=e.onChange,s=e.source;return(0,n.jsxs)("label",{className:"flex flex-col sm:flex-row sm:items-center",htmlFor:r,children:[(0,n.jsx)("span",{className:"font-bold mb-1 text-sm tracking-widest text-gray-700 dark:text-gray-200 sm:mb-0 sm:mr-8 sm:w-1/4",children:i}),(0,n.jsx)("div",{className:"rounded-full duration-200 nm-flat-gray-200 flex-grow dark:nm-flat-gray-600  dark:hover:nm-flat-gray-800 hover:nm-flat-gray-50 sm:w-3/4",children:(0,n.jsx)("select",{className:"appearance-none w-full px-8 py-4 bg-transparent font-semibold text-gray-800 dark:text-gray-100",defaultValue:t,disabled:!(null!==s&&void 0!==s&&s.length),id:r,name:r,onChange:o,tabIndex:0,children:null===s||void 0===s?void 0:s.map((function(e){var t="string"===typeof e?[e,e]:e,r=(0,a.Z)(t,2),i=r[0],o=r[1];return(0,n.jsx)("option",{value:i,children:o},i)}))})})]})};Xe.displayName="Select";var et=Xe,tt=["automatic","light","dark"],rt=function(){var e=(0,s.$)().t,t=(0,ge.Z)(),r=(0,c.useCallback)(function(){var e=(0,oe.Z)(ie().mark((function e(t){var r;return ie().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=window.document.getElementsByTagName("html")[0],e.t0=t.currentTarget.value,e.next="automatic"===e.t0?4:"dark"===e.t0?7:"light"===e.t0?10:13;break;case 4:return localStorage.removeItem("theme"),window.matchMedia("(prefers-color-scheme: dark)").matches?r.classList.add("dark"):r.classList.remove("dark"),e.abrupt("break",14);case 7:return localStorage.theme="dark",r.classList.add("dark"),e.abrupt("break",14);case 10:return localStorage.theme="light",r.classList.remove("dark"),e.abrupt("break",14);case 13:return e.abrupt("break",14);case 14:t.preventDefault();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),a=(0,c.useMemo)((function(){return tt.map((function(t){return[t,e("web.appearance.".concat(t))]}))}),[e]);return t()?null:(0,n.jsx)(et,{defaultValue:"theme"in localStorage?localStorage.theme:void 0,id:"appearance",label:e("web.appearance.name"),onChange:r,source:a})};rt.displayName="AppearanceSelector";var nt=rt,at="auto",it=Object.entries(o.locales),ot=function(){var e,t=(0,s.$)().t,r=null!==(e=je())&&void 0!==e?e:at,a=function(){var e=Oe(),t=(0,s.$)().i18n;return(0,c.useCallback)(function(){var r=(0,oe.Z)(ie().mark((function r(n){var a,i;return ie().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),a=n.currentTarget.value,i=a===at?void 0:a,r.next=5,e({lang:null!==i&&void 0!==i?i:""});case 5:return r.next=7,t.changeLanguage(null!==i&&void 0!==i?i:(0,o.getLocale)());case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[t,e])}(),i=(0,c.useMemo)((function(){return[[at,t("web.language.automatic")]].concat((0,ce.Z)(it))}),[t]);return(0,n.jsx)(et,{defaultValue:r,id:"language",label:t("web.language.name"),onChange:a,source:i})};ot.displayName="LanguageSelector";var st=ot,ct=function(e){var t=e.children;return(0,n.jsx)("section",{className:"mb-6 nm-inset-gray-200-xs p-4 rounded-xl text-gray-700 dark:nm-inset-gray-700-xs dark:text-gray-200 md:px-6 md:rounded-3xl",children:t})};ct.displayName="ResultFrame";var lt=ct,ut=function(e){var t=e.additional,r=e.children,a=e.detail,i=void 0===a?"":a,o=e.heading;return(0,n.jsxs)("header",{className:"leading-loose mb-4",children:[(0,n.jsxs)("div",{className:"divide-x divide-gray-500 divide-opacity-50 flex",children:[(0,n.jsx)("h2",{className:"flex-grow-0 pr-4 text-gray-900 dark:text-gray-100",children:o}),(0,n.jsx)("p",{className:"flex-grow pl-4",children:(0,n.jsx)(O,{children:i})})]}),(0,n.jsx)("hr",{className:"border-gray-500 border-opacity-50 mb-6 mt-3"}),(0,n.jsxs)("div",{className:"p-0 text-2xl text-center text-gray-700 dark:text-gray-200 sm:text-3xl",children:[(0,n.jsx)("h3",{className:"font-extrabold p-0",children:r}),!!t&&(0,n.jsx)("p",{className:"font-extralight p-0",children:t})]})]})};ut.displayName="ResultHeading";var dt=ut,mt=function(e){var t=e.children,r=e.heading,a=e.headingDetail,i=e.hook,o=e.hookAdditional,s=e.moreDetail;return(0,n.jsxs)(lt,{children:[(0,n.jsx)(dt,{additional:o,detail:a,heading:r,children:i}),(0,n.jsx)(Z,{className:"leading-loose list-disc p-4 md:px-8",children:s}),t]})};mt.displayName="ResultDetail";var pt=mt,ft=function(e){var t=e.content,r=e.heading,a=e.nickname,i=(0,s.$)().t;return(0,n.jsx)(pt,{hookAdditional:(0,n.jsx)(O,{children:t.detail}),heading:r.name,headingDetail:r.detail,hook:(0,n.jsx)(O,{children:i("web.result.probed",{nickname:a,type:t.name})}),moreDetail:t.more})};ft.displayName="ResultDetail";var gt=ft,ht=function(e){var t=e.accessors,r=e.nickname,a=e.details;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(gt,{content:t.brain.getByKey(a.brain),heading:t.brain.getCategoryDetail(),nickname:r}),(0,n.jsx)(gt,{content:t.communication.getByKey(a.communication),heading:t.communication.getCategoryDetail(),nickname:r}),(0,n.jsx)(gt,{content:t.management.getByKey(a.management),heading:t.management.getCategoryDetail(),nickname:r}),(0,n.jsx)(gt,{content:t.response.getByKey(a.response),heading:t.response.getCategoryDetail(),nickname:r}),(0,n.jsx)(gt,{content:t.position.getByKey(a.position),heading:t.position.getCategoryDetail(),nickname:r})]})};ht.displayName="AccompanyingResult";var yt=ht,xt=function(e){var t=e.children,r=e.descriptions,a=e.details,i=e.inner,o=e.nickname,c=(0,s.$)().t;return(0,n.jsxs)(pt,{heading:a.name,headingDetail:a.detail,hook:(0,n.jsxs)(n.Fragment,{children:[i.summary,(0,n.jsx)("br",{}),c("web.result.probed",{nickname:o,type:i.name})]}),moreDetail:i.detail,children:[(0,n.jsx)(L,{caption:r.weak,tooltip:c("web.tooltip.summary"),children:i.weak}),(0,n.jsx)(L,{caption:r.strategy,tooltip:c("web.tooltip.summary"),children:i.strategy}),t]})};xt.displayName="GeniusResultDetail";var bt=xt,jt=function(e){var t=e.accessors,r=e.lifeBase,a=e.nickname,i=(0,s.$)().t,o=t.getByKey(r),c=o.detail,l=o.name,u=i("web.result.lifeBase",{nickname:a,returnObjects:!0});return(0,n.jsx)(pt,{heading:t.getCategoryDetail(),headingDetail:u.detail,hook:u.name,hookAdditional:l,moreDetail:c})};jt.displayName="LifeBaseResultDetail";var vt=jt;function kt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function wt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?kt(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):kt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ot=function(e){var t=e.children,r=(0,j.Z)(e,["children"]);return(0,n.jsx)(P,wt(wt({},r),{},{children:null===t||void 0===t?void 0:t.map((function(e,t){var r=(0,a.Z)(e,2),i=r[0],o=r[1];return(0,n.jsxs)("section",{className:"text-xl",children:[(0,n.jsx)("h2",{className:"inline font-extrabold",children:i}),(0,n.jsx)("p",{className:"inline ml-3",children:o})]},t)}))}))};Ot.displayName="TupleList";var Nt=Ot,Pt=function(e){var t=e.accessors,r=e.motivation;return(0,n.jsx)(lt,{children:(0,n.jsx)(Nt,{className:"list-disc pl-8",children:[[t.getCategoryDetail(),t.getByKey(r)]]})})};Pt.displayName="MotivationResultDetail";var Dt=Pt,St=function(e){var t=e.accessors,r=e.potentials,a=e.nickname,i=(0,s.$)().t,o=t.getCategoryDetail();return(0,n.jsx)(pt,{heading:o.name,headingDetail:o.detail,hook:i("web.result.potential",{nickname:a}),moreDetail:t.getByKey(r)})};St.displayName="LifeBaseResultDetail";var Ct=St,Zt=function(e){var t=e.caption,r=e.children;return(0,n.jsxs)(lt,{children:[t,":\xa0",(0,n.jsx)(O,{children:"`".concat(r,"`")})]})};Zt.displayName="PersonalityFileId";var Bt=Zt,Lt=function(e){var t=e.personality,r=(0,s.$)().t;return(0,n.jsx)(Bt,{caption:r("web.result.profile"),children:(0,i.toCC)(t)})};Lt.displayName="PersonalityFileId";var Et=Lt,Ft=function(e){var t=e.descriptions,r=e.details,i=e.inner,o=e.outer,l=e.workStyle,d=(0,s.$)().t,m=(0,c.useMemo)((function(){return(e={inner:i,outer:o,workStyle:l},[["inner",e.inner],["outer",e.outer],["workStyle",e.workStyle]].map((function(e){var t=(0,a.Z)(e,2),r=t[0],n=t[1],i=n.summary,o=n.name;return["web.result.genius.".concat(r),"".concat(i," ... **").concat(o,"**")]}))).map((function(e){var t=(0,a.Z)(e,2),r=t[0],n=t[1];return d(r,{type:n})}));var e}),[i,o,d,l]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("hr",{className:"border-gray-300 my-3"}),(0,n.jsx)(u(),{children:t.genius1}),(0,n.jsx)(Z,{className:"list-decimal p-4 md:px-8",order:!0,children:Object.values(r)}),(0,n.jsx)(u(),{children:t.genius2}),(0,n.jsx)(Z,{className:"list-decimal p-4 md:px-8",order:!0,children:m})]})};Ft.displayName="SubGeniusResultDetail";var Mt=Ft,At=r(9126),Rt=function(e){var t=e.hashtag,r=e.text,n=e.url;return["https://twitter.com/intent/tweet",(0,At.stringify)({button_hashtag:t,url:n,text:r},{addQueryPrefix:!0})].join("")},Ht=function(e){var t=e.children,r=(0,j.Z)(e,["children"]);return(0,n.jsx)("p",{className:"text-center mb-4 select-none",children:(0,n.jsxs)(y,{className:"block duration-200 ease-in-out flex-grow font-bold leading-5 nm-flat-indigo-100 px-8 py-4 rounded-full text-md sm:text-xl tracking-widest transform transition uppercase dark:nm-flat-purple-800 dark:hover:nm-flat-purple-900 hover:nm-flat-blue-50-lg",href:Rt(r),noblank:!0,nofollow:!0,children:[(0,n.jsx)(F.G,{className:"animate-pulse mx-2",icon:I.mdU}),t]})})};Ht.displayName="TweetButton";var Tt=Ht,Vt=function(e){var t=e.hooks,r=e.nickname,a=(0,s.$)().t,i=(0,ge.Z)();return(0,n.jsx)(Tt,{hashtag:a("web.share.hashtag"),text:[a("web.result.heading",{nickname:r}),t].join("\n"),url:i()?void 0:window.location.href,children:a("web.share.tweet")})};Vt.displayName="TweetButton";var _t=Vt,Kt=function(e){var t=e.accessor,r=e.nickname,a=e.strategy,i=e.vector,o=(0,s.$)().t,c=t.getCategoryDetail(),l=t.getByKey(i);return(0,n.jsx)(pt,{heading:c.name,headingDetail:c.detail,hook:o("web.result.probed",{nickname:r,type:l.name}),moreDetail:l.detail,children:(0,n.jsx)(L,{caption:a,tooltip:o("web.tooltip.summary"),children:l.strategy})})};Kt.displayName="VectorResultDetail";var $t=Kt,It=function(e){var t=e.detail,r=e.inner,a=e.nickname,i=e.personality,l=(0,s.$)().t,u=(0,c.useMemo)((function(){return(0,o.createAccessors)(l)}),[l]),d=u.getDescription(),m=u.genius.getCategoryDetail(),p=u.genius.getByKey(r);return i&&i.inner!==r?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("article",{children:[(0,n.jsx)($t,{accessor:u.vector,nickname:a,strategy:d.strategy,vector:t.vector}),(0,n.jsx)(bt,{descriptions:d,details:m,inner:p,nickname:a,children:!!i&&(0,n.jsx)(Mt,{descriptions:d,details:m.descriptions,inner:p,outer:u.genius.getByKey(i.outer),workStyle:u.genius.getByKey(i.workStyle)})}),!!i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(vt,{accessors:u.lifeBase,lifeBase:i.lifeBase,nickname:a}),(0,n.jsx)(Ct,{accessors:u.potential,potentials:i.potentials,nickname:a})]}),(0,n.jsx)(Dt,{accessors:u.motivation,motivation:t.motivation}),(0,n.jsx)(yt,{accessors:u,details:t,nickname:a}),!!i&&(0,n.jsx)(Et,{personality:i})]}),(0,n.jsx)("aside",{children:(0,n.jsx)(_t,{nickname:a,hooks:p.summary})})]})};It.displayName="Result";var Ut=It,zt=function(e){var t,r=e.inner,l=(0,s.$)().t,d=(0,c.useMemo)((function(){return(0,o.createAccessors)(l)}),[l]),m=function(){var e,t=(null!==(e=ve())&&void 0!==e?e:"").split("~"),r=(0,a.Z)(t,2),n=r[0],i=void 0===n?"":n,o=r[1],c=(0,s.$)().t;return[me(i),o&&se.DS.decode(o)||c("web.result.nickname")]}(),p=(0,a.Z)(m,2),f=p[0],g=p[1],h=null!==(t=null===f||void 0===f?void 0:f.inner)&&void 0!==t?t:r,x=h&&(0,i.getDetail)(h),j=h&&d.genius.getByKey(h).summary;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Qe,{pageName:j}),(0,n.jsx)(b,{children:f?l("web.result.heading",{nickname:g}):l("web.description")}),(0,n.jsxs)("main",{className:"md:container mx-auto text-gray-600",children:[!(!h||!x)&&(0,n.jsx)(Ut,{detail:x,inner:h,nickname:g,personality:f}),(0,n.jsx)(Ee.Provider,{children:(0,n.jsx)(Me,{})}),(0,n.jsx)(_,{featureBody:l("web.feature.body",{returnObjects:!0}),featureHeading:l("web.feature.title"),tooltipFeatureDetails:l("web.tooltip.summary"),children:l("web.preface",{joinArrays:"\n\n"})}),(0,n.jsx)(u(),{className:"mx-0 my-5 nm-inset-gray-500-sm overflow-auto p-6 text-white dark:nm-inset-gray-800-sm dark:text-gray-200 md:rounded-3xl",children:l("web.install",{joinArrays:"\n"})}),(0,n.jsx)("p",{className:"font-bold text-center text-xl py-6",children:(0,n.jsx)(y,{href:"https://github.com/kurone-kito/dantalion",children:l("web.seeRepo")})})]}),(0,n.jsxs)(W,{author:l("web.author"),children:[(0,n.jsx)(st,{}),(0,n.jsx)(nt,{})]})]})};zt.displayName="Template";var qt=zt},3260:function(){}}]);
//# sourceMappingURL=587-7d65c49154cb813d1183.js.map