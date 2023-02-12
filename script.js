let format = "format_12";
const twelveHourText = "12-hr";
const twentyFourHourText = "24-hr";

const displayTime = () => {
    let date =  new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let time = null;

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    if (format == "format_12") {
        let timeCategory = "A.M.";

        if (hh == 0) hh = 12;

        if (hh > 12) {
            hh = hh - 12;
            timeCategory = "P.M.";
        }

        time = hh + ":" + mm + ":" + ss + " " + timeCategory;
    } else {
        time = hh + ":" + mm + ":" + ss;
    }

    document.getElementById("clock-text").innerText = time;
    setTimeout(displayTime, 1000);
}

const toggle_12_24 = () => {
    if (format == "format_12") {
        format = "format_24";
        document.getElementById("hrFormat").innerText = twelveHourText;
    } else {
        format = "format_12";
        document.getElementById("hrFormat").innerText = twentyFourHourText;
    }

    displayTime();
}