import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return (
   <div className={s.item}>
      <img
      src="https://yandex-images.clstorage.net/fe56B1B29/9c340bj2yIu/rvOoj5NEdIvxnAlyDstYBQjhG0eHymDqQFuDy7fGRNLry-PpL8NV-Rem70Gt7uPRAY_TCMzv0GvGt2S7Zl72PXqg-4lU17YLsZzKMEgJGcfK4tlGgsugfFWdVklzBBAAusk25_QdXCeYLXZfZaQ9QwGZxEkL6RR7iGxn5viJYy4r9upCUR0xy7BHQb5Hh51AH2-cSJZMuWCETBoLM1zdwrNSJyB3Ex-iXSo_kejr_A3LGU6MCfebs4Jv_WK1Qybjr3tjBhTdvE7wzQu6hkfcCR9vm0SSTH5oR86aCHrTlIY0l6zjelOabB7uNl7s6rYAAB_FjQgxWrMHIztt9QaoZ6I24U8aGvxJe00Mds9Blwje7xFE0Aa_4ItNkoKxE1VPddpmqPMfWSrTpXlULKp8QMwbDsRP8102Rap_rv1N4C6lfaBFHxI-y_WEDb-PwR0AVmeYxpTFPSlKyFMGuxESiDefImG6k5Fj06YwnOGv_44PlswNB3hctcWpsmQ8i2ag43ikx5Nd9cv-SQN_AMFTjRqrXoTXzfJsxQ7QQv4aGoow3Wmp_thfrZOj9pYmKH0IS5ZFi0U50TTE4DUi84Un7-f7bc8Wn71B8YnCd8GBUgOQa98A3E10qsCIE4c0EhsEtdvnov3XXy2e7jnUJ-D7hArZjkKPulN3DqB2b_TCquKlMmpCmR18R7_NRjAAQRjCGWBaSRRItqpLwdLGdBGSCv6e6S2yH9AlVK1_Xi-lfAlJng2Dz3PatEzu82-8wijjqvfsSZuU9gu5zcVzD8qZh1GoX4ldTnphhEGYA74RHMjy0CLgvZDf5FGn8Z_m7DSPyt7OAc4w3bQF573ldQUhIOW06cJV0jYP_A2HtwkI1cVQYRxA0on2LgWEXYP71JCE89RjKvEZV2oU5nRTaKW1DwAfTACBOdn4zOL1J_kJYKCk9OiNHlQ1y32KBbqOD5SLUOubCFCGMmlJDVtOMo"/>
      {props.message}
      <div>
         <span>like</span> {props.likesCount}
      </div>
   </div>
   );
}

export default Post;