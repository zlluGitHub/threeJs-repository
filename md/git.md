##git和github的基本知识

---
- ### github的基本安装 

    - #### linux下安装git
   
      直接使用命令：`sudo apt-get install git`
        
    - #### mac下安装git 
     
      直接使用命令: `brew install git`
     
    - #### windows下安装git 
  
      百度 `gitbash` ，下载安装即可。

    - #### git的基本配置
        ```js
          git config --global user.name "zlluGitHub"
          git config --global user.email "18230086651@qq.com"
        ```
  
- ### 查看配置信息  
  
      git config --list

- ### 工作流程

     + 克隆 Git 仓库作为工作目录（或者自己新建一个工作目录并初始化为Git仓库）。命令：
        
            git clone [仓库地址]
         
     - 增加资源及修改文件。

     - 提交修改。   

     - 如果他人修改了代码，可以更新资源。

- ### github基本命令

    * #### git init

        通过创建 demo 文件夹，`git init` 初始化，新建一个仓库。
 
            mkdir demo && cd demo
            git init

    - #### git clone   


      如果在 github 上已经有了仓库，可以直接通过 git clone 将项目 clone 到本地。
       
            git clone [仓库地址]

    - #### git diff        

        查看做了哪些修改。可按 q 退出。

            git diff

    + #### git add 

         `git add`可以将文件添加到缓存去，获得 Git 的跟踪。也可以通过加参数，将所有的文件添加到缓存区。
   
        ```js
            git add .   　　　//添加所有文件

            touch a.html     //新建　a.html 文件

            git add a.html　　//添加　a.html 文件

            //下面的三种方式效果相同

            git add .

            git add -A

            git add *

        ```

    + #### git status  

        `git status` 可以查看当前版本库各个文件的状态。

    + #### git commit 

       `git commit` 将缓存区内容添加到仓库中

    + #### git commit -m 

       `git commit -m '尽量写的语义话'` 版本留言，尽量写的语义话'

       + git 提交时如出现如下提示
        ```js
        $ git commit -m'动态展示首页列表'

        *** Please tell me who you are.

        Run

        git config --global user.email "you@example.com"
        git config --global user.name "Your Name"

        to set your account's default identity.
        Omit --global to set the identity only in this repository.

        fatal: unable to auto-detect email address (got 'Administrator@WIN-O6QJVQC88NQ.(none)')

        ```
        这是因为在创建 gi t文件夹的时候信息不完善导致的,其解决方法如下
        ```js
        git config --global user.email "你的邮箱"
        git config --global user.name "你的账号"
        ```
        输入完后再接着执行 `git commit` 即可成功!

    + #### git log 

       `git log`  查看提交记录。

    + #### git reset 

        `git reset` 取消已经缓存的内容。
     `git reset --hard HEAD`　或 　`git reset --hard [版本号]`通过版本号回滚

    + #### git rm 

       `git rm` 命令把一个文件删除，并把它从git的仓库管理系统中移除。 `git rm readme.md`

    + #### git checkout 

      `git checkout` 取消对某个文件的修改，通过 `git status` 查看状态，然后执行 `git checkout` `git checkout 文件名`

    + #### git status 

* ### git pull 使用

    当远端的版本优先于本地的版本，而本地又做了新的版本要提交的时候，会提示提交失败。建议使用 `git pull` 拉取远端的更新。但是拉取的时候会有两种情况。

    1. 远端更新和本地更新不冲突，此时 `git pull` 的时候，会弹出 nano 编辑界面，提示用户合并两个不冲突的更新并提交版本留言，使用 `ctrl + x`，选择 Y 同意，然后直接回车，即可离开 nano 编辑界面。执行完毕之后会生成一个新的版本，即合并远端和本地更新的版本，此时在执行 `git push` 远端和本地就同步了。

    2. 远端更新和本地冲突（修改的是同一文件的相同位置），此时也需要 `git pull` 拉去远端更新,但是提示拉取失败，需要用户手动处理冲突，处理之后相当于修改了文件，所有直接使用 `git add . git commit -m'' git push` 即可提交成功。

