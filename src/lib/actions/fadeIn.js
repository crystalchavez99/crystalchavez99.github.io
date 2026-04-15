export function fadeIn(node, { delay = 0 } = {}) {
  node.style.opacity = '0';
  node.style.transform = 'translateY(24px)';
  node.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          observer.unobserve(node);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(node);
  return { destroy() { observer.unobserve(node); } };
}
