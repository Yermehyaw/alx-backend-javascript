/// <reference path="./crud.d.ts">

import { RowID, RowElement } from './interface.ts';
import * as CRUD from './crud.js';

row: RowElement {
  firstName: Guillaume,
  lastName: Salva,
}

const newRowID: RowID = CRUD.insertRow(7) // 7 is just a placeholder for terinsl exec

const newRowID: RowID = CRUD.updateRow(700, 7); // update row 7

const newRowID: RowID = CRUD.deleteRow(7)
