function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;  // Fixed spelling and corrected element reference
    const birthDateObj = new Date(birthdate);  // Store the Date object
    const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();  // Corrected the operator
    const monthDifference = today.getMonth() - birthDateObj.getMonth();  // Corrected the operator

    // Adjust age if birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').innerText = `Your age is ${age} years.`;  // Fixed final output
}