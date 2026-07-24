# PF2e Mythic Proficiency

Foundry VTT module for the PF2e system. Adds a toggleable flat modifier to skill checks and saving throws.

## What it does

Injects a **Mythic Proficiency** modifier into every skill check and saving throw. It shows up as an unchecked box in the roll dialog — tick it when you want the bonus, leave it off otherwise.

The bonus is computed per roll to fill the gap from the actor's current proficiency rank up to a mythic rank: `mythic bonus − current rank × 2`. With the default mythic bonus of `10`, a legendary actor gets `+2`, an expert `+6`, an untrained one `+10` — each promoted to the same mythic total. The modifier is untyped, so it stacks with everything.

## Install

In Foundry, go to **Add-on Modules → Install Module** and paste this manifest URL:

```
https://github.com/simplyjaytea/pf2e-mythic-proficiency/releases/latest/download/module.json
```

## Configure

**Game Settings → Configure Settings → Mythic Proficiency Bonus** — set the mythic rank's target proficiency bonus (default `10`).

## Releasing

Push a `v*` tag (e.g. `git tag v1.0.1 && git push --tags`). The GitHub Action builds `module.zip`, stamps the version from the tag, and publishes a release.
