import {
    mdiGauge,
    mdiAccount,
    mdiAccountMultiple,
    mdiCog,
  } from "@mdi/js";

export default [
    {
        name:"Dashboard",
        path: "/app/dashboard",
        iconName: mdiGauge
    },
    {
        name:"Talents",
        path: "/app/talent",
        iconName: mdiAccount
    },
    {
        name:"Settings",
        path: "/app/settings",
        iconName: mdiCog
    },
]