import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component tests', () => {
    let wrapper;

    const createWrapper = (props) => shallow(<CourseListRow {...props} />);

    describe('tests for isHeader being true', () => {
        test('Renders one cell with colspan = 2 when textSecondCell does not exist', () => {
            wrapper = createWrapper({ isHeader: true, textFirstCell: 'Test Cell' });

            const thElement = wrapper.find('th');
            expect(thElement).toHaveLength(1);
            expect(thElement.prop('colSpan')).toBe("2");
            expect(thElement.text()).toBe('Test Cell');
        });

        test('Renders two cells when textSecondCell is present', () => {
            wrapper = createWrapper({
                isHeader: true,
                textFirstCell: 'First Cell',
                textSecondCell: 'Second Cell'
            });

            const thElements = wrapper.find('th');
            expect(thElements).toHaveLength(2);
            expect(thElements.at(0).text()).toBe('First Cell');
            expect(thElements.at(1).text()).toBe('Second Cell');
        });

        test('Applies background color #deb5b545 to header row', () => {
            wrapper = createWrapper({ isHeader: true, textFirstCell: 'Test Header' });
            expect(wrapper.prop('style')).toEqual({ backgroundColor: '#deb5b545' });
        });
    });

    describe('tests for isHeader being false', () => {
        test('Renders two td elements within a tr element', () => {
            wrapper = createWrapper({
                isHeader: false,
                textFirstCell: 'First Cell',
                textSecondCell: 'Second Cell'
            });

            const trElement = wrapper.find('tr');
            expect(trElement).toHaveLength(1);

            const tdElements = trElement.find('td');
            expect(tdElements).toHaveLength(2);
            expect(tdElements.at(0).text()).toBe('First Cell');
            expect(tdElements.at(1).text()).toBe('Second Cell');
        });

        test('Applies background color #f5f5f5ab to regular row', () => {
            wrapper = createWrapper({ isHeader: false, textFirstCell: 'Test Data' });
            expect(wrapper.prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
        });
    });
});
