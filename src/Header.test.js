import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';


it('renders single pokemon item details', () => {
    const wrapper = shallow(<Header/>);
  
    expect(wrapper).toMatchSnapshot();
  });