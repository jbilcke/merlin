import { FC, ReactNode } from "react"
import { useRouter } from 'next/router'
import { BankIcon } from "../icons/Bank"
import { ChatIcon } from "../icons/Chat"
import { CompassIcon } from "../icons/Compass"
import { FolderIcon } from "../icons/Folder"
import { HomeIcon } from "../icons/Home"
import { ProfileIcon } from "../icons/Profile"

const MenuEntry: FC<{
  href: string
  icon: ReactNode
  title: ReactNode
}> = ({ href, icon, title }) => {
  const router = useRouter()

  return (
  <a className={`font-thin ${
    router.pathname === href ? 'text-blue-500' :
    'hover:text-gray-800 dark:text-gray-400 text-gray-500 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 '
   } flex items-center p-2 my-0 transition-colors duration-200 justify-start`} href={href}>
    <span className="text-left">
      {icon}
    </span>
    <span className="mx-4 text-md font-normal">
      {title}
    </span>
  </a>
  )
}

export const SideMenu = () => {

  const menu = [
    {
      title: 'Dashboard',
      icon: <HomeIcon />,
      href: '/'
    },
    {
      title: 'Business',
      menu: [
        {
          title: 'Traffic',
          icon: <HomeIcon />,
          href: '/',
        },
        {
          title: 'Revenue',
          icon: <BankIcon />,
          href: '/',
        },
      ]
    },
    {
      title: 'Production',
      menu: [
        {
          title: 'Feature Health',
          icon: <CompassIcon />,
          href: '/production/health',
        },
        {
          title: 'Bug Radar',
          icon: <CompassIcon />,
          href: '/production/bugs',
        },
        {
          title: 'Releases',
          icon: <FolderIcon />,
          href: '/production/releases',
        },
      ]
    },
    {
      title: 'Project',
      menu: [
        {
          title: 'Pending Tasks',
          icon: <FolderIcon />,
          href: '/project/tickets',
        },
        {
          title: 'Pull Requests',
          icon: <FolderIcon />,
          href: '/project/pullrequests',
        },
        {
          title: 'TODO Radar',
          icon: <CompassIcon />,
          href: '/project/todos',
        },
        {
          title: 'Bug Radar',
          icon: <CompassIcon />,
          href: '/project/bugs',
        },
      ]
    },
    {
      title: 'Organization',
      menu: [
        {
          title: 'Documentation',
          icon: <FolderIcon />,
          href: '/organization/documentation',
        },
        {
          title: 'Candidates',
          icon: <FolderIcon />,
          href: '/organization/candidates',
        },
      ]
    },
  ]

 return (
  <div className="relative bg-white dark:bg-gray-800 h-full overflow-auto">
    <div className="flex flex-col sm:flex-row sm:justify-around">
      <div className="w-72 h-screen">
        <nav className="pt-3 pl-6">

          <div className="pl-2">
            <h1 className="text-2xl font-semibold text-gray-700 dark:text-white">
              {process.env.NEXT_PUBLIC_DASHBOARD_NAME}
            </h1>
            {process.env.NEXT_PUBLIC_DASHBOARD_PUNCHLINE && 
            <h2 className="text-xs text-gray-400 italic">
              {process.env.NEXT_PUBLIC_DASHBOARD_PUNCHLINE}
            </h2>}
          </div>

          {menu.map(entry => 
            entry.menu ?
            <div key={entry.title} className="mb-4">
              <p className="text-gray-500 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-1 text-md font-normal">
                {entry.title.toUpperCase()}
              </p>
              {entry.menu.map(entry => <MenuEntry key={entry.title} {...entry} />)}
            </div>
            : <MenuEntry key={entry.title} {...entry} />
          )}
        </nav>
      </div>
    </div>
  </div>
 )
}