var v_computed = new Vue({
  el: '#v-computed',
  data: {
    age: 0,
    birthYear: 0,
    isHealthy: ''
  },
  methods: {
    showBirthYear: function() {
      this.birthYear = new Date().getFullYear() - this.age;
      console.log('showBirthYear : ' + this.birthYear);
    },
  /*  addAge: function() {
      console.log('addAge');
      return parseInt(this.age) + 20;
    },
    insuranceDecider: function() {
      console.log('insuranceDecider');
      if (this.isHealthy =='N')
        return 'Yes';
      else
        return 'No';
    }*/
  },
  computed:{
    addAge: function() {
      console.log('addAge');
      return parseInt(this.age) + 20;
    },
    insuranceDecider: function() {
      console.log('insuranceDecider');
      if (this.isHealthy =='N')
        return 'Yes';
      else
        return 'No';
    }
  }
});
