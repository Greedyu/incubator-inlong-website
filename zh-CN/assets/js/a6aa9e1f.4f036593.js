"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3089],{78665:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(63366),l=a(67294),n=a(86010),i=a(32600),m=a(39960),s="sidebar_a9qW",o="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",d="sidebarItem_CF0Q",g="sidebarItemLink_miNk",u="sidebarItemLinkActive_RRTD",p=a(95999);function b(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var v=["sidebar","toc","children"];function E(e){var t=e.sidebar,a=e.toc,m=e.children,s=(0,r.Z)(e,v),o=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(b,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&l.createElement("div",{className:"col col--2"},a))))}},2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var r=a(67294),l=a(52263),n=a(78665),i=a(38561),m=a(95999),s=a(71750);function o(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(s.Z,{permalink:a,title:r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{permalink:l,title:r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}var c=a(77556),d=a(14739),g=a(86010);function u(e){var t=e.metadata,a=(0,l.Z)().siteConfig.title,n=t.blogDescription,i=t.blogTitle,m="/"===t.permalink?a:i;return r.createElement(r.Fragment,null,r.createElement(c.d,{title:m,description:n}),r.createElement(d.Z,{tag:"blog_posts_list"}))}function p(e){var t=e.metadata,a=e.items,l=e.sidebar;return r.createElement(n.Z,{sidebar:l},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(o,{metadata:t}))}function b(e){return r.createElement(c.FG,{className:(0,g.Z)(c.kM.wrapper.blogPages,c.kM.page.blogListPage)},r.createElement(u,e),r.createElement(p,e))}},38561:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(67294),l=a(86010),n=a(95999),i=a(39960),m=a(44996),s=a(77556),o=a(18780),c=a(47459),d=a(86753),g="blogPostTitle_rzP5",u="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j",b=a(8727),v="image_o0gy";function E(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function h(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,m=t.email,s=n||m&&"mailto:"+m||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(E,{href:s},r.createElement("img",{className:v,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(E,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var f="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?_:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?N:f),key:t},r.createElement(h,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function k(e){var t,a,v=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,m.C)().withBaseUrl,h=e.children,f=e.frontMatter,_=e.assets,N=e.metadata,k=e.truncated,P=e.isBlogPostPage,T=void 0!==P&&P,w=N.date,I=N.formattedDate,y=N.permalink,R=N.tags,A=N.readingTime,L=N.title,M=N.editUrl,C=N.authors,x=null!=(t=_.image)?t:f.image,F=!T&&k,U=R.length>0,B=T?"h1":"h2";return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(B,{className:g,itemProp:"headline"},T?L:r.createElement(i.Z,{itemProp:"url",to:y},L)),r.createElement("div",{className:(0,l.Z)(u,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},I),void 0!==A&&r.createElement(r.Fragment,null," \xb7 ",v(A))),r.createElement(Z,{authors:C,assets:_})),x&&r.createElement("meta",{itemProp:"image",content:E(x,{absolute:!0})}),r.createElement("div",{id:T?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,h)),(U||k)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",T&&p)},U&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":F})},r.createElement(b.Z,{tags:R})),T&&M&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:M})),F&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":U})},r.createElement(i.Z,{to:N.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:L})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}}}]);