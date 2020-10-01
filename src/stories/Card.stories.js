import React from "react";

import { Avatar, Bell, Card, Title } from "phoenix-ui-kit";

export default {
  title: "Example/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  leftComponent: (
    <Avatar
      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
      alt="avatar photo"
      large
    />
  ),
  centerComponent: <Title>Presentation de projet</Title>,
  rightComponent: <Bell color="#C1C1C1" width="20px" height="20px" />,
  className: "",
  leftClassName: "",
  centerClassName: "",
  rightClassName: "",
  selected: false,
};
