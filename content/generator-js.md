---
slug: generator-js
title: Generation function, Interables và Iterators
category: Javascript
description: Cách sử dụng generation function, interables và iterators trong JavaScript
date: 3 Aug 2023
---
## Generator function
Generator function là một loại hàm đặc biệt trong JavaScript, cho phép bạn tạm dừng và tiếp tục thực thi hàm theo ý muốn. Khi bạn gọi một generator function, nó sẽ trả về một iterator object. Bạn có thể sử dụng iterator này để lấy ra các giá trị được trả về từ hàm, hoặc để gửi các giá trị vào hàm.

Một trong những ứng dụng phổ biến của generator function là trong Redux Saga, một thư viện middleware cho Redux giúp quản lý các tác vụ bất đồng bộ. Trong Redux Saga, các Saga được viết dưới dạng generator function và được sử dụng để xử lý các tác vụ như gọi API, xử lý WebSocket, hoặc xử lý các tác vụ đồng bộ trên một luồng riêng biệt.

```
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = myGenerator();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }
```

Trong ví dụ trên, chúng ta đã khai báo một generator function myGenerator và sử dụng nó để tạo ra một iterator object. Chúng ta sử dụng phương thức next của iterator để lấy ra các giá trị được sinh ra từ generator function theo thứ tự. Mỗi lần gọi next, generator function sẽ tiếp tục thực thi cho đến khi gặp lệnh yield. Khi gặp yield, hàm sẽ tạm dừng và trả về giá trị được định nghĩa trong lệnh yield. Khi gọi next lần tiếp theo, hàm sẽ tiếp tục thực thi từ chỗ nó đã tạm dừng trước đó.

Một tính năng khác của generator function là khả năng tạo ra các giá trị vô hạn. Điều này rất hữu ích trong việc tạo ra các tác vụ định kỳ hoặc xử lý các tác vụ liên quan đến dữ liệu vô hạn như stream data. Ví dụ:
```
function* countUp() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const counter = countUp();
console.log(counter.next()); // { value: 0, done: false }
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
```

Trong ví dụ trên, chúng ta đã tạo ra một generator function countUp để đếm số lên vô hạn. Bằng cách sử dụng vòng lặp vô hạn và lệnh yield, chúng ta có thể tạo ra các giá trị vô hạn một cách dễ dàng.

Một tính năng khác của generator function là khả năng tạo ra các hàm con (nested function). Điều này rất hữu ích trong việc tổ chức mã và tránh việc sử dụng các biến toàn cục. Ví dụ:
```
function* outerGenerator() {
  const x = yield;
  
  function innerFunction() {
    console.log(x);
  }
  
  innerFunction();
}

const generator = outerGenerator();
generator.next();
generator.next('Hello, world!'); // log ra "Hello, world!"
```
Trong ví dụ trên, chúng ta đã tạo ra một generator function outerGenerator và sử dụng nó để tạo ra một hàm con innerFunction. Biến x được truyền vào generator function thông qua lệnh yield, và được sử dụng trong hàm con innerFunction.

## Interables và Iterators
<b>Iterator (vòng lặp) là một đối tượng đại diện cho một chuỗi các giá trị có thể lặp qua. Iterator bao gồm hai phương thức quan trọng là next() và return(). Phương thức next() trả về giá trị tiếp theo trong chuỗi và di chuyển con trỏ của iterator đến phần tử tiếp theo, trong khi phương thức return() dùng để kết thúc việc lặp qua chuỗi giá trị.</b>

<b>Iterable (đối tượng có thể lặp qua) là một đối tượng có thể tạo ra một iterator bằng cách triển khai phương thức có tên là [Symbol.iterator]() và trả về một iterator object. Phương thức [Symbol.iterator]() phải trả về một iterator object có chứa hai phương thức quan trọng next() và return().</b>
```
const myArray = [1, 2, 3];

const iterator = myArray[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```
Ở đây, chúng ta đã sử dụng phương thức [Symbol.iterator]() của mảng myArray để tạo ra một iterator object, và sử dụng phương thức next() để lặp qua các phần tử của mảng.
