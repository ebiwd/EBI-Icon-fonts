var path = require('path');

module.exports = function(grunt) {
	'use strict';

  grunt.loadNpmTasks('grunt-grunticon');

  grunt.initConfig({
    grunticon: {
        all: {
            files: [{
                expand: true,
                cwd: 'icons/source',
                src: ['*.svg', '*.png'],
                dest: "icons/output"
            }],
            options: {
              customselectors: {
                "species-ferret": [".icon.icon-species[data-icon=\"!\"]"],
                "species-bee": [".icon.icon-species[data-icon=\"$\"]"],
                "species-brachypodium": [".icon.icon-species[data-icon=\"%\"]"],
                "species-tick": [".icon.icon-species[data-icon=\"&\"]"],
                "species-bat": [".icon.icon-species[data-icon=\"(\"]"],
                "species-tomatoes": [".icon.icon-species[data-icon=\")\"]"],
                "species-orangutan": [".icon.icon-species[data-icon=\"*\"]"],
                "species-amoeba": [".icon.icon-species[data-icon=\"0\"]"],
                "species-mosquito": [".icon.icon-species[data-icon=\"1\"]"],
                "species-diatom": [".icon.icon-species[data-icon=\"2\"]"],
                "species-kangaroo-rat": [".icon.icon-species[data-icon=\"3\"]"],
                "species-louse": [".icon.icon-species[data-icon=\"4\"]"],
                "species-barley": [".icon.icon-species[data-icon=\"5\"]"],
                "species-rice": [".icon.icon-species[data-icon=\"6\"]"],
                "species-anolis": [".icon.icon-species[data-icon=\"7\"]"],
                "species-papio": [".icon.icon-species[data-icon=\"8\"]"],
                "species-monodelphis": [".icon.icon-species[data-icon=\"9\"]"],
                "species-plasmodium": [".icon.icon-species[data-icon=\"@\"]"],
                "species-cat": [".icon.icon-species[data-icon=\"A\"]"],
                "species-brassica": [".icon.icon-species[data-icon=\"B\"]"],
                "species-cow": [".icon.icon-species[data-icon=\"C\"]"],
                "species-dolphin": [".icon.icon-species[data-icon=\"D\"]"],
                "species-pufferfish": [".icon.icon-species[data-icon=\"E\"]"],
                "species-fly": [".icon.icon-species[data-icon=\"F\"]"],
                "species-gorilla": [".icon.icon-species[data-icon=\"G\"]"],
                "species-human": [".icon.icon-species[data-icon=\"H\"]"],
                "species-squirrel": [".icon.icon-species[data-icon=\"I\"]"],
                "species-ecoli": [".icon.icon-species[data-icon=\"L\"]"],
                "species-mouse": [".icon.icon-species[data-icon=\"M\"]"],
                "species-mouse-lemur": [".icon.icon-species[data-icon=\"N\"]"],
                "species-grapes": [".icon.icon-species[data-icon=\"0\"]"],
                "species-plant": [".icon.icon-species[data-icon=\"P\"]"],
                "species-shrew": [".icon.icon-species[data-icon=\"Q\"]"],
                "species-rat": [".icon.icon-species[data-icon=\"R\"]"],
                "species-spider": [".icon.icon-species[data-icon=\"S\"]"],
                "species-platypus": [".icon.icon-species[data-icon=\"U\"]"],
                "species-c-elegans": [".icon.icon-species[data-icon=\"W\"]"],
                "species-yeast": [".icon.icon-species[data-icon=\"Y\"]"],
                "species-zebrafish": [".icon.icon-species[data-icon=\"Z\"]"],
                "species-glycinemax": [".icon.icon-species[data-icon=\"^\"]"],
                "species-alpaca": [".icon.icon-species[data-icon=\"a\"]"],
                "species-bug": [".icon.icon-species[data-icon=\"b\"]"],
                "species-corn": [".icon.icon-species[data-icon=\"d\"]"],
                "species-dog": [".icon.icon-species[data-icon=\"d\"]"],
                "species-elephant": [".icon.icon-species[data-icon=\"e\"]"],
                "species-frog": [".icon.icon-species[data-icon=\"f\"]"],
                "species-guinea-pig": [".icon.icon-species[data-icon=\"g\"]"],
                "species-horse": [".icon.icon-species[data-icon=\"h\"]"],
                "species-chimpanzee": [".icon.icon-species[data-icon=\"i\"]"],
                "species-chicken": [".icon.icon-species[data-icon=\"k\"]"],
                "species-armadillo": [".icon.icon-species[data-icon=\"l\"]"],
                "species-finch": [".icon.icon-species[data-icon=\"n\"]"],
                "species-hedgehog": [".icon.icon-species[data-icon=\"o\"]"],
                "species-pig": [".icon.icon-species[data-icon=\"p\"]"],
                "species-monkey": [".icon.icon-species[data-icon=\"r\"]"],
                "species-scorpion": [".icon.icon-species[data-icon=\"s\"]"],
                "species-rabbit": [".icon.icon-species[data-icon=\"t\"]"],
                "species-fungus": [".icon.icon-species[data-icon=\"u\"]"],
                "species-virus": [".icon.icon-species[data-icon=\"v\"]"],
                "species-wallaby": [".icon.icon-species[data-icon=\"w\"]"],
                "species-sheep": [".icon.icon-species[data-icon=\"x\"]"],
                "species-aspergillus": [".icon.icon-species[data-icon=\"£\"]"],
                "*": [".icon[data-icon=\"$1\"]", ".icon.icon-$1"]
              }
            }
        }
    }
  });
  grunt.registerTask('default', ['grunticon']);
};
