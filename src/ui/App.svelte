<script>
    import Sidebar from './Sidebar.svelte';
    import Preview from './Preview.svelte';
    import Placeholder from './Placeholder.svelte';

    const Glavred = require('glvrd-http-api');
    let glvrd = new Glavred("Figma plugin");

    export let text;
    let score, fragments, hints, showLoader;

    function listHints(fragmentsList) {
        let result = fragmentsList.reduce(function (rv, cv) {
            let name = cv['hint']['name'];
            if (Object.keys(rv).includes(name)) {
                rv[name]['hints'].push(cv['hint_id']);
            } else {
                rv[name] = {
                    'name': name,
                    'description': cv['hint']['description'],
                    'hints': [cv['hint_id']]
                }
            }            
            return rv;
        }, {});
        return result;
    }

    onmessage = (event) => {
        let message = event.data.pluginMessage;
        if (message.action === 'showTxt') {
            text = message.text;
            fragments = undefined;
            showLoader = true;
            glvrd.proofread(text).then(function(results) {
                if (results['status'] === 'ok') {
                    score = results['score'];
                    fragments = results['fragments'];
                    hints = listHints(fragments);
                    showLoader = false;
                    console.log(hints)
                } else {
                    console.log(results);
                    showLoader = false;
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
        <Preview {text} {fragments}/>
    {:else}
        <Placeholder/>
    {/if}
    <Sidebar {score} {hints} {showLoader}/>
</div>