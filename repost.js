
// https://docs.bsky.app/docs/get-started
import assert from 'node:assert';
import { login } from './login.js';
import { getPostInfoFromUrl } from './post-info.js';

assert(process.env.BLUESKY_REPOST_URL);

const agent = await login();

const result = await getPostInfoFromUrl(agent, process.env.BLUESKY_REPOST_URL);
console.log(result);

const { uri, cid } = result;
const res = await agent.repost(uri, cid)
console.log(res);
