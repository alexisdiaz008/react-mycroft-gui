import * as React from 'react';
import { shallow } from 'enzyme';
import Face from '../components/face/Face';

const wrapper = shallow(<Face />);

describe('Face component', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
