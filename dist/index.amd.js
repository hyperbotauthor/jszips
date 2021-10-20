define(['exports'], (function (exports) { 'use strict';

    var JSZip = require("jszip");
    function zip(content) {
        var zip = new JSZip();
        zip.file("storage", content);
        var storageCompress = zip.generateAsync({
            type: "base64",
            compression: "DEFLATE",
            compressionOptions: {
                level: 9,
            },
        });
        return storageCompress;
    }
    function unzip(content) {
        var zip = new JSZip();
        var unzipPromise = new Promise(function (resolve, reject) {
            zip.loadAsync(content, { base64: true }).then(function (zip) {
                var file = zip.file("storage");
                resolve(file.async("string"));
            });
        });
        return unzipPromise;
    }

    exports.unzip = unzip;
    exports.zip = zip;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
