var _a;
function getFormData() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var educationInput = document.getElementById('education');
    var experienceInput = document.getElementById('experience');
    return {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        education: educationInput.value,
        experience: experienceInput.value
    };
}
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function generateResume(data) {
    return "\n      <h2>".concat(data.name, "'s Resume</h2>\n      <p><strong>Email:</strong> ").concat(data.email, "</p>\n      <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n      <h3>Education</h3>\n      <p>").concat(data.education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(data.experience, "</p>\n  ");
}
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var resumeData = getFormData();
    if (!validateEmail(resumeData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = generateResume(resumeData);
    }
});
