import registerNotifications from "../notifications/Notification.js";
// const loadJSON = (callback:Function)=> {   
//   var xobj = new XMLHttpRequest();
//       xobj.overrideMimeType("application/json");
//   xobj.open('GET', '../lang/en.json', true);
//   xobj.onreadystatechange = function () {
//         if (xobj.readyState == 4 && xobj.status == 200) {
//           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//           callback(xobj.responseText);
//         }
//   };
//   xobj.send(null);  
// }
// fetches a tip from the API
const fetchTip = async () => {
    let parsedJSON;
    // loadJSON(async function (response:string) {
    //   parsedJSON = await JSON.parse(response);
    // })
    console.log(parsedJSON);
    return { "id": "0", "author": { "name": "test" }, "message": "test2" };
};
// ${tip.message.replace(/\\n/g, "<br/>")}
{ /* <div class="didyouknow author"><span class="name">${tip.id}</span></div> */ }
const formatTip = (tip) => {
    return `<h2>${game.i18n.localize("TIPS.didyouknow")}</h2>
${game.i18n.localize(`TIPS.hints.${Math.floor(Math.random() * 6)}`)}
`;
};
// displays a fetched tip once
const onceReady = () => {
    registerNotifications();
    // fetch a new tip
    fetchTip()
        .then((tip) => {
        window.vtta.notification.show(formatTip(tip), null);
    })
        .catch(() => {
        // eslint-disable-next-line no-console
        console.warn("Unable to display tip, fetch failed.");
    });
};
export default onceReady;

//# sourceMappingURL=ready.js.map
