export interface CustomUserForm {
	username: string
	password: string
	repeatPassword: string
}

export interface CustomUserFormLogin {
	username: string
	password: string
}

export interface CustomUser {
	username: string
	password: string
	cart: Array<number>
}
