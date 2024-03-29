//Google Map API
function initMap() {
    var myCenter = new google.maps.LatLng(21.028774,105.781745);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 15};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);

    // Zoom to 9 when clicking on marker
    google.maps.event.addListener(marker,'click',function() {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
    });
}

// noUI slider
var priceslid = document.getElementById("price-filter");

noUiSlider.create(priceslid, {
    start: [0, 20000000],
    connect: [false, true, false],
    format: wNumb({
        decimals: 0,
        thousand: ' ',
    }),
    range: {
        'min': [     30000,10000 ],
        '50%': [  1000000,100000 ],
        'max': [ 20000000 ]
    },
    pips: {
        mode: 'range',
        density: 3,
        format: wNumb({
            decimals: 0,
            thousand: ' ',
        })
    }
});

var snappriceValues = [
    document.getElementById("price-lower"),
    document.getElementById("price-upper")
];

priceslid.noUiSlider.on('update', function (values, handle) {
    snappriceValues[handle].value = values[handle];
});

function setPriceHandle(i, value) {
    var  r = [null, null];
    r[i] = value;
    priceslid.noUiSlider.set(r);
}

snappriceValues.forEach(function (input, handle) {
    input.addEventListener('change', function () {
        setPriceHandle(handle, this.value);
    });
});

var lengthslid = document.getElementById("length-filter");

noUiSlider.create(lengthslid, {
    start: [0, 50],
    connect: [false, true, false],
    format: wNumb({
        decimals: 0,
        thousand: ' ',
    }),
    range: {
        'min': [5],
        '25%': [12],
        'max': [50]
    },
    pips: {
        mode: 'range',
        density: 3,
        format: wNumb({
            decimals: 0,
            thousand: ' ',
        })
    }
});

var snaplengthValues = [
    document.getElementById("length-lower"),
    document.getElementById("length-upper")
];

lengthslid.noUiSlider.on('update', function (values, handle) {
    snaplengthValues[handle].value = values[handle];
});

function setLengthHandle(i, value) {
    var  r = [null, null];
    r[i] = value;
    lengthslid.noUiSlider.set(r);
}

snaplengthValues.forEach(function (input, handle) {
    input.addEventListener('change', function () {
        setLengthHandle(handle, this.value);
    });


});
