<script>
    import Postmate from 'postmate';
    import { onMount } from 'svelte';
    import SvgIcon from '@components/svg-icons';
    import { configType, draggingTarget, sid } from '@pages/assemble/store';
    // 获取iframe dom
    let iFramePlace;
    let iFrameOverlay;
    let iFrame = null;
    
    function handleDragOver(e) {
        let { x, y } = iFrameOverlay.getBoundingClientRect();
        let offsetY = e.clientY - y;
        let offsetX = e.clientX - x;
        iFrame.call('parentAction', {
            action: 'dragging',
            param: {
                x: offsetX,
                y: offsetY
            },
        });
    }

    function handleDrop() {
        iFrame.call('parentAction', {
            action: 'drop',
            param: $draggingTarget,
        });
    }

    function handleSelected(){

        configType.set({})
    }

    onMount(() => {
        const handshake = new Postmate({
            container: iFramePlace,
            url: `/preview?sid=${$sid}`, // Page to load, must have postmate.js. This will also be the origin used for communication.
            name: 'preview-iframe', // Set Iframe name attribute. Useful to get `window.name` in the child.
            classListArray: ['preview-iframe'], //Classes to add to the iframe via classList, useful for styling.
        });

        handshake.then((child) => {
            iFrame = child;

            child
                .get('height')
                .then((height) => (child.frame.style.height = `${height}px`));

            child.on('childAction', ({ action, param }) => {
                switch (action) {
                    case 'selected':
                        handleSelected();
                        break;
                    default:
                        break;
                }
            });
        });
    });
</script>

<div class="iframe-place">
    <div class="iframe-place-wrap" bind:this={iFramePlace}>
        <div
            class="iframe-place-overlay"
            bind:this={iFrameOverlay}
            on:dragover={handleDragOver}
            on:drop={handleDrop}
            ondragover="return false"
        />
    </div>
</div>

<div class="global-settings">
    <div
        class="global-settings-item"
        on:click={() =>
            configType.set({ type: 'PageSetting', name: '页面设置' })}
    >
        <SvgIcon type="GlobalPageSetting" size="12px" />
        <span class="mgl6">页面设置</span>
    </div>
    <div
        class="global-settings-item"
        on:click={() =>
            configType.set({ type: 'ManageComponents', name: '组件管理' })}
    >
        <SvgIcon type="GlobalComponentsList" size="12px" />
        <span class="mgl6">组件管理</span>
    </div>
    <div
        class="global-settings-item"
        on:click={() =>
            configType.set({ type: 'OperateRecord', name: '历史记录' })}
    >
        <SvgIcon type="GlobalHistory" size="12px" />
        <span class="mgl6">历史记录</span>
    </div>
</div>

<style>
    .iframe-place {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: -14px;
        overflow: auto;
    }
    .iframe-place-wrap {
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .iframe-place-overlay {
        position: absolute;
        top: 32px;
        left: 0;
        bottom: 32px;
        right: 0;
    }
    .global-settings {
        position: absolute;
        top: 32px;
        right: 16px;
        display: flex;
        flex-direction: column;
    }
    .global-settings-item {
        position: relative;
        background-color: #fff;
        box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
        border-radius: 2px;
        width: 94px;
        height: 32px;
        line-height: 32px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    * :global(.preview-iframe) {
        width: 100%;
        height: 844px;
        margin: 32px 0;
    }
</style>
