// Q6.4
// Write a loop that will print to the console all of the EVEN integers from 100 to 0.

for (i = 100; i >= 0; i-=2) {
  console.log(i)
}

// OR

for (i = 100; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log(i)
  }
}