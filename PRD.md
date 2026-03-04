# CPM Calculator — 产品需求文档

## 项目信息

| 项 | 值 |
|---|---|
| 域名 | cpmcalculator.one |
| 技术栈 | Next.js (App Router) + TypeScript + Tailwind CSS |
| 核心关键词 | cpm calculator |
| 网站语言 | 英文 |
| 页面类型 | 单页工具站 |

---

## 一、设计规范

### 配色（Apple 风格，支持明暗模式 `prefers-color-scheme`）

| 变量 | 浅色 | 深色 | 用途 |
|------|------|------|------|
| bg | #FFFFFF | #1D1D1F | 页面背景 |
| surface | #F5F5F7 | #2D2D2F | 卡片背景 |
| primary | #0071E3 | #2997FF | 按钮、链接、焦点环 |
| primary-hover | #0077ED | #40A9FF | 按钮悬停 |
| text-1 | #1D1D1F | #F5F5F7 | 标题、正文 |
| text-2 | #6E6E73 | #A1A1A6 | 辅助文字 |
| border | #D2D2D7 | #424245 | 边框、分割线 |
| success | #34C759 | #30D158 | 成功状态 |
| error | #FF3B30 | #FF453A | 错误提示 |

### 基础样式

- 字体：`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- 圆角：卡片 12px，输入框/按钮 10px
- 动画：200ms ease
- 阴影（卡片）：`0 2px 12px rgba(0,0,0,0.08)`

### 响应式

| 断点 | 内容区 | 计算器卡片 | 板块间距 |
|------|--------|-----------|---------|
| ≥1024px | max 720px 居中 | 560px 居中 | 64px |
| 768–1023px | 90vw | 100% | 48px |
| <768px | 100%, padding 0 20px | 100%, 圆角改 8px | 32px |

移动端补充：H1 28px / H2 22px / body 16px，触摸目标 ≥44px

---

## 二、页面结构与内容

> 以下每个板块的英文文案即为页面最终展示内容，开发可直接使用。

```
[H1] hero
 ├─ [H2] What Is CPM?
 ├─ [H2] How to Calculate CPM
 ├─ [H2] CPM Calculator            ← ★ 核心计算器（交互详见第三节）
 ├─ [H2] CPM Formula Explained
 ├─ [H2] Why Use a CPM Calculator?
 ├─ [H2] CPM vs CPC vs CPA
 ├─ [H2] Tips to Lower Your CPM
 ├─ [H2] Frequently Asked Questions ← 手风琴折叠 + FAQPage JSON-LD
 └─ Footer
