import React from "react";

export default function Header() {
  return (
    <div>
      <div className="header-area sticky top-0  shadow-md p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="grid grid-cols-2  gap-4">
                <div className="bohubrihi-logo">
                  <svg
                    width="136"
                    height="46"
                    viewBox="0 0 136 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1191_16412)">
                      <path
                        d="M18.8414 22.2755C18.2737 21.4126 17.4402 20.753 16.4641 20.394C18.1813 19.6038 19.0399 18.147 19.0399 16.0236V13.2416C19.0399 11.4497 18.456 9.97142 17.2883 8.80668C16.2839 7.81398 14.9514 7.21189 13.5346 7.11064C13.2635 7.08337 12.9912 7.06992 12.7186 7.07032H7.15625V35.352H13.347C15.2292 35.352 16.7524 34.7669 17.9166 33.5968C19.0807 32.4276 19.6655 30.9385 19.6655 29.1403V25.3397C19.6985 24.2608 19.412 23.1959 18.8414 22.2755ZM14.8022 10.9865C15.3462 11.5456 15.6182 12.3439 15.6182 13.3787V15.9134C15.6182 16.9482 15.3462 17.7465 14.8022 18.3029C14.5122 18.5868 14.1655 18.8079 13.7844 18.9523C13.4032 19.0967 12.9958 19.1611 12.5881 19.1415H10.5671V10.1372H12.5881C12.9956 10.1171 13.403 10.181 13.7841 10.3249C14.1653 10.4688 14.512 10.6896 14.8022 10.9731V10.9865ZM16.2547 29.0274C16.2547 30.0614 15.9826 30.8677 15.4387 31.4465C15.1517 31.7357 14.8061 31.9616 14.4245 32.1094C14.0429 32.2571 13.6339 32.3234 13.2246 32.3039H10.5671V22.1922H13.2191C13.6287 22.1732 14.0377 22.24 14.4193 22.3883C14.8008 22.5365 15.1464 22.7628 15.4332 23.0523C15.9772 23.6257 16.2492 24.4321 16.2492 25.4714L16.2547 29.0274Z"
                        fill="#0E0E12"
                      ></path>
                      <path
                        d="M81.4832 22.2755C80.9161 21.4121 80.0824 20.7523 79.1059 20.394C80.8195 19.602 81.6763 18.1443 81.6763 16.0209V13.2416C81.6763 11.4497 81.0924 9.97142 79.9246 8.80668C78.921 7.81456 77.5896 7.21252 76.1737 7.11064C75.9026 7.0834 75.6303 7.06994 75.3577 7.07032H69.8008V35.352H75.9888C77.871 35.352 79.3942 34.7669 80.5584 33.5968C81.7225 32.4276 82.3073 30.9385 82.3073 29.1403V25.3397C82.3403 24.2608 82.0538 23.1959 81.4832 22.2755ZM77.444 10.9865C77.988 11.5456 78.26 12.343 78.26 13.3787V15.9134C78.26 16.9482 77.988 17.7465 77.444 18.3029C77.154 18.5868 76.8074 18.8079 76.4262 18.9523C76.045 19.0966 75.6376 19.1611 75.2299 19.1415H73.2089V10.1372H75.2299C75.6374 10.1171 76.0448 10.181 76.426 10.3249C76.8071 10.4688 77.1538 10.6896 77.444 10.9731V10.9865ZM78.8965 29.0274C78.8965 30.0614 78.6245 30.8677 78.0805 31.4465C77.7935 31.7357 77.4479 31.9616 77.0663 32.1094C76.6847 32.2571 76.2758 32.3234 75.8664 32.3039H73.2144V22.1922H75.8664C76.2759 22.1732 76.6849 22.24 77.0665 22.3883C77.4481 22.5365 77.7936 22.7628 78.0805 23.0523C78.6245 23.6257 78.8965 24.4321 78.8965 25.4714V29.0274Z"
                        fill="#0E0E12"
                      ></path>
                      <path
                        d="M37.5605 7.07031H40.9252V19.0474H46.7841V7.07031H50.1487V35.352H46.7841V22.1116H40.9252V35.352H37.5605V7.07031Z"
                        fill="#0E0E12"
                      ></path>
                      <path
                        d="M109.137 7.07031H112.501V19.0474H118.358V7.07031H121.722V35.352H118.358V22.1116H112.501V35.352H109.137V7.07031Z"
                        fill="#0E0E12"
                      ></path>
                      <path
                        d="M53.7266 7.07031H57.0259V28.0356C57.0259 29.41 57.2979 30.4672 57.8419 31.2073C58.0793 31.556 58.4013 31.8403 58.7786 32.0343C59.1559 32.2282 59.5764 32.3255 60.0016 32.3174C60.4227 32.3209 60.8379 32.2189 61.2084 32.021C61.5789 31.8232 61.8927 31.5358 62.1205 31.1858C62.6645 30.4332 62.9365 29.3831 62.9365 28.0356V7.07031H66.2386V28.1619C66.2386 30.3122 65.661 32.0495 64.5059 33.3737C63.9544 34.0167 63.2633 34.5286 62.4839 34.8711C61.7045 35.2136 60.8569 35.378 60.0043 35.352C59.1501 35.3757 58.3012 35.2104 57.52 34.8681C56.7387 34.5259 56.0449 34.0152 55.4891 33.3737C54.3213 32.0548 53.7374 30.3176 53.7374 28.1619L53.7266 7.07031Z"
                        fill="#0E0E12"
                      ></path>
                      <path
                        d="M94.8122 35.352L90.7893 24.3317H89.1165V35.3654H85.8906V7.07031H91.3061C93.085 7.07031 94.5257 7.64999 95.6282 8.80936C96.7307 9.96872 97.282 11.4461 97.282 13.2416V18.147C97.3106 19.3757 96.9861 20.5872 96.3463 21.6412C95.7421 22.6181 94.8431 23.3833 93.7759 23.8291L98.3999 35.352H94.8122ZM89.1165 21.2541H91.1892C91.5772 21.2734 91.9649 21.2094 92.3255 21.0665C92.6861 20.9236 93.0111 20.7052 93.2781 20.4263C93.7977 19.8672 94.0561 19.0823 94.0561 18.0341V13.3653C94.0561 12.3305 93.7841 11.5322 93.2781 10.9758C93.0121 10.695 92.6875 10.4745 92.3269 10.3298C91.9662 10.185 91.5781 10.1193 91.1892 10.1372H89.1165V21.2541Z"
                        fill="#0E0E12"
                      ></path>
                      <path
                        d="M105.558 7.07031V35.352H101.979V7.07031H105.558Z"
                        fill="#0E0E12"
                      ></path>
                      <path
                        d="M128.82 7.07031V35.352H125.24V7.07031H128.82Z"
                        fill="#0E0E12"
                      ></path>
                      <path
                        d="M23.2461 21.6841C23.2461 19.9764 23.7475 18.5939 24.7503 17.5367C25.2446 17.0137 25.8465 16.6013 26.5155 16.3273C27.1845 16.0533 27.9052 15.924 28.629 15.9482C29.5979 15.9338 30.5525 16.1811 31.3898 16.6631C32.2079 17.1444 32.8688 17.8479 33.2938 18.6898C33.7638 19.6194 33.999 20.6477 33.9792 21.6867V33.1236C33.9792 34.851 33.4769 36.2442 32.4723 37.3032C31.9833 37.8242 31.387 38.2355 30.7236 38.5095C30.0601 38.7835 29.345 38.9139 28.6263 38.8917C27.9032 38.9148 27.1834 38.7847 26.5154 38.5103C25.8473 38.2358 25.2464 37.8233 24.753 37.3005C23.7502 36.2433 23.2488 34.8501 23.2488 33.1209L23.2461 21.6841ZM26.6896 35.5534C26.9175 35.845 27.2121 36.0791 27.5492 36.2365C27.8863 36.394 28.2563 36.4703 28.629 36.4592C28.9961 36.4673 29.36 36.3895 29.691 36.2321C30.0219 36.0746 30.3104 35.8421 30.533 35.5534C31.0226 34.9495 31.2683 34.1064 31.2701 33.0241V21.7701C31.2701 20.6949 31.0244 19.8581 30.533 19.2596C30.3079 18.9745 30.0186 18.7454 29.688 18.5904C29.3574 18.4355 28.9948 18.3591 28.629 18.3672C28.2577 18.3561 27.8889 18.431 27.5521 18.586C27.2154 18.7409 26.92 18.9716 26.6896 19.2596C26.2 19.8581 25.9552 20.6949 25.9552 21.7701V33.0134C25.9552 34.1011 26.2 34.9477 26.6896 35.5534Z"
                        fill="#CE268C"
                      ></path>
                      <path
                        d="M23.245 8.4494V7.10547H25.965V8.34457C25.965 9.41971 26.2098 10.2574 26.6994 10.8577C26.9246 11.1425 27.2141 11.3712 27.5447 11.5257C27.8753 11.6802 28.2378 11.7561 28.6034 11.7474C28.9746 11.7591 29.3433 11.6847 29.68 11.5302C30.0168 11.3757 30.3123 11.1454 30.5428 10.8577C31.0342 10.2682 31.2799 9.43226 31.2799 8.34995V7.11084H33.9999V8.45477C33.9999 10.1589 33.4985 11.5404 32.4958 12.5994C32.0007 13.1223 31.3983 13.5345 30.7289 13.8085C30.0594 14.0824 29.3385 14.2118 28.6143 14.188C27.6406 14.2034 26.6811 13.9552 25.8399 13.4703C25.0219 12.9901 24.3609 12.2876 23.9359 11.4464C23.4646 10.517 23.2276 9.4888 23.245 8.4494Z"
                        fill="#CE268C"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1191_16412">
                        <rect width="136" height="46" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="mx-5">
                  <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                    কোর্সসমূহ
                  </button>
                </div>
                {/* <div className="mx-5">
                  <div className="relative mx-auto text-gray-600">
                    <input
                      className="border-2 border-gray-300 bg-blue h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                      type="search"
                      name="search"
                      placeholder="পছন্দের কোর্সগুলো খুঁজুন"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-0 mt-5 mr-4"
                    ></button>
                  </div>
                </div> */}
              </div>
            </div>
            <div>
              <div>
                <div className="header-left-content-wrapper">
                  <div>
                    <button className=" my-course-btn text-white font-bold py-2 px-4 rounded">
                      আমার কোর্সসমূহ
                    </button>
                  </div>
                  <div className="header-user-icon mx-3">
                    <i className="fas fa-user-alt mx-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}