<template>
    <section class="container">
        <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo"/>
        <h1 class="title">
            USERS
        </h1>
        <ul class="users">
            <li v-for="(user, index) in users" :key="index" class="user">
                <nuxt-link :to="{ name: 'id', params: { id: index }}">
                    {{ user.name }}
                </nuxt-link>
            </li>
        </ul>
        <div>
            <div>
                <Button @click="changeLocale($event,'en')"><i class="fa fa-home"></i>英文</Button>
                <Button @click="changeLocale($event,'zh')"><i class="fa fa-home"></i>中文</Button>
            </div>
            <div>
                语言切换：{{ $t('home.introduction') }}
                时间插件：{{ $moment("20111031", "YYYYMMDD").fromNow() }}
            </div>
            <Button type="success">test</Button>
        </div>
        <div>
            <div style="padding:10px 0px 10px 0px;">表单验证：</div>
            <div class="login-info" style="width: 50%;margin:0 auto;">
                <Form :model="ruleForm" ref="ruleForm" :label-width="0">
                    <FormItem label="" prop="username" :rules="$filter_rules({required:true})" style="height:45px;">
                        <Input prefix="ios-contact" v-model="ruleForm.username" placeholder="" class="input-height" />
                    </FormItem>
                    <FormItem label="" prop="password" :rules="$filter_rules({required:true,type:'phone'})" style="height:45px;">
                        <Input prefix="ios-contact" v-model="ruleForm.password" placeholder="" class="input-height" />
                    </FormItem>
                </Form>
            </div>
            <div style="text-align: center;width: 50%;margin:0 auto;">
                <Button long  style="height:45px;"  @click="handleSubmit('ruleForm')">
                    <span>login</span>
                </Button>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from '~/plugins/axios'
    import Cookies from 'js-cookie'
    export default {
        async asyncData() {
            let {data} = await axios.get('/api/users')
            return {users: data}
        },
        head() {
            return {
                title: 'Users'
            }
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                active:'home',
                list:'',
                ruleForm:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            changeLocale(obj, lang) {
                let locale = lang ? lang : Cookies.get('user_lang');
                this.$i18n.locale = locale;
                Cookies.set('user_lang', locale);
            },
            handleSubmit (formName) {
                let _self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .title {
        margin: 30px 0;
    }

    .users {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .user {
        margin: 10px 0;
    }
</style>
