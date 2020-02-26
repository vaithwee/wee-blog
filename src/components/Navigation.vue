<template>
    <div class="nav" height="87px">
        <div class="nav-bg"></div>
        <div class="nav-content">
            <el-row :gutter="20">
                <el-col :span="6">
                    <span class="nav-title">Wee</span><span class="nav-point">.</span>
                </el-col>
                <el-col :offset="6" :span="12" class="nav-menu">
                    <nav-menu/>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    import NavMenu from "./NavMenu";
    export default {
        name: "Navigation",
        components: {
            NavMenu
        }
    }
</script>

<style scoped>
    .nav {
        display: flex;
        width: 100%;
        height: 87px;
        text-align: left;
        padding: 0 20px;
    }

    .nav-bg {
        background-color: #000;
        text-align: left;
        position: fixed;
        opacity: 0.85;
        top: 0;
        left: 0;
        width: 100%;
        height: 87px;
        z-index: 0;
    }

    .nav-content {
        text-align: left;
        z-index: 1;
        width: 100%;
    }

    .nav-title {
        color: white;
        line-height: 87px;
        font-size: 35px;
        font-weight: bold;
    }

    .nav-point {
        padding-left: 3px;
        color: cornflowerblue;
        line-height: 87px;
        font-size: 35px;
        font-weight: bold;
    }

    .nav-menu {
        text-align: right;
        height: 87px;
    }
</style>