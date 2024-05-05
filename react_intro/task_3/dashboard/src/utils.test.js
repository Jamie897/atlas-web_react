import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("getFullYear function", () => {
  test("returns the correct year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe("getFooterCopy function", () => {
  test("returns the correct string when isIndex is true", () => {
    const result = getFooterCopy(true);
    expect(result).toBe("Holberton School");
  });

  test("returns the correct string when isIndex is false", () => {
    const result = getFooterCopy(false);
    expect(result).toBe("Holberton School main dashboard");
  });
});

describe("getLatestNotification function", () => {
  test("returns the correct string", () => {
    const notificationString =
      "<strong>Urgent requirement</strong> - complete by EOD";
    expect(getLatestNotification()).toBe(notificationString);
  });
});