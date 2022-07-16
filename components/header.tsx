import DentistIcon from '../public/dentistIcon'
import DeveloperIcon from '../public/developerIcon'
import GithubIcon from '../public/githubIcon'

const Header = () => {
  return (
    <div className="text-center border-b border-slate-300 p-4 text-gray-500 flex ">
      <div className="pt-2">
        <DentistIcon />
      </div>
      <div className="pt-2">
        <DeveloperIcon />
      </div>
      <div className="text-xl font-bold text-slate-700 pt-2  mr-9">
        Portfolio
      </div>
      <div className="text-xl font-bold text-slate-700 pt-2 ml-10 mr-10 pl-10">
        Projects
      </div>
      <div className="text-xl font-bold text-slate-700 pt-2 mr-10 ">About</div>
      <div className="text-xl font-bold text-slate-700 pt-2 pr-10 mr-10">
        Contact
      </div>
      <div className="basis-1/2 order-last ">
        <GithubIcon />
      </div>
    </div>
  )
}

export default Header
