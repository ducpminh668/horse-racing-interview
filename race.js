var Race = function () {

};

Race.prototype.start = function (horses) {
    var arrHorses = [];
    horses.map(function (horse) {
        arrHorses.push($.getJSON(horse.url).then(function (data) {
            return { name : horse.name , image : data.image};
        }));
    });

    console.log(arrHorses);
    return Promise.race(arrHorses).then(function (data) {
        return data;
    });
};

