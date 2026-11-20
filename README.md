# 公司财报图解 · Company Earnings Visual

中文财报图解：每家公司一张以**利润桑基图**为主的长图 + 交互网页，覆盖利润表、现金流、资产负债表、季度趋势，支持一键导出 2160px 高清 PNG。

在线浏览：https://victory0431.github.io/company-earnings-visual/

## 结构

```
index.html            ← 壳：样式、桑基引擎、导航、PNG 导出
sync.js               ← 扫描 companies/ 生成加载清单
bundle.js             ← 打包成可单独分发的单文件 HTML
companies/
  _registry.js        ← addCompany() 注册表
  _index.js           ← 由 sync.js 生成
  _order.txt          ← 导航顺序
  _template.js        ← 新增公司模板
  ali.js  wc.js  msft.js
```

## 新增一家公司

1. 复制 `companies/_template.js` 为 `companies/<id>.js`，改 id / nav / 公司全称 / 代码 / 报告期 / 口径 / 单位；
2. 填 `poster.nodes / links`（只写纵向 y、h 和金额，横向坐标由引擎推导）与 `take / cash / bs / trend / notes / src`；
3. `node sync.js`，刷新即可 —— 导航自动多一个标签。

## 为什么需要 sync.js

浏览器在 `file://` 下不允许读目录或 fetch 本地文件，清单必须预先生成。部署到 Pages 后同理（静态站点没有目录索引）。

## 数据纪律

金额取自公司公告/交易所原文，加总必须闭合；单季倒减、FCF 等推算值在图内与脚注均标注「计算值」。仅供信息参考，不构成投资建议。

## 已收录

| 公司 | 期间 | 来源 |
|---|---|---|
| 阿里巴巴 | 2026 年 9 月季度（FY2027 Q2） | 集团业绩公告 |
| 潍柴动力 | 2026 年前三季度 | 深交所三季报 |
| 微软 | FY2027 Q1（2026 年 7—9 月） | 8-K 附件 99.1 |
