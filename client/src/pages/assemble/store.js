import { readable, writable } from 'svelte/store';

import { getUrlParams } from '@src/helper';

export const sid = readable(getUrlParams().sid);

// 当前被选中的组件的位置
export const selected = writable(-1);

// 组件列表
export const components = writable([]);

// 页面设置
export const pageConfig = writable({});

// 辅助对象，根据当前选中的位置上的组件类型展示相应设置内容
export const configType = writable({ type: 'PageSetting', name: '页面设置' });

// 拖拽时候的目标
export const draggingTarget = writable('');

// 内外通信数据

export const assembleAction = writable({
    // add delete sort setProperty
    action: '',
    index: -1,
    component: null,
    pageConfig: null,
});

//左侧按钮列表
export const toolsList = readable([
    {
        type: 'TextTitle',
        name: '标题文本',
        count: 0,
        limit: 100,
        icon: 'ToolsText'
    }
]);
