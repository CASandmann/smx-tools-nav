import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist-lib");

const token = process.env.NPM_TOKEN;
if (!token) {
  console.error("NPM_TOKEN environment variable is not set");
  process.exit(1);
}

const npmrcPath = path.join(distDir, ".npmrc");
fs.writeFileSync(npmrcPath, `//registry.npmjs.org/:_authToken=${token}\n`);

try {
  const result = execSync("npm publish", {
    cwd: distDir,
    stdio: "inherit",
  });
} finally {
  fs.unlinkSync(npmrcPath);
}
