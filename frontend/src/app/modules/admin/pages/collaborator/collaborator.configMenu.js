myApp.configMenu.push({
  title: myApp.configLanguage.language.Collaborator,
  index: 8,
  showInMenuIsRoles: ["*"],
  accessIsRoles: ["*"],
  updateIsRoles: ["*"],
  iconClass: "fa fa-users",
  state: "admin.collaborator.list",
  activeState: [
    "admin.collaborator.create", "admin.collaborator.update", "admin.collaborator.detail",
  ],
  childItems: null
}, {
    title: myApp.configLanguage.language.c_create + " " + myApp.configLanguage.language.collaborator,
    index: 8,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.collaborator.create",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_update + " " + myApp.configLanguage.language.collaborator,
    index: 8,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.collaborator.update",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_detail + " " + myApp.configLanguage.language.collaborator,
    index: 8,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.collaborator.detail",
    activeState: null,
    childItems: null
  });