import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component tests', () => {
  test('Renders CourseList component without crashing', () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.exists()).toBe(true);
  });

  test('Renders 5 different rows', () => {
      const wrapper = shallow(<CourseList />);
      
      const theadRows = wrapper.find('thead').find('CourseListRow');
      expect(theadRows).toHaveLength(2);

      const tbodyRows = wrapper.find('tbody').find('CourseListRow');
      expect(tbodyRows).toHaveLength(3);
  });
});