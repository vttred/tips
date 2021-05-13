# Foundry Tips
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
 
Learn how to use Foundry one tip at a time.
 
![A partial screenshot of the Foundry app with a text box that says \"Did You Know? Doors can have vision/light passing through, just like invisible walls. Double click the door node and select Perception Restriction \"None\" from the config dialog.\"](https://github.com/vttred/tips/blob/main/img/tips.PNG?raw=true "Foundry Tips Screenshot")
 
Foundry Tips is a FVTT module that displays random Foundry usage tips whenever
the user logs into a world. They can receive a core Foundry tip, a system-
specific tip, or a tip for another module!

## Installation

Foundry Tips is now available in the official Foundry VTT package list! Find
it in the package list, or follow these steps.

1. Copy the manifest URL: `https://github.com/vttred/tips/releases/latest/download/module.json`
2. Go to Foundry's Configuration and Setup > Add-on Modules, click Install Module.
3. Paste the manifest URL in the provided input box, and click Install.
 
## Developing Tips for your own Foundry package
 
At this time, you may begin adding tips for your own module or system to your
localization files. These will automatically get loaded into Foundry Tips and
a random tip for an enabled package (or a core tip) will be shown to the user.
 
In your localization file, use the following structure.
 
```json
// example: modules/yourexactmodulename/lang/en.json
{
    //...
    "TIPS.yourexactmodulename" : {
        "0"         : "This is a tip.",
        "1"         : "This is the second tip.",
        //...
        "9999"      : "this is the last tip"
    }
    //...
}
```
 
No code! Just JSON! Please contact me if you use Foundry Tips and
need some help. Suggestions for restructuring the JSON are also
welcome at this time. Thank you!

### Special Implementation Requests

Direct special implementation requests to [tips@vtt.red][11]. Closed source
package tip-writing help, images, links, video, opening menus/highlighting
buttons). Your imagination with no limitations!
 
## Contributing

### Contributing code

Fork this Repo! Clone your fork into a local directory. Create a branch
named after the improvement or fix you wish to solve, and append the issue
number. For example, `git checkout -b readme-improvements-9`. When you're done,
create a pull request to this repo with your completed change.

You agree to license your code under the MIT Expat license. Your name and git.email
will be added to the [CONTRIBUTORS][18] file. Either you or your employer will be
added to the [AUTHORS][19] file. Please indicate if your contribution is part of your
lawful employment.  

### Contributing tips in English

The easiest way you can contribute is just by answering Foundry Core
questions in the [Discussions][7] or in #core-how-to on the
[official Foundry VTT Discord server][8]. If you helped someone use
core Foundry from April 2021 onward, ask me for a contributor credit by
opening a new Issue.

You can also contribute tips directly by opening Issues, replying to
Issues, and opening Pull Requests in this GitHub repository. You agree that
your tip contributions are [CC BY 4.0][14] licensed.

**Note: A tip you've learned from someoneone else and written in your own words can be attributed to you as the author. A tip taken word-for-word from someone else can't be used without their permission. Facts are *libre,* writing is copyright protected.**

### Contributing tip translations

Each tip translation must match the key (the number before the tip
text) of the English tip. You may skip tip translations so long as
you also skip each number/key of the skipped tips.

VTT Red is in contact with a couple members of the Foundry community
to best serve their localization needs. Please contact corporat#1282
on Discord for further assistance.

### Contributing `dnd5e` and `worldbuilding` tips

Two packages, [`dnd5e`][12] and [`worldbuilding`][13] are maintained
by Foundry Gaming, and FG is not likely to maintain a tip repository
of their own. For these two packages only, we will accept contributions
into this repository. All other package tips should be contributed
to their respective package repositories.

## Changelog

See [Releases][9].

## License

Package code is available under the MIT Expat license. See [LICENSE][10].
Your obligation under the MIT Expat license is to credit the authors and
acknowledge their copyright.

```
Copyright (c) 2020-2021 VTTAssets, VTT Red LLC
```

Tips are available under [Creative Commons Attribution 4.0 International][14].
Your obligation under the Creative Commons license is to provide a title,
author, source, and the license name, with links to the canonical source,
author profile page (if available), and license text. The tip title is 
`(packagename/Core) Foundry Tip Number (tipnumber)` unless otherwise stated.

A link to the tip on https://foundry.tips is sufficient in most cases (Coming soon!)

```md
[Core Foundry Tip Number One](https://github.com/vttred/tips) by [Anthony Ronda](https://github.com/anthonyronda) is licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
```

## Acknowledgements
 
* Forked from [VTTAssets][1]/[VTTA-didyouknow][2] with the blessing of Sebastian from [VTTA.io][3]
* Uses [League-of-Foundry-Developers][4]/[FoundryVTT-Module-Template][5]. Copyright (c) Repository Owner and Contributors
* Uses [League-of-Foundry-Developers][4]/[foundry-vtt-types][6]. Copyright (c) Kai Moshchcau and Contributors
* Stylesheet ideas from [ardittristan][16]/[VTTButtonOverflow][17] Copyright (c) ardittristan
* This Foundry VTT module is made possible by the [Limited License Agreement for Module
Development][15]. Foundry VTT is a trademark of Foundry Gaming LLC.
 
[1]: https://github.com/VTTAssets
[2]: https://github.com/VTTAssets/vtta-didyouknow
[3]: https://vtta.io
[4]: https://github.com/League-of-Foundry-Developers
[5]: https://github.com/League-of-Foundry-Developers/FoundryVTT-Module-Template
[6]: https://github.com/League-of-Foundry-Developers/foundry-vtt-types
[7]: https://github.com/vttred/tips/discussions
[8]: https://discord.gg/foundryvtt
[9]: https://github.com/vttred/tips/releases
[10]: https://github.com/vttred/tips/blob/main/LICENSE
[11]: mailto:tips@vtt.red
[12]: https://www.foundryvtt-hub.com/package/dnd5e/
[13]: https://www.foundryvtt-hub.com/package/worldbuilding/
[14]: http://creativecommons.org/licenses/by/4.0/
[15]: https://foundryvtt.com/article/license/
[16]: https://github.com/ardittristan/
[17]: https://github.com/ardittristan/VTTButtonOverflow/
[18]: https://github.com/vttred/tips/blob/main/CONTRIBUTORS
[19]: https://github.com/vttred/tips/blob/main/AUTHORS

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/VanceCole"><img src="https://avatars.githubusercontent.com/u/16364586?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vance Cole</b></sub></a><br /><a href="#ideas-VanceCole" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/Norc"><img src="https://avatars.githubusercontent.com/u/64667579?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Norc</b></sub></a><br /><a href="#ideas-Norc" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://lordzeel.com"><img src="https://avatars.githubusercontent.com/u/1721836?v=4?s=100" width="100px;" alt=""/><br /><sub><b>zeel</b></sub></a><br /><a href="#ideas-zeel01" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!