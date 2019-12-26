<script>
</script>

<style>
    @keyframes spinner {
        to {transform: rotate(360deg);}
    }
    .overlay {
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;

        background: rgba(255,255,255,0.6);
    }
    .loader {
        margin: auto;

        width: 16px;
        height: 16px;

        background: url(../../../assets/img/loader.svg) 0 0 no-repeat;
        animation: spinner .8s linear infinite;
    }
</style>

<div class="overlay">
    <div class="loader"></div>
</div>