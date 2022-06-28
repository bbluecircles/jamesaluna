import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import "./index.scss";

const Projects = () => {

    const data = useStaticQuery(graphql`
        query ViewProjects {
            allWpProject(sort: {fields: date}) {
                nodes {
                project_data {
                    description
                    name
                    url {
                        url
                    }
                    thumbnail {
                        sourceUrl
                        altText
                    }
                    featured
                }
                id
                }
            }
        }
    `);
    
    const projects = data.allWpProject.nodes;


    return (
        <section className="projects-grid" id="projects">
            {projects.map(project => {
                const featured = project.project_data.featured;
                const project_class = featured ? 'projects-grid__project projects-grid__project--featured' : 'projects-grid__project';
                return (
                    <a href={project.project_data.url.url} className={project_class} key={project.id}>
                        <img src={project.project_data.thumbnail.sourceUrl} />
                    </a>
                )
            })}
        </section>
    )
}

export default Projects