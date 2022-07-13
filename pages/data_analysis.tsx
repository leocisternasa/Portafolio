import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import projectImage from '../public/escalada_pareja.jpeg'

const DataAnalysis: NextPage = () => {
  return (
    <div>
      <Image alt="" src={projectImage} />
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        voluptas laboriosam laborum, fugiat distinctio officia, ad vero odio
        dolor, beatae error! Asperiores, ea delectus suscipit fugiat dolores
        neque reiciendis magni.
      </div>
      <div className="mt-6">
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>
  )
}

export default DataAnalysis
