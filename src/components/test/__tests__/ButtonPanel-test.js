import React from 'react';
import { shallow } from 'enzyme';
import ButtonPanel from '../ButtonPanel';

describe('ButtonPanel', () => {
  let wrapper;

  it('wraps content in a div with .button-row class', () => {
    wrapper = shallow(<ButtonPanel />);
    expect(wrapper.find('.button-row').length).toEqual(5);
  });

  it('must show valid contents and NOT null', () => {
    wrapper = shallow(<ButtonPanel />);
    expect(wrapper.find('.button-row').length).not.toEqual(null);
  });

  it('must display valid contents that is defined', () => {
    wrapper = shallow(<ButtonPanel />);
    expect(wrapper.find('.button-row').length).toBeDefined;
  });

  it('must be truthy', () => {
    wrapper = shallow(<ButtonPanel />);
    expect(wrapper.find('.button-row').length).toBeTruthy;
  });
});
