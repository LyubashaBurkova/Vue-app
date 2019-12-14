import store from '../store'

export default function (to, from, next) {
  if (store.getters.user) {
    //debugger
    console.log('ok');
    next();
  } else {
    //debugger
    console.log('ok');
    next('/login?loginError=true');
  }
}
