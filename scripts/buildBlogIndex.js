const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../public/content/blog");
const outputFile = path.join(blogDir, "index.json");

try {
  const files = fs.readdirSync(blogDir);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));

  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));

  console.log("✅ Blog index created:", posts.length, "posts");
} catch (err) {
  console.error("❌ Error building blog index:", err);
}