import * as React from 'react';
import { shallow } from 'enzyme';
import SkillSection from './skill-section';

describe('SkillSection', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<SkillSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
