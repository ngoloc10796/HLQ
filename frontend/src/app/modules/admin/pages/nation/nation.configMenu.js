myApp.configMenu.push({
  title: myApp.configLanguage.language.Nation,
  index: 2,
  showInMenuIsRoles: ["*"],
  accessIsRoles: ["*"],
  updateIsRoles: ["*"],
  iconClass: "fa fa-globe",
  state: "admin.nation.list",
  activeState: [
    "admin.nation.create", "admin.nation.update", "admin.nation.detail",
  ],
  childItems: null
}, {
    title: myApp.configLanguage.language.c_create + " " + myApp.configLanguage.language.nation,
    index: 2,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.nation.create",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_update + " " + myApp.configLanguage.language.nation,
    index: 2,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.nation.update",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_detail + " " + myApp.configLanguage.language.nation,
    index: 2,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.nation.detail",
    activeState: null,
    childItems: null
  });