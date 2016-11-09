Write a function called repeat_str which repeats the given string src exactly count times.

repeat_str(3, "foo"); // "foofoofoo"
repeat_str(1, "bar spam"); // "bar spam"
FUNDAMENTALS

function repeatStr (n, s) {
  return s.repeat(n);
}
