export function removeUndefinedProperties(obj: Record<any, any>) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      removeUndefinedProperties(value);
      if (!Object.keys(value).length) {
        // Delete the object if it has no more properties
        delete obj[key];
      }
    } else if (typeof value === 'undefined') {
      delete obj[key];
    }
  }

  return obj;
}
