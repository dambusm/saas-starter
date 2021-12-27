import { randomBytes, randomUUID } from 'crypto';
import { $ } from 'zx';

const herokuApps = {
  dev: 'saas-starter-dev',
  prod: 'saas-starter-prod',
};
const buildpacks = [
  'heroku/nodejs',
  'https://github.com/heroku/heroku-buildpack-multi-procfile',
];
const envVariables = [
  'PROCFILE=backend/Procfile',
  `DIRECTUS_KEY=${randomUUID()}`,
  `DIRECTUS_SECRET=${randomBytes(256).toString('hex')}`,
];
const addons = [
  'heroku-postgresql:hobby-dev',
  'mailgun:starter',
  'heroku-redis:hobby-dev',
];

await $`heroku login`;

for (const [alias, name] of Object.entries(herokuApps)) {
  await $`heroku apps:create ${name} --region eu`;
  await $`heroku config:set -a ${name} BACKEND_STAGE=${alias}`;
  for (const variable of envVariables) {
    await $`heroku config:set -a ${name} ${variable}`;
  }
  await $`heroku git:remote -a ${name} -r ${alias}`;
  for (const buildpack of buildpacks) {
    await $`heroku buildpacks:add -a ${name} ${buildpack}`;
  }
  for (const addon of addons) {
    await $`heroku addons:create ${addon} -a ${name} --wait`;
  }
}
