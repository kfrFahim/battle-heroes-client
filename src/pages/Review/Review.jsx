import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = () => {
  const [rating, setRating] = useState(5);

  return (
    <div className="max-w-[1200px] mx-auto py-5 bg-gray-50 p-4">
      <h1 className="text-4xl text-center font-medium ">
        Check out what our customers are saying on Google!
      </h1>
      <hr className="w-48 h-1 mx-auto my-10 bg-black" />

      <div className="grid grid-cols md:grid-cols-4 gap-4">
        <div className="bg-white shadow p-3">
          <div className="flex justify-center mb-3">
            <img
              className="w-6 h-6"
              src="https://s3.romw-cdn.co/media/1/1422/14212885/conversions/ACB-R5Srvpid08d2VRPY0TZPCrsRc7HplejvishdGMm9fA=s240-c-c0x00000000-cc-rp-mo-br100-60px.png"
              alt=""
            />
            <div className="text-center">
              <h4>Christina McClelland</h4>
              <Rating
                className="my-4 ml-5"
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly={setRating}
              />
              <p>Apr 25, 2022</p>
            </div>
          </div>
          <p>
          "I absolutely love this toy store! The selection is incredible, and they always have the latest and greatest toys. My kids are always excited to come here, and the staff is friendly and helpful. It's definitely our go-to place for all our toy shopping needs."
          </p>
        </div>

        <div className="bg-white shadow p-3">
          <div className="flex justify-center mb-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg"
              alt=""
            />
            <div className="text-center">
              <h4>E Myers</h4>
              <Rating
                className="my-4 ml-5"
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly={setRating}
              />
              <p>Sep 5, 2022</p>
            </div>
          </div>
          <p>
          "I had a wonderful experience at this toy store. The layout is well organized, making it easy to find what I was looking for. The staff was knowledgeable about the products and gave great recommendations. The prices were fair, and they even had some special promotions going on. I will definitely be coming back!"
          </p>
        </div>

        <div className="bg-white shadow p-3">
          <div className="flex justify-center mb-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://static.generated.photos/vue-static/face-generator/landing/wall/21.jpg"
              alt=""
            />
            <div className="text-center">
              <h4>Bradley Sosebee</h4>
              <Rating
                className="my-4 ml-5"
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly={setRating}
              />
              <p>Feb 25, 2023</p>
            </div>
          </div>
          <p>
          "I was pleasantly surprised by the quality of toys at this store. They have a great range of options, from educational toys to the latest trends. The toys are well-made and durable, which is important to me as a parent. The store is clean and inviting, and my kids had a blast exploring all the different sections. Highly recommended!"
          </p>
        </div>

        <div className="bg-white shadow p-3">
          <div className="flex justify-center mb-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://static.generated.photos/vue-static/face-generator/landing/wall/3.jpg"
              alt=""
            />
            <div className="text-center">
              <h4>Will Lovett</h4>
              <Rating
                className="my-4 ml-5"
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly={setRating}
              />
              <p>Mar 16, 2023</p>
            </div>
          </div>
          <p>
          "Visiting this toy store was like stepping into a wonderland of imagination and joy! The store is beautifully decorated, and the shelves are filled with a wide variety of toys that cater to different ages and interests. The staff members are friendly and genuinely passionate about toys, always ready to offer suggestions and engage with customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;