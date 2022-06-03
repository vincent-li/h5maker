<script>
    import Postmate from 'postmate';
    import SvgIcon from '@components/svg-icons';
    import ViewItem from '@modules/view-item';
    import { getUuid8, insertAfter, arrInsert } from '@src/helper';
    import { selected, components, componentDefault } from './store';
    import { onMount } from 'svelte';

    // 获取真实dom <div class="page-view-body"/>
    let viewBody, placeEle;
    let placeholderShow = false;
    let parentWin;
    let insertIndex = 0;

    // 控制传输参数
    function handleDragging(mouse) {
        let { x, y, height, width } = viewBody.getBoundingClientRect();
        let offsetY = mouse.y - y;
        let offsetX = mouse.x - x;
        let isIn =
            offsetX > 0 && offsetX < width && offsetY > 0 && offsetY < height;
        if (isIn) {
            let nowComps = $components;
            if (nowComps && nowComps.length) {
                nowComps.map((c, idx) => {
                    let target = document.getElementById(c.id);
                    let parent = target.parentNode;
                    let top = target.offsetTop;
                    let targetH = target.offsetHeight;
                    if (offsetY > top && offsetY < top + targetH / 2) {
                        parent.insertBefore(placeEle, target);
                        insertIndex = idx;
                    } else if (
                        offsetY > top + targetH / 2 &&
                        offsetY < top + targetH
                    ) {
                        insertAfter(placeEle, target);
                        insertIndex = idx + 1;
                    }
                });
            }
            placeholderShow = true;
        } else {
            insertIndex = 0;
            placeholderShow = false;
        }
    }

    function handleDrop(type) {
        if (placeholderShow) {
            addComponent(type, insertIndex);
            placeholderShow = false;
        }
    }

    function handleSelected(index) {
        selected.set(index);
        parentWin.emit('childAction', { action: 'selected', param: index });
    }

    function addComponent(type, idx) {
        // 给我整不会了，数据双向绑定的锅，这些在angular中出现过，不可以直接引用
        // 否则后面的数据会覆盖前面的所有数据
        let def = Object.assign({}, $componentDefault[type]);
        def.index = idx;
        def.id = getUuid8();
        components.set(arrInsert($components, idx, def));
        selected.set(idx);
        parentWin.emit('childAction', { action: 'selected', param: idx });
    }

    onMount(() => {
        const handshake = new Postmate.Model({
            // Expose your model to the Parent. Property values may be functions, promises, or regular values
            height: () => document.height || document.body.offsetHeight,
            parentAction: ({ action, param }) => {
                // console.log('父亲发来消息======>', action, '--参数', param);
                switch (action) {
                    case 'dragging':
                        handleDragging(param);
                        break;
                    case 'drop':
                        handleDrop(param);
                        break;
                    default:
                        break;
                }
            },
        });

        // When parent <-> child handshake is complete, events may be emitted to the parent
        handshake.then((parent) => {
            parentWin = parent;
        });
    });
</script>

<div class="page-view">
    <div class="page-view-head" />
    <div
        class="page-view-body"
        bind:this={viewBody}
        style="background-color:#fff;"
    >
        {#each $components as item, idx (item.id)}
            <div class="view-item" id={item.id} index={idx}>
                <div
                    class="item-content"
                    class:selected={$selected === idx}
                    on:click={() => handleSelected(idx)}
                >
                    <ViewItem setting={$components[idx]} />
                </div>
                <div class="item-content-tip">
                    <p>标题文本</p>
                </div>
                <div class="item-operation" class:visible={$selected === idx}>
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
        {/each}
        <div
            bind:this={placeEle}
            class="item-placeholder"
            style="display: {placeholderShow ? 'inline-block' : 'none'}"
        >
            <span>组件放置位置</span>
        </div>
    </div>
</div>

<style>
    .page-view {
        position: absolute;
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

    .item-placeholder {
        pointer-events: none;
    }

    .view-item {
        position: relative;
    }
    .item-content {
        display: inline-block;
        width: 100%;
        cursor: pointer;
        min-height: 20px;
    }
    .item-content:hover::before {
        border: 1px dashed #155bd4;
        content: '';
        position: absolute;
        width: 377px;
        height: 100%;
        left: -1px;
        top: 0;
        box-sizing: border-box;
        z-index: 99;
        cursor: pointer;
    }
    .item-content.selected::before {
        content: '';
        position: absolute;
        width: 375px;
        height: 100%;
        left: 0;
        top: 0;
        box-sizing: border-box;
        border: 2px solid #155bd4;
        z-index: 99;
        cursor: move;
    }
    .item-content-tip {
        position: absolute;
        top: 0;
        left: -76px;
        min-width: 68px;
        min-height: 24px;
        padding: 4px 7px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
        box-sizing: border-box;
        background-color: #fff;
    }
    .item-content-tip::after {
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

    .item-content-tip > p {
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
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .item-operation.visible {
        display: flex;
    }
</style>
