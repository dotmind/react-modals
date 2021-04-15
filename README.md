<div align="center">
  <img alt="Logo" src="https://github.com/dotmind/react-modals/raw/master/dotmind-logo.png" width="100" />
</div>
<h1 align="center">
  @dotmind/react-modals
</h1>
<p align="center">
  React Modals is a tool to quickly generate modals
</p>
<p align="center">
  <a href="https://github.com/dotmind/react-modals">
    <img src="https://img.shields.io/npm/v/@dotmind/react-modals" />
  </a>
  <a href="https://github.com/dotmind/react-modals">
    <img src="https://img.shields.io/github/license/dotmind/react-modals" />
  </a>
  <a href="https://github.com/dotmind/react-modals">
    <img src="https://img.shields.io/npm/types/typescript" />
  </a>
</p>

![preview](https://raw.githubusercontent.com/dotmind/react-modals/master/preview.png)

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
yarn add @dotmind/react-modals
```

or

```bash
npm i @dotmind/react-modals
```

## 👷‍♂️ How it's work

### Modal usage

```javascript
import Modal from "react-modales";

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
        overlayClassName='customOverlayClass'
        containerClassName='customContainerClass'
        contentClassName='customContentClass'
        closeButtonClassName='customCloseButtonClass'
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
| overlayClassName| Add custom class to modal overlay | false | / | string |
| containerClassName | Add custom class to modal container | false | / | string |
| contentClassName | Add custom class to modal content | false | / | string |
| closeButtonClassName | Add custom class to modal close button | false | / | string |
| closeButtonElement | Modify close button element | false | 'X' | ReactElement or string |
| overlay | Show/Hide overlay | false | true | boolean |
| closeButton | Show/Hide closeButton | false | true | boolean |
| clickOutside |  Close on click outside On/Off | false | true | boolean |
| open | The state of the modal | true | false | boolean |

## ⚡️ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## 🔐 License

[MIT](https://choosealicense.com/licenses/mit/)
