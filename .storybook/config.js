import infoAddon from '@kadira/react-storybook-addon-info';
import centered from '@kadira/react-storybook-decorator-centered';
import { configure, setAddon, addDecorator } from '@kadira/storybook';

addDecorator(centered);
setAddon(infoAddon);

// Require all files that ends with .story.js
const req = require.context('../src', true, /\.story.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
