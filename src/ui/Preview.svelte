<script>
    import Highlight from './components/Highlight.svelte';

    export let text;
    export let fragments;

    function formatTxt(txt) {
        return '<p>' + txt.replace(/(?:\r\n|\r|\n)/g, '<p/><p>') + '</p>';
    }
    $: formated = formatTxt(text);
</script>

<style>
    .preview {
        flex-grow: 1;
        overflow-y: scroll;

        padding: 0 16px 16px 16px;

        font-size: 14px;
        line-height: 24px;
    }
</style>

<div class="preview">
{#if fragments}
    {#each fragments as item, index}
        {index === 0 ? text.slice(0,item['start']) : text.slice(fragments[index-1]['end'],item['start']) }
        <Highlight>{text.slice(item['start'], item['end'])}</Highlight>
        {index === fragments.length - 1 ? text.slice(item['end'], text.length) : ""}
    {:else}
        {text}
    {/each}
{/if}
</div>