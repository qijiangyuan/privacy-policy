# Reborn: Idle Cultivation RPG 隐私页面

- 应用包名：`com.jcgame.feilinggen.global`
- 中文名：开局废灵根，我无敌了
- 英文名：Reborn: Idle Cultivation RPG
- 开发者展示名及联系邮箱沿用同仓库政策：jcgame / qijiangyuan@gmail.com
- 政策目录：`reborn-idle-cultivation-rpg/`；正文在 `index.html`，`privacy-policy.html` 为兼容入口。
- 数据删除页：`data-deletion.html`；独立的 `legal.css` 无远程资源或脚本。

GitHub Pages 地址：

- 隐私政策：`https://qijiangyuan.github.io/privacy-policy/reborn-idle-cultivation-rpg/`
- 数据删除：`https://qijiangyuan.github.io/privacy-policy/reborn-idle-cultivation-rpg/data-deletion.html`

## 写作依据（2026-09-12）

核对了 `Feilinggen` 的保存服务、导入导出界面、广告桥、Android Manifest 和 Gradle 依赖。

| 项目 | 本次写作依据 |
| --- | --- |
| 存档 | 本地 IndexedDB / localStorage；JSON 导入导出及导入前备份；无游戏后端 |
| 奖励广告 | LevelPlay 9.5.0，AdMob Adapter 5.13.0 / Google Next-Gen 1.3.1，Unity Ads Adapter 5.12.0 / SDK 4.20.0 |
| 其他广告组件 | LevelPlay 间接依赖 Ad Quality 9.9.0 |
| 隐私同意 | UMP 4.0.0；允许请求后初始化和预加载；需要时提供隐私选项入口 |
| 不包含 | Firebase Analytics / Crashlytics、Google Play Games 登录、内购、订阅、云存档、AppLovin |
| 删除 | Android 清除存储；导出文件单独删除；客服及第三方记录另外申请 |

儿童段落没有推定用户尚未确认的目标年龄，也没有把商店评级当作数据处理同意。发布应用前仍需确认目标年龄，并使 Play、广告后台和原生年龄配置一致。不得仅因完成政策而把 `audienceConfirmed` 改为 true。

Unity Ads Android 4.20.0 的官方数据安全表还将个人标识符（Play 表中的用户 ID）和购买记录列为收集及共享；正文已纳入这些 SDK 数据类型。游戏没有注册或内购功能，不能据此直接排除广告 SDK 的披露项。其官方表将应用使用时长采集与后台 Acquire Optimization 设置关联；LevelPlay 自身则将广告互动列为“其他操作”，申报需合并所有实际使用的 SDK。

推送到 `main` 后由仓库的 GitHub Pages 配置发布。发布或更新后，应匿名访问上述两个地址，确认返回成功且内容与本次提交一致，再用于 Google Play 或本应用 `android/release.properties` 的 `privacyPolicyUrl`。政策发布不代表应用广告配置已完成；AdMob App ID、受众配置、后台实例、隐私消息和真机行为需另行验收。

## 官方参考

- [Google Next-Gen SDK 数据披露](https://developers.google.com/admob/android/next-gen/privacy/play-data-disclosure?hl=en)
- [Unity Ads Android 4.20.0 数据安全披露](https://docs.unity.com/en-us/ads-android/4.20.0/privacy/developer-consent/disclosures/google-data-safety)
- [LevelPlay 数据安全披露](https://docs.unity.com/en-us/grow/is-ads/legal-resources/google-data-safety-questionnaire)
- [Unity 玩家隐私政策](https://unity.com/legal/game-player-and-app-user-privacy-policy)
- [Google 隐私政策](https://policies.google.com/privacy)
- [Play 用户数据政策](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)
- [GitHub 隐私声明](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)

中英文应一起更新，尤其是广告网络、年龄处理、数据用途与保存期限。不要直接复制其他游戏的支付、登录、分析工具或已实现隐私开关描述。
