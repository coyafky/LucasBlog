export const SITE = {
  website: "https://lucas-blog.vercel.app/", // replace this with your deployed domain
  author: "冯科雅 (Coya Feng)",
  profile: "https://github.com/coyafky",
  desc: "记录 AI 实践、技术踩坑和效率方法。",
  title: "Lucas Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/coyafky/LucasBlog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh", // html lang code
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;