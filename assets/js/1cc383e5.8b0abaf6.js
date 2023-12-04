"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[258],{5143:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>r,contentTitle:()=>t,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=s(5893),n=s(1151);const o={sidebar_position:4},t="Descarga de documentos",c={id:"qiime2/qiime2_files",title:"Descarga de documentos",description:"- [ ] Crea una liga simb\xf3lica a los datos, copia el archivo de metadata y los scripts.",source:"@site/docs/qiime2/qiime2_files.md",sourceDirName:"qiime2",slug:"/qiime2/qiime2_files",permalink:"/bioinformatica_esp/docs/qiime2/qiime2_files",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Instalar QIIME 2",permalink:"/bioinformatica_esp/docs/qiime2/installation"},next:{title:"Remoci\xf3n de adaptadores",permalink:"/bioinformatica_esp/docs/qiime2/adapters"}},r={},d=[{value:"Crear el archivo manifest",id:"crear-el-archivo-manifest",level:2},{value:"Importar los datos",id:"importar-los-datos",level:2}];function l(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"descarga-de-documentos",children:"Descarga de documentos"}),"\n",(0,i.jsxs)(a.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(a.li,{className:"task-list-item",children:[(0,i.jsx)(a.input,{type:"checkbox",disabled:!0})," ","Crea una liga simb\xf3lica a los datos, copia el archivo de metadata y los scripts."]}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"# Liga simb\xf3lica\nln -s /botete/diana/Hackeando_las_comunidades_microbianas_v1/02.Amplicones_16S_Qiime2/data/*.gz data/\n# copiar el metadata\ncp /botete/diana/Hackeando_las_comunidades_microbianas_v1/02.Amplicones_16S_Qiime2/data/metadata.tsv data/\n# copiar los scripts\ncp /botete/diana/Hackeando_las_comunidades_microbianas_v1/02.Amplicones_16S_Qiime2/src/* src/\n# Copiar la base de datos\ncp /botete/diana/Hackeando_las_comunidades_microbianas_v1/02.Amplicones_16S_Qiime2/data/*.qza data/\n\n"})}),"\n",(0,i.jsx)(a.h2,{id:"crear-el-archivo-manifest",children:"Crear el archivo manifest"}),"\n",(0,i.jsxs)(a.p,{children:["Ya que copiaste los archivos necesarios, lista el contenido de tus directorio ",(0,i.jsx)(a.code,{children:"data"})," , veamos que contiene el archivo ",(0,i.jsx)(a.code,{children:"metadata.tsv"})]}),"\n",(0,i.jsxs)(a.p,{children:["Recordemos que Qiime2 requiere de un archivo ",(0,i.jsx)(a.code,{children:"manifest"})," que contenga la ubicaci\xf3n e informaci\xf3n de los archivos ",(0,i.jsx)(a.code,{children:"fastq"}),". As\xed que ejecuta el ",(0,i.jsx)(a.code,{children:"script 02"})," para crear tu archivo manifest:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"bash src/02.create_manifest.sh\n"})}),"\n",(0,i.jsxs)(a.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(a.li,{className:"task-list-item",children:[(0,i.jsx)(a.input,{type:"checkbox",disabled:!0})," ","Observa que contiene el archivo ",(0,i.jsx)(a.code,{children:"manifest.csv"})]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["Ahora si tenemos todos los datos de entrada para comenzar con el ",(0,i.jsx)(a.em,{children:"pipeline"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"importar-los-datos",children:"Importar los datos"}),"\n",(0,i.jsxs)(a.p,{children:["Observa el contenido de ",(0,i.jsx)(a.code,{children:"03.import_data.sh"})," y ve a la ayuda de qiime para conocer cada uno de los ",(0,i.jsx)(a.em,{children:"plugins"})," que estamos poniendo."]}),"\n",(0,i.jsxs)(a.p,{children:["Para conocer m\xe1s el tipo de datos que se pueden importar, puedes visitar ",(0,i.jsx)(a.a,{href:"https://docs.qiime2.org/2023.7/tutorials/importing/",children:"esta p\xe1gina."})]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"bash src/03.import_data.sh\n"})}),"\n",(0,i.jsxs)(a.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(a.li,{className:"task-list-item",children:[(0,i.jsx)(a.input,{type:"checkbox",disabled:!0})," ","Veamos como se ven las secuencias que estamos analizando. Puedes descargar el archivo ",(0,i.jsx)(a.code,{children:"results/01.demux.qzv"})," que acabas de generar o puedes descargarlo desde este repositorio y verlo en ",(0,i.jsx)(a.a,{href:"https://view.qiime2.org/",children:"QIIME2view"}),"."]}),"\n"]})]})}function m(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,a,s)=>{s.d(a,{Z:()=>c,a:()=>t});var i=s(7294);const n={},o=i.createContext(n);function t(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);