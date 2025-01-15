document.addEventListener('scroll', function () {
    const windowHeight = window.innerHeight;
  
    const introInner = document.querySelector('.intro-inner');
    if (introInner) {
      const rectIntro = introInner.getBoundingClientRect();
      if (rectIntro.top <= windowHeight - 150) {
        introInner.classList.add('visible');
      }
    }
  
    const overviewInner = document.querySelector('.overview-inner');
    if (overviewInner) {
      const rectOverview = overviewInner.getBoundingClientRect();
      if (rectOverview.top <= windowHeight - 150) {
        overviewInner.classList.add('visible');
      }
    }
  
    const systemsInner = document.querySelector('.systems-inner');
    if (systemsInner) {
      const rectSystems = systemsInner.getBoundingClientRect();
      if (rectSystems.top <= windowHeight - 150) {
        systemsInner.classList.add('visible');
      }
    }
  
    const castsInner = document.querySelector('.casts-inner');
    if (castsInner) {
      const rectCasts = castsInner.getBoundingClientRect();
      if (rectCasts.top <= windowHeight - 150) {
        castsInner.classList.add('visible');
      }
    }
  
    const safetyInner = document.querySelector('.safety-inner');
    if (safetyInner) {
      const rectSafety = safetyInner.getBoundingClientRect();
      if (rectSafety.top <= windowHeight - 150) {
        safetyInner.classList.add('visible');
      }
    }
  });
  