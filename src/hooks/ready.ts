import registerNotifications from "../notifications/Notification";

interface Author {
  name: string;
  icon: string;
}

interface ApiResponse {
  id: string;
  author: Author;
  message: string;
}

// fetches a hint from the API
const fetchHint = async (): Promise<ApiResponse> => {
  const API_SERVER = "https://didyouknow.vttassets.com";

  try {
    const raw = await fetch(API_SERVER);
    const response = <ApiResponse>await raw.json();
    return response;
  } catch (error) {
    console.log("Unable to fetch 'Did you know?' hint");
  }
  return null;
};

const formatHint = (hint: ApiResponse) => {
  return `<h2>Did you know?</h2>
  ${hint.message.replace(/\\n/g, "<br/>")}
  <div class="didyouknow link"><a target="_blank" href="https://discord.gg/yEyxJBH">Contributed by</a></div>
  <div class="didyouknow author"><img src="${hint.author.icon}"/><span class="name">${hint.author.name}</span></div>
  `;
};

// displays a fetched hint once
const onceReady = (): void => {
  console.log("We are in ready");
  registerNotifications();

  // fetch a new hint
  fetchHint()
    .then((hint: ApiResponse) => {
      window.vtta.notification.show(formatHint(hint), null);
    })
    .catch((error) => {
      console.log("Unabled to display hint, fetch failed.");
    });
};

export default onceReady;
