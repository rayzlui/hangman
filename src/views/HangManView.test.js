import React from 'react';
import { shallow } from 'enzyme';
import { HangManImage } from './HangmanView';

describe('HangManImage', () => {
  describe('turns 1', () => {
    it('should render image 1', () => {
      const wrapper = shallow(<HangManImage turns={1} />);
      expect(wrapper.props().src).toEqual('image link for 1 turns');
    });
  });

  describe('turns 7', () => {
    it('should render image 7', () => {
      const wrapper = shallow(<HangManImage turns={7} />);
      expect(wrapper.props().src).toEqual('image link for 7 turns');
    });
  });

  describe('turns 0', () => {
    it('should render image 1', () => {
      const wrapper = shallow(<HangManImage turns={0} />);
      expect(wrapper.props().src).toEqual('image link for 0 turns');
    });
  });
});
