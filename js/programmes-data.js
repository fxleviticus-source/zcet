/* ==========================================================================
   ZCET Programme Data
   Single source of truth for all programme cards + detail pages.
   To add/remove a programme, edit this array only — programmes.html and
   programme-detail.html both render from it automatically.

   category: "diploma" | "certificate" | "skills"
   All content here is drawn from the verified ZCET source website
   (zambezistc.wixsite.com/zcet) as of the brief provided. Career-outcome
   claims are intentionally omitted where the source does not state them.
   ========================================================================== */

const ZCET_PROGRAMMES = [
  // ---------------------------------------------------------------- DIPLOMA
  {
    slug: "psychosocial-counselling-diploma",
    category: "diploma",
    name: "Psychosocial Counselling",
    qualification: "Diploma",
    duration: "2 Years",
    awardingBody: "Zambia Counselling Council (ZCC)",
    image: "https://images.pexels.com/photos/14797769/pexels-photo-14797769.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDesc: "A two-year diploma in Psychosocial Counselling, awarded by the Zambia Counselling Council.",
    overview: "Zambezi College of Education and Technology offers a two-year Diploma in Psychosocial Counselling, awarded by the Zambia Counselling Council (ZCC). This is one of the college's core counselling-based courses, described by ZCET as a highly sought-after qualification.",
    whatYouLearn: [
      "Foundational and applied psychosocial counselling practice",
      "Coursework structured under Zambia Counselling Council guidelines",
      "Progression from certificate-level to diploma-level study"
    ],
    entryRequirementsNote: "Minimum of G12 Certificate or GCE with five Credits or better in English Language, Mathematics, Science plus any other two subjects.",
    related: ["hiv-aids-management-diploma", "assistant-nursing-diploma", "psychosocial-counselling-certificate"]
  },
  {
    slug: "hiv-aids-management-diploma",
    category: "diploma",
    name: "HIV/AIDS Management",
    qualification: "Diploma",
    duration: "2 Years",
    awardingBody: "Zambia Counselling Council (ZCC)",
    image: "https://images.pexels.com/photos/6647178/pexels-photo-6647178.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDesc: "A two-year diploma in HIV/AIDS Management, awarded by the Zambia Counselling Council.",
    overview: "Zambezi College of Education and Technology offers a two-year Diploma in HIV/AIDS Management, awarded by the Zambia Counselling Council (ZCC). ZCET describes this as a highly sought-after qualification, reflecting the college's community-health focus in North Western Province.",
    whatYouLearn: [
      "Foundational and applied HIV/AIDS management practice",
      "Coursework structured under Zambia Counselling Council guidelines",
      "Progression from certificate-level to diploma-level study"
    ],
    entryRequirementsNote: "Minimum of G12 Certificate or GCE with five Credits or better in English Language, Mathematics, Science plus any other two subjects.",
    related: ["psychosocial-counselling-diploma", "assistant-nursing-diploma", "hiv-aids-management-certificate"]
  },
  {
    slug: "assistant-nursing-diploma",
    category: "diploma",
    name: "Assistant Nursing",
    qualification: "Diploma",
    duration: "2 Years",
    awardingBody: "Zambia Counselling Council (ZCC)",
    image: "https://images.pexels.com/photos/6098004/pexels-photo-6098004.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDesc: "A two-year diploma in Assistant Nursing, awarded by the Zambia Counselling Council.",
    overview: "Zambezi College of Education and Technology offers a two-year Diploma in Assistant Nursing, awarded by the Zambia Counselling Council (ZCC). ZCET describes this as a highly sought-after qualification for the North Western Province region.",
    whatYouLearn: [
      "Foundational and applied assistant nursing practice",
      "Coursework structured under Zambia Counselling Council guidelines",
      "Progression from certificate-level to diploma-level study"
    ],
    entryRequirementsNote: "Minimum of G12 Certificate or GCE with five Credits or better in English Language, Mathematics, Science plus any other two subjects.",
    related: ["psychosocial-counselling-diploma", "hiv-aids-management-diploma", "assistant-nursing-certificate"]
  },

  // ------------------------------------------------------------ CERTIFICATE
  {
    slug: "psychosocial-counselling-certificate",
    category: "certificate",
    name: "Psychosocial Counselling",
    qualification: "Certificate",
    duration: "1 Year",
    awardingBody: "Zambia Counselling Council (ZCC)",
    image: "https://images.pexels.com/photos/14797769/pexels-photo-14797769.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDesc: "A one-year certificate in Psychosocial Counselling, awarded by the Zambia Counselling Council.",
    overview: "Zambezi College of Education and Technology offers a one-year Certificate in Psychosocial Counselling, awarded by the Zambia Counselling Council (ZCC). Students who complete the certificate may continue on to the two-year diploma in the same field.",
    whatYouLearn: [
      "Foundational psychosocial counselling practice",
      "Coursework structured under Zambia Counselling Council guidelines",
      "A pathway into the two-year diploma programme"
    ],
    entryRequirementsNote: "Minimum of G9 Certificate plus any 3 O' Level subjects.",
    related: ["hiv-aids-management-certificate", "assistant-nursing-certificate", "psychosocial-counselling-diploma"]
  },
  {
    slug: "hiv-aids-management-certificate",
    category: "certificate",
    name: "HIV/AIDS Management",
    qualification: "Certificate",
    duration: "1 Year",
    awardingBody: "Zambia Counselling Council (ZCC)",
    image: "https://images.pexels.com/photos/6647178/pexels-photo-6647178.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDesc: "A one-year certificate in HIV/AIDS Management, awarded by the Zambia Counselling Council.",
    overview: "Zambezi College of Education and Technology offers a one-year Certificate in HIV/AIDS Management, awarded by the Zambia Counselling Council (ZCC). Students who complete the certificate may continue on to the two-year diploma in the same field.",
    whatYouLearn: [
      "Foundational HIV/AIDS management practice",
      "Coursework structured under Zambia Counselling Council guidelines",
      "A pathway into the two-year diploma programme"
    ],
    entryRequirementsNote: "Minimum of G9 Certificate plus any 3 O' Level subjects.",
    related: ["psychosocial-counselling-certificate", "assistant-nursing-certificate", "hiv-aids-management-diploma"]
  },
  {
    slug: "assistant-nursing-certificate",
    category: "certificate",
    name: "Assistant Nursing",
    qualification: "Certificate",
    duration: "1 Year",
    awardingBody: "Zambia Counselling Council (ZCC)",
    image: "https://images.pexels.com/photos/6098004/pexels-photo-6098004.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDesc: "A one-year certificate in Assistant Nursing, awarded by the Zambia Counselling Council.",
    overview: "Zambezi College of Education and Technology offers a one-year Certificate in Assistant Nursing, awarded by the Zambia Counselling Council (ZCC). Students who complete the certificate may continue on to the two-year diploma in the same field.",
    whatYouLearn: [
      "Foundational assistant nursing practice",
      "Coursework structured under Zambia Counselling Council guidelines",
      "A pathway into the two-year diploma programme"
    ],
    entryRequirementsNote: "Minimum of G9 Certificate plus any 3 O' Level subjects.",
    related: ["psychosocial-counselling-certificate", "hiv-aids-management-certificate", "assistant-nursing-diploma"]
  },

  // ----------------------------------------------------------------- SKILLS
  {
    slug: "tailoring",
    category: "skills",
    name: "Tailoring",
    qualification: "Community Skills Training",
    duration: "Not yet confirmed",
    awardingBody: "ZCET Community Empowerment Programme",
    image: "https://images.pexels.com/photos/7776123/pexels-photo-7776123.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDesc: "A free community empowerment programme in tailoring, offered as training equipment and facilities become available.",
    overview: "Tailoring is one of ZCET's free, community-based skills training programmes. Per ZCET's own announcement, skills-based programmes such as tailoring continue as free community empowerment training \"as and when training equipment and other support facilities are made available to students.\"",
    whatYouLearn: [
      "Practical, hands-on tailoring skills",
      "Delivered as part of ZCET's community empowerment initiative"
    ],
    entryRequirementsNote: "No formal academic entry requirements have been published for this community programme. Contact ZCET directly for the current intake status.",
    related: ["carpentry", "computer-basics", "bricklaying"]
  },
  {
    slug: "carpentry",
    category: "skills",
    name: "Carpentry",
    qualification: "Community Skills Training",
    duration: "Not yet confirmed",
    awardingBody: "ZCET Community Empowerment Programme",
    image: "https://images.pexels.com/photos/6790091/pexels-photo-6790091.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDesc: "A free community empowerment programme in carpentry, offered as training equipment and facilities become available.",
    overview: "Carpentry is one of ZCET's free, community-based skills training programmes. Per ZCET's own announcement, skills-based programmes such as carpentry continue as free community empowerment training \"as and when training equipment and other support facilities are made available to students.\"",
    whatYouLearn: [
      "Practical, hands-on carpentry and woodwork skills",
      "Delivered as part of ZCET's community empowerment initiative"
    ],
    entryRequirementsNote: "No formal academic entry requirements have been published for this community programme. Contact ZCET directly for the current intake status.",
    related: ["tailoring", "bricklaying", "computer-basics"]
  },
  {
    slug: "computer-basics",
    category: "skills",
    name: "Computer Basics",
    qualification: "Community Skills Training",
    duration: "Not yet confirmed",
    awardingBody: "ZCET Community Empowerment Programme",
    image: "https://images.pexels.com/photos/5539293/pexels-photo-5539293.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDesc: "A free community empowerment programme covering introductory computer skills.",
    overview: "Computer Basics is one of ZCET's free, community-based skills training programmes. Per ZCET's own announcement, skills-based programmes such as computer basics continue as free community empowerment training \"as and when training equipment and other support facilities are made available to students.\"",
    whatYouLearn: [
      "Introductory, practical computer skills",
      "Delivered as part of ZCET's community empowerment initiative"
    ],
    entryRequirementsNote: "No formal academic entry requirements have been published for this community programme. Contact ZCET directly for the current intake status.",
    related: ["tailoring", "carpentry", "bricklaying"]
  },
  {
    slug: "bricklaying",
    category: "skills",
    name: "Bricklaying",
    qualification: "Community Skills Training",
    duration: "Not yet confirmed",
    awardingBody: "ZCET Community Empowerment Programme",
    image: "https://images.pexels.com/photos/32913797/pexels-photo-32913797.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDesc: "A free community empowerment programme in bricklaying, offered as training equipment and facilities become available.",
    overview: "Bricklaying is one of ZCET's free, community-based skills training programmes. Per ZCET's own announcement, skills-based programmes such as bricklaying continue as free community empowerment training \"as and when training equipment and other support facilities are made available to students.\"",
    whatYouLearn: [
      "Practical, hands-on bricklaying skills",
      "Delivered as part of ZCET's community empowerment initiative"
    ],
    entryRequirementsNote: "No formal academic entry requirements have been published for this community programme. Contact ZCET directly for the current intake status.",
    related: ["tailoring", "carpentry", "computer-basics"]
  }
];

// Helper: find a programme by slug
function zcetFindProgramme(slug){
  return ZCET_PROGRAMMES.find(function(p){ return p.slug === slug; });
}
