const onRenderPlayerList = (_playerList, html) => {
    // console.warn("help")
    document.body.style.setProperty("--playerlist-height", `${html.height()+22}px`);

}

export default onRenderPlayerList;