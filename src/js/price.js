document.addEventListener('DOMContentLoaded', function(){
  if (window.location.pathname.includes("price")) {
    fetch(
      "https://spreadsheets.google.com/feeds/cells/1fpm1AjYJInjZJTjffAqJVmnI3Ju_AvNc8FTj-AREehg/1/public/full?alt=json"
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let array = data.feed.entry;
        let lastCell = array[array.length - 1]['gs$cell'];
        const _entry = data.feed.entry.map(item => item.content['$t']);
        console.log('Список: ', { _entry });
        console.log('Розмір таблиці: рядків: ', lastCell.row,  'стовпців: ', lastCell.col );
      });
  }
}, false);
