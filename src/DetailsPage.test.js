import React from 'react';
import { shallow } from 'enzyme';
import DetailsPage from './DetailsPage.js';

it('renders single pokemon item details', () => {
    const wrapper = shallow(<DetailsPage character={{ pokemon: 'character',url_image: 'some image', type_1: 'some type', attack: 0, defense: 0}}/>);
  
    expect(wrapper).toMatchSnapshot();
  });