const generateUniqueID = require('./../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueID();

    expect(id).toHaveLength(8);
  });

  it('should generate different ID', () => {
    const idOne = generateUniqueID();
    const idTwo = generateUniqueID();

    expect(idOne).not.toEqual(idTwo);
  });
});
