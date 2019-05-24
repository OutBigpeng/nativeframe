错误<br/>
1.android编译报错 <br/>
    Task :app:mergeDebugResources FAILED<br/>
    Error: java.util.concurrent.ExecutionException: com.android.builder.internal.aapt.v2.Aapt2Exception: AAPT2 error: check logs for details<br/>
    解决方案：<br/>
    *在android/gradle.properties中添加如下代码<br/> 
    android.enableAapt2=false <br/>  
    *在android/app/build.gradle中 buildToolsVersion 下添加如下代码<br/> 
    aaptOptions.cruncherEnabled = false <br/> 
    aaptOptions.useNewCruncher = false<br/>  
------------------------------
1.封装统一的接口请求，包括get、post和上传文件。
2.封装列表页、列表页头部带关键字检索。
3.封装头部



----------

react-native-device-info  现在不能正常操作，编译错误等待版本升级。


