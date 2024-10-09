export default function createInt8TypedArray(length, position, value) {
  const newBuffer = new ArrayBuffer(length);

  const DataView = new Int8Array(newBuffer); // create a view obj to read/write to the array buffer

  if (position > length - 1) {
    throw new Error('Position outside range');
  } else {
    DataView[position] = value;
  }

  const bufferProperties = {
    byteLength: DataView.length,
    byteOffset: DataView.byteOffset,
    buffer: newBuffer,
  };

  return bufferProperties;
}
