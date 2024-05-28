---
slug: ssr-vs-csr
title: Server side rendering vs Client side rendering
category: Web Browser
description: Cơ chế hoạt động của Server side rendering vs Client side rendering
date: 3 Aug 2023
---
## Server Side Rendering
### Cơ chế hoạt động
- Người dùng gửi một yêu cầu tới website( Thông thường thông qua trình duyệt).
- Phía server kiểm tra xử lý và chuẩn bị nội dung HTML để trả về cho client.
- Các đoạn HTML đã biên dịch được gửi tới Client.
- Trình duyệt tải về HTML và làm các trang có thể nhìn thấy với người dùng.
- Trình duyệt sau đó tải về Javasciprt(JS) và tiến hành thực thi JS, nó làm cho trang web có thể tương tác.

<img src="https://images.viblo.asia/5627c9c6-680f-444e-b95f-cb003003c4f9.png" />

Trong quá trình này, tất cả gánh nặng của việc lấy nội dung động, chuyển chúng thành HTML, gửi chúng tới trình duyệt đều ở phía server. Khi Ctrl + U ta có thể nhìn thấy được hết nội dụng của trang web. Chính vì vậy boot engine của google có thể đọc được nội dung của trang web nên việc tối ưu hóa SEO là điểm mạnh của ssr.

Việc chịu trách nhiệm cho việc render HTML hoàn thiện dẫn tới server tốn bộ nhớ và tài nguyên để xử lí. Do đó, server side rendering làm tăng thời gian tải trang khi so sánh với các trang tĩnh (các trang web không render các nội dung động )

## Client Side Rendering
### Cơ chế hoạt động
- Người dùng gửi request tới webiste
- Máy chủ sẽ trả về một tệp HTML cơ bản, chứa các tệp CSS và JavaScript cần thiết để tạo ra trang web.
- Trình duyệt của người dùng tải các tệp CSS và JavaScript. Sau khi trình duyệt lấy JS về, nó sẽ tạo các yêu cầu API thông qua Ajax và lấy về các nội dung động và xử lí chúng để render ra nội dung cuối cùng.
- Sau khi server phản hồi, nội dung cuối cùng sẽ được render trên trình duyệt người dùng.

<img src="https://images.viblo.asia/8bb0712f-0108-4fc5-8960-a9d6b6d5b701.png" />

Trong client-side rendering, trình duyệt của người dùng sẽ phải chịu trách nhiệm cho việc tạo ra nội dung HTML và hiển thị trang web đầy đủ. Sử dụng JavaScript để tạo ra nội dung HTML có thể làm chậm tốc độ tải trang web. Nên lần đầu tiên tải trang csr sẽ tải lâu hơn ssr. Khi Ctrl + U, csr vẫn sẽ hiển thị ra một template html nhưng nó sẽ chứa 1 thẻ div root rỗng và một file bundle js, file này làm nhiệm vụ render html bằng js. vậy boot engine của gg sẽ không nhìn thấy nội dung của trang web dẫn đến việc tối ưu hóa SEO sẽ không có.

Từ lần tải trang thứ 2 bởi vì các đoạn sciprt cần thiết đã được load trong CSR, thời gian tải là ít hơn với CSR và csr sẽ k bị load lại trang cho mỗi hành động của người dùng. Còn với SSR, một vòng lặp đầy đủ như lần tải đầu được lặp lại.
