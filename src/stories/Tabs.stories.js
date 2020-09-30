import React from 'react';

import {Button, Tabs} from 'phoenix-ui-kit';

export default {
	title: 'Example/Tabs',
	component: Tabs,
};

const Template = (args) =>  <Tabs {...args} />
;

export const Primary = Template.bind({});
Primary.args = {
	className: '',
	labelListClassName: '',
	contentClassName: '',
	tabList:[{ label: 'tab1', tabComponent: <h1>tab1 content</h1> },
		{ label: 'tab2', tabComponent: <p>tab2 content</p> },
		{
			label: 'tab3',
			tabComponent: (
				<Button onClick={e => console.log(e)} primary small>
					Primary
				</Button>
			),
		}]
};
