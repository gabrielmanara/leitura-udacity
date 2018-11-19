export const converDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString()
};

export const toObject = (object) =>
  object.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {})