/* eslint-disable */
import { useEffect, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./App.css";
import { myname, contactInfo, certificates, skills, education, projectData } from './information';
import { IntroAni, IntroMessage, ShowScrollHint } from './animationState';
import Projectpopup from "./ProjectPopup";
import Profile from "./images/profile.jpg";
import Name from "./images/name.png";
import Birth from "./images/cake.png";
import Down from "./images/arrow-down.png";

function Emphas({ text }: { text: string }) {
  return <span className="text-[#328E6E] font-semibold">{text}</span>;
}

function App() {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [startAdding, setStartAdding] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [openPopup, setOpenPopup] = useState<number | null>(null);
  const [showYoutube, setShowYoutube] = useState(false);
  const [showYoutube2, setShowYoutube2] = useState(false);
  const XL = useMediaQuery('(min-width: 1280px)');

  IntroAni(myname, setVisibleMessages, setStartAdding);
  IntroMessage(myname, startAdding, index, setVisibleMessages, setIndex);
  ShowScrollHint(visibleMessages, myname, setShowScrollHint);

  const extractYouTubeId = (url: string) => {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : '';
  };

  const handleClose = () => {
    setShowYoutube(false);
    setShowYoutube2(false);
    setOpenPopup(null);
  };

  const useSectionInView = () => {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
    return { ref, inView };
  };

  const intro = useSectionInView();
  const profile = useSectionInView();
  const cert = useSectionInView();
  const skillsSec = useSectionInView();
  const edu = useSectionInView();
  const projects = useSectionInView();

  return (
    <div className="bg-[#F9F2ED] w-full overflow-x-hidden scrollbar-hide overflow-auto min-h-screen flex flex-col">
      {/* 인트로 */}
      <section ref={intro.ref} className="min-h-screen flex flex-col items-center mt-40 md:mt-60 xl:mt-32">
        {visibleMessages.map((msg, i) => {
          const isSecondOrThird = i === 1 || i === 2;
          const isLast = i === 3;
          return (
            <motion.div
              key={i}
              className={`font-title leading-[12vh] md:leading-[14vh] xl:leading-[15.5vh] ${isLast
                ? "text-[25px] md:text-[42px] text-gray-500"
                : isSecondOrThird
                  ? "text-[42px] md:text-[80px] text-[#328E6E]"
                  : "text-[32px] md:text-[58px] text-black"}`}
              initial={{ opacity: 0, y: -20 }}
              animate={intro.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeIn" }}>
              <div>{msg}</div>
            </motion.div>
          );
        })}
        {showScrollHint && (
          <motion.div
            className="h-10 w-full text-base text-gray-700 flex flex-row items-center justify-center absolute bottom-4 lg:bottom-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}>
            <img src={Down} className="w-4 h-4 mr-2" />
            <p>아래로 스크롤해보세요!</p>
            <img src={Down} className="w-4 h-4 mx-2" />
          </motion.div>
        )}
      </section>

      {/* 프로필 + 어드밴티지 */}
      <section
        ref={profile.ref}
        className="min-h-screen flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-10 xl:px-[2vw] xl:gap-[4vw]">
        {/* 프로필 카드 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={profile.inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="flex flex-col xl:w-[40vw] items-center xl:items-start">
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
              <p className="text-xl font-subtitle md:text-4xl lg:text-4xl xl:text-[36px] ">Contact</p>
              <span className="ml-2 w-[61vw] h-[1px] bg-black md:w-[66vw] lg:w-[67vw] xl:w-[38vw] xl:h-[2px]"></span>
            </div>
            <div className="bg-white rounded-lg w-[82vw] p-2 md:p-4 xl:w-[49vw]">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex flex-row xl:justify-between xl:mx-5">
                  <p className="text-lg font-empha -mb-1 md:text-3xl md:mr-4">{item.label}</p>
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

        {/* 어드밴티지 카드 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={profile.inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
          className="flex flex-col xl:w-[46vw] items-center xl:items-start">

         
          <p className="flex flex-row items-center justify-start w-full pb-6 font-subtitle text-xl md:text-4xl md:mb-4 lg:text-4xl xl:mb-8 xl:text-[36px]">
            Advantage
            <span className="ml-2 w-[53vw] h-[1px] bg-black md:w-[59vw] lg:w-[62vw] xl:w-[40vw] xl:h-[2px]"></span>
          </p>
          <div className="bg-white rounded-lg w-[83vw] flex flex-col items-start justify-start md:p-2 xl:w-[46vw]">
            <div className="mb-2 flex flex-row md:mt-4">
              <p className="text-[16px] md:text-3xl lg:text-4xl xl:text-[28px]">🧐</p>
              <p className="font-empha text-[16px] ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-8 xl:text-[28px]">
                <Emphas text="세심" />하고 <Emphas text="침착" />한 성격을 바탕으로 작은 <Emphas text="디테일" />까지 놓치지 않습니다.</p>
            </div>
            <div className="mb-2 flex flex-row md:flex-row lg:flex-row">
              <p className="text-[16px] md:text-3xl lg:text-4xl xl:text-[28px]">🏃</p>
              <p className="font-empha text-[16px] ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-8 xl:text-[28px]">
                새로운 것을 <Emphas text="배우는 속도" />가 빠르며<Emphas text=" 도전" />하는 데 두려움이 없습니다.</p>
            </div>
            <div className="mb-2 flex flex-row md:flex-row lg:flex-row">
              <p className="text-[16px] md:text-3xl lg:text-4xl xl:text-[28px]">👌</p>
              <p className="font-empha text-[16px] ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-8 xl:text-[28px]">어려운 문제도 <Emphas text="끈기" />를 가지고 끝까지 해결하려고 노력합니다.</p>
            </div>
            <div className="flex flex-row md:flex-row lg:flex-row">
              <p className="text-[16px] md:text-3xl lg:text-4xl xl:text-[28px]">👂</p>
              <p className="font-empha text-[16px] ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:mb-4 xl:text-[28px]">상대방의 말에 귀 기울이고 본인의 의견을 명확하게 전달할 수 있는 <Emphas text="커뮤니케이션" /> 능력을 갖추고 있습니다.</p>
            </div>
          </div>
        </motion.div>
      </section>
      <section
        ref={cert.ref}
        className="min-h-screen flex flex-col items-center justify-center gap-10 xl:mt-[35vh] xl:flex-row xl:px-4 xl:gap-10 xl:items-start">
        {/* 자격증 */}
        <motion.div
         initial={XL ? { opacity: 0, y: 50 } : { opacity: 0, x: 50 }}
         animate={
           cert.inView
             ? XL
               ? { opacity: 1, y: 0 }
               : { opacity: 1, x: 0 }
             : XL
               ? { opacity: 0, y: 50 }
               : { opacity: 0, x: 50 }
         }
          transition={{ duration: 1 }}
          className="xl:w-1/3">
          <div className="flex-col flex justify-start items-start">
            <div className="flex flex-row items-center pb-3 md:mb-4 lg:mb-8 xl:mb-16">
              <p className="text-xl font-subtitle md:text-4xl">Certificate</p>
              <span className="ml-2 w-[54vw] h-[1px] bg-black md:w-[56vw] xl:w-[16vw] xl:h-[2px]"></span>
            </div>
            <div className="bg-white rounded-lg w-[82vw] pl-4 pt-2 md:pt-4 xl:pt-6 xl:w-[30vw]">
              {certificates.map((cert, index) => (
                <div key={index} className="flex flex-row md:flex-row lg:flex-row">
                  <p className="text-[15px] font-empha -mb-1 md:text-3xl">{cert.name}</p>
                  <p className="text-[15px] ml-2 mb-2 md:text-3xl md:mb-4 xl:mb-6">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 스킬 */}
        <motion.div
          initial={XL ? { opacity: 0, y: 50 } : { opacity: 0, x: -50 }}
          animate={
            cert.inView
              ? XL
                ? { opacity: 1, y: 0 }
                : { opacity: 1, x: 0 }
              : XL
                ? { opacity: 0, y: 50 }
                : { opacity: 0, x: -50 }
          }
          transition={{ duration: 1 }}
          className="xl:w-1/3">
          <div className="flex flex-row items-center pb-3 md:mb-4 lg:mb-8 xl:mb-16">
            <p className="text-xl font-subtitle md:text-4xl">Skills</p>
            <span className="ml-2 w-[68vw] h-[1px] bg-black lg:w-[72vw] xl:h-[2px] xl:w-[24vw]"></span>
          </div>
          {skills.map((group, index) => (
            <div key={index} className="flex flex-wrap gap-2 md:gap-4 xl:gap-2 items-start justify-start w-[82vw] mt-2 xl:w-[31vw]">
              {group.skills.map((skill, idx) => (
                <p
                  key={idx}
                  className="rounded-lg text-gray-600 font-empha text-[16px] md:text-[35px] md:py-2 px-2 xl:text-[30px]"
                  style={{ backgroundColor: group.category }}
                >
                  {skill}
                </p>
              ))}
            </div>
          ))}
        </motion.div>

        {/* 학력 */}
        <motion.div
          initial={XL ? { opacity: 0, y: 50 } : { opacity: 0, x: 50 }}
          animate={
            cert.inView
              ? XL
                ? { opacity: 1, y: 0 }
                : { opacity: 1, x: 0 }
              : XL
                ? { opacity: 0, y: 50 }
                : { opacity: 0, x: 50 }
          }
          transition={{ duration: 1 }}
          className="xl:w-1/3">
          <div className="flex-col flex justify-start items-start">
            <div className="flex flex-row items-center pb-3 md:mb-4 lg:mb-8 xl:mb-16">
              <p className="text-xl font-subtitle md:text-4xl ">Education</p>
              <span className="ml-2 w-[56vw] h-[1px] bg-black md:w-[58vw] lg:w-[62vw] xl:h-[2px] xl:w-[18vw]"></span>
            </div>
            <div className="bg-white rounded-lg w-[82vw] pl-4 pt-2 md:pt-4 md:pb-2 xl:w-[31vw]">
              {education.map((edu, index) => (
                <div key={index} className="mb-2 target:mb-4 md:mb-4">
                  <p className="text-[15px] font-sans md:text-3xl md:mb-2 xl:mb-2">{edu.period}</p>
                  <p className="text-[15px] font-empha md:text-3xl">{edu.school}</p>
                  {edu.grade && <p className="text-[15px] font-empha md:text-3xl">{edu.grade}</p>}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 프로젝트 */}
      <section ref={projects.ref} className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={projects.inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="flex flex-row items-center justify-center pb-6 xl:mb-16">
            <span className="mr-2 w-[34vw] h-[1px] bg-black xl:h-[2px] xl:w-[35vw]"></span>
            <p className="text-xl font-subtitle md:text-4xl">Projects</p>
            <span className="ml-2 w-[34vw] h-[1px] bg-black xl:h-[2px] xl:w-[35vw]"></span>
          </div></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={projects.inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="flex flex-col items-center gap-y-[6vw] px-[2vw] w-[100vw] 
      md:grid md:grid-cols-2 md:ml-10 md:gap-y-[8vw] md:gap-x-[2vw] 
      xl:flex xl:flex-row xl:flex-wrap xl:ml-0 xl:justify-between xl:items-start">

            {projectData.map((project, index) => (
              <div
                key={index}
                onClick={() => setOpenPopup(index)}
                className="cursor-pointer relative flex flex-col items-center justify-start pt-3 md:pt-4 bg-white rounded-lg 
            w-[90vw] h-[18vh] md:w-[42vw] md:h-[27vh] xl:w-[22vw] xl:h-[42vh] hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center text-base md:text-2xl xl:text-xl bg-orange-500 text-white font-empha 
            w-[85vw] h-6 mb-2 md:w-[32vw] md:h-8 xl:w-52 xl:h-9 rounded-lg xl:mb-4">
                  {project.title}
                </div>

                <div className="hidden md:flex flex-col items-center justify-center text-sm md:text-lg xl:text-base font-sans font-semibold 
            p-2 rounded-lg bg-[#FFE9D0] w-[85vw] md:w-[34vw] xl:w-[20vw] mb-0 text-slate-600 xl:mb-4">
                  {project.stack.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </div>

                <div className="flex flex-col items-start justify-center font-sans font-semibold p-2 text-sm md:text-base 
            w-[85vw] md:w-[36vw] xl:text-base xl:w-[20vw]">
                  {project.description.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </div>

                <motion.div
                  className="absolute bottom-2 right-4 text-gray-500 text-xs font-empha md:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                >
                  Click me!
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      {projectData.map((project, index) => (
        <Projectpopup
          key={index}
          isOpen={openPopup === index}
          onClose={handleClose}
          title={project.title}
          imgsrc={project?.imgsrc}>

          <div className="flex flex-col mt-2 mb-3">
            <p className="font-empha text-[20px] whitespace-nowrap mr-1 md:text-[30px]">🙌 소개</p>
            <p className="text-[16px] break-words md:text-[24px]">{project.onePoint}</p>
          </div>

          <div className="flex flex-col mt-2 mb-3">
            <p className="font-empha text-[20px] whitespace-nowrap mr-1 md:text-[30px]">🛠️ 기술 스택</p>
            <div className="flex flex-wrap gap-2 text-[16px] md:text-[24px]">
              {project.detailStack.map((line, i) => (
                <span
                  key={i}
                  className="bg-[#FFE9D0] text-slate-600 font-semibold px-3 py-[2px] rounded-lg shadow-sm"
                >
                  {line}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-2 mb-3">
            <p className="font-empha text-[20px] whitespace-nowrap mr-1 md:text-[30px]">🔗 Github</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-[18px] break-all mr-4 md:text-[26px]"
            >
              {project.githubLink}
            </a>
          </div>

          <div className="flex flex-col mt-2 mb-3">
            <p className="font-empha text-[20px] md:text-[30px] md:mb-2">🧩 프로젝트 개요</p>
            <div className="text-[16px] flex flex-col gap-[10px] md:text-[24px] md:gap-[15px]">
              {project.overview.map((line, i) => (
                <div key={i} className="leading-7">{line}</div>
              ))}
            </div>
          </div>

          <div className="font-empha text-[20px] xl:mt-6 md:text-[30px] md:mb-2">🗂️ 프로젝트 설명</div>

          {project.youtubeLink && (
            <>
              <div className="text-base text-[14px] md:text-[20px]">• 캡스톤 프로젝트(1) 데모영상</div>
              <a
                href={project.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-[14px] break-all md:text-[20px]"
              >
                youtube.com/capstone1
              </a>
              <div className="w-full my-4 aspect-video">
                {showYoutube ? (
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${extractYouTubeId(project.youtubeLink)}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div
                    className="w-full h-full relative cursor-pointer"
                    onClick={() => setShowYoutube(true)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${extractYouTubeId(project.youtubeLink)}/hqdefault.jpg`}
                      alt="YouTube Thumbnail"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                      <span className="text-white text-4xl">▶</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          {project.youtubeLink2 && (
            <>
              <div className="text-base text-[14px] md:text-[20px]">• 캡스톤 프로젝트(2) 데모영상</div>
              <a
                href={project.youtubeLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-[14px] break-all md:text-[20px]"
              >
                youtube.com/capstone2
              </a>
              <div className="w-full my-4 aspect-video">
                {showYoutube2 ? (
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${extractYouTubeId(project.youtubeLink2)}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div
                    className="w-full h-full relative cursor-pointer"
                    onClick={() => setShowYoutube2(true)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${extractYouTubeId(project.youtubeLink2)}/hqdefault.jpg`}
                      alt="YouTube Thumbnail"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                      <span className="text-white text-4xl">▶</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {project.discription2 && (
            <div className="flex flex-col gap-[10px] md:gap-[13px]">
              {project.discription2.map((line, index) => (
                <div key={index} className="text-[16px] leading-5 md:leading-8">
                  {line}
                </div>
              ))}
            </div>
          )}

          {project.responsibility && (
            <div className="mt-4">
              <div className="font-empha text-[20px] md:text-[30px]">🙋‍♀️ 담당한 기능</div>
              <div className="flex flex-col gap-[10px] md:gap-[13px] mt-1">
                {project.responsibility.map((line, i) => (
                  <div key={i} className="text-[16px] leading-5 md:leading-8">{line}</div>
                ))}
              </div>
            </div>
          )}

          {project.feedback && (
            <>
              <div className="font-empha text-[20px] mt-5 mb-2 md:text-[30px]">✍️ 느낀점</div>
              <div className="flex flex-col gap-[12px] md:gap-[15px]">
                {project.feedback.map((line, i) => (
                  <div key={i} className="text-[16px] leading-6 md:leading-9">{line}</div>
                ))}
              </div>
            </>
          )}
        </Projectpopup>
      ))}

    </div>
  );
}

export default App;
