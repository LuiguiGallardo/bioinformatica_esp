"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[470],{1118:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=s(5893),a=s(1151);const r={sidebar_position:17},t="Creaci\xf3n de un script",i={id:"bash/script",title:"Creaci\xf3n de un script",description:"Un script puede definirse como un c\xf3digo de programaci\xf3n, el cual contiene una serie de comandos u ordenes que se ejecutan de manera secuencial y estos suelen utilizarse para controlar un flujo de trabajo o el comportamiento de programas. Al momento de ejecutarse los comandos contenidos dentro del script son \u201cle\xeddos\u201d por un interprete y este ejecuta los comandos. En Unix los podemos encontrar con la extensi\xf3n .sh.",source:"@site/docs/bash/script.md",sourceDirName:"bash",slug:"/bash/script",permalink:"/bioinformatica_esp/docs/bash/script",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Redirecci\xf3n de salida y tuber\xedas",permalink:"/bioinformatica_esp/docs/bash/stdoutput_pipes"},next:{title:"Introducci\xf3n QIIME 2",permalink:"/bioinformatica_esp/docs/qiime2/intro"}},c={},u=[];function l(e){const o={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"creaci\xf3n-de-un-script",children:"Creaci\xf3n de un script"}),"\n",(0,n.jsx)(o.p,{children:"Un script puede definirse como un c\xf3digo de programaci\xf3n, el cual contiene una serie de comandos u ordenes que se ejecutan de manera secuencial y estos suelen utilizarse para controlar un flujo de trabajo o el comportamiento de programas. Al momento de ejecutarse los comandos contenidos dentro del script son \u201cle\xeddos\u201d por un interprete y este ejecuta los comandos. En Unix los podemos encontrar con la extensi\xf3n .sh."}),"\n",(0,n.jsx)(o.p,{children:"Hagamos nuestro primer script:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:'Crearemos en vim un script que nos haga un directorio llamado ribosomals, nos mueva dentro de ese directorio y copie un archivo que contiene secuencias de proteinas en el (el archivo se localiza un directorio arriba), seguido de esto vamos a extraer las proteinas ribosomales empleando grep y generaremos un nuevo archivo, contaremos cuantas proteinas ribosomales hay en ese nuevo archivo y el resultado se imprimir\xe1 en pantalla.\n\nrafabust$ vim cuentas.sh  #Estamos creando un nuevo documento que se llamar\xe1 cuentas.sh, al darle enter veremos que este se encuentra vacio.\nDentro de vim escribiremos lo siguiente:\n#!/bin/bash #Esta l\xednea indica el interprete que se usara para leer el script, es necesario pornerla para saber que esta escrito en bash.\n\necho "Mi primer script"   #Esta linea nos imprimir\xe1 en pantalla lo que est\xe1 entre comillas.\n\nmkdir ribosomals  #Creamos el directorio ribosomals.\n\ncd ribosomals   #Nos movemos dentro de ribosomals.\n\ncp ../GCF_002284945.1_ASM228494v1_protein.faa .   #Copiamos el archivo multifasta de proteinas que se encuentra un directorio arriba.\n\ngrep "ribosomal protein" GCF_002284945.1_ASM228494v1_protein.faa > solo_pr.txt    #Extraemos la informaci\xf3n que deseamos y creamos un nuevo documento.\n\necho "Tenemos un total de $(grep -chi ">" solo_pr.txt) proteinas ribosomales"   #Con esta linea nosotros sabremos cuantas proteinas ribosomales tenemos en nuestro archivo.\n\nAl terminar de escribir los comandos salimos de vim guardando los cambios realizados. Oprimiendo la tecla esc para regresar a el modo comandos y tecleando la opci\xf3n :wq para que guarde los cambios\n\nrafabust$ chmod +x cuentas.sh   #Volvemos ejecutabe el archivo.\nrafabust$ ./cuentas.sh \xf3 sh cuentas.sh    #Podemos ocupar cualquier de las dos opciones para ejecutar el script.\nrafabust$ sh cuentas.sh\nMi primer script\nTenemos un total de 58 proteinas ribosomales  #Listo! acabamos de ejecutar nuestro primer script!!\n'})})]})}function d(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>i,a:()=>t});var n=s(7294);const a={},r=n.createContext(a);function t(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);