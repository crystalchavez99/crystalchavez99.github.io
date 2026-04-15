<script>
  import { page } from '$app/stores';

  const links = [
    { href: '/#story', label: 'Story' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#skills', label: 'Skills' },
    // { href: '/projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ];
</script>

<nav>
  <a href="/" class="nav-logo">CC // Portfolio</a>
  <ul class="nav-links">
    {#each links as link}
      <li>
        <a href={link.href} class:active={$page.url.pathname === link.href}>
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    position: sticky; top: 0; z-index: 100;
    background: var(--cream);
    border-bottom: 1px solid var(--border);
    padding: 1rem 2.5rem;
    display: flex; justify-content: space-between; align-items: center;
  }
  .nav-logo {
    font-family: var(--mono); font-size: 13px;
    color: var(--accent); letter-spacing: 0.08em;
    text-transform: uppercase; text-decoration: none;
  }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a {
    font-size: 13px; font-family: var(--mono);
    color: var(--muted); text-decoration: none;
    letter-spacing: 0.05em; transition: color 0.2s;
  }
  .nav-links a:hover, .nav-links a.active { color: var(--ink); }

  @media (max-width: 640px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { gap: 1.25rem; }
    .nav-links a { font-size: 11px; }
  }
</style>
