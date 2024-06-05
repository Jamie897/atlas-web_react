import { shallow, mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import CourseList from "./CourseList";
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Test CourseList.js', () => {
  let store;
  let initialState = {
    courses: {
      list: [
        { id: '1', name: 'ES6', credit: 60, isSelected: false },
        { id: '2', name: 'Webpack', credit: 20, isSelected: false },
        { id: '3', name: 'React', credit: 40, isSelected: false },
      ],
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  const listCourses = [
    { id: '1', name: 'ES6', credit: 60 },
    { id: '2', name: 'Webpack', credit: 20 },
    { id: '3', name: 'React', credit: 40 }
  ];

  it('CourseList renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders different rows', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CourseList listCourses={listCourses} />
      </Provider>
    );
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

  it('Verify that CourseList renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CourseList listCourses={[]} />
      </Provider>
    );
    expect(wrapper.find(CourseListRow)).toHaveLength(0);
  });

  it('verify that the component renders it correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CourseList listCourses={listCourses} />
      </Provider>
    );
    expect(wrapper.find(CourseListRow).first().html()).toEqual('<tr class="headerRow_1vcpxrb"><th class="headerCell_w4bnnos" colspan="2">Available courses</th></tr>');
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

  it('dispatches fetchCourses action when component mounts', () => {
    mount(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );
    const actions = store.getActions();
    expect(actions).toContainEqual(fetchCourses());
  });

  it('dispatches selectCourse and unSelectCourse actions when onChangeRow is called', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CourseList listCourses={listCourses} />
      </Provider>
    );
    
    wrapper.find('input[type="checkbox"]').at(0).simulate('change', { target: { checked: true } });
    wrapper.find('input[type="checkbox"]').at(0).simulate('change', { target: { checked: false } });

    const actions = store.getActions();
    expect(actions).toContainEqual(selectCourse('1'));
    expect(actions).toContainEqual(unSelectCourse('1'));
  });
});
