import React from 'react';
import 'phoenix-ui-kit/dist/index.min.css';

import {Label} from 'phoenix-ui-kit';

export default {
	title: 'Example/Label',
	component: Label,
};

const Template = (args) => <div style={{width:'fit-content'}}>
	<Label state="success">success</Label>
	<Label state="error">error</Label>
	<Label state="warning">warning</Label>
	<Label state="info">information</Label>
</div>
;

export const Default = Template.bind({});
Default.args = {
	children: 'Label',
};
