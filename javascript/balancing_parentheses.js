function balancingParentheses(string) {
  const chars = string.split("");
	const stack = [];
	for (const char of chars) {
		if (stack[stack.length - 1] === "(" && char === ")") {
			stack.pop();
		} else {
			stack.push(char);
		}
	}
	return stack.length;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
Turn string into an array of characters
Create empty array (stack);
Iterature through chars in string
	- if last element in stack is "(" and char is ")"...  pop stack element
	- if last element in stack is ")"... push char into stack
	- if last element in stack is "(" and char is "("... push char into stack
	
	- therefore, if last element is "(" and char is ")"... pop stack element, else push char into stack
*/
