import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

describe("given App component", () => {
  it("render App component", () => {
    const wrapper = setup();
    const appComponent = wrapper.find('[data-test="component-app"]');

    // console.log(wrapper.debug());
    expect(appComponent).toBeTruthy();
  });
  it("should render counter text", () => {
    const wrapper = setup();
    const counterText = wrapper.find('[data-test="counter-text"]');

    expect(counterText.length).toBe(1);
  });
  it("should render count text", () => {
    const wrapper = setup();
    const count = wrapper.find('[data-test="count"]');

    expect(count.length).toBe(1);
    expect(count.text()).toBe("0");
  });

  it("should render increment button", () => {
    const wrapper = setup();
    const button = wrapper.find('[data-test="button-component"]');

    //console.log(wrapper.debug());
    //find button
    expect(button.length).toBe(1);
    //simulate button
    button.simulate('click');
    //match the result
    const count = wrapper.find('[data-test="count"]');
    console.log(wrapper .debug());
    expect(count.text()).toBe("1");
  });

  it('should render decrement button', () => {
   const wrapper = setup();
   const button = wrapper.find('[data-test="decrement-button"]');

   
   expect(button.length).toBe(1);
   // simulate button
   button.simulate('click');
   const count = wrapper.find('[data-test="count"]');
   console.log(wrapper.debug());
   expect(count.text()).toBe("0");
   const errorText = wrapper.find('[data-test="error"]');
   expect(errorText.length).toBe(1);
  });
 
});
