<script>
    import SvgIcon from '@components/svg-icons';
    import { toolsList, draggingTarget } from './store';
    let tools = [];
    toolsList.subscribe((val) => (tools = val));

    function handleDragStart(type) {
        draggingTarget.set(type);
    }
    function handleDragEnd(e) {
        draggingTarget.set('');
    }
</script>

<div id="js_tools_drag_trigger" class="tools-place">
    {#each tools as item}
        <div
            class="tools-box"
            draggable="true"
            type={item.type}
            on:dragstart={() => handleDragStart(item.type)}
            on:dragend={handleDragEnd}
            on:click={() => console.log('click====>')}
        >
            <SvgIcon
                class="tools-svg"
                type={item.icon}
                size="22px"
                fill="#323233"
            />
            <span class="tools-box-title">{item.name}</span>
            <span class="tools-box-number">{item.count}/{item.limit}</span>
        </div>
    {/each}
</div>

<style>
    .tools-place {
        position: absolute;
        top: 0;
        left: 48px;
        bottom: 0;
        padding: 16px;
        box-sizing: border-box;
    }
    .tools-box {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        width: 80px;
        padding: 12px 0;
        box-sizing: border-box;
        margin-bottom: 16px;
        cursor: grab;
    }
    .tools-box:hover {
        color: #fff;
        background-color: #155bd4;
        border-radius: 2px;
    }
    .tools-box:hover .tools-box-title,
    .tools-box:hover .tools-box-number {
        color: #fff;
    }
    * :global(.tools-box:hover .tools-svg) {
        fill: #fff;
    }
    /* 拖拽按钮时候的样式 */
    * :global(.tools-box-drag .tools-box-title) {
        color: #fff;
    }
    * :global(.tools-box-drag .tools-box-number) {
        color: #fff;
    }
    * :global(.tools-box-drag .tools-svg) {
        fill: #fff;
    }
    .tools-box-title {
        color: #323233;
        font-size: 12px;
        margin-top: 4px;
    }
    .tools-box-number {
        color: #7d7e80;
        font-size: 10px;
        margin-top: 4px;
    }
</style>
