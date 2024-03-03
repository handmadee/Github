// Github Quản lý mã nguồn  
// Git là hệ thống kiểm soát code của các nhiều dự án  
// Github là dịch vụ lưu trữ mã nguồn trực tuyến
// Git là một hệ thống quản lý mã nguồn phân tán, nghĩa là nó không chỉ lưu trữ mã nguồn mà còn lưu trữ toàn bộ lịch sử thay đổi của mã nguồn.


// Các nhánh github cơ bản 
// Các nhánh chính trong quản lý mã nguồn với Git 
// master: Nhánh chính của dự án, chứa mã nguồn ổn định và đã được triển khai.
// develop: Nhánh phát triển, chứa mã nguồn mới nhất và đang được phát triển.
// feature: Nhánh chứa các tính năng đang phát triển.
// hotfix: Nhánh chứa các sửa lỗi nhanh.
// release: Nhánh chứa các phiên bản sẽ được phát hành.
// support: Nhánh chứa các tính năng hỗ trợ.
// version: Nhánh chứa các phiên bản của ứng dụng.
// build: Nhánh chứa các bản build của ứng dụng.
// ci: Nhánh chứa các cấu hình liên kết liên tục

// Các lệnh tương tác với git cơ bản 

// git init : khởi tạo git
// git clone : sao chép git
// git add : thêm file
// *************************
// git commit : lưu file
// fix : sửa lỗi
// feat : thêm tính năng
// refactor : tái cấu trúc code
// style : thay đổi style
// docs : thay đổi tài liệu
// test : thêm test
// chore : thay đổi cấu hình
// perf : cải thiện hiệu suất <Tăng tốc độ performance>
// revert : quay lại commit trước đó

// *************************
// git push : đẩy file lên server
// git pull : kéo file về
// git branch : tạo nhánh
// git branch -d : xóa nhánh
// git branch -a : xem tất cả nhánh
// git checkout : chuyển nhánh
// git merge : gộp nhánh
// git rebase : sắp xếp lại commit
// git tag : đánh dấu commit
// git log : xem lịch sử commit
// git status : xem trạng thái 
// git diff : xem thay đổi
// git reset : xóa commit
// các tag Commit cơ bản 



// 1 cấu trúc file cơ bản là 
// file md: là file có các instruction "Readme.md" 
// file html: là file chứa code html
// file js: là file chứa code
// work flow: là file chứa các hướng dẫn làm việc
// fixed  issue  // sửa đổi các cấu trúc 



// git log : xem lịch sử commit
// git show : xem chi tiết commit
// git diff : xem thay đổi của file
// git blame : xem thay đổi của từng dòng code
// git reset : xóa commit
// git revert : hoàn tác commit
// git checkout : chuyển nhánh hoặc file
// git stash : lưu trữ tạm thời
// git cherry-pick : chọn commit
// git rebase : sắp xếp lại commit
// git tag : đánh dấu commit
// git bisect : tìm kiếm lỗi
// git reflog : xem lịch sử các lệnh
// git clean : xóa file không cần thiết
// git config : cấu hình git
// git grep : tìm kiếm trong file
// git blame : xem thay đổi của từng dòng code
// git status : xem trạng thái
// git rev-parse --show-toplevel : xem đường dẫn thư mục
// git remote -v : xem remote




// Git commit theo chuẩn 
// 1. Tên commit không quá 50 ký tự
// 2. Tên commit không viết hoa
// 3. Tên commit không có dấu câu
// 4. Tên commit không có dấu cách ở đầu
// hạn chế 2 commit cùng một lúc


// type(scope): subject // nội dung commit 
// type: loại commit
// scope: phạm vi commit
// subject: nội dung commit

// git commit -m "fix(footer): fix footer" // sửa lỗi footer
// git commit -m "feat(header): add header" // thêm header
// git commit -m "refactor(header): refactor header" // tái cấu trúc header
// git commit -m "style(header): change style header" // thay đổi style header
// git commit -m "docs(header): change docs header" // thay đổi tài liệu header
// git commit -m "test(header): add test header" // thêm test header
// git commit -m "chore(header): change chore header" // thay đổi cấu hình header



