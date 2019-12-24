<script>
    export let title;
    export let description;

    function typograf(text) {
        // Неразрывные пробелы (Спасибо типографу Кирилла Панфилова http://erlang.kirillpanfilov.com/devanagari)
        const preps = ["без", "безо", "в", "во", "вне", "для", "до", "за", "из", "изо", "из-за", "из-под", "к", "ко", "на", "над", "надо", "о", "об", "обо", "около", "от", "ото", "по", "по-над", "под", "подо", "при", "про", "с", "со", "сквозь", "у", "через", "а", "но", "и", "да", "или", "иль", "либо", "не", "ни", "a", "the", "at", "to", "or"];
        for (let i=0; i<preps.length; i++) {
            let tmp = new RegExp("( |^|\\(|«|„|\xA0)("+preps[i]+") ", "ig");
            text = text.replace(tmp,"$1$2\xA0");
        }
        return text;
    }
               
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
        font-size: 12px;
        line-height: 18px;
    }
</style>

<div class="rules">
    <div class="title">{title}</div>
    <div class="description">{typograf(description)}</div>
</div>