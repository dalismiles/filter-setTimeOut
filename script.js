// Esercizi :

// forEach
// Eseguire console.log() di ogni elemento di array

// Lanciare un console.log() di ogni elemento, dopo un setTimeout di elemento * index

// risultato: dopo 0s: console.log(1)
//            dopo 1s: console.log(2)
//            dopo 2s: console.log(3)

// filter
// Tenere dentro l'array solo i numeri pari
// risultato: [2,4,6,8]
// Tenere solo i numeri in comune con questo array: [10, 1, 2, 5, 6], usare utility come Array.includes oppure Array.indexOf.
// risultato: [1,2,5,6]

(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const secondArray = [10, 1, 2, 5, 6];

  actionFunction = (element, index, array) => console.log(element);
  showEvenNumbers = (element, index, array) => element % 2 === 0;

  const list = array.forEach(actionFunction);
  const evenNumbers = array.filter(showEvenNumbers);
  const intersection = array.filter((element) => secondArray.includes(element));

  console.log(list);
  console.log(evenNumbers);
  console.log(intersection);

  let timer = 0;

  const delayedElement = (element, index) => {
    setTimeout(() => {
      console.log(`Dopo ${index}s: ${element}`);
    }, timer);
    timer = timer + 1000 * (index + 1);
  };

  array.forEach(delayedElement);
})();
