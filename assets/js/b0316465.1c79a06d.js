"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[501],{293:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var i=s(5893),a=s(1151);const t={sidebar_position:6},o="Denoising",r={id:"qiime2/denoising",title:"Denoising",description:"Antes de comenzar el denoising , veamos la ayuda.",source:"@site/docs/qiime2/denoising.md",sourceDirName:"qiime2",slug:"/qiime2/denoising",permalink:"/bioinformatica_esp/docs/qiime2/denoising",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Remoci\xf3n de adaptadores",permalink:"/bioinformatica_esp/docs/qiime2/adapters"},next:{title:"Asignaci\xf3n taxon\xf3mica",permalink:"/bioinformatica_esp/docs/qiime2/taxonomy"}},d={},l=[];function c(e){const n={code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"denoising",children:"Denoising"}),"\n",(0,i.jsxs)(n.p,{children:["Antes de comenzar el ",(0,i.jsx)(n.em,{children:"denoising"})," , veamos la ayuda."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"qiime dada2 denoise-paired --i-demultiplexed-seqs --help\n"})}),"\n",(0,i.jsx)(n.p,{children:"Como habr\xe1s notado, es necesario tomar decisiones basadas en la calidad de nuestras lecturas para definir los valores de truncado. Es muy importante dener en cuenta la longitud de las lecturas y del amplic\xf3n deseado para tener una idea de la longitud del sobrelape que se obtendr\xeda."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"(longitud lectura Fordware) + (longitud lectura Reverse) \u2212 (longitud del amplicon) \u2212 \n(longitud lectura Fordware \u2212 --p-trunc-len-f value) \u2212 (longitud lectura Reverse \u2212 --p-trunc-len-r value) \n= sobrelape\n"})}),"\n",(0,i.jsx)(n.p,{children:"En esta prueba consideraremos los siguientes par\xe1metros:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"qiime dada2 denoise-paired --i-demultiplexed-seqs results/02_demux_clean_adapter.qza --p-trunc-len-f 140 --p-trunc-len-r 140 --o-representative-sequences results/03_rep-seqs.qza --o-table results/03_feature-table.qza --o-denoising-stats results/03_denoising-stats.qza --p-n-threads 4\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Para conocer la informaci\xf3n del ",(0,i.jsx)(n.code,{children:"denoising"})," podemos correr el siguiente comando:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"qiime tools export --input-path results/03_denoising-stats.qza --output-path results/03_denoising-stats\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(7294);const a={},t=i.createContext(a);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);