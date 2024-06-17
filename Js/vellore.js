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
    "1ac": 116100,
    "1nac": 68600,
    "2ac": 83800,
    "2nac": 51500,
    "3ac": 77300,
    "3nac": 44800,
    "4ac": 65000,
    "4nac": 38500,
    "6ac": 56900,
    "6nac": 33700,
    "dlx2ac": 114100,
    "dlx3ac": 100500,
    "dlx4ac": 86000,
    "dlx6ac": 75600,
    "dlx8ac": 66300
}

const d = {
    "na": 0,
    "a": 70000,
    "b": 78700,
    "c": 89500
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