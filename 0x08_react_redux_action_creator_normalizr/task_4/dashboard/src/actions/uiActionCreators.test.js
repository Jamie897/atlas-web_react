
import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  } from "./uiActionCreators";
  
  import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
  } from "./uiActionTypes";
  
  describe("uiActionCreators", () => {
    // test login
    it("should create an action to logout", () => {
      const email = "test@examplemail.com";
      const password = "test123PASS";
      const expectedAction = {
        type: LOGIN,
        user: { email, password },
      };
      expect(login(email, password)).toEqual(expectedAction);
    });
    //  test logout
    it("should create an action to logout", () => {
      const expectedAction = {
        type: LOGOUT,
      };
      expect(logout()).toEqual(expectedAction);
    });
    // test displayNotificationDrawer
    it("should create an action to displayNotificationDrawer", () => {
      const expectedAction = {
        type: DISPLAY_NOTIFICATION_DRAWER,
      };
      expect(displayNotificationDrawer()).toEqual(expectedAction);
    });
    // test hideNotificationDrawer
    it("should create an action to hideNotificationDrawer", () => {
      const expectedAction = {
        type: HIDE_NOTIFICATION_DRAWER,
      };
      expect(hideNotificationDrawer()).toEqual(expectedAction);
    });
  });