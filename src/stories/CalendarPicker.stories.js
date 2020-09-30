import React from "react";

import { CalendarPicker } from "phoenix-ui-kit";
import { action } from "@storybook/addon-actions";

export default {
  title: "Example/CalendarPicker",
  component: CalendarPicker,
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

const Template = (args) => (
  <div style={{ width: "fit-content" }}>
    <CalendarPicker {...args} />
  </div>
);
export const Primary = Template.bind({});
Primary.args = {
  className: "",
  label: "Select your birthday",
  name: "birthday",
  onChange: action("onChange"),
};
