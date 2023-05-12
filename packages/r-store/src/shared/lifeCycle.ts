export type LifeCycle = {
  onBeforeMount: Array<() => void>;

  onMounted: Array<() => void>;

  onBeforeUpdate: Array<() => void>;

  onUpdated: Array<() => void>;

  onBeforeUnmount: Array<() => void>;

  onUnmounted: Array<() => void>;

  hasHookInstall: boolean;

  canUpdateComponent: boolean;
};

export const createLifeCycle = () => ({
  onBeforeMount: [],
  onBeforeUpdate: [],
  onBeforeUnmount: [],
  onMounted: [],
  onUpdated: [],
  onUnmounted: [],
  hasHookInstall: false,
  canUpdateComponent: true,
});
