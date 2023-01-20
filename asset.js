odoo.define('@web/file_a', function (require) {
'use strict';
let __exports = {};

const { SIZES } = require("@web/core/ui/ui_service");
const { Many2XAutocomplete } = require("@web/views/fields/relational_utils");
const { Many2OneField } = require("@web/views/fields/many2one/many2one_field");
const { patch } = require("@web/core/utils/patch");

/*
Autocomplete only use the first 16 characters entered by user
so searching on QR code for medecine will trun
*/
patch(Many2XAutocomplete.prototype, "PAF-taihangphap-many2xautocomplete", {
    async loadOptionsSource(request) {
        return this._super(request.slice(0,16));
    },
});

/*
Many2One barcode search to remove \u001d leading character and truncate after 16
*/
patch(Many2OneField.prototype, "PAF-taihangphap-many2one", {
    async onBarcodeScanned(barcode) {
        barcode = barcode.replace("\u001d","").slice(0,16);
        return this._super(barcode);
    }
});

/*
Force the chatter to be displayed under the form for typical HD resolutions.
We use an out of bounds integer related to XXL size (defined in web/static/src/core/ui/ui_service.js) so that an XXL size is never detected.
Modifying MEDIAS_BREAKPOINTS doesn't trick some function using it (ex getMediaQueryLists).
Trying to remove o-aside class to chatter is not simple because it also need to change the flexbox defined around the whole form.
*/
SIZES.XXL = 10;
 
});
