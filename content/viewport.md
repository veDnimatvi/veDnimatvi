---
slug: viewport
title: Viewport
category: HTML
description: Cách sử dụng viewport trong HTML
img: https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/meta-viewport-html5-t1.png
date: 6 April 2023
---

Viewport là một thuộc tính của thẻ <meta> trong HTML được sử dụng để điều chỉnh kích thước của viewport trên các thiết bị di động. Viewport là vùng hiển thị trên màn hình của thiết bị di động mà trình duyệt sẽ sử dụng để hiển thị nội dung của trang web khi trang web được tải trên một thiết bị di động.
<br>

Một số trang web có thiết kế không phù hợp với các kích thước viewport của các thiết bị di động khác nhau, dẫn đến việc nội dung bị cắt, thu nhỏ hoặc không hiển thị đầy đủ. 

Ta có thể sử dụng cú pháp sau để chỉ định rằng viewport sẽ có chiều rộng bằng với chiều rộng của thiết bị và không được thu nhỏ hoặc phóng to. 
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### Các thông số chính được sử dụng trong thuộc tính viewport bao gồm:
- width=device-width chỉ định rằng chiều rộng của viewport sẽ bằng với chiều rộng của thiết bị. Nếu giá trị được cung cấp là một số, nó sẽ được tính bằng đơn vị pixel. Nếu giá trị là device-width, nó sẽ được tính bằng chiều rộng của thiết bị
- height: Chỉ định chiều cao của viewport. Nếu giá trị được cung cấp là một số, nó sẽ được tính bằng đơn vị pixel.
- initial-scale=1.0 chỉ định rằng tỷ lệ ban đầu của viewport sẽ là 1, tức là không thu nhỏ hoặc phóng to. 
- maximum-scale: Chỉ định tỷ lệ tối đa mà người dùng có thể phóng to viewport. Nếu giá trị là 1.0, tức là không cho phép phóng to
- minimum-scale: Chỉ định tỷ lệ tối thiểu mà người dùng có thể thu nhỏ viewport. Nếu giá trị là 1.0, tức là không cho phép thu nhỏ
- user-scalable: (yes/no) Chỉ định liệu người dùng có thể phóng to hoặc thu nhỏ viewport hay không. Nếu giá trị là no, người dùng sẽ không thể phóng to hoặc thu nhỏ
- shrink-to-fit: (yes/no) Chỉ định rằng trang web sẽ được tự động thu nhỏ để phù hợp với kích thước của viewport, đảm bảo rằng nội dung sẽ hiển thị đầy đủ trên màn hình của thiết bị di động.
- viewport-fit:cover Chỉ định cách thức điều chỉnh kích thước của viewport để hiển thị trang web đúng cách trên các thiết bị di động. Có ba giá trị có thể được sử dụng: auto, contain, và cover.

#### Thuộc tính viewport rất hữu ích trong việc thiết kế trang web cho thiết bị di động, giúp đảm bảo nội dung được hiển thị đúng cách trên các kích thước và tỷ lệ khác nhau của viewport trên các thiết bị di động.
