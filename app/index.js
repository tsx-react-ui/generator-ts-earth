"use strict";

const Generator = require('yeoman-generator');
const inquirer = require('inquirer');
const endTip = require('../_libs/end-tip');

const EarthLogo = require('../_libs/logo');

module.exports = class extends Generator {

    initializing() {

        let done = this.async();

        this.pkg = require('../package.json');

        EarthLogo(this, done);

    }

    prompting() {

        let self = this;
        let done = this.async();
        let prompts = [{

            type: 'list',
            name: 'boilerplateType',
            message: '你准备创建',
            choices: [{

                name: '组件(yo earth:component)',
                value: 'component'

            }],

        }];

        inquirer.prompt(prompts).then(answer => {

            self.composeWith('earth:' + answer.boilerplateType)
            done();

        });

    }

    writing() {

        console.log('writing')

    }

    end () {

        endTip('Component');

    }
};

