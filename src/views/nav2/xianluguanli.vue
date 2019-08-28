<template>
  <div>
  <el-row>
  <el-col :offset="1" :span="20"><div class="grid-content bg-purple-dark">
    <el-button>线路管理</el-button>
  <el-button type="primary">车辆绑定路线查询</el-button>
    </div></el-col>
  </el-row>
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark margin"></div></el-col>
</el-row>
  <el-row>
  <el-col :offset="1" :span="20"><div class="grid-content bg-purple-dark">
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="车牌号">
    <el-input v-model="formInline.mark" placeholder="单行输入"></el-input>
  </el-form-item>
  <el-form-item label="线路名称">
    <el-input v-model="formInline.name" placeholder="单行输入"></el-input>
  </el-form-item>
  <el-form-item label="区域类型">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
    </div></el-col>
  </el-row>

  <el-table
    ref="multipleTable"
    border
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="index"
      width="50"
       align='center'>
    </el-table-column>
    <el-table-column
      type="selection"
      width="50"
       align='center'>
    </el-table-column>
    <el-table-column
      label="车牌号"
       align='center'
      >
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="线路名称"
       align='center'
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="所属公司"
       align='center'
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型"
       align='center'
      show-overflow-tooltip>
    </el-table-column>
   <el-table-column label="操作" align='center'>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">复制</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
tableData3: [{
          date: '豫K11411',
          name: '许昌—洛阳',
          address: '客运十公司',
          type:'线路'
        }, {
          date: '豫K11411',
          name: '许昌—洛阳',
          address: '客运十公司',
          type:'线路'
        }, {
          date: '豫K11411',
          name: '许昌—洛阳',
          address: '客运十公司',
          type:'线路'
        }, {
          date: '豫K11411',
          name: '许昌—洛阳',
          address: '客运十公司',
          type:'线路'
        }, {
          date: '豫K11411',
          name: '许昌—洛阳',
          address: '客运十公司',
          type:'线路'
        }, {
          date: '豫K11411',
          name: '许昌—洛阳',
          address: '客运十公司',
          type:'线路'
        }, {
          date: '豫K11411',
          name: '许昌—洛阳',
          address: '客运十公司',
          type:'线路'
        },{},{}],
        multipleSelection: [],
        formInline: {
          mark:'',
          name: '',
          region: ''
        }
      }
  },
  methods: {
     toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      onSubmit() {
        console.log('submit!');
      }

  },
  components: {

  }
}
</script>

<style scoped>
.border{
  border-top:4px solid #ccc;
  margin-bottom: 30px;
  /* line-height: 60px; */
}
.margin{
  margin-bottom: 10px;
  border-top:4px solid #ccc; 
}
</style>
