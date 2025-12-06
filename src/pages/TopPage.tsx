import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Contact, ScanLine, Share2 } from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="h-full text-center">
      <CardHeader>
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const TopPage = () => {
  return (
    <>
      <title>名刺Online</title>
      <main className="grow">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center py-20 lg:py-32 px-4"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900"
          >
            紙の名刺を、過去にする。
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            スキャンするだけで、名刺情報を瞬時にデジタル化。管理も共有も、これ一つで完結。
            ビジネスの出会いを、もっとスマートに。
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" className="font-bold" disabled>
              {/* <Link to="YOUR_APP_STORE_LINK_HERE">無料でアプリを試す</Link> */}
              アプリは準備中です
            </Button>
          </motion.div>
        </motion.section>

        <section className="py-20 bg-slate-50 ">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
              主な機能
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={ScanLine}
                title="高速スキャン & AI解析"
                description="カメラで名刺を撮影するだけ。AIが会社名、氏名、連絡先などを自動で読み取り、データ化します。"
              />
              <FeatureCard
                icon={Contact}
                title="スマートな連絡先管理"
                description="登録した名刺はいつでも検索・閲覧可能。オフラインでもアクセスできます。"
              />
              <FeatureCard
                icon={Share2}
                title="デジタル名刺交換"
                description="QRコードやNFCで、あなたのプロフィールを瞬時に共有。スマートな自己紹介を実現します。"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TopPage;
