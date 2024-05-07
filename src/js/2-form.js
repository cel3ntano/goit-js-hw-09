const formData = {
  email: '',
  message: '',
};
const localStorageKey = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const email = feedbackForm.elements.email;
const message = feedbackForm.elements.message;
try {
  const savedFormData = JSON.parse(localStorage.getItem(localStorageKey));
  email.value = savedFormData.email || '';
  message.value = savedFormData.message || '';
} catch (error) {}
function onInput(event) {
  formData.email = event.currentTarget.elements.email.value.trim();
  formData.message = event.currentTarget.elements.message.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function onSubmit(event) {
  event.preventDefault();
  if (email.value.trim() !== '' && message.value.trim() !== '') {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
  } else {
    alert('Fill please all fields');
  }
}
feedbackForm.addEventListener('input', onInput);
feedbackForm.addEventListener('submit', onSubmit);
