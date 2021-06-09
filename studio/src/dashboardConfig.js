export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c01662de105230ca9657e6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gv6uo4q7",
                  apiId: "6a113b24-e699-411a-aa61-c174f7972e5d",
                },
                {
                  buildHookId: "60c016616a6be1169007815f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ak1umtra",
                  apiId: "b0b8edfb-94bd-45a1-8e39-cd0a9a741ca6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/iannaiian/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ak1umtra.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
