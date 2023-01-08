import React from "react";
import man1 from "../assets/man.png";
import girl1 from "../assets/girl.jpg";
import girl3 from "../assets/girl3.png";
import Offering from "../components/Offering";
import logo from "../assets/logo.png";
import { GiCheckMark } from "react-icons/gi";
import { Parallax } from "react-parallax";
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="header" style={{ backgroundImage: `url(${man1})` }}>
          <h1 className="display-1">السر الذهبي</h1>
          <h3>اجذب كل النساء</h3>
        </div>
        <div>
          <iframe
            width="987"
            height="555"
            src="https://www.youtube.com/embed/cm2o-SwNhU0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <Parallax bgImage={girl3}>
          <div className="intro">
            <h3>احصل على اي امرأة تعجبك</h3>
            <h3>وانجح في حياتك الزوجية</h3>
          </div>
        </Parallax>

        <div className="purchase">
          <Offering
            image={logo}
            title="نطام الجاذبية"
            description=" تعلم كيف تلعب اللعبة وتصبح في مركز السيطرة"
            price="$50"
          />

          <Offering
            image={logo}
            title="الشخصية اللامعة"
            description="اصبح جذاب للنساء بشكل طبيعي"
            price="$100"
            recommended={true}
          />

          <Offering
            image={logo}
            title="التواصل الروحاني"
            description="ابني علاقة مع اي شخص بسرعة"
            price="$20"
          />
        </div>
        <div className="benefits">
          <div>
            <h3 className="text-warning">اسرار لن تجدها في اي كورس اخر</h3>
            <h3>اصبح رجل ذو شخصية قوية</h3>
            <h3>اصبح شخصا مرحا ذو حدس فكاهة</h3>
            <h3>لا تتوتر مجددا او تخاف من التكلم مع النساء</h3>
            <h3>ابني علاقة قوية مع اي انسان بسرعة فائقة</h3>
          </div>
          <div id="benefitslist">
            <h3 className="text-end">ماذا تستفيد</h3>
            <ul className="text-end">
              <li>
                اصبح رجل جذاب للنساء <GiCheckMark color="gold" />{" "}
              </li>
              <li>
                كن لديك حياة زوجية ناجحة <GiCheckMark color="gold" />
              </li>
              <li>
                اجعل زوجتك تحبك وتحترمك <GiCheckMark color="gold" />
              </li>
              <li>
                زوجتك لن تنضر لغيرك <GiCheckMark color="gold" />
              </li>
              <li>
                تحصل على اي امرأة تريد <GiCheckMark color="gold" />
              </li>
              <li>
                تعلم كيف تجذب اي امرأة <GiCheckMark color="gold" />
              </li>
              <li>
                تعلم حدس الفكاهة <GiCheckMark color="gold" />
              </li>
              <li>
                تعلم كيف تبني اتصال عميف في وقت قصير{" "}
                <GiCheckMark color="gold" />
              </li>
              <li>
                تعلم كيف تصبح رجل ذو قيمة عالية <GiCheckMark color="gold" />
              </li>
              <li>
                تعلم كيف تغوي النساء <GiCheckMark color="gold" />
              </li>
              <li>
                تعلم كيف تعطي زوجتك متعة كبيرة <GiCheckMark color="gold" />
              </li>
              <li>
                اصبح من اكثر الرجال نجاحا جنسيا <GiCheckMark color="gold" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
