<script>
    export let score;
    let color = 'default';

    $: color = parseFloat(score) < 7 ? 'bad' : 'default';
</script>

<style>
    .stats {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
    }
    .counter {
        margin-bottom: 8px;

        font-size: 28px;
        font-style: normal;
        font-weight: 600;
    }
    .bad {
        color: #bb0002;
    }
    .default {
        color: #000000;
    }
    .total {
        font-size: 11px;
        color: rgba(0, 0, 0, 0.3);
    }
</style>

<div class="stats">
    <div class="counter {color}">{score}</div>
    <div class="total">балла из 10 по шкале Главреда</div>
</div>