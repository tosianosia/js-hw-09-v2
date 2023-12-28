import { Notify } from 'notiflix';

const form = document.querySelector('.form');
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', getInputValue);

function onFormSubmit(evt) {
  evt.preventDefault();

  // const formElements = evt.currentTarget.elements;
  // const delay = Number(formElements.delay.value);
  // const step = Number(formElements.step.value);
  // const amount = Number(formElements.amount.value);

  const { delay, step, amount } = formData;

  for (let i = 0; i < amount; i += 1) {
    const userDelay = delay + step * i;

    createPromise(i + 1, userDelay)
      .then(onSuccess)
      .catch(onError);
  }

  evt.currentTarget.reset();
}

function getInputValue(evt) {
  formData[evt.target.name] = evt.target.valueAsNumber;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSuccess({ position, delay }) {
  Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}
