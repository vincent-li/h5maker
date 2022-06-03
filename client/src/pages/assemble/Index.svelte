<script>
    import SvgIcon from '@components/svg-icons';
    import Button from '@components/button';
    import Tools from './Tools.svelte';
    import Preview from './Preview.svelte';
    import Setting from '@modules/assemble-setting';
    import { sid } from './store';
    console.log('sid------->', $sid);
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
            <div class="side-bar">
                <div class="side-bar-catgory">
                    <SvgIcon type="SidebarUI" size="32" />
                </div>
                <div class="side-bar-catgory">
                    <SvgIcon type="SideBarData" size="24" />
                </div>
                <div class="side-bar-arrow">
                    <SvgIcon type="SidebarLeftArrow" size="16" fill="#ebedf0" />
                </div>
            </div>
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
    :global(html), :global(body) {
		margin: 0; 
		height: 100%; 
		overflow: hidden;
		user-select: none;
		-webkit-user-select: none;
	}

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
        width: 240px;
        padding: 16px 12px;
        box-sizing: border-box;
    }
    .side-bar {
        width: 48px;
        position: absolute;
        border-right: 1px solid #ebedf0;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px 0;
    }
    .side-bar-arrow {
        position: absolute;
        right: -2px;
        display: inline-block;
        width: 2px;
        height: 14px;
        background-color: #fff;
        border: none;
    }
    * :global(.side-bar-arrow > svg) {
        position: absolute;
        top: -1px;
        left: -11px;
    }
    .side-bar-catgory {
        box-sizing: border-box;
        padding: 8px;
        cursor: pointer;
    }
    .assemble-preview {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 240px;
        right: 376px;
        background-color: #f7f8fa;
    }
    .assemble-setting {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 376px;
        background: #FFF;
    }
</style>
