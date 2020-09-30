import React from 'react';

import {CheckBox} from 'phoenix-ui-kit';
import {action} from "@storybook/addon-actions";

export default {
	title: 'Example/CheckBox',
	component: CheckBox,
	argTypes: { onChange: { action: 'clicked' } },
};

const Template = (args) => <CheckBox {...args} />
;

export const Default = Template.bind({});
Default.args = {
	label: 'Checkbox',
	selected: false,
	disabled: false,
	className: '',
	name: '',
	onChange:action('clicked')
};
export const Checked = Template.bind({});
Checked.args = {
	label: 'Checkbox',
	selected: true,
	disabled: false,
	className: '',
	name: '',
	onChange:action('clicked')
};
export const Disabled = Template.bind({});
Disabled.args = {
	label: 'Checkbox',
	selected: false,
	disabled: true,
	className: '',
	name: '',
	onChange:action('clicked')
};
export const CheckedAndDisabled = Template.bind({});
CheckedAndDisabled.args = {
	label: 'Checkbox',
	selected: true,
	disabled: true,
	className: '',
	name: '',
	onChange:action('clicked')
};
