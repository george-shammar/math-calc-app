import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
    let wrapper;

    it('wraps content in a div with .button class', () => {
      wrapper = shallow(<Button />);
      expect(wrapper.find('.button').length).toEqual(1);
    });
  
    it('must show valid contents and NOT null', () => {
      wrapper = shallow(<Button />);
      expect(wrapper.find('.button').length).not.toEqual(null);
    });
  
    it('must display valid contents that is defined', () => {
      wrapper = shallow(<Button />);
      expect(wrapper.find('.button').length).toBeDefined;
    });
  
    it('must be truthy', () => {
      wrapper = shallow(<Button />);
      expect(wrapper.find('.button').length).toBeTruthy;
    });
  });