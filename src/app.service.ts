import { Injectable } from '@nestjs/common';
import { Databaze } from './databaze/databaze';

@Injectable()
export class AppService {
  private fileName = 'test_1'
  constructor(private db: Databaze) {}

  getHello(): string {
  const data = [
    {id: 0, name: 'test write file'},
    {id: 1, name: 'test 2 write file'}
  ]

  this.db.saveDataFile(data, this.fileName)
    return 'Hello data is saved';
  }


  readData(): any {
    return this.db.readDataFile(this.fileName);
  }

}
