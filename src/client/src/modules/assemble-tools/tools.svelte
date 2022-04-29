<script>
    import Icon from '@components/svg-icons/Icon.svelte';
    import ToolsText from '@components/svg-icons/toolsText.svg';
    
    $: toolsList = [
        {
            title: '标题文本',
            count: 0,
            limit: 100,
            icon: ToolsText,
        },
        {
            title: '标题文本',
            count: 0,
            limit: 100,
            icon: ToolsText,
        },
        {
            title: '标题文本',
            count: 0,
            limit: 100,
            icon: ToolsText,
        },
    ];
</script>

<div>
    {#each toolsList as item}
        <div class="tools-box">
            <Icon
                class="tools-svg"
                data={item.icon}
                width="28px"
                height="28px"
                fill="#323233"
            />
            <span class="tools-box-title">{item.title}</span>
            <span class="tools-box-number">{item.count}/{item.limit}</span>
        </div>
    {/each}
</div>

<style>
    .tools-box {
        display: inline-flex;;
        flex-direction: column;
        align-items: center;
        width: 80px;
        padding: 12px 0;
        box-sizing: border-box;
        margin-bottom: 16px;
        cursor: move;
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
        fill: #FFF;
    }
    .tools-box-title {
        color: #323233;
        font-size: 14px;
        margin-top: 4px;
    }
    .tools-box-number {
        color: #7d7e80;
        font-size: 12px;
        margin-top: 4px;
    }
</style>
