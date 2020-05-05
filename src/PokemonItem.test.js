import React from 'react';
import { shallow } from 'enzyme';
import PokemonItem from './PokemonItem.js';

it('renders pokemon item', () => {
    const wrapper = shallow(<PokemonItem character={{ pokemon: 'character',url_image: 'some image', type_1: 'some type', attack: 0, defense: 0}}/>);
  
    expect(wrapper).toMatchSnapshot();
  });