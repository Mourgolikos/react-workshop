import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App, {Emoji} from './App';


describe('Counter App', () => {

  describe('renders', () => {

    it('two buttons without crashing', () => {
      const wrapper = shallow(<App/>);
      const buttons = wrapper.find('button');

      const actual = buttons.length;
      const expected = 2;
      expect(actual).toEqual(expected);
    });

    it('the counter value in a header', () => {
      const wrapper = shallow(<App/>);
      const counterHeader = wrapper.find('.counter-text');

      const actual = counterHeader.text();
      const expected = 'Counter: 0';
      expect(actual).toEqual(expected);
    });

    it('the Emoji component when the counter is multiple of 2', () => {
      // Add this test
    });
  });

  it('should add value into counter', () => {
    const wrapper = shallow(<App/>);
    const addButton = wrapper.find('.add');
    addButton.simulate('click');

    const actual = wrapper.state().counter;
    const expected = 1;
    expect(actual).toEqual(expected);
  });
});