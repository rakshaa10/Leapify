const { PrismaClient, Role } = require("../src/generated/prisma");

const prisma = new PrismaClient();

async function main() {
  // ================= ORGANIZERS =================

  const google = await prisma.user.upsert({
    where: {
      email: "careers@google.com",
    },
    update: {},
    create: {
      name: "Google Careers",
      email: "careers@google.com",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const microsoft = await prisma.user.upsert({
    where: {
      email: "internships@microsoft.com",
    },
    update: {},
    create: {
      name: "Microsoft India",
      email: "internships@microsoft.com",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const amazon = await prisma.user.upsert({
    where: {
      email: "university@amazon.com",
    },
    update: {},
    create: {
      name: "Amazon University Recruiting",
      email: "university@amazon.com",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const moe = await prisma.user.upsert({
    where: {
      email: "sih@education.gov.in",
    },
    update: {},
    create: {
      name: "Ministry of Education",
      email: "sih@education.gov.in",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const codechef = await prisma.user.upsert({
    where: {
      email: "campus@codechef.com",
    },
    update: {},
    create: {
      name: "CodeChef Campus Team",
      email: "campus@codechef.com",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const nss = await prisma.user.upsert({
    where: {
      email: "nss@nitrr.ac.in",
    },
    update: {},
    create: {
      name: "NSS NIT Raipur",
      email: "nss@nitrr.ac.in",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const technocracy = await prisma.user.upsert({
    where: {
      email: "technocracy@nitrr.ac.in",
    },
    update: {},
    create: {
      name: "Technocracy NIT Raipur",
      email: "technocracy@nitrr.ac.in",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const thinkIndia = await prisma.user.upsert({
    where: {
      email: "thinkindia@nitrr.ac.in",
    },
    update: {},
    create: {
      name: "Think India NIT Raipur",
      email: "thinkindia@nitrr.ac.in",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const flipkart = await prisma.user.upsert({
    where: {
      email: "careers@flipkart.com",
    },
    update: {},
    create: {
      name: "Flipkart Careers",
      email: "careers@flipkart.com",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const atlassian = await prisma.user.upsert({
    where: {
      email: "careers@atlassian.com",
    },
    update: {},
    create: {
      name: "Atlassian India",
      email: "careers@atlassian.com",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const hack4bengal = await prisma.user.upsert({
    where: {
      email: "team@hack4bengal.tech",
    },
    update: {},
    create: {
      name: "Hack4Bengal",
      email: "team@hack4bengal.tech",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const reliance = await prisma.user.upsert({
    where: {
      email: "scholarships@reliancefoundation.org",
    },
    update: {},
    create: {
      name: "Reliance Foundation",
      email: "scholarships@reliancefoundation.org",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  const codingClub = await prisma.user.upsert({
    where: {
      email: "codingclub@nitrr.ac.in",
    },
    update: {},
    create: {
      name: "Coding Club NIT Raipur",
      email: "codingclub@nitrr.ac.in",
      password: "seedpassword123",
      role: Role.ORGANIZER,
    },
  });

  // Your existing organizer account
  const raksha = await prisma.user.findUnique({
    where: {
      email: "10raksha12sahu@gmail.com",
    },
  });

  if (!raksha) {
    throw new Error("Raksha organizer account not found");
  }

  console.log("Organizer accounts ready.");

  const googleOpportunity = {
    title: "Google Software Engineering Internship 2026",

    description: `Google is inviting applications for its Software Engineering Internship Program 2026 for students pursuing Bachelor's, Master's, or Dual Degree programs in Computer Science or related fields.

Interns work alongside Google engineers on production-scale systems and contribute to products used by billions of users worldwide. Responsibilities include designing, developing, testing, and maintaining software solutions while collaborating with cross-functional teams across engineering and product domains.

Applicants should have strong foundations in data structures, algorithms, object-oriented programming, and software engineering principles. Experience with languages such as C++, Java, Python, Go, or JavaScript is preferred.

The internship typically runs for 10–12 weeks and offers mentorship, technical learning opportunities, and exposure to large-scale distributed systems and modern software development practices.`,

    category: "INTERNSHIP",

    deadline: new Date("2026-08-15"),

    registrationLink: "https://www.google.com/about/careers/applications/",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782934732/googlebanner_e2h9ii.jpg",
    organizerId: google.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: googleOpportunity.title,
    },
    update: googleOpportunity,
    create: googleOpportunity,
  });

  const microsoftOpportunity = {
    title: "Microsoft Engage 2026",

    description: `Microsoft Engage is a mentorship and internship initiative aimed at helping engineering students strengthen their software development skills through real-world projects and guidance from experienced engineers.

Selected participants work on development projects involving frontend engineering, backend systems, cloud technologies, and software design principles while interacting with mentors from Microsoft teams.

Applicants should have strong programming fundamentals and familiarity with data structures, algorithms, and object-oriented programming concepts. Experience with web development technologies is an added advantage.

Top performers may be considered for internship opportunities and future hiring pipelines at Microsoft.`,

    category: "INTERNSHIP",

    deadline: new Date("2026-07-30"),

    registrationLink: "https://careers.microsoft.com/",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782934874/microsoftbanner_wwluo1.jpg",
    organizerId: microsoft.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: microsoftOpportunity.title,
    },
    update: microsoftOpportunity,
    create: microsoftOpportunity,
  });

  const amazonOpportunity = {
    title: "Amazon ML Summer School 2026",

    description: `Amazon ML Summer School is an educational initiative designed to introduce students to machine learning concepts and practical applications used in modern industry systems.

Participants attend sessions covering supervised learning, deep learning, recommendation systems, natural language processing, and computer vision delivered by scientists and engineers from Amazon.

The program targets students with a strong mathematical foundation and prior exposure to programming in Python and machine learning libraries.

Selected students gain exposure to real-world ML applications and advanced topics in applied artificial intelligence.`,

    category: "INTERNSHIP",

    deadline: new Date("2026-08-05"),

    registrationLink:
      "https://www.amazon.science/academic-engagements/amazon-ml-summer-school-india",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782934933/amazonbanner_qmalbm.webp",
    organizerId: amazon.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: amazonOpportunity.title,
    },
    update: amazonOpportunity,
    create: amazonOpportunity,
  });

  const atlassianOpportunity = {
    title: "Atlassian Engineering Internship 2026",

    description: `Atlassian is inviting applications for its Engineering Internship Program 2026 for students passionate about software engineering and scalable systems.

Interns contribute to engineering teams working on products such as Jira, Confluence, and Trello while learning modern software development practices and large-scale system design.

Applicants should possess strong problem-solving abilities and a solid understanding of algorithms, object-oriented programming, databases, and software engineering concepts.

The internship offers mentorship opportunities, collaborative project work, and exposure to cloud-native product development environments.`,

    category: "INTERNSHIP",

    deadline: new Date("2026-08-20"),

    registrationLink: "https://www.atlassian.com/company/careers",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782935124/atlassianbanner_qkmqse.jpg",
    organizerId: atlassian.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: atlassianOpportunity.title,
    },
    update: atlassianOpportunity,
    create: atlassianOpportunity,
  });

  const sihOpportunity = {
    title: "Smart India Hackathon 2026",

    description: `Smart India Hackathon is India's largest innovation competition where student teams build technology solutions for real-world problem statements submitted by ministries, government departments, industries, and public sector organizations.

Participating teams work on challenges spanning software development, sustainability, healthcare, education, agriculture, and public services.

Selected teams progress through internal evaluations before competing in national-level grand finales with mentorship from industry experts and policymakers.

The competition provides students an opportunity to apply engineering skills to practical societal problems while collaborating in multidisciplinary teams.`,

    category: "HACKATHON",

    deadline: new Date("2026-09-01"),

    registrationLink: "https://www.sih.gov.in/",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782933722/sih_ebgpce.png",
    organizerId: moe.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: sihOpportunity.title,
    },
    update: sihOpportunity,
    create: sihOpportunity,
  });

  const flipkartGridOpportunity = {
    title: "Flipkart GRID 7.0 — Software Development Track",

    description: `Flipkart GRID is Flipkart's flagship engineering and innovation challenge aimed at identifying talented problem solvers and developers across India.

Participants compete in multiple rounds involving algorithmic challenges, software engineering problems, and product development case studies. The competition provides opportunities to work on practical problems inspired by Flipkart's large-scale systems and e-commerce infrastructure.

Students gain exposure to industry-level problem solving while competing for internship opportunities, mentorship, and cash prizes.`,

    category: "HACKATHON",

    deadline: new Date("2026-08-25"),

    registrationLink: "https://unstop.com/competitions/flipkart-grid",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782935230/flipkartbanner_gl7nxl.webp",
    organizerId: flipkart.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: flipkartGridOpportunity.title,
    },
    update: flipkartGridOpportunity,
    create: flipkartGridOpportunity,
  });

  const hack4BengalOpportunity = {
    title: "Hack4Bengal 2026",

    description: `Hack4Bengal is one of eastern India's largest student hackathons bringing together developers, designers, and innovators from across the country.

Participants collaborate in teams to build impactful technology solutions across domains such as healthcare, education, sustainability, fintech, and artificial intelligence.

The event includes mentorship sessions, workshops, networking opportunities, and prizes for the best solutions developed during the hackathon period.`,

    category: "HACKATHON",

    deadline: new Date("2026-09-10"),

    registrationLink: "https://hack4bengal.tech/",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782935354/hack4bengal_clxoei.jpg",
    organizerId: hack4bengal.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: hack4BengalOpportunity.title,
    },
    update: hack4BengalOpportunity,
    create: hack4BengalOpportunity,
  });

  const snackDownOpportunity = {
    title: "CodeChef SnackDown 2026",

    description: `SnackDown is CodeChef's flagship global programming competition that attracts competitive programmers from universities and organizations around the world.

The contest consists of multiple rounds testing participants on algorithms, data structures, mathematics, graph theory, and optimization techniques.

Teams progressing through later stages compete internationally and gain recognition within the competitive programming community.`,

    category: "COMPETITION",

    deadline: new Date("2026-08-01"),

    registrationLink: "https://www.codechef.com/snackdown",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782935440/codechef_q65vs9.jpg",
    organizerId: codechef.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: snackDownOpportunity.title,
    },
    update: snackDownOpportunity,
    create: snackDownOpportunity,
  });

  const icpcOpportunity = {
    title: "ICPC Regional Preparation Contest",

    description: `The Coding Club of NIT Raipur is organizing an ICPC preparation contest designed to help students prepare for upcoming regional programming competitions.

The contest features algorithmic problems covering dynamic programming, graph algorithms, greedy methods, and implementation challenges under strict time constraints.

Participants will receive editorials and discussion sessions after the contest to improve problem-solving strategies and competitive programming techniques.`,

    category: "COMPETITION",

    deadline: new Date("2026-07-20"),

    registrationLink: "https://codeforces.com/",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782935497/icpc_d1apui.png",
    organizerId: codingClub.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: icpcOpportunity.title,
    },
    update: icpcOpportunity,
    create: icpcOpportunity,
  });

  const relianceScholarshipOpportunity = {
    title: "Reliance Foundation Undergraduate Scholarship 2026",

    description: `The Reliance Foundation Undergraduate Scholarship supports meritorious students pursuing higher education in India by providing financial assistance and access to mentorship opportunities.

The scholarship aims to empower talented students from diverse backgrounds and help them focus on academic excellence without financial constraints.

Selected scholars receive financial support for tuition and educational expenses along with access to leadership development programs and a nationwide scholar community.

Students from all engineering disciplines with strong academic records are encouraged to apply.`,

    category: "SCHOLARSHIP",

    deadline: new Date("2026-09-15"),

    registrationLink: "https://www.reliancefoundation.org/scholarships",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782935579/reliance_cpqx63.png",
    organizerId: reliance.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: relianceScholarshipOpportunity.title,
    },
    update: relianceScholarshipOpportunity,
    create: relianceScholarshipOpportunity,
  });

  const cpBootcampOpportunity = {
    title: "Competitive Programming Bootcamp",

    description: `The Coding Club of NIT Raipur is organizing a week-long Competitive Programming Bootcamp for students preparing for internships, placements, and programming contests.

The bootcamp covers fundamental and advanced topics including graphs, dynamic programming, greedy algorithms, trees, binary search, and contest strategies.

Sessions include live problem-solving, editorials, mock contests, and discussion sessions conducted by senior students with strong competitive programming backgrounds.

Students from all years are welcome to participate.`,

    category: "WORKSHOP",

    deadline: new Date("2026-07-25"),

    registrationLink: "https://codeforces.com/",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782935639/cpbootcamp_cupdbq.jpg",
    organizerId: codingClub.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: cpBootcampOpportunity.title,
    },
    update: cpBootcampOpportunity,
    create: cpBootcampOpportunity,
  });

  const genAIWorkshopOpportunity = {
    title: "Generative AI Workshop",

    description: `Technocracy NIT Raipur is organizing a hands-on workshop on Generative AI covering modern AI tools, large language models, prompt engineering, and practical AI applications.

Participants will learn the fundamentals behind modern generative AI systems and build simple AI-powered applications during guided sessions.

The workshop is intended for students interested in artificial intelligence, machine learning, and software development and requires no prior experience in AI.`,

    category: "WORKSHOP",

    deadline: new Date("2026-07-28"),

    registrationLink: "https://technocracy.nitrr.ac.in/aavartan",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782935829/genAI_mvanxa.avif",
    organizerId: technocracy.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: genAIWorkshopOpportunity.title,
    },
    update: genAIWorkshopOpportunity,
    create: genAIWorkshopOpportunity,
  });

  const nssRecruitmentOpportunity = {
    title: "NSS Volunteer Recruitment 2026",

    description: `NSS NIT Raipur is inviting applications from students interested in community service, leadership, and social initiatives.

Volunteers participate in cleanliness drives, awareness campaigns, blood donation camps, educational outreach activities, and various campus initiatives throughout the academic year.

Students looking to contribute to society while developing leadership and teamwork skills are encouraged to join the recruitment process.`,

    category: "CLUB_RECRUITMENT",

    deadline: new Date("2026-08-05"),

    registrationLink: "https://www.nss.gov.in/",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782936146/nssbanner_kkf6co.jpg",
    organizerId: nss.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: nssRecruitmentOpportunity.title,
    },
    update: nssRecruitmentOpportunity,
    create: nssRecruitmentOpportunity,
  });

  const technocracyRecruitmentOpportunity = {
    title: "Technocracy Core Team Recruitment",

    description: `Technocracy NIT Raipur is recruiting enthusiastic students for its technical, design, management, and documentation teams.

Selected members will work on technical events, workshops, hackathons, and the institute's annual techno-cultural fest while collaborating with students from diverse domains.

The recruitment process includes an application round followed by interviews for shortlisted candidates.`,

    category: "CLUB_RECRUITMENT",

    deadline: new Date("2026-08-10"),

    registrationLink: "https://technocracy.nitrr.ac.in/aavartan",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782936213/google_form_banner_vxhdjs.png",
    organizerId: technocracy.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: technocracyRecruitmentOpportunity.title,
    },
    update: technocracyRecruitmentOpportunity,
    create: technocracyRecruitmentOpportunity,
  });

  const thinkIndiaRecruitmentOpportunity = {
    title: "Think India Executive Recruitment",

    description: `Think India NIT Raipur is inviting applications for executive positions across technical, content, outreach, and event management domains.

Executives contribute to organizing talks, discussions, workshops, and initiatives aimed at nation-building, policy awareness, and student engagement.

Students interested in leadership roles and interdisciplinary activities are encouraged to apply.`,

    category: "CLUB_RECRUITMENT",

    deadline: new Date("2026-08-12"),

    registrationLink: "https://thinkindiaorg.in/",
    bannerUrl:
      "https://res.cloudinary.com/dmorftpa/image/upload/v1782936359/thinkindia_widgwd.jpg",
    organizerId: thinkIndia.id,
  };

  await prisma.opportunity.upsert({
    where: {
      title: thinkIndiaRecruitmentOpportunity.title,
    },
    update: thinkIndiaRecruitmentOpportunity,
    create: thinkIndiaRecruitmentOpportunity,
  });


}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
