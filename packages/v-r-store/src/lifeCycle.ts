// vue like lifeCycle for react app;
import { globalStoreLifeCycle } from "./core";

export const onMounted = (cb: () => void) => {
  if (!globalStoreLifeCycle)
    throw new Error(
      "can not use 'onMount' outside of the 'createStoreWithLifeCycle' function"
    );

  globalStoreLifeCycle.onMounted.push(cb);

  globalStoreLifeCycle.hasHookInstall = true;
};

export const onUpdated = (cb: () => void) => {
  if (!globalStoreLifeCycle)
    throw new Error(
      "can not use 'onUpdated' outside of the 'createStoreWithLifeCycle' function"
    );

  globalStoreLifeCycle.onUpdated.push(cb);

  globalStoreLifeCycle.hasHookInstall = true;
};

export const onUnmounted = (cb: () => void) => {
  if (!globalStoreLifeCycle)
    throw new Error(
      "can not use 'onUnmounted' outside of the 'createStoreWithLifeCycle' function"
    );

  globalStoreLifeCycle.onUnmounted.push(cb);

  globalStoreLifeCycle.hasHookInstall = true;
};

export const onBeforeMount = (cb: () => void) => {
  if (!globalStoreLifeCycle)
    throw new Error(
      "can not use 'onBeforeMount' outside of the 'createStoreWithLifeCycle' function"
    );

  globalStoreLifeCycle.onBeforeMount.push(cb);

  globalStoreLifeCycle.hasHookInstall = true;
};

export const onBeforeUpdate = (cb: () => void) => {
  if (!globalStoreLifeCycle)
    throw new Error(
      "can not use 'onBeforeUpdate' outside of the 'createStoreWithLifeCycle' function"
    );

  globalStoreLifeCycle.onBeforeUpdate.push(cb);

  globalStoreLifeCycle.hasHookInstall = true;
};

export const onBeforeUnmount = (cb: () => void) => {
  if (!globalStoreLifeCycle)
    throw new Error(
      "can not use 'onBeforeUnmount' outside of the 'createStoreWithLifeCycle' function"
    );

  globalStoreLifeCycle.onBeforeUnmount.push(cb);

  globalStoreLifeCycle.hasHookInstall = true;
};
