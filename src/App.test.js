import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('should render without error', () => {
  const wrapper = shallow(<App/>);
  // console.log(wrapper.debug());
  const appComponent = wrapper.find("[data-test='component-app']");

  expect(appComponent.length).toBe(1);
});
test('renders button', () => {

});
test('render counter display', () => {

});
test('should start at 0', () => {

});
test('should increase the counter display on click of button', () => {

});

