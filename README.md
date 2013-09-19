MoonRise UI Theme
=================

An early version of a dark UI theme for Eclipse 4+.

![screenshot](https://raw.github.com/guari/eclipse-ui-theme/master/com.github.eclipseuitheme.themes/screenshot/screenshot-ubuntu_v0.8.2.png)
![screenshot](https://raw.github.com/guari/eclipse-ui-theme/master/com.github.eclipseuitheme.themes/screenshot/screenshot-windows_v0.8.2.png)

Requirements
------------

* Eclipse 4.2+

Installation
------------

* Download [moonrise_0.8.2_standalone.jar](https://github.com/guari/eclipse-ui-theme/blob/master/com.github.eclipseuitheme.themes/bin/com.github.eclipseuitheme.moonrise_0.8.2_standalone.jar?raw=true) package and put it into your Eclipse ```\dropins\plugins\``` folder;

* Restart Eclipse and go to ```Window > Preferences > General > Appearance``` and select *MoonRise*;

* Rest your eyes ;)

##### OR (for a little better tabs decoration):

* Download [moonrise_0.8.2.jar](https://github.com/guari/eclipse-ui-theme/blob/master/com.github.eclipseuitheme.themes/bin/com.github.eclipseuitheme.moonrise_0.8.2.jar?raw=true) package and put it into your Eclipse ```\dropins\plugins\``` folder;

* Install *Eclipse 4 Chrome Theme* from marketplace or from [here](https://github.com/jeeeyul/eclipse-themes);

* Restart Eclipse and go to ```Window > Preferences > General > Appearance``` and select *MoonRise*;

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
| The font of the title of the tabs is different | Ensure that on your machine is installed ```Segoe Print``` font. |
| The size of the title of the tabs is different | Eclipse does not scale it with a DPI-Aware policy. Open the jar package downloaded with a file archiver, open ```/themes/css/moonrise-ui.css```, search for ```font-size``` property and modify its value according to your needs. |
| The label of the checkboxes has a color difficult to read | It's related to a SWT bug, use a system theme that has lighter font color for buttons. |
| The text of the buttons has a color difficult to read (MAC-OSX) | It's related to a SWT bug, try [this](https://github.com/guari/eclipse-ui-theme/blob/master/com.github.eclipseuitheme.themes/bin/com.github.eclipseuitheme.moonrise_0.8.2_OSX.jar?raw=true) 'patched' version if you have this issue. |

- - -
### Notes:

Tested on the following Eclipse release:

* Luna (4.4)
* Kepler (4.3)
* Juno (4.2.x)

Works best with a dark system theme since currently the look of some GUI widgets cannot be overriden directly in Eclipse (eg. scrollbar, table header, button etc.) and a dark color scheme for the Eclipse code editor (you can create your own or download one from http://www.eclipsecolorthemes.org/).

#### Syntax highlighting scheme:

You can find the one used in the screenshot here:

![screenshot](https://raw.github.com/guari/eclipse-ui-theme/master/com.github.eclipseuitheme.themes/screenshot/sources_syntax_colors.png)

* [RainbowDrops.epf](https://github.com/guari/eclipse-ui-theme/blob/master/com.github.eclipseuitheme.themes/bin/color-scheme/RainbowDrops.epf?raw=true) (download and import it with Eclipse built-in Preferences import: ```File > Import...``` then select ```General > Preferences```);

* or [RainbowDrops.xml](https://github.com/guari/eclipse-ui-theme/blob/master/com.github.eclipseuitheme.themes/bin/color-scheme/RainbowDrops.xml?raw=true) (download and import it with [Eclipse Color Theme Plugin](http://eclipsecolorthemes.org/?view=plugin));

* or [here](http://eclipsecolorthemes.org/?view=theme&id=20025);

#### Old releases:
The packages previously uploaded can be found into ```/com.github.eclipseuitheme.themes/bin/``` folder.

References
----------

* http://wiki.eclipse.org/E4
* http://wiki.eclipse.org/Eclipse4/RCP/CSS
* http://wiki.eclipse.org/E4/CSS/SWT_Mapping
* http://www.vogella.com/articles/Eclipse4CSS/article.html

License
-------

Copyright (c) 2012

This is open source software, licensed under the Eclipse Public License. See the file COPYING for details.
