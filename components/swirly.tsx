import React from 'react';
import swirly from '../lib/swirly';

interface SwirlyProps {
  className?: string;
  color?: string;
  useMouse?: boolean;
}

const Swirly = (props: SwirlyProps) => {
  const setup = (el) => {
    if (el) {
      console.log('Rendering!');
      swirly({
        el,
        mouseInteraction: props.useMouse,
        color: props.color
      });
    }
  };
  return (<canvas className={props.className} id='home-bg-canvas' ref={setup} />);
};

export default Swirly;
