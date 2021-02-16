import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

const wrapper = shallow(<App />);

describe('App component', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
