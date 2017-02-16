import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import { Game } from '../../../routes/Game'
import { Player } from '../../../routes/Game/Player'
import { Board } from '../../../routes/Game/Board'

describe('<Game />', () => {

  it('should render two <Player /> components', () => {
    const players = []
    const wrapper = mount(<Game players={players} />);
    expect(wrapper.find(Player)).to.have.length(2);
  });

  it('should render one <Board /> components', () => {
    const players = [
      {name: '1', points: 0},
      {name: '2', points: 0},
    ]
    const wrapper = mount(<Game players={players} />);
    expect(wrapper.find(Board)).to.have.length(1);
  });

});
