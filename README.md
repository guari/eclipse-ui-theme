MoonRise UI Theme
=================

[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=guari&url=http://github.com/guari/eclipse-ui-theme&title=EclipseUITheme&language=&tags=github&category=software)

An early version of a dark UI theme for Eclipse 4+.

![screenshot](https://raw.github.com/guari/eclipse-ui-theme/master/com.github.eclipseuitheme.themes.plugin/screenshot/screenshot-ubuntu_v0.8.2.png)
![screenshot](https://raw.github.com/guari/eclipse-ui-theme/master/com.github.eclipseuitheme.themes.plugin/screenshot/screenshot-windows_v0.8.2.png)

Requirements
------------

* Eclipse 4.2+

Installation
------------

* #### Manual:
Download [moonrise_0.8.5.jar](https://github.com/guari/eclipse-ui-theme/blob/master/com.github.eclipseuitheme.themes.plugin/bin/com.github.eclipseuitheme.moonrise_0.8.5.jar?raw=true) package and put it into your Eclipse ```\dropins\plugins\``` folder;

* #### Update site:
Or download this plugin by using ```Help > Install New Software...``` and add the update site:
<pre>https://raw.github.com/guari/eclipse-ui-theme/master/com.github.eclipseuitheme.themes.updatesite</pre>

* Restart Eclipse and go to ```Window > Preferences > General > Appearance```;

* Select *MoonRise (standalone)* or, for a little better tabs decoration, install *Eclipse 4 Chrome Theme* from marketplace or from [here](https://github.com/jeeeyul/eclipse-themes) and select *MoonRise*;

* Rest your eyes ;)

- - -
### Fine-tuning:

There are some settings that can be changed only from the Eclipse Preferences window and that override the theme's settings by default:

* ##### Change the colors for Content Assist:
Go to ```Window > Preferences > General > Appearance > Colors and Fonts``` then change the colors for ```Basic > Content Assist background color``` and ```Basic > Content Assist foreground color```
(eg. *foreground color: #DDD*, *background color: #333*);

* ##### Change the colors for Console:
Go to ```Window > Preferences > Run/Debug > Console``` and modify the colors as you like
(eg. *Standard Out text color: #DDD*, *Background color: #333*);

* ##### Change the colors for Javadoc:
Go to ```Window > Preferences > General > Appearance > Colors and Fonts``` then change the colors for ```Java > Javadoc view background```.
Note that the foreground color cannot be changed and depends on system font color.

- - -
### Trouble-shooting:

| Problem | Solution |
| ------- | -------- |
| The font of the title of the tabs is different | Ensure that on your machine is installed ```Segoe Print``` font then open the downloaded jar package with an archive explorer, open ```/themes/css/moonrise-ui-standalone.css```, search for any occurrencies of ```font-family``` property and change its value to ```Segoe Print``` (or what ever you prefer), then save/update the jar archive. |
| The size of the title of the tabs is different | Eclipse does not scale it with a DPI-Aware policy. Open the downloaded jar package with an archive explorer, open ```/themes/css/moonrise-ui-standalone.css```, search for ```font-size``` property and modify its value according to your needs then save the file. |
| The label of the checkboxes has a color difficult to read | It's related to a SWT bug, use a system theme that has lighter font color for buttons. |
| The text of the buttons has a color difficult to read (MAC-OSX) | It's related to a SWT bug, try [this](https://github.com/guari/eclipse-ui-theme/blob/master/com.github.eclipseuitheme.themes/bin/com.github.eclipseuitheme.moonrise_0.8.3_OSX.jar?raw=true) 'patched' version if you have this issue (no more needed for v0.8.4+). |
| After updating the plugin, it isn't loaded as expected | Eclipse seems to use some sorts of internal resources caching that don't work always very well. To ensure that it's not an issue related to the new plugin version, create a new workspace and import your projects here, or try with a freshly downloaded Eclipse release |

- - -
### Notes:

Currently this theme uses the CSS-SWT engine introduced in the 4.2 version of the Eclipse Platform and should provide a dark style for each GUI widget that can be handled with the last version of the Eclipse SDK.
This plugin has been tested with the main Eclipse Development Tool packages on Linux distributions, Windows and OSX and with the following Eclipse releases:

* Luna (4.4)
* Kepler (4.3)
* Juno (4.2.x)

It works best with a dark system theme since currently the look of some GUI widgets cannot be overriden directly in Eclipse. The more noticeable issues related to SWT are the `ScrollBar` widgets, the `Table` headers/lines and the arrows to fold/unfold contents that cannot be styled. As minor issues there are `Button` background color on Windows and OSX that cannot be customized (on Windows checkboxes/radio controls do not inherit font color) and some other little bugs related to the CSS engine that makes the customizations harder and unwieldy.
Aside from that, the theme currently might not look perfect on each platform, but should be fully useable on all of them. The Eclipse CSS engine is still under improvement.

#### Syntax highlighting scheme:

![screenshot](https://raw.github.com/guari/eclipse-ui-theme/master/com.github.eclipseuitheme.themes.plugin/screenshot/sources_syntax_colors.png)

You can find the one used in the screenshot here:

* [RainbowDrops.epf](https://github.com/guari/eclipse-ui-theme/blob/master/com.github.eclipseuitheme.themes.plugin/bin/color-scheme/RainbowDrops.epf?raw=true) (most accurate, download and import it with Eclipse built-in Preferences import: ```File > Import...``` then select ```General > Preferences```);

* or [RainbowDrops.xml](https://github.com/guari/eclipse-ui-theme/blob/master/com.github.eclipseuitheme.themes.plugin/bin/color-scheme/RainbowDrops.xml?raw=true) (download and import it with [Eclipse Color Theme Plugin](http://eclipsecolorthemes.org/?view=plugin));

* or [here](http://eclipsecolorthemes.org/?view=theme&id=20025);

Debugging and improvements
--------------------------

Use *CSS Spy* to inspect widgets properties and *CSS Scratchpad* or *Lightweight CSS Editor* to apply a quick customization. To test what elements can be modified or not with CSS, drop a line like this one: `* { background-color:red; color:white; }` into *CSS Scratchpad* (restart Eclipse to reset the theme).

#### Old releases:
The packages previously uploaded can be found into ```/com.github.eclipseuitheme.themes.plugin/bin/``` folder.

References
----------

* http://wiki.eclipse.org/E4
* http://wiki.eclipse.org/Eclipse4/RCP/CSS
* http://wiki.eclipse.org/E4/CSS/SWT_Mapping
* http://www.vogella.com/articles/Eclipse4CSS/article.html

License
-------

Copyright (c) 2012, 2013

This is open source software, licensed under the Eclipse Public License. See the file COPYING for details.

