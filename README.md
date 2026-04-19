# Jeff Liu | Personal Website

這個 Repository 包含了 Jeff Liu 的個人靜態作品集網站，專為展示動態影像、平面攝影、混音工程等跨領域專案而設計。

網站採用「草綠色」搭配「液態玻璃 (Glassmorphism)」的現代化視覺風格，並針對電腦與手機等各種不同裝置設定了最佳化的格線介面 (Responsive Grid Layout)。

🌍 **Live Demo:** [https://haohao-0725.github.io/My_Profile/](https://haohao-0725.github.io/My_Profile/)

---

## 🛠 Tech Stack (技術堆疊)

這個專案為了確保未來維護的**極度輕量化**與**高相容性**，刻意避開了如 React / Vue / Vite 等需要前端打包工具的框架，完全採用原生的網頁技術進行開發：

*   **HTML5**: 語意化標籤與原生網格結構
*   **Vanilla CSS3**: 
    *   利用 CSS Variables (自訂變數) 管理所有色彩與標準間距。
    *   使用 `backdrop-filter` 實作效能極佳的毛玻璃與液態玻璃背景特效。
    *   使用 CSS Grid 與 Flexbox 處理 RWD。
*   **Vanilla JavaScript**: 
    *   採用 `IntersectionObserver` 實作精簡流暢的頁面滾動載入動畫 (Scroll Reveal Animation)
*   **Deployment**: GitHub Pages (純靜態部署)

---

## 🤖 Guide for Future AI Agents (給未來 Agent 的維護指南)

如果你是未來接手這個專案的 AI Assistant，請遵守以下開發規範：

1.  **純靜態架構維持**：這個專案沒有 `package.json` 且完全不需要 `npm` 或打包工具，**請絕對不要嘗試引入 Webpack, Vite 或是任何需要編譯的 JavaScript 函式庫**。若需新增功能，請將自訂的 JS 邏輯寫進 `main.js`。
2.  **CSS 設計系統**：
    *   主要顏色定義在 `style.css` 頂部的 `:root` 變數中，修改核心顏色請直接調整這些變數。
    *   所有卡片與浮動區塊都應統一使用預設寫好的 `.glass-panel` 通用 class 來維持統一的毛玻璃風格。
3.  **頁面結構原則**：首頁 (`index.html`) 只作為總覽與導航用途；個別經驗與詳細的工作內容有建立對應的獨立次頁面 (`video.html`, `audio.html`, `lotus.html` 等)。若要新增經驗類別，請複製一份既有的 HTML 次頁面模板。
4.  **影片嵌入響應式處理**：若需嵌入 YouTube 影片，請維持使用 `<div class="video-container">` 將 `<iframe>` 包裹起來，CSS 內部已為其實踐好 16:9 的響應式寬度機制。

## 👨‍💻 聯絡方式

*   Email: haohaoliu0725@gmail.com
*   Instagram: [@_haohao_2003__](https://www.instagram.com/_haohao_2003__/)
*   Copyright © 2026 Jeff Liu. 網站內所有原創設計與標誌皆受版權保護。
