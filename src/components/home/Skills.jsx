import React from 'react'
import { FaFigma,FaSketch, FaHtml5, FaCss3, FaJs, FaReact, FaVuejs, FaSlack, FaMailchimp, FaNodeJs, FaGit, FaGithub } from "react-icons/fa6";

function Skills() {
  return (
    <div className="px-4 md:px-6 lg:px-10 py-5">
        <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
          Skills
        </h2>

        {/* List */}
        <div className="space-y-3">
          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">Design Tools:</span>
            </dt>
            <dd>
              <ul>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                <FaFigma className='mr-1'/>

                  Figma
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                <FaSketch className='mr-1' />
                  Sketch
                </li>
              </ul>
            </dd>
          </dl>

          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">Development:</span>
            </dt>
            <dd>
              <ul>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                  <FaHtml5 className='mr-1'/>
                  HTML
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                  <FaCss3 className='mr-1'/>
                  CSS
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                  <FaJs className='mr-1'/>
                  JavaScript
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                 <FaReact className='mr-1'/>
                  React
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                 <FaVuejs className='mr-1'/>
                  Vue
                </li>
              </ul>
            </dd>
          </dl>

          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">Collaboration:</span>
            </dt>
            <dd>
              <ul>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                 <FaMailchimp className='mr-1'/>
                  Mailchimp
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                 <FaSlack className='mr-1'/>
                  Slack
                </li>
              </ul>
            </dd>
          </dl>

          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">Design Expertise:</span>
            </dt>
            <dd>
              <ul>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                  UI/UX Design
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                  Design Systems
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                  Custom Illustrations
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                  Responsive Design
                </li>
              </ul>
            </dd>
          </dl>

          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">Soft Skills:</span>
            </dt>
            <dd>
              <ul>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                  Strong communication
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                  Problem-solving
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                  Attention to detail
                </li>
                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                  Time management
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        {/* End List */}
      </div>
  )
}

export default Skills
