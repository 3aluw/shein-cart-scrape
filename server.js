// server.js
import express from "express";
import { getProductsInfo } from "./index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ Shein Cart Scraper is running!");
});

// Example endpoint: /scrape?url=...
app.get("/scrape", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "Missing url query param" });

  try {
    const products = await getProductsInfo(url);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
