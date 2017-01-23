Description:

Given a node object representing a binary tree:

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
In C++:

struct node
{
  int value;
  node* left;
  node* right;
}
write a function that returns the sum of all values, including the root.

Examples:

10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3
FUNDAMENTALSTREESDATA STRUCTURESRECURSIONALGORITHMSCOMPUTABILITY THEORYTHEORETICAL COMPUTER SCIENCEBINARY SEARCH TREESBINARY

function sumTheTreeValues(root){
  if ( root.left !== null && root.right !== null){
    return  root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
  } else if (root.left !== null) {
    return root.value + sumTheTreeValues(root.left)
  } else if (root.right !== null) {
    return root.value + sumTheTreeValues(root.right);
  } else {
    return root.value
  }
}


function sumTheTreeValues(root) {
  return !root ? 0 : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}
