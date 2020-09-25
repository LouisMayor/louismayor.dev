import * as React from 'react';
import { shallow } from 'enzyme';
import FloatingNavBar from './floating-nav-bar';

describe('FloatingNavBar', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<FloatingNavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
