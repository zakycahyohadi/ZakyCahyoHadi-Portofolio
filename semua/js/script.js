const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portofolioLists = document.querySelectorAll('.portofolio-list');
const portofolioBoxs = document.querySelectorAll('.portofolio-box');

navs.forEach((nav, idx) => {
  nav.addEventListener('click', () => {
    // Menghapus kelas 'active' dari list yang sedang aktif (jika ada)
    const activeNav = document.querySelector('.nav-list li.active');
    if (activeNav) activeNav.classList.remove('active');

    nav.classList.add('active');
    cube.style.transform = `rotateY(${idx * -90}deg)`;

    const activeSection = document.querySelector('.section.active');
    if (activeSection) activeSection.classList.remove('active');
    
    sections[idx].classList.add('active');

    const array = Array.from(sections);
    const arrSecs = array.slice(1, -1); // Menghapus elemen pertama dan terakhir dari array
    arrSecs.forEach((sec) => {
      if (sec.classList.contains('active')) {
        sections[4].classList.add('action-contact');
      }
    });
    if (sections[0].classList.contains('active')) {
      sections[4].classList.remove('action-contact');
    }
  });
});

resumeLists.forEach((list, index) => {
  list.addEventListener('click', () => {
    const activeResumeList = document.querySelector('.resume-list.active');
    if (activeResumeList) activeResumeList.classList.remove('active');
    
    list.classList.add('active');

    const activeResumeBox = document.querySelector('.resume-box.active');
    if (activeResumeBox) activeResumeBox.classList.remove('active');
    
    resumeBoxs[index].classList.add('active');
  });
});

portofolioLists.forEach((list, index) => {
  list.addEventListener('click', () => {
    const activePortofolioList = document.querySelector('.portofolio-list.active');
    if (activePortofolioList) activePortofolioList.classList.remove('active');

    list.classList.add('active');

    const activePortofolioBox = document.querySelector('.portofolio-box.active');
    if (activePortofolioBox) activePortofolioBox.classList.remove('active');
    
    portofolioBoxs[index].classList.add('active');
  });
});

// Menghapus 'active' dari section 4 setelah 1,5 detik
setTimeout(() => {
  if (sections[4].classList.contains('active')) {
    sections[4].classList.remove('active');
  }
}, 1500);
