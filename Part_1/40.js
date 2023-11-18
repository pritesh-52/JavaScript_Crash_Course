/* Function inside function */

function App() {
    const Addition = (a, b) => {
        return a + b;
    }
    const Subtraction = (c, d) => {
        return c - d;
    }

    const multipication = (e, f) => {
        return e * f;
    }

    console.log(Addition(10, 20));
    console.log(Subtraction(20, 10));
    console.log(multipication(10, 20));
}

App();