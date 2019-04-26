
const googleSheetLink =
  'https://spreadsheets.google.com/feeds/cells/1fpm1AjYJInjZJTjffAqJVmnI3Ju_AvNc8FTj-AREehg/1/public/full?alt=json';

document.addEventListener(
  "DOMContentLoaded",
  function () {
    if (window.location.pathname.includes("price")) {
      fetch(googleSheetLink)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let array = data.feed.entry;
          let lastCell = array[array.length - 1]["gs$cell"];
          const _entry = data.feed.entry.map(item => item.content["$t"]);
          let obj = {
            parapety: [],
            kapeluhy: [],
            inshe: []
          };
          let priceArr = _entry.map( item => {

          });
          console.log("Список: ", {_entry});
          console.log(
            "Розмір таблиці: рядків: ",
            lastCell.row,
            "стовпців: ",
            lastCell.col
          );
        });

/*
model
        {
        parapet: [
          { imgName: '',
            description: '',
            variants: [
              {
                dimension: '',
                price: ''
              },
              {
                dimension: '',
                price: ''
              },
              {
                dimension: '',
                price: ''
              },
              {
                dimension: '',
                price: ''
              },
              {
                dimension: '',
                price: ''
              }
            ]
          }
        ]
      }*/

/*      // a function to build a list
      let makeTemplate = function (data) {
        let newList = "";
        data.forEach(function (element) {
          newList += `<li>${element}</li>`;
        });
        return newList;
      };

      // build a container template
      let template = `  <div class="row">

  </div><ul>
                        ${makeTemplate()}
                      </ul>`;*/

      // add the template to the page
      // document.querySelector('.price-table').innerHTML = template;
    }
  },
  false
);
