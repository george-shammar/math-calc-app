import React from 'react';
import { shallow } from 'enzyme';
import Display from '../../Display';

describe('Display', () => {
  let wrapper;
  it('wraps content in a div with .bg-display class', () => {
    wrapper = shallow(<Display />);
    expect(wrapper.find('.bg-display').length).toEqual(1);
  });

  it('must show valid contents and NOT null', () => {
    wrapper = shallow(<Display />);
    expect(wrapper.find('.bg-display').length).not.toEqual(null);
  });

  it('must display valid contents that is defined', () => {
    wrapper = shallow(<Display />);
    expect(wrapper.find('.bg-display').length).toBeDefined;
  });

  it('must be truthy', () => {
    wrapper = shallow(<Display />);
    expect(wrapper.find('.bg-display').length).toBeTruthy;
  });
});
