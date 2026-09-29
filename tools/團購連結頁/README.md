# 團購連結頁（好事丞雙｜團購選物）

給粉絲點的個人團購網站：自我介紹＋團購清單（類似 Linktree，但風格自己決定、資料自己管理）。

## 特色

- **會自動下架**：每筆團購可以設定截止日 `end`，日期一到會自動從「進行中」移到「已結束」，連結自動失效，不用手動刪。
- **會自動預告**：可以設定開賣日 `start`，還沒到會顯示在「即將開團」並倒數天數。
- **連結還沒填也沒關係**：`url` 留空時按鈕會顯示「連結準備中」，不會讓粉絲點到空連結。
- **不用碰程式碼**：日常只要改 `data.js`（團購清單）跟 `profile.js`（頭像、簡介、社群連結）兩個檔案。

## 怎麼新增/修改團購

打開 [`data.js`](./data.js)，在 `GROUP_BUYS` 陣列裡新增一個物件，例如：

```js
{
  title: "秋冬保暖外套團",
  desc: "親子同款，S~4XL 都有",
  image: "assets/coat.jpg",
  url: "https://your-shop-link.com/xxx",
  tag: "服飾",
  start: "",           // 已經開賣就留空
  end: "2026-10-15"    // 10/15 之後會自動移到「已結束」
}
```

也可以直接跟 Claude 說「幫我加一個團購，名稱是 XXX，連結是 XXX，10/15 截止」，它會幫妳改好這個檔案。

圖片放進 [`assets/`](./assets) 資料夾，`image` 欄位填檔名，例如 `"assets/coat.jpg"`（沒有圖片也沒關係，會顯示預設圖示）。

## 怎麼改頭像/簡介/社群連結

打開 [`profile.js`](./profile.js) 修改 `intro`（自我介紹段落）、`promises`（開團原則標籤）、`avatar`（頭像）、`links`（FB 粉絲頁／社團連結，填了才會顯示）。

## 怎麼改配色/風格

打開 [`style.css`](./style.css) 最上面的 `:root` 變數區塊，改 `--color-accent` 等顏色即可全站套用。想要完全不同的風格，直接跟 Claude 說想法（例如「想要粉色系、更活潑一點」），讓它幫忙調整。

## 本機預覽

直接用瀏覽器打開 `index.html` 就能看（不需要架伺服器）。

## 部署上線（網址）

正式網址：https://chengshuang1025.github.io/cheng-shuang-tools/

- 已設定 GitHub Actions（`.github/workflows/deploy-groupbuy.yml`）：`tools/團購連結頁` 有改動、push 到 GitHub 後，約 1 分鐘自動更新網站。
- 團購的「進行中／即將開團／已結束」是打開網頁當下即時判斷的，不用每天重新發布。
- 這個網站只放團購；品牌教材的 Link-in-bio 網站是另一個 repo（cheng-shuang），兩者分開管理。
