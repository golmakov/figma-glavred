<script>

</script>

<style>
    .placeholder {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
    }
    .select-txt-img {
        flex: none;
        width: 128px;
        height: 64px;

        margin-bottom: 16px;

        background-repeat: no-repeat;
        background-image: url('../../assets/img-nothing-selected.png');
        background-size: 128px 64px;
    }
    .description {
        max-width: 300px;

        text-align: center;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.4);
    }
</style>

<div class="placeholder">
    <div class="select-txt-img"></div>
    <div class="description">Выберите слой с текстом</div>
</div>