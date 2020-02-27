<template>
    <scroll class="content">
        <div>
            <el-row>
                <el-col :xs="{span:22, offset:1}" :sm="{span:18, offset:3}" :md="{span:16, offset:4}" :lg="{span:14, offset:5}" class="article">

                    <h2 class="article-title">Duis aute irure dolor in reprehenderit in voluptate</h2>

                    <div class="article-subtitle mb-2 text-muted">by <a href="#">John Doe</a> on August 10, 2017</div>

                    <div class="article-cover">
                        <el-image src="http://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&f=JPEG?w=1280&h=853"
                                  fit="cover">

                        </el-image>
                    </div>
                    <div class="article-content">
                        <markdown-preview :initialValue="htmlContent" theme="dark"></markdown-preview>
                    </div>
                </el-col>
            </el-row>
        </div>
    </scroll>
</template>

<script>
    import Scroll from "@/components/Scroll";
    import {MarkdownPreview} from 'vue-meditor';
    export default {
        name: "BlogArticle",
        components: {
            Scroll,
            MarkdownPreview,
        },
        computed: {
            htmlContent() {
                return "# Mac OS 新系统安装指南\n" +
                    "\n" +
                    "#### 系统环境设置\n" +
                    "- 系统偏好设置-通用-外观-石墨色，勾选 使用暗色菜单和程序坞\n" +
                    "- 系统偏好设置-鼠标-反选 滚动方向：自然\n" +
                    "- 系统偏好设置-键盘-修饰键-外接键盘 Option<=>Command\n" +
                    "- 系统偏好设置-Siri-反选 启动“询问Siri”/在菜单栏中显示Siri\n" +
                    "- Dock条去除无用程序\n" +
                    "- 系统偏好设置-程序坞-调整大小，勾选：放大，最小化时使用：缩放效果\n" +
                    "\n" +
                    "\n" +
                    "#### 软件安装\n" +
                    "- **搜狗输入法** ：[官网](https://pinyin.sogou.com/mac/)\n" +
                    "\n" +
                    "```bash\n" +
                    "    - 状态栏显示斗图图标-关闭\n" +
                    "    - 状态栏显示语音图标-关闭\n" +
                    "    - 中文下使用英文标点-开启\n" +
                    "    - 外观-简约黑\n" +
                    "    - 按键-当前输入状态提示-跟随式\n" +
                    "```\n" +
                    "\n" +
                    "- **迅雷** : [官网](https://www.xunlei.com/)\n" +
                    "\n" +
                    "- **Xcode** ：[AppStore](https://itunes.apple.com/cn/app/xcode/id497799835?mt=12)\n" +
                    "- **Shadowsocks-NG-R8** : [GitHub](https://github.com/VeniZ/ShadowsocksX-NG-R8-Bakup)\n" +
                    "- **微信** : [官网](https://weixin.qq.com/)\n" +
                    "- **Chrome** : [官网](https://www.google.com/chrome/)\n" +
                    "- **Source Tree**: [官网](https://www.sourcetreeapp.com/)\n" +
                    "\n" +
                    "```\n" +
                    "    - 主题-暗色\n" +
                    "```\n" +
                    "- **iTerm2** :\n" +
                    " [官网](https://www.iterm2.com/)\n" +
                    "\n" +
                    "```java\n" +
                    "    #install\n" +
                    "    sh -c \"$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)\"\n" +
                    "\n" +
                    "    #自定义命令\n" +
                    "    sudo code ~/.zshrc\n" +
                    "```\n" +
                    "\n" +
                    "- **Visual Studio Code** [官网](https://code.visualstudio.com/)\n" +
                    "\n" +
                    "```bash\n" +
                    "    - Install `code` commond in PATH\n" +
                    "    - Set `editor.fontSize` to 16\n" +
                    "\n" +
                    "    - Markdown Preview Enhanced\n" +
                    "    --\"markdown-preview-enhanced.previewTheme\": \"monokai.css\"，\n" +
                    "    --\"markdown-preview-enhanced.mermaidTheme\": \"dark\"\n" +
                    "    - Chinese (Simplified) Language Pack for Visual Studio Code -\n" +
                    "    - Bracket Pair Colorizer\n" +
                    "```\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "- **Java** : [官网](http://www.oracle.com/technetwork/java/javase/downloads/index.html)\n" +
                    "\n" +
                    "```bash\n" +
                    "    #install  一般选择Java8\n" +
                    "    http://www.oracle.com/technetwork/java/javase/downloads/index.html\n" +
                    "```\n" +
                    "\n" +
                    "- **Maven** : [官网](http://maven.apache.org/download.cgi)\n" +
                    "选择`Link`下的`Binary tar.gz archive`\n" +
                    "\n" +
                    "```bash\n" +
                    "    #move to usr local\n" +
                    "    #remove apache-maven version to update\n" +
                    "    sudo mv -f apache-maven /usr/local/\n" +
                    "    #add path \n" +
                    "    export MAVEN_HOME=\"/Applications/maven/bin\"\n" +
                    "    PATH=$PATH:${MAVEN_HOME}\n" +
                    "    #package\n" +
                    "    mvn clean package -Dmaven.test.skip\n" +
                    "    java -jar spring-boot-hello-world-0.0.1-SNAPSHOT.jar\n" +
                    "```\n" +
                    "Config\n" +
                    "```xml\n" +
                    "    <!-- apache-maven/conf/settings.xml -->\n" +
                    "    <localRepository>/Users/vaith/Documents/maven-local-repository</localRepository>\n" +
                    "    <mirror>\n" +
                    "        <id>nexus-aliyun</id>\n" +
                    "        <mirrorOf>*</mirrorOf>\n" +
                    "        <name>Nexus aliyun</name>\n" +
                    "        <url>http://maven.aliyun.com/nexus/content/groups/public</url>\n" +
                    "    </mirror>\n" +
                    "\n" +
                    "    <!-- change sdk version to java 8 -->\n" +
                    "    <profile>\n" +
                    "      <id>jdk-1.8</id>\n" +
                    "      <activation>\n" +
                    "        <activeByDefault>true</activeByDefault>\n" +
                    "        <jdk>1.8</jdk>\n" +
                    "      </activation>\n" +
                    "      <properties>\n" +
                    "        <maven.compiler.source>1.8</maven.compiler.source>\n" +
                    "        <maven.compiler.target>1.8</maven.compiler.target>\n" +
                    "        <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>\n" +
                    "      </properties>\n" +
                    "    </profile>\n" +
                    "```\n" +
                    "\n" +
                    "- **Tomcat** : [官网](https://tomcat.apache.org/download-80.cgi)\n" +
                    "\n" +
                    "```bash\n" +
                    "    cd /Applications/apache-tomcat-8.5.39/bin\n" +
                    "    chmod 777 *.sh\n" +
                    "```\n" +
                    "\n" +
                    "- **IntelliJ IDEA** : [官网](https://www.jetbrains.com/idea/)\n" +
                    "\n" +
                    "```\n" +
                    "    #Plugins\n" +
                    "    - material-theme-ui : https://plugins.jetbrains.com/plugin/8006-material-theme-ui\n" +
                    "    - GsonFormat\n" +
                    "\n" +
                    "    #Setting\n" +
                    "    Preferences - Build, Execution, Deployment - Build Tools - Maven - Maven home directory\n" +
                    "    Preferences - Build, Execution, Deployment - Build Tools - Maven - Runner - JRE\n" +
                    "\n" +
                    "    #Theme\n" +
                    "    Preferences - Appearance & Behavior - Material Custom Theme - Material Darker\n" +
                    "    Preferences - Appearance & Behavior - Material Custom Theme - Separators Color - #ffffff\n" +
                    "\n" +
                    "\n" +
                    "```\n" +
                    "- **有道云词典** : [官网](http://cidian.youdao.com/index-mac.html)\n" +
                    "- **网易云音乐** : [AppStore](https://itunes.apple.com/cn/app/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/id944848654?mt=12)\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "- **SSH**\n" +
                    "\n" +
                    "\n" +
                    "```bash\n" +
                    "#check exist ssh\n" +
                    "ls -al ~/.ssh\n" +
                    "cd ~/.ssh\n" +
                    "open ./\n" +
                    "\n" +
                    "#create SSH key\n" +
                    "ssh-keygen -t rsa -C \"vaithwee@yeah.net\"\n" +
                    "\n" +
                    "#open id_rsa.pub\n" +
                    "```\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "- **IntelliJ IDEA**\n" +
                    "\n" +
                    "```\n" +
                    "-- Material Theme UI --\n" +
                    "-- GsonFormat --\n" +
                    "-- Rainbow Brackets --\n" +
                    "```\n" +
                    "\n" +
                    "- **MySql**\n" +
                    "\n" +
                    "```bash\n" +
                    "#install https://dev.mysql.com/downloads/\n" +
                    "MySQL Community Server 8.0.13\n" +
                    "user: root\n" +
                    "password: abcd1234\n" +
                    "\n" +
                    "# .zshrc 添加路径\n" +
                    "PATH=$PATH:/usr/local/mysql/bin\n" +
                    "\n" +
                    "#jdbc \n" +
                    "https://mvnrepository.com/artifact/mysql/mysql-connector-java\n" +
                    "```\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "- **CocoaPods**\n" +
                    "\n" +
                    "```bash\n" +
                    " gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/\n" +
                    " gem sources -l\n" +
                    " sudo gem install -n /usr/local/bin cocoapods\n" +
                    " pod setup\n" +
                    "```\n" +
                    "\n" +
                    "- **Sketch**\n" +
                    "\n" +
                    "```bash\n" +
                    "sudo codesign -f -s - /Applications/Sketch.app/Contents/MacOS/Sketch\n" +
                    "```\n" +
                    "\n" +
                    "- **Android Studio** [Website](https://developer.android.com/studio)\n" +
                    "\n" +
                    "```bash\n" +
                    "sdk 安卓需要通过代理\n" +
                    "gradle.properties 有个全局配置, 记得注释掉代理\n" +
                    "#systemProp.https.proxyPort=1087\n" +
                    "#systemProp.http.proxyHost=127.0.0.1\n" +
                    "#systemProp.https.proxyHost=127.0.0.1\n" +
                    "#systemProp.http.proxyPort=8001\n" +
                    "```\n";
            }
        }
    }
</script>

<style scoped>
    .content {
        overflow: hidden;
        position: absolute;
        top: 87px;
        bottom: 0;
        right: 0;
        left: 0;
        text-align: left;
        background-color: #f9f9f9;
    }

    .article {
        background-color: white;
        padding: 10px 20px;
        margin-top: 20px;
    }

    .article-title {
        color: #000;
        text-decoration: none;
    }

    .article-subtitle {
        font-size: 14px;
        color: #666;
    }

    .article-subtitle a {
        color: #666;
        border-bottom: 1px dotted #666;
        text-decoration: none;
    }

    .article-cover {
        margin-top: 30px;
    }

    .article-content {
        padding: 10px 10px;
    }
</style>
