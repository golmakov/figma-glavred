<script>
    export let title;
    export let description;
</script>

<style>
    .rules {
        display: flex;
        flex-direction: column;

        margin-top: 40px;
    }
    .title {
        margin-bottom: 8px;

        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
    .description {
        font-weight: normal;
        font-size: 11px;
        line-height: 16px;
    }
</style>

<div class="rules">
    <div class="title">{title}</div>
    <div class="description">{description}</div>
</div>