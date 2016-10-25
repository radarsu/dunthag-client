"use strict";
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
let PROVIDERS = [];
let _decorateModuleRef = function identity(value) { return value; };
if ('production' === ENV) {
    platform_browser_1.disableDebugTools();
    core_1.enableProdMode();
    PROVIDERS = [
        ...PROVIDERS,
    ];
}
else {
    _decorateModuleRef = (modRef) => {
        const appRef = modRef.injector.get(core_1.ApplicationRef);
        const cmpRef = appRef.components[0];
        let _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    PROVIDERS = [
        ...PROVIDERS,
    ];
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = [
    ...PROVIDERS
];
//# sourceMappingURL=environment.js.map