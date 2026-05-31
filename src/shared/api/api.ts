interface ApiErrorResponse {
	success: false
	data: string
}
interface ApiSuccessResponse<T> {
	success: true
	data: T
}

class ApiService {
	private BASE_URL = "https://juniorsbootcamp.ru/api/"

	async get<T>(
		url: string,
		options?: RequestInit,
	): Promise<ApiErrorResponse | ApiSuccessResponse<T>> {
		try {
			const response = await fetch(`${this.BASE_URL}${url}`, {
				...options,
				headers: {
					...options?.headers,
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
			if (!response.ok) {
				throw new Error("Failed to get info")
			}
			const data = await response.json()
			return {
				success: true,
				data,
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				return {
					success: false,
					data: error.message,
				}
			}
			return {
				success: false,
				data: "Unknown error",
			}
		}
	}
	async post() {}
	async put() {}
	async delete() {}
}

export const api = new ApiService()
