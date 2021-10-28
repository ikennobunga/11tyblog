const { DateTime } = require('luxon')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter('postDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
    });

    eleventyConfig.addShortcode('year', () => {
        `${new}`
    })
    
    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    };
}