# PF2e Mythic Proficiency

Foundry VTT module for the PF2e system. Adds a toggleable flat modifier to skill checks and saving throws.

## What it does

Injects a **Mythic Proficiency** modifier into every skill check and saving throw. It shows up as an unchecked box in the roll dialog — tick it when you want the bonus, leave it off otherwise. The modifier value is a single world setting (default `+5`).

## Install

In Foundry, go to **Add-on Modules → Install Module** and paste this manifest URL:

```
https://github.com/simplyjaytea/pf2e-mythic-proficiency/releases/latest/download/module.json
```

## Configure

**Game Settings → Configure Settings → Mythic Proficiency** — set the modifier value. `0` disables it.

## Releasing

Push a `v*` tag (e.g. `git tag v1.0.1 && git push --tags`). The GitHub Action builds `module.zip`, stamps the version from the tag, and publishes a release.
