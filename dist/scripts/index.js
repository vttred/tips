import onceReady from "../hooks/ready.js";
import onRenderPlayerList from "../hooks/renderPlayerList.js";
CONFIG.debug.hooks = false;
// register hooks
Hooks.once("ready", onceReady);
Hooks.on("renderPlayerList", onRenderPlayerList);

//# sourceMappingURL=index.js.map
