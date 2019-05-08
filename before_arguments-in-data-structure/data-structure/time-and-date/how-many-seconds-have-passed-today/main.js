function getSecondsToday() {

    let startOfDay = new Date();

    startOfDay.setHours(0, 0, 0, 0);

    let currentMomentOfDay = new Date();

    return alert((currentMomentOfDay - startOfDay) / 1000 );

};

getSecondsToday();

// можно ещё так, по-Канторовски:
// function getSecondsToday() {
//     let now = new Date();
  
//     // создать объект из текущей даты, без часов-минут-секунд
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
//     let diff = now - today; // разница в миллисекундах
//     return Math.floor(diff / 1000); // перевести в секунды
// };
  
// альтернативное решение: получить часы/минуты/секунды и преобразовать их все в секунды
//function getSecondsToday() {
//  let d = new Date();
//  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
//};