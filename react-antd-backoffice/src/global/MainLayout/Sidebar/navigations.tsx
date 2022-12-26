interface SubNavigation {
  key?: string;
  label: string;
  path?: string;
  pattern?: RegExp;
}

interface Navigations extends SubNavigation {
  icon?: string;
  children: SubNavigation[];
}

const navigations: Array<Navigations> = [
  {
    key: "dashboard",
    icon: "home",
    label: "Dashboard",
    path: "/dashboard",
    children: [],
  },
  {
    key: "admin-management",
    icon: "user",
    label: "Admin Management",
    children: [
      {
        key: "list-admin",
        label: "List Admin",
        path: "/admin/list",
        pattern: /^\/admin\/(list|detail|add|edit)$/g,
      },
      {
        key: "role-admin",
        label: "Role Manajemen",
        path: "/admin/role",
        pattern: /^\/admin\/role(?:\/(add|edit))?$/g,
      },
    ],
  },
  {
    key: "approval",
    icon: "document-text",
    label: "Approval",
    children: [
      {
        key: "approval-individu",
        label: "Individu",
        path: "/approval/individu",
        pattern: /^\/approval\/individu(?:\/(detail))?$/g,
      },
      {
        key: "approval-organisasi",
        label: "Organisasi",
        path: "/approval/organisasi",
        pattern: /^\/approval\/organisasi(?:\/(detail))?$/g,
      },
      {
        key: "approval-community",
        label: "Community Space",
        path: "/approval/community",
        pattern: /^\/approval\/community(?:\/(detail))?$/g,
      },
    ],
  },
  {
    key: "co-lab",
    icon: "colab",
    label: "Co Lab",
    children: [
      {
        key: "challenge",
        label: "Challenge",
        path: "/challenge",
        pattern: /^\/challenge(?:\/(detail|add|edit))?$/g,
      },
      {
        key: "user-colab",
        label: "User Co Lab",
        path: "/user-colab",
        pattern: /^\/user-colab(?:\/detail)?(?:\/group)?$/g,
      },
      {
        key: "tools",
        label: "Master Data Tools",
        path: "/tools",
        pattern: /^\/tools(?:\/(detail|add|edit))?$/g,
      },
    ],
  },
  {
    key: "skill-market",
    icon: "view-grid",
    label: "Skill Market",
    children: [
      {
        key: "skill-market-verify",
        label: "Verifikasi Skill Market",
        path: "/skill-market",
        pattern: /^\/skill-market(?:\/(detail))?$/g,
      },
      {
        key: "skill-market-recomm",
        label: "Skill Market Rekomendasi",
        path: "/skill-market-recommend",
        pattern: /^\/skill-market-recommend(?:\/(detail|add|edit))?$/g,
      },
      {
        key: "skill-market-master",
        label: "Master Data Skill Market",
        path: "/skill",
        pattern: /^\/skill(?:\/(detail|add|edit))?$/g,
      },
      {
        key: "skill-market-transaction",
        label: "Transaksi Skill Market",
        path: "/skill-market-transaction",
        pattern: /^\/skill-market-transaction(?:\/(detail|add|edit))?$/g,
      },
    ],
  },
  {
    key: "map",
    icon: "map",
    label: "Co Map",
    children: [
      {
        key: "comap",
        label: "Maps",
        path: "/maps",
        pattern: /^\/maps(?:\/(detail|add|edit))?$/g,
      },
      {
        key: "comap-setting",
        label: "Pengaturan",
        path: "/maps/setting",
        pattern: /^\/maps\/setting(?:\/(detail|add|edit))?$/g,
      },
    ],
  },
  {
    key: "forum",
    icon: "user-group",
    label: "Forum",
    children: [
      {
        key: "user-verif",
        label: "Verifikasi User",
        path: "/forum/user-verification",
        pattern: /^\/forum\/user-verification(?:\/(detail|add|edit))?$/g,
      },
      {
        key: "forum-management",
        label: "Forum Manajemen",
        path: "/forum/manage",
        pattern: /^\/forum\/manage(?:\/(detail|add|edit))?$/g,
      },
      {
        key: "list-forum",
        label: "List Forum",
        path: "/forum/list",
        pattern: /^\/forum\/list(?:\/(detail|add|edit))?$/g,
      },
      {
        key: "list-topic",
        label: "Master Data Topik",
        path: "/forum/topics",
        pattern: /^\/forum\/topics(?:\/(detail|add|edit))?$/g,
      },
    ],
  },
  {
    key: "management-post",
    icon: "post",
    label: "Management Post",
    children: [
      {
        key: "management-post-task",
        label: "Post",
        path: "/post",
        pattern: /^\/post(?:\/(detail))?$/g,
      },
      {
        key: "management-post-history",
        label: "Riwayat Post",
        path: "/post/history",
        pattern: /^\/post\/history(?:\/(detail))?$/g,
      },
    ],
  },
  // TODO: Do the management task url
  {
    key: "management-task",
    icon: "task",
    label: "Management Task",
    path: "/task",
    pattern: /^\/task(?:\/(detail|add|edit))?$/g,
    children: [],
  },
  {
    key: "knowledge",
    icon: "lamp",
    label: "Management Knowledge",
    children: [
      {
        key: "learning-material",
        label: "Learning Material",
        path: "/knowledge/material",
        pattern: /^\/knowledge\/material(?:\/(detail|add|edit))?$/g,
      },
      {
        key: "learning-event",
        label: "Learning Event",
        path: "/knowledge/event",
        pattern: /^\/knowledge\/event(?:\/(detail|add|edit))?$/g,
      },
      {
        key: "learning-event-type",
        label: "Master Data Event",
        path: "/knowledge/event-type",
        pattern: /^\/knowledge\/event-type(?:\/(detail|add|edit))?$/g,
      },
    ],
  },
  // TODO: Do the management Event url
  {
    key: "event",
    icon: "calendar",
    label: "Management Event",
    children: [
      {
        key: "event-material",
        label: "List Event",
        path: "/event",
        pattern: /^\/event(?:\/(detail|add|edit))?$/g,
      },
      {
        key: "event-approval",
        label: "Pengajuan Event",
        path: "/event/approval",
        pattern: /^\/event\/approval(?:\/(detail|add|edit))?$/g,
      },
    ],
  },
];

export default navigations;
