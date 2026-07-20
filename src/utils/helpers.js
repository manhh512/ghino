export const PEOPLE = ['Mạnh', 'Hùng', 'Tú', 'Duy', 'Trâm'];

export const ACCOUNT_LABELS = { manh: 'Mạnh', hung: 'Hùng', tu: 'Tú', duy: 'Duy', tram: 'Trâm' };

export function fmt(n) {
  if (!n && n !== 0) return '0đ';
  return Math.round(n).toLocaleString('vi-VN') + 'đ';
}

export function showToast(msg, isError) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.style.background = isError ? 'var(--accent2)' : 'var(--accent3)';
  t.style.color = '#111';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

export function compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}

