import React from "react";

import { Avatar } from "phoenix-ui-kit";

export default {
  title: "Example/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const CircleSmall = Template.bind({});
CircleSmall.args = {
  src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  alt: "Small Avatar",
  className: "",
  large: false,
  small: true,
  square: false,
};
export const SquareSmall = Template.bind({});
SquareSmall.args = {
	src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
	alt: "Small Avatar",
	className: "",
	large: false,
	small: true,
	square: true,
};
export const CircleLarge = Template.bind({});
CircleLarge.args = {
	src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
	alt: "Small Avatar",
	className: "",
	large: true,
	small: false,
	square: false,
};
export const SquareLarge = Template.bind({});
SquareLarge.args = {
	src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
	alt: "Small Avatar",
	className: "",
	large: true,
	small: false,
	square: true,
};
