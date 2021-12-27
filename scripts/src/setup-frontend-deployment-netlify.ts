import { $ } from 'zx';

const netlifySites = {
  dev: 'saas-starter-dev',
  prod: 'saas-starter-prod',
};

await $`netlify logout`;
await $`netlify login`;
await $`netlify --telemetry-disable`;

for (const [alias, siteName] of Object.entries(netlifySites)) {
  await $`netlify sites:create --name ${siteName}`;
}
