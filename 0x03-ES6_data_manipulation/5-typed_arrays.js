export default function createInt8TypedArray(length, position, value) {
  const newBuffer = new ArrayBuffer(length);

  const int8View = new Int8Array(newBuffer);  // create a view obj to read and write to the array buffer

  if (position > length - 1) {
    throw new Error('Position outside range');
  } else {
    int8View[position] = value;
  }

  return {
    byteLength: int8View.length,
    byteOffset: int8View.byteOffset,
    buffer: newBuffer,
  }
}
