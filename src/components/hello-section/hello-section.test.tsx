import * as React from 'react';
import { shallow } from 'enzyme';
import HelloSection from './hello-section';

describe('HelloSection', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<HelloSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
