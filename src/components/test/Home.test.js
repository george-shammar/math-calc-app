import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('renders the Home component correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
