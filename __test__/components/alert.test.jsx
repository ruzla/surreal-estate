import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/components/Alert';

it('renders new message', () => {
  const wrapper = shallow((
      <Alert message="Error!" />
  ))
  expect(wrapper.find('.Alert').text()).toBe('Error!');
});
