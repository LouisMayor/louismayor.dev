import * as React from 'react';
import { shallow } from 'enzyme';
import ProjectsSection from './projects-section';

describe('ProjectsSection', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ProjectsSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
