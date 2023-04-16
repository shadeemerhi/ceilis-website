"use client";

import Button from "@/app/components/design-system/Button";
import React from "react";
import ContentItem from "./ContentItem";

const Content = () => {
  return (
    <section>
      <ContentItem
        imageUrl="/content-item-one.jpg"
        titleText="Section One Text"
        supplementalText="This is some supplemental text"
        actionButton={
          <Button
            text="View Menu"
            onClick={() => {}}
            variant="border"
            textColor="black"
          />
        }
        flexDirection="row"
      />
      <ContentItem
        imageUrl="/content-item-two.jpg"
        titleText="Section Two Text"
        supplementalText="This is some supplemental text"
        actionButton={
          <Button
            text="Reserve Now"
            onClick={() => {}}
            variant="border"
            textColor="black"
          />
        }
        flexDirection="row-reverse"
      />
    </section>
  );
};

export default Content;
