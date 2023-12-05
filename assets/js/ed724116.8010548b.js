"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[526],{6684:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=a(5893),n=a(1151);const t={sidebar_position:9},r="Diversidad beta",d={id:"qiime2/bdiv",title:"Diversidad beta",description:"La diversidad beta se refiere a la variabilidad en composici\xf3n de especies entre diferentes h\xe1bitats. Se utiliza para cuantificar la heterogeneidad o similitud biol\xf3gica entre diferentes comunidades o muestras. Los m\xe9todos de an\xe1lisis de diversidad beta pueden incluir el c\xe1lculo de \xedndices de disimilitud, como el \xedndice de Jaccard o el \xedndice de Bray-Curtis, y la representaci\xf3n gr\xe1fica de relaciones entre muestras mediante an\xe1lisis de coordenadas principales (PCoA) o an\xe1lisis de clasificaci\xf3n. La diversidad beta complementa la diversidad alfa (diversidad dentro de una comunidad) proporcionando informaci\xf3n sobre c\xf3mo las comunidades biol\xf3gicas difieren entre s\xed en diferentes ubicaciones o condiciones.",source:"@site/docs/qiime2/bdiv.md",sourceDirName:"qiime2",slug:"/qiime2/bdiv",permalink:"/bioinformatica_esp/docs/qiime2/bdiv",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Diversidad alfa",permalink:"/bioinformatica_esp/docs/qiime2/adiv"}},o={},c=[];function l(e){const i={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"diversidad-beta",children:"Diversidad beta"}),"\n",(0,s.jsx)(i.p,{children:"La diversidad beta se refiere a la variabilidad en composici\xf3n de especies entre diferentes h\xe1bitats. Se utiliza para cuantificar la heterogeneidad o similitud biol\xf3gica entre diferentes comunidades o muestras. Los m\xe9todos de an\xe1lisis de diversidad beta pueden incluir el c\xe1lculo de \xedndices de disimilitud, como el \xedndice de Jaccard o el \xedndice de Bray-Curtis, y la representaci\xf3n gr\xe1fica de relaciones entre muestras mediante an\xe1lisis de coordenadas principales (PCoA) o an\xe1lisis de clasificaci\xf3n. La diversidad beta complementa la diversidad alfa (diversidad dentro de una comunidad) proporcionando informaci\xf3n sobre c\xf3mo las comunidades biol\xf3gicas difieren entre s\xed en diferentes ubicaciones o condiciones."}),"\n",(0,s.jsxs)(i.p,{children:["Antes de obtener la diversidad, alfa o beta, podemos optar por obtener una filogenia con nuestros ",(0,s.jsx)(i.code,{children:"ASVs"})," y que esta filogenia sea considerar para los siguientes an\xe1lisis. Si ya obtuviste la filogen\xeda en la diversidad alfa, no es necesario que la vuelvas a obtener. Si no cuentas con ella puedes crearla con el siguiente comando:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"qiime phylogeny align-to-tree-mafft-fasttree --i-sequences results/05_rep-seqs_filter_chloro.qza --o-alignment results/07_aligned-rep-seqs.qza --o-masked-alignment results/07_masked-aligned-rep-seqs.qza --o-tree results/07_unrooted-tree.qza --o-rooted-tree results/07_rooted-tree.qza --verbose\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Ahora obtenemos la diversidad beta utilizando la m\xe9trica ",(0,s.jsx)(i.code,{children:"Unweighted Unifrac"}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"qiime diversity beta-phylogenetic --i-table results/05_feature-table_filter_chloro.qza --i-phylogeny results/07_rooted-tree.qza --p-metric unweighted_unifrac --o-distance-matrix results/11_unweighted_unifrac_distance_matrix.qza\n\n# Para saber si hay diferencias significativas entre los grupos utilizamos\nqiime diversity beta-group-significance --i-distance-matrix results/11_unweighted_unifrac_distance_matrix.qza --m-metadata-file rawdata/metadata.tsv --m-metadata-column group --o-visualization results/12_unweighted-unifrac-body-site-significance.qzv --p-pairwise\n"})}),"\n",(0,s.jsxs)(i.admonition,{type:"info",children:[(0,s.jsx)(i.p,{children:"Existe una ruta m\xe1s r\xe1pida para obtener tanto diversidad alfa como beta en un solo comando. Para nuestro set de datos podemos utilizar el siguiente comando:"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"qiime diversity core-metrics-phylogenetic   --i-phylogeny results/07_rooted-tree.qza  --i-table results/05_feature-table_filter_chloro.qza  --m-metadata-file rawdata/metadata.tsv   --output-dir results/13_core-metrics-results --p-sampling-depth 5000\n"})})]})]})}function u(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,i,a)=>{a.d(i,{Z:()=>d,a:()=>r});var s=a(7294);const n={},t=s.createContext(n);function r(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);