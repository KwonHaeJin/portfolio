import EMOD from "./images/EMOD.png";
import HOMEP from "./images/myhomepp.png";
import port from "./images/portfolio.png";
import SB from "./images/studybuddy.png";
import EMOD2 from "./images/emod1.png";
import EWOOTZ1 from "./images/ewootz_1.png";
import EWOOTZ2 from "./images/ewootz_2.gif";
import EWOOTZ3 from "./images/ewootz_3.png";
import EWOOTZ4 from "./images/ewootz_4.jpeg";
import EWOOTZ5 from "./images/ewootz_5.png";
import SB1 from "./images/st_1.jpg";
import SB2 from "./images/st_2.jpg";
import SB3 from "./images/st_3.jpg";
import SB4 from "./images/st_4.jpg";

function Title({ text }: { text: string }) {
  return (
    <div className="text-white bg-orange-300 w-fit p-1 font-bold mt-2 text-[17px]">
      {text}
    </div>
  );
}

function DesTitle({ text }: { text: string }) {
  return (
    <div className="text-orange-500 font-bold text-[18px] my-1">
      {text}
    </div>
  );
}

function Overview({ text }: { text: string }) {
  return (
    <div className="font-bold text-[17px] text-purple-600 leading-5 md:text-[27px] md:leading-7">
      {text}
    </div>
  );
}

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
    <Overview text="본인의 감정을 이해하고 동시에 사회적 고립감을 해소하고자 일기 공유 어플을 개발" />
    ],
    responsibility: [
      <Title text="FIGMA" />,
      <div>• 피그마를 이용해 어플 디자인 구성
      </div>,
      <img src={EMOD2} />,
      <Title text="로그인" />,
      <div>• 카카오 소셜 로그인 구현</div>,
      <div>• 자동 로그인</div>,
      <div>• 어플 잠금 기능</div>,
      <Title text="캘린더" />,
      <div>• 작성한 일기의 감정으로 해당 날짜에 표시</div>,
      <div>• 해당 날짜 클릭 시 일기 다시보기 기능</div>,
      <div>• 일기 수정, 삭제 기능</div>,
      <Title text="감정통지서" />,
      <div>• 달 별로 감정만 모아볼 수 있는 통계</div>,
      <div>• 한 달을 기준으로 작성된 일기들의 감정들로 <span className="inline md:hidden">&nbsp;&nbsp;</span>통지서 발송</div>,
      <div>• 작성된 모든 일기로 통계</div>,
      <Title text="마이페이지" />,
      <div>• 익명인 본인을 소개할 수 있는 다양한 요소</div>,
      <div>• 일기 공유 페이지에서 해당 일기의 감정을 <span className="inline md:hidden">&nbsp;&nbsp;</span>누르면 일기 작성자의 마이페이지가 보여짐</div>,
    ],

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
      <Overview text="자신을 표현하고, 이웃과 교류하며 감성을 되살리는 미니홈피를 개발" />

    ],
    discription2: [
      <DesTitle text="MAIN PAGE" />,
      <div>1. 사용자 자신을 표현할 수 있는 요소 제공<br />
        <span className="inline md:hidden">&nbsp;&nbsp;</span>• 닉네임, 프로필 사진, 한 줄 소개, 프로필 <span className="inline md:hidden"><br />&nbsp;&nbsp;&nbsp;&nbsp;</span> 뮤직
        <span className="inline md:hidden"><br />&nbsp;&nbsp;• Q&A 답변</span>
      </div>,
      '2. 방문한 이웃이 남길 수 있는 방명록',
      <div>3. 추가한 이웃 목록<br />
        <span className="inline md:hidden">&nbsp;&nbsp;</span>• 이웃 목록 클릭 시 이웃의 페이지로 이동
      </div>,
      '4. 타자 게임 랭킹',
      <DesTitle text="GROUND PAGE" />,
      <div>1. 회원 모두가 소통할 수 있는 커뮤니티 공간<br />
        <span className="inline md:hidden">&nbsp;&nbsp;</span>• 소원나무, 게시판, 느린 우체통
      </div>,
      <DesTitle text="ETC" />,
      <div>1. 개인별 링크 공유 기능<br />2. 마이페이지 수정 기능<br />3. 로그인 및 회원 가입
      </div>,
      <DesTitle text="실제 구현 화면" />,
      <img src={EWOOTZ4} />, <img src={EWOOTZ3} />, <img src={EWOOTZ2} />, <img src={EWOOTZ1} />
    ], responsibility: [
      <Title text="FIGMA" />,
      <div>• 피그마를 이용해 웹 화면 디자인 구성
      </div>,
      <img src={EWOOTZ5} />,
      <Title text="로그인 및 회원가입" />,
      <div>• 아이디 중복 체크 처리</div>,
      <div>• 비밀번호 입력 시 숨김 처리</div>,
      <div>• 로그인 시 사용한 아이디로 개인 페이지 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>링크 생성</div>,
      <div>• 페이지 이동 시 로그인 유지되도록 토큰 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>처리</div>,
      <Title text="메인 페이지" />,
      <div>• 개인별 페이지에 맞게 데이터 렌더링</div>,
      <div>• 사용자가 Q&A 답변 작성 시 데이터 전송 및 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>자동 새로고침</div>,
      <div>• 방명록 작성 시 데이터 전송 및 자동 새로<span className="inline md:hidden"><br />&nbsp;&nbsp;</span>고침</div>,
      <div>• 본인이 보는 메인페이지와 타인이 보는 메인 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>페이지 구별</div>,
      <div>• 아이디로 이웃 검색 및 추가 기능</div>,
      <div>• 이웃 아이디 클릭 시 해당 이웃 페이지로 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>이동</div>,
      <Title text="게시판" />,
      <div>• 카테고리에 맞는 게시물 데이터 렌더링</div>,
      <div>• 게시물 작성 시 사진 업로드 기능</div>,
      <div>• 게시물 클릭 시 해당 게시물 팝업 띄우기</div>,
      <Title text="마이페이지" />,
      <div>• 미니홈피 URL에 복사 클릭 시 개인별 링크 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>복사</div>,
      <div>• 프로필 이미지 업로드 및 수정</div>,
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
      <Overview text="사용자의 학습에 도움이 되는 Web Application을 개발" />

    ],
    discription2: [
      <DesTitle text="Study Room 화면"/>,
      <div>favorite에는 팔로우한 유저 노출<br />
        other user에는 전체 유저 랜덤으로 노출<br />
        스터디 중인 유저 클릭 시 스터디 참여 요청<br />
      </div>,
      <DesTitle text="화상 채팅"/>,
      <div>web RTC를 활용한 유저 간 실시간 화상 채팅</div>,
      <DesTitle text="Todolist"/>,
      <div>todolist 작성, 삭제, 체크 기능</div>,
      <div>weekly note 작성, 수정 기능</div>,
      <DesTitle text="개인 Feed"/>,
      <div>화상 채팅 기록을 타임랩스 형태로 저장</div>,
      <div>프로필 사진, 닉네임 수정 기능</div>,
      <div>개별 피드 확인 및 좋아요 기능</div>,
      <div>유저 검색 및 팔로우/언팔로우 기능</div>,
      <DesTitle text="실제 구현 화면"/>,
      <img src={SB1} />, <img src={SB2} />, <img src={SB3} />, <img src={SB4} />
    ],
    responsibility: [
      <Title text="Web" />,
      <div>• webRTC를 제외한 모든 화면 구현 및 통신
      </div>,
      <Title text="App" />,
      <div>• React로 구현한 웹을 React Native에서 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>Webview로 띄우기</div>,
      <div>• React Native에서 bottombar로 화면 간 이동 <span className="inline md:hidden"><br />&nbsp;&nbsp;</span>제어 및 bottombar 커스텀</div>,
      <div>• web과 app 사이 데이터 통신</div>,
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
      <Overview text="나를 소개하는 포트폴리오 웹사이트를 구현" />

    ], discription2: [
      <div>• FullPage 스크롤 및 다양한 motion 사용</div>,
      <div>• TailwindCSS를 통한 반응형 화면 구현</div>,
    ],
  }
];