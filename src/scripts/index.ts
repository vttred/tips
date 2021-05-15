import onceInit from "../hooks/init";
import onceReady from "../hooks/ready";
import onRenderPlayerList from "../hooks/renderPlayerList";

CONFIG.debug.hooks = false;
// register hooks
Hooks.once("init", onceInit);
Hooks.once("ready", onceReady);
Hooks.on("renderPlayerList", onRenderPlayerList);
