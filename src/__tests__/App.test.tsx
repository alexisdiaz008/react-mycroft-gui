import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';


describe('<App />', () => {
  test('renders the component', () => {
    const component = shallow(<App />);  expect(component).toMatchSnapshot();
  });
});
