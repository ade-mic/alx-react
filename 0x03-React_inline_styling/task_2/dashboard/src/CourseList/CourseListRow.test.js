import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='test' />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders one cell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell='test' />
    );
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toEqual('2');
  });

  it('renders two cells', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell='test'
        textSecondCell='second'
      />
    );
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(th.first().text()).toEqual('test');
    expect(th.at(1).text()).toEqual('second');
  });

  it('renders two td', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell='test'
        textSecondCell='second'
      />
    );
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    expect(td.first().text()).toEqual('test');
    expect(td.at(1).text()).toEqual('second');
  });
});
