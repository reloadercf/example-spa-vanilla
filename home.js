// file main.js finished
function home(navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const button = document.createElement('button');
  
    button.textContent = 'login';
    button.addEventListener('click', () => {
      navigateTo('/login');
    });
  
    title.textContent = 'Welcome to my project';
  
    section.append(title, button);
    return section;
  }
  
  export default home;
  