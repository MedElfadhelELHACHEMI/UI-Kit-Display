import React from "react";

import { Toaster } from "phoenix-ui-kit";
import { action } from "@storybook/addon-actions";

export default {
  title: "Example/Toaster",
  component: Toaster,
};

const Template = (args) => <Toaster {...args} />;

export const Information = Template.bind({});
Information.args = {
  closeAction: action("close Toaster"),
  type: "info",
  title: "Information",
  body: "Tell me more about what happenned",
};
export const Warning = Template.bind({});
Warning.args = {
	closeAction: action("close Toaster"),
	type: "warning",
	title: "Warning",
	body: "Tell me more about what happenned",
};
export const Success = Template.bind({});
Success.args = {
	closeAction: action("close Toaster"),
	type: "success",
	title: "Warning",
	body: "Tell me more about what happenned",
};
export const Error = Template.bind({});
Error.args = {
	closeAction: action("close Toaster"),
	type: "error",
	title: "Error",
	body: "Tell me more about what happenned",
};
