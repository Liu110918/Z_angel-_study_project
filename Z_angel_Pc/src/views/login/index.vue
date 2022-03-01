<script lang="ts" setup>
import { reactive, ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import type { ElForm } from 'element-plus'

const router = useRouter()

// 登录表单
type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>()
// 登录表单 ===> 用户，密码
const ruleForm = reactive({
  name: '',
  password: ''
})

// 登录表单规则
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户密码'))
  } else {
    callback()
  }
}
const rules = reactive({
  name: [
    {
      required: true,
      message: '请输入用户名称',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 5,
      message: '用户名长度3-5位',
      trigger: 'blur'
    }
  ],
  password: [{ required: true, validator: validatePass, trigger: 'blur' }]
})

// 使用全局方法
const { proxy } = getCurrentInstance()

// 登录表单提交
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      let { name, password } = ruleForm
      if (name !== 'admin') return proxy.$message('用户名错误,请重新输入', 'error')
      if (password !== 'admin123') return proxy.$message('密码错误，请重新输入', 'error')
      router.push('/home')
    }
  })
}
</script>

<template>
  <div class="login-content dis_flex ai_center jc_center w_100_p h_100_p">
    <div class="login-bezel border_box">
      <div class="login-title border_box">前端学习管理系统</div>
      <div class="login-form w_100_p">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="w_100_p">
          <el-form-item label="用 户 :" prop="name" text-align="center">
            <el-input v-model="ruleForm.name" placeholder="admin"></el-input>
          </el-form-item>
          <el-form-item label="密 码 :" prop="password">
            <el-input v-model="ruleForm.password" type="password" show-password placeholder="admin123"></el-input>
          </el-form-item>
          <div class="dis_flex jc_center">
            <el-button type="primary" @click="submitForm(ruleFormRef)">登 录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@one_hundred: 100%;
@translucence_white: rgba(255, 255, 255, 0.5);
.login-content {
  background: url('../../assets/login.jpg') no-repeat;
  background-size: @one_hundred;
  .login-bezel {
    width: 25vw;
    height: 15vw;
    border-radius: 10px;
    background-color: @translucence_white;
    padding: 30px;
    .login-title {
      padding: 20px;
      text-align: center;
      font-size: 20px;
    }
  }
}
</style>
