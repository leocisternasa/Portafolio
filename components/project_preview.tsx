import Image from 'next/image'
import Link from 'next/link'

export interface ProjectPreviewInterface {
  title: string
  desc: string
  linkUrl: string
  image: string
}

const ProjectPreview = (props: ProjectPreviewInterface) => {
  return (
    <div className="flex gap-4 bg-slate-100">
      <div className="relative h-24 w-16">
        <Image alt="" src={props.image} layout="fill" />
      </div>
      <div className="my-auto ">
        <Link href={props.linkUrl}>
          <a className="font-bold underline hover:text-indigo-600">
            {props.title}
          </a>
        </Link>
        <div>{props.desc}</div>
      </div>
    </div>
  )
}

export default ProjectPreview
