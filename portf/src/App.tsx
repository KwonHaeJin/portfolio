/* eslint-disable */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { useMediaQuery } from "./useMediaQuery";
import { myname, contactInfo, certificates, skills, education, projectData } from './information';
import { ChainedAni, IntroAni, IntroMessage, ShowScrollHint } from './animationState'
import Projectpopup from "./ProjectPopup";
import Profile from "./images/profile.jpg";
import Name from "./images/name.png";
import Birth from "./images/cake.png";
import Down from "./images/arrow-down.png";
import ReactFullpage from '@fullpage/react-fullpage';


function App() {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [showLine, setShowLine] = useState(false);
  const [startAdding, setStartAdding] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [animateProfile, setAnimateProfile] = useState(false);
  const [showadvantage, setShowadvange] = useState(false);
  const [showcertifi, setShowcertifi] = useState(false);
  const [showskill, setShowskill] = useState(false);
  const [showEdu, setShowEdu] = useState(false);
  const [showPro, setShowPro] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [openPopup, setOpenPopup] = useState<number | null>(null);
  const XL = useMediaQuery('(min-width: 1280px)');

  IntroAni(myname, setVisibleMessages, setShowLine, setStartAdding);
  IntroMessage(myname, startAdding, index, setVisibleMessages, setIndex);
  ShowScrollHint(visibleMessages, myname, showLine, setShowScrollHint);
  ChainedAni(animateProfile, setShowadvange);
  ChainedAni(showcertifi, setShowskill);
  ChainedAni(showskill, setShowEdu);
  ChainedAni(showPro, setShowProject);

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
            setShowskill(false);
            setShowEdu(false);
            setShowPro(false);
            setShowProject(false);
          }
          else if (destination.index === 2) {
            setAnimateProfile(false);
            setShowcertifi(true);
            setShowskill(true);
            setShowEdu(true);
            setShowPro(false);
            setShowProject(false);
          }
          else if (destination.index === 3) {
            setAnimateProfile(false);
            setShowcertifi(false);
            setShowskill(false);
            setShowEdu(false);
            setShowPro(true);
            setShowProject(true);
          }
          else {
            setAnimateProfile(false);
            setShowcertifi(false);
            setShowskill(false);
            setShowEdu(false);
            setShowPro(false);
            setShowProject(false);
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
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 justify-start items-start md:top-12 xl:top-24 xl:left-4 xl:translate-x-0 ">
                <motion.div
                  className="flex flex-col justify-start items-start w-full xl:h-96"
                  initial={{ opacity: 0, x: -50 }}
                  animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="flex flex-row items-end">
                    <img src={Profile} className="w-[30vw] h-[18vh] rounded-lg mr-4 mb-5 md:w-[22vw] md:h-[20vh] lg:w-[24vw] lg:h-[24vh] xl:h-[30vh] xl:w-[12vw] xl:mb-11"></img>
                    <div className="w-40 pl-2 h-15 xl:h-24 flex flex-col mb-4 md:mb-5 xl:mb-10 justify-end">
                      <div className="flex flex-row items-center mb-3">
                        <img src={Name} className="w-5 h-5 md:w-8 md:h-8 xl:w-8 xl:h-8"></img>
                        <span className="font-empha text-base leading-none md:text-2xl md:pt-2 pl-2 xl:pl-1">권해진</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <img src={Birth} className="w-5 h-5 md:w-8 md:h-8 xl:w-8 xl:h-8"></img>
                        <span className="font-empha text-base md:text-2xl md:pt-2 pl-2 xl:pl-1 xl:pt-3">2002.02.21</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col flex justify-start items-start">
                    <div className="flex flex-row items-center pb-6 md:mb-0 lg:mb-4 xl:mb-10">
                      <p className="text-xl font-empha md:text-4xl lg:text-4xl xl:text-[36px] ">Contact</p>
                      <span className="ml-2 w-[61vw] h-[1px] bg-black md:w-[66vw] lg:w-[67vw] xl:w-[38vw] xl:h-[2px]"></span>
                    </div>
                    <div className="bg-white rounded-lg w-[82vw] p-2 md:p-4 xl:w-[49vw]">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex flex-row xl:justify-between xl:mx-5">
                          <p className="text-lg font-semibold -mb-1 md:text-3xl md:mr-4">{item.label}</p>
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
                <div className="absolute bottom-20 flex-col justify-start items-start md:top-[50vh] xl:left-[51.5vw] xl:top-[10vh]">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={animateProfile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <p className="flex flex-row items-center justify-start w-full pb-6 font-empha text-xl md:text-4xl md:mb-4 lg:text-4xl xl:mb-8 xl:text-[36px]">
                      Advantage
                      <span className="ml-2 w-[53vw] h-[1px] bg-black md:w-[59vw] lg:w-[62vw] xl:w-[32vw] xl:h-[2px]"></span>
                    </p>
                    <div className="bg-white rounded-lg w-[83vw] flex flex-col items-start justify-start md:p-2 xl:w-[47vw]">
                      <div className="mb-2 flex flex-row md:mt-4">
                        <p className="text-lg md:text-3xl lg:text-4xl xl:text-[28px]">🧐</p>
                        <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-8 xl:text-[28px]">
                          <span className="text-purple-600">세심</span>하고  <span className="text-purple-600">침착</span>한 성격을 바탕으로
                          <span className="text-purple-600"> 작은<br className="md:hidden" /><span className="hidden md:inline">&nbsp;</span>디테일</span><br className="hidden md:inline xl:hidden"/>까지 <br className="hidden xl:inline"></br>놓치지 않습니다.</p>
                      </div>
                      <div className="mb-2 flex flex-row md:flex-row lg:flex-row">
                        <p className="text-lg md:text-3xl lg:text-4xl xl:text-[28px]">🏃</p>
                        <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-8 xl:text-[28px]">
                          새로운 것을 <span className="text-purple-600">배우는 속도</span>가 빠르며<span className="text-purple-600"> 도전<br className="md:hidden" /></span>하는 데 <br className="hidden md:inline" />두려움이 없습니다.</p>
                      </div>
                      <div className="mb-2 flex flex-row md:flex-row lg:flex-row">
                        <p className="text-lg md:text-3xl lg:text-4xl xl:text-[28px]">👌</p>
                        <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-8 xl:text-[28px]">어려운 문제도 <span className="text-purple-600">끈기</span>를 가지고 끝까지 <br className="md:hidden" />해결하려고 <br className="hidden md:inline" />노력합니다.</p>
                      </div>
                      <div className="flex flex-row md:flex-row lg:flex-row">
                        <p className="text-lg md:text-3xl lg:text-4xl xl:text-[28px]">👂</p>
                        <p className="font-empha text-lg ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-4 xl:text-[28px]">상대방의 말에 귀 기울이고 본인의 의견을<br className="md:hidden" /><span className="hidden md:inline">&nbsp;</span>명확<br className="hidden md:inline xl:hidden"/>하게 <br className="hidden xl:inline"/>전달할 수 있는 <span className="text-purple-600">커뮤니케이션 <br className="md:hidden" />능력</span>을 갖추고 <br className="hidden md:inline xl:hidden"/>있습니다.</p>
                      </div>
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
                  initial={XL ? { opacity: 0, y: -50 } : { opacity: 0, x: -50 }}
                  animate={showcertifi ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="flex-col flex justify-start items-start">
                    <div className="flex flex-row items-center pb-6 md:mb-4 lg:mb-24 xl:mb-16">
                      <p className="text-xl font-empha md:text-4xl">Certificate</p>
                      <span className="ml-2 w-56 h-[1px] bg-black md:w-[56vw] xl:w-[16vw] xl:h-[2px]"></span>
                    </div>
                    <div className="bg-white rounded-lg w-[82vw] pl-4 pt-2 xl:pt-6 xl:w-[30vw]">
                      {certificates.map((cert, index) => (
                        <div key={index} className="flex flex-row md:flex-row lg:flex-row">
                          <p className="text-lg font-semibold -mb-1 md:text-3xl">{cert.name}</p>
                          <p className="text-lg ml-2 mb-2 md:text-3xl md:mb-4 xl:mb-6">{cert.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              {showskill &&
                <div className="absolute top-72 left-1/2 transform -translate-x-1/2 justify-start items-start md:top-[34vh] xl:left-1/3 xl:translate-x-0 xl:top-48">
                  <motion.div
                    className="flex flex-col items-center w-full pb-6 font-empha text-xl md:text-3xl md:mb-6 xl:mb-8"
                    initial={XL ? { opacity: 0, y: 50 } : { opacity: 0, x: 50 }}
                    animate={showcertifi ? { opacity: 1, x: 0, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="flex flex-row items-center pb-5 md:mb-4 lg:mb-24 xl:mb-16">
                      <p className="text-xl font-empha md:text-4xl">Skills</p>
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
                    initial={XL ? { opacity: 0, y: -50 } : { opacity: 0, x: -50 }}
                    animate={showcertifi ? { opacity: 1, x: 0, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="flex-col flex justify-start items-start">
                      <div className="flex flex-row items-center pb-6 md:mb-4 lg:mb-24 xl:mb-16">
                        <p className="text-xl font-empha md:text-4xl ">Education</p>
                        <span className="ml-2 w-[56vw] h-[1px] bg-black md:w-[58vw] xl:h-[2px] xl:w-[18vw]"></span>
                      </div>
                      <div className="bg-white rounded-lg w-[82vw] pl-4 pt-4 xl:w-[31vw]">
                        {education.map((edu, index) => (
                          <div key={index} className="mb-4">
                            <p className="text-lg font-sans md:text-3xl md:mb-2 xl:mb-2">{edu.period}</p>
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
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 justify-start items-start md:top-12 xl:left-[24.2vw] xl:translate-x-0 ">
                <motion.div
                  className="flex flex-col justify-start items-start w-full xl:h-96"
                  initial={{ opacity: 0, y: 0 }}
                  animate={showPro ? { opacity: 1, y: 50 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="flex flex-row items-center pb-6 xl:mb-16">
                    <span className="mr-2 w-[34vw] h-[1px] bg-black xl:h-[2px] xl:w-[20vw]"></span>
                    <p className="text-xl font-empha md:text-4xl">Projects</p>
                    <span className="ml-2 w-[34vw] h-[1px] bg-black xl:h-[2px] xl:w-[20vw]"></span>
                  </div>
                </motion.div>
              </div>
              {showProject && (
                <div className="absolute top-32 md:top-60 xl:top-48 ">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 50 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  > <div className="grid grid-cols-2 md:ml-10 xl:flex-row justify-between items-start gap-x-[2vw] gap-y-[14vw] md:gap-y-[8vw] w-[100vw] px-[2vw] xl:flex xl:flex-wrap xl:ml-0">
                      {projectData.map((project, index) => (
                        <div
                          key={index}
                          onClick={() => setOpenPopup(index)}
                          className="cursor-pointer relative flex flex-col items-center justify-start pt-3 md:pt-4 bg-white rounded-lg w-[47vw] h-[30vh] md:w-[42vw] md:h-[27vh] xl:w-[22vw] xl:h-[42vh] hover:shadow-lg transition"
                        >
                          <div className="flex items-center justify-center text-base md:text-2xl xl:text-xl bg-orange-500 text-white font-empha w-[42vw] h-6 mb-2 md:w-[32vw] md:h-8 xl:w-52 xl:h-9 rounded-lg xl:mb-4">
                            {project.title}
                          </div>
                          <div className="flex flex-col items-center justify-center text-sm md:text-lg xl:text-base font-sans font-semibold p-2 rounded-lg bg-[#FFE9D0] w-[42vw] md:w-[34vw] xl:w-[20vw] mb-0 text-slate-600 xl:mb-4">
                            {project.stack.map((line, i) => (
                              <span key={i}>{line}</span>
                            ))}
                          </div>
                          <div className="flex flex-col items-start justify-center font-sans font-semibold p-2 w-[45vw] text-sm md:w-[36vw] md:text-base xl:text-base xl:w-[20vw]">
                            {project.description.map((line, i) => (
                              <span key={i}>{line}</span>
                            ))}
                          </div>
                          <motion.div
                            className="absolute bottom-2 right-4 text-gray-500 text-xs font-empha"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 1,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatType: "mirror"
                            }}
                          >
                            Click me!</motion.div>
                        </div>
                      ))}
                      {projectData.map((project, index: number) => (
                        <Projectpopup 
                        key={index} 
                        isOpen={openPopup === index} 
                        onClose={() => setOpenPopup(null)}
                        title={project.title}
                        imgsrc={project?.imgsrc}
                        >
                          {project.description}
                        </Projectpopup>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default App;
