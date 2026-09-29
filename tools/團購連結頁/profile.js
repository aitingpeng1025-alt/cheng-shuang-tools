/**
 * 個人頁面設定（自我介紹、頭像、社群連結）
 * ------------------------------------------------------------
 * 跟團購資料分開放，想改自我介紹只要改這個檔案。
 * 文字裡想換行，直接用 \n。
 */

const PROFILE = {
  brand: "好事丞雙",
  name: "好事丞雙",               // 頁面上的大標題（不放真名）
  title: "用插畫玩手作",
  tagline: "設計獅媽媽的團購選物",

  // 頭像：把照片放進 assets/ 資料夾，填檔名，例如 "assets/avatar.jpg"。
  // 沒填會顯示「丞」字圓章。
  avatar: "assets/avatar.jpg",

  // 自我介紹（每一項是一段；\n 是換行，想在哪裡斷句就放在哪裡）
  intro: [
    "我是好事丞雙的設計獅媽媽\n喜歡嘗試做料理，但不拿手\n拿手的是在桌上畫圖、跟孩子玩桌遊",
    "這裡的每一樣商品\n都是我們家用過、也真的在使用的\n有雷，就不上架"
  ],

  // 開團原則（顯示成小標籤，可自行增減）
  promises: [
    { icon: "🏠", text: "自家真的在用" },
    { icon: "🙅‍♀️", text: "有雷就不上架" },
    { icon: "🧺", text: "生活實用為主" }
  ],

  // IG 會以按鈕顯示在自我介紹下方
  instagram: {
    handle: "@cheng.shuang1025",
    url: "https://www.instagram.com/cheng.shuang1025"
  },

  // 其他社群（選填）：url 留空就不會顯示
  // icon 可用：facebook、group、threads、line、youtube
  links: [
    { label: "FB 粉絲頁", url: "", icon: "facebook" },
    { label: "FB 社團", url: "", icon: "group" }
  ]
};
