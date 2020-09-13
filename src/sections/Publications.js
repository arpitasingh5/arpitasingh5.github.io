import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Heading from "../components/Heading";
import { IoIosJournal, FaAngleRight } from "../components/Icons";
import styles from "./Meta.module.css";

const Publications = () => {
  const data = useStaticQuery(graphql`
    {
      allPublicationsJson {
        edges {
          node {
            id
            title
            subtitle
            authors
            link
          }
        }
      }
    }
  `);

  return (
    <section id="publications">
      <Heading icon={IoIosJournal} title="Publications" />

      {data.allPublicationsJson.edges.map(({ node }, index) => (
        <div
          key={node.id}
          className={`${styles.container} wow fadeInDown`}
          style={{
            animationDuration: `${index * 200 + 500}ms`,
          }}
        >
          <div className="mt-1 pr-6">
            <FaAngleRight />
          </div>
          <div>
          <h4>
            <a href={node.link} className="font-semibold">{node.title}</a>
            </h4>
            <p><i>{node.authors}</i></p>
            <p className="text-sm">{node.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Publications;
