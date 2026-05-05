// Mock DOM environment
let layoutReadCount = 0;

const mockElement = {
  offsetHeight: 100,
  getBoundingClientRect: () => {
    layoutReadCount++;
    return { top: 500 };
  }
};

const mockWindow = {
  scrollY: 100
};

// Original function logic
function getIntersectionScroll(element, offset = 0, docHeight, maxScroll) {
  const bounds = element.getBoundingClientRect(); // READ
  const absoluteTop = bounds.top + mockWindow.scrollY + offset;
  return absoluteTop * (maxScroll / docHeight);
}

// Optimization simulation
const cards = Array(1000).fill(mockElement);
const docHeight = 2000;
const maxScroll = 1200;

console.log("--- Baseline: TechStack current implementation ---");
layoutReadCount = 0;

const startTimeBase = process.hrtime();
cards.forEach(card => {
    const startScroll = getIntersectionScroll(card, 0, docHeight, maxScroll);
    const endScroll = getIntersectionScroll(card, card.offsetHeight, docHeight, maxScroll);
    // ScrollTrigger.create would be here
});
const endTimeBase = process.hrtime(startTimeBase);
const baselineReads = layoutReadCount;

console.log(`Iterations: ${cards.length}`);
console.log(`Layout Reads (getBoundingClientRect): ${baselineReads}`);

console.log("\n--- Optimized: Batched Reads ---");
layoutReadCount = 0;

const startTimeOpt = process.hrtime();

const scrollFactor = maxScroll / docHeight;
const currentScrollY = mockWindow.scrollY;

// Pass 1: Read
const measurements = cards.map(card => {
    return {
        card,
        bounds: card.getBoundingClientRect(), // READ ONCE
        height: card.offsetHeight
    };
});

// Pass 2: Write/Logic
measurements.forEach(m => {
    const absoluteTop = m.bounds.top + currentScrollY;
    const startScroll = absoluteTop * scrollFactor;

    const absoluteBottom = absoluteTop + m.height;
    const endScroll = absoluteBottom * scrollFactor;
    // ScrollTrigger.create would be here
});

const endTimeOpt = process.hrtime(startTimeOpt);
const optimizedReads = layoutReadCount;

console.log(`Iterations: ${cards.length}`);
console.log(`Layout Reads (getBoundingClientRect): ${optimizedReads}`);
console.log(`\nReduction in layout reads: ${baselineReads - optimizedReads} (${((baselineReads - optimizedReads) / baselineReads * 100).toFixed(1)}%)`);
