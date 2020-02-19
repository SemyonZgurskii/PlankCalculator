const PLANK_LENGTH = 6000;
const currentSizes = [2570, 5000, 3000, 5600, 2400,	3700, 3670, 3550, 520, 590, 190, 840, 3710, 1110, 3810, 2050, 1080, 120, 1700, 190, 6000, 2000, 5900, 2100, 440, 655, 1700, 190, 840, 3710, 1110, 1120, 2570, 2900, 1800, 3810, 1260, 2810, 2860, 310, 590, 870, 1150,	1430, 1710, 4410, 5700, 2210, 4270, 400, 560, 6000, 4425, 1925, 1000, 4225, 2835, 2690, 3060, 2030, 2425, 1880, 3000, 6000, 2600, 2380, 1480, 500, 2980, 2480, 1580, 1400, 1800, 1360, 560, 160, 4195, 1695, 3075, 6000, 3000, 1710, 4425, 2785, 2140, 2450, 2650, 2010, 2320, 2500, 550, 720, 600, 395, 435, 960, 320, 3000, 5870, 6000, 1920, 2050, 400, 4050, 4000, 3950, 3775, 3045, 3050, 2955, 2950, 2810, 1950, 1900, 1800, 1505, 905, 860, 3000, 2400, 2300, 4000, 2960, 400, 550, 590, 635, 595, 555, 3710, 3900, 2950, 1330, 5035, 2720, 3720, 1160, 4120, 1560, 2130, 1740, 2900, 2900, 2900, 2220];
let remains = 0;
let plankCount = 0;
let suitableSizes = currentSizes
  .filter((it) => PLANK_LENGTH / it > 1)
  .sort((a, b) => a - b);
console.log(suitableSizes);

function getIndexForSumm (array, currentSize) {
  let indexForSumm = -1;
  array.forEach((it, index) => {
    if (it <= (PLANK_LENGTH - currentSize)) {
      indexForSumm = index;
    }
  })
  return indexForSumm;
};

while (suitableSizes.length > 0) {
  let currentIndex = suitableSizes.length - 1;
  let currentElement = suitableSizes[currentIndex];
  let indexForSumm = getIndexForSumm(suitableSizes, currentElement);
  console.log(currentElement, suitableSizes[indexForSumm]);
  let sizesSumm = currentElement;
  if (indexForSumm >= 0) {
    while (indexForSumm >= 0) {
      sizesSumm += suitableSizes[indexForSumm];
      suitableSizes.splice(currentIndex, 1);
      suitableSizes.splice(indexForSumm, 1);
      currentIndex = suitableSizes.length - 1;
      currentElement = suitableSizes[currentIndex];
      indexForSumm = getIndexForSumm(suitableSizes, sizesSumm);
      console.log(sizesSumm, indexForSumm);
    }
    remains += PLANK_LENGTH - sizesSumm;
  } else {
    remains += PLANK_LENGTH - currentElement;
    suitableSizes.splice(currentIndex, 1);
  }
  plankCount += 1;
  console.log('|------|');
}
  
console.log(remains, plankCount, suitableSizes, '/--/');

// складывать первый элемент с первым подходящим начиная с конца. 
// либо сравнивать элементы с разницей между текущим элементом и заданной длинной
// Пока индекс больше или равен 0, продолжать цикл с подбором длинны для суммирования

// [2570, 5000, 3000, 5600, 2400,	3700, 3670, 3550, 520, 590, 190, 840, 3710, 1110, 3810, 2050, 1080, 120, 1700, 190, 6000, 2000, 5900, 2100, 440, 655, 1700, 190, 840, 3710, 1110, 1120, 2570, 2900, 1800, 3810, 1260, 2810, 2860, 310, 590, 870, 1150,	1430, 1710, 4410, 5700, 2210, 4270, 400, 560, 6000, 4425, 1925, 1000, 4225, 2835, 2690, 3060, 2030, 2425, 1880, 3000, 6000, 2600, 2380, 1480, 500, 2980, 2480, 1580, 1400, 1800, 1360, 560, 160, 4195, 1695, 3075, 6000, 3000, 1710, 4425, 2785, 2140, 2450, 2650, 2010, 2320, 2500, 550, 720, 600, 395, 435, 960, 320, 3000, 5870, 6000, 1920, 2050, 400, 4050, 4000, 3950, 3775, 3045, 3050, 2955, 2950, 2810, 1950, 1900, 1800, 1505, 905, 860, 3000, 2400, 2300, 4000, 2960, 400, 550, 590, 635, 595, 555, 3710, 3900, 2950, 1330, 5035, 2720, 3720, 1160, 4120, 1560, 2130, 1740, 2900, 2900, 2900, 2220]		