<script>
  import { fadeIn } from '$lib/actions/fadeIn.js';

  const timeline = [
    { date: 'Early Start', title: 'First lines of code', org: 'High School', desc: 'Discovered a passion for computer science that would shape every decision ahead.' },
    { date: '2021', title: 'AS in Computer Science', org: 'College of the Canyons', desc: "Completed associate's degree, building a strong academic foundation in CS fundamentals." },
    { date: '2021–2022', title: 'Pivoted during COVID', org: 'CSUN → App Academy', desc: "Transferred to CSUN but left when remote support fell short. Enrolled in App Academy's intensive full-stack program." },
    { date: '06/2022 – 09/2023', title: 'Jr. Instructional Assistant', org: 'App Academy', desc: 'Graduated and stayed to teach — supporting students through lectures, debugging sessions, and curriculum development.' },
    { date: '05/2023 – 08/2023', title: 'Netflix Pathways Extern', org: 'Netflix', desc: 'Built cloud-ready applications with Spring Boot & Java; implemented CI/CD pipelines with CircleCI.' },
    { date: '2023 – 2024', title: 'Software Engineering Apprentice', org: 'Multiverse × Wilson Language Training', desc: 'Joined through the Multiverse apprenticeship program, embedded inside a real product engineering team.' },
    { date: '12/2024 – Present', title: 'Software Engineer I', org: 'Wilson Language Training', desc: 'Full-time engineer building web applications with .NET, JavaScript, Angular, and Azure DevOps.' },
  ];

  const experience = [
    {
      title: 'Software Engineer I', period: '10/2023 – Present', company: 'Wilson Language Training Corp.',
      desc: 'Building and contributing to web applications used by educators nationwide. Participating in code review, sprint planning, and cross-team collaboration. Supporting and troubleshooting live business applications in an Agile environment.',
      tags: ['.NET', 'JavaScript', 'CSS', 'HTML5', 'Agile', 'Azure DevOps'],
    },
    {
      title: 'Netflix Pathways Extern', period: '05/2023 – 08/2023', company: 'Netflix',
      desc: "Selected for Netflix's competitive externship program. Built cloud-ready web applications using Spring Boot and Java. Queried data with MySQL and Cassandra. Implemented a full CI/CD pipeline using CircleCI.",
      tags: ['Java', 'Spring Boot', 'MySQL', 'Cassandra', 'CircleCI', 'CI/CD'],
    },
    {
      title: 'Jr. Instructional Assistant', period: '06/2022 – 09/2023', company: 'App Academy',
      desc: 'Supported cohorts of aspiring engineers through lectures, lab sessions, and project work. Graded assignments, gave meaningful feedback, and contributed to curriculum development.',
      tags: ['Full Stack', 'Mentorship', 'Curriculum Dev', 'Code Review'],
    },
    {
      title: 'Work Prep Participant', period: '05/2023 – 06/2023', company: 'Girls Who Code',
      desc: 'Selected for the GWC Work Prep Program hosted by Pluralsight with support from the Danaher Foundation — focused on preparing women in tech for the modern professional landscape.',
      tags: ['Professional Dev', 'Pluralsight', 'Leadership'],
    },
  ];

  const skillGroups = [
    { label: 'Frontend', skills: ['Angular', 'Svelte', 'TypeScript', 'JavaScript', 'HTML5', 'CSS'] },
    { label: 'Backend', skills: ['C#', 'ASP.NET Core', 'Java', 'Spring Boot'] },
    { label: 'Data & Cloud', skills: ['MySQL', 'Cassandra', 'Azure DevOps', 'CircleCI'] },
    { label: 'Process', skills: ['Agile', 'SDLC', 'Peer Code Review', 'CI/CD'] },
  ];
</script>

<svelte:head>
  <title>Crystal Chavez — Software Engineer</title>
</svelte:head>

<!-- HERO -->
<section class="hero">
  <div class="hero-left" use:fadeIn>
    <span class="hero-tag">Software Engineer — Santa Clarita, CA</span>
    <h1>Crystal<br /><em>Chavez</em></h1>
    <p class="hero-sub">
      Full-stack engineer building thoughtful web applications. From chasing a
      computer science dream in high school to shipping production code at Wilson
      Language Training.
    </p>
    <div class="hero-cta">
      <a href="#story" class="btn btn-primary">Read my story</a>
      <!-- <a href="/projects" class="btn btn-secondary">See my projects</a> -->
      <a href="#contact" class="btn btn-secondary">Get in touch</a>
    </div>
  </div>

  <div class="hero-right" use:fadeIn={{ delay: 150 }}>
    <div class="stat-card">
      <div class="stat-num">3+</div>
      <div class="stat-label"><strong>Years in industry</strong>Bootcamp → Apprentice → Full Engineer</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">5</div>
      <div class="stat-label"><strong>Organizations</strong>Netflix, Girls Who Code, App Academy & more</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">10+</div>
      <div class="stat-label"><strong>Technologies</strong>.NET, Angular, Svelte, Azure, TypeScript…</div>
    </div>
  </div>
