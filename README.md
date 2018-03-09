ESLint-plugin-Artistco
===================

[![Maintenance Status][status-image]][status-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Build Status][appveyor-image]][appveyor-url]
[![Dependency Status][deps-image]][deps-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Code Climate][climate-image]][climate-url]

Artistco specific linting rules for ESLint

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint  eslint-plugin-artistco --save-dev
```

# Configuration

Add "artistco" to the plugins section.

```json
{
  "plugins": [
    "artistco"
  ]
}
```

Enable the expected rules:

```json
  "rules": {
    "artistco/use-injectintl": "error",
  }
```

# List of supported rules

* [artistco/injectintl](docs/rules/use-injectintl.md): Prevent missing injectIntl id react-intl is imported

# License

ESLint-plugin-Artistco is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

## Credits

This project has been boostraped using the awesome [ESLint plugin for react](https://github.com/yannickcr/eslint-plugin-react) by Yannick Croissant

Development with AST has been quite easier with [AST Explorer](https://astexplorer.net)

[npm-url]: https://npmjs.org/package/eslint-plugin-artistco
[npm-image]: https://img.shields.io/npm/v/eslint-plugin-artistco.svg

[travis-url]: https://travis-ci.org/svengau/eslint-plugin-artistco
[travis-image]: https://img.shields.io/travis/svengau/eslint-plugin-artistco/master.svg

[appveyor-url]: https://ci.appveyor.com/project/svengau/eslint-plugin-artistco
[appveyor-image]: https://img.shields.io/appveyor/ci/svengau/eslint-plugin-artistco/master.svg

[deps-url]: https://david-dm.org/svengau/eslint-plugin-artistco
[deps-image]: https://img.shields.io/david/dev/svengau/eslint-plugin-artistco.svg

[coverage-url]: https://coveralls.io/r/svengau/eslint-plugin-artistco?branch=master
[coverage-image]: https://img.shields.io/coveralls/svengau/eslint-plugin-artistco/master.svg

[climate-url]: https://codeclimate.com/github/svengau/eslint-plugin-artistco
[climate-image]: https://img.shields.io/codeclimate/github/svengau/eslint-plugin-artistco.svg

[status-url]: https://github.com/svengau/eslint-plugin-artistco/pulse
[status-image]: https://img.shields.io/badge/status-maintained-brightgreen.svg
