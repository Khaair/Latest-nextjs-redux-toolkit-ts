import React from "react";

export default function Bannner() {
  return (
    <div>
      <div className="bohubrihi-banner-area ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="banner-title">
                <h1 className="text-4xl mb-4 font-bold">নিজের মত শিখুন, </h1>
                <h1 className="text-4xl mb-5 font-bold">আত্মবিশ্বাস গড়ুন!</h1>
              </div>
              <div className="mt-3 mb-3">
                চাকরি কিংবা ফ্রিল্যান্সিংয়ের জন্য নিজেকে প্রস্তুত করতে
                বহুব্রীহির ক্যারিয়ার ট্র্যাক কোর্সগুলোই যথেষ্ট।
              </div>
              <div>
                <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded">
                  কোর্সসমূহ
                </button>
              </div>
            </div>
            <div>
              <div>
                <img src="/banner.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
