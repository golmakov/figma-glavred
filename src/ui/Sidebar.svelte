<script>
    import Score from './components/Score.svelte';
    import RuleDescription from './components/RuleDescription.svelte';
    import ProblemsList from './components/ProblemsList.svelte';

    export let state = 'welcome';
    export let score;
    export let hints;
    export let current;

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
        margin-bottom: 8px;
    }
    .links {
        margin-top: 8px;

        font-size: 12px;
        line-height: 20px;
    }
    .links > a {
        color: #18A0FB;
        text-decoration: none;
        border-bottom: 1px solid rgba(24, 160, 250, 0.15);
    }
</style>

<div class="sidebar">
    {#if state == 'welcome'}
        <h2>Главред</h2>
        <div class="about">Помогает очистить текст от словесного мусора и проверяет на соответствие информационному стилю</div>
        <div class="links"><a href="https://soviet.glvrd.ru/" target="_blank">Советы о редактуре</a></div>
        <div class="links"><a href="https://book.glvrd.ru/" target="_blank">Книга «Пиши, сокращай»</a></div>
        <div class="links"><a href="https://glvrd.ru/about/" target="_blank">О проекте Главред</a></div>
    {:else}
        <Score score={score}/>
        <ProblemsList {hints} {current}/>
        {#if current}
            <RuleDescription title={current['name']} description={current['description']} />
        {/if}
    {/if}
</div>