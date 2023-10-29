/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'autogenerated',
      dirName: 'tutorial',
    },
  ],
  reactnativeSidebar: [
    {
      type: 'autogenerated',
      dirName: 'reactnative',
    },
  ],
  reactNextSidebar: [
    {
      type: 'autogenerated',
      dirName: 'react-next',
    },
  ],
  jsSidebar: [
    {
      type: 'autogenerated',
      dirName: 'js',
    },
  ],
  htmlSidebar: [
    {
      type: 'autogenerated',
      dirName: 'html',
    },
  ],
  cssSidebar: [
    {
      type: 'autogenerated',
      dirName: 'css',
    },
  ],
};

export default sidebars;
