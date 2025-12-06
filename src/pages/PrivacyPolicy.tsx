import { Link } from "react-router";

const PrivacyPolicy = () => {
  return (
    <>
      <title>プライバシーポリシー / 名刺Online</title>

      <main className="grow container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">プライバシーポリシー</h2>
        <p className="mb-4">
          <strong>最終更新日:</strong> 2025年12月7日
        </p>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">1. はじめに</h3>
          <p className="text-muted-foreground">
            本プライバシーポリシーは、「名刺Online」（以下、「本アプリ」といいます）が収集する情報とその利用方法について説明するものです。本アプリをご利用いただく前に、本ポリシーをご確認いただき、内容にご同意いただいた上でご利用ください。
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">2. 収集する情報</h3>
          <p className="text-muted-foreground mb-4">
            本アプリは、以下の情報を収集することがあります。
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>
              <strong>ユーザーが提供する情報:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>
                  アカウント情報:
                  新規登録時に、氏名、メールアドレス、パスワードなどの情報をご提供いただきます。
                </li>
                <li>
                  プロフィール情報:
                  会社名、役職、電話番号、住所など、ユーザーが任意で入力する情報。
                </li>
                <li>
                  名刺情報:
                  ユーザーがスキャンまたは手入力で登録する第三者の名刺情報。
                </li>
              </ul>
            </li>
            <li>
              <strong>自動的に収集される情報:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>
                  広告識別子: Google
                  AdMobが広告を表示するために、お使いのデバイスの広告ID（IDFA、AAIDなど）を収集します。
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">3. 情報の利用目的</h3>
          <p className="text-muted-foreground mb-4">
            収集した情報は、以下の目的で利用します。
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>本アプリのサービス提供、本人確認のため。</li>
            <li>
              ユーザーに合わせた広告（パーソナライズ広告）を表示するため。
            </li>
            <li>お問い合わせへの対応のため。</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">4. 第三者への情報提供</h3>
          <p className="text-muted-foreground mb-4">
            本アプリは、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません。
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>ユーザーの同意がある場合。</li>
            <li>法令に基づく場合。</li>
            <li>
              <strong>広告配信:</strong> 本アプリでは、Google
              AdMobを利用して広告を配信しています。Google
              AdMobは、広告IDを使用してユーザーに適した広告を表示することがあります。Googleによるデータの利用については、
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Googleのポリシーと規約
              </a>
              をご確認ください。
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">5. データの削除</h3>
          <p className="text-muted-foreground">
            ユーザーは、本アプリのアカウント削除機能を利用することで、サーバーに保存されたご自身のプロフィール情報および登録した名刺データを削除することができます。
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            6. プライバシーポリシーの変更
          </h3>
          <p className="text-muted-foreground">
            本ポリシーは、法令の変更やサービスの改善に伴い、改定されることがあります。重要な変更がある場合は、本サイト内でお知らせします。
          </p>
        </section>{" "}
        <section>
          <h3 className="text-xl font-semibold mb-2">8. お問い合わせ</h3>
          <p className="text-muted-foreground mb-4">
            本ポリシーに関するご質問、または利用者情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。
          </p>

          <div className="space-y-4 text-muted-foreground">
            <div>
              <p className="font-bold text-foreground">メールアドレス</p>
              <a
                href="mailto:app@mashiro3.com"
                className="text-primary underline hover:opacity-80"
              >
                app@mashiro3.com
              </a>
            </div>

            <div>
              <p className="font-bold text-foreground">公式コミュニティ</p>
              <p>「ましろ㌠」公式Discordサーバー（返信が早いです）</p>

              <Link
                to="https://discord.gg/e36y4zTbPm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:opacity-80"
              >
                サーバーに参加する
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
