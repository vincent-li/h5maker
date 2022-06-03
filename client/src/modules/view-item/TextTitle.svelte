<script>
    import {getStyleString} from "@src/helper"
    export let setting;
   
    let ele;
</script>

<div bind:this={ele} id={`ele_${setting.id}`} class="title-text" style={`${getStyleString(setting.style)}`}>
    <span>{setting.content}</span>
</div>

<style>
    .title-text{
        padding: 16px 8px;
    }
</style>