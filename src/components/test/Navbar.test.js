import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

it('renders the Navbar component correctly', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
});