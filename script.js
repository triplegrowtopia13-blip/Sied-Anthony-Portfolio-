function $(selector) {
  return document.querySelector(selector);
}

function setText(selector, text) {
  const el = $(selector);
  if (el) el.textContent = text;
}

function nav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });
}

function theme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.body.classList.add('light');
  const btn = $('#themeToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });
  }
}

function loadCommon() {
  setText('[data-name]', portfolioData.name);
  setText('[data-title]', portfolioData.title);
  setText('[data-tagline]', portfolioData.tagline);
  setText('[data-location]', portfolioData.location);
  setText('[data-email]', portfolioData.email);
  setText('[data-phone]', portfolioData.phone);
  document.querySelectorAll('[data-linkedin]').forEach(a => a.href = portfolioData.linkedin);
  document.querySelectorAll('[data-resume-link]').forEach(a => a.href = portfolioData.resumeLink);
}

function renderSkills(target = '#skillsGrid') {
  const grid = $(target);
  if (!grid) return;
  grid.innerHTML = Object.entries(portfolioData.skills).map(([category, items]) => `
    <div class="card">
      <h3>${category}</h3>
      <div class="skill-list">
        ${items.map(item => `<span class="tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects(target = '#projectsGrid', limit = null) {
  const grid = $(target);
  if (!grid) return;
  const projects = limit ? portfolioData.projects.slice(0, limit) : portfolioData.projects;
  grid.innerHTML = projects.map(project => `
    <article class="card project-card">
      <img src="${project.image}" alt="${project.title} project image">
      <p class="kicker">${project.category}</p>
      <h3>${project.title}</h3>
      <p class="muted">${project.description}</p>
      <div class="tags">
        ${project.tools.map(tool => `<span class="tag">${tool}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function renderExperience(target = '#experienceList') {
  const list = $(target);
  if (!list) return;
  list.innerHTML = portfolioData.experience.map(job => `
    <div class="card">
      <p class="kicker">${job.dates}</p>
      <h3>${job.role}</h3>
      <p class="muted"><strong>${job.company}</strong></p>
      <ul>${job.bullets.map(bullet => `<li>${bullet}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function renderEducation() {
  const list = $('#educationList');
  if (!list) return;
  list.innerHTML = portfolioData.education.map(item => `
    <div class="card">
      <h3>${item.school}</h3>
      <p>${item.degree}</p>
      <p class="muted">${item.dates}</p>
      <p class="muted">${item.details}</p>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  nav();
  theme();
  loadCommon();
  renderSkills();
  renderProjects();
  renderProjects('#featuredProjects', 3);
  renderExperience();
  renderEducation();
  setText('#aboutText', portfolioData.about);
});
