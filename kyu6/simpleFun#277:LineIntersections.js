Task

Given some line segments lying on x-axis with starting points start and end points end, find the number of pairs of lines which overlaps.

Input/Output

[input] integer array start

The starting points of the segments. For each i start[i] ≥ 0.

[input] integer array end

The ending points of the segments. end[i] is greater than start[i].

[output] an integer

The number of pairs of overlapping line segments.

Example

For start = [8, 4, 6, 1] and end = [10, 9, 7, 2],

the output should be 2.

The two intersecting lines are:

(4, 9) intersects with (6, 7);
(4, 9) intersects with (8,10).
For start = [1, 2] and end = [3, 4], the output should be 1.
ALGORITHMS

function lineIntersections(start, end) {
  var count = 0;
  for (var cur = 0; end[cur]; cur++) {
    for (var next = cur + 1; end[next]; next++) {
      start[cur] <= end[next] &&
      start[next] <= end[cur] && count++;
    }
  }
  return count;
}
