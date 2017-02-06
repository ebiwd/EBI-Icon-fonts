/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'EBI-Species\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-ferret': '&#x21;',
		'icon-bee': '&#x24;',
		'icon-brachypodium': '&#x25;',
		'icon-tick': '&#x26;',
		'icon-bat': '&#x28;',
		'icon-tomatoes': '&#x29;',
		'icon-orangutan': '&#x2a;',
		'icon-amoeba': '&#x30;',
		'icon-mosquito': '&#x31;',
		'icon-diatom': '&#x32;',
		'icon-kangaroo-rat': '&#x33;',
		'icon-louse': '&#x34;',
		'icon-barley': '&#x35;',
		'icon-rice': '&#x36;',
		'icon-anolis': '&#x37;',
		'icon-papio': '&#x38;',
		'icon-monodelphis': '&#x39;',
		'icon-plasmodium': '&#x40;',
		'icon-cat': '&#x41;',
		'icon-brassica': '&#x42;',
		'icon-cow': '&#x43;',
		'icon-dolphin': '&#x44;',
		'icon-pufferfish': '&#x45;',
		'icon-fly': '&#x46;',
		'icon-gorilla': '&#x47;',
		'icon-human': '&#x48;',
		'icon-squirrel': '&#x49;',
		'icon-ecoli': '&#x4c;',
		'icon-mouse': '&#x4d;',
		'icon-mouse-lemur': '&#x4e;',
		'icon-grapes': '&#x4f;',
		'icon-plant': '&#x50;',
		'icon-shrew': '&#x51;',
		'icon-rat': '&#x52;',
		'icon-spider': '&#x53;',
		'icon-platypus': '&#x55;',
		'icon-c-elegans': '&#x57;',
		'icon-yeast': '&#x59;',
		'icon-zebrafish': '&#x5a;',
		'icon-glycinemax': '&#x5e;',
		'icon-alpaca': '&#x61;',
		'icon-bug': '&#x62;',
		'icon-corn': '&#x63;',
		'icon-dog': '&#x64;',
		'icon-elephant': '&#x65;',
		'icon-frog': '&#x66;',
		'icon-guinea-pig': '&#x67;',
		'icon-horse': '&#x68;',
		'icon-chimpanzee': '&#x69;',
		'icon-chicken': '&#x6b;',
		'icon-armadillo': '&#x6c;',
		'icon-finch': '&#x6e;',
		'icon-hedgehog': '&#x6f;',
		'icon-pig': '&#x70;',
		'icon-monkey': '&#x72;',
		'icon-scorpion': '&#x73;',
		'icon-rabbit': '&#x74;',
		'icon-fungus': '&#x75;',
		'icon-virus': '&#x76;',
		'icon-wallaby': '&#x77;',
		'icon-sheep': '&#x78;',
		'icon-aspergillus': '&#xa3;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
