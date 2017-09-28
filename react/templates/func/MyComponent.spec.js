import React from 'react';
import { shallow } from 'enzyme';
import <%= componentName %> from './<%= componentName %>';

it('should have div element', () => {
  const wrapper = shallow(<<%= componentName %> />);
  expect(wrapper.find('div')).toBeDefined();
});
