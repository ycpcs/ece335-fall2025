// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new Topic("Lecture 1: Intro to Discrete Math", "lectures/lecture01.html"),
		reading: "Intro. pg. 1-6",
	},
	{
		topic: new Topic("Lecture 2: Deductive Reasoning and Logical Connectives","lectures/lecture02.html"),
		reading: "1.1 pg. 8-13",
	},
	{
		topic: new Topic("Lecture 3: Truth Tables", "lectures/lecture03.html"),
		reading: "1.2 pg. 15-24",
	},
	{
		topic: new DoubleTopic("Lecture 4: The Conditional and Biconditional Connectives","lectures/lecture04.html","Assignment 1 Due","assign/assign01.html"),
		reading: "1.5 pg. 45-55",
	},
	{
		topic: new Topic("Lecture 5: Quantifiers", "lectures/lecture05.html"),
		reading: "2.1 pg. 58-66",
	},
	{
		topic: new Topic("Lecture 6: Equivalencies Involving Quantifiers", "lectures/lecture06.html"),
		reading: "2.2 pg. 68-76",
	},
	{
		topic: new DoubleTopic("Exam 1 Review", "", "Assignment 2 Due","assign/assign02.html")
	},
	{
		topic: new Topic("** Exam 1", "")
	},
	{
		topic: new Topic("Lecture 7: Variables and Sets", "lectures/lecture07.html"),
		reading: "1.3 pg. 26-33",
	},
	{
		topic: new Topic("Lecture 8: Operations on Sets","lectures/lecture08.html", ),
		reading: "1.4 pg. 35-43",
	},
	{
		topic: new DoubleTopic("Lecture 9: More Operations on Sets","lectures/lecture09.html", "Assignment 3 Due","assign/assign03.html"),
		reading: "2.3 pg. 78-86",
	},
	{
		topic: new Topic("Lecture 10: Proof Strategies", "lectures/lecture10.html"),
		reading: "3.1 pg. 89-98",
	},
	{
		topic: new DoubleTopic("Exam 2 Review", "", "Assignment 4 Due","assign/assign4.html")
	},
	{
		topic: new Topic("** Exam 2", "")
	},
	{
		topic: new Topic("Lecture 11: Proofs Involving Negations and Conditionals","lectures/lecture11.html"),
		reading: "3.2 pg. 100-111",
	},
	{
		topic: new Topic("Lecture 12: Proofs Involving Quantifiers","lectures/lecture12.html"),
		reading: "3.3 pg. 113-127",
	},
	{
		topic: new TripleTopic("Lecture 13: Proofs Involving Conjunctions and Biconditionals","lectures/lecture13.html", "Lecture 14: Proofs Involving Disjunctions","lectures/lecture14.html", "Assignment 5 Due","assign/assign05.html"),
		reading: "3.4 pg. 130-139, 3.5 pg. 142-150",
	},
	{
		topic: new Topic("Lecture 15: Proof by Mathematical Induction","lectures/lecture15.html"),
		reading: "6.1 pg. 273-278",
	},
	{
		topic: new Topic("Lecture 16: Recursion","lectures/lecture16.html"),
		reading: "6.3 pg. 293-299",
	},
	{
		topic: new DoubleTopic("Exam 3 Review", "", "Assignment 6 Due","assign/assign6.html")
	},
	{
		topic: new Topic("** Exam 3", "")
	},
	{
		topic: new Topic("Lecture 17: Relations","lectures/lecture17.html"),
		reading: "4.1-4.3 pg. 163-186",
	},
	{
		topic: new DoubleTopic("Lecture 18: Functions","lectures/lecture18.html", "Lecture 19: Function Properties","lectures/lecture19.html"),
		reading: "5.1 pg. 229-236, 5.2-5.3 pg. 240-256",
	},
	{
		topic: new DoubleTopic("Lecture 20: Combinatorics","lectures/lecture20.html", "Assignment 7 Due","assign/assign07.html"),
		reading: "",
	},
	{
		topic: new Topic("Lecture 21: Permutations","lectures/lecture21.html"),
		reading: "",
	},
	{
		topic: new Topic("Lecture 22: Combinations","lectures/lecture22.html"),
		reading: "",
	},
	{
		topic: new DoubleTopic("Exam 4 Review", "", "Assignment 8 Due","assign/assign08.html")
	},
	{
		topic: new Topic("** Exam 4", "")
	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("101", new Date("12/11/2025 10:15:00")),
//		new FinalExamDay("101", new Date("05/11/2022 08:00:00")),
//		new FinalExamDay("103", new Date("12/13/2019 12:45:00")),
//		new FinalExamDay("104", new Date("12/13/2019 15:00:00"))
];

// vim:ts=2:
