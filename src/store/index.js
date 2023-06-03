import { createStore } from 'vuex'
import signModule from './log'
import mailModule from './mails'
import smsModule from './sms'
import contactModule from './contact'

export default createStore({
  modules: {
      signModule: signModule,
      mailModule: mailModule,
      smsModule: smsModule,
      contactModule: contactModule
     
  }
})
