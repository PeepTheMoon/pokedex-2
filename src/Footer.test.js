import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.js';


it('renders single pokemon item details', () => {
    const wrapper = shallow(<Footer/>);
  
    expect(wrapper).toMatchSnapshot();
  });