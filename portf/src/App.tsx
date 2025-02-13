/* eslint-disable */
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Profile from "./images/profile.jpg";
import Contact from "./images/phone-call.png";
import Down from "./images/arrow-down.png";
import ReactFullpage from '@fullpage/react-fullpage';

const myname = ["Front-end Developer", "KwonHaeJin's", 'PORTFOLIO'];

function App() {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [showLine, setShowLine] = useState(false);
  const [startAdding, setStartAdding] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    setVisibleMessages([myname[0]]);
    setShowLine(true);

    setTimeout(() => {
      setStartAdding(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (!startAdding || index >= myname.length - 1) return; // ✅ 3개가 다 표시되면 종료

    const interval = setInterval(() => {
      setVisibleMessages((prev) => [...prev, myname[index + 1]]); // 새로운 메시지 추가
      setIndex((prevIndex) => prevIndex + 1); // 다음 메시지로 이동
    }, 500);

    return () => clearInterval(interval); // ✅ 3개가 다 나오면 setInterval 정지
  }, [startAdding, index]);

  useEffect(() => {
    if (visibleMessages.length === myname.length && showLine) {
      setTimeout(() => {
        setIsAnimationComplete(true); // ✅ 모든 애니메이션이 끝났다고 표시
      }, 500); // 마지막 애니메이션 후 약간의 딜레이 추가
    }
  }, [visibleMessages, showLine]);

  useEffect(() => {
    if (isAnimationComplete) {
      setTimeout(() => {
        setShowScrollHint(true); // ✅ 멘트 표시
      }, 500);
    }
  }, [isAnimationComplete]);

  return (
    <div className="bg-blue-100 w-full overflow-x-hidden scrollbar-hide overflow-auto min-h-screen flex flex-col">
      <ReactFullpage
        licenseKey=""
        scrollingSpeed={1000}
        navigation={false}
        credits={{ enabled: false }}
        autoScrolling={true}
        fitToSection={false}
        scrollBar={true}
        render={() => (
          <ReactFullpage.Wrapper>
            {/* 첫번째 섹션 표지 */}
            <div className="section first-section">
              <div className="w-screen flex flex-col items-start mt-4 ml-4">
                {visibleMessages.length > 0 && (
                  <motion.div
                    className="text-[28px] font-empha text-center p-4 md:text-5xl"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    {visibleMessages[0]}
                  </motion.div>
                )}

                {/* 실선 */}
                {showLine && (
                  <motion.div
                    className="bg-slate-400 h-[1.5px] ml-[-16px] md:mt-4 md:mb-4 md:h-[2px]"
                    initial={{ width: "0%", x: -100 }}
                    animate={{ width: "85%", x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                )}
                {visibleMessages.slice(1).map((msg, i) => (
                  <motion.div
                    key={i}
                    className="text-[28px] font-empha text-center pl-4 pt-3 md:text-5xl md:mb-2 md:mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    {msg}
                  </motion.div>
                ))}
                {showScrollHint && (
                  <motion.div
                    className="h-10 w-full text-base text-gray-700 flex flex-row items-center justify-center absolute bottom-4 lg:bottom-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeInOut",
                      repeat: Infinity, 
                      repeatType: "mirror" 
                    }}
                  >
                   <img src={Down} className="w-4 h-4 mx-3"></img>
                   <p>아래로 스크롤해보세요!</p>
                   <img src={Down} className="w-4 h-4 mx-3"></img>
                  </motion.div>
                )}
              </div>
            </div>
            {/* 두번째 섹션 프로필 */}
            <div className="section h-screen w-full flex flex-col justify-center items-center">
              <div className="flex flex-row items-center justify-center h-full w-full">
                <img src={Profile} className="w-[40%] h-3/2 rounded-2xl md:w-[25%]"></img>
                <span className="h-52 w-[2px] bg-slate-500 ml-4 mr-4 md:h-80 lg:h-80 xl:h-72"></span>
                <div className="flex-col flex">
                  <div className="flex flex-row items-center mb-2 md:mb-16 xl:mb-16">
                    <img src={Contact} className="w-6 h-6 md:w-10 md:h-10"></img>
                    <p className="text-xl ml-3 font-semibold md:text-4xl md:ml-6 ">Contact</p>
                  </div>
                  <div className="flex flex-col md:flex-row lg:flex-row">
                    <p className="text-lg font-semibold -mb-1 md:text-3xl">Tel</p>
                    <p className="text-lg ml-2 mb-1 md:text-3xl md:mb-6  xl:mb-8">010-2109-0228</p>
                  </div>
                  <div className="flex flex-col md:flex-row lg:flex-row">
                    <p className="text-lg font-semibold -mb-1 md:text-3xl">E-mail</p>
                    <p className="text-lg ml-2 mb-1 md:text-3xl md:mb-6 xl:mb-8">hjji0922@naver.com</p>
                  </div>
                  <div className="flex flex-col md:flex-row lg:flex-row">
                    <p className="text-lg font-semibold -mb-1 md:text-3xl">Github</p>
                    <a href="https://github.com/KwonHaeJin" target="_blank" rel="noopener noreferrer" className="underline ml-2 text-lg md:text-3xl">github.com/KwonHaeJin</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="section"></div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default App;
