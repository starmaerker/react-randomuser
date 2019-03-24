import React from 'react';
import ReactDOM from 'react-dom';
import UserProfiles from './UserProfiles';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserProfiles />, div);
  ReactDOM.unmountComponentAtNode(div);
});
