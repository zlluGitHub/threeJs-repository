## linux 环境安装 java 环境和 eclipse

---
+ ### 第一步：创建jdk安装目录
  + 一般 `/usr/local/src` 这个目录是空的,可以将我们自己下载的文件放到这里，为了方便我将安装目录放到了 /home/zll 目录下了 （组合键：`Ctrl+Alt+T` 出现的终端，其中 `zll` 为本机的用户名） 此安装目录可有可无。 
    创建 `jdk` 目录命令：
    ```js
    zll@zll-PC:~$ mkdir -p /usr/local/src/jdk
    ```
    （jdk 为自定义文件夹名称）
+ ### 第二步：查看安装程序
  - 若之前安装过jdk，下次安装一定把之前的删除干净，查看命令：
    ```js
    zll@zll-PC:~$ rpm -qa | grep -i jdk
    ```
+ ### 第三步：在终端下载 `jdk` 安装包 
   - 此方式可以下载后缀为 tar.gz 的文件，这种文件不需要安装，下载命令：
        ```js
        wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie"  http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz
        ```
        **注意：** 如果上面 wget 命令不能用,报错：`-bash: wget: command not found`。执行一下该命令(安装依赖包) 
        ```js
        yum -y install wget
        ```
        另外，记住需要加上：
        ```js
        --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie"
        ```
        这段是为了避开用户验证用的。
+ ###  第四步：解压文件
    解压命令：
    ```js
    zll@zll-PC:~$ tar -zxvf jdk-8u131-linux-x64.tar.gz
    ```
    系统会生成一个名为：`jdk1.8.0_131` 的文件夹。可以使用`mv`命令自定义文件名。例如：
    ```js
    zll@zll-PC:~$ mv jdk1.8.0_131  jdk1.8
    ```
+ ### 第五步：配置环境变量
    - #### 方式一
        在终端键入命令：
        ```js
        zll@zll-PC:~$ vi /etc/profile
        ```
        接着便可以看到 profile 这个文件的内容，这时可以使用 `shift + g` 定位到最后一行，按一下`a`或`i`键，进入编辑模式，添加如下内容：(JAVA_HOME 是jdk安装目录,jdk1.8是 jdk 解压目录)
        ```js
        export JAVA_HOME=/home/zll/jdk1.8
        export PATH=$PATH:$JAVA_HOME/bin
        ```
    - #### 方式二
        在终端键入命令：
        ```js
        zll@zll-PC:~$ cd /etc
        ```
        进入到 etc 目录下,使用 `code` 打开 `profile` 文件，然后编辑保存。
        ```js
        zll@zll-PC:/etc$ code profile
        ```
        在文件最后添加如下内容然后保存即可：
        ```js
        export JAVA_HOME=/home/zll/jdk1.8
        export PATH=$PATH:$JAVA_HOME/bin
        ```
+ ### 第六步：退出文件，保存
    按 `Esc` 键   输入: `wq` 保存并退出
+ ### 第七步：使配置文件生效
    ```js
    zll@zll-PC:~$ source /etc/profile
    ```
+ ### 第八步：查看是否配置成功
    ```js
    zll@zll-PC:~$ java -version  
    ``` 
    - #### 若出现 `jdk` 版本号，则安装并配置环境变量成功,如果提示命令找不到的话，查看一下 `jdk` 的配置路径是否错误。若出现
        ```js
        A Java Runtime Environment (JRE) or Java Development Kit (JDK) must be available in order to run Eclipse. No Java virtual machine was found after searching the following locations: /home/zhangliuhua/developer/eclipse/jre/bin/java java in your current PATH 
        ```
        这样错误，可用如下方法解决。
    - #### 解决方法:
        首先，进入到 `eclipse` 安装目录下,新建文件夹 `jre` 
        ```js
        zll@zll-PC:~/eclipse$ mkdir jre
        ```
        进入到 `jre` 文件夹跟安装的 `java` 环境建立连接
        ```js
        zll@zll-PC:~/eclipse$ cd jre 
        zll@zll-PC:~/eclipse/jre$ ln -s /home/zll/jdk1.8/bin bin
        ```
        **注意：** `ln -s jdk的安装目录/bin bin`

+ ### eclipse 下载安装
    
    + #### eclipse 下载
        ```js
        zll@zll-PC:~$ wget http://mirrors.neusoft.edu.cn/eclipse/technology/epp/downloads/release/luna/SR2/eclipse-jee-luna-SR2-linux-gtk-x86_64.tar.gz
        ```
    + #### eclipse 解压安装
        ```js
        zll@zll-PC:~$ sudo tar -zxvf eclipse-jee-luno-SR2-linux-gtk-x86_64.tar.gz
        ``` 
    + #### 进入解压之后的文件夹
        ```js
        zll@zll-PC:~$ cd eclipse
        zll@zll-PC:~/eclipse$ ./eclipse
        ```
        即可打开 eclipse 

    + #### 其他
        为了可以方便的在任何地方打开 `eclipse` ，可以设置 `eclipse` 软连接，设置如下：
        - 第一步
            进入文件夹 `usr/local/bin` 执行命令：
            ```js
            zll@zll-PC:~$ cd /usr/local/bin
            ```
        - 第二步 
            将eclipse执行文件符号链接到 `/usr/local/bin/` 中执行命令：
            ```js
            zll@zll-PC:/usr/local/bin$ sudo ln -s /home/zll/eclipse/eclipse
           
            ```
            **注意**  对用自己的eclipse路径
            之后可在 `usr/local/bin` 下发现多了一个 `eclipse` 在任何地方键入 `eclipse` 即可打开 `eclipse`
