import React from 'react';

export default function injectState(Component) {
  const Wrapper = (props, context) => <Component {...props} isOpen={context.isOpen} />;

  return Wrapper;
}
