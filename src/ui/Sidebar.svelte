<script>
    import Score from './components/Score.svelte';

    export let state = 'welcome';
    export let score;

    $: state = score ? 'score' : 'welcome';
</script>

<style>
    .sidebar {
        display: flex;
        flex-direction: column;
        flex: none;
        width: 240px;
        padding: 16px;

        border-left: 1px solid #E5E5E5;
    }
    h2 {
        font-size: 28px;
        margin-bottom: 8px;
        margin-top: 0;
    }
    .about {
        font-size: 14px;
        line-height: 20px;
    }
</style>

<div class="sidebar">
    {#if state == 'welcome'}
        <h2>Главред</h2>
        <div class="about">Помогает очистить текст от словесного мусора и проверяет на соответствие информационному стилю</div>
    {:else}
        <Score score={score}/>
    {/if}
</div>