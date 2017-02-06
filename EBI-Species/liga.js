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
            'amoeba': '&#x30;',
            'mosquito': '&#x31;',
            'diatom': '&#x32;',
            'kangaroorat': '&#x33;',
            'louse': '&#x34;',
            'barley': '&#x35;',
            'rice': '&#x36;',
            'anolis': '&#x37;',
            'papio': '&#x38;',
            'monodelphis': '&#x39;',
            'cat': '&#x41;',
            'brassica': '&#x42;',
            'cow': '&#x43;',
            'dolphin': '&#x44;',
            'pufferfish': '&#x45;',
            'fly': '&#x46;',
            'gorilla': '&#x47;',
            'ecoli': '&#x4c;',
            'mouse': '&#x4d;',
            'plant': '&#x50;',
            'rat': '&#x52;',
            'spider': '&#x53;',
            'platypus': '&#x55;',
            'yeast': '&#x59;',
            'zebrafish': '&#x5a;',
            'alpaca': '&#x61;',
            'bug': '&#x62;',
            'corn': '&#x63;',
            'dog': '&#x64;',
            'elephant': '&#x65;',
            'frog': '&#x66;',
            'guineapig': '&#x67;',
            'horse': '&#x68;',
            'chimpanzee': '&#x69;',
            'chicken': '&#x6b;',
            'armadillo': '&#x6c;',
            'finch': '&#x6e;',
            'hedgehog': '&#x6f;',
            'pig': '&#x70;',
            'monkey': '&#x72;',
            'scorpion': '&#x73;',
            'rabbit': '&#x74;',
            'fungus': '&#x75;',
            'virus': '&#x76;',
            'wallaby': '&#x77;',
            'sheep': '&#x78;',
            '¤¤': '&#xa3;',
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
