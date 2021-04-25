module.exports = {
  extensions: [".svx", ".md"],
  remarkPlugins: [],
  rehypePlugins: [
    require("rehype-slug"),
    [
      require("rehype-autolink-headings"),
      {
        behavior: "wrap",
      },
    ],
  ],
};
