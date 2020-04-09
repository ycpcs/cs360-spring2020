// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new DoubleTopic("Lecture 1: Intro to Algorithms", "lectures/lecture01.html","Card Sorting App","lectures/Sorter.jar"),
		reading: "Ch. 1",
	},
	{
		topic: new DoubleTopic("Lecture 2: Insertion Sort", "lectures/lecture02.html", "Sort Visualization", "http://math.hws.edu/eck/js/sorting/xSortLab.html"),
		reading: "Ch. 2.1&ndash;2.2",
	},
	{
		topic: new Topic("Lecture 2: Insertion Sort cont.", "lectures/lecture02.html"),
		reading: "Ch. 2.1&ndash;2.2",
	},
	{
		topic: new Topic("Lecture 2b: Empirical Analysis", "lectures/lecture02b.html"),
		reading: "",
	},
	{
		topic: new DoubleTopic("Lecture 3: Asymptotic Notation", "lectures/lecture03.html", "Assignment 1 Due", "assign/assign01.html"),
		reading: "Ch. 3",
	},
	{
		topic: new Topic("Lecture 4: Merge Sort", "lectures/lecture04.html"),
		reading: "Ch. 2.3",
	},
	{
		topic: new Topic("Lecture 5: Master Theorem", "lectures/lecture05.html"),
		reading: "Ch. 4.5",
	},
	{
		topic: new Topic("Lecture 5: Master Theorem cont.", "lectures/lecture05.html"),
		reading: "Ch. 4.5",
	},
	{
		topic: new DoubleTopic("Exam 1 Review", "", "Assignment 2 Due", "assign/assign02.html"),
		reading: "",
	},
	{
		topic: new Topic("** Exam 1 - Takehome Due Mon Feb 17", "")
	},
	{
		topic: new Topic("Lecture 7: Heapsort", "lectures/lecture07.html"),
		reading: "Ch. 6",
	},
	{
		topic: new Topic("Lecture 8: Quicksort", "lectures/lecture08.html"),
		reading: "Ch. 7",
	},
	{
		topic: new Topic("Lecture 9: Linear Sorting", "lectures/lecture09.html"),
		reading: "Ch. 8",
	},
	{
		topic: new Topic("Lecture 9: Linear Sorting cont.", "lectures/lecture09.html"),
		reading: "Ch. 8",
	},
	{
		topic: new DoubleTopic("Lecture 12: Dynamic Programming - Rod Cutting", "lectures/lecture12.html", "Assignment 3 Due", "assign/assign03.html"),
		reading: "Ch. 15",
	},
	{
		topic: new Topic("Lecture 12: Dynamic Programming - Rod Cutting cont.", "lectures/lecture12.html"),
		reading: "Ch. 15",
	},
	{
		topic: new Topic("Empirical Report Workday", ""),
		reading: "",
	},
	{
		topic: new DoubleTopic("Exam 2 Review", "", "Empirical Comparison Report Due - Tues Mar 10", "assign/emp_comp.html"),
		reading: "",
	},
	{
		topic: new Topic("** Exam 2 - Takehome Due Mon Mar 16", "")
	},
	{
		topic: new Topic("Lecture 13: Dynamic Programming - LCS", "lectures/lecture13.html"),
		reading: "Ch. 15",
	},
	{
		topic: new DoubleTopic("LCS Practice Activity", "handouts/lecture13-LCS-Ex2.pdf", "LCS Solution", "handouts/lecture13-LCS-Ex2Sol.pdf"),
		reading: "Ch. 15",
	},
	{
		topic: new Topic("Lecture 14: Greedy Algorithms - Activity Selection", "lectures/lecture14.html"),
		reading: "Ch. 16",
	},
	{
		topic: new Topic("Lecture 15: Graph Theory", "lectures/lecture15.html"),
		reading: "Appendix B.4",
	},
	{
		topic: new FourTopic("Lecture 16: Breadth-First Search", "lectures/lecture16.html", "BFS Example", "handouts/lecture16-bfsex.pdf", "BFS Practice Activity", "handouts/lecture16-bfsact.pdf", "BFS Solution", "handouts/lecture16-bfsact-sol.pdf"),
		reading: "Ch. 22.2",
	},
	{
		topic: new FiveTopic("Lecture 17: Depth-First Search", "lectures/lecture17.html", "DFS Example", "handouts/lecture17-dfsex.pdf", "DFS Practice Activity", "handouts/lecture17-dfsact.pdf", "DFS Solution", "handouts/lecture17-dfsact-sol.pdf", "Assignment 4 Due", "assign/assign04.html"),
		reading: "Ch. 22.3"
	},
	{
		topic: new SixTopic("Lecture 18: DFS Applications", "lectures/lecture18.html", "DFS Application Examples", "handouts/lecture18-dfsappex.pdf", "Topological Sort Practice Activity", "handouts/lecture18-topsortact.pdf", "Top Sort Solution", "handouts/lecture18-topsortact-sol.pdf", "SCCD Practice Activity", "handouts/lecture18-sccex.pdf", "SCCD Solution", "handouts/lecture18-sccex-sol.pdf"),
		reading: "Ch. 22.4&ndash;22.5",
	},
	{
		topic: new FourTopic("Lecture 19: Minimum Spanning Trees - Kruskal", "lectures/lecture19.html", "Kruskal Example", "handouts/lecture19-Kruskalex.pdf", "Kruskal Practice Activity", "handouts/lecture19-Kruskalact.pdf", "Kruskal Solution", "handouts/lecture19-Kruskalactsol.pdf"),
		reading: "Ch. 23.1",
	},
	{
		topic: new DoubleTopic("Exam 3 Review", "", "Assignment 5 Due", "assign/assign05.html"),
		reading: "",
	},
	{
		topic: new Topic("** Exam 3 - Takehome Due Wed Apr 8", "")
	},
	{
		topic: new FourTopic("Lecture 20: Minimum Spanning Trees - Prim", "lectures/lecture20.html", "Prim Example", "handouts/lecture20-Primex.pdf","Prim Practice Activity", "handouts/lecture20-Primact.pdf", "Prim Solution", "handouts/lecture20-Primactsol.pdf"),
		reading: "Ch. 23.2",
	},
	{
		topic: new DoubleTopic("Lecture 21: Shortest Path - Bellman-Ford", "lectures/lecture21.html", "Bellman-Ford Example", "handouts/lecture21-BellmanFordex.pdf"),
		reading: "Ch. 24.1&ndash;24.2",
	},
	{
		topic: new FiveTopic("Lecture 22: Shortest Path - Dijkstra", "lectures/lecture22.html", "Dijkstra Example", "handouts/lecture22-Dijkstraex.pdf", "Lecture 23: Shortest Path - Floyd-Warshall", "lectures/lecture23.html", "SSSP Practice Activity", "handouts/lecture22-ssspact.pdf", "SSSP Solution", "handouts/lecture22-ssspactsol.pdf"),
		reading: "Ch. 24.3",
	},
	{
		topic: new Topic("Lecture 24: Maximal Flow", "lectures/lecture24.html"),
		reading: "Ch. 26.1",
	},
	{
		topic: new TripleTopic("Lecture 25: Maximal Flow- Ford-Fulkerson", "lectures/lecture25.html", "Max Flow Practice Activity", "handouts/lecture25-maxflowact.pdf", "Max Flow Solution", "handouts/lecture25-maxflowactsol.pdf"),
		reading: "Ch. 26.2",
	},
	{
		topic: new DoubleTopic("Lecture 26: NP Completeness", "lectures/lecture26.html", "Assignment 6 Due", "assign/assign06.html"),
		reading: "Ch. 34.1&ndash;34.3",
	},
	{
		topic: new Topic("Lecture 27: NP Complete Problems", "lectures/lecture27.html"),
		reading: "Ch. 34.4",
	},
	{
		topic: new Topic("Lecture 28: More NP Complete Problems", "lectures/lecture28.html"),
		reading: "Ch. 34.4",
	},
	{
		topic: new DoubleTopic("Exam 4 Review", "", "Assignment 7 Due", "assign/assign07.html"),
		reading: "",
	},
	{
		topic: new Topic("** Exam 4 - Takehome Due Wed May 6", "")
	},
	{
		topic: new Topic("Lecture 29: Approximation Algorithms", "lectures/lecture29.html"),
		reading: "Ch. 35.1-35.2",
	},
	{
		topic: new Topic("Wrapup", ""),
		reading: "",
	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("102", new Date("05/11/2020 10:15:00")),
		new FinalExamDay("101", new Date("05/13/2020 8:00:00")),
//		new FinalExamDay("103", new Date("12/13/2019 12:45:00")),
//		new FinalExamDay("104", new Date("12/13/2019 15:00:00"))
];

// vim:ts=2:
