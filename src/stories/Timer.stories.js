import React from "react";

import { Bell, ProgressBar } from "phoenix-ui-kit";

export default {
  title: "Example/Timer",
  component: ProgressBar,
};

const Template = (args) => <div style={{width:'fit-content'}}><ProgressBar {...args} /></div>;
export const Default = Template.bind({});
Default.args = {
  currentTime: 10,
  duration: 45,
  IconComponent: <Bell color="#9296B3" width="20px" height="20px" />,
};
