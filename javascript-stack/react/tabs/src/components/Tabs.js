import React, { useState } from 'react';
import { Transition } from 'semantic-ui-react';

const Tabs = ({ items, setActive, active }) => {
  const isActive = (item) => (item === active ? 'active' : '');
  const [visible, setVisibility] = useState(true);

  const toggleVisibility = () =>
    visible === true ? setVisibility(false) : setVisibility(true);

  const tabHeaders = () => {
    return items.map((item, key) => (
      <Transition visible={visible} animation="pulse" duration={500}>
        <div
          key={key}
          className={`ui item ${isActive(item)}`}
          onClick={(e) => {
            setActive(item);
            toggleVisibility();
          }}
        >
          {item.label}
        </div>
      </Transition>
    ));
  };

  return (
    <div className="ui container">
      <div className="ui three item menu">{tabHeaders()}</div>
      <div className="ui segment">{active.content}</div>
    </div>
  );
};

export default Tabs;
