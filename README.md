<img width=300 src="https://lh4.googleusercontent.com/3rG71pwQnYfLK4l0CS123BzHeVf4Dq_QO3MydceTLFtPUGkVmMk9c0ylz080EtoOy-gIKwZJcA=w980" />

# EMBL-EBI Icon fonts for the life sciences

[View all the icons and usage information at this gallery](http://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/).

Just reference the <code>[fonts.css](https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/fonts.css)</code> stylesheet automatically loads a range of icon fonts that you can use.

Icons are added automatically through CSS using the <code>:before</code> feature in CSS, so they will appear before whatever piece of text you associate them with. To make this association, you need to include particular class and data-icon attributes in the relevant HTML element: e.g. <code>&lt;h4&gt;&lt;span class="icon icon-generic" data-icon="4"&gt;&lt;/span&gt; Travel by plane&lt;/h4&gt;</code>.

## What's new in v1.2?
- The new version is a backwards compatible release, just point your css include to `//www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/fonts.css`
- Digging deeper you'll find static PNG and SVG assets along with an improved build process.
- Note that new icons will not be added to v1.1

## Building the icon fonts
If you're a developer looking to compile/edit/tweak the font from its source files, here's what you need to do.

(NOTE: It's probably very unlikely you'll need to do this.)

1. Clone the repo
2. Run `npm install` and you may also need to (Mac oriented commands)
  - `sudo npm install grunt-cli -g`
  - install brew: https://brew.sh/
  - install grunt-webfont dependencies: https://github.com/sapegin/grunt-webfont#installation
3. Build the files by running the [Gruntfile.js](https://github.com/ebiwd/EBI-Icon-fonts/blob/v1.2/Gruntfile.js) tasks with:
  - `grunt` master build of all below tasks
  - `grunt svgmin` minify svg source files
  - `grunt webfont` generate the webfont files
  - `grunt grunticon` make the png static files
  - `grunt copy` copy svg source files into font static files

## Help us make these icons better
The Web Guidelines Committee is reviewing how the icons are bundled and how they are delivered to developers, so if you want SVGs, smaller sizes, or PNGs: ask for by [adding a comment to this issue](https://github.com/ebiwd/EBI-Icon-fonts/issues/6).

# Need a new icon?
If you're in need of an icon for a squirrel, bucket, or something useful: [use this form](https://docs.google.com/a/ebi.ac.uk/forms/d/e/1FAIpQLSe7_lFbhVdt-AJeGQChjkiab642nDkfKTVoNQRosPAKuBP3_g/viewform?c=0&w=1).

# Including these fonts in your project
- Releases are homed at [www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/](https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts)
- You can load the default CSS by linking to the v1.2 release at [www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.1/fonts.css](https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/fonts.css)
- NPM users can get the code from [npmjs.com/package/EBI-Icon-fonts](https://www.npmjs.com/package/EBI-Icon-fonts)
- React users that are working with the EBI Species icons should check out [wbazant/react-ebi-species](https://github.com/wbazant/react-ebi-species)

# Licensing
We generally encourage others to use these icons -- we're still working out the official license, but in the meantime, if you'd like to use them, please get in touch.
