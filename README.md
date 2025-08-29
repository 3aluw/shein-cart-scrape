# 🛒 Shein Shared Cart Scraper

Scrape products from a **Shein shared cart link** programmatically.
This tool extracts the shared `group_id` and `local_country`, then loads the **mobile cart landing page** and retrieves product details (title, price, image, attributes, etc.).

## ✨ Features

* ✅ Resolve Shein’s **sharejump redirect** to the real cart page
* ✅ Works with **mobile-only pages** (m.shein.com)
* ✅ Extract product details:

  * Product title
  * Price
  * Image URL
  * Attributes (e.g., color, size)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/shein-cart-scraper.git
cd shein-cart-scraper
npm install
```

---

## 🚀 Usage

```js
import { getProductsInfo } from "./index.js";

const products = getProductsInfo(cartUrl)
```

Example output:

```json
[
  {
    "title": "Solid Color Round Neck Tee",
    "image": "https://img.ltwebstatic.com/images3_pi/2025/08/29/...",
    "price": "$12.00",
    "attr": "Color: Black, Size: M"
  },
  {
    "title": "High Waist Wide Leg Pants",
    "image": "https://img.ltwebstatic.com/images3_pi/2025/08/29/...",
    "price": "$25.00",
    "attr": "Color: Beige, Size: L"
  }
]
```

---

## 🛠️ Project Structure

```
.
├── index.js        # Exports getProductsInfo (main entry)
├── get-link.js     # Extracts shareId + country and builds cart URL
├── scrape-cart.js  # Navigates cart URL and scrapes product info
├── package.json
└── README.md
```

---

## ⚠️ Notes

* This project is for **educational purposes only**.
* Shein may change their frontend or add new bot detection methods at any time.
* Use responsibly, and respect Shein’s **Terms of Service**.

---

## 📜 License

MIT

