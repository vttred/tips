import { getGame } from "../scripts/getGame.js";
/**
 * onceInit
 */
const onceInit = () => {
    getGame().settings.register('tips', 'show-everyone-gm-tips', {
        name: getGame().i18n.localize('FOUNDRYTIPS.showeveryone'),
        hint: getGame().i18n.localize('FOUNDRYTIPS.showeveryone-hint'),
        scope: 'world',
        config: true,
        type: Boolean
    });
};
export default onceInit;

//# sourceMappingURL=init.js.map
