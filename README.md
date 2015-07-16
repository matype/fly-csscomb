<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>

> [CSSComb](https://github.com/csscomb/csscomb.js) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](https://github.com/csscomb/csscomb.js/blob/master/doc/usage-node.md) to see the available options.

### Install

```a
npm install -D fly-csscomb
```

### Example

```js
export default function* () {
  yield this
    .source('src/*.css')
    .csscomb()
    .target('dist')
}
```

# License

[MIT][mit] © [Masaaki Morishita][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/morishitter
[contributors]: https://github.com/morishitter/fly-csscomb/graphs/contributors
[releases]:     https://github.com/morishitter/fly-csscomb/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-csscomb
[npm-ver-link]: https://img.shields.io/npm/v/fly-csscomb.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-csscomb.svg?style=flat-square
[travis-link]:  https://travis-ci.org/morishitter/fly-csscomb
[travis-badge]: http://img.shields.io/travis/morishitter/fly-csscomb.svg?style=flat-square
