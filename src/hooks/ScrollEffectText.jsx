import React from "react";
import ScrollEffectText from "./ScrollEffectText";

function wrapTextNodes(node) {
  if (typeof node === "string") {
    return <ScrollEffectText>{node}</ScrollEffectText>;
  }

  if (Array.isArray(node)) {
    return node.map((child, i) => wrapTextNodes(child));
  }

  if (React.isValidElement(node)) {
    const children = node.props.children;
    const wrappedChildren = wrapTextNodes(children);

    return React.cloneElement(node, {
      ...node.props,
      children: wrappedChildren,
    });
  }

  return node;
}

const AnimateOnScroll = ({ children }) => {
  return <>{wrapTextNodes(children)}</>;
};

export default AnimateOnScroll;
