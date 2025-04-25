import EMOD from "./images/EMOD.png";
import HOMEP from "./images/myhomepp.png";
import port from "./images/portfolio.png";
import SB from "./images/studybuddy.png";
import GRN from "./images/greening.png";
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
    <div className="text-white bg-orange-300 w-fit p-1 font-bold mt-2 text-[17px] md:text-[26px] md:p-2">
      {text}
    </div>
  );
}

function DesTitle({ text }: { text: string }) {
  return (
    <div className="text-orange-500 font-bold text-[18px] my-1 md:text-[27px]">
      {text}
    </div>
  );
}

function Overview({ text }: { text: string }) {
  return (
    <div className="font-bold text-[17px] text-[#328E6E] leading-5 md:text-[27px] md:leading-7">
      {text}
    </div>
  );
}

function Emphas({ text }: { text: string }) {
  return (
    <span className="font-bold text-[#328E6E] text-[17px] md:text-[26px]">
      {text}
    </span>
  );
}

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

function Preview({ children, className = "" }: ParagraphProps) {
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <span className="text-[14px] md:text-[24px] leading-tight xl:text-[20px]">•</span>
      <p className="text-[14px] md:text-[24px] leading-snug xl:text-[20px]">
        {children}
      </p>
    </div>
  );
}

function Detail({ children, className = "" }: ParagraphProps) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-[16px] md:text-[24px] leading-tight">•</span>
      <p className={`text-[16px] md:text-[24px] leading-snug ${className}`}>
        {children}
      </p>
    </div>
  );
}

function Detail2({ children }: ParagraphProps) {
  return (
    <div className="flex items-start gap-2">
       &nbsp;&nbsp;
      <span className="text-[16px] md:text-[24px] leading-tight">•</span>
      <p className="text-[16px] md:text-[24px] leading-snug">
        {children}
      </p>
    </div>
  );
}

function Paragraph({ children }: ParagraphProps) {
  return (
    <div className="md:text-[24px] text-[16px]">
      &nbsp;&nbsp;{children}
    </div>
  );
}

export const myname = [
  "Welcome to the",
  "KwonHaeJin's",
  "PORTFOLIO",
  "Front-end Developer",
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
  { period: "2025.01 ~ 2025.03", school: "솔데스크 SAP ABAP" },
];

