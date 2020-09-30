import React from 'react';

import {Bell, Button} from 'phoenix-ui-kit';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />
;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary:true,
  children: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  tertiary:true,
  children: 'Button',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  primary:true,
  children: 'With Icon',
  withIcon:true,
  buttonIcon: (<Bell color="#FFF" width="12px" height="12px" />)
};
export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  secondary:true,
  children: 'With Icon',
  withIcon:true,
  buttonIcon: (<Bell color="#333" width="12px" height="12px" />)
};
export const TertiaryWithIcon = Template.bind({});
TertiaryWithIcon.args = {
  tertiary:true,
  children: 'With Icon',
  withIcon:true,
  buttonIcon: (<Bell color="#333" width="12px" height="12px" />)
};
export const Disabled = Template.bind({});
Disabled.args = {
  primary:true,
  children: 'Disabled',
  disabled:true,
};
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  primary:true,
  children: 'Small',
  small:true
};
export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  secondary:true,
  children: 'Small',
  small:true
};
export const TertiarySmall = Template.bind({});
TertiarySmall.args = {
  tertiary:true,
  children: 'Small',
  small:true
};
