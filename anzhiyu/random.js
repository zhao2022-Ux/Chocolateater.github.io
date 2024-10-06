var posts=["2024/10/03/Github图床折腾手记/","2024/10/03/奇思妙想—征集/","2024/10/04/感谢名单/","2024/10/03/完美匹配/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };