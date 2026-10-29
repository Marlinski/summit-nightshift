const express = require("express");
const _ = require("lodash");
const app = express();
app.get("/health", (req, res) => res.json({ ok: true }));
app.get("/cart", (req, res) => res.json(_.merge({ items: [] }, req.query)));
app.listen(3000);
