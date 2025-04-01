import React from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";
import laptopImage from "./Laptop.jpg"; // Import the image

const projects = [
  {
    name: "E-commerce Platform (Spring Boot + React.js)",
    description:
      "A microservices-based platform with user, product, and payment services using Spring Boot, React.js, PostgreSQL, Kubernetes, and Stripe API.",
    link: "https://github.com/yourusername/ecommerce-platform",
    image: laptopImage, // Use the imported image
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
      "A chatbot using GPT-4, Claude AI, and Llama 2, built with Next.js, OpenAI API, Node.js, Redis, and AWS Lambda.",
    link: "https://github.com/yourusername/chatgpt-clone",
    image: laptopImage, // Use the imported image (use different images as needed)
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
    link: "https://github.com/yourusername/ci-cd-pipeline",
    image: laptopImage, // Use the imported image
    details: [
      "Designed a CI/CD pipeline for automated builds and deployments.",
      "Deployed a containerized Spring Boot app on AWS EKS.",
      "Automated infrastructure provisioning with Terraform (IaC).",
      "Configured auto-scaling with Kubernetes HPA for efficiency.",
      "Integrated Prometheus & Grafana for monitoring and alerts.",
    ],
  },
];

function Projects() {
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
          <motion.a
            key={index}
            className="project-card"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="project-details">
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
