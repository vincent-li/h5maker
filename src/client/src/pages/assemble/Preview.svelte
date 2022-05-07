<script>
    import SvgIcon from '@components/svg-icons';
    import { configType } from '@pages/assemble/store';
</script>

<div class="iframe-place">
    <div class="iframe-place-wrap">
        <iframe
            title="预览"
            src="/preview"
            width="100%"
            height="844"
            frameborder="0"
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
        <SvgIcon type="GlobalComponentsList" size="12px"/>
        <span class="mgl6">组件管理</span>
    </div>
    <div
        class="global-settings-item"
        on:click={() =>
            configType.set({ type: 'OperateRecord', name: '历史记录' })}
    >
        <SvgIcon type="GlobalHistory" size="12px"/>
        <span class="mgl6">历史记录</span>
    </div>
</div>

<style>
    .iframe-place {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .iframe-place-wrap {
        position: relative;
        top: 32px;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
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
</style>
