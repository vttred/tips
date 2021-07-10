import registerNotifications from "../notifications/Notification.js";
import { getGame } from "../scripts/getGame.js";
// fetches a tip from the API
const fetchPackageList = async () => {
    let packageList = new Array;
    getGame().modules.forEach((_value, key, _map) => {
        packageList.push(key);
    });
    packageList.push(getGame().system.id);
    return packageList;
};
// formats the tip
const formatTip = (packageList) => {
    let packageID = null;
    let tipID = null;
    while (!packageID) {
        const i = Math.floor(Math.random() * packageList.length);
        const candidate = packageList.splice(i, 1)[0];
        if (getGame().i18n.translations["TIPS"][candidate])
            packageID = candidate;
    }
    while (!tipID) {
        const i = Math.floor(Math.random() * Object.keys(getGame().i18n.translations["TIPS"][packageID]).length);
        if (getGame().i18n.translations["TIPS"][packageID])
            tipID = i;
    }
    return `<h3><i class="fas fa-lightbulb"></i> ${getGame().i18n.localize("FOUNDRYTIPS.didyouknow")}</h3>
<p>${getGame().i18n.localize(`TIPS.${packageID}.${tipID}`)}</p>
`;
};
// displays a fetched tip once
const onceReady = () => {
    var _a;
    if (((_a = getGame().user) === null || _a === void 0 ? void 0 : _a.data.role) >= CONST.USER_ROLES.ASSISTANT || getGame().settings.get("tips", "show-everyone-gm-tips")) {
        registerNotifications();
        // fetch a new tip
        fetchPackageList()
            .then((packageList) => {
            var _a, _b;
            (_b = (_a = window.vtta.notification).show) === null || _b === void 0 ? void 0 : _b.call(_a, formatTip(packageList));
        })
            .catch((err) => {
            console.warn("Unable to display tip, fetch failed.");
            console.error(err);
        });
    }
};
export default onceReady;

//# sourceMappingURL=ready.js.map
