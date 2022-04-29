<script>
    import Icon from '@components/svg-icons/Icon.svelte';
    import GobackSvg from '@components/svg-icons/goback.svg';
    import Button from '@components/button';
    import Tools from '@modules/assemble-tools';
</script>

<div class="page-container">
    <div class="assemble-top-bar">
        <div>
            <a class="alink" href="/home" target="_self">
                <Icon
                    data={GobackSvg}
                    width="18px"
                    height="18px"
                    fill="#155bd4"
                />
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
        <div class="assemble-preview" />
        <div class="assemble-setting" />
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
        box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
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
        width: 176px;
        padding: 16px 12px;
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
