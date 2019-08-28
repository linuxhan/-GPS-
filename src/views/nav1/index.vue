<template>
  <div>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
            <p class="tit_">在线车辆数</p>
            <div class="item_">{{zaixian}}</div>
            </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
            <p class="tit_">离线车辆数</p>
            <div class="item_">{{lixian}}</div>
            </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
             <p class="tit_">入网车辆数</p>
            <div class="item_">{{ruwang}}</div>
        </div>
      </el-col>
    </el-row>

     <el-row :gutter="20">
      <el-col :span="7">
        <div class="grid-content bg-purple">
            <p class="tit_"> 车辆综合信息</p>
            <div id="pie" :style="{ height: '250px'}"></div>
            </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
             <p class="tit_">车辆分布信息</p>
            <div class="height_"></div>
            </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
            <p class="tit_"> 企业公告</p>
            <div class="height_" @click="location">欢迎使用中中北斗星定位服务！</div>
            </div>
      </el-col>
    </el-row>

<el-row :gutter="20">
      <el-col :span="11">
        <div class="grid-content bg-purple">
            <p class="tit_">车辆报警情况</p>
            <div id="bargraph" :style="{width:'570px',height: '250px'}"></div>
            </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple">
             <p class="tit_">报警统计</p>
            <div class="over" v-for="(item,id) in tableData" :key="id">
                <p class="lan">{{item.data}}</p><p>{{item.items}}</p>
            </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
        zaixian:'00012',//在线车辆数
        lixian:'00021',//离线车辆数
        ruwang:'00033',//入网车辆数
        tableData:[
            {
                data:"车辆报警总数",
                items:"6146"
            },{
                data:"超速报警",
                items:"0"
            },{
                data:"紧急报警",
                items:"0"
            },{
                data:"疲劳报警",
                items:"2034"
            }
        ]
    };
  },
  mounted(){
    this.pie();
    this.bargraph();
  },
  methods: {
      pie(){//在线离线车辆饼图

           // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('pie'));
        // 绘制图表
         myChart.setOption({
    title : {
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        // data: ['离线车辆','在线车辆']
    },
    series : [
        {
            name: '车辆综合信息',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'离线车辆'},
                {value:1548, name:'在线车辆'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
});
},
        location(){
            
            this.$alert('欢迎使用中中北斗星定位服务！', '定位服务', {
          confirmButtonText: '确定',
        //   callback: action => {
        //     this.$message({
        //       type: 'info',
        //       message: `action: ${ action }`
        //     });
        //   }
        });
        },
    bargraph(){
         let Chart = this.$echarts.init(document.getElementById('bargraph'));
         Chart.setOption( {
    xAxis: {
        type: 'category',
        data: ['禹州公司', '豪华汽车站', '客运四公司']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [200, 100, 100],
        type: 'bar'
    }]
})
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.grid-content{
 border: 1px solid #ccc;
}
    .bg-purple-dark {
  
  }
  .bg-purple {
    // background: #d3dce6;
    //  height:400px;
  }
  .el-row {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .tit_{
      height:40px;
      font-size: 20px;
      text-align: center;
      line-height: 40px;
      color: #ffffff;
      background: #95a0a6;
  }
  .item_{
      height:60px;
      line-height: 60px;
      text-align: center;
      font-size:20px;
    //   background: #fff;
  }
  #pie{
      padding: 30px;
      overflow: hidden;
  }
  .height_{
      height:310px;
      font-size: 16px;
      line-height: 60px;
  }
  .over{
      overflow: hidden;
      p{   
          font-size: 18px;
          width:49.44%;
          float: left;
          line-height: 60px;
          text-align: center;
          border:1px solid #ccc;
      }
  }
  #bargraph{
      padding: 20px;
  }
  .lan{
      background: #c6ddea;
  }
</style>
