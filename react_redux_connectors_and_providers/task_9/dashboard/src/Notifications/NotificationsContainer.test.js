import React from "react";
import { shallow } from "enzyme";
import { NotificationsContainer } from "./NotificationsContainer";

describe("NotificationsContainer", () => {
  let fetchNotifications;

  beforeEach(() => {
    fetchNotifications = jest.fn();
  });

  it("should call fetchNotifications when the component is mounted", () => {
    shallow(<NotificationsContainer fetchNotifications={fetchNotifications} />);
    expect(fetchNotifications).toHaveBeenCalled();
  });
});
