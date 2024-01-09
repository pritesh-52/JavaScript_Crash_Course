console.log("hello");

async function getdata() {
  try {
    const name = "Pritesh";
    console.log(name);
  } catch (e) {
    console.log(e);
  }
}

getdata();

/* Promies */
let age = 18;
const p = new Promise((resolve, reject) => {
  if (age >= 18) {
    setTimeout(() => {
      resolve("You are elgile");
    }, 3000);
  } else {
    setTimeout(() => {
      reject("You are not elebgelible");
    }, 5000);
  }
});

function handel(value) {
  console.log(value);
}

function rejectvalue(value) {
  console.log(value);
}

p.then(handel, rejectvalue);

/* Try Catch */
let newage = 19;
const adddata = async () => {
  try {
    if (newage >= 18) {
      setTimeout(() => {
        console.log("YOU ELIGIBLE");
      });
    } else {
      setTimeout(() => {
        console.log("Not ELIGBLE");
      });
    }
  } catch (e) {
    console.log(e);
  }
};

adddata();

/* Mutiple Async function */

function addtion() {
  console.log("This is a addtion method");
}
function subtraction() {
  console.log("This is a subtraction method");
}

async function calulculate() {
  try {
    const first = await addtion();
    const second = await subtraction();
    const multipedata = { first, second };
    console.log(multipedata);
  } catch (e) {
    console.log(e);
  }
}

calulculate();
