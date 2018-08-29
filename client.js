// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

const leftPanel = new Surface(1000, 200, Surface.SurfaceShape.Flat);
leftPanel.setAngle(-2, 0);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('RatherBeHere', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  r360.renderToSurface(
    r360.createRoot('UnderwaterSurface'),
    leftPanel,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('beach_view.jpg'));
}

window.React360 = {init};
