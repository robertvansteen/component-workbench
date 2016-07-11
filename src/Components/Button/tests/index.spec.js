import React from 'react';
import Button from '../index';
import { shallow } from 'enzyme';

describe('Button component', () => {
  it('should show a button', () => {
    const component = shallow(<Button label="foo" />);
    component.should.have.a.tagName('button');
  });

  it('should show the label passed in as prop', () => {
    const component = shallow(<Button label="foo" />);
    component.should.have.html().match(/foo/);
  });
});
