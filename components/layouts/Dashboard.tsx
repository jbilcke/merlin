import { FC } from 'react'

import { SideMenu } from '../organisms/SideMenu'
import { TopMenu } from '../organisms/TopMenu'

export const Dashboard: FC<{
  noScroll?: boolean
  title?: string
}> = ({ children, noScroll = false, title }) => 
 <main className="bg-gray-100 dark:bg-gray-800 text-gray-800 h-screen overflow-hidden relative">
   <div className="flex items-start justify-between">
     <SideMenu />
     <div className="flex flex-col w-full md:space-y-4">
       <TopMenu title={title} />
       <div className={`${
         noScroll ? 'overflow-hidden' : 'overflow-auto'
        } h-screen pb-24 px-4 md:px-6`}>
       {children}
       </div>
     </div>
   </div>
 </main>
