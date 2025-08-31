import { Mail, MessageCircle, Twitter } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Giới Thiệu</h2>
          <p className="text-xl text-muted-foreground">Về dự án và team The Weakened Team</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-6">Về Trò Chơi</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "Hào Khí Lửa Tre" là một dự án game hành động – phiêu lưu, lấy cảm hứng từ truyền thuyết Thánh Gióng.
              Câu chuyện diễn ra sau khi Thánh Gióng đã bay về trời. Người chơi sẽ theo chân Lực, một người nông dân bình thường buộc phải đứng lên chiến đấu chống lại thế lực giặc Hỏa Vân sau khi ngôi làng của anh bị tàn phá.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trò chơi vừa mang hơi thở văn hóa – lịch sử Việt Nam, vừa kết hợp lối chơi hành động hiện đại, hứa hẹn đem đến một trải nghiệm nhập vai mới mẻ và đầy cảm xúc.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://drive.google.com/uc?export=view&id=1zb0x_slh1eNf8vnqMIS9CSMV-5WdKTvN" 
              alt="Concept art game Hào Khí Lửa Tre" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-lg"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://drive.google.com/uc?export=view&id=1Uyh11i64WitKgoZfHk6YAH3-XteyODt1" 
              alt="Team The Weakened đang phát triển game" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-display text-2xl font-semibold mb-6">Team The Weakened Team</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Chúng mình là nhóm sinh viên ngành Thiết kế Đồ họa 3D, cùng nhau phát triển một dự án game indie với cốt truyện, nhân vật và thế giới riêng do chính nhóm xây dựng. Dù chưa thể triển khai phần lập trình, nhóm đã tập trung hoàn thiện kịch bản, thiết kế hình ảnh, dựng nhân vật, môi trường và các đoạn diễn hoạt để phác họa tinh thần của trò chơi.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sản phẩm hiện tại được giới thiệu thông qua video cinematic pre-rendered mô phỏng gameplay và trailer cốt truyện. Đây không chỉ là bước khởi đầu cho hành trình làm game của chúng mình, mà còn là cơ hội để học hỏi, trải nghiệm quy trình sản xuất và chia sẻ đam mê sáng tạo với cộng đồng.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Liên Hệ</h4>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>theweakened.team@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5" />
                <span>TheWeakened#1234</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Twitter className="w-5 h-5" />
                <span>@TheWeakenedStudio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional sections */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <h4 className="font-semibold mb-2">Game Development</h4>
              <p className="text-muted-foreground text-sm">
                Phát triển game với công nghệ Unreal Engine 5 hiện đại
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🇻🇳</span>
              </div>
              <h4 className="font-semibold mb-2">Văn Hóa Việt Nam</h4>
              <p className="text-muted-foreground text-sm">
                Tôn vinh và quảng bá văn hóa truyền thống Việt Nam
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold mb-2">Nghệ Thuật</h4>
              <p className="text-muted-foreground text-sm">
                Tạo ra những tác phẩm nghệ thuật digital chất lượng cao
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
