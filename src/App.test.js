import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallowwrapper for the App component
 * @function setup
 */
const setup = () => shallow(<App/>);

const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('should render without error', () => {
  const wrapper = setup();
  // console.log(wrapper.debug());
  const appComponent = findByTestAttribute(wrapper, 'component-app');

  expect(appComponent.length).toBe(1);
});
test('renders button', () => {
  const wrapper = setup();
  // console.log(wrapper.debug());
  const button = findByTestAttribute(wrapper, 'increment-button');

  expect(button.length).toBe(1);
});
test('render counter display', () => {
  const wrapper =  setup();
  // console.log(wrapper.debug());
  const counterDisplay = findByTestAttribute(wrapper, 'counter-display');

  expect(counterDisplay.length).toBe(1);
});
test('should start at 0', () => {
  const wrapper =  setup();
  //console.log(wrapper.debug());
  const count = findByTestAttribute(wrapper, 'count').text();

  expect(count).toBe("0");
});
test('should increase the counter display on click of button', () => {
  const wrapper =  setup();
  //console.log(wrapper.debug());
  
  // find the button
  const button = findByTestAttribute(wrapper, 'increment-button');

  // click on the button
  button.simulate('click');

  // find the display, and test that the number has been incremented
  const count = findByTestAttribute(wrapper, 'count').text();
  expect(count).toBe("1");
});

