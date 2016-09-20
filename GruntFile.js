module.exports = function (grunt) {
    // get the gtx instance
    var gtx = require('gruntfile-gtx').wrap(grunt);
    // alternately load automatically (from ./tasks and ./node_modules)
    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');
    gtx.config(gruntConfig);

    // We need our bower components in order to develop
    gtx.alias('build:dev', ['recess:app', 'copy:dev', 'build:html2js']);
    gtx.alias('build:dist', ['clean:dist', 'copy:dist', 'clean:dists', 'recess:min', 'concat:dist', 'uglify:dist']);

    gtx.alias('release', ['bower-install-simple', 'build:dev', 'bump-commit']);
    gtx.alias('release-patch', ['bump-only:patch', 'release']);
    gtx.alias('release-minor', ['bump-only:minor', 'release']);
    gtx.alias('release-major', ['bump-only:major', 'release']);
    gtx.alias('prerelease', ['bump-only:prerelease', 'release']);
    gtx.alias('build:html2js', ['html2js:common', 'html2js:customer']);//html2js

    //gtx.debug = true;
    gtx.finalise();
}