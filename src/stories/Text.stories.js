import React from 'react';
import 'phoenix-ui-kit/dist/index.min.css';


import {  Mega,
	Jumbo,
	Headline,
	Title,
	Body,
	Caption} from 'phoenix-ui-kit';

export default {
	title: 'Example/Text',
};

const Template = (args) => <div>
	<Mega {...args} />
	<Jumbo {...args} />
	<Headline {...args} />
	<Title {...args} />
	<Body {...args} />
	<Caption {...args} />
</div>
;

export const Black = Template.bind({});
Black.args = {
	children: 'Text',
};
export const Semibold = Template.bind({});
Semibold.args = {
	children: 'Text',
	weight:'semibold'
};
