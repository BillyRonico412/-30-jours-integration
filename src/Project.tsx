import { FaGithub, FaEye } from 'react-icons/fa'
import type { ProjectInterface } from './App'

const Project = (props: ProjectInterface): JSX.Element => (
  <div className="border rounded shadow overflow-hidden max-w-[300px]">
    <img
      src={props.thumbnail}
      alt={props.name}
      className="hover:scale-105 transition-transform object-cover w-full object-center"
    />
    <div className="px-4 py-4 h-full">
      <div className="flex flex-col items-center gap-y-2">
        <p className="truncate font-semibold text-gray-800 text-lg">
          {props.name}
        </p>
        <div className="flex gap-x-4 items-center">
          <a
            href={props.github}
            className="text-white bg-gray-700 px-4 py-2 rounded shadow text-sm flex items-center gap-x-2"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            Github
          </a>
          <a
            href={props.link}
            className="text-white bg-gray-700 rounded shadow px-4 py-2 text-sm flex items-center gap-x-2"
            target="_blank"
            rel="noreferrer"
          >
            View
            <FaEye />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Project
