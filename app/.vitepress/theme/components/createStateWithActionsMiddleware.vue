<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { createState, withActions } from "reactivity-store";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
const divRef = ref<HTMLElement | null>(null);

const useCountState = createState(withActions(() => ({ data: { count: 1 } }), { generateActions: (state) => ({ add: () => state.data.count++, del: () => state.data.count-- }) }));

const useCountState_v2 = createState(withActions(() => ({ count: 1 }), { generateActions: (state) => { return { add: () => { state.count++ }, del: () => state.count-- } } }));

const useCountState_v3 = createState(withActions(() => ({ count: 1 }), { generateActions: (state) => { return { add: (v) => { console.log(v); state.count++ }, del: () => state.count-- } } }));

const App = () => {
  const { count, add } = useCountState_v3();

  return React.createElement(React.StrictMode, null, React.createElement(
    "div",
    { className: "react_container" },
    React.createElement("p", null, "React Reactive Count"),
    React.createElement("p", { style: { color: "red" } }, "count: " + count),
    React.createElement("button", { className: "react_button", onClick: () => add('args') }, "Add button")
  ));
};

let root: ReturnType<(typeof ReactDOM)["createRoot"]> | null = null;

onMounted(() => {
  root = ReactDOM.createRoot(divRef.value as HTMLElement);

  root.render(React.createElement(App));
});

onBeforeUnmount(() => {
  root?.unmount();
});
</script>

<template>
  <div ref="divRef"></div>
</template>

<style>
.react_container {
  padding: 20px;
  overflow: hidden;
  border-radius: 4px;
  background-color: RGBA(100, 100, 100, 0.4);
}

.react_button {
  border: 1px solid rgba(100, 100, 100, 0.8);
  padding: 6px 10px;
  border-radius: 4px;
}
</style>
