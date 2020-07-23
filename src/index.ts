import onceReady from "./hooks/ready";

CONFIG.debug.hooks = false;
// register hooks
Hooks.once("ready", onceReady);
