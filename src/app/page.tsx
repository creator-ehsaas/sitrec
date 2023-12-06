'use client'
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
 
export default function AccordionCustomStyles() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          NAAC
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/event">
          Events
        </Link>
      </Typography>
    </ul>
  );
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value: React.SetStateAction<number>) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div className="max-h-[768px] w-full">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Symbiosis Institute of Technology, Nagpur
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
    <div className="mx-8 my-8">
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Criteria 1: Curricular Aspects
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal flex flex-col gap-y-2">
        <hr className="mb-2"/>
        <a href="#"><strong>1.1.1</strong>  Programme outcomes (POs), Programme Specific Outcomes (PSOs) and Course Outcomes (COs)<br/></a>
        <a href="#"><strong>1.1.2</strong>  Number of Programmes where syllabus revision was carried out during the year <br/></a>
        <a href="#"><strong>1.1.3</strong>  Total number of courses having focus on employability / entrepreneurship / skill development offered by the University during the year *creation of pie chart<br/></a>
        <a href="#"><strong>1.3.1</strong>  Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human Values, Environment and Sustainability into the Curriculum *creation of pie chart<br/></a>
        <a href="#"><strong>1.3.2 & 1.3.3</strong>  Number of value-added courses for imparting transferable and life skills offered during the year<br/></a>
        <a href="#"><strong>1.3.4</strong>  Number of students undertaking field projects / research projects / internships during the year *ECR creation and linking with PBL, capstone, visit etc.<br/></a>
        <a href="#"><strong>1.4.1 & 1.4.2</strong>  Structured feedback for design and review of syllabus – semester wise / is received. Feedback collected, analysed and action taken and feedback available on the website.<br/></a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         Criteria 2: Teaching-Learning and Evaluation
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal flex flex-col gap-y-2">
        <hr className="mb-2"/>
         <a href="#"><strong>2.2.1</strong> The institution assesses the learning levels of the students and organises special Programmes for advanced learners and slow learners<br/></a>
         <a href="#"><strong>2.3.1</strong> Student centric methods, such as experiential learning, participative learning and problem-solving methodologies are used for enhancing learning experiences * in teaching plan of all subjects <br/></a>
         <a href="#"><strong>2.3.2</strong> Teachers use ICT enabled tools including online resources for effective teaching and learning processes during the year *hacker rank, software usage, creation of 2 videos by each faculty<br/></a>
         <a href="#"><strong>2.3.2</strong> Ratio of students to mentor for academic and other related issues during the year<br/></a>
         <a href="#"><strong>2.4.4</strong> Total number of full time teachers who received awards, recognition, fellowships at State, National, International level from Government/Govt. recognised bodies during the year<br/></a>
         <a href="#"><strong>2.6.1</strong> The institution has stated learning outcomes (generic and programme specific)/graduate attributes which are integrated into the assessment process and widely publicized through the website and other documents<br/></a>
         <a href="#"><strong>2.6.2</strong> Attainment of Programme outcomes, Programme specific outcomes and course outcomes are evaluated by the institution during the year<br/></a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Criteria 3: Research, Innovations and Extension
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal flex flex-col gap-y-2">
        <hr className="mb-2"/>
         <a href="#"><strong>2.2.1</strong> The institution assesses the learning levels of the students and organises special Programmes for advanced learners and slow learners<br/></a>
         <a href="#"><strong>2.3.1</strong> Student centric methods, such as experiential learning, participative learning and problem-solving methodologies are used for enhancing learning experiences * in teaching plan of all subjects <br/></a>
         <a href="#"><strong>2.3.2</strong> Teachers use ICT enabled tools including online resources for effective teaching and learning processes during the year *hacker rank, software usage, creation of 2 videos by each faculty<br/></a>
         <a href="#"><strong>2.3.2</strong> Ratio of students to mentor for academic and other related issues during the year<br/></a>
         <a href="#"><strong>2.4.4</strong> Total number of full time teachers who received awards, recognition, fellowships at State, National, International level from Government/Govt. recognised bodies during the year<br/></a>
         <a href="#"><strong>2.6.1</strong> The institution has stated learning outcomes (generic and programme specific)/graduate attributes which are integrated into the assessment process and widely publicized through the website and other documents<br/></a>
         <a href="#"><strong>2.6.2</strong> Attainment of Programme outcomes, Programme specific outcomes and course outcomes are evaluated by the institution during the year<br/></a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         Criteria 4: Infrastructure and Learning Resources
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal flex flex-col gap-y-2">
        <hr className="mb-2"/>
         <a href="#"><strong>2.2.1</strong> The institution assesses the learning levels of the students and organises special Programmes for advanced learners and slow learners<br/></a>
         <a href="#"><strong>2.3.1</strong> Student centric methods, such as experiential learning, participative learning and problem-solving methodologies are used for enhancing learning experiences * in teaching plan of all subjects <br/></a>
         <a href="#"><strong>2.3.2</strong> Teachers use ICT enabled tools including online resources for effective teaching and learning processes during the year *hacker rank, software usage, creation of 2 videos by each faculty<br/></a>
         <a href="#"><strong>2.3.2</strong> Ratio of students to mentor for academic and other related issues during the year<br/></a>
         <a href="#"><strong>2.4.4</strong> Total number of full time teachers who received awards, recognition, fellowships at State, National, International level from Government/Govt. recognised bodies during the year<br/></a>
         <a href="#"><strong>2.6.1</strong> The institution has stated learning outcomes (generic and programme specific)/graduate attributes which are integrated into the assessment process and widely publicized through the website and other documents<br/></a>
         <a href="#"><strong>2.6.2</strong> Attainment of Programme outcomes, Programme specific outcomes and course outcomes are evaluated by the institution during the year<br/></a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 transition-colors ${
            open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         Criteria 5: Student Support and Progression
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal flex flex-col gap-y-2">
        <hr className="mb-2"/>
         <a href="#"><strong>2.2.1</strong> The institution assesses the learning levels of the students and organises special Programmes for advanced learners and slow learners<br/></a>
         <a href="#"><strong>2.3.1</strong> Student centric methods, such as experiential learning, participative learning and problem-solving methodologies are used for enhancing learning experiences * in teaching plan of all subjects <br/></a>
         <a href="#"><strong>2.3.2</strong> Teachers use ICT enabled tools including online resources for effective teaching and learning processes during the year *hacker rank, software usage, creation of 2 videos by each faculty<br/></a>
         <a href="#"><strong>2.3.2</strong> Ratio of students to mentor for academic and other related issues during the year<br/></a>
         <a href="#"><strong>2.4.4</strong> Total number of full time teachers who received awards, recognition, fellowships at State, National, International level from Government/Govt. recognised bodies during the year<br/></a>
         <a href="#"><strong>2.6.1</strong> The institution has stated learning outcomes (generic and programme specific)/graduate attributes which are integrated into the assessment process and widely publicized through the website and other documents<br/></a>
         <a href="#"><strong>2.6.2</strong> Attainment of Programme outcomes, Programme specific outcomes and course outcomes are evaluated by the institution during the year<br/></a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className={`border-b-0 transition-colors ${
            open === 6 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         Criteria 6: Governance, Leadership and Management
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal flex flex-col gap-y-2">
        <hr className="mb-2"/>
         <a href="#"><strong>2.2.1</strong> The institution assesses the learning levels of the students and organises special Programmes for advanced learners and slow learners<br/></a>
         <a href="#"><strong>2.3.1</strong> Student centric methods, such as experiential learning, participative learning and problem-solving methodologies are used for enhancing learning experiences * in teaching plan of all subjects <br/></a>
         <a href="#"><strong>2.3.2</strong> Teachers use ICT enabled tools including online resources for effective teaching and learning processes during the year *hacker rank, software usage, creation of 2 videos by each faculty<br/></a>
         <a href="#"><strong>2.3.2</strong> Ratio of students to mentor for academic and other related issues during the year<br/></a>
         <a href="#"><strong>2.4.4</strong> Total number of full time teachers who received awards, recognition, fellowships at State, National, International level from Government/Govt. recognised bodies during the year<br/></a>
         <a href="#"><strong>2.6.1</strong> The institution has stated learning outcomes (generic and programme specific)/graduate attributes which are integrated into the assessment process and widely publicized through the website and other documents<br/></a>
         <a href="#"><strong>2.6.2</strong> Attainment of Programme outcomes, Programme specific outcomes and course outcomes are evaluated by the institution during the year<br/></a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className={`border-b-0 transition-colors ${
            open === 7 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         Criteria 7:  Institutional Values and Best Practices
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal flex flex-col gap-y-2">
        <hr className="mb-2"/>
         <a href="#"><strong>2.2.1</strong> The institution assesses the learning levels of the students and organises special Programmes for advanced learners and slow learners<br/></a>
         <a href="#"><strong>2.3.1</strong> Student centric methods, such as experiential learning, participative learning and problem-solving methodologies are used for enhancing learning experiences * in teaching plan of all subjects <br/></a>
         <a href="#"><strong>2.3.2</strong> Teachers use ICT enabled tools including online resources for effective teaching and learning processes during the year *hacker rank, software usage, creation of 2 videos by each faculty<br/></a>
         <a href="#"><strong>2.3.2</strong> Ratio of students to mentor for academic and other related issues during the year<br/></a>
         <a href="#"><strong>2.4.4</strong> Total number of full time teachers who received awards, recognition, fellowships at State, National, International level from Government/Govt. recognised bodies during the year<br/></a>
         <a href="#"><strong>2.6.1</strong> The institution has stated learning outcomes (generic and programme specific)/graduate attributes which are integrated into the assessment process and widely publicized through the website and other documents<br/></a>
         <a href="#"><strong>2.6.2</strong> Attainment of Programme outcomes, Programme specific outcomes and course outcomes are evaluated by the institution during the year<br/></a>
        </AccordionBody>
      </Accordion>
    </div>
    </>
  );
}