import type { ProjectInterface } from './App'

const Project = (props: ProjectInterface): JSX.Element => (
  <div className="border rounded shadow overflow-hidden max-w-[300px]">
    <img
      src={props.thumbnail}
      alt={props.name}
      className="hover:scale-105 transition-transform object-cover w-full object-center"
    />
    <div className="px-4 py-4 bg-gray-50 h-full">
      <div className="flex flex-col items-center gap-y-2">
        <p className="truncate">{props.name}</p>
        <div className="flex gap-x-4 items-center">
          <a
            href={props.github}
            className="ml-auto text-white bg-gray-800 px-2 py-1 rounded shadow"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href={props.link}
            className="text-gray-800 underline px-2 py-1"
            target="_blank"
            rel="noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Project
