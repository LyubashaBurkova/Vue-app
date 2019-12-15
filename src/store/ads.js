import * as fb from 'firebase'


class Ad {
  constructor(title, description, ownerId, imageSrc = '', promo = false, id = null){
    this.title=title;
    this.description=description;
    this.ownerId=ownerId;
    this.imageSrc=imageSrc;
    this.promo=promo;
    this.id=id;
  }
}

export default {
  state: {
    ads: [
      {
      //   title: 'First ad 1',
      //   description: 'Hello i am description 1',
      //   promo: 'false',
      //   imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      //   id: '1'
      // },
      // {
      //   title: 'First ad 2',
      //   description: 'Hello i am description 2',
      //   promo: 'false',
      //   imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      //   id: '2'
      },
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    },
    loadAds (state, payload){
      state.ads = payload
    }
  },
  actions: {
    async createAd({commit, getters}, payload) {
     // payload.id = '123456789'
     commit('clearError')
     commit('setLoading', true)

     try{
      const newAd = new Ad(
        payload.title, 
        payload.description, 
        getters.user.id,
        payload.imageSrc, 
        payload.promo
      )

      const ad = await fb.database().ref('ads').push(newAd)
     // console.log(fbValue)
     commit('setLoading', false)
      commit('createAd', {
        ...newAd,
        id: ad.key//изменяем id
      })
    }
    catch(error){
      commit('setError', error.message)
      commit('setLoading', false)

      throw error
    }
     // commit('createAd', payload)
    },
    async fetchAds ({commit}){
      commit('clearError')
      commit('setLoading', true)

      const resultAds = []

      try{
        const fbVal = await fb.database().ref('ads').once('value')
        const ads = fbVal.val()

        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(
            new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key)
          )
        })

        console.log(ads)
        commit('loadAds', resultAds)

        commit('setLoading', false)
      }
      catch(error){
        commit('setError', error.message)
        commit('setLoading', false)

        throw error
      }

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
