<script>
    export let text;
    let formated;

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
    {@html formated}
</div>