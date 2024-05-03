const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    // reset: true,
})

sr.reveal(`.main-title, .content, .footerr, .main-about`)
sr.reveal(`.skill-card, .projects-texts`, {origin: 'left'})
sr.reveal(`.project-image`, {origin: 'right'})

