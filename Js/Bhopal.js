const a = {
    "a": 176000,
    "b": 235000,
    "c": 343000,
    "d": 368000,
    "e": 398000,
}

const b = {
    "a": 198000,
    "b": 307000,
    "c": 405000,
    "d": 448000,
    "e": 493000,
}

const c = {
    "na": 0,
    "2ac": 109960,
    "2nac": 82840,
    "3ac": 100430,
    "3nac": 70560,
    "4ac": 81000,
    "4nac": 48430,
    "5nac": 42070,
    "6ac": 59050,
    "6nac": 39260,
    "8nac": 29490,
    "p2ac": 118290,
    "p2nac": 90830,
    "p3ac": 104830,
    "p3nac": 76470,
    "p4ac": 87550,
    "p4nac": 53040,
    "pf4ac": 90640,
    "pf4nac": 56130,
}

const d = {
    "na": 0,
    "a": 76700,
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
        let n = (SelectedGroup == "a") ? a[SelectedCat] : b[SelectedCat];
        total += n + c[SelectedRoom] + d[SelectedMess] + Miscellaneous * 12;
        totalfees.innerText = `1st Year: ₹${(total + hostelDeposit + 3000).toLocaleString()} ( ${n} + ${c[SelectedRoom] + d[SelectedMess]} + ${Miscellaneous * 12} + 3000 ( Caution Deposit ) + ${hostelDeposit} ( Hostel Deposit ))
        
        2nd/3rd/4th Year: ₹${total.toLocaleString()} ( ${n} + ${c[SelectedRoom] + d[SelectedMess]} + ${Miscellaneous * 12})
        
        Total of 4 Years: ₹${(total * 4 + 33000).toLocaleString()}`;
    });
});