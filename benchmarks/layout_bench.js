// Mock DOM environment
let accessCount = 0;

const mockDocument = {
  documentElement: {
    get scrollHeight() {
      accessCount++;
      return 2000;
    }
  }
};

const mockWindow = {
  get innerHeight() {
    accessCount++;
    return 800;
  },
  get scrollY() {
    return 100;
  }
};

const mockElement = {
  getBoundingClientRect: () => ({ top: 500 })
};

// Original function (simulated)
function getIntersectionScrollOriginal(element, offset = 0) {
  const docHeight = mockDocument.documentElement.scrollHeight;
  const winHeight = mockWindow.innerHeight;
  const maxScroll = docHeight - winHeight;
  const bounds = element.getBoundingClientRect();
  const absoluteTop = bounds.top + mockWindow.scrollY + offset;
  return absoluteTop * (maxScroll / docHeight);
}

// Optimized function (simulated)
function getIntersectionScrollOptimized(element, offset = 0, docHeight, maxScroll) {
  // If not provided, fallback (same as original)
  if (docHeight === undefined || maxScroll === undefined) {
      docHeight = mockDocument.documentElement.scrollHeight;
      const winHeight = mockWindow.innerHeight;
      maxScroll = docHeight - winHeight;
  }

  const bounds = element.getBoundingClientRect();
  const absoluteTop = bounds.top + mockWindow.scrollY + offset;
  return absoluteTop * (maxScroll / docHeight);
}

// BENCHMARK

console.log("--- Baseline: Layout Reads inside loop ---");
accessCount = 0;
const iterations = 1000;

const startTimeBase = process.hrtime();
for (let i = 0; i < iterations; i++) {
  getIntersectionScrollOriginal(mockElement);
}
const endTimeBase = process.hrtime(startTimeBase);
const baselineAccesses = accessCount;
console.log(`Iterations: ${iterations}`);
console.log(`Global Layout Accesses: ${baselineAccesses} (Expected: ${iterations * 2})`);


console.log("\n--- Optimized: Pre-calculated Layout values ---");
accessCount = 0; // Reset counter

const startTimeOpt = process.hrtime();

// Pre-calculate once
const docHeight = mockDocument.documentElement.scrollHeight;
const winHeight = mockWindow.innerHeight;
const maxScroll = docHeight - winHeight;
// Accesses for pre-calculation: 2

for (let i = 0; i < iterations; i++) {
  getIntersectionScrollOptimized(mockElement, 0, docHeight, maxScroll);
}
const endTimeOpt = process.hrtime(startTimeOpt);
const optimizedAccesses = accessCount;

console.log(`Iterations: ${iterations}`);
console.log(`Global Layout Accesses: ${optimizedAccesses} (Expected: 2)`);

console.log(`\nReduction in property accesses: ${baselineAccesses - optimizedAccesses}`);
