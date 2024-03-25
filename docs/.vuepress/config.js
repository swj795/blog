const sidebar = require("./config/sidebar/index.js");
const nav = require("./config/nav/index.js");
module.exports = {
  title: "ssswj",
  description: "It is a start",
  theme: "reco",
  themeConfig: {
    type: "blog",
    authorAvatar: "/home/avatar.jpeg",
    nav,
    modePicker: false,
    mode: "dark",
    sidebar,
    lastUpdated: "Last Updated",
  },
};
