"use strict";(self.webpackChunkdocucomp=self.webpackChunkdocucomp||[]).push([[4126],{5063:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>a});var r=o(5893),s=o(1151);const t={slug:"first-blog-post",title:"Linux\u642d\u5efaWeb\u670d\u52a1\u5668",authors:{name:"Sam",title:"--",url:"https://github.com/wgao19",image_url:"https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/EUse-pic-0000109.png"},tags:["Nginx","Linux"]},l=void 0,i={permalink:"/docucomp/blog/first-blog-post",editUrl:"https://github.com/S7245/docucomp/tree/main/blog/2023-10-30-first-blog-post.md",source:"@site/blog/2023-10-30-first-blog-post.md",title:"Linux\u642d\u5efaWeb\u670d\u52a1\u5668",description:"\u5b89\u88c5",date:"2023-10-30T00:00:00.000Z",formattedDate:"October 30, 2023",tags:[{label:"Nginx",permalink:"/docucomp/blog/tags/nginx"},{label:"Linux",permalink:"/docucomp/blog/tags/linux"}],readingTime:2.125,hasTruncateMarker:!1,authors:[{name:"Sam",title:"--",url:"https://github.com/wgao19",image_url:"https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/EUse-pic-0000109.png",imageURL:"https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/EUse-pic-0000109.png"}],frontMatter:{slug:"first-blog-post",title:"Linux\u642d\u5efaWeb\u670d\u52a1\u5668",authors:{name:"Sam",title:"--",url:"https://github.com/wgao19",image_url:"https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/EUse-pic-0000109.png",imageURL:"https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/EUse-pic-0000109.png"},tags:["Nginx","Linux"]},unlisted:!1,nextItem:{title:"Welcome",permalink:"/docucomp/blog/welcome"}},c={authorsImageUrls:[void 0]},a=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2}];function g(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsx)(e.p,{children:"\u5b89\u88c5\u73af\u5883\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"yum -y install gcc \nyum -y install zlib zlib-devel \nyum -y install pcre pcre-devel\nyum -y install openssl openssl-devel\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://nginx.org/en/download.html",children:"nginx"})," \u627e\u5230",(0,r.jsx)(e.code,{children:"Mainline version"}),"\u67e5\u770b\u7248\u672c\uff0c\u4e0a\u4f20\u5230\u670d\u52a1\u5668\uff1a",(0,r.jsx)(e.code,{children:"/usr/local/"}),"\uff0c"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"cd /usr/local/\nwget https://nginx.org/download/nginx-1.25.3.tar.gz\n\n# \u89e3\u538b\ntar -zxvf nginx-1.25.3.tar.gz\n\n# \u628a nginx-1.25.3 \u6587\u4ef6\u540d\u6539\u4e3a\uff1a nginx\n\n# \u7f16\u8bd1\u524d\u68c0\u67e5\u547d\u4ee4\n./configure --prefix=/usr/local/nginx\n# \u7f16\u8bd1\nmake & make install\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u67e5\u770b\u6587\u4ef6\uff1a",(0,r.jsx)(e.code,{children:"ls -l"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[root@iZwz9gsb21uph8o66szfkcZ nginx]# ls -l\n\u603b\u7528\u91cf 880\ndrwxr-xr-x 6   1001 1001   4096 10\u6708 30 16:33 auto\n-rw-r--r-- 1   1001 1001 325032 10\u6708 24 21:46 CHANGES\n-rw-r--r-- 1   1001 1001 497029 10\u6708 24 21:46 CHANGES.ru\ndrwx------ 2 nobody root   4096 10\u6708 30 16:43 client_body_temp\ndrwxr-xr-x 2   1001 1001   4096 10\u6708 30 16:33 conf\n-rwxr-xr-x 1   1001 1001   2611 10\u6708 24 21:46 configure\ndrwxr-xr-x 4   1001 1001   4096 10\u6708 30 16:33 contrib\ndrwx------ 2 nobody root   4096 10\u6708 30 16:43 fastcgi_temp\ndrwxr-xr-x 2   1001 1001   4096 10\u6708 30 16:33 html\n-rw-r--r-- 1   1001 1001   1397 10\u6708 24 21:46 LICENSE\ndrwxr-xr-x 2 root   root   4096 10\u6708 30 16:47 logs\n-rw-r--r-- 1 root   root    438 10\u6708 30 16:34 Makefile\ndrwxr-xr-x 2   1001 1001   4096 10\u6708 30 16:33 man\ndrwxr-xr-x 3 root   root   4096 10\u6708 30 16:43 objs\ndrwx------ 2 nobody root   4096 10\u6708 30 16:43 proxy_temp\n-rw-r--r-- 1   1001 1001     49 10\u6708 24 21:46 README\ndrwxr-xr-x 2 root   root   4096 10\u6708 30 16:43 sbin    <===== \u7f16\u8bd1\u540e\u7684\u6587\u4ef6\ndrwx------ 2 nobody root   4096 10\u6708 30 16:43 scgi_temp\ndrwxr-xr-x 9   1001 1001   4096 10\u6708 30 16:33 src\ndrwx------ 2 nobody root   4096 10\u6708 30 16:43 uwsgi_temp\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u521b\u5efa ",(0,r.jsx)(e.code,{children:"logs"})," \u6587\u4ef6\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"cd /usr/local/nginx\nmkdir logs\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u64cd\u4f5c\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"cd /usr/local/nginx/sbin\n\n# \u542f\u52a8 nginx\n./nginx\n\n# \u5173\u95ed nginx\n./nginx -s stop\n\n# \u91cd\u542f\n./nginx -s reload\n\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5f00\u673a\u542f\u52a8 nginx\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"vim /etc/rc.local\n# \u6700\u5e95\u90e8\u589e\u52a0\u8fd9\u4e00\u884c\n/usr/local/nginx/sbin/nginx\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u542f\u52a8\u540e\u67e5\u770b\u8fdb\u7a0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"# \u67e5\u8be2\u8fdb\u7a0b\u53f7\nps -ef|grep nginx\n\n# \u505c\u6b62\u8fdb\u7a0b\nkill -QUIT \u8fdb\u7a0b\u53f7\n\n# \u5feb\u901f\u505c\u6b62\nkill -TERM \u4e3b\u8fdb\u7a0b\u53f7\n\n# \u5f3a\u5236\u505c\u6b62\nkill -9 \u4e3b\u8fdb\u7a0b\u53f7\n"})}),"\n",(0,r.jsx)(e.p,{children:"QA\uff1a80\u7aef\u53e3\u88ab\u5360\u7528\uff0c\u9700\u8981\u89e3\u9664"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"# \u67e5\u770b\u7aef\u53e3\nnetstat -ntlp\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(g,{...n})}):g(n)}},1151:(n,e,o)=>{o.d(e,{Z:()=>i,a:()=>l});var r=o(7294);const s={},t=r.createContext(s);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);