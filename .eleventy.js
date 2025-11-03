module.exports = function (eleventyConfig) {

  eleventyConfig.addLiquidShortcode("picture", function (src, alt) {
    return `<figure class="photo">
              <img src="/${src}" alt="${alt}">
              <figcaption>${alt}</figcaption>
            </figure>`;
  });

  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
