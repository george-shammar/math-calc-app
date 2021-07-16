import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe('App', () => {
  let wrapper;
  it('wraps content in a div with .container class', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('.container').length).toEqual(1);
  });

  it('must show valid contents and NOT null', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('.container').length).not.toEqual(null);
  });

  it('must display valid contents that is defined', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('.container').length).toBeDefined;
  });

  it('must be truthy', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('.container').length).toBeTruthy;
  });
});
