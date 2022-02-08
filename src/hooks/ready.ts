import registerNotifications from "../notifications/Notification";
import { getGame } from "../scripts/getGame";

// fetches a tip from the API
const fetchPackageList = async (): Promise<string[]> => {
  let packageList: string[] = [];
  getGame().modules.forEach((_value, key) => {
    packageList.push(key);
  });
  packageList.push(getGame().system.id);
  return packageList;
};

// formats the tip
const formatTip = (packageList: string[]): string => {
  let packageID: string | null = null;
  let tipID: number | null = null;
  while (!packageID) {
    const i: number = Math.floor(Math.random() * packageList.length);
    const candidate: string = packageList.splice(i, 1)[0];
    if (getGame().i18n.translations["TIPS"][candidate]) packageID = candidate;
  }

  while (!tipID) {
    const i: number = Math.floor(Math.random() * Object.keys(getGame().i18n.translations["TIPS"][packageID]).length);
    if (getGame().i18n.translations["TIPS"][packageID]) tipID = i;
  }

  return `<h3><i class="fas fa-lightbulb"></i> ${getGame().i18n.localize("FOUNDRYTIPS.didyouknow")}</h3>
<p>${getGame().i18n.localize(`TIPS.${packageID}.${tipID}`)}</p>
`;
};

// displays a fetched tip once
const onceReady = (): void => {
  if (
    (getGame().user?.data.role as number) >= CONST.USER_ROLES.ASSISTANT ||
    getGame().settings.get("tips", "show-everyone-gm-tips")
  ) {
    registerNotifications();
    // fetch a new tip
    fetchPackageList()
      .then((packageList: string[]) => {
        window.vtta.notification.show?.(formatTip(packageList));
      })
      .catch((err) => {
        console.warn("Unable to display tip, fetch failed.");
        console.error(err);
      });
  }
};

type Foo = typeof window["vtta"]["notification"]["show"];

export default onceReady;
