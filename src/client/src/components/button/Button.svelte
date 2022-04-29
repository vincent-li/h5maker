<button class={ClassNames('ant-btn', className, {
    'primary': false,
    'default': true
  })} style={style} on:click>
    <slot />
</button>

<style>
    .ant-btn {
        line-height: 1.5715;
        position: relative;
        display: inline-block;
        font-weight: 400;
        white-space: nowrap;
        text-align: center;
        background-image: none;
        border: 1px solid transparent;
        box-shadow: 0 2px #00000004;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        touch-action: manipulation;
        height: 32px;
        padding: 4px 15px;
        font-size: 14px;
        border-radius: 2px;
        color: #000000d9;
        border-color: #d9d9d9;
        background: #fff;
    }
    .ant-btn:hover{
        color: #40a9ff;
        border-color: #40a9ff;
        background: #fff;
    }
</style>
<script context="module">
   let totalComponents = 0;
    // 此处允许执行import操作，例如
    // `import Example, { alertTotal } from './Example.svelte'`
    export function alertTotal() {
        alert(totalComponents);
    }
</script>
<script>
    import ClassNames from 'classnames' 
    
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('abc');
    }

    totalComponents += 1;
    console.log('我是第几个组件实例===》', totalComponents)
    export let className = '';
    export let style = '';
</script>
