// Задание 1:

console.log(kolobok("дедушка"))
console.log(kolobok("заяц"))
console.log(kolobok("лиса"))

function kolobok(personage) {
    switch(personage) {
      case "дедушка":
        return 'Я от дедушки ушёл'
      case "заяц":
        return 'Я от зайца ушёл'
      case "лиса":
        return 'Меня съели'
      default:
        return 'Сказка — ложь, да в ней намёк :D'
    } 
  }

// Задание 2:

console.log(newYear("Дед Мороз"))
console.log(newYear("Снегурочка"))

function newYear(character) {
  if(character ==="Дед Мороз" || character === "Снегурочка") {
      return `${character}! ${character}! ${character}!`
  }
  }