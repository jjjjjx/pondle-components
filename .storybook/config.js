import { setAddon, configure } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

// Set addons
setAddon(JSXAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
