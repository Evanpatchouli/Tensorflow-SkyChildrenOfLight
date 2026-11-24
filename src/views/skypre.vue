<template>
  <main class="archive-shell">
    <nav class="archive-nav" aria-label="复刻档案馆">
      <RouterLink :to="{ name: 'skypre' }">历史复刻</RouterLink>
      <RouterLink :to="{ name: 'skypre-prediction' }">下期预测</RouterLink>
      <RouterLink :to="{ name: 'skypre-experiment' }">模型实验</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
.archive-shell {
  --archive-background: #171717;
  --archive-panel: #222321;
  --archive-border: #3a3c37;
  --archive-ink: #f2f0e7;
  --archive-muted: #b9bcb2;
  --archive-accent: #efcf83;
  --archive-space: clamp(1rem, 4vw, 3.5rem);
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 0 var(--archive-space) 3.5rem;
  background: var(--archive-background);
  color: var(--archive-ink);
  text-align: left;
  line-height: 1.55;
}

.archive-shell > * {
  max-width: 68rem;
  margin-inline: auto;
}

.archive-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem clamp(0.5rem, 3vw, 2rem);
  border-bottom: 1px solid var(--archive-border);
  margin-bottom: clamp(1.5rem, 4vw, 2.75rem);
}

.archive-nav a {
  display: block;
  min-height: 2.75rem;
  padding: 0.55rem clamp(0.45rem, 2vw, 0.85rem);
  color: var(--archive-muted);
  border-bottom: 2px solid transparent;
  font-weight: 600;
  text-decoration: none;
}

.archive-nav a:hover,
.archive-nav .router-link-exact-active {
  color: var(--archive-accent);
  border-bottom-color: var(--archive-accent);
}

.archive-shell h1 {
  color: var(--archive-ink);
  font-family: var(--font-lishu);
  font-weight: 100;
  font-size: clamp(1.65rem, 5vw, 2.6rem);
  line-height: 1.2;
  margin-bottom: 0.6rem;
}

.archive-shell h2 {
  font-size: clamp(1.125rem, 3vw, 1.45rem);
  margin-bottom: 0.5rem;
}

.archive-shell .archive-intro {
  max-width: 52rem;
  color: var(--archive-muted);
  margin-bottom: 1.5rem;
}

.archive-shell .archive-table {
  width: 100%;
  border-collapse: collapse;
  font-variant-numeric: tabular-nums;
}

.archive-table :is(th, td) {
  border-bottom: 1px solid var(--archive-border);
  padding: 0.7rem clamp(0.25rem, 2vw, 1rem);
  vertical-align: top;
}

.archive-table thead th {
  background: var(--archive-panel);
  color: var(--archive-muted);
  text-align: left;
  font-weight: 600;
}

.archive-table tbody th {
  text-align: left;
  font-weight: 600;
}

.archive-shell .archive-secondary {
  color: var(--archive-muted);
  font-size: 0.86rem;
  font-weight: 400;
}

.archive-table .archive-mobile-meta {
  display: none;
}

.archive-shell :is(a, button, summary, input):focus-visible {
  outline: 2px solid var(--archive-accent);
  outline-offset: 3px;
}

@media (max-width: 42rem) {
  .archive-table .archive-wide-column {
    display: none;
  }

  .archive-table .archive-mobile-meta {
    display: block;
    margin-top: 0.15rem;
  }
}
</style>
