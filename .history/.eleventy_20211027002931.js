module.exports = function(eleventyConfig) {
    eleventyConfig.addPass
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}