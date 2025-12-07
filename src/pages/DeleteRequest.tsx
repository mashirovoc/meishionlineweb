import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertCircle,
  AlertTriangle,
  Mail,
  MessageCircle,
  Trash2,
} from "lucide-react";
import { Link } from "react-router";

const DeleteRequest = () => {
  return (
    <>
      <title>アカウント削除申請 / 名刺Online</title>

      <main className="grow container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            アカウント削除の申請
          </h1>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-blue-600 mr-3 shrink-0" />
            <div>
              <p className="font-bold text-blue-800">アプリをお持ちの方へ</p>
              <p className="text-blue-700 text-sm mt-1">
                アプリにログイン可能な場合は、アプリ内の「マイプロフィール」&gt;「メニュー」&gt;「アカウントを削除」から、即座にデータを削除することができます。
              </p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 shrink-0" />
            <div>
              <p className="font-bold text-yellow-800">ご注意ください</p>
              <p className="text-yellow-700 text-sm mt-1">
                パスワード再発行などを試みた上で、ログインができない場合を除き，基本的にはご自身で削除いただきますようお願い申し上げます。
              </p>
            </div>
          </div>
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Trash2 className="h-5 w-5 text-red-500" />
              データの削除プロセス
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              申請受領後、ご本人様確認が完了次第、サーバーに保存された以下のデータを完全に削除いたします。
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>ユーザーアカウント情報</li>
              <li>登録されたプロフィール情報</li>
              <li>スキャン・登録した名刺データ</li>
            </ul>
            <p className="text-sm mt-4 border-t pt-4">
              ※
              一度削除されたデータは復元することができませんのでご注意ください。
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mail className="h-5 w-5 text-primary" />
                メールでの申請
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground flex flex-col justify-between h-full">
              <div>
                <p className="text-sm mb-4">
                  以下の内容を記載し、サポート窓口までご連絡ください。
                </p>
                <div className="bg-slate-50 p-4 rounded border text-sm space-y-2 mb-6">
                  <p>
                    <strong>件名:</strong> アカウント削除依頼
                  </p>
                  <p>
                    <strong>本文:</strong>
                  </p>
                  <ul className="list-disc list-inside pl-2">
                    <li>登録メールアドレス</li>
                    <li>名前</li>
                    <li>ユーザーID（分かる場合）</li>
                  </ul>
                </div>
              </div>
              <Link
                to="mailto:app@mashiro3.com"
                className={buttonVariants({ variant: "secondary" })}
              >
                app@mashiro3.com
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageCircle className="h-5 w-5 text-[#5865F2]" />
                コミュニティで相談
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground flex flex-col justify-between h-full">
              <p className="text-sm mb-6">
                「ましろ㌠」公式Discordサーバーでもサポートを受け付けております。
                <br />
                <br />
                サーバーに参加後、管理者へ直接メンションまたはDMにて削除依頼をご連絡ください。
              </p>
              <Link
                to="https://discord.gg/e36y4zTbPm"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "secondary" })}
              >
                「ましろ㌠」公式Discord
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default DeleteRequest;
