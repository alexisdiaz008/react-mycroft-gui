import * as React from 'react';
import { shallow } from 'enzyme';
import Face from '../components/face/Face';


describe('<Face />', () => {
  test('renders the component', () => {
    const component = shallow(<Face />);  expect(component).toMatchSnapshot();
  });
});
