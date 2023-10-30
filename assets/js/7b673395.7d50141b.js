"use strict";(self.webpackChunkdocucomp=self.webpackChunkdocucomp||[]).push([[4957],{9934:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"first-blog-post","metadata":{"permalink":"/docucomp/blog/first-blog-post","editUrl":"https://github.com/S7245/docucomp/tree/main/blog/2023-10-30-first-blog-post.md","source":"@site/blog/2023-10-30-first-blog-post.md","title":"Linux\u642d\u5efaWeb\u670d\u52a1\u5668","description":"\u5b89\u88c5","date":"2023-10-30T00:00:00.000Z","formattedDate":"October 30, 2023","tags":[{"label":"Nginx","permalink":"/docucomp/blog/tags/nginx"},{"label":"Linux","permalink":"/docucomp/blog/tags/linux"}],"readingTime":2.125,"hasTruncateMarker":false,"authors":[{"name":"Sam","title":"--","url":"https://github.com/wgao19","image_url":"https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/EUse-pic-0000109.png","imageURL":"https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/EUse-pic-0000109.png"}],"frontMatter":{"slug":"first-blog-post","title":"Linux\u642d\u5efaWeb\u670d\u52a1\u5668","authors":{"name":"Sam","title":"--","url":"https://github.com/wgao19","image_url":"https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/EUse-pic-0000109.png","imageURL":"https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/EUse-pic-0000109.png"},"tags":["Nginx","Linux"]},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/docucomp/blog/welcome"}},"content":"## \u5b89\u88c5\\n\\n\u5b89\u88c5\u73af\u5883\uff1a\\n\\n```sh\\nyum -y install gcc \\nyum -y install zlib zlib-devel \\nyum -y install pcre pcre-devel\\nyum -y install openssl openssl-devel\\n```\\n\\n[nginx](https://nginx.org/en/download.html) \u627e\u5230`Mainline version`\u67e5\u770b\u7248\u672c\uff0c\u4e0a\u4f20\u5230\u670d\u52a1\u5668\uff1a`/usr/local/`\uff0c\\n\\n```sh\\ncd /usr/local/\\nwget https://nginx.org/download/nginx-1.25.3.tar.gz\\n\\n# \u89e3\u538b\\ntar -zxvf nginx-1.25.3.tar.gz\\n\\n# \u628a nginx-1.25.3 \u6587\u4ef6\u540d\u6539\u4e3a\uff1a nginx\\n\\n# \u7f16\u8bd1\u524d\u68c0\u67e5\u547d\u4ee4\\n./configure --prefix=/usr/local/nginx\\n# \u7f16\u8bd1\\nmake & make install\\n```\\n\\n\u67e5\u770b\u6587\u4ef6\uff1a`ls -l`\\n\\n```\\n[root@iZwz9gsb21uph8o66szfkcZ nginx]# ls -l\\n\u603b\u7528\u91cf 880\\ndrwxr-xr-x 6   1001 1001   4096 10\u6708 30 16:33 auto\\n-rw-r--r-- 1   1001 1001 325032 10\u6708 24 21:46 CHANGES\\n-rw-r--r-- 1   1001 1001 497029 10\u6708 24 21:46 CHANGES.ru\\ndrwx------ 2 nobody root   4096 10\u6708 30 16:43 client_body_temp\\ndrwxr-xr-x 2   1001 1001   4096 10\u6708 30 16:33 conf\\n-rwxr-xr-x 1   1001 1001   2611 10\u6708 24 21:46 configure\\ndrwxr-xr-x 4   1001 1001   4096 10\u6708 30 16:33 contrib\\ndrwx------ 2 nobody root   4096 10\u6708 30 16:43 fastcgi_temp\\ndrwxr-xr-x 2   1001 1001   4096 10\u6708 30 16:33 html\\n-rw-r--r-- 1   1001 1001   1397 10\u6708 24 21:46 LICENSE\\ndrwxr-xr-x 2 root   root   4096 10\u6708 30 16:47 logs\\n-rw-r--r-- 1 root   root    438 10\u6708 30 16:34 Makefile\\ndrwxr-xr-x 2   1001 1001   4096 10\u6708 30 16:33 man\\ndrwxr-xr-x 3 root   root   4096 10\u6708 30 16:43 objs\\ndrwx------ 2 nobody root   4096 10\u6708 30 16:43 proxy_temp\\n-rw-r--r-- 1   1001 1001     49 10\u6708 24 21:46 README\\ndrwxr-xr-x 2 root   root   4096 10\u6708 30 16:43 sbin    <===== \u7f16\u8bd1\u540e\u7684\u6587\u4ef6\\ndrwx------ 2 nobody root   4096 10\u6708 30 16:43 scgi_temp\\ndrwxr-xr-x 9   1001 1001   4096 10\u6708 30 16:33 src\\ndrwx------ 2 nobody root   4096 10\u6708 30 16:43 uwsgi_temp\\n```\\n\\n\u521b\u5efa `logs` \u6587\u4ef6\uff1a\\n\\n```sh\\ncd /usr/local/nginx\\nmkdir logs\\n```\\n\\n\u64cd\u4f5c\uff1a\\n\\n```sh\\ncd /usr/local/nginx/sbin\\n\\n# \u542f\u52a8 nginx\\n./nginx\\n\\n# \u5173\u95ed nginx\\n./nginx -s stop\\n\\n# \u91cd\u542f\\n./nginx -s reload\\n\\n```\\n\\n\u5f00\u673a\u542f\u52a8 nginx\uff1a\\n\\n```sh\\nvim /etc/rc.local\\n# \u6700\u5e95\u90e8\u589e\u52a0\u8fd9\u4e00\u884c\\n/usr/local/nginx/sbin/nginx\\n```\\n\\n\\n\u542f\u52a8\u540e\u67e5\u770b\u8fdb\u7a0b\uff1a\\n\\n```sh\\n# \u67e5\u8be2\u8fdb\u7a0b\u53f7\\nps -ef|grep nginx\\n\\n# \u505c\u6b62\u8fdb\u7a0b\\nkill -QUIT \u8fdb\u7a0b\u53f7\\n\\n# \u5feb\u901f\u505c\u6b62\\nkill -TERM \u4e3b\u8fdb\u7a0b\u53f7\\n\\n# \u5f3a\u5236\u505c\u6b62\\nkill -9 \u4e3b\u8fdb\u7a0b\u53f7\\n```\\n\\nQA\uff1a80\u7aef\u53e3\u88ab\u5360\u7528\uff0c\u9700\u8981\u89e3\u9664\\n\\n```sh\\n# \u67e5\u770b\u7aef\u53e3\\nnetstat -ntlp\\n```"},{"id":"welcome","metadata":{"permalink":"/docucomp/blog/welcome","editUrl":"https://github.com/S7245/docucomp/tree/main/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/docucomp/blog/tags/facebook"},{"label":"hello","permalink":"/docucomp/blog/tags/hello"},{"label":"docusaurus","permalink":"/docucomp/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"Linux\u642d\u5efaWeb\u670d\u52a1\u5668","permalink":"/docucomp/blog/first-blog-post"},"nextItem":{"title":"MDX Blog Post","permalink":"/docucomp/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/docucomp/blog/mdx-blog-post","editUrl":"https://github.com/S7245/docucomp/tree/main/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/docucomp/blog/tags/docusaurus"}],"readingTime":0.2,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/docucomp/blog/welcome"},"nextItem":{"title":"Greetings!","permalink":"/docucomp/blog/greetings"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts. This is a test input.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"greetings","metadata":{"permalink":"/docucomp/blog/greetings","editUrl":"https://github.com/S7245/docucomp/tree/main/blog/2021-08-26-welcome/2021-02-28-greetings.md","source":"@site/blog/2021-08-26-welcome/2021-02-28-greetings.md","title":"Greetings!","description":"Congratulations, you have made your first post!","date":"2021-02-28T00:00:00.000Z","formattedDate":"February 28, 2021","tags":[{"label":"greetings","permalink":"/docucomp/blog/tags/greetings"}],"readingTime":0.1,"hasTruncateMarker":false,"authors":[{"name":"Joel Marcey","title":"Co-creator of Docusaurus 1","url":"https://github.com/JoelMarcey","image_url":"https://github.com/JoelMarcey.png","imageURL":"https://github.com/JoelMarcey.png"},{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","image_url":"https://github.com/slorber.png","imageURL":"https://github.com/slorber.png"}],"frontMatter":{"slug":"greetings","title":"Greetings!","authors":[{"name":"Joel Marcey","title":"Co-creator of Docusaurus 1","url":"https://github.com/JoelMarcey","image_url":"https://github.com/JoelMarcey.png","imageURL":"https://github.com/JoelMarcey.png"},{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","image_url":"https://github.com/slorber.png","imageURL":"https://github.com/slorber.png"}],"tags":["greetings"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/docucomp/blog/mdx-blog-post"},"nextItem":{"title":"Long Blog Post","permalink":"/docucomp/blog/long-blog-post"}},"content":"Congratulations, you have made your first post!\\n\\nFeel free to play around and edit this post as much you like."},{"id":"long-blog-post","metadata":{"permalink":"/docucomp/blog/long-blog-post","editUrl":"https://github.com/S7245/docucomp/tree/main/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/docucomp/blog/tags/hello"},{"label":"docusaurus","permalink":"/docucomp/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"Greetings!","permalink":"/docucomp/blog/greetings"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);