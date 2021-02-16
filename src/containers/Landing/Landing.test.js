import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';
import { findTestByAttr, storeFactory } from '../../../utils';
import checkPropTypes from 'check-prop-types';

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Landing store={store}></Landing>)
    .dive()
    .dive();
};

describe('Landing page component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it('render without error', () => {
    const landingComponent = findTestByAttr(wrapper, 'landing');
    expect(landingComponent.length).toBe(1);
  });

  it('should have proper prop types', () => {
    const expectedProps = { articles: [] };
    const propError = checkPropTypes(
      Landing.propTypes,
      expectedProps,
      'prop',
      Landing.name
    );
    expect(propError).toBeUndefined();
  });
});