"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77],{7167:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=a(5893),i=a(1151);const o={sidebar_position:12},c="Visualizaci\xf3n de archivos",r={id:"bash/files_visualization",title:"Visualizaci\xf3n de archivos",description:"Si bien podemos visualizar los archivos con nano, si no deseamos editar el archivo, queremos ver una fracci\xf3n del archivo o es un archivo peque\xf1o que queremos visualizar, podemos utilizar less, more y cat.",source:"@site/docs/bash/files_visualization.md",sourceDirName:"bash",slug:"/bash/files_visualization",permalink:"/bioinformatica_esp/docs/bash/files_visualization",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Editor de texto nano",permalink:"/bioinformatica_esp/docs/bash/nano"},next:{title:"Comando cut",permalink:"/bioinformatica_esp/docs/bash/cut"}},d={},l=[{value:"Comando <code>less</code>",id:"comando-less",level:2},{value:"Comando <code>more</code>",id:"comando-more",level:2},{value:"Similitudes entre <code>less</code> y <code>more</code>.",id:"similitudes-entre-less-y-more",level:2},{value:"Comando <code>cat</code>",id:"comando-cat",level:2},{value:"Comando <code>head</code>",id:"comando-head",level:2},{value:"Comando <code>tail</code>",id:"comando-tail",level:2}];function t(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"visualizaci\xf3n-de-archivos",children:"Visualizaci\xf3n de archivos"}),"\n",(0,s.jsxs)(n.p,{children:["Si bien podemos visualizar los archivos con ",(0,s.jsx)(n.code,{children:"nano"}),", si no deseamos editar el archivo, queremos ver una fracci\xf3n del archivo o es un archivo peque\xf1o que queremos visualizar, podemos utilizar ",(0,s.jsx)(n.code,{children:"less"}),", ",(0,s.jsx)(n.code,{children:"more"})," y ",(0,s.jsx)(n.code,{children:"cat"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Less, more and cat",src:a(374).Z+"",width:"1506",height:"656"})}),"\n",(0,s.jsxs)(n.h2,{id:"comando-less",children:["Comando ",(0,s.jsx)(n.code,{children:"less"})]}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"less"})," est\xe1 basado en su antecesor ",(0,s.jsx)(n.code,{children:"more"})," pero con caracter\xedsticas adicionales. Una de las m\xe1s notorias es que ejecuta una pantalla en donde se visualiza el contenido del archivo."]}),"\n",(0,s.jsxs)(n.p,{children:["Se utiliza com\xfanmente para revisar archivos con contenido extenso, ya que muestra una p\xe1gina a la vez, \xfanicamente la pantalla que se muestra al usuario. Esto significa que no tiene que cargar todo el archivo antes de comenzar a mostrar su contenido. Al sallir del visualizador se limpia todo lo que ",(0,s.jsx)(n.code,{children:"less"})," muestra."]}),"\n",(0,s.jsxs)(n.p,{children:["Visualizaci\xf3n de ",(0,s.jsx)(n.code,{children:"archivo.txt"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"less archivo.txt\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"comando-more",children:["Comando ",(0,s.jsx)(n.code,{children:"more"})]}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"more"})," es de los m\xe1s antiguos y a su vez sigue siendo de los m\xe1s utilizados. Una de sus caracter\xedsticas notorias es que imprime el contenido del archivo leido en la pantalla de comandos."]}),"\n",(0,s.jsxs)(n.p,{children:["Visualizaci\xf3n del archivo ",(0,s.jsx)(n.code,{children:"archivo.txt"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"more archivo.txt\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"similitudes-entre-less-y-more",children:["Similitudes entre ",(0,s.jsx)(n.code,{children:"less"})," y ",(0,s.jsx)(n.code,{children:"more"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"less"})," y ",(0,s.jsx)(n.code,{children:"more"})," comparten varias operaciones b\xe1sicas y comunes en sus funcionalidades. Aqu\xed hay algunas operaciones compartidas:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Desplazamiento Vertical:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Space"})," o",(0,s.jsx)(n.code,{children:" Barra espaciadora"}),": Avanzar una p\xe1gina."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Enter"}),": Avanzar una l\xednea."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Desplazamiento Vertical Inverso:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"b"}),": Retroceder una p\xe1gina (en less tambi\xe9n puede ser utilizado para retroceder una pantalla)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Desplazamiento Horizontal:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flechas arriba y Flechas abajo:"})," Desplazarse hacia arriba o hacia abajo l\xednea por l\xednea."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"B\xfasqueda de Texto:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/"}),": Iniciar b\xfasqueda hacia adelante."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"?"}),": Iniciar b\xfasqueda hacia atr\xe1s."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"}),": Ir a la siguiente coincidencia de b\xfasqueda."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"N"}),": Ir a la coincidencia de b\xfasqueda anterior."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Salir:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"h"}),": Salir del visor y regresar al terminal."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Ayuda:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"h"}),": Mostrar informaci\xf3n de ayuda."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Estas operaciones proporcionan la funcionalidad b\xe1sica para la navegaci\xf3n y exploraci\xf3n de archivos de texto en ambos visores. Aunque ",(0,s.jsx)(n.code,{children:"less"})," ampl\xeda estas operaciones ofreciendo m\xe1s funciones, las mencionadas son comunes tanto en ",(0,s.jsx)(n.code,{children:"less"})," como en ",(0,s.jsx)(n.code,{children:"more"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"comando-cat",children:["Comando ",(0,s.jsx)(n.code,{children:"cat"})]}),"\n",(0,s.jsxs)(n.p,{children:["Al igual que los comandos ya mencionados, si se desea ver una fracci\xf3n o la totalidad de un archivo podemos utilizar ",(0,s.jsx)(n.code,{children:"cat"}),", ",(0,s.jsx)(n.code,{children:"head"})," y ",(0,s.jsx)(n.code,{children:"tail"}),". El comando ",(0,s.jsx)(n.code,{children:"cat"})," es utilizado para leer archivos de forma concatenada, esto quiere decir, que muestra varios archivos al mismo tiempo, uno tras otro. Esta caracter\xedstica puede ser de utilidad cuando se quiere comparar el contenido de archivos cortos. Es un visualizador que imprime todo el contenido de uno o varios archivos a la vez en la pantalla."]}),"\n",(0,s.jsx)(n.p,{children:"Imprimir en pantalla todo el contenido del archivo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat archivo.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"Imprimir todo el contenido de los tres archivos en el orden que se mencionan:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat archivo1.txt archivo2.txt archivo3.txt \n"})}),"\n",(0,s.jsx)(n.p,{children:"No es recomendable utilizarlo con archivos extensos, ya que imprime en pantalla todo su contenido hasta su fin, y no permite su navegaci\xf3n."}),"\n",(0,s.jsxs)(n.h2,{id:"comando-head",children:["Comando ",(0,s.jsx)(n.code,{children:"head"})]}),"\n",(0,s.jsxs)(n.p,{children:["Los comandos ",(0,s.jsx)(n.code,{children:"head"})," y ",(0,s.jsx)(n.code,{children:"tail"})," nos permiten visualizar respectivamente el inicio y el final del contenido de un archivo, de manera an\xe1loga a la cabeza y la cola de un ping\xfcino."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Head and tail",src:a(5607).Z+"",width:"1506",height:"656"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"head"})," imprime las primeras lineas del contenido del archivo. Por defecto imprime 10 l\xedneas, pero puede modificarse el n\xfamero con la opci\xf3n ",(0,s.jsx)(n.code,{children:"-n"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Para imprimir las primeras lineas (10 por defecto):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"head archivo1.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"Para imprimir solo las primeras 5 l\xedneas:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"head -n 5 archivo1.txt   \n"})}),"\n",(0,s.jsxs)(n.h2,{id:"comando-tail",children:["Comando ",(0,s.jsx)(n.code,{children:"tail"})]}),"\n",(0,s.jsxs)(n.p,{children:["Imprime las \xfaltimas lineas del contenido del archivo. Por defecto imprime 10 l\xedneas, pero puede modificarse el n\xfamero con la opci\xf3n ",(0,s.jsx)(n.code,{children:"-n"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Para imprimir \xfaltimas lineas (10 por defecto):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tail archivo.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"Ahora considerando las ultimas 3 l\xedneas:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tail -n 3 archivo.txt  \n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},5607:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/images/head_tail-3a4601511e1889d3e1f0e6789e2f9ded.png"},374:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/images/less_more_cat-6b3f3c5e9b9730b2f61810577a6ba10d.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>c});var s=a(7294);const i={},o=s.createContext(i);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);