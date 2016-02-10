#Mastering Physics Hw Solver 
####By Konstantino Sparakis


##How It Works
The HW solver works under the following conditions. 
1.) You have a solutions manual with the formula
2.) You have the original text from the book for the question,
3.) Your HW problem is the original from the book but with numbers changed.

The solver works by analyzing the order in which the numbers are read in the text and where they show up in the formula.

 so if the number 23 is the 3rd number in the original problem and the formula you input is “23*80+100”, and in your modified problem the 3rd number is 20. 

It will swap the 23 with the 20 and return to you “20*80+100”

Now you can plug this in to wolphramalpha.com and get your answer.

##Tips
- rewrite the formula when your inputting it so that it will work on input to wolfram alpha
	So….
	^ = Exponentials
	() needed on everything that is to be grouped
           * = multiplication
	+ = addition
	any letter = to a variable (try simplifying the solution manual variables to X,Y,Z if you can)
	… etc anything that allows for wolfram alpha to interpret the formula correctly.

- Be careful with numbers in the text that point to figures like “figure 1.2”
- You need to make sure the numbers in the original text and your modified version line up perfectly

##Future Work
- Add integration to wolphram alpha directly to get solved answers.
