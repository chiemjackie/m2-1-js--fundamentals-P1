// Q6.3
// Write a loop that will print to the console all of the EVEN integers from 1 to 100.

for (i = 2; i <= 100; i += 2) {
  console.log(i)
}

// OR

for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}