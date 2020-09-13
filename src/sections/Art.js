import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Heading from "../components/Heading";
import {
  FaPaintBrush,
} from "../components/Icons";
import styles from "./Photography.module.css";

const Art = () => {
  const data = useStaticQuery(graphql`
    {
      allArtJson {
        edges {
          node {
            id
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
    <section id="art">
      <Heading icon={FaPaintBrush} title="Art" />

      <div className={styles.container}>
        {data.allArtJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className="relative cursor-pointer bg-black md:rounded-lg wow fadeIn"
            style={{
              animationDelay: `${index * 200 + 200}ms`,
            }}
          >
          <GatsbyImage
            className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
            {...node.image.childImageSharp}
          />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Art;
