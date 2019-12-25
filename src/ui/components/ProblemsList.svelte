<script>
    export let hints;
    export let current;
</script>

<style>
    .problems {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
    }
    .lable {
        margin-bottom: 8px;

        font-size: 11px;
        color: rgba(0, 0, 0, 0.3);
    }
    .lsit {
        font-size: 11px;
        color: rgba(0, 0, 0, 0.3);
    }
    .rule {
        margin-right: 10px;
        line-height: 16px;

        color: #DA570F;
        border-bottom: 1px dotted #fdc;

        white-space: nowrap;
    }
</style>

<div class="problems">
    {#if Object.values(hints).length > 0}
        <div class="lable">Основные проблемы</div>
        <div class="lsit">
            {#each Object.values(hints) as item}
                <span class="rule">
                    {item['name'].toLowerCase()}
                </span>
            {/each}
        </div>
    {/if}
</div>