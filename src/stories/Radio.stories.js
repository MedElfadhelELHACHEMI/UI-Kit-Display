import React from 'react';

import {Radio} from 'phoenix-ui-kit';
import {action} from "@storybook/addon-actions";

export default {
	title: 'Example/Radio',
	component: Radio,
	argTypes: { onChange: { action: 'clicked' } },
};

const Template = (args) => <Radio {...args} />
;

export const Default = Template.bind({});
Default.args = {
	label: 'Radio',
	selected: false,
	disabled: false,
	className: '',
	name: '',
	onChange:action('clicked')
};
export const Checked = Template.bind({});
Checked.args = {
	label: 'Radio',
	selected: true,
	disabled: false,
	className: '',
	name: '',
	onChange:action('clicked')
};
export const Disabled = Template.bind({});
Disabled.args = {
	label: 'Radio',
	selected: false,
	disabled: true,
	className: '',
	name: '',
	onChange:action('clicked')
};
export const CheckedAndDisabled = Template.bind({});
CheckedAndDisabled.args = {
	label: 'Radio',
	selected: true,
	disabled: true,
	className: '',
	name: '',
	onChange:action('clicked')
};
