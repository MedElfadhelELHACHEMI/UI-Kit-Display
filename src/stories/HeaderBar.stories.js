import React from 'react';

import {Bell, HeaderBar, Title} from 'phoenix-ui-kit';

export default {
	title: 'Example/HeaderBar',
	component: HeaderBar,
};

const Template = (args) => <HeaderBar {...args} />
;

export const Default = Template.bind({});
Default.args = {
	profile: {
		imageURl:
			'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
		fullName: ' Alfredo Tinder',
		onlineStatus: 'online',
	},
	contentComponent: <Title color="black" weight="semibold">
		Dashboard
	</Title>
};
