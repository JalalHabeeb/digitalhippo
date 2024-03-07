import Image from "next/image";
import React from "react";

const ThanksYouPage = () => {
  return (
    <main className="relative lg:min-h-full">
      <div className="hidden md:block h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
        <Image
          fill
          src="/checkout-thank-you.jpg"
          className="h-full w-full object-cover object-center"
          alt="Thank You"
        />
      </div>

      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py32 xl:gap-x-42">
          <div className="lg:col-start-2">
            <h1 className="text-sm font-medium text-blue-600">
              Order Successful
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThanksYouPage;
