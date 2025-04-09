import EMOD from "./images/EMOD.png";
import HOMEP from "./images/myhomepp.png";
import port from "./images/portfolio.png";
import SB from "./images/studybuddy.png";
import EWOOTZ1 from "./images/ewootz_1.png";
import EWOOTZ2 from "./images/ewootz_2.gif";
import EWOOTZ3 from "./images/ewootz_3.png";
import EWOOTZ4 from "./images/ewootz_4.jpeg";
import SB1 from "./images/st_1.jpg";
import SB2 from "./images/st_2.jpg";
import SB3 from "./images/st_3.jpg";
import SB4 from "./images/st_4.jpg";



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
        • 어플 디자인, 캘린더, <br className="inline md:hidden" /><span className="inline md:hidden">&nbsp;&nbsp;</span>Graph, 카카오 <br className="hidden md:inline" />
        <span className="hidden md:inline">&nbsp;&nbsp;</span>로그인, <br className="inline md:hidden" /><span className="inline md:hidden">&nbsp;&nbsp;</span>API 연결 등 담당
      </span>,
    ],
    onePoint: '사회적 고립감 해소를 위한 졸업작품으로 진행한 캡스톤 프로젝트',
    githubLink: 'https://github.com/EMO-D/EMO-D_client.git',
    youtubeLink: 'https://youtu.be/qrdG-0q9Dt8?si=gLv-c3qhjJtlsas4',
    youtubeLink2: 'https://youtu.be/d0AWbpnrAkQ?si=7UGHsINR00QkQp8y',
    overview: [<div className="leading-5">• 1인 가구의 증가로 인해 사회적 고립감이 <span className="inline md:hidden">&nbsp;&nbsp;</span>증가</div>,
    <div className="leading-5 md:leading-7">• 일기 작성을 통해 자신의 감정에 대해 생각<span className="inline md:hidden"><br />&nbsp;&nbsp;</span>하고 분석해 감정의 <span className="hidden md:inline"><br />&nbsp;&nbsp;</span>원인을 파악하고 해소</div>,
    <div className="leading-5 md:leading-7">• 일기 공유를 통해 타인이 공유한 일기를 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>보고 감정과 상황을 공감<span className="hidden md:inline"><br />&nbsp;&nbsp;</span>하고 이해</div>,
    <div className="font-bold text-[16.8px] text-purple-600 leading-5 md:text-[27px] md:leading-7">본인의 감정을 이해하고 동시에 사회적 고립감을 해소하고자 일기 공유 어플을 개발</div>
    ]

  },
  {
    title: '<당신>의 마이홈피',
    stack: ['React JavaScript', 'VScode Swagger Figma'],
    imgsrc: HOMEP,
    description: [
      <span className="hidden xl:inline">• 2024.07.02 ~ 2024.09.14</span>,
      '• 4인 팀 프로젝트',
      '• 미니홈피 리메이킹 웹',
      <span>• 화면 디자인, API 연결, <br className="inline md:hidden" /><span className="inline md:hidden">&nbsp;&nbsp;</span>로그인 및 <br className="hidden md:inline" />
        <span className="hidden md:inline">&nbsp;&nbsp;</span>회원가입 등 <br className="inline md:hidden" /><span className="inline md:hidden">&nbsp;&nbsp;</span>담당</span>,
    ],
    onePoint: '미니홈피 리메이킹 및 팀원 개인별 역량 성장을 위해 진행한 프로젝트',
    githubLink: 'https://github.com/EWOOTZ/client.git',
    overview: ['• 웹 개발 역량을 성장시키는 것이 목적',
      '• 싸이월드의 미니홈피를 리메이킹',
      <div className="font-bold text-[16.8px] text-purple-600 leading-5">자신을 표현하고, 이웃과 교류하며 감성을 되살리는 미니홈피를 개발</div>
    ],
    discription2: [<div className="text-orange-500 font-bold">MAIN PAGE</div>,
    <div>1. 사용자 자신을 표현할 수 있는 요소 제공<br />
      <span className="inline md:hidden">&nbsp;&nbsp;</span>• 닉네임, 프로필 사진, 한 줄 소개, 프로필 <span className="inline md:hidden"><br />&nbsp;&nbsp;&nbsp;&nbsp;</span> 뮤직
      <span className="inline md:hidden"><br />&nbsp;&nbsp;• Q&A 답변</span>
    </div>,
      '2. 방문한 이웃이 남길 수 있는 방명록',
    <div>3. 추가한 이웃 목록<br />
      <span className="inline md:hidden">&nbsp;&nbsp;</span>• 이웃 목록 클릭 시 이웃의 페이지로 이동
    </div>,
      '4. 타자 게임 랭킹',
    <div className="text-orange-500 font-bold mt-2">GROUND PAGE</div>,
    <div>회원 모두가 소통할 수 있는 커뮤니티 공간<br />
      <span className="inline md:hidden">&nbsp;&nbsp;</span>• 소원나무, 게시판, 느린 우체통
    </div>,
    <div className="text-orange-500 font-bold mt-2">ETC</div>,
    <div>1. 개인별 링크 공유 기능<br />2. 마이페이지 수정 기능<br />3.로그인 및 회원 가입
    </div>,
    <div className="text-orange-500 font-bold my-2">실제 구현된 화면</div>,
    <img src={EWOOTZ4} />, <img src={EWOOTZ3} />, <img src={EWOOTZ2} />, <img src={EWOOTZ1} />
    ],
  },
  {
    title: 'Study Buddy',
    imgsrc: SB,
    stack: ['React ReactNative', 'Swagger JavaScript', 'TypeScript Figma'],
    description: [
      <span className="hidden xl:inline">• 2024.09.13 ~ 2024.12.13</span>,
      '• 2인 팀 프로젝트',
      '• 학습을 돕는 Web App',
      <span className="inline">• API 연결, WebView, <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>전체 화면 <br className="hidden xl:inline" />
        <span className="hidden xl:inline">&nbsp;&nbsp;</span>구현 <br className="hidden md:inline xl:hidden" />
        <span className="hidden md:inline xl:hidden">&nbsp;&nbsp;</span>등 담당</span>,
    ],
    onePoint: '산학협력프로젝트로 (주)엔가든과 웹앱 제작',
    githubLink: 'https://github.com/KwonHaeJin/StudyApp.git',
    githubLink2: 'https://github.com/KwonHaeJin/StudyBuddyNative2.git',
    overview: ['• 웹캠을 통해 자신이 공부하는 모습을 전시',
      <div className="leading-5">• 어플 내에서 친구들과 함께 공부할 수 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>있으면 좋겠다는 아이디어에서 착안</div>,
      <div className="leading-5">• 사측의 요구사항: web과 app에서 처리 할 수 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>있는 기능을 구분하고 이를 모듈화된 API로 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>정립 감정과 상황을 공감하고 이해</div>,
      <div className="font-bold text-[16.8px] text-purple-600 leading-5">사용자의 학습에 도움이 되는 Web Application을 개발</div>
    ],
    discription2: [
      <div className="text-orange-500 font-bold">MAIN 화면</div>,
      <div>favorite에는 팔로우한 유저 노출<br />
        other user에는 전체 유저 랜덤으로 노출<br />
        스터디 중인 유저 클릭 시 스터디 참여 요청<br />
      </div>,
      <div className="text-orange-500 font-bold">화상 채팅</div>,
      <div>web RTC를 활용한 유저 간 실시간 화상 채팅</div>,
      <div className="text-orange-500 font-bold">투두리스트</div>,
      <div>todolist 작성, 삭제, 체크 기능</div>,
      <div>weekly note 작성, 수정 기능</div>,
      <div className="text-orange-500 font-bold">피드</div>,
      <div>화상 채팅 기록을 타임랩스 형태로 저장</div>,
      <div>프로필 사진, 닉네임 수정 기능</div>,
      <div>개별 피드 확인 및 좋아요 기능</div>,
      <div>유저 검색 및 팔로우/언팔로우 기능</div>,
      <div className="text-orange-500 font-bold my-2">실제 구현된 화면</div>,
      <img src={SB1} />, <img src={SB2} />, <img src={SB3} />, <img src={SB4} />
    ],
  },
  {
    title: 'Portfolio',
    imgsrc: port,
    stack: ['React TypeScript', 'TailwindCSS'],
    description: [
      <span className="hidden xl:inline">• 2025.02.09 ~ 2025.12.13</span>,
      '• 1인 프로젝트',
      <span className="inline">• 개인 포트폴리오를 위한 <br className="inline md:hidden" /><span className="inline md:hidden">&nbsp;&nbsp;</span>웹사이트</span>,
    ],
    onePoint: '개인 역량 향상 및 포트폴리오를 위한 웹',
    githubLink: 'https://github.com/KwonHaeJin/portfolio.git',
    overview: ['• 다양한 프론트엔드 기술 및 배포경험',
      <div className="font-bold text-[16.8px] text-purple-600 leading-5">나를 소개하는 포트폴리오 웹사이트를 구현</div>
    ]
  }
];