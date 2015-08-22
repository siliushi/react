# 简介  

>  
为了深入学习react，做了一个简单的react project。此项目是一个简单的mvc项目，UI使用了Facebook的react技术，如图所示   
![首页](/image/home.png)    
只做了其中规章制度、药物词典、通知公告这三个模块


# 环境配置

>   
修改index.html中的两个环境变量，staticServer（本地服务器地址），appServer（接口服务器地址，此项目中的数据都是模拟数据，所以并未用到appServer。但是请求方法已经封装好了。）   
启动服务访问，比如127.0.0.1:9090


# 编译压缩   

>   
编译jsx语法   
`gulp compile`   
   
压缩js文件   
`gulp compress`   
    
打包发布   
`gulp build`   
或者双击compile文件夹下的build.bat（windows），build.sh（Linux）
         
将index.html中的jsdev改成js就会加载压缩文件


     