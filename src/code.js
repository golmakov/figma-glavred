figma.showUI(__html__, {width: 760, height: 600});

figma.on("selectionchange", () => {
    let selection = figma.currentPage.selection;
    if (selection && selection[0].type === 'TEXT') {
        figma.ui.postMessage({action: 'showTxt', text: selection[0].characters });
    }
})