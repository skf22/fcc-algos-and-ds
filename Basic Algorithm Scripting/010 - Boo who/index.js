const booWho = (bool) => (bool === true || bool === false ? true : false);

booWho(null);

// Alternative Solution - N.B. The below would not pass a test for booWho(null) (which is not one of the tests in freeCodeCamp despite being in the example code) because in Javascript, null is classed as an object, and therefore typeof(null) would not return a boolean, rather it would return "object". Nevertheless, it is an acceptable solution to the problem outside of this edge-case.

// const booWho = (bool) => typeof bool === "boolean";

// booWho(null);
