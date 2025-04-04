import EMOD from "./images/EMOD.png";
import HOMEP from "./images/myhomepp.png";
import port from "./images/portfolio.png";
import SB from "./images/studybuddy.png";


export const myname = [
  "Front-end Developer",
  "KwonHaeJin's",
  "PORTFOLIO"
];

export const contactInfo = [
  { label: "Tel", value: "010-2109-0228" },
  { label: "E-mail", value: "hjji0922@naver.com" },
  { label: "Github", value: "https://github.com/KwonHaeJin", isLink: true },
];

export const certificates = [
  { name: "정보처리기사", date: "2024.09.10" },
  { name: "SQLD", date: "2024.12.13" },
  { name: "HSK 5급", date: "2024.04.21" },
];

export const skills = [
  { category: "#FFE9D0", skills: ["Javascript", "Typescript", "HTML", "Dart"] },
  { category: "#EEF3ED", skills: ["React", "ReactNative", "Flutter", "VSCode", "AndroidStudio"] },
  { category: "#F1D3CE", skills: ["TailwindCss", "CSS3"] },
  { category: "#F8F3DE", skills: ["Github", "Swagger", "Figma"] },
];

export const education = [
  { period: "2019.03 ~ 2021.02", school: "경일여자고등학교" },
  { period: "2021.03 ~ 2025.02", school: "계명대학교 컴퓨터공학과", grade: "4.07 / 4.5" },
];

export const projectData = [
  {
    title: 'EMO:D',
    stack: ['Dart Flutter Swagger', 'Android Studio Figma'],
    imgsrc: EMOD,
    description: [
      <span className="hidden xl:inline">• 2023.08.01 ~ 2024.07.15'</span>,
      '• 5인 팀 프로젝트',
      '• 일기 작성 및 공유 어플',
      <span>
      • 어플 디자인, 캘린더, <br className="inline md:hidden"/><span className="inline md:hidden">&nbsp;&nbsp;</span>Graph, 카카오 <br className="hidden md:inline"/>
      <span className="hidden md:inline">&nbsp;&nbsp;</span>로그인, <br className="inline md:hidden"/><span className="inline md:hidden">&nbsp;&nbsp;</span>API 연결 등 담당
    </span>,
    ],
    onePoint: '사회적 고립감 해소를 위한 졸업작품으로 진행한 캡스톤 프로젝트',
    githubLink:'https://github.com/EMO-D/EMO-D_client.git',
    youtubeLink: 'https://youtu.be/qrdG-0q9Dt8?si=gLv-c3qhjJtlsas4',
    youtubeLink2: 'https://youtu.be/d0AWbpnrAkQ?si=7UGHsINR00QkQp8y'

  },
  {
    title: '<당신>의 마이홈피',
    stack: ['React JavaScript', 'VScode Swagger Figma'],
    imgsrc: HOMEP,
    description: [
      <span className="hidden xl:inline">• 2024.07.02 ~ 2024.09.14</span>,
      '• 4인 팀 프로젝트',
      '• 미니홈피 리메이킹 웹',
      <span>• 화면 디자인, API 연결, <br className="inline md:hidden"/><span className="inline md:hidden">&nbsp;&nbsp;</span>로그인 및 <br className="hidden md:inline"/>
      <span className="hidden md:inline">&nbsp;&nbsp;</span>회원가입 등 <br className="inline md:hidden"/><span className="inline md:hidden">&nbsp;&nbsp;</span>담당</span>,
    ],
    onePoint: '미니홈피 리메이킹 및 팀원 개인별 역량 성장을 위해 진행한 프로젝트',
    githubLink:'https://github.com/EWOOTZ/client.git',
  },
  {
    title: 'Study Buddy',
    imgsrc: SB,
    stack: ['React ReactNative', 'Swagger JavaScript', 'TypeScript Figma'],
    description: [
      <span className="hidden xl:inline">• 2024.09.13 ~ 2024.12.13</span>,
      '• 2인 팀 프로젝트',
      '• 학습을 돕는 Web App',
      <span className="inline">• API 연결, WebView, <br className="inline md:hidden"/><span className="inline md:hidden">&nbsp;&nbsp;</span>전체 화면 <br className="hidden xl:inline"/>
      <span className="hidden xl:inline">&nbsp;&nbsp;</span>구현 <br className="hidden md:inline xl:hidden"/>
      <span className="hidden md:inline xl:hidden">&nbsp;&nbsp;</span>등 담당</span>,
    ],
    onePoint: '산학협력프로젝트로 (주)엔가든과 웹앱 제작',
    githubLink:'https://github.com/KwonHaeJin/StudyApp.git',
    githubLink2:'https://github.com/KwonHaeJin/StudyBuddyNative2.git',
  },
  {
    title: 'Portfolio',
    imgsrc: port,
    stack: ['React TypeScript', 'TailwindCSS'],
    description: [
      <span className="hidden xl:inline">• 2025.02.09 ~ 2025.12.13</span>,
      '• 1인 프로젝트',
      <span className="inline">• 개인 포트폴리오를 위한 <br className="inline md:hidden"/><span className="inline md:hidden">&nbsp;&nbsp;</span>웹사이트</span>,
    ],
    onePoint: '개인 역량 향상 및 포트폴리오를 위한 웹',
    githubLink:'https://github.com/KwonHaeJin/portfolio.git',
  }
];