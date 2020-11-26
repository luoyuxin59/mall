<template>
  <div class="param-info" v-if="Object.keys(itemParams).length !== 0">
    <div class="info-rule">
      <table >
        <tr  v-for="(item, idnex) in table" :key="idnex">
          <td class="text">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class="info-set">
      <table>
        <tr v-for="(td, indez) in itemParams.info.set" :key="indez">
          <td class="text">{{td.key}}</td>
          <td class="value">{{td.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    itemParams:{}
  },
  computed: {
    table(){
      return  this.itemParams.info.set || this.itemParams.rule.tables[0] }
  }
}
</script>

<style scoped>
.param-info {
  padding: 20px 10px 20px 10px;
  font-size: 15px;
  border-bottom: 5px solid #f2f5f8
}
.param-info .info-rule table{
  width: 100%;
  border-collapse: collapse;
  border-bottom: 2px solid rgba(100,100,100,.2);;
}
.param-info .info-rule table tr {
    height: 44px;
}

.param-info .info-rule table td, .info-set table td{
    border-bottom: 1px solid rgba(100,100,100,.1);;
}
.info-set table{
  width: 100%;
}
.info-set table tr {
  line-height: 44px;
}
 .text{
  width: 50px;
}
 .value {
  padding-left: 60px;
  color: #eb4868;
}
</style>