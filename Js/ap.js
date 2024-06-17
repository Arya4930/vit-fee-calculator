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
    "2ac": 109800,
    "2nac": 69800,
    "3ac": 103500,
    "4ac": 97300,
    "4nac": 57300,
    "5ac": 90600,
    "5nac": 50600,
    "6ac": 86600,
    "6nac": 46600,
    "8ac": 73100,
    "8nac": 33100,
    "apt2ac": 123600,
    "apt4ac": 112200,
    "apt4nac": 72200,
    "apt5ac": 104500,
    "apt5nac": 64500,
    "10ac": 68800,
    "10nac": 28880,
    "12ac": 64500,
    "12nac": 24500,
    "15ac": 58600,
    "15nac": 18600
}

const d = {
    "na": 0,
    "a": 80000,
    "b": 89100,
    "c": 98900
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