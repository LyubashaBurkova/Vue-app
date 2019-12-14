export default {
  state: {
    ads: [
      {
        title: 'First ad 1',
        description: 'Hello i am description 1',
        promo: 'false',
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '1'
      },
      {
        title: 'First ad 2',
        description: 'Hello i am description 2',
        promo: 'false',
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '2'
      },
      {
        title: 'First ad 3',
        description: 'Hello i am description 3',
        promo: 'false',
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '3'
      },
      {
        title: 'First ad 4',
        description: 'Hello i am description 4',
        promo: 'false',
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '4'
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd({commit}, payload) {
      payload.id = '123456789'

      commit('createAd', payload)
    }
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds(state) {
      return state.ads
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
