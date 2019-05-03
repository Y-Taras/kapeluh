const googleSheetLink =
  "https://spreadsheets.google.com/feeds/cells/1fpm1AjYJInjZJTjffAqJVmnI3Ju_AvNc8FTj-AREehg/1/public/full?alt=json";
const imgRegexp = /\.(gif|jpg|jpeg|tiff|png)$/i;

/*function reformArray(arr) {
  const newArray = [];

  arr
    .filter((item, index) => {
      return !imgRegexp.test(arr[index + 1])
    })
    .forEach((item, index) => {
        imgRegexp.test(item) ?
          newArray.push([item]) :
          newArray[newArray.length - 1].push(item)
      }
    );
  return newArray;
}*/

function reformArray(arr) {
  const newArray = [];
  let i;

  arr
    .filter((item, index) => {
      return !imgRegexp.test(arr[index + 1])
    })
    .forEach((item, index) => {
        if (imgRegexp.test(item)) {
          newArray.push({imgName: item});
          i = index;
        } else if (i === index - 1) {
          newArray[newArray.length - 1].description = item;
          newArray[newArray.length - 1].variants = [];
        } else if ( index%2 === 0 ) {
          newArray[newArray.length - 1].variants.push({
            dimension: item,
            price: arr[index + 1]
          })
        }
        //newArray[_index].push(item)
      }
    );
  return newArray;
}

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
          let indexesHash = [];
          const _entry = data.feed.entry.map((item, index) => {
            if (item.content["$t"] === "#") {
              indexesHash.push(index);
            }
            return item.content["$t"];
          });
          const titlesShift = 5;
          let obj = {
            parapety: _entry.slice(titlesShift, indexesHash[1]),
            kapeluhy: _entry.slice(indexesHash[1] + titlesShift, indexesHash[2]),
            inshe: _entry.slice(indexesHash[2] + titlesShift)
          };
          console.log(reformArray(obj.parapety));
          let priceArr = _entry.findIndex(item => {
            item;
          });
          console.log(indexesHash);
          console.log(obj);

          console.log("Список: ", {_entry});
          console.log( "Таблиця: ", lastCell.col, " X ", lastCell.row);
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

        </div><ul>+
                              ${makeTemplate()}
                            </ul>`;*/

      // add the template to the page
      // document.querySelector('.price-table').innerHTML = template;
    }
  },
  false
);
