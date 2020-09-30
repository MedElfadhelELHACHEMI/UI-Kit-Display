import React from "react";

import { StarRating } from "phoenix-ui-kit";

export default {
  title: "Example/StarRating",
  component: StarRating,
};

const Template = (args) => (
  <div className="vlist">
    <StarRating
      options={["Nah", "Could improve", "Okay", "Good!", "Awesome!"]}
      name="stars"
      value={0}
      onChange={(e) => console.log(e)}
    />
    <StarRating
      options={["Nah", "Could improve", "Okay", "Good!", "Awesome!"]}
      name="stars"
      value={1}
      onChange={(e) => console.log(e)}
    />
    <StarRating
      options={["Nah", "Could improve", "Okay", "Good!", "Awesome!"]}
      name="stars"
      value={2}
      onChange={(e) => console.log(e)}
    />
    <StarRating
      options={["Nah", "Could improve", "Okay", "Good!", "Awesome!"]}
      name="stars"
      value={3}
      onChange={(e) => console.log(e)}
    />
    <StarRating
      options={["Nah", "Could improve", "Okay", "Good!", "Awesome!"]}
      name="stars"
      value={4}
      onChange={(e) => console.log(e)}
    />
  </div>
);
export const Primary = Template.bind({});
Primary.args = {
  options: ["Nah", "Could improve", "Okay", "Good!", "Awesome!"],
  name: "star",
  value: [0, 1, 2, 3, 4],
};
