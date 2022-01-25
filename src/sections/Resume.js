import { graphql, useStaticQuery, Link } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { FaLink, IoIosDocument } from "../components/Icons";

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "resume/preview.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <section id="resume">
      <Heading icon={IoIosDocument} title="Resume" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 items-center">
        <div className="col-span-1 md:col-span-2">
          <Link
            href="https://arpita505.github.io/React-Resume/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-64 md:h-48 lg:h-64 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
          >
            <FaLink className="absolute" color="#FFF" size="5rem" />
            <GatsbyImage
              className="absolute w-full h-64 md:h-48 lg:h-64 object-cover rounded-lg hover:opacity-50 duration-200"
              imgStyle={{ objectPosition: "top" }}
              {...data.file.childImageSharp}
            />
            <span className="sr-only">Download Resume</span>
          </Link>
        </div>
        <div className="col-span-1 md:col-span-3">
          <h5 className="text-lg lg:text-xl font-semibold">
            Have a look at a more organised and minimalised information here :
          </h5>
          // <Button
          //   className="mt-8"
          //   icon={IoIosDocument}
          //   title="View E-Resume"
          //   onClick={() =>
          //     window.open("https://arpitasingh5.github.io/React-Resume/", "_blank")
          //   }
          // />
          <div>
          <Button
            className="mt-8"
            icon={IoIosDocument}
            title="Download Resume"
            onClick={() =>
              window.open("https://drive.google.com/file/d/1GIg9pt9FcS95TEhnXl928DeOBAy_aTsk/view?usp=sharing", "_blank")
            }
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
