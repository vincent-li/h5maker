<script context="module">
    // 系统中相关的按钮
    import AddPage from './addPage.svg';
    import GoBack from './goback.svg';
    import Star from './star.svg';
    // iframe中组件右侧操作按钮
    import OperateUp from './operateUp.svg';
    import OperateDown from './operateDown.svg';
    import OperateCopy from './operateCopy.svg';
    import OperateDelete from './operateDelete.svg';
    // preview右侧操作按钮
    import GlobalPageSetting from './globalPageSetting.svg';
    import GlobalComponentsList from './globalComponentsList.svg';
    import GlobalHistory from './globalHistory.svg';
    // 左侧工具分类
    import SidebarUI from './sidebarUI.svg';
    import SideBarData from './sidebarData.svg';
    import SidebarLeftArrow from './sidebarLeftArrow.svg'
    // 左侧工具栏中的操作按钮
    import ToolsText from './toolsText.svg';

    const iconDatas = {
        AddPage,
        GoBack,
        Star,
        GlobalPageSetting,
        GlobalComponentsList,
        GlobalHistory,
        OperateUp,
        OperateDown,
        OperateCopy,
        OperateDelete,
        SidebarUI,
        SideBarData,
        SidebarLeftArrow,
        ToolsText,
    };
</script>

<script>
    export let size = '20px';
    export let width = size;
    export let height = size;
    export let color = 'currentColor';
    export let stroke = color;
    export let fill = color;

    export let type = 'Star';

    $: elements = iconDatas[type]
        .replace(/<svg ([^>]*)>/, '')
        .replace('</svg>', '');

    $: viewBox = extractViewBox(iconDatas[type]);

    function extractViewBox(svg) {
        const regex = /viewBox="([\d\- \.]+)"/;
        const res = regex.exec(svg);
        if (!res) return '0 0 20 20'; // default value
        return res[1];
    }
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    {width}
    {height}
    {viewBox}
    {stroke}
    {fill}
    {...$$restProps}
>
    {@html elements}
</svg>
