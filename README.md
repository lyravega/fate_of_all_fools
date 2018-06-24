***UPDATE 2: 6/19/2018***
Breaking change to how `FOAF` is deployed. Please re-install from [OpenUserJS](https://openuserjs.org/scripts/rslifka/FateOfAllFools_-_DIM_Customization). This was to both make auto-update possible from OUJS as well and fix an intermittent hosting issue with GitHub's releases.

***UPDATE 1: 6/15/2018***
With the recent news that Forsaken will have random rolls, the current strategy for listing and rating weapons and armor will no longer work as you cannot rate a weapon by the name any more (well, going forward since D2Y1 items will stay statically rolled). I'm going to have to split the sheets apart either in to separate tabs within one sheet or multiple sheets.

# Fate of All Fools
[![Build Status](https://travis-ci.org/rslifka/fate_of_all_fools.svg?branch=master)](https://travis-ci.org/rslifka/fate_of_all_fools)

`FOAF` is a [TamperMonkey](https://tampermonkey.net/)-based suite of enhancements to [Destiny Item Manager](https://www.destinyitemmanager.com/) (DIM) for Destiny 2. It's also the name of a [unique weapon](http://destinydb.com/item/3490486524/fate-of-all-fools) and part of a [really touching story](https://www.reddit.com/r/DestinyTheGame/comments/2lgxd4/deej_just_sent_my_husband_the_new_exotic_fate_of/).

***This is only compatible with the [online version of DIM](https://app.destinyitemmanager.com/), not the extension. Chrome prevents extensions from accessing one another.***

# TL;DR
1. Install a UserScript hosting environment (e.g. [Tampermonkey in Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)).
1. One-click install the UserScript from [OpenUserJS](https://openuserjs.org/scripts/rslifka/FateOfAllFools_-_DIM_Customization).

# Introduction

I've used DIM for years and find it indispensable. There are a few nits I've wanted to fix from styling to information density. I've also wanted to add workflow-specific features that are unique to the way I play Destiny. These changes range from slight preferences to how I prefer to organize, which I realize are super subjective and perhaps best done as a layer on top of DIM versus adding features to the core. Some examples:

* With Destiny 2's static weapon drops, it's far easier to have a tidy vault. [I've been tracking drops](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ06pCDSdvu2nQzgHMXl22ci-6pO9rTTmvZmlKXaiBrIHVhl1X1awIaHEOagZcs4ME4X9ZMEghBP9NE/pubhtml) and capturing my ratings. I'd like these to make their way back in to DIM without having to refer to a separate sheet.
* I'd like these ratings to be available at-a-glance so I can quickly decide if a weapon is appropriate for a given type of activity. Quick, pick a scout rifle that's good for PvP! (assuming you don't want to use `Nameless Midnight` as your sole SR forever).
* Let's say I get a drop I'm not a fan of (e.g. `Bad News`). I break it down. Another `Bad News` drops a month later. Rather than have to drop in to the EDZ and shoot Cabal to re-assess the weapon, I'd prefer to know if I previously did that, what the results were and any comments I had about it (e.g. `"So close! Give this one a go once hand cannons are buffed"`).

# Features
Check out the [walkthrough video!](https://www.youtube.com/watch?v=AW5kWLvGKqI)

[![Fate of All Fools Walkthrough Video!](https://rslifka.github.io/fate_of_all_fools/img/fate-youtube-screenshot.jpg)](https://www.youtube.com/watch?v=AW5kWLvGKqI)

## Additions
* Displays information at-a-glance derived from your custom external source of weapon quality assessments. **You can create your own sheet from my template to specify your own rankings!** (see below). There is limited support for armor and shaders as well. Since armor is armor, there's only mod-presence support. Since shaders are shaders, there's only binary quality support.
* **Duplicate items are shown at-a-glance**, and duplicate items with a lower light level are indicated as well. When hovering over a these icons, all other duplicates are highlighted.
* **Infusable items are indicated with an up-arrow icon.** Hovering over this icon will highlight items that it can use for infusion, as well as what the light will be after infusion (helps remove mod misinterpretation!).
* **Infusion fodder are indicated with an up-arrow icon.** This is the reverse of the previous feature. Hovering over this icon will show you what weapons will benefit from infusing the focused weapon.

## Modifications
* **Consistent, subdued background throughout**: No need for the contrast between guardian inventory and vault; the grouping of items is enough.
* **Improved display of power level**: Maybe it's because I'm forty now :) that the font for power level was too small and difficult to read. Slight increase to the font size and decrease (increase?) to the opacity to make it stand out more.
* **The tooltip has been repurposed** with information from the aforementioned Google Sheet.
* **Light level border indicates element**: By default, the elemental damage type was the background color of the power level. That's a visual cue that seems excessive in a screen full of gear, so I've used a thin top border of the power level itself.
* **Removed yellow border for mods**: This has been replaced with a dot after the light level of a weapon or piece of armor. The yellow border was too much visual distraction for this small bit of information, and overwhelming to look at a vault full of yellows. It's also hard to turn off the part of my brain that thinks this is a "fully leveled item" from Destiny 1 :)

## Removals
* **Remove subclass icons**: I've never switched subclasses this way. OK, maybe once to see if it worked (it does!) but never enough to warrant having this displayed at all times.
* **Remove collapse controls**: I never use these, especially now that DIM split Progress out to another tab. Certainly a part of my workflow I can live without. *Note that you can still click the section headings for this functionality*.

# Installation and Configuration

1. Install [TamperMonkey](https://tampermonkey.net/). It may work with other UserScript extensions though I haven't tried, and won't, but you're welcome to! ¯\\_(ツ)_/¯
1. FOAF is hosted over on OpenUserJS; [one-click install](https://openuserjs.org/scripts/rslifka/FateOfAllFools_-_DIM_Customization) from there. **At this point you're good to go!** The only trouble that you'll be look at my weapon assessments and not your own, which is sort of the whole point of this UserScript ;)
1. Duplicate my [weapon assessments sheet](https://docs.google.com/spreadsheets/d/16BO3r1B5vuLtCnR06l_rtCl_WlWVDkg_9C9Gu-v-xi4/edit?usp=sharing) as a starting point (`File` => `Make a copy...`).
1. Ensure that your sheet is published to the web (`File` => `Publish to the Web...`) and that in publish settings you've selected `Entire Document` and `Tab-seperated values (.tsv)`.
1. Open DIM.
1. Configure FATE by clicking the link in the lower left of your screen `[FATE Config]`.
1. Replace the URL with your own customized Google Sheet.
1. [FIGHT FOREVERRRR GUARDIANNN](https://www.youtube.com/watch?v=sAhhgmf6Xg8&feature=youtu.be&t=5)!!!

# Development
`Fate of All Fools` is a node-based project. Please see [package.json](https://github.com/rslifka/fate_of_all_fools/blob/master/package.json) for a list of dependencies. Much of the complexity of the project settings has been done to have the modify => refresh => evaluate loop happen as quickly as possible when working locally.

## Environment
1. [Install TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) from the Chrome Web Store.
1. Enable `Allow access to file URLs` in Tampermonkey extension configuration inside of Chrome. This allows you to refresh your browser to pick up local changes during active development, using the file URLs present in the next steps.
1. Add a script, and paste the contents of [fateOfAllFools.dev.user.js](https://github.com/rslifka/fate_of_all_fools/blob/master/fateOfAllFools.dev.user.js).
1. Modify the `@require` and `@resource` directives to be accurate based on your filesystem.
1. `npm install`
1. `brunch watch` Monitors filesystem for changes to JS and CSS, building as appropriate.
1. `karma start` Starts the karma server, which refreshes based on changes to the watched scripts, and continuously runs the tests.

## Deployment
* Build and deploy is done via Travis. After each successful build, the version number is ticked and the source files published as the `current` GitHub release.
* Ticking the version number is signal to Tampermonkey to invalidate the `@require` and `@resource` assets (i.e. JavaScript and CSS).
