function first() {
  const fun1 = function () {
    console.log("Function1 inside");
  };
  const fun2 = function () {
    console.log("Function2 inside");
  };
  const fun3 = function () {
    console.log("Function3 inside");
  };
  const fun4 = function (a, b) {
    return a + b;
  };

  fun1();
  fun2();
  fun3();
  console.log(fun4(10, 20));
}

first();

/* callback function */
function country() {
  console.log("India County");
}

function state() {
  console.log("State is Gujrat");
    setTimeout(()=>{
        country();
    },5000)
}

function city(callback) {
  console.log("City is gujrat"); /* First call this function */
  callback(); /* After Call state function */
}

city(state);
