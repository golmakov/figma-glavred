<script>
    export let id;
    export let type;
    export let style = 'underline';
    export let selected = false;
    export let highlighted = false;
</script>

<style>
    .highlighted {
        color: #da570f;
        background: #fdc;
        border-radius: .2em;
    }
    .underline {
        color: #dA570f;
        background: url(../../../assets/img/underline.svg) 0 100% repeat-x;
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

<span class={style} on:click on:mouseover><slot></slot></span>