import { writable } from 'svelte/store';

// 当前被选中的组件的位置
export const selected = writable(-1);

// 组件列表
export const components = writable([]);

// 页面设置
export const pageConfig = writable({});

// 辅助对象，根据当前选中的位置上的组件类型展示相应设置内容
export const configType = writable({ type: 'PageSetting', name: '页面设置' });

// 拖拽时候同步坐标
export const moveXY = writable({ x: 0, y: 0 });