// pull request là gì 
// là yêu cầu gộp code từ nhánh này sang nhánh khác 
// Pull Request là một khái niệm trong quản lý mã nguồn với Git, thường được sử dụng trong các dự án phát triển phần mềm. Khi bạn muốn đóng góp vào một dự án, bạn sẽ tạo một nhánh mới và thực hiện các thay đổi của mình. Sau đó, bạn sẽ gửi một "Pull Request" đến dự án gốc, yêu cầu họ xem xét và hợp nhất (merge) các thay đổi của bạn vào nhánh chính của dự án. 

// issue là gì 
// là vấn đề cần giải quyết
// Issue là một khái niệm trong quản lý mã nguồn với Git, thường được sử dụng trong các dự án phát triển phần mềm. Khi bạn gặp một vấn đề nào đó trong mã nguồn, bạn có thể tạo một "Issue" để mô tả vấn đề đó. Các thành viên khác trong dự án có thể thảo luận và đóng góp ý kiến để giải quyết vấn đề đó. 

// improve "Cải thiện"
// feature "Tính năng "
// fix "Sửa lỗi"
// refactor "Tái cấu trúc"
// style "Thay đổi style"
// docs "Thay đổi tài liệu" 
// test "Thêm test"
// chore "Thay đổi cấu hình"
// perf "Cải thiện hiệu suất"
// revert "Quay lại commit trước đó"


// hotfix "Sửa lỗi nhanh"và bắt buộc phải merge vào master ngay lập tức 
// release "Phát hành"
// support "Hỗ trợ"
// version "Phiên bản"
// build "Xây dựng"
// ci "Liên kết liên tục"
// deploy "Triển khai"
// release "Phát hành"
// staging "Trình diễn"
// cái code mà bạn viêt ra phải được giám sát và kiểm tra gọi là code review gọi là
// unit test là gì
// là kiểm tra từng phần nhỏ của code
// Unit Test là một phương pháp kiểm thử phần mềm, trong đó các đơn vị hoặc thành phần của phần mềm được kiểm tra. Mục tiêu của kiểm thử này là xác định xem mỗi phần của phần mềm hoạt động đúng như dự kiến hay không.
// integration test là gì
// là kiểm tra tính tương tác giữa các phần của code

// tại sao chúng ta lai tách future từ develop là vì để phân biệt rõ ràng giữa các tính năng đang phát triển và các tính năng đã hoàn thành 



// Cách triển khai code lên môi trường production
// Triển khai code lên môi trường production có thể khác nhau tùy thuộc vào ngôn ngữ lập trình, framework, và nền tảng mà bạn đang sử dụng.Tuy nhiên, dưới đây là một quy trình cơ bản:
// Kiểm tra code: Đảm bảo rằng code của bạn đã được kiểm tra kỹ lưỡng, bao gồm cả việc chạy các unit test và integration test.
// Merge code: Merge code từ nhánh phát triển(development branch) vào nhánh master hoặc main.
//     Build: Tạo một bản build từ nhánh master.Điều này thường bao gồm việc biên dịch code, minify, bundling, hoặc các bước khác tùy thuộc vào ngôn ngữ và framework.
// Triển khai: Triển khai bản build lên môi trường production.Cách thức triển khai có thể khác nhau tùy thuộc vào nền tảng mà bạn đang sử dụng.Đối với một máy chủ truyền thống, điều này có thể bao gồm việc tải lên bản build và khởi động lại ứng dụng.Đối với một nền tảng như AWS hoặc Google Cloud, bạn có thể sử dụng các dịch vụ của họ để tự động triển khai.
// Kiểm tra: Sau khi triển khai, hãy kiểm tra ứng dụng trên môi trường production để đảm bảo mọi thứ đều hoạt động như mong đợi.
// Lưu ý: Đây chỉ là một quy trình cơ bản và có thể không phù hợp với tất cả các dự án.Bạn nên tìm hiểu và áp dụng các phương pháp triển khai phù hợp với dự án cụ thể của mình.


