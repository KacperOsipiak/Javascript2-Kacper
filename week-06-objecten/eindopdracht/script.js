const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];
 
let filter = 'all';
 
const showUsers = (users) => {
  const container = document.querySelector('#users');
  container.innerHTML = '';
 
  users.forEach((user) => {
    const { name, email, role, active } = user;
 
    const article = document.createElement('article');
    article.innerHTML = `
      <h3>${name}</h3>
      <p>${email}</p>
      <p>Rol: ${role}</p>
      <p>Status: ${active ? 'Actief' : 'Inactief'}</p>
    `;
    container.appendChild(article);
  });
};
 
const filterUsers = () => {
  const gefilterd = filter === 'admin'
    ? users.filter(({ role }) => role === 'admin')
    : users;
 
  showUsers(gefilterd);
};
 
document.querySelector('#filter-admin').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});
 
document.querySelector('#filter-all').addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});
 
document.querySelector('#user-form').addEventListener('submit', (event) => {
  event.preventDefault();
 
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const role = document.querySelector('#role').value;
 
  const defaultUser = { name: '', email: '', role: 'user', active: true };
  const newUser = { ...defaultUser, name, email, role };
 
  users.push(newUser);
  filterUsers();
 
  event.target.reset();
});
 
filterUsers();
 