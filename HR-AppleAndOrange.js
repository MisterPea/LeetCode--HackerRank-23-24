/*
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. 
Using the information given below, determine the number of apples and oranges 
that land on Sam's house.
In the diagram below:
The red region denotes the house, where s is the start point, and t is the endpoint. 
The apple tree is to the left of the house, and the orange tree is to its right.
Assume the trees are located on a single point, where the apple tree is at point a, 
and the orange tree is at point b.
When a fruit falls from its tree, it lands d units of distance from its tree of origin along the 
x-axis. *A negative value of d means the fruit fell d units to the tree's left, 
and a positive value of d means it falls units to the tree's right. *

a   s=======t    b
+d-->       <-- -d
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesOranges = [0, 0];
  for (let a_i = 0; a_i < apples.length; a_i += 1) {
    const appleFall = apples[a_i] + a;
    if (appleFall >= s && appleFall <= t) {
      applesOranges[0] += 1;
    }
  }
  for (let o_i = 0; o_i < oranges.length; o_i += 1) {
    const orangeFall = oranges[o_i] + b;
    if (orangeFall <= t && orangeFall >= s) {
      applesOranges[1] += 1;
    }
  }
  console.log(applesOranges[0]);
  console.log(applesOranges[1]);
}

// a = 4
// b = 12
// s = 6
// t = 10
// apples=[2,-2,3]
// oranges=[-3,3,-4]

countApplesAndOranges(6, 10, 4, 12, [2, -2, 3], [-3, 3, -4]); // [2,2]
