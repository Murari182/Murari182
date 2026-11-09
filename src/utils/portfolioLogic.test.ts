import test from 'node:test';
import assert from 'node:assert/strict';
import {
  VERIFIED_PROFILE,
  VERIFIED_PROJECTS,
  VERIFIED_EXPERIENCE,
  VERIFIED_GITHUB_REPOS,
  LIGHT_HEATMAP_PALETTE,
  filterProjects,
  validateContactForm,
  buildMailtoUri,
  stepSpring,
  computeContributionLevel,
  buildRepoContributionHeatmap
} from './portfolioLogic';

test('verified profile contains exact non-fabricated user identity and links', () => {
  assert.equal(VERIFIED_PROFILE.fullName, 'Sreeramadasu Mukunda Rama Chary');
  assert.equal(VERIFIED_PROFILE.displayName, 'Mukunda');
  assert.equal(
    VERIFIED_PROFILE.tagline,
    'B.Tech Mathematics & Computing @ RGIPT | Aspiring AI Engineer'
  );
  assert.equal(VERIFIED_PROFILE.links.github, 'https://github.com/Murari182');
  assert.equal(VERIFIED_PROFILE.links.canonical, 'https://murari182.github.io/');
});

test('filterProjects filters by category and search query accurately', () => {
  const all = filterProjects(VERIFIED_PROJECTS, 'all');
  assert.equal(all.length, 5);

  const systems = filterProjects(VERIFIED_PROJECTS, 'systems');
  assert.equal(systems.length, 2);
  assert.ok(systems.some((p) => p.id === 'bigo-studio'));
  assert.ok(systems.some((p) => p.id === 'dsa-cpp'));

  const searchTca = filterProjects(VERIFIED_PROJECTS, 'all', 'TCAnalyzer');
  assert.equal(searchTca.length, 1);
  assert.equal(searchTca[0].id, 'bigo-studio');
});

test('verified experience contains all 4 required roles', () => {
  assert.equal(VERIFIED_EXPERIENCE.length, 4);
  const roles = VERIFIED_EXPERIENCE.map((e) => e.role);
  assert.ok(roles.includes('AWS Cloud Intern'));
  assert.ok(roles.includes('Chief Information Officer (CIO)'));
  assert.ok(roles.includes('AWS Student Builder Group Leader'));
  assert.ok(roles.includes('Technical Team Member'));
});

test('validateContactForm rejects empty or invalid fields and accepts valid input', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    subject: 'Hi',
    message: 'Short'
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Recruiter Name',
    email: 'recruiter@company.com',
    subject: 'AI Engineering Internship Opportunity',
    message: 'Hello Mukunda, we reviewed your BigO Studio and TCAnalyzer work.'
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('buildMailtoUri constructs properly encoded mailto link', () => {
  const uri = buildMailtoUri('[PLACEHOLDER: your.email@rgipt.ac.in]', {
    name: 'Arjun Rao',
    email: 'arjun@example.com',
    subject: 'Collaboration on AI Project',
    message: 'Would love to connect regarding RGIPT AI initiatives.'
  });
  assert.ok(uri.startsWith('mailto:your.email@example.com?subject='));
  assert.ok(uri.includes('Collaboration%20on%20AI%20Project'));
  assert.ok(uri.includes('Arjun%20Rao'));
});

test('stepSpring converges smoothly toward target position', () => {
  let state = { current: 0, target: 100, velocity: 0 };
  for (let i = 0; i < 180; i++) {
    state = stepSpring(state, 220, 22, 1 / 60);
  }
  assert.equal(state.current, 100);
  assert.equal(state.velocity, 0);
});

test('computeContributionLevel and buildRepoContributionHeatmap generate light-theme SVG heatmap cells', () => {
  assert.equal(computeContributionLevel(0), 0);
  assert.equal(computeContributionLevel(1), 1);
  assert.equal(computeContributionLevel(3), 2);
  assert.equal(computeContributionLevel(5), 3);
  assert.equal(computeContributionLevel(8), 4);

  const allHeatmap = buildRepoContributionHeatmap(VERIFIED_GITHUB_REPOS, 'all', 20);
  assert.equal(allHeatmap.cells.length, 140);
  assert.ok(allHeatmap.totalContributions > 0);
  assert.ok(allHeatmap.activeDays > 0);
  assert.equal(allHeatmap.filteredRepos.length, 6);
  for (const cell of allHeatmap.cells) {
    assert.equal(cell.color, LIGHT_HEATMAP_PALETTE[cell.level]);
  }

  const aiHeatmap = buildRepoContributionHeatmap(VERIFIED_GITHUB_REPOS, 'ai', 20);
  assert.equal(aiHeatmap.filteredRepos.length, 1);
  assert.equal(aiHeatmap.filteredRepos[0].name, 'Study_Agent');
});

