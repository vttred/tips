import registerNotifications from "../notifications/Notification";

interface Author {
  name: string;
}

interface TipJSON {
  id: string;
  author: Author;
  message: string;
}

const loadJSON = (callback:Function)=> {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', '../lang/en.json', true); // Replace 'appDataServices' with the path to your file
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == 200) {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
}

// fetches a tip from the API
const fetchTip = async (): Promise<TipJSON> => {
  let parsedJSON:Array<TipJSON>;
  
  loadJSON(function (response:string) {
    parsedJSON =  JSON.parse(response);
  })

  return parsedJSON[Math.random()*parsedJSON.length |0];
};

const formatTip = (tip: TipJSON) => {
  return `<h2>Did you know?</h2>
  ${tip.message.replace(/\\n/g, "<br/>")}
  <div class="didyouknow author"><span class="name">${tip.author.name}</span></div>
  `;
};

// displays a fetched tip once
const onceReady = (): void => {
  registerNotifications();

  // fetch a new tip
  fetchTip()
    .then((tip: TipJSON) => {
      window.vtta.notification.show(formatTip(tip), null);
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.warn("Unabled to display tip, fetch failed.");
    });
};

export default onceReady;