```

---

### H1 + Hero

**H1:** CPM Calculator — Calculate Your Cost Per Mille Instantly

**Hero 段落：**
Quickly compute your CPM, total ad spend, or impressions with this free online CPM calculator. Enter any two values and get the third instantly — no sign-up required.

---

### What Is CPM?

CPM stands for Cost Per Mille — "mille" is Latin for one thousand. It tells you how much an advertiser pays for every 1,000 ad impressions.

CPM is the standard pricing model for display advertising, programmatic media buying, and social media campaigns. Whether you run ads on Google Display Network, Meta, TikTok, or any programmatic DSP, CPM is the metric you will use to measure and compare costs.

Average display CPMs typically range from $1 to $10, though premium placements and highly targeted audiences can push that number well above $20.

---

### How to Calculate CPM

Calculating CPM is straightforward:

1. Take your **total ad spend** — for example, $500.
2. Take the **total number of impressions** your campaign delivered — for example, 200,000.
3. Divide ad spend by impressions, then multiply by 1,000.

**Example:** You spent $500 and received 200,000 impressions.
CPM = ($500 ÷ 200,000) × 1,000 = **$2.50**

That means you paid $2.50 for every 1,000 times your ad was shown.

---

### CPM Calculator

> 交互计算器，详见第三节。

---

### CPM Formula Explained

There are three ways to use the CPM formula, depending on which value you need to find:

- **Find CPM:** CPM = (Total Ad Spend ÷ Impressions) × 1,000
  Use this when you have your spend and impression data and want to know your effective CPM.

- **Find Total Ad Spend:** Total Ad Spend = CPM × (Impressions ÷ 1,000)
  Use this when planning a budget — you know the CPM rate and want to estimate how much a campaign will cost.

- **Find Impressions:** Impressions = (Total Ad Spend ÷ CPM) × 1,000
  Use this to forecast reach — you have a fixed budget and want to know how many impressions you can expect.

---

### Why Use a CPM Calculator?

- **Budget planning** — Estimate how many impressions your budget can buy before you launch a campaign.
- **Performance benchmarking** — Compare CPMs across platforms like Google, Meta, and TikTok to see where your money goes furthest.
- **Rate negotiation** — Walk into publisher meetings with hard numbers so you can negotiate better deals.
- **Cross-channel comparison** — Normalize costs from campaigns that use different pricing models (CPC, CPA) into a single CPM metric.

---

### CPM vs CPC vs CPA

| Metric | Full Name | You Pay For | Best For |
|--------|-----------|-------------|----------|
| CPM | Cost Per Mille | Every 1,000 impressions | Brand awareness and reach |
| CPC | Cost Per Click | Each click on your ad | Driving traffic and leads |
| CPA | Cost Per Acquisition | Each conversion or action | Direct-response performance |

Choose CPM when your goal is maximum visibility. If you need clicks, lean toward CPC. If you are optimizing for sales or sign-ups, CPA gives you the tightest control over return on ad spend.

---

### Tips to Lower Your CPM

1. **Narrow your audience** — Hyper-specific targeting often faces less competition, which drives costs down.
2. **Improve your creatives** — Platforms reward high-engagement ads with lower delivery costs.
3. **Test multiple placements** — Feed ads, Stories, and in-stream video can have vastly different CPMs.
4. **Use automated bidding** — Let the platform optimize delivery for impressions at the lowest cost.
5. **Run during off-peak hours** — Ad inventory prices fluctuate by time of day and season.
6. **Set frequency caps** — Stop paying to show the same user your ad dozens of times.

---

### Frequently Asked Questions

> 使用手风琴折叠组件，同时输出 FAQPage JSON-LD 结构化数据。

**Q: What does CPM stand for?**
CPM stands for Cost Per Mille. "Mille" is Latin for one thousand, so CPM is the cost an advertiser pays for every 1,000 ad impressions.

**Q: What is a good CPM?**
It depends on your industry and platform. Display ads typically see $1–$5. Social media CPMs run $5–$15. Premium or niche audiences can push CPMs above $20.

**Q: How is CPM different from eCPM?**
CPM is the price the advertiser sets or pays. eCPM (effective CPM) is a publisher-side metric that converts revenue from any pricing model (CPC, CPA, etc.) into a per-1,000-impression figure for easier comparison.

**Q: Can I use this calculator for video ads?**
Yes. The CPM formula works the same way for display, video, native, and audio ads. Just enter your total spend and total impressions.

**Q: Is CPM the same as CPT?**
Yes. CPT stands for Cost Per Thousand — it is the English translation of CPM. They mean exactly the same thing.

---

### Footer

- 版权：© 2025 cpmcalculator.com
- 链接：Privacy Policy / Terms of Service（占位页面）
- 不放外部链接，保留链接权重

---

## 三、核心计算器 — 交互规格

### 输入字段

| 字段名 | 标签 | 占位符 | 单位 | 格式 |
|--------|------|--------|------|------|
| totalCost | Total Ad Spend | e.g. 500 | $ | 2 位小数 |
| impressions | Total Impressions | e.g. 200000 | — | 整数 |
| cpm | CPM Result | e.g. 2.50 | $ | 2 位小数 |

### 公式

```
cpm         = (totalCost / impressions) * 1000
totalCost   = (cpm * impressions) / 1000
impressions = (totalCost / cpm) * 1000
```

### 交互规则

| # | 场景 | 行为 |
|---|------|------|
| 1 | 有值字段 < 2 | 不计算、不报错 |
| 2 | 有值字段 = 2 | 实时算出第三个字段 |
| 3 | 有值字段 = 3，用户改了某个 | 重算上一次被自动填充的那个字段 |
| 4 | 输入非正数 | 字段下方显示 error 色提示 |
| 5 | 被自动计算的字段 | 浅 primary 底色高亮标识 |
| 6 | 点击 Reset | 清空全部字段和状态 |

### 计算结果建议

计算完成后，在计算器卡片下方显示建议卡片，包含两部分：**① CPM 评级 + 优化建议** 和 **② 行业 CPM 基准参考表**。

新增一个 warning 色用于"Average"评级：浅色 #FF9500 / 深色 #FF9F0A。

#### ① 评级与建议

> 以下评级区间和建议文案基于 2025–2026 年多平台行业基准数据：
> Google Display 均值 $2.5–$3、Meta/Facebook $7–$20、Instagram $6–$11、TikTok $4–$9、YouTube $6–$12、LinkedIn $31–$65。
> 数据来源：Pixis、Varos、WebFX、Superads、Gupta Media、eMarketer 等。

| CPM 范围 | 评级 | 颜色 | 建议文案 |
|----------|------|------|---------|
| < $3 | Low | success | Your CPM is well below most platform averages. This is typical for Google Display Network or broad programmatic campaigns. Make sure impressions are reaching quality placements — low CPM can sometimes mean low-value inventory. Consider scaling budget while this rate holds. |
| $3–$10 | Average | warning | Your CPM falls within the typical range for most social media platforms like TikTok ($4–$9) and YouTube ($6–$12). To push it lower, test Reels or Stories placements which tend to run 10–30% cheaper than feed ads, and experiment with automated bidding strategies. |
| $10–$25 | Above Average | warning | Your CPM is in line with premium social placements — Meta ads in Tier 1 markets average $10–$20, and Instagram premium placements can reach $23. Focus on creative quality to improve relevance scores, A/B test ad formats, and consider shifting top-of-funnel spend to lower-CPM channels like TikTok or Google Display. |
| $25–$50 | High | error | Your CPM is at the level of LinkedIn B2B campaigns ($31–$65) or Connected TV ($25–$35). If you are not running B2B or CTV, review your targeting — overly narrow audiences and premium placements inflate costs. Broaden targeting slightly and let platform algorithms optimize delivery. |
| > $50 | Very High | error | Your CPM exceeds most industry benchmarks. Only LinkedIn in competitive sectors (SaaS/Tech) and premium CTV regularly hit this range. Diversify to lower-CPM platforms for awareness, reserve high-CPM channels for bottom-of-funnel conversion only, and leverage Q1 seasonality when CPMs drop 20–30% from Q4 peaks. |

#### ② 行业 CPM 基准参考表

评级卡片下方展示一个可折叠的参考表（默认收起，点击展开），标题为 **"CPM Benchmarks by Platform (2025–2026)"**：

| Platform | Typical CPM | Notes |
|----------|-------------|-------|
| Google Display Network | $2.50–$3.12 | Cheapest major platform |
| TikTok | $4.00–$9.16 | ~30% cheaper than Meta, gap closing |
| YouTube | $6.00–$12.00 | Varies by niche and format |
| Facebook / Meta | $7.47–$19.81 | Wide range; Q4 peaks +25–66% |
| Instagram | $6.25–$10.81 | Stories cheaper than Feed |
| LinkedIn | $31.00–$65.00 | B2B premium; 6.1% conversion rate |
| Programmatic (open exchange) | $1.00–$5.00 | Standard display only |
| Connected TV | $25.00–$60.00 | Premium video format |

**交互细节：**

- 仅当 CPM 值被计算出或用户手动输入 CPM 后才显示
- 点击 Reset 时同步隐藏
- 建议卡片样式：surface 背景，12px 圆角，与计算器卡片同宽，间距 16px
- 评级标签：对应颜色的 pill badge，显示在建议文案左侧
- 基准参考表默认收起，用户点击可展开

### 卡片布局

- 页面居中，max-width 560px
- surface 背景 + 12px 圆角 + 卡片阴影
- 字段纵向排列，间距 16px
- Reset 按钮：描边样式，右对齐
- 建议卡片紧跟计算器卡片下方，间距 16px

---

## 四、SEO

| 项 | 值 |
|---|---|
| title | CPM Calculator — Free Online Cost Per Mille Calculator |
| description | Calculate your CPM, total ad spend, or impressions instantly with this free CPM calculator. Enter any two values and get the third — no sign-up needed. |
| canonical | https://cpmcalculator.com |
| OG | title + description + url + type:website + image |
| Twitter | summary_large_image |
| 结构化数据 | WebApplication + FAQPage（JSON-LD） |
| 技术 | SSR/SSG、语义化 HTML、`lang="en"`、sitemap.xml、robots.txt |

**关键词变体（自然融入，不堆砌）：**
cpm calculator / cost per mille calculator / calculate cpm / cpm formula / what is cpm / online cpm calculator / free cpm calculator

---

## 五、性能与无障碍

| 指标 | 目标 |
|------|------|
| Lighthouse 四项 | ≥ 95 |
| LCP / FID / CLS | < 2.5s / < 100ms / < 0.1 |
| 首屏 JS | < 100KB |
| 计算 | 纯客户端，零 API |
| 无障碍 | WCAG 2.1 AA，键盘可操作，label 关联，对比度 ≥ 4.5:1 |
