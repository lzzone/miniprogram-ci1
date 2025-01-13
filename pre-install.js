const { execSync } = require("child_process");

function exec(command) {
  execSync(command, {
    cwd: __dirname,
    stdio: "inherit",
  });
}

exec("npm i -g pnpm@9.15.2");
exec("pnpm install --frozen-lockfile");