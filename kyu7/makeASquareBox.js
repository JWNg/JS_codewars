Description:

Easy; Make a box

Given a number as a parameter, return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]
ALGORITHMSSTRINGSARRAYS

function box(n) {
  const outB = '-'.repeat(n);
  const inB = `-${' '.repeat(n-2)}-`;

  return [outB, ...Array(n-2).fill(inB), outB];
}
