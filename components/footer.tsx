import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import GithubIcon from '../public/githubIcon'
import Link from 'next/link'

const Footer = () => {
  const icon = <FontAwesomeIcon icon={faCoffee} />

  return (
    <div className="text-center border-t  border-slate-300 p-4 text-slate-400">
      <div>Designed and built by LeoCisAl</div>
      <div className="flex justify-center gap-4">
        <div className="text-3xl text-slate-300">{icon}</div>
        <Link href="https://github.com">
          <a>
            <GithubIcon />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Footer
