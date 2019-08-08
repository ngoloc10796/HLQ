myApp.configMenu.push({
  title: myApp.configLanguage.language.Event,
  index: 9,
  showInMenuIsRoles: ["*"],
  accessIsRoles: ["*"],
  updateIsRoles: ["*"],
  iconClass: "fa fa-calendar-o",
  state: "admin.event.list",
  activeState: [
    "admin.event.create", "admin.event.update", "admin.event.detail",
  ],
  childItems: null
}, {
    title: myApp.configLanguage.language.c_create + " " + myApp.configLanguage.language.event,
    index: 9,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.event.create",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_update + " " + myApp.configLanguage.language.event,
    index: 9,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.event.update",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_detail + " " + myApp.configLanguage.language.event,
    index: 9,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.event.detail",
    activeState: null,
    childItems: null
  });