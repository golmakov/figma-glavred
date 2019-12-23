<script>
    import Sidebar from './Sidebar.svelte';
    import Preview from './Preview.svelte';
    import Placeholder from './Placeholder.svelte';

    export let text;

    onmessage = (event) => {
		let message = event.data.pluginMessage;
		if (message.action === 'showTxt') {
            text = message.text;
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
	}
</style>

<div class="ui">
    {#if text}
        <Preview {text}/>
    {:else}
        <Placeholder/>
    {/if}
    <Sidebar/>
</div>