let thour = 20;
let fhour = 40;
let vtype = document.getElementById("vtype");
let duration = document.getElementById("duration");
let out = document.getElementById("out");
let price = 0;
out.innerHTML = "₹" + price;

vtype.addEventListener("change", clac);
duration.addEventListener("change", clac);

function clac() {
    if (vtype.value === "car") {
        if (duration.value === "1") {
            price = fhour;
        } else if (duration.value === "1-3") {
            price = ((fhour * 3) - (fhour * 3)/7);
        } else if (duration.value === "3-5") {
            price = ((fhour * 5) - (fhour * 5)/6);
        } else if (duration.value === "5-10") {
            price = ((fhour * 10) - (fhour * 10)/4);
        } else if (duration.value === "10-20") {
            price = ((fhour * 20) - (fhour * 20)/4);
        } else if (duration.value === "1d") {
            price = ((fhour * 24) - (fhour * 24)/4);
        }
        price = Math.ceil(price);
    } else if (vtype.value === "bike") {
        if (duration.value === "1") {
            price = thour;
        } else if (duration.value === "1-3") {
            price = ((thour * 3) - (thour * 3)/7);
        } else if (duration.value === "3-5") {
            price = ((thour * 5) - (thour * 5)/6);
        } else if (duration.value === "5-10") {
            price = ((thour * 10) - (thour * 10)/4);
        } else if (duration.value === "10-20") {
            price = ((thour * 20) - (thour * 20)/4);
        } else if (duration.value === "1d") {
            price = ((thour * 24) - (thour * 24)/4);
        }
        price = Math.ceil(price);
    }
    out.innerHTML = "₹" + price;
}