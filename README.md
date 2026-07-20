# Hệ thống Ghi Nợ (Ghi Nợ System v2.0)

Ứng dụng web giúp quản lý các giao dịch chia tiền ăn uống, đánh bài phạt, ghi điểm trò chơi và chọn người ngẫu nhiên thời gian thực sử dụng **Vite** và **Firebase Firestore**.

Dự án đã được tái cấu trúc thành cấu trúc đa file (modular) chuyên nghiệp, tối ưu hóa code và bổ sung thêm tính năng bộ lọc nâng cao.

## 📁 Cấu Trúc Thư Mục Mới

*   `src/firebase/config.js`: Khởi tạo và xuất kết nối Firebase Firestore.
*   `src/utils/state.js`: Quản lý dữ liệu cache và đồng bộ Firestore tập trung.
*   `src/utils/helpers.js`: Định dạng tiền tệ `đ` và thông báo Toast.
*   `src/auth/`: Đăng nhập, đăng xuất, đổi mật khẩu và quản lý nhật ký hệ thống (Audit Log).
*   `src/tabs/`: Các tệp JavaScript quản lý tính năng của từng tab giao diện:
    *   `home.js`: Tổng quan nợ, giải thuật tính nợ tối ưu, và ghi thanh toán.
    *   `food.js`: Chia đều hóa đơn ăn uống/cafe.
    *   `card.js`: Chia tiền phạt đánh bài (chế độ 5-3-2 và 4-3-2-1).
    *   `score.js`: Bảng ghi điểm, cộng dồn điểm và hoàn tác (Undo) lịch sử.
    *   `random.js`: Vòng quay may mắn bằng HTML5 Canvas.
    *   `log.js`: Danh sách lịch sử giao dịch và **Bộ lọc nâng cao (Tìm kiếm theo mô tả, khoảng thời gian, người trả, loại giao dịch)**.
*   `src/styles/`: Thư mục CSS quản lý giao diện Cyberpunk/Dark Mode tách biệt.
*   `index.html`: Giao diện khung SPA gọn gàng.
*   `vite.config.js`: Cấu hình base path tương đối để chạy tốt trên GitHub Pages.
*   `.github/workflows/deploy.yml`: File CI/CD tự động deploy lên GitHub Pages mỗi khi push lên GitHub nhánh `main`.

---

## 🚀 Hướng Dẫn Chạy & Phát Triển Cục Bộ

1.  **Cài đặt dependencies:**
    ```bash
    npm install
    ```
2.  **Khởi chạy môi trường phát triển (Local Dev):**
    ```bash
    npm run dev
    ```
    Mở trình duyệt truy cập đường dẫn hiển thị trên terminal (thường là `http://localhost:5173`).

3.  **Xây dựng bản Production:**
    ```bash
    npm run build
    ```
    Sản phẩm build sẽ được xuất ra thư mục `dist/`.

---

## 🌐 Triển khai lên GitHub Pages (Tự động)

Ứng dụng đã được cấu hình CI/CD tự động bằng GitHub Actions:
1.  Đẩy toàn bộ mã nguồn của bạn lên một repository mới trên GitHub ở nhánh **`main`**.
2.  Đi tới phần cài đặt kho lưu trữ trên GitHub: **Settings** -> **Pages**.
3.  Tại phần **Build and deployment** -> **Source**, chọn **Deploy from a branch**.
4.  Khi bạn push code lên GitHub, GitHub Actions sẽ tự động kích hoạt tiến trình build và đẩy thư mục sản phẩm sang nhánh `gh-pages` để xuất bản website trực tuyến!
