<script>
    export let text;
    export let fragments;

    function showProofread(list, txt) {
        let result = "";
        let position = 0;
        
        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            result = result + txt.slice(position, item['start']);
            result = result + '<span class="proof--underline">' + txt.slice(item['start'], item['end']) + '</span>';
            position =  item['end'];
        }
        result = result + txt.slice(position, txt.length);
        return result;
    }
    $: text = fragments ? showProofread(fragments, text) : text;

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
    :global(.proof--highlighted) {
        color: #da570f;
        background: #fdc;
        border-radius: .2em;
    }
    :global(.proof--underline) {
        color: #dA570f;
        background: url(../../assets/img/underline.svg) 0 100% repeat-x;

        border-radius: .2em;
        padding: 3px 2px;
        margin: 0 -2px;
    }
    :global(.proof--active) {
        -webkit-transition: background-color 0s, color 0s;
        color: #fff;
        background: #DA570F;
    }
</style>

<div class="preview">
    {@html formated}
</div>