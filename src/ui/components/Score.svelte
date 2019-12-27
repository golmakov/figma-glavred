<script>
    export let score;
    let color = 'default';

    // Отсюда — https://gist.github.com/realmyst/1262561
    function declOfNum(n, titles) {
        return titles[(n^0) != n ? 1 : n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2];
    }

    $: color = parseFloat(score) < 7 ? 'bad' : 'default';
</script>

<style>
    .stats {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
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
    <div class="total">{declOfNum(score,["балл","балла","баллов"])} из 10 по шкале Главреда</div>
</div>