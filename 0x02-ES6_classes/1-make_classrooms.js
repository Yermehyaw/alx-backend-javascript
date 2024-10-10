import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const class1 = ClassRoom(19);
  const class2 = ClassRoom(20);
  const class3 = ClassRoom(34);

  return [class1, class2, class3];
}
