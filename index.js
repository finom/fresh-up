const fs = require('fs');

module.exports = (moduleName) => {
    // run it first to get errors if they appear
    const moduleValue = require(moduleName);
    const modulePath = require.resolve(moduleName);
    const watcher = fs.watch(modulePath, (eventType) => {
        if (eventType === 'change') {
            delete require.cache[modulePath];
            watcher.close();
        }
    });

    return moduleValue;
};
