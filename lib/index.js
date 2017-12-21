const docxReader = require("./docx/docx-reader");
const unzip = require("./unzip");

function convert(input) {
    return unzip.openZip(input)
        .then(function(docxFile) {
            return docxReader.read(docxFile, input);
        });
}

exports.convert = convert;
