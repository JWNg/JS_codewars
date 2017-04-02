Description:

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y, and z attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.
FUNDAMENTALSGEOMETRYALGEBRAMATHEMATICSALGORITHMS

const distanceBetweenPoints = (a, b) => Math.round(1e6 * Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2 + (b.z - a.z) ** 2)) / 1e6;
