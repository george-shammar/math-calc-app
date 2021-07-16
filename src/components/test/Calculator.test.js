import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../Display';
import App from '../App';
import ButtonPanel from '../ButtonPanel';

it('renders the Display component correctly', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the Display component correctly with result props', () => {
    const total = '13'
    const tree = renderer.create(<Display result={total} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the Display component correctly with next props', () => {
    const next = '20'
    const tree = renderer.create(<Display next={next} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the Display component correctly with operation props', () => {
    const operation = '+'
    const tree = renderer.create(<Display operation={operation} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the App component correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the ButtonPanel component correctly', () => {
    const tree = renderer.create(<ButtonPanel />).toJSON();
    expect(tree).toMatchSnapshot();
});

