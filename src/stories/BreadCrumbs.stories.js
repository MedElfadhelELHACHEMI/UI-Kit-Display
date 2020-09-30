import React from "react";

import { BreadCrumbs } from "phoenix-ui-kit";

export default {
  title: "Example/BreadCrumbs",
  component: BreadCrumbs,
};

const Template = (args) => (
  <div>
    <BreadCrumbs routes={["Dashboard"]} />
    <BreadCrumbs routes={["Dashboard", "Level 2"]} />
    <BreadCrumbs routes={["Dashboard", "Level 2", "Level 3"]} />
    <BreadCrumbs routes={["Dashboard", "Level 2", "Level 3", "Level 4"]} />
  </div>
);
export const Primary = Template.bind({});
Primary.args = {
  routes: ["Parent",'Child 1','Child 2'],
  className: "",
};
