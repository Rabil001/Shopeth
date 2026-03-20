import { execSync } from 'node:child_process';

const message = process.argv.slice(2).join(' ').trim() || 'chore: update Falcon site';

const run = (command) => execSync(command, { stdio: 'inherit' });
const capture = (command) => execSync(command, { encoding: 'utf8' }).trim();

run('git add -A');

const staged = capture('git diff --cached --name-only');
if (!staged) {
  console.log('No staged changes to commit.');
  process.exit(0);
}

run(`git commit -m ${JSON.stringify(message)}`);
run('git push');

console.log('Pushed changes. If Cloudflare is connected to this branch with auto-deploy enabled, a new deployment should start automatically.');
