figma.showUI(__html__, {width: 740, height: 680});

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