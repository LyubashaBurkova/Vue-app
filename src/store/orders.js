export default {
    state: {
        orders: []
    },
    mutation: {
        createOrder(state, payload) {
            state.orders.push(payload)
        }
    },
    action: {
        async createOrder() {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 4000)
            })

        }

    },
    getters: {}
}