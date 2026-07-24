const MODULE_ID = "pf2e-mythic-proficiency";

Hooks.once("init", () => {
    game.settings.register(MODULE_ID, "value", {
        name: `${MODULE_ID}.settings.value.name`,
        hint: `${MODULE_ID}.settings.value.hint`,
        scope: "world",
        config: true,
        type: Number,
        default: 5,
    });
});

Hooks.once("ready", () => {
    const orig = game.pf2e.Check.roll;
    game.pf2e.Check.roll = async function (check, context = {}, ...rest) {
        const value = game.settings.get(MODULE_ID, "value");
        if (value && (context.type === "skill-check" || context.type === "saving-throw")) {
            check.push(
                new game.pf2e.Modifier({
                    slug: "mythic-proficiency",
                    label: game.i18n.localize(`${MODULE_ID}.modifier.label`),
                    modifier: value,
                    type: "untyped",
                    // ponytail: ignored:true renders it as an unchecked toggle in the roll dialog
                    ignored: true,
                }),
            );
        }
        return orig.call(this, check, context, ...rest);
    };
});
