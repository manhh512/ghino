import { PEOPLE, compressImage, showToast } from "../utils/helpers";
import { state, saveDB } from "../utils/state";

export function renderQRTab() {
  const wrap = document.getElementById('qr-manager-list');
  if (!wrap) return;

  state.db.bankQRs = state.db.bankQRs || {};

  wrap.innerHTML = PEOPLE.map(p => {
    const qrData = state.db.bankQRs[p] || '';
    return `
      <div class="card" style="display:flex; flex-direction:column; gap:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-family:'Bebas Neue',sans-serif; font-size:1.4rem; letter-spacing:1px; color:var(--accent);">${p}</h3>
          <label class="btn btn-ghost" style="padding: 6px 14px; font-size: 0.72rem; margin:0; display:inline-block; text-align:center; cursor:pointer;">
            TẢI QR LÊN
            <input type="file" class="qr-upload-input" data-person="${p}" accept="image/*" style="display:none;" />
          </label>
        </div>
        <div style="display:flex; justify-content:center; align-items:center; background:#111; border:1px dashed var(--border); border-radius:6px; min-height:180px; padding:10px;">
          ${qrData 
            ? `<img src="${qrData}" alt="QR ${p}" style="max-width:100%; max-height:220px; border-radius:4px; object-fit:contain;" />` 
            : `<div class="empty" style="padding:20px;">Chưa có ảnh QR</div>`
          }
        </div>
      </div>
    `;
  }).join('');

  // Gắn event upload ảnh
  wrap.querySelectorAll('.qr-upload-input').forEach(input => {
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const person = input.getAttribute('data-person');
      try {
        showToast(`Đang xử lý ảnh QR cho ${person}...`);
        const compressedBase64 = await compressImage(file, 800, 800, 0.7);
        state.db.bankQRs[person] = compressedBase64;
        
        // Render lại danh sách QR ngay lập tức
        renderQRTab();
        showToast(`Đã cập nhật ảnh QR cho ${person}`);

        // Lưu vào Firestore
        await saveDB(state.db);
      } catch (err) {
        console.error("Lỗi tải ảnh QR:", err);
        showToast("Lỗi tải ảnh QR!", true);
      }
    };
  });
}
