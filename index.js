const fs = require('fs');

const watchers = {};

module.exports = (modulePath) => {
    if (!watchers[modulePath]) {
        watchers[modulePath] = fs.watch(modulePath, (eventType) => {
            if (eventType === 'change') {
                watchers[modulePath].close();
                delete require.cache[modulePath];
                delete watchers[modulePath];
            }
        });
    }
};
