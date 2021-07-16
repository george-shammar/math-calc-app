import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

it('renders the Quote component correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
});