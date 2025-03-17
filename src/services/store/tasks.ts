import { create } from 'zustand'

const useTaskStore = create(() => ({
  tasks: [1, 2, 3],
}))

export default useTaskStore