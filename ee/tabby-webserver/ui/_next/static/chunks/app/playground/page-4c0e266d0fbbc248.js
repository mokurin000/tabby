(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2383],{24283:function(e,t,n){Promise.resolve().then(n.bind(n,80320))},80320:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return e_}});var s=n(57437),r=n(2265),l=n(86274);let a=(e,t)=>{let n=(0,l.U)(),s=e(e=>null==e?void 0:e._hasHydrated),a=e(t),[i,o]=r.useState(n&&s?a:void 0);return r.useEffect(()=>{o(a)},[a]),i};var i=n(94660),o=n(74810),d=n(39311);let c=["_hasHydrated","setHasHydrated","activeChatId"],u={_hasHydrated:!1,chats:void 0,activeChatId:(0,d.x0)()},f=(0,i.Ue)()((0,o.tJ)(e=>({...u,setHasHydrated:t=>{e({_hasHydrated:t})}}),{name:"tabby-chat-storage",partialize:e=>Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return!c.includes(t)})),onRehydrateStorage:()=>e=>{e&&e.setHasHydrated(!0)}})),m=(e,t)=>{if(Array.isArray(e)&&t)return e.find(e=>e.id===t)};var h=n(82504),x=n(83390),p=n(16630),v=n(71424),g=n(95865),b=n(1592);f.getState;let j=f.setState,w=e=>{j(()=>({activeChatId:e}))},y=(e,t)=>{let n=null!=e?e:(0,d.x0)();j(e=>({activeChatId:n,chats:[{id:n,title:null!=t?t:"",messages:[],createdAt:new Date,userId:"",path:""},...e.chats||[]]}))},N=e=>{j(t=>{var n;return{activeChatId:(0,d.x0)(),chats:null===(n=t.chats)||void 0===n?void 0:n.filter(t=>t.id!==e)}})},k=()=>{j(()=>({activeChatId:(0,d.x0)(),chats:[]}))},C=(e,t)=>{j(n=>{var s;return{chats:null===(s=n.chats)||void 0===s?void 0:s.map(n=>n.id===e?{...n,messages:t}:n)}})},z=(e,t)=>{j(n=>{var s;return{chats:null===(s=n.chats)||void 0===s?void 0:s.map(n=>n.id===e?{...n,...t}:n)}})};var R=n(16775),A=n(16691),I=n.n(A),E={src:"/_next/static/media/tabby.2c9e4d33.png",height:460,width:460,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAwUlEQVR42mN4+ejS8wcXXjy48O7lzTfPrr18ePHFo0svHl5kAGKg3K51c7evnrV5Yd+EtopnYDmgxKVXD89vmtM6Jd1+ZqySGgPDhVO73z67xgBU/uzBhW3zO9dMa1relObHwLB03sT3L24AJS4/vXP66PYlh9dOLwswTNNnmNtX9/b5NYbnQDseXrh8ckdfQ74OA0OmNsOhbUvfPr8Otvzx5Sf3zu3buWb10pmH96x7DrEciCEOe/f8GhABrYWIAAD934qARQKRZgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},S=n(48975),D=n(82180),O=n(30513),H=n(4523),F=n(77723),T=n(93023),_=n(84168);let L={javascript:".js",python:".py",java:".java",c:".c",cpp:".cpp","c++":".cpp","c#":".cs",ruby:".rb",php:".php",swift:".swift","objective-c":".m",kotlin:".kt",typescript:".ts",go:".go",perl:".pl",rust:".rs",scala:".scala",haskell:".hs",lua:".lua",shell:".sh",sql:".sql",html:".html",css:".css"},Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="ABCDEFGHJKLMNPQRSTUVWXY3456789",s="";for(let t=0;t<e;t++)s+=n.charAt(Math.floor(Math.random()*n.length));return t?s.toLowerCase():s},V=(0,r.memo)(e=>{let{language:t,value:n}=e,{isCopied:r,copyToClipboard:l}=(0,F.m)({timeout:2e3});return(0,s.jsxs)("div",{className:"codeblock relative w-full bg-zinc-950 font-sans",children:[(0,s.jsxs)("div",{className:"flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100",children:[(0,s.jsx)("span",{className:"text-xs lowercase",children:t}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsxs)(T.z,{variant:"ghost",className:"hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{let e=L[t]||".file",s="file-".concat(Z(3,!0)).concat(e),r=window.prompt("Enter file name",s);if(!r)return;let l=new Blob([n],{type:"text/plain"}),a=URL.createObjectURL(l),i=document.createElement("a");i.download=r,i.href=a,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(a)},size:"icon",children:[(0,s.jsx)(_.IconDownload,{}),(0,s.jsx)("span",{className:"sr-only",children:"Download"})]}),(0,s.jsxs)(T.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{r||l(n)},children:[r?(0,s.jsx)(_.IconCheck,{}):(0,s.jsx)(_.IconCopy,{}),(0,s.jsx)("span",{className:"sr-only",children:"Copy code"})]})]})]}),(0,s.jsx)(O.Z,{language:t,style:H.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:n})]})});V.displayName="CodeBlock";var P=n(33555);function M(e){let{message:t,className:n,handleMessageAction:r,...l}=e;return(0,s.jsxs)("div",{className:(0,d.cn)("flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-[5rem] md:-top-2 md:opacity-0",n),...l,children:["user"===t.role?(0,s.jsxs)(T.z,{variant:"ghost",size:"icon",onClick:e=>r(t.id,"edit"),children:[(0,s.jsx)(_.IconEdit,{}),(0,s.jsx)("span",{className:"sr-only",children:"Edit message"})]}):(0,s.jsxs)(T.z,{variant:"ghost",size:"icon",onClick:e=>r(t.id,"regenerate"),children:[(0,s.jsx)(_.IconRefresh,{}),(0,s.jsx)("span",{className:"sr-only",children:"Regenerate message"})]}),(0,s.jsxs)(T.z,{variant:"ghost",size:"icon",onClick:e=>r(t.id,"delete"),children:[(0,s.jsx)(_.IconTrash,{}),(0,s.jsx)("span",{className:"sr-only",children:"Delete message"})]}),(0,s.jsx)(P.q,{value:t.content})]})}var U=n(19349);let B=(0,r.memo)(U.D,(e,t)=>e.children===t.children&&e.className===t.className);function Y(e){let{message:t,handleMessageAction:n,...r}=e;return(0,s.jsxs)("div",{className:(0,d.cn)("group relative mb-4 flex items-start md:-ml-12"),...r,children:[(0,s.jsx)("div",{className:(0,d.cn)("flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow","user"===t.role?"bg-background":"bg-accent text-accent-foreground"),children:"user"===t.role?(0,s.jsx)(_.IconUser,{}):(0,s.jsx)(K,{})}),(0,s.jsxs)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:[(0,s.jsx)(B,{className:"prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0",remarkPlugins:[S.Z,D.Z],components:{p(e){let{children:t}=e;return(0,s.jsx)("p",{className:"mb-2 last:mb-0",children:t})},code(e){let{node:t,inline:n,className:r,children:l,...a}=e;if(l.length){if("▍"==l[0])return(0,s.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});l[0]=l[0].replace("`▍`","▍")}let i=/language-(\w+)/.exec(r||"");return n?(0,s.jsx)("code",{className:r,...a,children:l}):(0,s.jsx)(V,{language:i&&i[1]||"",value:String(l).replace(/\n$/,""),...a},Math.random())}},children:t.content}),(0,s.jsx)(M,{message:t,handleMessageAction:n})]})]})}function K(){return(0,s.jsx)(I(),{style:{borderRadius:4},src:E,alt:"tabby",width:"128",height:"128"})}function q(e){let{messages:t,handleMessageAction:n}=e;return t.length?(0,s.jsx)("div",{className:"relative mx-auto max-w-2xl px-4",children:t.map((e,r)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(Y,{message:e,handleMessageAction:n}),r<t.length-1&&(0,s.jsx)(R.Z,{className:"my-4 md:my-8"})]},r))}):null}function J(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,n]=r.useState(!1);return r.useEffect(()=>{let t=()=>{n(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t)}},[e]),t}function W(e){let{className:t,...n}=e,r=J();return(0,s.jsxs)(T.z,{variant:"outline",size:"icon",className:(0,d.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",r?"opacity-0":"opacity-100",t),onClick:()=>window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"}),...n,children:[(0,s.jsx)(_.IconArrowDown,{}),(0,s.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}function X(e){let{href:t,children:n}=e;return(0,s.jsxs)("a",{href:t,target:"_blank",className:"inline-flex flex-1 justify-center gap-1 leading-4 hover:underline",children:[(0,s.jsx)("span",{children:n}),(0,s.jsx)("svg",{"aria-hidden":"true",height:"7",viewBox:"0 0 6 6",width:"7",className:"opacity-70",children:(0,s.jsx)("path",{d:"M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",fill:"currentColor"})})]})}function G(e){let{className:t,...n}=e;return(0,s.jsxs)("p",{className:(0,d.cn)("px-2 text-center text-xs leading-normal text-muted-foreground",t),...n,children:[(0,s.jsx)(X,{href:"https://tabby.tabbyml.com",children:"Tabby"}),", an opensource, self-hosted AI coding assistant ."]})}var Q=n(50976),$=n(91067),ee=n(30713),et=n(92402),en=n(24144),es=n(53587),er=n(45470),el=n(19190);let ea=el.fC;el.xz;let ei=el.x8,eo=el.h_,ed=el.ee,ec=r.forwardRef((e,t)=>{let{className:n,sideOffset:r=4,...l}=e;return(0,s.jsx)(el.VY,{ref:t,sideOffset:r,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...l})});ec.displayName=el.VY.displayName;let eu=r.createContext({}),ef=r.forwardRef((e,t)=>(0,s.jsx)(ed,{...e,ref:t}));ef.displayName="ComboboxAnchor";let em=r.forwardRef((e,t)=>{let{getInputProps:n,open:l}=r.useContext(eu),{onKeyDown:a,onChange:i,onInput:o,onBlur:d,onClick:c,...u}=e;return(0,s.jsx)(er.Z,{...n((0,es.Z)({onKeyDown:a,onChange:i,onInput:o,onBlur:d,onClick:c,ref:t},en.Z)),...u})});em.displayName="ComboboxTextarea";let eh=r.forwardRef((e,t)=>{let{children:n,style:l,popupMatchAnchorWidth:a,...i}=e,{getMenuProps:o,anchorRef:d}=r.useContext(eu),c=r.useRef(void 0);return r.useLayoutEffect(()=>{if(a){let e=d.current;if(e){let t=e.getBoundingClientRect();c.current=t.width}}},[]),(0,s.jsx)(eo,{children:(0,s.jsx)(ec,{align:"start",onOpenAutoFocus:e=>e.preventDefault(),style:{width:c.current,...l},...o({ref:t},{suppressRefError:!0}),...i,children:n})})});eh.displayName="ComboboxContent";let ex=r.forwardRef((e,t)=>{let{item:n,index:l,className:a,children:i,disabled:o,...c}=e,{highlightedIndex:u,selectedItem:f,getItemProps:m}=r.useContext(eu),h=u===l,x=f===n;return(0,s.jsx)(ei,{asChild:!0,children:(0,s.jsx)("div",{className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",h&&"bg-accent text-accent-foreground",x&&"font-bold",o&&"pointer-events-none opacity-50",a),...m({item:n,index:l,onMouseLeave:e=>e.preventDefault(),onMouseOut:e=>e.preventDefault()}),...c,children:"function"==typeof i?i({highlighted:h,selected:x}):i})},n.id)});function ep(e){let{options:t,onSelect:n,inputRef:l,children:a}=e,[i,o]=r.useState(!1),d=r.useRef(null),c=null!=l?l:d,u=r.useRef(null),f=r.useCallback((e,t)=>{let{type:n,changes:s}=t;return n===et.Kb.stateChangeTypes.MenuMouseLeave?{...s,highlightedIndex:e.highlightedIndex}:s},[]),m=(0,et.Kb)({items:null!=t?t:[],isOpen:i,onSelectedItemChange(e){let{selectedItem:t}=e;t&&(null==n||n(t),o(!1))},onIsOpenChange:e=>{let{isOpen:t}=e;t||o(!1)},stateReducer:f}),{setHighlightedIndex:h,highlightedIndex:x}=m,p=i&&!!(null==t?void 0:t.length);r.useEffect(()=>{p&&t.length&&-1===x&&h(0),p&&!t.length&&o(!1)},[p,t]),r.useEffect(()=>{(null==t?void 0:t.length)?o(!0):o(!1)},[t]);let v=r.useMemo(()=>({...m,open:p,inputRef:c,anchorRef:u}),[m,p,c,u]);return(0,s.jsx)(eu.Provider,{value:v,children:(0,s.jsx)(ea,{open:p,children:"function"==typeof a?a(v):a})})}ex.displayName="ComboboxOption";var ev=n(95482);let eg=r.forwardRef(function(e,t){let{onSubmit:n,input:l,setInput:a,isLoading:i}=e,{formRef:o,onKeyDown:c}=function(){let e=(0,r.useRef)(null);return{formRef:e,onKeyDown:t=>{if("Enter"===t.key&&!t.shiftKey&&!t.nativeEvent.isComposing){var n;null===(n=e.current)||void 0===n||n.requestSubmit(),t.preventDefault()}}}}(),[u,f]=r.useState(null),m=r.useRef(null),h=r.useRef(),x=r.useRef(),[p,v]=r.useState([]),[g,j]=r.useState({}),{data:w}=(0,ee.ZP)(u,b.Z,{revalidateOnFocus:!1,dedupingInterval:0,errorRetryCount:0});r.useEffect(()=>{var e;v(null!==(e=null==w?void 0:w.hits)&&void 0!==e?e:[])},[null==w?void 0:w.hits]),r.useImperativeHandle(t,()=>({focus:()=>{var e;null===(e=m.current)||void 0===e||e.focus()}})),r.useEffect(()=>{l&&m.current&&m.current!==document.activeElement&&m.current.focus()},[l]),r.useLayoutEffect(()=>{var e,t,n;(null===(e=x.current)||void 0===e?void 0:e.length)&&(null===(n=m.current)||void 0===n||null===(t=n.setSelectionRange)||void 0===t||t.call(n,x.current[0],x.current[1]),x.current=void 0)}),r.useMemo(()=>(0,Q.Z)(e=>{var t,n,s,r;let l=null!==(s=null===(t=e.target)||void 0===t?void 0:t.value)&&void 0!==s?s:"",a=null!==(r=null===(n=e.target)||void 0===n?void 0:n.selectionEnd)&&void 0!==r?r:0,i=eb(l,a),o=null==i?void 0:i[1];if(o){let e=encodeURIComponent("name:".concat(o," AND kind:function")),t="/v1beta/search?q=".concat(e);f(t)}else v([])},200),[]);let y=async e=>{if(e.preventDefault(),!(null==l?void 0:l.trim()))return;let t=l;Object.keys(g).forEach(e=>{var n,s,r;let l=g[e];(null==l?void 0:l.doc)&&(t=t.replaceAll(e,"\n```".concat(null!==(s=null===(n=l.doc)||void 0===n?void 0:n.language)&&void 0!==s?s:"","\n").concat(null!==(r=l.doc.body)&&void 0!==r?r:"","\n","```","\n")))}),a(""),await n(t)},N=(e,t)=>{"Enter"===e.key&&t?e.preventDefault():t&&["ArrowRight","ArrowLeft","Home","End"].includes(e.key)?v([]):(t||"ArrowUp"!==e.key&&"ArrowDown"!==e.key||(e.preventDownshiftDefault=!0),c(e))};return(0,s.jsx)("form",{onSubmit:y,ref:o,children:(0,s.jsx)(ep,{inputRef:m,options:p,onSelect:e=>{var t,n,s;let r=null!==(t=h.current)&&void 0!==t?t:0,i=eb(l,r);if(i){j({...g,["@".concat(null===(n=e.doc)||void 0===n?void 0:n.name)]:e});let t="@".concat(null==e?void 0:null===(s=e.doc)||void 0===s?void 0:s.name," "),o=l.substring(0,r).replace(new RegExp(i[0]),""),d=o.length+t.length;x.current=[d,d],a(o+t+l.slice(r))}v([])},children:e=>{var t,n,r,o;let{open:c,highlightedIndex:u}=e,f=null==p?void 0:p[u];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ef,{children:(0,s.jsxs)("div",{className:"relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12",children:[(0,s.jsx)("span",{className:(0,d.cn)((0,T.d)({size:"sm",variant:"ghost"}),"absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 hover:bg-background sm:left-4"),children:(0,s.jsx)(_.IconEdit,{})}),(0,s.jsx)(em,{tabIndex:0,rows:1,placeholder:"Ask a question.",spellCheck:!1,className:"min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm",value:l,ref:m,onChange:e=>{(0,$.Z)(e,"target.value")?(h.current=e.target.selectionEnd,a(e.target.value)):h.current=void 0},onKeyDown:e=>N(e,c)}),(0,s.jsx)("div",{className:"absolute right-0 top-4 sm:right-4",children:(0,s.jsxs)(ev.u,{children:[(0,s.jsx)(ev.aJ,{asChild:!0,children:(0,s.jsxs)(T.z,{type:"submit",size:"icon",disabled:i||""===l,children:[(0,s.jsx)(_.IconArrowElbow,{}),(0,s.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,s.jsx)(ev._v,{children:"Send message"})]})})]})}),(0,s.jsx)(eh,{align:"start",side:"top",onOpenAutoFocus:e=>e.preventDefault(),className:"w-[60vw] md:w-[430px]",children:(0,s.jsxs)(ea,{open:c&&!!f,children:[(0,s.jsx)(ed,{asChild:!0,children:(0,s.jsx)("div",{className:"max-h-[300px] overflow-y-scroll",children:c&&!!(null==p?void 0:p.length)&&p.map((e,t)=>{var n,r,l;return(0,s.jsx)(ex,{item:e,index:t,children:(0,s.jsxs)("div",{className:"flex w-full items-center justify-between gap-8 overflow-x-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)(ej,{kind:null==e?void 0:null===(n=e.doc)||void 0===n?void 0:n.kind}),(0,s.jsxs)("div",{className:"max-w-[200px] truncate",children:[null==e?void 0:null===(r=e.doc)||void 0===r?void 0:r.name,"(...)"]})]}),(0,s.jsx)("div",{className:"flex-1 truncate text-right text-sm text-muted-foreground",children:null==e?void 0:null===(l=e.doc)||void 0===l?void 0:l.body})]})},null==e?void 0:e.id)})})}),(0,s.jsx)(ec,{asChild:!0,align:"start",side:"right",alignOffset:-4,onOpenAutoFocus:e=>e.preventDefault(),onKeyDownCapture:e=>e.preventDefault(),className:"rounded-none",collisionPadding:{bottom:120},children:(0,s.jsxs)("div",{className:"flex max-h-[70vh] w-[20vw] flex-col overflow-y-auto px-2 md:w-[240px] lg:w-[340px]",children:[(0,s.jsxs)("div",{className:"mb-2",children:[(null==f?void 0:null===(t=f.doc)||void 0===t?void 0:t.kind)?"(".concat(null==f?void 0:null===(n=f.doc)||void 0===n?void 0:n.kind,") "):"",null==f?void 0:null===(r=f.doc)||void 0===r?void 0:r.name]}),(0,s.jsx)("div",{className:"flex-1 whitespace-pre-wrap break-all text-muted-foreground",children:null==f?void 0:null===(o=f.doc)||void 0===o?void 0:o.body})]})})]})})]})}})})});function eb(e,t){let n=e.substring(0,t),s=/@(\w+)$/.exec(n);return s}function ej(e){let{kind:t,...n}=e;return(0,s.jsx)(_.IconSymbolFunction,{...n})}function ew(e){let{id:t,isLoading:n,stop:l,append:a,reload:i,input:o,setInput:c,messages:u,className:f,onSubmit:m}=e,h=r.useRef(null);return r.useEffect(()=>{var e;null==h||null===(e=h.current)||void 0===e||e.focus()},[t]),(0,s.jsxs)("div",{className:(0,d.cn)("bg-gradient-to-b from-transparent from-0% to-muted/25 to-100%",f),children:[(0,s.jsx)(W,{}),(0,s.jsxs)("div",{className:"mx-auto sm:max-w-2xl sm:px-4",children:[(0,s.jsx)("div",{className:"flex h-10 items-center justify-center",children:n?(0,s.jsxs)(T.z,{variant:"outline",onClick:()=>l(),className:"bg-background",children:[(0,s.jsx)(_.IconStop,{className:"mr-2"}),"Stop generating"]}):(null==u?void 0:u.length)>0&&(0,s.jsxs)(T.z,{variant:"outline",onClick:()=>i(),className:"bg-background",children:[(0,s.jsx)(_.IconRefresh,{className:"mr-2"}),"Regenerate response"]})}),(0,s.jsxs)("div",{className:"space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4",children:[(0,s.jsx)(eg,{ref:h,onSubmit:m,input:o,setInput:c,isLoading:n}),(0,s.jsx)(G,{className:"hidden sm:block"})]})]})]})}var ey=n(4327);function eN(e){let{trackVisibility:t}=e,n=J(),{ref:l,entry:a,inView:i}=(0,ey.YD)({trackVisibility:t,delay:100,rootMargin:"0px 0px -150px 0px"});return r.useEffect(()=>{n&&t&&!i&&(null==a||a.target.scrollIntoView({block:"start"}))},[i,a,n,t]),(0,s.jsx)("div",{ref:l,className:"h-px w-full"})}let ek=[{heading:"Convert list of string to numbers",message:"How to convert a list of string to numbers in python"},{heading:"How to parse email address",message:"How to parse email address with regex"}];function eC(e){let{setInput:t}=e;return(0,s.jsx)("div",{className:"mx-auto max-w-2xl px-4",children:(0,s.jsxs)("div",{className:"rounded-lg border bg-background p-8",children:[(0,s.jsx)("h1",{className:"mb-2 text-lg font-semibold",children:"Welcome to Playground!"}),(0,s.jsx)("p",{className:"leading-normal text-muted-foreground",children:"You can start a conversation here or try the following examples:"}),(0,s.jsx)("div",{className:"mt-4 flex flex-col items-start space-y-2",children:ek.map((e,n)=>(0,s.jsxs)(T.z,{variant:"link",className:"h-auto p-0 text-base",onClick:()=>t(e.message),children:[(0,s.jsx)(_.IconArrowRight,{className:"mr-2 text-muted-foreground"}),e.heading]},n))})]})})}var ez=n(93111);function eR(e){let{id:t,initialMessages:n,loading:l,className:i}=e;(0,r.useEffect)(()=>{window._originFetch||(window._originFetch=window.fetch);let e=window._originFetch;return window.fetch=async function(t,n){if("/api/chat"!==t)return e(t,n);let s=await (0,b.Z)("/v1beta/chat/completions",{...n,method:"POST",headers:{"Content-Type":"application/json"},customFetch:e,responseFormatter(e){let t=(0,g.HP)(e,void 0);return new g.wn(t)}});return s},()=>{var e;(null===(e=window)||void 0===e?void 0:e._originFetch)&&(window.fetch=window._originFetch,window._originFetch=void 0)}},[]);let o=a(f,e=>e.chats),{messages:c,append:u,reload:m,stop:j,isLoading:w,input:N,setInput:k,setMessages:z}=(0,h.R)({initialMessages:n,id:t,body:{id:t},onResponse(e){401===e.status&&v.A.error(e.statusText)}}),[R,A]=r.useState(),I=e=>{let t=(0,p.Z)(c,{id:e}),n=null==c?void 0:c[t-1];(null==n?void 0:n.role)==="user"&&(z(c.slice(0,t-1)),u(n))},E=e=>{let t=(0,x.Z)(c,{id:e});t&&z(c.filter(t=>t.id!==e))},S=e=>{let t=(0,x.Z)(c,{id:e});t&&(k(t.content),A(e))},D=async e=>{if(-1===(0,p.Z)(o,{id:t}))y(t,(0,d.aF)(e));else if(R){let e=(0,p.Z)(c,{id:R});z(c.slice(0,e)),A(void 0)}await u({id:(0,d.x0)(),content:e,role:"user"})};return r.useEffect(()=>{t&&C(t,c)},[c]),r.useEffect(()=>{let e=document.documentElement.scrollHeight;return window.scrollTo(0,e),()=>j()},[]),(0,s.jsx)("div",{className:"flex justify-center overflow-x-hidden",children:(0,s.jsxs)("div",{className:"w-full max-w-2xl px-4",children:[(0,s.jsx)("div",{className:(0,d.cn)("pb-[200px] pt-4 md:pt-10",i),children:l?(0,s.jsxs)("div",{className:"group relative mb-4 flex animate-pulse items-start md:-ml-12",children:[(0,s.jsx)("div",{className:"shrink-0",children:(0,s.jsx)("span",{className:"block h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700"})}),(0,s.jsx)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:(0,s.jsx)(ez.c,{})})]}):c.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(q,{messages:c,handleMessageAction:(e,t)=>{switch(t){case"edit":S(e);break;case"delete":E(e);break;case"regenerate":I(e)}}}),(0,s.jsx)(eN,{trackVisibility:w})]}):(0,s.jsx)(eC,{setInput:k})}),(0,s.jsx)(ew,{onSubmit:D,className:"fixed inset-x-0 bottom-0 lg:ml-[280px]",id:t,isLoading:w,stop:j,append:u,reload:m,messages:c,input:N,setInput:k})]})})}var eA=n(25331);let eI=r.forwardRef((e,t)=>{let{className:n,children:r,...l}=e;return(0,s.jsxs)(eA.fC,{ref:t,className:(0,d.cn)("relative overflow-hidden",n),...l,children:[(0,s.jsx)(eA.l_,{className:"h-full w-full rounded-[inherit]",children:r}),(0,s.jsx)(eE,{}),(0,s.jsx)(eA.Ns,{})]})});eI.displayName=eA.fC.displayName;let eE=r.forwardRef((e,t)=>{let{className:n,orientation:r="vertical",...l}=e;return(0,s.jsx)(eA.gb,{ref:t,orientation:r,className:(0,d.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...l,children:(0,s.jsx)(eA.q4,{className:"relative flex-1 rounded-full bg-border"})})});eE.displayName=eA.gb.displayName;let eS=e=>{let{onClear:t,onClick:n,onBlur:l,...a}=e,[i,o]=r.useState(!1),d=()=>{o(!1)};return(0,s.jsx)(T.z,{className:"h-12 w-full justify-start",variant:"ghost",...a,onClick:e=>{i?(t(),o(!1)):o(!0),null==n||n(e)},onBlur:e=>{i&&d(),null==l||l(e)},children:i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_.IconCheck,{}),(0,s.jsx)("span",{className:"ml-2",children:"Confirm Clear Chats"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_.IconTrash,{}),(0,s.jsx)("span",{className:"ml-2",children:"Clear Chats"})]})})};var eD=n(12609),eO=n(51908);let eH=e=>{let{children:t,initialValue:n,chatId:l}=e,[a,i]=r.useState(!1),o=r.useRef(null),[d,c]=r.useState(n),u=async e=>{e.preventDefault(),(null==d?void 0:d.trim())&&(z(l,{title:d}),i(!1))};return(0,s.jsxs)(eD.Vq,{open:a,onOpenChange:i,children:[(0,s.jsxs)(ev.u,{children:[(0,s.jsx)(ev.aJ,{asChild:!0,children:(0,s.jsxs)(T.z,{variant:"ghost",size:"icon",onClick:()=>i(!0),children:[(0,s.jsx)(_.IconEdit,{}),(0,s.jsx)("span",{className:"sr-only",children:"Edit"})]})}),(0,s.jsx)(ev._v,{side:"bottom",children:"Edit"})]}),(0,s.jsx)(eD.cZ,{className:"bg-background",children:(0,s.jsxs)(eD.fK,{className:"gap-3",children:[(0,s.jsx)(eD.$N,{children:"Set Chat Title"}),(0,s.jsx)(eD.Be,{asChild:!0,children:(0,s.jsxs)("form",{className:"relative",onSubmit:u,ref:o,children:[(0,s.jsx)(eO.I,{className:"h-10 pr-12",value:d,onChange:e=>c(e.target.value),onKeyDown:e=>{if("Enter"===e.key){var t;null===(t=o.current)||void 0===t||t.requestSubmit(),e.preventDefault()}}}),(0,s.jsx)("div",{className:"absolute right-2 top-1",children:(0,s.jsxs)(ev.u,{children:[(0,s.jsx)(ev.aJ,{asChild:!0,children:(0,s.jsxs)(T.z,{type:"submit",size:"icon",disabled:""===d,children:[(0,s.jsx)(_.IconArrowElbow,{}),(0,s.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,s.jsx)(ev._v,{children:"Edit Title"})]})})]})})]})})]})},eF=e=>{let{className:t}=e,n=a(f,e=>e._hasHydrated),r=a(f,e=>e.chats),l=a(f,e=>e.activeChatId),i=(e,t)=>{N(t)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:(0,d.cn)(t),children:(0,s.jsxs)("div",{className:"fixed inset-y-0 left-0 flex w-[279px] flex-col gap-2",children:[(0,s.jsx)("div",{className:"shrink-0 pb-0 pl-3 pt-2",children:(0,s.jsxs)(T.z,{className:"h-12 w-full justify-start",variant:"ghost",onClick:e=>{w((0,d.x0)())},children:[(0,s.jsx)(_.IconPlus,{}),(0,s.jsx)("span",{className:"ml-2",children:"New Chat"})]})}),(0,s.jsx)(R.Z,{}),(0,s.jsx)(eI,{className:"flex flex-col gap-2 px-3",children:n?(0,s.jsx)(s.Fragment,{children:null==r?void 0:r.map(e=>{let t=l===e.id;return(0,s.jsxs)("div",{onClick:t=>w(e.id),className:(0,d.cn)("my-2 flex w-[254px] cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-1 text-sm transition-all hover:bg-primary/10",t&&"bg-primary/10"),children:[(0,s.jsx)("span",{className:"truncate leading-8",children:e.title||"(Untitled)"}),t&&(0,s.jsxs)("div",{className:"flex items-center",onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(eH,{initialValue:e.title,chatId:e.id}),(0,s.jsxs)(ev.u,{children:[(0,s.jsx)(ev.aJ,{asChild:!0,children:(0,s.jsxs)(T.z,{variant:"ghost",size:"icon",onClick:t=>i(t,e.id),children:[(0,s.jsx)(_.IconTrash,{}),(0,s.jsx)("span",{className:"sr-only",children:"Delete"})]})}),(0,s.jsx)(ev._v,{side:"bottom",children:"Delete"})]})]})]},e.id)})}):(0,s.jsx)(ez.c,{})}),(0,s.jsx)(R.Z,{}),(0,s.jsx)("div",{className:"shrink-0 pb-2",children:(0,s.jsx)(eS,{disabled:(null==r?void 0:r.length)===0,onClear:()=>{k()}})})]})})})},eT=[];function e_(){var e;let t=a(f,e=>e._hasHydrated),n=a(f,e=>e.chats),r=a(f,e=>e.activeChatId),l=m(n,r);return(0,s.jsxs)("div",{className:"grid flex-1 overflow-hidden lg:grid-cols-[280px_1fr]",children:[(0,s.jsx)(eF,{className:"hidden w-[280px] border-r lg:block"}),(0,s.jsx)(eR,{loading:!t,id:r,initialMessages:null!==(e=null==l?void 0:l.messages)&&void 0!==e?e:eT},r)]})}},33555:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var s=n(57437);n(2265);var r=n(77723),l=n(93023),a=n(84168);function i(e){let{className:t,value:n,...i}=e,{isCopied:o,copyToClipboard:d}=(0,r.m)({timeout:2e3});return n?(0,s.jsxs)(l.z,{variant:"ghost",size:"icon",className:t,onClick:()=>{o||d(n)},...i,children:[o?(0,s.jsx)(a.IconCheck,{className:"text-green-600"}):(0,s.jsx)(a.IconCopy,{}),(0,s.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},93111:function(e,t,n){"use strict";n.d(t,{c:function(){return l}});var s=n(57437),r=n(25645);let l=()=>(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsx)(r.O,{className:"h-4 w-full"}),(0,s.jsx)(r.O,{className:"h-4 w-full"}),(0,s.jsx)(r.O,{className:"h-4 w-full"}),(0,s.jsx)(r.O,{className:"h-4 w-full"})]})},93023:function(e,t,n){"use strict";n.d(t,{d:function(){return o},z:function(){return d}});var s=n(57437),r=n(2265),l=n(67256),a=n(7404),i=n(39311);let o=(0,a.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:n,variant:r,size:a,asChild:d=!1,...c}=e,u=d?l.g7:"button";return(0,s.jsx)(u,{className:(0,i.cn)(o({variant:r,size:a,className:n})),ref:t,...c})});d.displayName="Button"},12609:function(e,t,n){"use strict";n.d(t,{$N:function(){return h},Be:function(){return x},Vq:function(){return o},cN:function(){return m},cZ:function(){return u},fK:function(){return f}});var s=n(57437),r=n(2265),l=n(71713),a=n(39311),i=n(84168);let o=l.fC;l.xz;let d=e=>{let{className:t,children:n,...r}=e;return(0,s.jsx)(l.h_,{className:(0,a.cn)(t),...r,children:(0,s.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center sm:items-center",children:n})})};d.displayName=l.h_.displayName;let c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(l.aV,{ref:t,className:(0,a.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",n),...r})});c.displayName=l.aV.displayName;let u=r.forwardRef((e,t)=>{let{className:n,children:r,...o}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{}),(0,s.jsxs)(l.VY,{ref:t,className:(0,a.cn)("fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-sm animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",n),...o,children:[r,(0,s.jsxs)(l.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(i.IconClose,{}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=l.VY.displayName;let f=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,a.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};f.displayName="DialogHeader";let m=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,a.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};m.displayName="DialogFooter";let h=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(l.Dx,{ref:t,className:(0,a.cn)("text-lg font-semibold leading-none tracking-tight",n),...r})});h.displayName=l.Dx.displayName;let x=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(l.dk,{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",n),...r})});x.displayName=l.dk.displayName},51908:function(e,t,n){"use strict";n.d(t,{I:function(){return a}});var s=n(57437),r=n(2265),l=n(39311);let a=r.forwardRef((e,t)=>{let{className:n,type:r,...a}=e;return(0,s.jsx)("input",{type:r,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...a})});a.displayName="Input"},16775:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(57437),r=n(2265),l=n(26823),a=n(39311);let i=r.forwardRef((e,t)=>{let{className:n,orientation:r="horizontal",decorative:i=!0,...o}=e;return(0,s.jsx)(l.f,{ref:t,decorative:i,orientation:r,className:(0,a.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",n),...o})});i.displayName=l.f.displayName},25645:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var s=n(57437),r=n(39311);function l(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,r.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},95482:function(e,t,n){"use strict";n.d(t,{_v:function(){return c},aJ:function(){return d},pn:function(){return i},u:function(){return o}});var s=n(57437),r=n(2265),l=n(98567),a=n(39311);let i=l.zt,o=l.fC,d=l.xz,c=r.forwardRef((e,t)=>{let{className:n,sideOffset:r=4,...i}=e;return(0,s.jsx)(l.VY,{ref:t,sideOffset:r,className:(0,a.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...i})});c.displayName=l.VY.displayName},77723:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var s=n(2265),r=n(2390),l=n.n(r),a=n(71424);function i(e){let{timeout:t=2e3,onError:n}=e,[r,i]=s.useState(!1),o=()=>{i(!0),setTimeout(()=>{i(!1)},t)},d=e=>{if("function"==typeof n){null==n||n(e);return}a.A.error("Failed to copy.")};return{isCopied:r,copyToClipboard:e=>{var t;if(e){if(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)navigator.clipboard.writeText(e).then(o).catch(d);else{let t=l()(e);t?o():d()}}}}}},86274:function(e,t,n){"use strict";n.d(t,{U:function(){return l}});var s=n(2265);let r=!0;function l(){let[e,t]=s.useState(()=>!r);return s.useEffect(function(){r=!1,t(!0)},[]),e}},1592:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(34084),r=n(58001),l=n(7820);let a=!1,i=[];async function o(e,t){var n,s,l;let o=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch,m=await o(e,d(t));if(401!==m.status)return f(m,t);{if(a)return new Promise(n=>{i.push({url:e,options:t,resolve:n})});let n=null===(s=(0,r.bW)())||void 0===s?void 0:s.refreshToken;if(!n){(0,r.Rn)();return}a=!0;let o=await c(n),d=null==o?void 0:null===(l=o.data)||void 0===l?void 0:l.refreshToken;if(d){for((0,r.pC)({accessToken:d.accessToken,refreshToken:d.refreshToken}),a=!1;i.length;){let e=i.shift();null==e||e.resolve(u(e.url,e.options))}return u(e,t)}a=!1,i.length=0,(0,r.Rn)()}}function d(e){var t;let n=new Headers(null==e?void 0:e.headers);return n.append("authorization","Bearer ".concat(null===(t=(0,r.bW)())||void 0===t?void 0:t.accessToken)),{...e||{},headers:n}}async function c(e){let t=l.Lp.createRequestOperation("mutation",(0,s.h)(r.Dp,{refreshToken:e}));return l.Lp.executeMutation(t)}function u(e,t){var n;let s=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch;return s(e,d(t)).then(e=>f(e,t))}function f(e,t){return(null==t?void 0:t.responseFormatter)?t.responseFormatter(e):(null==t?void 0:t.responseFormat)==="blob"?e.blob():e.json()}}},function(e){e.O(0,[3529,4762,1424,3072,2699,7070,3714,6410,1713,6630,713,8567,6691,3296,7753,4168,2445,2971,7864,1744],function(){return e(e.s=24283)}),_N_E=e.O()}]);