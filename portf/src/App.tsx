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
  const [animateProfile, setAnimateProfile] = useState(false);
  const [showadvantage, setShowadvange] = useState(false);
  const [showcertifi, setShowcertifi] = useState(false);
  const [showskill, setShowskill] = useState(false);
  const [showEdu, setShowEdu] = useState(false);

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

  useEffect(() => {
    if (animateProfile) {
      setTimeout(() => {
        setShowadvange(true); // ✅ 멘트 표시
      }, 500);
    }
  }, [animateProfile]);

  useEffect(() => {
    if (showcertifi) {
      setTimeout(() => {
        setShowskill(true); // ✅ 멘트 표시
      }, 500);
    }
  }, [showcertifi]);

  useEffect(() => {
    if (showskill) {
      setTimeout(() => {
        setShowEdu(true); // ✅ 멘트 표시
      }, 500);
    }
  }, [showskill]);

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
        afterLoad={(_, destination) => {
          if (destination.index === 1) {
            setAnimateProfile(true);
            setShowcertifi(false);
            setShowskill(false); // 추가
            setShowEdu(false);   // 추가
          }
          else if (destination.index === 2) {
            setAnimateProfile(false);
            setShowcertifi(true);
          }
          else {
            setAnimateProfile(false);
            setShowcertifi(false);
            setShowskill(false); // 추가
            setShowEdu(false);   // 추가
          }
        }}
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
                    <img src={Down} className="w-4 h-4 mr-2"></img>
                    <p>아래로 스크롤해보세요!</p>
                    <img src={Down} className="w-4 h-4 mx-2"></img>
                  </motion.div>
                )}
              </div>
            </div>
            {/* 두번째 섹션 프로필 */}
            <div className="section h-screen w-full flex flex-col justify-center items-center">
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 justify-start items-start">
                <motion.div
                  className="flex flex-col justify-start items-start w-full xl:h-96"
                  initial={{ opacity: 0, y: 0 }}
                  animate={animateProfile ? { opacity: 1, y: 50 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <img src={Profile} className="w-[30vw] h-[18vh] rounded-lg mr-4 mb-5 md:w-[29vw] md:h-[26vh] lg:w-[26vw] lg:h-[24vh] xl:h-[38vh] xl:w-[16vw]"></img>
                  <div className="flex-col flex justify-start items-start">
                    <div className="flex flex-row items-center pb-6 md:mb-16 lg:mb-24 xl:mb-16">
                      <p className="text-xl font-empha md:text-4xl md:ml-6 ">Contact</p>
                      <span className="ml-2 w-[61vw] h-[1px] bg-black"></span>
                    </div>
                    <div className="bg-white rounded-lg w-[82vw] p-2">

                      <div className="flex flex-row md:flex-row lg:flex-row">
                        <p className="text-lg font-semibold -mb-1 md:text-3xl">Tel</p>
                        <p className="text-lg ml-2 mb-1 md:text-3xl md:mb-6  xl:mb-8">010-2109-0228</p>
                      </div>
                      <div className="flex flex-row md:flex-row lg:flex-row">
                        <p className="text-lg font-semibold -mb-1 md:text-3xl">E-mail</p>
                        <p className="text-lg ml-2 mb-1 md:text-3xl md:mb-6 xl:mb-8">hjji0922@naver.com</p>
                      </div>
                      <div className="flex flex-row md:flex-row lg:flex-row">
                        <p className="text-lg font-semibold -mb-1 md:text-3xl">Github</p>
                        <a href="https://github.com/KwonHaeJin" target="_blank" rel="noopener noreferrer" className="underline ml-2 text-lg md:text-3xl">github.com/KwonHaeJin</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {showadvantage &&
                <div className="absolute bottom-20 flex-col justify-start items-start">
                  <motion.p
                    className="flex flex-row items-center justify-start w-full pb-6 font-empha text-xl md:text-3xl md:mb-6  xl:mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >Advantage<span className="ml-2 w-[53vw] h-[1px] bg-black"></span>
                  </motion.p>
                  <motion.div
                    className="bg-white rounded-t-lg w-[83vw] flex flex-row items-start justify-start"
                    initial={{ opacity: 0, x: 50 }}
                    animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="mb-2 flex flex-row md:flex-row lg:flex-row">
                      <p className="text-lg">🧐</p>
                      <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6  xl:mb-8">
                        <span className="text-purple-600">세심</span>하고  <span className="text-purple-600">침착</span>한 성격을 바탕으로
                        <span className="text-purple-600"> 작은<br />디테일</span>까지 놓치지 않습니다.</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-row items-start justify-start bg-white w-[83vw]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="mb-2 flex flex-row md:flex-row lg:flex-row">
                      <p className="text-lg">🏃</p>
                      <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6  xl:mb-8">
                        새로운 것을 <span className="text-purple-600">배우는 속도</span>가 빠르며<span className="text-purple-600"> 도전<br /></span>하는 데 두려움이 없습니다.</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-row items-start justify-start bg-white w-[83vw]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="mb-2 flex flex-row md:flex-row lg:flex-row">
                      <p className="text-lg">👌</p>
                      <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6  xl:mb-8">어려운 문제도 <span className="text-purple-600">끈기</span>를 가지고 끝까지 해결<br />하려고 노력합니다.</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-row items-start justify-start bg-white rounded-b-lg w-[83vw]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="flex flex-row md:flex-row lg:flex-row">
                      <p className="text-lg">👂</p>
                      <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6  xl:mb-8">상대방의 말에 귀 기울이고 본인의 의견을<br />명확하게 전달할 수 있는 <span className="text-purple-600">커뮤니케이션 <br />능력</span>을 갖추고 있습니다.</p>
                    </div>
                  </motion.div>
                </div>
              }
            </div>
            {/*세번째 섹션*/}
            <div className="section h-screen w-full flex flex-col justify-center items-center">
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 justify-start items-start">
                <motion.div
                  className="flex flex-col justify-start items-start w-full xl:h-96"
                  initial={{ opacity: 0, x: -50 }}
                  animate={showcertifi ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="flex-col flex justify-start items-start">
                    <div className="flex flex-row items-center pb-6 md:mb-16 lg:mb-24 xl:mb-16">
                      <p className="text-xl font-empha md:text-4xl md:ml-6 ">Certificate</p>
                      <span className="ml-2 w-56 h-[1px] bg-black"></span>
                    </div>
                    <div className="bg-white rounded-lg w-[82vw] p-2">

                      <div className="flex flex-row md:flex-row lg:flex-row">
                        <p className="text-lg font-semibold -mb-1 md:text-3xl">정보처리기사</p>
                        <p className="text-lg ml-2 mb-1 md:text-3xl md:mb-6  xl:mb-8"> 2024.09.10</p>
                      </div>
                      <div className="flex flex-row md:flex-row lg:flex-row">
                        <p className="text-lg font-semibold -mb-1 md:text-3xl">SQLD</p>
                        <p className="text-lg ml-2 mb-1 md:text-3xl md:mb-6 xl:mb-8">2024.12.13</p>
                      </div>
                      <div className="flex flex-row md:flex-row lg:flex-row">
                        <p className="text-lg font-semibold -mb-1 md:text-3xl">HSK 5급</p>
                        <p className="text-lg ml-2 mb-1 md:text-3xl md:mb-6 xl:mb-8">2024.04.21</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {showskill &&
                <div className="absolute top-72 left-1/2 transform -translate-x-1/2 justify-start items-start">
                  <motion.div
                    className="flex flex-col items-center w-full pb-6 font-empha text-xl md:text-3xl md:mb-6  xl:mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={showcertifi ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="flex flex-row items-center pb-6 md:mb-16 lg:mb-24 xl:mb-16">
                      <p className="text-xl font-empha md:text-4xl md:ml-6 ">Skills</p>
                      <span className="ml-2 w-[68vw] h-[1px] bg-black"></span>
                    </div>
                    <div className="flex flex-wrap gap-2 items-start justify-start w-[82vw] ">
                      <p className="bg-[#FFE9D0] rounded-lg text-gray-600 pl-2 pr-2">Javascript</p>
                      <p className="bg-[#FFE9D0] rounded-lg text-gray-600 pl-2 pr-2">Typescript</p>
                      <p className="bg-[#FFE9D0] rounded-lg text-gray-600 pl-2 pr-2">HTML</p>
                      <p className="bg-[#FFE9D0] rounded-lg text-gray-600 pl-2 pr-2">Dart</p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-start justify-start w-[82vw] mt-2">
                      <p className="bg-[#EEF3ED] rounded-lg text-gray-600 pl-2 pr-2">React</p>
                      <p className="bg-[#EEF3ED] rounded-lg text-gray-600 pl-2 pr-2">ReactNative</p>
                      <p className="bg-[#EEF3ED] rounded-lg text-gray-600 pl-2 pr-2">Flutter</p>
                      <p className="bg-[#EEF3ED] rounded-lg text-gray-600 pl-2 pr-2">VSCode</p>
                      <p className="bg-[#EEF3ED] rounded-lg text-gray-600 pl-2 pr-2">AndroidStudio</p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-start justify-start w-[82vw] mt-2">
                      <p className="bg-[#F1D3CE] rounded-lg text-gray-600 pl-2 pr-2">TailwindCss</p>
                      <p className="bg-[#F1D3CE] rounded-lg text-gray-600 pl-2 pr-2">CSS3</p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-start justify-start w-[82vw] mt-2">
                      <p className="bg-[#F8F3DE] rounded-lg text-gray-600 pl-2 pr-2">Github</p>
                      <p className="bg-[#F8F3DE] rounded-lg text-gray-600 pl-2 pr-2">Swagger</p>
                      <p className="bg-[#F8F3DE] rounded-lg text-gray-600 pl-2 pr-2">Figma</p>
                    </div>
                  </motion.div>
                </div>
              }
              {showEdu &&
                <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 justify-start items-start">
                  <motion.div
                    className="flex flex-col items-center w-full pb-6 font-empha text-xl md:text-3xl md:mb-6  xl:mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={showskill ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="flex-col flex justify-start items-start">
                      <div className="flex flex-row items-center pb-6 md:mb-16 lg:mb-24 xl:mb-16">
                        <p className="text-xl font-empha md:text-4xl md:ml-6 ">Education</p>
                        <span className="ml-2 w-[56vw] h-[1px] bg-black"></span>
                      </div>
                      <div className="bg-white rounded-lg w-[82vw] p-2">
                        <p className="text-lg font-sans md:text-3xl md:mb-6 xl:mb-8">2019.03 ~ 2021.02</p>
                        <p className="text-lg font-semibold mb-2 md:text-3xl">경일여자고등학교</p>
                        <p className="text-lg font-sans md:text-3xl md:mb-6 xl:mb-8">2021.03 ~ 2025.02</p>
                        <p className="text-lg font-semibold -mb-1 md:text-3xl">계명대학교 컴퓨터공학과</p>
                        <p className="text-lg font-semibold -mb-1 md:text-3xl">4.07 / 4.5</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              }
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default App;
