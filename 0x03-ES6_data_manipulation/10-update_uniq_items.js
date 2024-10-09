/*
 * Returns an updated map for all items with initial quantity at 1
 */

export default function updateUniqueItems(map) {
  // ascertain map is a Map() obj
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      try {
        map.set(key, 100);
      } catch (error) {
        throw new Error('Cannot process');
      }
    }
  }
}
