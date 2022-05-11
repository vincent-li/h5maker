<script>
    import SvgIcon from '@components/svg-icons';
    let viewBody;
    let placeholderShow = false;
    function handleDragEnter(e) {
        console.log('拖进来了======>>>');
    }
    function handleDragOver(e) {
        let { x, y } = viewBody.getBoundingClientRect();
        console.log(e.clientX - x, '---', e.clientY - y);
    }
    function handleDragLeave(e) {
        console.log('拖出去了======>>>');
    }
    function handleSelected(){
        
    }
</script>

<div class="page-view">
    <div class="page-view-head" />
    <div
        class="page-view-body"
        bind:this={viewBody}
        on:dragenter={handleDragEnter}
        on:dragover={handleDragOver}
        on:dragleave={handleDragLeave}
    >
        <div class="view-item">
            <div class="item-content" on:click={handleSelected}/>
            <div class="item-tip">
                <p>标题文本</p>
            </div>
            <div class="item-operation">
                <div><SvgIcon type="OperateUp" size="22px" /></div>
                <div><SvgIcon type="OperateDown" size="22px" /></div>
                <div>
                    <SvgIcon type="OperateCopy" size="24px" />
                </div>
                <div>
                    <SvgIcon type="OperateDelete" />
                </div>
            </div>
        </div>
        <div class="item-placeholder">
            <span>组件放置位置</span>
        </div>
    </div>
</div>

<style>
    .page-view {
        position: relative;
        width: 375px;
        transform: translateX(-50%);
        margin-left: 50%;
        display: inline-block;
        box-shadow: 0 0 14px 0 rgb(0 0 0 / 10%);
    }
    .page-view-head {
        background: url(/public/head-back.png);
        height: 86px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .page-view-body {
        position: relative;
        min-height: 726px;
    }
    .item-placeholder {
        line-height: 42px;
        height: 42px;
        width: 100%;
        text-align: center;
        background-color: rgba(9, 109, 217, 0.39);
    }
    .item-placeholder > span {
        font-size: 12px;
        color: #fff;
        padding: 4px 16px;
        background-color: #096dd9;
    }
    .view-item {
        position: relative;
    }

    .item-content {
        display: inline-block;
        width: 100%;
    }
    .item-tip {
        position: absolute;
        top: 0;
        left: -73px;
        min-width: 68px;
        min-height: 24px;
        padding: 4px 7px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
        box-sizing: border-box;
        background-color: #fff;
    }
    .item-tip::after {
        content: ' ';
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-left-color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -10px;
    }

    .item-tip > p {
        height: 16px;
        line-height: 16px;
        text-align: right;
        white-space: nowrap;
        font-size: 10px;
        text-align: center;
    }

    .item-operation {
        position: absolute;
        top: 0;
        right: -40px;
        width: 38px;
        height: 166px;
        background: #fff;
        box-shadow: 0 2px 8px 0 rgb(200 201 204 / 50%);
        border-radius: 2px;
        padding: 2px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
</style>
