const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index.html', 'utf8');

const requiredText = [
  'PDi DISCOVER',
  'DISCOVER AI Assist',
  'Investigator review required',
  'Prototype reasoning engine',
  'D — Define',
  'C — Causes',
  'O — Organisational & Human Factors',
  'E — Effective Recommendations',
  'Quality Gate',
  'Executive Report'
];

const requiredFunctions = [
  'aiDraftAll',
  'aiDraftCauses',
  'aiDraftBarriers',
  'aiDraftRecommendations',
  'aiDraftSequence',
  'generateReport',
  'exportCase',
  'importCase'
];

const failures = [];

for (const text of requiredText) {
  if (!html.includes(text)) failures.push(`Missing required content: ${text}`);
}

for (const name of requiredFunctions) {
  if (!new RegExp(`function\\s+${name}\\s*\\(`).test(html)) {
    failures.push(`Missing function: ${name}`);
  }
}

const script = html.match(/<script>([\s\S]*?)<\/script>/);
if (!script) {
  failures.push('Embedded JavaScript block not found');
} else {
  try {
    new vm.Script(script[1]);
  } catch (error) {
    failures.push(`JavaScript syntax error: ${error.message}`);
  }
}

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
if (duplicateIds.length) failures.push(`Duplicate element IDs: ${duplicateIds.join(', ')}`);

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('PDi DISCOVER static checks passed.');
