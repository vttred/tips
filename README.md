# Foundry Tips
 
Learn how to use Foundry one tip at a time.
 
![A partial screenshot of the Foundry app with a text box that says "Did You Know? If a player has ownership of two or more tokens in the scene, the Tab key cycles selection between each token."](https://github.com/vttred/tips/img/blob/main/tips.png?raw=true "Foundry Tips Screenshot")
 
Foundry Tips is a module that displays random Foundry usage tips whenever
the user logs into a world.

## Installation

1. Copy the manifest URL: `https://github.com/vttred/tips/releases/latest/download/module.json`
2. Go to Foundry's Configuration and Setup > Add-on Modules, click Install Module.
3. Paste the manifest URL in the provided input box, and click Install.
 
## Developing Tips for your own Foundry package
 
At this time, you may begin adding tips for your own module or system to your
localization files. These will automatically get loaded into Foundry Tips and
a random tip for an enabled package (or a core tip) will be shown to the user.
 
In your localization file, use the following structure.
 
```json
// /lang/en.json
{
    ...
    "TIPS.yourexactmodulename" : {
        "0"         : "This is a tip.",
        "1"         : "This is the second tip.",
        ...
        "9999"      : "this is the last tip"
    }
    ...
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
 
The easiest way you can contribute is just by answering Foundry Core
questions in the [Discussions][7] or in #core-how-to on the
[official Foundry VTT Discord server][8]. If you helped someone use
core Foundry from April 2021 onward, ask me for a contributor credit by
opening a new Issue.

You can also contribute tips directly by opening Issues, replying to
Issues, and opening Pull Requests.

## Changlog

See [Releases][9].

## License

This module is available under the MIT Expat license. See [LICENSE][10].
Your obligation under the license is to credit the authors.
 
## Acknowledgements
 
* Forked from [VTTAssets][1]/[VTTA-didyouknow][2] with the blessing of
  Sebastian from [VTTA.io][3] (sorry it took me so long!)
* Uses [League-of-Foundry-Developers][4]/[FoundryVTT-Module-Template][5]
* Uses [League-of-Foundry-Developers][4]/[foundry-vtt-types][6]
 
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
