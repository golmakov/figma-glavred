figma.showUI(__html__, {width: 660, height: 600});

function getSelectedText() {
    let selection = figma.currentPage.selection;
    if (selection.length > 0 && selection[0].type === 'TEXT') {
        figma.ui.postMessage({action: 'showTxt', text: selection[0].characters });
    }
}

figma.on("selectionchange", () => {
    getSelectedText();
})

getSelectedText();

figma.ui.onmessage = (message) => {
    switch (message.action) {
        case 'serverError':
            figma.notify("Сервер главреда не отвечает 😨");
            break;
    }
}