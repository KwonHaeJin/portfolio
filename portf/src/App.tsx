/* eslint-disable */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Profile from "./images/profile.jpg";
import Contact from "./images/phone-call.png";


const myname = ["Front-end Developer", "KwonHaeJin's", 'PORTFOLIO'];

function App() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [showLine, setShowLine] = useState(false);
  const [startAdding, setStartAdding] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setVisibleMessages([myname[0]]);
    setShowLine(true);

    setTimeout(() => {
      setStartAdding(true);
    }, 500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; //현재 스크롤 위치
      const newIndex = Math.min(Math.floor(scrollY / 300), 2); // 스크롤 값에 따라 index 조정
      setVisibleIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!startAdding || index >= myname.length - 1) return; // ✅ 3개가 다 표시되면 종료

    const interval = setInterval(() => {
      setVisibleMessages((prev) => [...prev, myname[index + 1]]); // 새로운 메시지 추가
      setIndex((prevIndex) => prevIndex + 1); // 다음 메시지로 이동
    }, 500);

    return () => clearInterval(interval); // ✅ 3개가 다 나오면 setInterval 정지
  }, [startAdding, index]);

  useEffect(()=>{
    const profileTimeout = setTimeout(()=>{
      setShowProfile(true);
    },1000);
    return () => clearTimeout(profileTimeout);
  },[startAdding, index]);

  return (
    <div className="bg-blue-100 w-full overflow-x-hidden scrollbar-hide overflow-auto min-h-screen flex flex-col">
      <div className="w-screen flex flex-col items-start mt-6 ml-4">
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

        {/* 첫 번째 메시지와 동시에 등장하는 실선 */}
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
      </div>
{showProfile &&
      <motion.div 
      className="mt-[45%] flex flex-row h-auto items-center justify-center lg:mt-[15%]"
      initial={{opacity:0, y:50}}
      animate={{opacity:1, y:0}}
      transition={{duration:1, ease:"easeInOut"}}>
        <img src={Profile} className="w-[40%] h-3/2 rounded-2xl md:w-[25%]"></img>
        <span className="h-52 w-[2px] bg-slate-500 ml-4 mr-4 md:h-80 lg:h-80"></span>
        <div className="flex-col flex">
          <div className="flex flex-row items-center mb-2 md:mb-16">
            <img src={Contact} className="w-6 h-6 md:w-10 md:h-10"></img>
            <p className="text-xl ml-3 font-semibold md:text-4xl md:ml-6 ">Contact</p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row">
          <p className="text-lg font-semibold -mb-1 md:text-3xl">Tel</p>
          <p className="text-lg ml-2 mb-1 md:text-3xl md:mb-6">010-2109-0228</p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row">
          <p className="text-lg font-semibold -mb-1 md:text-3xl">E-mail</p>
          <p className="text-lg ml-2 mb-1 md:text-3xl md:mb-6">hjji0922@naver.com</p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row">
          <p className="text-lg font-semibold -mb-1 md:text-3xl">Github</p>
          <a href="https://github.com/KwonHaeJin" target="_blank" rel="noopener noreferrer" className="underline ml-2 text-lg md:text-3xl">github.com/KwonHaeJin</a>
        </div>
        </div>
      </motion.div>}

      {/* <div className="fixed top-1/2 left-0 w-full h-16 bg-white shadow-md flex justify-center items-center">
        스크롤을 내려보세요!
      </div> */}

      {/* <div className="mt-20 flex flex-col gap-10">
        {["bg-black", "bg-red-950", "bg-emerald-900"].map((bg, index) => (
          <motion.div
            key={index}
            className={`${bg} w-20 h-20 text-white flex justify-center items-center rounded-lg`}
            initial={{ x: -100, opacity: 0 }}
            animate={visibleIndex >= index ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {index === 0 ? "kr" : "rk"}
          </motion.div>
        ))}
      </div> */}

    </div>
  );
}

export default App;
