<script context="module">
    import TextTitle from './TextTitle.svelte';

    const componentMap = { TextTitle };
</script>

<script>
    export let setting;

    $: component = setting && setting.type && componentMap[setting.type];
</script>

<svelte:component this={component} setting={setting} />

