import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';
import { findTestByAttr, storeFactory } from '../../../utils';
import checkPropTypes from 'check-prop-types';

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  console.log(store.getState());
  return shallow(<Landing store={store}></Landing>)
    .dive()
    .dive();
};

describe('Landing page component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      articles: [],
      loading: false
    };
    wrapper = setUp(initialState);
  });

  it('render without error', () => {
    const landingComponent = findTestByAttr(wrapper, 'landing');
    expect(landingComponent.length).toBe(1);
  });

  it('should have proper prop types', () => {
    const expectedProps = { articles: [], next: {}, previous: {} };
    const propError = checkPropTypes(
      Landing.propTypes,
      expectedProps,
      'prop',
      Landing.name
    );
    expect(propError).toBeUndefined();
  });

  it('should not display loading if prop loading is true', () => {
    let loader = findTestByAttr(wrapper, 'loader');
    expect(loader.length).toBe(0);
  });
});

describe('Landing loader', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      articles: {
        articles: [],
        loading: true
      }
    };
    wrapper = setUp(initialState);
  });

  it('should display loading if prop loading is true', () => {
    let loader = findTestByAttr(wrapper, 'loader');
    console.log('loader', loader);
    expect(loader.length).toBe(1);
  });
});
