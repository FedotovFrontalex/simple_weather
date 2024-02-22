export const isExistingValue = (data, value) => {
	if (!Array.isArray(data)) {
		throw new Error('isExistingValue required only array data')
	}

	return !!data.find((item) => item === value);
}
