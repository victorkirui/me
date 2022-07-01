import React from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import Title from "../components/Title";
import ResumeItem from "../components/ResumeItem";
import ResumeSmallTitle from "../components/ResumeSmallTitle";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";

// CERTIFICATE IMAGES
import Udacity from "../images/certificateImages/udacity.png";
import Udemy1 from "../images/certificateImages/udemy1.jpg";
import Udemy2 from "../images/certificateImages/udemy2.jpg";
import Udemy3 from "../images/certificateImages/udemy3.jpg";

function ResumePage() {
  const briefcase = <BiBriefcaseAlt2 />;
  const schoolIcon = <MdOutlineSchool />;
  const certIcon = <TbCertificate />;
  return (
    <ResumeContainer>
      <MainLayout>
        <Title title="My Resume" span="My Resume" />
        <InnerLayout>
          <div className="small-title">
            <ResumeSmallTitle icon={briefcase} title="Working Experience" />
          </div>

          <div className="resume-content">
            <ResumeItem
              year="Oct 2020 - Present"
              title="Web Developer Freelance"
              subTitle="Upwork"
              technologies={[
                "WordPress",
                "Frontend development",
                "CSS",
                "React",
                "Redux",
              ]}
            />
            <ResumeItem
              year="Jan 2021 - Oct 2021"
              title="Website Developer"
              subTitle="FibrConnect "
              technologies={["WordPress", "Frontend development", "CSS"]}
            />
            <div className="resume-margin-b-utility-class">
              <ResumeItem
                year="Sep 2020 - Dec 2020"
                title="Frontend Developer Intern"
                subTitle="KCB Bank Group"
                technologies={["HTML", "CSS", "Javascript"]}
              />
            </div>
          </div>

          <div className="small-title">
            <ResumeSmallTitle
              icon={schoolIcon}
              title="Educational Qualifications"
            />
          </div>

          <div className="resume-content">
            <ResumeItem
              year="2017-2020"
              title="Computer Science Degree"
              subTitle="Kabarak University"
              text="Grade: ✍First-Class Honours"
            />
            <ResumeItem
              year="2011-2014"
              title="High School Diploma"
              subTitle="Sacho High School"
              text="Grade: ✍Grade A-"
            />
            <div className="resume-margin-b-utility-class">
              <ResumeItem
                year="2000-2010"
                title="Primary School Graduation"
                subTitle="Mema Educational Centre"
                text="Marks attained: 374/500"
              />
            </div>
          </div>

          <div className="small-title">
            <ResumeSmallTitle
              icon={certIcon}
              title="Licenses & certifications"
            />
          </div>

          <div className="resume-content">
            <ResumeItem
              image={Udacity}
              title="Javascript Programming Foundations"
              subTitle="Udacity"
              link="https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/253647a7-f90d-4db6-a4c3-fbb7ea3417dd.pdf"
            />
            <ResumeItem
              image={Udemy1}
              title="React Developer Crash Course"
              subTitle="Udemy"
              link="https://udemy-certificate.s3.amazonaws.com/pdf/UC-dcaba114-99b2-43dc-bae7-0de14d5e1efd.pdf"
            />
            <ResumeItem
              image={Udemy2}
              title="Javascript Practicals"
              subTitle="Udemy"
              link="https://udemy-certificate.s3.amazonaws.com/pdf/UC-bfbcd58e-fcce-4dca-b115-168eeb6c0cdb.pdf"
            />
            <ResumeItem
              image={Udemy3}
              title="Javascript for Beginners"
              subTitle="Udemy"
              link="https://udemy-certificate.s3.amazonaws.com/pdf/UC-fe3f8c5a-bfb0-4f64-86ee-0772ae31cd68.pdf"
            />
          </div>
        </InnerLayout>
      </MainLayout>
    </ResumeContainer>
  );
}

const ResumeContainer = styled.div`
  .resume-content {
    margin-left: 9px;
  }
  .small-title {
    padding-bottom: 1.5rem;
  }
  .resume-content {
    border-left: 1px solid var(--border-color);
  }
`;

export default ResumePage;
