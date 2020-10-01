import React from "react";

import { Bell, Dropdown } from "phoenix-ui-kit";
import { action } from "@storybook/addon-actions";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
};
const options = [
  { value: "advisor", label: "Advisor" },
  { value: "antiquarian", label: "Antiquarian" },
  { value: "boilermaker", label: "Boilermaker" },
  { value: "dental_technician", label: "Dental technician" },
  { value: "engineer", label: "engineer" },
  { value: "forest_ingineer", label: "Forest engineer" },
  { value: "graphic_designer", label: "Graphic designer" },
  { value: "industrial_designer", label: "Industrial designer" },
  { value: "interior_designer", label: "Interior designer" },
  { value: "lawyer", label: "Lawyer" },
  { value: "logistician", label: "Logistician" },
  { value: "officer", label: "Officer" },
  { value: "photographer", label: "Photographer" },
  { value: "product_tourist", label: "Product tourist" },
  { value: "receptionist", label: "Receptionist" },
  { value: "school_teacher", label: "School teacher" },
  { value: "warehouseman", label: "Warehouseman" },
];

const Template = (args) => <Dropdown {...args} />;
export const Default = Template.bind({});
Default.args = {
  className: "",
  options: options,
  name: "dropDown",
  placeholder: "Select a job",
  onChange: action("onChange"),
  onBlur: action("onBlur"),
  value: "",
};
