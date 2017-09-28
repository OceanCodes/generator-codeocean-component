'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-component:react full component', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../react'))
      .withPrompts({ componentName: 'HelloWorld' }, { componentType: 'FULL_COMPONENT' });
  });

  it('creates full component files', () => {
    assert.file(['helloWorld/HelloWorld.js']);
    assert.file(['helloWorld/HelloWorld.spec.js']);
  });
});

describe('generator-component:react pure component', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../react'))
      .withPrompts({ componentName: 'HelloWorld' }, { componentType: 'PURE_COMPONENT' });
  });

  it('creates pure component files', () => {
    assert.file(['helloWorld/HelloWorld.js']);
    assert.file(['helloWorld/HelloWorld.spec.js']);
  });
});

describe('generator-component:react functional component', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../react'))
      .withPrompts(
        { componentName: 'HelloWorld' },
        { componentType: 'FUNCTIONAL_COMPONENT' }
      );
  });

  it('creates files for full component', () => {
    assert.file(['helloWorld/HelloWorld.js']);
    assert.file(['helloWorld/HelloWorld.spec.js']);
  });
});
