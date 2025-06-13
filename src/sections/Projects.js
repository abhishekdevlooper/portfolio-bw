import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";
import DevOpsImage from "../img/DevOp.jpg";
import EcommerceImage from "../img/ECommercePlatform.jpg";
import ChatGptClone from "../img/ChatGptClone.jpg";

const projects = [
  {
    name: "E-commerce Platform (Spring Boot + React.js)",
    description:
      "A microservices-based platform with user, product, and payment services using Spring Boot, React.js, PostgreSQL, Kubernetes, and Stripe API.",
    link: "https://github.com/abhishekdevlooper/ecommerce-platform-springboot-react",
    image: EcommerceImage,
    tech: ["Spring Boot", "React.js", "Docker", "Kubernetes", "Postgres"],
    details: [
      "Developed a microservices-based platform with user, product, and payment services.",
      "Implemented JWT authentication and role-based access.",
      "Integrated Elasticsearch for fast product search.",
      "Enabled secure payments using Stripe API.",
      "Deployed via Dockerized containers in Kubernetes.",
    ],
  },
  {
    name: "Cloud-Based ChatGPT Clone",
    description:
      "A chatbot using GPT-4, Claude AI, and Llama 2, built with Next.js, OpenAI API, Node.js, Redis, and AWS.",
    link: "https://github.com/abhishekdevlooper/chatgpt-clone-cloud",
    image: ChatGptClone,
    tech: ["OpenAI API", "Node.js", "Redis", "AWS", "Docker"],
    details: [
      "Built a chatbot using GPT-4, Claude AI, and Llama 2.",
      "Integrated multi-user authentication (JWT, OAuth).",
      "Stored chat history in Redis and DynamoDB.",
      "Deployed on AWS EKS (Kubernetes) for high availability.",
    ],
  },
  {
    name: "DevOps CI/CD Pipeline Automation",
    description:
      "A CI/CD pipeline for automated builds and deployments using Jenkins, Kubernetes, Terraform, AWS/GCP.",
    link: "https://github.com/abhishekdevlooper/devops-cicd-pipeline",
    image: DevOpsImage,
    tech: ["Jenkins", "Docker", "Kubernetes", "Terraform", "Grafana"],
    details: [
      "Designed a CI/CD pipeline for automated builds and deployments.",
      "Deployed a containerized Spring Boot app on AWS EKS.",
      "Automated infrastructure provisioning with Terraform (IaC).",
      "Configured HPA for automatic scaling.",
      "Integrated Prometheus & Grafana for monitoring and alerts.",
    ],
  },
];

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="badges">
                {project.tech?.map((tech, i) => (
                  <span key={i} className="badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* View on Git button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="gitBtn"
              >
                View on GitHub
              </a>
              <br></br>
              {/* Expand/Collapse Button */}
              <button onClick={() => handleExpand(index)} className="expandBtn">
                {expandedIndex === index ? "Show Less" : "Read More"}
              </button>

              {/* Animated List */}
              {expandedIndex === index && (
                <ul className="project-details">
                  {project.details?.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
