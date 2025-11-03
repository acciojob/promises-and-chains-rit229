//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    if (!name || isNaN(age)) {
        alert("Please enter valid details.");
        return;
    }

    const agePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(name);
            } else {
                reject(name);
            }
        }, 4000); // 4 seconds delay
    });

    agePromise
        .then((name) => {
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch((name) => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
});