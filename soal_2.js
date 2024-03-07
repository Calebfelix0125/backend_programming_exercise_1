const students = [
	{
  	id: "535250001",
    score: 98.0
  },
  {
  	id: "535250001",
    score: 45.0
  },
  {
  	id: "535250001",
    score: 97.75
  },
  {
  	id: "535250001",
    score: 99.25
  },
  {
  	id: "535250001",
    score: 78.5
  },
];

students.sort((v1, v2) => {
    const val1 = v1.score;
    const val2 = v2.score;
    
  if (val1 < val2) {
  	return 1;
  }
  if (val1 > val2) {
  	return -1;
  }
  
  return 0;
}); // fixed !!!

console.log(students);