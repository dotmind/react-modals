<div align="center">
  <img alt="Logo" src="https://dotmind.io/wp-content/uploads/2022/04/react-modals-dotmind-2-scaled.jpg" />
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

## Menu

- [Menu](#menu)
- [✋ Disclaimer](#-disclaimer)
- [💻 Installation](#-installation)
- [👷‍♂️ How it's work](#️-how-its-work)
  - [Modal usage](#modal-usage)
- [⚡️ Contributing](#️-contributing)
- [🔐 License](#-license)

## ✋ Disclaimer

Create quickly and easily modals for React. Builded by dotmind.io
If you’re familiar with the basics of React, you will know that because of its structure you can face some serious CSS issues when you need to show a modal.
With this package you can :

- clip your modal on any page
- say goodbye to CSS issues
- saving time and simply customize

Let's code 🚀.

If you use React < 18, please use version 2.0.2 ([React 18 changelog](https://reactjs.org/blog/2022/03/29/react-v18.html#new-client-and-server-rendering-apis))

Version 2.0.3+ require React 18+

## 💻 Installation

```bash
yarn add @dotmind/react-modals
```

or

```bash
npm i @dotmind/react-modals
```

## 👷‍♂️ How it's work

<p align="center">
  <a target="_blank" href="https://codesandbox.io/s/react-modals-jumgq">
    React Modals sandbox
  </a>
</p>

### Modal usage

```javascript
import React, { useCallback, useState } from 'react';

import Modal from '@dotmind/react-modals';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleChangeModal = useCallback(() => {
    setModalOpen((prevState) => !prevState);
  }, [setModalOpen]);

  return (
    <div>
      <h1>Test react modal</h1>
      <button onClick={handleChangeModal}>Click me !</button>
      <Modal
        modalOpen={modalOpen}
        onClose={handleChangeModal}
        containerZIndex={9999}
      >
        <h1>This is modal content</h1>
        <p>You can put your html here, have fun !</p>
      </Modal>
    </div>
  );
};
```

| props                | description                      | required | type                   |
| -------------------- | -------------------------------- | -------- | ---------------------- |
| modalOpen            | Modal state                      | true     | boolean                |
| onClose              | Close modal function             | true     | () => void             |
| children             | Modal content                    | true     | ReactNode              |
| containerZIndex      | Add custom z-index to container  | false    | number                 |
| closeButtonElement   | Modify close button element      | false    | ReactElement or string |
| closeButtonClassName | Add custom class on close button | false    | string                 |
| containerClassName   | Add custom class on container    | false    | string                 |
| contentClassName     | Add custom class on content      | false    | string                 |
| withShadow           | Add default box shadow           | false    | boolean                |

## ⚡️ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## 🔐 License

[MIT](https://choosealicense.com/licenses/mit/)
