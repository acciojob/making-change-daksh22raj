const makeChange = (c) => {
  // ensure c is a number
  let amount = Number(c);

  let q = Math.floor(amount / 25);
  amount = amount % 25;

  let d = Math.floor(amount / 10);
  amount = amount % 10;

  let n = Math.floor(amount / 5);
  amount = amount % 5;

  let p = amount; // remaining are pennies

  return { q, d, n, p };
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
