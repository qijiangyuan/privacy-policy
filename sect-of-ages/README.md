# Cultivation Sim: Sect of Ages / 一宗千秋

- Android 包名：`com.jcgame.cultivationsim.global`
- 开发者和隐私联系：沿用仓库 `jcgame` / `qijiangyuan@gmail.com`
- 生效和更新日期：2026-10-03
- 隐私政策：https://qijiangyuan.github.io/privacy-policy/sect-of-ages/
- 数据删除：https://qijiangyuan.github.io/privacy-policy/sect-of-ages/data-deletion.html
- 兼容入口：`privacy-policy.html` 跳转至目录首页

## 内容依据

核对 `C:/CodexProjects/zongmen-web3d` 当前源代码、Android Manifest、Gradle、Firebase/LevelPlay 插件和本地存档/导出逻辑。页面沿用仓库 Sea Shelter 的版式和联系方式，独立目录，未改动其他游戏页面。

- 玩法存档、三槽备份、宗门名和弟子名在本机；没有游戏账号或开发者运营的云存档服务器。
- 存档/摄影可主动导出，Android 文档提供商和系统备份可能涉及用户选择的云服务。Manifest 当前允许 Android backup。
- LevelPlay 9.5.0、Ad Quality 9.10.0、AdMob adapter 5.15.0、Google Mobile Ads Next-Gen 1.5.0、UMP 4.0.0；未照抄其他游戏的 Unity Ads 网络 adapter、AppLovin、内购或订阅声明。
- Firebase BoM 34.19.0 / Analytics 23.2.0，项目 `cultivation-sim-sect-of-ages`。采集受 UMP 分用途同意状态控制；未集成 Crashlytics。
- 自定义事件发送面板类型、计数、等级和固定功能 ID，不发送存档全文、自定义宗门/弟子名字或玩家账号 ID。SDK 标识符是可识别或假名化数据，未声称完全匿名。
- 真实广告收益由 LevelPlay impression 回调进入 Analytics，奖励数量不作为收益。
- 地区状态未知时暂停统计；需要同意地区按统计选择开启；本次成功确认无需同意时默认开启，明确拒绝不被覆盖。刷新失败可沿用有效既有选择；`canRequestAds` 不等于全部用途同意。
- 游戏“广告隐私选项”仅在 UMP 要求时显示，没有虚构所有地区均可用的统一关闭开关。
- 受众年龄尚未由本任务确认，未从其他游戏复制“13+”或声称已实现年龄门槛。发布方应在 Play 受众及 SDK 配置中落实实际年龄要求。
- 支持往来和供应商保留按目的、配置及法律要求处理，不虚构固定保留天数；清除本地数据不保证删除历史 SDK 数据。
- 静态中英文页面、共享本地 CSS，无 JS、分析代码、表单、远程字体或 cookie 同意横幅。GitHub 托管请求可能处理 IP 地址，已披露。

网页发布不证明广告填充、UMP 地区流程或 Firebase 后台实际收数已通过设备验收。商店 Data safety 仍应按最终版本和广告后台配置完成。

## 官方资料（2026-10-03 核对）

- https://support.google.com/firebase/answer/6318039?hl=en
- https://firebase.google.com/support/privacy
- https://developers.google.com/admob/android/next-gen/privacy/play-data-disclosure
- https://developers.google.com/funding-choices/fc-sdks
- https://docs.unity.com/en-us/grow/is-ads/legal-resources/google-data-safety-questionnaire
- https://unity.com/legal/game-player-and-app-user-privacy-policy
- https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
