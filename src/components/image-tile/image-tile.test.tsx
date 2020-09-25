import * as React from 'react';
import { shallow } from 'enzyme';
import ImageTile from './image-tile';

describe('ImageTile', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ImageTile />);
    expect(wrapper).toMatchSnapshot();
  });
});
