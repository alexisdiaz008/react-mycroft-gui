import * as React from 'react';
import { shallow } from 'enzyme';
import Face from '../components/face/Face';

const wrapper = shallow(<Face />);

describe('Face component', () => {
  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Has image element', () => {
    expect(wrapper.find('img').length).toBe(1);
  });
});
