// file login finished
function login(navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const buttonReturn = document.createElement('button');
    const form = document.createElement('form');
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    const buttonLogin = document.createElement('button');
  
    inputEmail.placeholder = 'Write email';
    inputPass.placeholder = 'pass';
  
    title.textContent = 'Login';
    buttonLogin.textContent = 'go';
  
    buttonReturn.textContent = 'Return to home';
    buttonReturn.addEventListener('click', () => {
      navigateTo('/');
    });
  
    form.append(inputEmail, inputPass, buttonLogin);
    section.append(title, form, buttonReturn);
  
    return section;
  }
  
  export default login;