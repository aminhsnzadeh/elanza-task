import { create } from 'zustand'
import { staticNav } from './_staticNav'
import { navItemType } from '../types'

interface navigationType {
    tasks: navItemType[]
}

const useNavigationStore = create<navigationType>(() => ({
  tasks: staticNav,
}))

export default useNavigationStore