module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthrough
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}