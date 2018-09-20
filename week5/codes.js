class Person {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      console.log('Hi, my name is ' + this.name);
    }
  }
  
  aPerson = new Person('John');
  aPerson.sayHi();
  
  /* ---------------------------------------------------------------- */
  
  const PI = 3.14;
  PI = 3.15; // error
  const person = {};
  person.a = 1; // adding new key to const object is ok
  
  if (true){
    const a = 2;
    let b = 3;
    var c = 4;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  console.log(a); // error, a is not defined (block scope)
  console.log(b); // error, a is not defined (block scope)
  console.log(c); // => 4 (global scope)
  
  /* ---------------------------------------------------------------- */
  
  function declare(){
    const a = 2;
    let b = 3;
    var c = 4;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  declare();
  console.log(a); // error, a is not defined (block scope)
  console.log(b); // error, a is not defined (block scope)
  console.log(c); // error, c is defined only in declare()
  
  /* ---------------------------------------------------------------- */
  
  /* ---------------------------------------------------------------- */
  
  // OUTPUT : undefined
  console.log(shape);
  var shape = "square";
  // OUTPUT : "square"
  console.log(shape);
  
  /* ---------------------------------------------------------------- */
  
  console.log(shape); // error
  function do_something(){
    // OUTPUT : undefined
    console.log(shape);
    var shape = "square";
    // OUTPUT : "square"
    console.log(shape);
  }
  do_something();
  
  /* ---------------------------------------------------------------- */
  
  function do_something(){
    console.log(shape); // error
    let shape = "square";
  }
  do_something();
  
  /* ---------------------------------------------------------------- */
  
  console.log(shape); // undefined
  if (true){
    // OUTPUT : undefined
    console.log(shape);
    var shape = "square";
    // OUTPUT : "square"
    console.log(shape);
  }
  
  /* ---------------------------------------------------------------- */
  
  // function expression
  const add = function (a, b) {
    return a + b;
  };
  
  function add2(a, b, c) {
    return a + b + c;
  } // no need ;
  
  function printSomething() {
    console.log("print");
  }
  
  // Invocation
  printSomething(); // => print
  console.log(add(1,2)); // => 3
  sum = add2(1,2,3);
  console.log(sum); // => 6
  
  /* ---------------------------------------------------------------- */
  
  // function expression
  const add = function (a, b) {
    return a + b;
  };
  
  function add2(a, b, c) {
    return a + b + c;
  } // no need ;
  
  // ES6: declaration, "arrow function", use => in place of function
  // keyword and move the argument list to the front
  const add3 = (a, b) => {
    console.log('a+b: ', a + b);
    return a + b;
  };
  
  // If there is only a return statement, you can remove {} and
  // return keyword
  const add1 = (a) => a + 1;
  
  console.log(add3(1, 2)); // => 3
  console.log(add1(1)); // => 2
  // array method .map applies the function passed to it to each
  // element of the array
  // array.map(function(currentValue, index, arr), thisValue)
  console.log([1, 2, 3].map(add1)); // => [2,3,4]
  
  /* ---------------------------------------------------------------- */
  
  let callback1 = (total) => {
    console.log('Oh! already finished! Total:', total);
  };
  let callback2 = (total) => {
    console.log('Wait so long. Boring. Total:', total);
  };
  
  let process = (cb) => {
    let total = 0;
    for (let i = 0; i < 100; i++) {
      total += i;
    }
    cb(total); // Call the callback when the long operation done.
  };
  
  process(callback1); // => Oh! already finished! Total: 4950
  process(callback2); // => Wait so long. Boring. Total: 4950
  
  /* ---------------------------------------------------------------- */
  
  setTimeout(
    function () {
      console.log('10 ms passed');
    }, 10
  );
  
  setTimeout(
    () => {
      console.log('10 ms passed');
    }, 10
  );
  
  // invoke anonymous function immediately
  // (self invoking)
  (function () {
    console.log('hey');
  })();
  
  (() => {
    console.log('hey');
  })();
  
  
  let obj = { key: 2, 'some-thing': 3 };
  const obj1 = {};
  const obj2 = {
    a: 1,
    b: 'hello',
    nested: {
      a: 'a',
      b: 'b'
    }
  };
  
  // reference
  console.log(obj2.nested.a);
  
  
  
  // assignment
  let obj = { key: 2, 'some-thing': 3 };
  obj['c'] = 3;
  console.log(obj); // {"key":2,"some-thing":3,"c":3}
  
  // retrieval
  obj['c']; // 3
  obj.c ;// 3
  const sum = obj.c + obj.b; // 5
  
  // re-assignment
  obj.c = 5;
  
  
  
  
  let obj = { key: 2, 'some-thing': 3 };
  obj['c'] = 3;
  console.log(obj); // {"key":2,"some-thing":3,"c":3}
  
  // deletion
  delete obj.c; // c field is now gone
  console.log(obj); // {"key":2,"some-thing":3}
  
  // getting array of keys
  console.log(Object.keys(obj)); // ['key', 'some-thing']
  
  // getting size
  console.log(Object.keys(obj).length); // 2
  
  // loops
  for (let i in obj){
    console.log(i, obj[i]); // key 2
                            // some-thing 3
  };
  
  
  
  // Objects are never actually copied
  // Only the reference is copied
  let obj = { b: 2, e: 4 };
  let obj3 = obj; // now obj and obj3 are actually the same thing
  console.log(obj); // {b:2, e:4}
  console.log(obj3); // {b:2, e:4}
  obj3.e = 5;
  console.log(obj); // {b:2, e:4}
  console.log(obj3); // {b:2, e:4}
  
  // functional pass by reference
  let obj4 = { a: 1 };
  function set0(obj) {
    // changes made to obj inside function
    // are carried to obj4 outside
    obj.a = 0;
  }
  set0(obj4);
  console.log(obj4); // {"a": 0}
  
  
  
  let obj = { b: 2, e: 4 };
  console.log("obj", obj);
  let obj5 = {};
  Object.assign(obj5, obj); // new obj5 = obj
  console.log("obj5", obj5);
  let obj6 = Object.assign({}, obj); // obj6 also = obj
  console.log("obj6", obj6);
  // copy obj to obj7 while also adding a new field x
  // to the front
  let obj7 = Object.assign({x: 123}, obj);
  console.log("obj7", obj7);
  
  obj5.b = 10;
  console.log(obj5)
  console.log(obj)
  
  
  
  // object can hold functions, can refer to the
  // object's members by 'this'
  let obj8 = {
    a: 5,
    b: 6,
    c: 7,
    addWithA: function(addition){
      return this.a + addition;
    },
    addWithAAndSomeVar(addition, somevar) { // ES6 shorthand
      return this[somevar] + this.addWithA(addition);
    }
  }
  console.log(obj8.addWithA(5)); // 10
  console.log(obj8.addWithAAndSomeVar(5, 'b')); // 16
  console.log(obj8.addWithAAndSomeVar(5, 'c')); // 17
  
  
  
  function addValue(value) {
    return value + 1;
  }
  let test = {
    ['a'+1+'b']: 'a',
    [addValue(3)]: 'b',
    fn: function() {
      return 'test';
    },
    fnShortHand(){
      return this.fn() + ' short hand';
    }
  };
  console.log(test);
  /*
  { '4': 'b',
    a1b: 'a',
    fn: [Function: fn],
    fnShortHand: [Function: fnShortHand] }
  */
  console.log(test.fn()); // test
  console.log(test.fnShortHand()); // test short hand
  
  
  
  // ES6: property value shorthand
  let male = 'man';
  let female = 'woman';
  let test2 = {
    male,
    female,
    // 'a' // throw: unexpected token errors
  }
  console.log(test2); // {"male":"man","female":"woman"}
  
  // ES6: destructuring
  let capitals = {
    Bangkok: 'Thailand',
    Tokyo: 'Japan',
    London: 'England'
  }
  let {Bangkok, Tokyo, London} = capitals;
  // equals to
  // let Bangkok = capital.Bangkok;
  // let Tokyo = capital.Tokyo;
  // let London = capital.London;
  console.log(Bangkok, Tokyo, London); // Thailand Japan England
  
  
  
  //Declaration
  let arr = [];
  let arr1 = [1,2,3];
  let arr2 = [1,2,'abc'];
  console.log(typeof(arr2[1])); // => number
  console.log(typeof(arr2[2])); // => string
  console.log(arr2); // [ 1, 2, 'abc' ]
  console.log(arr2.length); // => 3, use .length to get its size
  
  //Update array and add array at index.
  arr2[0] = 10;
  console.log(arr2); // => [ 10, 2, 'abc' ]
  arr2[3] = 11;
  console.log(arr2); // => [ 10, 2, 'abc', 11 ]
  
  // Length = Largest Index + 1
  let longarr = [];
  longarr.push(0);
  longarr[10000] = 0;
  // console.log(longarr); // => [ 0, undefined x 9999 ...  , 0]
  console.log(longarr.length); // => 10001
  
  
  
  //Delete element
  let arr3 = [1, 2, 3, 4, 5];
  delete arr3[2];
  console.log(arr3); // => [1, 2, undefined, 4, 5]
  console.log(arr3.length); // => 5
  
  //How to actually remove its element? and insert it in between?
  arr3.splice(2, 1); // splice({start index}, {amount of delete},
                     // {elements to insert ...});
  console.log(arr3); // => [1,2,4,5]
  arr3.splice(2, 1, 6, 7, 8);
  console.log(arr3); // => [1,2,6,7,8,5]
  
  //How to sub-array?
  let arr4 = [1, 2, 3, 4, 5];
  let arr5 = arr4.slice(1,3); // slice({start index},
                              // {end index (not inclusive)})
  console.log(arr4); // => [1,2,4,5]
  console.log(arr5); // => [2,3]
  
  
  
  //Push element
  let arr6 = [1, 2];
  arr6.push(3);
  arr6.push(null);
  console.log(arr6); // => [1,2,3,null]
  
  //Pop element
  console.log(arr6.pop()); // => null
  console.log(arr6); // => [1,2,3]
  
  //Unshift element
  arr6.unshift(0); // Push the first item of an array
  console.log(arr6); // => [0,1,2,3]
  
  //Shift element
  arr6.shift(); // Remove the first item of an array
  console.log(arr6); // => [1,2,3]
  
  
  
  //How to recognize array
  console.log(typeof([])); // => object
  console.log(typeof({})); // => object
  console.log(Array.isArray([])); // => true
  console.log(Array.isArray({})); // => false
  
  //Find element index in array
  let arr7 = [1,2,3,4];
  console.log(arr7.indexOf(2)); // => 1
  
  //String is a kind of array
  let str = 'Hello World!';
  console.log(str.indexOf('H')); // => 0
  
  
  
  let arr7 = [1,2,3,4];
  //Loops
  arr7.c = 999; //Assign element in array by accident...
  for (let key in arr7){ //Don't use! Something it can have error occurs!
                         // If array is not pure.
    console.log(key, arr7[key]); //=> 0 1
                                 //=> 1 2
                                 //=> 2 3
                                 //=> 3 4
                                 //=> c 999
  }
  
  for (let key=0;key<arr7.length;key++){ //Safer!
    console.log(key, arr7[key]); //=> 0 1
                                 //=> 1 2
                                 //=> 2 3
                                 //=> 3 4
  }
  
  console.log(arr7)
  console.log(arr7.length)
  
  
  
  let arr8 = [2,3,1,4];
  arr8.sort();
  console.log(arr8); // => [1,2,3,4]
  
  arr8.sort(function(a,b){return b-a});
  console.log(arr8); // => [4,3,2,1]
  
  /*
  arr.sort([compareFunction])
  compareFunction(a,b)
  returns < 0, a comes before b
  returns 0, order unchanged
  return > 0, b comes before a
  */
  
  
  //Reverse Array
  let arr9 = [0,2,1,'y','a','b','z'];
  arr9.sort();
  console.log(arr9); // => [ 0, 1, 2, 'a', 'b', 'y', 'z' ]
  arr9.reverse();
  console.log(arr9); // => [ 'z', 'y', 'b', 'a', 2, 1, 0 ]
  
  
  
  arr9 = [ 'z', 'y', 'b', 'a', 2, 1, 0 ];
  
  //Transform to String
  console.log(arr9.join('|')); // => 'z|y|b|a|2|1|0'
  
  //Transfrom String to Array
  let str1 = "hello world! every body";
  console.log(str1.split(" ")); // => [ 'hello', 'world!', 'every', 'body' ]
  
  //2D, 3D Array...
  let array2d = [[1,2,3],[4,5,6],[7,8,9]];
  let array3d = [[[1,2,3],[4,5,6],[7,8,9]],[[0,0,0],[0,0,0],[0,0,0]]];
  array2d[1] = [10,11,12];
  array2d[1][1] = 13;
  console.log(array2d); // => [ [ 1, 2, 3 ], [ 10, 13, 12 ], [ 7, 8, 9 ] ]
  
  
  
  let array2d = [[1,2,3],[4,5,6],[7,8,9]];
  array2d[1] = [10,11,12];
  array2d[1][1] = 13;
  
  //ForEach: Iterate over the member in Array
  array2d.forEach((item, key) => {
    console.log(item, key); // => [ 1, 2, 3 ] 0
                            //    [ 10, 13, 12 ] 1
                            //    [ 7, 8, 9 ] 2
  });
  array2d.forEach((item) => {
    console.log(item); // => [ 1, 2, 3 ]
                       //    [ 10, 13, 12 ]
                       //    [ 7, 8, 9 ]
  });
  
  
  
  //ES6: Array Spreads
  let s1 = [1,2,3];
  let s2 = [4,5,6];
  let s3 = [...s1, ...s2];
  let s4 = [...s2, 10, ...s1];
  console.log(s3); // => [ 1, 2, 3, 4, 5, 6 ]
  console.log(s4); // => [ 4, 5, 6, 10, 1, 2, 3 ]
  
  //ES6: Array.from, Use for copy array, or convert array-like
  //object into an array
  console.log(Array.from(['a','b','c'])); // => ['a','b','c']
  console.log(Array.from("abc")); // => ['a','b','c']
  
  //ES6: Array.of, Create an array with given arguments as elements.
  console.log(Array.of(1)); // => [1]
  console.log(Array.of(1,2,3)); // => [1,2,3]
  console.log(Array.of([1,2],3)); // => [[1,2],3]
  
  
  
  //ES6: [].fill({input element}, {start index},
  // {end index not inclusive}), Fill array with value
  console.log(new Array(10).fill(1)); // => [1,1,1,1,1,1,1,1,1,1]
  let arrFill = [1,2,3,4,5,6,7,8,9,10];
  console.log(arrFill.fill('a',3,5)); // => [1,2,3,'a','a',6,7,8,9,10]
  
  //ES6: [].find(condition function), return element of array that
  //     match the condition
  //     [].findIndex(condition function), return index of array that
  //     match the condition
  console.log([1,2,10,20,30].find(ele => ele>2)); // => 10
  console.log([1,2,10,20,30].findIndex(ele => ele>2)); // => 2
  
  //ES6: [].map, transfrom arrays
  let source = [1,2,3,4,5];
  console.log(source.map(x => x*x)); // => [ 1, 4, 9, 16, 25 ]
  console.log(source.map(x => x+10)); // => [ 11, 12, 13, 14, 15 ]
  
  
  
  //ES6: [].reduce, reduce arrays to values
  source = [1,2,3,4,5];
  let sum = source.reduce((accumulator, item, index) => {
    return accumulator+item
  });
  let product = source.reduce((accumulator, item, index) => accumulator*item);
  let concat = source.reduce((accumulator, item, index) => ''+accumulator+item);
  console.log(sum); // => 15
  console.log(product); // => 120
  console.log(concat); // => 12345
  
  //ES6: [].filter, filter some element in arrays
  var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  const result = words.filter(word => word.length > 6);
  console.log(result);
  // ["exuberant", "destruction", "present"]
  
  
  //Declaration
  const firstName = 'Tim';
  const lastName = 'Cook';
  const position = 'CEO of Apple ';
  
  //Concatenation String
  const fullName = firstName+' '+lastName;
  
  //Newline
  const fullNameWithPosition = fullName+'\n'+position;
  
  console.log(fullName); // => Tim Cook
  console.log(fullNameWithPosition);
  // => Tim Cook
  //    CEO of Apple
  
  
  //ES6: Template Strings
  const firstName = 'Tim';
  const lastName = 'Cook';
  const position = 'CEO of Apple ';
  
  const fullName2 = `${firstName} ${lastName}`;
  const fullNameWithPosition2 = `${fullName2}\n${position}`;
  // newline using template
  const fullNameWithPosition3 = `${fullName2}
  ${position}`;
  
  console.log(fullName2); // => Tim Cook
  console.log(fullNameWithPosition2);
  // => Tim Cook
  //    CEO of Apple Technology
  console.log(fullNameWithPosition3);
  // => Tim Cook
  //    CEO of Apple Technology
  
  
  //Convert Number to String
  const PI = 3.1428;
  console.log(`PI = ${PI.toFixed(2)}`); // => PI = 3.14
  // Only 2 demical places
  
  //Convert from String to Number
  let sum = parseInt('3') + parseFloat('3.14');
  console.log(sum); // => 6.140000000000001
  console.log(sum.toFixed(2)); // => 6.14
  
  
  
  // indexOf, lastIndexOf
  console.log('this is an apple'.indexOf('this')); // => 0
  console.log('this is an apple'.indexOf('is')); // => 2 (at this)
  console.log('this is an apple'.indexOf('mac')); // => -1
  console.log('this is an apple'.lastIndexOf('is')); // => 5 (at is)
  
  // Search
  console.log('this is an apple'.search(/a/)); // => 8
  
  // Replace
  console.log('this is an apple'.replace(/a/g,'b')); // => this is bn bpple
  
  // Compare
  console.log('ABC' === 'ABC'); //true
  console.log('ABC' === 'abc'); //false
  console.log('ABC' == 'ABC'); //true
  console.log('ABC' == 'abc'); //false
  console.log('ABC' != 'ABC'); //false
  console.log('abc' < 'z'); //true
  
  
  
  // charAt
  console.log('this is an apple'.charAt(0)); // => t
  console.log('this is an apple'.charAt(1)); // => h
  console.log('this is an apple'[2]); // => i
  
  // slice(), toLowerCase(), toUpperCase(), trim()
  console.log('this is an apple'.slice(5, 8)); // => is
  console.log('This is an apple'.toLowerCase()); // => this is an apple
  console.log('this is an apple'.toUpperCase()); // => THIS IS AN APPLE
  console.log('  this is an apple  '.trim()); // => this is an apple
  
  //ES6: Text Includes.
  console.log('this is an apple'.includes('apple')); // => true
  console.log('this is an apple'.includes('mac')); // => false
  
  
  
  //ES6: Text startsWith
  console.log('this is an apple'.startsWith('this')); // => true
  console.log('this is an apple'.startsWith('is')); // => false
  
  //ES6: Text endsWith
  console.log('this is an apple'.endsWith('apple')); // => true
  console.log('this is an apple'.endsWith('an')); // => false
  
  //ES6. Text repeats
  console.log('x'.repeat(0)); // =>
  console.log('x'.repeat(1)); // => x
  console.log('x'.repeat(10)); // => xxxxxxxxxx
  
  
  
  // ES6: syntax sugar improves classes
  class Cat {
    constructor (name, color) {
      this.name = name;
      this.color = color;
    }
  
    present () {
      return `${this.name} is ${this.color}`;
    }
  }
  
  // ES6: Extend
  class Tabby extends Cat {
    constructor (name) {
      super(name, ['Orange', 'White']);
    }
  
    present () {
      return `${super.present()} and she's cool`;
    }
  }
  
  var cat = new Cat('Mici', 'dark brown');
  console.log(cat.present()); // => Mici is dark brown
  let cat2 = new Tabby('Friskies Cat');
  console.log(cat2.present()); // Friskies Cat is Orange,
                              // White and she's cool
  
  // unfortunately we don't have private/public
  cat2.color = 'green'
  console.log(cat2.present());
  
  
  
  $.getJSON("www.example.com", function (json){
      console.log(json);
  });
  console.log("I come after the request");
  
  
  
  // run getJSON
  $.getJSON("www.example.com", function (json){
      console.log(json);
  });
  
  // don't wait for getJSON to finish before running this line
  console.log("I come after the request");
  
  
  
  <html>
  <head>
    <title></title>
  </head>
  <body>
    <button id=myButton>Click me</button>
  <script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
  <script type="text/javascript">
    $("#myButton").on("click", function(){
      // in this function everything runs synchronously
      let foo = () => {throw new Error('Opps!')};
      let bar = () => {
        for (var i = 0; i <= 1000; i++){
          console.log("printing many many times");
        }
        foo();
      }
      let baz = () => {bar();}
      console.log("before baz called");
      baz();
      console.log("after baz called");
    });
    function do_something(){
      console.log("this has nothing to do with the button");
    }
    do_something();
  </script>
  </body>
  </html>
  
  
  
  doSomething(function(result) { // cb of doSomething calls doSomethingElse
    doSomethingElse(result, function(newResult) { // cb of doSomethingElse calls doThirdThing
      doThirdThing(newResult, function(finalResult) { // cb of doThirdThing shows finalResult
        console.log('Got the final result: ' + finalResult);
      }, failureCallback);
    }, failureCallback);
  }, failureCallback);
  
  
  
  // using callbacks
  function successCallback(result) {
    console.log("It succeeded with " + result);
  }
  
  function failureCallback(error) {
    console.log("It failed with " + error);
  }
  
  doSomething(successCallback, failureCallback);
  
  // using promise
  let promise = doSomething(); //doSomething returns a promise
  promise.then(successCallback, failureCallback); // attach callback using .then
  
  // or simply
  doSomething().then(successCallback, failureCallback);
  
  
  
  
  // the then function returns a new promise, different from the original:
  let promise = doSomething(); // doSomething itself returns a promise
  let promise2 = promise.then(successCallback, failureCallback);
  
  // or
  
  let promise2 = doSomething().then(successCallback, failureCallback);
  
  // This second promise represents the completion not just of doSomething(),
  // but also of the successCallback or failureCallback you passed in
  
  
  
  doSomething().then(function(result) {
    return doSomethingElse(result);
  })
  .then(function(newResult) {
    return doThirdThing(newResult);
  })
  .then(function(finalResult) {
    console.log('Got the final result: ' + finalResult);
  })
  .catch(failureCallback);
  
  
  
  // It's possible to chain after a failure, i.e. a catch,
  // which is useful to accomplish new actions even after
  // an action failed in the chain.
  
  new Promise((resolve, reject) => {
      console.log('Initial');
  
      resolve();
  })
  .then(() => {
      throw new Error('Something failed');
  
      console.log('Do this'); // never runs
  })
  .catch(() => {
      console.log('Do that');
  })
  .then(() => {
      console.log('Do this whatever happened before');
  });
  
  // Initial
  // Do that
  // Do this whatever happend before
  
  
  
  let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done!"
    setTimeout(() => resolve("done!"), 1000);
  });
  
  
  
  let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function(){
      resolve("Success!"); // Yay! Everything went well!
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
  });
  
  
  
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // .catch(f) is the same as promise.then(null, f)
  promise.catch(function(error){
      console.log(error);
  }); // shows "Error: Whoops!" after 1 second
  
  
  
  function myAsyncFunction(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }