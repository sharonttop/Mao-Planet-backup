import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import ReadingProgress from '../../components/ReadingProgress'

import ArticlePic1 from '../../images/BlogArticle/ArticlePic1_805x500.jpg'
import ArticlePic2 from '../../images/BlogArticle/ArticlePic2_805x500.jpg'
import ArticlePic3 from '../../images/BlogArticle/ArticlePic3_805x500.jpg'
import ArticlePic4 from '../../images/BlogArticle/ArticlePic4_805x500.jpg'
import rHotTopic1 from '../../images/BlogArticle/rHotTopic1_100x100.jpg'
import rHotTopic2 from '../../images/BlogArticle/rHotTopic2_100x100.jpg'
import rHotTopic3 from '../../images/BlogArticle/rHotTopic3_100x100.jpg'

import './BlogArticle.scss'

function BlogArticle1(props) {
  //   const { auth } = props
  // const target = React.createRef()

  return (
    <>
      <div id="ACblogContent" className="d-flex justify-content-center p-0">
        <Row>
          <div className="ACblogArticle-container col-md-9 col-11">
            <p className="ACblogArticleDate">2021-09-06 發佈文章</p>
            <h1>養貓新手必備知識</h1>
            <p className="ACblogArticleText">文／獸醫師劉子華的。貓。語生活</p>
            <div>
              <img src={ArticlePic1} alt=" " className="ACblogArticlePic" />
            </div>
            <p className="ACblogArticleText">
              這篇文章是寫給家中有一歲以內的幼貓、或是準備新養貓的家長們看的，因為看診時經常遇到家長覺得疑惑，為什麼獸醫說的「預防針注射計劃」跟寵物業者、還有隔壁老王說的都不一樣？甚至不同的獸醫也有不同的講法？另外也會提到我個人對於結紮相關的建議、以及寄生蟲的預防（你以為室內貓就不會被寄生蟲感染嗎？），把家長該知道的重點都統整出來，希望能解除大家心中的疑惑、充實醫療保健相關的知識，讓新手貓奴們升級成更稱職的毛孩爸媽！
            </p>
            <br />
            <h3>為什麼要打預防針？</h3>
            <p className="ACblogArticleText">
              預防針這種東西會被發明出來，就是因為可以有效避免一些常見的傳染病，或是讓感染比較不嚴重/恢復更快。台灣有許多種類的傳染病存在，會造成貓咪的各種不適，例如很常見的皰疹病毒，讓貓一把鼻涕一把眼淚、可能一輩子沒完沒了。若不幸感染到比較凶狠的（例如小病毒腸炎）甚至可能因此死亡，就算幸運耐過了，住院治療的費用也是一大筆開銷，這其實都是可以靠著打預防針去避免的。
            </p>
            <br />
            <h3>預防針裡面有哪些疫苗成份？</h3>
            <p className="ACblogArticleText">
              最基本的核心疫苗，也就是「貓三合一」，能夠抵抗皰疹病毒（Herpesevirus）、卡里西病毒（Calicivirus）以及小病毒（Parvovirus），建議所有貓咪都要施打。另外還有「貓五合一」就是三合一另外再加上白血病（FeLV）以及披衣菌（Chlamydia）。
            </p>
            <br />
            <h3>聽說打疫苗會長腫瘤，這麼恐怖？</h3>
            <p className="ACblogArticleText">
              貓注射部位肉瘤（FISS）是一種惡性腫瘤，發生原因目前不明，被懷疑是跟有佐劑的疫苗注射（例如白血病以及狂犬病）有關，因此如果只是施打一般核心疫苗或是無佐劑的疫苗，發生此病的機會是很低很低的。相比之下，因為沒有施打疫苗、或環境沒有做好消毒處理因此感染小病毒腸炎死亡的貓咪反而多很多…
            </p>
            <div>
              <img src={ArticlePic2} alt=" " className="ACblogArticlePic" />
            </div>
            <h3>幼貓預防針到底要打幾次？</h3>
            <p className="ACblogArticleText">
              一般來說是三次，也就是在兩個月、三個月及四個月大的時候施打預防針。若是三個月以後才開始打的，兩次就好；但是那些兩個月大以前已經打過一次的，總共要打四次。
              <br />
              <br />
              為什麼這麼複雜？其實原因就在來自母體的移行抗體。這東西是來自貓媽媽的禮物，幫助幼貓可以抵抗疾病，直到四個月大左右才會慢慢消失，但是移行抗體的存在卻會干擾疫苗的效果，因此最後一次施打的時間建議不要早於四個月。另外，許多疫苗都需要連續打兩次才能產生足夠的效果，所以兩個因素加在一起就有了現在的預防注射計劃，但也只是基本原則，因為每隻貓咪的年齡跟生活環境都不同，所以還是需要獸醫師視情況來決定怎麼打。
              <br />
              <br />
              美國動物醫院協會 AAHA 以及美國貓醫師協會 AAFP
              是具有公信力的單位，根據他們在2020年發表的最新指引方針，有兩件事情想讓大家知道：
              <br />
              1.
              除了前面提到的預防注射計畫之外，建議六個月大的時候額外再補強一次核心疫苗（貓三合一）。因為據統計有近1/3的貓在四個月大的時候還是有移行抗體，因此六個月時多補強一次可以為牠們提供更好的保護效果。
              <br />
              2.完成基礎預防注射計畫的貓咪，若是都待在低風險的環境（例如純室內單貓家庭），未來每三年補強一次也是可以的。
              <br />
              <br />
              狂犬病疫苗是台灣法律規定要打的，因為這是可以從動物傳染給人的可怕疾病，而且台灣近年也有不少野生動物感染狂犬病的案例，因此也是建議施打。不過考慮到貓注射部位肉瘤的問題，現在市面上有可以降低風險的「無佐劑」狂犬病疫苗可以選擇。
              <br />
              <br />
              <span className="ACblogArticleSpan">
                小結論：幼貓兩個月大左右就要帶去給獸醫檢查打針囉！個人建議一般貓咪選擇三合一就可以了，如果是半放養、或是在貓舍/多貓家庭/家中有貓咪已經有傳染性疾病的，再跟你的獸醫師討論適當的做法吧！
              </span>
            </p>
            <div>
              <img src={ArticlePic3} alt=" " className="ACblogArticlePic" />
            </div>
            <h3>關於結紮的建議</h3>
            <p className="ACblogArticleText">
              <br />
              <span className="ACblogArticleSpan">如果你養的是公貓：</span>
              <br />
              結紮主要是為了改善或避免行為方面的問題，例如亂尿尿、打鬥、發情期想逃家或是夜晚嚎叫等等。結紮的時間沒有急迫性。
              <br />
              <span className="ACblogArticleSpan">如果養的是母貓：</span>
              <br />
              非常建議結紮。性荷爾蒙被認為與乳腺腫瘤的發生有關，且在貓咪的乳腺腫瘤有高達八成以上是惡性的。沒有結紮的母貓除了不定期、長時間的發情期可能造成困擾之外，在未來也會有機會產生子宮蓄膿的情形，而且並不少見；這兩個月內我們醫院就有兩隻，而且一隻一歲半、另一隻才六個月大...萬一真的有子宮蓄膿首選治療方式一樣是手術切除，與其老了病了還在承擔風險開刀，不如年輕的時候早點做一做術後復原又快。
              <br />
              <span className="ACblogArticleSpan">公貓母貓都有的家庭：</span>
              <br />
              如果沒有打算要讓牠們生小貓，建議五個月大左右就要結紮了。母貓性成熟的時間會根據本身營養狀況及季節等稍有變化，可能六個月就開始有生育能力了！不能因為牠們看起來還小小隻的就大意唷！
            </p>
            <div>
              <img src={ArticlePic4} alt=" " className="ACblogArticlePic" />
            </div>
            <br />
            <p className="ACblogArticleRef">
              參考資料：https://www.aaha.org/globalassets/02-guidelines/feline-vaccination-guidlines/resource-center/2020-aahaa-afp-feline-vaccination-guidelines.pdf
            </p>
          </div>
        </Row>
        <div className="ACblogRCol col-md-3 d-md-block d-none">
          <div className="ACRColTitle">
            <h5>熱門文章</h5>
          </div>
          <div className="d-flex my-3">
            <Link to="#/" className="d-flex ACblogRColText">
              <div className="ACblogListPic mr-3">
                <img src={rHotTopic1} alt="" />
              </div>
              <div>
                <h6>別讓貓咪不開心～為什麼貓咪常亂尿尿？</h6>
                <p className="ACRCol-HotTopicDate">2021-11-09</p>
              </div>
            </Link>
          </div>
          <div className="d-flex my-3">
            <Link to="#/" className="d-flex ACblogRColText">
              <div className="ACblogListPic mr-3">
                <img src={rHotTopic2} alt="" />
              </div>
              <div>
                <h6>如何幫狗狗選擇美容店？</h6>
                <p className="ACRCol-HotTopicDate">2021-10-18</p>
              </div>
            </Link>
          </div>
          <div className="d-flex my-3">
            <Link to="#/" className="d-flex ACblogRColText">
              <div className="ACblogListPic mr-3">
                <img src={rHotTopic3} alt="" />
              </div>
              <div>
                <h6>什麼是貓瘟？</h6>
                <p className="ACRCol-HotTopicDate">2021-10-05</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="ACblogRCol mb-5 col-12 d-md-none d-block">
        <div className="ACRColTitle">
          <h5>熱門文章</h5>
        </div>
        <div className="d-flex my-3">
          <Link to="#/" className="d-flex ACblogRColText">
            <div className="ACblogListPic mr-3">
              <img src={rHotTopic1} alt="" />
            </div>
            <div>
              <h6>別讓貓咪不開心～為什麼貓咪常亂尿尿？</h6>
              <p className="ACRCol-HotTopicDate">2021-11-09</p>
            </div>
          </Link>
        </div>
        <div className="d-flex my-3">
          <Link to="#/" className="d-flex ACblogRColText">
            <div className="ACblogListPic mr-3">
              <img src={rHotTopic2} alt="" />
            </div>
            <div>
              <h6>如何幫狗狗選擇美容店？</h6>
              <p className="ACRCol-HotTopicDate">2021-10-18</p>
            </div>
          </Link>
        </div>
        <div className="d-flex my-3">
          <Link to="#/" className="d-flex ACblogRColText">
            <div className="ACblogListPic mr-3">
              <img src={rHotTopic3} alt="" />
            </div>
            <div>
              <h6>什麼是貓瘟？</h6>
              <p className="ACRCol-HotTopicDate">2021-10-05</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogArticle1
