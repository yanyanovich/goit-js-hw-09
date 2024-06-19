const STORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};
entryFormInput();
refs.form.addEventListener('input', onInput);
refs.form.addEventListener('submit', onFormSubmit);

function onInput() {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit() {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function entryFormInput() {
  const savedlocalStorage = localStorage.getItem(STORAGE_KEY);
  if (savedlocalStorage) {
    const parsedData = JSON.parse(savedlocalStorage);
    formData.email = parsedData.email;
    formData.message = parsedData.message;

    refs.form.email.value = parsedData.email;
    refs.form.message.value = parsedData.message;
  }
}
