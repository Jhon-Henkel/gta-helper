export const utilMoney = {
    formatValueToUs: (value: number): string => {
        value = parseFloat(String(value))
        return value.toLocaleString(
            'en-US',
            {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
            }
        )
    }
}
