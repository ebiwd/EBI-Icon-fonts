## Newer version available
If you're a user of the fonts on your desktop computer/laptop, or have a website that uses the CSS file: <a href="https://github.com/ebiwd/EBI-Icon-fonts">you should look at v1.2 of the fonts</a>.


# EMBL-EBI Icon fonts for the life sciences 

<img width=300 src="https://lh4.googleusercontent.com/3rG71pwQnYfLK4l0CS123BzHeVf4Dq_QO3MydceTLFtPUGkVmMk9c0ylz080EtoOy-gIKwZJcA=w980" />

[View all the icons and usage information at this gallery](http://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.1/).

Just reference the <code>[fonts.css](https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.1/fonts.css)</code> stylesheet automatically loads a range of icon fonts that you can use.

Icons are added automatically through CSS using the <code>:before</code> feature in CSS, so they will appear before whatever piece of text you associate them with. To make this association, you need to include particular class and data-icon attributes in the relevant HTML element: e.g. <code>&lt;h4&gt;&lt;span class="icon icon-generic" data-icon="4"&gt;&lt;/span&gt; Travel by plane&lt;/h4&gt;</code>.

## Help us make these icons better
The Web Guidelines Committee is reviewing how the icons are bundled and how they are delivered to developers, so if you want SVGs, smaller sizes, or PNGs: ask for by [adding a comment to this issue](https://github.com/ebiwd/EBI-Icon-fonts/issues/6).

# Including these fonts in your project
- Releases are homed at [www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/](https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts)
- You can load the default CSS by linking to the v1.1 release at [www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.1/fonts.css](https://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.1/fonts.css)
- NPM users can get the code from [npmjs.com/package/EBI-Icon-fonts](https://www.npmjs.com/package/EBI-Icon-fonts)
- React users that are working with the EBI Species icons should check out [wbazant/react-ebi-species](https://github.com/wbazant/react-ebi-species)

# Licensing 
We generally encourage others to use these icons -- we're still working out the official license, but in the meantime, if you'd like to use them, please get in touch.
