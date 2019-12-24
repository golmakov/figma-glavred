<script>
    import Sidebar from './Sidebar.svelte';
    import Preview from './Preview.svelte';
    import Placeholder from './Placeholder.svelte';

    const Glavred = require('glvrd-http-api');
    let glvrd = new Glavred("Figma plugin");

    export let text;
    let score;

    onmessage = (event) => {
        let message = event.data.pluginMessage;
        if (message.action === 'showTxt') {
            text = message.text;
            glvrd.proofread(text).then(function(results){
                console.log(results);
                if (results['status'] === 'ok') {
                    score = results['score'];
                } else {
                    console.log(results);
                    parent.postMessage({
                        pluginMessage: {action: 'serverError'}
                    }, '*');
                }                
            });
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
    <Sidebar {score}/>
</div>