fetch('https://spreadsheets.google.com/feeds/cells/1fpm1AjYJInjZJTjffAqJVmnI3Ju_AvNc8FTj-AREehg/1/public/full?alt=json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const {entry} = data.feed;
        console.log({entry});
    });