// Import the functions to test
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear function
test('getFullYear returns the current year', () => {
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Call getFullYear function
  const result = getFullYear();
  // Check if the returned year matches the current year
  expect(result).toBe(currentYear);
});

// Test for getFooterCopy function
test('getFooterCopy returns correct string when argument is true', () => {
  const result = getFooterCopy(true);
  expect(result).toBe("Holberton School");
});

test('getFooterCopy returns correct string when argument is false', () => {
  const result = getFooterCopy(false);
  expect(result).toBe("Holberton School main dashboard");
});

// Test for getLatestNotification function
test('getLatestNotification returns the correct string', () => {
  const result = getLatestNotification();
  expect(result).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
