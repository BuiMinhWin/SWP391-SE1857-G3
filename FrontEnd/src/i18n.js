import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Các tài liệu dịch
const resources = {
  vi: {
    translation: {
      "welcome": "Chào mừng đến Dịch vụ vận chuyển cá Koi",
      "description": "Chúng tôi chuyên cung cấp dịch vụ vận chuyển cá Koi an toàn, nhanh chóng.",
      "services": "Dịch vụ của chúng tôi",
      "contact": "Liên hệ"
    }
  },
  ja: {
    translation: {
      "welcome": "鯉の輸送サービスへようこそ",
      "description": "私たちは、鯉を安全かつ迅速に輸送するサービスを提供しています。",
      "services": "私たちのサービス",
      "contact": "お問い合わせ"
    }
  }
};

i18n
  .use(initReactI18next) // Kết nối với React
  .init({
    resources,
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'vi', // Ngôn ngữ dự phòng nếu không tìm thấy ngôn ngữ yêu cầu
    interpolation: {
      escapeValue: false // React đã tự xử lý vấn đề này
    }
  });

export default i18n;
