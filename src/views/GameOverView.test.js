import React from 'react';
import { shallow } from 'enzyme';
import { GameOverView } from './GameOverView';

describe('GameOverView', () => {
  describe('winner', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<GameOverView isWinner={true} />);
      const header = wrapper.find('h1');
      expect(header.text()).toEqual('You Win!');
      const newGameButton = wrapper.find('NewGameContainer');
      expect(newGameButton).toHaveLength(1);
    });
  });
  describe('no winner, turns left', () => {
    it('should render null', () => {
      const wrapper = shallow(<GameOverView turns={3} />);
      expect(wrapper.isEmptyRender).toBe(true);
    });
  });

  describe('no winner, no turns', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<GameOverView turns={0} word={'pumpkin'} />);
      const header = wrapper.find('h1');
      expect(header.text()).toEqual('You Lose!');
      const message = wrapper.find('p');
      expect(message.text()).toEqual('Word was pumpkin');
      const newGameButton = wrapper.find('NewGameContainer');
      expect(newGameButton).toHaveLength(1);
    });
  });
});
