import "@src/global.css";
import App from './Index.svelte';

const app = new App({
  target: document.body
});

window.app = app;

export default app;