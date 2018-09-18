var path = require('path');

var version = '1.2'; // the version from the git repo branch

module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-includes');

  grunt.initConfig({
    // 1. We want to minify the source SVG icons
    svgmin: {
      chemistry: {
        files: [{
          expand: true,
          cwd: 'source/chemistry',
          src: ['*.svg'],
          dest: 'source/chemistry'
        }]
      },
      conceptual: {
        files: [{
          expand: true,
          cwd: 'source/conceptual',
          src: ['*.svg'],
          dest: 'source/conceptual'
        }]
      },
      fileformats: {
        files: [{
          expand: true,
          cwd: 'source/fileformats',
          src: ['*.svg'],
          dest: 'source/fileformats'
        }]
      },
      functional: {
        files: [{
          expand: true,
          cwd: 'source/functional',
          src: ['*.svg'],
          dest: 'source/functional'
        }]
      },
      generic: {
        files: [{
          expand: true,
          cwd: 'source/generic',
          src: ['*.svg'],
          dest: 'source/generic'
        }]
      },
      social: {
        files: [{
          expand: true,
          cwd: 'source/social',
          src: ['*.svg'],
          dest: 'source/social'
        }]
      },
      species: {
        files: [{
          expand: true,
          cwd: 'source/species',
          src: ['*.svg'],
          dest: 'source/species'
        }]
      }
    },
    // 2. Build the icon fonts
    //    and we want to specify the letter codes
    webfont: {
      'EBI-Species': {
        src: 'source/species/*.svg',
        dest: 'EBI-Species/fonts',
        // destCss: 'EBI-Species',
        options: {
          version: version,
          font: 'EBI-Species',
          fontFamilyName: 'EBI-Species',
          fontFilename: 'EBI-Species',
          types: 'eot,woff,woff2,ttf,svg',
          templateOptions: {
            baseClass: 'icon-species',
            classPrefix: 'icon-'
          },
          htmlDemoTemplate: 'templates/template-webfont.html',
          codepoints: {
            'ferret': 0x0021,
            'bee': 0x0024,
            'brachypodium': 0x0025,
            'tick': 0x0026,
            'bat': 0x0028,
            'tomatoes': 0x0029,
            'orangutan': 0x002a,
            'amoeba': 0x0030,
            'mosquito': 0x0031,
            'diatom': 0x0032,
            'kangaroo-rat': 0x0033,
            'louse': 0x0034,
            'barley': 0x0035,
            'rice': 0x0036,
            'anolis': 0x0037,
            'papio': 0x0038,
            'monodelphis': 0x0039,
            'plasmodium': 0x0040,
            'cat': 0x0041,
            'brassica': 0x0042,
            'cow': 0x0043,
            'dolphin': 0x0044,
            'pufferfish': 0x0045,
            'fly': 0x0046,
            'gorilla': 0x0047,
            'human': 0x0048,
            'squirrel': 0x0049,
            'ecoli': 0x004c,
            'mouse': 0x004d,
            'mouse-lemur': 0x004e,
            'grapes': 0x004f,
            'plant': 0x0050,
            'shrew': 0x0051,
            'rat': 0x0052,
            'spider': 0x0053,
            'platypus': 0x0055,
            'c-elegans': 0x0057,
            'yeast': 0x0059,
            'zebrafish': 0x005a,
            'glycinemax': 0x005e,
            'alpaca': 0x0061,
            'bug': 0x0062,
            'corn': 0x0063,
            'dog': 0x0064,
            'elephant': 0x0065,
            'frog': 0x0066,
            'guinea-pig': 0x0067,
            'horse': 0x0068,
            'chimpanzee': 0x0069,
            'chicken': 0x006b,
            'armadillo': 0x006c,
            'finch': 0x006e,
            'hedgehog': 0x006f,
            'pig': 0x0070,
            'monkey': 0x0072,
            'scorpion': 0x0073,
            'rabbit': 0x0074,
            'fungus': 0x0075,
            'virus': 0x0076,
            'wallaby': 0x0077,
            'sheep': 0x0078,
            'aspergillus': 0x00a3,
            'goat': 0x006d,
            'snail': 0x0027,
            'ray': 0x002b
          }
        }
      },
      'EBI-SocialMedia': {
        src: 'source/social/*.svg',
        dest: 'EBI-SocialMedia/fonts',
        // destCss: 'EBI-SocialMedia',
        options: {
          version: version,
          font: 'EBI-SocialMedia',
          fontFamilyName: 'EBI-SocialMedia',
          fontFilename: 'EBI-SocialMedia',
          types: 'eot,woff,woff2,ttf,svg',
          templateOptions: {
            baseClass: 'icon-socialmedia',
            classPrefix: 'icon-'
          },
          htmlDemoTemplate: 'templates/template-webfont.html',
          codepoints: {
            'android': 0x0061,
            'apple': 0x0041,
            'blogger': 0x0042,
            'facebook': 0x0046,
            'flickr': 0x0066,
            'github': 0x0067,
            'googleplus': 0x0047,
            'linkedin': 0x004c,
            'linux': 0x0058,
            'orcid': 0x004f,
            'rss': 0x0052,
            'skype': 0x0073,
            'slideshare': 0x0053,
            'twitter': 0x0054,
            'vimeo': 0x0056,
            'weibo': 0x0057,
            'windows': 0x0077,
            'wordpress': 0x0050,
            'youtube': 0x0059
          }
        }
      },
      'EBI-Generic': {
        src: 'source/generic/*.svg',
        dest: 'EBI-Generic/fonts',
        // destCss: 'EBI-Generic',
        options: {
          version: version,
          font: 'EBI-Generic',
          fontFamilyName: 'EBI-Generic',
          fontFilename: 'EBI-Generic',
          types: 'eot,woff,woff2,ttf,svg',
          templateOptions: {
            baseClass: 'icon-generic',
            classPrefix: 'icon-'
          },
          htmlDemoTemplate: 'templates/template-webfont.html',
          codepoints: {
            'accommodation': 0x0061,
            'alert': 0x006c,
            'alumni': 0x0041,
            'announcement': 0x0055,
            'basket': 0x0062,
            'beta': 0x003e,
            'bike': 0x0033,
            'biotech': 0x0042,
            'bus': 0x0031,
            'calendar': 0x0072,
            'camera': 0x0021,
            'car': 0x0032,
            'careers': 0x0063,
            'classification': 0x0065,
            'clock': 0x007b,
            'contact': 0x0043,
            'crosslink': 0x0064,
            'database': 0x0044,
            'discuss': 0x005c,
            'documentation': 0x003b,
            'drug': 0x0075,
            'elixir': 0x0025,
            'email': 0x0045,
            'embl': 0x0026,
            'external-link': 0x0078,
            'external-systems': 0x0079,
            'face-to-face': 0x0066,
            'find-us': 0x005d,
            'funding': 0x0046,
            'graph': 0x0067,
            'group': 0x007d,
            'gtls': 0x0047,
            'health': 0x0068,
            'help': 0x003f,
            'home': 0x0048,
            'industry': 0x0049,
            'info': 0x0069,
            'link': 0x004c,
            'location': 0x005b,
            'lovedata': 0x006f,
            'mailing-list': 0x006d,
            'math': 0x0076,
            'meet-us': 0x004d,
            'mobile-device': 0x002f,
            'new': 0x003c,
            'newcomers': 0x006e,
            'news': 0x004e,
            'nutraceuticals': 0x0022,
            'open-day': 0x004f,
            'piechart': 0x0070,
            'plane': 0x0034,
            'publication': 0x0050,
            'research': 0x0029,
            'resource': 0x0052,
            'reviewed-data': 0x0071,
            'services': 0x0028,
            'steps': 0x0023,
            'support': 0x0073,
            'systems': 0x0053,
            'terms': 0x0027,
            'test': 0x0030,
            'text-mining': 0x0058,
            'toolkit': 0x003a,
            'train': 0x0037,
            'training': 0x0054,
            'tutorial': 0x0074,
            'unreviewed-data': 0x0051,
            'video': 0x0056,
            'walk': 0x0036
          }
        }
      },
      'EBI-Functional': {
        src: 'source/functional/*.svg',
        dest: 'EBI-Functional/fonts',
        // destCss: 'EBI-Functional',
        options: {
          version: version,
          font: 'EBI-Functional',
          fontFamilyName: 'EBI-Functional',
          fontFilename: 'EBI-Functional',
          types: 'eot,woff,woff2,ttf,svg',
          templateOptions: {
            baseClass: 'icon-functional',
            classPrefix: 'icon-'
          },
          htmlDemoTemplate: 'templates/template-webfont.html',
          codepoints: {
            'add': 0x002b,
            'add-job': 0x0029,
            'add-user': 0x0037,
            'align': 0x0069,
            'analyse': 0x0041,
            'analyse-percent_0': 0x0042,
            'analyse-percent_40': 0x0043,
            'analyse-percent_100': 0x0045,
            'analyse-graph': 0x007a,
            'approve': 0x002f,
            'approved-job': 0x0028,
            'attach': 0x0061,
            'browse': 0x0062,
            'close': 0x0078,
            'collapse': 0x0077,
            'collapse-closed': 0x0039,
            'collapse-open': 0x0038,
            'compare': 0x004f,
            'crop': 0x005c,
            'cut': 0x0063,
            'database-submit': 0x0044,
            'delete': 0x0064,
            'download': 0x003d,
            'edit': 0x0065,
            'edit-user': 0x0035,
            'expand': 0x0075,
            'filter': 0x0066,
            'first-page': 0x005b,
            'fullscreen': 0x0046,
            'hierarchy': 0x0068,
            'last-page': 0x005d,
            'like': 0x006b,
            'lock': 0x004c,
            'login': 0x006c,
            'mapping': 0x0030,
            'menu': 0x004d,
            'move': 0x006d,
            'next-page': 0x003e,
            'play': 0x0076,
            'previous-page': 0x003c,
            'print': 0x0050,
            'redo': 0x007d,
            'refresh': 0x0052,
            'remove': 0x002d,
            'remove-user': 0x0036,
            'save': 0x0053,
            'scaleable': 0x0059,
            'search': 0x0031,
            'search-document': 0x006a,
            'send': 0x006e,
            'settings': 0x0073,
            'share': 0x0072,
            'stop': 0x006f,
            'submit': 0x005f,
            'target': 0x0054,
            'tool': 0x0074,
            'unassigned-job': 0x002a,
            'undo': 0x007b,
            'unlock': 0x0055,
            'view': 0x0034,
            'zoom-in': 0x0033,
            'zoom-out': 0x0032
          }
        }
      },
      'EBI-Conceptual': {
        src: 'source/conceptual/*.svg',
        dest: 'EBI-Conceptual/fonts',
        // destCss: 'EBI-Conceptual',
        options: {
          version: version,
          font: 'EBI-Conceptual',
          fontFamilyName: 'EBI-Conceptual',
          fontFilename: 'EBI-Conceptual',
          types: 'eot,woff,woff2,ttf,svg',
          templateOptions: {
            baseClass: 'icon-conceptual',
            classPrefix: 'icon-'
          },
          htmlDemoTemplate: 'templates/template-webfont.html',
          codepoints: {
            'chemical': 0x0062,
            'cross-domain': 0x0063,
            'dna': 0x0064,
            'expression': 0x0067,
            'literature': 0x006c,
            'ontology': 0x006f,
            'proteins': 0x0050,
            'structures': 0x0073,
            'systems': 0x0079
          }
        }
      },
      'EBI-FileFormats': {
        src: 'source/fileformats/*.svg',
        dest: 'EBI-FileFormats/fonts',
        // destCss: 'EBI-FileFormats',
        options: {
          version: version,
          font: 'EBI-FileFormats',
          fontFamilyName: 'EBI-FileFormats',
          fontFilename: 'EBI-FileFormats',
          types: 'eot,woff,woff2,ttf,svg',
          templateOptions: {
            baseClass: 'icon-fileformats',
            classPrefix: 'icon-'
          },
          htmlDemoTemplate: 'templates/template-webfont.html',
          codepoints: {
            'ZIP': 0x005a,
            'Postscript': 0x0033,
            'XML': 0x0078,
            'DOC': 0x0064,
            'TXT': 0x0074,
            'TSV': 0x0076,
            'SDF': 0x0073,
            'RXN': 0x0058,
            'RDF_XML': 0x0044,
            'RD': 0x0072,
            'PSI-MI_XML': 0x0031,
            'PSI-MI_TAB': 0x0032,
            'PDF': 0x0070,
            'OWL': 0x006f,
            'OBO': 0x004f,
            'MDL': 0x004d,
            'JSON': 0x004a,
            'IMG': 0x0049,
            'GFF': 0x0047,
            'FLAT': 0x0046,
            'FASTQ': 0x0066,
            'FASTA': 0x0061,
            'CSV': 0x0063,
            'CRAM': 0x0052,
            'CML': 0x0043,
            'BAM': 0x0042,
            'AGP': 0x0041
          }
        }
      },
      'EBI-Chemistry': {
        src: 'source/chemistry/*.svg',
        dest: 'EBI-Chemistry/fonts',
        // destCss: 'EBI-Chemistry',
        options: {
          version: version,
          font: 'EBI-Chemistry',
          fontFamilyName: 'EBI-Chemistry',
          fontFilename: 'EBI-Chemistry',
          types: 'eot,woff,woff2,ttf,svg',
          templateOptions: {
            baseClass: 'icon-chemistry',
            classPrefix: 'icon-'
          },
          htmlDemoTemplate: 'templates/template-webfont.html',
          codepoints: {
            'direction_unknown': 0x0055,
            'direction_right': 0x0072,
            'direction_left': 0x006c,
            'direction_reversible': 0x0052
          }
        }
      }
    },

    // 3. Copy the source SVGs into the font folders
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, cwd: 'source/chemistry/', src: ['**'], dest: 'EBI-Chemistry/static/svg', rename: function(dest, src) {
            return dest + '/' + src.replace('(','').replace(')','');
          }},
          {expand: true, cwd: 'source/conceptual/', src: ['**'], dest: 'EBI-Conceptual/static/svg', rename: function(dest, src) {
            return dest + '/' + src.replace('(','').replace(')','');
          }},
          {expand: true, cwd: 'source/fileformats/', src: ['**'], dest: 'EBI-FileFormats/static/svg', rename: function(dest, src) {
            return dest + '/' + src.replace('(','').replace(')','');
          }},
          {expand: true, cwd: 'source/functional/', src: ['**'], dest: 'EBI-Functional/static/svg', rename: function(dest, src) {
            return dest + '/' + src.replace('(','').replace(')','');
          }},
          {expand: true, cwd: 'source/generic/', src: ['**'], dest: 'EBI-Generic/static/svg', rename: function(dest, src) {
            return dest + '/' + src.replace('(','').replace(')','');
          }},
          {expand: true, cwd: 'source/social/', src: ['**'], dest: 'EBI-SocialMedia/static/svg', rename: function(dest, src) {
            return dest + '/' + src.replace('(','').replace(')','');
          }},
          {expand: true, cwd: 'source/species/', src: ['**'], dest: 'EBI-Species/static/svg', rename: function(dest, src) {
            return dest + '/' + src.replace('(','').replace(')','');
          }}
        ],
      },
    },
    // 4. Make the PNGs
    //    (and compiled CSS files for poteintal future use)
    grunticon: {
      chemistry: {
          files: [{
              expand: true,
              cwd: 'EBI-Chemistry/static/svg',
              src: ['*.svg'],
              dest: "EBI-Chemistry/static"
          }],
          options: {
            // enhanceSVG: true,
            "previewTemplate": "templates/preview.hbs",
            // "template":        "templates/css.hbs",
            colors: {
              "white": "#ffffff"
            }
          }
      },
      conceptual: {
          files: [{
              expand: true,
              cwd: 'EBI-Conceptual/static/svg',
              src: ['*.svg'],
              dest: "EBI-Conceptual/static"
          }],
          options: {
            // enhanceSVG: true,
            "previewTemplate": "templates/preview.hbs",
            // "template":        "templates/css.hbs",
            colors: {
              "white": "#ffffff"
            }
          }
      },
      fileformats: {
          files: [{
              expand: true,
              cwd: 'EBI-FileFormats/static/svg',
              src: ['*.svg'],
              dest: "EBI-FileFormats/static"
          }],
          options: {
            // enhanceSVG: true,
            "previewTemplate": "templates/preview.hbs",
            // "template":        "templates/css.hbs",
            colors: {
              "white": "#ffffff"
            }
          }
      },
      functional: {
          files: [{
              expand: true,
              cwd: 'EBI-Functional/static/svg',
              src: ['*.svg'],
              dest: 'EBI-Functional/static'
          }],
          options: {
            // enhanceSVG: true,
            "previewTemplate": "templates/preview.hbs",
            // "template":        "templates/css.hbs",
            colors: {
              "white": "#ffffff"
            }
          }
      },
      generic: {
          files: [{
              expand: true,
              cwd: 'EBI-Generic/static/svg',
              src: ['*.svg'],
              dest: 'EBI-Generic/static'
          }],
          options: {
            // enhanceSVG: true,
            "previewTemplate": "templates/preview.hbs",
            // "template":        "templates/css.hbs",
            colors: {
              "white": "#ffffff"
            }
          }
      },
      social: {
          files: [{
              expand: true,
              cwd: 'EBI-SocialMedia/static/svg',
              src: ['*.svg'],
              dest: "EBI-SocialMedia/static"
          }],
          options: {
            // enhanceSVG: true,
            "previewTemplate": "templates/preview.hbs",
            // "template":        "templates/css.hbs",
            colors: {
              "white": "#ffffff"
            }
          }
      },
      species: {
          files: [{
              expand: true,
              cwd: 'EBI-Species/static/svg',
              src: ['*.svg'],
              dest: "EBI-Species/static"
          }],
          options: {
            // enhanceSVG: true,
            "previewTemplate": "templates/preview.hbs",
            // "template":        "templates/css.hbs",
            colors: {
              "white": "#ffffff"
            }
          }
      },
    },
    // 5. Combine the built webfont previews into a global template
    includes: {
      files: {
        debug: true,
        src: [
          'templates/index.html',
          'templates/partial.html'
        ],
        dest: '.', // Destination directory
        flatten: true,
        cwd: '.',
        options: {
          // silent: true,
          banner: '<!-- I am a banner <% includes.files.dest %> -->',
          includePath: [
            'EBI-Chemistry/fonts/',
            'EBI-Conceptual/fonts/',
            'EBI-FileFormats/fonts/',
            'EBI-Functional/fonts/',
            'EBI-Generic/fonts/',
            'EBI-SocialMedia/fonts/',
            'EBI-Species/fonts/'
          ],

        }
      }
    }

    // grunticon: {
    //     all: {
    //         files: [{
    //             expand: true,
    //             cwd: 'icons/source',
    //             src: ['*.svg', '*.png'],
    //             dest: "icons/output"
    //         }],
    //         options: {
    //           // enhanceSVG: true,
    //           "previewTemplate": "templates/preview.hbs",
    //           "template":        "templates/css.hbs",
    //           colors: {
    //             "white": "#ffffff"
    //           },
    //           customselectors: {
    //             "species-ferret": [".icon.icon-species[data-icon=\"!\"]"],
    //             "species-bee": [".icon.icon-species[data-icon=\"$\"]"],
    //             "species-brachypodium": [".icon.icon-species[data-icon=\"%\"]"],
    //             "species-tick": [".icon.icon-species[data-icon=\"&\"]"],
    //             "species-bat": [".icon.icon-species[data-icon=\"(\"]"],
    //             "species-tomatoes": [".icon.icon-species[data-icon=\")\"]"],
    //             "species-orangutan": [".icon.icon-species[data-icon=\"*\"]"],
    //             "species-amoeba": [".icon.icon-species[data-icon=\"0\"]"],
    //             "species-mosquito": [".icon.icon-species[data-icon=\"1\"]"],
    //             "species-diatom": [".icon.icon-species[data-icon=\"2\"]"],
    //             "species-kangaroo-rat": [".icon.icon-species[data-icon=\"3\"]"],
    //             "species-louse": [".icon.icon-species[data-icon=\"4\"]"],
    //             "species-barley": [".icon.icon-species[data-icon=\"5\"]"],
    //             "species-rice": [".icon.icon-species[data-icon=\"6\"]"],
    //             "species-anolis": [".icon.icon-species[data-icon=\"7\"]"],
    //             "species-papio": [".icon.icon-species[data-icon=\"8\"]"],
    //             "species-monodelphis": [".icon.icon-species[data-icon=\"9\"]"],
    //             "species-plasmodium": [".icon.icon-species[data-icon=\"@\"]"],
    //             "species-cat": [".icon.icon-species[data-icon=\"A\"]"],
    //             "species-brassica": [".icon.icon-species[data-icon=\"B\"]"],
    //             "species-cow": [".icon.icon-species[data-icon=\"C\"]"],
    //             "species-dolphin": [".icon.icon-species[data-icon=\"D\"]"],
    //             "species-pufferfish": [".icon.icon-species[data-icon=\"E\"]"],
    //             "species-fly": [".icon.icon-species[data-icon=\"F\"]"],
    //             "species-gorilla": [".icon.icon-species[data-icon=\"G\"]"],
    //             "species-human": [".icon.icon-species[data-icon=\"H\"]"],
    //             "species-squirrel": [".icon.icon-species[data-icon=\"I\"]"],
    //             "species-ecoli": [".icon.icon-species[data-icon=\"L\"]"],
    //             "species-mouse": [".icon.icon-species[data-icon=\"M\"]"],
    //             "species-mouse-lemur": [".icon.icon-species[data-icon=\"N\"]"],
    //             "species-grapes": [".icon.icon-species[data-icon=\"0\"]"],
    //             "species-plant": [".icon.icon-species[data-icon=\"P\"]"],
    //             "species-shrew": [".icon.icon-species[data-icon=\"Q\"]"],
    //             "species-rat": [".icon.icon-species[data-icon=\"R\"]"],
    //             "species-spider": [".icon.icon-species[data-icon=\"S\"]"],
    //             "species-platypus": [".icon.icon-species[data-icon=\"U\"]"],
    //             "species-c-elegans": [".icon.icon-species[data-icon=\"W\"]"],
    //             "species-yeast": [".icon.icon-species[data-icon=\"Y\"]"],
    //             "species-zebrafish": [".icon.icon-species[data-icon=\"Z\"]"],
    //             "species-glycinemax": [".icon.icon-species[data-icon=\"^\"]"],
    //             "species-alpaca": [".icon.icon-species[data-icon=\"a\"]"],
    //             "species-bug": [".icon.icon-species[data-icon=\"b\"]"],
    //             "species-corn": [".icon.icon-species[data-icon=\"d\"]"],
    //             "species-dog": [".icon.icon-species[data-icon=\"d\"]"],
    //             "species-elephant": [".icon.icon-species[data-icon=\"e\"]"],
    //             "species-frog": [".icon.icon-species[data-icon=\"f\"]"],
    //             "species-guinea-pig": [".icon.icon-species[data-icon=\"g\"]"],
    //             "species-horse": [".icon.icon-species[data-icon=\"h\"]"],
    //             "species-chimpanzee": [".icon.icon-species[data-icon=\"i\"]"],
    //             "species-chicken": [".icon.icon-species[data-icon=\"k\"]"],
    //             "species-armadillo": [".icon.icon-species[data-icon=\"l\"]"],
    //             "species-finch": [".icon.icon-species[data-icon=\"n\"]"],
    //             "species-hedgehog": [".icon.icon-species[data-icon=\"o\"]"],
    //             "species-pig": [".icon.icon-species[data-icon=\"p\"]"],
    //             "species-monkey": [".icon.icon-species[data-icon=\"r\"]"],
    //             "species-scorpion": [".icon.icon-species[data-icon=\"s\"]"],
    //             "species-rabbit": [".icon.icon-species[data-icon=\"t\"]"],
    //             "species-fungus": [".icon.icon-species[data-icon=\"u\"]"],
    //             "species-virus": [".icon.icon-species[data-icon=\"v\"]"],
    //             "species-wallaby": [".icon.icon-species[data-icon=\"w\"]"],
    //             "species-sheep": [".icon.icon-species[data-icon=\"x\"]"],
    //             "species-aspergillus": [".icon.icon-species[data-icon=\"£\"]"],
    //             "*": [".icon[data-icon=\"$1\"]", ".icon.icon-$1"]
    //           }
    //         }
    //     }
    // }
  });
  grunt.registerTask('default', ['svgmin','webfont','grunticon','copy','includes']);

};
