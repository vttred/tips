import { getGame } from "../scripts/getGame";

/**
 * onceInit
 */
const onceInit = (): void => {
  getGame().settings.register('tips', 'show-everyone-gm-tips', {
    name: getGame().i18n.localize('FOUNDRYTIPS.showeveryone',),
    hint: getGame().i18n.localize('FOUNDRYTIPS.showeveryone-hint'),
    scope: 'world',
    config: true,
    type: Boolean
  });
};

export default onceInit;

