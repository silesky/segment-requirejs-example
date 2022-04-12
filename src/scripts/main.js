const WRITE_KEY =  "9lSrez3BlfLAJ7NOChrqWtILiATiycoc"
define(function (require) {
  // Load any app-specific modules
  // with a relative require call,
  // like:

  // Load library/vendor modules using
  // full IDs, like:
  const load = require("./lib/analytics");
  load(WRITE_KEY);

  const MyApp = require("app");
  window.app = new MyApp();
});
