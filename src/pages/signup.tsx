import apiClient from '@/lib/apiClient';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

const Signup = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const router = useRouter();

  // handleSubmit関数を定義します。この関数は、フォームが送信されたときに実行されます。
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // フォームのデフォルトの送信動作をキャンセルします。
    e.preventDefault();

    // 新規登録を行うAPIをたたく
    // try-catchブロックを使用して、エラーハンドリングを行います。
    try {
      // apiClientのpostメソッドを使用して、新規登録APIを呼び出します。
      // ユーザー名、メールアドレス、パスワードをパラメータとして送信します。
      const response = await apiClient.post("/auth/register", {
        username: name,
        email: email,
        password: password
      });
      // ログインページにリダイレクトします。
      router.push("/login");
    } catch (error) {
      // エラーが発生した場合、アラートを表示し、エラー内容をコンソールに出力します。
      alert("入力内容が正しくありません");
    }
  };

  return (
    <div
      style={{ height: "88vh" }}
      className="flex flex-col justify-center sm:px-6 lg:px-8"
    >
      <Head>
        <title>新規作成</title>
      </Head>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          アカウントを作成
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                お名前
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  setName(e.target.value)
                }
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  setEmail(e.target.value)
                }
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                パスワード
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  setPassword(e.target.value)
                }
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                新規登録
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup