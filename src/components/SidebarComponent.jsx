import {
    CalendarIcon, ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon
} from "@heroicons/react/24/outline/index.js";

import LocalDiningIcon from "../assets/icons/local_dining.svg"
import StockPotIcons from "../assets/icons/stockpot.svg"
import ListAllIcons from "../assets/icons/list_alt.svg"
import GridViewIcons from "../assets/icons/grid_view.svg"
import LogoutIcons from "../assets/icons/logout.svg"
import NotificationIcons from "../assets/icons/notifications.svg"
import BarChartIcons from "../assets/icons/bar_chart_4_bars.svg"
import SettingsIcons from "../assets/icons/settings.svg"

const navigation = [
    {name: 'Dashboard', href: '#', icon: StockPotIcons, current: true},
    {name: 'Team', href: '#', icon: ListAllIcons, current: false},
    {name: 'Calendar', href: '#', icon: BarChartIcons, current: false},
    {name: 'Projects', href: '#', icon: GridViewIcons, current: false},
    {name: 'Documents', href: '#', icon: NotificationIcons, current: false},
    {name: 'Reports', href: '#', icon: SettingsIcons, current: false},
]
function SidebarComponent () {
  return (
      <>
          <div
              className="hidden lg:inset-y-0 lg:z-50 lg:flex lg:flex-col absolute my-auto mt-4">
              <div
                  className="flex grow flex-col gap-y-5 px-6 pb-4 rounded-2xl py-5 my-3 bg-gradient-to-b from-primary to-yellowFood">
                  <div className="flex h-16 shrink-0 items-center">
                      <img
                          className="h-8 w-auto"
                          src={LocalDiningIcon}
                          alt="Food Menu"
                      />
                  </div>
                  <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col">
                          <li>
                              <ul role="list" className="mx-auto space-y-3">
                                  {navigation.map((item) => (
                                      <li key={item.name} className={item.current ? 'bg-secondary rounded-md' : ''}>
                                          <a
                                              href={item.href}
                                              className="group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-white my-6">
                                              <img
                                                  src={item.icon}
                                                  className='text-white h-4 w-4 shrink-0'
                                                  aria-hidden="true"
                                                  alt={item.name}
                                              />
                                          </a>
                                      </li>
                                  ))}
                              </ul>
                          </li>
                      </ul>
                  </nav>
                  <div className="mt-auto">
                      <a
                          href="#"
                          className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-white">
                          <img
                              src={LogoutIcons}
                              className='text-white h-5 w-5 shrink-0'
                              aria-hidden="true"
                              alt="Logout"
                          />
                      </a>
                  </div>
              </div>
          </div>
      </>
  )
}
export default SidebarComponent;
