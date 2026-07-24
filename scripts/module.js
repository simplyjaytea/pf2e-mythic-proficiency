const MODULE_ID = "pf2e-mythic-proficiency";
const RANKS = ["untrained", "trained", "expert", "master", "legendary"];

Hooks.once("init", () => {
    game.settings.register(MODULE_ID, "value", {
        name: `${MODULE_ID}.settings.value.name`,
        hint: `${MODULE_ID}.settings.value.hint`,
        scope: "world",
        config: true,
        type: Number,
        default: 10,
    });
});

function currentRank(context) {
    const opts = context.options ?? [];
    const set = opts instanceof Set ? opts : new Set(opts);
    for (let r = RANKS.length - 1; r >= 0; r--) {
        if (set.has(`proficiency:${RANKS[r]}`)) return r;
    }
    return 0;
}

Hooks.once("ready", () => {
    const orig = game.pf2e.Check.roll;
    game.pf2e.Check.roll = async function (check, context = {}, ...rest) {
        if (context.type === "skill-check" || context.type === "saving-throw") {
            const mythic = game.settings.get(MODULE_ID, "value");
            // ponytail: assumes 2-per-rank; ignores variant proficiency-modifier world settings
            const bonus = mythic - currentRank(context) * 2;
            if (bonus > 0) {
                check.push(
                    new game.pf2e.Modifier({
                        slug: "mythic-proficiency",
                        label: game.i18n.localize(`${MODULE_ID}.modifier.label`),
                        modifier: bonus,
                        type: "untyped",
                        // ponytail: ignored:true renders it as an unchecked toggle in the roll dialog
                        ignored: true,
                    }),
                );
            }
        }
        return orig.call(this, check, context, ...rest);
    };
});
