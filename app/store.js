import { create } from "zustand"
import { useEffect } from "react"

/**
 * Zustands import for global handling of variables
 * Got ALOT of hydration error before fixing it with copilot cause I wanted to be able to persist refreshing
 * so most of the code that handles refresh and window changes is from copilot
 */
const useStore = create((set) => ({
	user: "",
	updateUser: (name) => {
		const newUser = name
		set({ user: newUser })
		if (typeof window !== "undefined") {
			localStorage.setItem("user", newUser)
		}
	},
	setUserFromStorage: () => {
		if (typeof window !== "undefined") {
			const storedUser = localStorage.getItem("user") || ""
			set({ user: storedUser })
		}
	},
}))

const useClientStore = () => {
	const store = useStore()
	useEffect(() => {
		store.setUserFromStorage()
	}, [])

	return store
}

export default useClientStore
