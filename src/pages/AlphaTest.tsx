// src/pages/AlphaTest.tsx
import { Button } from "@/components/ui/button"; // shadcn/uiのボタンを使用（なければ通常のbuttonタグでOK）
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Download, FileText } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

export const AlphaTest: React.FC = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const APK_LINK =
    "https://drive.google.com/file/d/1uASdpIu4JeHPKGYXHeLLHHDwT7Cm8SfN/view?usp=sharing";

  return (
    <>
      <title>アルファ版テスタープログラム / 名刺Online</title>

      <main className="grow container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            アルファ版テスタープログラム
          </h1>
          <p className="text-muted-foreground text-lg">
            正式リリース前の最新機能をいち早く体験し、開発にご協力ください。
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 shrink-0" />
            <div>
              <p className="font-bold text-yellow-800">ご注意ください</p>
              <p className="text-yellow-700 text-sm mt-1">
                本アプリは開発中のアルファ版です。予期せぬ不具合やクラッシュ、データの消失が発生する可能性があります。
                重要なデータは必ずバックアップを取るか、テスト用データをご使用ください。
              </p>
            </div>
          </div>
        </div>

        <Card className="mb-8 ">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <FileText className="h-5 w-5" />
              アルファテスト利用規約
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-4 h-64 overflow-y-auto bg-slate-50 p-4 rounded-md mx-6 mb-6 border">
            <p>
              <strong>1. 目的</strong>
              <br />
              本アルファテスト（以下「本テスト」）は、「名刺Online」（以下「本アプリ」）の正式リリースに向けた動作確認、不具合の発見、および品質向上を目的としています。
            </p>

            <p>
              <strong>2. 免責事項</strong>
              <br />
              本アプリは開発段階のものであり、動作の安定性や完全性を保証するものではありません。本アプリの使用により利用者に生じた損害（データの消失、端末の不具合等を含む）について、開発者は一切の責任を負わないものとします。
            </p>

            <p>
              <strong>3. データの取り扱い</strong>
              <br />
              本テスト期間中に登録されたデータは、予告なく削除またはリセットされる場合があります。また、
              <Link
                to="/privacypolicy"
                target="_blank"
                className="text-primary underline"
              >
                プライバシーポリシー
              </Link>
              に基づき、不具合解析のために利用状況データを収集する場合があります。
            </p>

            <p>
              <strong>4. 禁止事項</strong>
              <br />
              配布されたAPKファイルの再配布、リバースエンジニアリング、または本テストの目的外での利用を禁止します。
            </p>

            <p>
              <strong>5. テストの終了</strong>
              <br />
              開発者は、予告なく本テストを終了、または本アプリの配信を停止する権利を有します。
            </p>

            <p>
              <strong>6. フィードバック</strong>
              <br />
              不具合やご意見がございましたら、「ましろ㌠」ディスコードサーバーまでご報告いただけますと幸いです。
            </p>
          </CardContent>
        </Card>

        <div className="bg-white p-6 rounded-xl border mb-8 text-center">
          <label className="flex items-center justify-center gap-3 cursor-pointer select-none group">
            <input
              type="checkbox"
              className="w-5 h-5 accent-primary cursor-pointer"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
            />
            <span className="text-base group-hover:text-primary transition-colors">
              <Link
                to="/privacypolicy"
                target="_blank"
                className="underline text-blue-600 hover:text-blue-800 mr-1"
              >
                プライバシーポリシー
              </Link>
              および
              <span className="font-bold ml-1">上記利用規約に同意します</span>
            </span>
          </label>
        </div>

        <div className="text-center space-y-4">
          <Button
            size="lg"
            className={`w-full md:w-auto px-12 py-8 text-lg font-bold transition-all duration-300 ${
              isAgreed
                ? "bg-primary hover:bg-primary/90 hover:scale-105"
                : "bg-gray-300 cursor-not-allowed opacity-50"
            }`}
            disabled={!isAgreed}
            asChild
          >
            <Link to={APK_LINK} download>
              {isAgreed ? (
                <>
                  <Download className="mr-2 h-6 w-6" />
                  Android版 (APK) をダウンロード
                </>
              ) : (
                <>
                  <CheckCircle2 className="mr-2 h-6 w-6" />
                  規約に同意してダウンロード
                </>
              )}
            </Link>
          </Button>

          {isAgreed && (
            <p className="text-sm text-muted-foreground mt-2 animate-in fade-in">
              ※ ダウンロード後、ファイルを開いてインストールしてください。
              <br />
              「不明なアプリのインストール」の許可が必要な場合があります。
            </p>
          )}
        </div>
      </main>
    </>
  );
};
