import React from 'react';
import profileAvatar from './assets/images/user_real_pixel_avatar_1786656985667.jpg';
import snakeGameImg from './assets/images/snake_game_project_logo_1786707353964.jpg';
import termChatImg from './assets/images/termchat_project_logo_1786707369539.jpg';
import calorieTrackerImg from './assets/images/calorie_tracker_project_logo_1786707390663.jpg';

export const CVContent = () => (
  <div className="space-y-4 font-mono text-sm">
    <h1 className="text-2xl font-bold border-b-2 border-black pb-2">Md. Abdulla - CSE Student</h1>
    
    <div>
      <h2 className="text-xl font-bold mt-4">Education</h2>
      <ul className="list-disc list-inside mt-2 space-y-2">
        <li>
          <strong>University of Asia Pacific (UAP)</strong> (1st Year, 2nd Semester)
          <p className="ml-4 text-gray-700">B.Sc. in Computer Science and Engineering.</p>
        </li>
      </ul>
    </div>

    <div>
      <h2 className="text-xl font-bold mt-4">Skills</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {['C', 'C++', 'Python', 'Dart', 'Java', 'Flutter', 'Unity', 'Godot', 'Git', 'Linux'].map(skill => (
          <span key={skill} className="bg-gray-200 px-2 py-1 border border-gray-400 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div>
      <h2 className="text-xl font-bold mt-4">Links & Social</h2>
      <p className="mt-2 text-gray-800">
        GitHub:{' '}
        <a
          href="https://github.com/Md-Abdullah-0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          github.com/Md-Abdullah-0
        </a>
      </p>
      <p className="mt-1 text-gray-800">
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/md-abdulla-626922414"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          linkedin.com/in/md-abdulla-626922414
        </a>
      </p>
      <p className="mt-1 text-gray-800">
        Email:{' '}
        <a
          href="mailto:mdabdullah10769@gmail.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          mdabdullah10769@gmail.com
        </a>
      </p>
    </div>
  </div>
);

export const ProjectsContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
    <a href="https://github.com/Md-Abdullah-0" target="_blank" rel="noopener noreferrer" className="block border-2 border-gray-300 p-4 rounded hover:border-blue-500 transition-colors cursor-pointer group">
      <div className="w-full h-36 bg-green-50 rounded mb-2 overflow-hidden flex items-center justify-center border border-gray-200">
         <img src={snakeGameImg} alt="Snake Game" className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
      </div>
      <h3 className="font-bold text-lg group-hover:text-blue-600 flex items-center justify-between">
        <span>Snake Game</span>
        <span className="text-xs font-mono font-normal bg-gray-100 px-2 py-0.5 rounded border border-gray-300">GitHub ↗</span>
      </h3>
      <p className="text-sm text-gray-600">Classic arcade game implemented in C/C++ with smooth terminal/console rendering and collision logic.</p>
    </a>
    <a href="https://github.com/Md-Abdullah-0" target="_blank" rel="noopener noreferrer" className="block border-2 border-gray-300 p-4 rounded hover:border-blue-500 transition-colors cursor-pointer group">
      <div className="w-full h-36 bg-blue-50 rounded mb-2 overflow-hidden flex items-center justify-center border border-gray-200">
         <img src={termChatImg} alt="Terminal Chat App" className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
      </div>
      <h3 className="font-bold text-lg group-hover:text-blue-600 flex items-center justify-between">
        <span>Terminal-Based Real-Time Chat</span>
        <span className="text-xs font-mono font-normal bg-gray-100 px-2 py-0.5 rounded border border-gray-300">GitHub ↗</span>
      </h3>
      <p className="text-sm text-gray-600">Real-time messaging system built using C/C++ & Windows Sockets for networking.</p>
    </a>
    <a href="https://github.com/Md-Abdullah-0" target="_blank" rel="noopener noreferrer" className="block border-2 border-gray-300 p-4 rounded hover:border-blue-500 transition-colors cursor-pointer group md:col-span-2">
      <div className="w-full h-40 bg-purple-50 rounded mb-2 overflow-hidden flex items-center justify-center border border-gray-200">
         <img src={calorieTrackerImg} alt="Daily Calorie Tracker & BMI/BMR Calculator" className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
      </div>
      <h3 className="font-bold text-lg group-hover:text-blue-600 flex items-center justify-between">
        <span>Daily Calorie Tracker & BMI/BMR Calculator</span>
        <span className="text-xs font-mono font-normal bg-gray-100 px-2 py-0.5 rounded border border-gray-300">GitHub ↗</span>
      </h3>
      <p className="text-sm text-gray-600">Health and nutrition management utility built in C/C++ featuring a Windows GUI interface.</p>
    </a>
  </div>
);

export const InsightsContent = () => (
  <div className="font-serif">
    <h1 className="text-2xl font-bold mb-4 italic">Thoughts & Observations</h1>
    <article className="mb-6">
      <h2 className="text-xl font-bold">The Thrill of Competitive Programming</h2>
      <p className="text-gray-500 text-sm mb-2">Student Life</p>
      <p className="text-gray-800 leading-relaxed">
        Diving into competitive programming with C and C++ has completely changed how I look at algorithmic problem solving. The rush of finding an optimized O(N log N) solution is unmatched, driving continuous learning.
      </p>
    </article>
    <article>
      <h2 className="text-xl font-bold">Exploring Emerging Technologies</h2>
      <p className="text-gray-500 text-sm mb-2">Tech Journal</p>
      <p className="text-gray-800 leading-relaxed">
        As a 1st-year CSE student, I am constantly exploring game engines like Unity and Unreal. It's fascinating to see how the logic we learn in class translates directly into interactive 3D environments and mobile applications.
      </p>
    </article>
  </div>
);

export const AboutMeContent = () => (
  <div className="font-sans space-y-4">
    <div className="flex items-center gap-4">
      <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center text-4xl border-2 border-blue-500 shadow-inner">
        👨‍💻
      </div>
      <div>
        <h1 className="text-2xl font-bold">Md. Abdulla</h1>
        <p className="text-gray-600 font-semibold">CSE Student | Programmer</p>
      </div>
    </div>
    <p className="text-gray-800 leading-relaxed">
      I’m Md. Abdulla, a 1st-year, 2nd-semester CSE student at the University of Asia Pacific (UAP). I have a strong interest in C, C++, and Python programming, with a growing focus on problem-solving and competitive programming. I’m also interested in research and emerging technologies, and I aim to build strong technical and analytical skills through practical projects and continuous learning.
    </p>
    <div className="bg-[#fffef0] border-2 border-amber-400 p-4 rounded shadow-sm mt-4 relative">
      <div className="absolute -top-3 left-4 bg-amber-200 px-2 text-xs font-bold border border-amber-400 uppercase tracking-wider">
        Personal Note / Letter
      </div>
      <p className="text-gray-700 italic text-sm leading-relaxed mt-1 font-serif">
        "Welcome to AD OS! Thank you for exploring my portfolio. Building software that bridges retro aesthetics with modern interactivity has been an exciting journey. Feel free to check out my projects, skills, and reach out if you'd like to collaborate!"
      </p>
      <div className="text-right text-xs font-bold text-gray-600 mt-2">— Md. Abdulla</div>
    </div>
  </div>
);

export const SkillsContent = () => (
  <div className="font-sans">
    <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">Technical Skills</h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-bold text-blue-800 mb-2">Languages</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>C & C++</li>
          <li>Python</li>
          <li>Dart</li>
          <li>Java</li>
        </ul>
        <h3 className="font-bold text-blue-800 mt-4 mb-2">Development</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Android & Flutter</li>
          <li>Desktop Development</li>
          <li>Game Development</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-green-800 mb-2">Game Engines</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Unity</li>
          <li>Unreal Engine</li>
          <li>Godot</li>
        </ul>
        <h3 className="font-bold text-green-800 mt-4 mb-2">Tools & Environments</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Git / GitHub</li>
          <li>VS Code / Visual Studio</li>
          <li>Android Studio</li>
          <li>Linux / Kali Linux</li>
        </ul>
      </div>
    </div>
  </div>
);

export const ExperienceContent = () => (
  <div className="font-sans space-y-4">
    <h2 className="text-xl font-bold border-b-2 border-black pb-2">Interests & Activities</h2>
    <div className="border-l-2 border-blue-500 pl-4 py-1">
      <h3 className="font-bold">Competitive Programming</h3>
      <p className="text-gray-700 text-sm mt-1">Actively participating in problem-solving and competitive programming to sharpen analytical and logical skills.</p>
    </div>
    <div className="border-l-2 border-blue-500 pl-4 py-1 mt-2">
      <h3 className="font-bold">Research & Innovation</h3>
      <p className="text-gray-700 text-sm mt-1">Exploring emerging technologies and aiming to build strong technical skills through practical projects and continuous learning.</p>
    </div>
  </div>
);

export const EducationContent = () => (
  <div className="font-sans space-y-4">
    <h2 className="text-xl font-bold border-b-2 border-black pb-2">Education</h2>
    <div className="bg-gray-100 p-4 rounded border border-gray-300 shadow-inner">
      <h3 className="font-bold text-lg">B.Sc. in Computer Science & Engineering</h3>
      <p className="text-gray-600">University of Asia Pacific (UAP)</p>
      <p className="text-sm text-gray-500">1st Year, 2nd Semester</p>
    </div>
    <div className="bg-gray-100 p-4 rounded border border-gray-300 shadow-inner mt-2">
      <h3 className="font-bold text-lg">Higher Secondary Certificate (HSC)</h3>
      <p className="text-gray-600">Dr. Mahbubur Rahman Mollah College</p>
    </div>
    <div className="bg-gray-100 p-4 rounded border border-gray-300 shadow-inner mt-2">
      <h3 className="font-bold text-lg">Secondary School Certificate (SSC)</h3>
      <p className="text-gray-600">Jahapur Kamalakanta Academy & College</p>
    </div>
  </div>
);

export const AchievementsContent = () => (
  <div className="font-sans space-y-4">
    <h2 className="text-xl font-bold border-b-2 border-black pb-2">Awards & Achievements</h2>
    <ul className="space-y-3">
      <li className="flex items-start gap-2">
        <span className="text-xl">🏆</span>
        <div>
          <h3 className="font-bold text-gray-800">Competitive Programming Progress</h3>
          <p className="text-sm text-gray-600">Actively participating and continuously improving problem-solving logic using C/C++.</p>
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-xl">⭐</span>
        <div>
          <h3 className="font-bold text-gray-800">Academic Foundation</h3>
          <p className="text-sm text-gray-600">Strong academic start with SSC (4.89) and HSC (4.17) prior to university.</p>
        </div>
      </li>
    </ul>
  </div>
);

export const PublicationsContent = () => (
  <div className="font-sans space-y-4">
    <h2 className="text-xl font-bold border-b-2 border-black pb-2">Research & Innovations</h2>
    <div className="p-3 border-2 border-gray-800 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
      <h3 className="font-bold text-blue-700">"Detecting Rumors in Real Time: A Propagation-Graph Approach to Bangla Misinformation During Elections and Disasters"</h3>
      <p className="text-sm text-gray-500 mb-2">Ongoing Undergraduate Research Focus</p>
      <p className="text-gray-700 text-sm">Investigating propagation-graph architectures for real-time detection of Bangla misinformation during national elections and critical disasters.</p>
    </div>
  </div>
);

export const ContactContent = () => (
  <div className="font-sans flex flex-col items-center justify-center space-y-6 pt-4">
    <h2 className="text-2xl font-bold text-center">Let's Connect!</h2>
    <p className="text-center text-gray-700">
      <strong>Location:</strong> Motijheel, Dhaka
    </p>
    <div className="flex flex-col w-full max-w-[260px] gap-3">
      <a 
        href="mailto:mdabdullah10769@gmail.com" 
        className="flex items-center justify-center gap-3 bg-blue-600 text-white p-2.5 rounded border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-blue-700 hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] transition-all cursor-pointer font-medium"
      >
        <span className="font-bold text-xl">📧</span> Email Me
      </a>
      <div className="text-center text-xs text-gray-700 select-all font-mono bg-gray-100 p-1.5 rounded border border-gray-300">
        mdabdullah10769@gmail.com
      </div>
      <a 
        href="https://www.linkedin.com/in/md-abdulla-626922414" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center gap-3 bg-[#0a66c2] text-white p-2.5 rounded border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#084e96] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] transition-all cursor-pointer font-medium"
      >
        <span className="font-bold text-xl">💼</span> LinkedIn
      </a>
      <a 
        href="https://github.com/Md-Abdullah-0" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center gap-3 bg-gray-800 text-white p-2.5 rounded border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-gray-900 hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] transition-all cursor-pointer font-medium"
      >
        <span className="font-bold text-xl">🐙</span> GitHub
      </a>
    </div>
  </div>
);

export const LinkedInContent = () => (
  <div className="font-sans flex flex-col items-center justify-center p-6 text-center space-y-4">
    <div className="w-16 h-16 bg-[#0a66c2] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-md">
      in
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-900">Md. Abdulla</h2>
      <p className="text-sm text-gray-600">CSE Student at University of Asia Pacific (UAP)</p>
    </div>
    <p className="text-sm text-gray-700 max-w-sm">
      Connect with Md. Abdulla on LinkedIn for professional networking, projects, and collaboration.
    </p>
    <a
      href="https://www.linkedin.com/in/md-abdulla-626922414"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#0a66c2] text-white px-5 py-2.5 rounded border-2 border-black font-semibold text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#084e96] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] transition-all cursor-pointer"
    >
      <span>🔗</span> Open LinkedIn Profile
    </a>
  </div>
);

export const TiredWindowContent = () => (
  <div className="flex flex-col items-center justify-center p-8 text-center font-['VT323'] h-full">
    <div className="text-6xl mb-4">💤</div>
    <div className="text-3xl font-bold text-gray-800">i am tired. i Add Leter .</div>
    <p className="text-gray-600 mt-2 text-xl">Please check back later!</p>
  </div>
);

