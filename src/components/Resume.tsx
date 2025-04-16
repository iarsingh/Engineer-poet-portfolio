"use client";

import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Professional Profile</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            DevOps Engineer with expertise in cloud technologies and automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Profile Summary</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Proficient in orchestrating seamless integration & deployment pipelines, leveraging cutting-edge tools like Kubernetes & Docker</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Expertise in designing & implementing robust infrastructure as code (IaC) solutions using Terraform and Ansible</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Skilled in CI/CD methodologies, configuring pipelines with Jenkins, Bitbucket or GitLab CI</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Showcased capability to optimize system performance & reliability through comprehensive monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Proficient in cloud platforms such as AWS, Azure, and Google Cloud Platform</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Strong collaboration & communication skills, fostering cross-functional teamwork</span>
              </li>
            </ul>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Technical Skills</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Cloud Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Microsoft Azure</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Google Cloud Platform</span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">DevOps Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Jenkins</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">GitLab CI</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Azure DevOps</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Cloud Build</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Bitbucket</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">GIT</span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Infrastructure & Configuration</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Terraform</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Ansible</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Cloud Formation</span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Containerization & Orchestration</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Kubernetes</span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">AKS</span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">GKE</span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Helm</span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Programming & Scripting</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">PowerShell</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Groovy</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Go</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">JavaScript</span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">Cloud SQL</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">SQL Server</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Work Experience</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Consultant | Capgemini, Navi Mumbai</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-2">Sept&apos;24 - Present</p>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span>Architected and deployed highly scalable infrastructure on GCP using Terraform and Ansible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span>Developed reusable Terraform modules for standardized infrastructure provisioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span>Designed and implemented CI/CD pipelines using Cloud Build and Bitbucket</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span>Strengthened security and compliance by integrating Prisma and SIEM tools</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Senior Software Engineer | Tech Mahindra Pvt. Ltd., Mumbai</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-2">Jul&apos;22 - Sept&apos;24</p>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-500 dark:text-purple-400 mr-2 mt-1">•</span>
                    <span>Designed and implemented optimized CI/CD DevOps environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 dark:text-purple-400 mr-2 mt-1">•</span>
                    <span>Deployed code on Kubernetes using Helm Charts and Docker Images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 dark:text-purple-400 mr-2 mt-1">•</span>
                    <span>Led the integration of SAST and DAST tools into the Jenkins pipeline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 dark:text-purple-400 mr-2 mt-1">•</span>
                    <span>Implemented comprehensive monitoring and alerting systems</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 dark:border-green-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">System Engineer | TCS</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-2">Jul&apos;21 - Jul&apos;22</p>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 dark:text-green-400 mr-2 mt-1">•</span>
                    <span>Orchestrated robust DevOps CI/CD pipeline utilizing Jenkins, Git, and Cloud Build</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 dark:text-green-400 mr-2 mt-1">•</span>
                    <span>Managed successful database migration to cloud infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 dark:text-green-400 mr-2 mt-1">•</span>
                    <span>Spearheaded design and deployment of scalable Docker and Kubernetes platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Certifications & Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Certifications</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Executive Post Graduate Certification in Cloud Computing | 2024</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>AWS Certified Solutions Architect – Associate | 2022</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Google Cloud Associate Engineer | 2024</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Designing and Implementing Microsoft DevOps Solutions | 2024</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Education & Coding Profiles</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Education</h4>
                <p className="text-gray-600 dark:text-gray-300">B.E. (Computer Science) from RGPV, Bhopal | 2019</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Coding Profiles</h4>
                <div className="space-y-2">
                  <a href="https://www.codechef.com/users/iamarsingh" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064 6.031 6.031 0 014.26 1.724l3.101-3.101A9.969 9.969 0 0012.545.5C7.021.5 2.543 3.61.5 8.055l3.101 3.101c1.89-3.031 5.344-3.917 8.944-3.917z" />
                    </svg>
                    CodeChef
                  </a>
                  <a href="https://leetcode.com/u/imarsingh/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.632.23L.47 5.482A1.373 1.373 0 0 0 0 6.81v5.146a1.37 1.37 0 0 0 .47 1.33l12.022 8.917a1.374 1.374 0 0 0 1.632 0l12.022-8.917a1.37 1.37 0 0 0 .47-1.33V6.81a1.37 1.37 0 0 0-.47-1.328L13.483.229a1.374 1.374 0 0 0-.632-.23zm4.85 1.334a.27.27 0 0 1 .217.02l10.438 7.737a.268.268 0 0 1-.164.477H5.266a.268.268 0 0 1-.164-.477l10.438-7.737a.269.269 0 0 1 .217-.02zm-9.566 13.856l-4.8 3.558H18.3l-4.8-3.558a.27.27 0 0 0-.33 0l-4.8 3.558-4.8-3.558H18.3l-4.8-3.558a.27.27 0 0 0-.33 0z" />
                    </svg>
                    LeetCode
                  </a>
                  <a href="https://codeforces.com/profile/akhileshranjan.ks" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 7.5A3.5 3.5 0 018 4h8a3.5 3.5 0 013.5 3.5v9a3.5 3.5 0 01-3.5 3.5H8a3.5 3.5 0 01-3.5-3.5v-9zM8 5a2.5 2.5 0 00-2.5 2.5v9A2.5 2.5 0 008 19h8a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0016 5H8z" />
                    </svg>
                    CodeForces
                  </a>
                  <a href="https://www.hackerrank.com/profile/akhileshranjan_1" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 16.67V0h16.67v16.67H0zM16.67 0H33.33v16.67H16.67V0zm0 16.67H33.33V33.33H16.67V16.67zM0 33.33h16.67v16.67H0V33.33z" />
                    </svg>
                    HackerRank
                  </a>
                  <a href="https://www.cloudskillsboost.google/public_profiles/73b05fe2-54bc-4552-91e6-a41996c0d21d" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779.179-1.021.179-.24 0-.521-.061-.781-.236-.24-.179-.36-.42-.36-.721 0-.24.061-.48.24-.78.3-.42.721-.601 1.141-.721 3.6-.84 7.561-.36 10.62 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02.12-1.5 0-.42-.12-.779-.42-.899-.84-.12-.42 0-.78.3-1.02.42-.3.9-.42 1.38-.36 4.2.72 9.6 1.38 13.2 3.6.42.18.479.659.301 1.02zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381C9.6-1.2 18 3.9 18.721 10.561c.061.42-.181.899-.661 1.021z" />
                    </svg>
                    GCP Skills Boost
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 