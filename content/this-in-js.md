---
slug: this-in-js
title: Con trỏ This trong javascript
category: Javascript
description: "Tìm hiểu và học cách sử dụng con trỏ this trong Javascript"
img: https://codelearn.io/Upload/Blog/con-tro-this-trong-javascript-63733766553.6552.jpg
date: 12 May 2022
---
Từ khóa this trong js đề cập đến đối tượng mà nó thuộc về.

- Trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức.
- Đứng ngoài phương thức , this tham chiếu đến đối tượng global

### Lưu ý

- this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
- this trong hàm là undefined khi ở strict mode
- Các phương thức bind() call() apply() có thể tham chiếu this tới đối tượng khác

### Ví dụ trong Object

```
const myPhone = {
	name: 'IP XS Max',
	color: 'black',

	// Phương thức - Method
	takePhote(){
		console.log(this); /// this sẽ là myPhone có 2 thuộc tính name và color
	},
	objChild: {
		name: 'Child Object',
		methodChild(){
			console.log(this); // this sẽ là objChild có 1 thuộc tính name = 'Child Object'
		}
	}
}
```

### Ví dụ trong 1 đối tượng

```
function Car(name, color , weight){
	this name = name;
	this.color = color;
	this.weight = weight;
	this.run = function(){
		console.log('Running...', this); //this vẫn sẽ là đối tượng car với giá trị khởi tạo là ('Mercedes', 'black', 400)
	}
}

const mercedes = new Car('Mercedes', 'black', 400);
console.log(mercedes.run())
```

### Ví dụ trong handler Dom

```
const btn = document.querySelector('button')

button.onClick = function(){
	console.log(this); // vậy đối tượng this ở đây là 1 element chính xác là button có một phương thức là click
	// kết quả sẽ là <button>Click Me</button>
	console.dir(this); // dùng dir để trả về 1 obj button
}
```

### Ví dụ trong Function

```
function myFuntion(){
	console.log(this)
}

myFuntion(); // hàm này không thuộc vào 1 Object nào cả => this sẽ là object windown. đối tượng lớn nhất trong trình duyệt web
```

Trong Strict Mode

```
'use strict'
function myFuntion(){
	console.log(this)
}

myFuntion(); // trong strict mode từ khóa this của 1 hàm bình thường (không thuộc vào 1 Obj nào cả) thì sẽ là undefined
```

Nếu vẫn muốn trả về đối tượng window ?

```
'use strict'
function myFuntion(){
	console.log(this)
}

window.myFuntion(); // this sẽ là đối tượng window
```

### Ví dụ trong Prototype

```
function Car(name, color , weight){
	this name = name;
	this.color = color;
}

Car.prototype.run = function () {
	// this ở đây nó sẽ là đối tượng porsche hoặc mercedes khai báo ở dưới
	function test(){
		console.log(this); // this ở đây thuộc vào 1 hàm không phải là phương thức. thì this ở đây sẽ là đối tượng window
	}

	test()
}

const porsche = new Car('Porsche', 'blink');
const mercedes = new Car('Mercedes', 'black');
```

### Ví dụ trong arrow function

Arrow funtion không có this. Nó sẽ lấy this ở phạm vi bên ngoài gần nhất chứa nó.

```
function Car(name, color , weight){
	this name = name;
	this.color = color;
}

Car.prototype.run = function () {
	// this ở đây nó sẽ là đối tượng porsche hoặc mercedes khai báo ở dưới
	const test = () => {
		console.log(this); // // this ở đây nó sẽ là đối tượng porsche hoặc mercedes khai báo ở dưới
	}

	test()
}

const porsche = new Car('Porsche', 'blink');
const mercedes = new Car('Mercedes', 'black');
```