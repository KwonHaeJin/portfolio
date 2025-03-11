/* eslint-disable */
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Profile from "./images/profile.jpg";
import Contact from "./images/phone-call.png";
import Down from "./images/arrow-down.png";
import ReactFullpage from '@fullpage/react-fullpage';

const myname = ["Front-end Developer", "KwonHaeJin's", 'PORTFOLIO'];
const contactInfo = [
  { label: "Tel", value: "010-2109-0228" },
  { label: "E-mail", value: "hjji0922@naver.com" },
  { label: "Github", value: "https://github.com/KwonHaeJin", isLink: true },
];
const certificates = [
  { name: "정보처리기사", date: "2024.09.10" },
  { name: "SQLD", date: "2024.12.13" },
  { name: "HSK 5급", date: "2024.04.21" },
];
const skills = [
  { category: "#FFE9D0", skills: ["Javascript", "Typescript", "HTML", "Dart"] },
  { category: "#EEF3ED", skills: ["React", "ReactNative", "Flutter", "VSCode", "AndroidStudio"] },
  { category: "#F1D3CE", skills: ["TailwindCss", "CSS3"] },
  { category: "#F8F3DE", skills: ["Github", "Swagger", "Figma"] },
];
const education = [
  { period: "2019.03 ~ 2021.02", school: "경일여자고등학교" },
  { period: "2021.03 ~ 2025.02", school: "계명대학교 컴퓨터공학과", grade: "4.07 / 4.5" },
];

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
            <div className="section h-screen w-full flex flex-col justify-center items-center xl:flex-row xl:justify-between">
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 justify-start items-start xl:top-12 xl:left-4 xl:translate-x-0 ">
                <motion.div
                  className="flex flex-col justify-start items-start w-full xl:h-96"
                  initial={{ opacity: 0, y: 0 }}
                  animate={animateProfile ? { opacity: 1, y: 50 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <img src={Profile} className="w-[30vw] h-[18vh] rounded-lg mr-4 mb-5 md:w-[29vw] md:h-[26vh] lg:w-[24vw] lg:h-[24vh] xl:h-[30vh] xl:w-[12vw] xl:mb-10"></img>
                  <div className="flex-col flex justify-start items-start">
                    <div className="flex flex-row items-center pb-6 md:mb-16 lg:mb-4 xl:mb-10">
                      <p className="text-xl font-empha lg:text-4xl xl:text-[36px] ">Contact</p>
                      <span className="ml-2 w-[61vw] h-[1px] bg-black lg:w-[67vw] xl:w-[38vw] xl:h-[2px]"></span>
                    </div>
                    <div className="bg-white rounded-lg w-[82vw] p-2 xl:w-[49vw]">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex flex-row xl:justify-between xl:mx-5">
                          <p className="text-lg font-semibold -mb-1 md:text-3xl">{item.label}</p>
                          {item.isLink ? (
                            <a
                              href={item.value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline ml-2 text-lg md:text-3xl"
                            >
                              {item.value.replace("https://", "")}
                            </a>
                          ) : (
                            <p className="text-lg ml-2 mb-1 md:text-3xl md:mb-6 xl:mb-8">{item.value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              {showadvantage &&
                <div className="absolute bottom-20 flex-col justify-start items-start xl:left-[51.5vw] xl:top-[14vh]">
                  <motion.p
                    className="flex flex-row items-center justify-start w-full pb-6 font-empha text-xl md:text-3xl md:mb-6 lg:text-4xl xl:mb-8 xl:text-[36px]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >Advantage<span className="ml-2 w-[53vw] h-[1px] bg-black lg:w-[62vw] xl:w-[32vw] xl:h-[2px]"></span>
                  </motion.p>
                  <motion.div
                    className="bg-white rounded-t-lg w-[83vw] flex flex-row items-start justify-start xl:w-[47vw]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="mb-2 flex flex-row md:flex-row lg:flex-row xl:mt-4">
                      <p className="text-lg lg:text-4xl xl:text-[28px]">🧐</p>
                      <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-8 xl:text-[28px]">
                        <span className="text-purple-600">세심</span>하고  <span className="text-purple-600">침착</span>한 성격을 바탕으로
                        <span className="text-purple-600"> 작은<br className="lg:hidden xl:hidden" /><span className="hidden lg:inline xl:inline">&nbsp;</span>디테일</span>까지 <br className="hidden xl:inline"></br>놓치지 않습니다.</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-row items-start justify-start bg-white w-[83vw] xl:w-[47vw]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="mb-2 flex flex-row md:flex-row lg:flex-row">
                      <p className="text-lg lg:text-4xl xl:text-[28px]">🏃</p>
                      <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-8 xl:text-[28px]">
                        새로운 것을 <span className="text-purple-600">배우는 속도</span>가 빠르며<span className="text-purple-600"> 도전<br className="lg:hidden xl:hidden" /></span>하는 데 <br className="hidden xl:inline" />두려움이 없습니다.</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-row items-start justify-start bg-white w-[83vw] xl:w-[47vw]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="mb-2 flex flex-row md:flex-row lg:flex-row">
                      <p className="text-lg lg:text-4xl xl:text-[28px]">👌</p>
                      <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-8 xl:text-[28px]">어려운 문제도 <span className="text-purple-600">끈기</span>를 가지고 끝까지 해결<br className="lg:hidden xl:hidden" />하려고 <br className="hidden xl:inline" />노력합니다.</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-row items-start justify-start bg-white rounded-b-lg w-[83vw] xl:w-[47vw]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="flex flex-row md:flex-row lg:flex-row">
                      <p className="text-lg lg:text-4xl xl:text-[28px]">👂</p>
                      <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-8 xl:text-[28px]">상대방의 말에 귀 기울이고 본인의 의견을<br className="lg:hidden xl:hidden" /><span className="hidden lg:inline xl:inline">&nbsp;</span>명확하게 <br className="hidden xl:inline" />전달할 수 있는 <span className="text-purple-600">커뮤니케이션 <br className="lg:hidden xl:hidden" />능력</span>을 갖추고 있습니다.</p>
                    </div>
                  </motion.div>
                </div>
              }
            </div>
            {/*세번째 섹션*/}
            <div className="section h-screen w-full flex flex-col justify-center items-center xl:flex-row">
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 justify-start items-start xl:left-4 xl:translate-x-0 xl:top-48">
                <motion.div
                  className="flex flex-col justify-start items-start w-full xl:h-96"
                  initial={{ opacity: 0, x: -50 }}
                  animate={showcertifi ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="flex-col flex justify-start items-start">
                    <div className="flex flex-row items-center pb-6 md:mb-16 lg:mb-24 xl:mb-16">
                      <p className="text-xl font-empha md:text-4xl md:ml-6 xl:ml-0">Certificate</p>
                      <span className="ml-2 w-56 h-[1px] bg-black xl:h-[2px]"></span>
                    </div>
                    <div className="bg-white rounded-lg w-[82vw] p-2 xl:w-[30vw]">
                      {certificates.map((cert, index) => (
                        <div key={index} className="flex flex-row md:flex-row lg:flex-row">
                          <p className="text-lg font-semibold -mb-1 md:text-3xl">{cert.name}</p>
                          <p className="text-lg ml-2 mb-1 md:text-3xl md:mb-6 xl:mb-8">{cert.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              {showskill &&
                <div className="absolute top-72 left-1/2 transform -translate-x-1/2 justify-start items-start xl:left-1/3 xl:translate-x-0 xl:top-48">
                  <motion.div
                    className="flex flex-col items-center w-full pb-6 font-empha text-xl md:text-3xl md:mb-6  xl:mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={showcertifi ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="flex flex-row items-center pb-6 md:mb-16 lg:mb-24 xl:mb-16">
                      <p className="text-xl font-empha md:text-4xl md:ml-6 xl:ml-0">Skills</p>
                      <span className="ml-2 w-[68vw] h-[1px] bg-black xl:h-[2px] xl:w-[24vw]"></span>
                    </div>
                    {skills.map((group, index) => (
                      <div key={index} className="flex flex-wrap gap-2 items-start justify-start w-[82vw] mt-2 xl:w-[31vw]">
                        {group.skills.map((skill, idx) => (
                          <p
                            key={idx}
                            className="rounded-lg text-gray-600 pl-2 pr-2"
                            style={{ backgroundColor: group.category }}
                          >
                            {skill}
                          </p>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </div>
              }
              {showEdu &&
                <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 justify-start items-start xl:left-2/3 xl:translate-x-0 xl:top-48">
                  <motion.div
                    className="flex flex-col items-center w-full pb-6 font-empha text-xl md:text-3xl md:mb-6  xl:mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={showskill ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="flex-col flex justify-start items-start">
                      <div className="flex flex-row items-center pb-6 md:mb-16 lg:mb-24 xl:mb-16">
                        <p className="text-xl font-empha md:text-4xl md:ml-6 xl:ml-0">Education</p>
                        <span className="ml-2 w-[56vw] h-[1px] bg-black xl:h-[2px] xl:w-[18vw]"></span>
                      </div>
                      <div className="bg-white rounded-lg w-[82vw] p-2 xl:w-[31vw]">
                        {education.map((edu, index) => (
                          <div key={index} className="mb-4">
                            <p className="text-lg font-sans md:text-3xl md:mb-6 xl:mb-2">{edu.period}</p>
                            <p className="text-lg font-semibold md:text-3xl">{edu.school}</p>
                            {edu.grade && <p className="text-lg font-semibold md:text-3xl">{edu.grade}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              }
            </div>
            {/*네번째 섹션*/}
            <div className="section h-screen w-full flex flex-col justify-center items-center">

            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default App;
