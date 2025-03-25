export function formatCurrency(amount) {
    return amount.toLocaleString("es-ES", { minimumFractionDigits: 0 });
}
