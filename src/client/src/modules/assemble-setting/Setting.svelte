<script>
    import PageSetting from './PageSetting.svelte';
    import SetTitleText from './SetTitleText.svelte';
    export let type = '';
    export let name = '';
</script>

<div class="setting-title">
    <span class="setting-title-text">{name}</span>
</div>
<div class="setting-body">
    {#if type === 'PageSetting'}
        <PageSetting />
    {:else if type === 'TitleText'}
        <SetTitleText />
    {/if}
</div>

<style>
    .setting-title {
        padding: 24px 16px;
        border-bottom: 1px solid #f2f4f6;
    }
    .setting-title-text {
        font-weight: 600;
        line-height: 24px;
        color: #323233;
        text-align: left;
    }
    .setting-body {
        padding: 16px;
    }
</style>
