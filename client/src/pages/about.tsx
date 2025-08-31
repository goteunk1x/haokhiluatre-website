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
              "Hao Khi Lua Tre" is an action-adventure game project, inspired by the legend of Thanh Giong.
              The story takes place after Thanh Giong has ascended to heaven. Players will follow Luc, an ordinary farmer forced to stand up and fight against the Hoa Van enemy forces after his village is destroyed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The game both carries the breath of Vietnamese culture and history, while combining modern action gameplay, promising to bring a new and emotional role-playing experience.
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
              We are a group of 3D Graphic Design students, working together to develop an indie game project with a storyline, characters and a world built by the group itself. Although we have not been able to implement the programming part, the group has focused on completing the script, designing images, building characters, environments and animations to outline the spirit of the game.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The current product is introduced through a pre-rendered cinematic video simulating gameplay and a story trailer. This is not only the beginning of our game making journey, but also an opportunity to learn, experience the production process and share our passion for creativity with the community.
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
