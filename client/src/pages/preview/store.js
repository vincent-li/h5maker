import { readable, writable } from 'svelte/store';

import { getUrlParams } from '@src/helper';

export const sid = readable(getUrlParams().sid);

// 当前被选中的组件的位置
export const selected = writable(-1);

// 组件列表
export const components = writable([]);

// 页面设置
export const pageConfig = writable({});

// 组件默认设置

export const componentDefault = readable({
    TextTitle: {
        type: 'TextTitle',
        name: '标题文本',
        content: '这是一个标题文本',
        subscribe: '',
        index: -1,
        id: '',
        style: {
            fontSize: '16px',
            color: '#333',
            fontWeight: 'bold',
        },
    },
});
