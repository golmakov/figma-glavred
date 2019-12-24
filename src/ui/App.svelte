<script>
    import Sidebar from './Sidebar.svelte';
    import Preview from './Preview.svelte';
    import Placeholder from './Placeholder.svelte';

    export let text;
    let score;

    onmessage = (event) => {
        let message = event.data.pluginMessage;
        if (message.action === 'showTxt') {
            text = message.text;
            score = (Math.random() * 10 + 1).toFixed(1);
        }
    }
</script>

<style>
    .ui {
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;

        margin: 0;

        font-family: Inter;
    }
</style>

<div class="ui">
    {#if text}
        <Preview {text}/>
    {:else}
        <Placeholder/>
    {/if}
    <Sidebar score={score}/>
</div>