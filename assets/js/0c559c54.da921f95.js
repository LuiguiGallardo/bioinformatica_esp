"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[366],{7988:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=s(5893),r=s(1151);const o={sidebar_position:14},i="Comando grep",c={id:"bash/grep",title:"Comando grep",description:"El comando grep es una poderosa herramienta de b\xfasqueda de patrones en archivos o en la salida de otros comandos en sistemas Unix y Linux. Aqu\xed tienes una explicaci\xf3n del comando grep con ejemplos:",source:"@site/docs/bash/grep.md",sourceDirName:"bash",slug:"/bash/grep",permalink:"/bioinformatica_esp/docs/bash/grep",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Comando cut",permalink:"/bioinformatica_esp/docs/bash/cut"},next:{title:"Comando sed",permalink:"/bioinformatica_esp/docs/bash/sed"}},t={},d=[{value:"Formato b\xe1sico de grep:",id:"formato-b\xe1sico-de-grep",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"comando-grep",children:["Comando ",(0,a.jsx)(n.code,{children:"grep"})]}),"\n",(0,a.jsx)(n.p,{children:"El comando grep es una poderosa herramienta de b\xfasqueda de patrones en archivos o en la salida de otros comandos en sistemas Unix y Linux. Aqu\xed tienes una explicaci\xf3n del comando grep con ejemplos:"}),"\n",(0,a.jsx)(n.h2,{id:"formato-b\xe1sico-de-grep",children:"Formato b\xe1sico de grep:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"grep [opciones] patr\xf3n [archivo...]\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"opciones:"})," Son modificadores que ajustan el comportamiento de grep."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"patr\xf3n:"})," Es la cadena de texto que est\xe1s buscando."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"archivo:"})," Son los archivos en los que se realizar\xe1 la b\xfasqueda. Si no se proporcionan, grep lee desde la entrada est\xe1ndar."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Por ejemplo, para buscar una palabra en un archivo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'grep "texto" archivo.txt\n'})}),"\n",(0,a.jsx)(n.p,{children:'Esto buscar\xe1 la palabra "texto" en el archivo.txt y mostrar\xe1 las l\xedneas que la contienen.'}),"\n",(0,a.jsx)(n.p,{children:"Para hacer una b\xfasqueda recursiva en directorios:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'grep -r "patr\xf3n" directorio/\n'})}),"\n",(0,a.jsx)(n.p,{children:"Busca el patr\xf3n de manera recursiva en todos los archivos dentro del directorio y sus subdirectorios."}),"\n",(0,a.jsx)(n.p,{children:"Para hacer una b\xfasqueda con coincidencia de patrones en may\xfasculas/min\xfasculas:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'grep -i "Texto" archivo.txt\n'})}),"\n",(0,a.jsx)(n.p,{children:'Busca "Texto" en el archivo.txt sin importar si las may\xfasculas y min\xfasculas coinciden.'}),"\n",(0,a.jsx)(n.p,{children:"Mostrar n\xfamero de l\xednea y contexto:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'grep -n -C 2 "patr\xf3n" archivo.txt\n'})}),"\n",(0,a.jsx)(n.p,{children:"Muestra el n\xfamero de l\xednea y dos l\xedneas de contexto alrededor del patr\xf3n."}),"\n",(0,a.jsx)(n.p,{children:"B\xfasqueda inversa (excluir l\xedneas que coinciden):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'grep -v "patr\xf3n" archivo.txt\n'})}),"\n",(0,a.jsx)(n.p,{children:"Muestra todas las l\xedneas que no contienen el patr\xf3n especificado."}),"\n",(0,a.jsx)(n.p,{children:"Buscar l\xedneas que coincidan con m\xfaltiples patrones:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'grep -e "patr\xf3n1" -e "patr\xf3n2" archivo.txt\n'})}),"\n",(0,a.jsx)(n.p,{children:"Busca l\xedneas que contengan cualquiera de los dos patrones especificados."}),"\n",(0,a.jsxs)(n.p,{children:["Estos son solo ejemplos b\xe1sicos, y grep tiene muchas opciones y funcionalidades adicionales. Puedes consultar la p\xe1gina de manual (",(0,a.jsx)(n.code,{children:"man grep"}),") para obtener m\xe1s informaci\xf3n sobre las opciones disponibles."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var a=s(7294);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);