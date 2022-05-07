import '@src/base.css';
import '@src/global.css';
import 'dragula/dist/dragula.css';
import App from './Index.svelte';

const app = new App({
    target: document.body,
});

export default app;
