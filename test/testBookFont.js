var Workbook = require('../lib/doc/workbook');

var filename = process.argv[2];

var workbook = new Workbook();
workbook.xlsx.readFile(filename)
  .then(function() {
    workbook.eachSheet(function(worksheet) {
      console.log('Sheet ' + worksheet.id + ' - ' + worksheet.name + ', Dims=' + JSON.stringify(worksheet.dimensions));
      worksheet.eachRow(function(row) {
        row.eachCell(function(cell) {
          if (cell.font.strike) {
            console.log('Strikethrough: ' + cell.value);
          }
        });
      });
    });
  })
  .catch(function(error) {
    console.log(error.message);
  });
