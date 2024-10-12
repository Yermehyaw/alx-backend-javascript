/// <reference types='./crud.d.ts' />

import { RowID, RowElement } from './interface.ts';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = row; // create row replica with age property
updatedRow.age = 23;

const updatedRowID = CRUD.updateRow(newRowID, updatedRow); // update row at newRowID with the properties of updateRow, returns newRowID

CRUD.deleteRow(updatedRowID); // deletes both updatedRow and row