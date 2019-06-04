myApp.configMenu.push({
  title: myApp.configLanguage.language.Aspiration,
  index: 7,
  showInMenuIsRoles: ["*"],
  accessIsRoles: ["*"],
  updateIsRoles: ["*"],
  iconClass: "fa fa-star",
  state: "admin.aspiration.list",
  activeState: [
    "admin.aspiration.create", "admin.aspiration.update", "admin.aspiration.detail",
  ],
  childItems: null
}, {
    title: myApp.configLanguage.language.c_create + " " + myApp.configLanguage.language.aspiration,
    index: 7,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.aspiration.create",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_update + " " + myApp.configLanguage.language.aspiration,
    index: 7,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.aspiration.update",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_detail + " " + myApp.configLanguage.language.aspiration,
    index: 7,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.aspiration.detail",
    activeState: null,
    childItems: null
  });