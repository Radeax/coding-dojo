import React, { useState } from 'react';
import Tabs from './Tabs';

const items = [
  {
    label: 'Tab 1',
    content: 'Tab 1 content is showing here.',
  },
  {
    label: 'Tab 2',
    content: 'Tab 2 content is showing here.',
  },
  {
    label: 'Tab 3',
    content: 'Tab 3 content is showing here.',
  },
];

const App = () => {
  const [active, setActive] = useState(items[0]);

  return <Tabs items={items} setActive={setActive} active={active} />;
};

export default App;
