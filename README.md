1. 前端路由的两种方式：
   。hash 跳转时更改hash值 监听hash变化 （有#号，兼容性好）
   。history ，history.pushState(data,title,url) 来进行跳转 popState监控 （没有#号，兼容性差）
     window.addEventListener('popState',function(){
         console.log(window.location.pathname)
     }) 
    
     