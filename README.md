<h1 align="center">🃏<br/>@compactjs/shuffle</h1>
<h3 align="center">Shuffle arrays</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/@compactjs/shuffle" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@compactjs/shuffle.svg">
  </a>
  <a href="https://github.com/CompactJS/shuffle/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/compactjs/shuffle" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/CompactJS/shuffle#readme">Homepage</a>
  ·
  <a href="https://github.com/CompactJS/shuffle/issues">Report Bug / Request Feature</a>
  ·
</p>

## Table of Contents

- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## Install

### NPM:

```sh
npm install @compactjs/shuffle
```

## Usage

```typescript
/**
 * returns a shuffled array
 */
function shuffle(array: any[]): any[];
```

### As module:

```javascript
import { shuffle } from '@compactjs/shuffle';
```

### Example:

```javascript
const array = [0, 1, 2, 3];
const shuffled = shuffle(array);

console.log(array); // => [0, 1, 2, 3]
console.log(shuffled); // => e.g. [3, 1, 2, 0]
```

## Run tests

```sh
npm run test
```

## Contact

👤 **Timo Bechtel**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/CompactJS/shuffle/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/CompactJS/shuffle/blob/main/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
