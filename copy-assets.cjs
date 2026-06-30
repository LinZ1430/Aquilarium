// Copy custom static assets to public/
const fs = require("fs");
const path = require("path");
const files = ["aquilarium-logo_3.png"];
for (const f of files) {
  const src = path.join(__dirname, "static", f);
  const dest = path.join(__dirname, "public", "static", f);
  if (fs.existsSync(src)) fs.copyFileSync(src, dest);
}
