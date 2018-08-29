// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

// Creating a new surface
const leftPanel = new Surface(1000, 200, Surface.SurfaceShape.Flat);
leftPanel.setAngle(-2, 0);

const topPanel = new Surface(1000, 500, Surface.SurfaceShape.Flat);
topPanel.setAngle( 
  Math.PI / 4, /* horiz angle */
  Math.PI / 4 /* vertical angle */
);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render component to the new surface flat we just created
  r360.renderToSurface(
    r360.createRoot('UnderwaterSurface'),
    leftPanel,
  );

  r360.renderToSurface(
    r360.createRoot('AboveWaterSurface'),
    topPanel,
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('RatherBeHere', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('beach_view.jpg'));
}

window.React360 = {init};
