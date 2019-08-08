myApp.configMenu.push({
  title: myApp.configLanguage.language.School,
  index: 3,
  showInMenuIsRoles: ["*"],
  accessIsRoles: ["*"],
  updateIsRoles: ["*"],
  iconClass: "fa fa-graduation-cap",
  state: "admin.school.list",
  activeState: [
    "admin.school.create", "admin.school.update", "admin.school.detail",
  ],
  childItems: null
}, {
    title: myApp.configLanguage.language.c_create + " " + myApp.configLanguage.language.school,
    index: 3,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.school.create",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_update + " " + myApp.configLanguage.language.school,
    index: 3,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.school.update",
    activeState: null,
    childItems: null
  },
  {
    title: myApp.configLanguage.language.c_detail + " " + myApp.configLanguage.language.school,
    index: 3,
    showInMenuIsRoles: [],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.school.detail",
    activeState: null,
    childItems: null
  });