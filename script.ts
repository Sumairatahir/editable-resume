interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
}

function getFormData(): ResumeData | null {
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const phoneInput = document.getElementById('phone') as HTMLInputElement;
  const educationInput = document.getElementById('education') as HTMLTextAreaElement;
  const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;

  if (nameInput && emailInput && phoneInput && educationInput && experienceInput) {
      return {
          name: nameInput.value,
          email: emailInput.value,
          phone: phoneInput.value,
          education: educationInput.value,
          experience: experienceInput.value
      };
  }

  return null;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function generateResume(data: ResumeData): string {
  return `
      <h2>${data.name}'s Resume</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <h3>Education</h3>
      <p>${data.education}</p>
      <h3>Experience</h3>
      <p>${data.experience}</p>
  `;
}

document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const resumeData = getFormData();
  
  if (!resumeData) {
      alert('Please fill out all the fields.');
      return;
  }
  
  if (!validateEmail(resumeData.email)) {
      alert('Please enter a valid email address.');
      return;
  }

  const resumeOutput = document.getElementById('resumeOutput');
  if (resumeOutput) {
      resumeOutput.innerHTML = generateResume(resumeData);
  }
});
