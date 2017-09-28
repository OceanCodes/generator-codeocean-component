'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const COMPONENT_TYPES = {
  PURE: 'PURE_COMPONENT',
  FULL: 'FULL_COMPONENT',
  FUNC: 'FUNCTIONAL_COMPONENT'
};

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay('Welcome to the neat ' + chalk.red('generator-component') + ' generator!')
    );

    const prompts = [
      {
        type: 'list',
        name: 'componentType',
        message:
          'What kind of component would you like to create? (please use UpperCamelCase)',
        default: COMPONENT_TYPES.FULL,
        choices: [
          {
            name: 'The usual React component (extends React.Component)',
            value: COMPONENT_TYPES.FULL
          },
          {
            name: 'Pure React component (extends React.PureComponent)',
            value: COMPONENT_TYPES.PURE
          },
          {
            name: 'Function component',
            value: COMPONENT_TYPES.FUNC
          }
        ]
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What name you would like to give for your React component?',
        default: 'MyComponent'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.componentFolderName =
      this.props.componentName[0].toLowerCase() + this.props.componentName.slice(1);

    switch (this.props.componentType) {
      case COMPONENT_TYPES.FULL:
        this._copyComponentFiles('full');
        break;
      case COMPONENT_TYPES.PURE:
        this._copyComponentFiles('pure');
        break;
      case COMPONENT_TYPES.FUNC:
        this._copyComponentFiles('func');
        break;
      default:
        throw new Error('no component type was selected');
    }
  }
  _copyComponentFiles(componentType) {
    this.fs.copyTpl(
      this.templatePath(`${componentType}/MyComponent.js`),
      this.destinationPath(`${this.componentFolderName}/${this.props.componentName}.js`),
      { componentName: this.props.componentName }
    );
    this.fs.copyTpl(
      this.templatePath(`${componentType}/MyComponent.spec.js`),
      this.destinationPath(
        `${this.componentFolderName}/${this.props.componentName}.spec.js`
      ),
      { componentName: this.props.componentName }
    );
  }
};
