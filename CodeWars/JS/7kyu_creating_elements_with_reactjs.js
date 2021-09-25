var React = require("react");

const createElement = (p, tag = 'div', props = {}) => React.createElement(tag, props, p);
const createUnorderedList = (l) => React.createElement('ul', { children: l.map((e, i) => React.createElement('li', { key: i }, e)) })