import React from "react";

import {
  HomeOutline,
  LayersOutline,
  LogoShort,
  Navbar,
  PeopleOutline,
} from "phoenix-ui-kit";
import Logo from "../Logo";

export default {
  title: "Example/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;
export const Default = Template.bind({});
Default.args = {
  dark: true,
  light: false,
  logo: <LogoShort />,
  navItems: [
    {
      link: "/#",
      logo: <HomeOutline color="#FFF" width="24px" height="24px" />,
      hasTooltip: true,
      toolTipLabel: "Home",
    },
    {
      link: "/layers",
      logo: <LayersOutline color="#FFF" width="24px" height="24px" />,
      hasTooltip: true,
      toolTipLabel: "layers",
    },
    {
      link: "/teachers",
      logo: <PeopleOutline color="#FFF" width="24px" height="24px" />,
      hasTooltip: true,
      toolTipLabel: "teachers",
    },
  ],
  className: "",
};
