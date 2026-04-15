<footer>
  <span>Crystal Chavez — Software Engineer</span>
  <span>Built with SvelteKit.</span>
</footer>

<style>
  footer {
    padding: 2rem 2.5rem;
    display: flex; justify-content: space-between; align-items: center;
    font-family: var(--mono); font-size: 11px;
    color: var(--muted); letter-spacing: 0.06em;
    border-top: 1px solid var(--border);
  }
  @media (max-width: 640px) {
    footer { flex-direction: column; gap: 0.5rem; text-align: center; padding: 2rem 1.5rem; }
  }
</style>