// để tạo ra 1 branch thì ta phải tạo ra 1 issue trước 
// để tạo ra 1 pull request thì ta phải tạo ra 1 branch trước

// trigger là gì 
// là sự kiện kích hoạt
// Trigger là một sự kiện kích hoạt một hành động nào đó. Trong quản lý mã nguồn, trigger thường được sử dụng để kích hoạt các hành động như kiểm tra, triển khai, hoặc thông báo khi có thay đổi trong mã nguồn.
// Các ví dụ về trigger bao gồm:
/// Trigger khi có commit mới: Khi có commit mới vào nhánh master, trigger sẽ kích hoạt một hành động như kiểm tra hoặc triển khai.
// Trigger khi có pull request mới: Khi có pull request mới, trigger sẽ kích hoạt một hành động như kiểm tra hoặc thông báo.


// git rebase là gì 
// là sắp xếp lại commit







// git push origin master // đẩy code lên nhánh master
// git push -u origin master // đẩy code lên nhánh master và set nhánh master là nhánh mặc định
// git push origin develop // đẩy code lên nhánh develop
// git push origin feature/feature-1 // đẩy code lên nhánh feature-1
// git push origin hotfix/hotfix-1 // đẩy code lên nhánh hotfix-1
// git push origin release/release-1 // đẩy code lên nhánh release-1
// git push origin support/support-1 // đẩy code lên nhánh support-1


// git checkout -b feature/1-add-screen develop // tạo nhánh feature/1-add-screen từ nhánh develop
// mv screen.js src/screens/ // di chuyển file screen.js vào thư mục src/screens/


// ✗ git branch --set-upstream-to=origin/develop develop là tên nhánh local, origin/develop là tên nhánh remote 

// git checkout -b feature/1-add-screen develop // tạo nhánh feature/1-add-screen từ nhánh develop




// việc delete nhánh sau khi phat triển xong là cần thiết
// Dọn dẹp: Các nhánh thường được tạo ra để phát triển các tính năng hoặc sửa lỗi cụ thể.Một khi những công việc này đã hoàn thành và các thay đổi đã được hợp nhất vào nhánh chính(thường là master hoặc main), nhánh đó không còn cần thiết nữa.Việc xóa nhánh giúp giữ cho repository gọn gàng và dễ quản lý.

// Tránh nhầm lẫn: Nếu một nhánh không còn được sử dụng nữa nhưng vẫn tồn tại, nó có thể gây nhầm lẫn cho các thành viên khác trong nhóm.Họ có thể không chắc chắn liệu nhánh đó có đang được sử dụng hay không, hoặc họ có thể vô tình sử dụng nhánh đó để bắt đầu công việc mới.

// Tiết kiệm tài nguyên: Mặc dù Git rất hiệu quả về mặt lưu trữ và các nhánh không tốn nhiều tài nguyên, nhưng việc giữ quá nhiều nhánh cũ có thể làm cho repository trở nên phức tạp và khó quản lý.


// ➜  Github  git: (main) ✗ git branch - d   feature / 1 - add - screen
// Deleted branch feature / 1 - add - screen(was 616ba2c).
// ➜  Github  git: (main) ✗ git push origin - d   feature / 1 - add - screen
// To https://github.com/handmadee/Github.git
// -[deleted]         feature / 1 - add - screen


// Lưu ý không nên xoá nhánh develop và master vì đó là nhánh chính của dự án và có thể gây ra sự cố nghiêm trọng.
// vì nhánh develop là nhánh phát triển và nhánh master là nhánh chính của dự án
// git branch -d feature/1-add-screen // xóa nhánh feature/1-add-screen


// ➜  Github  git: (main) ✗ git tag 'v1.0.1'
// ➜  Github  git: (main) ✗ git push--tags
























































































































