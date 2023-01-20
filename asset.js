odoo.define('@web/file_a', function (require) {
'use strict';
let __exports = {};

const { SIZES } = require("@web/core/ui/ui_service");

SIZES.XXL = 10;
alert("Hello world Damien!");

});

/*
Force the chatter to be displayed under the form for typical HD resolutions.
We use an out of bounds integer related to XXL size (defined in web/static/src/core/ui/ui_service.js) so that an XXL size is never detected.
Modifying MEDIAS_BREAKPOINTS doesn't trick some function using it (ex getMediaQueryLists).
Trying to remove o-aside class to chatter is not simple because it also need to change the flexbox defined around the whole form.
 */
