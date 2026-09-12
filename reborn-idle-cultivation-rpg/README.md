# Reborn: Idle Cultivation RPG 隐私页面

- 包名：`com.jcgame.feilinggen.global`
- 中文名：开局废灵根，我无敌了
- 开发者：jcgame，邮箱：qijiangyuan@gmail.com
- 更新日期：2026-09-12；游戏受众由用户确认为 13+。
- 隐私政策：https://qijiangyuan.github.io/privacy-policy/reborn-idle-cultivation-rpg/
- 数据删除：https://qijiangyuan.github.io/privacy-policy/reborn-idle-cultivation-rpg/data-deletion.html

## 当前正式包依据

核对 Feilinggen 的存档服务、原生广告桥、最终依赖和 Manifest。

| 项目 | 当前行为 |
| --- | --- |
| 本地存档 | IndexedDB / localStorage；JSON 手动导入导出，无游戏后端 |
| 广告组件 | LevelPlay 9.5.0、Unity Ads Adapter 5.12.0 / SDK 4.20.0、Ad Quality 9.9.0 |
| 本次移除 | AdMob Adapter、Google Mobile Ads SDK、Google UMP；后续接入需重新配置 CMP 并更新政策 |
| 广告选择 | 默认关闭；本机年龄范围为 18+ 且主动开启后，才初始化并预加载；未成年和未知年龄不初始化 LevelPlay |
| 非个性化模式 | LevelPlay GDPR consent=false、CCPA opt-out=true；移除 AD_ID 和 Topics 权限，device-ID opt-out=true |
| 关闭广告 | 丢弃缓存并停止新请求；重启结束已初始化 SDK 会话，不删除第三方历史记录 |
| 年龄和开关 | 只保存在 Android 本机 SharedPreferences，不进入导出存档；不收集出生日期 |
| 不包含 | Firebase Analytics / Crashlytics、登录、内购、订阅、云存档、AppLovin |

本地广告开关不是 TCF CMP，不授予个性化广告同意。没有把拒绝个性化同意解释为“零数据收集”。Unity Ads 官方披露包含用户 ID、购买记录、设备标识、广告互动、位置及诊断等类型；即使没有游戏账号和内购，也不能直接排除广告 SDK 的披露项。最终 Play 申报应按实际 SDK 和后台配置核实。

网站没有跟踪脚本、分析工具或远程字体。中英文同步更新；只提交本游戏目录，保留仓库其他游戏的改动。推送后匿名访问两页确认 HTTP 200 和内容一致，再用于 Play。

## 官方参考

- [Unity Ads 4.20.0 数据披露](https://docs.unity.com/en-us/ads-android/4.20.0/privacy/developer-consent/disclosures/google-data-safety)
- [LevelPlay 数据披露](https://docs.unity.com/en-us/grow/is-ads/legal-resources/google-data-safety-questionnaire)
- [LevelPlay 隐私 API](https://docs.unity.com/en-us/grow/levelplay/sdk/android/regulation-advanced-settings)
- [Unity Ads 同意信号与情境广告](https://docs.unity.com/en-us/ads-android/4.20.0/privacy/developer-consent/consent/consent-communication)
- [Unity 玩家隐私政策](https://unity.com/legal/game-player-and-app-user-privacy-policy)
- [Play 用户数据政策](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)

SDK 实际网络行为及广告后台仍需正式测试验收，政策发布本身不证明广告可展示。
