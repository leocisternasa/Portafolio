import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import Profile from '../components/profile'
import ProjectPreview, {
  ProjectPreviewInterface,
} from '../components/project_preview'
import Layout from '../components/layout'

const Home: NextPage = () => {
  const projectMetadataArray = []

  projectMetadataArray.push({
    title: 'Data analysis App',
    desc: 'Processes data in Python',
    linkUrl: '/data_analysis',
    image: '/anthony-duran-xypTOFe_hqc-unsplash.jpeg.crdownload',
  })

  projectMetadataArray.push({
    title: 'Data analysis App',
    desc: 'Processes data in Python',
    linkUrl: '/data_analysis',
    image: '/anthony-duran-xypTOFe_hqc-unsplash.jpeg.crdownload',
  })

  projectMetadataArray.push({
    title: 'Data analysis App',
    desc: 'Processes data in Python',
    linkUrl: '/data_analysis',
    image: '/anthony-duran-xypTOFe_hqc-unsplash.jpeg.crdownload',
  })
  projectMetadataArray.push({
    title: 'Data analysis App',
    desc: 'Processes data in Python',
    linkUrl: '/data_analysis',
    image: '/anthony-duran-xypTOFe_hqc-unsplash.jpeg.crdownload',
  })

  const projectPreviewElements = []

  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i]
    const element = <ProjectPreview {...metaData} key={i} />
    projectPreviewElements.push(element)
  }
  return (
    <div>
      <Profile />
      <div className="mt-4 flex gap-4 flex-col">{projectPreviewElements}</div>
    </div>
  )
}

export default Home