</section>

<!-- STORY -->
<section id="story" class="section-padded border-top">
  <span class="section-tag">01 — Background</span>
  <h2>The road here<br />was <em>worth it.</em></h2>
  <div class="story-grid">
    <div class="story-text" use:fadeIn>
      <p>My path into software engineering didn't start with a bootcamp or a lucky break — it started in <strong>high school</strong>, with a genuine curiosity about how computers work and what could be built with them.</p>
      <p>I carried that curiosity into <strong>College of the Canyons</strong>, where I earned my Associate's degree in Computer Science. From there, the natural next step was a transfer to <strong>California State University, Northridge</strong> — until the world changed. The shift to remote learning during COVID-19 came without the support systems students needed, and I made a clear-eyed decision: if the institution wasn't going to meet me where I was, I'd find one that would.</p>
      <p>I went to <strong>App Academy</strong> enrolled in their full-stack engineering programs. I didn't just graduate; I stayed on as a <strong>Jr. Instructional Assistant</strong>, helping the next cohort of engineers debug, learn, and grow.</p>
      <p>The next chapter came through <strong>Multiverse</strong>, an apprenticeship program that partnered with <strong>Wilson Language Training</strong>. What began as an apprenticeship became a full-time role. I am now a <strong>Software Engineer I at Wilson Language Training</strong>, building and maintaining the web applications that support educators and learners across the country.</p>
    </div>

    <div class="timeline" use:fadeIn={{ delay: 150 }}>
      {#each timeline as item}
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-date">{item.date}</div>
          <div class="tl-title">{item.title}</div>
          <div class="tl-org">{item.org}</div>
          <div class="tl-desc">{item.desc}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience" class="section-padded border-top">
  <span class="section-tag">02 — Experience</span>
  <h2>Where I've<br /><em>built things.</em></h2>
  <div class="exp-cards">
    {#each experience as job, i}
      <div class="exp-card" use:fadeIn={{ delay: i * 80 }}>
        <div class="exp-card-header">
          <div class="exp-card-title">{job.title}</div>
          <span class="exp-period">{job.period}</span>
        </div>
        <div class="exp-company">{job.company}</div>
        <p class="exp-desc">{job.desc}</p>
        <div class="exp-tags">
          {#each job.tags as tag}<span class="exp-tag">{tag}</span>{/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- SKILLS -->
<section id="skills" class="section-padded border-top">
  <span class="section-tag">03 — Skills</span>
  <h2>What I<br /><em>work with.</em></h2>
  <div class="skills-outer">
    {#each skillGroups as group, i}
      <div class="skill-group" use:fadeIn={{ delay: i * 80 }}>
        <div class="skill-group-title">{group.label}</div>
        <div class="skill-chips">
          {#each group.skills as skill}<span class="chip">{skill}</span>{/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="section-padded border-top">
  <span class="section-tag">04 — Contact</span>
  <div class="contact-inner">
    <div use:fadeIn>
      <h2>Let's work<br /><em>together.</em></h2>
      <p class="contact-text">Whether you're building something new, looking to collaborate, or just want to connect.</p>
    </div>
    <div class="contact-links" use:fadeIn={{ delay: 150 }}>
      <a href="mailto:chavezcrystal1999@yahoo.com" class="contact-link">
        <div class="contact-link-icon">✉</div>chavezcrystal1999@yahoo.com
      </a>
      <a href="/projects" class="contact-link">
        <div class="contact-link-icon">⌖</div>View my projects
      </a>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 92vh; display: grid; grid-template-columns: 1fr 1fr;
    padding: 0 2.5rem; gap: 2rem; align-items: center;
    border-bottom: 1px solid var(--border); position: relative; overflow: hidden;
  }
  .hero::before {
    content: ''; position: absolute; right: -120px; top: 50%; transform: translateY(-50%);
    width: 500px; height: 500px; border-radius: 50%; background: var(--accent-light); z-index: 0;
  }
  .hero-left { position: relative; z-index: 1; }
  .hero-tag {
    display: inline-block; font-family: var(--mono); font-size: 11px;
    color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase;
    background: var(--accent-light); padding: 5px 12px; border-radius: 2px; margin-bottom: 1.5rem;
  }
  h1 { font-size: clamp(3rem, 6vw, 5.5rem); line-height: 1.0; letter-spacing: -0.02em; margin-bottom: 1.5rem; }
  h1 em { font-style: italic; color: var(--accent); }
  .hero-sub { font-size: 1.05rem; color: var(--muted); max-width: 440px; line-height: 1.8; margin-bottom: 2.5rem; }
  .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
  .hero-right { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 1rem; padding: 3rem 0 3rem 2rem; }
  .stat-card {
    background: var(--white); border: 1px solid var(--border); border-radius: 4px;
    padding: 1.25rem 1.5rem; display: flex; align-items: center; gap: 1rem; transition: transform 0.2s;
  }
  .stat-card:hover { transform: translateX(4px); }
  .stat-num { font-family: var(--serif); font-size: 2rem; color: var(--accent); line-height: 1; min-width: 48px; }
  .stat-label { font-size: 13px; color: var(--muted); line-height: 1.4; }
  .stat-label strong { display: block; color: var(--ink); font-weight: 500; font-size: 14px; }

  .section-padded { padding: 5rem 2.5rem; }
  .border-top { border-top: 1px solid var(--border); }
  h2 { font-size: clamp(2rem, 4vw, 3rem); line-height: 1.1; margin-bottom: 3rem; letter-spacing: -0.01em; }
  h2 em { font-style: italic; color: var(--accent); }

  .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
  .story-text p { font-size: 1.05rem; line-height: 1.85; color: var(--muted); margin-bottom: 1.25rem; }
  .story-text p strong { color: var(--ink); font-weight: 500; }
  blockquote {
    border-left: 3px solid var(--accent); padding: 1.25rem 1.5rem;
    background: var(--white); border-radius: 0 4px 4px 0;
    margin: 1.5rem 0; font-family: var(--serif); font-size: 1.2rem;
    font-style: italic; color: var(--ink); line-height: 1.5;
  }

  .timeline { display: flex; flex-direction: column; position: relative; }
  .timeline::before {
    content: ''; position: absolute; left: 16px; top: 0; bottom: 0;
    width: 1px; background: var(--border);
  }
  .tl-item { padding-left: 48px; position: relative; padding-bottom: 2.5rem; }
  .tl-item:last-child { padding-bottom: 0; }
  .tl-dot {
    position: absolute; left: 9px; top: 4px; width: 15px; height: 15px;
    border-radius: 50%; background: var(--cream); border: 2px solid var(--border); transition: all 0.2s;
  }
  .tl-item:hover .tl-dot { background: var(--accent); border-color: var(--accent); }
  .tl-date { font-family: var(--mono); font-size: 11px; color: var(--accent); letter-spacing: 0.1em; margin-bottom: 0.3rem; }
  .tl-title { font-family: var(--serif); font-size: 1.1rem; margin-bottom: 0.2rem; }
  .tl-org { font-size: 12px; color: var(--muted); font-family: var(--mono); margin-bottom: 0.5rem; }
  .tl-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.65; }

  .exp-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
  .exp-card {
    border: 1px solid var(--border); border-radius: 4px; padding: 1.75rem;
    background: var(--white); transition: border-color 0.2s; display: flex; flex-direction: column;
  }
  .exp-card:hover { border-color: var(--accent); }
  .exp-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; }
  .exp-card-title { font-family: var(--serif); font-size: 1.1rem; line-height: 1.2; }
  .exp-period { font-family: var(--mono); font-size: 10px; color: var(--muted); letter-spacing: 0.08em; white-space: nowrap; margin-left: 1rem; }
  .exp-company { font-family: var(--mono); font-size: 12px; color: var(--accent); margin-bottom: 1rem; letter-spacing: 0.05em; }
  .exp-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.7; flex: 1; }
  .exp-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 1.25rem; }
  .exp-tag { font-family: var(--mono); font-size: 10px; padding: 3px 8px; border: 1px solid var(--border); border-radius: 2px; color: var(--muted); }

  .skills-outer { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
  .skill-group { border: 1px solid var(--border); border-radius: 4px; padding: 1.5rem; background: var(--white); }
  .skill-group-title { font-family: var(--mono); font-size: 11px; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
  .skill-chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip { font-family: var(--mono); font-size: 12px; padding: 5px 11px; background: var(--accent-light); color: var(--accent-dark); border-radius: 2px; }

  .contact-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .contact-text { font-size: 1.05rem; color: var(--muted); line-height: 1.8; margin-top: 1rem; }
  .contact-links { display: flex; flex-direction: column; gap: 1rem; }
  .contact-link {
    display: flex; align-items: center; gap: 1rem; text-decoration: none;
    color: var(--ink); font-family: var(--mono); font-size: 13px;
    padding: 1rem 1.25rem; border: 1px solid var(--border); border-radius: 4px;
    background: var(--white); transition: all 0.2s;
  }
  .contact-link:hover { border-color: var(--accent); color: var(--accent); }
  .contact-link-icon {
    width: 32px; height: 32px; background: var(--accent-light); border-radius: 2px;
    display: flex; align-items: center; justify-content: center; font-size: 14px; color: var(--accent); flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .hero { grid-template-columns: 1fr; min-height: auto; padding: 3rem 1.5rem; }
    .hero::before { display: none; }
    .hero-right { padding: 0; }
    .story-grid, .contact-inner { grid-template-columns: 1fr; gap: 2rem; }
    .section-padded { padding: 3rem 1.5rem; }
  }
</style>
