import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class Databaze {
  private dataDirectory = path.resolve(__dirname, '..', '..', 'data');


  saveDataFile(data: any, filename: string): void {
    const filePath = path.resolve(this.dataDirectory, filename);
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData);
  }

  readDataFile(filename: string): any {
    const filePath = path.resolve(this.dataDirectory, filename);
    if(fs.existsSync(filePath)) {
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(jsonData);
    } else {
      return null;
    }
  }

}
