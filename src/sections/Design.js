import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import {
  FaDribbble,
  FaLink,
} from "../components/Icons";
import styles from "./art.module.css";

const Design = () => {
  const data = useStaticQuery(graphql`
    {
      allDesignJson {
        edges {
          node {
            id
            link
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="design">
      <Heading icon={FaDribbble} title="Design" />

      <div className={styles.container}>
        {data.allDesignJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className="relative cursor-pointer bg-black md:rounded-lg wow fadeIn"
            style={{
              animationDelay: `${index * 200 + 200}ms`,
            }}
            onClick={() => window.open(node.link)}
          >
            <div className="absolute inset-0 flex-center">
              <FaLink className="absolute" color="#FFF" size="5rem" />
            </div>
            <GatsbyImage
              className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
              {...node.image.childImageSharp}
            />
          </div>
        ))}
      </div>

      <Button
        className="mt-12"
        icon={FaDribbble}
        title="Shots on Dribbble"
        onClick={() => window.open("https://dribbble.com/arpita505", "_blank")}
      />
    </section>
  );
};

export default Design;
