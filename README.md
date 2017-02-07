# EBI-Icon-fonts
The <code>fonts.css</code> stylesheet automatically loads a range of icon fonts that you can use.

## View the gallery
View all the icons at http://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.1/

## Help us make these icons better
The Web Guidelines Committee is reviewing how the icons are bundled and how they are delivered to developers, so if you want SVGs, smaller sizes, or PNGs: ask for by [adding a comment to this issue](https://github.com/ebiwd/EBI-Icon-fonts/issues/6).

## Need a new icon?
If you're in need of an icon for a squirrel, bucket, or something useful: contact Spencer Phillips at spencer[at]ebi.ac.uk

## About
Icons are added automatically through CSS using the <code>:before</code> feature in CSS, so they will appear before whatever piece of text you associate them with. To make this association, you need to include particular class and data-icon attributes in the relevant HTML element: e.g. <code>&lt;h4&gt;&lt;span class="icon icon-generic" data-icon="4"&gt;&lt;/span&gt; Travel by plane&lt;/h4&gt;</code>.

## Including these fonts in your project
- Releases are homed at http://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/
- You can load the default CSS by linking to the v1.1 release at http://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.1/fonts.css
- NPM users can get the code from https://www.npmjs.com/package/EBI-Icon-fonts
- React users that are working with the EBI Species icons should check out https://github.com/wbazant/react-ebi-species
