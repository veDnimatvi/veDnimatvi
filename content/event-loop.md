---
slug: event-loop
title: Event Loop trong javascript
category: Javascript
description: "Nguyên tắc và cách hoạt động của Event Loop trong javascript"
img: https://blog.alexdevero.com/wp-content/uploads/2020/12/21-12-20-the-javascript-event-loop-explained-blog.jpg
date: 16 May 2022
---
### Call Stack trong Event Loop là gì?

Mỗi khi 1 hàm được gọi thì nó sẽ được đẩy vào một hàng đợi đặc biệt gọi là stack. Stack là 1 hàng đợi kiểu LIFO(Last In Firt Out) nghĩa là vào sau cùng thì ra đầu tiên. Một hàm chỉ được lấy ra khỏi stack khi nó đã hoàn thành và return.

Ví dụ: Nếu trong một hàm (Foo) có triệu gọi một hàm khác (Bar) thì trạng thái hiện tại của hàm Foo được cất giữ trong stack và hàm Bar sẽ được chèn vào stack. Vì đây là hàng đợi LIFO nên Bar sẽ được xử lý trước Foo. Khi Bar xong và return thì mới đến lượt Foo được xử lý. Khi Foo được xử lý xong và return thì Stack rỗng và sẽ đợi các hàm tiếp theo được đẩy vào.

```
function Bar(){

}

function Foo(){
    Bar();
}

Foo()
```

### Callback Queue trong Event Loop là gì?

Chứa các đối tượng làm việc theo cơ chế FIFO(First In First Out) nghĩa là vào trước thì ra trước.

### Cách hoạt động của Event Loop

Nhiệm vụ của Event loop rất đơn giản đó là đọc Stack và Event Queue. Nếu nhận thấy Stack rỗng nó sẽ nhặt Event đầu tiên trong Event Queue và Handler (callback hoặc listener) gắn với event đó và đẩy vào Stack.

**_Đặc điểm của việc thực thi hàm trong JS là sẽ chỉ dừng lại khi hàm return hoặc throw exception._**

Điều này có nghĩa là trong khi hàm đang chạy thì sẽ không có một hàm khác được chạy, dữ liệu tạm của hàm cũng sẽ không bị thay đổi bởi một hàm khác hay cũng không bị dừng lại cho đến khi hoàn thành (ngoại trừ yield trong ES6).

JS Runtime còn thao tác với một callback queue hay event queue. Event queue này khác với stack ở chỗ nó là queue kiểu FIFO (First In First Out).
Mỗi khi có một Event được tạo ra, ví dụ user click vào một Button thì một Event sẽ được đẩy vào Event queue cùng với một handler (event listener) gắn với nó. Nếu một Event không có listener thì nó sẽ bị mất và không được đẩy vào Event queue.

### Ví dụ Event Loop

```
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();
```

![](https://res.cloudinary.com/practicaldev/image/fetch/s--BLtCLQcd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif14.1.gif)

Trình tự thực thi như sau:

- Stack nhận lần lượt các hàm theo thứ tự bar() vào trước đến foo() rồi đến baz()
- Hàm bar() được gọi và trả về 1 hàm setTimeout().
- Hàm setTimeout() được thêm vào Web API. hàm bar() thực thi xong và được xoá khỏi stack.
- Trong khi chờ đợi hàm setTimeout chạy, Foo() được gọi và log ra "First". Foo() thực hiện xong và được xoá khỏi stack. Tiếp tục baz() được gọi. Đồng thời lúc này 500s đã hết hàm setTimeout được thêm vào callback queue. Bất kì web APIs nào cũng sẽ đưa callback queue khi nó hoàn thành.
- Baz() log ra "Third". Event Loop phát hiện stack trống sau khi Baz() được hoàn thành và xoá khỏi stack. Vậy nên hàm setTImeout được đẩy vào stack.
- Hàm setTimeout log ra "Second".

### Kết luận

- Công việc của Event loop là theo dõi stack(có cơ chế LIFO) và ngó qua Task queue(có cơ chế FIFO), nếu stack trống thì lấy callback trong task queue đẩy vào stack.
- Event Queue chỉ được đọc khi Stack trống rỗng.
- Bất kì web APIs nào cũng sẽ đưa callback queue khi nó hoàn thành.
- Tham số thứ 2 của setTimeout là thời gian tối thiểu để một Event được đẩy vào Stack và chạy chứ không phải là thời gian chính xác nó sẽ được chạy.
