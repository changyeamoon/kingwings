import React from 'react';
import { shallow } from 'enzyme';
import Item from '../../../src/client/components/Item';

describe('Item', () => {
  let wrapper;
  const props = {
    addToCart: '',
    id: 0,
    name: '2 wings',
    price: 2.5,
    photo: '',
  };

  beforeAll(() => {
    wrapper = shallow(<Item {...props} />);
  });

  it('Renders a styled <div> tag with item information', () => {
    // expect(wrapper.type()).toEqual('<>');
    expect(wrapper.find('span').text()).toMatch('2 wings');
  });
});
