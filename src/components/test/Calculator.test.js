import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../Display';

it('renders the Display component correctly', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
});