<script>
    import ClassNames from 'classnames';
    export let className = '';
    export let style = '';
</script>

<input class={ClassNames('sad-input', className)} {style} />

<style>
    .sad-input {
        width: 100%;
        min-width: 0;
        height: 30px;
        box-sizing: border-box;
        margin: 0;
        font-variant: tabular-nums;
        list-style: none;
        font-feature-settings: 'tnum';
        position: relative;
        display: inline-block;
        padding: 4px 11px;
        color: #000000d9;
        font-size: 14px;
        line-height: 1.5715;
        background-color: #fff;
        background-image: none;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        transition: all 0.3s;
    }
    .sad-input:placeholder-shown {
        text-overflow: ellipsis;
    }
    .sad-input {
        border-color: #40a9ff;
        border-right-width: 1px;
    }
    .sad-input:focus,
    .sad-input-focused {
        border-color: #40a9ff;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, .2);
        border-right-width: 1px;
        outline: 0;
    }
</style>
