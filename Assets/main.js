function age() {
    let year_born = Date.parse(document.getElementById("input").value);
    const currentDate = new Date();
    const a = (Date.parse(currentDate)) - year_born;
    let ageInDays = Math.floor((a) / (1000 * 60 * 60 * 24));
    document.getElementById("output").innerHTML =
        "Hello, " + "you are " + ageInDays + " days old!";
}