import React from "react";
import { Card, CardIcon } from ".";

function ServiceCard({ title, description, Icon }) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <CardIcon Icon={Icon} className={"from-orange-700 to-orange-400"} />
        <h3 className="sub-heading-text">{title}</h3>

        <p className="paragraph-text">{description}</p>
      </div>
    </Card>
  );
}

export default ServiceCard;
