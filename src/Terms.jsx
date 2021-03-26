import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Terms.css";

function Terms() {
  const [active, setActive] = useState();
  //   function handleChange() {}
  return (
    <>
      <div className="terms">
        <h1>Terms and Condition</h1>

        <div className="English">
          The booking which is made here will be valid for 3 hours only. The
          hospital bed in the ward will be given to those who will reach first
          whether they have booked it or not cause every patient should be taken
          care which is our motto. The bed booked here will help you so that you
          don't have to wait in line and can directly take your patient to the
          specific ward. The booking is valid for 3hrs only after the time it is
          booked. The bed is booked in the general ward if all the beds in that
          specific ward are filled. If your patient is not admitted to that
          hospital all the money given for booking will be returned. We
          currently focus on the availability of beds the booking of beds does
          not guarantee that the bed will be given to your patient. This feature
          is currently under experimentation.
        </div>
        <div className="Hindi">
          यहां जो बुकिंग की गई है, वह केवल 3 घंटे के लिए वैध होगी। वार्ड में
          अस्पताल का बिस्तर उन लोगों को दिया जाएगा जो पहले पहुंच जाएंगे चाहे
          उन्होंने इसे बुक किया हो या नहीं, हर मरीज का ध्यान रखा जाना चाहिए जो
          हमारा आदर्श वाक्य है। यहां बुक किया गया बिस्तर आपकी मदद करेगा ताकि
          आपको लाइन में इंतजार न करना पड़े और अपने मरीज को सीधे विशिष्ट वार्ड
          में ले जा सके। बुकिंग के समय के बाद ही बुकिंग 3hrs के लिए मान्य है।
          सामान्य वार्ड में बिस्तर बुक किया जाता है यदि उस विशिष्ट वार्ड के सभी
          बेड भरे होते हैं। यदि आपका मरीज उस अस्पताल में भर्ती नहीं है, तो
          बुकिंग के लिए दिए गए सारे पैसे वापस कर दिए जाएंगे। वर्तमान में हम बेड
          की उपलब्धता पर ध्यान केंद्रित करते हैं बेड की बुकिंग यह गारंटी नहीं
          देती है कि बिस्तर आपके रोगी को दिया जाएगा। यह सुविधा वर्तमान में
          प्रयोग में है।
        </div>
        <label> I agree to the terms and conditions.</label>
        <Link
          to={{
            pathname: `/home`,
          }}
        >
          SUBMIT
        </Link>
      </div>
    </>
  );
}

export default Terms;
