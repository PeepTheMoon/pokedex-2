import React from 'react';
import { shallow } from 'enzyme';
import ListPage from './ListPage.js';
import SearchBar from './SearchBar.js';

it('renders single pokemon item details', () => {
    const wrapper = shallow(<SearchBar/>, <ListPage character={{ pokemon: 'character',url_image: 'some image', type_1: 'some type', attack: 0, defense: 0}}/>);
  
    expect(wrapper).toMatchSnapshot();
  });