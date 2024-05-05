import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils module tests', () => {
  test('getFullYear returns the correct year', () => {
      const currentYear = new Date().getFullYear();
      expect(getFullYear()).toBe(currentYear);
  });

  test('getFooterCopy returns correct string based on isIndex argument', () => {
      // When isIndex is true
      expect(getFooterCopy(true)).toBe('Holberton School');

      // When isIndex is false
      expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns correct notification string', () => {
      const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
      expect(getLatestNotification()).toBe(expectedNotification);
  });
});