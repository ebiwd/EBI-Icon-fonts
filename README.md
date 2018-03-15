[![Build Status](https://travis-ci.org/ebiwd/EBI-Icon-fonts.svg?branch=v1.3)](https://travis-ci.org/ebiwd/EBI-Icon-fonts)

<img width=300 src="https://lh4.googleusercontent.com/3rG71pwQnYfLK4l0CS123BzHeVf4Dq_QO3MydceTLFtPUGkVmMk9c0ylz080EtoOy-gIKwZJcA=w980" />

# EMBL-EBI Icon fonts for the life sciences

[View all the icons and usage information at this gallery](https://www.ebi.ac.uk/style-lab/general/fonts/).

Reference the <code>[fonts.css](https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css)</code> stylesheet automatically loads a range of icon fonts that you can use.

Icons are added automatically through CSS using the <code>:before</code> feature in CSS, so they will appear before whatever piece of text you associate them with. To make this association, you need to include particular class and data-icon attributes in the relevant HTML element: e.g. <code>&lt;h4&gt;&lt;span class="icon icon-generic" data-icon="4"&gt;&lt;/span&gt; Travel by plane&lt;/h4&gt;</code>.

## What's new in v1.3?

This version brings the most user-facing changes in several years as we've added in far more "common" icons and simplified the font stack.

The new EBI-Common font:
- Is a set of generic utility icons
- Merges the former EBI-Social, EBI-Generic, EBI-Functional
- Key mapping for the old EBI-Social and EBI-Generic have changed (see mappings below)
- EBI-Functional key mappings have not changed
- Adds non-redundant icons from Font Awesome

For more background on the change, <a href="https://github.com/ebiwd/EBI-Icon-fonts/issues/22">see the notes</a>.

There have also been a number of ["under the hood" changes in v1.3](https://github.com/ebiwd/EBI-Icon-fonts/issues/21):

- The new version is a backwards compatible release, just point your css include to `https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css`
- v1.3 and onwards are only available on the ebi.emblstatic.net CDN
- New icons are only added to the current version (v1.3) and are not added to v1.1 or v1.2
- We now show the escaped unicode and along with its rendered variant in the gallery:
    -  `data-icon="&#x61"` and `data-icon="&amp;#x61"`
- You are able to select icons by data attributes and classes
    - `class=".icon.icon-generic.icon-alert"` and `class="icon icon-generic" data-icon="l"`
- We now send over only the [woff and woff2 formats](https://github.com/ebiwd/EBI-Icon-fonts/issues/17)

[View all the icons and usage information at this gallery](https://www.ebi.ac.uk/style-lab/general/fonts/).

## Need a new icon?

If you're in need of an icon for a squirrel, bucket, or something useful: [use this form](https://docs.google.com/a/ebi.ac.uk/forms/d/e/1FAIpQLSe7_lFbhVdt-AJeGQChjkiab642nDkfKTVoNQRosPAKuBP3_g/viewform?c=0&w=1).

## Using these fonts in your project

- Releases are homed at [https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/](https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts)
- You can load the default CSS by linking to the v1.3 release at [https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css](https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css)
- NPM users can get the code from [npmjs.com/package/EBI-Icon-fonts](https://www.npmjs.com/package/EBI-Icon-fonts)
- React users that are working with the EBI Species icons should check out [wbazant/react-ebi-species](https://www.npmjs.com/package/react-ebi-species)
- We suggest using with the [EBI Visual Framework v1.3](https://github.com/ebiwd/EBI-Framework/tree/v1.3), but older versions work -- and you don't even really need to use the EBI Visual Framework at all.
- Need desktop fonts? [Get them from the Style Lab](https://www.ebi.ac.uk/style-lab/general/fonts/v1.3#desktop).

# Code structure, developing the fonts

## Versioning
We are using a semantic versioning style of releases.

| Major release | Minor release | Note |
| ------------- | ------------- | ---- |
| (Branch)      | (Tag)         | |
| 1.1           | .0            | Initial major release  |
| "             | .1            | Tagged minor release |
| "             | .2            | Tagged minor release |
| "             | .3            | Tagged minor release |
| 1.2           | .0            | Documented, breaking release |
| "             | .1            | Tagged minor release |
| 1.3           | .0            | Documented, breaking release |

Difference between major, minor releases:
- Major releases (1.1, 1.2, 1.3...) can have breaking changes and any such changes will be detailed and tested.
- Minor releases (0.0.X) will not have changes to code structure or parts and will mainly add features or update visual assets (such as logos or icon fonts).

## Building the icon fonts
The git repo does not contain the compiled font assets. If you're a developer looking to compile/edit/tweak the font from its source files, here's what you need to do.

(NOTE: Only developers would have the need do this.)

1. Clone the repo
2. Run `npm install` and you may also need to (Mac oriented commands)
  - `sudo npm install grunt-cli -g`
  - install brew: https://brew.sh/
  - install grunt-webfont dependencies: https://github.com/sapegin/grunt-webfont#installation
3. Build the files by running the [Gruntfile.js](https://github.com/ebiwd/EBI-Icon-fonts/blob/v1.3/Gruntfile.js) tasks with:
  - `grunt` master build of all below tasks
  - `grunt svgmin` minify svg source files
  - `grunt webfont` generate the webfont files
  - `grunt grunticon` make the png static files
  - `grunt copy` copy svg source files into font static files
  - `grunt webfont && grunt includes` regenerate the HTML templates

## Docker build
Build the fonts with the docker image (as used by gitlab) as follows
`docker run -it --rm -v $PWD:/workspace -w /workspace ebiwd/node-fontforge-grunt:6 sh -c 'npm install && grunt'`

# Licensing
EMBL-EBI created icons and the project are licenced under an Apache 2.0 and [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Non-EMBL-EBI created elements are licenced under their indicated licence. For more information, see [LICENSE.md](LICENSE.md)
