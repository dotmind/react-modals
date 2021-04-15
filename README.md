<div align="center">
  <img alt="Logo" src="https://github.com/dotmind/modals/raw/master/dotmind-logo.png" width="100" />
</div>
<h1 align="center">
  @dotmind/modals
</h1>
<p align="center">
  Modals is a tool to quickly generate modals
</p>
<p align="center">
  <a href="https://github.com/dotmind/modals">
    <img src="https://img.shields.io/npm/v/@dotmind/modals" />
  </a>
  <a href="https://github.com/dotmind/modals">
    <img src="https://img.shields.io/github/license/dotmind/modals" />
  </a>
  <a href="https://github.com/dotmind/modals">
    <img src="https://img.shields.io/npm/types/typescript" />
  </a>
</p>

## Menu

- [Menu](#menu)
- [🚀 Roadmap](#-roadmap)
- [💻 Installation](#-installation)
- [👷‍♂️ How it's work](#️-how-its-work)
  - [Modal usage](#modal-usage)
- [⚡️ Contributing](#️-contributing)
- [🔐 License](#-license)

## 🚀 Roadmap


## 💻 Installation

```bash
yarn add @dotmind/modals
```

or

```bash
npm i @dotmind/modals
```

## 👷‍♂️ How it's work

### Modal usage

```javascript
import Modal from "mind-modales";

const BaseModal = () => {
  return (
    <Modal open={modalState}>
      {content}
    </Modal>
  );
}

const CustomModal = () => {
  return (
    <Modal
        overlayStyle={{ backgroundColor: 'red' }}
        containerStyle={{ minWidth: '500px' }}
        contentStyle={{ marginTop: '20px' }}
        closeButtonStyle={{ width: '35px', height: '35px' }}
        closeButtonElement={<Element/>}
        overlay
        closeButton
        clickOutside
        open={modalState}
    >
      {content}
    </Modal>
  );
}

```
| props | description | required | default value | type |
|-|-|-|-|-|
| overlayStyle | Override modal overlay style | false | / | React.CSSProperties |
| containerStyle | Override modal container style | false | / | React.CSSProperties |
| contentStyle | Override modal content style | false | / | React.CSSProperties |
| closeButtonStyle | Override modal close button style | false | / | React.CSSProperties |
| closeButtonElement | Modify close button element | false | 'X' | ReactElement or string |
| overlay | Show/Hide overlay | false | false | boolean |
| closeButton | Show/Hide closeButton | false | false | boolean |
| clickOutside |  Close on click outside On/Off | false | false | boolean |
| open | The state of the modal | true | false | false | boolean |

## ⚡️ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## 🔐 License

[MIT](https://choosealicense.com/licenses/mit/)