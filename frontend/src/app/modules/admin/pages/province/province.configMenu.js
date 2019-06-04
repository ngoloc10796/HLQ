myApp.configMenu.push({
  title: myApp.configLanguage.language.location,
  index: 1,
  showInMenuIsRoles: ["*"],
  accessIsRoles: ["*"],
  updateIsRoles: ["*"],
  iconClass: "fa fa-map-marker",
  state: null,
  activeState: null,
  childItems: [
    {
      title: myApp.configLanguage.language.c_list + " " + myApp.configLanguage.language.province,
      index: 1,
      showInMenuIsRoles: ["*"],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.province.list",
      activeState: [
        "admin.province.create", "admin.province.update", "admin.province.detail",
      ],
      childItems: null
    },    
    {
      title: myApp.configLanguage.language.c_create + " " + myApp.configLanguage.language.province,
      index: 1,
      showInMenuIsRoles: [],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.province.create",
      activeState: null,
      childItems: null
    },
    {
      title: myApp.configLanguage.language.c_update + " " + myApp.configLanguage.language.province,
      index: 1,
      showInMenuIsRoles: [],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.province.update",
      activeState: null,
      childItems: null
    },
    {
      title: myApp.configLanguage.language.c_detail + " " + myApp.configLanguage.language.province,
      index: 1,
      showInMenuIsRoles: [],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.province.detail",
      activeState: null,
      childItems: null
    },
    {
      title: myApp.configLanguage.language.c_list + " " + myApp.configLanguage.language.district,
      index: 1,
      showInMenuIsRoles: ["*"],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.district.list",
      activeState: [
        "admin.district.create", "admin.district.update", "admin.district.detail",
      ],
      childItems: null
    },
    {
      title: myApp.configLanguage.language.c_create + " " + myApp.configLanguage.language.district,
      index: 1,
      showInMenuIsRoles: [],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.district.create",
      activeState: null,
      childItems: null
    },
    {
      title: myApp.configLanguage.language.c_update + " " + myApp.configLanguage.language.district,
      index: 1,
      showInMenuIsRoles: [],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.district.update",
      activeState: null,
      childItems: null
    },
    {
      title: myApp.configLanguage.language.c_detail + " " + myApp.configLanguage.language.district,
      index: 1,
      showInMenuIsRoles: [],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.district.detail",
      activeState: null,
      childItems: null
    },
    {
      title: myApp.configLanguage.language.c_list + " " + myApp.configLanguage.language.commune,
      index: 1,
      showInMenuIsRoles: ["*"],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.commune.list",
      activeState: [
        "admin.commune.create", "admin.commune.update", "admin.commune.detail",
      ],
      childItems: null
    },
    {
      title: myApp.configLanguage.language.c_create + " " + myApp.configLanguage.language.commune,
      index: 1,
      showInMenuIsRoles: [],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.commune.create",
      activeState: null,
      childItems: null
    },
    {
      title: myApp.configLanguage.language.c_update + " " + myApp.configLanguage.language.commune,
      index: 1,
      showInMenuIsRoles: [],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.commune.update",
      activeState: null,
      childItems: null
    },
    {
      title: myApp.configLanguage.language.c_detail + " " + myApp.configLanguage.language.commune,
      index: 1,
      showInMenuIsRoles: [],
      accessIsRoles: ["*"],
      updateIsRoles: ["*"],
      iconClass: null,
      state: "admin.commune.detail",
      activeState: null,
      childItems: null
    }
  ]
});