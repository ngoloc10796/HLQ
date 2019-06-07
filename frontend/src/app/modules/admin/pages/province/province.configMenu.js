//Menu 3 cấp childItems
/* {
  title: language."Danh mục mẫu",
  index: numbber,
  showInMenuIsRoles: ["Contributor", "Sale", "CustomerCare", "User"], ["*"] or array[role] or [];
  accessIsRoles: ["*"],  ["*"] or array[role] or [];
  updateIsRoles: ["*"],  ["*"] or array[role] or [];
  iconClass: "fa fa-list",
  state: null, Menu cha thì state = null;
  activeState: null,
  childItems: [{ array[object] or null
    title: language.c_list + "Danh mục mẫu",
    showInMenuIsRoles: ["*"],
    accessIsRoles: ["*"],
    updateIsRoles: ["*"],
    iconClass: null,
    state: "admin.demo.list",
    activeState: [ array[string] or null; để active menu khi truy cập vào các view con, chỉ cần thêm thuộc tính này ở state đặt tại menu nếu có trang con
      "admin.demo.create", "admin.demo.edit", "admin.demo.detail",
    ],
    childItems: null array[object] or null
  }]
}, */

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