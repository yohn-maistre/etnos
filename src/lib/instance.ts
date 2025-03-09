// import { browser } from '$app/environment'
// import { env } from '$env/dynamic/public'
// import { writable } from 'svelte/store'

// export const LINKED_INSTANCE_URL =
//   (env.PUBLIC_LOCK_TO_INSTANCE ?? 'true').toLowerCase() === 'true'
//     ? env.PUBLIC_INSTANCE_URL
//     : undefined

// const getDefaultInstance = (): string => {
//   return 'http://lemmy:8536'  // Internal Docker network for server-side
// }

// export const DEFAULT_INSTANCE_URL = getDefaultInstance()
// export let instance = writable(DEFAULT_INSTANCE_URL)

import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';
import { writable } from 'svelte/store';

export const LINKED_INSTANCE_URL =
  (env.PUBLIC_LOCK_TO_INSTANCE ?? 'true').toLowerCase() === 'true'
    ? env.PUBLIC_INSTANCE_URL
    : undefined;

const getDefaultInstance = (): string => {
  return 'meepago.etnos.groups.id'; 
};

export const DEFAULT_INSTANCE_URL = getDefaultInstance();
export let instance = writable(DEFAULT_INSTANCE_URL);