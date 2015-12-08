# Description   

>  
tjDoctor为同济医护版前端静态文件，随便启动一个服务就可以访问    


# Compile   

>   
UI使用react技术，所以上线之前需要将jsx编译为javascript。       
执行    
`gulp build`  
 
# Package
>
需要打包的资源有:
>
 + css目录
 + image目录
 + js目录
 + lib目录
 + index.html
 + favicon.ico

# Release
>
修改index.html文件,正确配置`staticServer`,`appServer`的值
>
```js
$TJ = {
    staticServer: "http://192.168.106.156:9090",
    appServer: "http://192.168.1.115:9003"
};
```

