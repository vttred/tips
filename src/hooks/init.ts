const onceInit = (): void =>{
    game.settings.register('tips', 'show-everyone-gm-tips', {
        name: game.i18n.localize('FOUNDRYTIPS.showeveryone',),
        hint: game.i18n.localize('FOUNDRYTIPS.showeveryone-hint'),
        scope: 'world',
        config: true,
        type: Boolean
      });
};

export default onceInit;