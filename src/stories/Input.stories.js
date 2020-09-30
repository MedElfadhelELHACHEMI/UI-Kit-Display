import React from 'react';

import {Input} from 'phoenix-ui-kit';
import {action} from "@storybook/addon-actions";

export default {
	title: 'Example/Input',
	component: Input,
	parameters: { actions: { argTypesRegex: '^on.*' } },
};

const Template = (args) => <Input {...args} />
;

export const Default = Template.bind({});
Default.args = {
	name: 'input',
	autoComplete: 'password',
	inputState: undefined,
	placeholder: 'Write Something',
	onChange:(e)=>action(e),
	onBlur: action('Blur'),
	className: '',
	containerClassName: '',
	disabled:false
};
export const Disabled = Template.bind({});
Disabled.args = {
	name: 'input',
	autoComplete: 'password',
	inputState: undefined,
	placeholder: 'Write Something',
	onChange:(e)=>action(e),
	onBlur: action('Blur'),
	className: '',
	containerClassName: '',
	disabled:true
};
export const Valid = Template.bind({});
Valid.args = {
	name: 'input',
	autoComplete: 'password',
	inputState: 'success',
	placeholder: 'Write Something',
	onChange:(e)=>action(e),
	onBlur: action('Blur'),
	className: '',
	containerClassName: '',
	disabled:false
};
export const Error = Template.bind({});
Error.args = {
	name: 'input',
	autoComplete: 'password',
	inputState: 'error',
	placeholder: 'Write Something',
	onChange:(e)=>action(e),
	onBlur: action('Blur'),
	className: '',
	containerClassName: '',
	disabled:false
};
