import React from "react";

import { SquareRating } from "phoenix-ui-kit";

export default {
  title: "Example/SquareRating",
  component: SquareRating,
};

const Template = (args) => (
  <div className="vlist">
    <SquareRating levels={["A1", "A2", "B1", "B2", "C1", "C2"]} ranking={0} />
    <SquareRating levels={["A1", "A2", "B1", "B2", "C1", "C2"]} ranking={1} />
    <SquareRating levels={["A1", "A2", "B1", "B2", "C1", "C2"]} ranking={2} />
    <SquareRating levels={["A1", "A2", "B1", "B2", "C1", "C2"]} ranking={3} />
    <SquareRating levels={["A1", "A2", "B1", "B2", "C1", "C2"]} ranking={4} />
    <SquareRating levels={["A1", "A2", "B1", "B2", "C1", "C2"]} ranking={5} />
  </div>
);
export const Primary = Template.bind({});
Primary.args = {
  levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
  ranking: 1,
};
