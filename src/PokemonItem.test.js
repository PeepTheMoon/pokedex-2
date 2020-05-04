import React from 'react';
import { shallow } from 'enzyme';
import PokemonItem from './PokemonItem.js';

it('renders learn react link', () => {
    const wrapper = shallow(<PokemonItem character={{ pokemon: 'character',url_image: 'some image'}}/>);
  
    expect(wrapper).toMatchSnapshot();
  });