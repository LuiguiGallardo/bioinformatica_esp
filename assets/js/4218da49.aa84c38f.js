"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[422],{4696:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>t,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=s(5893),n=s(1151);const r={sidebar_position:13},c="Comando cut",i={id:"bash/cut",title:"Comando cut",description:"Su funcionalidad principal es recortar y mostrar partes seleccionadas del contenido de un archivo o de la salida de otros comandos, utilizando delimitadores o posiciones espec\xedficas. cut es \xfatil para manipular y trabajar con datos tabulares o estructurados, donde es necesario extraer informaci\xf3n espec\xedfica.",source:"@site/docs/bash/cut.md",sourceDirName:"bash",slug:"/bash/cut",permalink:"/bioinformatica_esp/docs/bash/cut",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Visualizaci\xf3n de archivos",permalink:"/bioinformatica_esp/docs/bash/files_visualization"},next:{title:"Comando grep",permalink:"/bioinformatica_esp/docs/bash/grep"}},t={},d=[];function l(e){const a={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.h1,{id:"comando-cut",children:["Comando ",(0,o.jsx)(a.code,{children:"cut"})]}),"\n",(0,o.jsxs)(a.p,{children:["Su funcionalidad principal es recortar y mostrar partes seleccionadas del contenido de un archivo o de la salida de otros comandos, utilizando delimitadores o posiciones espec\xedficas. ",(0,o.jsx)(a.code,{children:"cut"})," es \xfatil para manipular y trabajar con datos tabulares o estructurados, donde es necesario extraer informaci\xf3n espec\xedfica."]}),"\n",(0,o.jsxs)(a.p,{children:["Cuando se desea extraer los car\xe1cteres de una posici\xf3n pueden usarse las opciones ",(0,o.jsx)(a.code,{children:"-b"})," o ",(0,o.jsx)(a.code,{children:"-c"}),". Ambas opciones consideran los espacios o tabuladores como un car\xe1cter."]}),"\n",(0,o.jsx)(a.p,{children:"Imprimir los caracteres del 1 al 50"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"cut -c 1-50 archivo.txt\n"})}),"\n",(0,o.jsx)(a.p,{children:"Imprimir los bytes del 30-50"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"cut -b 30-50 archivo.txt  \n"})}),"\n",(0,o.jsxs)(a.p,{children:["Los archivos de tablas generalmente se encuentran delimitados por un car\xe1cter especial, por ejemplo , o tabulador. Cuando se desea extraer campos separados por esos caracteres, se usa la opci\xf3n ",(0,o.jsx)(a.code,{children:"-f"}),". Esta opci\xf3n permite extraer campos que no se encuentran en la misma posici\xf3n de car\xe1cter en todas las lineas, pero s\xed en el mismo n\xfamero de delimitador."]}),"\n",(0,o.jsx)(a.p,{children:"Extraer las columnas 3 y 7"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"cut -f1,7 archivo.txt  \n"})}),"\n",(0,o.jsxs)(a.p,{children:["Si el delimitador es diferente a tabulador se aclara con la opci\xf3n ",(0,o.jsx)(a.code,{children:"-d"}),', por ejemplo ","']}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:'cut -d "," -f3,7 archivo.txt \n'})})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,a,s)=>{s.d(a,{Z:()=>i,a:()=>c});var o=s(7294);const n={},r=o.createContext(n);function c(e){const a=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);