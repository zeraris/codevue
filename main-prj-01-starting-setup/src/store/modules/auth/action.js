let timer;

export default {
  async login(ctx, payload) {
   return ctx.dispatch('auth', {
      ...payload,
      mode: 'login'
    })
  },
  async signup(context, payload) {
   return context.dispatch('auth', {
      ...payload, mode: 'signup'
    })
  },
  async auth (ctx,payload) {
    const mode = payload.mode
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDmtOKK8kYpTWikI8wS-F16f5MEA9U1-nM'
    if (mode === 'signup') {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmtOKK8kYpTWikI8wS-F16f5MEA9U1-nM'
    }
    const response = await fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      const error = new Error(data.message || 'Failed to authenticate');
      throw error;
    }
    const expiresIn = +data.expiresIn * 1000;
    // const expiresIn = 6000
    const expirationDate = new Date().getTime() + expiresIn
    localStorage.setItem('token', data.idToken)
    localStorage.setItem('userId', data.localId)
    localStorage.setItem('tokenExp', expirationDate)

   timer = setTimeout(() => {
    console.log('test')
      ctx.dispatch('autoLogout')
    }, expiresIn)

    ctx.commit('setUser', {
        token: data.idToken,
        userId: data.localId,
        // tokenExpiration: expirationDate,
      });
  },
  tryLogin(ctx) {
    const token = localStorage.getItem('token')
    const userId =localStorage.getItem('userId')
    const tokenExp = localStorage.getItem('tokenExp')

    const expiresIn = +tokenExp - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

   timer = setTimeout(() => {
    console.log('test')
      ctx.dispatch('autoLogout')
    }, expiresIn)

    if (token && userId) {
      ctx.commit('setUser', {
        token: token,
        userId: userId,
        tokenExpiration: null,
      })
    }
  },
  logout(ctx) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExp')
    clearTimeout(timer)
    // state.userId = null,
    // state.token = null,
    // state.tokenExpiration = null,
    ctx.commit('setUser', {
      token: null,
      userId: null,
      // tokenExpiration: null,
    })
  },
  autoLogout(ctx) {
    console.log('test')
    ctx.dispatch('logout')
    ctx.commit('didOt')
  }
};
