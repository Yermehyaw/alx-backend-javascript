/**
 * Ambient file
 */
import RowID from './interface.ts';
import RowElement from './interface.ts';

declare function insertRow(row: number): RowID;

declare function deleteRow(rowId: RowID): void;

declare function updateRow(rowId: RowID, row: number): RowID;