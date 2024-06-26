import { getItem } from '@/utils/storage'
export default {
  data () {
    return {
    }
  },
  computed: {
    operator: function () {
      return this.getUser.loginName
    },
    operatorText: function () {
      return `${this.getUser.realName}[${this.getUser.loginName}]`
    },
    operatorToken: function (){
      return getToken()
    },
    getUser: function () {
      let user = getAccessUser()
      if (user != null) {
        return user;
      } else {
        return {};
      }
    },
    opAuthorities () {
      return this.getUser == null ? [] : this.getUser.authorities
    }
  },
  created () {
  },
  mounted () {
  },
  destroyed () {
  },
  methods: {
    hasPermission (permissionStr) {
      return hasPermission(permissionStr)
    },
  }
}
