import React from 'react';
import { shallow } from 'shallow';
import { NewGameButton } from './NewGame';

describe('NewGameButton', () => {
  it('should handle click', () => {
    const mockNewGame = jest.fn();
    const wrapper = shallow(<NewGameButton newGame={mockNewGame} />);
    expect(wrapper.text()).toEqual('New Game');
    wrapper.simulate('click');
    expect(mockNewGame).toHaveBeenCalled();
  });
});
