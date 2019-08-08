myApp.configMenu.push({
  title: myApp.configLanguage.language.Register,
  index: 10,
  showInMenuIsRoles: ["*"],
  accessIsRoles: ["*"],
  updateIsRoles: ["*"],
  iconClass: "fa fa-graduation-cap",
  state: "admin.register.list",
  activeState: [
    "admin.register.create", "admin.register.update", "admin.register.detail",
  ],
  childItems: null
},
  {
    title: myApp.configLanguage.language.c_create + " " + myApp.configLanguage.language.register,
    index: 10,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.register.create",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_update + " " + myApp.configLanguage.language.register,
    index: 10,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.register.update",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_detail + " " + myApp.configLanguage.language.register,
    index: 10,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.register.detail",
    activeState: null,
    childItems: null
  });