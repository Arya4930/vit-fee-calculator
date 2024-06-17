document.addEventListener('DOMContentLoaded', function () {
    const BranchForm = document.getElementById('BranchForm');
    BranchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const Branch = document.getElementById('branch').value;

        if (Branch == 'vellore') {
            window.location.href = "./branches/vellore.html"
        } else if (Branch == 'chennai') {
            window.location.href = "./branches/chennai.html"
        } else if (Branch == 'bhopal') {
            window.location.href = "./branches/bhopal.html"
        } else if (Branch == 'AP') {
            window.location.href = "./branches/AP.html"
        }
    });
});