- ### 使用git推送代码

    1. 首先，要在 github 上新建仓库，然后 clone 下来,执行命令：
       
            git clone 仓库地址
    
    2. 首次推送，如果没有 clone 现有仓库，而是直接在本地 git init 的仓库的话，需要先添加远程仓库地址。之后可以省略参数　`git push`

            git push -u origin master 

    3. 为这个仓库添加一个远程地址

            git remote add origin [你的github上的仓库地址]

    4. 由于每次 push 都需要输入用户名和密码，很麻烦。这里需要设置下 ssh 密钥

        * #### 设置 `public key`

            1. 首先需要在本地机器上生成 key。
                生成公钥的过程在所有操作系统上都差不多。 首先先确认一下是否已经有一个公钥了。SSH 公钥默认储存在账户的主目录下的 ~/.ssh 目录。进去看看：
                ```js
                $ cd ~/.ssh
                $ ls
                authorized_keys2  id_dsa       known_hosts
                config            id_dsa.pub
                ```
                关键是看有没有用 something 和 something.pub 来命名的一对文件，这个 something 通常就是 `id_dsa` 或 `id_rsa`。有 `.pub` 后缀的文件就是公钥，另一个文件则是密钥。假如没有这些文件，或者干脆连 `.ssh` 目录都没有，可以用 `ssh-keygen` 来创建，这时，会在 `~/.ssh/ `文件夹之下生成一对 `ssh key` ，包括一个 `public key` 和一个 `private key` 。（如果是windows用户，这个文件一般会在这里：`C:\Users\Administrator.ssh`。该程序在 Linux/Mac 系统上由 SSH 包提供，而在 Windows 上则包含在 MSysGit 包里，可自行选择。
        
        

            2. 复制 `public key`   查看内容 `cat  ~/.ssh/id_rsa.pub`
  
            3.  将拷贝的 public key 添加在github账户上：
        
                右上角点击头像-> 点击settings-> 点击SSH KEYS-> 

                点击ADD SSH KEYS-> 将获取的public key粘贴于此即可。
      
* ### git 分支操作

    - #### 创建分支
         
        1. 创建新的分支之后，分支内默认和 master 分支内的内容相同。想要将本地创建好的分支同步到远端，直接执行 `git push -u origin [分支名]` 即可，以后想要更新 `gh-pages` 分支，直接按照原来的 git 三步即可。

        2. `gh-pages` 分支比较特殊，该分支上的内容可以使用 `github账户名.github.io/仓库名` 地址访问。
        
       
        3. 创建分支：

                git branch [yourbranch] 
                

        4. 查看分支:
            ```js
            git branch  　　    //查看本地分支
            git branch　-a      //参数 查看所有分支(本地和远端)
            git branch　-r      //参数 查看远端分支
            ```
        5. 删除本地分支:
            ```js
            git branch -D gh-pages //(gh-pages 为分支名称)
            ```
        6. 删除远程分支:
            ```js
            git push origin :gh-pages  //(origin 后面有空格)
            ```
       
    - #### 切换分支 

        `git checkout [yourbranch]` 或者直接创建一个分支，并且切换过去 `git checkout -b [yourbranch]`

    - #### 删除分支 
    
        `git branch -d [yourbranch]`

    - #### 推送分支 
    
        `git push origin [yourbranch]`

* ### 分支更新及合并

    + #### 拉取更新
        拉取更新之后，直接使用 `git push` 就可以同步更新到远端。
        拉取主分支上的更新 `git pull origin master`

    + #### 合并分支
    
        合并其他分支代码 `git merge [otherbranch]`

* ### git 实现历史回滚

    * 回滚之后想要直接同步到远端，由于远端的版本优先于本地，所以直接 `git push` 失败。使用 `git push -f` 强制推送到远端。想要回滚之后在回到原来的版本，版本号找不到了，我们使用 `git reflog` 命令，可查看所有版本的修改，就可以看到所有的版本号了。

* ### git 命令归纳
    
    * #### git 提交命令
        ```js
        git pull
        git add . //(.或\*或-A)表示全部
        git commit -m'注释信息'
        git push //提交修改
        ```
    * #### 仓库信息查询
        ```js
        git init //初始化仓库　－ｙ全部默认ｙｅｓ
        git log //查看提交记录
        git status //查看仓库信息
        ```
    * #### git 分支操作
        ```js
        git branch [分支名称]　 //gh-pages 分支特殊　（[用户名].github.io/[仓库名]/）　新建分支
        git chechout [分支名称]　//切换分支
        git merge [需要合并的分支]
        ```
    * #### 其他
        ```js
        sudo apt-get install git
        git init 
        ls -a
        git status
        git add README
        git commit -m "1st"
        git config --global user.name "zlluGitHub"
        git config --global user.email "18230086651@163.com"
        git log
        git log -p
        sudo apt-get install tig
        git commit -a
        git diff
        git config --global core.editor vim
        git commit -a -v 
        git config --global alias.ci "commit -a -v"
        [user]
            name = zlluGitHub
            email = 18230086651@163.com
        [core]
            editor = vim
        [alias]
            ci = commit -a -v
        ```