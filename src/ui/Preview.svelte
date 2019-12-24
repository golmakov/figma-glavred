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
    .highlighted {
        color: #da570f;
        background: #fdc;
        border-radius: .2em;
    }
    .underline {
        color: #dA570f;
        background: url(../../assets/img/underline.svg) 0 100% repeat-x;

        border-radius: .2em;
        padding: 3px 2px;
        margin: 0 -2px;
    }
    .active {
        -webkit-transition: background-color 0s, color 0s;
        color: #fff;
        background: #DA570F;
    }
</style>

<div class="preview">
    {@html formated}
</div>