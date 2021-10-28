const { DateTime } = require('luxon')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    ele
    
    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    };
}