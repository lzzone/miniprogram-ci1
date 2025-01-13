const { execSync } = require("child_process");

function exec(command) {
  execSync(command, {
    cwd: __dirname,
    stdio: "inherit",
  });
}

exec("npm install cnpm -g");
exec("pnpm install --frozen-lockfile");