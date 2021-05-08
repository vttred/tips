import onceReady from "../hooks/ready";
import onRenderPlayerList from "../hooks/renderPlayerList";

CONFIG.debug.hooks = false;
// register hooks
Hooks.once("ready", onceReady);
Hooks.on("renderPlayerList", onRenderPlayerList);
