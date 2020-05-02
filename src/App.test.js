import React from 'react';
import * as ReactDom from "react-dom";
import SamuraiJSApp from './App';



it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<SamuraiJSApp/>, div);
  ReactDom.unmountComponentAtNode(div);
});
