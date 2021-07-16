import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../Display';
import App from '../App';

it('renders the Display component correctly', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the App component correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the App component correctly with result props', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
