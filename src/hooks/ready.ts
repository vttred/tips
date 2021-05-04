import registerNotifications from "../notifications/Notification";

// fetches a tip from the API
const fetchPackageList = async (): Promise<string[]> => {
  let packageList:string[] = new Array;
  game.modules.forEach((_value: Game.Module, key: string, _map: Map<string, Game.Module>) => {
    packageList.push(key);
  })
  packageList.push(game.system.id);
  return packageList;
};
// ${tip.message.replace(/\\n/g, "<br/>")}
/* <div class="didyouknow author"><span class="name">${tip.id}</span></div> */
const formatTip = (packageList:string[]):string => {
  let packageID:string;
  while(!packageID)
  {
    const i:number = Math.floor(Math.random()*packageList.length);
    const candidate:string = packageList.splice(i,1)[0];
    if (game.i18n.translations["TIPS"][candidate]) packageID = candidate;
  }

  return `<h3><i class="fas fa-lightbulb"></i> ${game.i18n.localize("TIPS.?")}</h3>
<p>${game.i18n.localize(`TIPS.${packageID}.${Math.floor(Math.random()*Object.keys(game.i18n.translations["TIPS"][packageID]).length)}`)}</p>
`;
};

// displays a fetched tip once
const onceReady = (): void => {
  registerNotifications();

  // fetch a new tip
  fetchPackageList()
    .then((packageList:string[]) => {
      window.vtta.notification.show(formatTip(packageList), null);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.warn("Unable to display tip, fetch failed.");
      console.error(err);
    });
};

export default onceReady;
