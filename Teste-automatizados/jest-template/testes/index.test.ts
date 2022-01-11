interface User {
	name: string
	balance: number
}

function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}

// import { isEven } from "../src"

// test("IsEven", () => {
//     const result = isEven(2)

//     expect(result).toBe(true)
// })