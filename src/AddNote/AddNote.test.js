import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddNote from './AddNote'

describe(`AddFolder component`, () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<AddNote />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})
