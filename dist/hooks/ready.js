import registerNotifications from "../notifications/Notification.js";
// fetches a tip from the API
const fetchPackageList = async () => {
    let packageList = new Array;
    game.modules.forEach((_value, key, _map) => {
        packageList.push(key);
    });
    packageList.push(game.system.id);
    return packageList;
};
// ${tip.message.replace(/\\n/g, "<br/>")}
/* <div class="didyouknow author"><span class="name">${tip.id}</span></div> */
const formatTip = (packageList) => {
    let packageID;
    let tipID;
    while (!packageID) {
        const i = Math.floor(Math.random() * packageList.length);
        const candidate = packageList.splice(i, 1)[0];
        if (game.i18n.translations["TIPS"][candidate])
            packageID = candidate;
    }
    while (!tipID) {
        const i = Math.floor(Math.random() * Object.keys(game.i18n.translations["TIPS"][packageID]).length);
        if (game.i18n.translations["TIPS"][packageID])
            tipID = i;
    }
    return `<h3><i class="fas fa-lightbulb"></i> ${game.i18n.localize("FOUNDRYTIPS.didyouknow")}</h3>
<p>${game.i18n.localize(`TIPS.${packageID}.${tipID}`)}</p>
`;
};
// displays a fetched tip once
const onceReady = () => {
    if (game.user.data.role >= CONST.USER_ROLES.ASSISTANT || game.settings.get("tips", "show-everyone-gm-tips")) {
        registerNotifications();
        // fetch a new tip
        fetchPackageList()
            .then((packageList) => {
            window.vtta.notification.show(formatTip(packageList), null);
        })
            .catch((err) => {
            // eslint-disable-next-line no-console
            console.warn("Unable to display tip, fetch failed.");
            console.error(err);
        });
    }
};
export default onceReady;

//# sourceMappingURL=ready.js.map
