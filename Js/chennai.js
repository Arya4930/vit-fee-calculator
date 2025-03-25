const a = {
    "a": 173000,
    "b": 232000,
    "c": 340000,
    "d": 365000,
    "e": 395000,
}

const b = {
    "a": 195000,
    "b": 304000,
    "c": 402000,
    "d": 445000,
    "e": 490000,
}

const c = {
    "na": 0,
    "2ac": 132900,
    "2nac": 80400,
    "3ac": 123500,
    "3nac": 69900,
    "4ac": 115300,
    "4nac": 65200,
    "6ac": 101200,
    "6nac": 60700
}

const d = {
    "na": 0,
    "a": 84200,
    "b": 94200,
    "c": 105000,
    "d": 108600
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feesform');
    var totalfees = document.getElementById('totalfees');

    form.addEventListener('submit', function (event) {
        var total = 0;
        event.preventDefault();

        const SelectedGroup = document.getElementById('group').value;
        const SelectedCat = document.getElementById('catagory').value;
        const SelectedRoom = document.getElementById('room').value;
        const Miscellaneous = document.getElementById('miscellaneous').value;

        var hostelDeposit = 30000
        if (SelectedRoom == "na") { hostelDeposit = 0 }
        const SelectedMess = document.getElementById('messcatagory').value;
        total += (SelectedGroup == "a") ? a[SelectedCat] : b[SelectedCat];
        total += c[SelectedRoom] + d[SelectedMess] + Miscellaneous * 12;
        totalfees.innerText = `1st Year: ₹${(total + hostelDeposit + 3000).toLocaleString()} ( ${(SelectedGroup == "a") ? a[SelectedCat] : b[SelectedCat]} + ${c[SelectedRoom] + d[SelectedMess]} + ${Miscellaneous * 12} + 3000 ( Caution Deposit ) + ${hostelDeposit} ( Hostel Deposit ))
        
        2nd/3rd/4th Year: ₹${total.toLocaleString()} ( ${(SelectedGroup == "a") ? a[SelectedCat] : b[SelectedCat]} + ${c[SelectedRoom] + d[SelectedMess]} + ${Miscellaneous * 12})
        
        Total of 4 Years: ₹${(total * 4 + 33000).toLocaleString()}`;
    });
});