export const projectData = [
  {
    title: 'EMO:D',
    stack: ['Dart Flutter Android Studio'],
    detailStack: ['Dart', 'Flutter', 'Android Studio', 'Swagger', 'Figma'],
    imgsrc: EMOD,
    description: [
      <Preview className="hidden xl:flex">2023.08.01 ~ 2024.07.15</Preview>,
      <Preview>5인 팀 프로젝트</Preview>,
      <Preview>일기 작성 및 공유 App</Preview>,
      <Preview>어플 디자인, 캘린더, Graph, 카카오 로그인, API 연결 등 담당</Preview>,
    ],
    onePoint: '사회적 고립감 해소를 위한 졸업작품으로 진행한 캡스톤 프로젝트',
    githubLink: 'https://github.com/EMO-D/EMO-D_client.git',
    youtubeLink: 'https://youtu.be/qrdG-0q9Dt8?si=gLv-c3qhjJtlsas4',
    youtubeLink2: 'https://youtu.be/d0AWbpnrAkQ?si=7UGHsINR00QkQp8y',
    overview: [<Detail>1인 가구의 증가로 인해 사회적 고립감이 증가</Detail>,
    <Detail className="leading-5 md:leading-7">일기 작성을 통해 자신의 감정에 대해 생각하고 분석해 감정의 원인을 파악하고 해소</Detail>,
    <Detail className="leading-5 md:leading-7">일기 공유를 통해 타인이 공유한 일기를 보고 감정과 상황을 공감하고 이해</Detail>,
    <Overview text="본인의 감정을 이해하고 동시에 사회적 고립감을 해소하고자 일기 공유 어플을 개발" />
    ],
    responsibility: [
      <Title text="FIGMA" />,
      <Detail>피그마를 이용해 어플 디자인 구성</Detail>,
      <img src={EMOD2} />,
      <Title text="로그인" />,
      <Detail>카카오 소셜 로그인 구현</Detail>,
      <Detail>자동 로그인</Detail>,
      <Detail>어플 잠금 기능</Detail>,
      <Title text="캘린더" />,
      <Detail>작성한 일기의 감정으로 해당 날짜에 표시</Detail>,
      <Detail>해당 날짜 클릭 시 일기 다시보기 기능</Detail>,
      <Detail>일기 수정, 삭제 기능</Detail>,
      <Title text="감정통지서" />,
      <Detail>달 별로 감정만 모아볼 수 있는 통계</Detail>,
      <Detail>한 달을 기준으로 작성된 일기들의 감정들로 통지서 발송</Detail>,
      <Detail>작성된 모든 일기로 통계</Detail>,
      <Title text="마이페이지" />,
      <Detail>익명인 본인을 소개할 수 있는 다양한 요소</Detail>,
      <Detail>일기 공유 페이지에서 해당 일기의 감정을 누르면 일기 작성자의 마이페이지가 보여짐</Detail>,
    ],
    feedback: [
      <Paragraph>아이디어 선정 과정에서 팀원들과 <Emphas text="균형 잡힌 소통" />을 통해 좋은 합의점을 도출하고,
        개발 과정에는 <Emphas text="상호 보완적인 협업" />을 통해 <Emphas text="팀워크의 중요성" />을 경험했습니다.
        팀원들의 의견을 경청하면서도 제 주장을 적절히 펼치며 아이디어를 정리했고,
        각자의 강점과 약점을 서로 보완하며 제가 부족한 부분을 동료가 채워주고 반대로 동료가 어려워하는 부분을 제가 해결하며 좋은 결과물을 낼 수 있었습니다.</Paragraph>,
      <Paragraph>
        프로젝트 진행에 있어 협업 능력뿐만 아니라 동시에 개발적으로도 많이 성장할 수 있었습니다. <Emphas text="반응형 화면 개발" />과 <Emphas text="API 연결" />
        을 처음 경험하며 이를 통해 <Emphas text="초기 코드 구조 설계" />가 작업 효율을 크게 높인다는 것을 배웠고 <Emphas text="재사용 가능한 코드" />를 작성하는 것의 중요성을 체감할 수 있었습니다.
      </Paragraph>,
      <Paragraph>
        또한, 프로젝트에서 카카오 로그인이나 캘린더, 통계 그래프와 같은 기능을 구현하기 위해 다양한 <Emphas text="라이브러리를 활용" />해 보았습니다. 단순히 라이브러리를 사용하는 것에서 그치지 않고 프로젝트의 <Emphas text="요구사항에 맞게 커스텀" />해 코드를 짜는 경험을 통해 라이브러리를 효과적으로 활용하는 역량을 키울 수 있었습니다.
      </Paragraph>
    ],

  },
  {
    title: '<당신>의 마이홈피',
    stack: ['React JavaScript'],
    detailStack: ['React', 'JavaScript', 'VScode', 'Swagger', 'Figma'],
    imgsrc: HOMEP,
    description: [
      <Preview className="hidden xl:flex">2024.07.02 ~ 2024.09.14</Preview>,
      <Preview>4인 팀 프로젝트</Preview>,
      <Preview>미니홈피 리메이킹 Web</Preview>,
      <Preview>화면 디자인, API 연결, 로그인 및 회원가입 등 담당</Preview>,
    ],
    onePoint: '미니홈피 리메이킹 및 팀원 개인별 역량 성장을 위해 진행한 프로젝트',
    githubLink: 'https://github.com/EWOOTZ/client.git',
    overview: [
      <Detail>웹 개발 역량을 성장시키는 것이 목적</Detail>,
      <Detail>싸이월드의 미니홈피를 리메이킹</Detail>,
      <Overview text="자신을 표현하고, 이웃과 교류하며 감성을 되살리는 미니홈피를 개발" />
    ],
    discription2: [
      <DesTitle text="MAIN PAGE" />,
      <Detail>사용자 자신을 표현할 수 있는 요소 제공</Detail>,
      <Detail2>닉네임, 프로필 사진, 한 줄 소개, 프로필 뮤직</Detail2>,
      <Detail2>Q&A 답변</Detail2>,
      <Detail>방문한 이웃이 남길 수 있는 방명록</Detail>,
      <Detail>추가한 이웃 목록</Detail>,
      <Detail2>이웃 목록 클릭 시 이웃의 페이지로 이동</Detail2>,
      <Detail>타자 게임 랭킹</Detail>,
      <DesTitle text="GROUND PAGE" />,
      <Detail>회원 모두가 소통할 수 있는 커뮤니티 공간</Detail>,
       <Detail2>소원나무, 게시판, 느린 우체통</Detail2>,
      <DesTitle text="ETC" />,
      <Detail>개인별 링크 공유 기능</Detail>,
      <Detail>마이페이지 수정 기능</Detail>,
      <Detail>로그인 및 회원 가입</Detail>,
      <DesTitle text="실제 구현 화면" />,
      <div className="md:grid md:grid-cols-2">
        <img src={EWOOTZ4} className="lg:object-cover xl:h-[322px] lg:h-[294px] md:h-[228px]" />
        <img src={EWOOTZ3} className="xl:object-cover" />
        <img src={EWOOTZ2} className="md:object-cover xl:h-[322px] lg:h-[294px] md:h-[228px]" />
        <img src={EWOOTZ1} className="xl:object-cover" />
      </div>
    ], responsibility: [
      <Title text="FIGMA" />,
      <Detail>피그마를 이용해 웹 화면 디자인 구성</Detail>,
      <img src={EWOOTZ5} />,
      <Title text="로그인 및 회원가입" />,
      <Detail>아이디 중복 체크 처리</Detail>,
      <Detail>비밀번호 입력 시 숨김 처리</Detail>,
      <Detail>로그인 시 사용한 아이디로 개인 페이지 링크 생성</Detail>,
      <Detail>페이지 이동 시 로그인 유지되도록 토큰 처리</Detail>,
      <Title text="메인 페이지" />,
      <Detail>개인별 페이지에 맞게 데이터 렌더링</Detail>,
      <Detail>사용자가 Q&A 답변 작성 시 데이터 전송 및 자동 새로고침</Detail>,
      <Detail>방명록 작성 시 데이터 전송 및 자동 새로고침</Detail>,
      <Detail>본인이 보는 메인페이지와 타인이 보는 메인 페이지 구별</Detail>,
      <Detail>아이디로 이웃 검색 및 추가 기능</Detail>,
      <Detail>이웃 아이디 클릭 시 해당 이웃 페이지로 이동</Detail>,
      <Title text="게시판" />,
      <Detail>카테고리에 맞는 게시물 데이터 렌더링</Detail>,
      <Detail>게시물 작성 시 사진 업로드 기능</Detail>,
      <Detail>게시물 클릭 시 해당 게시물 팝업 띄우기</Detail>,
      <Title text="마이페이지" />,
      <Detail>미니홈피 URL에 복사 클릭 시 개인별 링크 복사</Detail>,
      <Detail>프로필 이미지 업로드 및 수정</Detail>,
    ],
    feedback: [
      <Paragraph>이 프로젝트를 통해 웹의 기본적인 구조와 <Emphas text="웹 개발의 전반적인 흐름" />을 익히며 개발 역량을 향상할 수 있었습니다.</Paragraph>,
      <Paragraph>초반에는 앱 개발과는 방식이 많이 달라 개발에 어려움을 느꼈고, 특히 navigation 기능 구현하는 것에 있어 어려움을 느껴 좌절하기도 했지만
        끈질기게 매달린 끝에 결국 성공했고 이 과정에서 <Emphas text="성취감" />이 개발에 있어 얼마나 중요한 <Emphas text="동기부여" />가 되는지 느낄 수 있었습니다.</Paragraph>,
      <Paragraph>
        또한 <Emphas text="토큰 관리" />를 공부하며 웹페이지를 이동하더라고 <Emphas text="로그인을 유지" />
        하는 방법을 익혔고 <Emphas text="사용자 경험을 개선" />하는 기능 구현의 중요성을 알게 되었습니다. 클릭으로 URL을 복사할 수 있도록 구현하거나
        엔터 키를 통해 데이터를 전송하는 등의 요구사항을 반영하며 <Emphas text="편리한 인터페이스" />를 제공하는 것이 개발에서 중요한 요소임을 느낄 수 있었습니다.
      </Paragraph>
    ],
  },
  {
    title: 'Study Buddy',
    imgsrc: SB,
    stack: ['React ReactNative', 'TypeScript JavaScript'],
    detailStack: ['React', 'ReactNative','JavaScript','TypeScript', 'VScode', 'Swagger', 'Figma'],

    description: [
      <Preview className="hidden xl:flex">2024.09.13 ~ 2024.12.13</Preview>,
      <Preview>2인 팀 프로젝트</Preview>,
      <Preview>학습을 돕는 Web App</Preview>,
      <Preview>API 연결, WebView, 전체 화면 구현 등 담당</Preview>,
    ],
    onePoint: '산학협력프로젝트로 (주)엔가든과 웹앱 제작',
    githubLink: 'https://github.com/KwonHaeJin/StudyBuddy.git',
    overview: [<Detail>웹캠을 통해 자신이 공부하는 모습을 전시</Detail>,
    <Detail className="leading-5 md:leading-7">어플 내에서 친구들과 함께 공부할 수 있으면 좋겠다는 아이디어에서 착안</Detail>,
    <Detail className="leading-5 md:leading-7">사측의 요구사항: web과 app에서 처리 할 수 있는 기능을 구분하고 이를 모듈화된 API로 정립</Detail>,
    <Overview text="사용자의 학습에 도움이 되는 Web Application을 개발" />

    ],
    discription2: [
      <DesTitle text="Study Room 화면" />,
      <Detail>favorite에는 팔로우한 유저 노출</Detail>,
      <Detail>other user에는 전체 유저 랜덤으로 노출</Detail>,
      <Detail>스터디 중인 유저 클릭 시 스터디 참여 요청</Detail>,
      <DesTitle text="화상 채팅" />,
      <Detail>web RTC를 활용한 유저 간 실시간 화상 채팅</Detail>,
      <DesTitle text="Todolist" />,
      <Detail>todolist 작성, 삭제, 체크 기능</Detail>,
      <Detail>weekly note 작성, 수정 기능</Detail>,
      <DesTitle text="개인 Feed" />,
      <Detail>화상 채팅 기록을 타임랩스 형태로 저장</Detail>,
      <Detail>프로필 사진, 닉네임 수정 기능</Detail>,
      <Detail>개별 피드 확인 및 좋아요 기능</Detail>,
      <Detail>유저 검색 및 팔로우/언팔로우 기능</Detail>,
      <DesTitle text="실제 구현 화면" />,
      <div className="md:grid md:grid-cols-2 md:justify-between">
        <img src={SB1} />
        <img src={SB2} />
        <img src={SB3} />
        <img src={SB4} />
      </div>],
    responsibility: [
      <Title text="Web" />,
      <Detail>webRTC를 제외한 모든 화면 구현 및 통신</Detail>,
      <Title text="App" />,
      <Detail>React로 구현한 웹을 React Native에서 Webview로 띄우기</Detail>,
      <Detail>React Native에서 bottombar로 화면 간 이동 제어 및 bottombar 커스텀</Detail>,
      <Detail>web과 app 사이 데이터 통신</Detail>,
    ],
    feedback: [
      <Paragraph><Emphas text="회사와 협업" />하는 과정을 통해 효율적인 개발과 디자인, <Emphas text="다양한 관점에서 프로젝트를 이해" />하는 방법을
        배울 수 있었습니다. <Emphas text="기능의 가능 여부를 사전에 검증" /> 하는 것이 불필요한 리소스 낭비를 줄이고 더욱 좋은 결과물을
        만들어 낸다는 것, 사용자가 쉽게 정보를 파악할 수 있도록 디자인하는 방법 등을 배울 수 있었습니다.</Paragraph>,
      <Paragraph>또한, 사내의 <Emphas text="다양한 직군과 소통하며 협업" />
        한 경험을 통해 개발뿐만 아니라 다양한 관점에서 프로젝트를 이해할 수 있었으며 특히, 제가 미처 생각하지 못했던 실무에서의 문제들을 논의하고 해결하는 경험이 <Emphas text="실무를 이해" />하는 데 큰 도움을 주었습니다. </Paragraph>,
      <Paragraph>Study Buddy 프로젝트를 통해 <Emphas text="웹앱 구현 방법" />
        을 익히고 이론적 기초를 다질 수 있었습니다. 웹앱의 개념과 다른 플랫폼들과의 차이를 명확히 이해하고, 적합한 툴을 조합하여 사용하는 것에 대해 공부하는 시간을 가졌습니다. 이를 통해 <Emphas text="이론적 기초" />를 다지는 것이 중요하다는 것을 꺠달았으며, 웹앱 구현이라는 새로운 과제를 해내며 느낀 성취감과 배움을 앞으로의 개발 여정에 큰 도움이 될 것입니다.</Paragraph>
    ],
  },
  {
    title: 'Portfolio',
    imgsrc: port,
    stack: ['React TypeScript TailwindCSS'],
    detailStack: ['React','TypeScript', 'TailwindCSS','VScode'],
    description: [
      <Preview className="hidden xl:flex">2025.02.09 ~ 2025.04.08</Preview>,
      <Preview>1인 프로젝트</Preview>,
      <Preview>개인 포트폴리오를 위한 Web</Preview>,
    ],
    onePoint: '개인 역량 향상 및 포트폴리오를 위한 웹',
    githubLink: 'https://github.com/KwonHaeJin/portfolio.git',
    overview: [<Detail>다양한 프론트엔드 기술 및 배포경험</Detail>,
      <Overview text="나를 소개하는 포트폴리오 웹사이트를 구현" />

    ], discription2: [
      <Detail>FullPage 스크롤 및 다양한 motion 사용</Detail>,
      <Detail>TailwindCSS를 통한 반응형 화면 구현</Detail>,
    ],
    feedback: [
      <Paragraph>개인 포트폴리오를 만들며 처음으로 기획부터 구현까지 <Emphas text="모든 과정을 혼자서 책임" />지는 경험을 했습니다. 팀 프로젝트에만 익숙했던 만큼, 누군가의 도움 없이 문제를 해결해야 한다는 점이 처음엔 막막하게 느껴졌지만, 그 과정을 통해 <Emphas text="스스로 해결책을 찾아가는 힘" />과 <Emphas text="자립심" />을 기를 수 있었습니다.</Paragraph>,
      <Paragraph>또한, 처음 접하는 <Emphas text="TailwindCSS" />는 초반에는 낯설고 불편하게 느껴졌지만 점차 익숙해지며 <Emphas text="반응형 화면을 쉽게 구현" />할 수 있다는 장점을 체감하게 되었고, 많은 개발자들이 선호하는 이유를 몸소 느낄 수 있었습니다.</Paragraph>,
      <Paragraph>개발을 진행하며 <Emphas text="재사용 가능한 컴포넌트"/>를 만드는 것이 중요하다는 것을 느낄 수 있었습니다. <Emphas text="반복되는 UI 요소들을 구조화"/>하며 <Emphas text="코드의 일관성과 유지보수성"/>이 얼마나 향상되는지를 직접 경험할 수 있었습니다.</Paragraph>,
      <Paragraph>무엇보다 이번 프로젝트는 웹 개발에 그치지 않고 <Emphas text="‘어떻게 하면 나를 더 잘 표현할 수 있을까’" />에 대해 고민하는 시간이 되기도 했습니다. 개발 역량뿐만 아니라 개발자로서의 나를 <Emphas text="스스로 돌아보는 계기" />가 되었습니다.</Paragraph>
    ],
  },
  {
    title: 'Greening',
    stack: ['Next.js Typescript Tailwindcss'],
    detailStack: ['Next.js', 'Typescript', 'Tailwindcss', 'VScode', 'Swagger', 'Figma'],
    imgsrc: GRN,
    description: [
      <Preview className="hidden xl:flex">2025.03.30 ~ 진행중</Preview>,
      <Preview>6인 팀 프로젝트</Preview>,
      <Preview>식물러들의 커뮤니티 플랫폼</Preview>,
      <Preview> Main, Community, 카카오, 구글 로그인 등 담당</Preview>,
    ],
    onePoint: 'MBTI 식물 유형 테스트, 커뮤니티 소통이 가능한 웹 기반 식물 플랫폼',
    githubLink: 'https://github.com/SWYP-9th-Team5/FE.git',
    overview: [
      <Detail>반려식물에 대한 관심 증가</Detail>,
      <Detail>다양한 직군과의 협업 경험</Detail>,
      <Detail>실제 운영하는 사이트 제작</Detail>,
      <Overview text="식물에 관심있는 사람들을 위한 커뮤니티 웹" />
    ],
  },
];