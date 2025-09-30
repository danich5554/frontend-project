import './index.css';

// Добавляем шрифты
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Ubuntu:wght@400;500;700&display=swap';
document.head.appendChild(fontLink);

// Создание header
function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  
  header.innerHTML = `
    <div class="container">
      <nav class="nav">
        <div class="nav__logo">
          <a href="#" class="logo">Createx SEO</a>
        </div>
        
        <ul class="nav__list">
          <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Services</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Case Studies</a></li>
          <li class="nav__item"><a href="#" class="nav__link">About Us</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Blog</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Contacts</a></li>
        </ul>
        
        <button class="nav__button button button--primary">Get Started</button>
      </nav>
    </div>
  `;
  
  return header;
}

// Создание hero секции
function createHero() {
  const hero = document.createElement('section');
  hero.className = 'hero';
  
  hero.innerHTML = `
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__title">SEO & Digital Marketing For Your Website</h1>
        <p class="hero__description">
          Provide all kind of seo services and help to improve seo ranking. Globally incubate standards.
        </p>
        <div class="hero__buttons">
          <button class="button button--primary">Start Now</button>
          <button class="button button--secondary">Watch Video</button>
        </div>
      </div>
    </div>
  `;
  
  return hero;
}

// Создание секции услуг
function createServices() {
  const services = document.createElement('section');
  services.className = 'services';
  
  services.innerHTML = `
    <div class="container">
      <h2 class="services__title">Our SEO Services</h2>
      <p class="services__description">We provide the best SEO services to help your business grow online</p>
      
      <div class="services__grid">
        <div class="service-card">
          <div class="service-card__icon">🔍</div>
          <h3 class="service-card__title">Keyword Research</h3>
          <p class="service-card__description">Comprehensive keyword analysis and strategy development</p>
        </div>
        
        <div class="service-card">
          <div class="service-card__icon">📊</div>
          <h3 class="service-card__title">Analytics</h3>
          <p class="service-card__description">Detailed tracking and reporting of your SEO performance</p>
        </div>
        
        <div class="service-card">
          <div class="service-card__icon">🔗</div>
          <h3 class="service-card__title">Link Building</h3>
          <p class="service-card__description">Strategic link acquisition to boost domain authority</p>
        </div>
      </div>
    </div>
  `;
  
  return services;
}

// Функция переключения темы
function createThemeToggle() {
  const button = document.createElement('button');
  button.className = 'theme-toggle';
  button.innerHTML = '🌓';
  button.addEventListener('click', toggleTheme);
  return button;
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
}

// Добавляем элементы на страницу
document.body.appendChild(createHeader());
document.body.appendChild(createHero());
document.body.appendChild(createServices()); // Теперь эта функция существует!
document.body.appendChild(createThemeToggle());