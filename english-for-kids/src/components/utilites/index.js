function createDomNode(element, ...classes) {
  const node = document.createElement(element);
  node.classList.add(...classes);
  return node;
}

function createFragmentFromString(str) {
  const template = document.createElement('template');
  template.innerHTML = str;
  return template.content;
}

export {
  createDomNode,
  createFragmentFromString,
};
