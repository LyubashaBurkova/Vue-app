import store from '../store'

export default function (to, from, next) {
  if (store.getters.isUserLoggedIn) {
    next();
  } else {
    
    //console.log(store.getters);
    //console.log(store.getters.isUserLoggedIn);
    //next('/login?loginError=true');
    next();
  }
}
