const fs = require('fs');
const watchers = {};
const watchHandler = (eventType, modulePath) => {
    if (eventType === 'change') {
        delete require.cache[modulePath];
        delete watchers[modulePath];
        watchers[modulePath].close();
    }
};

module.exports = (modulePath) => {
    if(!watchers[modulePath]) {
        watchers[modulePath] = fs.watch(modulePath, watchHandler);
    }
};
