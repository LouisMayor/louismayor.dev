import * as React from 'react';
import { shallow } from 'enzyme';
import ProjectTile from './project-tile';

describe('ProjectTile', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ProjectTile />);
    expect(wrapper).toMatchSnapshot();
  });
});
