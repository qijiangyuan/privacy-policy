# Wuxia Dice: Roguelike RPG / 骰定江湖

- Android 包名：`com.jcgame.wuxiadice.global`
- 开发者及隐私联系：沿用仓库 `jcgame` / `qijiangyuan@gmail.com`
- 生效及更新日期：2026-10-10
- 隐私政策路径：`https://qijiangyuan.github.io/privacy-policy/wuxia-dice/`
- 数据删除路径：`https://qijiangyuan.github.io/privacy-policy/wuxia-dice/data-deletion.html`
- `privacy-policy.html` 兼容入口跳转到目录首页。

## 内容依据

核对 `D:/Work/CZSaidingjianghu/Web` 当前 Vue / Capacitor Android 源码，以及 2026-10-10 构建的 `0.11.2` / versionCode `3` AAB 的 Manifest、BuildConfig 和校验记录。页面参考同仓库 Dice Tails 的布局，以及 Jade Cultivation、Sect of Ages 的按实际服务状态披露方式。

- 游戏无玩家账号、开发者云存档、在线排行榜或聊天；普通 / 硬核存档、Meta 成就、奖励领取记录和启动接受标记保存在本地。音量 / 静音仅在当前会话生效，政策未把它们描述为持久存储。
- Manifest 允许 Android 系统备份，因此没有把“本地保存”写成“数据永不离开设备”，删除步骤同时说明系统备份可能保留和恢复副本。
- LevelPlay 9.6.0、Unity Ads adapter 5.11.0、Unity Ads SDK 4.19.0；没有照抄其他游戏的 AdMob、UMP、IAP、订阅或额外广告网络声明。
- 启动隐私提示接受后才调用游戏的 SDK 初始化；拒绝则退出。广告可预加载，选择不观看某次激励广告不等于关闭广告服务。
- 当前没有独立的应用内隐私选项 / 撤回入口；政策说明 Android 广告控制、清除存储重置启动接受记录、卸载和服务商请求渠道，没有虚构设置入口。
- 当前发送 GDPR consent=false / CCPA opt-out=true / COPPA=false；用户已明确游戏非面向儿童。拒绝个性化广告不代表投放和衡量服务完全不处理数据。
- 首发 AAB 的 `FIREBASE_CONFIGURED=false`，用户明确选择暂时关闭 Analytics / Crashlytics。未来启用 Firebase 的条款明确为条件性披露，并要求启用前更新告知及相应控制，没有声称当前收集 Firebase 事件或崩溃报告。
- 不把 SDK 标识符描述成完全匿名数据，不承诺固定服务商保留天数，不声称清除本地存档可以删除服务商持有的历史记录。
- 静态中英文页面、共享本地 CSS，无 JS、分析脚本、远程字体、表单或追踪像素；GitHub Pages 的访问者 IP 处理单独披露。

## 发布与应用接入

GitHub Pages 从 `main` 分支的仓库根目录发布。页面文件位于 `wuxia-dice/`；提交到发布分支后，核对隐私政策和数据删除网址返回 HTTP 200，并确认页面标题与包名对应本游戏。

当前 AAB 的启动提示和游戏界面尚未包含完整政策链接。网页发布后，应用内需接入可访问的政策入口并重新构建，同时修正启动提示中的音量持久保存表述、明确当前 Firebase 关闭状态；Play Console 的隐私政策 URL 和 Data safety 也应依据最终包与实际广告后台配置填写。政策页面本身不会增加 CMP、地区同意或撤回功能，也不能代替需要时的相应实施。

官方资料及逐项核对见 [research-notes.md](./research-notes.md)。
