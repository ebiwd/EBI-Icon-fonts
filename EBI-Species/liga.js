/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'alpaca': '&#x61;',
            'amoeba': '&#x30;',
            'anolis': '&#x37;',
            'armadillo': '&#x6c;',
            'barley': '&#x35;',
            'brassica': '&#x42;',
            'bug': '&#x62;',
            'cat': '&#x41;',
            'chicken': '&#x6b;',
            'chimpanzee': '&#x69;',
            'corn': '&#x63;',
            'cow': '&#x43;',
            'diatom': '&#x32;',
            'dog': '&#x64;',
            'dolphin': '&#x44;',
            'ecoli': '&#x4c;',
            'elephant': '&#x65;',
            'finch': '&#x6e;',
            'fly': '&#x46;',
            'frog': '&#x66;',
            'fungus': '&#x75;',
            'gorilla': '&#x47;',
            'guineapig': '&#x67;',
            'hedgehog': '&#x6f;',
            'horse': '&#x68;',
            'human': '&#x48;',
            'kangaroorat': '&#x33;',
            'louse': '&#x34;',
            'monkey': '&#x72;',
            'monodelphis': '&#x39;',
            'mosquito': '&#x31;',
            'mouse': '&#x4d;',
            'papio': '&#x38;',
            'pig': '&#x70;',
            'plant': '&#x50;',
            'platypus': '&#x55;',
            'pufferfish': '&#x45;',
            'rabbit': '&#x74;',
            'rat': '&#x52;',
            'rice': '&#x36;',
            'scorpion': '&#x73;',
            'sheep': '&#x78;',
            'spider': '&#x53;',
            'virus': '&#x76;',
            'wallaby': '&#x77;',
            'worm': '&#x57;',
            'yeast': '&#xe900;',
            'zebrafish': '&#x5a;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
