<script>
    import SvgIcon from '@components/svg-icons';
    import Button from '@components/button';
    import Tools from './Tools.svelte';
    import Preview from './Preview.svelte';
    import Setting from '@modules/assemble-setting';
    import { onMount } from 'svelte';
    // const getDom = document.getElementById
    onMount(() => {
        // dragula([document.getElementById('js_tools_drag_trigger')], {
        //     // copy: true,
        //     revertOnSpill: true,
        // }).on('shadow', (el)=>{
        //     console.log('----->')
        // });
    });
</script>

<div class="page-container">
    <div class="assemble-top-bar">
        <div>
            <a class="alink" href="/home" target="_self">
                <SvgIcon type="GoBack" size="18px" fill="#155bd4" />
                <span style="margin-left: 4px;">返回页面列表</span>
            </a>
        </div>
        <div>
            <Button>预览</Button>
            <Button className="mgl6">保存</Button>
            <Button className="mgl6">下载</Button>
            <!-- <button class="ant-btn">预览</button> -->
        </div>
    </div>
    <div class="assemble-body">
        <div class="assemble-tools">
            <Tools />
        </div>
        <div class="assemble-preview">
            <Preview />
        </div>
        <div class="assemble-setting">
            <Setting />
        </div>
    </div>
</div>

<style>
    .assemble-top-bar {
        position: fixed;
        top: 0;
        height: 55px;
        width: 100%;
        border-bottom: 1px solid #ebedf0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 0 16px;
        box-sizing: border-box;
    }
    .assemble-body {
        position: absolute;
        top: 55px;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .assemble-tools {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 184px;
        padding: 16px 12px;
        box-sizing: border-box;
    }
    .assemble-preview {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 176px;
        right: 376px;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: #f7f8fa;
    }
    .assemble-setting {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 376px;
    }
</style>
