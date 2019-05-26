import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../src/components/propertycard';

it('renders title', () => {
  const wrapper = shallow((
    <PropertyCard title="Flat" />
  ));
  expect(wrapper.find('.title').text()).toContain('Flat');
});

it('renders type', () => {
  const wrapper = shallow((
    <PropertyCard type="1 Bed Flat" />
  ));
  expect(wrapper.find('.type').text()).toContain('1 Bed Flat');
});

it('renders bedrooms', () => {
  const wrapper = shallow((
    <PropertyCard bedrooms="1" />
  ));
  expect(wrapper.find('.bedrooms').text()).toContain('1');
});

it('renders bathrooms', () => {
  const wrapper = shallow((
    <PropertyCard bathrooms="1" />
  ));
  expect(wrapper.find('.bathrooms').text()).toContain('1');
});

it('renders price', () => {
  const wrapper = shallow((
    <PropertyCard price="1" />
  ));
  expect(wrapper.find('.price').text()).toContain('1');
});

xit('renders city', () => {
  const wrapper = shallow((
    <PropertyCard city="Manchester" />
  ));
  expect(wrapper.find('.city').text()).toContain('Manchester');
});

it('renders email', () => {
  const wrapper = shallow((
    <PropertyCard email="email" />
  ));
  expect(wrapper.find('.email').text()).toContain('Email');
});
