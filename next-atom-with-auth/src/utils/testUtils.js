import { createStore, applyMiddleware } from "redux";

import { middlewares } from "stores";
import reducers from "stores/reducers";
import { shallow } from "enzyme";

import { render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { create as rtrCreate } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

export const render = (component, options) => rtlRender(component, options);

export const create = component => rtrCreate(component);

export const fireEvent = userEvent;

/**
 * Function to find a component with `data-test` attribute
 * @param {ShallowWrapper} wrapper - Shallowed component.
 * @param {String} val -  `data-test` attribute value.
 * @return {ShallowWrapper}
 */
export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Function to validate/test if component is appear on component
 * @param {ShallowWrapper} wrapper - Shallowed component.
 * @param {String} componentName - component name to look out.
 */
export const findComponent = (wrapper, componentName) => {
  const comp = findByTestAttribute(wrapper, componentName);
  expect(comp.length).toBe(1);
};

/**
 * Function to validate/test if component is appear on component
 * @param {ShallowWrapper} wrapper - Shallowed component.
 * @param {String} componentName - component name to look out based on data-test.
 * @param {Number} total - expected total
 */
export const findComponentTotal = (wrapper, componentName, total) => {
  const comp = findByTestAttribute(wrapper, componentName);
  expect(comp.length).toBe(total);
};

/**
 * Function to validate if component is not found/appear in tested component
 * @param {ShallowWrapper} wrapper - Shallowed component.
 * @param {String} componentName - component name to look out.
 */
export const unFindComponent = (wrapper, componentName) => {
  const comp = findByTestAttribute(wrapper, componentName);
  expect(comp.length).toBe(0);
};

/**
 * Function to validate if action is exist in connected component
 * @param {ShallowWrapper} wrapper - Shallowed component
 * @param {String} actionName - action name
 */
export const findActionProp = (wrapper, actionName) => {
  const actionProp = wrapper.instance().props[actionName];
  expect(actionProp).toBeInstanceOf(Function);
};

/**
 * Create a testing store with imported reducers, middleware, and state
 *  globals: reducers
 * @param {Object} state - State for the store
 * @function storeFactory
 * @return {Store}
 */
export const storeFactory = state => {
  const storeWithMiddleware = createStore(
    reducers,
    state,
    applyMiddleware(...middlewares)
  );
  return storeWithMiddleware;
};

/**
 * Mock next route since next route is meant to be in client side
 * while testing component which uses next route is tested in
 * server side.
 */
export const mockedNextRouter = {
  pushRoute: () => {},
  route: "",
  push: () => {},
  replace: () => {}
};

/**
 * Function to shorten shallowing unconnected component
 * @param {Node} Component - Component being shallowed
 * @param {Object} props - properties
 * @param {Object} state - state given to component
 * @return {ShallowWrapper}
 */
export const shallowComponent = (Component, props = {}, state = null) => {
  const wrapper = shallow(<Component {...props} />);

  if (state) wrapper.setState(state);

  return wrapper;
};

/**
 * Function to shorten shallowing redux-connected component non-page and non-form
 * @param {*} Component - Component being shallowed
 * @param {*} state - redux state value
 * @param {*} props - additional prop
 * @return {ShallowWrapper}
 */
export const shallowReduxComponent = (Component, state = {}, props = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<Component store={store} {...props} />)
    .dive()
    .dive();

  return wrapper;
};

/**
 * Function to shorten shallowing redux-connected page/form component
 * @param {*} Component - Component being shallowed
 * @param {*} state - redux state value
 * @param {*} props - additional prop
 * @return {ShallowWrapper}
 */
export const shallowConnect = (Component, state = {}, props = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<Component store={store} {...props} />)
    .dive()
    .dive()
    .dive();

  return wrapper;
};
