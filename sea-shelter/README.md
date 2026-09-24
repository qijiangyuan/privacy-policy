# Sea Shelter: Ocean Survival 隐私页面

- 包名：`com.jcgame.seashelter.global`
- 中文名：海上避难所：海洋求生
- 开发者及联系邮箱：沿用本仓库 jcgame / qijiangyuan@gmail.com
- 生效及更新日期：2026-09-24
- 隐私政策：https://qijiangyuan.github.io/privacy-policy/sea-shelter/
- 数据删除：https://qijiangyuan.github.io/privacy-policy/sea-shelter/data-deletion.html
- 兼容入口：privacy-policy.html 跳转到目录首页

## 实现依据

核对 SeaShelter2 当前 Android Gradle、Manifest、NativeSdkServices、PrivacyCoordinator、AnalyticsConsentPolicy，以及 WebView 本地存档服务。

- 自定义 Android WebView / Three.js，非 Unity Player。
- LevelPlay mediation-sdk 9.5.0；Firebase BoM 34.19.0 / Analytics；Google UMP 4.0.0。
- 当前未提供正式 SDK 配置；广告展示桥仍未启用。政策以服务实际启用为条件披露，未承诺现在可以播放广告。
- 统计在地区状态未确定时关闭；无需事先同意地区解析成功后默认开启；需要同意地区遵循返回的统计选择。广告用途独立处理，不能将 canRequestAds 当作统计同意。
- 隐私入口仅在 UMP 要求时出现，未宣称有全地区统一关闭统计开关。
- 本地存档，无游戏账号和云存档后端；没有启用 Billing、Crashlytics，也未加入额外广告网络 adapter。不要照抄其他项目中的订阅、Unity IAP 或 Unity Ads 网络 SDK 声明。
- 没有把其他游戏的 13+ 定位或年龄门槛移植过来；正式商店受众选择须与最终产品一致。
- 页面为静态中英文，沿用 SeaSurvival 视觉样式，但独立路径与包名；没有 JS、远程字体、统计脚本或表单收集。

后续新增广告网络、账号、支付、云存档或其他 SDK 时，需同步更新政策与 Play Data safety。Firebase 保留期与后台消息、网络数据处理应在最终配置后核对；没有在页面中虚构固定服务商保留期。

## 官方资料

- https://support.google.com/firebase/answer/6318039?hl=en
- https://firebase.google.com/support/privacy
- https://docs.unity.com/en-us/grow/is-ads/legal-resources/google-data-safety-questionnaire
- https://developers.google.com/admob/android/privacy
- https://unity.com/legal/game-player-and-app-user-privacy-policy

上述资料核对日期：2026-09-24。SDK 配置完成后，仍须进行地区同意和实际网络行为验证。
