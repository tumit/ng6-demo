import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  export(title: string, header: string[], data: any[]) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Car Data');

    // title
    const titleRow = worksheet.addRow([title]);
    titleRow.font = { size: 16 };

    // header
    const headerRow = worksheet.addRow(header);
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' }
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });

    // data
    data.forEach(d => worksheet.addRow(d));

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer as Uint8Array], { type: EXCEL_TYPE });
      saveAs(blob, 'CarData.xlsx');
    });
  }
}
