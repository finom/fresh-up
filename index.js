const fs = require('fs');

module.exports = (modulePath) => {
    const watcher = fs.watch(modulePath, (eventType) => {
        if (eventType === 'change') {
            delete require.cache[modulePath];
            watcher.close();
        }
    });
};
