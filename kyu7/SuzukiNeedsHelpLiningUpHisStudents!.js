Description:

Suzuki needs help lining up his students!

Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

You will be given a string of student names. Sort them and return a list of names in descending order.

Here is an example input:

string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
Here is an example return from your function:

 lst = ['Takehiko',
        'Takayuki',
        'Takahiro',
        'Takeshi',
        'Takeshi',
        'Takashi',
        'Tadashi',
        'Takeo',
        'Takao']
Names of equal length will be returned in reverse alphabetical order (Z->A) such that:

string = "xxa xxb xxc xxd xa xb xc xd"
Returns

['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']
FUNDAMENTALSSTRINGSSORTINGALGORITHMS


function lineupStudents(students){
  students = students.trim();
  students = students.split(/\s{1,}/g);
  students.sort(function(a,b){
    if(a.length === b.length)
      if(a < b)
        return 1;
      else
        return -1;
      
    if(a.length < b.length)
    return 1;
    else
    return -1;
  })
  return students;
}
