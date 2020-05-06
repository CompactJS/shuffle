const { shuffle } = require('../dist/index');

describe('shuffle array', () => {
  it('keeps original array intact', () => {
    const array = [1, 2, 3, 4];
    const testArray = [...array];
    shuffle(testArray);
    expect(testArray).toEqual(array);
  });
  it('has the same length', () => {
    const testArray = [...Array(20)].map((_, i) => i);
    expect(shuffle(testArray).length).toEqual(testArray.length);
  });
  it('does not duplicate anything', () => {
    const testArray = [...Array(20)].map((_, i) => i);
    const shuffled = new Set(shuffle(testArray));
    expect(shuffled.size).toBe(testArray.length);
  });

  const testItems = 50;
  const testRounds = 100000;
  const testMargin = 0.2;

  const testArray = [...Array(testItems)].map((_, i) => i);
  const numberOfTimesItemsAreFirst = [...testArray].map(() => 0);

  for (let i = 0; i < testRounds; i++) {
    numberOfTimesItemsAreFirst[shuffle(testArray)[0]]++;
  }

  const expectedDrawPercentage = testRounds / testArray.length;
  it.each([Object.values(numberOfTimesItemsAreFirst)])(
    'each item has the same chance to be the first item',
    (item) => {
      expect(item).toBeLessThan(
        expectedDrawPercentage + expectedDrawPercentage * testMargin
      );
      expect(item).toBeGreaterThan(
        expectedDrawPercentage - expectedDrawPercentage * testMargin
      );
    }
  );

  console.log('number of times each item is first in array:');
  console.log(numberOfTimesItemsAreFirst);
  console.log(shuffle(testArray));
});
